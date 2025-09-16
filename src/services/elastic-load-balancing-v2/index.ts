import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/elastic-load-balancing-v2.ts";
import type { ElasticLoadBalancingv2 as _ElasticLoadBalancingv2Client } from "./types.ts";

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
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Elastic Load Balancing v2",
  version: "2015-12-01",
  protocol: "awsQuery",
  sigV4ServiceName: "elasticloadbalancing",
  endpointPrefix: "elasticloadbalancing",
} as const satisfies ServiceMetadata;

export type _ElasticLoadBalancingv2 = _ElasticLoadBalancingv2Client;
export interface ElasticLoadBalancingv2 extends _ElasticLoadBalancingv2 {}
export const ElasticLoadBalancingv2 = class extends AWSServiceClient {
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
} as unknown as typeof _ElasticLoadBalancingv2Client;
