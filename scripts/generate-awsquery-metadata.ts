#!/usr/bin/env bun

/**
 * Generate compact AWS Query metadata for runtime use
 *
 * This script generates metadata for AWS services using the awsQuery protocol,
 * extending the EC2 metadata generation approach to handle multiple services.
 *
 * Usage:
 *   bun scripts/generate-awsquery-metadata.ts [service-id]     # Generate metadata for specific service
 *   bun scripts/generate-awsquery-metadata.ts --all           # Generate metadata for all services
 *   bun scripts/generate-awsquery-metadata.ts sns             # Generate SNS metadata only
 */

import fs from "node:fs";
import path from "node:path";
import {
  discoverAwsQueryServices,
  type AwsQueryService,
} from "./discover-awsquery-services.ts";

export type ShapeKind =
  | "structure"
  | "list"
  | "map"
  | "string"
  | "integer"
  | "boolean"
  | "timestamp"
  | "blob"
  | "enum"
  | "double"
  | "long"
  | "float"
  | "union";

export interface MemberMeta {
  target: string; // referenced shape id
  locationName?: string; // xml/query field name override
  queryName?: string; // for query parameter names when needed
  flattened?: boolean; // smithy.api#xmlFlattened / aws.query#flattened
  timestampFormat?: "iso8601" | "epoch-seconds" | "http-date";
}

export interface ShapeMeta {
  type: ShapeKind;
  xmlName?: string; // wrapper or element name override
  members?: Record<string, MemberMeta>; // for structure
  member?: MemberMeta; // for list
  key?: MemberMeta; // for map
  value?: MemberMeta; // for map
  enum?: string[]; // optional
  flattened?: boolean; // for lists/maps
}

export interface OperationMeta {
  name: string; // DescribeRegions
  input?: string; // shape id
  output?: string; // shape id
  responseWrapper?: string; // xml wrapper (often `${name}Response`)
}

