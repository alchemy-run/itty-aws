import * as Schema from "effect/Schema";

export type RawRequest = Schema.Schema.Type<typeof RawRequest>;
export const RawRequest = Schema.Struct({
  //todo(pear): we create this so we don't need to validate
  meta: OperationMeta,
  unsignedUri: Schema.String,
  unsignedHeaders: Schema.Record({
    key: Schema.String,
    value: Schema.String,
  }),
  unsignedBody: Schema.UndefinedOr(
    Schema.Union(
      Schema.Record({
        key: Schema.String,
        value: Schema.Any,
      }),
      Schema.String,
      Schema.instanceOf(Uint8Array),
      Schema.instanceOf(ReadableStream),
    ),
  ),
});
export type UnsignedRequest = Schema.Schema.Type<typeof UnsignedRequest>;
export const UnsignedRequest = Schema.Struct({
  unsignedUri: Schema.String,
  unsignedHeaders: Schema.Record({
    key: Schema.String,
    value: Schema.String,
  }),
  unsignedBody: Schema.UndefinedOr(
    Schema.Union(Schema.String, Schema.instanceOf(Uint8Array), Schema.instanceOf(ReadableStream)),
  ),
});
