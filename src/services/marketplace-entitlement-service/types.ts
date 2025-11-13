import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";
type CommonAwsError =
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
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | ValidationException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class MarketplaceEntitlementService extends AWSServiceClient {
  getEntitlements(
    input: GetEntitlementsRequest,
  ): Effect.Effect<
    GetEntitlementsResult,
    | InternalServiceErrorException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type MarketplaceEntitlementServiceBoolean = boolean;

export type Double = number;

export interface Entitlement {
  ProductCode?: string;
  Dimension?: string;
  CustomerIdentifier?: string;
  CustomerAWSAccountId?: string;
  Value?: EntitlementValue;
  ExpirationDate?: Date | string;
}
export type EntitlementList = Array<Entitlement>;
export interface EntitlementValue {
  IntegerValue?: number;
  DoubleValue?: number;
  BooleanValue?: boolean;
  StringValue?: string;
}
export type ErrorMessage = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export type GetEntitlementFilterName =
  | "CUSTOMER_IDENTIFIER"
  | "DIMENSION"
  | "CUSTOMER_AWS_ACCOUNT_ID";
export type GetEntitlementFilters = Record<
  GetEntitlementFilterName,
  Array<string>
>;
export interface GetEntitlementsRequest {
  ProductCode: string;
  Filter?: { [key in GetEntitlementFilterName]?: string };
  NextToken?: string;
  MaxResults?: number;
}
export interface GetEntitlementsResult {
  Entitlements?: Array<Entitlement>;
  NextToken?: string;
}
export type Integer = number;

export declare class InternalServiceErrorException extends Data.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type NonEmptyString = string;

export type PageSizeInteger = number;

export type ProductCode = string;

export type MarketplaceEntitlementServiceString = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export declare namespace GetEntitlements {
  export type Input = GetEntitlementsRequest;
  export type Output = GetEntitlementsResult;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export type MarketplaceEntitlementServiceErrors =
  | InternalServiceErrorException
  | InvalidParameterException
  | ThrottlingException
  | CommonAwsError;
