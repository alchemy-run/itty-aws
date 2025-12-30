import * as S from "effect/Schema";
import type { AST, PropertySignature } from "effect/SchemaAST";

const Identifier = Symbol.for("effect/annotation/Identifier");
const Surrogate = Symbol.for("effect/annotation/Surrogate");

/**
 * Get the identifier (class name) from an AST node
 */
const getIdentifier = (ast: AST): string | undefined => {
  // For Transformation (S.Class), look in ast.to.annotations
  if (ast._tag === "Transformation" && ast.to) {
    const id = ast.to.annotations?.[Identifier];
    if (typeof id === "string") return id;
  }
  // For Declaration (nested class in property types)
  if (ast._tag === "Declaration") {
    const id = ast.annotations?.[Identifier];
    if (typeof id === "string") return id;
  }
  // Check direct annotations
  const directId = ast.annotations?.[Identifier];
  if (typeof directId === "string") return directId;
  return undefined;
};

/**
 * Get property signatures from a class/struct schema
 */
const getPropertySignatures = (ast: AST): readonly PropertySignature[] => {
  // For Transformation (S.Class), get surrogate's property signatures
  if (ast._tag === "Transformation" && ast.to) {
    const surrogate = ast.to.annotations?.[Surrogate] as AST | undefined;
    if (surrogate && surrogate._tag === "TypeLiteral") {
      return surrogate.propertySignatures;
    }
  }
  // For Declaration (nested class in property types)
  if (ast._tag === "Declaration") {
    const surrogate = ast.annotations?.[Surrogate] as AST | undefined;
    if (surrogate && surrogate._tag === "TypeLiteral") {
      return surrogate.propertySignatures;
    }
  }
  // For direct TypeLiteral
  if (ast._tag === "TypeLiteral") {
    return ast.propertySignatures;
  }
  return [];
};

/**
 * Get the element AST from an array/tuple type
 */
const getArrayElementAST = (ast: AST): AST | undefined => {
  if (ast._tag === "TupleType" && ast.rest?.[0]) {
    return ast.rest[0].type;
  }
  return undefined;
};

/**
 * Format a value as XML based on its schema
 */
export const formatXml = (schema: S.Schema<any, any, any>, value: any): string => {
  return formatNode(schema.ast, value, true);
};

export const formatNode = (ast: AST, value: any, includeRootTag: boolean = true): string => {
  // Handle null/undefined
  if (value === null || value === undefined) {
    return "";
  }

  // Handle primitives
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return escapeXml(String(value));
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const elementAST = getArrayElementAST(ast);
    if (!elementAST) {
      return value.map((item) => formatNode(ast, item, true)).join("");
    }
    const elementTag = getIdentifier(elementAST);
    if (elementTag) {
      // For arrays, wrap each item with the element type's tag
      return value
        .map((item) => `<${elementTag}>${formatObjectProperties(elementAST, item)}</${elementTag}>`)
        .join("");
    }
    return value.map((item) => formatNode(elementAST, item, true)).join("");
  }

  // Handle objects (classes/structs)
  if (typeof value === "object") {
    const formattedProps = formatObjectProperties(ast, value);

    if (includeRootTag) {
      const rootTag = getIdentifier(ast);
      if (rootTag) {
        return `<${rootTag}>${formattedProps}</${rootTag}>`;
      }
    }
    return formattedProps;
  }

  return escapeXml(String(value));
};

/**
 * Format just the properties of an object, without wrapping in a root tag
 */
const formatObjectProperties = (ast: AST, value: any): string => {
  const props = getPropertySignatures(ast);

  return props
    .filter((prop) => {
      const key = typeof prop.name === "string" ? prop.name : prop.name.toString();
      return value[key] !== undefined;
    })
    .map((prop) => {
      const key = typeof prop.name === "string" ? prop.name : prop.name.toString();
      const propValue = value[key];
      // Don't include root tag for nested objects - property name is the wrapper
      const content = formatNode(prop.type, propValue, false);
      return `<${key}>${content}</${key}>`;
    })
    .join("");
};

const escapeXml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

const Description = Symbol.for("effect/annotation/Description");

export const isTag = <T extends S.Schema<any>>(tag: T["ast"]["_tag"]) =>
  ((schema) =>
    S.isSchema(schema)
      ? S.encodedSchema(schema).ast._tag === tag
      : schema._tag === tag) as {
    (schema: S.Schema<any>): schema is T;
    (schema: AST): boolean;
  };

export const hasGenericAnnotation =
  (type: string) => (ast: AST | undefined) => {
    const description: string | undefined = ast?.annotations?.[
      Description
    ] as string;
    return (
      description &&
      description?.startsWith(`${type}<`) &&
      description?.endsWith(">")
    );
  };

export const isNullishSchema = (schema: S.Schema<any>) =>
  isNullSchema(schema) || isUndefinedSchema(schema);
export const isNullSchema = (schema: S.Schema<any>) =>
  schema.ast._tag === "Literal" && schema.ast.literal === null;
export const isUndefinedSchema = isTag("UndefinedKeyword");
export const isBooleanSchema = isTag<S.Schema<boolean>>("BooleanKeyword");
export const isStringSchema = isTag<S.Schema<string>>("StringKeyword");
export const isNumberSchema = isTag<S.Schema<number>>("NumberKeyword");

export const hasMapAnnotation = hasGenericAnnotation("Map");

export const isRecordLikeSchema = (schema: S.Schema<any>) =>
  isMapSchema(schema) ||
  isRecordSchema(schema) ||
  isStructSchema(schema) ||
  isClassSchema(schema) ||
  false;

export const isMapSchema = (schema: S.Schema<any>) =>
  hasMapAnnotation(schema.ast) ||
  // @ts-expect-error - ast.to?. is not narrowed, we don't care
  hasMapAnnotation(schema.ast.to) ||
  false;

export const isClassSchema = (schema: S.Schema<any>) => {
  const encoded = S.encodedSchema(schema);
  return (
    encoded.ast._tag === "TypeLiteral" &&
    encoded.ast.propertySignatures !== undefined
  );
};

export const isStructSchema = (schema: S.Schema<any>) => {
  return (
    schema.ast._tag === "TypeLiteral" &&
    schema.ast.propertySignatures !== undefined
  );
};

export const isRecordSchema = (schema: S.Schema<any>) => {
  const encoded = S.encodedSchema(schema);
  return (
    encoded.ast._tag === "TypeLiteral" &&
    encoded.ast.indexSignatures?.[0] !== undefined
  );
};

export const isListSchema = (schema: S.Schema<any>) => {
  return (
    hasListAnnotation(schema.ast) ||
    (S.encodedSchema(schema).ast._tag === "TupleType" && !isMapSchema(schema))
  );
};
export const hasListAnnotation = (ast: AST | undefined) => {
  const description: string | undefined = ast?.annotations?.[
    Description
  ] as string;
  return (
    description &&
    description?.startsWith("List<") &&
    description?.endsWith(">")
  );
};

export const isSetSchema = (schema: S.Schema<any>) => {
  return (
    // @ts-expect-error - ast.to?. is not narrowed, we don't care
    hasSetAnnotation(schema.ast) || hasSetAnnotation(schema.ast.to) || false
  );
};

export const hasSetAnnotation = hasGenericAnnotation("Set");

export const getSetValueAST = (schema: S.Schema<any>): AST =>
  // @ts-expect-error - ast.to?. is not narrowed, we don't care
  isSetSchema(schema) && schema.ast.to?.typeParameters[0];