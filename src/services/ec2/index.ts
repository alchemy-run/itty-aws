import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { Ec2QueryHandler } from "../../protocols/ec2-query.ts";
import type { EC2 as _EC2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EC2",
  version: "2016-11-15",
  protocol: "ec2Query",
  sigV4ServiceName: "ec2",
  endpointPrefix: "ec2",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EC2 = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new Ec2QueryHandler());
  }
} as unknown as typeof _EC2;
