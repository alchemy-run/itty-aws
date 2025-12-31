import * as S from "effect/Schema";
import type { AST, PropertySignature } from "effect/SchemaAST";
import { XMLParser } from "fast-xml-parser";

const Identifier = Symbol.for("effect/annotation/Identifier");
const Surrogate = Symbol.for("effect/annotation/Surrogate");

// Parser instance for parseXml
const xmlParser = new XMLParser({
  ignoreAttributes: true,
  parseTagValue: false, // Keep values as strings, we'll convert based on schema
});

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

const unescapeXml = (str: string): string => {
  return str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
};

/**
 * Check if an AST represents an array type
 */
const isArrayAST = (ast: AST): boolean => {
  if (ast._tag === "TupleType" && ast.rest?.[0]) {
    return true;
  }
  // For Transformation wrapping an array
  if (ast._tag === "Transformation") {
    return isArrayAST(ast.from);
  }
  return false;
};

/**
 * Check if an AST represents a number type
 */
const isNumberAST = (ast: AST): boolean => {
  if (ast._tag === "NumberKeyword") return true;
  if (ast._tag === "Transformation") return isNumberAST(ast.from);
  return false;
};

/**
 * Check if an AST represents a boolean type
 */
const isBooleanAST = (ast: AST): boolean => {
  if (ast._tag === "BooleanKeyword") return true;
  if (ast._tag === "Transformation") return isBooleanAST(ast.from);
  return false;
};

/**
 * Parse an XML string according to a schema
 * @param schema - The Effect Schema to parse into
 * @param xml - The XML string to parse
 * @param xmlName - Optional XML root tag name to unwrap before parsing (e.g., "Tagging" for S3 responses)
 */
export const parseXml = (schema: S.Schema<any, any, any>, xml: string, xmlName?: string): any => {
  const parsed = xmlParser.parse(xml);
  const rootTag = getIdentifier(schema.ast);

  // First, try to unwrap using the explicit xmlName if provided
  let content = parsed;
  if (xmlName && parsed[xmlName] !== undefined) {
    content = parsed[xmlName];
  }
  // Next, try to unwrap using the schema's identifier
  else if (rootTag && parsed[rootTag] !== undefined) {
    content = parsed[rootTag];
  }
  // If no root tag matched and parsed has exactly one key, unwrap it
  // This handles cases like <TagSet>...</TagSet> where TagSet is not in the schema
  else {
    const keys = Object.keys(parsed);
    if (keys.length === 1) {
      content = parsed[keys[0]];
    }
  }

  return parseNode(schema.ast, content);
};

/**
 * Parse a parsed XML node according to an AST
 * @param ast - The AST to parse according to
 * @param value - The parsed XML value (from fast-xml-parser)
 * @param xmlName - Optional XML wrapper tag name to unwrap before parsing
 */
export const parseNode = (ast: AST, value: any, xmlName?: string): any => {
  // Handle null/undefined
  if (value === null || value === undefined) {
    return undefined;
  }

  // If xmlName is provided, try to unwrap it first
  let unwrappedValue = value;
  if (
    xmlName &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    value[xmlName] !== undefined
  ) {
    unwrappedValue = value[xmlName];
  }

  // Handle arrays
  if (isArrayAST(ast)) {
    const elementAST = getArrayElementAST(ast);
    if (!elementAST) {
      return Array.isArray(unwrappedValue)
        ? unwrappedValue
        : unwrappedValue
          ? [unwrappedValue]
          : [];
    }

    const elementTag = getIdentifier(elementAST);

    // If we have a wrapper object with the element tag as key
    if (
      elementTag &&
      typeof unwrappedValue === "object" &&
      !Array.isArray(unwrappedValue) &&
      unwrappedValue[elementTag] !== undefined
    ) {
      const items = unwrappedValue[elementTag];
      const arr = Array.isArray(items) ? items : items ? [items] : [];
      return arr.map((item: any) => parseNode(elementAST, item));
    }

    // If value is already an array or needs to be wrapped
    if (Array.isArray(unwrappedValue)) {
      return unwrappedValue.map((item: any) => parseNode(elementAST, item));
    }

    // Handle empty string (empty element)
    if (unwrappedValue === "") {
      return [];
    }

    // Single item that needs to be wrapped in array
    return unwrappedValue ? [parseNode(elementAST, unwrappedValue)] : [];
  }

  // Handle primitives
  if (typeof unwrappedValue === "string") {
    const unescaped = unescapeXml(unwrappedValue);

    if (isNumberAST(ast)) {
      return Number(unescaped);
    }
    if (isBooleanAST(ast)) {
      return unescaped === "true";
    }
    return unescaped;
  }

  if (typeof unwrappedValue === "number" || typeof unwrappedValue === "boolean") {
    return unwrappedValue;
  }

  // Handle objects (classes/structs)
  if (typeof unwrappedValue === "object" && !Array.isArray(unwrappedValue)) {
    return parseObjectProperties(ast, unwrappedValue);
  }

  return unwrappedValue;
};

/**
 * Parse object properties according to the schema
 */
const parseObjectProperties = (ast: AST, value: any): any => {
  const props = getPropertySignatures(ast);
  const result: any = {};

  for (const prop of props) {
    const key = typeof prop.name === "string" ? prop.name : prop.name.toString();
    const propValue = value[key];

    if (propValue !== undefined) {
      result[key] = parseNode(prop.type, propValue);
    }
  }

  return result;
};

const Description = Symbol.for("effect/annotation/Description");

export const isTag = <T extends S.Schema<any>>(tag: T["ast"]["_tag"]) =>
  ((schema) =>
    S.isSchema(schema) ? S.encodedSchema(schema).ast._tag === tag : schema._tag === tag) as {
    (schema: S.Schema<any>): schema is T;
    (schema: AST): boolean;
  };

export const hasGenericAnnotation = (type: string) => (ast: AST | undefined) => {
  const description: string | undefined = ast?.annotations?.[Description] as string;
  return description && description?.startsWith(`${type}<`) && description?.endsWith(">");
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
  return encoded.ast._tag === "TypeLiteral" && encoded.ast.propertySignatures !== undefined;
};

export const isStructSchema = (schema: S.Schema<any>) => {
  return schema.ast._tag === "TypeLiteral" && schema.ast.propertySignatures !== undefined;
};

export const isRecordSchema = (schema: S.Schema<any>) => {
  const encoded = S.encodedSchema(schema);
  return encoded.ast._tag === "TypeLiteral" && encoded.ast.indexSignatures?.[0] !== undefined;
};

export const isListSchema = (schema: S.Schema<any>) => {
  return (
    hasListAnnotation(schema.ast) ||
    (S.encodedSchema(schema).ast._tag === "TupleType" && !isMapSchema(schema))
  );
};
export const hasListAnnotation = (ast: AST | undefined) => {
  const description: string | undefined = ast?.annotations?.[Description] as string;
  return description && description?.startsWith("List<") && description?.endsWith(">");
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
