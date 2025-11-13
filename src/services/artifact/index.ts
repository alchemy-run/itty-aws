import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Artifact as _ArtifactClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Artifact",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "artifact",
  operations: {
    "GetAccountSettings": "GET /v1/account-settings/get",
    "GetReport": "GET /v1/report/get",
    "GetReportMetadata": "GET /v1/report/getMetadata",
    "GetTermForReport": "GET /v1/report/getTermForReport",
    "ListCustomerAgreements": "GET /v1/customer-agreement/list",
    "ListReports": "GET /v1/report/list",
    "PutAccountSettings": "PUT /v1/account-settings/put",
  },
  retryableErrors: {
    "InternalServerException": {"retryAfterSeconds":"Retry-After"},
    "ThrottlingException": {"retryAfterSeconds":"Retry-After"},
  },
} as const satisfies ServiceMetadata;

export type _Artifact = _ArtifactClient;
export interface Artifact extends _Artifact {}
export const Artifact = class extends AWSServiceClient {
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
} as unknown as typeof _ArtifactClient;
