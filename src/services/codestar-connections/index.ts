import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { CodeStarconnections as _CodeStarconnections } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CodeStar connections",
  version: "2019-12-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "codestar-connections",
  endpointPrefix: "codestar-connections",
  targetPrefix: "CodeStar_connections_20191201",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CodeStarconnections = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CodeStarconnections;
