import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NeptuneGraph as _NeptuneGraph } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Neptune Graph",
  version: "2023-11-29",
  protocol: "restJson1",
  sigV4ServiceName: "neptune-graph",
  operations: {
    CancelQuery: "DELETE /queries/{queryId}",
    ExecuteQuery: {
      http: "POST /queries",
      traits: {
        payload: "httpPayload",
      },
    },
    GetGraphSummary: "GET /summary",
    GetQuery: "GET /queries/{queryId}",
    ListQueries: "GET /queries",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelExportTask: "DELETE /exporttasks/{taskIdentifier}",
    CancelImportTask: "DELETE /importtasks/{taskIdentifier}",
    CreateGraph: "POST /graphs",
    CreateGraphSnapshot: "POST /snapshots",
    CreateGraphUsingImportTask: "POST /importtasks",
    CreatePrivateGraphEndpoint: "POST /graphs/{graphIdentifier}/endpoints/",
    DeleteGraph: "DELETE /graphs/{graphIdentifier}",
    DeleteGraphSnapshot: "DELETE /snapshots/{snapshotIdentifier}",
    DeletePrivateGraphEndpoint:
      "DELETE /graphs/{graphIdentifier}/endpoints/{vpcId}",
    GetExportTask: "GET /exporttasks/{taskIdentifier}",
    GetGraph: "GET /graphs/{graphIdentifier}",
    GetGraphSnapshot: "GET /snapshots/{snapshotIdentifier}",
    GetImportTask: "GET /importtasks/{taskIdentifier}",
    GetPrivateGraphEndpoint: "GET /graphs/{graphIdentifier}/endpoints/{vpcId}",
    ListExportTasks: "GET /exporttasks",
    ListGraphSnapshots: "GET /snapshots",
    ListGraphs: "GET /graphs",
    ListImportTasks: "GET /importtasks",
    ListPrivateGraphEndpoints: "GET /graphs/{graphIdentifier}/endpoints/",
    ResetGraph: "PUT /graphs/{graphIdentifier}",
    RestoreGraphFromSnapshot: "POST /snapshots/{snapshotIdentifier}/restore",
    StartExportTask: "POST /exporttasks",
    StartImportTask: "POST /graphs/{graphIdentifier}/importtasks",
    UpdateGraph: "PATCH /graphs/{graphIdentifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const NeptuneGraph = class extends AWSServiceClient {
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
} as unknown as typeof _NeptuneGraph;
