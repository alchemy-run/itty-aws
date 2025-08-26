import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import type { SES as _SES } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SES",
  version: "2010-12-01",
  protocol: "awsQuery",
  sigV4ServiceName: "ses",
  endpointPrefix: "email",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SES = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SES;
