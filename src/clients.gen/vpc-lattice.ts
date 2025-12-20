import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const DeleteAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String})
const DeleteAuthPolicyResponse = Schema.Struct({})
const DeleteResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String})
const DeleteResourcePolicyResponse = Schema.Struct({})
const GetAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String})
const GetResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String})
const ListServiceNetworkVpcEndpointAssociationsRequest = Schema.Struct({serviceNetworkIdentifier: Schema.String, maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const PutAuthPolicyRequest = Schema.Struct({resourceIdentifier: Schema.String, policy: Schema.String})
const PutResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String, policy: Schema.String})
const PutResourcePolicyResponse = Schema.Struct({})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const DeleteResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/resourcepolicy/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const GetAuthPolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)})
export const GetAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/authpolicy/{resourceIdentifier}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "GetAuthPolicy" }, GetAuthPolicyRequest, GetAuthPolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const GetResourcePolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String)})
export const GetResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/resourcepolicy/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const PutAuthPolicyResponse = Schema.Struct({policy: Schema.optional(Schema.String), state: Schema.optional(Schema.String)})
export const PutAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/authpolicy/{resourceIdentifier}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "PutAuthPolicy" }, PutAuthPolicyRequest, PutAuthPolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const PutResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/resourcepolicy/{resourceArn}", method: "PUT", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const TagResourceResponse = Schema.Struct({})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceNetworkEndpointAssociation = Schema.Struct({vpcEndpointId: Schema.optional(Schema.String), vpcId: Schema.optional(Schema.String), vpcEndpointOwnerId: Schema.optional(Schema.String), id: Schema.optional(Schema.String), state: Schema.optional(Schema.String), serviceNetworkArn: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date)})
const ServiceNetworkVpcEndpointAssociationList = Schema.Array(ServiceNetworkEndpointAssociation)
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const FixedResponseAction = Schema.Struct({statusCode: Schema.Number})
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const DeleteAuthPolicy = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/authpolicy/{resourceIdentifier}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "DeleteAuthPolicy" }, DeleteAuthPolicyRequest, DeleteAuthPolicyResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListServiceNetworkVpcEndpointAssociationsResponse = Schema.Struct({items: ServiceNetworkVpcEndpointAssociationList, nextToken: Schema.optional(Schema.String)})
export const ListServiceNetworkVpcEndpointAssociations = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/servicenetworkvpcendpointassociations", method: "GET", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "ListServiceNetworkVpcEndpointAssociations" }, ListServiceNetworkVpcEndpointAssociationsRequest, ListServiceNetworkVpcEndpointAssociationsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const WeightedTargetGroup = Schema.Struct({targetGroupIdentifier: Schema.String, weight: Schema.optional(Schema.Number)})
const WeightedTargetGroupList = Schema.Array(WeightedTargetGroup)
const ForwardAction = Schema.Struct({targetGroups: WeightedTargetGroupList})
const PathMatchType = Schema.Union(Schema.String, Schema.String)
const HeaderMatchType = Schema.Union(Schema.String, Schema.String, Schema.String)
const RuleAction = Schema.Union(ForwardAction, FixedResponseAction)
const PathMatch = Schema.Struct({match: PathMatchType, caseSensitive: Schema.optional(Schema.Boolean)})
const HeaderMatch = Schema.Struct({name: Schema.String, match: HeaderMatchType, caseSensitive: Schema.optional(Schema.Boolean)})
const HeaderMatchList = Schema.Array(HeaderMatch)
const HttpMatch = Schema.Struct({method: Schema.optional(Schema.String), pathMatch: Schema.optional(PathMatch), headerMatches: Schema.optional(HeaderMatchList)})
const RuleMatch = Schema.Union(HttpMatch)
const RuleUpdate = Schema.Struct({ruleIdentifier: Schema.String, match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)})
const RuleUpdateList = Schema.Array(RuleUpdate)
const BatchUpdateRuleRequest = Schema.Struct({serviceIdentifier: Schema.String, listenerIdentifier: Schema.String, rules: RuleUpdateList})
const RuleUpdateSuccess = Schema.Struct({arn: Schema.optional(Schema.String), id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), isDefault: Schema.optional(Schema.Boolean), match: Schema.optional(RuleMatch), priority: Schema.optional(Schema.Number), action: Schema.optional(RuleAction)})
const RuleUpdateSuccessList = Schema.Array(RuleUpdateSuccess)
const RuleUpdateFailure = Schema.Struct({ruleIdentifier: Schema.optional(Schema.String), failureCode: Schema.optional(Schema.String), failureMessage: Schema.optional(Schema.String)})
const RuleUpdateFailureList = Schema.Array(RuleUpdateFailure)
const BatchUpdateRuleResponse = Schema.Struct({successful: Schema.optional(RuleUpdateSuccessList), unsuccessful: Schema.optional(RuleUpdateFailureList)})
const ConflictException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const BatchUpdateRule = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", method: "PATCH", sdkId: "VPC Lattice", sigV4ServiceName: "vpc-lattice", name: "BatchUpdateRule" }, BatchUpdateRuleRequest, BatchUpdateRuleResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
