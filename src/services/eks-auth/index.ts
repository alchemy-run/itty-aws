import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class EKSAuth extends AWSServiceClient {
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
  > {
    return this.call("AssumeRoleForPodIdentity", input);
  }
}

export class EksAuth extends EKSAuth {}

export default EKSAuth;

export declare class AccessDeniedException extends EffectData.TaggedError(
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
export declare class ExpiredTokenException extends EffectData.TaggedError(
  "ExpiredTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTokenException extends EffectData.TaggedError(
  "InvalidTokenException",
)<{
  readonly message?: string;
}> {}
export type JwtToken = string;

export interface PodIdentityAssociation {
  associationArn: string;
  associationId: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface Subject {
  namespace: string;
  serviceAccount: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
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
