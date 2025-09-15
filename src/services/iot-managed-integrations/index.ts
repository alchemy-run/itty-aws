import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTManagedIntegrations as _IoTManagedIntegrationsClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Managed Integrations",
  version: "2025-03-03",
  protocol: "restJson1",
  sigV4ServiceName: "iotmanagedintegrations",
  endpointPrefix: "api.iotmanagedintegrations",
  operations: {
    GetCustomEndpoint: "GET /custom-endpoint",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    RegisterCustomEndpoint: "POST /custom-endpoint",
    SendConnectorEvent: "POST /connector-event/{ConnectorId}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateAccountAssociation: "POST /account-associations",
    CreateCloudConnector: "POST /cloud-connectors",
    CreateConnectorDestination: "POST /connector-destinations",
    CreateCredentialLocker: "POST /credential-lockers",
    CreateDestination: "POST /destinations",
    CreateEventLogConfiguration: "POST /event-log-configurations",
    CreateManagedThing: "POST /managed-things",
    CreateNotificationConfiguration: "POST /notification-configurations",
    CreateOtaTask: "POST /ota-tasks",
    CreateOtaTaskConfiguration: "POST /ota-task-configurations",
    CreateProvisioningProfile: "POST /provisioning-profiles",
    DeleteAccountAssociation:
      "DELETE /account-associations/{AccountAssociationId}",
    DeleteCloudConnector: "DELETE /cloud-connectors/{Identifier}",
    DeleteConnectorDestination: "DELETE /connector-destinations/{Identifier}",
    DeleteCredentialLocker: "DELETE /credential-lockers/{Identifier}",
    DeleteDestination: "DELETE /destinations/{Name}",
    DeleteEventLogConfiguration: "DELETE /event-log-configurations/{Id}",
    DeleteManagedThing: "DELETE /managed-things/{Identifier}",
    DeleteNotificationConfiguration:
      "DELETE /notification-configurations/{EventType}",
    DeleteOtaTask: "DELETE /ota-tasks/{Identifier}",
    DeleteOtaTaskConfiguration: "DELETE /ota-task-configurations/{Identifier}",
    DeleteProvisioningProfile: "DELETE /provisioning-profiles/{Identifier}",
    DeregisterAccountAssociation: "PUT /managed-thing-associations/deregister",
    GetAccountAssociation: "GET /account-associations/{AccountAssociationId}",
    GetCloudConnector: "GET /cloud-connectors/{Identifier}",
    GetConnectorDestination: "GET /connector-destinations/{Identifier}",
    GetCredentialLocker: "GET /credential-lockers/{Identifier}",
    GetDefaultEncryptionConfiguration: "GET /configuration/account/encryption",
    GetDestination: "GET /destinations/{Name}",
    GetDeviceDiscovery: "GET /device-discoveries/{Identifier}",
    GetEventLogConfiguration: "GET /event-log-configurations/{Id}",
    GetHubConfiguration: "GET /hub-configuration",
    GetManagedThing: "GET /managed-things/{Identifier}",
    GetManagedThingCapabilities:
      "GET /managed-things-capabilities/{Identifier}",
    GetManagedThingConnectivityData:
      "POST /managed-things-connectivity-data/{Identifier}",
    GetManagedThingMetaData: "GET /managed-things-metadata/{Identifier}",
    GetManagedThingState: "GET /managed-thing-states/{ManagedThingId}",
    GetNotificationConfiguration:
      "GET /notification-configurations/{EventType}",
    GetOtaTask: "GET /ota-tasks/{Identifier}",
    GetOtaTaskConfiguration: "GET /ota-task-configurations/{Identifier}",
    GetProvisioningProfile: "GET /provisioning-profiles/{Identifier}",
    GetRuntimeLogConfiguration:
      "GET /runtime-log-configurations/{ManagedThingId}",
    GetSchemaVersion: "GET /schema-versions/{Type}/{SchemaVersionedId}",
    ListAccountAssociations: "GET /account-associations",
    ListCloudConnectors: "GET /cloud-connectors",
    ListConnectorDestinations: "GET /connector-destinations",
    ListCredentialLockers: "GET /credential-lockers",
    ListDestinations: "GET /destinations",
    ListDeviceDiscoveries: "GET /device-discoveries",
    ListDiscoveredDevices: "GET /device-discoveries/{Identifier}/devices",
    ListEventLogConfigurations: "GET /event-log-configurations",
    ListManagedThingAccountAssociations: "GET /managed-thing-associations",
    ListManagedThingSchemas: "GET /managed-thing-schemas/{Identifier}",
    ListManagedThings: "GET /managed-things",
    ListNotificationConfigurations: "GET /notification-configurations",
    ListOtaTaskConfigurations: "GET /ota-task-configurations",
    ListOtaTaskExecutions: "GET /ota-tasks/{Identifier}/devices",
    ListOtaTasks: "GET /ota-tasks",
    ListProvisioningProfiles: "GET /provisioning-profiles",
    ListSchemaVersions: "GET /schema-versions/{Type}",
    PutDefaultEncryptionConfiguration: "POST /configuration/account/encryption",
    PutHubConfiguration: "PUT /hub-configuration",
    PutRuntimeLogConfiguration:
      "PUT /runtime-log-configurations/{ManagedThingId}",
    RegisterAccountAssociation: "PUT /managed-thing-associations/register",
    ResetRuntimeLogConfiguration:
      "DELETE /runtime-log-configurations/{ManagedThingId}",
    SendManagedThingCommand: "POST /managed-things-command/{ManagedThingId}",
    StartAccountAssociationRefresh:
      "POST /account-associations/{AccountAssociationId}/refresh",
    StartDeviceDiscovery: "POST /device-discoveries",
    UpdateAccountAssociation:
      "PUT /account-associations/{AccountAssociationId}",
    UpdateCloudConnector: "PUT /cloud-connectors/{Identifier}",
    UpdateConnectorDestination: "PUT /connector-destinations/{Identifier}",
    UpdateDestination: "PUT /destinations/{Name}",
    UpdateEventLogConfiguration: "PATCH /event-log-configurations/{Id}",
    UpdateManagedThing: "PUT /managed-things/{Identifier}",
    UpdateNotificationConfiguration:
      "PUT /notification-configurations/{EventType}",
    UpdateOtaTask: "PUT /ota-tasks/{Identifier}",
  },
} as const satisfies ServiceMetadata;

export type _IoTManagedIntegrations = _IoTManagedIntegrationsClient;
export interface IoTManagedIntegrations extends _IoTManagedIntegrations {}
export const IoTManagedIntegrations = class extends AWSServiceClient {
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
} as unknown as typeof _IoTManagedIntegrationsClient;
