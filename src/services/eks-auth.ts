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

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.optional(S.String)}) {};
export class ExpiredTokenException extends S.TaggedError<ExpiredTokenException>()("ExpiredTokenException", {message: S.optional(S.String)}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {message: S.optional(S.String)}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {message: S.optional(S.String)}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {message: S.optional(S.String)}) {};
export class InvalidTokenException extends S.TaggedError<InvalidTokenException>()("InvalidTokenException", {message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {message: S.optional(S.String)}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * The Amazon EKS Auth API and the `AssumeRoleForPodIdentity` action are only used
 * by the EKS Pod Identity Agent.
 * 
 * 
 * We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if
 * credentials from an EKS Pod Identity association are available in the pod, the latest versions of the
 * SDKs use them automatically.
 */export const assumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-26", uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "EKSAuthFrontend.AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, [AccessDeniedException, ExpiredTokenException, InternalServerException, InvalidParameterException, InvalidRequestException, InvalidTokenException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
