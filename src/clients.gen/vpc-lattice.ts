import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class DeleteAuthPolicyRequest extends S.Class<DeleteAuthPolicyRequest>("DeleteAuthPolicyRequest")({resourceIdentifier: S.String}) {}
export class DeleteAuthPolicyResponse extends S.Class<DeleteAuthPolicyResponse>("DeleteAuthPolicyResponse")({}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({resourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetAuthPolicyRequest extends S.Class<GetAuthPolicyRequest>("GetAuthPolicyRequest")({resourceIdentifier: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: S.String}) {}
export class ListServiceNetworkVpcEndpointAssociationsRequest extends S.Class<ListServiceNetworkVpcEndpointAssociationsRequest>("ListServiceNetworkVpcEndpointAssociationsRequest")({serviceNetworkIdentifier: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class PutAuthPolicyRequest extends S.Class<PutAuthPolicyRequest>("PutAuthPolicyRequest")({resourceIdentifier: S.String, policy: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({resourceArn: S.String, policy: S.String}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class GetAuthPolicyResponse extends S.Class<GetAuthPolicyResponse>("GetAuthPolicyResponse")({policy: S.optional(S.String), state: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({policy: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class PutAuthPolicyResponse extends S.Class<PutAuthPolicyResponse>("PutAuthPolicyResponse")({policy: S.optional(S.String), state: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ServiceNetworkEndpointAssociation extends S.Class<ServiceNetworkEndpointAssociation>("ServiceNetworkEndpointAssociation")({vpcEndpointId: S.optional(S.String), vpcId: S.optional(S.String), vpcEndpointOwnerId: S.optional(S.String), id: S.optional(S.String), state: S.optional(S.String), serviceNetworkArn: S.optional(S.String), createdAt: S.optional(S.Date)}) {}
export const ServiceNetworkVpcEndpointAssociationList = S.Array(ServiceNetworkEndpointAssociation);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class FixedResponseAction extends S.Class<FixedResponseAction>("FixedResponseAction")({statusCode: S.Number}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ListServiceNetworkVpcEndpointAssociationsResponse extends S.Class<ListServiceNetworkVpcEndpointAssociationsResponse>("ListServiceNetworkVpcEndpointAssociationsResponse")({items: ServiceNetworkVpcEndpointAssociationList, nextToken: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.String, fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class WeightedTargetGroup extends S.Class<WeightedTargetGroup>("WeightedTargetGroup")({targetGroupIdentifier: S.String, weight: S.optional(S.Number)}) {}
export const WeightedTargetGroupList = S.Array(WeightedTargetGroup);
export class ForwardAction extends S.Class<ForwardAction>("ForwardAction")({targetGroups: WeightedTargetGroupList}) {}
export const PathMatchType = S.Union(S.String, S.String);
export const HeaderMatchType = S.Union(S.String, S.String, S.String);
export const RuleAction = S.Union(ForwardAction, FixedResponseAction);
export class PathMatch extends S.Class<PathMatch>("PathMatch")({match: PathMatchType, caseSensitive: S.optional(S.Boolean)}) {}
export class HeaderMatch extends S.Class<HeaderMatch>("HeaderMatch")({name: S.String, match: HeaderMatchType, caseSensitive: S.optional(S.Boolean)}) {}
export const HeaderMatchList = S.Array(HeaderMatch);
export class HttpMatch extends S.Class<HttpMatch>("HttpMatch")({method: S.optional(S.String), pathMatch: S.optional(PathMatch), headerMatches: S.optional(HeaderMatchList)}) {}
export const RuleMatch = S.Union(HttpMatch);
export class RuleUpdate extends S.Class<RuleUpdate>("RuleUpdate")({ruleIdentifier: S.String, match: S.optional(RuleMatch), priority: S.optional(S.Number), action: S.optional(RuleAction)}) {}
export const RuleUpdateList = S.Array(RuleUpdate);
export class BatchUpdateRuleRequest extends S.Class<BatchUpdateRuleRequest>("BatchUpdateRuleRequest")({serviceIdentifier: S.String, listenerIdentifier: S.String, rules: RuleUpdateList}) {}
export class RuleUpdateSuccess extends S.Class<RuleUpdateSuccess>("RuleUpdateSuccess")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), isDefault: S.optional(S.Boolean), match: S.optional(RuleMatch), priority: S.optional(S.Number), action: S.optional(RuleAction)}) {}
export const RuleUpdateSuccessList = S.Array(RuleUpdateSuccess);
export class RuleUpdateFailure extends S.Class<RuleUpdateFailure>("RuleUpdateFailure")({ruleIdentifier: S.optional(S.String), failureCode: S.optional(S.String), failureMessage: S.optional(S.String)}) {}
export const RuleUpdateFailureList = S.Array(RuleUpdateFailure);
export class BatchUpdateRuleResponse extends S.Class<BatchUpdateRuleResponse>("BatchUpdateRuleResponse")({successful: S.optional(RuleUpdateSuccessList), unsuccessful: S.optional(RuleUpdateFailureList)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};

//# Operations
export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAuthPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.GetAuthPolicy" }, GetAuthPolicyRequest, GetAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putAuthPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.PutAuthPolicy" }, PutAuthPolicyRequest, PutAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/resourcepolicy/{resourceArn}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "POST", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteAuthPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/authpolicy/{resourceIdentifier}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.DeleteAuthPolicy" }, DeleteAuthPolicyRequest, DeleteAuthPolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceNetworkVpcEndpointAssociations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/servicenetworkvpcendpointassociations", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.ListServiceNetworkVpcEndpointAssociations" }, ListServiceNetworkVpcEndpointAssociationsRequest, ListServiceNetworkVpcEndpointAssociationsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchUpdateRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-11-30", uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", method: "PATCH", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "MercuryControlPlane.BatchUpdateRule" }, BatchUpdateRuleRequest, BatchUpdateRuleResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
