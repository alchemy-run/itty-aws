import { build, type Metafile } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

type TargetSpec = {
  service: string;
  commands: string[];
};

type Artifact = {
  bytes: number;
  gzipBytes: number;
  outfile: string;
  metafile: string;
};

type LibName = "itty-aws" | "aws-sdk-v3";

type CompareReport = {
  service: string;
  results: Record<LibName, { raw: Artifact; min: Artifact } | null>;
};

const ROOT = process.cwd();
const OUTDIR = path.join(ROOT, "dist", "bundle-compare");
const ENTRYDIR = path.join(OUTDIR, "entries");
const TARGETS_PATH = path.join(
  ROOT,
  "scripts",
  "fixtures",
  "bundle-compare-targets.json",
);

// Static fake credentials (no provider chains)
const STATIC_CREDS = {
  accessKeyId: "AKIAIOSFAKE0123456789",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYFAKEKEY",
  sessionToken: "IQoJb3JpZ2luX2VjEOr//////////wEaDmV1LXdlc3QtMiJIMEYCIQDGFAKE",
} as const;

function ensureDirs() {
  fs.mkdirSync(OUTDIR, { recursive: true });
  fs.mkdirSync(ENTRYDIR, { recursive: true });
}

function loadTargets(): TargetSpec[] {
  if (!fs.existsSync(TARGETS_PATH)) {
    throw new Error(
      `Missing targets file at ${TARGETS_PATH}. Run with --write-targets to create a default set.`,
    );
  }
  const raw = fs.readFileSync(TARGETS_PATH, "utf8");
  const parsed = JSON.parse(raw) as { services: TargetSpec[] };
  return parsed.services;
}

function writeDefaultTargets() {
  if (fs.existsSync(TARGETS_PATH)) {
    console.log(`Targets already exist at ${TARGETS_PATH}`);
    return;
  }
  const defaults = {
    services: [
      { service: "s3", commands: ["GetObject", "PutObject"] },
      { service: "sqs", commands: ["SendMessage", "ReceiveMessage"] },
      { service: "dynamodb", commands: ["GetItem", "PutItem", "Query"] },
      { service: "lambda", commands: ["Invoke"] },
      { service: "sts", commands: ["GetCallerIdentity"] },
    ],
  } satisfies { services: TargetSpec[] };
  fs.mkdirSync(path.dirname(TARGETS_PATH), { recursive: true });
  fs.writeFileSync(TARGETS_PATH, `${JSON.stringify(defaults, null, 2)}\n`);
  console.log(`Wrote default targets to ${TARGETS_PATH}`);
}

function genIttyEntry(targets: TargetSpec[], importBase: string): string {
  const imports = new Set<string>();
  const initLines: string[] = [];
  for (const { service } of targets) {
    // Try to detect the exported client name from the service index
    const indexPath = path.join(ROOT, "src", "services", service, "index.ts");
    const src = fs.readFileSync(indexPath, "utf8");
    const m = src.match(
      /export\s+const\s+(\w+)\s*=\s*class\s+extends\s+AWSServiceClient/,
    );
    const className = m?.[1]
      ? m[1]
      : service
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join("");
    // Import from local src to ensure identical build settings
    imports.add(
      `import { ${className} } from "${importBase}/${service}/index.ts";`,
    );
    initLines.push(
      `new ${className}({ region: "us-east-1", credentials: CREDS })`,
    );
  }
  return `// Auto-generated entry for itty-aws bundle comparison
const CREDS = ${JSON.stringify(STATIC_CREDS)};
${Array.from(imports).join("\n")}
export const keep = [${initLines.join(", ")}];
`;
}

