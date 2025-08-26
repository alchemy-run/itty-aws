import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { DirectoryService as _DirectoryService } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Directory Service",
  version: "2015-04-16",
  protocol: "awsJson1_1",
  sigV4ServiceName: "ds",
  endpointPrefix: "ds",
  targetPrefix: "DirectoryService_20150416",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DirectoryService = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _DirectoryService;
