import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ExpiredTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const Credentials = Schema.Struct({sessionToken: Schema.String, secretAccessKey: Schema.String, accessKeyId: Schema.String, expiration: Schema.Date});
export const AssumedRoleUser = Schema.Struct({arn: Schema.String, assumeRoleId: Schema.String});
export const PodIdentityAssociation = Schema.Struct({associationArn: Schema.String, associationId: Schema.String});
export const Subject = Schema.Struct({namespace: Schema.String, serviceAccount: Schema.String});
export const AssumeRoleForPodIdentityResponse = Schema.Struct({subject: Subject, audience: Schema.String, podIdentityAssociation: PodIdentityAssociation, assumedRoleUser: AssumedRoleUser, credentials: Credentials});
export const AssumeRoleForPodIdentityRequest = Schema.Struct({clusterName: Schema.String, token: Schema.String});
export const AssumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "EKSAuthFrontend.AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ExpiredTokenException", ExpiredTokenException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("InvalidTokenException", InvalidTokenException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
