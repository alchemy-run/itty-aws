import * as Data from "effect/Data";

export interface AwsErrorMeta {
  readonly statusCode: number;
  readonly requestId?: string;
}

// Common AWS errors that can occur across all services
export class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<AwsErrorMeta> {}
export class ExpiredTokenException extends Data.TaggedError(
  "ExpiredTokenException",
)<AwsErrorMeta> {}
export class IncompleteSignature extends Data.TaggedError(
  "IncompleteSignature",
)<AwsErrorMeta> {}
export class InternalFailure extends Data.TaggedError(
  "InternalFailure",
)<AwsErrorMeta> {}
export class MalformedHttpRequestException extends Data.TaggedError(
  "MalformedHttpRequestException",
)<AwsErrorMeta> {}
export class NotAuthorized extends Data.TaggedError(
  "NotAuthorized",
)<AwsErrorMeta> {}
export class OptInRequired extends Data.TaggedError(
  "OptInRequired",
)<AwsErrorMeta> {}
export class RequestAbortedException extends Data.TaggedError(
  "RequestAbortedException",
)<AwsErrorMeta> {}
export class RequestEntityTooLargeException extends Data.TaggedError(
  "RequestEntityTooLargeException",
)<AwsErrorMeta> {}
export class RequestExpired extends Data.TaggedError(
  "RequestExpired",
)<AwsErrorMeta> {}
export class RequestTimeoutException extends Data.TaggedError(
  "RequestTimeoutException",
)<AwsErrorMeta> {}
export class ServiceUnavailable extends Data.TaggedError(
  "ServiceUnavailable",
)<AwsErrorMeta> {}
export class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<AwsErrorMeta> {}
export class UnrecognizedClientException extends Data.TaggedError(
  "UnrecognizedClientException",
)<AwsErrorMeta> {}
export class UnknownOperationException extends Data.TaggedError(
  "UnknownOperationException",
)<AwsErrorMeta> {}
export class ValidationError extends Data.TaggedError(
  "ValidationError",
)<AwsErrorMeta> {}
export class ValidationException extends Data.TaggedError(
  "ValidationException",
)<AwsErrorMeta> {}

export type CommonAwsError =
  | AccessDeniedException
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | ValidationException;

/**
 * @internal
 */
export const commonAwsErrorNames = [
  "AccessDeniedException",
  "ExpiredTokenException",
  "IncompleteSignature",
  "InternalFailure",
  "MalformedHttpRequestException",
  "NotAuthorized",
  "OptInRequired",
  "RequestAbortedException",
  "RequestEntityTooLargeException",
  "RequestExpired",
  "RequestTimeoutException",
  "ServiceUnavailable",
  "ThrottlingException",
  "UnrecognizedClientException",
  "UnknownOperationException",
  "ValidationError",
  "ValidationException",
];

export function isCommonAwsErrorName(errorName: string): boolean {
  return commonAwsErrorNames.includes(errorName);
}
