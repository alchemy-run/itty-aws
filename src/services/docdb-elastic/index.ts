import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DocDBElastic as _DocDBElasticClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DocDB Elastic",
  version: "2022-11-28",
  protocol: "restJson1",
  sigV4ServiceName: "docdb-elastic",
  operations: {
    ApplyPendingMaintenanceAction: "POST /pending-action",
    CopyClusterSnapshot: "POST /cluster-snapshot/{snapshotArn}/copy",
    CreateCluster: "POST /cluster",
    CreateClusterSnapshot: "POST /cluster-snapshot",
    DeleteCluster: "DELETE /cluster/{clusterArn}",
    DeleteClusterSnapshot: "DELETE /cluster-snapshot/{snapshotArn}",
    GetCluster: "GET /cluster/{clusterArn}",
    GetClusterSnapshot: "GET /cluster-snapshot/{snapshotArn}",
    GetPendingMaintenanceAction: "GET /pending-action/{resourceArn}",
    ListClusters: "GET /clusters",
    ListClusterSnapshots: "GET /cluster-snapshots",
    ListPendingMaintenanceActions: "GET /pending-actions",
    ListTagsForResource: "GET /tags/{resourceArn}",
    RestoreClusterFromSnapshot: "POST /cluster-snapshot/{snapshotArn}/restore",
    StartCluster: "POST /cluster/{clusterArn}/start",
    StopCluster: "POST /cluster/{clusterArn}/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateCluster: "PUT /cluster/{clusterArn}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type DocDBElastic = typeof DocDBElastic;
export const DocDBElastic = class extends AWSServiceClient {
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
} as unknown as typeof _DocDBElasticClient;
