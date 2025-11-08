import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { S3 as _S3Client } from "./types.ts";

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
  sdkId: "S3",
  version: "2006-03-01",
  protocol: "restXml",
  sigV4ServiceName: "s3",
  endpointPrefix: "s3",
  operations: {
    AbortMultipartUpload: {
      http: "DELETE /{Bucket}/{Key+}?x-id=AbortMultipartUpload",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        IfMatchInitiatedTime: "x-amz-if-match-initiated-time",
      },
    },
    CompleteMultipartUpload: {
      http: "POST /{Bucket}/{Key+}",
      traits: {
        Expiration: "x-amz-expiration",
        ServerSideEncryption: "x-amz-server-side-encryption",
        VersionId: "x-amz-version-id",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        MultipartUpload: "httpPayload",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        ChecksumType: "x-amz-checksum-type",
        MpuObjectSize: "x-amz-mp-object-size",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        IfMatch: "If-Match",
        IfNoneMatch: "If-None-Match",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
      },
    },
    CopyObject: {
      http: "PUT /{Bucket}/{Key+}?x-id=CopyObject",
      traits: {
        CopyObjectResult: "httpPayload",
        Expiration: "x-amz-expiration",
        CopySourceVersionId: "x-amz-copy-source-version-id",
        VersionId: "x-amz-version-id",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ACL: "x-amz-acl",
        CacheControl: "Cache-Control",
        ChecksumAlgorithm: "x-amz-checksum-algorithm",
        ContentDisposition: "Content-Disposition",
        ContentEncoding: "Content-Encoding",
        ContentLanguage: "Content-Language",
        ContentType: "Content-Type",
        CopySource: "x-amz-copy-source",
        CopySourceIfMatch: "x-amz-copy-source-if-match",
        CopySourceIfModifiedSince: "x-amz-copy-source-if-modified-since",
        CopySourceIfNoneMatch: "x-amz-copy-source-if-none-match",
        CopySourceIfUnmodifiedSince: "x-amz-copy-source-if-unmodified-since",
        Expires: "Expires",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWriteACP: "x-amz-grant-write-acp",
        MetadataDirective: "x-amz-metadata-directive",
        TaggingDirective: "x-amz-tagging-directive",
        ServerSideEncryption: "x-amz-server-side-encryption",
        StorageClass: "x-amz-storage-class",
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        CopySourceSSECustomerAlgorithm:
          "x-amz-copy-source-server-side-encryption-customer-algorithm",
        CopySourceSSECustomerKey:
          "x-amz-copy-source-server-side-encryption-customer-key",
        CopySourceSSECustomerKeyMD5:
          "x-amz-copy-source-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        Tagging: "x-amz-tagging",
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ExpectedSourceBucketOwner: "x-amz-source-expected-bucket-owner",
      },
    },
    CreateBucket: {
      http: "PUT /{Bucket}",
      traits: {
        Location: "Location",
        BucketArn: "x-amz-bucket-arn",
      },
      members: {
        ACL: "x-amz-acl",
        CreateBucketConfiguration: "httpPayload",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWrite: "x-amz-grant-write",
        GrantWriteACP: "x-amz-grant-write-acp",
        ObjectLockEnabledForBucket: "x-amz-bucket-object-lock-enabled",
        ObjectOwnership: "x-amz-object-ownership",
      },
    },
    CreateBucketMetadataConfiguration: {
      http: "POST /{Bucket}?metadataConfiguration",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        MetadataConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    CreateBucketMetadataTableConfiguration: {
      http: "POST /{Bucket}?metadataTable",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        MetadataTableConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    CreateMultipartUpload: {
      http: "POST /{Bucket}/{Key+}?uploads",
      traits: {
        AbortDate: "x-amz-abort-date",
        AbortRuleId: "x-amz-abort-rule-id",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
        ChecksumAlgorithm: "x-amz-checksum-algorithm",
        ChecksumType: "x-amz-checksum-type",
      },
      members: {
        ACL: "x-amz-acl",
        CacheControl: "Cache-Control",
        ContentDisposition: "Content-Disposition",
        ContentEncoding: "Content-Encoding",
        ContentLanguage: "Content-Language",
        ContentType: "Content-Type",
        Expires: "Expires",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWriteACP: "x-amz-grant-write-acp",
        ServerSideEncryption: "x-amz-server-side-encryption",
        StorageClass: "x-amz-storage-class",
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestPayer: "x-amz-request-payer",
        Tagging: "x-amz-tagging",
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ChecksumAlgorithm: "x-amz-checksum-algorithm",
        ChecksumType: "x-amz-checksum-type",
      },
    },
    CreateSession: {
      http: "GET /{Bucket}?session",
      traits: {
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
      },
      members: {
        SessionMode: "x-amz-create-session-mode",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
      },
    },
    DeleteBucket: {
      http: "DELETE /{Bucket}",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketAnalyticsConfiguration: {
      http: "DELETE /{Bucket}?analytics",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketCors: {
      http: "DELETE /{Bucket}?cors",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketEncryption: {
      http: "DELETE /{Bucket}?encryption",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketIntelligentTieringConfiguration: {
      http: "DELETE /{Bucket}?intelligent-tiering",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketInventoryConfiguration: {
      http: "DELETE /{Bucket}?inventory",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketLifecycle: {
      http: "DELETE /{Bucket}?lifecycle",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketMetadataConfiguration: {
      http: "DELETE /{Bucket}?metadataConfiguration",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketMetadataTableConfiguration: {
      http: "DELETE /{Bucket}?metadataTable",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketMetricsConfiguration: {
      http: "DELETE /{Bucket}?metrics",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketOwnershipControls: {
      http: "DELETE /{Bucket}?ownershipControls",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketPolicy: {
      http: "DELETE /{Bucket}?policy",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketReplication: {
      http: "DELETE /{Bucket}?replication",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketTagging: {
      http: "DELETE /{Bucket}?tagging",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteBucketWebsite: {
      http: "DELETE /{Bucket}?website",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeleteObject: {
      http: "DELETE /{Bucket}/{Key+}?x-id=DeleteObject",
      traits: {
        DeleteMarker: "x-amz-delete-marker",
        VersionId: "x-amz-version-id",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        MFA: "x-amz-mfa",
        RequestPayer: "x-amz-request-payer",
        BypassGovernanceRetention: "x-amz-bypass-governance-retention",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        IfMatch: "If-Match",
        IfMatchLastModifiedTime: "x-amz-if-match-last-modified-time",
        IfMatchSize: "x-amz-if-match-size",
      },
    },
    DeleteObjects: {
      http: "POST /{Bucket}?delete",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        Delete: "httpPayload",
        MFA: "x-amz-mfa",
        RequestPayer: "x-amz-request-payer",
        BypassGovernanceRetention: "x-amz-bypass-governance-retention",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
      },
    },
    DeleteObjectTagging: {
      http: "DELETE /{Bucket}/{Key+}?tagging",
      traits: {
        VersionId: "x-amz-version-id",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    DeletePublicAccessBlock: {
      http: "DELETE /{Bucket}?publicAccessBlock",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketAccelerateConfiguration: {
      http: "GET /{Bucket}?accelerate",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        RequestPayer: "x-amz-request-payer",
      },
    },
    GetBucketAcl: {
      http: "GET /{Bucket}?acl",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketAnalyticsConfiguration: {
      http: "GET /{Bucket}?analytics&x-id=GetBucketAnalyticsConfiguration",
      traits: {
        AnalyticsConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketCors: {
      http: "GET /{Bucket}?cors",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketEncryption: {
      http: "GET /{Bucket}?encryption",
      traits: {
        ServerSideEncryptionConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketIntelligentTieringConfiguration: {
      http: "GET /{Bucket}?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration",
      traits: {
        IntelligentTieringConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketInventoryConfiguration: {
      http: "GET /{Bucket}?inventory&x-id=GetBucketInventoryConfiguration",
      traits: {
        InventoryConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketLifecycleConfiguration: {
      http: "GET /{Bucket}?lifecycle",
      traits: {
        TransitionDefaultMinimumObjectSize:
          "x-amz-transition-default-minimum-object-size",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketLocation: {
      http: "GET /{Bucket}?location",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketLogging: {
      http: "GET /{Bucket}?logging",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketMetadataConfiguration: {
      http: "GET /{Bucket}?metadataConfiguration",
      traits: {
        GetBucketMetadataConfigurationResult: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketMetadataTableConfiguration: {
      http: "GET /{Bucket}?metadataTable",
      traits: {
        GetBucketMetadataTableConfigurationResult: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketMetricsConfiguration: {
      http: "GET /{Bucket}?metrics&x-id=GetBucketMetricsConfiguration",
      traits: {
        MetricsConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketNotificationConfiguration: {
      http: "GET /{Bucket}?notification",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketOwnershipControls: {
      http: "GET /{Bucket}?ownershipControls",
      traits: {
        OwnershipControls: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketPolicy: {
      http: "GET /{Bucket}?policy",
      traits: {
        Policy: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketPolicyStatus: {
      http: "GET /{Bucket}?policyStatus",
      traits: {
        PolicyStatus: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketReplication: {
      http: "GET /{Bucket}?replication",
      traits: {
        ReplicationConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketRequestPayment: {
      http: "GET /{Bucket}?requestPayment",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketTagging: {
      http: "GET /{Bucket}?tagging",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketVersioning: {
      http: "GET /{Bucket}?versioning",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetBucketWebsite: {
      http: "GET /{Bucket}?website",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetObject: {
      http: "GET /{Bucket}/{Key+}?x-id=GetObject",
      traits: {
        Body: "httpStreaming",
        DeleteMarker: "x-amz-delete-marker",
        AcceptRanges: "accept-ranges",
        Expiration: "x-amz-expiration",
        Restore: "x-amz-restore",
        LastModified: "Last-Modified",
        ContentLength: "Content-Length",
        ETag: "ETag",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        ChecksumType: "x-amz-checksum-type",
        MissingMeta: "x-amz-missing-meta",
        VersionId: "x-amz-version-id",
        CacheControl: "Cache-Control",
        ContentDisposition: "Content-Disposition",
        ContentEncoding: "Content-Encoding",
        ContentLanguage: "Content-Language",
        ContentRange: "Content-Range",
        ContentType: "Content-Type",
        Expires: "Expires",
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        StorageClass: "x-amz-storage-class",
        RequestCharged: "x-amz-request-charged",
        ReplicationStatus: "x-amz-replication-status",
        PartsCount: "x-amz-mp-parts-count",
        TagCount: "x-amz-tagging-count",
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
      },
      members: {
        IfMatch: "If-Match",
        IfModifiedSince: "If-Modified-Since",
        IfNoneMatch: "If-None-Match",
        IfUnmodifiedSince: "If-Unmodified-Since",
        Range: "Range",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ChecksumMode: "x-amz-checksum-mode",
      },
    },
    GetObjectAcl: {
      http: "GET /{Bucket}/{Key+}?acl",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetObjectAttributes: {
      http: "GET /{Bucket}/{Key+}?attributes",
      traits: {
        DeleteMarker: "x-amz-delete-marker",
        LastModified: "Last-Modified",
        VersionId: "x-amz-version-id",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        MaxParts: "x-amz-max-parts",
        PartNumberMarker: "x-amz-part-number-marker",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ObjectAttributes: "x-amz-object-attributes",
      },
    },
    GetObjectLegalHold: {
      http: "GET /{Bucket}/{Key+}?legal-hold",
      traits: {
        LegalHold: "httpPayload",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetObjectLockConfiguration: {
      http: "GET /{Bucket}?object-lock",
      traits: {
        ObjectLockConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetObjectRetention: {
      http: "GET /{Bucket}/{Key+}?retention",
      traits: {
        Retention: "httpPayload",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetObjectTagging: {
      http: "GET /{Bucket}/{Key+}?tagging",
      traits: {
        VersionId: "x-amz-version-id",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        RequestPayer: "x-amz-request-payer",
      },
    },
    GetObjectTorrent: {
      http: "GET /{Bucket}/{Key+}?torrent",
      traits: {
        Body: "httpStreaming",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    GetPublicAccessBlock: {
      http: "GET /{Bucket}?publicAccessBlock",
      traits: {
        PublicAccessBlockConfiguration: "httpPayload",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    HeadBucket: {
      http: "HEAD /{Bucket}",
      traits: {
        BucketArn: "x-amz-bucket-arn",
        BucketLocationType: "x-amz-bucket-location-type",
        BucketLocationName: "x-amz-bucket-location-name",
        BucketRegion: "x-amz-bucket-region",
        AccessPointAlias: "x-amz-access-point-alias",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    HeadObject: {
      http: "HEAD /{Bucket}/{Key+}",
      traits: {
        DeleteMarker: "x-amz-delete-marker",
        AcceptRanges: "accept-ranges",
        Expiration: "x-amz-expiration",
        Restore: "x-amz-restore",
        ArchiveStatus: "x-amz-archive-status",
        LastModified: "Last-Modified",
        ContentLength: "Content-Length",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        ChecksumType: "x-amz-checksum-type",
        ETag: "ETag",
        MissingMeta: "x-amz-missing-meta",
        VersionId: "x-amz-version-id",
        CacheControl: "Cache-Control",
        ContentDisposition: "Content-Disposition",
        ContentEncoding: "Content-Encoding",
        ContentLanguage: "Content-Language",
        ContentType: "Content-Type",
        ContentRange: "Content-Range",
        Expires: "Expires",
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        StorageClass: "x-amz-storage-class",
        RequestCharged: "x-amz-request-charged",
        ReplicationStatus: "x-amz-replication-status",
        PartsCount: "x-amz-mp-parts-count",
        TagCount: "x-amz-tagging-count",
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
      },
      members: {
        IfMatch: "If-Match",
        IfModifiedSince: "If-Modified-Since",
        IfNoneMatch: "If-None-Match",
        IfUnmodifiedSince: "If-Unmodified-Since",
        Range: "Range",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ChecksumMode: "x-amz-checksum-mode",
      },
    },
    ListBucketAnalyticsConfigurations: {
      http: "GET /{Bucket}?analytics&x-id=ListBucketAnalyticsConfigurations",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    ListBucketIntelligentTieringConfigurations: {
      http: "GET /{Bucket}?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    ListBucketInventoryConfigurations: {
      http: "GET /{Bucket}?inventory&x-id=ListBucketInventoryConfigurations",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    ListBucketMetricsConfigurations: {
      http: "GET /{Bucket}?metrics&x-id=ListBucketMetricsConfigurations",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    ListBuckets: {
      http: "GET /?x-id=ListBuckets",
    },
    ListDirectoryBuckets: {
      http: "GET /?x-id=ListDirectoryBuckets",
    },
    ListMultipartUploads: {
      http: "GET /{Bucket}?uploads",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        RequestPayer: "x-amz-request-payer",
      },
    },
    ListObjects: {
      http: "GET /{Bucket}",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        OptionalObjectAttributes: "x-amz-optional-object-attributes",
      },
    },
    ListObjectsV2: {
      http: "GET /{Bucket}?list-type=2",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        OptionalObjectAttributes: "x-amz-optional-object-attributes",
      },
    },
    ListObjectVersions: {
      http: "GET /{Bucket}?versions",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        RequestPayer: "x-amz-request-payer",
        OptionalObjectAttributes: "x-amz-optional-object-attributes",
      },
    },
    ListParts: {
      http: "GET /{Bucket}/{Key+}?x-id=ListParts",
      traits: {
        AbortDate: "x-amz-abort-date",
        AbortRuleId: "x-amz-abort-rule-id",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
      },
    },
    PutBucketAccelerateConfiguration: {
      http: "PUT /{Bucket}?accelerate",
      members: {
        AccelerateConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
      },
    },
    PutBucketAcl: {
      http: "PUT /{Bucket}?acl",
      members: {
        ACL: "x-amz-acl",
        AccessControlPolicy: "httpPayload",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWrite: "x-amz-grant-write",
        GrantWriteACP: "x-amz-grant-write-acp",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketAnalyticsConfiguration: {
      http: "PUT /{Bucket}?analytics",
      members: {
        AnalyticsConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketCors: {
      http: "PUT /{Bucket}?cors",
      members: {
        CORSConfiguration: "httpPayload",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketEncryption: {
      http: "PUT /{Bucket}?encryption",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ServerSideEncryptionConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketIntelligentTieringConfiguration: {
      http: "PUT /{Bucket}?intelligent-tiering",
      members: {
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        IntelligentTieringConfiguration: "httpPayload",
      },
    },
    PutBucketInventoryConfiguration: {
      http: "PUT /{Bucket}?inventory",
      members: {
        InventoryConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketLifecycleConfiguration: {
      http: "PUT /{Bucket}?lifecycle",
      traits: {
        TransitionDefaultMinimumObjectSize:
          "x-amz-transition-default-minimum-object-size",
      },
      members: {
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        LifecycleConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        TransitionDefaultMinimumObjectSize:
          "x-amz-transition-default-minimum-object-size",
      },
    },
    PutBucketLogging: {
      http: "PUT /{Bucket}?logging",
      members: {
        BucketLoggingStatus: "httpPayload",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketMetricsConfiguration: {
      http: "PUT /{Bucket}?metrics",
      members: {
        MetricsConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketNotificationConfiguration: {
      http: "PUT /{Bucket}?notification",
      members: {
        NotificationConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        SkipDestinationValidation: "x-amz-skip-destination-validation",
      },
    },
    PutBucketOwnershipControls: {
      http: "PUT /{Bucket}?ownershipControls",
      members: {
        ContentMD5: "Content-MD5",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        OwnershipControls: "httpPayload",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
      },
    },
    PutBucketPolicy: {
      http: "PUT /{Bucket}?policy",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ConfirmRemoveSelfBucketAccess:
          "x-amz-confirm-remove-self-bucket-access",
        Policy: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketReplication: {
      http: "PUT /{Bucket}?replication",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ReplicationConfiguration: "httpPayload",
        Token: "x-amz-bucket-object-lock-token",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketRequestPayment: {
      http: "PUT /{Bucket}?requestPayment",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        RequestPaymentConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketTagging: {
      http: "PUT /{Bucket}?tagging",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        Tagging: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketVersioning: {
      http: "PUT /{Bucket}?versioning",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        MFA: "x-amz-mfa",
        VersioningConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutBucketWebsite: {
      http: "PUT /{Bucket}?website",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        WebsiteConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObject: {
      http: "PUT /{Bucket}/{Key+}?x-id=PutObject",
      traits: {
        Expiration: "x-amz-expiration",
        ETag: "ETag",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        ChecksumType: "x-amz-checksum-type",
        ServerSideEncryption: "x-amz-server-side-encryption",
        VersionId: "x-amz-version-id",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        Size: "x-amz-object-size",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ACL: "x-amz-acl",
        Body: "httpStreaming",
        CacheControl: "Cache-Control",
        ContentDisposition: "Content-Disposition",
        ContentEncoding: "Content-Encoding",
        ContentLanguage: "Content-Language",
        ContentLength: "Content-Length",
        ContentMD5: "Content-MD5",
        ContentType: "Content-Type",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        Expires: "Expires",
        IfMatch: "If-Match",
        IfNoneMatch: "If-None-Match",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWriteACP: "x-amz-grant-write-acp",
        WriteOffsetBytes: "x-amz-write-offset-bytes",
        ServerSideEncryption: "x-amz-server-side-encryption",
        StorageClass: "x-amz-storage-class",
        WebsiteRedirectLocation: "x-amz-website-redirect-location",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestPayer: "x-amz-request-payer",
        Tagging: "x-amz-tagging",
        ObjectLockMode: "x-amz-object-lock-mode",
        ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
        ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObjectAcl: {
      http: "PUT /{Bucket}/{Key+}?acl",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ACL: "x-amz-acl",
        AccessControlPolicy: "httpPayload",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        GrantFullControl: "x-amz-grant-full-control",
        GrantRead: "x-amz-grant-read",
        GrantReadACP: "x-amz-grant-read-acp",
        GrantWrite: "x-amz-grant-write",
        GrantWriteACP: "x-amz-grant-write-acp",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObjectLegalHold: {
      http: "PUT /{Bucket}/{Key+}?legal-hold",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        LegalHold: "httpPayload",
        RequestPayer: "x-amz-request-payer",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObjectLockConfiguration: {
      http: "PUT /{Bucket}?object-lock",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        ObjectLockConfiguration: "httpPayload",
        RequestPayer: "x-amz-request-payer",
        Token: "x-amz-bucket-object-lock-token",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObjectRetention: {
      http: "PUT /{Bucket}/{Key+}?retention",
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        Retention: "httpPayload",
        RequestPayer: "x-amz-request-payer",
        BypassGovernanceRetention: "x-amz-bypass-governance-retention",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    PutObjectTagging: {
      http: "PUT /{Bucket}/{Key+}?tagging",
      traits: {
        VersionId: "x-amz-version-id",
      },
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        Tagging: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        RequestPayer: "x-amz-request-payer",
      },
    },
    PutPublicAccessBlock: {
      http: "PUT /{Bucket}?publicAccessBlock",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        PublicAccessBlockConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    RenameObject: {
      http: "PUT /{Bucket}/{Key+}?renameObject",
      members: {
        RenameSource: "x-amz-rename-source",
        DestinationIfMatch: "If-Match",
        DestinationIfNoneMatch: "If-None-Match",
        DestinationIfModifiedSince: "If-Modified-Since",
        DestinationIfUnmodifiedSince: "If-Unmodified-Since",
        SourceIfMatch: "x-amz-rename-source-if-match",
        SourceIfNoneMatch: "x-amz-rename-source-if-none-match",
        SourceIfModifiedSince: "x-amz-rename-source-if-modified-since",
        SourceIfUnmodifiedSince: "x-amz-rename-source-if-unmodified-since",
        ClientToken: "x-amz-client-token",
      },
    },
    RestoreObject: {
      http: "POST /{Bucket}/{Key+}?restore",
      traits: {
        RequestCharged: "x-amz-request-charged",
        RestoreOutputPath: "x-amz-restore-output-path",
      },
      members: {
        RestoreRequest: "httpPayload",
        RequestPayer: "x-amz-request-payer",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    SelectObjectContent: {
      http: "POST /{Bucket}/{Key+}?select&select-type=2",
      traits: {
        Payload: "httpPayload",
      },
      members: {
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    UpdateBucketMetadataInventoryTableConfiguration: {
      http: "PUT /{Bucket}?metadataInventoryTable",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        InventoryTableConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    UpdateBucketMetadataJournalTableConfiguration: {
      http: "PUT /{Bucket}?metadataJournalTable",
      members: {
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        JournalTableConfiguration: "httpPayload",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    UploadPart: {
      http: "PUT /{Bucket}/{Key+}?x-id=UploadPart",
      traits: {
        ServerSideEncryption: "x-amz-server-side-encryption",
        ETag: "ETag",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        Body: "httpStreaming",
        ContentLength: "Content-Length",
        ContentMD5: "Content-MD5",
        ChecksumAlgorithm: "x-amz-sdk-checksum-algorithm",
        ChecksumCRC32: "x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-checksum-sha256",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
      },
    },
    UploadPartCopy: {
      http: "PUT /{Bucket}/{Key+}?x-id=UploadPartCopy",
      traits: {
        CopySourceVersionId: "x-amz-copy-source-version-id",
        CopyPartResult: "httpPayload",
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
      },
      members: {
        CopySource: "x-amz-copy-source",
        CopySourceIfMatch: "x-amz-copy-source-if-match",
        CopySourceIfModifiedSince: "x-amz-copy-source-if-modified-since",
        CopySourceIfNoneMatch: "x-amz-copy-source-if-none-match",
        CopySourceIfUnmodifiedSince: "x-amz-copy-source-if-unmodified-since",
        CopySourceRange: "x-amz-copy-source-range",
        SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
        SSECustomerKey: "x-amz-server-side-encryption-customer-key",
        SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
        CopySourceSSECustomerAlgorithm:
          "x-amz-copy-source-server-side-encryption-customer-algorithm",
        CopySourceSSECustomerKey:
          "x-amz-copy-source-server-side-encryption-customer-key",
        CopySourceSSECustomerKeyMD5:
          "x-amz-copy-source-server-side-encryption-customer-key-MD5",
        RequestPayer: "x-amz-request-payer",
        ExpectedBucketOwner: "x-amz-expected-bucket-owner",
        ExpectedSourceBucketOwner: "x-amz-source-expected-bucket-owner",
      },
    },
    WriteGetObjectResponse: {
      http: "POST /WriteGetObjectResponse",
      members: {
        RequestRoute: "x-amz-request-route",
        RequestToken: "x-amz-request-token",
        Body: "httpStreaming",
        StatusCode: "x-amz-fwd-status",
        ErrorCode: "x-amz-fwd-error-code",
        ErrorMessage: "x-amz-fwd-error-message",
        AcceptRanges: "x-amz-fwd-header-accept-ranges",
        CacheControl: "x-amz-fwd-header-Cache-Control",
        ContentDisposition: "x-amz-fwd-header-Content-Disposition",
        ContentEncoding: "x-amz-fwd-header-Content-Encoding",
        ContentLanguage: "x-amz-fwd-header-Content-Language",
        ContentLength: "Content-Length",
        ContentRange: "x-amz-fwd-header-Content-Range",
        ContentType: "x-amz-fwd-header-Content-Type",
        ChecksumCRC32: "x-amz-fwd-header-x-amz-checksum-crc32",
        ChecksumCRC32C: "x-amz-fwd-header-x-amz-checksum-crc32c",
        ChecksumCRC64NVME: "x-amz-fwd-header-x-amz-checksum-crc64nvme",
        ChecksumSHA1: "x-amz-fwd-header-x-amz-checksum-sha1",
        ChecksumSHA256: "x-amz-fwd-header-x-amz-checksum-sha256",
        DeleteMarker: "x-amz-fwd-header-x-amz-delete-marker",
        ETag: "x-amz-fwd-header-ETag",
        Expires: "x-amz-fwd-header-Expires",
        Expiration: "x-amz-fwd-header-x-amz-expiration",
        LastModified: "x-amz-fwd-header-Last-Modified",
        MissingMeta: "x-amz-fwd-header-x-amz-missing-meta",
        ObjectLockMode: "x-amz-fwd-header-x-amz-object-lock-mode",
        ObjectLockLegalHoldStatus:
          "x-amz-fwd-header-x-amz-object-lock-legal-hold",
        ObjectLockRetainUntilDate:
          "x-amz-fwd-header-x-amz-object-lock-retain-until-date",
        PartsCount: "x-amz-fwd-header-x-amz-mp-parts-count",
        ReplicationStatus: "x-amz-fwd-header-x-amz-replication-status",
        RequestCharged: "x-amz-fwd-header-x-amz-request-charged",
        Restore: "x-amz-fwd-header-x-amz-restore",
        ServerSideEncryption: "x-amz-fwd-header-x-amz-server-side-encryption",
        SSECustomerAlgorithm:
          "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm",
        SSEKMSKeyId:
          "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id",
        SSECustomerKeyMD5:
          "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5",
        StorageClass: "x-amz-fwd-header-x-amz-storage-class",
        TagCount: "x-amz-fwd-header-x-amz-tagging-count",
        VersionId: "x-amz-fwd-header-x-amz-version-id",
        BucketKeyEnabled:
          "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _S3 = _S3Client;
export interface S3 extends _S3 {}
export const S3 = class extends AWSServiceClient {
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
} as unknown as typeof _S3Client;
