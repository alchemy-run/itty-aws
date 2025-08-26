import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Lightsail as _Lightsail } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Lightsail",
  version: "2016-11-28",
  protocol: "awsJson1_1",
  sigV4ServiceName: "lightsail",
  endpointPrefix: "lightsail",
  targetPrefix: "Lightsail_20161128",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Lightsail = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Lightsail;
