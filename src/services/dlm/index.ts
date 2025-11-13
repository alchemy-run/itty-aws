import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DLM as _DLMClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "DLM",
  version: "2018-01-12",
  protocol: "restJson1",
  sigV4ServiceName: "dlm",
  endpointPrefix: "dlm",
  operations: {
    "CreateLifecyclePolicy": "POST /policies",
    "DeleteLifecyclePolicy": "DELETE /policies/{PolicyId}",
    "GetLifecyclePolicies": "GET /policies",
    "GetLifecyclePolicy": "GET /policies/{PolicyId}",
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "UpdateLifecyclePolicy": "PATCH /policies/{PolicyId}",
  },
} as const satisfies ServiceMetadata;

export type _DLM = _DLMClient;
export interface DLM extends _DLM {}
export const DLM = class extends AWSServiceClient {
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
} as unknown as typeof _DLMClient;
