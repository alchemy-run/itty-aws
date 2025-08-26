import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import type { AutoScaling as _AutoScaling } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Auto Scaling",
  version: "2011-01-01",
  protocol: "awsQuery",
  sigV4ServiceName: "autoscaling",
  endpointPrefix: "autoscaling",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AutoScaling = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _AutoScaling;
