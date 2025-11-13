import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppFabric as _AppFabricClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "AppFabric",
  version: "2023-05-19",
  protocol: "restJson1",
  sigV4ServiceName: "appfabric",
  operations: {
    "BatchGetUserAccessTasks": "POST /useraccess/batchget",
    "ConnectAppAuthorization": "POST /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect",
    "CreateAppAuthorization": "POST /appbundles/{appBundleIdentifier}/appauthorizations",
    "CreateAppBundle": "POST /appbundles",
    "CreateIngestion": "POST /appbundles/{appBundleIdentifier}/ingestions",
    "CreateIngestionDestination": "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations",
    "DeleteAppAuthorization": "DELETE /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
    "DeleteAppBundle": "DELETE /appbundles/{appBundleIdentifier}",
    "DeleteIngestion": "DELETE /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}",
    "DeleteIngestionDestination": "DELETE /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
    "GetAppAuthorization": "GET /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
    "GetAppBundle": "GET /appbundles/{appBundleIdentifier}",
    "GetIngestion": "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}",
    "GetIngestionDestination": "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
    "ListAppAuthorizations": "GET /appbundles/{appBundleIdentifier}/appauthorizations",
    "ListAppBundles": "GET /appbundles",
    "ListIngestionDestinations": "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations",
    "ListIngestions": "GET /appbundles/{appBundleIdentifier}/ingestions",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "StartIngestion": "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start",
    "StartUserAccessTasks": "POST /useraccess/start",
    "StopIngestion": "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "UpdateAppAuthorization": "PATCH /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
    "UpdateIngestionDestination": "PATCH /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
  },
  retryableErrors: {
    "InternalServerException": {"retryAfterSeconds":"Retry-After"},
    "ThrottlingException": {"retryAfterSeconds":"Retry-After"},
  },
} as const satisfies ServiceMetadata;

export type _AppFabric = _AppFabricClient;
export interface AppFabric extends _AppFabric {}
export const AppFabric = class extends AWSServiceClient {
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
} as unknown as typeof _AppFabricClient;
