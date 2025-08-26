import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DataExchange as _DataExchange } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DataExchange",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "dataexchange",
  endpointPrefix: "dataexchange",
  operations: {
    AcceptDataGrant: "POST /v1/data-grants/{DataGrantArn}/accept",
    CancelJob: "DELETE /v1/jobs/{JobId}",
    CreateDataGrant: "POST /v1/data-grants",
    CreateDataSet: "POST /v1/data-sets",
    CreateEventAction: "POST /v1/event-actions",
    CreateJob: "POST /v1/jobs",
    CreateRevision: "POST /v1/data-sets/{DataSetId}/revisions",
    DeleteAsset:
      "DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
    DeleteDataGrant: "DELETE /v1/data-grants/{DataGrantId}",
    DeleteDataSet: "DELETE /v1/data-sets/{DataSetId}",
    DeleteEventAction: "DELETE /v1/event-actions/{EventActionId}",
    DeleteRevision: "DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
    GetAsset:
      "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
    GetDataGrant: "GET /v1/data-grants/{DataGrantId}",
    GetDataSet: "GET /v1/data-sets/{DataSetId}",
    GetEventAction: "GET /v1/event-actions/{EventActionId}",
    GetJob: "GET /v1/jobs/{JobId}",
    GetReceivedDataGrant: "GET /v1/received-data-grants/{DataGrantArn}",
    GetRevision: "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
    ListDataGrants: "GET /v1/data-grants",
    ListDataSetRevisions: "GET /v1/data-sets/{DataSetId}/revisions",
    ListDataSets: "GET /v1/data-sets",
    ListEventActions: "GET /v1/event-actions",
    ListJobs: "GET /v1/jobs",
    ListReceivedDataGrants: "GET /v1/received-data-grants",
    ListRevisionAssets:
      "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    RevokeRevision:
      "POST /v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke",
    SendApiAsset: {
      http: "POST /v1",
      traits: {
        Body: "httpPayload",
      },
    },
    SendDataSetNotification: "POST /v1/data-sets/{DataSetId}/notification",
    StartJob: "PATCH /v1/jobs/{JobId}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateAsset:
      "PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
    UpdateDataSet: "PATCH /v1/data-sets/{DataSetId}",
    UpdateEventAction: "PATCH /v1/event-actions/{EventActionId}",
    UpdateRevision: "PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DataExchange = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _DataExchange;
