import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import type { SNS as _SNS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SNS",
  version: "2010-03-31",
  protocol: "awsQuery",
  sigV4ServiceName: "sns",
  endpointPrefix: "sns",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SNS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SNS;
