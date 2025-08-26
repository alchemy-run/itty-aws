import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { WorkMail as _WorkMail } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WorkMail",
  version: "2017-10-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "workmail",
  endpointPrefix: "workmail",
  targetPrefix: "WorkMailService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WorkMail = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _WorkMail;
