import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ChimeSDKIdentity as _ChimeSDKIdentityClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Chime SDK Identity",
  version: "2021-04-20",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "identity-chime",
  operations: {
    CreateAppInstance: "POST /app-instances",
    CreateAppInstanceAdmin: "POST /app-instances/{AppInstanceArn}/admins",
    CreateAppInstanceBot: "POST /app-instance-bots",
    CreateAppInstanceUser: "POST /app-instance-users",
    DeleteAppInstance: "DELETE /app-instances/{AppInstanceArn}",
    DeleteAppInstanceAdmin:
      "DELETE /app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
    DeleteAppInstanceBot: "DELETE /app-instance-bots/{AppInstanceBotArn}",
    DeleteAppInstanceUser: "DELETE /app-instance-users/{AppInstanceUserArn}",
    DeregisterAppInstanceUserEndpoint:
      "DELETE /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
    DescribeAppInstance: "GET /app-instances/{AppInstanceArn}",
    DescribeAppInstanceAdmin:
      "GET /app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
    DescribeAppInstanceBot: "GET /app-instance-bots/{AppInstanceBotArn}",
    DescribeAppInstanceUser: "GET /app-instance-users/{AppInstanceUserArn}",
    DescribeAppInstanceUserEndpoint:
      "GET /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
    GetAppInstanceRetentionSettings:
      "GET /app-instances/{AppInstanceArn}/retention-settings",
    ListAppInstanceAdmins: "GET /app-instances/{AppInstanceArn}/admins",
    ListAppInstanceBots: "GET /app-instance-bots",
    ListAppInstances: "GET /app-instances",
    ListAppInstanceUserEndpoints:
      "GET /app-instance-users/{AppInstanceUserArn}/endpoints",
    ListAppInstanceUsers: "GET /app-instance-users",
    ListTagsForResource: "GET /tags",
    PutAppInstanceRetentionSettings:
      "PUT /app-instances/{AppInstanceArn}/retention-settings",
    PutAppInstanceUserExpirationSettings:
      "PUT /app-instance-users/{AppInstanceUserArn}/expiration-settings",
    RegisterAppInstanceUserEndpoint:
      "POST /app-instance-users/{AppInstanceUserArn}/endpoints",
    TagResource: "POST /tags?operation=tag-resource",
    UntagResource: "POST /tags?operation=untag-resource",
    UpdateAppInstance: "PUT /app-instances/{AppInstanceArn}",
    UpdateAppInstanceBot: "PUT /app-instance-bots/{AppInstanceBotArn}",
    UpdateAppInstanceUser: "PUT /app-instance-users/{AppInstanceUserArn}",
    UpdateAppInstanceUserEndpoint:
      "PUT /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
  },
} as const satisfies ServiceMetadata;

export type _ChimeSDKIdentity = _ChimeSDKIdentityClient;
export interface ChimeSDKIdentity extends _ChimeSDKIdentity {}
export const ChimeSDKIdentity = class extends AWSServiceClient {
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
} as unknown as typeof _ChimeSDKIdentityClient;
