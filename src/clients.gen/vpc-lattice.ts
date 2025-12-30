import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class DeleteAuthPolicyRequest extends Schema.Class<DeleteAuthPolicyRequest>("DeleteAuthPolicyRequest")({resourceIdentifier: Schema.String}) {}
export class DeleteAuthPolicyResponse extends Schema.Class<DeleteAuthPolicyResponse>("DeleteAuthPolicyResponse")({}) {}
export class DeleteResourcePolicyRequest extends Schema.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({resourceArn: Schema.String}) {}
export class DeleteResourcePolicyResponse extends Schema.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetAuthPolicyRequest extends Schema.Class<GetAuthPolicyRequest>("GetAuthPolicyRequest")({resourceIdentifier: Schema.String}) {}
export class GetResourcePolicyRequest extends Schema.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: Schema.String}) {}
export class ListServiceNetworkVpcEndpointAssociationsRequest extends Schema.Class<ListServiceNetworkVpcEndpointAssociationsRequest>("ListServiceNetworkVpcEndpointAssociationsRequest")({serviceNetworkIdentifier: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class PutAuthPolicyRequest extends Schema.Class<PutAuthPolicyRequest>("PutAuthPolicyRequest")({resourceIdentifier: Schema.String, policy: Schema.String}) {}
export class PutResourcePolicyRequest extends Schema.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({resourceArn: Schema.String, policy: Schema.String}) {}
export class PutResourcePolicyResponse extends Schema.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class GetAuthPolicyResponse extends Schema.Class<GetAuthPolicyResponse>("GetAuthPolicyResponse")({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)}) {}
export class GetResourcePolicyResponse extends Schema.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({policy: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagMap)}) {}
export class PutAuthPolicyResponse extends Schema.Class<PutAuthPolicyResponse>("PutAuthPolicyResponse")({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ServiceNetworkEndpointAssociation extends Schema.Class<ServiceNetworkEndpointAssociation>("ServiceNetworkEndpointAssociation")({vpcEndpointId: Schema.optional(Schema.String), vpcId: Schema.optional(Schema.String), vpcEndpointOwnerId: Schema.optional(Schema.String), id: Schema.optional(Schema.String), state: Schema.optional(Schema.String), serviceNetworkArn: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date)}) {}
export const ServiceNetworkVpcEndpointAssociationList = Schema.Array(ServiceNetworkEndpointAssociation);
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class FixedResponseAction extends Schema.Class<FixedResponseAction>("FixedResponseAction")({statusCode: Schema.Number}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ListServiceNetworkVpcEndpointAssociationsResponse extends Schema.Class<ListServiceNetworkVpcEndpointAssociationsResponse>("ListServiceNetworkVpcEndpointAssociationsResponse")({items: ServiceNetworkVpcEndpointAssociationList, nextToken: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)}) {}
export class WeightedTargetGroup extends Schema.Class<WeightedTargetGroup>("WeightedTargetGroup")({targetGroupIdentifier: Schema.String, weight: Schema.optional(Schema.Number)}) {}
export const WeightedTargetGroupList = Schema.Array(WeightedTargetGroup);
export class ForwardAction extends Schema.Class<ForwardAction>("ForwardAction")({targetGroups: WeightedTargetGroupList}) {}
export const PathMatchType = Schema.Union(Schema.String, Schema.String);
export const HeaderMatchType = Schema.Union(Schema.String, Schema.String, Schema.String);
export const RuleAction = Schema.Union(ForwardAction, FixedResponseAction);
export class PathMatch extends Schema.Class<PathMatch>("PathMatch")({match: PathMatchType, caseSensitive: Schema.optional(Schema.Boolean)}) {}
export class HeaderMatch extends Schema.Class<HeaderMatch>("HeaderMatch")({name: Schema.String, match: HeaderMatchType, caseSensitive: Schema.optional(Schema.Boolean)}) {}
export const HeaderMatchList = Schema.Array(HeaderMatch);
export class HttpMatch extends Schema.Class<HttpMatch>("HttpMatch")({method: Schema.optional(Schema.String), pathMatch: Schema.optional(PathMatch), headerMatches: Schema.optional(HeaderMatchList)}) {}
export const RuleMatch = Schema.Union(HttpMatch);
export class RuleUpdate extends Schema.Class<RuleUpdate>("RuleUpdate")({ruleIdentifier: Schema.String, match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)}) {}
export const RuleUpdateList = Schema.Array(RuleUpdate);
export class BatchUpdateRuleRequest extends Schema.Class<BatchUpdateRuleRequest>("BatchUpdateRuleRequest")({serviceIdentifier: Schema.String, listenerIdentifier: Schema.String, rules: RuleUpdateList}) {}
export class RuleUpdateSuccess extends Schema.Class<RuleUpdateSuccess>("RuleUpdateSuccess")({arn: Schema.optional(Schema.String), id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), isDefault: Schema.optional(Schema.Boolean), match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)}) {}
export const RuleUpdateSuccessList = Schema.Array(RuleUpdateSuccess);
export class RuleUpdateFailure extends Schema.Class<RuleUpdateFailure>("RuleUpdateFailure")({ruleIdentifier: Schema.optional(Schema.String), failureCode: Schema.optional(Schema.String), failureMessage: Schema.optional(Schema.String)}) {}
export const RuleUpdateFailureList = Schema.Array(RuleUpdateFailure);
export class BatchUpdateRuleResponse extends Schema.Class<BatchUpdateRuleResponse>("BatchUpdateRuleResponse")({successful: Schema.optional(RuleUpdateSuccessList), unsuccessful: Schema.optional(RuleUpdateFailureList)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};

//# Operations
export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.GetAuthPolicy" }, GetAuthPolicyRequest, GetAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.PutAuthPolicy" }, PutAuthPolicyRequest, PutAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "POST", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.DeleteAuthPolicy" }, DeleteAuthPolicyRequest, DeleteAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceNetworkVpcEndpointAssociations = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/servicenetworkvpcendpointassociations", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.ListServiceNetworkVpcEndpointAssociations" }, ListServiceNetworkVpcEndpointAssociationsRequest, ListServiceNetworkVpcEndpointAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchUpdateRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-11-30", uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", method: "PATCH", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.BatchUpdateRule" }, BatchUpdateRuleRequest, BatchUpdateRuleResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
