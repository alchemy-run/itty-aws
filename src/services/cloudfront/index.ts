import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { CloudFront as _CloudFrontClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CloudFront",
  version: "2020-05-31",
  protocol: "restXml",
  sigV4ServiceName: "cloudfront",
  endpointPrefix: "cloudfront",
  operations: {
    AssociateAlias: {
      http: "PUT /2020-05-31/distribution/{TargetDistributionId}/associate-alias",
    },
    AssociateDistributionTenantWebACL: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}/associate-web-acl",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
    },
    AssociateDistributionWebACL: {
      http: "PUT /2020-05-31/distribution/{Id}/associate-web-acl",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
    },
    CopyDistribution: {
      http: "POST /2020-05-31/distribution/{PrimaryDistributionId}/copy",
      inputTraits: {
        Staging: "Staging",
        IfMatch: "If-Match",
      },
      outputTraits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateAnycastIpList: {
      http: "POST /2020-05-31/anycast-ip-list",
      outputTraits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateCachePolicy: {
      http: "POST /2020-05-31/cache-policy",
      inputTraits: {
        CachePolicyConfig: "httpPayload",
      },
      outputTraits: {
        CachePolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateCloudFrontOriginAccessIdentity: {
      http: "POST /2020-05-31/origin-access-identity/cloudfront",
      inputTraits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
      },
      outputTraits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateConnectionGroup: {
      http: "POST /2020-05-31/connection-group",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateContinuousDeploymentPolicy: {
      http: "POST /2020-05-31/continuous-deployment-policy",
      inputTraits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
      },
      outputTraits: {
        ContinuousDeploymentPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateDistribution: {
      http: "POST /2020-05-31/distribution",
      inputTraits: {
        DistributionConfig: "httpPayload",
      },
      outputTraits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateDistributionTenant: {
      http: "POST /2020-05-31/distribution-tenant",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateDistributionWithTags: {
      http: "POST /2020-05-31/distribution?WithTags",
      inputTraits: {
        DistributionConfigWithTags: "httpPayload",
      },
      outputTraits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFieldLevelEncryptionConfig: {
      http: "POST /2020-05-31/field-level-encryption",
      inputTraits: {
        FieldLevelEncryptionConfig: "httpPayload",
      },
      outputTraits: {
        FieldLevelEncryption: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFieldLevelEncryptionProfile: {
      http: "POST /2020-05-31/field-level-encryption-profile",
      inputTraits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
      },
      outputTraits: {
        FieldLevelEncryptionProfile: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFunction: {
      http: "POST /2020-05-31/function",
      outputTraits: {
        FunctionSummary: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateInvalidation: {
      http: "POST /2020-05-31/distribution/{DistributionId}/invalidation",
      inputTraits: {
        InvalidationBatch: "httpPayload",
      },
      outputTraits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
    },
    CreateInvalidationForDistributionTenant: {
      http: "POST /2020-05-31/distribution-tenant/{Id}/invalidation",
      inputTraits: {
        InvalidationBatch: "httpPayload",
      },
      outputTraits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
    },
    CreateKeyGroup: {
      http: "POST /2020-05-31/key-group",
      inputTraits: {
        KeyGroupConfig: "httpPayload",
      },
      outputTraits: {
        KeyGroup: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateKeyValueStore: {
      http: "POST /2020-05-31/key-value-store",
      outputTraits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
        Location: "Location",
      },
    },
    CreateMonitoringSubscription: {
      http: "POST /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      inputTraits: {
        MonitoringSubscription: "httpPayload",
      },
      outputTraits: {
        MonitoringSubscription: "httpPayload",
      },
    },
    CreateOriginAccessControl: {
      http: "POST /2020-05-31/origin-access-control",
      inputTraits: {
        OriginAccessControlConfig: "httpPayload",
      },
      outputTraits: {
        OriginAccessControl: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateOriginRequestPolicy: {
      http: "POST /2020-05-31/origin-request-policy",
      inputTraits: {
        OriginRequestPolicyConfig: "httpPayload",
      },
      outputTraits: {
        OriginRequestPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreatePublicKey: {
      http: "POST /2020-05-31/public-key",
      inputTraits: {
        PublicKeyConfig: "httpPayload",
      },
      outputTraits: {
        PublicKey: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateRealtimeLogConfig: {
      http: "POST /2020-05-31/realtime-log-config",
    },
    CreateResponseHeadersPolicy: {
      http: "POST /2020-05-31/response-headers-policy",
      inputTraits: {
        ResponseHeadersPolicyConfig: "httpPayload",
      },
      outputTraits: {
        ResponseHeadersPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateStreamingDistribution: {
      http: "POST /2020-05-31/streaming-distribution",
      inputTraits: {
        StreamingDistributionConfig: "httpPayload",
      },
      outputTraits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateStreamingDistributionWithTags: {
      http: "POST /2020-05-31/streaming-distribution?WithTags",
      inputTraits: {
        StreamingDistributionConfigWithTags: "httpPayload",
      },
      outputTraits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateVpcOrigin: {
      http: "POST /2020-05-31/vpc-origin",
      outputTraits: {
        VpcOrigin: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    DeleteAnycastIpList: {
      http: "DELETE /2020-05-31/anycast-ip-list/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteCachePolicy: {
      http: "DELETE /2020-05-31/cache-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteCloudFrontOriginAccessIdentity: {
      http: "DELETE /2020-05-31/origin-access-identity/cloudfront/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteConnectionGroup: {
      http: "DELETE /2020-05-31/connection-group/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteContinuousDeploymentPolicy: {
      http: "DELETE /2020-05-31/continuous-deployment-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteDistribution: {
      http: "DELETE /2020-05-31/distribution/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteDistributionTenant: {
      http: "DELETE /2020-05-31/distribution-tenant/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteFieldLevelEncryptionConfig: {
      http: "DELETE /2020-05-31/field-level-encryption/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteFieldLevelEncryptionProfile: {
      http: "DELETE /2020-05-31/field-level-encryption-profile/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteFunction: {
      http: "DELETE /2020-05-31/function/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteKeyGroup: {
      http: "DELETE /2020-05-31/key-group/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteKeyValueStore: {
      http: "DELETE /2020-05-31/key-value-store/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteMonitoringSubscription: {
      http: "DELETE /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
    },
    DeleteOriginAccessControl: {
      http: "DELETE /2020-05-31/origin-access-control/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteOriginRequestPolicy: {
      http: "DELETE /2020-05-31/origin-request-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeletePublicKey: {
      http: "DELETE /2020-05-31/public-key/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteRealtimeLogConfig: {
      http: "POST /2020-05-31/delete-realtime-log-config",
    },
    DeleteResponseHeadersPolicy: {
      http: "DELETE /2020-05-31/response-headers-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteStreamingDistribution: {
      http: "DELETE /2020-05-31/streaming-distribution/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
    },
    DeleteVpcOrigin: {
      http: "DELETE /2020-05-31/vpc-origin/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
    },
    DescribeFunction: {
      http: "GET /2020-05-31/function/{Name}/describe",
      outputTraits: {
        FunctionSummary: "httpPayload",
        ETag: "ETag",
      },
    },
    DescribeKeyValueStore: {
      http: "GET /2020-05-31/key-value-store/{Name}",
      outputTraits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
    },
    DisassociateDistributionTenantWebACL: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}/disassociate-web-acl",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
    },
    DisassociateDistributionWebACL: {
      http: "PUT /2020-05-31/distribution/{Id}/disassociate-web-acl",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
    },
    GetAnycastIpList: {
      http: "GET /2020-05-31/anycast-ip-list/{Id}",
      outputTraits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCachePolicy: {
      http: "GET /2020-05-31/cache-policy/{Id}",
      outputTraits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCachePolicyConfig: {
      http: "GET /2020-05-31/cache-policy/{Id}/config",
      outputTraits: {
        CachePolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCloudFrontOriginAccessIdentity: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}",
      outputTraits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCloudFrontOriginAccessIdentityConfig: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
      outputTraits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetConnectionGroup: {
      http: "GET /2020-05-31/connection-group/{Identifier}",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetConnectionGroupByRoutingEndpoint: {
      http: "GET /2020-05-31/connection-group",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetContinuousDeploymentPolicy: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}",
      outputTraits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetContinuousDeploymentPolicyConfig: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}/config",
      outputTraits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistribution: {
      http: "GET /2020-05-31/distribution/{Id}",
      outputTraits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionConfig: {
      http: "GET /2020-05-31/distribution/{Id}/config",
      outputTraits: {
        DistributionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Identifier}",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionTenantByDomain: {
      http: "GET /2020-05-31/distribution-tenant",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryption: {
      http: "GET /2020-05-31/field-level-encryption/{Id}",
      outputTraits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionConfig: {
      http: "GET /2020-05-31/field-level-encryption/{Id}/config",
      outputTraits: {
        FieldLevelEncryptionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionProfile: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}",
      outputTraits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionProfileConfig: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}/config",
      outputTraits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFunction: {
      http: "GET /2020-05-31/function/{Name}",
      outputTraits: {
        FunctionCode: "httpPayload",
        ETag: "ETag",
        ContentType: "Content-Type",
      },
    },
    GetInvalidation: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation/{Id}",
      outputTraits: {
        Invalidation: "httpPayload",
      },
    },
    GetInvalidationForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{DistributionTenantId}/invalidation/{Id}",
      outputTraits: {
        Invalidation: "httpPayload",
      },
    },
    GetKeyGroup: {
      http: "GET /2020-05-31/key-group/{Id}",
      outputTraits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetKeyGroupConfig: {
      http: "GET /2020-05-31/key-group/{Id}/config",
      outputTraits: {
        KeyGroupConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetManagedCertificateDetails: {
      http: "GET /2020-05-31/managed-certificate/{Identifier}",
      outputTraits: {
        ManagedCertificateDetails: "httpPayload",
      },
    },
    GetMonitoringSubscription: {
      http: "GET /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      outputTraits: {
        MonitoringSubscription: "httpPayload",
      },
    },
    GetOriginAccessControl: {
      http: "GET /2020-05-31/origin-access-control/{Id}",
      outputTraits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginAccessControlConfig: {
      http: "GET /2020-05-31/origin-access-control/{Id}/config",
      outputTraits: {
        OriginAccessControlConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginRequestPolicy: {
      http: "GET /2020-05-31/origin-request-policy/{Id}",
      outputTraits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginRequestPolicyConfig: {
      http: "GET /2020-05-31/origin-request-policy/{Id}/config",
      outputTraits: {
        OriginRequestPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetPublicKey: {
      http: "GET /2020-05-31/public-key/{Id}",
      outputTraits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
    },
    GetPublicKeyConfig: {
      http: "GET /2020-05-31/public-key/{Id}/config",
      outputTraits: {
        PublicKeyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetRealtimeLogConfig: {
      http: "POST /2020-05-31/get-realtime-log-config",
    },
    GetResponseHeadersPolicy: {
      http: "GET /2020-05-31/response-headers-policy/{Id}",
      outputTraits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetResponseHeadersPolicyConfig: {
      http: "GET /2020-05-31/response-headers-policy/{Id}/config",
      outputTraits: {
        ResponseHeadersPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetStreamingDistribution: {
      http: "GET /2020-05-31/streaming-distribution/{Id}",
      outputTraits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
    },
    GetStreamingDistributionConfig: {
      http: "GET /2020-05-31/streaming-distribution/{Id}/config",
      outputTraits: {
        StreamingDistributionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetVpcOrigin: {
      http: "GET /2020-05-31/vpc-origin/{Id}",
      outputTraits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
    },
    ListAnycastIpLists: {
      http: "GET /2020-05-31/anycast-ip-list",
      outputTraits: {
        AnycastIpLists: "httpPayload",
      },
    },
    ListCachePolicies: {
      http: "GET /2020-05-31/cache-policy",
      outputTraits: {
        CachePolicyList: "httpPayload",
      },
    },
    ListCloudFrontOriginAccessIdentities: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront",
      outputTraits: {
        CloudFrontOriginAccessIdentityList: "httpPayload",
      },
    },
    ListConflictingAliases: {
      http: "GET /2020-05-31/conflicting-alias",
      outputTraits: {
        ConflictingAliasesList: "httpPayload",
      },
    },
    ListConnectionGroups: {
      http: "POST /2020-05-31/connection-groups",
    },
    ListContinuousDeploymentPolicies: {
      http: "GET /2020-05-31/continuous-deployment-policy",
      outputTraits: {
        ContinuousDeploymentPolicyList: "httpPayload",
      },
    },
    ListDistributions: {
      http: "GET /2020-05-31/distribution",
      outputTraits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByAnycastIpListId: {
      http: "GET /2020-05-31/distributionsByAnycastIpListId/{AnycastIpListId}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByCachePolicyId: {
      http: "GET /2020-05-31/distributionsByCachePolicyId/{CachePolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByConnectionMode: {
      http: "GET /2020-05-31/distributionsByConnectionMode/{ConnectionMode}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByKeyGroup: {
      http: "GET /2020-05-31/distributionsByKeyGroupId/{KeyGroupId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByOriginRequestPolicyId: {
      http: "GET /2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByOwnedResource: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByRealtimeLogConfig: {
      http: "POST /2020-05-31/distributionsByRealtimeLogConfig",
      outputTraits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByResponseHeadersPolicyId: {
      http: "GET /2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByVpcOriginId: {
      http: "GET /2020-05-31/distributionsByVpcOriginId/{VpcOriginId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByWebACLId: {
      http: "GET /2020-05-31/distributionsByWebACLId/{WebACLId}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionTenants: {
      http: "POST /2020-05-31/distribution-tenants",
    },
    ListDistributionTenantsByCustomization: {
      http: "POST /2020-05-31/distribution-tenants-by-customization",
    },
    ListDomainConflicts: {
      http: "POST /2020-05-31/domain-conflicts",
    },
    ListFieldLevelEncryptionConfigs: {
      http: "GET /2020-05-31/field-level-encryption",
      outputTraits: {
        FieldLevelEncryptionList: "httpPayload",
      },
    },
    ListFieldLevelEncryptionProfiles: {
      http: "GET /2020-05-31/field-level-encryption-profile",
      outputTraits: {
        FieldLevelEncryptionProfileList: "httpPayload",
      },
    },
    ListFunctions: {
      http: "GET /2020-05-31/function",
      outputTraits: {
        FunctionList: "httpPayload",
      },
    },
    ListInvalidations: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation",
      outputTraits: {
        InvalidationList: "httpPayload",
      },
    },
    ListInvalidationsForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Id}/invalidation",
      outputTraits: {
        InvalidationList: "httpPayload",
      },
    },
    ListKeyGroups: {
      http: "GET /2020-05-31/key-group",
      outputTraits: {
        KeyGroupList: "httpPayload",
      },
    },
    ListKeyValueStores: {
      http: "GET /2020-05-31/key-value-store",
      outputTraits: {
        KeyValueStoreList: "httpPayload",
      },
    },
    ListOriginAccessControls: {
      http: "GET /2020-05-31/origin-access-control",
      outputTraits: {
        OriginAccessControlList: "httpPayload",
      },
    },
    ListOriginRequestPolicies: {
      http: "GET /2020-05-31/origin-request-policy",
      outputTraits: {
        OriginRequestPolicyList: "httpPayload",
      },
    },
    ListPublicKeys: {
      http: "GET /2020-05-31/public-key",
      outputTraits: {
        PublicKeyList: "httpPayload",
      },
    },
    ListRealtimeLogConfigs: {
      http: "GET /2020-05-31/realtime-log-config",
      outputTraits: {
        RealtimeLogConfigs: "httpPayload",
      },
    },
    ListResponseHeadersPolicies: {
      http: "GET /2020-05-31/response-headers-policy",
      outputTraits: {
        ResponseHeadersPolicyList: "httpPayload",
      },
    },
    ListStreamingDistributions: {
      http: "GET /2020-05-31/streaming-distribution",
      outputTraits: {
        StreamingDistributionList: "httpPayload",
      },
    },
    ListTagsForResource: {
      http: "GET /2020-05-31/tagging",
      outputTraits: {
        Tags: "httpPayload",
      },
    },
    ListVpcOrigins: {
      http: "GET /2020-05-31/vpc-origin",
      outputTraits: {
        VpcOriginList: "httpPayload",
      },
    },
    PublishFunction: {
      http: "POST /2020-05-31/function/{Name}/publish",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        FunctionSummary: "httpPayload",
      },
    },
    TagResource: {
      http: "POST /2020-05-31/tagging?Operation=Tag",
      inputTraits: {
        Tags: "httpPayload",
      },
    },
    TestFunction: {
      http: "POST /2020-05-31/function/{Name}/test",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        TestResult: "httpPayload",
      },
    },
    UntagResource: {
      http: "POST /2020-05-31/tagging?Operation=Untag",
      inputTraits: {
        TagKeys: "httpPayload",
      },
    },
    UpdateAnycastIpList: {
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateCachePolicy: {
      http: "PUT /2020-05-31/cache-policy/{Id}",
      inputTraits: {
        CachePolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateCloudFrontOriginAccessIdentity: {
      http: "PUT /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
      inputTraits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateConnectionGroup: {
      http: "PUT /2020-05-31/connection-group/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateContinuousDeploymentPolicy: {
      http: "PUT /2020-05-31/continuous-deployment-policy/{Id}",
      inputTraits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistribution: {
      http: "PUT /2020-05-31/distribution/{Id}/config",
      inputTraits: {
        DistributionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistributionTenant: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistributionWithStagingConfig: {
      http: "PUT /2020-05-31/distribution/{Id}/promote-staging-config",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDomainAssociation: {
      http: "POST /2020-05-31/domain-association",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
    },
    UpdateFieldLevelEncryptionConfig: {
      http: "PUT /2020-05-31/field-level-encryption/{Id}/config",
      inputTraits: {
        FieldLevelEncryptionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateFieldLevelEncryptionProfile: {
      http: "PUT /2020-05-31/field-level-encryption-profile/{Id}/config",
      inputTraits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateFunction: {
      http: "PUT /2020-05-31/function/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        FunctionSummary: "httpPayload",
        ETag: "ETtag",
      },
    },
    UpdateKeyGroup: {
      http: "PUT /2020-05-31/key-group/{Id}",
      inputTraits: {
        KeyGroupConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateKeyValueStore: {
      http: "PUT /2020-05-31/key-value-store/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateOriginAccessControl: {
      http: "PUT /2020-05-31/origin-access-control/{Id}/config",
      inputTraits: {
        OriginAccessControlConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateOriginRequestPolicy: {
      http: "PUT /2020-05-31/origin-request-policy/{Id}",
      inputTraits: {
        OriginRequestPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdatePublicKey: {
      http: "PUT /2020-05-31/public-key/{Id}/config",
      inputTraits: {
        PublicKeyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateRealtimeLogConfig: {
      http: "PUT /2020-05-31/realtime-log-config",
    },
    UpdateResponseHeadersPolicy: {
      http: "PUT /2020-05-31/response-headers-policy/{Id}",
      inputTraits: {
        ResponseHeadersPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateStreamingDistribution: {
      http: "PUT /2020-05-31/streaming-distribution/{Id}/config",
      inputTraits: {
        StreamingDistributionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateVpcOrigin: {
      http: "PUT /2020-05-31/vpc-origin/{Id}",
      inputTraits: {
        VpcOriginEndpointConfig: "httpPayload",
        IfMatch: "If-Match",
      },
      outputTraits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
    },
    VerifyDnsConfiguration: {
      http: "POST /2020-05-31/verify-dns-configuration",
    },
  },
} as const satisfies ServiceMetadata;

export type _CloudFront = _CloudFrontClient;
export interface CloudFront extends _CloudFront {}
export const CloudFront = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestXmlHandler());
  }
} as unknown as typeof _CloudFrontClient;
