import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { S3Vectors as _S3VectorsClient } from "./types.ts";

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
  sdkId: "S3Vectors",
  version: "2025-07-15",
  protocol: "restJson1",
  sigV4ServiceName: "s3vectors",
  endpointPrefix: "s3vectors",
  operations: {
    CreateIndex: "POST /CreateIndex",
    CreateVectorBucket: "POST /CreateVectorBucket",
    DeleteIndex: "POST /DeleteIndex",
    DeleteVectorBucket: "POST /DeleteVectorBucket",
    DeleteVectorBucketPolicy: "POST /DeleteVectorBucketPolicy",
    DeleteVectors: "POST /DeleteVectors",
    GetIndex: "POST /GetIndex",
    GetVectorBucket: "POST /GetVectorBucket",
    GetVectorBucketPolicy: "POST /GetVectorBucketPolicy",
    GetVectors: "POST /GetVectors",
    ListIndexes: "POST /ListIndexes",
    ListVectorBuckets: "POST /ListVectorBuckets",
    ListVectors: "POST /ListVectors",
    PutVectorBucketPolicy: "POST /PutVectorBucketPolicy",
    PutVectors: "POST /PutVectors",
    QueryVectors: "POST /QueryVectors",
  },
} as const satisfies ServiceMetadata;

export type _S3Vectors = _S3VectorsClient;
export interface S3Vectors extends _S3Vectors {}
export const S3Vectors = class extends AWSServiceClient {
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
} as unknown as typeof _S3VectorsClient;
