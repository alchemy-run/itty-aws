import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EKSAuth as _EKSAuthClient } from "./types.ts";

export * from "./types.ts";

export {
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "EKS Auth",
  version: "2023-11-26",
  protocol: "restJson1",
  sigV4ServiceName: "eks-auth",
  endpointPrefix: "eks-auth",
  operations: {
    AssumeRoleForPodIdentity:
      "POST /clusters/{clusterName}/assume-role-for-pod-identity",
  },
} as const satisfies ServiceMetadata;

export type _EKSAuth = _EKSAuthClient;
export interface EKSAuth extends _EKSAuth {}
export const EKSAuth = class extends AWSServiceClient {
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
} as unknown as typeof _EKSAuthClient;
