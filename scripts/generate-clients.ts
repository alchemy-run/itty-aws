import { FileSystem, Path } from "@effect/platform";
import { BunContext, BunRuntime } from "@effect/platform-bun";
import {
  Effect,
  LogLevel,
  Logger,
  Schema,
  Data,
  Context,
  Match,
  Ref,
  Console,
  Option,
  MutableHashMap,
  Deferred,
  MutableHashSet,
} from "effect";
import {
  SmithyModel,
  ServiceShape,
  GenericShape,
  type ShapeTypeMap,
} from "./model-schema.ts";
import dedent from "dedent";
import { schema } from "@effect/platform/Transferable";

class SdkFile extends Context.Tag("SdkFile")<
  SdkFile,
  {
    map: MutableHashMap.MutableHashMap<
      string,
      Deferred.Deferred<string, never>
    >;
    schemas: Ref.Ref<
      Array<{ name: string; definition: string; deps: string[] }>
    >;
    errors: Ref.Ref<Array<{ name: string; definition: string }>>;
    operations: Ref.Ref<string>;
    // Set of schema names that are part of a cycle (populated before generation)
    cyclicSchemas: Set<string>;
    // Set of schema names that are cyclic AND are structs (will become classes)
    cyclicClasses: Set<string>;
  }
>() {}

class ModelService extends Context.Tag("ModelService")<
  ModelService,
  SmithyModel
>() {}

function getSdkFlag(): Option.Option<string> {
  const idx = process.argv.indexOf("--sdk");
  const arg = process.argv[idx + 1];
  return idx !== -1 && arg !== undefined ? Option.some(arg) : Option.none();
}

//todo(pear): add this to a category
//todo(pear): add details about the root error to this
class ShapeNotFound extends Data.TaggedError("ShapeNotFound")<{
  message: string;
}> {}
class ProtocolNotFound extends Data.TaggedError("ProtocolNotFound")<{}> {}

//* todo(pear): better error here - most of these need to be handled
class UnableToTransformShapeToSchema extends Data.TaggedError(
  "UnableToTransformShapeToSchema",
)<{
  message: string;
}> {}

class ProtocolNotImplemented extends Data.TaggedError(
  "ProtocolNotImplemented",
)<{
  message: string;
}> {}

const findServiceShape = Effect.gen(function* () {
  const model = yield* ModelService;
  const serviceEntry = Object.entries(model.shapes).find(
    ([_, shape]) => shape.type === "service",
  );

  return serviceEntry
    ? (serviceEntry as [string, ServiceShape])
    : yield* Effect.fail(
        new ShapeNotFound({ message: "service shape not found" }),
      );
});

//todo(pear): cache this
function findShape<T extends keyof ShapeTypeMap>(
  shapeId: string,
  type: T,
): Effect.Effect<[string, ShapeTypeMap[T]], ShapeNotFound, ModelService>;
function findShape(
  shapeId: string,
  type?: string,
): Effect.Effect<[string, GenericShape], ShapeNotFound, ModelService>;
function findShape(
  shapeId: string,
  type?: string,
): Effect.Effect<[string, GenericShape], ShapeNotFound, ModelService> {
  const effect = Effect.gen(function* () {
    yield* Effect.logDebug(
      `finding shape: \`${shapeId}\` of type: ${type ?? "any"}`,
    );
    const model = yield* ModelService;
    const entry = Object.entries(model.shapes).find(
      ([id, shape]) =>
        (type == null ? true : shape.type === type) && id === shapeId,
    );

    return entry
      ? (entry as any)
      : yield* Effect.fail(
          new ShapeNotFound({
            message: `unable to find ${type ?? "unknown"}: ${shapeId}`,
          }),
        );
  });

  return effect;
}

const aliasMappings: Record<string, string> = {
  Body: "_Body",
};

