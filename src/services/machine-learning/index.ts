import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MachineLearning as _MachineLearning } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Machine Learning",
  version: "2014-12-12",
  protocol: "awsJson1_1",
  sigV4ServiceName: "machinelearning",
  endpointPrefix: "machinelearning",
  targetPrefix: "AmazonML_20141212",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MachineLearning = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MachineLearning;
