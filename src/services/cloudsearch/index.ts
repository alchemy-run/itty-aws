import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/cloudsearch.ts";
import type { CloudSearch as _CloudSearch } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudSearch",
  version: "2013-01-01",
  protocol: "awsQuery",
  sigV4ServiceName: "cloudsearch",
  endpointPrefix: "cloudsearch",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudSearch = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(protocolMetadata),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudSearch;
