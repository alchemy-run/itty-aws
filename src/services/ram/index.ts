import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RAM as _RAMClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "RAM",
  version: "2018-01-04",
  protocol: "restJson1",
  sigV4ServiceName: "ram",
  endpointPrefix: "ram",
  operations: {
    AcceptResourceShareInvitation: "POST /acceptresourceshareinvitation",
    AssociateResourceShare: "POST /associateresourceshare",
    AssociateResourceSharePermission: "POST /associateresourcesharepermission",
    CreatePermission: "POST /createpermission",
    CreatePermissionVersion: "POST /createpermissionversion",
    CreateResourceShare: "POST /createresourceshare",
    DeletePermission: "DELETE /deletepermission",
    DeletePermissionVersion: "DELETE /deletepermissionversion",
    DeleteResourceShare: "DELETE /deleteresourceshare",
    DisassociateResourceShare: "POST /disassociateresourceshare",
    DisassociateResourceSharePermission:
      "POST /disassociateresourcesharepermission",
    EnableSharingWithAwsOrganization: "POST /enablesharingwithawsorganization",
    GetPermission: "POST /getpermission",
    GetResourcePolicies: "POST /getresourcepolicies",
    GetResourceShareAssociations: "POST /getresourceshareassociations",
    GetResourceShareInvitations: "POST /getresourceshareinvitations",
    GetResourceShares: "POST /getresourceshares",
    ListPendingInvitationResources: "POST /listpendinginvitationresources",
    ListPermissionAssociations: "POST /listpermissionassociations",
    ListPermissions: "POST /listpermissions",
    ListPermissionVersions: "POST /listpermissionversions",
    ListPrincipals: "POST /listprincipals",
    ListReplacePermissionAssociationsWork:
      "POST /listreplacepermissionassociationswork",
    ListResources: "POST /listresources",
    ListResourceSharePermissions: "POST /listresourcesharepermissions",
    ListResourceTypes: "POST /listresourcetypes",
    PromotePermissionCreatedFromPolicy:
      "POST /promotepermissioncreatedfrompolicy",
    PromoteResourceShareCreatedFromPolicy:
      "POST /promoteresourcesharecreatedfrompolicy",
    RejectResourceShareInvitation: "POST /rejectresourceshareinvitation",
    ReplacePermissionAssociations: "POST /replacepermissionassociations",
    SetDefaultPermissionVersion: "POST /setdefaultpermissionversion",
    TagResource: "POST /tagresource",
    UntagResource: "POST /untagresource",
    UpdateResourceShare: "POST /updateresourceshare",
  },
} as const satisfies ServiceMetadata;

export type _RAM = _RAMClient;
export interface RAM extends _RAM {}
export const RAM = class extends AWSServiceClient {
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
} as unknown as typeof _RAMClient;
