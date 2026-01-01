import type * as AST from "effect/SchemaAST";
import { xmlNamespaceSymbol, xmlNameSymbol } from "../traits.ts";

const Identifier = Symbol.for("effect/annotation/Identifier");
const Surrogate = Symbol.for("effect/annotation/Surrogate");

/**
 * Unwrap Union types to get to the actual type (handles S.optional)
 */
export function unwrapUnion(ast: AST.AST): AST.AST {
  if (ast._tag === "Union") {
    const nonNullish = ast.types.filter(
      (t) => t._tag !== "UndefinedKeyword" && !(t._tag === "Literal" && t.literal === null),
    );
    if (nonNullish.length === 1) {
      return unwrapUnion(nonNullish[0]);
    }
  }
  return ast;
}

/**
 * Get the identifier (class name) from an AST node
 */
export function getIdentifier(ast: AST.AST): string | undefined {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getIdentifier(unwrapped);

  if (unwrapped._tag === "Transformation" && unwrapped.to) {
    const id = unwrapped.to.annotations?.[Identifier];
    if (typeof id === "string") return id;
  }
  if (unwrapped._tag === "Declaration") {
    const id = unwrapped.annotations?.[Identifier];
    if (typeof id === "string") return id;
  }
  const directId = unwrapped.annotations?.[Identifier];
  if (typeof directId === "string") return directId;
  return undefined;
}

/**
 * Get property signatures from a schema AST
 */
export function getPropertySignatures(ast: AST.AST): readonly AST.PropertySignature[] {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getPropertySignatures(unwrapped);

  if (unwrapped._tag === "Transformation" && unwrapped.to) {
    const surrogate = unwrapped.to.annotations?.[Surrogate] as AST.AST | undefined;
    if (surrogate && surrogate._tag === "TypeLiteral") {
      return surrogate.propertySignatures;
    }
  }
  if (unwrapped._tag === "Declaration") {
    const surrogate = unwrapped.annotations?.[Surrogate] as AST.AST | undefined;
    if (surrogate && surrogate._tag === "TypeLiteral") {
      return surrogate.propertySignatures;
    }
  }
  if (unwrapped._tag === "TypeLiteral") {
    return unwrapped.propertySignatures;
  }
  return [];
}

/**
 * Get encoded property signatures (from side of Transformation)
 */
export function getEncodedPropertySignatures(ast: AST.AST): readonly AST.PropertySignature[] {
  // First unwrap Union (handles S.optional)
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getEncodedPropertySignatures(unwrapped);

  if (unwrapped._tag === "Transformation" && unwrapped.from?._tag === "TypeLiteral") {
    return unwrapped.from.propertySignatures;
  }
  return getPropertySignatures(unwrapped);
}

/**
 * Get element AST from array/tuple type
 */
export function getArrayElementAST(ast: AST.AST): AST.AST | undefined {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getArrayElementAST(unwrapped);

  if (unwrapped._tag === "TupleType" && unwrapped.rest?.[0]) {
    return unwrapped.rest[0].type;
  }
  if (unwrapped._tag === "Transformation") {
    return getArrayElementAST(unwrapped.from);
  }
  return undefined;
}

/**
 * Check if AST represents an array type
 */
export function isArrayAST(ast: AST.AST): boolean {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return isArrayAST(unwrapped);

  if (unwrapped._tag === "TupleType" && unwrapped.rest?.[0]) return true;
  if (unwrapped._tag === "Transformation") return isArrayAST(unwrapped.from);
  return false;
}

/**
 * Check if AST represents a number type
 */
export function isNumberAST(ast: AST.AST): boolean {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return isNumberAST(unwrapped);

  if (unwrapped._tag === "NumberKeyword") return true;
  if (unwrapped._tag === "Transformation") return isNumberAST(unwrapped.from);
  return false;
}

/**
 * Check if AST represents a boolean type
 */
export function isBooleanAST(ast: AST.AST): boolean {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return isBooleanAST(unwrapped);

  if (unwrapped._tag === "BooleanKeyword") return true;
  if (unwrapped._tag === "Transformation") return isBooleanAST(unwrapped.from);
  return false;
}

/**
 * Check if AST represents a Date type (DateFromString transformation)
 */
export function isDateAST(ast: AST.AST): boolean {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return isDateAST(unwrapped);

  // S.Date is wrapped in a Refinement that contains a Transformation
  if (unwrapped._tag === "Refinement") {
    return isDateAST(unwrapped.from);
  }

  // S.Date is a Transformation from string to Date (DateFromSelf)
  if (unwrapped._tag === "Transformation" && unwrapped.to?._tag === "Declaration") {
    const id = unwrapped.to.annotations?.[Identifier];
    if (id === "Date" || id === "DateFromSelf") return true;
  }
  return false;
}

/**
 * Get xmlNamespace annotation from AST
 */
export function getXmlNamespace(ast: AST.AST): string | undefined {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getXmlNamespace(unwrapped);

  if (unwrapped._tag === "Transformation" && unwrapped.to) {
    const ns = unwrapped.to.annotations?.[xmlNamespaceSymbol] as string | undefined;
    if (ns) return ns;
  }
  return unwrapped.annotations?.[xmlNamespaceSymbol] as string | undefined;
}

/**
 * Get xmlName annotation from AST (class-level)
 */
export function getXmlNameFromAST(ast: AST.AST): string | undefined {
  const unwrapped = unwrapUnion(ast);
  if (unwrapped !== ast) return getXmlNameFromAST(unwrapped);

  if (unwrapped._tag === "Transformation" && unwrapped.to) {
    const name = unwrapped.to.annotations?.[xmlNameSymbol] as string | undefined;
    if (name) return name;
  }
  return unwrapped.annotations?.[xmlNameSymbol] as string | undefined;
}