export interface AwsQueryServiceMeta {
  serviceId: string;
  serviceName: string;
  version: string;
  endpointPrefix?: string;
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

type Raw = any; // Smithy model JSON

function toShapeMeta(id: string, rawShapes: any): ShapeMeta {
  const s = rawShapes[id];
  if (!s?.type) {
    throw new Error(`Invalid shape ${id}: missing type`);
  }

  const t = s.type as ShapeKind;
  const meta: ShapeMeta = { type: t };

  // Common traits:
  if (s.traits?.["smithy.api#xmlName"]) {
    meta.xmlName = s.traits["smithy.api#xmlName"];
  }

  if (t === "structure") {
    meta.members = {};
    for (const [mName, m] of Object.entries<any>(s.members ?? {})) {
      const mm: MemberMeta = { target: m.target };
      const traits = m.traits ?? {};

      if (traits["smithy.api#xmlName"])
        mm.locationName = traits["smithy.api#xmlName"];
      if (traits["aws.query#queryName"])
        mm.queryName = traits["aws.query#queryName"];
      if (traits["smithy.api#xmlFlattened"] || traits["aws.query#flattened"])
        mm.flattened = true;
      if (traits["smithy.api#timestampFormat"])
        mm.timestampFormat = traits["smithy.api#timestampFormat"];

      meta.members![mName] = mm;
    }
  } else if (t === "list") {
    const mem = s.member;
    const mm: MemberMeta = { target: mem.target };
    const traits = mem.traits ?? {};

    if (traits["smithy.api#xmlName"])
      mm.locationName = traits["smithy.api#xmlName"];
    if (traits["aws.query#queryName"])
      mm.queryName = traits["aws.query#queryName"];
    if (traits["smithy.api#xmlFlattened"] || traits["aws.query#flattened"])
      mm.flattened = true;

    meta.member = mm;

    // Check if the list itself is flattened
    if (
      s.traits?.["smithy.api#xmlFlattened"] ||
      s.traits?.["aws.query#flattened"]
    ) {
      meta.flattened = true;
    }
  } else if (t === "map") {
    const k = s.key;
    const v = s.value;
    meta.key = { target: k.target };
    meta.value = { target: v.target };

    // Check if the map itself is flattened
    if (
      s.traits?.["smithy.api#xmlFlattened"] ||
      s.traits?.["aws.query#flattened"]
    ) {
      meta.flattened = true;
    }
  } else if (t === "string" && Array.isArray(s.enum)) {
    meta.enum = s.enum.map((e: any) => e.value ?? e);
  }

  return meta;
}

function generateServiceMetadata(
  service: AwsQueryService,
): AwsQueryServiceMeta {
  const raw: Raw = JSON.parse(fs.readFileSync(service.modelPath, "utf8"));
  const shapes = raw.shapes ?? raw;

  const operations: Record<string, OperationMeta> = {};
  const reachableShapes = new Set<string>();

  // First pass: collect operations and find reachable shapes
  for (const [id, shape] of Object.entries<any>(shapes)) {
    if (shape.type === "operation") {
      const name = id.split("#").pop()!;
      const input = shape.input?.target;
      const output = shape.output?.target;
      const responseWrapper =
        shape.traits?.["aws.query#resultWrapper"] ?? `${name}Response`;

      operations[name] = { name, input, output, responseWrapper };

      // Add reachable shapes from input/output
      if (input) reachableShapes.add(input);
      if (output) reachableShapes.add(output);
    }
  }

  // Collect dependencies recursively
  function collectDependencies(id: string, visited = new Set<string>()) {
    if (visited.has(id) || id.startsWith("smithy.api#")) return;
    visited.add(id);

    const shape = shapes[id];
    if (!shape) return;

    reachableShapes.add(id);

    if (shape.type === "structure" && shape.members) {
      for (const member of Object.values<any>(shape.members)) {
        collectDependencies(member.target, visited);
      }
    } else if (shape.type === "list" && shape.member) {
      collectDependencies(shape.member.target, visited);
    } else if (shape.type === "map") {
      if (shape.key) collectDependencies(shape.key.target, visited);
      if (shape.value) collectDependencies(shape.value.target, visited);
    }
  }

  // Collect all dependencies
  for (const op of Object.values(operations)) {
    if (op.input) collectDependencies(op.input);
    if (op.output) collectDependencies(op.output);
  }

  const outShapes: Record<string, ShapeMeta> = {};
  for (const id of reachableShapes) {
    const shape = shapes[id];
    if (!shape?.type) continue;

    try {
      outShapes[id] = toShapeMeta(id, shapes);
    } catch (error) {
      console.warn(`Failed to process shape ${id}:`, error);
      // Continue processing other shapes
    }
  }

  return {
    serviceId: service.serviceId,
    serviceName: service.serviceName,
    version: service.version,
    endpointPrefix: service.endpointPrefix,
    operations,
    shapes: outShapes,
  };
}

function writeServiceMetadata(
  serviceId: string,
  metadata: AwsQueryServiceMeta,
) {
  const metadataDir = path.join(process.cwd(), "src", "awsquery-metadata");

  // Ensure output directory exists
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true });
  }

  const fileName = serviceId.toLowerCase().replace(/\s+/g, "-");
  const outputPath = path.join(metadataDir, `${fileName}.ts`);

  const ts = `// Auto-generated by generate-awsquery-metadata.ts. DO NOT EDIT BY HAND.

import type { AwsQueryServiceMeta } from "./index.js";

export const metadata: AwsQueryServiceMeta = ${JSON.stringify(metadata, null, 2)} as const;

`;

  fs.writeFileSync(outputPath, ts, "utf8");
  return outputPath;
}

