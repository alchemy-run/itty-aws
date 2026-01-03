/**
 * Rules Resolver - resolves endpoints using Smithy rules engine.
 *
 * This layer:
 * 1. Extracts endpoint rule set from schema annotations
 * 2. Builds endpoint parameters from input and region
 * 3. Evaluates rules to resolve endpoint URL, headers, and auth schemes
 *
 * This is independently testable without making HTTP requests.
 */

import * as Effect from "effect/Effect";
import * as AST from "effect/SchemaAST";
import type { Operation } from "../operation.ts";
import { getContextParam, getEndpointRuleSet } from "../traits.ts";
import { getPropertySignatures } from "../util/ast.ts";
import type { EndpointParams, RulesValue } from "./model.ts";
import { resolveEndpoint } from "./evaluator.ts";

export interface RulesResolverInput {
  /** The operation input payload */
  input: unknown;
  /** The AWS region */
  region: string;
}

/**
 * Create a rules resolver for a given operation.
 *
 * Expensive work (rule set discovery, context param extraction) is done once at creation time.
 *
 * @param operation - The operation (with input schema containing endpoint rule set annotations)
 * @param options - Optional overrides
 * @returns A function that resolves endpoints from input values and region
 */
export const makeRulesResolver = (operation: Operation) => {
  const inputAst = operation.input.ast;

  // Extract rule set from annotations or use override (done once)
  const ruleSet = getEndpointRuleSet(inputAst);

  // If no rule set is available, return null
  if (!ruleSet) {
    return undefined;
  }

  // Extract context param mappings (done once)
  const contextParamMappings = extractContextParamMappings(inputAst);

  // Return a function that resolves endpoints
  return Effect.fn(function* (resolverInput: RulesResolverInput) {
    const { input, region } = resolverInput;

    // Build endpoint params from input + region
    const endpointParams: EndpointParams = {
      Region: region,
    };

    // Extract context parameters from the payload
    const payloadObj = input as Record<string, RulesValue>;
    for (const [propName, paramName] of contextParamMappings) {
      if (payloadObj[propName] !== undefined) {
        endpointParams[paramName] = payloadObj[propName];
      }
    }

    // Resolve endpoint using the rules engine
    return yield* resolveEndpoint(ruleSet, { endpointParams });
  });
};

/**
 * Extract context parameter mappings from an input schema.
 * Maps property names to their context parameter names.
 */
function extractContextParamMappings(ast: AST.AST): Map<string, string> {
  const mappings = new Map<string, string>();
  const props = getPropertySignatures(ast);

  for (const prop of props) {
    const contextParam = getContextParam(prop);
    if (contextParam) {
      mappings.set(String(prop.name), contextParam);
    }
  }

  return mappings;
}
