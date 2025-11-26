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
  Equivalence,
} from "effect";
import {
  SmithyModel,
  ServiceShape,
  GenericShape,
  ShapeTypeMap,
} from "./model-schema";
import { ServiceMetadata } from "../src/service-metadata";
import dedent from "dedent";

class ModelService extends Context.Tag("ModelService")<
  ModelService,
  SmithyModel
>() {}

class TypeStore extends Context.Tag("TypeStore")<
  TypeStore,
  {
    aliases: Ref.Ref<Map<string, string>>;
    errors: Ref.Ref<Map<string, string>>;
  }
>() {}

//todo(pear): don't hardcode - cli flag + default
const TEST_OUTPUT_PATH = "./src/clients.gen/s3.ts";
const TEST_MODAL_PATH =
  "D:/code/OSS/aws/api-models-aws/models/s3/service/2006-03-01/s3-2006-03-01.json";

//todo(pear): add this to a categeroy
//todo(pear): add details about the root error to this
export class ShapeNotFound extends Data.TaggedError("ShapeNotFound")<{
  message: string;
}> {}
export class ProtocolNotFound extends Data.TaggedError(
  "ProtocolNotFound",
)<{}> {}

//* todo(pear): better error here - most of these need to be handled
export class UnableToTransformShapeToType extends Data.TaggedError(
  "UnableToTransformShapeToType",
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

const createTsAlias = (shapeId: string) =>
  Effect.fn(function* (type: string) {
    const { aliases } = yield* TypeStore;
    const alias = formatName(shapeId);

    const existing = yield* Ref.get(aliases);
    if (existing.has(alias)) {
      return alias;
    }

    yield* Ref.update(aliases, (map) => map.set(alias, type));
    return alias;
  });

const createTsError = (shapeId: string) =>
  Effect.fn(function* (type: string) {
    const { errors } = yield* TypeStore;
    const errorName = `${formatName(shapeId)}Error`;

    const existing = yield* Ref.get(errors);
    if (existing.has(errorName)) {
      return errorName;
    }

    yield* Ref.update(errors, (map) => map.set(errorName, type));
    return errorName;
  });

//todo(pear): cache this
const convertShapeToTypescript: (
  args_0: [string, GenericShape],
) => Effect.Effect<
  string,
  ShapeNotFound | UnableToTransformShapeToType,
  ModelService | TypeStore
> = Effect.fn(function* ([targetShapeId, targetShape]: [string, GenericShape]) {
  const typescriptType = yield* Match.value(targetShape).pipe(
    Match.when(
      (s) =>
        // shape.type === "bigDecimal" ||
        // shape.type === "bigInteger" ||
        // shape.type === "double" ||
        // shape.type === "float" ||
        s.type === "integer" || s.type === "long",
      () => Effect.succeed("number"),
    ),
    Match.when(
      (s) => s.type === "string",
      () => Effect.succeed("string"),
    ),
    Match.when(
      (s) => s.type === "blob",
      () => Effect.succeed("Uint8Array"),
    ),
    Match.when(
      (s) => s.type === "boolean",
      () => Effect.succeed("boolean"),
    ),
    Match.when(
      (s) => s.type === "timestamp",
      () => Effect.succeed("Date | string"),
    ),
    Match.when(
      (s) => s.type === "enum",
      (s) =>
        Effect.succeed(
          Object.values(s.members)
            .map(({ traits }) => `"${traits["smithy.api#enumValue"]}"`)
            .join(" | "),
        ).pipe(Effect.flatMap(createTsAlias(targetShapeId))),
    ),
    Match.when(
      (s) => s.type === "list",
      (s) =>
        findShape(s.member.target).pipe(
          Effect.flatMap(convertShapeToTypescript),
          Effect.map((type) => `Array<${type}>`),
        ),
    ),
    Match.when(
      (s) => s.type === "structure",
      (s) =>
        Effect.all(
          Object.entries(s.members).map(([memberName, member]) =>
            findShape(member.target).pipe(
              Effect.flatMap(convertShapeToTypescript),
              Effect.map(
                (type) =>
                  `${memberName}${member.traits?.["smithy.api#required"] != null ? "" : "?"}: ${type}`,
              ),
            ),
          ),
          { concurrency: "unbounded" },
        ).pipe(
          Effect.map((members) => `{${members.join(", ")}}`),
          Effect.flatMap(createTsAlias(targetShapeId)),
        ),
    ),
    Match.when(
      (s) => s.type === "union",
      (s) =>
        Effect.all(
          Object.entries(s.members).map(([_memberName, member]) =>
            findShape(member.target).pipe(
              Effect.flatMap(convertShapeToTypescript),
            ),
          ),
          { concurrency: "unbounded" },
        ).pipe(
          Effect.map((members) => members.join(" | ")),
          Effect.flatMap(createTsAlias(targetShapeId)),
        ),
    ),
    Match.when(
      (s) => s.type === "map",
      (s) =>
        Effect.all(
          [
            findShape(s.key.target).pipe(
              Effect.flatMap(convertShapeToTypescript),
            ),
            findShape(s.value.target).pipe(
              Effect.flatMap(convertShapeToTypescript),
            ),
          ],
          { concurrency: "unbounded" },
        ).pipe(
          Effect.map(
            ([keyType, valueType]) => `Record<${keyType}, ${valueType}>`,
          ),
          Effect.flatMap(createTsAlias(targetShapeId)),
        ),
    ),
    Match.orElse((s) =>
      Effect.fail(
        new UnableToTransformShapeToType({
          message: `type ${s.type} at ${targetShapeId}`,
        }),
      ),
    ),
    // Match.exhaustive,
  );

  return typescriptType;
});

const generateClient = Effect.fn(function* (
  modelPath: string,
  outputPath: string,
) {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;

  //* here we store types that we aren't inlining
  const typeAliasStore = yield* Ref.make<Map<string, string>>(new Map());
  const typeErrorStore = yield* Ref.make<Map<string, string>>(new Map());

  const model = yield* fs
    .readFileString(modelPath)
    .pipe(Effect.flatMap(Schema.decodeUnknown(Schema.parseJson(SmithyModel))));

  const client = Effect.gen(function* () {
    const [_serviceShapeName, serviceShape] = yield* findServiceShape;

    const protocol = Object.keys(serviceShape.traits).find((key) =>
      key.startsWith("aws.protocols#"),
    );

    if (protocol == null) {
      return yield* Effect.fail(new ProtocolNotFound());
    }

    const metadata = {
      protocol,
      sdkId: serviceShape.traits["aws.api#service"].sdkId,
      sigV4ServiceName: serviceShape.traits["aws.auth#sigv4"].name,
      version: serviceShape.version,
    } satisfies ServiceMetadata;

    // const imports = `import { type Effect, Layer, Context, Schema as S } from "effect";\nimport type { CommonAwsError } from "../aws-errors";\nimport { makeOperation } from "../client";`
    const imports = [
      `import { type Effect, Layer, Context, Schema as S } from "effect";`,
      `import type { CommonAwsError } from "../aws-errors";`,
      `import { makeOperation } from "../client";`,
    ];

    const serviceName = `${metadata.sdkId}ClientRequirement`;

    const clientServiceTag = dedent`export class ${serviceName} extends Context.Tag("${serviceName}")<${serviceName}, { call: (metadata: any) => (input: any) => Effect.Effect<any>, _endpointMetadataType: EndpointMetadata }>() {}`;

    //todo(pear): move to match
    const createClient = yield* Effect.if(
      protocol === "aws.protocols#restXml",
      {
        onFalse: () =>
          Effect.succeed(
            `import { loggerProvider } from "../protocols/logger";\nexport const createClient = (config: any) => Layer.succeed(${serviceName}, loggerProvider(config, metadata));`,
          ),
        onTrue: () => {
          imports.push(
            `import { restXmlProvider, type EndpointMetadata } from "../protocols/rest-xml";`,
          );
          return Effect.succeed(
            `export const clientLive = Layer.effect(${serviceName}, restXmlProvider(metadata));`,
          );
        },
      },
    );

    const operations = yield* Effect.forEach(
      serviceShape.operations,
      Effect.fn(function* ({ target: operationId }: { target: string }) {
        const [_id, operationShape] = yield* findShape(
          operationId,
          "operation",
        );

        const errors = yield* Effect.all(
          (operationShape.errors ?? []).map(({ target: errorShapeId }) =>
            findShape(errorShapeId).pipe(
              Effect.flatMap(convertShapeToTypescript),
              //todo(pear): error categories
              Effect.flatMap(createTsError(errorShapeId)),
            ),
          ),
        );

        const outputType = yield* Effect.if(
          operationShape.output.target === "smithy.api#Unit",
          {
            onTrue: () => Effect.succeed("void"),
            onFalse: () =>
              findShape(operationShape.output.target, "structure").pipe(
                Effect.flatMap(convertShapeToTypescript),
              ),
          },
        );

        const body = yield* Effect.if(
          operationShape.input.target === "smithy.api#Unit",
          {
            onTrue: () => Effect.succeed("void"),
            onFalse: Effect.fn(function* () {
              const [_structureId, structure] = yield* findShape(
                operationShape.input.target,
                "structure",
              );
              return yield* Effect.reduce(
                Object.entries(structure.members),
                {} as Record<string, unknown>,
                (acc, [key, value]) => {
                  if (value.traits?.["smithy.api#httpHeader"] != null) {
                    if (
                      "x-amz-" +
                        key
                          .replace(/([A-Z])/g, "-$1")
                          .toLowerCase()
                          .slice(1) ===
                      value.traits["smithy.api#httpHeader"]
                    ) {
                      return Effect.succeed(acc);
                    }
                    return Effect.succeed({
                      ...acc,
                      [key]: [value.traits["smithy.api#httpHeader"]],
                    });
                  }
                  if (value.traits?.["smithy.api#httpLabel"] != null) {
                    return Effect.succeed({
                      ...acc,
                      [key]:
                        value.traits["smithy.rules#contextParam"]?.name != null
                          ? [
                              "p",
                              value.traits["smithy.rules#contextParam"]?.name,
                            ]
                          : ["p"],
                    });
                  }
                  if (value.traits?.["smithy.api#httpPayload"] != null) {
                    return Effect.succeed({
                      ...acc,
                      [key]:
                        value.traits["smithy.api#xmlName"] != null
                          ? ["b", value.traits["smithy.api#xmlName"]]
                          : ["b"],
                    });
                  }
                  return Effect.succeed(acc);
                },
              );
            }),
          },
        );

        const inputType = yield* Effect.if(
          operationShape.output.target === "smithy.api#Unit",
          {
            onTrue: () => Effect.succeed("void"),
            onFalse: () =>
              findShape(operationShape.input.target, "structure").pipe(
                Effect.flatMap(convertShapeToTypescript),
              ),
          },
        );

        errors.push("CommonAwsError");

        const exportName = formatName(operationId, true);
        const traits = operationShape.traits["smithy.api#http"];

        //todo(pear): support streaming + inline output types
        const endpointMeta = `{ name: "${exportName}", method: "${traits.method}", uri: "${traits.uri}", body: ${JSON.stringify(body)}}`;

        return `export const ${exportName} = /*@__PURE__*/ makeOperation<${inputType}, ${outputType}, ${errors.join(" | ")}, typeof ${serviceName}>(${endpointMeta}, ${serviceName})`;
        // return `export const ${formatName(operationId)} = (inputs: ${inputShape}) => Effect.Effect<${outputShape}, ${errors.join(" | ")}>`;
      }),
    );

    const aliasedTypes = yield* Ref.get(typeAliasStore).pipe(
      Effect.map((t) =>
        Array.from(t.entries())
          .map(([alias, type]) => `type ${alias} = ${type};`)
          .join("\n"),
      ),
    );

    const errorTypes = yield* Ref.get(typeErrorStore).pipe(
      Effect.map((t) =>
        Array.from(t.entries())
          .map(
            ([errorName, type]) =>
              `export declare class ${errorName} extends S.TaggedError<${type}>()(("${errorName}"), {}).pipe() {}`,
          )
          .join("\n"),
      ),
    );

    const content = dedent`
      ${imports.join("\n")}

      //==== Exports ====
      export const metadata = ${JSON.stringify(metadata)}

      ${clientServiceTag}
      ${createClient}

      ${operations.join("\n")}

      //==== Aliased Types ====
      ${aliasedTypes}

      //==== Error Types ====
      ${errorTypes}\n`;

    yield* fs.makeDirectory(
      path.dirname(path.join(process.cwd(), outputPath)),
      {
        recursive: true,
      },
    );

    yield* fs.writeFileString(path.join(process.cwd(), outputPath), content);
  });

  return yield* client.pipe(
    Effect.provideService(ModelService, model),
    Effect.provideService(TypeStore, {
      aliases: typeAliasStore,
      errors: typeErrorStore,
    }),
  );

  // console.log({ schema, typeDetails, errorTypes });
});

BunRuntime.runMain(
  generateClient(TEST_MODAL_PATH, TEST_OUTPUT_PATH).pipe(
    Logger.withMinimumLogLevel(LogLevel.Debug),
    Effect.provide(BunContext.layer),
  ),
);
