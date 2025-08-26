import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerMetrics as _SageMakerMetrics } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker Metrics",
  version: "2022-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "metrics.sagemaker",
  operations: {
    BatchGetMetrics: "POST /BatchGetMetrics",
    BatchPutMetrics: "PUT /BatchPutMetrics",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SageMakerMetrics = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SageMakerMetrics;
