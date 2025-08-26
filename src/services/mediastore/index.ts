import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { MediaStore as _MediaStore } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaStore",
  version: "2017-09-01",
  protocol: "awsJson1_1",
  sigV4ServiceName: "mediastore",
  endpointPrefix: "mediastore",
  targetPrefix: "MediaStore_20170901",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaStore = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MediaStore;
