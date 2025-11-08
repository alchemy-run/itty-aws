import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { KinesisVideoMedia as _KinesisVideoMediaClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Kinesis Video Media",
  version: "2017-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "kinesisvideo",
  endpointPrefix: "kinesisvideo",
  operations: {
    "GetMedia": {
      http: "POST /getMedia",
      traits: {
        "ContentType": "Content-Type",
        "Payload": "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _KinesisVideoMedia = _KinesisVideoMediaClient;
export interface KinesisVideoMedia extends _KinesisVideoMedia {}
export const KinesisVideoMedia = class extends AWSServiceClient {
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
} as unknown as typeof _KinesisVideoMediaClient;
