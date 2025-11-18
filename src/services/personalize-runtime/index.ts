import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PersonalizeRuntime as _PersonalizeRuntimeClient } from "./types.ts";

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
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Personalize Runtime",
  version: "2018-05-22",
  protocol: "restJson1",
  sigV4ServiceName: "personalize",
  endpointPrefix: "personalize-runtime",
  operations: {
    GetActionRecommendations: "POST /action-recommendations",
    GetPersonalizedRanking: "POST /personalize-ranking",
    GetRecommendations: "POST /recommendations",
  },
} as const satisfies ServiceMetadata;

export type _PersonalizeRuntime = _PersonalizeRuntimeClient;
export interface PersonalizeRuntime extends _PersonalizeRuntime {}
export const PersonalizeRuntime = class extends AWSServiceClient {
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
} as unknown as typeof _PersonalizeRuntimeClient;
