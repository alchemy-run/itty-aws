import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { ECS as _ECS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ECS",
  version: "2014-11-13",
  protocol: "awsJson1_1",
  sigV4ServiceName: "ecs",
  endpointPrefix: "ecs",
  targetPrefix: "AmazonEC2ContainerServiceV20141113",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ECS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ECS;