function formatName(shapeId: string, lowercase = false) {
  let name = shapeId.split("#")[1] ?? "";
  // Apply alias mappings for reserved names
  name = aliasMappings[name] ?? name;
  if (lowercase) {
    name = name.charAt(0).toLowerCase() + name.slice(1);
  }
  return name;
}

// Topological sort for schema definitions to ensure dependencies come before dependents
// Handles cycles by treating cyclic schemas specially (they will use Schema.Class and Schema.suspend)
function topologicalSortWithCycles(
  schemas: Array<{ name: string; definition: string; deps: string[] }>,
  cyclicSchemas: Set<string>,
): Array<{ name: string; definition: string; deps: string[] }> {
  const schemaMap = new Map(schemas.map((s) => [s.name, s]));
  const visited = new Set<string>();
  const result: Array<{ name: string; definition: string; deps: string[] }> =
    [];

  function visit(name: string) {
    if (visited.has(name)) return;
    visited.add(name);

    const schema = schemaMap.get(name);
    if (schema) {
      // For cyclic schemas, only require non-cyclic dependencies to be visited first
      // Cyclic dependencies will use Schema.suspend so order among them doesn't matter
      const effectiveDeps = cyclicSchemas.has(name)
        ? schema.deps.filter((dep) => !cyclicSchemas.has(dep))
        : schema.deps;

      for (const dep of effectiveDeps) {
        if (schemaMap.has(dep)) {
          visit(dep);
        }
      }
      result.push(schema);
    }
  }

  // Visit all schemas
  for (const schema of schemas) {
    visit(schema.name);
  }

  return result;
}

// Collect all shape dependencies from the model to compute cycles before generation
function collectShapeDependencies(
  model: SmithyModel,
): Map<string, { deps: string[]; type: string }> {
  const shapeDeps = new Map<string, { deps: string[]; type: string }>();

  for (const [shapeId, shape] of Object.entries(model.shapes)) {
    const name = formatName(shapeId);
    if (!name) continue;

    const deps: string[] = [];

    if (shape.type === "structure") {
      for (const member of Object.values(shape.members)) {
        const depName = formatName(member.target);
        if (depName) deps.push(depName);
      }
    } else if (shape.type === "union") {
      for (const member of Object.values(shape.members)) {
        const depName = formatName(member.target);
        if (depName) deps.push(depName);
      }
    } else if (shape.type === "list") {
      const depName = formatName(shape.member.target);
      if (depName) deps.push(depName);
    } else if (shape.type === "map") {
      const keyName = formatName(shape.key.target);
      const valueName = formatName(shape.value.target);
      if (keyName) deps.push(keyName);
      if (valueName) deps.push(valueName);
    }

    shapeDeps.set(name, { deps, type: shape.type });
  }

  return shapeDeps;
}

// Find all schemas that are part of a cycle using the pre-collected dependencies
function findCyclicSchemasFromDeps(
  shapeDeps: Map<string, { deps: string[]; type: string }>,
): { cyclicSchemas: Set<string>; cyclicClasses: Set<string> } {
  const cyclicSchemas = new Set<string>();

  let index = 0;
  const stack: string[] = [];
  const onStack = new Set<string>();
  const indices = new Map<string, number>();
  const lowlinks = new Map<string, number>();

  function strongConnect(name: string) {
    indices.set(name, index);
    lowlinks.set(name, index);
    index++;
    stack.push(name);
    onStack.add(name);

    const shapeInfo = shapeDeps.get(name);
    if (shapeInfo) {
      for (const dep of shapeInfo.deps) {
        if (shapeDeps.has(dep)) {
          if (!indices.has(dep)) {
            strongConnect(dep);
            lowlinks.set(
              name,
              Math.min(lowlinks.get(name)!, lowlinks.get(dep)!),
            );
          } else if (onStack.has(dep)) {
            lowlinks.set(name, Math.min(lowlinks.get(name)!, indices.get(dep)!));
          }
        }
      }
    }

    if (lowlinks.get(name) === indices.get(name)) {
      const scc: string[] = [];
      let w: string;
      do {
        w = stack.pop()!;
        onStack.delete(w);
        scc.push(w);
      } while (w !== name);

      // If SCC has more than one node, mark all as cyclic
      if (scc.length > 1) {
        for (const node of scc) {
          cyclicSchemas.add(node);
        }
      } else {
        // Check for self-loop
        const info = shapeDeps.get(name);
        if (info && info.deps.includes(name)) {
          cyclicSchemas.add(name);
        }
      }
    }
  }

  for (const name of shapeDeps.keys()) {
    if (!indices.has(name)) {
      strongConnect(name);
    }
  }

  // Determine which cyclic schemas will become classes (structs only)
  const cyclicClasses = new Set<string>();
  for (const name of cyclicSchemas) {
    const info = shapeDeps.get(name);
    if (info && info.type === "structure") {
      cyclicClasses.add(name);
    }
  }

  return { cyclicSchemas, cyclicClasses };
}

