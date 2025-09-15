import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Amplify as _AmplifyClient } from "./types.ts";

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
  sdkId: "Amplify",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "amplify",
  endpointPrefix: "amplify",
  operations: {
    CreateApp: "POST /apps",
    CreateBackendEnvironment: "POST /apps/{appId}/backendenvironments",
    CreateBranch: "POST /apps/{appId}/branches",
    CreateDeployment: "POST /apps/{appId}/branches/{branchName}/deployments",
    CreateDomainAssociation: "POST /apps/{appId}/domains",
    CreateWebhook: "POST /apps/{appId}/webhooks",
    DeleteApp: "DELETE /apps/{appId}",
    DeleteBackendEnvironment:
      "DELETE /apps/{appId}/backendenvironments/{environmentName}",
    DeleteBranch: "DELETE /apps/{appId}/branches/{branchName}",
    DeleteDomainAssociation: "DELETE /apps/{appId}/domains/{domainName}",
    DeleteJob: "DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}",
    DeleteWebhook: "DELETE /webhooks/{webhookId}",
    GenerateAccessLogs: "POST /apps/{appId}/accesslogs",
    GetApp: "GET /apps/{appId}",
    GetArtifactUrl: "GET /artifacts/{artifactId}",
    GetBackendEnvironment:
      "GET /apps/{appId}/backendenvironments/{environmentName}",
    GetBranch: "GET /apps/{appId}/branches/{branchName}",
    GetDomainAssociation: "GET /apps/{appId}/domains/{domainName}",
    GetJob: "GET /apps/{appId}/branches/{branchName}/jobs/{jobId}",
    GetWebhook: "GET /webhooks/{webhookId}",
    ListApps: "GET /apps",
    ListArtifacts:
      "GET /apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts",
    ListBackendEnvironments: "GET /apps/{appId}/backendenvironments",
    ListBranches: "GET /apps/{appId}/branches",
    ListDomainAssociations: "GET /apps/{appId}/domains",
    ListJobs: "GET /apps/{appId}/branches/{branchName}/jobs",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListWebhooks: "GET /apps/{appId}/webhooks",
    StartDeployment:
      "POST /apps/{appId}/branches/{branchName}/deployments/start",
    StartJob: "POST /apps/{appId}/branches/{branchName}/jobs",
    StopJob: "DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApp: "POST /apps/{appId}",
    UpdateBranch: "POST /apps/{appId}/branches/{branchName}",
    UpdateDomainAssociation: "POST /apps/{appId}/domains/{domainName}",
    UpdateWebhook: "POST /webhooks/{webhookId}",
  },
} as const satisfies ServiceMetadata;

export type _Amplify = _AmplifyClient;
export interface Amplify extends _Amplify {}
export const Amplify = class extends AWSServiceClient {
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
} as unknown as typeof _AmplifyClient;
