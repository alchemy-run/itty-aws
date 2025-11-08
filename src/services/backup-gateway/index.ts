import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { BackupGateway as _BackupGatewayClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Backup Gateway",
  version: "2021-01-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "backup-gateway",
  endpointPrefix: "backup-gateway",
  targetPrefix: "BackupOnPremises_v20210101",
} as const satisfies ServiceMetadata;

export type _BackupGateway = _BackupGatewayClient;
export interface BackupGateway extends _BackupGateway {}
export const BackupGateway = class extends AWSServiceClient {
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
} as unknown as typeof _BackupGatewayClient;
