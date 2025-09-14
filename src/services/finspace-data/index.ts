import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { finspacedata as _finspacedataClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "finspace data",
  version: "2020-07-13",
  protocol: "restJson1",
  sigV4ServiceName: "finspace-api",
  endpointPrefix: "finspace-api",
  operations: {
    AssociateUserToPermissionGroup: {
      http: "POST /permission-group/{permissionGroupId}/users/{userId}",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    CreateChangeset: "POST /datasets/{datasetId}/changesetsv2",
    CreateDataset: "POST /datasetsv2",
    CreateDataView: "POST /datasets/{datasetId}/dataviewsv2",
    CreatePermissionGroup: "POST /permission-group",
    CreateUser: "POST /user",
    DeleteDataset: "DELETE /datasetsv2/{datasetId}",
    DeletePermissionGroup: "DELETE /permission-group/{permissionGroupId}",
    DisableUser: "POST /user/{userId}/disable",
    DisassociateUserFromPermissionGroup: {
      http: "DELETE /permission-group/{permissionGroupId}/users/{userId}",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    EnableUser: "POST /user/{userId}/enable",
    GetChangeset: "GET /datasets/{datasetId}/changesetsv2/{changesetId}",
    GetDataset: "GET /datasetsv2/{datasetId}",
    GetDataView: "GET /datasets/{datasetId}/dataviewsv2/{dataViewId}",
    GetExternalDataViewAccessDetails:
      "POST /datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details",
    GetPermissionGroup: "GET /permission-group/{permissionGroupId}",
    GetProgrammaticAccessCredentials: "GET /credentials/programmatic",
    GetUser: "GET /user/{userId}",
    GetWorkingLocation: "POST /workingLocationV1",
    ListChangesets: "GET /datasets/{datasetId}/changesetsv2",
    ListDatasets: "GET /datasetsv2",
    ListDataViews: "GET /datasets/{datasetId}/dataviewsv2",
    ListPermissionGroups: "GET /permission-group",
    ListPermissionGroupsByUser: "GET /user/{userId}/permission-groups",
    ListUsers: "GET /user",
    ListUsersByPermissionGroup:
      "GET /permission-group/{permissionGroupId}/users",
    ResetUserPassword: "POST /user/{userId}/password",
    UpdateChangeset: "PUT /datasets/{datasetId}/changesetsv2/{changesetId}",
    UpdateDataset: "PUT /datasetsv2/{datasetId}",
    UpdatePermissionGroup: "PUT /permission-group/{permissionGroupId}",
    UpdateUser: "PUT /user/{userId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const finspacedata = class extends AWSServiceClient {
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
} as unknown as typeof _finspacedataClient;
