import { FileSystem, Path } from "@effect/platform";
import { BunContext, BunRuntime } from "@effect/platform-bun";
import {
  Effect,
  LogLevel,
  Logger,
  Schema as S,
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
    // Set of ALL struct names (classes can be used directly as types)
    allStructNames: Set<string>;
    // Set of shape IDs that are error shapes (should be inlined in TaggedError, not separate classes)
    errorShapeIds: Set<string>;
    // Map of error shape names to their inline fields definition
    errorFields: Ref.Ref<Map<string, string>>;
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

// Helper to convert schema expression to TypeScript type for type aliases
// - allStructNames: set of all struct (class) names that can be used directly as types
// - cyclicSchemas: set of cyclic schemas that have explicit type aliases
function schemaExprToTsType(
  schemaExpr: string,
  allStructNames: Set<string>,
  cyclicSchemas: Set<string>,
): string {
  switch (schemaExpr) {
    case "S.String": return "string";
    case "S.Boolean": return "boolean";
    case "S.Number": return "number";
    case "S.Date": return "Date";
    case "S.Any": return "any";
    case "H.StreamBody()": return "H.StreamBody";
    case "S.Struct({})": return "Record<string, never>";
    default:
      // Named schemas:
      // - Structs (classes) can be used directly as types
      // - Cyclic arrays/unions have explicit type aliases, so can be used directly
      // - Non-cyclic arrays/unions/maps are just const, so need typeof extraction
      if (allStructNames.has(schemaExpr) || cyclicSchemas.has(schemaExpr)) {
        return schemaExpr;
      }
      return `typeof ${schemaExpr}["Type"]`;
  }
}

// Topological sort for schema definitions to ensure dependencies come before dependents
// Handles cycles by treating cyclic schemas specially (they will use S.Class and S.suspend)
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
      // Cyclic dependencies will use S.suspend so order among them doesn't matter
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
): { cyclicSchemas: Set<string>; cyclicClasses: Set<string>; allStructNames: Set<string> } {
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
  // Collect ALL struct names (classes can be used directly as types)
  const allStructNames = new Set<string>();
  for (const [name, info] of shapeDeps) {
    if (info.type === "structure") {
      allStructNames.add(name);
      if (cyclicSchemas.has(name)) {
        cyclicClasses.add(name);
      }
    }
  }

  return { cyclicSchemas, cyclicClasses, allStructNames };
}

