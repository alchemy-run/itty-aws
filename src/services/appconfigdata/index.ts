import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppConfigData as _AppConfigDataClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "AppConfigData",
  version: "2021-11-11",
  protocol: "restJson1",
  sigV4ServiceName: "appconfig",
  endpointPrefix: "appconfigdata",
  operations: {
    GetLatestConfiguration: {
      http: "GET /configuration",
      traits: {
        NextPollConfigurationToken: "Next-Poll-Configuration-Token",
        NextPollIntervalInSeconds: "Next-Poll-Interval-In-Seconds",
        ContentType: "Content-Type",
        Configuration: "httpPayload",
        VersionLabel: "Version-Label",
      },
    },
    StartConfigurationSession: "POST /configurationsessions",
  },
} as const satisfies ServiceMetadata;

export type _AppConfigData = _AppConfigDataClient;
export interface AppConfigData extends _AppConfigData {}
export const AppConfigData = class extends AWSServiceClient {
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
} as unknown as typeof _AppConfigDataClient;
