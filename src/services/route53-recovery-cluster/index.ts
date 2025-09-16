import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { Route53RecoveryCluster as _Route53RecoveryClusterClient } from "./types.ts";

export * from "./types.ts";

export {
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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Route53 Recovery Cluster",
  version: "2019-12-02",
  protocol: "awsJson1_0",
  sigV4ServiceName: "route53-recovery-cluster",
  endpointPrefix: "route53-recovery-cluster",
  targetPrefix: "ToggleCustomerAPI",
} as const satisfies ServiceMetadata;

export type _Route53RecoveryCluster = _Route53RecoveryClusterClient;
export interface Route53RecoveryCluster extends _Route53RecoveryCluster {}
export const Route53RecoveryCluster = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson10Handler());
  }
} as unknown as typeof _Route53RecoveryClusterClient;
