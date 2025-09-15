import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Pipes as _PipesClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Pipes",
  version: "2015-10-07",
  protocol: "restJson1",
  sigV4ServiceName: "pipes",
  endpointPrefix: "pipes",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreatePipe: "POST /v1/pipes/{Name}",
    DeletePipe: "DELETE /v1/pipes/{Name}",
    DescribePipe: "GET /v1/pipes/{Name}",
    ListPipes: "GET /v1/pipes",
    StartPipe: "POST /v1/pipes/{Name}/start",
    StopPipe: "POST /v1/pipes/{Name}/stop",
    UpdatePipe: "PUT /v1/pipes/{Name}",
  },
} as const satisfies ServiceMetadata;

export type _Pipes = _PipesClient;
export interface Pipes extends _Pipes {}
export const Pipes = class extends AWSServiceClient {
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
} as unknown as typeof _PipesClient;