// Collect all error shape IDs from operation definitions
function collectErrorShapeIds(model: SmithyModel): Set<string> {
  const errorShapeIds = new Set<string>();
  
  for (const [shapeId, shape] of Object.entries(model.shapes)) {
    if (shape.type === "operation" && shape.errors) {
      for (const error of shape.errors) {
        errorShapeIds.add(error.target);
      }
    }
  }
  
  return errorShapeIds;
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
          () => Effect.succeed("S.String"),
        ),
        Match.when(
          (s) =>
            s === "smithy.api#Integer" ||
            s === "smithy.api#Double" ||
            s === "smithy.api#Long" ||
            s === "smithy.api#Float" ||
            s === "smithy.api#PrimitiveLong",
          () => Effect.succeed("S.Number"),
        ),
        Match.when(
          (s) =>
            s === "smithy.api#Boolean" || s === "smithy.api#PrimitiveBoolean",
          () => Effect.succeed("S.Boolean"),
        ),
        Match.when(
          (s) => s === "smithy.api#Timestamp",
          () => Effect.succeed("S.Date"),
        ),
        Match.when(
          (s) => s === "smithy.api#Blob",
          () => Effect.succeed("H.StreamBody()"),
        ),
        Match.when(
          //todo(pear): should this be S.Never?
          (s) => s === "smithy.api#Unit",
          () => Effect.succeed("S.Struct({})"),
        ),
        Match.when(
          (s) => s === "smithy.api#Document",
          // TODO(sam): should we add our own JsonValue schema to handle documents? What are Documents?
          () => Effect.succeed("S.Any"),
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
            () => Effect.succeed("S.Number"),
          ),
          Match.when(
            (s) => s.type === "string",
            () => Effect.succeed("S.String"),
          ),
          Match.when(
            (s) => s.type === "blob",
            () => Effect.succeed("H.StreamBody()"),
          ),
          Match.when(
            (s) => s.type === "boolean",
            () => Effect.succeed("S.Boolean"),
          ),
          Match.when(
            (s) => s.type === "timestamp",
            () => Effect.succeed("S.Date"),
          ),
          Match.when(
            (s) => s.type === "document",
            // TODO(sam): should we add our own JsonValue schema to handle documents? What are Documents?
            () => Effect.succeed("S.Any"),
          ),
          Match.when(
            (s) => s.type === "enum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) =>
                    `S.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `S.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `S.String`)),
          ),
          Match.when(
            (s) => s.type === "intEnum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) =>
                    `S.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `S.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `S.Number`)),
          ),
          Match.when(
            (s) => s.type === "list",
            (s) => {
              const memberName = formatName(s.member.target);
              const schemaName = getSchemaName();
              const isCyclic = sdkFile.cyclicSchemas.has(schemaName);
              const isMemberErrorShape = sdkFile.errorShapeIds.has(s.member.target);
              return addAlias(
                convertShapeToSchema(s.member.target).pipe(
                  Effect.flatMap(Deferred.await),
                  Effect.map((type) => {
                    // Wrap error shape references in S.suspend (they're defined after schemas)
                    let innerType = type;
                    if (isMemberErrorShape) {
                      innerType = `S.suspend(() => ${type})`;
                    }
                    // Wrap cyclic references in S.suspend
                    else if (sdkFile.cyclicSchemas.has(memberName)) {
                      innerType = sdkFile.cyclicClasses.has(memberName)
                      // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                        ? `S.suspend((): S.Schema<${type}, any> => ${type})`
                        : `S.suspend(() => ${type})`;
                    }
                    
                    if (isCyclic) {
                      // For cyclic arrays, generate explicit type alias to help TypeScript inference
                      const memberTsType = schemaExprToTsType(type, sdkFile.allStructNames, sdkFile.cyclicSchemas);
                      return `export type ${schemaName} = ${memberTsType}[];\nexport const ${schemaName} = S.Array(${innerType}) as any as S.Schema<${schemaName}>;`;
                    }
                    
                    return `export const ${schemaName} = S.Array(${innerType});`;
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
              const isErrorShape = sdkFile.errorShapeIds.has(target);

              const membersEffect = Effect.all(
                Object.entries(s.members).map(([memberName, member]) => {
                  const memberTargetName = formatName(member.target);
                  const isMemberErrorShape = sdkFile.errorShapeIds.has(member.target);
                  return convertShapeToSchema(member.target).pipe(
                    Effect.flatMap(Deferred.await),
                    Effect.map((baseSchema) => {
                      let schema = baseSchema;

                      // Wrap error shape references in S.suspend (they're defined after schemas)
                      if (isMemberErrorShape) {
                        schema = `S.suspend(() => ${schema})`;
                      }
                      // Wrap cyclic references in S.suspend (only if current schema is also cyclic)
                      else if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                        if (sdkFile.cyclicClasses.has(memberTargetName)) {
                          // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                          schema = `S.suspend((): S.Schema<${schema}, any> => ${schema})`;
                        } else {
                          schema = `S.suspend(() => ${schema})`;
                        }
                      }

                      if (member.traits?.["smithy.api#httpHeader"] != null) {
                        if (baseSchema === "S.String") {
                          schema = `H.Header("${member.traits?.["smithy.api#httpHeader"]}")`;
                        } else {
                          schema = `H.Header("${member.traits?.["smithy.api#httpHeader"]}", ${schema})`;
                        }
                      }
                      if (member.traits?.["smithy.api#httpPayload"] != null) {
                        schema = `H.Body("${member.traits?.["smithy.api#xmlName"]}", ${schema})`;
                      }
                      if (
                        member.traits?.["smithy.api#httpLabel"] != null &&
                        member.traits?.["smithy.rules#contextParam"] != null
                      ) {
                        schema = `H.Path("${(member.traits?.["smithy.rules#contextParam"] as { name: string })?.name}", ${schema})`;
                      }

                      if (member.traits?.["smithy.api#required"] == null) {
                        schema = `S.optional(${schema})`;
                      }

                      return `${memberName}: ${schema}`;
                    }),
                  );
                }),
                { concurrency: "unbounded" },
              );

              // For error shapes, store the fields separately and don't generate a class
              if (isErrorShape) {
                return Effect.gen(function* () {
                  const tsName = currentSchemaName;
                  yield* Deferred.succeed(deferredValue, tsName);
                  const members = yield* membersEffect;
                  const fields = `{${members.join(", ")}}`;
                  // Store the fields for later use in TaggedError generation
                  yield* Ref.update(sdkFile.errorFields, (map) => {
                    map.set(tsName, fields);
                    return map;
                  });
                  return tsName;
                });
              }

              return addAlias(
                membersEffect.pipe(
                  Effect.map((members) => {
                    const fields = `{${members.join(", ")}}`;
                    // Always use S.Class for structs
                    return `export class ${currentSchemaName} extends S.Class<${currentSchemaName}>("${currentSchemaName}")(${fields}) {}`;
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
                    const isMemberErrorShape = sdkFile.errorShapeIds.has(member.target);
                    return convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                      Effect.map((schema) => {
                        // Track both raw schema (for type alias) and wrapped schema (for schema definition)
                        let wrappedSchema = schema;
                        // Wrap error shape references in S.suspend (they're defined after schemas)
                        if (isMemberErrorShape) {
                          wrappedSchema = `S.suspend(() => ${schema})`;
                        }
                        // Wrap cyclic references in S.suspend
                        else if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                          if (sdkFile.cyclicClasses.has(memberTargetName)) {
                            // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                            wrappedSchema = `S.suspend((): S.Schema<${schema}, any> => ${schema})`;
                          } else {
                            wrappedSchema = `S.suspend(() => ${schema})`;
                          }
                        }
                        return { raw: schema, wrapped: wrappedSchema };
                      }),
                    );
                  }),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map((members) => {
                    const wrappedMembers = members.map(m => m.wrapped);
                    
                    if (isCurrentCyclic) {
                      // For cyclic unions, generate explicit type alias to help TypeScript inference
                      // Deduplicate the TypeScript types for cleaner output
                      const memberTsTypes = [...new Set(members.map(m => schemaExprToTsType(m.raw, sdkFile.allStructNames, sdkFile.cyclicSchemas)))];
                      const typeAlias = `export type ${schemaName} = ${memberTsTypes.join(" | ")};`;
                      return `${typeAlias}\nexport const ${schemaName} = S.Union(${wrappedMembers.join(", ")}) as any as S.Schema<${schemaName}>;`;
                    }
                    
                    return `export const ${schemaName} = S.Union(${wrappedMembers.join(", ")});`;
                  }),
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
                      `export const ${schemaName} = S.Record({key: ${keySchema}, value: ${valueSchema}});`,
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

const addError = Effect.fn(function* (error: { name: string }) {
  const sdkFile = yield* SdkFile;
  const existingErrors = yield* Ref.get(sdkFile.errors);
  if (!existingErrors.some((e) => e.name === error.name)) {
    // Get the inline fields from errorFields map
    const errorFieldsMap = yield* Ref.get(sdkFile.errorFields);
    const fields = errorFieldsMap.get(error.name) ?? "{}";
    yield* Ref.update(sdkFile.errors, (errors) => [
      ...errors,
      {
        name: error.name,
        definition: `export class ${error.name} extends S.TaggedError<${error.name}>()("${error.name}", ${fields}) {};`,
      },
    ]);
  }
  return error.name;
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
    .pipe(Effect.flatMap(S.decodeUnknown(S.parseJson(SmithyModel))));

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
                    Effect.flatMap(() =>
                      addError({
                        name: formatName(errorShapeReference),
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
              "FormatAwsXMLError",
            ]),
          ),
          Match.when("aws.protocols#ec2Query", () =>
            Effect.succeed([
              "FormatAwsQueryRequest",
              "FormatAwsEc2QueryResponse",
              "FormatAwsXMLError",
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
              `export const ${formatName(operationShapeName, true)} = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "${serviceShape.version}", uri: "${httpTrait["uri"]}", method: "${httpTrait["method"]}", sdkId: "${serviceShape.traits["aws.api#service"].sdkId}", sigV4ServiceName: ${serviceShape.traits["aws.auth#sigv4"]?.name == null ? "null" : `"${serviceShape.traits["aws.auth#sigv4"]?.name}"`}, name: "${operationName}" }, ${input}, ${output}, ${operationErrors}), ${responseParser}, ${requestParser}, ${errorParser});\n`,
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
      import * as S from "effect/Schema"
      import { ${clientImportsArray.join(",")}${clientImportsArray.length > 0 ? "," : ""} makeOperation } from "../client.ts";
      import * as H from "../schema-helpers.ts";`;

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
  const { cyclicSchemas, cyclicClasses, allStructNames } = findCyclicSchemasFromDeps(shapeDeps);
  
  // Pre-collect error shape IDs so we can inline their fields in TaggedError
  const errorShapeIds = collectErrorShapeIds(model);

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
      allStructNames,
      errorShapeIds,
      errorFields: yield* Ref.make<Map<string, string>>(new Map()),
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
