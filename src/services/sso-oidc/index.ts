import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSOOIDC as _SSOOIDCClient } from "./types.ts";

export * from "./types.ts";

export {IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SSO OIDC",
  version: "2019-06-10",
  protocol: "restJson1",
  sigV4ServiceName: "sso-oauth",
  endpointPrefix: "oidc",
  operations: {
    "CreateToken": "POST /token",
    "CreateTokenWithIAM": "POST /token?aws_iam=t",
    "RegisterClient": "POST /client/register",
    "StartDeviceAuthorization": "POST /device_authorization",
  },
} as const satisfies ServiceMetadata;

export type _SSOOIDC = _SSOOIDCClient;
export interface SSOOIDC extends _SSOOIDC {}
export const SSOOIDC = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _SSOOIDCClient;
