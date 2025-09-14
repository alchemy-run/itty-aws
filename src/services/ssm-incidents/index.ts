import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSMIncidents as _SSMIncidentsClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SSM Incidents",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "ssm-incidents",
  operations: {
    BatchGetIncidentFindings: "POST /batchGetIncidentFindings",
    CreateReplicationSet: "POST /createReplicationSet",
    CreateResponsePlan: "POST /createResponsePlan",
    CreateTimelineEvent: "POST /createTimelineEvent",
    DeleteIncidentRecord: "POST /deleteIncidentRecord",
    DeleteReplicationSet: "POST /deleteReplicationSet",
    DeleteResourcePolicy: "POST /deleteResourcePolicy",
    DeleteResponsePlan: "POST /deleteResponsePlan",
    DeleteTimelineEvent: "POST /deleteTimelineEvent",
    GetIncidentRecord: "GET /getIncidentRecord",
    GetReplicationSet: "GET /getReplicationSet",
    GetResourcePolicies: "POST /getResourcePolicies",
    GetResponsePlan: "GET /getResponsePlan",
    GetTimelineEvent: "GET /getTimelineEvent",
    ListIncidentFindings: "POST /listIncidentFindings",
    ListIncidentRecords: "POST /listIncidentRecords",
    ListRelatedItems: "POST /listRelatedItems",
    ListReplicationSets: "POST /listReplicationSets",
    ListResponsePlans: "POST /listResponsePlans",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListTimelineEvents: "POST /listTimelineEvents",
    PutResourcePolicy: "POST /putResourcePolicy",
    StartIncident: "POST /startIncident",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateDeletionProtection: "POST /updateDeletionProtection",
    UpdateIncidentRecord: "POST /updateIncidentRecord",
    UpdateRelatedItems: "POST /updateRelatedItems",
    UpdateReplicationSet: "POST /updateReplicationSet",
    UpdateResponsePlan: "POST /updateResponsePlan",
    UpdateTimelineEvent: "POST /updateTimelineEvent",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SSMIncidents = class extends AWSServiceClient {
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
} as unknown as typeof _SSMIncidentsClient;
