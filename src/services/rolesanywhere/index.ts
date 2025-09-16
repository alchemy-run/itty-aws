import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RolesAnywhere as _RolesAnywhereClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

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

export type _RolesAnywhere = _RolesAnywhereClient;
export interface RolesAnywhere extends _RolesAnywhere {}
export const RolesAnywhere = class extends AWSServiceClient {
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
} as unknown as typeof _RolesAnywhereClient;
