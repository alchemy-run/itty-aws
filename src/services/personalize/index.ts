import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Personalize as _Personalize } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Personalize",
  version: "2018-05-22",
  protocol: "awsJson1_1",
  sigV4ServiceName: "personalize",
  endpointPrefix: "personalize",
  targetPrefix: "AmazonPersonalize",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Personalize = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Personalize;
