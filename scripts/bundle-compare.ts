import { build, type Metafile } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

type TargetSpec = {
  service: string;
  className: string;
  commands: string[];
};

type ServiceInfo = {
  service: string;
  className: string;
  operations: string[];
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
const ALL_SERVICES_PATH = path.join(
  ROOT,
  "scripts",
  "fixtures",
  "all-services-operations.json",
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

function loadAllServices(): ServiceInfo[] {
  if (!fs.existsSync(ALL_SERVICES_PATH)) {
    throw new Error(
      `Missing all-services file at ${ALL_SERVICES_PATH}. Run 'bun scripts/extract-service-operations.ts' to generate it.`,
    );
  }
  const raw = fs.readFileSync(ALL_SERVICES_PATH, "utf8");
  const parsed = JSON.parse(raw) as { services: ServiceInfo[] };
  return parsed.services;
}

// Build targets list dynamically for all services (up to 3 ops each)
function buildAllServiceTargets(): TargetSpec[] {
  const all = loadAllServices();
  return all.map(({ service, className, operations }) => ({
    service,
    className,
    commands: operations.slice(0, Math.min(3, operations.length)),
  }));
}

function genIttyEntry(targets: TargetSpec[], importBase: string): string {
  const imports = new Set<string>();
  const initLines: string[] = [];
  for (const { service, className } of targets) {
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

function genAwsSdkEntry(targets: TargetSpec[]): {
  code: string;
  hasImports: boolean;
} {
  // Build import lines and usage lines per service
  const importLines: string[] = [];
  const initLines: string[] = [];
  const usageLines: string[] = [];

  for (const { service, commands, className } of targets) {
    const pkg = `@aws-sdk/client-${service}`;
    const clientName = `${className}Client`;
    const commandNames = commands.map((c) => {
      // Convert camelCase to PascalCase for command names
      return `${c.charAt(0).toUpperCase() + c.slice(1)}Command`;
    });

    try {
      // Check if the AWS SDK package exists before including it
      const pkgPath = path.join(ROOT, "node_modules", ...pkg.split("/"));
      if (fs.existsSync(pkgPath)) {
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
    } catch (err) {
      console.warn(`Warning: Could not process AWS SDK package ${pkg}: ${err}`);
    }
  }

  const hasImports = importLines.length > 0;
  if (!hasImports) {
    return {
      code: "// No AWS SDK packages found for these targets\nexport const keep = [];\n",
      hasImports,
    };
  }

  const code = `// Auto-generated entry for AWS SDK v3 bundle comparison
const CREDS = ${JSON.stringify(STATIC_CREDS)};
${importLines.join("\n")}
${initLines.join("\n")} 
export const keep = [${usageLines.join(", ")}];
`;
  return { code, hasImports };
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

// No file I/O for targets; always use all services derived above

function showHelp() {
  console.log(`
Bundle Size Comparison Tool for itty-aws

Usage: bun scripts/bundle-compare.ts [--help]

Behavior:
  - Always runs across all available AWS services
  - Selects up to 3 operations per service for bundling
  - Compares against installed AWS SDK v3 clients (skips missing ones)

Files generated:
  - dist/bundle-compare/report.md                     Markdown comparison report
  - scripts/fixtures/all-services-operations.json     All available services and operations

Examples:
  bun scripts/bundle-compare.ts                    # Run comparison for all services
`);
}

async function run() {
  const showHelpFlag =
    process.argv.includes("--help") || process.argv.includes("-h");

  if (showHelpFlag) {
    showHelp();
    return;
  }

  ensureDirs();
  const targets = buildAllServiceTargets();
  const requiredAwsPkgs = Array.from(
    new Set(targets.map((t) => `@aws-sdk/client-${t.service}`)),
  );
  const existing = requiredAwsPkgs.filter((p) =>
    fs.existsSync(path.join(ROOT, "node_modules", ...p.split("/"))),
  );
  const missing = requiredAwsPkgs.filter(
    (p) => !fs.existsSync(path.join(ROOT, "node_modules", ...p.split("/"))),
  );

  console.log(
    `Building ${targets.length} services (${existing.length} AWS SDK packages available, ${missing.length} missing)`,
  );

  if (missing.length > 0 && missing.length < 10) {
    console.warn(
      `\n⚠️  Missing AWS SDK clients: ${missing.join(", ")}.\n   Install with: bun add ${missing.join(" ")}\n`,
    );
  } else if (missing.length >= 10) {
    console.warn(
      `\n⚠️  Missing ${missing.length} AWS SDK clients.\n   This is expected when testing all services. Only installed packages will be compared.\n`,
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
    const awsEntryData = genAwsSdkEntry([spec]);
    // Write entries for building
    fs.writeFileSync(ittyEntry, ittyEntryContent);
    fs.writeFileSync(awsEntry, awsEntryData.code);
    // Also write copies next to the built artifacts for inspection
    fs.writeFileSync(
      path.join(serviceDir, "itty-aws.entry.ts"),
      ittyEntryContent,
    );
    fs.writeFileSync(
      path.join(serviceDir, "aws-sdk-v3.entry.ts"),
      awsEntryData.code,
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
      //external: ["effect"],
    });
    const ittyMin = await buildOnce({
      name: "itty-aws",
      entry: ittyEntry,
      outfile: ittyMinOut,
      minify: true,
      //external: ["effect"],
    });

    let awsRaw: Awaited<ReturnType<typeof buildOnce>> | null = null;
    let awsMin: Awaited<ReturnType<typeof buildOnce>> | null = null;
    if (awsEntryData.hasImports) {
      awsRaw = await buildOnce({
        name: "aws-sdk-v3",
        entry: awsEntry,
        outfile: awsRawOut,
        minify: false,
      });
      awsMin = await buildOnce({
        name: "aws-sdk-v3",
        entry: awsEntry,
        outfile: awsMinOut,
        minify: true,
      });
    } else {
      console.warn(
        `Skipping aws-sdk-v3 for '${spec.service}' (client package not installed)`,
      );
    }

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
    "- itty-aws: 'effect' is external\n" +
    `- Services tested: ${results.filter((r) => r.results["itty-aws"] && r.results["aws-sdk-v3"]).length}\n\n`;
  fs.writeFileSync(reportPath, `${header + lines.join("\n")}\n`);
  console.log(`\nWrote Markdown report to ${path.relative(ROOT, reportPath)}`);
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
