import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountSettingsRequest extends S.Class<GetAccountSettingsRequest>("GetAccountSettingsRequest")({}) {}
export class GetPoliciesStatsRequest extends S.Class<GetPoliciesStatsRequest>("GetPoliciesStatsRequest")({}) {}
export const CollectionIds = S.Array(S.String);
export const CollectionNames = S.Array(S.String);
export const VpcEndpointIds = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export const SubnetIds = S.Array(S.String);
export const SecurityGroupIds = S.Array(S.String);
export class BatchGetCollectionRequest extends S.Class<BatchGetCollectionRequest>("BatchGetCollectionRequest")({ids: S.optional(CollectionIds), names: S.optional(CollectionNames)}) {}
export class BatchGetVpcEndpointRequest extends S.Class<BatchGetVpcEndpointRequest>("BatchGetVpcEndpointRequest")({ids: VpcEndpointIds}) {}
export class CreateLifecyclePolicyRequest extends S.Class<CreateLifecyclePolicyRequest>("CreateLifecyclePolicyRequest")({type: S.String, name: S.String, description: S.optional(S.String), policy: S.String, clientToken: S.optional(S.String)}) {}
export class CreateSecurityPolicyRequest extends S.Class<CreateSecurityPolicyRequest>("CreateSecurityPolicyRequest")({type: S.String, name: S.String, description: S.optional(S.String), policy: S.String, clientToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateVpcEndpointRequest extends S.Class<UpdateVpcEndpointRequest>("UpdateVpcEndpointRequest")({id: S.String, addSubnetIds: S.optional(SubnetIds), removeSubnetIds: S.optional(SubnetIds), addSecurityGroupIds: S.optional(SecurityGroupIds), removeSecurityGroupIds: S.optional(SecurityGroupIds), clientToken: S.optional(S.String)}) {}
export class LifecyclePolicyResourceIdentifier extends S.Class<LifecyclePolicyResourceIdentifier>("LifecyclePolicyResourceIdentifier")({type: S.String, resource: S.String}) {}
export const LifecyclePolicyResourceIdentifiers = S.Array(LifecyclePolicyResourceIdentifier);
export class LifecyclePolicyIdentifier extends S.Class<LifecyclePolicyIdentifier>("LifecyclePolicyIdentifier")({type: S.String, name: S.String}) {}
export const LifecyclePolicyIdentifiers = S.Array(LifecyclePolicyIdentifier);
export class CapacityLimits extends S.Class<CapacityLimits>("CapacityLimits")({maxIndexingCapacityInOCU: S.optional(S.Number), maxSearchCapacityInOCU: S.optional(S.Number)}) {}
export class AccountSettingsDetail extends S.Class<AccountSettingsDetail>("AccountSettingsDetail")({capacityLimits: S.optional(CapacityLimits)}) {}
export class AccessPolicyStats extends S.Class<AccessPolicyStats>("AccessPolicyStats")({DataPolicyCount: S.optional(S.Number)}) {}
export class SecurityPolicyStats extends S.Class<SecurityPolicyStats>("SecurityPolicyStats")({EncryptionPolicyCount: S.optional(S.Number), NetworkPolicyCount: S.optional(S.Number)}) {}
export class SecurityConfigStats extends S.Class<SecurityConfigStats>("SecurityConfigStats")({SamlConfigCount: S.optional(S.Number)}) {}
export class LifecyclePolicyStats extends S.Class<LifecyclePolicyStats>("LifecyclePolicyStats")({RetentionPolicyCount: S.optional(S.Number)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const Tags = S.Array(Tag);
export class BatchGetEffectiveLifecyclePolicyRequest extends S.Class<BatchGetEffectiveLifecyclePolicyRequest>("BatchGetEffectiveLifecyclePolicyRequest")({resourceIdentifiers: LifecyclePolicyResourceIdentifiers}) {}
export class BatchGetLifecyclePolicyRequest extends S.Class<BatchGetLifecyclePolicyRequest>("BatchGetLifecyclePolicyRequest")({identifiers: LifecyclePolicyIdentifiers}) {}
export class GetAccountSettingsResponse extends S.Class<GetAccountSettingsResponse>("GetAccountSettingsResponse")({accountSettingsDetail: S.optional(AccountSettingsDetail)}) {}
export class GetPoliciesStatsResponse extends S.Class<GetPoliciesStatsResponse>("GetPoliciesStatsResponse")({AccessPolicyStats: S.optional(AccessPolicyStats), SecurityPolicyStats: S.optional(SecurityPolicyStats), SecurityConfigStats: S.optional(SecurityConfigStats), LifecyclePolicyStats: S.optional(LifecyclePolicyStats), TotalPolicyCount: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UpdateAccountSettingsRequest extends S.Class<UpdateAccountSettingsRequest>("UpdateAccountSettingsRequest")({capacityLimits: S.optional(CapacityLimits)}) {}
export class CollectionErrorDetail extends S.Class<CollectionErrorDetail>("CollectionErrorDetail")({id: S.optional(S.String), name: S.optional(S.String), errorMessage: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const CollectionErrorDetails = S.Array(CollectionErrorDetail);
export class LifecyclePolicyDetail extends S.Class<LifecyclePolicyDetail>("LifecyclePolicyDetail")({type: S.optional(S.String), name: S.optional(S.String), policyVersion: S.optional(S.String), description: S.optional(S.String), policy: S.optional(S.Any), createdDate: S.optional(S.Number), lastModifiedDate: S.optional(S.Number)}) {}
export const LifecyclePolicyDetails = S.Array(LifecyclePolicyDetail);
export class VpcEndpointDetail extends S.Class<VpcEndpointDetail>("VpcEndpointDetail")({id: S.optional(S.String), name: S.optional(S.String), vpcId: S.optional(S.String), subnetIds: S.optional(SubnetIds), securityGroupIds: S.optional(SecurityGroupIds), status: S.optional(S.String), createdDate: S.optional(S.Number), failureCode: S.optional(S.String), failureMessage: S.optional(S.String)}) {}
export const VpcEndpointDetails = S.Array(VpcEndpointDetail);
export class VpcEndpointErrorDetail extends S.Class<VpcEndpointErrorDetail>("VpcEndpointErrorDetail")({id: S.optional(S.String), errorMessage: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const VpcEndpointErrorDetails = S.Array(VpcEndpointErrorDetail);
export class SecurityPolicyDetail extends S.Class<SecurityPolicyDetail>("SecurityPolicyDetail")({type: S.optional(S.String), name: S.optional(S.String), policyVersion: S.optional(S.String), description: S.optional(S.String), policy: S.optional(S.Any), createdDate: S.optional(S.Number), lastModifiedDate: S.optional(S.Number)}) {}
export class UpdateVpcEndpointDetail extends S.Class<UpdateVpcEndpointDetail>("UpdateVpcEndpointDetail")({id: S.optional(S.String), name: S.optional(S.String), status: S.optional(S.String), subnetIds: S.optional(SubnetIds), securityGroupIds: S.optional(SecurityGroupIds), lastModifiedDate: S.optional(S.Number)}) {}
export class BatchGetVpcEndpointResponse extends S.Class<BatchGetVpcEndpointResponse>("BatchGetVpcEndpointResponse")({vpcEndpointDetails: S.optional(VpcEndpointDetails), vpcEndpointErrorDetails: S.optional(VpcEndpointErrorDetails)}) {}
export class CreateLifecyclePolicyResponse extends S.Class<CreateLifecyclePolicyResponse>("CreateLifecyclePolicyResponse")({lifecyclePolicyDetail: S.optional(LifecyclePolicyDetail)}) {}
export class CreateSecurityPolicyResponse extends S.Class<CreateSecurityPolicyResponse>("CreateSecurityPolicyResponse")({securityPolicyDetail: S.optional(SecurityPolicyDetail)}) {}
export class UpdateAccountSettingsResponse extends S.Class<UpdateAccountSettingsResponse>("UpdateAccountSettingsResponse")({accountSettingsDetail: S.optional(AccountSettingsDetail)}) {}
export class UpdateVpcEndpointResponse extends S.Class<UpdateVpcEndpointResponse>("UpdateVpcEndpointResponse")({UpdateVpcEndpointDetail: S.optional(UpdateVpcEndpointDetail)}) {}
export class VectorOptions extends S.Class<VectorOptions>("VectorOptions")({ServerlessVectorAcceleration: S.String}) {}
export class FipsEndpoints extends S.Class<FipsEndpoints>("FipsEndpoints")({collectionEndpoint: S.optional(S.String), dashboardEndpoint: S.optional(S.String)}) {}
export class CollectionDetail extends S.Class<CollectionDetail>("CollectionDetail")({id: S.optional(S.String), name: S.optional(S.String), status: S.optional(S.String), type: S.optional(S.String), description: S.optional(S.String), arn: S.optional(S.String), kmsKeyArn: S.optional(S.String), standbyReplicas: S.optional(S.String), vectorOptions: S.optional(VectorOptions), createdDate: S.optional(S.Number), lastModifiedDate: S.optional(S.Number), collectionEndpoint: S.optional(S.String), dashboardEndpoint: S.optional(S.String), fipsEndpoints: S.optional(FipsEndpoints), failureCode: S.optional(S.String), failureMessage: S.optional(S.String)}) {}
export const CollectionDetails = S.Array(CollectionDetail);
export class EffectiveLifecyclePolicyDetail extends S.Class<EffectiveLifecyclePolicyDetail>("EffectiveLifecyclePolicyDetail")({type: S.optional(S.String), resource: S.optional(S.String), policyName: S.optional(S.String), resourceType: S.optional(S.String), retentionPeriod: S.optional(S.String), noMinRetentionPeriod: S.optional(S.Boolean)}) {}
export const EffectiveLifecyclePolicyDetails = S.Array(EffectiveLifecyclePolicyDetail);
export class EffectiveLifecyclePolicyErrorDetail extends S.Class<EffectiveLifecyclePolicyErrorDetail>("EffectiveLifecyclePolicyErrorDetail")({type: S.optional(S.String), resource: S.optional(S.String), errorMessage: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const EffectiveLifecyclePolicyErrorDetails = S.Array(EffectiveLifecyclePolicyErrorDetail);
export class LifecyclePolicyErrorDetail extends S.Class<LifecyclePolicyErrorDetail>("LifecyclePolicyErrorDetail")({type: S.optional(S.String), name: S.optional(S.String), errorMessage: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const LifecyclePolicyErrorDetails = S.Array(LifecyclePolicyErrorDetail);
export class BatchGetCollectionResponse extends S.Class<BatchGetCollectionResponse>("BatchGetCollectionResponse")({collectionDetails: S.optional(CollectionDetails), collectionErrorDetails: S.optional(CollectionErrorDetails)}) {}
export class BatchGetEffectiveLifecyclePolicyResponse extends S.Class<BatchGetEffectiveLifecyclePolicyResponse>("BatchGetEffectiveLifecyclePolicyResponse")({effectiveLifecyclePolicyDetails: S.optional(EffectiveLifecyclePolicyDetails), effectiveLifecyclePolicyErrorDetails: S.optional(EffectiveLifecyclePolicyErrorDetails)}) {}
export class BatchGetLifecyclePolicyResponse extends S.Class<BatchGetLifecyclePolicyResponse>("BatchGetLifecyclePolicyResponse")({lifecyclePolicyDetails: S.optional(LifecyclePolicyDetails), lifecyclePolicyErrorDetails: S.optional(LifecyclePolicyErrorDetails)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
 */export const getPoliciesStats = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.GetPoliciesStats" }, GetPoliciesStatsRequest, GetPoliciesStatsResponse, [InternalServerException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns attributes for one or more VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */export const batchGetVpcEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetVpcEndpoint" }, BatchGetVpcEndpointRequest, BatchGetVpcEndpointResponse, [InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see Creating data lifecycle policies.
 */export const createLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.CreateLifecyclePolicy" }, CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.
 */export const createSecurityPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.CreateSecurityPolicy" }, CreateSecurityPolicyRequest, CreateSecurityPolicyResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns account-level settings related to OpenSearch Serverless.
 */export const getAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.GetAccountSettings" }, GetAccountSettingsRequest, GetAccountSettingsResponse, [InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the tags for an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates tags with an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see Managing capacity limits for Amazon OpenSearch Serverless.
 */export const updateAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UpdateAccountSettings" }, UpdateAccountSettingsRequest, UpdateAccountSettingsResponse, [InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */export const updateVpcEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UpdateVpcEndpoint" }, UpdateVpcEndpointRequest, UpdateVpcEndpointResponse, [ConflictException, InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns attributes for one or more collections, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */export const batchGetCollection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetCollection" }, BatchGetCollectionRequest, BatchGetCollectionResponse, [InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see Viewing data lifecycle policies.
 */export const batchGetEffectiveLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetEffectiveLifecyclePolicy" }, BatchGetEffectiveLifecyclePolicyRequest, BatchGetEffectiveLifecyclePolicyResponse, [InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.
 */export const batchGetLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetLifecyclePolicy" }, BatchGetLifecyclePolicyRequest, BatchGetLifecyclePolicyResponse, [InternalServerException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
