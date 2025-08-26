import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { BedrockDataAutomationRuntime as _BedrockDataAutomationRuntime } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Data Automation Runtime",
  version: "2024-06-13",
  protocol: "awsJson1_1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-data-automation-runtime",
  targetPrefix: "AmazonBedrockKeystoneRuntimeService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const BedrockDataAutomationRuntime = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _BedrockDataAutomationRuntime;