function generateServiceRegistry(services: AwsQueryService[]) {
  const metadataDir = path.join(process.cwd(), "src", "awsquery-metadata");
  const indexPath = path.join(metadataDir, "index.ts");

  const supportedServices = services.map((s) =>
    s.serviceId.toLowerCase().replace(/\s+/g, "-"),
  );

  const ts = `// Auto-generated by generate-awsquery-metadata.ts. DO NOT EDIT BY HAND.

export interface AwsQueryServiceMeta {
  serviceId: string;
  serviceName: string;
  version: string;
  endpointPrefix?: string;
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

export interface OperationMeta {
  name: string;
  input?: string;
  output?: string;
  responseWrapper?: string;
}

export interface ShapeMeta {
  type: ShapeKind;
  xmlName?: string;
  members?: Record<string, MemberMeta>;
  member?: MemberMeta;
  key?: MemberMeta;
  value?: MemberMeta;
  enum?: string[];
  flattened?: boolean;
}

export interface MemberMeta {
  target: string;
  locationName?: string;
  queryName?: string;
  flattened?: boolean;
  timestampFormat?: "iso8601" | "epoch-seconds" | "http-date";
}

export type ShapeKind = "structure" | "list" | "map" | "string" | "integer" | "boolean" | "timestamp" | "blob" | "enum" | "double" | "long" | "float" | "union";

// Lazy-loaded service metadata cache
const serviceMetadata = new Map<string, AwsQueryServiceMeta>();

export function getServiceMeta(serviceId: string): AwsQueryServiceMeta | null {
  if (!serviceMetadata.has(serviceId)) {
    try {
      // Normalize service ID for file lookup
      const fileName = serviceId.toLowerCase().replace(/\\s+/g, '-');
      // Dynamic import for tree-shaking
      const meta = require(\`./\${fileName}.js\`).metadata;
      serviceMetadata.set(serviceId, meta);
      return meta;
    } catch (error) {
      console.warn(\`No AWS Query metadata found for service: \${serviceId}\`);
      return null;
    }
  }
  return serviceMetadata.get(serviceId) || null;
}

// Auto-generated list of supported services
export const SUPPORTED_SERVICES = [
${supportedServices.map((s) => `  '${s}'`).join(",\n")}
];

// Service ID to file name mapping
const serviceIdToFileName = new Map([
${services.map((s) => `  ['${s.serviceId}', '${s.serviceId.toLowerCase().replace(/\s+/g, "-")}']`).join(",\n")}
]);

export function getServiceFileName(serviceId: string): string | undefined {
  return serviceIdToFileName.get(serviceId);
}
`;

  fs.writeFileSync(indexPath, ts, "utf8");
  return indexPath;
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    console.error("Usage:");
    console.error(
      "  bun scripts/generate-awsquery-metadata.ts [service-id]  # Generate specific service",
    );
    console.error(
      "  bun scripts/generate-awsquery-metadata.ts --all         # Generate all services",
    );
    console.error("");
    console.error("Available services:");
    const services = discoverAwsQueryServices();
    for (const service of services) {
      console.error(`  ${service.serviceId}`);
    }
    process.exit(1);
  }

  console.log("🔧 Generating AWS Query metadata...\n");

  const services = discoverAwsQueryServices();
  let targetServices: AwsQueryService[];

  if (command === "--all") {
    targetServices = services;
    console.log(`Generating metadata for all ${services.length} services...\n`);
  } else {
    // Find specific service (case-insensitive)
    const targetService = services.find(
      (s) => s.serviceId.toLowerCase() === command.toLowerCase(),
    );

    if (!targetService) {
      console.error(`Service "${command}" not found. Available services:`);
      for (const service of services) {
        console.error(`  ${service.serviceId}`);
      }
      process.exit(1);
    }

    targetServices = [targetService];
    console.log(`Generating metadata for ${targetService.serviceName}...\n`);
  }

  const generatedFiles: string[] = [];

  for (const service of targetServices) {
    try {
      console.log(`Processing ${service.serviceName} (${service.version})...`);

      const metadata = generateServiceMetadata(service);
      const outputPath = writeServiceMetadata(service.serviceId, metadata);

      generatedFiles.push(outputPath);

      console.log(
        `  ✅ Generated: ${path.relative(process.cwd(), outputPath)}`,
      );
      console.log(
        `     - ${Object.keys(metadata.operations).length} operations`,
      );
      console.log(`     - ${Object.keys(metadata.shapes).length} shapes`);
      console.log();
    } catch (error) {
      console.error(`  ❌ Failed to generate ${service.serviceName}:`, error);
    }
  }

  // Generate service registry
  console.log("Generating service registry...");
  const registryPath = generateServiceRegistry(services);
  console.log(`  ✅ Generated: ${path.relative(process.cwd(), registryPath)}`);

  console.log(
    `\n🎉 Successfully generated metadata for ${generatedFiles.length} service(s)`,
  );
}

// CLI handling
if (import.meta.main) {
  main();
}

export {
  generateServiceMetadata,
  generateServiceRegistry,
  writeServiceMetadata,
};
