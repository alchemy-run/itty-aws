import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { S3 as _S3Client } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "S3",
  version: "2006-03-01",
  protocol: "restXml",
  sigV4ServiceName: "s3",
  endpointPrefix: "s3",
  operations: {
    "AbortMultipartUpload": {
      http: "DELETE /{Bucket}/{Key+}?x-id=AbortMultipartUpload",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "IfMatchInitiatedTime": "x-amz-if-match-initiated-time",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "CompleteMultipartUpload": {
      http: "POST /{Bucket}/{Key+}",
      inputTraits: {
        "MultipartUpload": "httpPayload",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "ChecksumType": "x-amz-checksum-type",
        "MpuObjectSize": "x-amz-mp-object-size",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "IfMatch": "If-Match",
        "IfNoneMatch": "If-None-Match",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
      },
      outputTraits: {
        "Expiration": "x-amz-expiration",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "VersionId": "x-amz-version-id",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "CopyObject": {
      http: "PUT /{Bucket}/{Key+}?x-id=CopyObject",
      inputTraits: {
        "ACL": "x-amz-acl",
        "CacheControl": "Cache-Control",
        "ChecksumAlgorithm": "x-amz-checksum-algorithm",
        "ContentDisposition": "Content-Disposition",
        "ContentEncoding": "Content-Encoding",
        "ContentLanguage": "Content-Language",
        "ContentType": "Content-Type",
        "CopySource": "x-amz-copy-source",
        "CopySourceIfMatch": "x-amz-copy-source-if-match",
        "CopySourceIfModifiedSince": "x-amz-copy-source-if-modified-since",
        "CopySourceIfNoneMatch": "x-amz-copy-source-if-none-match",
        "CopySourceIfUnmodifiedSince": "x-amz-copy-source-if-unmodified-since",
        "Expires": "Expires",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "MetadataDirective": "x-amz-metadata-directive",
        "TaggingDirective": "x-amz-tagging-directive",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "StorageClass": "x-amz-storage-class",
        "WebsiteRedirectLocation": "x-amz-website-redirect-location",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "CopySourceSSECustomerAlgorithm": "x-amz-copy-source-server-side-encryption-customer-algorithm",
        "CopySourceSSECustomerKey": "x-amz-copy-source-server-side-encryption-customer-key",
        "CopySourceSSECustomerKeyMD5": "x-amz-copy-source-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "Tagging": "x-amz-tagging",
        "ObjectLockMode": "x-amz-object-lock-mode",
        "ObjectLockRetainUntilDate": "x-amz-object-lock-retain-until-date",
        "ObjectLockLegalHoldStatus": "x-amz-object-lock-legal-hold",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ExpectedSourceBucketOwner": "x-amz-source-expected-bucket-owner",
      },
      outputTraits: {
        "CopyObjectResult": "httpPayload",
        "Expiration": "x-amz-expiration",
        "CopySourceVersionId": "x-amz-copy-source-version-id",
        "VersionId": "x-amz-version-id",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "CreateBucket": {
      http: "PUT /{Bucket}",
      inputTraits: {
        "ACL": "x-amz-acl",
        "CreateBucketConfiguration": "httpPayload",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWrite": "x-amz-grant-write",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "ObjectLockEnabledForBucket": "x-amz-bucket-object-lock-enabled",
        "ObjectOwnership": "x-amz-object-ownership",
      },
      outputTraits: {
        "Location": "Location",
        "BucketArn": "x-amz-bucket-arn",
      },
    },
    "CreateBucketMetadataConfiguration": {
      http: "POST /{Bucket}?metadataConfiguration",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "MetadataConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "CreateBucketMetadataTableConfiguration": {
      http: "POST /{Bucket}?metadataTable",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "MetadataTableConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "CreateMultipartUpload": {
      http: "POST /{Bucket}/{Key+}?uploads",
      inputTraits: {
        "ACL": "x-amz-acl",
        "CacheControl": "Cache-Control",
        "ContentDisposition": "Content-Disposition",
        "ContentEncoding": "Content-Encoding",
        "ContentLanguage": "Content-Language",
        "ContentType": "Content-Type",
        "Expires": "Expires",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "StorageClass": "x-amz-storage-class",
        "WebsiteRedirectLocation": "x-amz-website-redirect-location",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestPayer": "x-amz-request-payer",
        "Tagging": "x-amz-tagging",
        "ObjectLockMode": "x-amz-object-lock-mode",
        "ObjectLockRetainUntilDate": "x-amz-object-lock-retain-until-date",
        "ObjectLockLegalHoldStatus": "x-amz-object-lock-legal-hold",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ChecksumAlgorithm": "x-amz-checksum-algorithm",
        "ChecksumType": "x-amz-checksum-type",
      },
      outputTraits: {
        "AbortDate": "x-amz-abort-date",
        "AbortRuleId": "x-amz-abort-rule-id",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestCharged": "x-amz-request-charged",
        "ChecksumAlgorithm": "x-amz-checksum-algorithm",
        "ChecksumType": "x-amz-checksum-type",
      },
    },
    "CreateSession": {
      http: "GET /{Bucket}?session",
      inputTraits: {
        "SessionMode": "x-amz-create-session-mode",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
      },
      outputTraits: {
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
      },
    },
    "DeleteBucket": {
      http: "DELETE /{Bucket}",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketAnalyticsConfiguration": {
      http: "DELETE /{Bucket}?analytics",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketCors": {
      http: "DELETE /{Bucket}?cors",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketEncryption": {
      http: "DELETE /{Bucket}?encryption",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketIntelligentTieringConfiguration": {
      http: "DELETE /{Bucket}?intelligent-tiering",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketInventoryConfiguration": {
      http: "DELETE /{Bucket}?inventory",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketLifecycle": {
      http: "DELETE /{Bucket}?lifecycle",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketMetadataConfiguration": {
      http: "DELETE /{Bucket}?metadataConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketMetadataTableConfiguration": {
      http: "DELETE /{Bucket}?metadataTable",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketMetricsConfiguration": {
      http: "DELETE /{Bucket}?metrics",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketOwnershipControls": {
      http: "DELETE /{Bucket}?ownershipControls",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketPolicy": {
      http: "DELETE /{Bucket}?policy",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketReplication": {
      http: "DELETE /{Bucket}?replication",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketTagging": {
      http: "DELETE /{Bucket}?tagging",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteBucketWebsite": {
      http: "DELETE /{Bucket}?website",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "DeleteObject": {
      http: "DELETE /{Bucket}/{Key+}?x-id=DeleteObject",
      inputTraits: {
        "MFA": "x-amz-mfa",
        "RequestPayer": "x-amz-request-payer",
        "BypassGovernanceRetention": "x-amz-bypass-governance-retention",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "IfMatch": "If-Match",
        "IfMatchLastModifiedTime": "x-amz-if-match-last-modified-time",
        "IfMatchSize": "x-amz-if-match-size",
      },
      outputTraits: {
        "DeleteMarker": "x-amz-delete-marker",
        "VersionId": "x-amz-version-id",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "DeleteObjects": {
      http: "POST /{Bucket}?delete",
      inputTraits: {
        "Delete": "httpPayload",
        "MFA": "x-amz-mfa",
        "RequestPayer": "x-amz-request-payer",
        "BypassGovernanceRetention": "x-amz-bypass-governance-retention",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "DeleteObjectTagging": {
      http: "DELETE /{Bucket}/{Key+}?tagging",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "VersionId": "x-amz-version-id",
      },
    },
    "DeletePublicAccessBlock": {
      http: "DELETE /{Bucket}?publicAccessBlock",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketAccelerateConfiguration": {
      http: "GET /{Bucket}?accelerate",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "RequestPayer": "x-amz-request-payer",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "GetBucketAcl": {
      http: "GET /{Bucket}?acl",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketAnalyticsConfiguration": {
      http: "GET /{Bucket}?analytics&x-id=GetBucketAnalyticsConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "AnalyticsConfiguration": "httpPayload",
      },
    },
    "GetBucketCors": {
      http: "GET /{Bucket}?cors",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketEncryption": {
      http: "GET /{Bucket}?encryption",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "ServerSideEncryptionConfiguration": "httpPayload",
      },
    },
    "GetBucketIntelligentTieringConfiguration": {
      http: "GET /{Bucket}?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "IntelligentTieringConfiguration": "httpPayload",
      },
    },
    "GetBucketInventoryConfiguration": {
      http: "GET /{Bucket}?inventory&x-id=GetBucketInventoryConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "InventoryConfiguration": "httpPayload",
      },
    },
    "GetBucketLifecycleConfiguration": {
      http: "GET /{Bucket}?lifecycle",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "TransitionDefaultMinimumObjectSize": "x-amz-transition-default-minimum-object-size",
      },
    },
    "GetBucketLocation": {
      http: "GET /{Bucket}?location",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketLogging": {
      http: "GET /{Bucket}?logging",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketMetadataConfiguration": {
      http: "GET /{Bucket}?metadataConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "GetBucketMetadataConfigurationResult": "httpPayload",
      },
    },
    "GetBucketMetadataTableConfiguration": {
      http: "GET /{Bucket}?metadataTable",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "GetBucketMetadataTableConfigurationResult": "httpPayload",
      },
    },
    "GetBucketMetricsConfiguration": {
      http: "GET /{Bucket}?metrics&x-id=GetBucketMetricsConfiguration",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "MetricsConfiguration": "httpPayload",
      },
    },
    "GetBucketNotificationConfiguration": {
      http: "GET /{Bucket}?notification",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketOwnershipControls": {
      http: "GET /{Bucket}?ownershipControls",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "OwnershipControls": "httpPayload",
      },
    },
    "GetBucketPolicy": {
      http: "GET /{Bucket}?policy",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "Policy": "httpPayload",
      },
    },
    "GetBucketPolicyStatus": {
      http: "GET /{Bucket}?policyStatus",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "PolicyStatus": "httpPayload",
      },
    },
    "GetBucketReplication": {
      http: "GET /{Bucket}?replication",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "ReplicationConfiguration": "httpPayload",
      },
    },
    "GetBucketRequestPayment": {
      http: "GET /{Bucket}?requestPayment",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketTagging": {
      http: "GET /{Bucket}?tagging",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketVersioning": {
      http: "GET /{Bucket}?versioning",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetBucketWebsite": {
      http: "GET /{Bucket}?website",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "GetObject": {
      http: "GET /{Bucket}/{Key+}?x-id=GetObject",
      inputTraits: {
        "IfMatch": "If-Match",
        "IfModifiedSince": "If-Modified-Since",
        "IfNoneMatch": "If-None-Match",
        "IfUnmodifiedSince": "If-Unmodified-Since",
        "Range": "Range",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ChecksumMode": "x-amz-checksum-mode",
      },
      outputTraits: {
        "Body": "httpStreaming",
        "DeleteMarker": "x-amz-delete-marker",
        "AcceptRanges": "accept-ranges",
        "Expiration": "x-amz-expiration",
        "Restore": "x-amz-restore",
        "LastModified": "Last-Modified",
        "ContentLength": "Content-Length",
        "ETag": "ETag",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "ChecksumType": "x-amz-checksum-type",
        "MissingMeta": "x-amz-missing-meta",
        "VersionId": "x-amz-version-id",
        "CacheControl": "Cache-Control",
        "ContentDisposition": "Content-Disposition",
        "ContentEncoding": "Content-Encoding",
        "ContentLanguage": "Content-Language",
        "ContentRange": "Content-Range",
        "ContentType": "Content-Type",
        "Expires": "Expires",
        "WebsiteRedirectLocation": "x-amz-website-redirect-location",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "StorageClass": "x-amz-storage-class",
        "RequestCharged": "x-amz-request-charged",
        "ReplicationStatus": "x-amz-replication-status",
        "PartsCount": "x-amz-mp-parts-count",
        "TagCount": "x-amz-tagging-count",
        "ObjectLockMode": "x-amz-object-lock-mode",
        "ObjectLockRetainUntilDate": "x-amz-object-lock-retain-until-date",
        "ObjectLockLegalHoldStatus": "x-amz-object-lock-legal-hold",
      },
    },
    "GetObjectAcl": {
      http: "GET /{Bucket}/{Key+}?acl",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "GetObjectAttributes": {
      http: "GET /{Bucket}/{Key+}?attributes",
      inputTraits: {
        "MaxParts": "x-amz-max-parts",
        "PartNumberMarker": "x-amz-part-number-marker",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ObjectAttributes": "x-amz-object-attributes",
      },
      outputTraits: {
        "DeleteMarker": "x-amz-delete-marker",
        "LastModified": "Last-Modified",
        "VersionId": "x-amz-version-id",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "GetObjectLegalHold": {
      http: "GET /{Bucket}/{Key+}?legal-hold",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "LegalHold": "httpPayload",
      },
    },
    "GetObjectLockConfiguration": {
      http: "GET /{Bucket}?object-lock",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "ObjectLockConfiguration": "httpPayload",
      },
    },
    "GetObjectRetention": {
      http: "GET /{Bucket}/{Key+}?retention",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "Retention": "httpPayload",
      },
    },
    "GetObjectTagging": {
      http: "GET /{Bucket}/{Key+}?tagging",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "RequestPayer": "x-amz-request-payer",
      },
      outputTraits: {
        "VersionId": "x-amz-version-id",
      },
    },
    "GetObjectTorrent": {
      http: "GET /{Bucket}/{Key+}?torrent",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "Body": "httpStreaming",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "GetPublicAccessBlock": {
      http: "GET /{Bucket}?publicAccessBlock",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "PublicAccessBlockConfiguration": "httpPayload",
      },
    },
    "HeadBucket": {
      http: "HEAD /{Bucket}",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "BucketArn": "x-amz-bucket-arn",
        "BucketLocationType": "x-amz-bucket-location-type",
        "BucketLocationName": "x-amz-bucket-location-name",
        "BucketRegion": "x-amz-bucket-region",
        "AccessPointAlias": "x-amz-access-point-alias",
      },
    },
    "HeadObject": {
      http: "HEAD /{Bucket}/{Key+}",
      inputTraits: {
        "IfMatch": "If-Match",
        "IfModifiedSince": "If-Modified-Since",
        "IfNoneMatch": "If-None-Match",
        "IfUnmodifiedSince": "If-Unmodified-Since",
        "Range": "Range",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ChecksumMode": "x-amz-checksum-mode",
      },
      outputTraits: {
        "DeleteMarker": "x-amz-delete-marker",
        "AcceptRanges": "accept-ranges",
        "Expiration": "x-amz-expiration",
        "Restore": "x-amz-restore",
        "ArchiveStatus": "x-amz-archive-status",
        "LastModified": "Last-Modified",
        "ContentLength": "Content-Length",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "ChecksumType": "x-amz-checksum-type",
        "ETag": "ETag",
        "MissingMeta": "x-amz-missing-meta",
        "VersionId": "x-amz-version-id",
        "CacheControl": "Cache-Control",
        "ContentDisposition": "Content-Disposition",
        "ContentEncoding": "Content-Encoding",
        "ContentLanguage": "Content-Language",
        "ContentType": "Content-Type",
        "ContentRange": "Content-Range",
        "Expires": "Expires",
        "WebsiteRedirectLocation": "x-amz-website-redirect-location",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "StorageClass": "x-amz-storage-class",
        "RequestCharged": "x-amz-request-charged",
        "ReplicationStatus": "x-amz-replication-status",
        "PartsCount": "x-amz-mp-parts-count",
        "TagCount": "x-amz-tagging-count",
        "ObjectLockMode": "x-amz-object-lock-mode",
        "ObjectLockRetainUntilDate": "x-amz-object-lock-retain-until-date",
        "ObjectLockLegalHoldStatus": "x-amz-object-lock-legal-hold",
      },
    },
    "ListBucketAnalyticsConfigurations": {
      http: "GET /{Bucket}?analytics&x-id=ListBucketAnalyticsConfigurations",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "ListBucketIntelligentTieringConfigurations": {
      http: "GET /{Bucket}?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "ListBucketInventoryConfigurations": {
      http: "GET /{Bucket}?inventory&x-id=ListBucketInventoryConfigurations",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "ListBucketMetricsConfigurations": {
      http: "GET /{Bucket}?metrics&x-id=ListBucketMetricsConfigurations",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "ListBuckets": {
      http: "GET /?x-id=ListBuckets",
    },
    "ListDirectoryBuckets": {
      http: "GET /?x-id=ListDirectoryBuckets",
    },
    "ListMultipartUploads": {
      http: "GET /{Bucket}?uploads",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "RequestPayer": "x-amz-request-payer",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "ListObjects": {
      http: "GET /{Bucket}",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "OptionalObjectAttributes": "x-amz-optional-object-attributes",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "ListObjectsV2": {
      http: "GET /{Bucket}?list-type=2",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "OptionalObjectAttributes": "x-amz-optional-object-attributes",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "ListObjectVersions": {
      http: "GET /{Bucket}?versions",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "RequestPayer": "x-amz-request-payer",
        "OptionalObjectAttributes": "x-amz-optional-object-attributes",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "ListParts": {
      http: "GET /{Bucket}/{Key+}?x-id=ListParts",
      inputTraits: {
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
      },
      outputTraits: {
        "AbortDate": "x-amz-abort-date",
        "AbortRuleId": "x-amz-abort-rule-id",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutBucketAccelerateConfiguration": {
      http: "PUT /{Bucket}?accelerate",
      inputTraits: {
        "AccelerateConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
      },
    },
    "PutBucketAcl": {
      http: "PUT /{Bucket}?acl",
      inputTraits: {
        "ACL": "x-amz-acl",
        "AccessControlPolicy": "httpPayload",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWrite": "x-amz-grant-write",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketAnalyticsConfiguration": {
      http: "PUT /{Bucket}?analytics",
      inputTraits: {
        "AnalyticsConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketCors": {
      http: "PUT /{Bucket}?cors",
      inputTraits: {
        "CORSConfiguration": "httpPayload",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketEncryption": {
      http: "PUT /{Bucket}?encryption",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ServerSideEncryptionConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketIntelligentTieringConfiguration": {
      http: "PUT /{Bucket}?intelligent-tiering",
      inputTraits: {
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "IntelligentTieringConfiguration": "httpPayload",
      },
    },
    "PutBucketInventoryConfiguration": {
      http: "PUT /{Bucket}?inventory",
      inputTraits: {
        "InventoryConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketLifecycleConfiguration": {
      http: "PUT /{Bucket}?lifecycle",
      inputTraits: {
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "LifecycleConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "TransitionDefaultMinimumObjectSize": "x-amz-transition-default-minimum-object-size",
      },
      outputTraits: {
        "TransitionDefaultMinimumObjectSize": "x-amz-transition-default-minimum-object-size",
      },
    },
    "PutBucketLogging": {
      http: "PUT /{Bucket}?logging",
      inputTraits: {
        "BucketLoggingStatus": "httpPayload",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketMetricsConfiguration": {
      http: "PUT /{Bucket}?metrics",
      inputTraits: {
        "MetricsConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketNotificationConfiguration": {
      http: "PUT /{Bucket}?notification",
      inputTraits: {
        "NotificationConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "SkipDestinationValidation": "x-amz-skip-destination-validation",
      },
    },
    "PutBucketOwnershipControls": {
      http: "PUT /{Bucket}?ownershipControls",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "OwnershipControls": "httpPayload",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
      },
    },
    "PutBucketPolicy": {
      http: "PUT /{Bucket}?policy",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ConfirmRemoveSelfBucketAccess": "x-amz-confirm-remove-self-bucket-access",
        "Policy": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketReplication": {
      http: "PUT /{Bucket}?replication",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ReplicationConfiguration": "httpPayload",
        "Token": "x-amz-bucket-object-lock-token",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketRequestPayment": {
      http: "PUT /{Bucket}?requestPayment",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "RequestPaymentConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketTagging": {
      http: "PUT /{Bucket}?tagging",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "Tagging": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketVersioning": {
      http: "PUT /{Bucket}?versioning",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "MFA": "x-amz-mfa",
        "VersioningConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutBucketWebsite": {
      http: "PUT /{Bucket}?website",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "WebsiteConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "PutObject": {
      http: "PUT /{Bucket}/{Key+}?x-id=PutObject",
      inputTraits: {
        "ACL": "x-amz-acl",
        "Body": "httpStreaming",
        "CacheControl": "Cache-Control",
        "ContentDisposition": "Content-Disposition",
        "ContentEncoding": "Content-Encoding",
        "ContentLanguage": "Content-Language",
        "ContentLength": "Content-Length",
        "ContentMD5": "Content-MD5",
        "ContentType": "Content-Type",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "Expires": "Expires",
        "IfMatch": "If-Match",
        "IfNoneMatch": "If-None-Match",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "WriteOffsetBytes": "x-amz-write-offset-bytes",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "StorageClass": "x-amz-storage-class",
        "WebsiteRedirectLocation": "x-amz-website-redirect-location",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestPayer": "x-amz-request-payer",
        "Tagging": "x-amz-tagging",
        "ObjectLockMode": "x-amz-object-lock-mode",
        "ObjectLockRetainUntilDate": "x-amz-object-lock-retain-until-date",
        "ObjectLockLegalHoldStatus": "x-amz-object-lock-legal-hold",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "Expiration": "x-amz-expiration",
        "ETag": "ETag",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "ChecksumType": "x-amz-checksum-type",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "VersionId": "x-amz-version-id",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "SSEKMSEncryptionContext": "x-amz-server-side-encryption-context",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "Size": "x-amz-object-size",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutObjectAcl": {
      http: "PUT /{Bucket}/{Key+}?acl",
      inputTraits: {
        "ACL": "x-amz-acl",
        "AccessControlPolicy": "httpPayload",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWrite": "x-amz-grant-write",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutObjectLegalHold": {
      http: "PUT /{Bucket}/{Key+}?legal-hold",
      inputTraits: {
        "LegalHold": "httpPayload",
        "RequestPayer": "x-amz-request-payer",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutObjectLockConfiguration": {
      http: "PUT /{Bucket}?object-lock",
      inputTraits: {
        "ObjectLockConfiguration": "httpPayload",
        "RequestPayer": "x-amz-request-payer",
        "Token": "x-amz-bucket-object-lock-token",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutObjectRetention": {
      http: "PUT /{Bucket}/{Key+}?retention",
      inputTraits: {
        "Retention": "httpPayload",
        "RequestPayer": "x-amz-request-payer",
        "BypassGovernanceRetention": "x-amz-bypass-governance-retention",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "PutObjectTagging": {
      http: "PUT /{Bucket}/{Key+}?tagging",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "Tagging": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "RequestPayer": "x-amz-request-payer",
      },
      outputTraits: {
        "VersionId": "x-amz-version-id",
      },
    },
    "PutPublicAccessBlock": {
      http: "PUT /{Bucket}?publicAccessBlock",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "PublicAccessBlockConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "RenameObject": {
      http: "PUT /{Bucket}/{Key+}?renameObject",
      inputTraits: {
        "RenameSource": "x-amz-rename-source",
        "DestinationIfMatch": "If-Match",
        "DestinationIfNoneMatch": "If-None-Match",
        "DestinationIfModifiedSince": "If-Modified-Since",
        "DestinationIfUnmodifiedSince": "If-Unmodified-Since",
        "SourceIfMatch": "x-amz-rename-source-if-match",
        "SourceIfNoneMatch": "x-amz-rename-source-if-none-match",
        "SourceIfModifiedSince": "x-amz-rename-source-if-modified-since",
        "SourceIfUnmodifiedSince": "x-amz-rename-source-if-unmodified-since",
        "ClientToken": "x-amz-client-token",
      },
    },
    "RestoreObject": {
      http: "POST /{Bucket}/{Key+}?restore",
      inputTraits: {
        "RestoreRequest": "httpPayload",
        "RequestPayer": "x-amz-request-payer",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "RequestCharged": "x-amz-request-charged",
        "RestoreOutputPath": "x-amz-restore-output-path",
      },
    },
    "SelectObjectContent": {
      http: "POST /{Bucket}/{Key+}?select&select-type=2",
      inputTraits: {
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "Payload": "httpPayload",
      },
    },
    "UpdateBucketMetadataInventoryTableConfiguration": {
      http: "PUT /{Bucket}?metadataInventoryTable",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "InventoryTableConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "UpdateBucketMetadataJournalTableConfiguration": {
      http: "PUT /{Bucket}?metadataJournalTable",
      inputTraits: {
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "JournalTableConfiguration": "httpPayload",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
    },
    "UploadPart": {
      http: "PUT /{Bucket}/{Key+}?x-id=UploadPart",
      inputTraits: {
        "Body": "httpStreaming",
        "ContentLength": "Content-Length",
        "ContentMD5": "Content-MD5",
        "ChecksumAlgorithm": "x-amz-sdk-checksum-algorithm",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
      },
      outputTraits: {
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "ETag": "ETag",
        "ChecksumCRC32": "x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-checksum-sha256",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "UploadPartCopy": {
      http: "PUT /{Bucket}/{Key+}?x-id=UploadPartCopy",
      inputTraits: {
        "CopySource": "x-amz-copy-source",
        "CopySourceIfMatch": "x-amz-copy-source-if-match",
        "CopySourceIfModifiedSince": "x-amz-copy-source-if-modified-since",
        "CopySourceIfNoneMatch": "x-amz-copy-source-if-none-match",
        "CopySourceIfUnmodifiedSince": "x-amz-copy-source-if-unmodified-since",
        "CopySourceRange": "x-amz-copy-source-range",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKey": "x-amz-server-side-encryption-customer-key",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "CopySourceSSECustomerAlgorithm": "x-amz-copy-source-server-side-encryption-customer-algorithm",
        "CopySourceSSECustomerKey": "x-amz-copy-source-server-side-encryption-customer-key",
        "CopySourceSSECustomerKeyMD5": "x-amz-copy-source-server-side-encryption-customer-key-MD5",
        "RequestPayer": "x-amz-request-payer",
        "ExpectedBucketOwner": "x-amz-expected-bucket-owner",
        "ExpectedSourceBucketOwner": "x-amz-source-expected-bucket-owner",
      },
      outputTraits: {
        "CopySourceVersionId": "x-amz-copy-source-version-id",
        "CopyPartResult": "httpPayload",
        "ServerSideEncryption": "x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-server-side-encryption-customer-algorithm",
        "SSECustomerKeyMD5": "x-amz-server-side-encryption-customer-key-MD5",
        "SSEKMSKeyId": "x-amz-server-side-encryption-aws-kms-key-id",
        "BucketKeyEnabled": "x-amz-server-side-encryption-bucket-key-enabled",
        "RequestCharged": "x-amz-request-charged",
      },
    },
    "WriteGetObjectResponse": {
      http: "POST /WriteGetObjectResponse",
      inputTraits: {
        "RequestRoute": "x-amz-request-route",
        "RequestToken": "x-amz-request-token",
        "Body": "httpStreaming",
        "StatusCode": "x-amz-fwd-status",
        "ErrorCode": "x-amz-fwd-error-code",
        "ErrorMessage": "x-amz-fwd-error-message",
        "AcceptRanges": "x-amz-fwd-header-accept-ranges",
        "CacheControl": "x-amz-fwd-header-Cache-Control",
        "ContentDisposition": "x-amz-fwd-header-Content-Disposition",
        "ContentEncoding": "x-amz-fwd-header-Content-Encoding",
        "ContentLanguage": "x-amz-fwd-header-Content-Language",
        "ContentLength": "Content-Length",
        "ContentRange": "x-amz-fwd-header-Content-Range",
        "ContentType": "x-amz-fwd-header-Content-Type",
        "ChecksumCRC32": "x-amz-fwd-header-x-amz-checksum-crc32",
        "ChecksumCRC32C": "x-amz-fwd-header-x-amz-checksum-crc32c",
        "ChecksumCRC64NVME": "x-amz-fwd-header-x-amz-checksum-crc64nvme",
        "ChecksumSHA1": "x-amz-fwd-header-x-amz-checksum-sha1",
        "ChecksumSHA256": "x-amz-fwd-header-x-amz-checksum-sha256",
        "DeleteMarker": "x-amz-fwd-header-x-amz-delete-marker",
        "ETag": "x-amz-fwd-header-ETag",
        "Expires": "x-amz-fwd-header-Expires",
        "Expiration": "x-amz-fwd-header-x-amz-expiration",
        "LastModified": "x-amz-fwd-header-Last-Modified",
        "MissingMeta": "x-amz-fwd-header-x-amz-missing-meta",
        "ObjectLockMode": "x-amz-fwd-header-x-amz-object-lock-mode",
        "ObjectLockLegalHoldStatus": "x-amz-fwd-header-x-amz-object-lock-legal-hold",
        "ObjectLockRetainUntilDate": "x-amz-fwd-header-x-amz-object-lock-retain-until-date",
        "PartsCount": "x-amz-fwd-header-x-amz-mp-parts-count",
        "ReplicationStatus": "x-amz-fwd-header-x-amz-replication-status",
        "RequestCharged": "x-amz-fwd-header-x-amz-request-charged",
        "Restore": "x-amz-fwd-header-x-amz-restore",
        "ServerSideEncryption": "x-amz-fwd-header-x-amz-server-side-encryption",
        "SSECustomerAlgorithm": "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm",
        "SSEKMSKeyId": "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id",
        "SSECustomerKeyMD5": "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5",
        "StorageClass": "x-amz-fwd-header-x-amz-storage-class",
        "TagCount": "x-amz-fwd-header-x-amz-tagging-count",
        "VersionId": "x-amz-fwd-header-x-amz-version-id",
        "BucketKeyEnabled": "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled",
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
