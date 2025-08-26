import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Route53Profiles as _Route53Profiles } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route53Profiles",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "route53profiles",
  operations: {
    AssociateProfile: "POST /profileassociation",
    AssociateResourceToProfile: "POST /profileresourceassociation",
    CreateProfile: "POST /profile",
    DeleteProfile: "DELETE /profile/{ProfileId}",
    DisassociateProfile:
      "DELETE /profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}",
    DisassociateResourceFromProfile:
      "DELETE /profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}",
    GetProfile: "GET /profile/{ProfileId}",
    GetProfileAssociation: "GET /profileassociation/{ProfileAssociationId}",
    GetProfileResourceAssociation:
      "GET /profileresourceassociation/{ProfileResourceAssociationId}",
    ListProfileAssociations: "GET /profileassociations",
    ListProfileResourceAssociations:
      "GET /profileresourceassociations/profileid/{ProfileId}",
    ListProfiles: "GET /profiles",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateProfileResourceAssociation:
      "PATCH /profileresourceassociation/{ProfileResourceAssociationId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53Profiles = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Route53Profiles;
