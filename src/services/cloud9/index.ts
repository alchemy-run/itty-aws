import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { Cloud9 as _Cloud9 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Cloud9",
  version: "2017-09-23",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cloud9",
  endpointPrefix: "cloud9",
  targetPrefix: "AWSCloud9WorkspaceManagementService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Cloud9 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Cloud9;
