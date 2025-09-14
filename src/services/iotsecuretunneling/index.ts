import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { IoTSecureTunneling as _IoTSecureTunnelingClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoTSecureTunneling",
  version: "2018-10-05",
  protocol: "awsJson1_1",
  sigV4ServiceName: "IoTSecuredTunneling",
  endpointPrefix: "api.tunneling.iot",
  targetPrefix: "IoTSecuredTunneling",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTSecureTunneling = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson11Handler());
  }
} as unknown as typeof _IoTSecureTunnelingClient;