function genAwsSdkEntry(targets: TargetSpec[]): string {
  // Build import lines and usage lines per service
  const importLines: string[] = [];
  const initLines: string[] = [];
  const usageLines: string[] = [];
  const clientNameMap: Record<string, string> = {
    s3: "S3Client",
    sqs: "SQSClient",
    dynamodb: "DynamoDBClient",
    lambda: "LambdaClient",
    sts: "STSClient",
  };
  for (const { service, commands } of targets) {
    const pkg = `@aws-sdk/client-${service}`;
    const clientName =
      clientNameMap[service] ??
      `${service
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("")}Client`;
    const commandNames = commands.map((c) => `${c}Command`);
    importLines.push(
      `import { ${clientName}, ${commandNames.join(", ")} } from "${pkg}";`,
    );
    const clientVar = `${service.replace(/[-]/g, "")}Client`;
    initLines.push(
      `const ${clientVar} = new ${clientName}({ region: "us-east-1", credentials: CREDS, retryMode: "standard", maxAttempts: 3 });`,
    );
    // Create trivial command instances so they are included in bundle
    for (const cmd of commandNames) {
      usageLines.push(`new ${cmd}({})`);
    }
    usageLines.push(clientVar);
  }
  return `// Auto-generated entry for AWS SDK v3 bundle comparison
const CREDS = ${JSON.stringify(STATIC_CREDS)};
${importLines.join("\n")}
${initLines.join("\n")} 
export const keep = [${usageLines.join(", ")}];
`;
}

async function buildOnce(opts: {
  name: LibName;
  entry: string;
  outfile: string;
  minify: boolean;
  external?: string[];
}): Promise<{ bytes: number; gzipBytes: number; metafilePath: string } | null> {
  try {
    const res = await build({
      entryPoints: [opts.entry],
      outfile: opts.outfile,
      bundle: true,
      format: "esm",
      target: "node18",
      platform: "node",
      mainFields: ["module", "main"],
      treeShaking: true,
      minify: opts.minify,
      metafile: true,
      external: opts.external,
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      logLevel: "silent",
    });
    const code = fs.readFileSync(opts.outfile);
    const gzip = gzipSync(code);
    const metafilePath = opts.outfile.replace(/\.js$/, ".meta.json");
    fs.writeFileSync(
      metafilePath,
      JSON.stringify(res.metafile as Metafile, null, 2),
    );
    return { bytes: code.length, gzipBytes: gzip.length, metafilePath };
  } catch (err) {
    console.error(
      `Failed to build ${opts.name} (${opts.minify ? "min" : "raw"}):`,
    );
    console.error(err);
    return null;
  }
}

