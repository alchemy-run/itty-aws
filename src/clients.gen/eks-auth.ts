import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const AssumeRoleForPodIdentityRequest = Schema.Struct({clusterName: Schema.String, token: Schema.String});
export const Subject = Schema.Struct({namespace: Schema.String, serviceAccount: Schema.String});
export const PodIdentityAssociation = Schema.Struct({associationArn: Schema.String, associationId: Schema.String});
export const AssumedRoleUser = Schema.Struct({arn: Schema.String, assumeRoleId: Schema.String});
export const Credentials = Schema.Struct({sessionToken: Schema.String, secretAccessKey: Schema.String, accessKeyId: Schema.String, expiration: Schema.Date});
export const AssumeRoleForPodIdentityResponse = Schema.Struct({subject: Subject, audience: Schema.String, podIdentityAssociation: PodIdentityAssociation, assumedRoleUser: AssumedRoleUser, credentials: Credentials});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ExpiredTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class InvalidTokenExceptionError extends Schema.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const assumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-11-26", uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "EKSAuthFrontend.AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, [AccessDeniedExceptionError, ExpiredTokenExceptionError, InternalServerExceptionError, InvalidParameterExceptionError, InvalidRequestExceptionError, InvalidTokenExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
