import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CodePipeline as _CodePipeline } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CodePipeline",
  version: "2015-07-09",
  protocol: "awsJson1_1",
  sigV4ServiceName: "codepipeline",
  endpointPrefix: "codepipeline",
  targetPrefix: "CodePipeline_20150709",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CodePipeline = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CodePipeline;