async function run() {
  const writeTargets = process.argv.includes("--write-targets");
  if (writeTargets) {
    writeDefaultTargets();
    return;
  }

  ensureDirs();
  const targets = loadTargets();
  const requiredAwsPkgs = Array.from(
    new Set(targets.map((t) => `@aws-sdk/client-${t.service}`)),
  );
  const missing = requiredAwsPkgs.filter(
    (p) => !fs.existsSync(path.join(ROOT, "node_modules", ...p.split("/"))),
  );
  if (missing.length) {
    console.warn(
      `\n⚠️  Missing AWS SDK clients: ${missing.join(", ")}.\n   Install with: bun add ${missing.join(" ")}\n`,
    );
  }

  // Build per service and generate report
  const importBase = path
    .relative(ENTRYDIR, path.join(ROOT, "src", "services"))
    .replace(/\\/g, "/");

  const results: CompareReport[] = [];
  const toKB = (n: number) => `${(n / 1024).toFixed(2)} KB`;
  const toB = (n: number) => `${n} B`;

  for (const spec of targets) {
    const serviceDir = path.join(OUTDIR, spec.service);
    fs.mkdirSync(serviceDir, { recursive: true });

    const ittyEntry = path.join(ENTRYDIR, `itty-aws.${spec.service}.entry.ts`);
    const awsEntry = path.join(ENTRYDIR, `aws-sdk-v3.${spec.service}.entry.ts`);
    const ittyEntryContent = genIttyEntry([spec], importBase);
    const awsEntryContent = genAwsSdkEntry([spec]);
    // Write entries for building
    fs.writeFileSync(ittyEntry, ittyEntryContent);
    fs.writeFileSync(awsEntry, awsEntryContent);
    // Also write copies next to the built artifacts for inspection
    fs.writeFileSync(
      path.join(serviceDir, "itty-aws.entry.ts"),
      ittyEntryContent,
    );
    fs.writeFileSync(
      path.join(serviceDir, "aws-sdk-v3.entry.ts"),
      awsEntryContent,
    );

    const ittyRawOut = path.join(serviceDir, "itty-aws.raw.js");
    const ittyMinOut = path.join(serviceDir, "itty-aws.min.js");
    const awsRawOut = path.join(serviceDir, "aws-sdk-v3.raw.js");
    const awsMinOut = path.join(serviceDir, "aws-sdk-v3.min.js");

    const ittyRaw = await buildOnce({
      name: "itty-aws",
      entry: ittyEntry,
      outfile: ittyRawOut,
      minify: false,
      external: ["effect"],
    });
    const ittyMin = await buildOnce({
      name: "itty-aws",
      entry: ittyEntry,
      outfile: ittyMinOut,
      minify: true,
      external: ["effect"],
    });

    const awsRaw = await buildOnce({
      name: "aws-sdk-v3",
      entry: awsEntry,
      outfile: awsRawOut,
      minify: false,
    });
    const awsMin = await buildOnce({
      name: "aws-sdk-v3",
      entry: awsEntry,
      outfile: awsMinOut,
      minify: true,
    });

    const ittyRes =
      ittyRaw && ittyMin
        ? {
            raw: {
              bytes: ittyRaw.bytes,
              gzipBytes: ittyRaw.gzipBytes,
              outfile: ittyRawOut,
              metafile: ittyRaw.metafilePath,
            },
            min: {
              bytes: ittyMin.bytes,
              gzipBytes: ittyMin.gzipBytes,
              outfile: ittyMinOut,
              metafile: ittyMin.metafilePath,
            },
          }
        : null;
    const awsRes =
      awsRaw && awsMin
        ? {
            raw: {
              bytes: awsRaw.bytes,
              gzipBytes: awsRaw.gzipBytes,
              outfile: awsRawOut,
              metafile: awsRaw.metafilePath,
            },
            min: {
              bytes: awsMin.bytes,
              gzipBytes: awsMin.gzipBytes,
              outfile: awsMinOut,
              metafile: awsMin.metafilePath,
            },
          }
        : null;

    if (ittyRes && awsRes) {
      console.log(`\n== ${spec.service} ==`);
      console.log(
        `itty-aws: raw ${toKB(ittyRes.raw.bytes)} (${toB(ittyRes.raw.bytes)}), gzip ${toKB(ittyRes.raw.gzipBytes)}; min ${toKB(ittyRes.min.bytes)}, gzip ${toKB(ittyRes.min.gzipBytes)}`,
      );
      console.log(
        `aws-sdk-v3: raw ${toKB(awsRes.raw.bytes)} (${toB(awsRes.raw.bytes)}), gzip ${toKB(awsRes.raw.gzipBytes)}; min ${toKB(awsRes.min.bytes)}, gzip ${toKB(awsRes.min.gzipBytes)}`,
      );
    }

    results.push({
      service: spec.service,
      results: { "itty-aws": ittyRes, "aws-sdk-v3": awsRes },
    });
  }

  // Emit Markdown report
  const lines: string[] = [];
  lines.push(
    "| Service | itty-aws (min KB) | itty-aws (gzip KB) | aws-sdk-v3 (min KB) | aws-sdk-v3 (gzip KB) |",
  );
  lines.push("|---|---:|---:|---:|---:|");
  for (const r of results) {
    const itty = r.results["itty-aws"];
    const aws = r.results["aws-sdk-v3"];
    if (!itty || !aws) continue;
    lines.push(
      `| ${r.service} | ${(itty.min.bytes / 1024).toFixed(2)} | ${(itty.min.gzipBytes / 1024).toFixed(2)} | ${(aws.min.bytes / 1024).toFixed(2)} | ${(aws.min.gzipBytes / 1024).toFixed(2)} |`,
    );
  }

  const reportPath = path.join(OUTDIR, "report.md");
  const header =
    "# Bundle Size Comparison (per service)\n\n" +
    "- Target: Node 18, ESM\n" +
    "- Minification: on; tree-shaking; NODE_ENV=production\n" +
    "- itty-aws: 'effect' is external\n\n";
  fs.writeFileSync(reportPath, `${header + lines.join("\n")}\n`);
  console.log(`\nWrote Markdown report to ${path.relative(ROOT, reportPath)}`);
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
