import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ServiceCatalogAppRegistry as _ServiceCatalogAppRegistry } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Service Catalog AppRegistry",
  version: "2020-06-24",
  protocol: "restJson1",
  sigV4ServiceName: "servicecatalog",
  endpointPrefix: "servicecatalog-appregistry",
  operations: {
    AssociateAttributeGroup:
      "PUT /applications/{application}/attribute-groups/{attributeGroup}",
    AssociateResource:
      "PUT /applications/{application}/resources/{resourceType}/{resource}",
    CreateApplication: "POST /applications",
    CreateAttributeGroup: "POST /attribute-groups",
    DeleteApplication: "DELETE /applications/{application}",
    DeleteAttributeGroup: "DELETE /attribute-groups/{attributeGroup}",
    DisassociateAttributeGroup:
      "DELETE /applications/{application}/attribute-groups/{attributeGroup}",
    DisassociateResource:
      "DELETE /applications/{application}/resources/{resourceType}/{resource}",
    GetApplication: "GET /applications/{application}",
    GetAssociatedResource:
      "GET /applications/{application}/resources/{resourceType}/{resource}",
    GetAttributeGroup: "GET /attribute-groups/{attributeGroup}",
    GetConfiguration: "GET /configuration",
    ListApplications: "GET /applications",
    ListAssociatedAttributeGroups:
      "GET /applications/{application}/attribute-groups",
    ListAssociatedResources: "GET /applications/{application}/resources",
    ListAttributeGroups: "GET /attribute-groups",
    ListAttributeGroupsForApplication:
      "GET /applications/{application}/attribute-group-details",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutConfiguration: "PUT /configuration",
    SyncResource: "POST /sync/{resourceType}/{resource}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApplication: "PATCH /applications/{application}",
    UpdateAttributeGroup: "PATCH /attribute-groups/{attributeGroup}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ServiceCatalogAppRegistry = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ServiceCatalogAppRegistry;
