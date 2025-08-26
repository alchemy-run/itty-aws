import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CognitoIdentityProvider as _CognitoIdentityProvider } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Cognito Identity Provider",
  version: "2016-04-18",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cognito-idp",
  endpointPrefix: "cognito-idp",
  targetPrefix: "AWSCognitoIdentityProviderService",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CognitoIdentityProvider = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new AwsJson11Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CognitoIdentityProvider;
