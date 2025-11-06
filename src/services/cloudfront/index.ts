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
    AssociateDistributionTenantWebACL: {
      traits: {
        ETag: "ETag",
      },
    },
    AssociateDistributionWebACL: {
      traits: {
        ETag: "ETag",
      },
    },
    CopyDistribution: {
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateAnycastIpList: {
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateCachePolicy: {
      traits: {
        CachePolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateCloudFrontOriginAccessIdentity: {
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateConnectionGroup: {
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateContinuousDeploymentPolicy: {
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateDistribution: {
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateDistributionTenant: {
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    CreateDistributionWithTags: {
      traits: {
        Distribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFieldLevelEncryptionConfig: {
      traits: {
        FieldLevelEncryption: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFieldLevelEncryptionProfile: {
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateFunction: {
      traits: {
        FunctionSummary: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateInvalidation: {
      traits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
    },
    CreateInvalidationForDistributionTenant: {
      traits: {
        Location: "Location",
        Invalidation: "httpPayload",
      },
    },
    CreateKeyGroup: {
      traits: {
        KeyGroup: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateKeyValueStore: {
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
        Location: "Location",
      },
    },
    CreateMonitoringSubscription: {
      traits: {
        MonitoringSubscription: "httpPayload",
      },
    },
    CreateOriginAccessControl: {
      traits: {
        OriginAccessControl: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateOriginRequestPolicy: {
      traits: {
        OriginRequestPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreatePublicKey: {
      traits: {
        PublicKey: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateResponseHeadersPolicy: {
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateStreamingDistribution: {
      traits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateStreamingDistributionWithTags: {
      traits: {
        StreamingDistribution: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    CreateVpcOrigin: {
      traits: {
        VpcOrigin: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
    },
    DeleteVpcOrigin: {
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
    },
    DescribeFunction: {
      traits: {
        FunctionSummary: "httpPayload",
        ETag: "ETag",
      },
    },
    DescribeKeyValueStore: {
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
    },
    DisassociateDistributionTenantWebACL: {
      traits: {
        ETag: "ETag",
      },
    },
    DisassociateDistributionWebACL: {
      traits: {
        ETag: "ETag",
      },
    },
    GetAnycastIpList: {
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCachePolicy: {
      traits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCachePolicyConfig: {
      traits: {
        CachePolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCloudFrontOriginAccessIdentity: {
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
    },
    GetCloudFrontOriginAccessIdentityConfig: {
      traits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetConnectionGroup: {
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetConnectionGroupByRoutingEndpoint: {
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetContinuousDeploymentPolicy: {
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetContinuousDeploymentPolicyConfig: {
      traits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistribution: {
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionConfig: {
      traits: {
        DistributionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionTenant: {
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    GetDistributionTenantByDomain: {
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryption: {
      traits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionConfig: {
      traits: {
        FieldLevelEncryptionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionProfile: {
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFieldLevelEncryptionProfileConfig: {
      traits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetFunction: {
      traits: {
        FunctionCode: "httpPayload",
        ETag: "ETag",
        ContentType: "Content-Type",
      },
    },
    GetInvalidation: {
      traits: {
        Invalidation: "httpPayload",
      },
    },
    GetInvalidationForDistributionTenant: {
      traits: {
        Invalidation: "httpPayload",
      },
    },
    GetKeyGroup: {
      traits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    GetKeyGroupConfig: {
      traits: {
        KeyGroupConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetManagedCertificateDetails: {
      traits: {
        ManagedCertificateDetails: "httpPayload",
      },
    },
    GetMonitoringSubscription: {
      traits: {
        MonitoringSubscription: "httpPayload",
      },
    },
    GetOriginAccessControl: {
      traits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginAccessControlConfig: {
      traits: {
        OriginAccessControlConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginRequestPolicy: {
      traits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetOriginRequestPolicyConfig: {
      traits: {
        OriginRequestPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetPublicKey: {
      traits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
    },
    GetPublicKeyConfig: {
      traits: {
        PublicKeyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetResponseHeadersPolicy: {
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    GetResponseHeadersPolicyConfig: {
      traits: {
        ResponseHeadersPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetStreamingDistribution: {
      traits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
    },
    GetStreamingDistributionConfig: {
      traits: {
        StreamingDistributionConfig: "httpPayload",
        ETag: "ETag",
      },
    },
    GetVpcOrigin: {
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
    },
    ListAnycastIpLists: {
      traits: {
        AnycastIpLists: "httpPayload",
      },
    },
    ListCachePolicies: {
      traits: {
        CachePolicyList: "httpPayload",
      },
    },
    ListCloudFrontOriginAccessIdentities: {
      traits: {
        CloudFrontOriginAccessIdentityList: "httpPayload",
      },
    },
    ListConflictingAliases: {
      traits: {
        ConflictingAliasesList: "httpPayload",
      },
    },
    ListContinuousDeploymentPolicies: {
      traits: {
        ContinuousDeploymentPolicyList: "httpPayload",
      },
    },
    ListDistributions: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByAnycastIpListId: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByCachePolicyId: {
      traits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByConnectionMode: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByKeyGroup: {
      traits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByOriginRequestPolicyId: {
      traits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByOwnedResource: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByRealtimeLogConfig: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListDistributionsByResponseHeadersPolicyId: {
      traits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByVpcOriginId: {
      traits: {
        DistributionIdList: "httpPayload",
      },
    },
    ListDistributionsByWebACLId: {
      traits: {
        DistributionList: "httpPayload",
      },
    },
    ListFieldLevelEncryptionConfigs: {
      traits: {
        FieldLevelEncryptionList: "httpPayload",
      },
    },
    ListFieldLevelEncryptionProfiles: {
      traits: {
        FieldLevelEncryptionProfileList: "httpPayload",
      },
    },
    ListFunctions: {
      traits: {
        FunctionList: "httpPayload",
      },
    },
    ListInvalidations: {
      traits: {
        InvalidationList: "httpPayload",
      },
    },
    ListInvalidationsForDistributionTenant: {
      traits: {
        InvalidationList: "httpPayload",
      },
    },
    ListKeyGroups: {
      traits: {
        KeyGroupList: "httpPayload",
      },
    },
    ListKeyValueStores: {
      traits: {
        KeyValueStoreList: "httpPayload",
      },
    },
    ListOriginAccessControls: {
      traits: {
        OriginAccessControlList: "httpPayload",
      },
    },
    ListOriginRequestPolicies: {
      traits: {
        OriginRequestPolicyList: "httpPayload",
      },
    },
    ListPublicKeys: {
      traits: {
        PublicKeyList: "httpPayload",
      },
    },
    ListRealtimeLogConfigs: {
      traits: {
        RealtimeLogConfigs: "httpPayload",
      },
    },
    ListResponseHeadersPolicies: {
      traits: {
        ResponseHeadersPolicyList: "httpPayload",
      },
    },
    ListStreamingDistributions: {
      traits: {
        StreamingDistributionList: "httpPayload",
      },
    },
    ListTagsForResource: {
      traits: {
        Tags: "httpPayload",
      },
    },
    ListVpcOrigins: {
      traits: {
        VpcOriginList: "httpPayload",
      },
    },
    PublishFunction: {
      traits: {
        FunctionSummary: "httpPayload",
      },
    },
    TestFunction: {
      traits: {
        TestResult: "httpPayload",
      },
    },
    UpdateAnycastIpList: {
      traits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateCachePolicy: {
      traits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateCloudFrontOriginAccessIdentity: {
      traits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateConnectionGroup: {
      traits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateContinuousDeploymentPolicy: {
      traits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistribution: {
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistributionTenant: {
      traits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDistributionWithStagingConfig: {
      traits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateDomainAssociation: {
      traits: {
        ETag: "ETag",
      },
    },
    UpdateFieldLevelEncryptionConfig: {
      traits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateFieldLevelEncryptionProfile: {
      traits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateFunction: {
      traits: {
        FunctionSummary: "httpPayload",
        ETag: "ETtag",
      },
    },
    UpdateKeyGroup: {
      traits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateKeyValueStore: {
      traits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateOriginAccessControl: {
      traits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateOriginRequestPolicy: {
      traits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdatePublicKey: {
      traits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateResponseHeadersPolicy: {
      traits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateStreamingDistribution: {
      traits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
    },
    UpdateVpcOrigin: {
      traits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
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
