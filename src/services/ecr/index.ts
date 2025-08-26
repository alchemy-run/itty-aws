import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { ECR as _ECR } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ECR",
  version: "2015-09-21",
  protocol: "awsJson1_1",
  sigV4ServiceName: "ecr",
  endpointPrefix: "api.ecr",
  targetPrefix: "AmazonEC2ContainerRegistry_V20150921",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ECR = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ECR;
