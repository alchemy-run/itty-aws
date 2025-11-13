import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
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
  | AccessDeniedException
  | ExpiredTokenException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class EKSAuth extends AWSServiceClient {
  assumeRoleForPodIdentity(
    input: AssumeRoleForPodIdentityRequest,
  ): Effect.Effect<
    AssumeRoleForPodIdentityResponse,
    | AccessDeniedException
    | ExpiredTokenException
    | InternalServerException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class EksAuth extends EKSAuth {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AssumedRoleUser {
  arn: string;
  assumeRoleId: string;
}
export interface AssumeRoleForPodIdentityRequest {
  clusterName: string;
  token: string;
}
export interface AssumeRoleForPodIdentityResponse {
  subject: Subject;
  audience: string;
  podIdentityAssociation: PodIdentityAssociation;
  assumedRoleUser: AssumedRoleUser;
  credentials: Credentials;
}
export type ClusterName = string;

export interface Credentials {
  sessionToken: string;
  secretAccessKey: string;
  accessKeyId: string;
  expiration: Date | string;
}
export declare class ExpiredTokenException extends Data.TaggedError(
  "ExpiredTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTokenException extends Data.TaggedError(
  "InvalidTokenException",
)<{
  readonly message?: string;
}> {}
export type JwtToken = string;

export interface PodIdentityAssociation {
  associationArn: string;
  associationId: string;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface Subject {
  namespace: string;
  serviceAccount: string;
}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare namespace AssumeRoleForPodIdentity {
  export type Input = AssumeRoleForPodIdentityRequest;
  export type Output = AssumeRoleForPodIdentityResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredTokenException
    | InternalServerException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidTokenException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export type EKSAuthErrors =
  | AccessDeniedException
  | ExpiredTokenException
  | InternalServerException
  | InvalidParameterException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonAwsError;
