import * as S from "effect/Schema"
import { FormatXMLRequest,FormatXMLResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FieldList = S.Array(S.String);
export class AssociateAliasRequest extends S.Class<AssociateAliasRequest>("AssociateAliasRequest")({TargetDistributionId: S.String, Alias: S.String}) {}
export class AssociateDistributionTenantWebACLRequest extends S.Class<AssociateDistributionTenantWebACLRequest>("AssociateDistributionTenantWebACLRequest")({Id: S.String, WebACLArn: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class AssociateDistributionWebACLRequest extends S.Class<AssociateDistributionWebACLRequest>("AssociateDistributionWebACLRequest")({Id: S.String, WebACLArn: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class CopyDistributionRequest extends S.Class<CopyDistributionRequest>("CopyDistributionRequest")({PrimaryDistributionId: S.String, Staging: S.optional(H.Header("Staging", S.Boolean)), IfMatch: S.optional(H.Header("If-Match")), CallerReference: S.String, Enabled: S.optional(S.Boolean)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class Tags extends S.Class<Tags>("Tags")({Items: S.optional(TagList)}) {}
export class CreateConnectionGroupRequest extends S.Class<CreateConnectionGroupRequest>("CreateConnectionGroupRequest")({Name: S.String, Ipv6Enabled: S.optional(S.Boolean), Tags: S.optional(Tags), AnycastIpListId: S.optional(S.String), Enabled: S.optional(S.Boolean)}) {}
export class KeyValueStoreAssociation extends S.Class<KeyValueStoreAssociation>("KeyValueStoreAssociation")({KeyValueStoreARN: S.String}) {}
export const KeyValueStoreAssociationList = S.Array(KeyValueStoreAssociation);
export class KeyValueStoreAssociations extends S.Class<KeyValueStoreAssociations>("KeyValueStoreAssociations")({Quantity: S.Number, Items: S.optional(KeyValueStoreAssociationList)}) {}
export class FunctionConfig extends S.Class<FunctionConfig>("FunctionConfig")({Comment: S.String, Runtime: S.String, KeyValueStoreAssociations: S.optional(KeyValueStoreAssociations)}) {}
export class CreateFunctionRequest extends S.Class<CreateFunctionRequest>("CreateFunctionRequest")({Name: S.String, FunctionConfig: FunctionConfig, FunctionCode: H.StreamBody()}) {}
export const PathList = S.Array(S.String);
export class Paths extends S.Class<Paths>("Paths")({Quantity: S.Number, Items: S.optional(PathList)}) {}
export class InvalidationBatch extends S.Class<InvalidationBatch>("InvalidationBatch")({Paths: Paths, CallerReference: S.String}) {}
export class CreateInvalidationForDistributionTenantRequest extends S.Class<CreateInvalidationForDistributionTenantRequest>("CreateInvalidationForDistributionTenantRequest")({Id: S.String, InvalidationBatch: H.Body("InvalidationBatch", InvalidationBatch)}) {}
export class DeleteAnycastIpListRequest extends S.Class<DeleteAnycastIpListRequest>("DeleteAnycastIpListRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteCachePolicyRequest extends S.Class<DeleteCachePolicyRequest>("DeleteCachePolicyRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteCloudFrontOriginAccessIdentityRequest extends S.Class<DeleteCloudFrontOriginAccessIdentityRequest>("DeleteCloudFrontOriginAccessIdentityRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteConnectionFunctionRequest extends S.Class<DeleteConnectionFunctionRequest>("DeleteConnectionFunctionRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteConnectionGroupRequest extends S.Class<DeleteConnectionGroupRequest>("DeleteConnectionGroupRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteContinuousDeploymentPolicyRequest extends S.Class<DeleteContinuousDeploymentPolicyRequest>("DeleteContinuousDeploymentPolicyRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteDistributionRequest extends S.Class<DeleteDistributionRequest>("DeleteDistributionRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteDistributionTenantRequest extends S.Class<DeleteDistributionTenantRequest>("DeleteDistributionTenantRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteFieldLevelEncryptionConfigRequest extends S.Class<DeleteFieldLevelEncryptionConfigRequest>("DeleteFieldLevelEncryptionConfigRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteFieldLevelEncryptionProfileRequest extends S.Class<DeleteFieldLevelEncryptionProfileRequest>("DeleteFieldLevelEncryptionProfileRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteFunctionRequest extends S.Class<DeleteFunctionRequest>("DeleteFunctionRequest")({Name: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteKeyGroupRequest extends S.Class<DeleteKeyGroupRequest>("DeleteKeyGroupRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteKeyValueStoreRequest extends S.Class<DeleteKeyValueStoreRequest>("DeleteKeyValueStoreRequest")({Name: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteMonitoringSubscriptionRequest extends S.Class<DeleteMonitoringSubscriptionRequest>("DeleteMonitoringSubscriptionRequest")({DistributionId: S.String}) {}
export class DeleteMonitoringSubscriptionResult extends S.Class<DeleteMonitoringSubscriptionResult>("DeleteMonitoringSubscriptionResult")({}) {}
export class DeleteOriginAccessControlRequest extends S.Class<DeleteOriginAccessControlRequest>("DeleteOriginAccessControlRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteOriginRequestPolicyRequest extends S.Class<DeleteOriginRequestPolicyRequest>("DeleteOriginRequestPolicyRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeletePublicKeyRequest extends S.Class<DeletePublicKeyRequest>("DeletePublicKeyRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteRealtimeLogConfigRequest extends S.Class<DeleteRealtimeLogConfigRequest>("DeleteRealtimeLogConfigRequest")({Name: S.optional(S.String), ARN: S.optional(S.String)}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DeleteResponseHeadersPolicyRequest extends S.Class<DeleteResponseHeadersPolicyRequest>("DeleteResponseHeadersPolicyRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteStreamingDistributionRequest extends S.Class<DeleteStreamingDistributionRequest>("DeleteStreamingDistributionRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DeleteTrustStoreRequest extends S.Class<DeleteTrustStoreRequest>("DeleteTrustStoreRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DeleteVpcOriginRequest extends S.Class<DeleteVpcOriginRequest>("DeleteVpcOriginRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class DescribeConnectionFunctionRequest extends S.Class<DescribeConnectionFunctionRequest>("DescribeConnectionFunctionRequest")({Identifier: S.String, Stage: S.optional(S.String)}) {}
export class DescribeFunctionRequest extends S.Class<DescribeFunctionRequest>("DescribeFunctionRequest")({Name: S.String, Stage: S.optional(S.String)}) {}
export class DescribeKeyValueStoreRequest extends S.Class<DescribeKeyValueStoreRequest>("DescribeKeyValueStoreRequest")({Name: S.String}) {}
export class DisassociateDistributionTenantWebACLRequest extends S.Class<DisassociateDistributionTenantWebACLRequest>("DisassociateDistributionTenantWebACLRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DisassociateDistributionWebACLRequest extends S.Class<DisassociateDistributionWebACLRequest>("DisassociateDistributionWebACLRequest")({Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class GetAnycastIpListRequest extends S.Class<GetAnycastIpListRequest>("GetAnycastIpListRequest")({Id: S.String}) {}
export class GetCachePolicyRequest extends S.Class<GetCachePolicyRequest>("GetCachePolicyRequest")({Id: S.String}) {}
export class GetCachePolicyConfigRequest extends S.Class<GetCachePolicyConfigRequest>("GetCachePolicyConfigRequest")({Id: S.String}) {}
export class GetCloudFrontOriginAccessIdentityRequest extends S.Class<GetCloudFrontOriginAccessIdentityRequest>("GetCloudFrontOriginAccessIdentityRequest")({Id: S.String}) {}
export class GetCloudFrontOriginAccessIdentityConfigRequest extends S.Class<GetCloudFrontOriginAccessIdentityConfigRequest>("GetCloudFrontOriginAccessIdentityConfigRequest")({Id: S.String}) {}
export class GetConnectionFunctionRequest extends S.Class<GetConnectionFunctionRequest>("GetConnectionFunctionRequest")({Identifier: S.String, Stage: S.optional(S.String)}) {}
export class GetConnectionGroupRequest extends S.Class<GetConnectionGroupRequest>("GetConnectionGroupRequest")({Identifier: S.String}) {}
export class GetConnectionGroupByRoutingEndpointRequest extends S.Class<GetConnectionGroupByRoutingEndpointRequest>("GetConnectionGroupByRoutingEndpointRequest")({RoutingEndpoint: S.String}) {}
export class GetContinuousDeploymentPolicyRequest extends S.Class<GetContinuousDeploymentPolicyRequest>("GetContinuousDeploymentPolicyRequest")({Id: S.String}) {}
export class GetContinuousDeploymentPolicyConfigRequest extends S.Class<GetContinuousDeploymentPolicyConfigRequest>("GetContinuousDeploymentPolicyConfigRequest")({Id: S.String}) {}
export class GetDistributionRequest extends S.Class<GetDistributionRequest>("GetDistributionRequest")({Id: S.String}) {}
export class GetDistributionConfigRequest extends S.Class<GetDistributionConfigRequest>("GetDistributionConfigRequest")({Id: S.String}) {}
export class GetDistributionTenantRequest extends S.Class<GetDistributionTenantRequest>("GetDistributionTenantRequest")({Identifier: S.String}) {}
export class GetDistributionTenantByDomainRequest extends S.Class<GetDistributionTenantByDomainRequest>("GetDistributionTenantByDomainRequest")({Domain: S.String}) {}
export class GetFieldLevelEncryptionRequest extends S.Class<GetFieldLevelEncryptionRequest>("GetFieldLevelEncryptionRequest")({Id: S.String}) {}
export class GetFieldLevelEncryptionConfigRequest extends S.Class<GetFieldLevelEncryptionConfigRequest>("GetFieldLevelEncryptionConfigRequest")({Id: S.String}) {}
export class GetFieldLevelEncryptionProfileRequest extends S.Class<GetFieldLevelEncryptionProfileRequest>("GetFieldLevelEncryptionProfileRequest")({Id: S.String}) {}
export class GetFieldLevelEncryptionProfileConfigRequest extends S.Class<GetFieldLevelEncryptionProfileConfigRequest>("GetFieldLevelEncryptionProfileConfigRequest")({Id: S.String}) {}
export class GetFunctionRequest extends S.Class<GetFunctionRequest>("GetFunctionRequest")({Name: S.String, Stage: S.optional(S.String)}) {}
export class GetInvalidationRequest extends S.Class<GetInvalidationRequest>("GetInvalidationRequest")({DistributionId: S.String, Id: S.String}) {}
export class GetInvalidationForDistributionTenantRequest extends S.Class<GetInvalidationForDistributionTenantRequest>("GetInvalidationForDistributionTenantRequest")({DistributionTenantId: S.String, Id: S.String}) {}
export class GetKeyGroupRequest extends S.Class<GetKeyGroupRequest>("GetKeyGroupRequest")({Id: S.String}) {}
export class GetKeyGroupConfigRequest extends S.Class<GetKeyGroupConfigRequest>("GetKeyGroupConfigRequest")({Id: S.String}) {}
export class GetManagedCertificateDetailsRequest extends S.Class<GetManagedCertificateDetailsRequest>("GetManagedCertificateDetailsRequest")({Identifier: S.String}) {}
export class GetMonitoringSubscriptionRequest extends S.Class<GetMonitoringSubscriptionRequest>("GetMonitoringSubscriptionRequest")({DistributionId: S.String}) {}
export class GetOriginAccessControlRequest extends S.Class<GetOriginAccessControlRequest>("GetOriginAccessControlRequest")({Id: S.String}) {}
export class GetOriginAccessControlConfigRequest extends S.Class<GetOriginAccessControlConfigRequest>("GetOriginAccessControlConfigRequest")({Id: S.String}) {}
export class GetOriginRequestPolicyRequest extends S.Class<GetOriginRequestPolicyRequest>("GetOriginRequestPolicyRequest")({Id: S.String}) {}
export class GetOriginRequestPolicyConfigRequest extends S.Class<GetOriginRequestPolicyConfigRequest>("GetOriginRequestPolicyConfigRequest")({Id: S.String}) {}
export class GetPublicKeyRequest extends S.Class<GetPublicKeyRequest>("GetPublicKeyRequest")({Id: S.String}) {}
export class GetPublicKeyConfigRequest extends S.Class<GetPublicKeyConfigRequest>("GetPublicKeyConfigRequest")({Id: S.String}) {}
export class GetRealtimeLogConfigRequest extends S.Class<GetRealtimeLogConfigRequest>("GetRealtimeLogConfigRequest")({Name: S.optional(S.String), ARN: S.optional(S.String)}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String}) {}
export class GetResponseHeadersPolicyRequest extends S.Class<GetResponseHeadersPolicyRequest>("GetResponseHeadersPolicyRequest")({Id: S.String}) {}
export class GetResponseHeadersPolicyConfigRequest extends S.Class<GetResponseHeadersPolicyConfigRequest>("GetResponseHeadersPolicyConfigRequest")({Id: S.String}) {}
export class GetStreamingDistributionRequest extends S.Class<GetStreamingDistributionRequest>("GetStreamingDistributionRequest")({Id: S.String}) {}
export class GetStreamingDistributionConfigRequest extends S.Class<GetStreamingDistributionConfigRequest>("GetStreamingDistributionConfigRequest")({Id: S.String}) {}
export class GetTrustStoreRequest extends S.Class<GetTrustStoreRequest>("GetTrustStoreRequest")({Identifier: S.String}) {}
export class GetVpcOriginRequest extends S.Class<GetVpcOriginRequest>("GetVpcOriginRequest")({Id: S.String}) {}
export class ListAnycastIpListsRequest extends S.Class<ListAnycastIpListsRequest>("ListAnycastIpListsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListCachePoliciesRequest extends S.Class<ListCachePoliciesRequest>("ListCachePoliciesRequest")({Type: S.optional(S.String), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListCloudFrontOriginAccessIdentitiesRequest extends S.Class<ListCloudFrontOriginAccessIdentitiesRequest>("ListCloudFrontOriginAccessIdentitiesRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListConflictingAliasesRequest extends S.Class<ListConflictingAliasesRequest>("ListConflictingAliasesRequest")({DistributionId: S.String, Alias: S.String, Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListConnectionFunctionsRequest extends S.Class<ListConnectionFunctionsRequest>("ListConnectionFunctionsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), Stage: S.optional(S.String)}) {}
export class ListContinuousDeploymentPoliciesRequest extends S.Class<ListContinuousDeploymentPoliciesRequest>("ListContinuousDeploymentPoliciesRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListDistributionsRequest extends S.Class<ListDistributionsRequest>("ListDistributionsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListDistributionsByAnycastIpListIdRequest extends S.Class<ListDistributionsByAnycastIpListIdRequest>("ListDistributionsByAnycastIpListIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), AnycastIpListId: S.String}) {}
export class ListDistributionsByCachePolicyIdRequest extends S.Class<ListDistributionsByCachePolicyIdRequest>("ListDistributionsByCachePolicyIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), CachePolicyId: S.String}) {}
export class ListDistributionsByConnectionFunctionRequest extends S.Class<ListDistributionsByConnectionFunctionRequest>("ListDistributionsByConnectionFunctionRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), ConnectionFunctionIdentifier: S.String}) {}
export class ListDistributionsByConnectionModeRequest extends S.Class<ListDistributionsByConnectionModeRequest>("ListDistributionsByConnectionModeRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), ConnectionMode: S.String}) {}
export class ListDistributionsByKeyGroupRequest extends S.Class<ListDistributionsByKeyGroupRequest>("ListDistributionsByKeyGroupRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), KeyGroupId: S.String}) {}
export class ListDistributionsByOriginRequestPolicyIdRequest extends S.Class<ListDistributionsByOriginRequestPolicyIdRequest>("ListDistributionsByOriginRequestPolicyIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), OriginRequestPolicyId: S.String}) {}
export class ListDistributionsByOwnedResourceRequest extends S.Class<ListDistributionsByOwnedResourceRequest>("ListDistributionsByOwnedResourceRequest")({ResourceArn: S.String, Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListDistributionsByRealtimeLogConfigRequest extends S.Class<ListDistributionsByRealtimeLogConfigRequest>("ListDistributionsByRealtimeLogConfigRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), RealtimeLogConfigName: S.optional(S.String), RealtimeLogConfigArn: S.optional(S.String)}) {}
export class ListDistributionsByResponseHeadersPolicyIdRequest extends S.Class<ListDistributionsByResponseHeadersPolicyIdRequest>("ListDistributionsByResponseHeadersPolicyIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), ResponseHeadersPolicyId: S.String}) {}
export class ListDistributionsByTrustStoreRequest extends S.Class<ListDistributionsByTrustStoreRequest>("ListDistributionsByTrustStoreRequest")({TrustStoreIdentifier: S.String, Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListDistributionsByVpcOriginIdRequest extends S.Class<ListDistributionsByVpcOriginIdRequest>("ListDistributionsByVpcOriginIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), VpcOriginId: S.String}) {}
export class ListDistributionsByWebACLIdRequest extends S.Class<ListDistributionsByWebACLIdRequest>("ListDistributionsByWebACLIdRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), WebACLId: S.String}) {}
export class ListDistributionTenantsByCustomizationRequest extends S.Class<ListDistributionTenantsByCustomizationRequest>("ListDistributionTenantsByCustomizationRequest")({WebACLArn: S.optional(S.String), CertificateArn: S.optional(S.String), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListFieldLevelEncryptionConfigsRequest extends S.Class<ListFieldLevelEncryptionConfigsRequest>("ListFieldLevelEncryptionConfigsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListFieldLevelEncryptionProfilesRequest extends S.Class<ListFieldLevelEncryptionProfilesRequest>("ListFieldLevelEncryptionProfilesRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListFunctionsRequest extends S.Class<ListFunctionsRequest>("ListFunctionsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), Stage: S.optional(S.String)}) {}
export class ListInvalidationsRequest extends S.Class<ListInvalidationsRequest>("ListInvalidationsRequest")({DistributionId: S.String, Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListInvalidationsForDistributionTenantRequest extends S.Class<ListInvalidationsForDistributionTenantRequest>("ListInvalidationsForDistributionTenantRequest")({Id: S.String, Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListKeyGroupsRequest extends S.Class<ListKeyGroupsRequest>("ListKeyGroupsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListKeyValueStoresRequest extends S.Class<ListKeyValueStoresRequest>("ListKeyValueStoresRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListOriginAccessControlsRequest extends S.Class<ListOriginAccessControlsRequest>("ListOriginAccessControlsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListOriginRequestPoliciesRequest extends S.Class<ListOriginRequestPoliciesRequest>("ListOriginRequestPoliciesRequest")({Type: S.optional(S.String), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListPublicKeysRequest extends S.Class<ListPublicKeysRequest>("ListPublicKeysRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListRealtimeLogConfigsRequest extends S.Class<ListRealtimeLogConfigsRequest>("ListRealtimeLogConfigsRequest")({MaxItems: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class ListResponseHeadersPoliciesRequest extends S.Class<ListResponseHeadersPoliciesRequest>("ListResponseHeadersPoliciesRequest")({Type: S.optional(S.String), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListStreamingDistributionsRequest extends S.Class<ListStreamingDistributionsRequest>("ListStreamingDistributionsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({Resource: S.String}) {}
export class ListTrustStoresRequest extends S.Class<ListTrustStoresRequest>("ListTrustStoresRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListVpcOriginsRequest extends S.Class<ListVpcOriginsRequest>("ListVpcOriginsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class PublishConnectionFunctionRequest extends S.Class<PublishConnectionFunctionRequest>("PublishConnectionFunctionRequest")({Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class PublishFunctionRequest extends S.Class<PublishFunctionRequest>("PublishFunctionRequest")({Name: S.String, IfMatch: H.Header("If-Match")}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.String, PolicyDocument: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({Resource: S.String, Tags: H.Body("Tags", Tags)}) {}
export class TestConnectionFunctionRequest extends S.Class<TestConnectionFunctionRequest>("TestConnectionFunctionRequest")({Id: S.String, IfMatch: H.Header("If-Match"), Stage: S.optional(S.String), ConnectionObject: H.StreamBody()}) {}
export class TestFunctionRequest extends S.Class<TestFunctionRequest>("TestFunctionRequest")({Name: S.String, IfMatch: H.Header("If-Match"), Stage: S.optional(S.String), EventObject: H.StreamBody()}) {}
export class UpdateAnycastIpListRequest extends S.Class<UpdateAnycastIpListRequest>("UpdateAnycastIpListRequest")({Id: S.String, IpAddressType: S.optional(S.String), IfMatch: H.Header("If-Match")}) {}
export const HeaderList = S.Array(S.String);
export class Headers extends S.Class<Headers>("Headers")({Quantity: S.Number, Items: S.optional(HeaderList)}) {}
export class CachePolicyHeadersConfig extends S.Class<CachePolicyHeadersConfig>("CachePolicyHeadersConfig")({HeaderBehavior: S.String, Headers: S.optional(Headers)}) {}
export const CookieNameList = S.Array(S.String);
export class CookieNames extends S.Class<CookieNames>("CookieNames")({Quantity: S.Number, Items: S.optional(CookieNameList)}) {}
export class CachePolicyCookiesConfig extends S.Class<CachePolicyCookiesConfig>("CachePolicyCookiesConfig")({CookieBehavior: S.String, Cookies: S.optional(CookieNames)}) {}
export const QueryStringNamesList = S.Array(S.String);
export class QueryStringNames extends S.Class<QueryStringNames>("QueryStringNames")({Quantity: S.Number, Items: S.optional(QueryStringNamesList)}) {}
export class CachePolicyQueryStringsConfig extends S.Class<CachePolicyQueryStringsConfig>("CachePolicyQueryStringsConfig")({QueryStringBehavior: S.String, QueryStrings: S.optional(QueryStringNames)}) {}
export class ParametersInCacheKeyAndForwardedToOrigin extends S.Class<ParametersInCacheKeyAndForwardedToOrigin>("ParametersInCacheKeyAndForwardedToOrigin")({EnableAcceptEncodingGzip: S.Boolean, EnableAcceptEncodingBrotli: S.optional(S.Boolean), HeadersConfig: CachePolicyHeadersConfig, CookiesConfig: CachePolicyCookiesConfig, QueryStringsConfig: CachePolicyQueryStringsConfig}) {}
export class CachePolicyConfig extends S.Class<CachePolicyConfig>("CachePolicyConfig")({Comment: S.optional(S.String), Name: S.String, DefaultTTL: S.optional(S.Number), MaxTTL: S.optional(S.Number), MinTTL: S.Number, ParametersInCacheKeyAndForwardedToOrigin: S.optional(ParametersInCacheKeyAndForwardedToOrigin)}) {}
export class UpdateCachePolicyRequest extends S.Class<UpdateCachePolicyRequest>("UpdateCachePolicyRequest")({CachePolicyConfig: H.Body("CachePolicyConfig", CachePolicyConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class CloudFrontOriginAccessIdentityConfig extends S.Class<CloudFrontOriginAccessIdentityConfig>("CloudFrontOriginAccessIdentityConfig")({CallerReference: S.String, Comment: S.String}) {}
export class UpdateCloudFrontOriginAccessIdentityRequest extends S.Class<UpdateCloudFrontOriginAccessIdentityRequest>("UpdateCloudFrontOriginAccessIdentityRequest")({CloudFrontOriginAccessIdentityConfig: H.Body("CloudFrontOriginAccessIdentityConfig", CloudFrontOriginAccessIdentityConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class UpdateConnectionFunctionRequest extends S.Class<UpdateConnectionFunctionRequest>("UpdateConnectionFunctionRequest")({Id: S.String, IfMatch: H.Header("If-Match"), ConnectionFunctionConfig: FunctionConfig, ConnectionFunctionCode: H.StreamBody()}) {}
export class UpdateConnectionGroupRequest extends S.Class<UpdateConnectionGroupRequest>("UpdateConnectionGroupRequest")({Id: S.String, Ipv6Enabled: S.optional(S.Boolean), IfMatch: H.Header("If-Match"), AnycastIpListId: S.optional(S.String), Enabled: S.optional(S.Boolean)}) {}
export const StagingDistributionDnsNameList = S.Array(S.String);
export class StagingDistributionDnsNames extends S.Class<StagingDistributionDnsNames>("StagingDistributionDnsNames")({Quantity: S.Number, Items: S.optional(StagingDistributionDnsNameList)}) {}
export class SessionStickinessConfig extends S.Class<SessionStickinessConfig>("SessionStickinessConfig")({IdleTTL: S.Number, MaximumTTL: S.Number}) {}
export class ContinuousDeploymentSingleWeightConfig extends S.Class<ContinuousDeploymentSingleWeightConfig>("ContinuousDeploymentSingleWeightConfig")({Weight: S.Number, SessionStickinessConfig: S.optional(SessionStickinessConfig)}) {}
export class ContinuousDeploymentSingleHeaderConfig extends S.Class<ContinuousDeploymentSingleHeaderConfig>("ContinuousDeploymentSingleHeaderConfig")({Header: S.String, Value: S.String}) {}
export class TrafficConfig extends S.Class<TrafficConfig>("TrafficConfig")({SingleWeightConfig: S.optional(ContinuousDeploymentSingleWeightConfig), SingleHeaderConfig: S.optional(ContinuousDeploymentSingleHeaderConfig), Type: S.String}) {}
export class ContinuousDeploymentPolicyConfig extends S.Class<ContinuousDeploymentPolicyConfig>("ContinuousDeploymentPolicyConfig")({StagingDistributionDnsNames: StagingDistributionDnsNames, Enabled: S.Boolean, TrafficConfig: S.optional(TrafficConfig)}) {}
export class UpdateContinuousDeploymentPolicyRequest extends S.Class<UpdateContinuousDeploymentPolicyRequest>("UpdateContinuousDeploymentPolicyRequest")({ContinuousDeploymentPolicyConfig: H.Body("ContinuousDeploymentPolicyConfig", ContinuousDeploymentPolicyConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export const AliasList = S.Array(S.String);
export class Aliases extends S.Class<Aliases>("Aliases")({Quantity: S.Number, Items: S.optional(AliasList)}) {}
export class OriginCustomHeader extends S.Class<OriginCustomHeader>("OriginCustomHeader")({HeaderName: S.String, HeaderValue: S.String}) {}
export const OriginCustomHeadersList = S.Array(OriginCustomHeader);
export class CustomHeaders extends S.Class<CustomHeaders>("CustomHeaders")({Quantity: S.Number, Items: S.optional(OriginCustomHeadersList)}) {}
export class S3OriginConfig extends S.Class<S3OriginConfig>("S3OriginConfig")({OriginAccessIdentity: S.String, OriginReadTimeout: S.optional(S.Number)}) {}
export const SslProtocolsList = S.Array(S.String);
export class OriginSslProtocols extends S.Class<OriginSslProtocols>("OriginSslProtocols")({Quantity: S.Number, Items: SslProtocolsList}) {}
export class CustomOriginConfig extends S.Class<CustomOriginConfig>("CustomOriginConfig")({HTTPPort: S.Number, HTTPSPort: S.Number, OriginProtocolPolicy: S.String, OriginSslProtocols: S.optional(OriginSslProtocols), OriginReadTimeout: S.optional(S.Number), OriginKeepaliveTimeout: S.optional(S.Number), IpAddressType: S.optional(S.String)}) {}
export class VpcOriginConfig extends S.Class<VpcOriginConfig>("VpcOriginConfig")({VpcOriginId: S.String, OwnerAccountId: S.optional(S.String), OriginReadTimeout: S.optional(S.Number), OriginKeepaliveTimeout: S.optional(S.Number)}) {}
export class OriginShield extends S.Class<OriginShield>("OriginShield")({Enabled: S.Boolean, OriginShieldRegion: S.optional(S.String)}) {}
export class Origin extends S.Class<Origin>("Origin")({Id: S.String, DomainName: S.String, OriginPath: S.optional(S.String), CustomHeaders: S.optional(CustomHeaders), S3OriginConfig: S.optional(S3OriginConfig), CustomOriginConfig: S.optional(CustomOriginConfig), VpcOriginConfig: S.optional(VpcOriginConfig), ConnectionAttempts: S.optional(S.Number), ConnectionTimeout: S.optional(S.Number), ResponseCompletionTimeout: S.optional(S.Number), OriginShield: S.optional(OriginShield), OriginAccessControlId: S.optional(S.String)}) {}
export const OriginList = S.Array(Origin);
export class Origins extends S.Class<Origins>("Origins")({Quantity: S.Number, Items: OriginList}) {}
export const StatusCodeList = S.Array(S.Number);
export class StatusCodes extends S.Class<StatusCodes>("StatusCodes")({Quantity: S.Number, Items: StatusCodeList}) {}
export class OriginGroupFailoverCriteria extends S.Class<OriginGroupFailoverCriteria>("OriginGroupFailoverCriteria")({StatusCodes: StatusCodes}) {}
export class OriginGroupMember extends S.Class<OriginGroupMember>("OriginGroupMember")({OriginId: S.String}) {}
export const OriginGroupMemberList = S.Array(OriginGroupMember);
export class OriginGroupMembers extends S.Class<OriginGroupMembers>("OriginGroupMembers")({Quantity: S.Number, Items: OriginGroupMemberList}) {}
export class OriginGroup extends S.Class<OriginGroup>("OriginGroup")({Id: S.String, FailoverCriteria: OriginGroupFailoverCriteria, Members: OriginGroupMembers, SelectionCriteria: S.optional(S.String)}) {}
export const OriginGroupList = S.Array(OriginGroup);
export class OriginGroups extends S.Class<OriginGroups>("OriginGroups")({Quantity: S.Number, Items: S.optional(OriginGroupList)}) {}
export const AwsAccountNumberList = S.Array(S.String);
export class TrustedSigners extends S.Class<TrustedSigners>("TrustedSigners")({Enabled: S.Boolean, Quantity: S.Number, Items: S.optional(AwsAccountNumberList)}) {}
export const TrustedKeyGroupIdList = S.Array(S.String);
export class TrustedKeyGroups extends S.Class<TrustedKeyGroups>("TrustedKeyGroups")({Enabled: S.Boolean, Quantity: S.Number, Items: S.optional(TrustedKeyGroupIdList)}) {}
export const MethodsList = S.Array(S.String);
export class CachedMethods extends S.Class<CachedMethods>("CachedMethods")({Quantity: S.Number, Items: MethodsList}) {}
export class AllowedMethods extends S.Class<AllowedMethods>("AllowedMethods")({Quantity: S.Number, Items: MethodsList, CachedMethods: S.optional(CachedMethods)}) {}
export class LambdaFunctionAssociation extends S.Class<LambdaFunctionAssociation>("LambdaFunctionAssociation")({LambdaFunctionARN: S.String, EventType: S.String, IncludeBody: S.optional(S.Boolean)}) {}
export const LambdaFunctionAssociationList = S.Array(LambdaFunctionAssociation);
export class LambdaFunctionAssociations extends S.Class<LambdaFunctionAssociations>("LambdaFunctionAssociations")({Quantity: S.Number, Items: S.optional(LambdaFunctionAssociationList)}) {}
export class FunctionAssociation extends S.Class<FunctionAssociation>("FunctionAssociation")({FunctionARN: S.String, EventType: S.String}) {}
export const FunctionAssociationList = S.Array(FunctionAssociation);
export class FunctionAssociations extends S.Class<FunctionAssociations>("FunctionAssociations")({Quantity: S.Number, Items: S.optional(FunctionAssociationList)}) {}
export class GrpcConfig extends S.Class<GrpcConfig>("GrpcConfig")({Enabled: S.Boolean}) {}
export class CookiePreference extends S.Class<CookiePreference>("CookiePreference")({Forward: S.String, WhitelistedNames: S.optional(CookieNames)}) {}
export const QueryStringCacheKeysList = S.Array(S.String);
export class QueryStringCacheKeys extends S.Class<QueryStringCacheKeys>("QueryStringCacheKeys")({Quantity: S.Number, Items: S.optional(QueryStringCacheKeysList)}) {}
export class ForwardedValues extends S.Class<ForwardedValues>("ForwardedValues")({QueryString: S.Boolean, Cookies: CookiePreference, Headers: S.optional(Headers), QueryStringCacheKeys: S.optional(QueryStringCacheKeys)}) {}
export class DefaultCacheBehavior extends S.Class<DefaultCacheBehavior>("DefaultCacheBehavior")({TargetOriginId: S.String, TrustedSigners: S.optional(TrustedSigners), TrustedKeyGroups: S.optional(TrustedKeyGroups), ViewerProtocolPolicy: S.String, AllowedMethods: S.optional(AllowedMethods), SmoothStreaming: S.optional(S.Boolean), Compress: S.optional(S.Boolean), LambdaFunctionAssociations: S.optional(LambdaFunctionAssociations), FunctionAssociations: S.optional(FunctionAssociations), FieldLevelEncryptionId: S.optional(S.String), RealtimeLogConfigArn: S.optional(S.String), CachePolicyId: S.optional(S.String), OriginRequestPolicyId: S.optional(S.String), ResponseHeadersPolicyId: S.optional(S.String), GrpcConfig: S.optional(GrpcConfig), ForwardedValues: S.optional(ForwardedValues), MinTTL: S.optional(S.Number), DefaultTTL: S.optional(S.Number), MaxTTL: S.optional(S.Number)}) {}
export class CacheBehavior extends S.Class<CacheBehavior>("CacheBehavior")({PathPattern: S.String, TargetOriginId: S.String, TrustedSigners: S.optional(TrustedSigners), TrustedKeyGroups: S.optional(TrustedKeyGroups), ViewerProtocolPolicy: S.String, AllowedMethods: S.optional(AllowedMethods), SmoothStreaming: S.optional(S.Boolean), Compress: S.optional(S.Boolean), LambdaFunctionAssociations: S.optional(LambdaFunctionAssociations), FunctionAssociations: S.optional(FunctionAssociations), FieldLevelEncryptionId: S.optional(S.String), RealtimeLogConfigArn: S.optional(S.String), CachePolicyId: S.optional(S.String), OriginRequestPolicyId: S.optional(S.String), ResponseHeadersPolicyId: S.optional(S.String), GrpcConfig: S.optional(GrpcConfig), ForwardedValues: S.optional(ForwardedValues), MinTTL: S.optional(S.Number), DefaultTTL: S.optional(S.Number), MaxTTL: S.optional(S.Number)}) {}
export const CacheBehaviorList = S.Array(CacheBehavior);
export class CacheBehaviors extends S.Class<CacheBehaviors>("CacheBehaviors")({Quantity: S.Number, Items: S.optional(CacheBehaviorList)}) {}
export class CustomErrorResponse extends S.Class<CustomErrorResponse>("CustomErrorResponse")({ErrorCode: S.Number, ResponsePagePath: S.optional(S.String), ResponseCode: S.optional(S.String), ErrorCachingMinTTL: S.optional(S.Number)}) {}
export const CustomErrorResponseList = S.Array(CustomErrorResponse);
export class CustomErrorResponses extends S.Class<CustomErrorResponses>("CustomErrorResponses")({Quantity: S.Number, Items: S.optional(CustomErrorResponseList)}) {}
export class LoggingConfig extends S.Class<LoggingConfig>("LoggingConfig")({Enabled: S.optional(S.Boolean), IncludeCookies: S.optional(S.Boolean), Bucket: S.optional(S.String), Prefix: S.optional(S.String)}) {}
export class ViewerCertificate extends S.Class<ViewerCertificate>("ViewerCertificate")({CloudFrontDefaultCertificate: S.optional(S.Boolean), IAMCertificateId: S.optional(S.String), ACMCertificateArn: S.optional(S.String), SSLSupportMethod: S.optional(S.String), MinimumProtocolVersion: S.optional(S.String), Certificate: S.optional(S.String), CertificateSource: S.optional(S.String)}) {}
export const LocationList = S.Array(S.String);
export class GeoRestriction extends S.Class<GeoRestriction>("GeoRestriction")({RestrictionType: S.String, Quantity: S.Number, Items: S.optional(LocationList)}) {}
export class Restrictions extends S.Class<Restrictions>("Restrictions")({GeoRestriction: GeoRestriction}) {}
export class StringSchemaConfig extends S.Class<StringSchemaConfig>("StringSchemaConfig")({Comment: S.optional(S.String), DefaultValue: S.optional(S.String), Required: S.Boolean}) {}
export class ParameterDefinitionSchema extends S.Class<ParameterDefinitionSchema>("ParameterDefinitionSchema")({StringSchema: S.optional(StringSchemaConfig)}) {}
export class ParameterDefinition extends S.Class<ParameterDefinition>("ParameterDefinition")({Name: S.String, Definition: ParameterDefinitionSchema}) {}
export const ParameterDefinitions = S.Array(ParameterDefinition);
export class TenantConfig extends S.Class<TenantConfig>("TenantConfig")({ParameterDefinitions: S.optional(ParameterDefinitions)}) {}
export class TrustStoreConfig extends S.Class<TrustStoreConfig>("TrustStoreConfig")({TrustStoreId: S.String, AdvertiseTrustStoreCaNames: S.optional(S.Boolean), IgnoreCertificateExpiry: S.optional(S.Boolean)}) {}
export class ViewerMtlsConfig extends S.Class<ViewerMtlsConfig>("ViewerMtlsConfig")({Mode: S.optional(S.String), TrustStoreConfig: S.optional(TrustStoreConfig)}) {}
export class ConnectionFunctionAssociation extends S.Class<ConnectionFunctionAssociation>("ConnectionFunctionAssociation")({Id: S.String}) {}
export class DistributionConfig extends S.Class<DistributionConfig>("DistributionConfig")({CallerReference: S.String, Aliases: S.optional(Aliases), DefaultRootObject: S.optional(S.String), Origins: Origins, OriginGroups: S.optional(OriginGroups), DefaultCacheBehavior: DefaultCacheBehavior, CacheBehaviors: S.optional(CacheBehaviors), CustomErrorResponses: S.optional(CustomErrorResponses), Comment: S.String, Logging: S.optional(LoggingConfig), PriceClass: S.optional(S.String), Enabled: S.Boolean, ViewerCertificate: S.optional(ViewerCertificate), Restrictions: S.optional(Restrictions), WebACLId: S.optional(S.String), HttpVersion: S.optional(S.String), IsIPV6Enabled: S.optional(S.Boolean), ContinuousDeploymentPolicyId: S.optional(S.String), Staging: S.optional(S.Boolean), AnycastIpListId: S.optional(S.String), TenantConfig: S.optional(TenantConfig), ConnectionMode: S.optional(S.String), ViewerMtlsConfig: S.optional(ViewerMtlsConfig), ConnectionFunctionAssociation: S.optional(ConnectionFunctionAssociation)}) {}
export class UpdateDistributionRequest extends S.Class<UpdateDistributionRequest>("UpdateDistributionRequest")({DistributionConfig: H.Body("DistributionConfig", DistributionConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DomainItem extends S.Class<DomainItem>("DomainItem")({Domain: S.String}) {}
export const DomainList = S.Array(DomainItem);
export class WebAclCustomization extends S.Class<WebAclCustomization>("WebAclCustomization")({Action: S.String, Arn: S.optional(S.String)}) {}
export class Certificate extends S.Class<Certificate>("Certificate")({Arn: S.String}) {}
export class GeoRestrictionCustomization extends S.Class<GeoRestrictionCustomization>("GeoRestrictionCustomization")({RestrictionType: S.String, Locations: S.optional(LocationList)}) {}
export class Customizations extends S.Class<Customizations>("Customizations")({WebAcl: S.optional(WebAclCustomization), Certificate: S.optional(Certificate), GeoRestrictions: S.optional(GeoRestrictionCustomization)}) {}
export class Parameter extends S.Class<Parameter>("Parameter")({Name: S.String, Value: S.String}) {}
export const Parameters = S.Array(Parameter);
export class ManagedCertificateRequest extends S.Class<ManagedCertificateRequest>("ManagedCertificateRequest")({ValidationTokenHost: S.String, PrimaryDomainName: S.optional(S.String), CertificateTransparencyLoggingPreference: S.optional(S.String)}) {}
export class UpdateDistributionTenantRequest extends S.Class<UpdateDistributionTenantRequest>("UpdateDistributionTenantRequest")({Id: S.String, DistributionId: S.optional(S.String), Domains: S.optional(DomainList), Customizations: S.optional(Customizations), Parameters: S.optional(Parameters), ConnectionGroupId: S.optional(S.String), IfMatch: H.Header("If-Match"), ManagedCertificateRequest: S.optional(ManagedCertificateRequest), Enabled: S.optional(S.Boolean)}) {}
export class UpdateDistributionWithStagingConfigRequest extends S.Class<UpdateDistributionWithStagingConfigRequest>("UpdateDistributionWithStagingConfigRequest")({Id: S.String, StagingDistributionId: S.optional(S.String), IfMatch: S.optional(H.Header("If-Match"))}) {}
export class DistributionResourceId extends S.Class<DistributionResourceId>("DistributionResourceId")({DistributionId: S.optional(S.String), DistributionTenantId: S.optional(S.String)}) {}
export class UpdateDomainAssociationRequest extends S.Class<UpdateDomainAssociationRequest>("UpdateDomainAssociationRequest")({Domain: S.String, TargetResource: DistributionResourceId, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class QueryArgProfile extends S.Class<QueryArgProfile>("QueryArgProfile")({QueryArg: S.String, ProfileId: S.String}) {}
export const QueryArgProfileList = S.Array(QueryArgProfile);
export class QueryArgProfiles extends S.Class<QueryArgProfiles>("QueryArgProfiles")({Quantity: S.Number, Items: S.optional(QueryArgProfileList)}) {}
export class QueryArgProfileConfig extends S.Class<QueryArgProfileConfig>("QueryArgProfileConfig")({ForwardWhenQueryArgProfileIsUnknown: S.Boolean, QueryArgProfiles: S.optional(QueryArgProfiles)}) {}
export class ContentTypeProfile extends S.Class<ContentTypeProfile>("ContentTypeProfile")({Format: S.String, ProfileId: S.optional(S.String), ContentType: S.String}) {}
export const ContentTypeProfileList = S.Array(ContentTypeProfile);
export class ContentTypeProfiles extends S.Class<ContentTypeProfiles>("ContentTypeProfiles")({Quantity: S.Number, Items: S.optional(ContentTypeProfileList)}) {}
export class ContentTypeProfileConfig extends S.Class<ContentTypeProfileConfig>("ContentTypeProfileConfig")({ForwardWhenContentTypeIsUnknown: S.Boolean, ContentTypeProfiles: S.optional(ContentTypeProfiles)}) {}
export class FieldLevelEncryptionConfig extends S.Class<FieldLevelEncryptionConfig>("FieldLevelEncryptionConfig")({CallerReference: S.String, Comment: S.optional(S.String), QueryArgProfileConfig: S.optional(QueryArgProfileConfig), ContentTypeProfileConfig: S.optional(ContentTypeProfileConfig)}) {}
export class UpdateFieldLevelEncryptionConfigRequest extends S.Class<UpdateFieldLevelEncryptionConfigRequest>("UpdateFieldLevelEncryptionConfigRequest")({FieldLevelEncryptionConfig: H.Body("FieldLevelEncryptionConfig", FieldLevelEncryptionConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export const FieldPatternList = S.Array(S.String);
export class FieldPatterns extends S.Class<FieldPatterns>("FieldPatterns")({Quantity: S.Number, Items: S.optional(FieldPatternList)}) {}
export class EncryptionEntity extends S.Class<EncryptionEntity>("EncryptionEntity")({PublicKeyId: S.String, ProviderId: S.String, FieldPatterns: FieldPatterns}) {}
export const EncryptionEntityList = S.Array(EncryptionEntity);
export class EncryptionEntities extends S.Class<EncryptionEntities>("EncryptionEntities")({Quantity: S.Number, Items: S.optional(EncryptionEntityList)}) {}
export class FieldLevelEncryptionProfileConfig extends S.Class<FieldLevelEncryptionProfileConfig>("FieldLevelEncryptionProfileConfig")({Name: S.String, CallerReference: S.String, Comment: S.optional(S.String), EncryptionEntities: EncryptionEntities}) {}
export class UpdateFieldLevelEncryptionProfileRequest extends S.Class<UpdateFieldLevelEncryptionProfileRequest>("UpdateFieldLevelEncryptionProfileRequest")({FieldLevelEncryptionProfileConfig: H.Body("FieldLevelEncryptionProfileConfig", FieldLevelEncryptionProfileConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class UpdateFunctionRequest extends S.Class<UpdateFunctionRequest>("UpdateFunctionRequest")({Name: S.String, IfMatch: H.Header("If-Match"), FunctionConfig: FunctionConfig, FunctionCode: H.StreamBody()}) {}
export const PublicKeyIdList = S.Array(S.String);
export class KeyGroupConfig extends S.Class<KeyGroupConfig>("KeyGroupConfig")({Name: S.String, Items: PublicKeyIdList, Comment: S.optional(S.String)}) {}
export class UpdateKeyGroupRequest extends S.Class<UpdateKeyGroupRequest>("UpdateKeyGroupRequest")({KeyGroupConfig: H.Body("KeyGroupConfig", KeyGroupConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class UpdateKeyValueStoreRequest extends S.Class<UpdateKeyValueStoreRequest>("UpdateKeyValueStoreRequest")({Name: S.String, Comment: S.String, IfMatch: H.Header("If-Match")}) {}
export class OriginAccessControlConfig extends S.Class<OriginAccessControlConfig>("OriginAccessControlConfig")({Name: S.String, Description: S.optional(S.String), SigningProtocol: S.String, SigningBehavior: S.String, OriginAccessControlOriginType: S.String}) {}
export class UpdateOriginAccessControlRequest extends S.Class<UpdateOriginAccessControlRequest>("UpdateOriginAccessControlRequest")({OriginAccessControlConfig: H.Body("OriginAccessControlConfig", OriginAccessControlConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class OriginRequestPolicyHeadersConfig extends S.Class<OriginRequestPolicyHeadersConfig>("OriginRequestPolicyHeadersConfig")({HeaderBehavior: S.String, Headers: S.optional(Headers)}) {}
export class OriginRequestPolicyCookiesConfig extends S.Class<OriginRequestPolicyCookiesConfig>("OriginRequestPolicyCookiesConfig")({CookieBehavior: S.String, Cookies: S.optional(CookieNames)}) {}
export class OriginRequestPolicyQueryStringsConfig extends S.Class<OriginRequestPolicyQueryStringsConfig>("OriginRequestPolicyQueryStringsConfig")({QueryStringBehavior: S.String, QueryStrings: S.optional(QueryStringNames)}) {}
export class OriginRequestPolicyConfig extends S.Class<OriginRequestPolicyConfig>("OriginRequestPolicyConfig")({Comment: S.optional(S.String), Name: S.String, HeadersConfig: OriginRequestPolicyHeadersConfig, CookiesConfig: OriginRequestPolicyCookiesConfig, QueryStringsConfig: OriginRequestPolicyQueryStringsConfig}) {}
export class UpdateOriginRequestPolicyRequest extends S.Class<UpdateOriginRequestPolicyRequest>("UpdateOriginRequestPolicyRequest")({OriginRequestPolicyConfig: H.Body("OriginRequestPolicyConfig", OriginRequestPolicyConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class PublicKeyConfig extends S.Class<PublicKeyConfig>("PublicKeyConfig")({CallerReference: S.String, Name: S.String, EncodedKey: S.String, Comment: S.optional(S.String)}) {}
export class UpdatePublicKeyRequest extends S.Class<UpdatePublicKeyRequest>("UpdatePublicKeyRequest")({PublicKeyConfig: H.Body("PublicKeyConfig", PublicKeyConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class KinesisStreamConfig extends S.Class<KinesisStreamConfig>("KinesisStreamConfig")({RoleARN: S.String, StreamARN: S.String}) {}
export class EndPoint extends S.Class<EndPoint>("EndPoint")({StreamType: S.String, KinesisStreamConfig: S.optional(KinesisStreamConfig)}) {}
export const EndPointList = S.Array(EndPoint);
export class UpdateRealtimeLogConfigRequest extends S.Class<UpdateRealtimeLogConfigRequest>("UpdateRealtimeLogConfigRequest")({EndPoints: S.optional(EndPointList), Fields: S.optional(FieldList), Name: S.optional(S.String), ARN: S.optional(S.String), SamplingRate: S.optional(S.Number)}) {}
export const AccessControlAllowOriginsList = S.Array(S.String);
export class ResponseHeadersPolicyAccessControlAllowOrigins extends S.Class<ResponseHeadersPolicyAccessControlAllowOrigins>("ResponseHeadersPolicyAccessControlAllowOrigins")({Quantity: S.Number, Items: AccessControlAllowOriginsList}) {}
export const AccessControlAllowHeadersList = S.Array(S.String);
export class ResponseHeadersPolicyAccessControlAllowHeaders extends S.Class<ResponseHeadersPolicyAccessControlAllowHeaders>("ResponseHeadersPolicyAccessControlAllowHeaders")({Quantity: S.Number, Items: AccessControlAllowHeadersList}) {}
export const AccessControlAllowMethodsList = S.Array(S.String);
export class ResponseHeadersPolicyAccessControlAllowMethods extends S.Class<ResponseHeadersPolicyAccessControlAllowMethods>("ResponseHeadersPolicyAccessControlAllowMethods")({Quantity: S.Number, Items: AccessControlAllowMethodsList}) {}
export const AccessControlExposeHeadersList = S.Array(S.String);
export class ResponseHeadersPolicyAccessControlExposeHeaders extends S.Class<ResponseHeadersPolicyAccessControlExposeHeaders>("ResponseHeadersPolicyAccessControlExposeHeaders")({Quantity: S.Number, Items: S.optional(AccessControlExposeHeadersList)}) {}
export class ResponseHeadersPolicyCorsConfig extends S.Class<ResponseHeadersPolicyCorsConfig>("ResponseHeadersPolicyCorsConfig")({AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins, AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders, AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods, AccessControlAllowCredentials: S.Boolean, AccessControlExposeHeaders: S.optional(ResponseHeadersPolicyAccessControlExposeHeaders), AccessControlMaxAgeSec: S.optional(S.Number), OriginOverride: S.Boolean}) {}
export class ResponseHeadersPolicyXSSProtection extends S.Class<ResponseHeadersPolicyXSSProtection>("ResponseHeadersPolicyXSSProtection")({Override: S.Boolean, Protection: S.Boolean, ModeBlock: S.optional(S.Boolean), ReportUri: S.optional(S.String)}) {}
export class ResponseHeadersPolicyFrameOptions extends S.Class<ResponseHeadersPolicyFrameOptions>("ResponseHeadersPolicyFrameOptions")({Override: S.Boolean, FrameOption: S.String}) {}
export class ResponseHeadersPolicyReferrerPolicy extends S.Class<ResponseHeadersPolicyReferrerPolicy>("ResponseHeadersPolicyReferrerPolicy")({Override: S.Boolean, ReferrerPolicy: S.String}) {}
export class ResponseHeadersPolicyContentSecurityPolicy extends S.Class<ResponseHeadersPolicyContentSecurityPolicy>("ResponseHeadersPolicyContentSecurityPolicy")({Override: S.Boolean, ContentSecurityPolicy: S.String}) {}
export class ResponseHeadersPolicyContentTypeOptions extends S.Class<ResponseHeadersPolicyContentTypeOptions>("ResponseHeadersPolicyContentTypeOptions")({Override: S.Boolean}) {}
export class ResponseHeadersPolicyStrictTransportSecurity extends S.Class<ResponseHeadersPolicyStrictTransportSecurity>("ResponseHeadersPolicyStrictTransportSecurity")({Override: S.Boolean, IncludeSubdomains: S.optional(S.Boolean), Preload: S.optional(S.Boolean), AccessControlMaxAgeSec: S.Number}) {}
export class ResponseHeadersPolicySecurityHeadersConfig extends S.Class<ResponseHeadersPolicySecurityHeadersConfig>("ResponseHeadersPolicySecurityHeadersConfig")({XSSProtection: S.optional(ResponseHeadersPolicyXSSProtection), FrameOptions: S.optional(ResponseHeadersPolicyFrameOptions), ReferrerPolicy: S.optional(ResponseHeadersPolicyReferrerPolicy), ContentSecurityPolicy: S.optional(ResponseHeadersPolicyContentSecurityPolicy), ContentTypeOptions: S.optional(ResponseHeadersPolicyContentTypeOptions), StrictTransportSecurity: S.optional(ResponseHeadersPolicyStrictTransportSecurity)}) {}
export class ResponseHeadersPolicyServerTimingHeadersConfig extends S.Class<ResponseHeadersPolicyServerTimingHeadersConfig>("ResponseHeadersPolicyServerTimingHeadersConfig")({Enabled: S.Boolean, SamplingRate: S.optional(S.Number)}) {}
export class ResponseHeadersPolicyCustomHeader extends S.Class<ResponseHeadersPolicyCustomHeader>("ResponseHeadersPolicyCustomHeader")({Header: S.String, Value: S.String, Override: S.Boolean}) {}
export const ResponseHeadersPolicyCustomHeaderList = S.Array(ResponseHeadersPolicyCustomHeader);
export class ResponseHeadersPolicyCustomHeadersConfig extends S.Class<ResponseHeadersPolicyCustomHeadersConfig>("ResponseHeadersPolicyCustomHeadersConfig")({Quantity: S.Number, Items: S.optional(ResponseHeadersPolicyCustomHeaderList)}) {}
export class ResponseHeadersPolicyRemoveHeader extends S.Class<ResponseHeadersPolicyRemoveHeader>("ResponseHeadersPolicyRemoveHeader")({Header: S.String}) {}
export const ResponseHeadersPolicyRemoveHeaderList = S.Array(ResponseHeadersPolicyRemoveHeader);
export class ResponseHeadersPolicyRemoveHeadersConfig extends S.Class<ResponseHeadersPolicyRemoveHeadersConfig>("ResponseHeadersPolicyRemoveHeadersConfig")({Quantity: S.Number, Items: S.optional(ResponseHeadersPolicyRemoveHeaderList)}) {}
export class ResponseHeadersPolicyConfig extends S.Class<ResponseHeadersPolicyConfig>("ResponseHeadersPolicyConfig")({Comment: S.optional(S.String), Name: S.String, CorsConfig: S.optional(ResponseHeadersPolicyCorsConfig), SecurityHeadersConfig: S.optional(ResponseHeadersPolicySecurityHeadersConfig), ServerTimingHeadersConfig: S.optional(ResponseHeadersPolicyServerTimingHeadersConfig), CustomHeadersConfig: S.optional(ResponseHeadersPolicyCustomHeadersConfig), RemoveHeadersConfig: S.optional(ResponseHeadersPolicyRemoveHeadersConfig)}) {}
export class UpdateResponseHeadersPolicyRequest extends S.Class<UpdateResponseHeadersPolicyRequest>("UpdateResponseHeadersPolicyRequest")({ResponseHeadersPolicyConfig: H.Body("ResponseHeadersPolicyConfig", ResponseHeadersPolicyConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class S3Origin extends S.Class<S3Origin>("S3Origin")({DomainName: S.String, OriginAccessIdentity: S.String}) {}
export class StreamingLoggingConfig extends S.Class<StreamingLoggingConfig>("StreamingLoggingConfig")({Enabled: S.Boolean, Bucket: S.String, Prefix: S.String}) {}
export class StreamingDistributionConfig extends S.Class<StreamingDistributionConfig>("StreamingDistributionConfig")({CallerReference: S.String, S3Origin: S3Origin, Aliases: S.optional(Aliases), Comment: S.String, Logging: S.optional(StreamingLoggingConfig), TrustedSigners: TrustedSigners, PriceClass: S.optional(S.String), Enabled: S.Boolean}) {}
export class UpdateStreamingDistributionRequest extends S.Class<UpdateStreamingDistributionRequest>("UpdateStreamingDistributionRequest")({StreamingDistributionConfig: H.Body("StreamingDistributionConfig", StreamingDistributionConfig), Id: S.String, IfMatch: S.optional(H.Header("If-Match"))}) {}
export class CaCertificatesBundleS3Location extends S.Class<CaCertificatesBundleS3Location>("CaCertificatesBundleS3Location")({Bucket: S.String, Key: S.String, Region: S.String, Version: S.optional(S.String)}) {}
export const CaCertificatesBundleSource = S.Union(CaCertificatesBundleS3Location);
export class UpdateTrustStoreRequest extends S.Class<UpdateTrustStoreRequest>("UpdateTrustStoreRequest")({Id: S.String, CaCertificatesBundleSource: H.Body("undefined", CaCertificatesBundleSource), IfMatch: H.Header("If-Match")}) {}
export class VpcOriginEndpointConfig extends S.Class<VpcOriginEndpointConfig>("VpcOriginEndpointConfig")({Name: S.String, Arn: S.String, HTTPPort: S.Number, HTTPSPort: S.Number, OriginProtocolPolicy: S.String, OriginSslProtocols: S.optional(OriginSslProtocols)}) {}
export class UpdateVpcOriginRequest extends S.Class<UpdateVpcOriginRequest>("UpdateVpcOriginRequest")({VpcOriginEndpointConfig: H.Body("VpcOriginEndpointConfig", VpcOriginEndpointConfig), Id: S.String, IfMatch: H.Header("If-Match")}) {}
export class VerifyDnsConfigurationRequest extends S.Class<VerifyDnsConfigurationRequest>("VerifyDnsConfigurationRequest")({Domain: S.optional(S.String), Identifier: S.String}) {}
export const TagKeyList = S.Array(S.String);
export class IpamCidrConfig extends S.Class<IpamCidrConfig>("IpamCidrConfig")({Cidr: S.String, IpamPoolArn: S.String, AnycastIp: S.optional(S.String), Status: S.optional(S.String)}) {}
export const IpamCidrConfigList = S.Array(IpamCidrConfig);
export class DistributionConfigWithTags extends S.Class<DistributionConfigWithTags>("DistributionConfigWithTags")({DistributionConfig: DistributionConfig, Tags: Tags}) {}
export class ImportSource extends S.Class<ImportSource>("ImportSource")({SourceType: S.String, SourceARN: S.String}) {}
export class StreamingDistributionConfigWithTags extends S.Class<StreamingDistributionConfigWithTags>("StreamingDistributionConfigWithTags")({StreamingDistributionConfig: StreamingDistributionConfig, Tags: Tags}) {}
export class ConnectionFunctionSummary extends S.Class<ConnectionFunctionSummary>("ConnectionFunctionSummary")({Name: S.String, Id: S.String, ConnectionFunctionConfig: FunctionConfig, ConnectionFunctionArn: S.String, Status: S.String, Stage: S.String, CreatedTime: S.Date, LastModifiedTime: S.Date}) {}
export const ConnectionFunctionSummaryList = S.Array(ConnectionFunctionSummary);
export class ConnectionGroupAssociationFilter extends S.Class<ConnectionGroupAssociationFilter>("ConnectionGroupAssociationFilter")({AnycastIpListId: S.optional(S.String)}) {}
export class DistributionTenantAssociationFilter extends S.Class<DistributionTenantAssociationFilter>("DistributionTenantAssociationFilter")({DistributionId: S.optional(S.String), ConnectionGroupId: S.optional(S.String)}) {}
export class TagKeys extends S.Class<TagKeys>("TagKeys")({Items: S.optional(TagKeyList)}) {}
export class AssociateDistributionTenantWebACLResult extends S.Class<AssociateDistributionTenantWebACLResult>("AssociateDistributionTenantWebACLResult")({Id: S.optional(S.String), WebACLArn: S.optional(S.String), ETag: S.optional(H.Header("ETag"))}) {}
export class AssociateDistributionWebACLResult extends S.Class<AssociateDistributionWebACLResult>("AssociateDistributionWebACLResult")({Id: S.optional(S.String), WebACLArn: S.optional(S.String), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateCloudFrontOriginAccessIdentityRequest extends S.Class<CreateCloudFrontOriginAccessIdentityRequest>("CreateCloudFrontOriginAccessIdentityRequest")({CloudFrontOriginAccessIdentityConfig: H.Body("CloudFrontOriginAccessIdentityConfig", CloudFrontOriginAccessIdentityConfig)}) {}
export class CreateDistributionWithTagsRequest extends S.Class<CreateDistributionWithTagsRequest>("CreateDistributionWithTagsRequest")({DistributionConfigWithTags: H.Body("DistributionConfigWithTags", DistributionConfigWithTags)}) {}
export class CreateKeyGroupRequest extends S.Class<CreateKeyGroupRequest>("CreateKeyGroupRequest")({KeyGroupConfig: H.Body("KeyGroupConfig", KeyGroupConfig)}) {}
export class CreateKeyValueStoreRequest extends S.Class<CreateKeyValueStoreRequest>("CreateKeyValueStoreRequest")({Name: S.String, Comment: S.optional(S.String), ImportSource: S.optional(ImportSource)}) {}
export class CreateOriginAccessControlRequest extends S.Class<CreateOriginAccessControlRequest>("CreateOriginAccessControlRequest")({OriginAccessControlConfig: H.Body("OriginAccessControlConfig", OriginAccessControlConfig)}) {}
export class CreatePublicKeyRequest extends S.Class<CreatePublicKeyRequest>("CreatePublicKeyRequest")({PublicKeyConfig: H.Body("PublicKeyConfig", PublicKeyConfig)}) {}
export class CreateStreamingDistributionWithTagsRequest extends S.Class<CreateStreamingDistributionWithTagsRequest>("CreateStreamingDistributionWithTagsRequest")({StreamingDistributionConfigWithTags: H.Body("StreamingDistributionConfigWithTags", StreamingDistributionConfigWithTags)}) {}
export class FunctionMetadata extends S.Class<FunctionMetadata>("FunctionMetadata")({FunctionARN: S.String, Stage: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.Date}) {}
export class FunctionSummary extends S.Class<FunctionSummary>("FunctionSummary")({Name: S.String, Status: S.optional(S.String), FunctionConfig: FunctionConfig, FunctionMetadata: FunctionMetadata}) {}
export class DescribeFunctionResult extends S.Class<DescribeFunctionResult>("DescribeFunctionResult")({FunctionSummary: S.optional(H.Body("undefined", FunctionSummary)), ETag: S.optional(H.Header("ETag"))}) {}
export class DisassociateDistributionTenantWebACLResult extends S.Class<DisassociateDistributionTenantWebACLResult>("DisassociateDistributionTenantWebACLResult")({Id: S.optional(S.String), ETag: S.optional(H.Header("ETag"))}) {}
export class DisassociateDistributionWebACLResult extends S.Class<DisassociateDistributionWebACLResult>("DisassociateDistributionWebACLResult")({Id: S.optional(S.String), ETag: S.optional(H.Header("ETag"))}) {}
export class GetCachePolicyConfigResult extends S.Class<GetCachePolicyConfigResult>("GetCachePolicyConfigResult")({CachePolicyConfig: S.optional(H.Body("undefined", CachePolicyConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetCloudFrontOriginAccessIdentityConfigResult extends S.Class<GetCloudFrontOriginAccessIdentityConfigResult>("GetCloudFrontOriginAccessIdentityConfigResult")({CloudFrontOriginAccessIdentityConfig: S.optional(H.Body("undefined", CloudFrontOriginAccessIdentityConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetConnectionFunctionResult extends S.Class<GetConnectionFunctionResult>("GetConnectionFunctionResult")({ConnectionFunctionCode: S.optional(H.Body("undefined", H.StreamBody())), ETag: S.optional(H.Header("ETag")), ContentType: S.optional(H.Header("Content-Type"))}) {}
export class ConnectionGroup extends S.Class<ConnectionGroup>("ConnectionGroup")({Id: S.optional(S.String), Name: S.optional(S.String), Arn: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), Tags: S.optional(Tags), Ipv6Enabled: S.optional(S.Boolean), RoutingEndpoint: S.optional(S.String), AnycastIpListId: S.optional(S.String), Status: S.optional(S.String), Enabled: S.optional(S.Boolean), IsDefault: S.optional(S.Boolean)}) {}
export class GetConnectionGroupResult extends S.Class<GetConnectionGroupResult>("GetConnectionGroupResult")({ConnectionGroup: S.optional(H.Body("undefined", ConnectionGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetConnectionGroupByRoutingEndpointResult extends S.Class<GetConnectionGroupByRoutingEndpointResult>("GetConnectionGroupByRoutingEndpointResult")({ConnectionGroup: S.optional(H.Body("undefined", ConnectionGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetContinuousDeploymentPolicyConfigResult extends S.Class<GetContinuousDeploymentPolicyConfigResult>("GetContinuousDeploymentPolicyConfigResult")({ContinuousDeploymentPolicyConfig: S.optional(H.Body("undefined", ContinuousDeploymentPolicyConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export const KeyPairIdList = S.Array(S.String);
export class KeyPairIds extends S.Class<KeyPairIds>("KeyPairIds")({Quantity: S.Number, Items: S.optional(KeyPairIdList)}) {}
export class Signer extends S.Class<Signer>("Signer")({AwsAccountNumber: S.optional(S.String), KeyPairIds: S.optional(KeyPairIds)}) {}
export const SignerList = S.Array(Signer);
export class ActiveTrustedSigners extends S.Class<ActiveTrustedSigners>("ActiveTrustedSigners")({Enabled: S.Boolean, Quantity: S.Number, Items: S.optional(SignerList)}) {}
export class KGKeyPairIds extends S.Class<KGKeyPairIds>("KGKeyPairIds")({KeyGroupId: S.optional(S.String), KeyPairIds: S.optional(KeyPairIds)}) {}
export const KGKeyPairIdsList = S.Array(KGKeyPairIds);
export class ActiveTrustedKeyGroups extends S.Class<ActiveTrustedKeyGroups>("ActiveTrustedKeyGroups")({Enabled: S.Boolean, Quantity: S.Number, Items: S.optional(KGKeyPairIdsList)}) {}
export class AliasICPRecordal extends S.Class<AliasICPRecordal>("AliasICPRecordal")({CNAME: S.optional(S.String), ICPRecordalStatus: S.optional(S.String)}) {}
export const AliasICPRecordals = S.Array(AliasICPRecordal);
export class Distribution extends S.Class<Distribution>("Distribution")({Id: S.String, ARN: S.String, Status: S.String, LastModifiedTime: S.Date, InProgressInvalidationBatches: S.Number, DomainName: S.String, ActiveTrustedSigners: S.optional(ActiveTrustedSigners), ActiveTrustedKeyGroups: S.optional(ActiveTrustedKeyGroups), DistributionConfig: DistributionConfig, AliasICPRecordals: S.optional(AliasICPRecordals)}) {}
export class GetDistributionResult extends S.Class<GetDistributionResult>("GetDistributionResult")({Distribution: S.optional(H.Body("undefined", Distribution)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetDistributionConfigResult extends S.Class<GetDistributionConfigResult>("GetDistributionConfigResult")({DistributionConfig: S.optional(H.Body("undefined", DistributionConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class DomainResult extends S.Class<DomainResult>("DomainResult")({Domain: S.String, Status: S.optional(S.String)}) {}
export const DomainResultList = S.Array(DomainResult);
export class DistributionTenant extends S.Class<DistributionTenant>("DistributionTenant")({Id: S.optional(S.String), DistributionId: S.optional(S.String), Name: S.optional(S.String), Arn: S.optional(S.String), Domains: S.optional(DomainResultList), Tags: S.optional(Tags), Customizations: S.optional(Customizations), Parameters: S.optional(Parameters), ConnectionGroupId: S.optional(S.String), CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), Enabled: S.optional(S.Boolean), Status: S.optional(S.String)}) {}
export class GetDistributionTenantByDomainResult extends S.Class<GetDistributionTenantByDomainResult>("GetDistributionTenantByDomainResult")({DistributionTenant: S.optional(H.Body("undefined", DistributionTenant)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetFieldLevelEncryptionConfigResult extends S.Class<GetFieldLevelEncryptionConfigResult>("GetFieldLevelEncryptionConfigResult")({FieldLevelEncryptionConfig: S.optional(H.Body("undefined", FieldLevelEncryptionConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetFieldLevelEncryptionProfileConfigResult extends S.Class<GetFieldLevelEncryptionProfileConfigResult>("GetFieldLevelEncryptionProfileConfigResult")({FieldLevelEncryptionProfileConfig: S.optional(H.Body("undefined", FieldLevelEncryptionProfileConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetFunctionResult extends S.Class<GetFunctionResult>("GetFunctionResult")({FunctionCode: S.optional(H.Body("undefined", H.StreamBody())), ETag: S.optional(H.Header("ETag")), ContentType: S.optional(H.Header("Content-Type"))}) {}
export class Invalidation extends S.Class<Invalidation>("Invalidation")({Id: S.String, Status: S.String, CreateTime: S.Date, InvalidationBatch: InvalidationBatch}) {}
export class GetInvalidationResult extends S.Class<GetInvalidationResult>("GetInvalidationResult")({Invalidation: S.optional(H.Body("undefined", Invalidation))}) {}
export class GetInvalidationForDistributionTenantResult extends S.Class<GetInvalidationForDistributionTenantResult>("GetInvalidationForDistributionTenantResult")({Invalidation: S.optional(H.Body("undefined", Invalidation))}) {}
export class GetKeyGroupConfigResult extends S.Class<GetKeyGroupConfigResult>("GetKeyGroupConfigResult")({KeyGroupConfig: S.optional(H.Body("undefined", KeyGroupConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class RealtimeMetricsSubscriptionConfig extends S.Class<RealtimeMetricsSubscriptionConfig>("RealtimeMetricsSubscriptionConfig")({RealtimeMetricsSubscriptionStatus: S.String}) {}
export class MonitoringSubscription extends S.Class<MonitoringSubscription>("MonitoringSubscription")({RealtimeMetricsSubscriptionConfig: S.optional(RealtimeMetricsSubscriptionConfig)}) {}
export class GetMonitoringSubscriptionResult extends S.Class<GetMonitoringSubscriptionResult>("GetMonitoringSubscriptionResult")({MonitoringSubscription: S.optional(H.Body("undefined", MonitoringSubscription))}) {}
export class GetOriginAccessControlConfigResult extends S.Class<GetOriginAccessControlConfigResult>("GetOriginAccessControlConfigResult")({OriginAccessControlConfig: S.optional(H.Body("undefined", OriginAccessControlConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetOriginRequestPolicyConfigResult extends S.Class<GetOriginRequestPolicyConfigResult>("GetOriginRequestPolicyConfigResult")({OriginRequestPolicyConfig: S.optional(H.Body("undefined", OriginRequestPolicyConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetPublicKeyConfigResult extends S.Class<GetPublicKeyConfigResult>("GetPublicKeyConfigResult")({PublicKeyConfig: S.optional(H.Body("undefined", PublicKeyConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetResourcePolicyResult extends S.Class<GetResourcePolicyResult>("GetResourcePolicyResult")({ResourceArn: S.optional(S.String), PolicyDocument: S.optional(S.String)}) {}
export class GetResponseHeadersPolicyConfigResult extends S.Class<GetResponseHeadersPolicyConfigResult>("GetResponseHeadersPolicyConfigResult")({ResponseHeadersPolicyConfig: S.optional(H.Body("undefined", ResponseHeadersPolicyConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetStreamingDistributionConfigResult extends S.Class<GetStreamingDistributionConfigResult>("GetStreamingDistributionConfigResult")({StreamingDistributionConfig: S.optional(H.Body("undefined", StreamingDistributionConfig)), ETag: S.optional(H.Header("ETag"))}) {}
export class VpcOrigin extends S.Class<VpcOrigin>("VpcOrigin")({Id: S.String, Arn: S.String, AccountId: S.optional(S.String), Status: S.String, CreatedTime: S.Date, LastModifiedTime: S.Date, VpcOriginEndpointConfig: VpcOriginEndpointConfig}) {}
export class GetVpcOriginResult extends S.Class<GetVpcOriginResult>("GetVpcOriginResult")({VpcOrigin: S.optional(H.Body("undefined", VpcOrigin)), ETag: S.optional(H.Header("ETag"))}) {}
export class ListConnectionFunctionsResult extends S.Class<ListConnectionFunctionsResult>("ListConnectionFunctionsResult")({NextMarker: S.optional(S.String), ConnectionFunctions: S.optional(ConnectionFunctionSummaryList)}) {}
export class ListConnectionGroupsRequest extends S.Class<ListConnectionGroupsRequest>("ListConnectionGroupsRequest")({AssociationFilter: S.optional(ConnectionGroupAssociationFilter), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class DistributionSummary extends S.Class<DistributionSummary>("DistributionSummary")({Id: S.String, ARN: S.String, ETag: S.optional(S.String), Status: S.String, LastModifiedTime: S.Date, DomainName: S.String, Aliases: Aliases, Origins: Origins, OriginGroups: S.optional(OriginGroups), DefaultCacheBehavior: DefaultCacheBehavior, CacheBehaviors: CacheBehaviors, CustomErrorResponses: CustomErrorResponses, Comment: S.String, PriceClass: S.String, Enabled: S.Boolean, ViewerCertificate: ViewerCertificate, Restrictions: Restrictions, WebACLId: S.String, HttpVersion: S.String, IsIPV6Enabled: S.Boolean, AliasICPRecordals: S.optional(AliasICPRecordals), Staging: S.Boolean, ConnectionMode: S.optional(S.String), AnycastIpListId: S.optional(S.String), ViewerMtlsConfig: S.optional(ViewerMtlsConfig), ConnectionFunctionAssociation: S.optional(ConnectionFunctionAssociation)}) {}
export const DistributionSummaryList = S.Array(DistributionSummary);
export class DistributionList extends S.Class<DistributionList>("DistributionList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(DistributionSummaryList)}) {}
export class ListDistributionsByAnycastIpListIdResult extends S.Class<ListDistributionsByAnycastIpListIdResult>("ListDistributionsByAnycastIpListIdResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionsByConnectionFunctionResult extends S.Class<ListDistributionsByConnectionFunctionResult>("ListDistributionsByConnectionFunctionResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionsByConnectionModeResult extends S.Class<ListDistributionsByConnectionModeResult>("ListDistributionsByConnectionModeResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export const DistributionIdListSummary = S.Array(S.String);
export class DistributionIdList extends S.Class<DistributionIdList>("DistributionIdList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(DistributionIdListSummary)}) {}
export class ListDistributionsByKeyGroupResult extends S.Class<ListDistributionsByKeyGroupResult>("ListDistributionsByKeyGroupResult")({DistributionIdList: S.optional(H.Body("undefined", DistributionIdList))}) {}
export class ListDistributionsByOriginRequestPolicyIdResult extends S.Class<ListDistributionsByOriginRequestPolicyIdResult>("ListDistributionsByOriginRequestPolicyIdResult")({DistributionIdList: S.optional(H.Body("undefined", DistributionIdList))}) {}
export class ListDistributionsByRealtimeLogConfigResult extends S.Class<ListDistributionsByRealtimeLogConfigResult>("ListDistributionsByRealtimeLogConfigResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionsByResponseHeadersPolicyIdResult extends S.Class<ListDistributionsByResponseHeadersPolicyIdResult>("ListDistributionsByResponseHeadersPolicyIdResult")({DistributionIdList: S.optional(H.Body("undefined", DistributionIdList))}) {}
export class ListDistributionsByTrustStoreResult extends S.Class<ListDistributionsByTrustStoreResult>("ListDistributionsByTrustStoreResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionsByVpcOriginIdResult extends S.Class<ListDistributionsByVpcOriginIdResult>("ListDistributionsByVpcOriginIdResult")({DistributionIdList: S.optional(H.Body("undefined", DistributionIdList))}) {}
export class ListDistributionsByWebACLIdResult extends S.Class<ListDistributionsByWebACLIdResult>("ListDistributionsByWebACLIdResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionTenantsRequest extends S.Class<ListDistributionTenantsRequest>("ListDistributionTenantsRequest")({AssociationFilter: S.optional(DistributionTenantAssociationFilter), Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListDomainConflictsRequest extends S.Class<ListDomainConflictsRequest>("ListDomainConflictsRequest")({Domain: S.String, DomainControlValidationResource: DistributionResourceId, MaxItems: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class InvalidationSummary extends S.Class<InvalidationSummary>("InvalidationSummary")({Id: S.String, CreateTime: S.Date, Status: S.String}) {}
export const InvalidationSummaryList = S.Array(InvalidationSummary);
export class InvalidationList extends S.Class<InvalidationList>("InvalidationList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(InvalidationSummaryList)}) {}
export class ListInvalidationsForDistributionTenantResult extends S.Class<ListInvalidationsForDistributionTenantResult>("ListInvalidationsForDistributionTenantResult")({InvalidationList: S.optional(H.Body("undefined", InvalidationList))}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: H.Body("undefined", Tags)}) {}
export class PublishConnectionFunctionResult extends S.Class<PublishConnectionFunctionResult>("PublishConnectionFunctionResult")({ConnectionFunctionSummary: S.optional(H.Body("undefined", ConnectionFunctionSummary))}) {}
export class PublishFunctionResult extends S.Class<PublishFunctionResult>("PublishFunctionResult")({FunctionSummary: S.optional(H.Body("undefined", FunctionSummary))}) {}
export class PutResourcePolicyResult extends S.Class<PutResourcePolicyResult>("PutResourcePolicyResult")({ResourceArn: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({Resource: S.String, TagKeys: H.Body("TagKeys", TagKeys)}) {}
export class IpamConfig extends S.Class<IpamConfig>("IpamConfig")({Quantity: S.Number, IpamCidrConfigs: IpamCidrConfigList}) {}
export const AnycastIps = S.Array(S.String);
export class AnycastIpList extends S.Class<AnycastIpList>("AnycastIpList")({Id: S.String, Name: S.String, Status: S.String, Arn: S.String, IpAddressType: S.optional(S.String), IpamConfig: S.optional(IpamConfig), AnycastIps: AnycastIps, IpCount: S.Number, LastModifiedTime: S.Date}) {}
export class UpdateAnycastIpListResult extends S.Class<UpdateAnycastIpListResult>("UpdateAnycastIpListResult")({AnycastIpList: S.optional(H.Body("undefined", AnycastIpList)), ETag: S.optional(H.Header("ETag"))}) {}
export class CachePolicy extends S.Class<CachePolicy>("CachePolicy")({Id: S.String, LastModifiedTime: S.Date, CachePolicyConfig: CachePolicyConfig}) {}
export class UpdateCachePolicyResult extends S.Class<UpdateCachePolicyResult>("UpdateCachePolicyResult")({CachePolicy: S.optional(H.Body("undefined", CachePolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class CloudFrontOriginAccessIdentity extends S.Class<CloudFrontOriginAccessIdentity>("CloudFrontOriginAccessIdentity")({Id: S.String, S3CanonicalUserId: S.String, CloudFrontOriginAccessIdentityConfig: S.optional(CloudFrontOriginAccessIdentityConfig)}) {}
export class UpdateCloudFrontOriginAccessIdentityResult extends S.Class<UpdateCloudFrontOriginAccessIdentityResult>("UpdateCloudFrontOriginAccessIdentityResult")({CloudFrontOriginAccessIdentity: S.optional(H.Body("undefined", CloudFrontOriginAccessIdentity)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateConnectionFunctionResult extends S.Class<UpdateConnectionFunctionResult>("UpdateConnectionFunctionResult")({ConnectionFunctionSummary: S.optional(H.Body("undefined", ConnectionFunctionSummary)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateConnectionGroupResult extends S.Class<UpdateConnectionGroupResult>("UpdateConnectionGroupResult")({ConnectionGroup: S.optional(H.Body("undefined", ConnectionGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class ContinuousDeploymentPolicy extends S.Class<ContinuousDeploymentPolicy>("ContinuousDeploymentPolicy")({Id: S.String, LastModifiedTime: S.Date, ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig}) {}
export class UpdateContinuousDeploymentPolicyResult extends S.Class<UpdateContinuousDeploymentPolicyResult>("UpdateContinuousDeploymentPolicyResult")({ContinuousDeploymentPolicy: S.optional(H.Body("undefined", ContinuousDeploymentPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateDistributionResult extends S.Class<UpdateDistributionResult>("UpdateDistributionResult")({Distribution: S.optional(H.Body("undefined", Distribution)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateDistributionTenantResult extends S.Class<UpdateDistributionTenantResult>("UpdateDistributionTenantResult")({DistributionTenant: S.optional(H.Body("undefined", DistributionTenant)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateDistributionWithStagingConfigResult extends S.Class<UpdateDistributionWithStagingConfigResult>("UpdateDistributionWithStagingConfigResult")({Distribution: S.optional(H.Body("undefined", Distribution)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateDomainAssociationResult extends S.Class<UpdateDomainAssociationResult>("UpdateDomainAssociationResult")({Domain: S.optional(S.String), ResourceId: S.optional(S.String), ETag: S.optional(H.Header("ETag"))}) {}
export class FieldLevelEncryption extends S.Class<FieldLevelEncryption>("FieldLevelEncryption")({Id: S.String, LastModifiedTime: S.Date, FieldLevelEncryptionConfig: FieldLevelEncryptionConfig}) {}
export class UpdateFieldLevelEncryptionConfigResult extends S.Class<UpdateFieldLevelEncryptionConfigResult>("UpdateFieldLevelEncryptionConfigResult")({FieldLevelEncryption: S.optional(H.Body("undefined", FieldLevelEncryption)), ETag: S.optional(H.Header("ETag"))}) {}
export class FieldLevelEncryptionProfile extends S.Class<FieldLevelEncryptionProfile>("FieldLevelEncryptionProfile")({Id: S.String, LastModifiedTime: S.Date, FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig}) {}
export class UpdateFieldLevelEncryptionProfileResult extends S.Class<UpdateFieldLevelEncryptionProfileResult>("UpdateFieldLevelEncryptionProfileResult")({FieldLevelEncryptionProfile: S.optional(H.Body("undefined", FieldLevelEncryptionProfile)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateFunctionResult extends S.Class<UpdateFunctionResult>("UpdateFunctionResult")({FunctionSummary: S.optional(H.Body("undefined", FunctionSummary)), ETag: S.optional(H.Header("ETtag"))}) {}
export class KeyGroup extends S.Class<KeyGroup>("KeyGroup")({Id: S.String, LastModifiedTime: S.Date, KeyGroupConfig: KeyGroupConfig}) {}
export class UpdateKeyGroupResult extends S.Class<UpdateKeyGroupResult>("UpdateKeyGroupResult")({KeyGroup: S.optional(H.Body("undefined", KeyGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class KeyValueStore extends S.Class<KeyValueStore>("KeyValueStore")({Name: S.String, Id: S.String, Comment: S.String, ARN: S.String, Status: S.optional(S.String), LastModifiedTime: S.Date}) {}
export class UpdateKeyValueStoreResult extends S.Class<UpdateKeyValueStoreResult>("UpdateKeyValueStoreResult")({KeyValueStore: S.optional(H.Body("undefined", KeyValueStore)), ETag: S.optional(H.Header("ETag"))}) {}
export class OriginAccessControl extends S.Class<OriginAccessControl>("OriginAccessControl")({Id: S.String, OriginAccessControlConfig: S.optional(OriginAccessControlConfig)}) {}
export class UpdateOriginAccessControlResult extends S.Class<UpdateOriginAccessControlResult>("UpdateOriginAccessControlResult")({OriginAccessControl: S.optional(H.Body("undefined", OriginAccessControl)), ETag: S.optional(H.Header("ETag"))}) {}
export class OriginRequestPolicy extends S.Class<OriginRequestPolicy>("OriginRequestPolicy")({Id: S.String, LastModifiedTime: S.Date, OriginRequestPolicyConfig: OriginRequestPolicyConfig}) {}
export class UpdateOriginRequestPolicyResult extends S.Class<UpdateOriginRequestPolicyResult>("UpdateOriginRequestPolicyResult")({OriginRequestPolicy: S.optional(H.Body("undefined", OriginRequestPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class PublicKey extends S.Class<PublicKey>("PublicKey")({Id: S.String, CreatedTime: S.Date, PublicKeyConfig: PublicKeyConfig}) {}
export class UpdatePublicKeyResult extends S.Class<UpdatePublicKeyResult>("UpdatePublicKeyResult")({PublicKey: S.optional(H.Body("undefined", PublicKey)), ETag: S.optional(H.Header("ETag"))}) {}
export class RealtimeLogConfig extends S.Class<RealtimeLogConfig>("RealtimeLogConfig")({ARN: S.String, Name: S.String, SamplingRate: S.Number, EndPoints: EndPointList, Fields: FieldList}) {}
export class UpdateRealtimeLogConfigResult extends S.Class<UpdateRealtimeLogConfigResult>("UpdateRealtimeLogConfigResult")({RealtimeLogConfig: S.optional(RealtimeLogConfig)}) {}
export class ResponseHeadersPolicy extends S.Class<ResponseHeadersPolicy>("ResponseHeadersPolicy")({Id: S.String, LastModifiedTime: S.Date, ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig}) {}
export class UpdateResponseHeadersPolicyResult extends S.Class<UpdateResponseHeadersPolicyResult>("UpdateResponseHeadersPolicyResult")({ResponseHeadersPolicy: S.optional(H.Body("undefined", ResponseHeadersPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class StreamingDistribution extends S.Class<StreamingDistribution>("StreamingDistribution")({Id: S.String, ARN: S.String, Status: S.String, LastModifiedTime: S.optional(S.Date), DomainName: S.String, ActiveTrustedSigners: ActiveTrustedSigners, StreamingDistributionConfig: StreamingDistributionConfig}) {}
export class UpdateStreamingDistributionResult extends S.Class<UpdateStreamingDistributionResult>("UpdateStreamingDistributionResult")({StreamingDistribution: S.optional(H.Body("undefined", StreamingDistribution)), ETag: S.optional(H.Header("ETag"))}) {}
export class TrustStore extends S.Class<TrustStore>("TrustStore")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), NumberOfCaCertificates: S.optional(S.Number), LastModifiedTime: S.optional(S.Date), Reason: S.optional(S.String)}) {}
export class UpdateTrustStoreResult extends S.Class<UpdateTrustStoreResult>("UpdateTrustStoreResult")({TrustStore: S.optional(H.Body("undefined", TrustStore)), ETag: S.optional(H.Header("ETag"))}) {}
export class UpdateVpcOriginResult extends S.Class<UpdateVpcOriginResult>("UpdateVpcOriginResult")({VpcOrigin: S.optional(H.Body("undefined", VpcOrigin)), ETag: S.optional(H.Header("ETag"))}) {}
export const FunctionSummaryList = S.Array(FunctionSummary);
export const KeyValueStoreSummaryList = S.Array(KeyValueStore);
export const RealtimeLogConfigList = S.Array(RealtimeLogConfig);
export const FunctionExecutionLogList = S.Array(S.String);
export class DistributionTenantSummary extends S.Class<DistributionTenantSummary>("DistributionTenantSummary")({Id: S.String, DistributionId: S.String, Name: S.String, Arn: S.String, Domains: DomainResultList, ConnectionGroupId: S.optional(S.String), Customizations: S.optional(Customizations), CreatedTime: S.Date, LastModifiedTime: S.Date, ETag: S.String, Enabled: S.optional(S.Boolean), Status: S.optional(S.String)}) {}
export const DistributionTenantList = S.Array(DistributionTenantSummary);
export class FunctionList extends S.Class<FunctionList>("FunctionList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(FunctionSummaryList)}) {}
export class KeyValueStoreList extends S.Class<KeyValueStoreList>("KeyValueStoreList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(KeyValueStoreSummaryList)}) {}
export class RealtimeLogConfigs extends S.Class<RealtimeLogConfigs>("RealtimeLogConfigs")({MaxItems: S.Number, Items: S.optional(RealtimeLogConfigList), IsTruncated: S.Boolean, Marker: S.String, NextMarker: S.optional(S.String)}) {}
export class TrustStoreSummary extends S.Class<TrustStoreSummary>("TrustStoreSummary")({Id: S.String, Arn: S.String, Name: S.String, Status: S.String, NumberOfCaCertificates: S.Number, LastModifiedTime: S.Date, Reason: S.optional(S.String), ETag: S.String}) {}
export const TrustStoreList = S.Array(TrustStoreSummary);
export class ConnectionFunctionTestResult extends S.Class<ConnectionFunctionTestResult>("ConnectionFunctionTestResult")({ConnectionFunctionSummary: S.optional(ConnectionFunctionSummary), ComputeUtilization: S.optional(S.String), ConnectionFunctionExecutionLogs: S.optional(FunctionExecutionLogList), ConnectionFunctionErrorMessage: S.optional(S.String), ConnectionFunctionOutput: S.optional(S.String)}) {}
export class TestResult extends S.Class<TestResult>("TestResult")({FunctionSummary: S.optional(FunctionSummary), ComputeUtilization: S.optional(S.String), FunctionExecutionLogs: S.optional(FunctionExecutionLogList), FunctionErrorMessage: S.optional(S.String), FunctionOutput: S.optional(S.String)}) {}
export class DnsConfiguration extends S.Class<DnsConfiguration>("DnsConfiguration")({Domain: S.String, Status: S.String, Reason: S.optional(S.String)}) {}
export const DnsConfigurationList = S.Array(DnsConfiguration);
export class CreateAnycastIpListRequest extends S.Class<CreateAnycastIpListRequest>("CreateAnycastIpListRequest")({Name: S.String, IpCount: S.Number, Tags: S.optional(Tags), IpAddressType: S.optional(S.String), IpamCidrConfigs: S.optional(IpamCidrConfigList)}) {}
export class CreateCloudFrontOriginAccessIdentityResult extends S.Class<CreateCloudFrontOriginAccessIdentityResult>("CreateCloudFrontOriginAccessIdentityResult")({CloudFrontOriginAccessIdentity: S.optional(H.Body("undefined", CloudFrontOriginAccessIdentity)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateConnectionGroupResult extends S.Class<CreateConnectionGroupResult>("CreateConnectionGroupResult")({ConnectionGroup: S.optional(H.Body("undefined", ConnectionGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateDistributionTenantRequest extends S.Class<CreateDistributionTenantRequest>("CreateDistributionTenantRequest")({DistributionId: S.String, Name: S.String, Domains: DomainList, Tags: S.optional(Tags), Customizations: S.optional(Customizations), Parameters: S.optional(Parameters), ConnectionGroupId: S.optional(S.String), ManagedCertificateRequest: S.optional(ManagedCertificateRequest), Enabled: S.optional(S.Boolean)}) {}
export class CreateDistributionWithTagsResult extends S.Class<CreateDistributionWithTagsResult>("CreateDistributionWithTagsResult")({Distribution: S.optional(H.Body("undefined", Distribution)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateInvalidationRequest extends S.Class<CreateInvalidationRequest>("CreateInvalidationRequest")({DistributionId: S.String, InvalidationBatch: H.Body("InvalidationBatch", InvalidationBatch)}) {}
export class CreateInvalidationForDistributionTenantResult extends S.Class<CreateInvalidationForDistributionTenantResult>("CreateInvalidationForDistributionTenantResult")({Location: S.optional(H.Header("Location")), Invalidation: S.optional(H.Body("undefined", Invalidation))}) {}
export class CreateKeyGroupResult extends S.Class<CreateKeyGroupResult>("CreateKeyGroupResult")({KeyGroup: S.optional(H.Body("undefined", KeyGroup)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateKeyValueStoreResult extends S.Class<CreateKeyValueStoreResult>("CreateKeyValueStoreResult")({KeyValueStore: S.optional(H.Body("undefined", KeyValueStore)), ETag: S.optional(H.Header("ETag")), Location: S.optional(H.Header("Location"))}) {}
export class CreateMonitoringSubscriptionRequest extends S.Class<CreateMonitoringSubscriptionRequest>("CreateMonitoringSubscriptionRequest")({DistributionId: S.String, MonitoringSubscription: H.Body("MonitoringSubscription", MonitoringSubscription)}) {}
export class CreateOriginAccessControlResult extends S.Class<CreateOriginAccessControlResult>("CreateOriginAccessControlResult")({OriginAccessControl: S.optional(H.Body("undefined", OriginAccessControl)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreatePublicKeyResult extends S.Class<CreatePublicKeyResult>("CreatePublicKeyResult")({PublicKey: S.optional(H.Body("undefined", PublicKey)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateRealtimeLogConfigRequest extends S.Class<CreateRealtimeLogConfigRequest>("CreateRealtimeLogConfigRequest")({EndPoints: EndPointList, Fields: FieldList, Name: S.String, SamplingRate: S.Number}) {}
export class CreateStreamingDistributionRequest extends S.Class<CreateStreamingDistributionRequest>("CreateStreamingDistributionRequest")({StreamingDistributionConfig: H.Body("StreamingDistributionConfig", StreamingDistributionConfig)}) {}
export class CreateStreamingDistributionWithTagsResult extends S.Class<CreateStreamingDistributionWithTagsResult>("CreateStreamingDistributionWithTagsResult")({StreamingDistribution: S.optional(H.Body("undefined", StreamingDistribution)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateTrustStoreRequest extends S.Class<CreateTrustStoreRequest>("CreateTrustStoreRequest")({Name: S.String, CaCertificatesBundleSource: CaCertificatesBundleSource, Tags: S.optional(Tags)}) {}
export class CreateVpcOriginRequest extends S.Class<CreateVpcOriginRequest>("CreateVpcOriginRequest")({VpcOriginEndpointConfig: VpcOriginEndpointConfig, Tags: S.optional(Tags)}) {}
export class DeleteVpcOriginResult extends S.Class<DeleteVpcOriginResult>("DeleteVpcOriginResult")({VpcOrigin: S.optional(H.Body("undefined", VpcOrigin)), ETag: S.optional(H.Header("ETag"))}) {}
export class DescribeConnectionFunctionResult extends S.Class<DescribeConnectionFunctionResult>("DescribeConnectionFunctionResult")({ConnectionFunctionSummary: S.optional(H.Body("undefined", ConnectionFunctionSummary)), ETag: S.optional(H.Header("ETag"))}) {}
export class DescribeKeyValueStoreResult extends S.Class<DescribeKeyValueStoreResult>("DescribeKeyValueStoreResult")({KeyValueStore: S.optional(H.Body("undefined", KeyValueStore)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetCachePolicyResult extends S.Class<GetCachePolicyResult>("GetCachePolicyResult")({CachePolicy: S.optional(H.Body("undefined", CachePolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetCloudFrontOriginAccessIdentityResult extends S.Class<GetCloudFrontOriginAccessIdentityResult>("GetCloudFrontOriginAccessIdentityResult")({CloudFrontOriginAccessIdentity: S.optional(H.Body("undefined", CloudFrontOriginAccessIdentity)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetContinuousDeploymentPolicyResult extends S.Class<GetContinuousDeploymentPolicyResult>("GetContinuousDeploymentPolicyResult")({ContinuousDeploymentPolicy: S.optional(H.Body("undefined", ContinuousDeploymentPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetFieldLevelEncryptionResult extends S.Class<GetFieldLevelEncryptionResult>("GetFieldLevelEncryptionResult")({FieldLevelEncryption: S.optional(H.Body("undefined", FieldLevelEncryption)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetFieldLevelEncryptionProfileResult extends S.Class<GetFieldLevelEncryptionProfileResult>("GetFieldLevelEncryptionProfileResult")({FieldLevelEncryptionProfile: S.optional(H.Body("undefined", FieldLevelEncryptionProfile)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetKeyGroupResult extends S.Class<GetKeyGroupResult>("GetKeyGroupResult")({KeyGroup: S.optional(H.Body("undefined", KeyGroup)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetOriginAccessControlResult extends S.Class<GetOriginAccessControlResult>("GetOriginAccessControlResult")({OriginAccessControl: S.optional(H.Body("undefined", OriginAccessControl)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetOriginRequestPolicyResult extends S.Class<GetOriginRequestPolicyResult>("GetOriginRequestPolicyResult")({OriginRequestPolicy: S.optional(H.Body("undefined", OriginRequestPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetPublicKeyResult extends S.Class<GetPublicKeyResult>("GetPublicKeyResult")({PublicKey: S.optional(H.Body("undefined", PublicKey)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetRealtimeLogConfigResult extends S.Class<GetRealtimeLogConfigResult>("GetRealtimeLogConfigResult")({RealtimeLogConfig: S.optional(RealtimeLogConfig)}) {}
export class GetResponseHeadersPolicyResult extends S.Class<GetResponseHeadersPolicyResult>("GetResponseHeadersPolicyResult")({ResponseHeadersPolicy: S.optional(H.Body("undefined", ResponseHeadersPolicy)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetStreamingDistributionResult extends S.Class<GetStreamingDistributionResult>("GetStreamingDistributionResult")({StreamingDistribution: S.optional(H.Body("undefined", StreamingDistribution)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetTrustStoreResult extends S.Class<GetTrustStoreResult>("GetTrustStoreResult")({TrustStore: S.optional(H.Body("undefined", TrustStore)), ETag: S.optional(H.Header("ETag"))}) {}
export class ListDistributionsByCachePolicyIdResult extends S.Class<ListDistributionsByCachePolicyIdResult>("ListDistributionsByCachePolicyIdResult")({DistributionIdList: S.optional(H.Body("undefined", DistributionIdList))}) {}
export class ListDistributionTenantsResult extends S.Class<ListDistributionTenantsResult>("ListDistributionTenantsResult")({NextMarker: S.optional(S.String), DistributionTenantList: S.optional(DistributionTenantList)}) {}
export class ListDistributionTenantsByCustomizationResult extends S.Class<ListDistributionTenantsByCustomizationResult>("ListDistributionTenantsByCustomizationResult")({NextMarker: S.optional(S.String), DistributionTenantList: S.optional(DistributionTenantList)}) {}
export class ListFunctionsResult extends S.Class<ListFunctionsResult>("ListFunctionsResult")({FunctionList: S.optional(H.Body("undefined", FunctionList))}) {}
export class ListKeyValueStoresResult extends S.Class<ListKeyValueStoresResult>("ListKeyValueStoresResult")({KeyValueStoreList: S.optional(H.Body("undefined", KeyValueStoreList))}) {}
export class ListRealtimeLogConfigsResult extends S.Class<ListRealtimeLogConfigsResult>("ListRealtimeLogConfigsResult")({RealtimeLogConfigs: S.optional(H.Body("undefined", RealtimeLogConfigs))}) {}
export class ListTrustStoresResult extends S.Class<ListTrustStoresResult>("ListTrustStoresResult")({NextMarker: S.optional(S.String), TrustStoreList: S.optional(TrustStoreList)}) {}
export class TestConnectionFunctionResult extends S.Class<TestConnectionFunctionResult>("TestConnectionFunctionResult")({ConnectionFunctionTestResult: S.optional(H.Body("undefined", ConnectionFunctionTestResult))}) {}
export class TestFunctionResult extends S.Class<TestFunctionResult>("TestFunctionResult")({TestResult: S.optional(H.Body("undefined", TestResult))}) {}
export class VerifyDnsConfigurationResult extends S.Class<VerifyDnsConfigurationResult>("VerifyDnsConfigurationResult")({DnsConfigurationList: S.optional(DnsConfigurationList)}) {}
export class ValidationTokenDetail extends S.Class<ValidationTokenDetail>("ValidationTokenDetail")({Domain: S.String, RedirectTo: S.optional(S.String), RedirectFrom: S.optional(S.String)}) {}
export const ValidationTokenDetailList = S.Array(ValidationTokenDetail);
export class AnycastIpListSummary extends S.Class<AnycastIpListSummary>("AnycastIpListSummary")({Id: S.String, Name: S.String, Status: S.String, Arn: S.String, IpCount: S.Number, LastModifiedTime: S.Date, IpAddressType: S.optional(S.String), ETag: S.optional(S.String), IpamConfig: S.optional(IpamConfig)}) {}
export const AnycastIpListSummaries = S.Array(AnycastIpListSummary);
export class CachePolicySummary extends S.Class<CachePolicySummary>("CachePolicySummary")({Type: S.String, CachePolicy: CachePolicy}) {}
export const CachePolicySummaryList = S.Array(CachePolicySummary);
export class CloudFrontOriginAccessIdentitySummary extends S.Class<CloudFrontOriginAccessIdentitySummary>("CloudFrontOriginAccessIdentitySummary")({Id: S.String, S3CanonicalUserId: S.String, Comment: S.String}) {}
export const CloudFrontOriginAccessIdentitySummaryList = S.Array(CloudFrontOriginAccessIdentitySummary);
export class ConflictingAlias extends S.Class<ConflictingAlias>("ConflictingAlias")({Alias: S.optional(S.String), DistributionId: S.optional(S.String), AccountId: S.optional(S.String)}) {}
export const ConflictingAliases = S.Array(ConflictingAlias);
export class ContinuousDeploymentPolicySummary extends S.Class<ContinuousDeploymentPolicySummary>("ContinuousDeploymentPolicySummary")({ContinuousDeploymentPolicy: ContinuousDeploymentPolicy}) {}
export const ContinuousDeploymentPolicySummaryList = S.Array(ContinuousDeploymentPolicySummary);
export class DistributionIdOwner extends S.Class<DistributionIdOwner>("DistributionIdOwner")({DistributionId: S.String, OwnerAccountId: S.String}) {}
export const DistributionIdOwnerItemList = S.Array(DistributionIdOwner);
export class FieldLevelEncryptionSummary extends S.Class<FieldLevelEncryptionSummary>("FieldLevelEncryptionSummary")({Id: S.String, LastModifiedTime: S.Date, Comment: S.optional(S.String), QueryArgProfileConfig: S.optional(QueryArgProfileConfig), ContentTypeProfileConfig: S.optional(ContentTypeProfileConfig)}) {}
export const FieldLevelEncryptionSummaryList = S.Array(FieldLevelEncryptionSummary);
export class FieldLevelEncryptionProfileSummary extends S.Class<FieldLevelEncryptionProfileSummary>("FieldLevelEncryptionProfileSummary")({Id: S.String, LastModifiedTime: S.Date, Name: S.String, EncryptionEntities: EncryptionEntities, Comment: S.optional(S.String)}) {}
export const FieldLevelEncryptionProfileSummaryList = S.Array(FieldLevelEncryptionProfileSummary);
export class KeyGroupSummary extends S.Class<KeyGroupSummary>("KeyGroupSummary")({KeyGroup: KeyGroup}) {}
export const KeyGroupSummaryList = S.Array(KeyGroupSummary);
export class OriginAccessControlSummary extends S.Class<OriginAccessControlSummary>("OriginAccessControlSummary")({Id: S.String, Description: S.String, Name: S.String, SigningProtocol: S.String, SigningBehavior: S.String, OriginAccessControlOriginType: S.String}) {}
export const OriginAccessControlSummaryList = S.Array(OriginAccessControlSummary);
export class OriginRequestPolicySummary extends S.Class<OriginRequestPolicySummary>("OriginRequestPolicySummary")({Type: S.String, OriginRequestPolicy: OriginRequestPolicy}) {}
export const OriginRequestPolicySummaryList = S.Array(OriginRequestPolicySummary);
export class PublicKeySummary extends S.Class<PublicKeySummary>("PublicKeySummary")({Id: S.String, Name: S.String, CreatedTime: S.Date, EncodedKey: S.String, Comment: S.optional(S.String)}) {}
export const PublicKeySummaryList = S.Array(PublicKeySummary);
export class ResponseHeadersPolicySummary extends S.Class<ResponseHeadersPolicySummary>("ResponseHeadersPolicySummary")({Type: S.String, ResponseHeadersPolicy: ResponseHeadersPolicy}) {}
export const ResponseHeadersPolicySummaryList = S.Array(ResponseHeadersPolicySummary);
export class StreamingDistributionSummary extends S.Class<StreamingDistributionSummary>("StreamingDistributionSummary")({Id: S.String, ARN: S.String, Status: S.String, LastModifiedTime: S.Date, DomainName: S.String, S3Origin: S3Origin, Aliases: Aliases, TrustedSigners: TrustedSigners, Comment: S.String, PriceClass: S.String, Enabled: S.Boolean}) {}
export const StreamingDistributionSummaryList = S.Array(StreamingDistributionSummary);
export class VpcOriginSummary extends S.Class<VpcOriginSummary>("VpcOriginSummary")({Id: S.String, Name: S.String, Status: S.String, CreatedTime: S.Date, LastModifiedTime: S.Date, Arn: S.String, AccountId: S.optional(S.String), OriginEndpointArn: S.String}) {}
export const VpcOriginSummaryList = S.Array(VpcOriginSummary);
export class ManagedCertificateDetails extends S.Class<ManagedCertificateDetails>("ManagedCertificateDetails")({CertificateArn: S.optional(S.String), CertificateStatus: S.optional(S.String), ValidationTokenHost: S.optional(S.String), ValidationTokenDetails: S.optional(ValidationTokenDetailList)}) {}
export class AnycastIpListCollection extends S.Class<AnycastIpListCollection>("AnycastIpListCollection")({Items: S.optional(AnycastIpListSummaries), Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number}) {}
export class CachePolicyList extends S.Class<CachePolicyList>("CachePolicyList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(CachePolicySummaryList)}) {}
export class CloudFrontOriginAccessIdentityList extends S.Class<CloudFrontOriginAccessIdentityList>("CloudFrontOriginAccessIdentityList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(CloudFrontOriginAccessIdentitySummaryList)}) {}
export class ConflictingAliasesList extends S.Class<ConflictingAliasesList>("ConflictingAliasesList")({NextMarker: S.optional(S.String), MaxItems: S.optional(S.Number), Quantity: S.optional(S.Number), Items: S.optional(ConflictingAliases)}) {}
export class ConnectionGroupSummary extends S.Class<ConnectionGroupSummary>("ConnectionGroupSummary")({Id: S.String, Name: S.String, Arn: S.String, RoutingEndpoint: S.String, CreatedTime: S.Date, LastModifiedTime: S.Date, ETag: S.String, AnycastIpListId: S.optional(S.String), Enabled: S.optional(S.Boolean), Status: S.optional(S.String), IsDefault: S.optional(S.Boolean)}) {}
export const ConnectionGroupSummaryList = S.Array(ConnectionGroupSummary);
export class ContinuousDeploymentPolicyList extends S.Class<ContinuousDeploymentPolicyList>("ContinuousDeploymentPolicyList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(ContinuousDeploymentPolicySummaryList)}) {}
export class DistributionIdOwnerList extends S.Class<DistributionIdOwnerList>("DistributionIdOwnerList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(DistributionIdOwnerItemList)}) {}
export class DomainConflict extends S.Class<DomainConflict>("DomainConflict")({Domain: S.String, ResourceType: S.String, ResourceId: S.String, AccountId: S.String}) {}
export const DomainConflictsList = S.Array(DomainConflict);
export class FieldLevelEncryptionList extends S.Class<FieldLevelEncryptionList>("FieldLevelEncryptionList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(FieldLevelEncryptionSummaryList)}) {}
export class FieldLevelEncryptionProfileList extends S.Class<FieldLevelEncryptionProfileList>("FieldLevelEncryptionProfileList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(FieldLevelEncryptionProfileSummaryList)}) {}
export class KeyGroupList extends S.Class<KeyGroupList>("KeyGroupList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(KeyGroupSummaryList)}) {}
export class OriginAccessControlList extends S.Class<OriginAccessControlList>("OriginAccessControlList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(OriginAccessControlSummaryList)}) {}
export class OriginRequestPolicyList extends S.Class<OriginRequestPolicyList>("OriginRequestPolicyList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(OriginRequestPolicySummaryList)}) {}
export class PublicKeyList extends S.Class<PublicKeyList>("PublicKeyList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(PublicKeySummaryList)}) {}
export class ResponseHeadersPolicyList extends S.Class<ResponseHeadersPolicyList>("ResponseHeadersPolicyList")({NextMarker: S.optional(S.String), MaxItems: S.Number, Quantity: S.Number, Items: S.optional(ResponseHeadersPolicySummaryList)}) {}
export class StreamingDistributionList extends S.Class<StreamingDistributionList>("StreamingDistributionList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(StreamingDistributionSummaryList)}) {}
export class VpcOriginList extends S.Class<VpcOriginList>("VpcOriginList")({Marker: S.String, NextMarker: S.optional(S.String), MaxItems: S.Number, IsTruncated: S.Boolean, Quantity: S.Number, Items: S.optional(VpcOriginSummaryList)}) {}
export class CreateAnycastIpListResult extends S.Class<CreateAnycastIpListResult>("CreateAnycastIpListResult")({AnycastIpList: S.optional(H.Body("undefined", AnycastIpList)), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateCachePolicyRequest extends S.Class<CreateCachePolicyRequest>("CreateCachePolicyRequest")({CachePolicyConfig: H.Body("CachePolicyConfig", CachePolicyConfig)}) {}
export class CreateConnectionFunctionRequest extends S.Class<CreateConnectionFunctionRequest>("CreateConnectionFunctionRequest")({Name: S.String, ConnectionFunctionConfig: FunctionConfig, ConnectionFunctionCode: H.StreamBody(), Tags: S.optional(Tags)}) {}
export class CreateDistributionTenantResult extends S.Class<CreateDistributionTenantResult>("CreateDistributionTenantResult")({DistributionTenant: S.optional(H.Body("undefined", DistributionTenant)), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateFunctionResult extends S.Class<CreateFunctionResult>("CreateFunctionResult")({FunctionSummary: S.optional(H.Body("undefined", FunctionSummary)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateInvalidationResult extends S.Class<CreateInvalidationResult>("CreateInvalidationResult")({Location: S.optional(H.Header("Location")), Invalidation: S.optional(H.Body("undefined", Invalidation))}) {}
export class CreateMonitoringSubscriptionResult extends S.Class<CreateMonitoringSubscriptionResult>("CreateMonitoringSubscriptionResult")({MonitoringSubscription: S.optional(H.Body("undefined", MonitoringSubscription))}) {}
export class CreateOriginRequestPolicyRequest extends S.Class<CreateOriginRequestPolicyRequest>("CreateOriginRequestPolicyRequest")({OriginRequestPolicyConfig: H.Body("OriginRequestPolicyConfig", OriginRequestPolicyConfig)}) {}
export class CreateRealtimeLogConfigResult extends S.Class<CreateRealtimeLogConfigResult>("CreateRealtimeLogConfigResult")({RealtimeLogConfig: S.optional(RealtimeLogConfig)}) {}
export class CreateResponseHeadersPolicyRequest extends S.Class<CreateResponseHeadersPolicyRequest>("CreateResponseHeadersPolicyRequest")({ResponseHeadersPolicyConfig: H.Body("ResponseHeadersPolicyConfig", ResponseHeadersPolicyConfig)}) {}
export class CreateStreamingDistributionResult extends S.Class<CreateStreamingDistributionResult>("CreateStreamingDistributionResult")({StreamingDistribution: S.optional(H.Body("undefined", StreamingDistribution)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateTrustStoreResult extends S.Class<CreateTrustStoreResult>("CreateTrustStoreResult")({TrustStore: S.optional(H.Body("undefined", TrustStore)), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateVpcOriginResult extends S.Class<CreateVpcOriginResult>("CreateVpcOriginResult")({VpcOrigin: S.optional(H.Body("undefined", VpcOrigin)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class GetAnycastIpListResult extends S.Class<GetAnycastIpListResult>("GetAnycastIpListResult")({AnycastIpList: S.optional(H.Body("undefined", AnycastIpList)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetDistributionTenantResult extends S.Class<GetDistributionTenantResult>("GetDistributionTenantResult")({DistributionTenant: S.optional(H.Body("undefined", DistributionTenant)), ETag: S.optional(H.Header("ETag"))}) {}
export class GetManagedCertificateDetailsResult extends S.Class<GetManagedCertificateDetailsResult>("GetManagedCertificateDetailsResult")({ManagedCertificateDetails: S.optional(H.Body("undefined", ManagedCertificateDetails))}) {}
export class ListAnycastIpListsResult extends S.Class<ListAnycastIpListsResult>("ListAnycastIpListsResult")({AnycastIpLists: S.optional(H.Body("AnycastIpListCollection", AnycastIpListCollection))}) {}
export class ListCachePoliciesResult extends S.Class<ListCachePoliciesResult>("ListCachePoliciesResult")({CachePolicyList: S.optional(H.Body("undefined", CachePolicyList))}) {}
export class ListCloudFrontOriginAccessIdentitiesResult extends S.Class<ListCloudFrontOriginAccessIdentitiesResult>("ListCloudFrontOriginAccessIdentitiesResult")({CloudFrontOriginAccessIdentityList: S.optional(H.Body("undefined", CloudFrontOriginAccessIdentityList))}) {}
export class ListConflictingAliasesResult extends S.Class<ListConflictingAliasesResult>("ListConflictingAliasesResult")({ConflictingAliasesList: S.optional(H.Body("undefined", ConflictingAliasesList))}) {}
export class ListConnectionGroupsResult extends S.Class<ListConnectionGroupsResult>("ListConnectionGroupsResult")({NextMarker: S.optional(S.String), ConnectionGroups: S.optional(ConnectionGroupSummaryList)}) {}
export class ListContinuousDeploymentPoliciesResult extends S.Class<ListContinuousDeploymentPoliciesResult>("ListContinuousDeploymentPoliciesResult")({ContinuousDeploymentPolicyList: S.optional(H.Body("undefined", ContinuousDeploymentPolicyList))}) {}
export class ListDistributionsResult extends S.Class<ListDistributionsResult>("ListDistributionsResult")({DistributionList: S.optional(H.Body("undefined", DistributionList))}) {}
export class ListDistributionsByOwnedResourceResult extends S.Class<ListDistributionsByOwnedResourceResult>("ListDistributionsByOwnedResourceResult")({DistributionList: S.optional(H.Body("undefined", DistributionIdOwnerList))}) {}
export class ListDomainConflictsResult extends S.Class<ListDomainConflictsResult>("ListDomainConflictsResult")({DomainConflicts: S.optional(DomainConflictsList), NextMarker: S.optional(S.String)}) {}
export class ListFieldLevelEncryptionConfigsResult extends S.Class<ListFieldLevelEncryptionConfigsResult>("ListFieldLevelEncryptionConfigsResult")({FieldLevelEncryptionList: S.optional(H.Body("undefined", FieldLevelEncryptionList))}) {}
export class ListFieldLevelEncryptionProfilesResult extends S.Class<ListFieldLevelEncryptionProfilesResult>("ListFieldLevelEncryptionProfilesResult")({FieldLevelEncryptionProfileList: S.optional(H.Body("undefined", FieldLevelEncryptionProfileList))}) {}
export class ListInvalidationsResult extends S.Class<ListInvalidationsResult>("ListInvalidationsResult")({InvalidationList: S.optional(H.Body("undefined", InvalidationList))}) {}
export class ListKeyGroupsResult extends S.Class<ListKeyGroupsResult>("ListKeyGroupsResult")({KeyGroupList: S.optional(H.Body("undefined", KeyGroupList))}) {}
export class ListOriginAccessControlsResult extends S.Class<ListOriginAccessControlsResult>("ListOriginAccessControlsResult")({OriginAccessControlList: S.optional(H.Body("undefined", OriginAccessControlList))}) {}
export class ListOriginRequestPoliciesResult extends S.Class<ListOriginRequestPoliciesResult>("ListOriginRequestPoliciesResult")({OriginRequestPolicyList: S.optional(H.Body("undefined", OriginRequestPolicyList))}) {}
export class ListPublicKeysResult extends S.Class<ListPublicKeysResult>("ListPublicKeysResult")({PublicKeyList: S.optional(H.Body("undefined", PublicKeyList))}) {}
export class ListResponseHeadersPoliciesResult extends S.Class<ListResponseHeadersPoliciesResult>("ListResponseHeadersPoliciesResult")({ResponseHeadersPolicyList: S.optional(H.Body("undefined", ResponseHeadersPolicyList))}) {}
export class ListStreamingDistributionsResult extends S.Class<ListStreamingDistributionsResult>("ListStreamingDistributionsResult")({StreamingDistributionList: S.optional(H.Body("undefined", StreamingDistributionList))}) {}
export class ListVpcOriginsResult extends S.Class<ListVpcOriginsResult>("ListVpcOriginsResult")({VpcOriginList: S.optional(H.Body("undefined", VpcOriginList))}) {}
export class CreateCachePolicyResult extends S.Class<CreateCachePolicyResult>("CreateCachePolicyResult")({CachePolicy: S.optional(H.Body("undefined", CachePolicy)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateConnectionFunctionResult extends S.Class<CreateConnectionFunctionResult>("CreateConnectionFunctionResult")({ConnectionFunctionSummary: S.optional(H.Body("undefined", ConnectionFunctionSummary)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateContinuousDeploymentPolicyRequest extends S.Class<CreateContinuousDeploymentPolicyRequest>("CreateContinuousDeploymentPolicyRequest")({ContinuousDeploymentPolicyConfig: H.Body("ContinuousDeploymentPolicyConfig", ContinuousDeploymentPolicyConfig)}) {}
export class CreateFieldLevelEncryptionConfigRequest extends S.Class<CreateFieldLevelEncryptionConfigRequest>("CreateFieldLevelEncryptionConfigRequest")({FieldLevelEncryptionConfig: H.Body("FieldLevelEncryptionConfig", FieldLevelEncryptionConfig)}) {}
export class CreateFieldLevelEncryptionProfileRequest extends S.Class<CreateFieldLevelEncryptionProfileRequest>("CreateFieldLevelEncryptionProfileRequest")({FieldLevelEncryptionProfileConfig: H.Body("FieldLevelEncryptionProfileConfig", FieldLevelEncryptionProfileConfig)}) {}
export class CreateOriginRequestPolicyResult extends S.Class<CreateOriginRequestPolicyResult>("CreateOriginRequestPolicyResult")({OriginRequestPolicy: S.optional(H.Body("undefined", OriginRequestPolicy)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateResponseHeadersPolicyResult extends S.Class<CreateResponseHeadersPolicyResult>("CreateResponseHeadersPolicyResult")({ResponseHeadersPolicy: S.optional(H.Body("undefined", ResponseHeadersPolicy)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CopyDistributionResult extends S.Class<CopyDistributionResult>("CopyDistributionResult")({Distribution: S.optional(H.Body("undefined", Distribution)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateContinuousDeploymentPolicyResult extends S.Class<CreateContinuousDeploymentPolicyResult>("CreateContinuousDeploymentPolicyResult")({ContinuousDeploymentPolicy: S.optional(H.Body("undefined", ContinuousDeploymentPolicy)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateDistributionRequest extends S.Class<CreateDistributionRequest>("CreateDistributionRequest")({DistributionConfig: H.Body("DistributionConfig", DistributionConfig)}) {}
export class CreateFieldLevelEncryptionConfigResult extends S.Class<CreateFieldLevelEncryptionConfigResult>("CreateFieldLevelEncryptionConfigResult")({FieldLevelEncryption: S.optional(H.Body("undefined", FieldLevelEncryption)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateFieldLevelEncryptionProfileResult extends S.Class<CreateFieldLevelEncryptionProfileResult>("CreateFieldLevelEncryptionProfileResult")({FieldLevelEncryptionProfile: S.optional(H.Body("undefined", FieldLevelEncryptionProfile)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}
export class CreateDistributionResult extends S.Class<CreateDistributionResult>("CreateDistributionResult")({Distribution: S.optional(H.Body("undefined", Distribution)), Location: S.optional(H.Header("Location")), ETag: S.optional(H.Header("ETag"))}) {}

//# Errors
export class AccessDenied extends S.TaggedError<AccessDenied>()("AccessDenied", {}) {};
export class CannotDeleteEntityWhileInUse extends S.TaggedError<CannotDeleteEntityWhileInUse>()("CannotDeleteEntityWhileInUse", {}) {};
export class EntityNotFound extends S.TaggedError<EntityNotFound>()("EntityNotFound", {}) {};
export class InvalidIfMatchVersion extends S.TaggedError<InvalidIfMatchVersion>()("InvalidIfMatchVersion", {}) {};
export class PreconditionFailed extends S.TaggedError<PreconditionFailed>()("PreconditionFailed", {}) {};
export class IllegalDelete extends S.TaggedError<IllegalDelete>()("IllegalDelete", {}) {};
export class InvalidArgument extends S.TaggedError<InvalidArgument>()("InvalidArgument", {}) {};
export class UnsupportedOperation extends S.TaggedError<UnsupportedOperation>()("UnsupportedOperation", {}) {};
export class CachePolicyInUse extends S.TaggedError<CachePolicyInUse>()("CachePolicyInUse", {Message: S.optional(S.String)}) {};
export class CloudFrontOriginAccessIdentityInUse extends S.TaggedError<CloudFrontOriginAccessIdentityInUse>()("CloudFrontOriginAccessIdentityInUse", {Message: S.optional(S.String)}) {};
export class ContinuousDeploymentPolicyInUse extends S.TaggedError<ContinuousDeploymentPolicyInUse>()("ContinuousDeploymentPolicyInUse", {Message: S.optional(S.String)}) {};
export class DistributionNotDisabled extends S.TaggedError<DistributionNotDisabled>()("DistributionNotDisabled", {Message: S.optional(S.String)}) {};
export class NoSuchDistribution extends S.TaggedError<NoSuchDistribution>()("NoSuchDistribution", {}) {};
export class ResourceNotDisabled extends S.TaggedError<ResourceNotDisabled>()("ResourceNotDisabled", {}) {};
export class FieldLevelEncryptionConfigInUse extends S.TaggedError<FieldLevelEncryptionConfigInUse>()("FieldLevelEncryptionConfigInUse", {Message: S.optional(S.String)}) {};
export class FieldLevelEncryptionProfileInUse extends S.TaggedError<FieldLevelEncryptionProfileInUse>()("FieldLevelEncryptionProfileInUse", {Message: S.optional(S.String)}) {};
export class FunctionInUse extends S.TaggedError<FunctionInUse>()("FunctionInUse", {Message: S.optional(S.String)}) {};
export class NoSuchResource extends S.TaggedError<NoSuchResource>()("NoSuchResource", {Message: S.optional(S.String)}) {};
export class ResourceInUse extends S.TaggedError<ResourceInUse>()("ResourceInUse", {}) {};
export class NoSuchOriginAccessControl extends S.TaggedError<NoSuchOriginAccessControl>()("NoSuchOriginAccessControl", {Message: S.optional(S.String)}) {};
export class NoSuchPublicKey extends S.TaggedError<NoSuchPublicKey>()("NoSuchPublicKey", {Message: S.optional(S.String)}) {};
export class NoSuchResponseHeadersPolicy extends S.TaggedError<NoSuchResponseHeadersPolicy>()("NoSuchResponseHeadersPolicy", {Message: S.optional(S.String)}) {};
export class NoSuchStreamingDistribution extends S.TaggedError<NoSuchStreamingDistribution>()("NoSuchStreamingDistribution", {Message: S.optional(S.String)}) {};
export class NoSuchFunctionExists extends S.TaggedError<NoSuchFunctionExists>()("NoSuchFunctionExists", {}) {};
export class NoSuchCachePolicy extends S.TaggedError<NoSuchCachePolicy>()("NoSuchCachePolicy", {}) {};
export class NoSuchCloudFrontOriginAccessIdentity extends S.TaggedError<NoSuchCloudFrontOriginAccessIdentity>()("NoSuchCloudFrontOriginAccessIdentity", {}) {};
export class NoSuchContinuousDeploymentPolicy extends S.TaggedError<NoSuchContinuousDeploymentPolicy>()("NoSuchContinuousDeploymentPolicy", {}) {};
export class NoSuchFieldLevelEncryptionConfig extends S.TaggedError<NoSuchFieldLevelEncryptionConfig>()("NoSuchFieldLevelEncryptionConfig", {}) {};
export class NoSuchFieldLevelEncryptionProfile extends S.TaggedError<NoSuchFieldLevelEncryptionProfile>()("NoSuchFieldLevelEncryptionProfile", {}) {};
export class NoSuchInvalidation extends S.TaggedError<NoSuchInvalidation>()("NoSuchInvalidation", {}) {};
export class NoSuchMonitoringSubscription extends S.TaggedError<NoSuchMonitoringSubscription>()("NoSuchMonitoringSubscription", {}) {};
export class NoSuchOriginRequestPolicy extends S.TaggedError<NoSuchOriginRequestPolicy>()("NoSuchOriginRequestPolicy", {}) {};
export class InvalidTagging extends S.TaggedError<InvalidTagging>()("InvalidTagging", {}) {};
export class IllegalUpdate extends S.TaggedError<IllegalUpdate>()("IllegalUpdate", {}) {};
export class InconsistentQuantities extends S.TaggedError<InconsistentQuantities>()("InconsistentQuantities", {}) {};
export class CNAMEAlreadyExists extends S.TaggedError<CNAMEAlreadyExists>()("CNAMEAlreadyExists", {}) {};
export class EntityAlreadyExists extends S.TaggedError<EntityAlreadyExists>()("EntityAlreadyExists", {}) {};
export class NoSuchRealtimeLogConfig extends S.TaggedError<NoSuchRealtimeLogConfig>()("NoSuchRealtimeLogConfig", {}) {};
export class EntityLimitExceeded extends S.TaggedError<EntityLimitExceeded>()("EntityLimitExceeded", {}) {};
export class KeyGroupAlreadyExists extends S.TaggedError<KeyGroupAlreadyExists>()("KeyGroupAlreadyExists", {}) {};
export class EntitySizeLimitExceeded extends S.TaggedError<EntitySizeLimitExceeded>()("EntitySizeLimitExceeded", {}) {};
export class OriginAccessControlAlreadyExists extends S.TaggedError<OriginAccessControlAlreadyExists>()("OriginAccessControlAlreadyExists", {}) {};
export class OriginAccessControlInUse extends S.TaggedError<OriginAccessControlInUse>()("OriginAccessControlInUse", {Message: S.optional(S.String)}) {};
export class PublicKeyInUse extends S.TaggedError<PublicKeyInUse>()("PublicKeyInUse", {Message: S.optional(S.String)}) {};
export class ResponseHeadersPolicyInUse extends S.TaggedError<ResponseHeadersPolicyInUse>()("ResponseHeadersPolicyInUse", {Message: S.optional(S.String)}) {};
export class StreamingDistributionNotDisabled extends S.TaggedError<StreamingDistributionNotDisabled>()("StreamingDistributionNotDisabled", {Message: S.optional(S.String)}) {};
export class InvalidWebACLId extends S.TaggedError<InvalidWebACLId>()("InvalidWebACLId", {Message: S.optional(S.String)}) {};
export class TestFunctionFailed extends S.TaggedError<TestFunctionFailed>()("TestFunctionFailed", {}) {};
export class CachePolicyAlreadyExists extends S.TaggedError<CachePolicyAlreadyExists>()("CachePolicyAlreadyExists", {Message: S.optional(S.String)}) {};
export class StagingDistributionInUse extends S.TaggedError<StagingDistributionInUse>()("StagingDistributionInUse", {Message: S.optional(S.String)}) {};
export class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior extends S.TaggedError<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior>()("IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior", {}) {};
export class QueryArgProfileEmpty extends S.TaggedError<QueryArgProfileEmpty>()("QueryArgProfileEmpty", {Message: S.optional(S.String)}) {};
export class FieldLevelEncryptionProfileAlreadyExists extends S.TaggedError<FieldLevelEncryptionProfileAlreadyExists>()("FieldLevelEncryptionProfileAlreadyExists", {Message: S.optional(S.String)}) {};
export class FunctionSizeLimitExceeded extends S.TaggedError<FunctionSizeLimitExceeded>()("FunctionSizeLimitExceeded", {Message: S.optional(S.String)}) {};
export class OriginRequestPolicyAlreadyExists extends S.TaggedError<OriginRequestPolicyAlreadyExists>()("OriginRequestPolicyAlreadyExists", {Message: S.optional(S.String)}) {};
export class CannotChangeImmutablePublicKeyFields extends S.TaggedError<CannotChangeImmutablePublicKeyFields>()("CannotChangeImmutablePublicKeyFields", {Message: S.optional(S.String)}) {};
export class ResponseHeadersPolicyAlreadyExists extends S.TaggedError<ResponseHeadersPolicyAlreadyExists>()("ResponseHeadersPolicyAlreadyExists", {Message: S.optional(S.String)}) {};
export class InvalidOriginAccessControl extends S.TaggedError<InvalidOriginAccessControl>()("InvalidOriginAccessControl", {Message: S.optional(S.String)}) {};
export class CannotUpdateEntityWhileInUse extends S.TaggedError<CannotUpdateEntityWhileInUse>()("CannotUpdateEntityWhileInUse", {Message: S.optional(S.String)}) {};
export class TooManyDistributionCNAMEs extends S.TaggedError<TooManyDistributionCNAMEs>()("TooManyDistributionCNAMEs", {Message: S.optional(S.String)}) {};
export class CloudFrontOriginAccessIdentityAlreadyExists extends S.TaggedError<CloudFrontOriginAccessIdentityAlreadyExists>()("CloudFrontOriginAccessIdentityAlreadyExists", {Message: S.optional(S.String)}) {};
export class MissingBody extends S.TaggedError<MissingBody>()("MissingBody", {}) {};
export class InvalidAssociation extends S.TaggedError<InvalidAssociation>()("InvalidAssociation", {}) {};
export class DistributionAlreadyExists extends S.TaggedError<DistributionAlreadyExists>()("DistributionAlreadyExists", {Message: S.optional(S.String)}) {};
export class IllegalOriginAccessConfiguration extends S.TaggedError<IllegalOriginAccessConfiguration>()("IllegalOriginAccessConfiguration", {}) {};
export class InvalidDefaultRootObject extends S.TaggedError<InvalidDefaultRootObject>()("InvalidDefaultRootObject", {}) {};
export class BatchTooLarge extends S.TaggedError<BatchTooLarge>()("BatchTooLarge", {}) {};
export class TooManyInvalidationsInProgress extends S.TaggedError<TooManyInvalidationsInProgress>()("TooManyInvalidationsInProgress", {}) {};
export class TooManyKeyGroups extends S.TaggedError<TooManyKeyGroups>()("TooManyKeyGroups", {Message: S.optional(S.String)}) {};
export class TooManyPublicKeysInKeyGroup extends S.TaggedError<TooManyPublicKeysInKeyGroup>()("TooManyPublicKeysInKeyGroup", {}) {};
export class TooManyOriginAccessControls extends S.TaggedError<TooManyOriginAccessControls>()("TooManyOriginAccessControls", {Message: S.optional(S.String)}) {};
export class PublicKeyAlreadyExists extends S.TaggedError<PublicKeyAlreadyExists>()("PublicKeyAlreadyExists", {Message: S.optional(S.String)}) {};
export class InvalidOrigin extends S.TaggedError<InvalidOrigin>()("InvalidOrigin", {}) {};
export class InvalidOriginAccessIdentity extends S.TaggedError<InvalidOriginAccessIdentity>()("InvalidOriginAccessIdentity", {}) {};
export class StreamingDistributionAlreadyExists extends S.TaggedError<StreamingDistributionAlreadyExists>()("StreamingDistributionAlreadyExists", {}) {};
export class OriginRequestPolicyInUse extends S.TaggedError<OriginRequestPolicyInUse>()("OriginRequestPolicyInUse", {Message: S.optional(S.String)}) {};
export class RealtimeLogConfigInUse extends S.TaggedError<RealtimeLogConfigInUse>()("RealtimeLogConfigInUse", {Message: S.optional(S.String)}) {};
export class TooManyCookiesInCachePolicy extends S.TaggedError<TooManyCookiesInCachePolicy>()("TooManyCookiesInCachePolicy", {Message: S.optional(S.String)}) {};
export class InvalidDomainNameForOriginAccessControl extends S.TaggedError<InvalidDomainNameForOriginAccessControl>()("InvalidDomainNameForOriginAccessControl", {}) {};
export class InvalidErrorCode extends S.TaggedError<InvalidErrorCode>()("InvalidErrorCode", {}) {};
export class TooManyFieldLevelEncryptionContentTypeProfiles extends S.TaggedError<TooManyFieldLevelEncryptionContentTypeProfiles>()("TooManyFieldLevelEncryptionContentTypeProfiles", {Message: S.optional(S.String)}) {};
export class FieldLevelEncryptionProfileSizeExceeded extends S.TaggedError<FieldLevelEncryptionProfileSizeExceeded>()("FieldLevelEncryptionProfileSizeExceeded", {Message: S.optional(S.String)}) {};
export class TooManyCookiesInOriginRequestPolicy extends S.TaggedError<TooManyCookiesInOriginRequestPolicy>()("TooManyCookiesInOriginRequestPolicy", {Message: S.optional(S.String)}) {};
export class TooLongCSPInResponseHeadersPolicy extends S.TaggedError<TooLongCSPInResponseHeadersPolicy>()("TooLongCSPInResponseHeadersPolicy", {Message: S.optional(S.String)}) {};
export class TooManyStreamingDistributionCNAMEs extends S.TaggedError<TooManyStreamingDistributionCNAMEs>()("TooManyStreamingDistributionCNAMEs", {}) {};
export class TooManyCloudFrontOriginAccessIdentities extends S.TaggedError<TooManyCloudFrontOriginAccessIdentities>()("TooManyCloudFrontOriginAccessIdentities", {Message: S.optional(S.String)}) {};
export class InvalidForwardCookies extends S.TaggedError<InvalidForwardCookies>()("InvalidForwardCookies", {}) {};
export class FunctionAlreadyExists extends S.TaggedError<FunctionAlreadyExists>()("FunctionAlreadyExists", {Message: S.optional(S.String)}) {};
export class MonitoringSubscriptionAlreadyExists extends S.TaggedError<MonitoringSubscriptionAlreadyExists>()("MonitoringSubscriptionAlreadyExists", {Message: S.optional(S.String)}) {};
export class TooManyHeadersInOriginRequestPolicy extends S.TaggedError<TooManyHeadersInOriginRequestPolicy>()("TooManyHeadersInOriginRequestPolicy", {}) {};
export class TooManyPublicKeys extends S.TaggedError<TooManyPublicKeys>()("TooManyPublicKeys", {Message: S.optional(S.String)}) {};
export class RealtimeLogConfigAlreadyExists extends S.TaggedError<RealtimeLogConfigAlreadyExists>()("RealtimeLogConfigAlreadyExists", {Message: S.optional(S.String)}) {};
export class TooManyCustomHeadersInResponseHeadersPolicy extends S.TaggedError<TooManyCustomHeadersInResponseHeadersPolicy>()("TooManyCustomHeadersInResponseHeadersPolicy", {}) {};
export class TooManyStreamingDistributions extends S.TaggedError<TooManyStreamingDistributions>()("TooManyStreamingDistributions", {}) {};
export class TooManyTrustedSigners extends S.TaggedError<TooManyTrustedSigners>()("TooManyTrustedSigners", {}) {};
export class TooManyHeadersInCachePolicy extends S.TaggedError<TooManyHeadersInCachePolicy>()("TooManyHeadersInCachePolicy", {Message: S.optional(S.String)}) {};
export class InvalidFunctionAssociation extends S.TaggedError<InvalidFunctionAssociation>()("InvalidFunctionAssociation", {}) {};
export class InvalidGeoRestrictionParameter extends S.TaggedError<InvalidGeoRestrictionParameter>()("InvalidGeoRestrictionParameter", {}) {};
export class TooManyFieldLevelEncryptionQueryArgProfiles extends S.TaggedError<TooManyFieldLevelEncryptionQueryArgProfiles>()("TooManyFieldLevelEncryptionQueryArgProfiles", {Message: S.optional(S.String)}) {};
export class TooManyFieldLevelEncryptionEncryptionEntities extends S.TaggedError<TooManyFieldLevelEncryptionEncryptionEntities>()("TooManyFieldLevelEncryptionEncryptionEntities", {Message: S.optional(S.String)}) {};
export class TooManyRemoveHeadersInResponseHeadersPolicy extends S.TaggedError<TooManyRemoveHeadersInResponseHeadersPolicy>()("TooManyRemoveHeadersInResponseHeadersPolicy", {}) {};
export class TrustedSignerDoesNotExist extends S.TaggedError<TrustedSignerDoesNotExist>()("TrustedSignerDoesNotExist", {}) {};
export class InvalidHeadersForS3Origin extends S.TaggedError<InvalidHeadersForS3Origin>()("InvalidHeadersForS3Origin", {}) {};
export class TooManyCachePolicies extends S.TaggedError<TooManyCachePolicies>()("TooManyCachePolicies", {Message: S.optional(S.String)}) {};
export class TooManyQueryStringsInCachePolicy extends S.TaggedError<TooManyQueryStringsInCachePolicy>()("TooManyQueryStringsInCachePolicy", {}) {};
export class InvalidLambdaFunctionAssociation extends S.TaggedError<InvalidLambdaFunctionAssociation>()("InvalidLambdaFunctionAssociation", {}) {};
export class TooManyFieldLevelEncryptionFieldPatterns extends S.TaggedError<TooManyFieldLevelEncryptionFieldPatterns>()("TooManyFieldLevelEncryptionFieldPatterns", {}) {};
export class TooManyFunctions extends S.TaggedError<TooManyFunctions>()("TooManyFunctions", {Message: S.optional(S.String)}) {};
export class TooManyOriginRequestPolicies extends S.TaggedError<TooManyOriginRequestPolicies>()("TooManyOriginRequestPolicies", {Message: S.optional(S.String)}) {};
export class TooManyQueryStringsInOriginRequestPolicy extends S.TaggedError<TooManyQueryStringsInOriginRequestPolicy>()("TooManyQueryStringsInOriginRequestPolicy", {}) {};
export class TooManyRealtimeLogConfigs extends S.TaggedError<TooManyRealtimeLogConfigs>()("TooManyRealtimeLogConfigs", {Message: S.optional(S.String)}) {};
export class InvalidLocationCode extends S.TaggedError<InvalidLocationCode>()("InvalidLocationCode", {}) {};
export class InvalidMinimumProtocolVersion extends S.TaggedError<InvalidMinimumProtocolVersion>()("InvalidMinimumProtocolVersion", {}) {};
export class InvalidOriginKeepaliveTimeout extends S.TaggedError<InvalidOriginKeepaliveTimeout>()("InvalidOriginKeepaliveTimeout", {}) {};
export class ContinuousDeploymentPolicyAlreadyExists extends S.TaggedError<ContinuousDeploymentPolicyAlreadyExists>()("ContinuousDeploymentPolicyAlreadyExists", {Message: S.optional(S.String)}) {};
export class InvalidOriginReadTimeout extends S.TaggedError<InvalidOriginReadTimeout>()("InvalidOriginReadTimeout", {}) {};
export class InvalidProtocolSettings extends S.TaggedError<InvalidProtocolSettings>()("InvalidProtocolSettings", {}) {};
export class FieldLevelEncryptionConfigAlreadyExists extends S.TaggedError<FieldLevelEncryptionConfigAlreadyExists>()("FieldLevelEncryptionConfigAlreadyExists", {Message: S.optional(S.String)}) {};
export class TooManyFieldLevelEncryptionProfiles extends S.TaggedError<TooManyFieldLevelEncryptionProfiles>()("TooManyFieldLevelEncryptionProfiles", {Message: S.optional(S.String)}) {};
export class TooManyResponseHeadersPolicies extends S.TaggedError<TooManyResponseHeadersPolicies>()("TooManyResponseHeadersPolicies", {Message: S.optional(S.String)}) {};
export class InvalidQueryStringParameters extends S.TaggedError<InvalidQueryStringParameters>()("InvalidQueryStringParameters", {}) {};
export class InvalidRelativePath extends S.TaggedError<InvalidRelativePath>()("InvalidRelativePath", {}) {};
export class InvalidRequiredProtocol extends S.TaggedError<InvalidRequiredProtocol>()("InvalidRequiredProtocol", {}) {};
export class TooManyContinuousDeploymentPolicies extends S.TaggedError<TooManyContinuousDeploymentPolicies>()("TooManyContinuousDeploymentPolicies", {Message: S.optional(S.String)}) {};
export class InvalidResponseCode extends S.TaggedError<InvalidResponseCode>()("InvalidResponseCode", {}) {};
export class InvalidTTLOrder extends S.TaggedError<InvalidTTLOrder>()("InvalidTTLOrder", {}) {};
export class TooManyFieldLevelEncryptionConfigs extends S.TaggedError<TooManyFieldLevelEncryptionConfigs>()("TooManyFieldLevelEncryptionConfigs", {Message: S.optional(S.String)}) {};
export class InvalidViewerCertificate extends S.TaggedError<InvalidViewerCertificate>()("InvalidViewerCertificate", {}) {};
export class NoSuchOrigin extends S.TaggedError<NoSuchOrigin>()("NoSuchOrigin", {}) {};
export class RealtimeLogConfigOwnerMismatch extends S.TaggedError<RealtimeLogConfigOwnerMismatch>()("RealtimeLogConfigOwnerMismatch", {}) {};
export class TooManyCacheBehaviors extends S.TaggedError<TooManyCacheBehaviors>()("TooManyCacheBehaviors", {}) {};
export class TooManyCertificates extends S.TaggedError<TooManyCertificates>()("TooManyCertificates", {}) {};
export class TooManyCookieNamesInWhiteList extends S.TaggedError<TooManyCookieNamesInWhiteList>()("TooManyCookieNamesInWhiteList", {}) {};
export class TooManyDistributionsAssociatedToCachePolicy extends S.TaggedError<TooManyDistributionsAssociatedToCachePolicy>()("TooManyDistributionsAssociatedToCachePolicy", {}) {};
export class TooManyDistributions extends S.TaggedError<TooManyDistributions>()("TooManyDistributions", {}) {};
export class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig extends S.TaggedError<TooManyDistributionsAssociatedToFieldLevelEncryptionConfig>()("TooManyDistributionsAssociatedToFieldLevelEncryptionConfig", {}) {};
export class TooManyDistributionsAssociatedToKeyGroup extends S.TaggedError<TooManyDistributionsAssociatedToKeyGroup>()("TooManyDistributionsAssociatedToKeyGroup", {}) {};
export class TooManyDistributionsAssociatedToOriginAccessControl extends S.TaggedError<TooManyDistributionsAssociatedToOriginAccessControl>()("TooManyDistributionsAssociatedToOriginAccessControl", {}) {};
export class TooManyDistributionsAssociatedToOriginRequestPolicy extends S.TaggedError<TooManyDistributionsAssociatedToOriginRequestPolicy>()("TooManyDistributionsAssociatedToOriginRequestPolicy", {}) {};
export class TooManyDistributionsAssociatedToResponseHeadersPolicy extends S.TaggedError<TooManyDistributionsAssociatedToResponseHeadersPolicy>()("TooManyDistributionsAssociatedToResponseHeadersPolicy", {}) {};
export class TooManyDistributionsWithFunctionAssociations extends S.TaggedError<TooManyDistributionsWithFunctionAssociations>()("TooManyDistributionsWithFunctionAssociations", {}) {};
export class TooManyDistributionsWithLambdaAssociations extends S.TaggedError<TooManyDistributionsWithLambdaAssociations>()("TooManyDistributionsWithLambdaAssociations", {}) {};
export class TooManyDistributionsWithSingleFunctionARN extends S.TaggedError<TooManyDistributionsWithSingleFunctionARN>()("TooManyDistributionsWithSingleFunctionARN", {}) {};
export class TooManyFunctionAssociations extends S.TaggedError<TooManyFunctionAssociations>()("TooManyFunctionAssociations", {}) {};
export class TooManyHeadersInForwardedValues extends S.TaggedError<TooManyHeadersInForwardedValues>()("TooManyHeadersInForwardedValues", {}) {};
export class TooManyKeyGroupsAssociatedToDistribution extends S.TaggedError<TooManyKeyGroupsAssociatedToDistribution>()("TooManyKeyGroupsAssociatedToDistribution", {}) {};
export class TooManyLambdaFunctionAssociations extends S.TaggedError<TooManyLambdaFunctionAssociations>()("TooManyLambdaFunctionAssociations", {}) {};
export class TooManyOriginCustomHeaders extends S.TaggedError<TooManyOriginCustomHeaders>()("TooManyOriginCustomHeaders", {}) {};
export class TooManyOriginGroupsPerDistribution extends S.TaggedError<TooManyOriginGroupsPerDistribution>()("TooManyOriginGroupsPerDistribution", {}) {};
export class TooManyOrigins extends S.TaggedError<TooManyOrigins>()("TooManyOrigins", {}) {};
export class TooManyQueryStringParameters extends S.TaggedError<TooManyQueryStringParameters>()("TooManyQueryStringParameters", {}) {};
export class TrustedKeyGroupDoesNotExist extends S.TaggedError<TrustedKeyGroupDoesNotExist>()("TrustedKeyGroupDoesNotExist", {}) {};

//# Operations
/**
 * Deletes the resource policy attached to the CloudFront resource.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/delete-resource-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, S.Struct({}), [AccessDenied, EntityNotFound, IllegalDelete, InvalidArgument, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a trust store.
 */export const deleteTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/trust-store/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteTrustStore" }, DeleteTrustStoreRequest, S.Struct({}), [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Associates the WAF web ACL with a distribution tenant.
 */export const associateDistributionTenantWebACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}/associate-web-acl", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.AssociateDistributionTenantWebACL" }, AssociateDistributionTenantWebACLRequest, AssociateDistributionTenantWebACLResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Associates the WAF web ACL with a distribution.
 */export const associateDistributionWebACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}/associate-web-acl", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.AssociateDistributionWebACL" }, AssociateDistributionWebACLRequest, AssociateDistributionWebACLResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes an Anycast static IP list.
 */export const deleteAnycastIpList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/anycast-ip-list/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteAnycastIpList" }, DeleteAnycastIpListRequest, S.Struct({}), [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, IllegalDelete, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a connection function.
 */export const deleteConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteConnectionFunction" }, DeleteConnectionFunctionRequest, S.Struct({}), [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a distribution tenant. If you use this API operation to delete a distribution tenant that is currently enabled, the request will fail.
 * 
 * To delete a distribution tenant, you must first disable the distribution tenant by using the `UpdateDistributionTenant` API operation.
 */export const deleteDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteDistributionTenant" }, DeleteDistributionTenantRequest, S.Struct({}), [AccessDenied, EntityNotFound, InvalidIfMatchVersion, PreconditionFailed, ResourceNotDisabled]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a key group.
 * 
 * You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.
 * 
 * To delete a key group, you must provide the key group's identifier and version. To get these values, use `ListKeyGroups` followed by `GetKeyGroup` or `GetKeyGroupConfig`.
 */export const deleteKeyGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteKeyGroup" }, DeleteKeyGroupRequest, S.Struct({}), [InvalidIfMatchVersion, NoSuchResource, PreconditionFailed, ResourceInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Specifies the key value store to delete.
 */export const deleteKeyValueStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-value-store/{Name}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteKeyValueStore" }, DeleteKeyValueStoreRequest, S.Struct({}), [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use `GetFunction`.
 * 
 * To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use `ListFunctions`.
 */export const describeFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}/describe", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DescribeFunction" }, DescribeFunctionRequest, DescribeFunctionResult, [NoSuchFunctionExists, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Disassociates a distribution tenant from the WAF web ACL.
 */export const disassociateDistributionTenantWebACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}/disassociate-web-acl", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DisassociateDistributionTenantWebACL" }, DisassociateDistributionTenantWebACLRequest, DisassociateDistributionTenantWebACLResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Disassociates a distribution from the WAF web ACL.
 */export const disassociateDistributionWebACL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}/disassociate-web-acl", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DisassociateDistributionWebACL" }, DisassociateDistributionWebACLRequest, DisassociateDistributionWebACLResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a cache policy configuration.
 * 
 * To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the cache policy is not attached to a cache behavior, you can get the identifier using `ListCachePolicies`.
 */export const getCachePolicyConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetCachePolicyConfig" }, GetCachePolicyConfigRequest, GetCachePolicyConfigResult, [AccessDenied, NoSuchCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the configuration information about an origin access identity.
 */export const getCloudFrontOriginAccessIdentityConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetCloudFrontOriginAccessIdentityConfig" }, GetCloudFrontOriginAccessIdentityConfigRequest, GetCloudFrontOriginAccessIdentityConfigResult, [AccessDenied, NoSuchCloudFrontOriginAccessIdentity]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a connection function.
 */export const getConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Identifier}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetConnectionFunction" }, GetConnectionFunctionRequest, GetConnectionFunctionResult, [AccessDenied, EntityNotFound, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a connection group.
 */export const getConnectionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-group/{Identifier}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetConnectionGroup" }, GetConnectionGroupRequest, GetConnectionGroupResult, [AccessDenied, EntityNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a connection group by using the endpoint that you specify.
 */export const getConnectionGroupByRoutingEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-group", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetConnectionGroupByRoutingEndpoint" }, GetConnectionGroupByRoutingEndpointRequest, GetConnectionGroupByRoutingEndpointResult, [AccessDenied, EntityNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets configuration information about a continuous deployment policy.
 */export const getContinuousDeploymentPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetContinuousDeploymentPolicyConfig" }, GetContinuousDeploymentPolicyConfigRequest, GetContinuousDeploymentPolicyConfigResult, [AccessDenied, NoSuchContinuousDeploymentPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the information about a distribution.
 */export const getDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetDistribution" }, GetDistributionRequest, GetDistributionResult, [AccessDenied, NoSuchDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the configuration information about a distribution.
 */export const getDistributionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetDistributionConfig" }, GetDistributionConfigRequest, GetDistributionConfigResult, [AccessDenied, NoSuchDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a distribution tenant by the associated domain.
 */export const getDistributionTenantByDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetDistributionTenantByDomain" }, GetDistributionTenantByDomainRequest, GetDistributionTenantByDomainResult, [AccessDenied, EntityNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the field-level encryption configuration information.
 */export const getFieldLevelEncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetFieldLevelEncryptionConfig" }, GetFieldLevelEncryptionConfigRequest, GetFieldLevelEncryptionConfigResult, [AccessDenied, NoSuchFieldLevelEncryptionConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the field-level encryption profile configuration information.
 */export const getFieldLevelEncryptionProfileConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetFieldLevelEncryptionProfileConfig" }, GetFieldLevelEncryptionProfileConfigRequest, GetFieldLevelEncryptionProfileConfigResult, [AccessDenied, NoSuchFieldLevelEncryptionProfile]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the code of a CloudFront function. To get configuration information and metadata about a function, use `DescribeFunction`.
 * 
 * To get a function's code, you must provide the function's name and stage. To get these values, you can use `ListFunctions`.
 */export const getFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetFunction" }, GetFunctionRequest, GetFunctionResult, [NoSuchFunctionExists, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specific invalidation for a distribution tenant.
 */export const getInvalidationForDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{DistributionTenantId}/invalidation/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetInvalidationForDistributionTenant" }, GetInvalidationForDistributionTenantRequest, GetInvalidationForDistributionTenantResult, [AccessDenied, EntityNotFound, NoSuchInvalidation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a key group configuration.
 * 
 * To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using `ListDistributions` or `GetDistribution`. If the key group is not referenced in a cache behavior, you can get the identifier using `ListKeyGroups`.
 */export const getKeyGroupConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetKeyGroupConfig" }, GetKeyGroupConfigRequest, GetKeyGroupConfigResult, [NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
 */export const getMonitoringSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetMonitoringSubscription" }, GetMonitoringSubscriptionRequest, GetMonitoringSubscriptionResult, [AccessDenied, NoSuchDistribution, NoSuchMonitoringSubscription, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a CloudFront origin access control configuration.
 */export const getOriginAccessControlConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetOriginAccessControlConfig" }, GetOriginAccessControlConfigRequest, GetOriginAccessControlConfigResult, [AccessDenied, NoSuchOriginAccessControl]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets an origin request policy configuration.
 * 
 * To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the origin request policy is not attached to a cache behavior, you can get the identifier using `ListOriginRequestPolicies`.
 */export const getOriginRequestPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetOriginRequestPolicyConfig" }, GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult, [AccessDenied, NoSuchOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a public key configuration.
 */export const getPublicKeyConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetPublicKeyConfig" }, GetPublicKeyConfigRequest, GetPublicKeyConfigResult, [AccessDenied, NoSuchPublicKey]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the resource policy for the specified CloudFront resource that you own and have shared.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/get-resource-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a response headers policy configuration.
 * 
 * To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the response headers policy is not attached to a cache behavior, you can get the identifier using `ListResponseHeadersPolicies`.
 */export const getResponseHeadersPolicyConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetResponseHeadersPolicyConfig" }, GetResponseHeadersPolicyConfigRequest, GetResponseHeadersPolicyConfigResult, [AccessDenied, NoSuchResponseHeadersPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the configuration information about a streaming distribution.
 */export const getStreamingDistributionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution/{Id}/config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetStreamingDistributionConfig" }, GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult, [AccessDenied, NoSuchStreamingDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the details of an Amazon CloudFront VPC origin.
 */export const getVpcOrigin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/vpc-origin/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetVpcOrigin" }, GetVpcOriginRequest, GetVpcOriginResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists connection functions.
 */export const listConnectionFunctions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-functions", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListConnectionFunctions" }, ListConnectionFunctionsRequest, ListConnectionFunctionsResult, [AccessDenied, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the distributions in your account that are associated with the specified `AnycastIpListId`.
 */export const listDistributionsByAnycastIpListId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByAnycastIpListId/{AnycastIpListId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByAnycastIpListId" }, ListDistributionsByAnycastIpListIdRequest, ListDistributionsByAnycastIpListIdResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists distributions by connection function.
 */export const listDistributionsByConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByConnectionFunction", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByConnectionFunction" }, ListDistributionsByConnectionFunctionRequest, ListDistributionsByConnectionFunctionResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the distributions by the connection mode that you specify.
 */export const listDistributionsByConnectionMode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByConnectionMode/{ConnectionMode}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByConnectionMode" }, ListDistributionsByConnectionModeRequest, ListDistributionsByConnectionModeResult, [AccessDenied, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDistributionsByKeyGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByKeyGroup" }, ListDistributionsByKeyGroupRequest, ListDistributionsByKeyGroupResult, [InvalidArgument, NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDistributionsByOriginRequestPolicyId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByOriginRequestPolicyId" }, ListDistributionsByOriginRequestPolicyIdRequest, ListDistributionsByOriginRequestPolicyIdResult, [AccessDenied, InvalidArgument, NoSuchOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.
 * 
 * You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDistributionsByRealtimeLogConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByRealtimeLogConfig", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByRealtimeLogConfig" }, ListDistributionsByRealtimeLogConfigRequest, ListDistributionsByRealtimeLogConfigResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDistributionsByResponseHeadersPolicyId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByResponseHeadersPolicyId" }, ListDistributionsByResponseHeadersPolicyIdRequest, ListDistributionsByResponseHeadersPolicyIdResult, [AccessDenied, InvalidArgument, NoSuchResponseHeadersPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists distributions by trust store.
 */export const listDistributionsByTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByTrustStore", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByTrustStore" }, ListDistributionsByTrustStoreRequest, ListDistributionsByTrustStoreResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List CloudFront distributions by their VPC origin ID.
 */export const listDistributionsByVpcOriginId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByVpcOriginId/{VpcOriginId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByVpcOriginId" }, ListDistributionsByVpcOriginIdRequest, ListDistributionsByVpcOriginIdResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the invalidations for a distribution tenant.
 */export const listInvalidationsForDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}/invalidation", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListInvalidationsForDistributionTenant" }, ListInvalidationsForDistributionTenantRequest, ListInvalidationsForDistributionTenantResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List tags for a CloudFront resource. For more information, see Tagging a distribution in the *Amazon CloudFront Developer Guide*.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/tagging", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, [AccessDenied, InvalidArgument, InvalidTagging, NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Publishes a connection function.
 */export const publishConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Id}/publish", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.PublishConnectionFunction" }, PublishConnectionFunctionRequest, PublishConnectionFunctionResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Publishes a CloudFront function by copying the function code from the `DEVELOPMENT` stage to `LIVE`. This automatically updates all cache behaviors that are using this function to use the newly published copy in the `LIVE` stage.
 * 
 * When a function is published to the `LIVE` stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).
 * 
 * To publish a function, you must provide the function's name and version (`ETag` value). To get these values, you can use `ListFunctions` and `DescribeFunction`.
 */export const publishFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}/publish", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.PublishFunction" }, PublishFunctionRequest, PublishFunctionResult, [InvalidArgument, InvalidIfMatchVersion, NoSuchFunctionExists, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a resource control policy for a given CloudFront resource.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/put-resource-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResult, [AccessDenied, EntityNotFound, IllegalUpdate, InvalidArgument, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Add tags to a CloudFront resource. For more information, see Tagging a distribution in the *Amazon CloudFront Developer Guide*.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/tagging?Operation=Tag", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.TagResource" }, TagResourceRequest, S.Struct({}), [AccessDenied, InvalidArgument, InvalidTagging, NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Remove tags from a CloudFront resource. For more information, see Tagging a distribution in the *Amazon CloudFront Developer Guide*.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/tagging?Operation=Untag", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UntagResource" }, UntagResourceRequest, S.Struct({}), [AccessDenied, InvalidArgument, InvalidTagging, NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates an Anycast static IP list.
 */export const updateAnycastIpList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/anycast-ip-list/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateAnycastIpList" }, UpdateAnycastIpListRequest, UpdateAnycastIpListResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * We recommend that you use the `UpdateDomainAssociation` API operation to move a domain association, as it supports both standard distributions and distribution tenants. AssociateAlias performs similar checks but only supports standard distributions.
 * 
 * Moves a domain from its current standard distribution or distribution tenant to another one.
 * 
 * You must first disable the source distribution (standard distribution or distribution tenant) and then separately call this operation to move the domain to another target distribution (standard distribution or distribution tenant).
 * 
 * To use this operation, specify the domain and the ID of the target resource (standard distribution or distribution tenant). For more information, including how to set up the target resource, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the *Amazon CloudFront Developer Guide*.
 */export const updateDomainAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/domain-association", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateDomainAssociation" }, UpdateDomainAssociationRequest, UpdateDomainAssociationResult, [AccessDenied, EntityNotFound, IllegalUpdate, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Specifies the key value store to update.
 */export const updateKeyValueStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-value-store/{Name}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateKeyValueStore" }, UpdateKeyValueStoreRequest, UpdateKeyValueStoreResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a real-time log configuration.
 * 
 * When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:
 * 
 * - Call `GetRealtimeLogConfig` to get the current real-time log configuration.
 * 
 * - Locally modify the parameters in the real-time log configuration that you want to update.
 * 
 * - Call this API (`UpdateRealtimeLogConfig`) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.
 * 
 * You cannot update a real-time log configuration's `Name` or `ARN`.
 */export const updateRealtimeLogConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/realtime-log-config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateRealtimeLogConfig" }, UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult, [AccessDenied, InvalidArgument, NoSuchRealtimeLogConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a trust store.
 */export const updateTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/trust-store/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateTrustStore" }, UpdateTrustStoreRequest, UpdateTrustStoreResult, [AccessDenied, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a connection group.
 */export const createConnectionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-group", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateConnectionGroup" }, CreateConnectionGroupRequest, CreateConnectionGroupResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, InvalidArgument, InvalidTagging]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Specifies the key value store resource to add to your account. In your account, the key value store names must be unique. You can also import key value store data in JSON format from an S3 bucket by providing a valid `ImportSource` that you own.
 */export const createKeyValueStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-value-store", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateKeyValueStore" }, CreateKeyValueStoreRequest, CreateKeyValueStoreResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, EntitySizeLimitExceeded, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a cache policy.
 * 
 * You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.
 * 
 * To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use `ListCachePolicies` or `GetCachePolicy`.
 */export const deleteCachePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteCachePolicy" }, DeleteCachePolicyRequest, S.Struct({}), [AccessDenied, CachePolicyInUse, IllegalDelete, InvalidIfMatchVersion, NoSuchCachePolicy, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Delete an origin access identity.
 */export const deleteCloudFrontOriginAccessIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteCloudFrontOriginAccessIdentity" }, DeleteCloudFrontOriginAccessIdentityRequest, S.Struct({}), [AccessDenied, CloudFrontOriginAccessIdentityInUse, InvalidIfMatchVersion, NoSuchCloudFrontOriginAccessIdentity, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a connection group.
 */export const deleteConnectionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-group/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteConnectionGroup" }, DeleteConnectionGroupRequest, S.Struct({}), [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, InvalidIfMatchVersion, PreconditionFailed, ResourceNotDisabled]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a continuous deployment policy.
 * 
 * You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.
 */export const deleteContinuousDeploymentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteContinuousDeploymentPolicy" }, DeleteContinuousDeploymentPolicyRequest, S.Struct({}), [AccessDenied, ContinuousDeploymentPolicyInUse, InvalidArgument, InvalidIfMatchVersion, NoSuchContinuousDeploymentPolicy, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Delete a distribution.
 * 
 * Before you can delete a distribution, you must disable it, which requires permission to update the distribution. Once deleted, a distribution cannot be recovered.
 */export const deleteDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteDistribution" }, DeleteDistributionRequest, S.Struct({}), [AccessDenied, DistributionNotDisabled, InvalidIfMatchVersion, NoSuchDistribution, PreconditionFailed, ResourceInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Remove a field-level encryption configuration.
 */export const deleteFieldLevelEncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteFieldLevelEncryptionConfig" }, DeleteFieldLevelEncryptionConfigRequest, S.Struct({}), [AccessDenied, FieldLevelEncryptionConfigInUse, InvalidIfMatchVersion, NoSuchFieldLevelEncryptionConfig, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Remove a field-level encryption profile.
 */export const deleteFieldLevelEncryptionProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteFieldLevelEncryptionProfile" }, DeleteFieldLevelEncryptionProfileRequest, S.Struct({}), [AccessDenied, FieldLevelEncryptionProfileInUse, InvalidIfMatchVersion, NoSuchFieldLevelEncryptionProfile, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a CloudFront function.
 * 
 * You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.
 * 
 * To delete a function, you must provide the function's name and version (`ETag` value). To get these values, you can use `ListFunctions` and `DescribeFunction`.
 */export const deleteFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteFunction" }, DeleteFunctionRequest, S.Struct({}), [FunctionInUse, InvalidIfMatchVersion, NoSuchFunctionExists, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Disables additional CloudWatch metrics for the specified CloudFront distribution.
 */export const deleteMonitoringSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteMonitoringSubscription" }, DeleteMonitoringSubscriptionRequest, DeleteMonitoringSubscriptionResult, [AccessDenied, NoSuchDistribution, NoSuchMonitoringSubscription, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a CloudFront origin access control.
 * 
 * You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.
 */export const deleteOriginAccessControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteOriginAccessControl" }, DeleteOriginAccessControlRequest, S.Struct({}), [AccessDenied, InvalidIfMatchVersion, NoSuchOriginAccessControl, OriginAccessControlInUse, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Remove a public key you previously added to CloudFront.
 */export const deletePublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeletePublicKey" }, DeletePublicKeyRequest, S.Struct({}), [AccessDenied, InvalidIfMatchVersion, NoSuchPublicKey, PreconditionFailed, PublicKeyInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a response headers policy.
 * 
 * You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.
 * 
 * To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use `ListResponseHeadersPolicies` or `GetResponseHeadersPolicy`.
 */export const deleteResponseHeadersPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteResponseHeadersPolicy" }, DeleteResponseHeadersPolicyRequest, S.Struct({}), [AccessDenied, IllegalDelete, InvalidIfMatchVersion, NoSuchResponseHeadersPolicy, PreconditionFailed, ResponseHeadersPolicyInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.
 * 
 * **To delete an RTMP distribution using the CloudFront API**:
 * 
 * - Disable the RTMP distribution.
 * 
 * - Submit a `GET Streaming Distribution Config` request to get the current configuration and the `Etag` header for the distribution.
 * 
 * - Update the XML document that was returned in the response to your `GET Streaming Distribution Config` request to change the value of `Enabled` to `false`.
 * 
 * - Submit a `PUT Streaming Distribution Config` request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Streaming Distribution Config` request in Step 2.
 * 
 * - Review the response to the `PUT Streaming Distribution Config` request to confirm that the distribution was successfully disabled.
 * 
 * - Submit a `GET Streaming Distribution Config` request to confirm that your changes have propagated. When propagation is complete, the value of `Status` is `Deployed`.
 * 
 * - Submit a `DELETE Streaming Distribution` request. Set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Streaming Distribution Config` request in Step 2.
 * 
 * - Review the response to your `DELETE Streaming Distribution` request to confirm that the distribution was successfully deleted.
 * 
 * For information about deleting a distribution using the CloudFront console, see Deleting a Distribution in the *Amazon CloudFront Developer Guide*.
 */export const deleteStreamingDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteStreamingDistribution" }, DeleteStreamingDistributionRequest, S.Struct({}), [AccessDenied, InvalidIfMatchVersion, NoSuchStreamingDistribution, PreconditionFailed, StreamingDistributionNotDisabled]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Delete an Amazon CloudFront VPC origin.
 */export const deleteVpcOrigin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/vpc-origin/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteVpcOrigin" }, DeleteVpcOriginRequest, DeleteVpcOriginResult, [AccessDenied, CannotDeleteEntityWhileInUse, EntityNotFound, IllegalDelete, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Describes a connection function.
 */export const describeConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Identifier}/describe", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DescribeConnectionFunction" }, DescribeConnectionFunctionRequest, DescribeConnectionFunctionResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Specifies the key value store and its configuration.
 */export const describeKeyValueStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-value-store/{Name}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DescribeKeyValueStore" }, DescribeKeyValueStoreRequest, DescribeKeyValueStoreResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a cache policy, including the following metadata:
 * 
 * - The policy's identifier.
 * 
 * - The date and time when the policy was last modified.
 * 
 * To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the cache policy is not attached to a cache behavior, you can get the identifier using `ListCachePolicies`.
 */export const getCachePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetCachePolicy" }, GetCachePolicyRequest, GetCachePolicyResult, [AccessDenied, NoSuchCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the information about an origin access identity.
 */export const getCloudFrontOriginAccessIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetCloudFrontOriginAccessIdentity" }, GetCloudFrontOriginAccessIdentityRequest, GetCloudFrontOriginAccessIdentityResult, [AccessDenied, NoSuchCloudFrontOriginAccessIdentity]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
 */export const getContinuousDeploymentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetContinuousDeploymentPolicy" }, GetContinuousDeploymentPolicyRequest, GetContinuousDeploymentPolicyResult, [AccessDenied, NoSuchContinuousDeploymentPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the field-level encryption configuration information.
 */export const getFieldLevelEncryption = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetFieldLevelEncryption" }, GetFieldLevelEncryptionRequest, GetFieldLevelEncryptionResult, [AccessDenied, NoSuchFieldLevelEncryptionConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the field-level encryption profile information.
 */export const getFieldLevelEncryptionProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetFieldLevelEncryptionProfile" }, GetFieldLevelEncryptionProfileRequest, GetFieldLevelEncryptionProfileResult, [AccessDenied, NoSuchFieldLevelEncryptionProfile]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the information about an invalidation.
 */export const getInvalidation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetInvalidation" }, GetInvalidationRequest, GetInvalidationResult, [AccessDenied, NoSuchDistribution, NoSuchInvalidation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a key group, including the date and time when the key group was last modified.
 * 
 * To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using `ListDistributions` or `GetDistribution`. If the key group is not referenced in a cache behavior, you can get the identifier using `ListKeyGroups`.
 */export const getKeyGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetKeyGroup" }, GetKeyGroupRequest, GetKeyGroupResult, [NoSuchResource]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a CloudFront origin access control, including its unique identifier.
 */export const getOriginAccessControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetOriginAccessControl" }, GetOriginAccessControlRequest, GetOriginAccessControlResult, [AccessDenied, NoSuchOriginAccessControl]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets an origin request policy, including the following metadata:
 * 
 * - The policy's identifier.
 * 
 * - The date and time when the policy was last modified.
 * 
 * To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the origin request policy is not attached to a cache behavior, you can get the identifier using `ListOriginRequestPolicies`.
 */export const getOriginRequestPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetOriginRequestPolicy" }, GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult, [AccessDenied, NoSuchOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a public key.
 */export const getPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetPublicKey" }, GetPublicKeyRequest, GetPublicKeyResult, [AccessDenied, NoSuchPublicKey]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a real-time log configuration.
 * 
 * To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.
 */export const getRealtimeLogConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/get-realtime-log-config", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetRealtimeLogConfig" }, GetRealtimeLogConfigRequest, GetRealtimeLogConfigResult, [AccessDenied, InvalidArgument, NoSuchRealtimeLogConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
 * 
 * To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the response headers policy is not attached to a cache behavior, you can get the identifier using `ListResponseHeadersPolicies`.
 */export const getResponseHeadersPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetResponseHeadersPolicy" }, GetResponseHeadersPolicyRequest, GetResponseHeadersPolicyResult, [AccessDenied, NoSuchResponseHeadersPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specified RTMP distribution, including the distribution configuration.
 */export const getStreamingDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetStreamingDistribution" }, GetStreamingDistributionRequest, GetStreamingDistributionResult, [AccessDenied, NoSuchStreamingDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a trust store.
 */export const getTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/trust-store/{Identifier}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetTrustStore" }, GetTrustStoreRequest, GetTrustStoreResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDistributionsByCachePolicyId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByCachePolicyId" }, ListDistributionsByCachePolicyIdRequest, ListDistributionsByCachePolicyIdResult, [AccessDenied, InvalidArgument, NoSuchCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List the distributions that are associated with a specified WAF web ACL.
 */export const listDistributionsByWebACLId = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByWebACLId/{WebACLId}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByWebACLId" }, ListDistributionsByWebACLIdRequest, ListDistributionsByWebACLIdResult, [InvalidArgument, InvalidWebACLId]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the distribution tenants in your Amazon Web Services account.
 */export const listDistributionTenants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenants", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionTenants" }, ListDistributionTenantsRequest, ListDistributionTenantsResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists distribution tenants by the customization that you specify.
 * 
 * You must specify either the `CertificateArn` parameter or `WebACLArn` parameter, but not both in the same request.
 */export const listDistributionTenantsByCustomization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenants-by-customization", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionTenantsByCustomization" }, ListDistributionTenantsByCustomizationRequest, ListDistributionTenantsByCustomizationResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of all CloudFront functions in your Amazon Web Services account.
 * 
 * You can optionally apply a filter to return only the functions that are in the specified stage, either `DEVELOPMENT` or `LIVE`.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listFunctions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListFunctions" }, ListFunctionsRequest, ListFunctionsResult, [InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Specifies the key value stores to list.
 */export const listKeyValueStores = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-value-store", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListKeyValueStores" }, ListKeyValueStoresRequest, ListKeyValueStoresResult, [AccessDenied, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of real-time log configurations.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listRealtimeLogConfigs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/realtime-log-config", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListRealtimeLogConfigs" }, ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult, [AccessDenied, InvalidArgument, NoSuchRealtimeLogConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists trust stores.
 */export const listTrustStores = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/trust-stores", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListTrustStores" }, ListTrustStoresRequest, ListTrustStoresResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Tests a CloudFront function.
 * 
 * To test a function, you provide an *event object* that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see Testing functions in the *Amazon CloudFront Developer Guide*.
 * 
 * To test a function, you provide the function's name and version (`ETag` value) along with the event object. To get the function's name and version, you can use `ListFunctions` and `DescribeFunction`.
 */export const testFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}/test", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.TestFunction" }, TestFunctionRequest, TestFunctionResult, [InvalidArgument, InvalidIfMatchVersion, NoSuchFunctionExists, TestFunctionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a connection function.
 */export const updateConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateConnectionFunction" }, UpdateConnectionFunctionRequest, UpdateConnectionFunctionResult, [AccessDenied, EntityNotFound, EntitySizeLimitExceeded, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a connection group.
 */export const updateConnectionGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-group/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateConnectionGroup" }, UpdateConnectionGroupRequest, UpdateConnectionGroupResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, ResourceInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.
 * 
 * When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:
 * 
 * - Use `GetContinuousDeploymentPolicyConfig` to get the current configuration.
 * 
 * - Locally modify the fields in the continuous deployment policy configuration that you want to update.
 * 
 * - Use `UpdateContinuousDeploymentPolicy`, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.
 */export const updateContinuousDeploymentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateContinuousDeploymentPolicy" }, UpdateContinuousDeploymentPolicyRequest, UpdateContinuousDeploymentPolicyResult, [AccessDenied, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchContinuousDeploymentPolicy, PreconditionFailed, StagingDistributionInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a CloudFront function.
 * 
 * You can update a function's code or the comment that describes the function. You cannot update a function's name.
 * 
 * To update a function, you provide the function's name and version (`ETag` value) along with the updated function code. To get the name and version, you can use `ListFunctions` and `DescribeFunction`.
 */export const updateFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function/{Name}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateFunction" }, UpdateFunctionRequest, UpdateFunctionResult, [FunctionSizeLimitExceeded, InvalidArgument, InvalidIfMatchVersion, NoSuchFunctionExists, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a CloudFront origin access control.
 */export const updateOriginAccessControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateOriginAccessControl" }, UpdateOriginAccessControlRequest, UpdateOriginAccessControlResult, [AccessDenied, IllegalUpdate, InvalidArgument, InvalidIfMatchVersion, NoSuchOriginAccessControl, OriginAccessControlAlreadyExists, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update public key information. Note that the only value you can change is the comment.
 */export const updatePublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdatePublicKey" }, UpdatePublicKeyRequest, UpdatePublicKeyResult, [AccessDenied, CannotChangeImmutablePublicKeyFields, IllegalUpdate, InvalidArgument, InvalidIfMatchVersion, NoSuchPublicKey, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update an Amazon CloudFront VPC origin in your account.
 */export const updateVpcOrigin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/vpc-origin/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateVpcOrigin" }, UpdateVpcOriginRequest, UpdateVpcOriginResult, [AccessDenied, CannotUpdateEntityWhileInUse, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Verify the DNS configuration for your domain names. This API operation checks whether your domain name points to the correct routing endpoint of the connection group, such as d111111abcdef8.cloudfront.net. You can use this API operation to troubleshoot and resolve DNS configuration issues.
 */export const verifyDnsConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/verify-dns-configuration", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.VerifyDnsConfiguration" }, VerifyDnsConfigurationRequest, VerifyDnsConfigurationResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * The `AssociateAlias` API operation only supports standard distributions. To move domains between distribution tenants and/or standard distributions, we recommend that you use the UpdateDomainAssociation API operation instead.
 * 
 * Associates an alias with a CloudFront standard distribution. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name.
 * 
 * With this operation, you can move an alias that's already used for a standard distribution to a different standard distribution. This prevents the downtime that could occur if you first remove the alias from one standard distribution and then separately add the alias to another standard distribution.
 * 
 * To use this operation, specify the alias and the ID of the target standard distribution.
 * 
 * For more information, including how to set up the target standard distribution, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the *Amazon CloudFront Developer Guide*.
 */export const associateAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{TargetDistributionId}/associate-alias", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.AssociateAlias" }, AssociateAliasRequest, S.Struct({}), [AccessDenied, IllegalUpdate, InvalidArgument, NoSuchDistribution, TooManyDistributionCNAMEs]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an Anycast static IP list.
 */export const createAnycastIpList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/anycast-ip-list", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateAnycastIpList" }, CreateAnycastIpListRequest, CreateAnycastIpListResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, InvalidArgument, InvalidTagging, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a distribution tenant.
 */export const createDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateDistributionTenant" }, CreateDistributionTenantRequest, CreateDistributionTenantResult, [AccessDenied, CNAMEAlreadyExists, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, InvalidArgument, InvalidAssociation, InvalidTagging]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an invalidation for a distribution tenant. For more information, see Invalidating files in the *Amazon CloudFront Developer Guide*.
 */export const createInvalidationForDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}/invalidation", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateInvalidationForDistributionTenant" }, CreateInvalidationForDistributionTenantRequest, CreateInvalidationForDistributionTenantResult, [AccessDenied, BatchTooLarge, EntityNotFound, InconsistentQuantities, InvalidArgument, MissingBody, TooManyInvalidationsInProgress]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a key group that you can use with CloudFront signed URLs and signed cookies.
 * 
 * To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see Serving private content in the *Amazon CloudFront Developer Guide*.
 */export const createKeyGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateKeyGroup" }, CreateKeyGroupRequest, CreateKeyGroupResult, [InvalidArgument, KeyGroupAlreadyExists, TooManyKeyGroups, TooManyPublicKeysInKeyGroup]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 * 
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 * 
 * For more information about using a CloudFront origin access control, see Restricting access to an Amazon Web Services origin in the *Amazon CloudFront Developer Guide*.
 */export const createOriginAccessControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateOriginAccessControl" }, CreateOriginAccessControlRequest, CreateOriginAccessControlResult, [InvalidArgument, OriginAccessControlAlreadyExists, TooManyOriginAccessControls]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a trust store.
 */export const createTrustStore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/trust-store", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateTrustStore" }, CreateTrustStoreRequest, CreateTrustStoreResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, InvalidArgument, InvalidTagging]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Create an Amazon CloudFront VPC origin.
 */export const createVpcOrigin = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/vpc-origin", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateVpcOrigin" }, CreateVpcOriginRequest, CreateVpcOriginResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, InconsistentQuantities, InvalidArgument, InvalidTagging, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes an origin request policy.
 * 
 * You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.
 * 
 * To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use `ListOriginRequestPolicies` or `GetOriginRequestPolicy`.
 */export const deleteOriginRequestPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy/{Id}", method: "DELETE", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteOriginRequestPolicy" }, DeleteOriginRequestPolicyRequest, S.Struct({}), [AccessDenied, IllegalDelete, InvalidIfMatchVersion, NoSuchOriginRequestPolicy, OriginRequestPolicyInUse, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a real-time log configuration.
 * 
 * You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.
 * 
 * To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.
 */export const deleteRealtimeLogConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/delete-realtime-log-config", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.DeleteRealtimeLogConfig" }, DeleteRealtimeLogConfigRequest, S.Struct({}), [AccessDenied, InvalidArgument, NoSuchRealtimeLogConfig, RealtimeLogConfigInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets an Anycast static IP list.
 */export const getAnycastIpList = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/anycast-ip-list/{Id}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetAnycastIpList" }, GetAnycastIpListRequest, GetAnycastIpListResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a distribution tenant.
 */export const getDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Identifier}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetDistributionTenant" }, GetDistributionTenantRequest, GetDistributionTenantResult, [AccessDenied, EntityNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets details about the CloudFront managed ACM certificate.
 */export const getManagedCertificateDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/managed-certificate/{Identifier}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.GetManagedCertificateDetails" }, GetManagedCertificateDetailsRequest, GetManagedCertificateDetailsResult, [AccessDenied, EntityNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists your Anycast static IP lists.
 */export const listAnycastIpLists = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/anycast-ip-list", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListAnycastIpLists" }, ListAnycastIpListsRequest, ListAnycastIpListsResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of cache policies.
 * 
 * You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listCachePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListCachePolicies" }, ListCachePoliciesRequest, ListCachePoliciesResult, [AccessDenied, InvalidArgument, NoSuchCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists origin access identities.
 */export const listCloudFrontOriginAccessIdentities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListCloudFrontOriginAccessIdentities" }, ListCloudFrontOriginAccessIdentitiesRequest, ListCloudFrontOriginAccessIdentitiesResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * The `ListConflictingAliases` API operation only supports standard distributions. To list domain conflicts for both standard distributions and distribution tenants, we recommend that you use the ListDomainConflicts API operation instead.
 * 
 * Gets a list of aliases that conflict or overlap with the provided alias, and the associated CloudFront standard distribution and Amazon Web Services accounts for each conflicting alias. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name.
 * 
 * In the returned list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distribution and accounts that you own, and helps to protect the information of ones that you don't own.
 * 
 * Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide `www.example.com` as input, the returned list can include `www.example.com` and the overlapping wildcard alternate domain name (`*.example.com`), if they exist. If you provide `*.example.com` as input, the returned list can include `*.example.com` and any alternate domain names covered by that wildcard (for example, `www.example.com`, `test.example.com`, `dev.example.com`, and so on), if they exist.
 * 
 * To list conflicting aliases, specify the alias to search and the ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias. For more information, including how to set up the standard distribution and certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the *Amazon CloudFront Developer Guide*.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listConflictingAliases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/conflicting-alias", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListConflictingAliases" }, ListConflictingAliasesRequest, ListConflictingAliasesResult, [InvalidArgument, NoSuchDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the connection groups in your Amazon Web Services account.
 */export const listConnectionGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-groups", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListConnectionGroups" }, ListConnectionGroupsRequest, ListConnectionGroupsResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of the continuous deployment policies in your Amazon Web Services account.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listContinuousDeploymentPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListContinuousDeploymentPolicies" }, ListContinuousDeploymentPoliciesRequest, ListContinuousDeploymentPoliciesResult, [AccessDenied, InvalidArgument, NoSuchContinuousDeploymentPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List CloudFront distributions.
 */export const listDistributions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributions" }, ListDistributionsRequest, ListDistributionsResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the CloudFront distributions that are associated with the specified resource that you own.
 */export const listDistributionsByOwnedResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributionsByOwnedResource/{ResourceArn}", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDistributionsByOwnedResource" }, ListDistributionsByOwnedResourceRequest, ListDistributionsByOwnedResourceResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * We recommend that you use the `ListDomainConflicts` API operation to check for domain conflicts, as it supports both standard distributions and distribution tenants. ListConflictingAliases performs similar checks but only supports standard distributions.
 * 
 * Lists existing domain associations that conflict with the domain that you specify.
 * 
 * You can use this API operation to identify potential domain conflicts when moving domains between standard distributions and/or distribution tenants. Domain conflicts must be resolved first before they can be moved.
 * 
 * For example, if you provide `www.example.com` as input, the returned list can include `www.example.com` and the overlapping wildcard alternate domain name (`*.example.com`), if they exist. If you provide `*.example.com` as input, the returned list can include `*.example.com` and any alternate domain names covered by that wildcard (for example, `www.example.com`, `test.example.com`, `dev.example.com`, and so on), if they exist.
 * 
 * To list conflicting domains, specify the following:
 * 
 * - The domain to search for
 * 
 * - The ID of a standard distribution or distribution tenant in your account that has an attached TLS certificate, which covers the specified domain
 * 
 * For more information, including how to set up the standard distribution or distribution tenant, and the certificate, see Moving an alternate domain name to a different standard distribution or distribution tenant in the *Amazon CloudFront Developer Guide*.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listDomainConflicts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/domain-conflicts", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListDomainConflicts" }, ListDomainConflictsRequest, ListDomainConflictsResult, [AccessDenied, EntityNotFound, InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List all field-level encryption configurations that have been created in CloudFront for this account.
 */export const listFieldLevelEncryptionConfigs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListFieldLevelEncryptionConfigs" }, ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
 */export const listFieldLevelEncryptionProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListFieldLevelEncryptionProfiles" }, ListFieldLevelEncryptionProfilesRequest, ListFieldLevelEncryptionProfilesResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists invalidation batches.
 */export const listInvalidations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{DistributionId}/invalidation", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListInvalidations" }, ListInvalidationsRequest, ListInvalidationsResult, [AccessDenied, InvalidArgument, NoSuchDistribution]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of key groups.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listKeyGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListKeyGroups" }, ListKeyGroupsRequest, ListKeyGroupsResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the list of CloudFront origin access controls (OACs) in this Amazon Web Services account.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the `NextMarker` value from the current response as the `Marker` value in the next request.
 * 
 * If you're not using origin access controls for your Amazon Web Services account, the `ListOriginAccessControls` operation doesn't return the `Items` element in the response.
 */export const listOriginAccessControls = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-control", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListOriginAccessControls" }, ListOriginAccessControlsRequest, ListOriginAccessControlsResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of origin request policies.
 * 
 * You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listOriginRequestPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListOriginRequestPolicies" }, ListOriginRequestPoliciesRequest, ListOriginRequestPoliciesResult, [AccessDenied, InvalidArgument, NoSuchOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List all public keys that have been added to CloudFront for this account.
 */export const listPublicKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListPublicKeys" }, ListPublicKeysRequest, ListPublicKeysResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of response headers policies.
 * 
 * You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.
 * 
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 */export const listResponseHeadersPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListResponseHeadersPolicies" }, ListResponseHeadersPoliciesRequest, ListResponseHeadersPoliciesResult, [AccessDenied, InvalidArgument, NoSuchResponseHeadersPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List streaming distributions.
 */export const listStreamingDistributions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListStreamingDistributions" }, ListStreamingDistributionsRequest, ListStreamingDistributionsResult, [InvalidArgument]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * List the CloudFront VPC origins in your account.
 */export const listVpcOrigins = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/vpc-origin", method: "GET", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.ListVpcOrigins" }, ListVpcOriginsRequest, ListVpcOriginsResult, [AccessDenied, EntityNotFound, InvalidArgument, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Tests a connection function.
 */export const testConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function/{Id}/test", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.TestConnectionFunction" }, TestConnectionFunctionRequest, TestConnectionFunctionResult, [EntityNotFound, InvalidArgument, InvalidIfMatchVersion, PreconditionFailed, TestFunctionFailed, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update an origin access identity.
 */export const updateCloudFrontOriginAccessIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateCloudFrontOriginAccessIdentity" }, UpdateCloudFrontOriginAccessIdentityRequest, UpdateCloudFrontOriginAccessIdentityResult, [AccessDenied, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, MissingBody, NoSuchCloudFrontOriginAccessIdentity, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a distribution tenant.
 */export const updateDistributionTenant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution-tenant/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateDistributionTenant" }, UpdateDistributionTenantRequest, UpdateDistributionTenantResult, [AccessDenied, CNAMEAlreadyExists, EntityAlreadyExists, EntityLimitExceeded, EntityNotFound, InvalidArgument, InvalidAssociation, InvalidIfMatchVersion, PreconditionFailed]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a key group.
 * 
 * When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:
 * 
 * - Get the current key group with `GetKeyGroup` or `GetKeyGroupConfig`.
 * 
 * - Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.
 * 
 * - Call `UpdateKeyGroup` with the entire key group object, including the fields that you modified and those that you didn't.
 */export const updateKeyGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/key-group/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateKeyGroup" }, UpdateKeyGroupRequest, UpdateKeyGroupResult, [InvalidArgument, InvalidIfMatchVersion, KeyGroupAlreadyExists, NoSuchResource, PreconditionFailed, TooManyPublicKeysInKeyGroup]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see Serving Private Content through CloudFront in the *Amazon CloudFront Developer Guide*.
 */export const createCloudFrontOriginAccessIdentity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-access-identity/cloudfront", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateCloudFrontOriginAccessIdentity" }, CreateCloudFrontOriginAccessIdentityRequest, CreateCloudFrontOriginAccessIdentityResult, [CloudFrontOriginAccessIdentityAlreadyExists, InconsistentQuantities, InvalidArgument, MissingBody, TooManyCloudFrontOriginAccessIdentities]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a connection function.
 */export const createConnectionFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/connection-function", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateConnectionFunction" }, CreateConnectionFunctionRequest, CreateConnectionFunctionResult, [AccessDenied, EntityAlreadyExists, EntityLimitExceeded, EntitySizeLimitExceeded, InvalidArgument, InvalidTagging, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Create a new invalidation. For more information, see Invalidating files in the *Amazon CloudFront Developer Guide*.
 */export const createInvalidation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{DistributionId}/invalidation", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateInvalidation" }, CreateInvalidationRequest, CreateInvalidationResult, [AccessDenied, BatchTooLarge, InconsistentQuantities, InvalidArgument, MissingBody, NoSuchDistribution, TooManyInvalidationsInProgress]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Enables or disables additional Amazon CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.
 * 
 * For more information, see Viewing additional CloudFront distribution metrics in the *Amazon CloudFront Developer Guide*.
 */export const createMonitoringSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distributions/{DistributionId}/monitoring-subscription", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateMonitoringSubscription" }, CreateMonitoringSubscriptionRequest, CreateMonitoringSubscriptionResult, [AccessDenied, MonitoringSubscriptionAlreadyExists, NoSuchDistribution, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Uploads a public key to CloudFront that you can use with signed URLs and signed cookies, or with field-level encryption.
 */export const createPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/public-key", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreatePublicKey" }, CreatePublicKeyRequest, CreatePublicKeyResult, [InvalidArgument, PublicKeyAlreadyExists, TooManyPublicKeys]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update a field-level encryption configuration.
 */export const updateFieldLevelEncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateFieldLevelEncryptionConfig" }, UpdateFieldLevelEncryptionConfigRequest, UpdateFieldLevelEncryptionConfigResult, [AccessDenied, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchFieldLevelEncryptionConfig, NoSuchFieldLevelEncryptionProfile, PreconditionFailed, QueryArgProfileEmpty, TooManyFieldLevelEncryptionContentTypeProfiles, TooManyFieldLevelEncryptionQueryArgProfiles]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a response headers policy.
 * 
 * When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:
 * 
 * - Use `GetResponseHeadersPolicyConfig` to get the current policy's configuration.
 * 
 * - Modify the fields in the response headers policy configuration that you want to update.
 * 
 * - Call `UpdateResponseHeadersPolicy`, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.
 */export const updateResponseHeadersPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateResponseHeadersPolicy" }, UpdateResponseHeadersPolicyRequest, UpdateResponseHeadersPolicyResult, [AccessDenied, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchResponseHeadersPolicy, PreconditionFailed, ResponseHeadersPolicyAlreadyExists, TooLongCSPInResponseHeadersPolicy, TooManyCustomHeadersInResponseHeadersPolicy, TooManyRemoveHeadersInResponseHeadersPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update a streaming distribution.
 */export const updateStreamingDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateStreamingDistribution" }, UpdateStreamingDistributionRequest, UpdateStreamingDistributionResult, [AccessDenied, CNAMEAlreadyExists, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, InvalidOriginAccessControl, InvalidOriginAccessIdentity, MissingBody, NoSuchStreamingDistribution, PreconditionFailed, TooManyStreamingDistributionCNAMEs, TooManyTrustedSigners, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a cache policy.
 * 
 * After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:
 * 
 * - The values that CloudFront includes in the *cache key*. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 * 
 * - The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.
 * 
 * If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 * 
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but *not* include them in the cache key, use `OriginRequestPolicy`.
 * 
 * For more information about cache policies, see Controlling the cache key in the *Amazon CloudFront Developer Guide*.
 */export const createCachePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateCachePolicy" }, CreateCachePolicyRequest, CreateCachePolicyResult, [AccessDenied, CachePolicyAlreadyExists, InconsistentQuantities, InvalidArgument, TooManyCachePolicies, TooManyCookiesInCachePolicy, TooManyHeadersInCachePolicy, TooManyQueryStringsInCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a CloudFront function.
 * 
 * To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.
 * 
 * When you create a function, it's in the `DEVELOPMENT` stage. In this stage, you can test the function with `TestFunction`, and update it with `UpdateFunction`.
 * 
 * When you're ready to use your function with a CloudFront distribution, use `PublishFunction` to copy the function from the `DEVELOPMENT` stage to `LIVE`. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.
 */export const createFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/function", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateFunction" }, CreateFunctionRequest, CreateFunctionResult, [FunctionAlreadyExists, FunctionSizeLimitExceeded, InvalidArgument, TooManyFunctions, UnsupportedOperation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an origin request policy.
 * 
 * After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 * 
 * - The request body and the URL path (without the domain name) from the viewer request.
 * 
 * - The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 * 
 * - All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 * 
 * CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 * 
 * For more information about origin request policies, see Controlling origin requests in the *Amazon CloudFront Developer Guide*.
 */export const createOriginRequestPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateOriginRequestPolicy" }, CreateOriginRequestPolicyRequest, CreateOriginRequestPolicyResult, [AccessDenied, InconsistentQuantities, InvalidArgument, OriginRequestPolicyAlreadyExists, TooManyCookiesInOriginRequestPolicy, TooManyHeadersInOriginRequestPolicy, TooManyOriginRequestPolicies, TooManyQueryStringsInOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a real-time log configuration.
 * 
 * After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.
 * 
 * For more information about real-time log configurations, see Real-time logs in the *Amazon CloudFront Developer Guide*.
 */export const createRealtimeLogConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/realtime-log-config", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateRealtimeLogConfig" }, CreateRealtimeLogConfigRequest, CreateRealtimeLogConfigResult, [AccessDenied, InvalidArgument, RealtimeLogConfigAlreadyExists, TooManyRealtimeLogConfigs]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.
 */export const createStreamingDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateStreamingDistribution" }, CreateStreamingDistributionRequest, CreateStreamingDistributionResult, [AccessDenied, CNAMEAlreadyExists, InconsistentQuantities, InvalidArgument, InvalidOrigin, InvalidOriginAccessControl, InvalidOriginAccessIdentity, MissingBody, StreamingDistributionAlreadyExists, TooManyStreamingDistributionCNAMEs, TooManyStreamingDistributions, TooManyTrustedSigners, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum.
 */export const createStreamingDistributionWithTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/streaming-distribution?WithTags", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateStreamingDistributionWithTags" }, CreateStreamingDistributionWithTagsRequest, CreateStreamingDistributionWithTagsResult, [AccessDenied, CNAMEAlreadyExists, InconsistentQuantities, InvalidArgument, InvalidOrigin, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidTagging, MissingBody, StreamingDistributionAlreadyExists, TooManyStreamingDistributionCNAMEs, TooManyStreamingDistributions, TooManyTrustedSigners, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates a cache policy configuration.
 * 
 * When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:
 * 
 * - Use `GetCachePolicyConfig` to get the current configuration.
 * 
 * - Locally modify the fields in the cache policy configuration that you want to update.
 * 
 * - Call `UpdateCachePolicy` by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.
 * 
 * If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 */export const updateCachePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/cache-policy/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateCachePolicy" }, UpdateCachePolicyRequest, UpdateCachePolicyResult, [AccessDenied, CachePolicyAlreadyExists, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchCachePolicy, PreconditionFailed, TooManyCookiesInCachePolicy, TooManyHeadersInCachePolicy, TooManyQueryStringsInCachePolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Update a field-level encryption profile.
 */export const updateFieldLevelEncryptionProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateFieldLevelEncryptionProfile" }, UpdateFieldLevelEncryptionProfileRequest, UpdateFieldLevelEncryptionProfileResult, [AccessDenied, FieldLevelEncryptionProfileAlreadyExists, FieldLevelEncryptionProfileSizeExceeded, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchFieldLevelEncryptionProfile, NoSuchPublicKey, PreconditionFailed, TooManyFieldLevelEncryptionEncryptionEntities, TooManyFieldLevelEncryptionFieldPatterns]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates an origin request policy configuration.
 * 
 * When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:
 * 
 * - Use `GetOriginRequestPolicyConfig` to get the current configuration.
 * 
 * - Locally modify the fields in the origin request policy configuration that you want to update.
 * 
 * - Call `UpdateOriginRequestPolicy` by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.
 */export const updateOriginRequestPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/origin-request-policy/{Id}", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateOriginRequestPolicy" }, UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult, [AccessDenied, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidIfMatchVersion, NoSuchOriginRequestPolicy, OriginRequestPolicyAlreadyExists, PreconditionFailed, TooManyCookiesInOriginRequestPolicy, TooManyHeadersInOriginRequestPolicy, TooManyQueryStringsInOriginRequestPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Create a field-level encryption profile.
 */export const createFieldLevelEncryptionProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption-profile", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateFieldLevelEncryptionProfile" }, CreateFieldLevelEncryptionProfileRequest, CreateFieldLevelEncryptionProfileResult, [FieldLevelEncryptionProfileAlreadyExists, FieldLevelEncryptionProfileSizeExceeded, InconsistentQuantities, InvalidArgument, NoSuchPublicKey, TooManyFieldLevelEncryptionEncryptionEntities, TooManyFieldLevelEncryptionFieldPatterns, TooManyFieldLevelEncryptionProfiles]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a response headers policy.
 * 
 * A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.
 * 
 * After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 * 
 * For more information, see Adding or removing HTTP headers in CloudFront responses in the *Amazon CloudFront Developer Guide*.
 */export const createResponseHeadersPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/response-headers-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateResponseHeadersPolicy" }, CreateResponseHeadersPolicyRequest, CreateResponseHeadersPolicyResult, [AccessDenied, InconsistentQuantities, InvalidArgument, ResponseHeadersPolicyAlreadyExists, TooLongCSPInResponseHeadersPolicy, TooManyCustomHeadersInResponseHeadersPolicy, TooManyRemoveHeadersInResponseHeadersPolicy, TooManyResponseHeadersPolicies]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.
 * 
 * To use a continuous deployment policy, first use `CopyDistribution` to create a staging distribution, then use `UpdateDistribution` to modify the staging distribution's configuration.
 * 
 * After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.
 */export const createContinuousDeploymentPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/continuous-deployment-policy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateContinuousDeploymentPolicy" }, CreateContinuousDeploymentPolicyRequest, CreateContinuousDeploymentPolicyResult, [AccessDenied, ContinuousDeploymentPolicyAlreadyExists, InconsistentQuantities, InvalidArgument, StagingDistributionInUse, TooManyContinuousDeploymentPolicies]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Create a new field-level encryption configuration.
 */export const createFieldLevelEncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/field-level-encryption", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateFieldLevelEncryptionConfig" }, CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult, [FieldLevelEncryptionConfigAlreadyExists, InconsistentQuantities, InvalidArgument, NoSuchFieldLevelEncryptionProfile, QueryArgProfileEmpty, TooManyFieldLevelEncryptionConfigs, TooManyFieldLevelEncryptionContentTypeProfiles, TooManyFieldLevelEncryptionQueryArgProfiles]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Create a new distribution with tags. This API operation requires the following IAM permissions:
 * 
 * - CreateDistribution
 * 
 * - TagResource
 */export const createDistributionWithTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution?WithTags", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateDistributionWithTags" }, CreateDistributionWithTagsRequest, CreateDistributionWithTagsResult, [AccessDenied, CNAMEAlreadyExists, ContinuousDeploymentPolicyInUse, DistributionAlreadyExists, EntityNotFound, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, IllegalOriginAccessConfiguration, InconsistentQuantities, InvalidArgument, InvalidDefaultRootObject, InvalidDomainNameForOriginAccessControl, InvalidErrorCode, InvalidForwardCookies, InvalidFunctionAssociation, InvalidGeoRestrictionParameter, InvalidHeadersForS3Origin, InvalidLambdaFunctionAssociation, InvalidLocationCode, InvalidMinimumProtocolVersion, InvalidOrigin, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidOriginKeepaliveTimeout, InvalidOriginReadTimeout, InvalidProtocolSettings, InvalidQueryStringParameters, InvalidRelativePath, InvalidRequiredProtocol, InvalidResponseCode, InvalidTagging, InvalidTTLOrder, InvalidViewerCertificate, InvalidWebACLId, MissingBody, NoSuchCachePolicy, NoSuchContinuousDeploymentPolicy, NoSuchFieldLevelEncryptionConfig, NoSuchOrigin, NoSuchOriginRequestPolicy, NoSuchRealtimeLogConfig, NoSuchResponseHeadersPolicy, RealtimeLogConfigOwnerMismatch, TooManyCacheBehaviors, TooManyCertificates, TooManyCookieNamesInWhiteList, TooManyDistributionCNAMEs, TooManyDistributions, TooManyDistributionsAssociatedToCachePolicy, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, TooManyDistributionsAssociatedToKeyGroup, TooManyDistributionsAssociatedToOriginAccessControl, TooManyDistributionsAssociatedToOriginRequestPolicy, TooManyDistributionsAssociatedToResponseHeadersPolicy, TooManyDistributionsWithFunctionAssociations, TooManyDistributionsWithLambdaAssociations, TooManyDistributionsWithSingleFunctionARN, TooManyFunctionAssociations, TooManyHeadersInForwardedValues, TooManyKeyGroupsAssociatedToDistribution, TooManyLambdaFunctionAssociations, TooManyOriginCustomHeaders, TooManyOriginGroupsPerDistribution, TooManyOrigins, TooManyQueryStringParameters, TooManyTrustedSigners, TrustedKeyGroupDoesNotExist, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the configuration for a CloudFront distribution.
 * 
 * The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an `UpdateDistribution` request to make the updates.
 * 
 * **To update a web distribution using the CloudFront API**
 * 
 * - Use `GetDistributionConfig` to get the current configuration, including the version identifier (`ETag`).
 * 
 * - Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:
 * 
 * - You must copy the `ETag` field value from the response. (You'll use it for the `IfMatch` parameter in your request.) Then, remove the `ETag` field from the distribution configuration.
 * 
 * - You can't change the value of `CallerReference`.
 * 
 * - Submit an `UpdateDistribution` request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an `UpdateDistribution` request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.
 */export const updateDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}/config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateDistribution" }, UpdateDistributionRequest, UpdateDistributionResult, [AccessDenied, CNAMEAlreadyExists, ContinuousDeploymentPolicyInUse, EntityNotFound, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, IllegalOriginAccessConfiguration, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidDefaultRootObject, InvalidDomainNameForOriginAccessControl, InvalidErrorCode, InvalidForwardCookies, InvalidFunctionAssociation, InvalidGeoRestrictionParameter, InvalidHeadersForS3Origin, InvalidIfMatchVersion, InvalidLambdaFunctionAssociation, InvalidLocationCode, InvalidMinimumProtocolVersion, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidOriginKeepaliveTimeout, InvalidOriginReadTimeout, InvalidQueryStringParameters, InvalidRelativePath, InvalidRequiredProtocol, InvalidResponseCode, InvalidTTLOrder, InvalidViewerCertificate, InvalidWebACLId, MissingBody, NoSuchCachePolicy, NoSuchContinuousDeploymentPolicy, NoSuchDistribution, NoSuchFieldLevelEncryptionConfig, NoSuchOrigin, NoSuchOriginRequestPolicy, NoSuchRealtimeLogConfig, NoSuchResponseHeadersPolicy, PreconditionFailed, RealtimeLogConfigOwnerMismatch, StagingDistributionInUse, TooManyCacheBehaviors, TooManyCertificates, TooManyCookieNamesInWhiteList, TooManyDistributionCNAMEs, TooManyDistributionsAssociatedToCachePolicy, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, TooManyDistributionsAssociatedToKeyGroup, TooManyDistributionsAssociatedToOriginAccessControl, TooManyDistributionsAssociatedToOriginRequestPolicy, TooManyDistributionsAssociatedToResponseHeadersPolicy, TooManyDistributionsWithFunctionAssociations, TooManyDistributionsWithLambdaAssociations, TooManyDistributionsWithSingleFunctionARN, TooManyFunctionAssociations, TooManyHeadersInForwardedValues, TooManyKeyGroupsAssociatedToDistribution, TooManyLambdaFunctionAssociations, TooManyOriginCustomHeaders, TooManyOriginGroupsPerDistribution, TooManyOrigins, TooManyQueryStringParameters, TooManyTrustedSigners, TrustedKeyGroupDoesNotExist, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its `Aliases` (also known as alternate domain names or CNAMEs) and `ContinuousDeploymentPolicyId` value, but otherwise its configuration is overwritten to match the staging distribution.
 * 
 * You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.
 * 
 * This API operation requires the following IAM permissions:
 * 
 * - GetDistribution
 * 
 * - UpdateDistribution
 */export const updateDistributionWithStagingConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{Id}/promote-staging-config", method: "PUT", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.UpdateDistributionWithStagingConfig" }, UpdateDistributionWithStagingConfigRequest, UpdateDistributionWithStagingConfigResult, [AccessDenied, CNAMEAlreadyExists, EntityNotFound, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, IllegalUpdate, InconsistentQuantities, InvalidArgument, InvalidDefaultRootObject, InvalidErrorCode, InvalidForwardCookies, InvalidFunctionAssociation, InvalidGeoRestrictionParameter, InvalidHeadersForS3Origin, InvalidIfMatchVersion, InvalidLambdaFunctionAssociation, InvalidLocationCode, InvalidMinimumProtocolVersion, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidOriginKeepaliveTimeout, InvalidOriginReadTimeout, InvalidQueryStringParameters, InvalidRelativePath, InvalidRequiredProtocol, InvalidResponseCode, InvalidTTLOrder, InvalidViewerCertificate, InvalidWebACLId, MissingBody, NoSuchCachePolicy, NoSuchDistribution, NoSuchFieldLevelEncryptionConfig, NoSuchOrigin, NoSuchOriginRequestPolicy, NoSuchRealtimeLogConfig, NoSuchResponseHeadersPolicy, PreconditionFailed, RealtimeLogConfigOwnerMismatch, TooManyCacheBehaviors, TooManyCertificates, TooManyCookieNamesInWhiteList, TooManyDistributionCNAMEs, TooManyDistributionsAssociatedToCachePolicy, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, TooManyDistributionsAssociatedToKeyGroup, TooManyDistributionsAssociatedToOriginAccessControl, TooManyDistributionsAssociatedToOriginRequestPolicy, TooManyDistributionsAssociatedToResponseHeadersPolicy, TooManyDistributionsWithFunctionAssociations, TooManyDistributionsWithLambdaAssociations, TooManyDistributionsWithSingleFunctionARN, TooManyFunctionAssociations, TooManyHeadersInForwardedValues, TooManyKeyGroupsAssociatedToDistribution, TooManyLambdaFunctionAssociations, TooManyOriginCustomHeaders, TooManyOriginGroupsPerDistribution, TooManyOrigins, TooManyQueryStringParameters, TooManyTrustedSigners, TrustedKeyGroupDoesNotExist, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.
 * 
 * After you create a staging distribution, you can use `UpdateDistribution` to modify the staging distribution's configuration. Then you can use `CreateContinuousDeploymentPolicy` to incrementally move traffic to the staging distribution.
 * 
 * This API operation requires the following IAM permissions:
 * 
 * - GetDistribution
 * 
 * - CreateDistribution
 * 
 * - CopyDistribution
 */export const copyDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution/{PrimaryDistributionId}/copy", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CopyDistribution" }, CopyDistributionRequest, CopyDistributionResult, [AccessDenied, CNAMEAlreadyExists, DistributionAlreadyExists, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, InconsistentQuantities, InvalidArgument, InvalidDefaultRootObject, InvalidErrorCode, InvalidForwardCookies, InvalidFunctionAssociation, InvalidGeoRestrictionParameter, InvalidHeadersForS3Origin, InvalidIfMatchVersion, InvalidLambdaFunctionAssociation, InvalidLocationCode, InvalidMinimumProtocolVersion, InvalidOrigin, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidOriginKeepaliveTimeout, InvalidOriginReadTimeout, InvalidProtocolSettings, InvalidQueryStringParameters, InvalidRelativePath, InvalidRequiredProtocol, InvalidResponseCode, InvalidTTLOrder, InvalidViewerCertificate, InvalidWebACLId, MissingBody, NoSuchCachePolicy, NoSuchDistribution, NoSuchFieldLevelEncryptionConfig, NoSuchOrigin, NoSuchOriginRequestPolicy, NoSuchRealtimeLogConfig, NoSuchResponseHeadersPolicy, PreconditionFailed, RealtimeLogConfigOwnerMismatch, TooManyCacheBehaviors, TooManyCertificates, TooManyCookieNamesInWhiteList, TooManyDistributionCNAMEs, TooManyDistributions, TooManyDistributionsAssociatedToCachePolicy, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, TooManyDistributionsAssociatedToKeyGroup, TooManyDistributionsAssociatedToOriginAccessControl, TooManyDistributionsAssociatedToOriginRequestPolicy, TooManyDistributionsAssociatedToResponseHeadersPolicy, TooManyDistributionsWithFunctionAssociations, TooManyDistributionsWithLambdaAssociations, TooManyDistributionsWithSingleFunctionARN, TooManyFunctionAssociations, TooManyHeadersInForwardedValues, TooManyKeyGroupsAssociatedToDistribution, TooManyLambdaFunctionAssociations, TooManyOriginCustomHeaders, TooManyOriginGroupsPerDistribution, TooManyOrigins, TooManyQueryStringParameters, TooManyTrustedSigners, TrustedKeyGroupDoesNotExist, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a CloudFront distribution.
 */export const createDistribution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-31", uri: "/2020-05-31/distribution", sdkId: "CloudFront", sigV4ServiceName: "cloudfront", name: "Cloudfront2020_05_31.CreateDistribution" }, CreateDistributionRequest, CreateDistributionResult, [AccessDenied, CNAMEAlreadyExists, ContinuousDeploymentPolicyInUse, DistributionAlreadyExists, EntityLimitExceeded, EntityNotFound, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, IllegalOriginAccessConfiguration, InconsistentQuantities, InvalidArgument, InvalidDefaultRootObject, InvalidDomainNameForOriginAccessControl, InvalidErrorCode, InvalidForwardCookies, InvalidFunctionAssociation, InvalidGeoRestrictionParameter, InvalidHeadersForS3Origin, InvalidLambdaFunctionAssociation, InvalidLocationCode, InvalidMinimumProtocolVersion, InvalidOrigin, InvalidOriginAccessControl, InvalidOriginAccessIdentity, InvalidOriginKeepaliveTimeout, InvalidOriginReadTimeout, InvalidProtocolSettings, InvalidQueryStringParameters, InvalidRelativePath, InvalidRequiredProtocol, InvalidResponseCode, InvalidTTLOrder, InvalidViewerCertificate, InvalidWebACLId, MissingBody, NoSuchCachePolicy, NoSuchContinuousDeploymentPolicy, NoSuchFieldLevelEncryptionConfig, NoSuchOrigin, NoSuchOriginRequestPolicy, NoSuchRealtimeLogConfig, NoSuchResponseHeadersPolicy, RealtimeLogConfigOwnerMismatch, TooManyCacheBehaviors, TooManyCertificates, TooManyCookieNamesInWhiteList, TooManyDistributionCNAMEs, TooManyDistributions, TooManyDistributionsAssociatedToCachePolicy, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, TooManyDistributionsAssociatedToKeyGroup, TooManyDistributionsAssociatedToOriginAccessControl, TooManyDistributionsAssociatedToOriginRequestPolicy, TooManyDistributionsAssociatedToResponseHeadersPolicy, TooManyDistributionsWithFunctionAssociations, TooManyDistributionsWithLambdaAssociations, TooManyDistributionsWithSingleFunctionARN, TooManyFunctionAssociations, TooManyHeadersInForwardedValues, TooManyKeyGroupsAssociatedToDistribution, TooManyLambdaFunctionAssociations, TooManyOriginCustomHeaders, TooManyOriginGroupsPerDistribution, TooManyOrigins, TooManyQueryStringParameters, TooManyTrustedSigners, TrustedKeyGroupDoesNotExist, TrustedSignerDoesNotExist]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
