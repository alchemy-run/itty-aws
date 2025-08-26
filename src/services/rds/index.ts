import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import type { RDS as _RDS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "RDS",
  version: "2014-10-31",
  protocol: "awsQuery",
  sigV4ServiceName: "rds",
  endpointPrefix: "rds",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const RDS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _RDS;
