import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class AssumeRoleForPodIdentityRequest extends S.Class<AssumeRoleForPodIdentityRequest>("AssumeRoleForPodIdentityRequest")({clusterName: S.String, token: S.String}) {}
export class Subject extends S.Class<Subject>("Subject")({namespace: S.String, serviceAccount: S.String}) {}
export class PodIdentityAssociation extends S.Class<PodIdentityAssociation>("PodIdentityAssociation")({associationArn: S.String, associationId: S.String}) {}
export class AssumedRoleUser extends S.Class<AssumedRoleUser>("AssumedRoleUser")({arn: S.String, assumeRoleId: S.String}) {}
export class Credentials extends S.Class<Credentials>("Credentials")({sessionToken: S.String, secretAccessKey: S.String, accessKeyId: S.String, expiration: S.Date}) {}
export class AssumeRoleForPodIdentityResponse extends S.Class<AssumeRoleForPodIdentityResponse>("AssumeRoleForPodIdentityResponse")({subject: Subject, audience: S.String, podIdentityAssociation: PodIdentityAssociation, assumedRoleUser: AssumedRoleUser, credentials: Credentials}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ExpiredTokenException extends S.Class<ExpiredTokenException>("ExpiredTokenException")({message: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class InvalidParameterException extends S.Class<InvalidParameterException>("InvalidParameterException")({message: S.optional(S.String)}) {}
export class InvalidRequestException extends S.Class<InvalidRequestException>("InvalidRequestException")({message: S.optional(S.String)}) {}
export class InvalidTokenException extends S.Class<InvalidTokenException>("InvalidTokenException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ExpiredTokenExceptionError extends S.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class InvalidParameterExceptionError extends S.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class InvalidRequestExceptionError extends S.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class InvalidTokenExceptionError extends S.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const assumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "EKSAuthFrontend.AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, [AccessDeniedExceptionError, ExpiredTokenExceptionError, InternalServerExceptionError, InvalidParameterExceptionError, InvalidRequestExceptionError, InvalidTokenExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
