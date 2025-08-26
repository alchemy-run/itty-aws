import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { b2bi as _b2bi } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "b2bi",
  version: "2022-06-23",
  protocol: "awsJson1_0",
  sigV4ServiceName: "b2bi",
  endpointPrefix: "b2bi",
  targetPrefix: "B2BI",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const b2bi = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _b2bi;
