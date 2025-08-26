import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { Keyspaces as _Keyspaces } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Keyspaces",
  version: "2022-02-10",
  protocol: "awsJson1_0",
  sigV4ServiceName: "cassandra",
  endpointPrefix: "cassandra",
  targetPrefix: "KeyspacesService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Keyspaces = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson10Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Keyspaces;
