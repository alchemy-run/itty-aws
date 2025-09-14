import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { WorkSpacesWeb as _WorkSpacesWebClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WorkSpaces Web",
  version: "2020-07-08",
  protocol: "restJson1",
  sigV4ServiceName: "workspaces-web",
  endpointPrefix: "workspaces-web",
  operations: {
    ExpireSession: "DELETE /portals/{portalId}/sessions/{sessionId}",
    GetSession: "GET /portals/{portalId}/sessions/{sessionId}",
    ListSessions: "GET /portals/{portalId}/sessions",
    ListTagsForResource: "GET /tags/{resourceArn+}",
    TagResource: "POST /tags/{resourceArn+}",
    UntagResource: "DELETE /tags/{resourceArn+}",
    AssociateBrowserSettings: "PUT /portals/{portalArn+}/browserSettings",
    AssociateDataProtectionSettings:
      "PUT /portals/{portalArn+}/dataProtectionSettings",
    AssociateIpAccessSettings: "PUT /portals/{portalArn+}/ipAccessSettings",
    AssociateNetworkSettings: "PUT /portals/{portalArn+}/networkSettings",
    AssociateSessionLogger: "PUT /portals/{portalArn+}/sessionLogger",
    AssociateTrustStore: "PUT /portals/{portalArn+}/trustStores",
    AssociateUserAccessLoggingSettings:
      "PUT /portals/{portalArn+}/userAccessLoggingSettings",
    AssociateUserSettings: "PUT /portals/{portalArn+}/userSettings",
    CreateBrowserSettings: "POST /browserSettings",
    CreateDataProtectionSettings: "POST /dataProtectionSettings",
    CreateIdentityProvider: "POST /identityProviders",
    CreateIpAccessSettings: "POST /ipAccessSettings",
    CreateNetworkSettings: "POST /networkSettings",
    CreatePortal: "POST /portals",
    CreateSessionLogger: "POST /sessionLoggers",
    CreateTrustStore: "POST /trustStores",
    CreateUserAccessLoggingSettings: "POST /userAccessLoggingSettings",
    CreateUserSettings: "POST /userSettings",
    DeleteBrowserSettings: "DELETE /browserSettings/{browserSettingsArn+}",
    DeleteDataProtectionSettings:
      "DELETE /dataProtectionSettings/{dataProtectionSettingsArn+}",
    DeleteIdentityProvider: "DELETE /identityProviders/{identityProviderArn+}",
    DeleteIpAccessSettings: "DELETE /ipAccessSettings/{ipAccessSettingsArn+}",
    DeleteNetworkSettings: "DELETE /networkSettings/{networkSettingsArn+}",
    DeletePortal: "DELETE /portals/{portalArn+}",
    DeleteSessionLogger: "DELETE /sessionLoggers/{sessionLoggerArn+}",
    DeleteTrustStore: "DELETE /trustStores/{trustStoreArn+}",
    DeleteUserAccessLoggingSettings:
      "DELETE /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
    DeleteUserSettings: "DELETE /userSettings/{userSettingsArn+}",
    DisassociateBrowserSettings: "DELETE /portals/{portalArn+}/browserSettings",
    DisassociateDataProtectionSettings:
      "DELETE /portals/{portalArn+}/dataProtectionSettings",
    DisassociateIpAccessSettings:
      "DELETE /portals/{portalArn+}/ipAccessSettings",
    DisassociateNetworkSettings: "DELETE /portals/{portalArn+}/networkSettings",
    DisassociateSessionLogger: "DELETE /portals/{portalArn+}/sessionLogger",
    DisassociateTrustStore: "DELETE /portals/{portalArn+}/trustStores",
    DisassociateUserAccessLoggingSettings:
      "DELETE /portals/{portalArn+}/userAccessLoggingSettings",
    DisassociateUserSettings: "DELETE /portals/{portalArn+}/userSettings",
    GetBrowserSettings: "GET /browserSettings/{browserSettingsArn+}",
    GetDataProtectionSettings:
      "GET /dataProtectionSettings/{dataProtectionSettingsArn+}",
    GetIdentityProvider: "GET /identityProviders/{identityProviderArn+}",
    GetIpAccessSettings: "GET /ipAccessSettings/{ipAccessSettingsArn+}",
    GetNetworkSettings: "GET /networkSettings/{networkSettingsArn+}",
    GetPortal: "GET /portals/{portalArn+}",
    GetPortalServiceProviderMetadata: "GET /portalIdp/{portalArn+}",
    GetSessionLogger: "GET /sessionLoggers/{sessionLoggerArn+}",
    GetTrustStore: "GET /trustStores/{trustStoreArn+}",
    GetTrustStoreCertificate: "GET /trustStores/{trustStoreArn+}/certificate",
    GetUserAccessLoggingSettings:
      "GET /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
    GetUserSettings: "GET /userSettings/{userSettingsArn+}",
    ListBrowserSettings: "GET /browserSettings",
    ListDataProtectionSettings: "GET /dataProtectionSettings",
    ListIdentityProviders: "GET /portals/{portalArn+}/identityProviders",
    ListIpAccessSettings: "GET /ipAccessSettings",
    ListNetworkSettings: "GET /networkSettings",
    ListPortals: "GET /portals",
    ListSessionLoggers: "GET /sessionLoggers",
    ListTrustStoreCertificates:
      "GET /trustStores/{trustStoreArn+}/certificates",
    ListTrustStores: "GET /trustStores",
    ListUserAccessLoggingSettings: "GET /userAccessLoggingSettings",
    ListUserSettings: "GET /userSettings",
    UpdateBrowserSettings: "PATCH /browserSettings/{browserSettingsArn+}",
    UpdateDataProtectionSettings:
      "PATCH /dataProtectionSettings/{dataProtectionSettingsArn+}",
    UpdateIdentityProvider: "PATCH /identityProviders/{identityProviderArn+}",
    UpdateIpAccessSettings: "PATCH /ipAccessSettings/{ipAccessSettingsArn+}",
    UpdateNetworkSettings: "PATCH /networkSettings/{networkSettingsArn+}",
    UpdatePortal: "PUT /portals/{portalArn+}",
    UpdateSessionLogger: "POST /sessionLoggers/{sessionLoggerArn+}",
    UpdateTrustStore: "PATCH /trustStores/{trustStoreArn+}",
    UpdateUserAccessLoggingSettings:
      "PATCH /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
    UpdateUserSettings: "PATCH /userSettings/{userSettingsArn+}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WorkSpacesWeb = class extends AWSServiceClient {
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
} as unknown as typeof _WorkSpacesWebClient;
