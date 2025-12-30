import * as S from "effect/Schema";
import { withCategory, ERROR_CATEGORIES } from "./errors";

//==== Common AWS Errors ====
export declare class AccessDeniedException extends S.TaggedError<AccessDeniedException>()(
  "AccessDeniedException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class ExpiredTokenException extends S.TaggedError<ExpiredTokenException>()(
  "ExpiredTokenException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class IncompleteSignature extends S.TaggedError<IncompleteSignature>()(
  "IncompleteSignature",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class InternalFailure extends S.TaggedError<InternalFailure>()(
  "InternalFailure",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class MalformedHttpRequestException extends S.TaggedError<MalformedHttpRequestException>()(
  "MalformedHttpRequestException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class NotAuthorized extends S.TaggedError<NotAuthorized>()(
  "NotAuthorized",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class OptInRequired extends S.TaggedError<OptInRequired>()(
  "OptInRequired",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class RequestAbortedException extends S.TaggedError<RequestAbortedException>()(
  "RequestAbortedException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class RequestEntityTooLargeException extends S.TaggedError<RequestEntityTooLargeException>()(
  "RequestEntityTooLargeException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class RequestExpired extends S.TaggedError<RequestExpired>()(
  "RequestExpired",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class RequestTimeoutException extends S.TaggedError<RequestTimeoutException>()(
  "RequestTimeoutException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class ServiceUnavailable extends S.TaggedError<ServiceUnavailable>()(
  "ServiceUnavailable",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class ThrottlingException extends S.TaggedError<ThrottlingException>()(
  "ThrottlingException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class UnrecognizedClientException extends S.TaggedError<UnrecognizedClientException>()(
  "UnrecognizedClientException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class UnknownOperationException extends S.TaggedError<UnknownOperationException>()(
  "UnknownOperationException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class ValidationError extends S.TaggedError<ValidationError>()(
  "ValidationError",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class ValidationException extends S.TaggedError<ValidationException>()(
  "ValidationException",
  {},
).pipe(
  withCategory(ERROR_CATEGORIES.AWS_ERROR, ERROR_CATEGORIES.COMMON_ERROR),
) {}

export declare class UnknownAwsError extends S.TaggedError<UnknownAwsError>()(
  "UnknownAwsError",
  {
    errorTag: S.String,
    errorData: S.Any,
  },
).pipe(withCategory(ERROR_CATEGORIES.AWS_ERROR)) {}

export const COMMON_ERRORS = [
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
] as const;

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
