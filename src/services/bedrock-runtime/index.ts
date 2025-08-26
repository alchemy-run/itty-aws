import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockRuntime as _BedrockRuntime } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Runtime",
  version: "2023-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-runtime",
  operations: {
    ApplyGuardrail:
      "POST /guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply",
    Converse: "POST /model/{modelId}/converse",
    ConverseStream: {
      http: "POST /model/{modelId}/converse-stream",
      traits: {
        stream: "httpPayload",
      },
    },
    GetAsyncInvoke: "GET /async-invoke/{invocationArn}",
    InvokeModel: {
      http: "POST /model/{modelId}/invoke",
      traits: {
        body: "httpPayload",
        contentType: "Content-Type",
        performanceConfigLatency: "X-Amzn-Bedrock-PerformanceConfig-Latency",
      },
    },
    InvokeModelWithBidirectionalStream: {
      http: "POST /model/{modelId}/invoke-with-bidirectional-stream",
      traits: {
        body: "httpPayload",
      },
    },
    InvokeModelWithResponseStream: {
      http: "POST /model/{modelId}/invoke-with-response-stream",
      traits: {
        body: "httpPayload",
        contentType: "X-Amzn-Bedrock-Content-Type",
        performanceConfigLatency: "X-Amzn-Bedrock-PerformanceConfig-Latency",
      },
    },
    ListAsyncInvokes: "GET /async-invoke",
    StartAsyncInvoke: "POST /async-invoke",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const BedrockRuntime = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _BedrockRuntime;
