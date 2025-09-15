import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerMetrics as _SageMakerMetricsClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker Metrics",
  version: "2022-09-30",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "metrics.sagemaker",
  operations: {
    BatchGetMetrics: "POST /BatchGetMetrics",
    BatchPutMetrics: "PUT /BatchPutMetrics",
  },
} as const satisfies ServiceMetadata;

export type _SageMakerMetrics = _SageMakerMetricsClient;
export interface SageMakerMetrics extends _SageMakerMetrics {}
export const SageMakerMetrics = class extends AWSServiceClient {
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
} as unknown as typeof _SageMakerMetricsClient;
