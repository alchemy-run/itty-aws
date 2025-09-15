import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SagemakerEdge as _SagemakerEdgeClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Sagemaker Edge",
  version: "2020-09-23",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "edge.sagemaker",
  operations: {
    GetDeployments: "POST /GetDeployments",
    GetDeviceRegistration: "POST /GetDeviceRegistration",
    SendHeartbeat: "POST /SendHeartbeat",
  },
} as const satisfies ServiceMetadata;

export type _SagemakerEdge = _SagemakerEdgeClient;
export interface SagemakerEdge extends _SagemakerEdge {}
export const SagemakerEdge = class extends AWSServiceClient {
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
} as unknown as typeof _SagemakerEdgeClient;
