import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CognitoIdentity as _CognitoIdentity } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Cognito Identity",
  version: "2014-06-30",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cognito-identity",
  endpointPrefix: "cognito-identity",
  targetPrefix: "AWSCognitoIdentityService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CognitoIdentity = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CognitoIdentity;
