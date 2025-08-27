import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Greengrass as _Greengrass } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Greengrass",
  version: "2017-06-07",
  protocol: "restJson1",
  sigV4ServiceName: "greengrass",
  endpointPrefix: "greengrass",
  operations: {
    AssociateRoleToGroup: "PUT /greengrass/groups/{GroupId}/role",
    AssociateServiceRoleToAccount: "PUT /greengrass/servicerole",
    CreateConnectorDefinition: "POST /greengrass/definition/connectors",
    CreateConnectorDefinitionVersion:
      "POST /greengrass/definition/connectors/{ConnectorDefinitionId}/versions",
    CreateCoreDefinition: "POST /greengrass/definition/cores",
    CreateCoreDefinitionVersion:
      "POST /greengrass/definition/cores/{CoreDefinitionId}/versions",
    CreateDeployment: "POST /greengrass/groups/{GroupId}/deployments",
    CreateDeviceDefinition: "POST /greengrass/definition/devices",
    CreateDeviceDefinitionVersion:
      "POST /greengrass/definition/devices/{DeviceDefinitionId}/versions",
    CreateFunctionDefinition: "POST /greengrass/definition/functions",
    CreateFunctionDefinitionVersion:
      "POST /greengrass/definition/functions/{FunctionDefinitionId}/versions",
    CreateGroup: "POST /greengrass/groups",
    CreateGroupCertificateAuthority:
      "POST /greengrass/groups/{GroupId}/certificateauthorities",
    CreateGroupVersion: "POST /greengrass/groups/{GroupId}/versions",
    CreateLoggerDefinition: "POST /greengrass/definition/loggers",
    CreateLoggerDefinitionVersion:
      "POST /greengrass/definition/loggers/{LoggerDefinitionId}/versions",
    CreateResourceDefinition: "POST /greengrass/definition/resources",
    CreateResourceDefinitionVersion:
      "POST /greengrass/definition/resources/{ResourceDefinitionId}/versions",
    CreateSoftwareUpdateJob: "POST /greengrass/updates",
    CreateSubscriptionDefinition: "POST /greengrass/definition/subscriptions",
    CreateSubscriptionDefinitionVersion:
      "POST /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
    DeleteConnectorDefinition:
      "DELETE /greengrass/definition/connectors/{ConnectorDefinitionId}",
    DeleteCoreDefinition:
      "DELETE /greengrass/definition/cores/{CoreDefinitionId}",
    DeleteDeviceDefinition:
      "DELETE /greengrass/definition/devices/{DeviceDefinitionId}",
    DeleteFunctionDefinition:
      "DELETE /greengrass/definition/functions/{FunctionDefinitionId}",
    DeleteGroup: "DELETE /greengrass/groups/{GroupId}",
    DeleteLoggerDefinition:
      "DELETE /greengrass/definition/loggers/{LoggerDefinitionId}",
    DeleteResourceDefinition:
      "DELETE /greengrass/definition/resources/{ResourceDefinitionId}",
    DeleteSubscriptionDefinition:
      "DELETE /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
    DisassociateRoleFromGroup: "DELETE /greengrass/groups/{GroupId}/role",
    DisassociateServiceRoleFromAccount: "DELETE /greengrass/servicerole",
    GetAssociatedRole: "GET /greengrass/groups/{GroupId}/role",
    GetBulkDeploymentStatus:
      "GET /greengrass/bulk/deployments/{BulkDeploymentId}/status",
    GetConnectivityInfo: "GET /greengrass/things/{ThingName}/connectivityInfo",
    GetConnectorDefinition:
      "GET /greengrass/definition/connectors/{ConnectorDefinitionId}",
    GetConnectorDefinitionVersion:
      "GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}",
    GetCoreDefinition: "GET /greengrass/definition/cores/{CoreDefinitionId}",
    GetCoreDefinitionVersion:
      "GET /greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}",
    GetDeploymentStatus:
      "GET /greengrass/groups/{GroupId}/deployments/{DeploymentId}/status",
    GetDeviceDefinition:
      "GET /greengrass/definition/devices/{DeviceDefinitionId}",
    GetDeviceDefinitionVersion:
      "GET /greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}",
    GetFunctionDefinition:
      "GET /greengrass/definition/functions/{FunctionDefinitionId}",
    GetFunctionDefinitionVersion:
      "GET /greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}",
    GetGroup: "GET /greengrass/groups/{GroupId}",
    GetGroupCertificateAuthority:
      "GET /greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}",
    GetGroupCertificateConfiguration:
      "GET /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
    GetGroupVersion:
      "GET /greengrass/groups/{GroupId}/versions/{GroupVersionId}",
    GetLoggerDefinition:
      "GET /greengrass/definition/loggers/{LoggerDefinitionId}",
    GetLoggerDefinitionVersion:
      "GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}",
    GetResourceDefinition:
      "GET /greengrass/definition/resources/{ResourceDefinitionId}",
    GetResourceDefinitionVersion:
      "GET /greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}",
    GetServiceRoleForAccount: "GET /greengrass/servicerole",
    GetSubscriptionDefinition:
      "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
    GetSubscriptionDefinitionVersion:
      "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}",
    GetThingRuntimeConfiguration:
      "GET /greengrass/things/{ThingName}/runtimeconfig",
    ListBulkDeploymentDetailedReports:
      "GET /greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports",
    ListBulkDeployments: "GET /greengrass/bulk/deployments",
    ListConnectorDefinitions: "GET /greengrass/definition/connectors",
    ListConnectorDefinitionVersions:
      "GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions",
    ListCoreDefinitions: "GET /greengrass/definition/cores",
    ListCoreDefinitionVersions:
      "GET /greengrass/definition/cores/{CoreDefinitionId}/versions",
    ListDeployments: "GET /greengrass/groups/{GroupId}/deployments",
    ListDeviceDefinitions: "GET /greengrass/definition/devices",
    ListDeviceDefinitionVersions:
      "GET /greengrass/definition/devices/{DeviceDefinitionId}/versions",
    ListFunctionDefinitions: "GET /greengrass/definition/functions",
    ListFunctionDefinitionVersions:
      "GET /greengrass/definition/functions/{FunctionDefinitionId}/versions",
    ListGroupCertificateAuthorities:
      "GET /greengrass/groups/{GroupId}/certificateauthorities",
    ListGroups: "GET /greengrass/groups",
    ListGroupVersions: "GET /greengrass/groups/{GroupId}/versions",
    ListLoggerDefinitions: "GET /greengrass/definition/loggers",
    ListLoggerDefinitionVersions:
      "GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions",
    ListResourceDefinitions: "GET /greengrass/definition/resources",
    ListResourceDefinitionVersions:
      "GET /greengrass/definition/resources/{ResourceDefinitionId}/versions",
    ListSubscriptionDefinitions: "GET /greengrass/definition/subscriptions",
    ListSubscriptionDefinitionVersions:
      "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    ResetDeployments: "POST /greengrass/groups/{GroupId}/deployments/$reset",
    StartBulkDeployment: "POST /greengrass/bulk/deployments",
    StopBulkDeployment:
      "PUT /greengrass/bulk/deployments/{BulkDeploymentId}/$stop",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateConnectivityInfo:
      "PUT /greengrass/things/{ThingName}/connectivityInfo",
    UpdateConnectorDefinition:
      "PUT /greengrass/definition/connectors/{ConnectorDefinitionId}",
    UpdateCoreDefinition: "PUT /greengrass/definition/cores/{CoreDefinitionId}",
    UpdateDeviceDefinition:
      "PUT /greengrass/definition/devices/{DeviceDefinitionId}",
    UpdateFunctionDefinition:
      "PUT /greengrass/definition/functions/{FunctionDefinitionId}",
    UpdateGroup: "PUT /greengrass/groups/{GroupId}",
    UpdateGroupCertificateConfiguration:
      "PUT /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
    UpdateLoggerDefinition:
      "PUT /greengrass/definition/loggers/{LoggerDefinitionId}",
    UpdateResourceDefinition:
      "PUT /greengrass/definition/resources/{ResourceDefinitionId}",
    UpdateSubscriptionDefinition:
      "PUT /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
    UpdateThingRuntimeConfiguration:
      "PUT /greengrass/things/{ThingName}/runtimeconfig",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Greengrass = class extends AWSServiceClient {
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
} as unknown as typeof _Greengrass;
