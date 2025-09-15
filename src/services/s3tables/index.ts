import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { S3Tables as _S3TablesClient } from "./types.ts";

export * from "./types.ts";

export {
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "S3Tables",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "s3tables",
  operations: {
    CreateNamespace: "PUT /namespaces/{tableBucketARN}",
    CreateTable: "PUT /tables/{tableBucketARN}/{namespace}",
    CreateTableBucket: "PUT /buckets",
    DeleteNamespace: "DELETE /namespaces/{tableBucketARN}/{namespace}",
    DeleteTable: "DELETE /tables/{tableBucketARN}/{namespace}/{name}",
    DeleteTableBucket: "DELETE /buckets/{tableBucketARN}",
    DeleteTableBucketEncryption: "DELETE /buckets/{tableBucketARN}/encryption",
    DeleteTableBucketPolicy: "DELETE /buckets/{tableBucketARN}/policy",
    DeleteTablePolicy:
      "DELETE /tables/{tableBucketARN}/{namespace}/{name}/policy",
    GetNamespace: "GET /namespaces/{tableBucketARN}/{namespace}",
    GetTable: "GET /get-table",
    GetTableBucket: "GET /buckets/{tableBucketARN}",
    GetTableBucketEncryption: "GET /buckets/{tableBucketARN}/encryption",
    GetTableBucketMaintenanceConfiguration:
      "GET /buckets/{tableBucketARN}/maintenance",
    GetTableBucketPolicy: "GET /buckets/{tableBucketARN}/policy",
    GetTableEncryption:
      "GET /tables/{tableBucketARN}/{namespace}/{name}/encryption",
    GetTableMaintenanceConfiguration:
      "GET /tables/{tableBucketARN}/{namespace}/{name}/maintenance",
    GetTableMaintenanceJobStatus:
      "GET /tables/{tableBucketARN}/{namespace}/{name}/maintenance-job-status",
    GetTableMetadataLocation:
      "GET /tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
    GetTablePolicy: "GET /tables/{tableBucketARN}/{namespace}/{name}/policy",
    ListNamespaces: "GET /namespaces/{tableBucketARN}",
    ListTableBuckets: "GET /buckets",
    ListTables: "GET /tables/{tableBucketARN}",
    PutTableBucketEncryption: "PUT /buckets/{tableBucketARN}/encryption",
    PutTableBucketMaintenanceConfiguration:
      "PUT /buckets/{tableBucketARN}/maintenance/{type}",
    PutTableBucketPolicy: "PUT /buckets/{tableBucketARN}/policy",
    PutTableMaintenanceConfiguration:
      "PUT /tables/{tableBucketARN}/{namespace}/{name}/maintenance/{type}",
    PutTablePolicy: "PUT /tables/{tableBucketARN}/{namespace}/{name}/policy",
    RenameTable: "PUT /tables/{tableBucketARN}/{namespace}/{name}/rename",
    UpdateTableMetadataLocation:
      "PUT /tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
  },
} as const satisfies ServiceMetadata;

export type _S3Tables = _S3TablesClient;
export interface S3Tables extends _S3Tables {}
export const S3Tables = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _S3TablesClient;
