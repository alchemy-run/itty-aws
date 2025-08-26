import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/cloudformation.ts";
import type { CloudFormation as _CloudFormation } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudFormation",
  version: "2010-05-15",
  protocol: "awsQuery",
  sigV4ServiceName: "cloudformation",
  endpointPrefix: "cloudformation",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudFormation = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsQueryHandler(protocolMetadata),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudFormation;
