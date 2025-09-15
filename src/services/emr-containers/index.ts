import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EMRcontainers as _EMRcontainersClient } from "./types.ts";

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
  sdkId: "EMR containers",
  version: "2020-10-01",
  protocol: "restJson1",
  sigV4ServiceName: "emr-containers",
  endpointPrefix: "emr-containers",
  operations: {
    CancelJobRun: "DELETE /virtualclusters/{virtualClusterId}/jobruns/{id}",
    CreateJobTemplate: "POST /jobtemplates",
    CreateManagedEndpoint: "POST /virtualclusters/{virtualClusterId}/endpoints",
    CreateSecurityConfiguration: "POST /securityconfigurations",
    CreateVirtualCluster: "POST /virtualclusters",
    DeleteJobTemplate: "DELETE /jobtemplates/{id}",
    DeleteManagedEndpoint:
      "DELETE /virtualclusters/{virtualClusterId}/endpoints/{id}",
    DeleteVirtualCluster: "DELETE /virtualclusters/{id}",
    DescribeJobRun: "GET /virtualclusters/{virtualClusterId}/jobruns/{id}",
    DescribeJobTemplate: "GET /jobtemplates/{id}",
    DescribeManagedEndpoint:
      "GET /virtualclusters/{virtualClusterId}/endpoints/{id}",
    DescribeSecurityConfiguration: "GET /securityconfigurations/{id}",
    DescribeVirtualCluster: "GET /virtualclusters/{id}",
    GetManagedEndpointSessionCredentials:
      "POST /virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials",
    ListJobRuns: "GET /virtualclusters/{virtualClusterId}/jobruns",
    ListJobTemplates: "GET /jobtemplates",
    ListManagedEndpoints: "GET /virtualclusters/{virtualClusterId}/endpoints",
    ListSecurityConfigurations: "GET /securityconfigurations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListVirtualClusters: "GET /virtualclusters",
    StartJobRun: "POST /virtualclusters/{virtualClusterId}/jobruns",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

export type _EMRcontainers = _EMRcontainersClient;
export interface EMRcontainers extends _EMRcontainers {}
export const EMRcontainers = class extends AWSServiceClient {
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
} as unknown as typeof _EMRcontainersClient;
