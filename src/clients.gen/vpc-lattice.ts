import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const DeleteAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String});
export const DeleteAuthPolicyResponse = Schema.Struct({});
export const DeleteResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String});
export const DeleteResourcePolicyResponse = Schema.Struct({});
export const GetAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String});
export const GetResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String});
export const ListServiceNetworkVpcEndpointAssociationsRequest = Schema.Struct({serviceNetworkIdentifier: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const PutAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String, policy: Schema.String});
export const PutResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String, policy: Schema.String});
export const PutResourcePolicyResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const GetAuthPolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)});
export const GetResourcePolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)});
export const PutAuthPolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const ServiceNetworkEndpointAssociation = Schema.Struct({vpcEndpointId: Schema.optional(Schema.String), vpcId: Schema.optional(Schema.String), vpcEndpointOwnerId: Schema.optional(Schema.String), id: Schema.optional(Schema.String), state: Schema.optional(Schema.String), serviceNetworkArn: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date)});
export const ServiceNetworkVpcEndpointAssociationList = Schema.Array(ServiceNetworkEndpointAssociation);
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const FixedResponseAction = Schema.Struct({statusCode: Schema.Number});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ListServiceNetworkVpcEndpointAssociationsResponse = Schema.Struct({items: ServiceNetworkVpcEndpointAssociationList, nextToken: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)});
export const WeightedTargetGroup = Schema.Struct({targetGroupIdentifier: Schema.String, weight: Schema.optional(Schema.Number)});
export const WeightedTargetGroupList = Schema.Array(WeightedTargetGroup);
export const ForwardAction = Schema.Struct({targetGroups: WeightedTargetGroupList});
export const PathMatchType = Schema.Union(Schema.String, Schema.String);
export const HeaderMatchType = Schema.Union(Schema.String, Schema.String, Schema.String);
export const RuleAction = Schema.Union(ForwardAction, FixedResponseAction);
export const PathMatch = Schema.Struct({match: PathMatchType, caseSensitive: Schema.optional(Schema.Boolean)});
export const HeaderMatch = Schema.Struct({name: Schema.String, match: HeaderMatchType, caseSensitive: Schema.optional(Schema.Boolean)});
export const HeaderMatchList = Schema.Array(HeaderMatch);
export const HttpMatch = Schema.Struct({method: Schema.optional(Schema.String), pathMatch: Schema.optional(PathMatch), headerMatches: Schema.optional(HeaderMatchList)});
export const RuleMatch = Schema.Union(HttpMatch);
export const RuleUpdate = Schema.Struct({ruleIdentifier: Schema.String, match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)});
export const RuleUpdateList = Schema.Array(RuleUpdate);
export const BatchUpdateRuleRequest = Schema.Struct({serviceIdentifier: Schema.String, listenerIdentifier: Schema.String, rules: RuleUpdateList});
export const RuleUpdateSuccess = Schema.Struct({arn: Schema.optional(Schema.String), id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), isDefault: Schema.optional(Schema.Boolean), match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)});
export const RuleUpdateSuccessList = Schema.Array(RuleUpdateSuccess);
export const RuleUpdateFailure = Schema.Struct({ruleIdentifier: Schema.optional(Schema.String), failureCode: Schema.optional(Schema.String), failureMessage: Schema.optional(Schema.String)});
export const RuleUpdateFailureList = Schema.Array(RuleUpdateFailure);
export const BatchUpdateRuleResponse = Schema.Struct({successful: Schema.optional(RuleUpdateSuccessList), unsuccessful: Schema.optional(RuleUpdateFailureList)});
export const ConflictException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};

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
