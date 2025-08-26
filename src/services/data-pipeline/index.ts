import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { DataPipeline as _DataPipeline } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Data Pipeline",
  version: "2012-10-29",
  protocol: "awsJson1_1",
  sigV4ServiceName: "datapipeline",
  endpointPrefix: "datapipeline",
  targetPrefix: "DataPipeline",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DataPipeline = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _DataPipeline;
