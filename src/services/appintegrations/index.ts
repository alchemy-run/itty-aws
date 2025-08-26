import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppIntegrations as _AppIntegrations } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AppIntegrations",
  version: "2020-07-29",
  protocol: "restJson1",
  sigV4ServiceName: "app-integrations",
  endpointPrefix: "app-integrations",
  operations: {
    CreateApplication: "POST /applications",
    CreateDataIntegration: "POST /dataIntegrations",
    CreateDataIntegrationAssociation:
      "POST /dataIntegrations/{DataIntegrationIdentifier}/associations",
    CreateEventIntegration: "POST /eventIntegrations",
    DeleteApplication: "DELETE /applications/{Arn}",
    DeleteDataIntegration:
      "DELETE /dataIntegrations/{DataIntegrationIdentifier}",
    DeleteEventIntegration: "DELETE /eventIntegrations/{Name}",
    GetApplication: "GET /applications/{Arn}",
    GetDataIntegration: "GET /dataIntegrations/{Identifier}",
    GetEventIntegration: "GET /eventIntegrations/{Name}",
    ListApplicationAssociations:
      "GET /applications/{ApplicationId}/associations",
    ListApplications: "GET /applications",
    ListDataIntegrationAssociations:
      "GET /dataIntegrations/{DataIntegrationIdentifier}/associations",
    ListDataIntegrations: "GET /dataIntegrations",
    ListEventIntegrationAssociations:
      "GET /eventIntegrations/{EventIntegrationName}/associations",
    ListEventIntegrations: "GET /eventIntegrations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApplication: "PATCH /applications/{Arn}",
    UpdateDataIntegration: "PATCH /dataIntegrations/{Identifier}",
    UpdateDataIntegrationAssociation:
      "PATCH /dataIntegrations/{DataIntegrationIdentifier}/associations/{DataIntegrationAssociationIdentifier}",
    UpdateEventIntegration: "PATCH /eventIntegrations/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AppIntegrations = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _AppIntegrations;
