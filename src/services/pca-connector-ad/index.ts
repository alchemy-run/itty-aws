import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PcaConnectorAd as _PcaConnectorAd } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Pca Connector Ad",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "pca-connector-ad",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateConnector: "POST /connectors",
    CreateDirectoryRegistration: "POST /directoryRegistrations",
    CreateServicePrincipalName:
      "POST /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
    CreateTemplate: "POST /templates",
    CreateTemplateGroupAccessControlEntry:
      "POST /templates/{TemplateArn}/accessControlEntries",
    DeleteConnector: "DELETE /connectors/{ConnectorArn}",
    DeleteDirectoryRegistration:
      "DELETE /directoryRegistrations/{DirectoryRegistrationArn}",
    DeleteServicePrincipalName:
      "DELETE /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
    DeleteTemplate: "DELETE /templates/{TemplateArn}",
    DeleteTemplateGroupAccessControlEntry:
      "DELETE /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
    GetConnector: "GET /connectors/{ConnectorArn}",
    GetDirectoryRegistration:
      "GET /directoryRegistrations/{DirectoryRegistrationArn}",
    GetServicePrincipalName:
      "GET /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
    GetTemplate: "GET /templates/{TemplateArn}",
    GetTemplateGroupAccessControlEntry:
      "GET /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
    ListConnectors: "GET /connectors",
    ListDirectoryRegistrations: "GET /directoryRegistrations",
    ListServicePrincipalNames:
      "GET /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames",
    ListTemplateGroupAccessControlEntries:
      "GET /templates/{TemplateArn}/accessControlEntries",
    ListTemplates: "GET /templates",
    UpdateTemplate: "PATCH /templates/{TemplateArn}",
    UpdateTemplateGroupAccessControlEntry:
      "PATCH /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const PcaConnectorAd = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _PcaConnectorAd;
