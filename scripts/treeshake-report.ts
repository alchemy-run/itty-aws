import { build } from "esbuild";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

type Scenario = {
  name: string;
  entry: string;
};

const scenarios: Scenario[] = [
  { name: "sqs", entry: "scripts/fixtures/sqs.ts" },
  { name: "ec2", entry: "scripts/fixtures/ec2.ts" },
  { name: "iam", entry: "scripts/fixtures/iam.ts" },
  { name: "lambda", entry: "scripts/fixtures/lambda.ts" },
  { name: "dynamodb", entry: "scripts/fixtures/dynamodb.ts" },
];

async function run() {
  // Ensure library is built to dist/ first to avoid TS "type" edges in bundling
  if (!existsSync("dist/index.js")) {
    console.log("Building library to dist/ ...");
    execSync("bun run build", { stdio: "inherit" });
  }

  const rootOut = "dist/treeshake";
  try {
    rmSync(rootOut, { recursive: true, force: true });
  } catch {}
  mkdirSync(rootOut, { recursive: true });

  const results: Array<{
    name: string;
    totalKB: string;
  }> = [];

  for (const s of scenarios) {
    const outdir = join(rootOut, s.name);
    mkdirSync(outdir, { recursive: true });

    const metafilePath = join(outdir, `${s.name}-meta.json`);

    const res = await build({
      entryPoints: [s.entry],
      bundle: true,
      format: "esm",
      target: "es2020",
      splitting: true,
      platform: "neutral",
      outdir,
      metafile: true,
      minify: true,
      treeShaking: true,
      logLevel: "silent",
      external: [
        "@aws-sdk/*",
        "effect",
        "aws4fetch",
        "fast-xml-parser",
        "strnum",
      ],
    });

    if (!res.metafile) throw new Error("Esbuild build produced no metafile");
    writeFileSync(metafilePath, JSON.stringify(res.metafile, null, 2));

    // Sum sizes and inspect inputs to find which modules were included
    const outputs = Object.keys(res.metafile.outputs);
    let totalBytes = 0;
    const files: string[] = [];

    for (const out of outputs) {
      const metaOut = res.metafile.outputs[out];
      totalBytes += metaOut.bytes;
      files.push(out);
      const inputs = Object.keys(metaOut.inputs || {});
    }

    results.push({
      name: s.name,
      totalKB: `${(totalBytes / 1024).toFixed(1)} KB`,
    });
  }

  // Pretty print summary
  const lines: string[] = [];
  lines.push("Tree-shake Report\n");
  for (const r of results) {
    lines.push(`- ${r.name}: ${r.totalKB}`);
  }

  const reportPath = join("dist/treeshake", "report.txt");
  mkdirSync(dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, lines.join("\n"));
  console.log(lines.join("\n"));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
