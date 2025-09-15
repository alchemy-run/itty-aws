import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { rbin as _rbinClient } from "./types.ts";

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
  sdkId: "rbin",
  version: "2021-06-15",
  protocol: "restJson1",
  sigV4ServiceName: "rbin",
  endpointPrefix: "rbin",
  operations: {
    CreateRule: "POST /rules",
    DeleteRule: "DELETE /rules/{Identifier}",
    GetRule: "GET /rules/{Identifier}",
    ListRules: "POST /list-rules",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    LockRule: "PATCH /rules/{Identifier}/lock",
    TagResource: "POST /tags/{ResourceArn}",
    UnlockRule: "PATCH /rules/{Identifier}/unlock",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateRule: "PATCH /rules/{Identifier}",
  },
} as const satisfies ServiceMetadata;

export type _rbin = _rbinClient;
export interface rbin extends _rbin {}
export const rbin = class extends AWSServiceClient {
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
} as unknown as typeof _rbinClient;
