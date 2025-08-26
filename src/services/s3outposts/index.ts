import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { S3Outposts as _S3Outposts } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "S3Outposts",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "s3-outposts",
  endpointPrefix: "s3-outposts",
  operations: {
    CreateEndpoint: "POST /S3Outposts/CreateEndpoint",
    DeleteEndpoint: "DELETE /S3Outposts/DeleteEndpoint",
    ListEndpoints: "GET /S3Outposts/ListEndpoints",
    ListOutpostsWithS3: "GET /S3Outposts/ListOutpostsWithS3",
    ListSharedEndpoints: "GET /S3Outposts/ListSharedEndpoints",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const S3Outposts = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _S3Outposts;