const convertShapeToSchema: (
  args_0: string,
) => Effect.Effect<
  Deferred.Deferred<string, never>,
  UnableToTransformShapeToSchema | ShapeNotFound,
  ModelService | SdkFile
> = Effect.fn(function* (target: string) {
  const sdkFile = yield* SdkFile;
  const cachedResult = Option.getOrNull(
    MutableHashMap.get(sdkFile.map, target),
  );
  const deferredValue = yield* Deferred.make<string, never>();
  if (cachedResult != null) {
    return cachedResult;
  } else {
    MutableHashMap.set(sdkFile.map, target, deferredValue);
  }

  // Helper to get the schema name for this target
  const getSchemaName = () => formatName(target);

  const addAlias = Effect.fn(function* (
    definitionEffect: Effect.Effect<
      string,
      ShapeNotFound | UnableToTransformShapeToSchema,
      ModelService | SdkFile
    >,
    deps: string[],
  ) {
    const tsName = getSchemaName();
    yield* Deferred.succeed(deferredValue, tsName);
    const definition = yield* definitionEffect;

    yield* Ref.update(sdkFile.schemas, (arr) => [
      ...arr,
      { name: tsName, definition, deps },
    ]);
    return tsName;
  });

  const result = yield* Effect.if(target.startsWith("smithy.api"), {
    onTrue: () =>
      Match.value(target).pipe(
        Match.when(
          (s) => s === "smithy.api#String",
          () => Effect.succeed("Schema.String"),
        ),
        Match.when(
          (s) =>
            s === "smithy.api#Integer" ||
            s === "smithy.api#Double" ||
            s === "smithy.api#Long" ||
            s === "smithy.api#Float" ||
            s === "smithy.api#PrimitiveLong",
          () => Effect.succeed("Schema.Number"),
        ),
        Match.when(
          (s) =>
            s === "smithy.api#Boolean" || s === "smithy.api#PrimitiveBoolean",
          () => Effect.succeed("Schema.Boolean"),
        ),
        Match.when(
          (s) => s === "smithy.api#Timestamp",
          () => Effect.succeed("Schema.Date"),
        ),
        Match.when(
          (s) => s === "smithy.api#Blob",
          () => Effect.succeed("StreamBody()"),
        ),
        Match.when(
          //todo(pear): should this be Schema.Never?
          (s) => s === "smithy.api#Unit",
          () => Effect.succeed("Schema.Struct({})"),
        ),
        Match.when(
          (s) => s === "smithy.api#Document",
          // TODO(sam): should we add our own JsonValue schema to handle documents? What are Documents?
          () => Effect.succeed("Schema.Any"),
        ),
        Match.orElse(() =>
          Effect.fail(
            new UnableToTransformShapeToSchema({
              message: `type ${target}`,
            }),
          ),
        ),
      ),
    onFalse: () =>
      Effect.gen(function* () {
        const [targetShapeId, targetShape] = yield* findShape(target);
        return yield* Match.value(targetShape).pipe(
          Match.when(
            (s) =>
              s.type === "integer" ||
              s.type === "long" ||
              s.type === "double" ||
              s.type === "float",
            () => Effect.succeed("Schema.Number"),
          ),
          Match.when(
            (s) => s.type === "string",
            () => Effect.succeed("Schema.String"),
          ),
          Match.when(
            (s) => s.type === "blob",
            () => Effect.succeed("StreamBody()"),
          ),
          Match.when(
            (s) => s.type === "boolean",
            () => Effect.succeed("Schema.Boolean"),
          ),
          Match.when(
            (s) => s.type === "timestamp",
            () => Effect.succeed("Schema.Date"),
          ),
          Match.when(
            (s) => s.type === "document",
            () => Effect.succeed("Schema.JsonValue"),
          ),
          Match.when(
            (s) => s.type === "enum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) =>
                    `Schema.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `Schema.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `Schema.String`)),
          ),
          Match.when(
            (s) => s.type === "intEnum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) =>
                    `Schema.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `Schema.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `Schema.Number`)),
          ),
          Match.when(
            (s) => s.type === "list",
            (s) => {
              const memberName = formatName(s.member.target);
              const schemaName = getSchemaName();
              return addAlias(
                convertShapeToSchema(s.member.target).pipe(
                  Effect.flatMap(Deferred.await),
                  Effect.map((type) => {
                    // Wrap cyclic references in Schema.suspend
                    let innerType = type;
                    if (sdkFile.cyclicSchemas.has(memberName)) {
                      innerType = sdkFile.cyclicClasses.has(memberName)
                        ? `Schema.suspend((): Schema.Schema<${type}> => ${type})`
                        : `Schema.suspend(() => ${type})`;
                    }
                    return `export const ${schemaName} = Schema.Array(${innerType});`;
                  }),
                ),
                [memberName],
              );
            },
          ),
          Match.when(
            (s) => s.type === "structure",
            (s) => {
              const memberTargets = Object.values(s.members).map((m) =>
                formatName(m.target),
              );
              const currentSchemaName = getSchemaName();
              const isCurrentCyclic = sdkFile.cyclicSchemas.has(currentSchemaName);

              return addAlias(
                Effect.all(
                  Object.entries(s.members).map(([memberName, member]) => {
                    const memberTargetName = formatName(member.target);
                    return convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                      Effect.map((baseSchema) => {
                        let schema = baseSchema;

                        // Wrap cyclic references in Schema.suspend (only if current schema is also cyclic)
                        if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                          if (sdkFile.cyclicClasses.has(memberTargetName)) {
                            schema = `Schema.suspend((): Schema.Schema<${schema}> => ${schema})`;
                          } else {
                            schema = `Schema.suspend(() => ${schema})`;
                          }
                        }

                        if (member.traits?.["smithy.api#httpHeader"] != null) {
                          if (baseSchema === "Schema.String") {
                            schema = `Header("${member.traits?.["smithy.api#httpHeader"]}")`;
                          } else {
                            schema = `Header("${member.traits?.["smithy.api#httpHeader"]}", ${schema})`;
                          }
                        }
                        if (member.traits?.["smithy.api#httpPayload"] != null) {
                          schema = `Body("${member.traits?.["smithy.api#xmlName"]}", ${schema})`;
                        }
                        if (
                          member.traits?.["smithy.api#httpLabel"] != null &&
                          member.traits?.["smithy.rules#contextParam"] != null
                        ) {
                          schema = `Path("${(member.traits?.["smithy.rules#contextParam"] as { name: string })?.name}", ${schema})`;
                        }

                        if (member.traits?.["smithy.api#required"] == null) {
                          schema = `Schema.optional(${schema})`;
                        }

                        return `${memberName}: ${schema}`;
                      }),
                    );
                  }),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map((members) => {
                    const fields = `{${members.join(", ")}}`;
                    // Always use Schema.Class for structs
                    return `export class ${currentSchemaName} extends Schema.Class<${currentSchemaName}>("${currentSchemaName}")(${fields}) {}`;
                  }),
                ),
                memberTargets,
              );
            },
          ),
          Match.when(
            (s) => s.type === "union",
            (s) => {
              const memberTargets = Object.values(s.members).map((m) =>
                formatName(m.target),
              );
              const schemaName = getSchemaName();
              const isCurrentCyclic = sdkFile.cyclicSchemas.has(schemaName);

              return addAlias(
                Effect.all(
                  Object.entries(s.members).map(([_memberName, member]) => {
                    const memberTargetName = formatName(member.target);
                    return convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                      Effect.map((schema) => {
                        // Wrap cyclic references in Schema.suspend
                        if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                          if (sdkFile.cyclicClasses.has(memberTargetName)) {
                            return `Schema.suspend((): Schema.Schema<${schema}> => ${schema})`;
                          } else {
                            return `Schema.suspend(() => ${schema})`;
                          }
                        }
                        return schema;
                      }),
                    );
                  }),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map(
                    (members) => `export const ${schemaName} = Schema.Union(${members.join(", ")});`,
                  ),
                ),
                memberTargets,
              );
            },
          ),
          Match.when(
            (s) => s.type === "map",
            (s) => {
              const schemaName = getSchemaName();
              return addAlias(
                Effect.all(
                  [
                    convertShapeToSchema(s.key.target).pipe(
                      Effect.flatMap(Deferred.await),
                    ),
                    convertShapeToSchema(s.value.target).pipe(
                      Effect.flatMap(Deferred.await),
                    ),
                  ],
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map(
                    ([keySchema, valueSchema]) =>
                      `export const ${schemaName} = Schema.Record({key: ${keySchema}, value: ${valueSchema}});`,
                  ),
                ),
                [formatName(s.key.target), formatName(s.value.target)],
              );
            },
          ),
          Match.orElse((s) =>
            Effect.fail(
              new UnableToTransformShapeToSchema({
                message: `type ${s.type} at ${targetShapeId}`,
              }),
            ),
          ),
          // Match.orElse(() => Effect.succeed("$$TEMP_SCHEMA")),
          // Match.exhaustive,
        );
      }),
  });

  yield* Deferred.succeed(deferredValue, result);
  yield* Effect.logDebug(`Converted shape: \`${target}\` to ${result}`);
  return deferredValue;
});

