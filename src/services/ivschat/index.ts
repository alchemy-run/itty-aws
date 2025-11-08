import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ivschat as _ivschatClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ivschat",
  version: "2020-07-14",
  protocol: "restJson1",
  sigV4ServiceName: "ivschat",
  operations: {
    "CreateChatToken": "POST /CreateChatToken",
    "CreateLoggingConfiguration": "POST /CreateLoggingConfiguration",
    "CreateRoom": "POST /CreateRoom",
    "DeleteLoggingConfiguration": "POST /DeleteLoggingConfiguration",
    "DeleteMessage": "POST /DeleteMessage",
    "DeleteRoom": "POST /DeleteRoom",
    "DisconnectUser": "POST /DisconnectUser",
    "GetLoggingConfiguration": "POST /GetLoggingConfiguration",
    "GetRoom": "POST /GetRoom",
    "ListLoggingConfigurations": "POST /ListLoggingConfigurations",
    "ListRooms": "POST /ListRooms",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "SendEvent": "POST /SendEvent",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "UpdateLoggingConfiguration": "POST /UpdateLoggingConfiguration",
    "UpdateRoom": "POST /UpdateRoom",
  },
} as const satisfies ServiceMetadata;

export type _ivschat = _ivschatClient;
export interface ivschat extends _ivschat {}
export const ivschat = class extends AWSServiceClient {
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
} as unknown as typeof _ivschatClient;
