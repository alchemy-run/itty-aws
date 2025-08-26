import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Firehose as _Firehose } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Firehose",
  version: "2015-08-04",
  protocol: "awsJson1_1",
  sigV4ServiceName: "firehose",
  endpointPrefix: "firehose",
  targetPrefix: "Firehose_20150804",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Firehose = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Firehose;
