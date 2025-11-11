import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockRuntime as _BedrockRuntimeClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

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
        body: "httpStreaming",
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
        body: "httpStreaming",
        contentType: "X-Amzn-Bedrock-Content-Type",
        performanceConfigLatency: "X-Amzn-Bedrock-PerformanceConfig-Latency",
      },
    },
    ListAsyncInvokes: "GET /async-invoke",
    StartAsyncInvoke: "POST /async-invoke",
  },
} as const satisfies ServiceMetadata;

export type _BedrockRuntime = _BedrockRuntimeClient;
export interface BedrockRuntime extends _BedrockRuntime {}
export const BedrockRuntime = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _BedrockRuntimeClient;
