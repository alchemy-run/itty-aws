import { FileSystem } from "@effect/platform";
import { Effect, Schema } from "effect";
import { join } from "pathe";

// Base trait schema for common Smithy traits
const TraitValue = Schema.Union(
  Schema.String,
  Schema.Boolean,
  Schema.Number,
  Schema.Null,
  Schema.Record({ key: Schema.String, value: Schema.Unknown }),
  Schema.Struct({}),
);

const Traits = Schema.Record({ key: Schema.String, value: TraitValue });

// Member definition for structures and unions
const Member = Schema.Struct({
  target: Schema.String,
  traits: Schema.optional(Traits),
});

const Members = Schema.Record({ key: Schema.String, value: Member });

// Operation reference for service operations arrays
const OperationReference = Schema.Struct({
  target: Schema.String,
});

// Enhanced shape definitions with members support
const OperationShape = Schema.Struct({
  type: Schema.Literal("operation"),
  input: Schema.optional(Schema.Struct({ target: Schema.String })),
  output: Schema.optional(Schema.Struct({ target: Schema.String })),
  errors: Schema.optional(
    Schema.Array(Schema.Struct({ target: Schema.String })),
  ),
  traits: Schema.optional(Traits),
});

const ServiceShape = Schema.Struct({
  type: Schema.Literal("service"),
  operations: Schema.optional(Schema.Array(OperationReference)),
  version: Schema.String,
  traits: Schema.optional(Traits),
});

const StructureShape = Schema.Struct({
  type: Schema.Literal("structure"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const UnionShape = Schema.Struct({
  type: Schema.Literal("union"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const EnumShape = Schema.Struct({
  type: Schema.Literal("enum"),
  members: Schema.optional(Members),
  traits: Schema.optional(Traits),
});

const ListShape = Schema.Struct({
  type: Schema.Literal("list"),
  member: Schema.optional(Schema.Struct({ target: Schema.String })),
  traits: Schema.optional(Traits),
});

const MapShape = Schema.Struct({
  type: Schema.Literal("map"),
  key: Schema.optional(Schema.Struct({ target: Schema.String })),
  value: Schema.optional(Schema.Struct({ target: Schema.String })),
  traits: Schema.optional(Traits),
});

// Simple shapes with traits support
const BooleanShape = Schema.Struct({
  type: Schema.Literal("boolean"),
  traits: Schema.optional(Traits),
});
const IntegerShape = Schema.Struct({
  type: Schema.Literal("integer"),
  traits: Schema.optional(Traits),
});
const DoubleShape = Schema.Struct({
  type: Schema.Literal("double"),
  traits: Schema.optional(Traits),
});
const FloatShape = Schema.Struct({
  type: Schema.Literal("float"),
  traits: Schema.optional(Traits),
});
const LongShape = Schema.Struct({
  type: Schema.Literal("long"),
  traits: Schema.optional(Traits),
});
const StringShape = Schema.Struct({
  type: Schema.Literal("string"),
  traits: Schema.optional(Traits),
});
const TimestampShape = Schema.Struct({
  type: Schema.Literal("timestamp"),
  traits: Schema.optional(Traits),
});
const ResourceShape = Schema.Struct({
  type: Schema.Literal("resource"),
  traits: Schema.optional(Traits),
});
const BlobShape = Schema.Struct({
  type: Schema.Literal("blob"),
  traits: Schema.optional(Traits),
});
const DocumentShape = Schema.Struct({
  type: Schema.Literal("document"),
  traits: Schema.optional(Traits),
});

const Shape = Schema.Union(
  OperationShape,
  ServiceShape,
  StructureShape,
  UnionShape,
  EnumShape,
  ListShape,
  MapShape,
  BooleanShape,
  IntegerShape,
  DoubleShape,
  FloatShape,
  LongShape,
  StringShape,
  TimestampShape,
  ResourceShape,
  BlobShape,
  DocumentShape,
);
export type Shape = Schema.Schema.Type<typeof Shape>;

// Metadata suppression for Smithy 2.0
const MetadataSuppression = Schema.Struct({
  id: Schema.String,
  namespace: Schema.String,
});

const Metadata = Schema.Struct({
  suppressions: Schema.optional(Schema.Array(MetadataSuppression)),
});

export class Manifest extends Schema.Class<Manifest>("Manifest")({
  smithy: Schema.optional(Schema.String), // Support Smithy version
  metadata: Schema.optional(Metadata), // Support metadata
  shapes: Schema.Record({ key: Schema.String, value: Shape }),
}) {}

// Find all JSON files recursively in a directory
const findJsonFiles = (dirPath: string): Effect.Effect<string[], Error> =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const entries = yield* fs.readDirectory(dirPath);
    const results: string[] = [];

    for (const entry of entries) {
      const fullPath = join(dirPath, entry);
      const stat = yield* fs.stat(fullPath);

      if (stat.type === "Directory") {
        const nestedFiles = yield* findJsonFiles(fullPath);
        results.push(...nestedFiles);
      } else if (entry.endsWith(".json")) {
        results.push(fullPath);
      }
    }

    return results;
  });

// Load manifest from local aws-models directory
export const loadLocalManifest = (filePath: string) =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const content = yield* fs.readFileString(filePath);
    const parsed = yield* Effect.try(() => JSON.parse(content));
    return yield* Schema.decodeUnknown(Manifest)(parsed);
  });

// Find and load all AWS service manifests from local directory
export const loadAllLocalManifests = () =>
  Effect.gen(function* () {
    const modelsDir = join(process.cwd(), "aws-models", "models");
    const jsonFiles = yield* findJsonFiles(modelsDir);

    const manifests: Array<{ serviceName: string; manifest: Manifest }> = [];

    for (const filePath of jsonFiles) {
      const manifest = yield* loadLocalManifest(filePath);
      // Extract service name from file path (e.g., "s3-2006-03-01.json" -> "s3")
      const fileName = filePath.split("/").pop() || "";
      const serviceName = fileName.split("-").slice(0, -3).join("-"); // Remove date parts
      manifests.push({ serviceName, manifest });
    }

    return manifests;
  });

// Legacy function for backward compatibility - now loads from local files
export const fetchSdkManifest = (awsServiceName: string) =>
  Effect.gen(function* () {
    const modelsDir = join(process.cwd(), "aws-models", "models");
    const jsonFiles = yield* findJsonFiles(modelsDir);

    // Find the JSON file that matches the service name
    const matchingFile = jsonFiles.find((filePath) => {
      const fileName = filePath.split("/").pop() || "";
      return fileName.startsWith(`${awsServiceName}-`);
    });

    if (!matchingFile) {
      return yield* Effect.fail(
        new Error(`No manifest found for service: ${awsServiceName}`),
      );
    }

    return yield* loadLocalManifest(matchingFile);
  });
