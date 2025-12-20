import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const AssumeRoleForPodIdentityRequest = Schema.Struct({clusterName: Schema.String, token: Schema.String})
const Subject = Schema.Struct({namespace: Schema.String, serviceAccount: Schema.String})
const PodIdentityAssociation = Schema.Struct({associationArn: Schema.String, associationId: Schema.String})
const AssumedRoleUser = Schema.Struct({arn: Schema.String, assumeRoleId: Schema.String})
const Credentials = Schema.Struct({sessionToken: Schema.String, secretAccessKey: Schema.String, accessKeyId: Schema.String, expiration: Schema.Date})
const AssumeRoleForPodIdentityResponse = Schema.Struct({subject: Subject, audience: Schema.String, podIdentityAssociation: PodIdentityAssociation, assumedRoleUser: AssumedRoleUser, credentials: Credentials})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const ExpiredTokenException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)})
const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)})
const InvalidTokenException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)})
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)})
export const AssumeRoleForPodIdentity = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/clusters/{clusterName}/assume-role-for-pod-identity", method: "POST", sdkId: "EKS Auth", sigV4ServiceName: "eks-auth", name: "AssumeRoleForPodIdentity" }, AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ExpiredTokenException", ExpiredTokenException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("InvalidTokenException", InvalidTokenException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceUnavailableException", ServiceUnavailableException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
