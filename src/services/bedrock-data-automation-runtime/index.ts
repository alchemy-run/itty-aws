import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { BedrockDataAutomationRuntime as _BedrockDataAutomationRuntimeClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Data Automation Runtime",
  version: "2024-06-13",
  protocol: "awsJson1_1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-data-automation-runtime",
  targetPrefix: "AmazonBedrockKeystoneRuntimeService",
} as const satisfies ServiceMetadata;

export type _BedrockDataAutomationRuntime = _BedrockDataAutomationRuntimeClient;
export interface BedrockDataAutomationRuntime
  extends _BedrockDataAutomationRuntime {}
export const BedrockDataAutomationRuntime = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson11Handler());
  }
} as unknown as typeof _BedrockDataAutomationRuntimeClient;
