import * as Schema from "effect/Schema";

export type RawResponse = Schema.Schema.Type<typeof RawResponse>;
export const RawResponse = Schema.Struct({
  //todo(pear): we create this so we don't need to validate
  meta: OperationMeta,
  headers: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
  //todo(pear): handle streams somehow
  body: Schema.String,
});

export type ParsedResponse = Schema.Schema.Type<typeof ParsedResponse>;
export const ParsedResponse = Schema.Struct({
  headers: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
  //todo(pear): handle streams somehow
  body: Schema.Record({
    key: Schema.String,
    value: Schema.Unknown,
  }),
});
