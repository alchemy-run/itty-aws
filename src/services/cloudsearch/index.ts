import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/cloudsearch.ts";
import type { CloudSearch as _CloudSearchClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CloudSearch",
  version: "2013-01-01",
  protocol: "awsQuery",
  sigV4ServiceName: "cloudsearch",
  endpointPrefix: "cloudsearch",
} as const satisfies ServiceMetadata;

export type _CloudSearch = _CloudSearchClient;
export interface CloudSearch extends _CloudSearch {}
export const CloudSearch = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(
      metadata,
      this.config,
      new AwsQueryHandler(protocolMetadata),
    );
  }
} as unknown as typeof _CloudSearchClient;
