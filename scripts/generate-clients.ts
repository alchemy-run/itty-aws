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
  HashSet,
} from "effect";
import {
  SmithyModel,
  ServiceShape,
  GenericShape,
  ShapeTypeMap,
} from "./model-schema";
import dedent from "dedent";

class SdkFile extends Context.Tag("SdkFile")<
  SdkFile,
  {
    map: MutableHashMap.MutableHashMap<
      string,
      Deferred.Deferred<string, never>
    >;
    contents: Ref.Ref<string>;
    lineCount: Ref.Ref<number>;
  }
>() {}

class ModelService extends Context.Tag("ModelService")<
  ModelService,
  SmithyModel
>() {}

function getSdkFlag(): Option.Option<string> {
  const idx = process.argv.indexOf("--sdk");
  return idx !== -1 ? Option.some(process.argv[idx + 1]) : Option.none();
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

function formatName(shapeId: string, lowercase = false) {
  let name = shapeId.split("#")[1] ?? "";
  if (lowercase) {
    name = name.charAt(0).toLowerCase() + name.slice(1);
  }
  return name;
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

  const addAlias = Effect.fn(function* (
    type: Effect.Effect<
      string,
      ShapeNotFound | UnableToTransformShapeToSchema,
      ModelService | SdkFile
    >,
  ) {
    const tsName = target.split("#")[1]!;
    yield* Ref.update(sdkFile.lineCount, (n) => n + 1);
    const lineCount = yield* Ref.get(sdkFile.lineCount);
    yield* Deferred.succeed(deferredValue, tsName);
    const value = yield* type;
    yield* Ref.update(sdkFile.contents, (c) => {
      const line = `export const ${tsName} = ${value};`;
      const lines = c.split("\n");
      lines.splice(-lineCount, 0, line);
      return lines.join("\n");
    });
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
          () => Effect.succeed("Schema.JsonValue"),
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
            (s) =>
              addAlias(
                convertShapeToSchema(s.member.target).pipe(
                  Effect.flatMap(Deferred.await),
                  Effect.map((type) => `Schema.Array(${type})`),
                ),
              ),
          ),
          Match.when(
            (s) => s.type === "structure",
            (s) =>
              addAlias(
                Effect.all(
                  Object.entries(s.members).map(([memberName, member]) =>
                    convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                      Effect.map((baseSchema) => {
                        let schema = baseSchema;

                        if (member.traits?.["smithy.api#httpHeader"] != null) {
                          if (schema === "Schema.String") {
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
                    ),
                  ),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map(
                    (members) => `Schema.Struct({${members.join(", ")}})`,
                  ),
                ),
              ),
          ),
          Match.when(
            (s) => s.type === "union",
            (s) =>
              addAlias(
                Effect.all(
                  Object.entries(s.members).map(([_memberName, member]) =>
                    convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                    ),
                  ),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map(
                    (members) => `Schema.Union(${members.join(", ")})`,
                  ),
                ),
              ),
          ),
          Match.when(
            (s) => s.type === "map",
            (s) =>
              addAlias(
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
                      `Schema.Record({key: ${keySchema}, value: ${valueSchema}})`,
                  ),
                ),
              ),
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

        const errors =
          operationShape.errors == null || operationShape.errors.length === 0
            ? "Schema.Void"
            : yield* Effect.forEach(
                operationShape.errors,
                ({ target: errorShapeReference }) =>
                  convertShapeToSchema(errorShapeReference).pipe(
                    Effect.flatMap(Deferred.await),
                    Effect.map(
                      (s) =>
                        `ErrorAnnotation("${formatName(errorShapeReference)}", ${s})`,
                    ),
                  ),
              ).pipe(
                Effect.map((schemas) =>
                  schemas.length === 1
                    ? schemas[0]
                    : `Schema.Union(${schemas.join(", ")})`,
                ),
              );

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

        yield* sdkFile.contents.pipe(
          Ref.update(
            (c) =>
              c +
              `export const ${formatName(operationShapeName)} = /*#__PURE__*/ makeOperation(() => Operation({ version: "${serviceShape.version}", uri: "${httpTrait["uri"]}", method: "${httpTrait["method"]}", sdkId: "${serviceShape.traits["aws.api#service"].sdkId}", sigV4ServiceName: ${serviceShape.traits["aws.auth#sigv4"]?.name == null ? "null" : `"${serviceShape.traits["aws.auth#sigv4"]?.name}"`}, name: "${operationName}" }, ${input}, ${output}, ${errors}), ${responseParser}, ${requestParser}, ${errorParser});\n`,
          ),
        );
      }),
      {
        concurrency: "unbounded",
      },
    );

    //todo(pear): optimize imports
    yield* sdkFile.contents.pipe(
      Ref.update(
        (c) =>
          //todo(pear) import should be smarter but whatever for now
          dedent`
      import { Schema} from "effect"
      import { ${Array.from(clientImports).join(",")}, makeOperation } from "../client";
      import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";` +
          "\n" +
          c,
      ),
    );

    yield* fs.writeFileString(
      path.join(
        outputRootPath,
        `${serviceShape.traits["aws.api#service"].sdkId.toLowerCase().replaceAll(" ", "-")}.ts`,
      ),
      yield* sdkFile.contents.get,
    );
  });

  return yield* client.pipe(
    Effect.provideService(SdkFile, {
      contents: yield* Ref.make(""),
      lineCount: yield* Ref.make(0),
      map: MutableHashMap.empty<string, Deferred.Deferred<string, never>>(),
    }),
    Effect.provideService(ModelService, model),
  );
});

const AWS_MODELS_PATH = "D:/code/OSS/aws/api-models-aws";
const RESULT_ROOT_PATH = "D:/code/OSS/alchemy/itty-aws-2/src/clients.gen";

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
          const folder = (yield* fs.readDirectory(baseModelPath))[0];
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
