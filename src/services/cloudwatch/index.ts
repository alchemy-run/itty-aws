import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/cloudwatch.ts";
import type { CloudWatch as _CloudWatch } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudWatch",
  version: "2010-08-01",
  protocol: "awsQuery",
  sigV4ServiceName: "monitoring",
  endpointPrefix: "monitoring",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudWatch = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(protocolMetadata),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudWatch;
