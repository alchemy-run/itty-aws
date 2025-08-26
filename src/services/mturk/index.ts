import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MTurk as _MTurk } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MTurk",
  version: "2017-01-17",
  protocol: "awsJson1_1",
  sigV4ServiceName: "mturk-requester",
  endpointPrefix: "mturk-requester",
  targetPrefix: "MTurkRequesterServiceV20170117",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MTurk = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MTurk;
