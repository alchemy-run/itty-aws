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
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.optional(S.String)}) {}
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
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), serviceCode: S.String, quotaCode: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String)}) {}
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
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getPoliciesStats = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.GetPoliciesStats" }, GetPoliciesStatsRequest, GetPoliciesStatsResponse, [InternalServerExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetVpcEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetVpcEndpoint" }, BatchGetVpcEndpointRequest, BatchGetVpcEndpointResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.CreateLifecyclePolicy" }, CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse, [ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createSecurityPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.CreateSecurityPolicy" }, CreateSecurityPolicyRequest, CreateSecurityPolicyResponse, [ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccountSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.GetAccountSettings" }, GetAccountSettingsRequest, GetAccountSettingsResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateAccountSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UpdateAccountSettings" }, UpdateAccountSettingsRequest, UpdateAccountSettingsResponse, [InternalServerExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateVpcEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.UpdateVpcEndpoint" }, UpdateVpcEndpointRequest, UpdateVpcEndpointResponse, [ConflictExceptionError, InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetCollection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetCollection" }, BatchGetCollectionRequest, BatchGetCollectionResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetEffectiveLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetEffectiveLifecyclePolicy" }, BatchGetEffectiveLifecyclePolicyRequest, BatchGetEffectiveLifecyclePolicyResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-11-01", uri: "/", method: "POST", sdkId: "OpenSearchServerless", sigV4ServiceName: "aoss", name: "OpenSearchServerless.BatchGetLifecyclePolicy" }, BatchGetLifecyclePolicyRequest, BatchGetLifecyclePolicyResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
