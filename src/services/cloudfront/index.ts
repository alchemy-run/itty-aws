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
      errorStatusCodes: {
        400: "TooManyDistributionCNAMEs",
        403: "AccessDenied",
        404: "NoSuchDistribution",
      },
    },
    AssociateDistributionTenantWebACL: {
      http: "PUT /2020-05-31/distribution-tenant/{Id}/associate-web-acl",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        401: "RealtimeLogConfigOwnerMismatch",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "DistributionAlreadyExists",
        412: "PreconditionFailed",
      },
    },
    CreateAnycastIpList: {
      http: "POST /2020-05-31/anycast-ip-list",
      outputTraits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        409: "EntityAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyQueryStringsInCachePolicy",
        403: "AccessDenied",
        409: "CachePolicyAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyCloudFrontOriginAccessIdentities",
        409: "CloudFrontOriginAccessIdentityAlreadyExists",
      },
    },
    CreateConnectionGroup: {
      http: "POST /2020-05-31/connection-group",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "InvalidTagging",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "EntityAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyContinuousDeploymentPolicies",
        403: "AccessDenied",
        409: "StagingDistributionInUse",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        401: "RealtimeLogConfigOwnerMismatch",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "DistributionAlreadyExists",
      },
    },
    CreateDistributionTenant: {
      http: "POST /2020-05-31/distribution-tenant",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "InvalidTagging",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "InvalidAssociation",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        401: "RealtimeLogConfigOwnerMismatch",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "DistributionAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyFieldLevelEncryptionQueryArgProfiles",
        404: "NoSuchFieldLevelEncryptionProfile",
        409: "FieldLevelEncryptionConfigAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyFieldLevelEncryptionProfiles",
        404: "NoSuchPublicKey",
        409: "FieldLevelEncryptionProfileAlreadyExists",
      },
    },
    CreateFunction: {
      http: "POST /2020-05-31/function",
      outputTraits: {
        FunctionSummary: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        409: "FunctionAlreadyExists",
        413: "FunctionSizeLimitExceeded",
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
      errorStatusCodes: {
        400: "TooManyInvalidationsInProgress",
        403: "AccessDenied",
        404: "NoSuchDistribution",
        413: "BatchTooLarge",
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
      errorStatusCodes: {
        400: "TooManyInvalidationsInProgress",
        403: "AccessDenied",
        404: "EntityNotFound",
        413: "BatchTooLarge",
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
      errorStatusCodes: {
        400: "TooManyPublicKeysInKeyGroup",
        409: "KeyGroupAlreadyExists",
      },
    },
    CreateKeyValueStore: {
      http: "POST /2020-05-31/key-value-store",
      outputTraits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
        Location: "Location",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        409: "EntityAlreadyExists",
        413: "EntitySizeLimitExceeded",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "NoSuchDistribution",
        409: "MonitoringSubscriptionAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyOriginAccessControls",
        409: "OriginAccessControlAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyQueryStringsInOriginRequestPolicy",
        403: "AccessDenied",
        409: "OriginRequestPolicyAlreadyExists",
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
      errorStatusCodes: {
        400: "TooManyPublicKeys",
        409: "PublicKeyAlreadyExists",
      },
    },
    CreateRealtimeLogConfig: {
      http: "POST /2020-05-31/realtime-log-config",
      errorStatusCodes: {
        400: "TooManyRealtimeLogConfigs",
        403: "AccessDenied",
        409: "RealtimeLogConfigAlreadyExists",
      },
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
      errorStatusCodes: {
        400: "TooManyResponseHeadersPolicies",
        403: "AccessDenied",
        409: "ResponseHeadersPolicyAlreadyExists",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        403: "AccessDenied",
        409: "StreamingDistributionAlreadyExists",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        403: "AccessDenied",
        409: "StreamingDistributionAlreadyExists",
      },
    },
    CreateVpcOrigin: {
      http: "POST /2020-05-31/vpc-origin",
      outputTraits: {
        VpcOrigin: "httpPayload",
        Location: "Location",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        409: "EntityAlreadyExists",
      },
    },
    DeleteAnycastIpList: {
      http: "DELETE /2020-05-31/anycast-ip-list/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "CannotDeleteEntityWhileInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteCachePolicy: {
      http: "DELETE /2020-05-31/cache-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
        409: "CachePolicyInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteCloudFrontOriginAccessIdentity: {
      http: "DELETE /2020-05-31/origin-access-identity/cloudfront/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchCloudFrontOriginAccessIdentity",
        409: "CloudFrontOriginAccessIdentityInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteConnectionGroup: {
      http: "DELETE /2020-05-31/connection-group/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "ResourceNotDisabled",
        412: "PreconditionFailed",
      },
    },
    DeleteContinuousDeploymentPolicy: {
      http: "DELETE /2020-05-31/continuous-deployment-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchContinuousDeploymentPolicy",
        409: "ContinuousDeploymentPolicyInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteDistribution: {
      http: "DELETE /2020-05-31/distribution/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchDistribution",
        409: "ResourceInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteDistributionTenant: {
      http: "DELETE /2020-05-31/distribution-tenant/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "ResourceNotDisabled",
        412: "PreconditionFailed",
      },
    },
    DeleteFieldLevelEncryptionConfig: {
      http: "DELETE /2020-05-31/field-level-encryption/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionConfig",
        409: "FieldLevelEncryptionConfigInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteFieldLevelEncryptionProfile: {
      http: "DELETE /2020-05-31/field-level-encryption-profile/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionProfile",
        409: "FieldLevelEncryptionProfileInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteFunction: {
      http: "DELETE /2020-05-31/function/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
        409: "FunctionInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteKeyGroup: {
      http: "DELETE /2020-05-31/key-group/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        404: "NoSuchResource",
        409: "ResourceInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteKeyValueStore: {
      http: "DELETE /2020-05-31/key-value-store/{Name}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "CannotDeleteEntityWhileInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteMonitoringSubscription: {
      http: "DELETE /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "NoSuchMonitoringSubscription",
      },
    },
    DeleteOriginAccessControl: {
      http: "DELETE /2020-05-31/origin-access-control/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchOriginAccessControl",
        409: "OriginAccessControlInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteOriginRequestPolicy: {
      http: "DELETE /2020-05-31/origin-request-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
        409: "OriginRequestPolicyInUse",
        412: "PreconditionFailed",
      },
    },
    DeletePublicKey: {
      http: "DELETE /2020-05-31/public-key/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchPublicKey",
        409: "PublicKeyInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteRealtimeLogConfig: {
      http: "POST /2020-05-31/delete-realtime-log-config",
      errorStatusCodes: {
        400: "RealtimeLogConfigInUse",
        403: "AccessDenied",
        404: "NoSuchRealtimeLogConfig",
      },
    },
    DeleteResourcePolicy: {
      http: "POST /2020-05-31/delete-resource-policy",
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
      },
    },
    DeleteResponseHeadersPolicy: {
      http: "DELETE /2020-05-31/response-headers-policy/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "ResponseHeadersPolicyInUse",
        412: "PreconditionFailed",
      },
    },
    DeleteStreamingDistribution: {
      http: "DELETE /2020-05-31/streaming-distribution/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchStreamingDistribution",
        409: "StreamingDistributionNotDisabled",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "CannotDeleteEntityWhileInUse",
        412: "PreconditionFailed",
      },
    },
    DescribeFunction: {
      http: "GET /2020-05-31/function/{Name}/describe",
      outputTraits: {
        FunctionSummary: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
      },
    },
    DescribeKeyValueStore: {
      http: "GET /2020-05-31/key-value-store/{Name}",
      outputTraits: {
        KeyValueStore: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
      },
    },
    GetAnycastIpList: {
      http: "GET /2020-05-31/anycast-ip-list/{Id}",
      outputTraits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetCachePolicy: {
      http: "GET /2020-05-31/cache-policy/{Id}",
      outputTraits: {
        CachePolicy: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
      },
    },
    GetCachePolicyConfig: {
      http: "GET /2020-05-31/cache-policy/{Id}/config",
      outputTraits: {
        CachePolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
      },
    },
    GetCloudFrontOriginAccessIdentity: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}",
      outputTraits: {
        CloudFrontOriginAccessIdentity: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchCloudFrontOriginAccessIdentity",
      },
    },
    GetCloudFrontOriginAccessIdentityConfig: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
      outputTraits: {
        CloudFrontOriginAccessIdentityConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchCloudFrontOriginAccessIdentity",
      },
    },
    GetConnectionGroup: {
      http: "GET /2020-05-31/connection-group/{Identifier}",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetConnectionGroupByRoutingEndpoint: {
      http: "GET /2020-05-31/connection-group",
      outputTraits: {
        ConnectionGroup: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetContinuousDeploymentPolicy: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}",
      outputTraits: {
        ContinuousDeploymentPolicy: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchContinuousDeploymentPolicy",
      },
    },
    GetContinuousDeploymentPolicyConfig: {
      http: "GET /2020-05-31/continuous-deployment-policy/{Id}/config",
      outputTraits: {
        ContinuousDeploymentPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchContinuousDeploymentPolicy",
      },
    },
    GetDistribution: {
      http: "GET /2020-05-31/distribution/{Id}",
      outputTraits: {
        Distribution: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchDistribution",
      },
    },
    GetDistributionConfig: {
      http: "GET /2020-05-31/distribution/{Id}/config",
      outputTraits: {
        DistributionConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchDistribution",
      },
    },
    GetDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Identifier}",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetDistributionTenantByDomain: {
      http: "GET /2020-05-31/distribution-tenant",
      outputTraits: {
        DistributionTenant: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetFieldLevelEncryption: {
      http: "GET /2020-05-31/field-level-encryption/{Id}",
      outputTraits: {
        FieldLevelEncryption: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionConfig",
      },
    },
    GetFieldLevelEncryptionConfig: {
      http: "GET /2020-05-31/field-level-encryption/{Id}/config",
      outputTraits: {
        FieldLevelEncryptionConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionConfig",
      },
    },
    GetFieldLevelEncryptionProfile: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}",
      outputTraits: {
        FieldLevelEncryptionProfile: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionProfile",
      },
    },
    GetFieldLevelEncryptionProfileConfig: {
      http: "GET /2020-05-31/field-level-encryption-profile/{Id}/config",
      outputTraits: {
        FieldLevelEncryptionProfileConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionProfile",
      },
    },
    GetFunction: {
      http: "GET /2020-05-31/function/{Name}",
      outputTraits: {
        FunctionCode: "httpPayload",
        ETag: "ETag",
        ContentType: "Content-Type",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
      },
    },
    GetInvalidation: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation/{Id}",
      outputTraits: {
        Invalidation: "httpPayload",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchInvalidation",
      },
    },
    GetInvalidationForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{DistributionTenantId}/invalidation/{Id}",
      outputTraits: {
        Invalidation: "httpPayload",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchInvalidation",
      },
    },
    GetKeyGroup: {
      http: "GET /2020-05-31/key-group/{Id}",
      outputTraits: {
        KeyGroup: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        404: "NoSuchResource",
      },
    },
    GetKeyGroupConfig: {
      http: "GET /2020-05-31/key-group/{Id}/config",
      outputTraits: {
        KeyGroupConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        404: "NoSuchResource",
      },
    },
    GetManagedCertificateDetails: {
      http: "GET /2020-05-31/managed-certificate/{Identifier}",
      outputTraits: {
        ManagedCertificateDetails: "httpPayload",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetMonitoringSubscription: {
      http: "GET /2020-05-31/distributions/{DistributionId}/monitoring-subscription",
      outputTraits: {
        MonitoringSubscription: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "NoSuchMonitoringSubscription",
      },
    },
    GetOriginAccessControl: {
      http: "GET /2020-05-31/origin-access-control/{Id}",
      outputTraits: {
        OriginAccessControl: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchOriginAccessControl",
      },
    },
    GetOriginAccessControlConfig: {
      http: "GET /2020-05-31/origin-access-control/{Id}/config",
      outputTraits: {
        OriginAccessControlConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchOriginAccessControl",
      },
    },
    GetOriginRequestPolicy: {
      http: "GET /2020-05-31/origin-request-policy/{Id}",
      outputTraits: {
        OriginRequestPolicy: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
      },
    },
    GetOriginRequestPolicyConfig: {
      http: "GET /2020-05-31/origin-request-policy/{Id}/config",
      outputTraits: {
        OriginRequestPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
      },
    },
    GetPublicKey: {
      http: "GET /2020-05-31/public-key/{Id}",
      outputTraits: {
        PublicKey: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchPublicKey",
      },
    },
    GetPublicKeyConfig: {
      http: "GET /2020-05-31/public-key/{Id}/config",
      outputTraits: {
        PublicKeyConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchPublicKey",
      },
    },
    GetRealtimeLogConfig: {
      http: "POST /2020-05-31/get-realtime-log-config",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchRealtimeLogConfig",
      },
    },
    GetResourcePolicy: {
      http: "POST /2020-05-31/get-resource-policy",
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    GetResponseHeadersPolicy: {
      http: "GET /2020-05-31/response-headers-policy/{Id}",
      outputTraits: {
        ResponseHeadersPolicy: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
      },
    },
    GetResponseHeadersPolicyConfig: {
      http: "GET /2020-05-31/response-headers-policy/{Id}/config",
      outputTraits: {
        ResponseHeadersPolicyConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
      },
    },
    GetStreamingDistribution: {
      http: "GET /2020-05-31/streaming-distribution/{Id}",
      outputTraits: {
        StreamingDistribution: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchStreamingDistribution",
      },
    },
    GetStreamingDistributionConfig: {
      http: "GET /2020-05-31/streaming-distribution/{Id}/config",
      outputTraits: {
        StreamingDistributionConfig: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        403: "AccessDenied",
        404: "NoSuchStreamingDistribution",
      },
    },
    GetVpcOrigin: {
      http: "GET /2020-05-31/vpc-origin/{Id}",
      outputTraits: {
        VpcOrigin: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListAnycastIpLists: {
      http: "GET /2020-05-31/anycast-ip-list",
      outputTraits: {
        AnycastIpLists: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListCachePolicies: {
      http: "GET /2020-05-31/cache-policy",
      outputTraits: {
        CachePolicyList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
      },
    },
    ListCloudFrontOriginAccessIdentities: {
      http: "GET /2020-05-31/origin-access-identity/cloudfront",
      outputTraits: {
        CloudFrontOriginAccessIdentityList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListConflictingAliases: {
      http: "GET /2020-05-31/conflicting-alias",
      outputTraits: {
        ConflictingAliasesList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        404: "NoSuchDistribution",
      },
    },
    ListConnectionGroups: {
      http: "POST /2020-05-31/connection-groups",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListContinuousDeploymentPolicies: {
      http: "GET /2020-05-31/continuous-deployment-policy",
      outputTraits: {
        ContinuousDeploymentPolicyList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchContinuousDeploymentPolicy",
      },
    },
    ListDistributions: {
      http: "GET /2020-05-31/distribution",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListDistributionsByAnycastIpListId: {
      http: "GET /2020-05-31/distributionsByAnycastIpListId/{AnycastIpListId}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListDistributionsByCachePolicyId: {
      http: "GET /2020-05-31/distributionsByCachePolicyId/{CachePolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
      },
    },
    ListDistributionsByConnectionMode: {
      http: "GET /2020-05-31/distributionsByConnectionMode/{ConnectionMode}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
      },
    },
    ListDistributionsByKeyGroup: {
      http: "GET /2020-05-31/distributionsByKeyGroupId/{KeyGroupId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        404: "NoSuchResource",
      },
    },
    ListDistributionsByOriginRequestPolicyId: {
      http: "GET /2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
      },
    },
    ListDistributionsByOwnedResource: {
      http: "GET /2020-05-31/distributionsByOwnedResource/{ResourceArn}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListDistributionsByRealtimeLogConfig: {
      http: "POST /2020-05-31/distributionsByRealtimeLogConfig",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListDistributionsByResponseHeadersPolicyId: {
      http: "GET /2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
      },
    },
    ListDistributionsByVpcOriginId: {
      http: "GET /2020-05-31/distributionsByVpcOriginId/{VpcOriginId}",
      outputTraits: {
        DistributionIdList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListDistributionsByWebACLId: {
      http: "GET /2020-05-31/distributionsByWebACLId/{WebACLId}",
      outputTraits: {
        DistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidWebACLId",
      },
    },
    ListDistributionTenants: {
      http: "POST /2020-05-31/distribution-tenants",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListDistributionTenantsByCustomization: {
      http: "POST /2020-05-31/distribution-tenants-by-customization",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListDomainConflicts: {
      http: "POST /2020-05-31/domain-conflicts",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListFieldLevelEncryptionConfigs: {
      http: "GET /2020-05-31/field-level-encryption",
      outputTraits: {
        FieldLevelEncryptionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListFieldLevelEncryptionProfiles: {
      http: "GET /2020-05-31/field-level-encryption-profile",
      outputTraits: {
        FieldLevelEncryptionProfileList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListFunctions: {
      http: "GET /2020-05-31/function",
      outputTraits: {
        FunctionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
      },
    },
    ListInvalidations: {
      http: "GET /2020-05-31/distribution/{DistributionId}/invalidation",
      outputTraits: {
        InvalidationList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchDistribution",
      },
    },
    ListInvalidationsForDistributionTenant: {
      http: "GET /2020-05-31/distribution-tenant/{Id}/invalidation",
      outputTraits: {
        InvalidationList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
      },
    },
    ListKeyGroups: {
      http: "GET /2020-05-31/key-group",
      outputTraits: {
        KeyGroupList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListKeyValueStores: {
      http: "GET /2020-05-31/key-value-store",
      outputTraits: {
        KeyValueStoreList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
      },
    },
    ListOriginAccessControls: {
      http: "GET /2020-05-31/origin-access-control",
      outputTraits: {
        OriginAccessControlList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListOriginRequestPolicies: {
      http: "GET /2020-05-31/origin-request-policy",
      outputTraits: {
        OriginRequestPolicyList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
      },
    },
    ListPublicKeys: {
      http: "GET /2020-05-31/public-key",
      outputTraits: {
        PublicKeyList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListRealtimeLogConfigs: {
      http: "GET /2020-05-31/realtime-log-config",
      outputTraits: {
        RealtimeLogConfigs: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchRealtimeLogConfig",
      },
    },
    ListResponseHeadersPolicies: {
      http: "GET /2020-05-31/response-headers-policy",
      outputTraits: {
        ResponseHeadersPolicyList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
      },
    },
    ListStreamingDistributions: {
      http: "GET /2020-05-31/streaming-distribution",
      outputTraits: {
        StreamingDistributionList: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidArgument",
      },
    },
    ListTagsForResource: {
      http: "GET /2020-05-31/tagging",
      outputTraits: {
        Tags: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidTagging",
        403: "AccessDenied",
        404: "NoSuchResource",
      },
    },
    ListVpcOrigins: {
      http: "GET /2020-05-31/vpc-origin",
      outputTraits: {
        VpcOriginList: "httpPayload",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
        412: "PreconditionFailed",
      },
    },
    PutResourcePolicy: {
      http: "POST /2020-05-31/put-resource-policy",
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
      },
    },
    TagResource: {
      http: "POST /2020-05-31/tagging?Operation=Tag",
      inputTraits: {
        Tags: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidTagging",
        403: "AccessDenied",
        404: "NoSuchResource",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
        500: "TestFunctionFailed",
      },
    },
    UntagResource: {
      http: "POST /2020-05-31/tagging?Operation=Untag",
      inputTraits: {
        TagKeys: "httpPayload",
      },
      errorStatusCodes: {
        400: "InvalidTagging",
        403: "AccessDenied",
        404: "NoSuchResource",
      },
    },
    UpdateAnycastIpList: {
      http: "PUT /2020-05-31/anycast-ip-list/{Id}",
      inputTraits: {
        IfMatch: "If-Match",
      },
      outputTraits: {
        AnycastIpList: "httpPayload",
        ETag: "ETag",
      },
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TooManyQueryStringsInCachePolicy",
        403: "AccessDenied",
        404: "NoSuchCachePolicy",
        409: "CachePolicyAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "MissingBody",
        403: "AccessDenied",
        404: "NoSuchCloudFrontOriginAccessIdentity",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "ResourceInUse",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchContinuousDeploymentPolicy",
        409: "StagingDistributionInUse",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        401: "RealtimeLogConfigOwnerMismatch",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "StagingDistributionInUse",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "InvalidAssociation",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        401: "RealtimeLogConfigOwnerMismatch",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "CNAMEAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TooManyFieldLevelEncryptionQueryArgProfiles",
        403: "AccessDenied",
        404: "NoSuchFieldLevelEncryptionProfile",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TooManyFieldLevelEncryptionFieldPatterns",
        403: "AccessDenied",
        404: "NoSuchPublicKey",
        409: "FieldLevelEncryptionProfileAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        404: "NoSuchFunctionExists",
        412: "PreconditionFailed",
        413: "FunctionSizeLimitExceeded",
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
      errorStatusCodes: {
        400: "TooManyPublicKeysInKeyGroup",
        404: "NoSuchResource",
        409: "KeyGroupAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchOriginAccessControl",
        409: "OriginAccessControlAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TooManyQueryStringsInOriginRequestPolicy",
        403: "AccessDenied",
        404: "NoSuchOriginRequestPolicy",
        409: "OriginRequestPolicyAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "InvalidIfMatchVersion",
        403: "AccessDenied",
        404: "NoSuchPublicKey",
        412: "PreconditionFailed",
      },
    },
    UpdateRealtimeLogConfig: {
      http: "PUT /2020-05-31/realtime-log-config",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "NoSuchRealtimeLogConfig",
      },
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
      errorStatusCodes: {
        400: "TooManyRemoveHeadersInResponseHeadersPolicy",
        403: "AccessDenied",
        404: "NoSuchResponseHeadersPolicy",
        409: "ResponseHeadersPolicyAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "TrustedSignerDoesNotExist",
        403: "AccessDenied",
        404: "NoSuchStreamingDistribution",
        409: "CNAMEAlreadyExists",
        412: "PreconditionFailed",
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
      errorStatusCodes: {
        400: "UnsupportedOperation",
        403: "AccessDenied",
        404: "EntityNotFound",
        409: "EntityAlreadyExists",
        412: "PreconditionFailed",
      },
    },
    VerifyDnsConfiguration: {
      http: "POST /2020-05-31/verify-dns-configuration",
      errorStatusCodes: {
        400: "InvalidArgument",
        403: "AccessDenied",
        404: "EntityNotFound",
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
