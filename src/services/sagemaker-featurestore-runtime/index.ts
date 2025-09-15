import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerFeatureStoreRuntime as _SageMakerFeatureStoreRuntimeClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
  ExpiredTokenException,
  IncompleteSignature,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker FeatureStore Runtime",
  version: "2020-07-01",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "featurestore-runtime.sagemaker",
  operations: {
    BatchGetRecord: "POST /BatchGetRecord",
    DeleteRecord: "DELETE /FeatureGroup/{FeatureGroupName}",
    GetRecord: "GET /FeatureGroup/{FeatureGroupName}",
    PutRecord: "PUT /FeatureGroup/{FeatureGroupName}",
  },
} as const satisfies ServiceMetadata;

export type _SageMakerFeatureStoreRuntime = _SageMakerFeatureStoreRuntimeClient;
export interface SageMakerFeatureStoreRuntime
  extends _SageMakerFeatureStoreRuntime {}
export const SageMakerFeatureStoreRuntime = class extends AWSServiceClient {
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
} as unknown as typeof _SageMakerFeatureStoreRuntimeClient;
