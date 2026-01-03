/**
 * Smithy Rules Engine
 *
 * A TypeScript implementation of the Smithy rules engine for endpoint resolution.
 */

// Types
export type {
  AuthSchemeObject,
  ConditionObject,
  EndpointObject,
  EndpointParams,
  EndpointResolverOptions,
  EvaluationScope,
  Expression,
  FunctionObject,
  ParameterObject,
  ParameterType,
  ParsedArn,
  ParsedUrl,
  PartitionInfo,
  ReferenceObject,
  ResolvedEndpoint,
  RuleObject,
  RuleSetObject,
  RulesValue,
} from "./model.ts";

// Error types
export { EndpointError, NoMatchingRuleError } from "./model.ts";

// Type guards
export {
  isEndpointRule,
  isErrorRule,
  isFunction,
  isReference,
  isTreeRule,
} from "./model.ts";

// Standard functions
export {
  booleanEquals,
  getAttr,
  isSet,
  isValidHostLabel,
  not,
  parseURL,
  stringEquals,
  substring,
  uriEncode,
} from "./standard-functions.ts";

// AWS functions
export {
  isVirtualHostableS3Bucket,
  parseArn,
  partition,
} from "./aws-functions.ts";

// Evaluator
export { resolveEndpoint, resolveEndpointSync } from "./evaluator.ts";
