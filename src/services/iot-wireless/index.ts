import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTWireless as _IoTWireless } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Wireless",
  version: "2020-11-22",
  protocol: "restJson1",
  sigV4ServiceName: "iotwireless",
  endpointPrefix: "api.iotwireless",
  operations: {
    AssociateAwsAccountWithPartnerAccount: "POST /partner-accounts",
    AssociateMulticastGroupWithFuotaTask:
      "PUT /fuota-tasks/{Id}/multicast-group",
    AssociateWirelessDeviceWithFuotaTask:
      "PUT /fuota-tasks/{Id}/wireless-device",
    AssociateWirelessDeviceWithMulticastGroup:
      "PUT /multicast-groups/{Id}/wireless-device",
    AssociateWirelessDeviceWithThing: "PUT /wireless-devices/{Id}/thing",
    AssociateWirelessGatewayWithCertificate:
      "PUT /wireless-gateways/{Id}/certificate",
    AssociateWirelessGatewayWithThing: "PUT /wireless-gateways/{Id}/thing",
    CancelMulticastGroupSession: "DELETE /multicast-groups/{Id}/session",
    CreateDestination: "POST /destinations",
    CreateDeviceProfile: "POST /device-profiles",
    CreateFuotaTask: "POST /fuota-tasks",
    CreateMulticastGroup: "POST /multicast-groups",
    CreateNetworkAnalyzerConfiguration: "POST /network-analyzer-configurations",
    CreateServiceProfile: "POST /service-profiles",
    CreateWirelessDevice: "POST /wireless-devices",
    CreateWirelessGateway: "POST /wireless-gateways",
    CreateWirelessGatewayTask: "POST /wireless-gateways/{Id}/tasks",
    CreateWirelessGatewayTaskDefinition:
      "POST /wireless-gateway-task-definitions",
    DeleteDestination: "DELETE /destinations/{Name}",
    DeleteDeviceProfile: "DELETE /device-profiles/{Id}",
    DeleteFuotaTask: "DELETE /fuota-tasks/{Id}",
    DeleteMulticastGroup: "DELETE /multicast-groups/{Id}",
    DeleteNetworkAnalyzerConfiguration:
      "DELETE /network-analyzer-configurations/{ConfigurationName}",
    DeleteQueuedMessages: "DELETE /wireless-devices/{Id}/data",
    DeleteServiceProfile: "DELETE /service-profiles/{Id}",
    DeleteWirelessDevice: "DELETE /wireless-devices/{Id}",
    DeleteWirelessDeviceImportTask: "DELETE /wireless_device_import_task/{Id}",
    DeleteWirelessGateway: "DELETE /wireless-gateways/{Id}",
    DeleteWirelessGatewayTask: "DELETE /wireless-gateways/{Id}/tasks",
    DeleteWirelessGatewayTaskDefinition:
      "DELETE /wireless-gateway-task-definitions/{Id}",
    DeregisterWirelessDevice: "PATCH /wireless-devices/{Identifier}/deregister",
    DisassociateAwsAccountFromPartnerAccount:
      "DELETE /partner-accounts/{PartnerAccountId}",
    DisassociateMulticastGroupFromFuotaTask:
      "DELETE /fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}",
    DisassociateWirelessDeviceFromFuotaTask:
      "DELETE /fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}",
    DisassociateWirelessDeviceFromMulticastGroup:
      "DELETE /multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}",
    DisassociateWirelessDeviceFromThing: "DELETE /wireless-devices/{Id}/thing",
    DisassociateWirelessGatewayFromCertificate:
      "DELETE /wireless-gateways/{Id}/certificate",
    DisassociateWirelessGatewayFromThing:
      "DELETE /wireless-gateways/{Id}/thing",
    GetDestination: "GET /destinations/{Name}",
    GetDeviceProfile: "GET /device-profiles/{Id}",
    GetEventConfigurationByResourceTypes:
      "GET /event-configurations-resource-types",
    GetFuotaTask: "GET /fuota-tasks/{Id}",
    GetLogLevelsByResourceTypes: "GET /log-levels",
    GetMetricConfiguration: "GET /metric-configuration",
    GetMetrics: "POST /metrics",
    GetMulticastGroup: "GET /multicast-groups/{Id}",
    GetMulticastGroupSession: "GET /multicast-groups/{Id}/session",
    GetNetworkAnalyzerConfiguration:
      "GET /network-analyzer-configurations/{ConfigurationName}",
    GetPartnerAccount: "GET /partner-accounts/{PartnerAccountId}",
    GetPosition: "GET /positions/{ResourceIdentifier}",
    GetPositionConfiguration:
      "GET /position-configurations/{ResourceIdentifier}",
    GetPositionEstimate: {
      http: "POST /position-estimate",
      traits: {
        GeoJsonPayload: "httpPayload",
      },
    },
    GetResourceEventConfiguration: "GET /event-configurations/{Identifier}",
    GetResourceLogLevel: "GET /log-levels/{ResourceIdentifier}",
    GetResourcePosition: {
      http: "GET /resource-positions/{ResourceIdentifier}",
      traits: {
        GeoJsonPayload: "httpPayload",
      },
    },
    GetServiceEndpoint: "GET /service-endpoint",
    GetServiceProfile: "GET /service-profiles/{Id}",
    GetWirelessDevice: "GET /wireless-devices/{Identifier}",
    GetWirelessDeviceImportTask: "GET /wireless_device_import_task/{Id}",
    GetWirelessDeviceStatistics:
      "GET /wireless-devices/{WirelessDeviceId}/statistics",
    GetWirelessGateway: "GET /wireless-gateways/{Identifier}",
    GetWirelessGatewayCertificate: "GET /wireless-gateways/{Id}/certificate",
    GetWirelessGatewayFirmwareInformation:
      "GET /wireless-gateways/{Id}/firmware-information",
    GetWirelessGatewayStatistics:
      "GET /wireless-gateways/{WirelessGatewayId}/statistics",
    GetWirelessGatewayTask: "GET /wireless-gateways/{Id}/tasks",
    GetWirelessGatewayTaskDefinition:
      "GET /wireless-gateway-task-definitions/{Id}",
    ListDestinations: "GET /destinations",
    ListDeviceProfiles: "GET /device-profiles",
    ListDevicesForWirelessDeviceImportTask: "GET /wireless_device_import_task",
    ListEventConfigurations: "GET /event-configurations",
    ListFuotaTasks: "GET /fuota-tasks",
    ListMulticastGroups: "GET /multicast-groups",
    ListMulticastGroupsByFuotaTask: "GET /fuota-tasks/{Id}/multicast-groups",
    ListNetworkAnalyzerConfigurations: "GET /network-analyzer-configurations",
    ListPartnerAccounts: "GET /partner-accounts",
    ListPositionConfigurations: "GET /position-configurations",
    ListQueuedMessages: "GET /wireless-devices/{Id}/data",
    ListServiceProfiles: "GET /service-profiles",
    ListTagsForResource: "GET /tags",
    ListWirelessDeviceImportTasks: "GET /wireless_device_import_tasks",
    ListWirelessDevices: "GET /wireless-devices",
    ListWirelessGateways: "GET /wireless-gateways",
    ListWirelessGatewayTaskDefinitions:
      "GET /wireless-gateway-task-definitions",
    PutPositionConfiguration:
      "PUT /position-configurations/{ResourceIdentifier}",
    PutResourceLogLevel: "PUT /log-levels/{ResourceIdentifier}",
    ResetAllResourceLogLevels: "DELETE /log-levels",
    ResetResourceLogLevel: "DELETE /log-levels/{ResourceIdentifier}",
    SendDataToMulticastGroup: "POST /multicast-groups/{Id}/data",
    SendDataToWirelessDevice: "POST /wireless-devices/{Id}/data",
    StartBulkAssociateWirelessDeviceWithMulticastGroup:
      "PATCH /multicast-groups/{Id}/bulk",
    StartBulkDisassociateWirelessDeviceFromMulticastGroup:
      "POST /multicast-groups/{Id}/bulk",
    StartFuotaTask: "PUT /fuota-tasks/{Id}",
    StartMulticastGroupSession: "PUT /multicast-groups/{Id}/session",
    StartSingleWirelessDeviceImportTask:
      "POST /wireless_single_device_import_task",
    StartWirelessDeviceImportTask: "POST /wireless_device_import_task",
    TagResource: "POST /tags",
    TestWirelessDevice: "POST /wireless-devices/{Id}/test",
    UntagResource: "DELETE /tags",
    UpdateDestination: "PATCH /destinations/{Name}",
    UpdateEventConfigurationByResourceTypes:
      "PATCH /event-configurations-resource-types",
    UpdateFuotaTask: "PATCH /fuota-tasks/{Id}",
    UpdateLogLevelsByResourceTypes: "POST /log-levels",
    UpdateMetricConfiguration: "PUT /metric-configuration",
    UpdateMulticastGroup: "PATCH /multicast-groups/{Id}",
    UpdateNetworkAnalyzerConfiguration:
      "PATCH /network-analyzer-configurations/{ConfigurationName}",
    UpdatePartnerAccount: "PATCH /partner-accounts/{PartnerAccountId}",
    UpdatePosition: "PATCH /positions/{ResourceIdentifier}",
    UpdateResourceEventConfiguration:
      "PATCH /event-configurations/{Identifier}",
    UpdateResourcePosition: "PATCH /resource-positions/{ResourceIdentifier}",
    UpdateWirelessDevice: "PATCH /wireless-devices/{Id}",
    UpdateWirelessDeviceImportTask: "PATCH /wireless_device_import_task/{Id}",
    UpdateWirelessGateway: "PATCH /wireless-gateways/{Id}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTWireless = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTWireless;
