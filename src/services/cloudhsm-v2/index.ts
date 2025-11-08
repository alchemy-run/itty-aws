import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";
import type { CloudHSMV2 as _CloudHSMV2Client } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CloudHSM V2",
  version: "2017-04-28",
  protocol: "awsJson1_1",
  sigV4ServiceName: "cloudhsm",
  endpointPrefix: "cloudhsmv2",
  targetPrefix: "BaldrApiService",
} as const satisfies ServiceMetadata;

export type _CloudHSMV2 = _CloudHSMV2Client;
export interface CloudHSMV2 extends _CloudHSMV2 {}
export const CloudHSMV2 = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson11Handler());
  }
} as unknown as typeof _CloudHSMV2Client;
