import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SsmSap as _SsmSapClient } from "./types.ts";

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
  sdkId: "Ssm Sap",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "ssm-sap",
  endpointPrefix: "ssm-sap",
  operations: {
    DeleteResourcePermission: "POST /delete-resource-permission",
    DeregisterApplication: "POST /deregister-application",
    GetApplication: "POST /get-application",
    GetComponent: "POST /get-component",
    GetDatabase: "POST /get-database",
    GetOperation: "POST /get-operation",
    GetResourcePermission: "POST /get-resource-permission",
    ListApplications: "POST /list-applications",
    ListComponents: "POST /list-components",
    ListDatabases: "POST /list-databases",
    ListOperationEvents: "POST /list-operation-events",
    ListOperations: "POST /list-operations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutResourcePermission: "POST /put-resource-permission",
    RegisterApplication: "POST /register-application",
    StartApplication: "POST /start-application",
    StartApplicationRefresh: "POST /start-application-refresh",
    StopApplication: "POST /stop-application",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApplicationSettings: "POST /update-application-settings",
  },
} as const satisfies ServiceMetadata;

export type _SsmSap = _SsmSapClient;
export interface SsmSap extends _SsmSap {}
export const SsmSap = class extends AWSServiceClient {
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
} as unknown as typeof _SsmSapClient;
