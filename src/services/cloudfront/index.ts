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
      traits: {},
      members: {},
    },
    AssociateDistributionTenantWebACL: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}/associate-web-acl",
      traits: {
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    AssociateDistributionWebACL: {
      http: "PUT /2020-05-31/distribution/{Id}/associate-web-acl",
      traits: {
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    CopyDistribution: {
      http: "POST /2020-05-31/distribution/{PrimaryDistributionId}/copy",
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        Staging: "Staging",
        IfMatch: "If-Match",
      },
    },
    CreateAnycastIpList: {
      http: "POST /2020-05-31/anycast-ip-list",
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    CreateCachePolicy: {
      http: "POST /2020-05-31/cache-policy",
      traits: {
        CachePolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        CachePolicyConfig: "httpPayload",
      },
    },
    CreateCloudFrontOriginAccessIdentity: {
      http: "POST /2020-05-31/origin-access-identity/cloudfront",
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
      },
    },
    CreateConnectionGroup: {
      http: "POST /2020-05-31/connection-group",
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    CreateContinuousDeploymentPolicy: {
      http: "POST /2020-05-31/continuous-deployment-policy",
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
      },
    },
    CreateDistribution: {
      http: "POST /2020-05-31/distribution",
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        DistributionConfig: "httpPayload",
      },
    },
    CreateDistributionTenant: {
      http: "POST /2020-05-31/distribution-tenant",
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    CreateDistributionWithTags: {
      http: "POST /2020-05-31/distribution?WithTags",
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        DistributionConfigWithTags: "httpPayload",
      },
    },
    CreateFieldLevelEncryptionConfig: {
      http: "POST /2020-05-31/field-level-encryption",
      traits: {
        FieldLevelEncryption: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        FieldLevelEncryptionConfig: "httpPayload",
      },
    },
    CreateFieldLevelEncryptionProfile: {
      http: "POST /2020-05-31/field-level-encryption-profile",
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
      },
    },
    CreateFunction: {
      http: "POST /2020-05-31/function",
      traits: {
        FunctionSummary: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {},
    },
    CreateInvalidation: {
      http: "POST /2020-05-31/distribution/{DistributionId}/invalidation",
      traits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
      members: {
        InvalidationBatch: "httpPayload",
      },
    },
    CreateInvalidationForDistributionTenant: {
      http: "POST /2020-05-31/distribution-tenant/{Id}/invalidation",
      traits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
      members: {
        InvalidationBatch: "httpPayload",
      },
    },
    CreateKeyGroup: {
      http: "POST /2020-05-31/key-group",
      traits: {
        KeyGroup: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        KeyGroupConfig: "httpPayload",
      },
    },
    CreateKeyValueStore: {
      http: "POST /2020-05-31/key-value-store",
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
        Location: "Location",
      },
      members: {},
    },
    CreateMonitoringSubscription: {
      http: "POST /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      traits: {
        MonitoringSubscription: "httpPayload",
      },
      members: {
        MonitoringSubscription: "httpPayload",
      },
    },
    CreateOriginAccessControl: {
      http: "POST /2020-05-31/origin-access-control",
      traits: {
        OriginAccessControl: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        OriginAccessControlConfig: "httpPayload",
      },
    },
    CreateOriginRequestPolicy: {
      http: "POST /2020-05-31/origin-request-policy",
      traits: {
        OriginRequestPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        OriginRequestPolicyConfig: "httpPayload",
      },
    },
    CreatePublicKey: {
      http: "POST /2020-05-31/public-key",
      traits: {
        PublicKey: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        PublicKeyConfig: "httpPayload",
      },
    },
    CreateRealtimeLogConfig: {
      http: "POST /2020-05-31/realtime-log-config",
      traits: {},
      members: {},
    },
    CreateResponseHeadersPolicy: {
      http: "POST /2020-05-31/response-headers-policy",
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        ResponseHeadersPolicyConfig: "httpPayload",
      },
    },
    CreateStreamingDistribution: {
      http: "POST /2020-05-31/streaming-distribution",
      traits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        StreamingDistributionConfig: "httpPayload",
      },
    },
    CreateStreamingDistributionWithTags: {
      http: "POST /2020-05-31/streaming-distribution?WithTags",
      traits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {
        StreamingDistributionConfigWithTags: "httpPayload",
      },
    },
    CreateVpcOrigin: {
      http: "POST /2020-05-31/vpc-origin",
      traits: {
        VpcOrigin: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      members: {},
    },
    DeleteAnycastIpList: {
      http: "DELETE /2020-05-31/anycast-ip-list/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteCachePolicy: {
      http: "DELETE /2020-05-31/cache-policy/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteCloudFrontOriginAccessIdentity: {
      http: "DELETE /2020-05-31/origin-access-identity/cloudfront/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteConnectionGroup: {
      http: "DELETE /2020-05-31/connection-group/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteContinuousDeploymentPolicy: {
      http: "DELETE /2020-05-31/continuous-deployment-policy/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteDistribution: {
      http: "DELETE /2020-05-31/distribution/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteDistributionTenant: {
      http: "DELETE /2020-05-31/distribution-tenant/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteFieldLevelEncryptionConfig: {
      http: "DELETE /2020-05-31/field-level-encryption/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteFieldLevelEncryptionProfile: {
      http: "DELETE /2020-05-31/field-level-encryption-profile/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteFunction: {
      http: "DELETE /2020-05-31/function/{Name}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteKeyGroup: {
      http: "DELETE /2020-05-31/key-group/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteKeyValueStore: {
      http: "DELETE /2020-05-31/key-value-store/{Name}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteMonitoringSubscription: {
      http: "DELETE /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      traits: {},
      members: {},
    },
    DeleteOriginAccessControl: {
      http: "DELETE /2020-05-31/origin-access-control/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteOriginRequestPolicy: {
      http: "DELETE /2020-05-31/origin-request-policy/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeletePublicKey: {
      http: "DELETE /2020-05-31/public-key/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteRealtimeLogConfig: {
      http: "POST /2020-05-31/delete-realtime-log-config",
      traits: {},
      members: {},
    },
    DeleteResponseHeadersPolicy: {
      http: "DELETE /2020-05-31/response-headers-policy/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteStreamingDistribution: {
      http: "DELETE /2020-05-31/streaming-distribution/{Id}",
      traits: {},
      members: {
        IfMatch: "If-Match",
      },
    },
    DeleteVpcOrigin: {
      http: "DELETE /2020-05-31/vpc-origin/{Id}",
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    DescribeFunction: {
      http: "GET /2020-05-31/function/{Name}/describe",
      traits: {
        FunctionSummary: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    DescribeKeyValueStore: {
      http: "GET /2020-05-31/key-value-store/{Name}",
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    DisassociateDistributionTenantWebACL: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}/disassociate-web-acl",
      traits: {
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    DisassociateDistributionWebACL: {
      http: "PUT /2020-05-31/distribution/{Id}/disassociate-web-acl",
      traits: {
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    GetAnycastIpList: {
      http: "GET /2020-05-31/anycast-ip-list/{Id}",
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetCachePolicy: {
      http: "GET /2020-05-31/cache-policy/{Id}",
      traits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetCachePolicyConfig: {
      http: "GET /2020-05-31/cache-policy/{Id}/config",
      traits: {
        CachePolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetCloudFrontOriginAccessIdentity: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}",
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetCloudFrontOriginAccessIdentityConfig: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
      traits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetConnectionGroup: {
      http: "GET /2020-05-31/connection-group/{Identifier}",
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetConnectionGroupByRoutingEndpoint: {
      http: "GET /2020-05-31/connection-group",
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetContinuousDeploymentPolicy: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}",
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetContinuousDeploymentPolicyConfig: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}/config",
      traits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetDistribution: {
      http: "GET /2020-05-31/distribution/{Id}",
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetDistributionConfig: {
      http: "GET /2020-05-31/distribution/{Id}/config",
      traits: {
        DistributionConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Identifier}",
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetDistributionTenantByDomain: {
      http: "GET /2020-05-31/distribution-tenant",
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetFieldLevelEncryption: {
      http: "GET /2020-05-31/field-level-encryption/{Id}",
      traits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetFieldLevelEncryptionConfig: {
      http: "GET /2020-05-31/field-level-encryption/{Id}/config",
      traits: {
        FieldLevelEncryptionConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetFieldLevelEncryptionProfile: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}",
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetFieldLevelEncryptionProfileConfig: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}/config",
      traits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetFunction: {
      http: "GET /2020-05-31/function/{Name}",
      traits: {
        FunctionCode: "httpPayload",
        ETag: "ETag",
        ContentType: "Content-Type",
      },
      members: {},
    },
    GetInvalidation: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation/{Id}",
      traits: {
        Invalidation: "httpPayload",
      },
      members: {},
    },
    GetInvalidationForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{DistributionTenantId}/invalidation/{Id}",
      traits: {
        Invalidation: "httpPayload",
      },
      members: {},
    },
    GetKeyGroup: {
      http: "GET /2020-05-31/key-group/{Id}",
      traits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetKeyGroupConfig: {
      http: "GET /2020-05-31/key-group/{Id}/config",
      traits: {
        KeyGroupConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetManagedCertificateDetails: {
      http: "GET /2020-05-31/managed-certificate/{Identifier}",
      traits: {
        ManagedCertificateDetails: "httpPayload",
      },
      members: {},
    },
    GetMonitoringSubscription: {
      http: "GET /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      traits: {
        MonitoringSubscription: "httpPayload",
      },
      members: {},
    },
    GetOriginAccessControl: {
      http: "GET /2020-05-31/origin-access-control/{Id}",
      traits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetOriginAccessControlConfig: {
      http: "GET /2020-05-31/origin-access-control/{Id}/config",
      traits: {
        OriginAccessControlConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetOriginRequestPolicy: {
      http: "GET /2020-05-31/origin-request-policy/{Id}",
      traits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetOriginRequestPolicyConfig: {
      http: "GET /2020-05-31/origin-request-policy/{Id}/config",
      traits: {
        OriginRequestPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetPublicKey: {
      http: "GET /2020-05-31/public-key/{Id}",
      traits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetPublicKeyConfig: {
      http: "GET /2020-05-31/public-key/{Id}/config",
      traits: {
        PublicKeyConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetRealtimeLogConfig: {
      http: "POST /2020-05-31/get-realtime-log-config",
      traits: {},
      members: {},
    },
    GetResponseHeadersPolicy: {
      http: "GET /2020-05-31/response-headers-policy/{Id}",
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetResponseHeadersPolicyConfig: {
      http: "GET /2020-05-31/response-headers-policy/{Id}/config",
      traits: {
        ResponseHeadersPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetStreamingDistribution: {
      http: "GET /2020-05-31/streaming-distribution/{Id}",
      traits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetStreamingDistributionConfig: {
      http: "GET /2020-05-31/streaming-distribution/{Id}/config",
      traits: {
        StreamingDistributionConfig: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    GetVpcOrigin: {
      http: "GET /2020-05-31/vpc-origin/{Id}",
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
      members: {},
    },
    ListAnycastIpLists: {
      http: "GET /2020-05-31/anycast-ip-list",
      traits: {
        AnycastIpLists: "httpPayload",
      },
      members: {},
    },
    ListCachePolicies: {
      http: "GET /2020-05-31/cache-policy",
      traits: {
        CachePolicyList: "httpPayload",
      },
      members: {},
    },
    ListCloudFrontOriginAccessIdentities: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront",
      traits: {
        CloudFrontOriginAccessIdentityList: "httpPayload",
      },
      members: {},
    },
    ListConflictingAliases: {
      http: "GET /2020-05-31/conflicting-alias",
      traits: {
        ConflictingAliasesList: "httpPayload",
      },
      members: {},
    },
    ListConnectionGroups: {
      http: "POST /2020-05-31/connection-groups",
      traits: {},
      members: {},
    },
    ListContinuousDeploymentPolicies: {
      http: "GET /2020-05-31/continuous-deployment-policy",
      traits: {
        ContinuousDeploymentPolicyList: "httpPayload",
      },
      members: {},
    },
    ListDistributions: {
      http: "GET /2020-05-31/distribution",
      traits: {
        DistributionList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByAnycastIpListId: {
      http: "GET /2020-05-31/distributionsByAnycastIpListId/{AnycastIpListId}",
      traits: {
        DistributionList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByCachePolicyId: {
      http: "GET /2020-05-31/distributionsByCachePolicyId/{CachePolicyId}",
      traits: {
        DistributionIdList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByConnectionMode: {
      http: "GET /2020-05-31/distributionsByConnectionMode/{ConnectionMode}",
      traits: {
        DistributionList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByKeyGroup: {
      http: "GET /2020-05-31/distributionsByKeyGroupId/{KeyGroupId}",
      traits: {
        DistributionIdList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByOriginRequestPolicyId: {
      http: "GET /2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}",
      traits: {
        DistributionIdList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByRealtimeLogConfig: {
      http: "POST /2020-05-31/distributionsByRealtimeLogConfig",
      traits: {
        DistributionList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByResponseHeadersPolicyId: {
      http: "GET /2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}",
      traits: {
        DistributionIdList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByVpcOriginId: {
      http: "GET /2020-05-31/distributionsByVpcOriginId/{VpcOriginId}",
      traits: {
        DistributionIdList: "httpPayload",
      },
      members: {},
    },
    ListDistributionsByWebACLId: {
      http: "GET /2020-05-31/distributionsByWebACLId/{WebACLId}",
      traits: {
        DistributionList: "httpPayload",
      },
      members: {},
    },
    ListDistributionTenants: {
      http: "POST /2020-05-31/distribution-tenants",
      traits: {},
      members: {},
    },
    ListDistributionTenantsByCustomization: {
      http: "POST /2020-05-31/distribution-tenants-by-customization",
      traits: {},
      members: {},
    },
    ListDomainConflicts: {
      http: "POST /2020-05-31/domain-conflicts",
      traits: {},
      members: {},
    },
    ListFieldLevelEncryptionConfigs: {
      http: "GET /2020-05-31/field-level-encryption",
      traits: {
        FieldLevelEncryptionList: "httpPayload",
      },
      members: {},
    },
    ListFieldLevelEncryptionProfiles: {
      http: "GET /2020-05-31/field-level-encryption-profile",
      traits: {
        FieldLevelEncryptionProfileList: "httpPayload",
      },
      members: {},
    },
    ListFunctions: {
      http: "GET /2020-05-31/function",
      traits: {
        FunctionList: "httpPayload",
      },
      members: {},
    },
    ListInvalidations: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation",
      traits: {
        InvalidationList: "httpPayload",
      },
      members: {},
    },
    ListInvalidationsForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Id}/invalidation",
      traits: {
        InvalidationList: "httpPayload",
      },
      members: {},
    },
    ListKeyGroups: {
      http: "GET /2020-05-31/key-group",
      traits: {
        KeyGroupList: "httpPayload",
      },
      members: {},
    },
    ListKeyValueStores: {
      http: "GET /2020-05-31/key-value-store",
      traits: {
        KeyValueStoreList: "httpPayload",
      },
      members: {},
    },
    ListOriginAccessControls: {
      http: "GET /2020-05-31/origin-access-control",
      traits: {
        OriginAccessControlList: "httpPayload",
      },
      members: {},
    },
    ListOriginRequestPolicies: {
      http: "GET /2020-05-31/origin-request-policy",
      traits: {
        OriginRequestPolicyList: "httpPayload",
      },
      members: {},
    },
    ListPublicKeys: {
      http: "GET /2020-05-31/public-key",
      traits: {
        PublicKeyList: "httpPayload",
      },
      members: {},
    },
    ListRealtimeLogConfigs: {
      http: "GET /2020-05-31/realtime-log-config",
      traits: {
        RealtimeLogConfigs: "httpPayload",
      },
      members: {},
    },
    ListResponseHeadersPolicies: {
      http: "GET /2020-05-31/response-headers-policy",
      traits: {
        ResponseHeadersPolicyList: "httpPayload",
      },
      members: {},
    },
    ListStreamingDistributions: {
      http: "GET /2020-05-31/streaming-distribution",
      traits: {
        StreamingDistributionList: "httpPayload",
      },
      members: {},
    },
    ListTagsForResource: {
      http: "GET /2020-05-31/tagging",
      traits: {
        Tags: "httpPayload",
      },
      members: {},
    },
    ListVpcOrigins: {
      http: "GET /2020-05-31/vpc-origin",
      traits: {
        VpcOriginList: "httpPayload",
      },
      members: {},
    },
    PublishFunction: {
      http: "POST /2020-05-31/function/{Name}/publish",
      traits: {
        FunctionSummary: "httpPayload",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    TagResource: {
      http: "POST /2020-05-31/tagging?Operation=Tag",
      traits: {},
      members: {
        Tags: "httpPayload",
      },
    },
    TestFunction: {
      http: "POST /2020-05-31/function/{Name}/test",
      traits: {
        TestResult: "httpPayload",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UntagResource: {
      http: "POST /2020-05-31/tagging?Operation=Untag",
      traits: {},
      members: {
        TagKeys: "httpPayload",
      },
    },
    UpdateCachePolicy: {
      http: "PUT /2020-05-31/cache-policy/{Id}",
      traits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {
        CachePolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateCloudFrontOriginAccessIdentity: {
      http: "PUT /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
      members: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateConnectionGroup: {
      http: "PUT /2020-05-31/connection-group/{Id}",
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateContinuousDeploymentPolicy: {
      http: "PUT /2020-05-31/continuous-deployment-policy/{Id}",
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateDistribution: {
      http: "PUT /2020-05-31/distribution/{Id}/config",
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
      members: {
        DistributionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateDistributionTenant: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}",
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateDistributionWithStagingConfig: {
      http: "PUT /2020-05-31/distribution/{Id}/promote-staging-config",
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateDomainAssociation: {
      http: "POST /2020-05-31/domain-association",
      traits: {
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateFieldLevelEncryptionConfig: {
      http: "PUT /2020-05-31/field-level-encryption/{Id}/config",
      traits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
      members: {
        FieldLevelEncryptionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateFieldLevelEncryptionProfile: {
      http: "PUT /2020-05-31/field-level-encryption-profile/{Id}/config",
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
      members: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateFunction: {
      http: "PUT /2020-05-31/function/{Name}",
      traits: {
        FunctionSummary: "httpPayload",
        ETag: "ETtag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateKeyGroup: {
      http: "PUT /2020-05-31/key-group/{Id}",
      traits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
      members: {
        KeyGroupConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateKeyValueStore: {
      http: "PUT /2020-05-31/key-value-store/{Name}",
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
      members: {
        IfMatch: "If-Match",
      },
    },
    UpdateOriginAccessControl: {
      http: "PUT /2020-05-31/origin-access-control/{Id}/config",
      traits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
      members: {
        OriginAccessControlConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateOriginRequestPolicy: {
      http: "PUT /2020-05-31/origin-request-policy/{Id}",
      traits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {
        OriginRequestPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdatePublicKey: {
      http: "PUT /2020-05-31/public-key/{Id}/config",
      traits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
      members: {
        PublicKeyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateRealtimeLogConfig: {
      http: "PUT /2020-05-31/realtime-log-config",
      traits: {},
      members: {},
    },
    UpdateResponseHeadersPolicy: {
      http: "PUT /2020-05-31/response-headers-policy/{Id}",
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
      members: {
        ResponseHeadersPolicyConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateStreamingDistribution: {
      http: "PUT /2020-05-31/streaming-distribution/{Id}/config",
      traits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
      members: {
        StreamingDistributionConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    UpdateVpcOrigin: {
      http: "PUT /2020-05-31/vpc-origin/{Id}",
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
      members: {
        VpcOriginEndpointConfig: "httpPayload",
        IfMatch: "If-Match",
      },
    },
    VerifyDnsConfiguration: {
      http: "POST /2020-05-31/verify-dns-configuration",
      traits: {},
      members: {},
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
