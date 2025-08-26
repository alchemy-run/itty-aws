import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CloudFrontKeyValueStore as _CloudFrontKeyValueStore } from "./types.ts";

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

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudFrontKeyValueStore = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudFrontKeyValueStore;
