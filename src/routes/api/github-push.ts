import { createFileRoute } from "@tanstack/react-router";
import { promises as fs } from "fs";
import path from "path";

const OWNER = "ertanturgut";
const REPO = "rotafocus-website";
const BRANCH = "main";

const EXCLUDE_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  ".output",
  ".lovable",
  ".workspace",
  ".vinxi",
]);

async function walk(dir: string, base: string, out: string[]) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, base, out);
    else if (e.isFile()) out.push(path.relative(base, full));
  }
}

async function gh(apiKey: string, connKey: string, method: string, p: string, body?: unknown) {
  const res = await fetch(`https://connector-gateway.lovable.dev/github${p}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${apiKey}`,
      "X-Connection-Api-Key": connKey,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`GitHub ${method} ${p} -> ${res.status}: ${text}`);
  return text ? JSON.parse(text) : {};
}

export const Route = createFileRoute("/api/github-push")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const apiKey = process.env["LOVABLE_API_KEY"];
          const connKey = process.env["GITHUB_API_KEY"];
          if (!apiKey || !connKey) throw new Error("Missing gateway keys");

          const root = process.cwd();
          const files: string[] = [];
          await walk(root, root, files);

          // 1. base ref + commit
          const ref = await gh(apiKey, connKey, "GET", `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
          const baseCommitSha = ref.object.sha;
          const baseCommit = await gh(apiKey, connKey, "GET", `/repos/${OWNER}/${REPO}/git/commits/${baseCommitSha}`);
          const baseTreeSha = baseCommit.tree.sha;

          // 2. blobs for binary files
          const isBinary = (f: string) => /\.(png|jpe?g|gif|webp|ico|woff2?)$/.test(f);
          const tree: any[] = [];
          for (const f of files) {
            const buf = await fs.readFile(path.join(root, f));
            if (isBinary(f)) {
              const blob = await gh(apiKey, connKey, "POST", `/repos/${OWNER}/${REPO}/git/blobs`, {
                content: buf.toString("base64"),
                encoding: "base64",
              });
              tree.push({ path: f, mode: "100644", type: "blob", sha: blob.sha });
            } else {
              tree.push({ path: f, mode: "100644", type: "blob", content: buf.toString("utf8") });
            }
          }

          // 3. tree (base_tree keeps README.md)
          const newTree = await gh(apiKey, connKey, "POST", `/repos/${OWNER}/${REPO}/git/trees`, {
            base_tree: baseTreeSha,
            tree,
          });

          // 4. commit
          const commit = await gh(apiKey, connKey, "POST", `/repos/${OWNER}/${REPO}/git/commits`, {
            message: "Sync full Lovable project source (RotaFocus)",
            tree: newTree.sha,
            parents: [baseCommitSha],
          });

          // 5. update ref
          await gh(apiKey, connKey, "PATCH", `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
            sha: commit.sha,
          });

          return Response.json({ ok: true, commit: commit.sha, files: files.length });
        } catch (err: any) {
          return Response.json({ ok: false, error: String(err?.message || err) }, { status: 500 });
        }
      },
    },
  },
});
