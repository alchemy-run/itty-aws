import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { FraudDetector as _FraudDetector } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "FraudDetector",
  version: "2019-11-15",
  protocol: "awsJson1_1",
  sigV4ServiceName: "frauddetector",
  endpointPrefix: "frauddetector",
  targetPrefix: "AWSHawksNestServiceFacade",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const FraudDetector = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _FraudDetector;
