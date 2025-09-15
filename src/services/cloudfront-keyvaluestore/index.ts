import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CloudFrontKeyValueStore as _CloudFrontKeyValueStoreClient } from "./types.ts";

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
  sdkId: "CloudFront KeyValueStore",
  version: "2022-07-26",
  protocol: "restJson1",
  sigV4ServiceName: "cloudfront-keyvaluestore",
  endpointPrefix: "cloudfront-keyvaluestore",
  operations: {
    DeleteKey: {
      http: "DELETE /key-value-stores/{KvsARN}/keys/{Key}",
      traits: {
        ETag: "ETag",
      },
    },
    DescribeKeyValueStore: {
      http: "GET /key-value-stores/{KvsARN}",
      traits: {
        ETag: "ETag",
      },
    },
    GetKey: "GET /key-value-stores/{KvsARN}/keys/{Key}",
    ListKeys: "GET /key-value-stores/{KvsARN}/keys",
    PutKey: {
      http: "PUT /key-value-stores/{KvsARN}/keys/{Key}",
      traits: {
        ETag: "ETag",
      },
    },
    UpdateKeys: {
      http: "POST /key-value-stores/{KvsARN}/keys",
      traits: {
        ETag: "ETag",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _CloudFrontKeyValueStore = _CloudFrontKeyValueStoreClient;
export interface CloudFrontKeyValueStore extends _CloudFrontKeyValueStore {}
export const CloudFrontKeyValueStore = class extends AWSServiceClient {
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
} as unknown as typeof _CloudFrontKeyValueStoreClient;
