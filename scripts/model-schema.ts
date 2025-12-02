import { Schema as S } from "effect";

// Smithy shape types
export const ShapeType = S.Literal(
  "service", //
  "timestamp", //
  "integer", //
  "boolean", //
  "string", //
  "long", //
  "float", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "double", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "bigInteger", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "bigDecimal", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "blob", //
  "list", //
  "map", //
  "set", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "union", //
  "enum", //
  "resource", // todo(pear) it was NOT IN S3 so I didn't make a shape
  "structure", //
  "operation", //
);

// Trait definition
export const Trait = S.Record({
  key: S.String,
  value: S.Unknown,
});

// Member definition
export const Member = S.Struct({
  target: S.String,
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});

export const ServiceShape = S.Struct({
  type: S.Literal("service"),
  version: S.String,
  operations: S.Array(S.Struct({ target: S.String })),
  traits: S.extend(
    //* dynamic record must be first so schema doesn't remove the values when decoding
    S.Record({ key: S.String, value: S.Unknown }),
    S.Struct({
      "aws.api#service": S.Struct({ sdkId: S.String }),
      "aws.auth#sigv4": S.Struct({ name: S.String }),
    }),
  ),
});

export const TimestampShape = S.Struct({
  type: S.Literal("timestamp"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});
export const IntegerShape = S.Struct({
  type: S.Literal("integer"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});
export const BooleanShape = S.Struct({
  type: S.Literal("boolean"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});
export const StringShape = S.Struct({
  type: S.Literal("string"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});
export const LongShape = S.Struct({
  type: S.Literal("long"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});
export const BlobShape = S.Struct({
  type: S.Literal("blob"),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});

export const ListShape = S.Struct({
  type: S.Literal("list"),
  member: S.Struct({
    target: S.String,
  }),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});

export const MapShape = S.Struct({
  type: S.Literal("map"),
  key: S.Struct({
    target: S.String,
  }),
  value: S.Struct({
    target: S.String,
  }),
});

export const UnionShape = S.Struct({
  type: S.Literal("union"),
  members: S.Record({
    key: S.String,
    value: S.Struct({
      target: S.String,
      traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
    }),
  }),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});

export const EnumShape = S.Struct({
  type: S.Literal("enum"),
  members: S.Record({
    key: S.String,
    value: S.Struct({
      target: S.Literal("smithy.api#Unit"),
      traits: S.Struct({
        "smithy.api#enumValue": S.String,
      }),
    }),
  }),
  traits: S.optional(S.Record({ key: S.String, value: S.Unknown })),
});

export const StructureShape = S.Struct({
  type: S.Literal("structure"),
  members: S.Record({ key: S.String, value: Member }),
  traits: S.Record({ key: S.String, value: S.Unknown }),
});

export const OperationShape = S.Struct({
  type: S.Literal("operation"),
  input: S.Struct({ target: S.String }),
  output: S.Struct({ target: S.String }),
  errors: S.optional(S.Array(S.Struct({ target: S.String }))),
  traits: S.extend(
    //* dynamic record must be first so schema doesn't remove the values when decoding
    S.Record({ key: S.String, value: S.Unknown }),
    S.Struct({
      "smithy.api#http": S.Struct({ method: S.String, uri: S.String }),
    }),
  ),
});

export const GenericShape = S.Union(
  ServiceShape,
  TimestampShape,
  IntegerShape,
  BooleanShape,
  StringShape,
  LongShape,
  BlobShape,
  ListShape,
  MapShape,
  UnionShape,
  EnumShape,
  StructureShape,
  OperationShape,
);

// Smithy model
export const SmithyModel = S.Struct({
  smithy: S.String,
  metadata: S.optional(S.Record({ key: S.String, value: S.Unknown })),
  shapes: S.Record({
    key: S.String,
    value: GenericShape,
  }),
});

// Type exports
export type ShapeType = typeof ShapeType.Type;
export type Member = typeof Member.Type;
export type GenericShape = typeof GenericShape.Type;
export type TimestampShape = typeof TimestampShape.Type;
export type ServiceShape = typeof ServiceShape.Type;
export type IntegerShape = typeof IntegerShape.Type;
export type BooleanShape = typeof BooleanShape.Type;
export type StringShape = typeof StringShape.Type;
export type LongShape = typeof LongShape.Type;
export type BlobShape = typeof BlobShape.Type;
export type ListShape = typeof ListShape.Type;
export type MapShape = typeof MapShape.Type;
export type UnionShape = typeof UnionShape.Type;
export type EnumShape = typeof EnumShape.Type;
export type StructureShape = typeof StructureShape.Type;
export type OperationShape = typeof OperationShape.Type;
export type SmithyModel = typeof SmithyModel.Type;

export type ShapeTypeMap = {
  service: ServiceShape;
  timestamp: TimestampShape;
  integer: IntegerShape;
  boolean: BooleanShape;
  string: StringShape;
  long: LongShape;
  blob: BlobShape;
  list: ListShape;
  map: MapShape;
  union: UnionShape;
  enum: EnumShape;
  structure: StructureShape;
  operation: OperationShape;
};
