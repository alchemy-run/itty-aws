import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/iam.ts";
import type { IAM as _IAM } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IAM",
  version: "2010-05-08",
  protocol: "awsQuery",
  sigV4ServiceName: "iam",
  endpointPrefix: "iam",
  globalEndpoint: "https://iam.amazonaws.com",
  signingRegion: "us-east-1",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IAM = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(protocolMetadata),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IAM;
