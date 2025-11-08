import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { LookoutEquipment as _LookoutEquipmentClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "LookoutEquipment",
  version: "2020-12-15",
  protocol: "awsJson1_0",
  sigV4ServiceName: "lookoutequipment",
  endpointPrefix: "lookoutequipment",
  targetPrefix: "AWSLookoutEquipmentFrontendService",
} as const satisfies ServiceMetadata;

export type _LookoutEquipment = _LookoutEquipmentClient;
export interface LookoutEquipment extends _LookoutEquipment {}
export const LookoutEquipment = class extends AWSServiceClient {
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
} as unknown as typeof _LookoutEquipmentClient;
