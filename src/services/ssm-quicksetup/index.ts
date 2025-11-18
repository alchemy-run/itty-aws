import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSMQuickSetup as _SSMQuickSetupClient } from "./types.ts";

export * from "./types.ts";

export {
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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SSM QuickSetup",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "ssm-quicksetup",
  operations: {
    CreateConfigurationManager: "POST /configurationManager",
    DeleteConfigurationManager: "DELETE /configurationManager/{ManagerArn}",
    GetConfiguration: "GET /getConfiguration/{ConfigurationId}",
    GetConfigurationManager: "GET /configurationManager/{ManagerArn}",
    GetServiceSettings: "GET /serviceSettings",
    ListConfigurationManagers: "POST /listConfigurationManagers",
    ListConfigurations: "POST /listConfigurations",
    ListQuickSetupTypes: "GET /listQuickSetupTypes",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "PUT /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateConfigurationDefinition:
      "PUT /configurationDefinition/{ManagerArn}/{Id}",
    UpdateConfigurationManager: "PUT /configurationManager/{ManagerArn}",
    UpdateServiceSettings: "PUT /serviceSettings",
  },
  retryableErrors: {
    InternalServerException: {},
    ThrottlingException: {},
  },
} as const satisfies ServiceMetadata;

export type _SSMQuickSetup = _SSMQuickSetupClient;
export interface SSMQuickSetup extends _SSMQuickSetup {}
export const SSMQuickSetup = class extends AWSServiceClient {
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
} as unknown as typeof _SSMQuickSetupClient;
