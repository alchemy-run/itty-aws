import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/sts.ts";
import type { STS as _STSClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "STS",
  version: "2011-06-15",
  protocol: "awsQuery",
  sigV4ServiceName: "sts",
  endpointPrefix: "sts",
} as const satisfies ServiceMetadata;

export type _STS = _STSClient;
export interface STS extends _STS {}
export const STS = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsQueryHandler(protocolMetadata));
  }
} as unknown as typeof _STSClient;
