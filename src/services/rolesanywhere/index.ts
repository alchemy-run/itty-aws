import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RolesAnywhere as _RolesAnywhere } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "RolesAnywhere",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "rolesanywhere",
  operations: {
    ListTagsForResource: "GET /ListTagsForResource",
    PutNotificationSettings: "PATCH /put-notifications-settings",
    ResetNotificationSettings: "PATCH /reset-notifications-settings",
    TagResource: "POST /TagResource",
    UntagResource: "POST /UntagResource",
    CreateProfile: "POST /profiles",
    CreateTrustAnchor: "POST /trustanchors",
    DeleteAttributeMapping: "DELETE /profiles/{profileId}/mappings",
    DeleteCrl: "DELETE /crl/{crlId}",
    DeleteProfile: "DELETE /profile/{profileId}",
    DeleteTrustAnchor: "DELETE /trustanchor/{trustAnchorId}",
    DisableCrl: "POST /crl/{crlId}/disable",
    DisableProfile: "POST /profile/{profileId}/disable",
    DisableTrustAnchor: "POST /trustanchor/{trustAnchorId}/disable",
    EnableCrl: "POST /crl/{crlId}/enable",
    EnableProfile: "POST /profile/{profileId}/enable",
    EnableTrustAnchor: "POST /trustanchor/{trustAnchorId}/enable",
    GetCrl: "GET /crl/{crlId}",
    GetProfile: "GET /profile/{profileId}",
    GetSubject: "GET /subject/{subjectId}",
    GetTrustAnchor: "GET /trustanchor/{trustAnchorId}",
    ImportCrl: "POST /crls",
    ListCrls: "GET /crls",
    ListProfiles: "GET /profiles",
    ListSubjects: "GET /subjects",
    ListTrustAnchors: "GET /trustanchors",
    PutAttributeMapping: "PUT /profiles/{profileId}/mappings",
    UpdateCrl: "PATCH /crl/{crlId}",
    UpdateProfile: "PATCH /profile/{profileId}",
    UpdateTrustAnchor: "PATCH /trustanchor/{trustAnchorId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const RolesAnywhere = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _RolesAnywhere;
