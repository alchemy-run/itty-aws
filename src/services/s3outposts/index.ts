import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { S3Outposts as _S3OutpostsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "S3Outposts",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "s3-outposts",
  endpointPrefix: "s3-outposts",
  operations: {
    "CreateEndpoint": "POST /S3Outposts/CreateEndpoint",
    "DeleteEndpoint": "DELETE /S3Outposts/DeleteEndpoint",
    "ListEndpoints": "GET /S3Outposts/ListEndpoints",
    "ListOutpostsWithS3": "GET /S3Outposts/ListOutpostsWithS3",
    "ListSharedEndpoints": "GET /S3Outposts/ListSharedEndpoints",
  },
} as const satisfies ServiceMetadata;

export type _S3Outposts = _S3OutpostsClient;
export interface S3Outposts extends _S3Outposts {}
export const S3Outposts = class extends AWSServiceClient {
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
} as unknown as typeof _S3OutpostsClient;
