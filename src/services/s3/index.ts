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
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    CompleteMultipartUpload: {
      traits: {
        Expiration: "x-amz-expiration",
        ServerSideEncryption: "x-amz-server-side-encryption",
        VersionId: "x-amz-version-id",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        RequestCharged: "x-amz-request-charged",
      },
    },
    CopyObject: {
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
    },
    CreateBucket: {
      traits: {
        Location: "Location",
        BucketArn: "x-amz-bucket-arn",
      },
    },
    CreateMultipartUpload: {
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
    },
    CreateSession: {
      traits: {
        ServerSideEncryption: "x-amz-server-side-encryption",
        SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
        SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
        BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
      },
    },
    DeleteObject: {
      traits: {
        DeleteMarker: "x-amz-delete-marker",
        VersionId: "x-amz-version-id",
        RequestCharged: "x-amz-request-charged",
      },
    },
    DeleteObjects: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    DeleteObjectTagging: {
      traits: {
        VersionId: "x-amz-version-id",
      },
    },
    GetBucketAccelerateConfiguration: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    GetBucketAnalyticsConfiguration: {
      traits: {
        AnalyticsConfiguration: "httpPayload",
      },
    },
    GetBucketEncryption: {
      traits: {
        ServerSideEncryptionConfiguration: "httpPayload",
      },
    },
    GetBucketIntelligentTieringConfiguration: {
      traits: {
        IntelligentTieringConfiguration: "httpPayload",
      },
    },
    GetBucketInventoryConfiguration: {
      traits: {
        InventoryConfiguration: "httpPayload",
      },
    },
    GetBucketLifecycleConfiguration: {
      traits: {
        TransitionDefaultMinimumObjectSize:
          "x-amz-transition-default-minimum-object-size",
      },
    },
    GetBucketMetadataConfiguration: {
      traits: {
        GetBucketMetadataConfigurationResult: "httpPayload",
      },
    },
    GetBucketMetadataTableConfiguration: {
      traits: {
        GetBucketMetadataTableConfigurationResult: "httpPayload",
      },
    },
    GetBucketMetricsConfiguration: {
      traits: {
        MetricsConfiguration: "httpPayload",
      },
    },
    GetBucketOwnershipControls: {
      traits: {
        OwnershipControls: "httpPayload",
      },
    },
    GetBucketPolicy: {
      traits: {
        Policy: "httpPayload",
      },
    },
    GetBucketPolicyStatus: {
      traits: {
        PolicyStatus: "httpPayload",
      },
    },
    GetBucketReplication: {
      traits: {
        ReplicationConfiguration: "httpPayload",
      },
    },
    GetObject: {
      traits: {
        Body: "httpPayload",
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
    },
    GetObjectAcl: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    GetObjectAttributes: {
      traits: {
        DeleteMarker: "x-amz-delete-marker",
        LastModified: "Last-Modified",
        VersionId: "x-amz-version-id",
        RequestCharged: "x-amz-request-charged",
      },
    },
    GetObjectLegalHold: {
      traits: {
        LegalHold: "httpPayload",
      },
    },
    GetObjectLockConfiguration: {
      traits: {
        ObjectLockConfiguration: "httpPayload",
      },
    },
    GetObjectRetention: {
      traits: {
        Retention: "httpPayload",
      },
    },
    GetObjectTagging: {
      traits: {
        VersionId: "x-amz-version-id",
      },
    },
    GetObjectTorrent: {
      traits: {
        Body: "httpPayload",
        RequestCharged: "x-amz-request-charged",
      },
    },
    GetPublicAccessBlock: {
      traits: {
        PublicAccessBlockConfiguration: "httpPayload",
      },
    },
    HeadBucket: {
      traits: {
        BucketArn: "x-amz-bucket-arn",
        BucketLocationType: "x-amz-bucket-location-type",
        BucketLocationName: "x-amz-bucket-location-name",
        BucketRegion: "x-amz-bucket-region",
        AccessPointAlias: "x-amz-access-point-alias",
      },
    },
    HeadObject: {
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
    },
    ListMultipartUploads: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    ListObjects: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    ListObjectsV2: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    ListObjectVersions: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    ListParts: {
      traits: {
        AbortDate: "x-amz-abort-date",
        AbortRuleId: "x-amz-abort-rule-id",
        RequestCharged: "x-amz-request-charged",
      },
    },
    PutBucketLifecycleConfiguration: {
      traits: {
        TransitionDefaultMinimumObjectSize:
          "x-amz-transition-default-minimum-object-size",
      },
    },
    PutObject: {
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
    },
    PutObjectAcl: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    PutObjectLegalHold: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    PutObjectLockConfiguration: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    PutObjectRetention: {
      traits: {
        RequestCharged: "x-amz-request-charged",
      },
    },
    PutObjectTagging: {
      traits: {
        VersionId: "x-amz-version-id",
      },
    },
    RestoreObject: {
      traits: {
        RequestCharged: "x-amz-request-charged",
        RestoreOutputPath: "x-amz-restore-output-path",
      },
    },
    SelectObjectContent: {
      traits: {
        Payload: "httpPayload",
      },
    },
    UploadPart: {
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
    },
    UploadPartCopy: {
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
