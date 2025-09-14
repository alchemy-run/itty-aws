import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerA2IRuntime as _SageMakerA2IRuntimeClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker A2I Runtime",
  version: "2019-11-07",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "a2i-runtime.sagemaker",
  operations: {
    DeleteHumanLoop: "DELETE /human-loops/{HumanLoopName}",
    DescribeHumanLoop: "GET /human-loops/{HumanLoopName}",
    ListHumanLoops: "GET /human-loops",
    StartHumanLoop: "POST /human-loops",
    StopHumanLoop: "POST /human-loops/stop",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SageMakerA2IRuntime = class extends AWSServiceClient {
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
} as unknown as typeof _SageMakerA2IRuntimeClient;
