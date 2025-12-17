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
} from "effect";
import {
  SmithyModel,
  ServiceShape,
  GenericShape,
  ShapeTypeMap,
} from "./model-schema";
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

const convertShapeToSchema: (
  args_0: [string, GenericShape],
) => Effect.Effect<
  string,
  UnableToTransformShapeToType | ShapeNotFound,
  ModelService
> = Effect.fn(function* ([targetShapeId, targetShape]: [string, GenericShape]) {
  const schema = yield* Match.value(targetShape).pipe(
    Match.when(
      (s) => s.type === "integer" || s.type === "long",
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
      (s) => s.type === "enum",
      (s) =>
        Effect.succeed(
          Object.values(s.members).map(
            ({ traits }) =>
              `Schema.Literal("${traits["smithy.api#enumValue"]}")`,
          ),
          //todo(pear): figure our a more typesafe way of doing this
          // ).pipe(Effect.map((members) => `Schema.Union(${members.join(", ")})`)),
        ).pipe(Effect.map((members) => `Schema.String`)),
    ),
    Match.when(
      (s) => s.type === "list",
      (s) =>
        findShape(s.member.target).pipe(
          Effect.flatMap(convertShapeToSchema),
          Effect.map((type) => `Schema.Array(${type})`),
        ),
    ),
    Match.when(
      (s) => s.type === "structure",
      (s) =>
        Effect.all(
          Object.entries(s.members).map(([memberName, member]) =>
            findShape(member.target).pipe(
              Effect.flatMap(convertShapeToSchema),
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
          Effect.map((members) => `Schema.Struct({${members.join(", ")}})`),
        ),
    ),
    Match.when(
      (s) => s.type === "union",
      (s) =>
        Effect.all(
          Object.entries(s.members).map(([_memberName, member]) =>
            findShape(member.target).pipe(Effect.flatMap(convertShapeToSchema)),
          ),
          { concurrency: "unbounded" },
        ).pipe(Effect.map((members) => `Schema.Union(${members.join(", ")})`)),
    ),
    Match.when(
      (s) => s.type === "map",
      (s) =>
        Effect.all(
          [
            findShape(s.key.target).pipe(Effect.flatMap(convertShapeToSchema)),
            findShape(s.value.target).pipe(
              Effect.flatMap(convertShapeToSchema),
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
    Match.orElse((s) =>
      Effect.fail(
        new UnableToTransformShapeToType({
          message: `type ${s.type} at ${targetShapeId}`,
        }),
      ),
    ),
    // Match.orElse(() => Effect.succeed("$$TEMP_SCHEMA")),
    // Match.exhaustive,
  );

  return schema;
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

    const operations = yield* Effect.forEach(
      serviceShape.operations,
      Effect.fn(function* ({ target: operationId }: { target: string }) {
        const [_id, operationShape] = yield* findShape(
          operationId,
          "operation",
        );

        const input =
          operationShape.input.target === "smithy.api#Unit"
            ? "Schema.Struct({})" //todo(pear): should this be Schema.Never?
            : yield* findShape(operationShape.input.target).pipe(
                Effect.flatMap(convertShapeToSchema),
              );
        const output =
          operationShape.output.target === "smithy.api#Unit"
            ? "Schema.Struct({})" //todo(pear): should this be Schema.Never?
            : yield* findShape(operationShape.output.target).pipe(
                Effect.flatMap(convertShapeToSchema),
              );

        const errors =
          operationShape.errors == null || operationShape.errors.length === 0
            ? "Schema.Void"
            : yield* Effect.forEach(
                operationShape.errors,
                ({ target: errorShapeReference }) =>
                  findShape(errorShapeReference).pipe(
                    Effect.flatMap(convertShapeToSchema),
                    Effect.map(
                      (s) =>
                        `Error("${formatName(errorShapeReference)}", ${s})`,
                    ),
                  ),
              ).pipe(
                Effect.map((schemas) => `Schema.Union(${schemas.join(", ")})`),
              );

        //todo(pear): correct middleware (stream bodies should be noop?)
        return `export const ${formatName(_id)} = /*#__PURE__*/ makeOperation(() => Operation({ uri: "${operationShape["traits"]["smithy.api#http"]["uri"]}", method: "${operationShape["traits"]["smithy.api#http"]["method"]}", sdkId: "${serviceShape.traits["aws.api#service"].sdkId}", sigV4ServiceName: "${serviceShape.traits["aws.auth#sigv4"].name}", name: "${formatName(_id)}" }, ${input}, ${output}, ${errors}), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);`;
      }),
    );

    const content = dedent`
      import { Schema} from "effect"
      import { FormatXMLRequest, FormatXMLResponse, makeOperation, NoopRequest, NoopResponse } from "../client";
      import { Operation, Path, Header, StreamBody, Body, Error } from "../schema-helpers";

      ${operations.join("\n")}
      `;

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