const addError = Effect.fn(function* (error: { name: string; schema: string }) {
  const sdkFile = yield* SdkFile;
  const existingErrors = yield* Ref.get(sdkFile.errors);
  if (!existingErrors.some((e) => e.name === error.name)) {
    yield* Ref.update(sdkFile.errors, (errors) => [
      ...errors,
      {
        name: error.name,
        definition: `export class ${error.name}Error extends Schema.TaggedError<${error.name}Error>()("${error.name}", ${error.schema}.fields) {};`,
      },
    ]);
  }
  return `${error.name}Error`;
});

const generateClient = Effect.fn(function* (
  modelPath: string,
  outputRootPath: string,
) {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const clientImports = MutableHashSet.empty<string>();

  const model = yield* fs
    .readFileString(modelPath)
    .pipe(Effect.flatMap(Schema.decodeUnknown(Schema.parseJson(SmithyModel))));

  const client = Effect.gen(function* () {
    const [serviceShapeName, serviceShape] = yield* findServiceShape;

    const serviceName = serviceShapeName.split("#")[1];

    const protocol = Object.keys(serviceShape.traits).find((key) =>
      key.startsWith("aws.protocols#"),
    );

    if (protocol == null) {
      return yield* Effect.fail(new ProtocolNotFound());
    }

    //todo(pear): resource based models don't work, only operation based models get clients right now

    const sdkFile = yield* SdkFile;

    yield* Effect.forEach(
      serviceShape.operations ?? [],
      Effect.fn(function* ({ target: operationId }: { target: string }) {
        const [operationShapeName, operationShape] = yield* findShape(
          operationId,
          "operation",
        );

        const operationName = `${serviceName}.${operationShapeName.split("#")[1]}`;

        const input = yield* convertShapeToSchema(
          operationShape.input.target,
        ).pipe(Effect.flatMap(Deferred.await));
        const output = yield* convertShapeToSchema(
          operationShape.output.target,
        ).pipe(Effect.flatMap(Deferred.await));

        const operationErrors =
          operationShape.errors == null || operationShape.errors.length === 0
            ? "[]"
            : yield* Effect.forEach(
                operationShape.errors,
                ({ target: errorShapeReference }) =>
                  convertShapeToSchema(errorShapeReference).pipe(
                    Effect.flatMap(Deferred.await),
                    Effect.flatMap((s) =>
                      addError({
                        name: formatName(errorShapeReference),
                        schema: s,
                      }),
                    ),
                  ),
              ).pipe(Effect.map((errors) => `[${errors.join(", ")}]`));

        const httpTrait = operationShape["traits"]["smithy.api#http"] ?? {
          method: "POST",
          uri: "/",
        };

        const [responseParser, requestParser, errorParser] = yield* Match.value(
          protocol,
        ).pipe(
          Match.when("aws.protocols#restXml", () =>
            Effect.succeed([
              "FormatXMLRequest",
              "FormatXMLResponse",
              "FormatAwsXMLError",
            ]),
          ),
          Match.when("aws.protocols#restJson1", () =>
            Effect.succeed([
              "FormatJSONRequest",
              "FormatJSONResponse",
              "FormatAwsRestJSONError",
            ]),
          ),
          Match.when("aws.protocols#awsJson1_0", () =>
            Effect.succeed([
              "FormatAwsJSON10Request",
              "FormatJSONResponse",
              "FormatAwsRestJSONError",
            ]),
          ),
          Match.when("aws.protocols#awsJson1_1", () =>
            Effect.succeed([
              "FormatAwsJSON11Request",
              "FormatJSONResponse",
              "FormatAwsRestJSONError",
            ]),
          ),
          Match.when("aws.protocols#awsQuery", () =>
            Effect.succeed([
              "FormatAwsQueryRequest",
              "FormatAwsQueryResponse",
              "FormatAWSXMLError",
            ]),
          ),
          Match.when("aws.protocols#ec2Query", () =>
            Effect.succeed([
              "FormatAwsQueryRequest",
              "FormatAwsEc2QueryResponse",
              "FormatAWSXMLError",
            ]),
          ),
          Match.orElse(() =>
            Effect.fail(
              new ProtocolNotImplemented({
                message: `protocol \`${protocol}\` not implemented for  ${serviceShapeName}`,
              }),
            ),
          ),
        );

        MutableHashSet.add(clientImports, responseParser);
        MutableHashSet.add(clientImports, requestParser);
        MutableHashSet.add(clientImports, errorParser);

        yield* sdkFile.operations.pipe(
          Ref.update(
            (c) =>
              c +
              `export const ${formatName(operationShapeName, true)} = /*#__PURE__*/ makeOperation(() => Operation({ version: "${serviceShape.version}", uri: "${httpTrait["uri"]}", method: "${httpTrait["method"]}", sdkId: "${serviceShape.traits["aws.api#service"].sdkId}", sigV4ServiceName: ${serviceShape.traits["aws.auth#sigv4"]?.name == null ? "null" : `"${serviceShape.traits["aws.auth#sigv4"]?.name}"`}, name: "${operationName}" }, ${input}, ${output}, ${operationErrors}), ${responseParser}, ${requestParser}, ${errorParser});\n`,
          ),
        );
      }),
      {
        concurrency: "unbounded",
      },
    );

    // Get schemas and sort them topologically
    // Cycles were already computed before generation, so just sort
    const schemas = yield* Ref.get(sdkFile.schemas);
    const sortedSchemas = topologicalSortWithCycles(schemas, sdkFile.cyclicSchemas);
    const schemaDefinitions = sortedSchemas.map((s) => s.definition).join("\n");

    const errors = yield* Ref.get(sdkFile.errors);
    const errorDefinitions = errors.map((s) => s.definition).join("\n");

    const operations = yield* Ref.get(sdkFile.operations);

    //todo(pear): optimize imports
    const clientImportsArray = Array.from(clientImports);
    const imports = dedent`
      import * as Schema from "effect/Schema"
      import { ${clientImportsArray.join(",")}${clientImportsArray.length > 0 ? "," : ""} makeOperation } from "../client.ts";
      import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";`;

    const fileContents = `${imports}\n\n//# Schemas\n${schemaDefinitions}\n\n//# Errors\n${errorDefinitions}\n\n//# Operations\n${operations}`;

    yield* fs.writeFileString(
      path.join(
        outputRootPath,
        `${serviceShape.traits["aws.api#service"].sdkId.toLowerCase().replaceAll(" ", "-")}.ts`,
      ),
      fileContents,
    );
  });

  // Pre-compute cyclic schemas from the model before generation
  const shapeDeps = collectShapeDependencies(model);
  const { cyclicSchemas, cyclicClasses } = findCyclicSchemasFromDeps(shapeDeps);

  return yield* client.pipe(
    Effect.provideService(SdkFile, {
      schemas: yield* Ref.make<
        Array<{ name: string; definition: string; deps: string[] }>
      >([]),
      errors: yield* Ref.make<Array<{ name: string; definition: string }>>([]),
      operations: yield* Ref.make(""),
      map: MutableHashMap.empty<string, Deferred.Deferred<string, never>>(),
      cyclicSchemas,
      cyclicClasses,
    }),
    Effect.provideService(ModelService, model),
  );
});

