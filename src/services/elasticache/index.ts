import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/elasticache.ts";
import type { ElastiCache as _ElastiCacheClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ElastiCache",
  version: "2015-02-02",
  protocol: "awsQuery",
  sigV4ServiceName: "elasticache",
  endpointPrefix: "elasticache",
} as const satisfies ServiceMetadata;

export type _ElastiCache = _ElastiCacheClient;
export interface ElastiCache extends _ElastiCache {}
export const ElastiCache = class extends AWSServiceClient {
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
} as unknown as typeof _ElastiCacheClient;
