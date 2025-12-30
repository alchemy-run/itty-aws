import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class AssumeRoleForPodIdentityRequest extends Schema.Class<AssumeRoleForPodIdentityRequest>("AssumeRoleForPodIdentityRequest")({clusterName: Schema.String, token: Schema.String}) {}
export class Subject extends Schema.Class<Subject>("Subject")({namespace: Schema.String, serviceAccount: Schema.String}) {}
export class PodIdentityAssociation extends Schema.Class<PodIdentityAssociation>("PodIdentityAssociation")({associationArn: Schema.String, associationId: Schema.String}) {}
export class AssumedRoleUser extends Schema.Class<AssumedRoleUser>("AssumedRoleUser")({arn: Schema.String, assumeRoleId: Schema.String}) {}
export class Credentials extends Schema.Class<Credentials>("Credentials")({sessionToken: Schema.String, secretAccessKey: Schema.String, accessKeyId: Schema.String, expiration: Schema.Date}) {}
export class AssumeRoleForPodIdentityResponse extends Schema.Class<AssumeRoleForPodIdentityResponse>("AssumeRoleForPodIdentityResponse")({subject: Subject, audience: Schema.String, podIdentityAssociation: PodIdentityAssociation, assumedRoleUser: AssumedRoleUser, credentials: Credentials}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ExpiredTokenException extends Schema.Class<ExpiredTokenException>("ExpiredTokenException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({message: Schema.optional(Schema.String)}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({message: Schema.optional(Schema.String)}) {}
export class InvalidTokenException extends Schema.Class<InvalidTokenException>("InvalidTokenException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class InvalidTokenExceptionError extends Schema.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const assumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "EKSAuthFrontend.AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, [AccessDeniedExceptionError, ExpiredTokenExceptionError, InternalServerExceptionError, InvalidParameterExceptionError, InvalidRequestExceptionError, InvalidTokenExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
