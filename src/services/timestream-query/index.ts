import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { TimestreamQuery as _TimestreamQuery } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Timestream Query",
  version: "2018-11-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "timestream",
  endpointPrefix: "query.timestream",
  targetPrefix: "Timestream_20181101",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const TimestreamQuery = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _TimestreamQuery;