const AWS_MODELS_PATH = "aws-models";
const RESULT_ROOT_PATH = "src/clients.gen";

BunRuntime.runMain(
  // generateClient(TEST_MODAL_PATH, TEST_OUTPUT_PATH)
  Effect.gen(function* () {
    const path = yield* Path.Path;
    const fs = yield* FileSystem.FileSystem;
    const rootModelsPath = path.join(AWS_MODELS_PATH, "models");
    const folders = yield* fs.readDirectory(rootModelsPath);

    yield* fs.makeDirectory(RESULT_ROOT_PATH, {
      recursive: true,
    });

    const sdkFlag = Option.getOrNull(getSdkFlag());

    yield* Effect.forEach(
      folders.filter((service) => sdkFlag == null || sdkFlag === service),
      (service) =>
        Effect.gen(function* () {
          yield* Console.log(`⏩ STARTED SERVICE: ${service}`);
          const baseModelPath = path.join(rootModelsPath, service, "service");
          const folder = (yield* fs.readDirectory(baseModelPath))[0]!;
          const modelPath = path.join(
            baseModelPath,
            folder,
            `${service}-${folder}.json`,
          );
          yield* generateClient(modelPath, RESULT_ROOT_PATH);
        }).pipe(
          Effect.andThen(() => Console.log(`✅ SUCCEEDED SERVICE: ${service}`)),
          Effect.catchAll(
            (error) =>
              Console.error(
                `❌ FAILED SERVICE: ${service}\n\tUnable to generate client: ${error}`,
              ), //.pipe(Effect.andThen(() => Effect.die(error))),
          ),
        ),
    );
  }).pipe(
    Logger.withMinimumLogLevel(LogLevel.Error),
    Effect.provide(BunContext.layer),
  ),
);
