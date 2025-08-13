#!/usr/bin/env bun

/**
 * Generate compact EC2 metadata for runtime use
 *
 * This script extracts minimal metadata from the EC2 Smithy model needed
 * for EC2 Query protocol request/response handling at runtime.
 *
 * Usage:
 *   bun scripts/generate-ec2-metadata.ts [input-path] [output-path]
 *
 * Example:
 *   bun scripts/generate-ec2-metadata.ts aws-models/models/ec2/service/2016-11-15/ec2-2016-11-15.json src/ec2-metadata.ts
 */

import fs from "node:fs";
import path from "node:path";

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
  | "float";

export interface MemberMeta {
  target: string; // referenced shape id
  locationName?: string; // xml/query field name override
  queryName?: string; // for EC2 filter/list names when needed
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
}

export interface OperationMeta {
  name: string; // DescribeRegions
  input?: string; // shape id
  output?: string; // shape id
  responseWrapper?: string; // xml wrapper (often `${name}Response`)
}

export interface Ec2ModelMeta {
  version: string; // "2016-11-15"
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

type Raw = any; // Smithy model JSON (EC2)

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

    meta.member = mm;

  } else if (t === "map") {
    const k = s.key;
    const v = s.value;
    meta.key = { target: k.target };
    meta.value = { target: v.target };

  } else if (t === "string" && Array.isArray(s.enum)) {
    meta.enum = s.enum.map((e: any) => e.value ?? e);
  }

  return meta;
}

function main(inPath?: string, outPath?: string) {
  // Default paths if not provided
  const inputPath =
    inPath ?? "aws-models/models/ec2/service/2016-11-15/ec2-2016-11-15.json";
  const outputPath = outPath ?? "src/ec2-metadata.ts";

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    console.error(
      "Please ensure the aws-models git submodule is initialized and updated.",
    );
    process.exit(1);
  }

  const raw: Raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const shapes = raw.shapes ?? raw; // some files nest under shapes

  // Version lives elsewhere in EC2 model; if absent, hardcode:
  const version = raw.metadata?.protocol?.version ?? "2016-11-15";

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

  const ts = `// Auto-generated by generate-ec2-metadata.ts from ${path.basename(
    inputPath,
  )}. DO NOT EDIT BY HAND.

export type ShapeKind = "structure" | "list" | "map" | "string" | "integer" | "boolean" | "timestamp" | "blob" | "enum" | "double" | "long" | "float";

export interface MemberMeta {
  target: string;
  locationName?: string;
  queryName?: string;
  timestampFormat?: "iso8601" | "epoch-seconds" | "http-date";
}

export interface ShapeMeta {
  type: ShapeKind;
  xmlName?: string;
  members?: Record<string, MemberMeta>;
  member?: MemberMeta;
  key?: MemberMeta;
  value?: MemberMeta;
  enum?: string[];
}

export interface OperationMeta {
  name: string;
  input?: string;
  output?: string;
  responseWrapper?: string;
}

export interface Ec2ModelMeta {
  version: string;
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

export const ec2ModelMeta: Ec2ModelMeta = ${JSON.stringify(
    { version, operations, shapes: outShapes },
    null,
    2,
  )} as const;

`;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, ts, "utf8");
  console.log(`✅ Generated EC2 metadata: ${outputPath}`);
  console.log(`   - ${Object.keys(operations).length} operations`);
  console.log(`   - ${Object.keys(outShapes).length} shapes`);
}

// CLI handling
if (import.meta.main) {
  const args = process.argv.slice(2);
  main(args[0], args[1]);
}
