import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CognitoIdentityProvider as _CognitoIdentityProviderClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Cognito Identity Provider",
  version: "2016-04-18",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cognito-idp",
  endpointPrefix: "cognito-idp",
  targetPrefix: "AWSCognitoIdentityProviderService",
} as const satisfies ServiceMetadata;

export type _CognitoIdentityProvider = _CognitoIdentityProviderClient;
export interface CognitoIdentityProvider extends _CognitoIdentityProvider {}
export const CognitoIdentityProvider = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson11Handler());
  }
} as unknown as typeof _CognitoIdentityProviderClient;
