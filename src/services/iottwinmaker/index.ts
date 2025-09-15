import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTTwinMaker as _IoTTwinMakerClient } from "./types.ts";

export * from "./types.ts";

export {
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoTTwinMaker",
  version: "2021-11-29",
  protocol: "restJson1",
  sigV4ServiceName: "iottwinmaker",
  endpointPrefix: "iottwinmaker",
  operations: {
    BatchPutPropertyValues: "POST /workspaces/{workspaceId}/entity-properties",
    CancelMetadataTransferJob:
      "PUT /metadata-transfer-jobs/{metadataTransferJobId}/cancel",
    CreateComponentType:
      "POST /workspaces/{workspaceId}/component-types/{componentTypeId}",
    CreateEntity: "POST /workspaces/{workspaceId}/entities",
    CreateMetadataTransferJob: "POST /metadata-transfer-jobs",
    CreateScene: "POST /workspaces/{workspaceId}/scenes",
    CreateSyncJob: "POST /workspaces/{workspaceId}/sync-jobs/{syncSource}",
    CreateWorkspace: "POST /workspaces/{workspaceId}",
    DeleteComponentType:
      "DELETE /workspaces/{workspaceId}/component-types/{componentTypeId}",
    DeleteEntity: "DELETE /workspaces/{workspaceId}/entities/{entityId}",
    DeleteScene: "DELETE /workspaces/{workspaceId}/scenes/{sceneId}",
    DeleteSyncJob: "DELETE /workspaces/{workspaceId}/sync-jobs/{syncSource}",
    DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
    ExecuteQuery: "POST /queries/execution",
    GetComponentType:
      "GET /workspaces/{workspaceId}/component-types/{componentTypeId}",
    GetEntity: "GET /workspaces/{workspaceId}/entities/{entityId}",
    GetMetadataTransferJob:
      "GET /metadata-transfer-jobs/{metadataTransferJobId}",
    GetPricingPlan: "GET /pricingplan",
    GetPropertyValue: "POST /workspaces/{workspaceId}/entity-properties/value",
    GetPropertyValueHistory:
      "POST /workspaces/{workspaceId}/entity-properties/history",
    GetScene: "GET /workspaces/{workspaceId}/scenes/{sceneId}",
    GetSyncJob: "GET /sync-jobs/{syncSource}",
    GetWorkspace: "GET /workspaces/{workspaceId}",
    ListComponents:
      "POST /workspaces/{workspaceId}/entities/{entityId}/components-list",
    ListComponentTypes: "POST /workspaces/{workspaceId}/component-types-list",
    ListEntities: "POST /workspaces/{workspaceId}/entities-list",
    ListMetadataTransferJobs: "POST /metadata-transfer-jobs-list",
    ListProperties: "POST /workspaces/{workspaceId}/properties-list",
    ListScenes: "POST /workspaces/{workspaceId}/scenes-list",
    ListSyncJobs: "POST /workspaces/{workspaceId}/sync-jobs-list",
    ListSyncResources:
      "POST /workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list",
    ListTagsForResource: "POST /tags-list",
    ListWorkspaces: "POST /workspaces-list",
    TagResource: "POST /tags",
    UntagResource: "DELETE /tags",
    UpdateComponentType:
      "PUT /workspaces/{workspaceId}/component-types/{componentTypeId}",
    UpdateEntity: "PUT /workspaces/{workspaceId}/entities/{entityId}",
    UpdatePricingPlan: "POST /pricingplan",
    UpdateScene: "PUT /workspaces/{workspaceId}/scenes/{sceneId}",
    UpdateWorkspace: "PUT /workspaces/{workspaceId}",
  },
} as const satisfies ServiceMetadata;

export type _IoTTwinMaker = _IoTTwinMakerClient;
export interface IoTTwinMaker extends _IoTTwinMaker {}
export const IoTTwinMaker = class extends AWSServiceClient {
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
} as unknown as typeof _IoTTwinMakerClient;
