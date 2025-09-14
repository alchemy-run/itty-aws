import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { S3Control as _S3ControlClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "S3 Control",
  version: "2018-08-20",
  protocol: "restXml",
  sigV4ServiceName: "s3",
  endpointPrefix: "s3-control",
  operations: {
    CreateBucket: {
      traits: {
        Location: "Location",
      },
    },
    GetPublicAccessBlock: {
      traits: {
        PublicAccessBlockConfiguration: "httpPayload",
      },
    },
    GetStorageLensConfiguration: {
      traits: {
        StorageLensConfiguration: "httpPayload",
      },
    },
    GetStorageLensGroup: {
      traits: {
        StorageLensGroup: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type S3Control = typeof S3Control;
export const S3Control = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestXmlHandler());
  }
} as unknown as typeof _S3ControlClient;
