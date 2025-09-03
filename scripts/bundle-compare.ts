import { build, type Metafile } from "esbuild";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { cpus } from "node:os";
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

type LibName = "itty-aws" | "itty-aws-no-effect" | "aws-sdk-v3";

type CompareReport = {
  service: string;
  className: string;
  results: Record<LibName, Artifact | null>;
};

const ROOT = process.cwd();
const OUTDIR = path.join(ROOT, "dist", "bundle-compare");
const ENTRYDIR = path.join(OUTDIR, "entries");
const VENDORDIR = path.join(OUTDIR, "aws-sdk-vendor");
const VENDOR_NODE_MODULES = path.join(VENDORDIR, "node_modules");

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

function resolveAwsPackagePath(pkg: string): string | null {
  const vendorPath = path.join(VENDOR_NODE_MODULES, ...pkg.split("/"));
  if (fs.existsSync(vendorPath)) return vendorPath;
  const rootPath = path.join(ROOT, "node_modules", ...pkg.split("/"));
  if (fs.existsSync(rootPath)) return rootPath;
  return null;
}

function extractOperationsFromTypesFile(
  typesPath: string,
): { className: string; operations: string[] } | null {
  if (!fs.existsSync(typesPath)) {
    return null;
  }

  const content = fs.readFileSync(typesPath, "utf8");

  // Find the main service class declaration
  const classMatch = content.match(
    /export declare class (\w+) extends AWSServiceClient \{([\s\S]*?)\n\}/,
  );
  if (!classMatch) {
    return null;
  }

  const className = classMatch[1];
  const classBody = classMatch[2];

  // Extract method names (operations)
  const methodMatches = classBody.matchAll(/^\s+(\w+)\(/gm);
  const operations = Array.from(methodMatches, (match) => match[1]);

  return { className, operations };
}

function getAllServices(): ServiceInfo[] {
  const servicesDir = path.join(ROOT, "src", "services");
  const services: ServiceInfo[] = [];

  const serviceDirs = fs
    .readdirSync(servicesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  for (const serviceDir of serviceDirs) {
    const typesPath = path.join(servicesDir, serviceDir, "types.ts");
    const extracted = extractOperationsFromTypesFile(typesPath);

    if (extracted && extracted.operations.length > 0) {
      services.push({
        service: serviceDir,
        className: extracted.className,
        operations: extracted.operations,
      });
    }
  }

  return services;
}

// Build targets list dynamically for all services (up to 3 ops each)
function buildAllServiceTargets(): TargetSpec[] {
  const all = getAllServices();
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
      // Check if the AWS SDK package exists before including it (vendor or root)
      const pkgPath = resolveAwsPackagePath(pkg);
      if (pkgPath) {
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

function ensureVendorProject(pkgs: string[], install: boolean) {
  fs.mkdirSync(VENDORDIR, { recursive: true });
  const manifestPath = path.join(VENDORDIR, "package.json");
  const manifest = {
    name: "aws-sdk-vendor",
    private: true,
    type: "module",
    dependencies: Object.fromEntries(pkgs.map((p) => [p, "^3"])),
  } as const;
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  if (install) {
    console.log(
      `Installing ${pkgs.length} AWS SDK client packages into vendor dir...`,
    );
    try {
      const res = spawnSync("bun", ["install"], {
        cwd: VENDORDIR,
        stdio: "inherit",
      });
      if (res.status !== 0) {
        console.warn(
          `bun install failed in vendor dir (exit ${res.status}). You can run it manually in ${VENDORDIR}.`,
        );
      }
    } catch (_e) {
      console.warn(
        `Failed to spawn bun install for vendor dir. Run manually in ${VENDORDIR}.`,
      );
    }
  }
}

async function buildOnce(opts: {
  name: LibName;
  entry: string;
  outfile: string;
  minify: boolean;
  external?: string[];
  quiet?: boolean;
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
      nodePaths: [VENDOR_NODE_MODULES],
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
    if (!opts.quiet) {
      console.error(
        `Failed to build ${opts.name} (${opts.minify ? "min" : "raw"}):`,
      );
      console.error(err);
    }
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
  - Installs AWS SDK v3 clients into a local vendor dir (dist/bundle-compare/aws-sdk-vendor) and compares against them

Files generated:
  - dist/bundle-compare/report.md                     Markdown comparison report

Examples:
  bun scripts/bundle-compare.ts                    # Install vendor clients and run comparison for all services
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
  // Ensure vendor project exists and install if needed
  const needsInstall = !fs.existsSync(
    path.join(VENDOR_NODE_MODULES, "@aws-sdk"),
  );
  ensureVendorProject(requiredAwsPkgs, needsInstall);

  // Intentionally quiet: no summary of missing/available packages printed

  // Build per service and generate report
  const importBase = path
    .relative(ENTRYDIR, path.join(ROOT, "src", "services"))
    .replace(/\\/g, "/");

  const results: CompareReport[] = new Array(targets.length);
  const awsFailed: string[] = [];
  const ittyFailed: string[] = [];
  const ittyNoEffectFailed: string[] = [];

  const concurrency = Math.max(2, Math.min(8, cpus().length));
  let next = 0;

  async function worker() {
    while (true) {
      const i = next++;
      if (i >= targets.length) break;
      const spec = targets[i]!;

      const serviceDir = path.join(OUTDIR, spec.service);
      fs.mkdirSync(serviceDir, { recursive: true });

      const ittyEntry = path.join(
        ENTRYDIR,
        `itty-aws.${spec.service}.entry.ts`,
      );
      const awsEntry = path.join(
        ENTRYDIR,
        `aws-sdk-v3.${spec.service}.entry.ts`,
      );
      const ittyEntryContent = genIttyEntry([spec], importBase);
      const awsEntryData = genAwsSdkEntry([spec]);
      fs.writeFileSync(ittyEntry, ittyEntryContent);
      fs.writeFileSync(awsEntry, awsEntryData.code);
      fs.writeFileSync(
        path.join(serviceDir, "itty-aws.entry.ts"),
        ittyEntryContent,
      );
      fs.writeFileSync(
        path.join(serviceDir, "aws-sdk-v3.entry.ts"),
        awsEntryData.code,
      );

      const ittyMinOut = path.join(serviceDir, "itty-aws.min.js");
      const ittyMinNoEffectOut = path.join(
        serviceDir,
        "itty-aws.no-effect.min.js",
      );
      const awsMinOut = path.join(serviceDir, "aws-sdk-v3.min.js");

      const ittyMin = await buildOnce({
        name: "itty-aws",
        entry: ittyEntry,
        outfile: ittyMinOut,
        minify: true,
        quiet: true,
      });
      const ittyMinNoEffect = await buildOnce({
        name: "itty-aws-no-effect",
        entry: ittyEntry,
        outfile: ittyMinNoEffectOut,
        minify: true,
        external: ["effect"],
        quiet: true,
      });

      let awsMin: Awaited<ReturnType<typeof buildOnce>> | null = null;
      if (awsEntryData.hasImports) {
        awsMin = await buildOnce({
          name: "aws-sdk-v3",
          entry: awsEntry,
          outfile: awsMinOut,
          minify: true,
          quiet: true,
        });
      }

      const ittyRes = ittyMin
        ? {
            bytes: ittyMin.bytes,
            gzipBytes: ittyMin.gzipBytes,
            outfile: ittyMinOut,
            metafile: ittyMin.metafilePath,
          }
        : null;
      if (!ittyRes) ittyFailed.push(spec.service);

      const ittyNoEffectRes = ittyMinNoEffect
        ? {
            bytes: ittyMinNoEffect.bytes,
            gzipBytes: ittyMinNoEffect.gzipBytes,
            outfile: ittyMinNoEffectOut,
            metafile: ittyMinNoEffect.metafilePath,
          }
        : null;
      if (!ittyNoEffectRes) ittyNoEffectFailed.push(spec.service);

      const awsRes = awsMin
        ? {
            bytes: awsMin.bytes,
            gzipBytes: awsMin.gzipBytes,
            outfile: awsMinOut,
            metafile: awsMin.metafilePath,
          }
        : null;
      if (!awsRes) awsFailed.push(spec.service);

      results[i] = {
        service: spec.service,
        className: spec.className,
        results: {
          "itty-aws": ittyRes,
          "itty-aws-no-effect": ittyNoEffectRes,
          "aws-sdk-v3": awsRes,
        },
      };
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  // Emit Markdown report
  const lines: string[] = [];
  const toKBint = (n: number) => Math.round(n / 1024);
  const vs = (a: number, b: number) => {
    if (!b || b === 0) return "N/A";
    const pct = Math.round(((a - b) / b) * 100);
    const arrow = pct < 0 ? "▼" : pct > 0 ? "▲" : "▶";
    const sign = pct > 0 ? "+" : "";
    const color = pct < 0 ? "green" : pct > 0 ? "red" : "";
    const text = `${arrow} ${sign}${pct}%`;
    return color ? `<span style="color: ${color};">${text}</span>` : text;
  };

  // Single table using minified gzip sizes
  lines.push(
    "| Service | itty-aws<br/>(KB) | vs<br/>aws-sdk-v3 | itty-aws<br/>(no Effect, KB) | vs<br/>aws-sdk-v3 | aws-sdk-v3<br/>(KB) |",
  );
  lines.push(
    "|---------|--------------:|--------:|--------------------------:|--------:|----------------:|",
  );
  for (const r of results) {
    const itty = r.results["itty-aws"];
    const ittyNoEff = r.results["itty-aws-no-effect"];
    const aws = r.results["aws-sdk-v3"];
    if (!aws || !itty || !ittyNoEff) continue;
    lines.push(
      `| ${r.className} | ${toKBint(itty.gzipBytes)} | ${vs(itty.gzipBytes, aws.gzipBytes)} | ${toKBint(ittyNoEff.gzipBytes)} | ${vs(ittyNoEff.gzipBytes, aws.gzipBytes)} | ${toKBint(aws.gzipBytes)} |`,
    );
  }

  const reportPath = path.join(OUTDIR, "report.md");
  const header =
    "# Bundle Size Comparison (per service)\n\n" +
    "- Target: Node 18, ESM\n" +
    "- Minification: on; tree-shaking; NODE_ENV=production\n" +
    `- Services tested: ${results.filter((r) => r.results["itty-aws"] && r.results["aws-sdk-v3"]).length}\n` +
    (ittyFailed.length ? `- itty-aws failures: ${ittyFailed.length}\n` : "") +
    (ittyNoEffectFailed.length
      ? `- itty-aws (no Effect) failures: ${ittyNoEffectFailed.length}\n`
      : "") +
    (awsFailed.length ? `- aws-sdk-v3 failures: ${awsFailed.length}\n` : "") +
    "\n";
  fs.writeFileSync(reportPath, `${header + lines.join("\n")}\n`);
  // Only print final outputs (path + failures)
  console.log(`Wrote Markdown report to ${path.relative(ROOT, reportPath)}`);
  if (ittyFailed.length)
    console.log(`itty-aws build failures: ${ittyFailed.join(", ")}`);
  if (awsFailed.length)
    console.log(`aws-sdk-v3 build failures: ${awsFailed.join(", ")}`);
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
