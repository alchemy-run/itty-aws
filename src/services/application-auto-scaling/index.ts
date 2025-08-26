import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { ApplicationAutoScaling as _ApplicationAutoScaling } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Application Auto Scaling",
  version: "2016-02-06",
  protocol: "awsJson1_1",
  sigV4ServiceName: "application-autoscaling",
  endpointPrefix: "application-autoscaling",
  targetPrefix: "AnyScaleFrontendService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ApplicationAutoScaling = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ApplicationAutoScaling;
