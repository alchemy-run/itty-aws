import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ControlCatalog as _ControlCatalogClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ControlCatalog",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "controlcatalog",
  operations: {
    "ListControlMappings": "POST /list-control-mappings",
    "GetControl": "POST /get-control",
    "ListCommonControls": "POST /common-controls",
    "ListControls": "POST /list-controls",
    "ListDomains": "POST /domains",
    "ListObjectives": "POST /objectives",
  },
  retryableErrors: {
    "InternalServerException": {},
    "ThrottlingException": {},
  },
} as const satisfies ServiceMetadata;

export type _ControlCatalog = _ControlCatalogClient;
export interface ControlCatalog extends _ControlCatalog {}
export const ControlCatalog = class extends AWSServiceClient {
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
} as unknown as typeof _ControlCatalogClient;
