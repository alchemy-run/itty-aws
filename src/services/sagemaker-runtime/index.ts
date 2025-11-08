import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerRuntime as _SageMakerRuntimeClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker Runtime",
  version: "2017-05-13",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker",
  endpointPrefix: "runtime.sagemaker",
  operations: {
    "InvokeEndpoint": {
      http: "POST /endpoints/{EndpointName}/invocations",
      traits: {
        "Body": "httpPayload",
        "ContentType": "Content-Type",
        "InvokedProductionVariant": "x-Amzn-Invoked-Production-Variant",
        "CustomAttributes": "X-Amzn-SageMaker-Custom-Attributes",
        "NewSessionId": "X-Amzn-SageMaker-New-Session-Id",
        "ClosedSessionId": "X-Amzn-SageMaker-Closed-Session-Id",
      },
    },
    "InvokeEndpointAsync": {
      http: "POST /endpoints/{EndpointName}/async-invocations",
      traits: {
        "OutputLocation": "X-Amzn-SageMaker-OutputLocation",
        "FailureLocation": "X-Amzn-SageMaker-FailureLocation",
      },
    },
    "InvokeEndpointWithResponseStream": {
      http: "POST /endpoints/{EndpointName}/invocations-response-stream",
      traits: {
        "Body": "httpStreaming",
        "ContentType": "X-Amzn-SageMaker-Content-Type",
        "InvokedProductionVariant": "x-Amzn-Invoked-Production-Variant",
        "CustomAttributes": "X-Amzn-SageMaker-Custom-Attributes",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _SageMakerRuntime = _SageMakerRuntimeClient;
export interface SageMakerRuntime extends _SageMakerRuntime {}
export const SageMakerRuntime = class extends AWSServiceClient {
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
} as unknown as typeof _SageMakerRuntimeClient;
