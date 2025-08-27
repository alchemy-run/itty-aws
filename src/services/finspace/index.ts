import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { finspace as _finspace } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "finspace",
  version: "2021-03-12",
  protocol: "restJson1",
  sigV4ServiceName: "finspace",
  endpointPrefix: "finspace",
  operations: {
    CreateEnvironment: "POST /environment",
    CreateKxChangeset:
      "POST /kx/environments/{environmentId}/databases/{databaseName}/changesets",
    CreateKxCluster: "POST /kx/environments/{environmentId}/clusters",
    CreateKxDatabase: "POST /kx/environments/{environmentId}/databases",
    CreateKxDataview:
      "POST /kx/environments/{environmentId}/databases/{databaseName}/dataviews",
    CreateKxEnvironment: "POST /kx/environments",
    CreateKxScalingGroup: "POST /kx/environments/{environmentId}/scalingGroups",
    CreateKxUser: "POST /kx/environments/{environmentId}/users",
    CreateKxVolume: "POST /kx/environments/{environmentId}/kxvolumes",
    DeleteEnvironment: "DELETE /environment/{environmentId}",
    DeleteKxCluster:
      "DELETE /kx/environments/{environmentId}/clusters/{clusterName}",
    DeleteKxClusterNode:
      "DELETE /kx/environments/{environmentId}/clusters/{clusterName}/nodes/{nodeId}",
    DeleteKxDatabase:
      "DELETE /kx/environments/{environmentId}/databases/{databaseName}",
    DeleteKxDataview:
      "DELETE /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
    DeleteKxEnvironment: "DELETE /kx/environments/{environmentId}",
    DeleteKxScalingGroup:
      "DELETE /kx/environments/{environmentId}/scalingGroups/{scalingGroupName}",
    DeleteKxUser: "DELETE /kx/environments/{environmentId}/users/{userName}",
    DeleteKxVolume:
      "DELETE /kx/environments/{environmentId}/kxvolumes/{volumeName}",
    GetEnvironment: "GET /environment/{environmentId}",
    GetKxChangeset:
      "GET /kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}",
    GetKxCluster: "GET /kx/environments/{environmentId}/clusters/{clusterName}",
    GetKxConnectionString:
      "GET /kx/environments/{environmentId}/connectionString",
    GetKxDatabase:
      "GET /kx/environments/{environmentId}/databases/{databaseName}",
    GetKxDataview:
      "GET /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
    GetKxEnvironment: "GET /kx/environments/{environmentId}",
    GetKxScalingGroup:
      "GET /kx/environments/{environmentId}/scalingGroups/{scalingGroupName}",
    GetKxUser: "GET /kx/environments/{environmentId}/users/{userName}",
    GetKxVolume: "GET /kx/environments/{environmentId}/kxvolumes/{volumeName}",
    ListEnvironments: "GET /environment",
    ListKxChangesets:
      "GET /kx/environments/{environmentId}/databases/{databaseName}/changesets",
    ListKxClusterNodes:
      "GET /kx/environments/{environmentId}/clusters/{clusterName}/nodes",
    ListKxClusters: "GET /kx/environments/{environmentId}/clusters",
    ListKxDatabases: "GET /kx/environments/{environmentId}/databases",
    ListKxDataviews:
      "GET /kx/environments/{environmentId}/databases/{databaseName}/dataviews",
    ListKxEnvironments: "GET /kx/environments",
    ListKxScalingGroups: "GET /kx/environments/{environmentId}/scalingGroups",
    ListKxUsers: "GET /kx/environments/{environmentId}/users",
    ListKxVolumes: "GET /kx/environments/{environmentId}/kxvolumes",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateEnvironment: "PUT /environment/{environmentId}",
    UpdateKxClusterCodeConfiguration:
      "PUT /kx/environments/{environmentId}/clusters/{clusterName}/configuration/code",
    UpdateKxClusterDatabases:
      "PUT /kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases",
    UpdateKxDatabase:
      "PUT /kx/environments/{environmentId}/databases/{databaseName}",
    UpdateKxDataview:
      "PUT /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
    UpdateKxEnvironment: "PUT /kx/environments/{environmentId}",
    UpdateKxEnvironmentNetwork: "PUT /kx/environments/{environmentId}/network",
    UpdateKxUser: "PUT /kx/environments/{environmentId}/users/{userName}",
    UpdateKxVolume:
      "PATCH /kx/environments/{environmentId}/kxvolumes/{volumeName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const finspace = class extends AWSServiceClient {
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
} as unknown as typeof _finspace;
