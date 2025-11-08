import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LaunchWizard as _LaunchWizardClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Launch Wizard",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "launchwizard",
  endpointPrefix: "launchwizard",
  operations: {
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "CreateDeployment": "POST /createDeployment",
    "DeleteDeployment": "POST /deleteDeployment",
    "GetDeployment": "POST /getDeployment",
    "GetWorkload": "POST /getWorkload",
    "GetWorkloadDeploymentPattern": "POST /getWorkloadDeploymentPattern",
    "ListDeploymentEvents": "POST /listDeploymentEvents",
    "ListDeployments": "POST /listDeployments",
    "ListWorkloadDeploymentPatterns": "POST /listWorkloadDeploymentPatterns",
    "ListWorkloads": "POST /listWorkloads",
  },
} as const satisfies ServiceMetadata;

export type _LaunchWizard = _LaunchWizardClient;
export interface LaunchWizard extends _LaunchWizard {}
export const LaunchWizard = class extends AWSServiceClient {
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
} as unknown as typeof _LaunchWizardClient;
