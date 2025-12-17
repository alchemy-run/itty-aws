import { Schema } from "effect";
import {
  FormatXMLRequest,
  FormatXMLResponse,
  makeOperation,
  NoopRequest,
  NoopResponse,
} from "../client";
import {
  Operation,
  Path,
  Header,
  StreamBody,
  Body,
  Error,
} from "../schema-helpers";

export const AbortMultipartUpload = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=AbortMultipartUpload",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "AbortMultipartUpload",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        UploadId: Schema.String,
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        IfMatchInitiatedTime: Schema.optional(
          Header("x-amz-if-match-initiated-time", Schema.Date),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("NoSuchUpload", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CompleteMultipartUpload = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CompleteMultipartUpload",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        MultipartUpload: Schema.optional(
          Body(
            "CompleteMultipartUpload",
            Schema.Struct({
              Parts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ETag: Schema.optional(Schema.String),
                    ChecksumCRC32: Schema.optional(Schema.String),
                    ChecksumCRC32C: Schema.optional(Schema.String),
                    ChecksumCRC64NVME: Schema.optional(Schema.String),
                    ChecksumSHA1: Schema.optional(Schema.String),
                    ChecksumSHA256: Schema.optional(Schema.String),
                    PartNumber: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
        UploadId: Schema.String,
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
        MpuObjectSize: Schema.optional(
          Header("x-amz-mp-object-size", Schema.Number),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        IfMatch: Schema.optional(Header("If-Match")),
        IfNoneMatch: Schema.optional(Header("If-None-Match")),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
      }),
      Schema.Struct({
        Location: Schema.optional(Schema.String),
        Bucket: Schema.optional(Schema.String),
        Key: Schema.optional(Schema.String),
        Expiration: Schema.optional(Header("x-amz-expiration")),
        ETag: Schema.optional(Schema.String),
        ChecksumCRC32: Schema.optional(Schema.String),
        ChecksumCRC32C: Schema.optional(Schema.String),
        ChecksumCRC64NVME: Schema.optional(Schema.String),
        ChecksumSHA1: Schema.optional(Schema.String),
        ChecksumSHA256: Schema.optional(Schema.String),
        ChecksumType: Schema.optional(Schema.String),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CopyObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=CopyObject",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CopyObject",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        Bucket: Path("Bucket", Schema.String),
        CacheControl: Schema.optional(Header("Cache-Control")),
        ChecksumAlgorithm: Schema.optional(Header("x-amz-checksum-algorithm")),
        ContentDisposition: Schema.optional(Header("Content-Disposition")),
        ContentEncoding: Schema.optional(Header("Content-Encoding")),
        ContentLanguage: Schema.optional(Header("Content-Language")),
        ContentType: Schema.optional(Header("Content-Type")),
        CopySource: Header("x-amz-copy-source"),
        CopySourceIfMatch: Schema.optional(
          Header("x-amz-copy-source-if-match"),
        ),
        CopySourceIfModifiedSince: Schema.optional(
          Header("x-amz-copy-source-if-modified-since", Schema.Date),
        ),
        CopySourceIfNoneMatch: Schema.optional(
          Header("x-amz-copy-source-if-none-match"),
        ),
        CopySourceIfUnmodifiedSince: Schema.optional(
          Header("x-amz-copy-source-if-unmodified-since", Schema.Date),
        ),
        Expires: Schema.optional(Header("Expires")),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        IfMatch: Schema.optional(Header("If-Match")),
        IfNoneMatch: Schema.optional(Header("If-None-Match")),
        Key: Path("Key", Schema.String),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        MetadataDirective: Schema.optional(Header("x-amz-metadata-directive")),
        TaggingDirective: Schema.optional(Header("x-amz-tagging-directive")),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        StorageClass: Schema.optional(Header("x-amz-storage-class")),
        WebsiteRedirectLocation: Schema.optional(
          Header("x-amz-website-redirect-location"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        CopySourceSSECustomerAlgorithm: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-algorithm"),
        ),
        CopySourceSSECustomerKey: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-key"),
        ),
        CopySourceSSECustomerKeyMD5: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        Tagging: Schema.optional(Header("x-amz-tagging")),
        ObjectLockMode: Schema.optional(Header("x-amz-object-lock-mode")),
        ObjectLockRetainUntilDate: Schema.optional(
          Header("x-amz-object-lock-retain-until-date", Schema.Date),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-object-lock-legal-hold"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ExpectedSourceBucketOwner: Schema.optional(
          Header("x-amz-source-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        CopyObjectResult: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              ETag: Schema.optional(Schema.String),
              LastModified: Schema.optional(Schema.Date),
              ChecksumType: Schema.optional(Schema.String),
              ChecksumCRC32: Schema.optional(Schema.String),
              ChecksumCRC32C: Schema.optional(Schema.String),
              ChecksumCRC64NVME: Schema.optional(Schema.String),
              ChecksumSHA1: Schema.optional(Schema.String),
              ChecksumSHA256: Schema.optional(Schema.String),
            }),
          ),
        ),
        Expiration: Schema.optional(Header("x-amz-expiration")),
        CopySourceVersionId: Schema.optional(
          Header("x-amz-copy-source-version-id"),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("ObjectNotInActiveTierError", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CreateBucket = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CreateBucket",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        Bucket: Path("Bucket", Schema.String),
        CreateBucketConfiguration: Schema.optional(
          Body(
            "CreateBucketConfiguration",
            Schema.Struct({
              LocationConstraint: Schema.optional(Schema.String),
              Location: Schema.optional(
                Schema.Struct({
                  Type: Schema.optional(Schema.String),
                  Name: Schema.optional(Schema.String),
                }),
              ),
              Bucket: Schema.optional(
                Schema.Struct({
                  DataRedundancy: Schema.optional(Schema.String),
                  Type: Schema.optional(Schema.String),
                }),
              ),
              Tags: Schema.optional(
                Schema.Array(
                  Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                ),
              ),
            }),
          ),
        ),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWrite: Schema.optional(Header("x-amz-grant-write")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        ObjectLockEnabledForBucket: Schema.optional(
          Header("x-amz-bucket-object-lock-enabled", Schema.Boolean),
        ),
        ObjectOwnership: Schema.optional(Header("x-amz-object-ownership")),
      }),
      Schema.Struct({
        Location: Schema.optional(Header("Location")),
        BucketArn: Schema.optional(Header("x-amz-bucket-arn")),
      }),
      Schema.Union(
        Error("BucketAlreadyExists", Schema.Struct({})),
        Error("BucketAlreadyOwnedByYou", Schema.Struct({})),
      ),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CreateBucketMetadataConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metadataConfiguration",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CreateBucketMetadataConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        MetadataConfiguration: Body(
          "MetadataConfiguration",
          Schema.Struct({
            JournalTableConfiguration: Schema.Struct({
              RecordExpiration: Schema.Struct({
                Expiration: Schema.String,
                Days: Schema.optional(Schema.Number),
              }),
              EncryptionConfiguration: Schema.optional(
                Schema.Struct({
                  SseAlgorithm: Schema.String,
                  KmsKeyArn: Schema.optional(Schema.String),
                }),
              ),
            }),
            InventoryTableConfiguration: Schema.optional(
              Schema.Struct({
                ConfigurationState: Schema.String,
                EncryptionConfiguration: Schema.optional(
                  Schema.Struct({
                    SseAlgorithm: Schema.String,
                    KmsKeyArn: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CreateBucketMetadataTableConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?metadataTable",
          method: "POST",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "CreateBucketMetadataTableConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          ContentMD5: Schema.optional(Header("Content-MD5")),
          ChecksumAlgorithm: Schema.optional(
            Header("x-amz-sdk-checksum-algorithm"),
          ),
          MetadataTableConfiguration: Body(
            "MetadataTableConfiguration",
            Schema.Struct({
              S3TablesDestination: Schema.Struct({
                TableBucketArn: Schema.String,
                TableName: Schema.String,
              }),
            }),
          ),
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const CreateMultipartUpload = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?uploads",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CreateMultipartUpload",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        Bucket: Path("Bucket", Schema.String),
        CacheControl: Schema.optional(Header("Cache-Control")),
        ContentDisposition: Schema.optional(Header("Content-Disposition")),
        ContentEncoding: Schema.optional(Header("Content-Encoding")),
        ContentLanguage: Schema.optional(Header("Content-Language")),
        ContentType: Schema.optional(Header("Content-Type")),
        Expires: Schema.optional(Header("Expires")),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        Key: Path("Key", Schema.String),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        StorageClass: Schema.optional(Header("x-amz-storage-class")),
        WebsiteRedirectLocation: Schema.optional(
          Header("x-amz-website-redirect-location"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        Tagging: Schema.optional(Header("x-amz-tagging")),
        ObjectLockMode: Schema.optional(Header("x-amz-object-lock-mode")),
        ObjectLockRetainUntilDate: Schema.optional(
          Header("x-amz-object-lock-retain-until-date", Schema.Date),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-object-lock-legal-hold"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ChecksumAlgorithm: Schema.optional(Header("x-amz-checksum-algorithm")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
      }),
      Schema.Struct({
        AbortDate: Schema.optional(Header("x-amz-abort-date", Schema.Date)),
        AbortRuleId: Schema.optional(Header("x-amz-abort-rule-id")),
        Bucket: Schema.optional(Schema.String),
        Key: Schema.optional(Schema.String),
        UploadId: Schema.optional(Schema.String),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        ChecksumAlgorithm: Schema.optional(Header("x-amz-checksum-algorithm")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const CreateSession = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?session",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "CreateSession",
      },
      Schema.Struct({
        SessionMode: Schema.optional(Header("x-amz-create-session-mode")),
        Bucket: Path("Bucket", Schema.String),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
      }),
      Schema.Struct({
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        Credentials: Schema.Struct({
          AccessKeyId: Schema.String,
          SecretAccessKey: Schema.String,
          SessionToken: Schema.String,
          Expiration: Schema.Date,
        }),
      }),
      Schema.Union(Error("NoSuchBucket", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucket = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucket",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketAnalyticsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?analytics",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketAnalyticsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketCors = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?cors",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketCors",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketEncryption = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?encryption",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketEncryption",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketIntelligentTieringConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?intelligent-tiering",
          method: "DELETE",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "DeleteBucketIntelligentTieringConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          Id: Schema.String,
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const DeleteBucketInventoryConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?inventory",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketInventoryConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketLifecycle = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?lifecycle",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketLifecycle",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketMetadataConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metadataConfiguration",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketMetadataConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketMetadataTableConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?metadataTable",
          method: "DELETE",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "DeleteBucketMetadataTableConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const DeleteBucketMetricsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metrics",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketMetricsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketOwnershipControls = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?ownershipControls",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketOwnershipControls",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketPolicy = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?policy",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketPolicy",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketReplication = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?replication",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketReplication",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?tagging",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteBucketWebsite = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?website",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteBucketWebsite",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=DeleteObject",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteObject",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        MFA: Schema.optional(Header("x-amz-mfa")),
        VersionId: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        BypassGovernanceRetention: Schema.optional(
          Header("x-amz-bypass-governance-retention", Schema.Boolean),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        IfMatch: Schema.optional(Header("If-Match")),
        IfMatchLastModifiedTime: Schema.optional(
          Header("x-amz-if-match-last-modified-time", Schema.Date),
        ),
        IfMatchSize: Schema.optional(
          Header("x-amz-if-match-size", Schema.Number),
        ),
      }),
      Schema.Struct({
        DeleteMarker: Schema.optional(
          Header("x-amz-delete-marker", Schema.Boolean),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteObjects = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?delete",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteObjects",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Delete: Body(
          "Delete",
          Schema.Struct({
            Objects: Schema.Array(
              Schema.Struct({
                Key: Schema.String,
                VersionId: Schema.optional(Schema.String),
                ETag: Schema.optional(Schema.String),
                LastModifiedTime: Schema.optional(Schema.Date),
                Size: Schema.optional(Schema.Number),
              }),
            ),
            Quiet: Schema.optional(Schema.Boolean),
          }),
        ),
        MFA: Schema.optional(Header("x-amz-mfa")),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        BypassGovernanceRetention: Schema.optional(
          Header("x-amz-bypass-governance-retention", Schema.Boolean),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
      }),
      Schema.Struct({
        Deleted: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Key: Schema.optional(Schema.String),
              VersionId: Schema.optional(Schema.String),
              DeleteMarker: Schema.optional(Schema.Boolean),
              DeleteMarkerVersionId: Schema.optional(Schema.String),
            }),
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        Errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Key: Schema.optional(Schema.String),
              VersionId: Schema.optional(Schema.String),
              Code: Schema.optional(Schema.String),
              Message: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeleteObjectTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?tagging",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeleteObjectTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({ VersionId: Schema.optional(Header("x-amz-version-id")) }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const DeletePublicAccessBlock = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?publicAccessBlock",
        method: "DELETE",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "DeletePublicAccessBlock",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketAccelerateConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?accelerate",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketAccelerateConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
      }),
      Schema.Struct({
        Status: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketAcl = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?acl",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketAcl",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Owner: Schema.optional(
          Schema.Struct({
            DisplayName: Schema.optional(Schema.String),
            ID: Schema.optional(Schema.String),
          }),
        ),
        Grants: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Grantee: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  EmailAddress: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                  URI: Schema.optional(Schema.String),
                  Type: Schema.String,
                }),
              ),
              Permission: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketAnalyticsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?analytics&x-id=GetBucketAnalyticsConfiguration",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketAnalyticsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        AnalyticsConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Id: Schema.String,
              Filter: Schema.optional(
                Schema.Union(
                  Schema.String,
                  Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tags: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              StorageClassAnalysis: Schema.Struct({
                DataExport: Schema.optional(
                  Schema.Struct({
                    OutputSchemaVersion: Schema.String,
                    Destination: Schema.Struct({
                      S3BucketDestination: Schema.Struct({
                        Format: Schema.String,
                        BucketAccountId: Schema.optional(Schema.String),
                        Bucket: Schema.String,
                        Prefix: Schema.optional(Schema.String),
                      }),
                    }),
                  }),
                ),
              }),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketCors = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?cors",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketCors",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        CORSRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ID: Schema.optional(Schema.String),
              AllowedHeaders: Schema.optional(Schema.Array(Schema.String)),
              AllowedMethods: Schema.Array(Schema.String),
              AllowedOrigins: Schema.Array(Schema.String),
              ExposeHeaders: Schema.optional(Schema.Array(Schema.String)),
              MaxAgeSeconds: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketEncryption = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?encryption",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketEncryption",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        ServerSideEncryptionConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Rules: Schema.Array(
                Schema.Struct({
                  ApplyServerSideEncryptionByDefault: Schema.optional(
                    Schema.Struct({
                      SSEAlgorithm: Schema.String,
                      KMSMasterKeyID: Schema.optional(Schema.String),
                    }),
                  ),
                  BucketKeyEnabled: Schema.optional(Schema.Boolean),
                }),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketIntelligentTieringConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration",
          method: "GET",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "GetBucketIntelligentTieringConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          Id: Schema.String,
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({
          IntelligentTieringConfiguration: Schema.optional(
            Body(
              "undefined",
              Schema.Struct({
                Id: Schema.String,
                Filter: Schema.optional(
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tag: Schema.optional(
                      Schema.Struct({
                        Key: Schema.String,
                        Value: Schema.String,
                      }),
                    ),
                    And: Schema.optional(
                      Schema.Struct({
                        Prefix: Schema.optional(Schema.String),
                        Tags: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              Key: Schema.String,
                              Value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
                Status: Schema.String,
                Tierings: Schema.Array(
                  Schema.Struct({
                    Days: Schema.Number,
                    AccessTier: Schema.String,
                  }),
                ),
              }),
            ),
          ),
        }),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const GetBucketInventoryConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?inventory&x-id=GetBucketInventoryConfiguration",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketInventoryConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        InventoryConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Destination: Schema.Struct({
                S3BucketDestination: Schema.Struct({
                  AccountId: Schema.optional(Schema.String),
                  Bucket: Schema.String,
                  Format: Schema.String,
                  Prefix: Schema.optional(Schema.String),
                  Encryption: Schema.optional(
                    Schema.Struct({
                      SSES3: Schema.optional(Schema.Struct({})),
                      SSEKMS: Schema.optional(
                        Schema.Struct({ KeyId: Schema.String }),
                      ),
                    }),
                  ),
                }),
              }),
              IsEnabled: Schema.Boolean,
              Filter: Schema.optional(Schema.Struct({ Prefix: Schema.String })),
              Id: Schema.String,
              IncludedObjectVersions: Schema.String,
              OptionalFields: Schema.optional(Schema.Array(Schema.String)),
              Schedule: Schema.Struct({ Frequency: Schema.String }),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketLifecycleConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?lifecycle",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketLifecycleConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Expiration: Schema.optional(
                Schema.Struct({
                  Date: Schema.optional(Schema.Date),
                  Days: Schema.optional(Schema.Number),
                  ExpiredObjectDeleteMarker: Schema.optional(Schema.Boolean),
                }),
              ),
              ID: Schema.optional(Schema.String),
              Prefix: Schema.optional(Schema.String),
              Filter: Schema.optional(
                Schema.Struct({
                  Prefix: Schema.optional(Schema.String),
                  Tag: Schema.optional(
                    Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  ),
                  ObjectSizeGreaterThan: Schema.optional(Schema.Number),
                  ObjectSizeLessThan: Schema.optional(Schema.Number),
                  And: Schema.optional(
                    Schema.Struct({
                      Prefix: Schema.optional(Schema.String),
                      Tags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Key: Schema.String,
                            Value: Schema.String,
                          }),
                        ),
                      ),
                      ObjectSizeGreaterThan: Schema.optional(Schema.Number),
                      ObjectSizeLessThan: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
              Status: Schema.String,
              Transitions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    Date: Schema.optional(Schema.Date),
                    Days: Schema.optional(Schema.Number),
                    StorageClass: Schema.optional(Schema.String),
                  }),
                ),
              ),
              NoncurrentVersionTransitions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    NoncurrentDays: Schema.optional(Schema.Number),
                    StorageClass: Schema.optional(Schema.String),
                    NewerNoncurrentVersions: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              NoncurrentVersionExpiration: Schema.optional(
                Schema.Struct({
                  NoncurrentDays: Schema.optional(Schema.Number),
                  NewerNoncurrentVersions: Schema.optional(Schema.Number),
                }),
              ),
              AbortIncompleteMultipartUpload: Schema.optional(
                Schema.Struct({
                  DaysAfterInitiation: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        TransitionDefaultMinimumObjectSize: Schema.optional(
          Header("x-amz-transition-default-minimum-object-size"),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketLocation = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?location",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketLocation",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({ LocationConstraint: Schema.optional(Schema.String) }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketLogging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?logging",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketLogging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        LoggingEnabled: Schema.optional(
          Schema.Struct({
            TargetBucket: Schema.String,
            TargetGrants: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  Grantee: Schema.optional(
                    Schema.Struct({
                      DisplayName: Schema.optional(Schema.String),
                      EmailAddress: Schema.optional(Schema.String),
                      ID: Schema.optional(Schema.String),
                      URI: Schema.optional(Schema.String),
                      Type: Schema.String,
                    }),
                  ),
                  Permission: Schema.optional(Schema.String),
                }),
              ),
            ),
            TargetPrefix: Schema.String,
            TargetObjectKeyFormat: Schema.optional(
              Schema.Struct({
                SimplePrefix: Schema.optional(Schema.Struct({})),
                PartitionedPrefix: Schema.optional(
                  Schema.Struct({
                    PartitionDateSource: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketMetadataConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metadataConfiguration",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketMetadataConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        GetBucketMetadataConfigurationResult: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              MetadataConfigurationResult: Schema.Struct({
                DestinationResult: Schema.Struct({
                  TableBucketType: Schema.optional(Schema.String),
                  TableBucketArn: Schema.optional(Schema.String),
                  TableNamespace: Schema.optional(Schema.String),
                }),
                JournalTableConfigurationResult: Schema.optional(
                  Schema.Struct({
                    TableStatus: Schema.String,
                    Error: Schema.optional(
                      Schema.Struct({
                        ErrorCode: Schema.optional(Schema.String),
                        ErrorMessage: Schema.optional(Schema.String),
                      }),
                    ),
                    TableName: Schema.String,
                    TableArn: Schema.optional(Schema.String),
                    RecordExpiration: Schema.Struct({
                      Expiration: Schema.String,
                      Days: Schema.optional(Schema.Number),
                    }),
                  }),
                ),
                InventoryTableConfigurationResult: Schema.optional(
                  Schema.Struct({
                    ConfigurationState: Schema.String,
                    TableStatus: Schema.optional(Schema.String),
                    Error: Schema.optional(
                      Schema.Struct({
                        ErrorCode: Schema.optional(Schema.String),
                        ErrorMessage: Schema.optional(Schema.String),
                      }),
                    ),
                    TableName: Schema.optional(Schema.String),
                    TableArn: Schema.optional(Schema.String),
                  }),
                ),
              }),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketMetadataTableConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metadataTable",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketMetadataTableConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        GetBucketMetadataTableConfigurationResult: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              MetadataTableConfigurationResult: Schema.Struct({
                S3TablesDestinationResult: Schema.Struct({
                  TableBucketArn: Schema.String,
                  TableName: Schema.String,
                  TableArn: Schema.String,
                  TableNamespace: Schema.String,
                }),
              }),
              Status: Schema.String,
              Error: Schema.optional(
                Schema.Struct({
                  ErrorCode: Schema.optional(Schema.String),
                  ErrorMessage: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketMetricsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metrics&x-id=GetBucketMetricsConfiguration",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketMetricsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        MetricsConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Id: Schema.String,
              Filter: Schema.optional(
                Schema.Union(
                  Schema.String,
                  Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  Schema.String,
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tags: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                    ),
                    AccessPointArn: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketNotificationConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?notification",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketNotificationConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        TopicConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Id: Schema.optional(Schema.String),
              TopicArn: Schema.String,
              Events: Schema.Array(Schema.String),
              Filter: Schema.optional(
                Schema.Struct({
                  Key: Schema.optional(
                    Schema.Struct({
                      FilterRules: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Name: Schema.optional(Schema.String),
                            Value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        QueueConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Id: Schema.optional(Schema.String),
              QueueArn: Schema.String,
              Events: Schema.Array(Schema.String),
              Filter: Schema.optional(
                Schema.Struct({
                  Key: Schema.optional(
                    Schema.Struct({
                      FilterRules: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Name: Schema.optional(Schema.String),
                            Value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        LambdaFunctionConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Id: Schema.optional(Schema.String),
              LambdaFunctionArn: Schema.String,
              Events: Schema.Array(Schema.String),
              Filter: Schema.optional(
                Schema.Struct({
                  Key: Schema.optional(
                    Schema.Struct({
                      FilterRules: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Name: Schema.optional(Schema.String),
                            Value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        EventBridgeConfiguration: Schema.optional(Schema.Struct({})),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketOwnershipControls = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?ownershipControls",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketOwnershipControls",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        OwnershipControls: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Rules: Schema.Array(
                Schema.Struct({ ObjectOwnership: Schema.String }),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketPolicy = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?policy",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketPolicy",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Policy: Schema.optional(Body("undefined", Schema.String)),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketPolicyStatus = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?policyStatus",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketPolicyStatus",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        PolicyStatus: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({ IsPublic: Schema.optional(Schema.Boolean) }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketReplication = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?replication",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketReplication",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        ReplicationConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              Role: Schema.String,
              Rules: Schema.Array(
                Schema.Struct({
                  ID: Schema.optional(Schema.String),
                  Priority: Schema.optional(Schema.Number),
                  Prefix: Schema.optional(Schema.String),
                  Filter: Schema.optional(
                    Schema.Struct({
                      Prefix: Schema.optional(Schema.String),
                      Tag: Schema.optional(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                      And: Schema.optional(
                        Schema.Struct({
                          Prefix: Schema.optional(Schema.String),
                          Tags: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                Key: Schema.String,
                                Value: Schema.String,
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  Status: Schema.String,
                  SourceSelectionCriteria: Schema.optional(
                    Schema.Struct({
                      SseKmsEncryptedObjects: Schema.optional(
                        Schema.Struct({ Status: Schema.String }),
                      ),
                      ReplicaModifications: Schema.optional(
                        Schema.Struct({ Status: Schema.String }),
                      ),
                    }),
                  ),
                  ExistingObjectReplication: Schema.optional(
                    Schema.Struct({ Status: Schema.String }),
                  ),
                  Destination: Schema.Struct({
                    Bucket: Schema.String,
                    Account: Schema.optional(Schema.String),
                    StorageClass: Schema.optional(Schema.String),
                    AccessControlTranslation: Schema.optional(
                      Schema.Struct({ Owner: Schema.String }),
                    ),
                    EncryptionConfiguration: Schema.optional(
                      Schema.Struct({
                        ReplicaKmsKeyID: Schema.optional(Schema.String),
                      }),
                    ),
                    ReplicationTime: Schema.optional(
                      Schema.Struct({
                        Status: Schema.String,
                        Time: Schema.Struct({
                          Minutes: Schema.optional(Schema.Number),
                        }),
                      }),
                    ),
                    Metrics: Schema.optional(
                      Schema.Struct({
                        Status: Schema.String,
                        EventThreshold: Schema.optional(
                          Schema.Struct({
                            Minutes: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                  }),
                  DeleteMarkerReplication: Schema.optional(
                    Schema.Struct({ Status: Schema.optional(Schema.String) }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketRequestPayment = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?requestPayment",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketRequestPayment",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({ Payer: Schema.optional(Schema.String) }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?tagging",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        TagSet: Schema.Array(
          Schema.Struct({ Key: Schema.String, Value: Schema.String }),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketVersioning = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?versioning",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketVersioning",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Status: Schema.optional(Schema.String),
        MFADelete: Schema.optional(Schema.String),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetBucketWebsite = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?website",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetBucketWebsite",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RedirectAllRequestsTo: Schema.optional(
          Schema.Struct({
            HostName: Schema.String,
            Protocol: Schema.optional(Schema.String),
          }),
        ),
        IndexDocument: Schema.optional(
          Schema.Struct({ Suffix: Schema.String }),
        ),
        ErrorDocument: Schema.optional(Schema.Struct({ Key: Schema.String })),
        RoutingRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Condition: Schema.optional(
                Schema.Struct({
                  HttpErrorCodeReturnedEquals: Schema.optional(Schema.String),
                  KeyPrefixEquals: Schema.optional(Schema.String),
                }),
              ),
              Redirect: Schema.Struct({
                HostName: Schema.optional(Schema.String),
                HttpRedirectCode: Schema.optional(Schema.String),
                Protocol: Schema.optional(Schema.String),
                ReplaceKeyPrefixWith: Schema.optional(Schema.String),
                ReplaceKeyWith: Schema.optional(Schema.String),
              }),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=GetObject",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObject",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        IfMatch: Schema.optional(Header("If-Match")),
        IfModifiedSince: Schema.optional(
          Header("If-Modified-Since", Schema.Date),
        ),
        IfNoneMatch: Schema.optional(Header("If-None-Match")),
        IfUnmodifiedSince: Schema.optional(
          Header("If-Unmodified-Since", Schema.Date),
        ),
        Key: Path("Key", Schema.String),
        Range: Schema.optional(Header("Range")),
        ResponseCacheControl: Schema.optional(Schema.String),
        ResponseContentDisposition: Schema.optional(Schema.String),
        ResponseContentEncoding: Schema.optional(Schema.String),
        ResponseContentLanguage: Schema.optional(Schema.String),
        ResponseContentType: Schema.optional(Schema.String),
        ResponseExpires: Schema.optional(Schema.Date),
        VersionId: Schema.optional(Schema.String),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        PartNumber: Schema.optional(Schema.Number),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ChecksumMode: Schema.optional(Header("x-amz-checksum-mode")),
      }),
      Schema.Struct({
        Body: Schema.optional(Body("undefined", StreamBody())),
        DeleteMarker: Schema.optional(
          Header("x-amz-delete-marker", Schema.Boolean),
        ),
        AcceptRanges: Schema.optional(Header("accept-ranges")),
        Expiration: Schema.optional(Header("x-amz-expiration")),
        Restore: Schema.optional(Header("x-amz-restore")),
        LastModified: Schema.optional(Header("Last-Modified", Schema.Date)),
        ContentLength: Schema.optional(Header("Content-Length", Schema.Number)),
        ETag: Schema.optional(Header("ETag")),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
        MissingMeta: Schema.optional(
          Header("x-amz-missing-meta", Schema.Number),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        CacheControl: Schema.optional(Header("Cache-Control")),
        ContentDisposition: Schema.optional(Header("Content-Disposition")),
        ContentEncoding: Schema.optional(Header("Content-Encoding")),
        ContentLanguage: Schema.optional(Header("Content-Language")),
        ContentRange: Schema.optional(Header("Content-Range")),
        ContentType: Schema.optional(Header("Content-Type")),
        Expires: Schema.optional(Header("Expires")),
        WebsiteRedirectLocation: Schema.optional(
          Header("x-amz-website-redirect-location"),
        ),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        StorageClass: Schema.optional(Header("x-amz-storage-class")),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        ReplicationStatus: Schema.optional(Header("x-amz-replication-status")),
        PartsCount: Schema.optional(
          Header("x-amz-mp-parts-count", Schema.Number),
        ),
        TagCount: Schema.optional(Header("x-amz-tagging-count", Schema.Number)),
        ObjectLockMode: Schema.optional(Header("x-amz-object-lock-mode")),
        ObjectLockRetainUntilDate: Schema.optional(
          Header("x-amz-object-lock-retain-until-date", Schema.Date),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-object-lock-legal-hold"),
        ),
      }),
      Schema.Union(
        Error(
          "InvalidObjectState",
          Schema.Struct({
            StorageClass: Schema.optional(Schema.String),
            AccessTier: Schema.optional(Schema.String),
          }),
        ),
        Error("NoSuchKey", Schema.Struct({})),
      ),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectAcl = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?acl",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectAcl",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        VersionId: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Owner: Schema.optional(
          Schema.Struct({
            DisplayName: Schema.optional(Schema.String),
            ID: Schema.optional(Schema.String),
          }),
        ),
        Grants: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Grantee: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  EmailAddress: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                  URI: Schema.optional(Schema.String),
                  Type: Schema.String,
                }),
              ),
              Permission: Schema.optional(Schema.String),
            }),
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("NoSuchKey", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectAttributes = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?attributes",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectAttributes",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        MaxParts: Schema.optional(Header("x-amz-max-parts", Schema.Number)),
        PartNumberMarker: Schema.optional(Header("x-amz-part-number-marker")),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ObjectAttributes: Header(
          "x-amz-object-attributes",
          Schema.Array(Schema.String),
        ),
      }),
      Schema.Struct({
        DeleteMarker: Schema.optional(
          Header("x-amz-delete-marker", Schema.Boolean),
        ),
        LastModified: Schema.optional(Header("Last-Modified", Schema.Date)),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        ETag: Schema.optional(Schema.String),
        Checksum: Schema.optional(
          Schema.Struct({
            ChecksumCRC32: Schema.optional(Schema.String),
            ChecksumCRC32C: Schema.optional(Schema.String),
            ChecksumCRC64NVME: Schema.optional(Schema.String),
            ChecksumSHA1: Schema.optional(Schema.String),
            ChecksumSHA256: Schema.optional(Schema.String),
            ChecksumType: Schema.optional(Schema.String),
          }),
        ),
        ObjectParts: Schema.optional(
          Schema.Struct({
            TotalPartsCount: Schema.optional(Schema.Number),
            PartNumberMarker: Schema.optional(Schema.String),
            NextPartNumberMarker: Schema.optional(Schema.String),
            MaxParts: Schema.optional(Schema.Number),
            IsTruncated: Schema.optional(Schema.Boolean),
            Parts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  PartNumber: Schema.optional(Schema.Number),
                  Size: Schema.optional(Schema.Number),
                  ChecksumCRC32: Schema.optional(Schema.String),
                  ChecksumCRC32C: Schema.optional(Schema.String),
                  ChecksumCRC64NVME: Schema.optional(Schema.String),
                  ChecksumSHA1: Schema.optional(Schema.String),
                  ChecksumSHA256: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        StorageClass: Schema.optional(Schema.String),
        ObjectSize: Schema.optional(Schema.Number),
      }),
      Schema.Union(Error("NoSuchKey", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectLegalHold = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?legal-hold",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectLegalHold",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        LegalHold: Schema.optional(
          Body(
            "LegalHold",
            Schema.Struct({ Status: Schema.optional(Schema.String) }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectLockConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?object-lock",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectLockConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        ObjectLockConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              ObjectLockEnabled: Schema.optional(Schema.String),
              Rule: Schema.optional(
                Schema.Struct({
                  DefaultRetention: Schema.optional(
                    Schema.Struct({
                      Mode: Schema.optional(Schema.String),
                      Days: Schema.optional(Schema.Number),
                      Years: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectRetention = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?retention",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectRetention",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Retention: Schema.optional(
          Body(
            "Retention",
            Schema.Struct({
              Mode: Schema.optional(Schema.String),
              RetainUntilDate: Schema.optional(Schema.Date),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?tagging",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
      }),
      Schema.Struct({
        VersionId: Schema.optional(Header("x-amz-version-id")),
        TagSet: Schema.Array(
          Schema.Struct({ Key: Schema.String, Value: Schema.String }),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetObjectTorrent = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?torrent",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetObjectTorrent",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Body: Schema.optional(Body("undefined", StreamBody())),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const GetPublicAccessBlock = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?publicAccessBlock",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "GetPublicAccessBlock",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        PublicAccessBlockConfiguration: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              BlockPublicAcls: Schema.optional(Schema.Boolean),
              IgnorePublicAcls: Schema.optional(Schema.Boolean),
              BlockPublicPolicy: Schema.optional(Schema.Boolean),
              RestrictPublicBuckets: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const HeadBucket = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}",
        method: "HEAD",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "HeadBucket",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        BucketArn: Schema.optional(Header("x-amz-bucket-arn")),
        BucketLocationType: Schema.optional(
          Header("x-amz-bucket-location-type"),
        ),
        BucketLocationName: Schema.optional(
          Header("x-amz-bucket-location-name"),
        ),
        BucketRegion: Schema.optional(Header("x-amz-bucket-region")),
        AccessPointAlias: Schema.optional(
          Header("x-amz-access-point-alias", Schema.Boolean),
        ),
      }),
      Schema.Union(Error("NotFound", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const HeadObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}",
        method: "HEAD",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "HeadObject",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        IfMatch: Schema.optional(Header("If-Match")),
        IfModifiedSince: Schema.optional(
          Header("If-Modified-Since", Schema.Date),
        ),
        IfNoneMatch: Schema.optional(Header("If-None-Match")),
        IfUnmodifiedSince: Schema.optional(
          Header("If-Unmodified-Since", Schema.Date),
        ),
        Key: Path("Key", Schema.String),
        Range: Schema.optional(Header("Range")),
        ResponseCacheControl: Schema.optional(Schema.String),
        ResponseContentDisposition: Schema.optional(Schema.String),
        ResponseContentEncoding: Schema.optional(Schema.String),
        ResponseContentLanguage: Schema.optional(Schema.String),
        ResponseContentType: Schema.optional(Schema.String),
        ResponseExpires: Schema.optional(Schema.Date),
        VersionId: Schema.optional(Schema.String),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        PartNumber: Schema.optional(Schema.Number),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ChecksumMode: Schema.optional(Header("x-amz-checksum-mode")),
      }),
      Schema.Struct({
        DeleteMarker: Schema.optional(
          Header("x-amz-delete-marker", Schema.Boolean),
        ),
        AcceptRanges: Schema.optional(Header("accept-ranges")),
        Expiration: Schema.optional(Header("x-amz-expiration")),
        Restore: Schema.optional(Header("x-amz-restore")),
        ArchiveStatus: Schema.optional(Header("x-amz-archive-status")),
        LastModified: Schema.optional(Header("Last-Modified", Schema.Date)),
        ContentLength: Schema.optional(Header("Content-Length", Schema.Number)),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
        ETag: Schema.optional(Header("ETag")),
        MissingMeta: Schema.optional(
          Header("x-amz-missing-meta", Schema.Number),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        CacheControl: Schema.optional(Header("Cache-Control")),
        ContentDisposition: Schema.optional(Header("Content-Disposition")),
        ContentEncoding: Schema.optional(Header("Content-Encoding")),
        ContentLanguage: Schema.optional(Header("Content-Language")),
        ContentType: Schema.optional(Header("Content-Type")),
        ContentRange: Schema.optional(Header("Content-Range")),
        Expires: Schema.optional(Header("Expires")),
        WebsiteRedirectLocation: Schema.optional(
          Header("x-amz-website-redirect-location"),
        ),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        StorageClass: Schema.optional(Header("x-amz-storage-class")),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        ReplicationStatus: Schema.optional(Header("x-amz-replication-status")),
        PartsCount: Schema.optional(
          Header("x-amz-mp-parts-count", Schema.Number),
        ),
        TagCount: Schema.optional(Header("x-amz-tagging-count", Schema.Number)),
        ObjectLockMode: Schema.optional(Header("x-amz-object-lock-mode")),
        ObjectLockRetainUntilDate: Schema.optional(
          Header("x-amz-object-lock-retain-until-date", Schema.Date),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-object-lock-legal-hold"),
        ),
      }),
      Schema.Union(Error("NotFound", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListBucketAnalyticsConfigurations = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?analytics&x-id=ListBucketAnalyticsConfigurations",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListBucketAnalyticsConfigurations",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContinuationToken: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        IsTruncated: Schema.optional(Schema.Boolean),
        ContinuationToken: Schema.optional(Schema.String),
        NextContinuationToken: Schema.optional(Schema.String),
        AnalyticsConfigurationList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Id: Schema.String,
              Filter: Schema.optional(
                Schema.Union(
                  Schema.String,
                  Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tags: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              StorageClassAnalysis: Schema.Struct({
                DataExport: Schema.optional(
                  Schema.Struct({
                    OutputSchemaVersion: Schema.String,
                    Destination: Schema.Struct({
                      S3BucketDestination: Schema.Struct({
                        Format: Schema.String,
                        BucketAccountId: Schema.optional(Schema.String),
                        Bucket: Schema.String,
                        Prefix: Schema.optional(Schema.String),
                      }),
                    }),
                  }),
                ),
              }),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListBucketIntelligentTieringConfigurations =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations",
          method: "GET",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "ListBucketIntelligentTieringConfigurations",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          ContinuationToken: Schema.optional(Schema.String),
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({
          IsTruncated: Schema.optional(Schema.Boolean),
          ContinuationToken: Schema.optional(Schema.String),
          NextContinuationToken: Schema.optional(Schema.String),
          IntelligentTieringConfigurationList: Schema.optional(
            Schema.Array(
              Schema.Struct({
                Id: Schema.String,
                Filter: Schema.optional(
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tag: Schema.optional(
                      Schema.Struct({
                        Key: Schema.String,
                        Value: Schema.String,
                      }),
                    ),
                    And: Schema.optional(
                      Schema.Struct({
                        Prefix: Schema.optional(Schema.String),
                        Tags: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              Key: Schema.String,
                              Value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
                Status: Schema.String,
                Tierings: Schema.Array(
                  Schema.Struct({
                    Days: Schema.Number,
                    AccessTier: Schema.String,
                  }),
                ),
              }),
            ),
          ),
        }),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const ListBucketInventoryConfigurations = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?inventory&x-id=ListBucketInventoryConfigurations",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListBucketInventoryConfigurations",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContinuationToken: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        ContinuationToken: Schema.optional(Schema.String),
        InventoryConfigurationList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Destination: Schema.Struct({
                S3BucketDestination: Schema.Struct({
                  AccountId: Schema.optional(Schema.String),
                  Bucket: Schema.String,
                  Format: Schema.String,
                  Prefix: Schema.optional(Schema.String),
                  Encryption: Schema.optional(
                    Schema.Struct({
                      SSES3: Schema.optional(Schema.Struct({})),
                      SSEKMS: Schema.optional(
                        Schema.Struct({ KeyId: Schema.String }),
                      ),
                    }),
                  ),
                }),
              }),
              IsEnabled: Schema.Boolean,
              Filter: Schema.optional(Schema.Struct({ Prefix: Schema.String })),
              Id: Schema.String,
              IncludedObjectVersions: Schema.String,
              OptionalFields: Schema.optional(Schema.Array(Schema.String)),
              Schedule: Schema.Struct({ Frequency: Schema.String }),
            }),
          ),
        ),
        IsTruncated: Schema.optional(Schema.Boolean),
        NextContinuationToken: Schema.optional(Schema.String),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListBucketMetricsConfigurations = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metrics&x-id=ListBucketMetricsConfigurations",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListBucketMetricsConfigurations",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContinuationToken: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        IsTruncated: Schema.optional(Schema.Boolean),
        ContinuationToken: Schema.optional(Schema.String),
        NextContinuationToken: Schema.optional(Schema.String),
        MetricsConfigurationList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Id: Schema.String,
              Filter: Schema.optional(
                Schema.Union(
                  Schema.String,
                  Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  Schema.String,
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tags: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                    ),
                    AccessPointArn: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListBuckets = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/?x-id=ListBuckets",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListBuckets",
      },
      Schema.Struct({
        MaxBuckets: Schema.optional(Schema.Number),
        ContinuationToken: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
        BucketRegion: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        Buckets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Name: Schema.optional(Schema.String),
              CreationDate: Schema.optional(Schema.Date),
              BucketRegion: Schema.optional(Schema.String),
              BucketArn: Schema.optional(Schema.String),
            }),
          ),
        ),
        Owner: Schema.optional(
          Schema.Struct({
            DisplayName: Schema.optional(Schema.String),
            ID: Schema.optional(Schema.String),
          }),
        ),
        ContinuationToken: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListDirectoryBuckets = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/?x-id=ListDirectoryBuckets",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListDirectoryBuckets",
      },
      Schema.Struct({
        ContinuationToken: Schema.optional(Schema.String),
        MaxDirectoryBuckets: Schema.optional(Schema.Number),
      }),
      Schema.Struct({
        Buckets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Name: Schema.optional(Schema.String),
              CreationDate: Schema.optional(Schema.Date),
              BucketRegion: Schema.optional(Schema.String),
              BucketArn: Schema.optional(Schema.String),
            }),
          ),
        ),
        ContinuationToken: Schema.optional(Schema.String),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListMultipartUploads = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?uploads",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListMultipartUploads",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Delimiter: Schema.optional(Schema.String),
        EncodingType: Schema.optional(Schema.String),
        KeyMarker: Schema.optional(Schema.String),
        MaxUploads: Schema.optional(Schema.Number),
        Prefix: Schema.optional(Schema.String),
        UploadIdMarker: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
      }),
      Schema.Struct({
        Bucket: Schema.optional(Schema.String),
        KeyMarker: Schema.optional(Schema.String),
        UploadIdMarker: Schema.optional(Schema.String),
        NextKeyMarker: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
        Delimiter: Schema.optional(Schema.String),
        NextUploadIdMarker: Schema.optional(Schema.String),
        MaxUploads: Schema.optional(Schema.Number),
        IsTruncated: Schema.optional(Schema.Boolean),
        Uploads: Schema.optional(
          Schema.Array(
            Schema.Struct({
              UploadId: Schema.optional(Schema.String),
              Key: Schema.optional(Schema.String),
              Initiated: Schema.optional(Schema.Date),
              StorageClass: Schema.optional(Schema.String),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
              Initiator: Schema.optional(
                Schema.Struct({
                  ID: Schema.optional(Schema.String),
                  DisplayName: Schema.optional(Schema.String),
                }),
              ),
              ChecksumAlgorithm: Schema.optional(Schema.String),
              ChecksumType: Schema.optional(Schema.String),
            }),
          ),
        ),
        CommonPrefixes: Schema.optional(
          Schema.Array(
            Schema.Struct({ Prefix: Schema.optional(Schema.String) }),
          ),
        ),
        EncodingType: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListObjects = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListObjects",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Delimiter: Schema.optional(Schema.String),
        EncodingType: Schema.optional(Schema.String),
        Marker: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        Prefix: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        OptionalObjectAttributes: Schema.optional(
          Header(
            "x-amz-optional-object-attributes",
            Schema.Array(Schema.String),
          ),
        ),
      }),
      Schema.Struct({
        IsTruncated: Schema.optional(Schema.Boolean),
        Marker: Schema.optional(Schema.String),
        NextMarker: Schema.optional(Schema.String),
        Contents: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Key: Schema.optional(Schema.String),
              LastModified: Schema.optional(Schema.Date),
              ETag: Schema.optional(Schema.String),
              ChecksumAlgorithm: Schema.optional(Schema.Array(Schema.String)),
              ChecksumType: Schema.optional(Schema.String),
              Size: Schema.optional(Schema.Number),
              StorageClass: Schema.optional(Schema.String),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
              RestoreStatus: Schema.optional(
                Schema.Struct({
                  IsRestoreInProgress: Schema.optional(Schema.Boolean),
                  RestoreExpiryDate: Schema.optional(Schema.Date),
                }),
              ),
            }),
          ),
        ),
        Name: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
        Delimiter: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        CommonPrefixes: Schema.optional(
          Schema.Array(
            Schema.Struct({ Prefix: Schema.optional(Schema.String) }),
          ),
        ),
        EncodingType: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("NoSuchBucket", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListObjectsV2 = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?list-type=2",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListObjectsV2",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Delimiter: Schema.optional(Schema.String),
        EncodingType: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        Prefix: Schema.optional(Schema.String),
        ContinuationToken: Schema.optional(Schema.String),
        FetchOwner: Schema.optional(Schema.Boolean),
        StartAfter: Schema.optional(Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        OptionalObjectAttributes: Schema.optional(
          Header(
            "x-amz-optional-object-attributes",
            Schema.Array(Schema.String),
          ),
        ),
      }),
      Schema.Struct({
        IsTruncated: Schema.optional(Schema.Boolean),
        Contents: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Key: Schema.optional(Schema.String),
              LastModified: Schema.optional(Schema.Date),
              ETag: Schema.optional(Schema.String),
              ChecksumAlgorithm: Schema.optional(Schema.Array(Schema.String)),
              ChecksumType: Schema.optional(Schema.String),
              Size: Schema.optional(Schema.Number),
              StorageClass: Schema.optional(Schema.String),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
              RestoreStatus: Schema.optional(
                Schema.Struct({
                  IsRestoreInProgress: Schema.optional(Schema.Boolean),
                  RestoreExpiryDate: Schema.optional(Schema.Date),
                }),
              ),
            }),
          ),
        ),
        Name: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
        Delimiter: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        CommonPrefixes: Schema.optional(
          Schema.Array(
            Schema.Struct({ Prefix: Schema.optional(Schema.String) }),
          ),
        ),
        EncodingType: Schema.optional(Schema.String),
        KeyCount: Schema.optional(Schema.Number),
        ContinuationToken: Schema.optional(Schema.String),
        NextContinuationToken: Schema.optional(Schema.String),
        StartAfter: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("NoSuchBucket", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListObjectVersions = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?versions",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListObjectVersions",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Delimiter: Schema.optional(Schema.String),
        EncodingType: Schema.optional(Schema.String),
        KeyMarker: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        Prefix: Schema.optional(Schema.String),
        VersionIdMarker: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        OptionalObjectAttributes: Schema.optional(
          Header(
            "x-amz-optional-object-attributes",
            Schema.Array(Schema.String),
          ),
        ),
      }),
      Schema.Struct({
        IsTruncated: Schema.optional(Schema.Boolean),
        KeyMarker: Schema.optional(Schema.String),
        VersionIdMarker: Schema.optional(Schema.String),
        NextKeyMarker: Schema.optional(Schema.String),
        NextVersionIdMarker: Schema.optional(Schema.String),
        Versions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ETag: Schema.optional(Schema.String),
              ChecksumAlgorithm: Schema.optional(Schema.Array(Schema.String)),
              ChecksumType: Schema.optional(Schema.String),
              Size: Schema.optional(Schema.Number),
              StorageClass: Schema.optional(Schema.String),
              Key: Schema.optional(Schema.String),
              VersionId: Schema.optional(Schema.String),
              IsLatest: Schema.optional(Schema.Boolean),
              LastModified: Schema.optional(Schema.Date),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
              RestoreStatus: Schema.optional(
                Schema.Struct({
                  IsRestoreInProgress: Schema.optional(Schema.Boolean),
                  RestoreExpiryDate: Schema.optional(Schema.Date),
                }),
              ),
            }),
          ),
        ),
        DeleteMarkers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
              Key: Schema.optional(Schema.String),
              VersionId: Schema.optional(Schema.String),
              IsLatest: Schema.optional(Schema.Boolean),
              LastModified: Schema.optional(Schema.Date),
            }),
          ),
        ),
        Name: Schema.optional(Schema.String),
        Prefix: Schema.optional(Schema.String),
        Delimiter: Schema.optional(Schema.String),
        MaxKeys: Schema.optional(Schema.Number),
        CommonPrefixes: Schema.optional(
          Schema.Array(
            Schema.Struct({ Prefix: Schema.optional(Schema.String) }),
          ),
        ),
        EncodingType: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const ListParts = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=ListParts",
        method: "GET",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "ListParts",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        MaxParts: Schema.optional(Schema.Number),
        PartNumberMarker: Schema.optional(Schema.String),
        UploadId: Schema.String,
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
      }),
      Schema.Struct({
        AbortDate: Schema.optional(Header("x-amz-abort-date", Schema.Date)),
        AbortRuleId: Schema.optional(Header("x-amz-abort-rule-id")),
        Bucket: Schema.optional(Schema.String),
        Key: Schema.optional(Schema.String),
        UploadId: Schema.optional(Schema.String),
        PartNumberMarker: Schema.optional(Schema.String),
        NextPartNumberMarker: Schema.optional(Schema.String),
        MaxParts: Schema.optional(Schema.Number),
        IsTruncated: Schema.optional(Schema.Boolean),
        Parts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              PartNumber: Schema.optional(Schema.Number),
              LastModified: Schema.optional(Schema.Date),
              ETag: Schema.optional(Schema.String),
              Size: Schema.optional(Schema.Number),
              ChecksumCRC32: Schema.optional(Schema.String),
              ChecksumCRC32C: Schema.optional(Schema.String),
              ChecksumCRC64NVME: Schema.optional(Schema.String),
              ChecksumSHA1: Schema.optional(Schema.String),
              ChecksumSHA256: Schema.optional(Schema.String),
            }),
          ),
        ),
        Initiator: Schema.optional(
          Schema.Struct({
            ID: Schema.optional(Schema.String),
            DisplayName: Schema.optional(Schema.String),
          }),
        ),
        Owner: Schema.optional(
          Schema.Struct({
            DisplayName: Schema.optional(Schema.String),
            ID: Schema.optional(Schema.String),
          }),
        ),
        StorageClass: Schema.optional(Schema.String),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        ChecksumAlgorithm: Schema.optional(Schema.String),
        ChecksumType: Schema.optional(Schema.String),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketAccelerateConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?accelerate",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketAccelerateConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        AccelerateConfiguration: Body(
          "AccelerateConfiguration",
          Schema.Struct({ Status: Schema.optional(Schema.String) }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketAcl = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?acl",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketAcl",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        AccessControlPolicy: Schema.optional(
          Body(
            "AccessControlPolicy",
            Schema.Struct({
              Grants: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    Grantee: Schema.optional(
                      Schema.Struct({
                        DisplayName: Schema.optional(Schema.String),
                        EmailAddress: Schema.optional(Schema.String),
                        ID: Schema.optional(Schema.String),
                        URI: Schema.optional(Schema.String),
                        Type: Schema.String,
                      }),
                    ),
                    Permission: Schema.optional(Schema.String),
                  }),
                ),
              ),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWrite: Schema.optional(Header("x-amz-grant-write")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketAnalyticsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?analytics",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketAnalyticsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        AnalyticsConfiguration: Body(
          "AnalyticsConfiguration",
          Schema.Struct({
            Id: Schema.String,
            Filter: Schema.optional(
              Schema.Union(
                Schema.String,
                Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                Schema.Struct({
                  Prefix: Schema.optional(Schema.String),
                  Tags: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        Key: Schema.String,
                        Value: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
            StorageClassAnalysis: Schema.Struct({
              DataExport: Schema.optional(
                Schema.Struct({
                  OutputSchemaVersion: Schema.String,
                  Destination: Schema.Struct({
                    S3BucketDestination: Schema.Struct({
                      Format: Schema.String,
                      BucketAccountId: Schema.optional(Schema.String),
                      Bucket: Schema.String,
                      Prefix: Schema.optional(Schema.String),
                    }),
                  }),
                }),
              ),
            }),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketCors = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?cors",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketCors",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        CORSConfiguration: Body(
          "CORSConfiguration",
          Schema.Struct({
            CORSRules: Schema.Array(
              Schema.Struct({
                ID: Schema.optional(Schema.String),
                AllowedHeaders: Schema.optional(Schema.Array(Schema.String)),
                AllowedMethods: Schema.Array(Schema.String),
                AllowedOrigins: Schema.Array(Schema.String),
                ExposeHeaders: Schema.optional(Schema.Array(Schema.String)),
                MaxAgeSeconds: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketEncryption = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?encryption",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketEncryption",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ServerSideEncryptionConfiguration: Body(
          "ServerSideEncryptionConfiguration",
          Schema.Struct({
            Rules: Schema.Array(
              Schema.Struct({
                ApplyServerSideEncryptionByDefault: Schema.optional(
                  Schema.Struct({
                    SSEAlgorithm: Schema.String,
                    KMSMasterKeyID: Schema.optional(Schema.String),
                  }),
                ),
                BucketKeyEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketIntelligentTieringConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?intelligent-tiering",
          method: "PUT",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "PutBucketIntelligentTieringConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          Id: Schema.String,
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
          IntelligentTieringConfiguration: Body(
            "IntelligentTieringConfiguration",
            Schema.Struct({
              Id: Schema.String,
              Filter: Schema.optional(
                Schema.Struct({
                  Prefix: Schema.optional(Schema.String),
                  Tag: Schema.optional(
                    Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                  ),
                  And: Schema.optional(
                    Schema.Struct({
                      Prefix: Schema.optional(Schema.String),
                      Tags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Key: Schema.String,
                            Value: Schema.String,
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              Status: Schema.String,
              Tierings: Schema.Array(
                Schema.Struct({
                  Days: Schema.Number,
                  AccessTier: Schema.String,
                }),
              ),
            }),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const PutBucketInventoryConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?inventory",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketInventoryConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        InventoryConfiguration: Body(
          "InventoryConfiguration",
          Schema.Struct({
            Destination: Schema.Struct({
              S3BucketDestination: Schema.Struct({
                AccountId: Schema.optional(Schema.String),
                Bucket: Schema.String,
                Format: Schema.String,
                Prefix: Schema.optional(Schema.String),
                Encryption: Schema.optional(
                  Schema.Struct({
                    SSES3: Schema.optional(Schema.Struct({})),
                    SSEKMS: Schema.optional(
                      Schema.Struct({ KeyId: Schema.String }),
                    ),
                  }),
                ),
              }),
            }),
            IsEnabled: Schema.Boolean,
            Filter: Schema.optional(Schema.Struct({ Prefix: Schema.String })),
            Id: Schema.String,
            IncludedObjectVersions: Schema.String,
            OptionalFields: Schema.optional(Schema.Array(Schema.String)),
            Schedule: Schema.Struct({ Frequency: Schema.String }),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketLifecycleConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?lifecycle",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketLifecycleConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        LifecycleConfiguration: Schema.optional(
          Body(
            "LifecycleConfiguration",
            Schema.Struct({
              Rules: Schema.Array(
                Schema.Struct({
                  Expiration: Schema.optional(
                    Schema.Struct({
                      Date: Schema.optional(Schema.Date),
                      Days: Schema.optional(Schema.Number),
                      ExpiredObjectDeleteMarker: Schema.optional(
                        Schema.Boolean,
                      ),
                    }),
                  ),
                  ID: Schema.optional(Schema.String),
                  Prefix: Schema.optional(Schema.String),
                  Filter: Schema.optional(
                    Schema.Struct({
                      Prefix: Schema.optional(Schema.String),
                      Tag: Schema.optional(
                        Schema.Struct({
                          Key: Schema.String,
                          Value: Schema.String,
                        }),
                      ),
                      ObjectSizeGreaterThan: Schema.optional(Schema.Number),
                      ObjectSizeLessThan: Schema.optional(Schema.Number),
                      And: Schema.optional(
                        Schema.Struct({
                          Prefix: Schema.optional(Schema.String),
                          Tags: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                Key: Schema.String,
                                Value: Schema.String,
                              }),
                            ),
                          ),
                          ObjectSizeGreaterThan: Schema.optional(Schema.Number),
                          ObjectSizeLessThan: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  Status: Schema.String,
                  Transitions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        Date: Schema.optional(Schema.Date),
                        Days: Schema.optional(Schema.Number),
                        StorageClass: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  NoncurrentVersionTransitions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        NoncurrentDays: Schema.optional(Schema.Number),
                        StorageClass: Schema.optional(Schema.String),
                        NewerNoncurrentVersions: Schema.optional(Schema.Number),
                      }),
                    ),
                  ),
                  NoncurrentVersionExpiration: Schema.optional(
                    Schema.Struct({
                      NoncurrentDays: Schema.optional(Schema.Number),
                      NewerNoncurrentVersions: Schema.optional(Schema.Number),
                    }),
                  ),
                  AbortIncompleteMultipartUpload: Schema.optional(
                    Schema.Struct({
                      DaysAfterInitiation: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        TransitionDefaultMinimumObjectSize: Schema.optional(
          Header("x-amz-transition-default-minimum-object-size"),
        ),
      }),
      Schema.Struct({
        TransitionDefaultMinimumObjectSize: Schema.optional(
          Header("x-amz-transition-default-minimum-object-size"),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketLogging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?logging",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketLogging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        BucketLoggingStatus: Body(
          "BucketLoggingStatus",
          Schema.Struct({
            LoggingEnabled: Schema.optional(
              Schema.Struct({
                TargetBucket: Schema.String,
                TargetGrants: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      Grantee: Schema.optional(
                        Schema.Struct({
                          DisplayName: Schema.optional(Schema.String),
                          EmailAddress: Schema.optional(Schema.String),
                          ID: Schema.optional(Schema.String),
                          URI: Schema.optional(Schema.String),
                          Type: Schema.String,
                        }),
                      ),
                      Permission: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                TargetPrefix: Schema.String,
                TargetObjectKeyFormat: Schema.optional(
                  Schema.Struct({
                    SimplePrefix: Schema.optional(Schema.Struct({})),
                    PartitionedPrefix: Schema.optional(
                      Schema.Struct({
                        PartitionDateSource: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketMetricsConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?metrics",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketMetricsConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Id: Schema.String,
        MetricsConfiguration: Body(
          "MetricsConfiguration",
          Schema.Struct({
            Id: Schema.String,
            Filter: Schema.optional(
              Schema.Union(
                Schema.String,
                Schema.Struct({ Key: Schema.String, Value: Schema.String }),
                Schema.String,
                Schema.Struct({
                  Prefix: Schema.optional(Schema.String),
                  Tags: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        Key: Schema.String,
                        Value: Schema.String,
                      }),
                    ),
                  ),
                  AccessPointArn: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketNotificationConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?notification",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketNotificationConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        NotificationConfiguration: Body(
          "NotificationConfiguration",
          Schema.Struct({
            TopicConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  Id: Schema.optional(Schema.String),
                  TopicArn: Schema.String,
                  Events: Schema.Array(Schema.String),
                  Filter: Schema.optional(
                    Schema.Struct({
                      Key: Schema.optional(
                        Schema.Struct({
                          FilterRules: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                Name: Schema.optional(Schema.String),
                                Value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            QueueConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  Id: Schema.optional(Schema.String),
                  QueueArn: Schema.String,
                  Events: Schema.Array(Schema.String),
                  Filter: Schema.optional(
                    Schema.Struct({
                      Key: Schema.optional(
                        Schema.Struct({
                          FilterRules: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                Name: Schema.optional(Schema.String),
                                Value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            LambdaFunctionConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  Id: Schema.optional(Schema.String),
                  LambdaFunctionArn: Schema.String,
                  Events: Schema.Array(Schema.String),
                  Filter: Schema.optional(
                    Schema.Struct({
                      Key: Schema.optional(
                        Schema.Struct({
                          FilterRules: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                Name: Schema.optional(Schema.String),
                                Value: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            EventBridgeConfiguration: Schema.optional(Schema.Struct({})),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        SkipDestinationValidation: Schema.optional(
          Header("x-amz-skip-destination-validation", Schema.Boolean),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketOwnershipControls = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?ownershipControls",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketOwnershipControls",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        OwnershipControls: Body(
          "OwnershipControls",
          Schema.Struct({
            Rules: Schema.Array(
              Schema.Struct({ ObjectOwnership: Schema.String }),
            ),
          }),
        ),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketPolicy = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?policy",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketPolicy",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ConfirmRemoveSelfBucketAccess: Schema.optional(
          Header("x-amz-confirm-remove-self-bucket-access", Schema.Boolean),
        ),
        Policy: Body("undefined", Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketReplication = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?replication",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketReplication",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ReplicationConfiguration: Body(
          "ReplicationConfiguration",
          Schema.Struct({
            Role: Schema.String,
            Rules: Schema.Array(
              Schema.Struct({
                ID: Schema.optional(Schema.String),
                Priority: Schema.optional(Schema.Number),
                Prefix: Schema.optional(Schema.String),
                Filter: Schema.optional(
                  Schema.Struct({
                    Prefix: Schema.optional(Schema.String),
                    Tag: Schema.optional(
                      Schema.Struct({
                        Key: Schema.String,
                        Value: Schema.String,
                      }),
                    ),
                    And: Schema.optional(
                      Schema.Struct({
                        Prefix: Schema.optional(Schema.String),
                        Tags: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              Key: Schema.String,
                              Value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
                Status: Schema.String,
                SourceSelectionCriteria: Schema.optional(
                  Schema.Struct({
                    SseKmsEncryptedObjects: Schema.optional(
                      Schema.Struct({ Status: Schema.String }),
                    ),
                    ReplicaModifications: Schema.optional(
                      Schema.Struct({ Status: Schema.String }),
                    ),
                  }),
                ),
                ExistingObjectReplication: Schema.optional(
                  Schema.Struct({ Status: Schema.String }),
                ),
                Destination: Schema.Struct({
                  Bucket: Schema.String,
                  Account: Schema.optional(Schema.String),
                  StorageClass: Schema.optional(Schema.String),
                  AccessControlTranslation: Schema.optional(
                    Schema.Struct({ Owner: Schema.String }),
                  ),
                  EncryptionConfiguration: Schema.optional(
                    Schema.Struct({
                      ReplicaKmsKeyID: Schema.optional(Schema.String),
                    }),
                  ),
                  ReplicationTime: Schema.optional(
                    Schema.Struct({
                      Status: Schema.String,
                      Time: Schema.Struct({
                        Minutes: Schema.optional(Schema.Number),
                      }),
                    }),
                  ),
                  Metrics: Schema.optional(
                    Schema.Struct({
                      Status: Schema.String,
                      EventThreshold: Schema.optional(
                        Schema.Struct({
                          Minutes: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                }),
                DeleteMarkerReplication: Schema.optional(
                  Schema.Struct({ Status: Schema.optional(Schema.String) }),
                ),
              }),
            ),
          }),
        ),
        Token: Schema.optional(Header("x-amz-bucket-object-lock-token")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketRequestPayment = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?requestPayment",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketRequestPayment",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        RequestPaymentConfiguration: Body(
          "RequestPaymentConfiguration",
          Schema.Struct({ Payer: Schema.String }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?tagging",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        Tagging: Body(
          "Tagging",
          Schema.Struct({
            TagSet: Schema.Array(
              Schema.Struct({ Key: Schema.String, Value: Schema.String }),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketVersioning = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?versioning",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketVersioning",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        MFA: Schema.optional(Header("x-amz-mfa")),
        VersioningConfiguration: Body(
          "VersioningConfiguration",
          Schema.Struct({
            MFADelete: Schema.optional(Schema.String),
            Status: Schema.optional(Schema.String),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutBucketWebsite = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?website",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutBucketWebsite",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        WebsiteConfiguration: Body(
          "WebsiteConfiguration",
          Schema.Struct({
            ErrorDocument: Schema.optional(
              Schema.Struct({ Key: Schema.String }),
            ),
            IndexDocument: Schema.optional(
              Schema.Struct({ Suffix: Schema.String }),
            ),
            RedirectAllRequestsTo: Schema.optional(
              Schema.Struct({
                HostName: Schema.String,
                Protocol: Schema.optional(Schema.String),
              }),
            ),
            RoutingRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  Condition: Schema.optional(
                    Schema.Struct({
                      HttpErrorCodeReturnedEquals: Schema.optional(
                        Schema.String,
                      ),
                      KeyPrefixEquals: Schema.optional(Schema.String),
                    }),
                  ),
                  Redirect: Schema.Struct({
                    HostName: Schema.optional(Schema.String),
                    HttpRedirectCode: Schema.optional(Schema.String),
                    Protocol: Schema.optional(Schema.String),
                    ReplaceKeyPrefixWith: Schema.optional(Schema.String),
                    ReplaceKeyWith: Schema.optional(Schema.String),
                  }),
                }),
              ),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=PutObject",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObject",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        Body: Schema.optional(Body("undefined", StreamBody())),
        Bucket: Path("Bucket", Schema.String),
        CacheControl: Schema.optional(Header("Cache-Control")),
        ContentDisposition: Schema.optional(Header("Content-Disposition")),
        ContentEncoding: Schema.optional(Header("Content-Encoding")),
        ContentLanguage: Schema.optional(Header("Content-Language")),
        ContentLength: Schema.optional(Header("Content-Length", Schema.Number)),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ContentType: Schema.optional(Header("Content-Type")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        Expires: Schema.optional(Header("Expires")),
        IfMatch: Schema.optional(Header("If-Match")),
        IfNoneMatch: Schema.optional(Header("If-None-Match")),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        Key: Path("Key", Schema.String),
        WriteOffsetBytes: Schema.optional(
          Header("x-amz-write-offset-bytes", Schema.Number),
        ),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        StorageClass: Schema.optional(Header("x-amz-storage-class")),
        WebsiteRedirectLocation: Schema.optional(
          Header("x-amz-website-redirect-location"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        Tagging: Schema.optional(Header("x-amz-tagging")),
        ObjectLockMode: Schema.optional(Header("x-amz-object-lock-mode")),
        ObjectLockRetainUntilDate: Schema.optional(
          Header("x-amz-object-lock-retain-until-date", Schema.Date),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-object-lock-legal-hold"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Expiration: Schema.optional(Header("x-amz-expiration")),
        ETag: Schema.optional(Header("ETag")),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        ChecksumType: Schema.optional(Header("x-amz-checksum-type")),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        VersionId: Schema.optional(Header("x-amz-version-id")),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        SSEKMSEncryptionContext: Schema.optional(
          Header("x-amz-server-side-encryption-context"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        Size: Schema.optional(Header("x-amz-object-size", Schema.Number)),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(
        Error("EncryptionTypeMismatch", Schema.Struct({})),
        Error("InvalidRequest", Schema.Struct({})),
        Error("InvalidWriteOffset", Schema.Struct({})),
        Error("TooManyParts", Schema.Struct({})),
      ),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObjectAcl = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?acl",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObjectAcl",
      },
      Schema.Struct({
        ACL: Schema.optional(Header("x-amz-acl")),
        AccessControlPolicy: Schema.optional(
          Body(
            "AccessControlPolicy",
            Schema.Struct({
              Grants: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    Grantee: Schema.optional(
                      Schema.Struct({
                        DisplayName: Schema.optional(Schema.String),
                        EmailAddress: Schema.optional(Schema.String),
                        ID: Schema.optional(Schema.String),
                        URI: Schema.optional(Schema.String),
                        Type: Schema.String,
                      }),
                    ),
                    Permission: Schema.optional(Schema.String),
                  }),
                ),
              ),
              Owner: Schema.optional(
                Schema.Struct({
                  DisplayName: Schema.optional(Schema.String),
                  ID: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        GrantFullControl: Schema.optional(Header("x-amz-grant-full-control")),
        GrantRead: Schema.optional(Header("x-amz-grant-read")),
        GrantReadACP: Schema.optional(Header("x-amz-grant-read-acp")),
        GrantWrite: Schema.optional(Header("x-amz-grant-write")),
        GrantWriteACP: Schema.optional(Header("x-amz-grant-write-acp")),
        Key: Path("Key", Schema.String),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        VersionId: Schema.optional(Schema.String),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Union(Error("NoSuchKey", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObjectLegalHold = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?legal-hold",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObjectLegalHold",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        LegalHold: Schema.optional(
          Body(
            "LegalHold",
            Schema.Struct({ Status: Schema.optional(Schema.String) }),
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        VersionId: Schema.optional(Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObjectLockConfiguration = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?object-lock",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObjectLockConfiguration",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ObjectLockConfiguration: Schema.optional(
          Body(
            "ObjectLockConfiguration",
            Schema.Struct({
              ObjectLockEnabled: Schema.optional(Schema.String),
              Rule: Schema.optional(
                Schema.Struct({
                  DefaultRetention: Schema.optional(
                    Schema.Struct({
                      Mode: Schema.optional(Schema.String),
                      Days: Schema.optional(Schema.Number),
                      Years: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        Token: Schema.optional(Header("x-amz-bucket-object-lock-token")),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObjectRetention = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?retention",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObjectRetention",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        Retention: Schema.optional(
          Body(
            "Retention",
            Schema.Struct({
              Mode: Schema.optional(Schema.String),
              RetainUntilDate: Schema.optional(Schema.Date),
            }),
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        VersionId: Schema.optional(Schema.String),
        BypassGovernanceRetention: Schema.optional(
          Header("x-amz-bypass-governance-retention", Schema.Boolean),
        ),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutObjectTagging = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?tagging",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutObjectTagging",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        Tagging: Body(
          "Tagging",
          Schema.Struct({
            TagSet: Schema.Array(
              Schema.Struct({ Key: Schema.String, Value: Schema.String }),
            ),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
      }),
      Schema.Struct({ VersionId: Schema.optional(Header("x-amz-version-id")) }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const PutPublicAccessBlock = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}?publicAccessBlock",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "PutPublicAccessBlock",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        PublicAccessBlockConfiguration: Body(
          "PublicAccessBlockConfiguration",
          Schema.Struct({
            BlockPublicAcls: Schema.optional(Schema.Boolean),
            IgnorePublicAcls: Schema.optional(Schema.Boolean),
            BlockPublicPolicy: Schema.optional(Schema.Boolean),
            RestrictPublicBuckets: Schema.optional(Schema.Boolean),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const RenameObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?renameObject",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "RenameObject",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Path("Key", Schema.String),
        RenameSource: Header("x-amz-rename-source"),
        DestinationIfMatch: Schema.optional(Header("If-Match")),
        DestinationIfNoneMatch: Schema.optional(Header("If-None-Match")),
        DestinationIfModifiedSince: Schema.optional(
          Header("If-Modified-Since", Schema.Date),
        ),
        DestinationIfUnmodifiedSince: Schema.optional(
          Header("If-Unmodified-Since", Schema.Date),
        ),
        SourceIfMatch: Schema.optional(Header("x-amz-rename-source-if-match")),
        SourceIfNoneMatch: Schema.optional(
          Header("x-amz-rename-source-if-none-match"),
        ),
        SourceIfModifiedSince: Schema.optional(
          Header("x-amz-rename-source-if-modified-since", Schema.Date),
        ),
        SourceIfUnmodifiedSince: Schema.optional(
          Header("x-amz-rename-source-if-unmodified-since", Schema.Date),
        ),
        ClientToken: Schema.optional(Header("x-amz-client-token")),
      }),
      Schema.Struct({}),
      Schema.Union(Error("IdempotencyParameterMismatch", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const RestoreObject = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?restore",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "RestoreObject",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        VersionId: Schema.optional(Schema.String),
        RestoreRequest: Schema.optional(
          Body(
            "RestoreRequest",
            Schema.Struct({
              Days: Schema.optional(Schema.Number),
              GlacierJobParameters: Schema.optional(
                Schema.Struct({ Tier: Schema.String }),
              ),
              Type: Schema.optional(Schema.String),
              Tier: Schema.optional(Schema.String),
              Description: Schema.optional(Schema.String),
              SelectParameters: Schema.optional(
                Schema.Struct({
                  InputSerialization: Schema.Struct({
                    CSV: Schema.optional(
                      Schema.Struct({
                        FileHeaderInfo: Schema.optional(Schema.String),
                        Comments: Schema.optional(Schema.String),
                        QuoteEscapeCharacter: Schema.optional(Schema.String),
                        RecordDelimiter: Schema.optional(Schema.String),
                        FieldDelimiter: Schema.optional(Schema.String),
                        QuoteCharacter: Schema.optional(Schema.String),
                        AllowQuotedRecordDelimiter: Schema.optional(
                          Schema.Boolean,
                        ),
                      }),
                    ),
                    CompressionType: Schema.optional(Schema.String),
                    JSON: Schema.optional(
                      Schema.Struct({ Type: Schema.optional(Schema.String) }),
                    ),
                    Parquet: Schema.optional(Schema.Struct({})),
                  }),
                  ExpressionType: Schema.String,
                  Expression: Schema.String,
                  OutputSerialization: Schema.Struct({
                    CSV: Schema.optional(
                      Schema.Struct({
                        QuoteFields: Schema.optional(Schema.String),
                        QuoteEscapeCharacter: Schema.optional(Schema.String),
                        RecordDelimiter: Schema.optional(Schema.String),
                        FieldDelimiter: Schema.optional(Schema.String),
                        QuoteCharacter: Schema.optional(Schema.String),
                      }),
                    ),
                    JSON: Schema.optional(
                      Schema.Struct({
                        RecordDelimiter: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                }),
              ),
              OutputLocation: Schema.optional(
                Schema.Struct({
                  S3: Schema.optional(
                    Schema.Struct({
                      BucketName: Schema.String,
                      Prefix: Schema.String,
                      Encryption: Schema.optional(
                        Schema.Struct({
                          EncryptionType: Schema.String,
                          KMSKeyId: Schema.optional(Schema.String),
                          KMSContext: Schema.optional(Schema.String),
                        }),
                      ),
                      CannedACL: Schema.optional(Schema.String),
                      AccessControlList: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Grantee: Schema.optional(
                              Schema.Struct({
                                DisplayName: Schema.optional(Schema.String),
                                EmailAddress: Schema.optional(Schema.String),
                                ID: Schema.optional(Schema.String),
                                URI: Schema.optional(Schema.String),
                                Type: Schema.String,
                              }),
                            ),
                            Permission: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      Tagging: Schema.optional(
                        Schema.Struct({
                          TagSet: Schema.Array(
                            Schema.Struct({
                              Key: Schema.String,
                              Value: Schema.String,
                            }),
                          ),
                        }),
                      ),
                      UserMetadata: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            Name: Schema.optional(Schema.String),
                            Value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      StorageClass: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
        RestoreOutputPath: Schema.optional(Header("x-amz-restore-output-path")),
      }),
      Schema.Union(Error("ObjectAlreadyInActiveTierError", Schema.Struct({}))),
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const SelectObjectContent = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?select&select-type=2",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "SelectObjectContent",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        Key: Schema.String,
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        Expression: Schema.String,
        ExpressionType: Schema.String,
        RequestProgress: Schema.optional(
          Schema.Struct({ Enabled: Schema.optional(Schema.Boolean) }),
        ),
        InputSerialization: Schema.Struct({
          CSV: Schema.optional(
            Schema.Struct({
              FileHeaderInfo: Schema.optional(Schema.String),
              Comments: Schema.optional(Schema.String),
              QuoteEscapeCharacter: Schema.optional(Schema.String),
              RecordDelimiter: Schema.optional(Schema.String),
              FieldDelimiter: Schema.optional(Schema.String),
              QuoteCharacter: Schema.optional(Schema.String),
              AllowQuotedRecordDelimiter: Schema.optional(Schema.Boolean),
            }),
          ),
          CompressionType: Schema.optional(Schema.String),
          JSON: Schema.optional(
            Schema.Struct({ Type: Schema.optional(Schema.String) }),
          ),
          Parquet: Schema.optional(Schema.Struct({})),
        }),
        OutputSerialization: Schema.Struct({
          CSV: Schema.optional(
            Schema.Struct({
              QuoteFields: Schema.optional(Schema.String),
              QuoteEscapeCharacter: Schema.optional(Schema.String),
              RecordDelimiter: Schema.optional(Schema.String),
              FieldDelimiter: Schema.optional(Schema.String),
              QuoteCharacter: Schema.optional(Schema.String),
            }),
          ),
          JSON: Schema.optional(
            Schema.Struct({ RecordDelimiter: Schema.optional(Schema.String) }),
          ),
        }),
        ScanRange: Schema.optional(
          Schema.Struct({
            Start: Schema.optional(Schema.Number),
            End: Schema.optional(Schema.Number),
          }),
        ),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        Payload: Schema.optional(
          Body(
            "undefined",
            Schema.Union(
              Schema.Struct({ Payload: Schema.optional(StreamBody()) }),
              Schema.Struct({
                Details: Schema.optional(
                  Schema.Struct({
                    BytesScanned: Schema.optional(Schema.Number),
                    BytesProcessed: Schema.optional(Schema.Number),
                    BytesReturned: Schema.optional(Schema.Number),
                  }),
                ),
              }),
              Schema.Struct({
                Details: Schema.optional(
                  Schema.Struct({
                    BytesScanned: Schema.optional(Schema.Number),
                    BytesProcessed: Schema.optional(Schema.Number),
                    BytesReturned: Schema.optional(Schema.Number),
                  }),
                ),
              }),
              Schema.Struct({}),
              Schema.Struct({}),
            ),
          ),
        ),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const UpdateBucketMetadataInventoryTableConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?metadataInventoryTable",
          method: "PUT",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "UpdateBucketMetadataInventoryTableConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          ContentMD5: Schema.optional(Header("Content-MD5")),
          ChecksumAlgorithm: Schema.optional(
            Header("x-amz-sdk-checksum-algorithm"),
          ),
          InventoryTableConfiguration: Body(
            "InventoryTableConfiguration",
            Schema.Struct({
              ConfigurationState: Schema.String,
              EncryptionConfiguration: Schema.optional(
                Schema.Struct({
                  SseAlgorithm: Schema.String,
                  KmsKeyArn: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const UpdateBucketMetadataJournalTableConfiguration =
  /*#__PURE__*/ makeOperation(
    () =>
      Operation(
        {
          uri: "/{Bucket}?metadataJournalTable",
          method: "PUT",
          sdkId: "S3",
          sigV4ServiceName: "s3",
          name: "UpdateBucketMetadataJournalTableConfiguration",
        },
        Schema.Struct({
          Bucket: Path("Bucket", Schema.String),
          ContentMD5: Schema.optional(Header("Content-MD5")),
          ChecksumAlgorithm: Schema.optional(
            Header("x-amz-sdk-checksum-algorithm"),
          ),
          JournalTableConfiguration: Body(
            "JournalTableConfiguration",
            Schema.Struct({
              RecordExpiration: Schema.Struct({
                Expiration: Schema.String,
                Days: Schema.optional(Schema.Number),
              }),
            }),
          ),
          ExpectedBucketOwner: Schema.optional(
            Header("x-amz-expected-bucket-owner"),
          ),
        }),
        Schema.Struct({}),
        Schema.Void,
      ),
    FormatXMLRequest,
    FormatXMLResponse,
    FormatXMLResponse,
  );
export const UploadPart = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=UploadPart",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "UploadPart",
      },
      Schema.Struct({
        Body: Schema.optional(Body("undefined", StreamBody())),
        Bucket: Path("Bucket", Schema.String),
        ContentLength: Schema.optional(Header("Content-Length", Schema.Number)),
        ContentMD5: Schema.optional(Header("Content-MD5")),
        ChecksumAlgorithm: Schema.optional(
          Header("x-amz-sdk-checksum-algorithm"),
        ),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        Key: Path("Key", Schema.String),
        PartNumber: Schema.Number,
        UploadId: Schema.String,
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        ETag: Schema.optional(Header("ETag")),
        ChecksumCRC32: Schema.optional(Header("x-amz-checksum-crc32")),
        ChecksumCRC32C: Schema.optional(Header("x-amz-checksum-crc32c")),
        ChecksumCRC64NVME: Schema.optional(Header("x-amz-checksum-crc64nvme")),
        ChecksumSHA1: Schema.optional(Header("x-amz-checksum-sha1")),
        ChecksumSHA256: Schema.optional(Header("x-amz-checksum-sha256")),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const UploadPartCopy = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/{Bucket}/{Key+}?x-id=UploadPartCopy",
        method: "PUT",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "UploadPartCopy",
      },
      Schema.Struct({
        Bucket: Path("Bucket", Schema.String),
        CopySource: Header("x-amz-copy-source"),
        CopySourceIfMatch: Schema.optional(
          Header("x-amz-copy-source-if-match"),
        ),
        CopySourceIfModifiedSince: Schema.optional(
          Header("x-amz-copy-source-if-modified-since", Schema.Date),
        ),
        CopySourceIfNoneMatch: Schema.optional(
          Header("x-amz-copy-source-if-none-match"),
        ),
        CopySourceIfUnmodifiedSince: Schema.optional(
          Header("x-amz-copy-source-if-unmodified-since", Schema.Date),
        ),
        CopySourceRange: Schema.optional(Header("x-amz-copy-source-range")),
        Key: Schema.String,
        PartNumber: Schema.Number,
        UploadId: Schema.String,
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKey: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        CopySourceSSECustomerAlgorithm: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-algorithm"),
        ),
        CopySourceSSECustomerKey: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-key"),
        ),
        CopySourceSSECustomerKeyMD5: Schema.optional(
          Header("x-amz-copy-source-server-side-encryption-customer-key-MD5"),
        ),
        RequestPayer: Schema.optional(Header("x-amz-request-payer")),
        ExpectedBucketOwner: Schema.optional(
          Header("x-amz-expected-bucket-owner"),
        ),
        ExpectedSourceBucketOwner: Schema.optional(
          Header("x-amz-source-expected-bucket-owner"),
        ),
      }),
      Schema.Struct({
        CopySourceVersionId: Schema.optional(
          Header("x-amz-copy-source-version-id"),
        ),
        CopyPartResult: Schema.optional(
          Body(
            "undefined",
            Schema.Struct({
              ETag: Schema.optional(Schema.String),
              LastModified: Schema.optional(Schema.Date),
              ChecksumCRC32: Schema.optional(Schema.String),
              ChecksumCRC32C: Schema.optional(Schema.String),
              ChecksumCRC64NVME: Schema.optional(Schema.String),
              ChecksumSHA1: Schema.optional(Schema.String),
              ChecksumSHA256: Schema.optional(Schema.String),
            }),
          ),
        ),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-server-side-encryption"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header("x-amz-server-side-encryption-customer-algorithm"),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header("x-amz-server-side-encryption-customer-key-MD5"),
        ),
        SSEKMSKeyId: Schema.optional(
          Header("x-amz-server-side-encryption-aws-kms-key-id"),
        ),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
        RequestCharged: Schema.optional(Header("x-amz-request-charged")),
      }),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
export const WriteGetObjectResponse = /*#__PURE__*/ makeOperation(
  () =>
    Operation(
      {
        uri: "/WriteGetObjectResponse",
        method: "POST",
        sdkId: "S3",
        sigV4ServiceName: "s3",
        name: "WriteGetObjectResponse",
      },
      Schema.Struct({
        RequestRoute: Header("x-amz-request-route"),
        RequestToken: Header("x-amz-request-token"),
        Body: Schema.optional(Body("undefined", StreamBody())),
        StatusCode: Schema.optional(Header("x-amz-fwd-status", Schema.Number)),
        ErrorCode: Schema.optional(Header("x-amz-fwd-error-code")),
        ErrorMessage: Schema.optional(Header("x-amz-fwd-error-message")),
        AcceptRanges: Schema.optional(Header("x-amz-fwd-header-accept-ranges")),
        CacheControl: Schema.optional(Header("x-amz-fwd-header-Cache-Control")),
        ContentDisposition: Schema.optional(
          Header("x-amz-fwd-header-Content-Disposition"),
        ),
        ContentEncoding: Schema.optional(
          Header("x-amz-fwd-header-Content-Encoding"),
        ),
        ContentLanguage: Schema.optional(
          Header("x-amz-fwd-header-Content-Language"),
        ),
        ContentLength: Schema.optional(Header("Content-Length", Schema.Number)),
        ContentRange: Schema.optional(Header("x-amz-fwd-header-Content-Range")),
        ContentType: Schema.optional(Header("x-amz-fwd-header-Content-Type")),
        ChecksumCRC32: Schema.optional(
          Header("x-amz-fwd-header-x-amz-checksum-crc32"),
        ),
        ChecksumCRC32C: Schema.optional(
          Header("x-amz-fwd-header-x-amz-checksum-crc32c"),
        ),
        ChecksumCRC64NVME: Schema.optional(
          Header("x-amz-fwd-header-x-amz-checksum-crc64nvme"),
        ),
        ChecksumSHA1: Schema.optional(
          Header("x-amz-fwd-header-x-amz-checksum-sha1"),
        ),
        ChecksumSHA256: Schema.optional(
          Header("x-amz-fwd-header-x-amz-checksum-sha256"),
        ),
        DeleteMarker: Schema.optional(
          Header("x-amz-fwd-header-x-amz-delete-marker", Schema.Boolean),
        ),
        ETag: Schema.optional(Header("x-amz-fwd-header-ETag")),
        Expires: Schema.optional(Header("x-amz-fwd-header-Expires")),
        Expiration: Schema.optional(
          Header("x-amz-fwd-header-x-amz-expiration"),
        ),
        LastModified: Schema.optional(
          Header("x-amz-fwd-header-Last-Modified", Schema.Date),
        ),
        MissingMeta: Schema.optional(
          Header("x-amz-fwd-header-x-amz-missing-meta", Schema.Number),
        ),
        Metadata: Schema.optional(
          Schema.Record({ key: Schema.String, value: Schema.String }),
        ),
        ObjectLockMode: Schema.optional(
          Header("x-amz-fwd-header-x-amz-object-lock-mode"),
        ),
        ObjectLockLegalHoldStatus: Schema.optional(
          Header("x-amz-fwd-header-x-amz-object-lock-legal-hold"),
        ),
        ObjectLockRetainUntilDate: Schema.optional(
          Header(
            "x-amz-fwd-header-x-amz-object-lock-retain-until-date",
            Schema.Date,
          ),
        ),
        PartsCount: Schema.optional(
          Header("x-amz-fwd-header-x-amz-mp-parts-count", Schema.Number),
        ),
        ReplicationStatus: Schema.optional(
          Header("x-amz-fwd-header-x-amz-replication-status"),
        ),
        RequestCharged: Schema.optional(
          Header("x-amz-fwd-header-x-amz-request-charged"),
        ),
        Restore: Schema.optional(Header("x-amz-fwd-header-x-amz-restore")),
        ServerSideEncryption: Schema.optional(
          Header("x-amz-fwd-header-x-amz-server-side-encryption"),
        ),
        SSECustomerAlgorithm: Schema.optional(
          Header(
            "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm",
          ),
        ),
        SSEKMSKeyId: Schema.optional(
          Header(
            "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id",
          ),
        ),
        SSECustomerKeyMD5: Schema.optional(
          Header(
            "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5",
          ),
        ),
        StorageClass: Schema.optional(
          Header("x-amz-fwd-header-x-amz-storage-class"),
        ),
        TagCount: Schema.optional(
          Header("x-amz-fwd-header-x-amz-tagging-count", Schema.Number),
        ),
        VersionId: Schema.optional(Header("x-amz-fwd-header-x-amz-version-id")),
        BucketKeyEnabled: Schema.optional(
          Header(
            "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled",
            Schema.Boolean,
          ),
        ),
      }),
      Schema.Struct({}),
      Schema.Void,
    ),
  FormatXMLRequest,
  FormatXMLResponse,
  FormatXMLResponse,
);
