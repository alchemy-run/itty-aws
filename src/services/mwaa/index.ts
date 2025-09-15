import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MWAA as _MWAAClient } from "./types.ts";

export * from "./types.ts";

export {
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
  sdkId: "MWAA",
  version: "2020-07-01",
  protocol: "restJson1",
  sigV4ServiceName: "airflow",
  operations: {
    CreateCliToken: "POST /clitoken/{Name}",
    CreateEnvironment: "PUT /environments/{Name}",
    CreateWebLoginToken: "POST /webtoken/{Name}",
    DeleteEnvironment: "DELETE /environments/{Name}",
    GetEnvironment: "GET /environments/{Name}",
    InvokeRestApi: "POST /restapi/{Name}",
    ListEnvironments: "GET /environments",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PublishMetrics: "POST /metrics/environments/{EnvironmentName}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateEnvironment: "PATCH /environments/{Name}",
  },
} as const satisfies ServiceMetadata;

export type _MWAA = _MWAAClient;
export interface MWAA extends _MWAA {}
export const MWAA = class extends AWSServiceClient {
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
} as unknown as typeof _MWAAClient;
