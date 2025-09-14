import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTSiteWise as _IoTSiteWiseClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoTSiteWise",
  version: "2019-12-02",
  protocol: "restJson1",
  sigV4ServiceName: "iotsitewise",
  endpointPrefix: "iotsitewise",
  operations: {
    AssociateAssets: "POST /assets/{assetId}/associate",
    AssociateTimeSeriesToAssetProperty: "POST /timeseries/associate",
    BatchAssociateProjectAssets: "POST /projects/{projectId}/assets/associate",
    BatchDisassociateProjectAssets:
      "POST /projects/{projectId}/assets/disassociate",
    BatchGetAssetPropertyAggregates: "POST /properties/batch/aggregates",
    BatchGetAssetPropertyValue: "POST /properties/batch/latest",
    BatchGetAssetPropertyValueHistory: "POST /properties/batch/history",
    BatchPutAssetPropertyValue: "POST /properties",
    CreateAccessPolicy: "POST /access-policies",
    CreateAsset: "POST /assets",
    CreateAssetModel: "POST /asset-models",
    CreateAssetModelCompositeModel:
      "POST /asset-models/{assetModelId}/composite-models",
    CreateBulkImportJob: "POST /jobs",
    CreateComputationModel: "POST /computation-models",
    CreateDashboard: "POST /dashboards",
    CreateDataset: "POST /datasets",
    CreateGateway: "POST /20200301/gateways",
    CreatePortal: "POST /portals",
    CreateProject: "POST /projects",
    DeleteAccessPolicy: "DELETE /access-policies/{accessPolicyId}",
    DeleteAsset: "DELETE /assets/{assetId}",
    DeleteAssetModel: "DELETE /asset-models/{assetModelId}",
    DeleteAssetModelCompositeModel:
      "DELETE /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
    DeleteComputationModel: "DELETE /computation-models/{computationModelId}",
    DeleteDashboard: "DELETE /dashboards/{dashboardId}",
    DeleteDataset: "DELETE /datasets/{datasetId}",
    DeleteGateway: "DELETE /20200301/gateways/{gatewayId}",
    DeletePortal: "DELETE /portals/{portalId}",
    DeleteProject: "DELETE /projects/{projectId}",
    DeleteTimeSeries: "POST /timeseries/delete",
    DescribeAccessPolicy: "GET /access-policies/{accessPolicyId}",
    DescribeAction: "GET /actions/{actionId}",
    DescribeAsset: "GET /assets/{assetId}",
    DescribeAssetCompositeModel:
      "GET /assets/{assetId}/composite-models/{assetCompositeModelId}",
    DescribeAssetModel: {
      http: "GET /asset-models/{assetModelId}",
      traits: {
        eTag: "ETag",
      },
    },
    DescribeAssetModelCompositeModel:
      "GET /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
    DescribeAssetProperty: "GET /assets/{assetId}/properties/{propertyId}",
    DescribeBulkImportJob: "GET /jobs/{jobId}",
    DescribeComputationModel: "GET /computation-models/{computationModelId}",
    DescribeComputationModelExecutionSummary:
      "GET /computation-models/{computationModelId}/execution-summary",
    DescribeDashboard: "GET /dashboards/{dashboardId}",
    DescribeDataset: "GET /datasets/{datasetId}",
    DescribeDefaultEncryptionConfiguration:
      "GET /configuration/account/encryption",
    DescribeExecution: "GET /executions/{executionId}",
    DescribeGateway: "GET /20200301/gateways/{gatewayId}",
    DescribeGatewayCapabilityConfiguration:
      "GET /20200301/gateways/{gatewayId}/capability/{capabilityNamespace}",
    DescribeLoggingOptions: "GET /logging",
    DescribePortal: "GET /portals/{portalId}",
    DescribeProject: "GET /projects/{projectId}",
    DescribeStorageConfiguration: "GET /configuration/account/storage",
    DescribeTimeSeries: "GET /timeseries/describe",
    DisassociateAssets: "POST /assets/{assetId}/disassociate",
    DisassociateTimeSeriesFromAssetProperty: "POST /timeseries/disassociate",
    ExecuteAction: "POST /actions",
    ExecuteQuery: "POST /queries/execution",
    GetAssetPropertyAggregates: "GET /properties/aggregates",
    GetAssetPropertyValue: "GET /properties/latest",
    GetAssetPropertyValueHistory: "GET /properties/history",
    GetInterpolatedAssetPropertyValues: "GET /properties/interpolated",
    InvokeAssistant: {
      http: "POST /assistant/invocation",
      traits: {
        body: "httpPayload",
        conversationId: "x-amz-iotsitewise-assistant-conversation-id",
      },
    },
    ListAccessPolicies: "GET /access-policies",
    ListActions: "GET /actions",
    ListAssetModelCompositeModels:
      "GET /asset-models/{assetModelId}/composite-models",
    ListAssetModelProperties: "GET /asset-models/{assetModelId}/properties",
    ListAssetModels: "GET /asset-models",
    ListAssetProperties: "GET /assets/{assetId}/properties",
    ListAssetRelationships: "GET /assets/{assetId}/assetRelationships",
    ListAssets: "GET /assets",
    ListAssociatedAssets: "GET /assets/{assetId}/hierarchies",
    ListBulkImportJobs: "GET /jobs",
    ListCompositionRelationships:
      "GET /asset-models/{assetModelId}/composition-relationships",
    ListComputationModelDataBindingUsages:
      "POST /computation-models/data-binding-usages",
    ListComputationModelResolveToResources:
      "GET /computation-models/{computationModelId}/resolve-to-resources",
    ListComputationModels: "GET /computation-models",
    ListDashboards: "GET /dashboards",
    ListDatasets: "GET /datasets",
    ListExecutions: "GET /executions",
    ListGateways: "GET /20200301/gateways",
    ListPortals: "GET /portals",
    ListProjectAssets: "GET /projects/{projectId}/assets",
    ListProjects: "GET /projects",
    ListTagsForResource: "GET /tags",
    ListTimeSeries: "GET /timeseries",
    PutDefaultEncryptionConfiguration: "POST /configuration/account/encryption",
    PutLoggingOptions: "PUT /logging",
    PutStorageConfiguration: "POST /configuration/account/storage",
    TagResource: "POST /tags",
    UntagResource: "DELETE /tags",
    UpdateAccessPolicy: "PUT /access-policies/{accessPolicyId}",
    UpdateAsset: "PUT /assets/{assetId}",
    UpdateAssetModel: "PUT /asset-models/{assetModelId}",
    UpdateAssetModelCompositeModel:
      "PUT /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
    UpdateAssetProperty: "PUT /assets/{assetId}/properties/{propertyId}",
    UpdateComputationModel: "POST /computation-models/{computationModelId}",
    UpdateDashboard: "PUT /dashboards/{dashboardId}",
    UpdateDataset: "PUT /datasets/{datasetId}",
    UpdateGateway: "PUT /20200301/gateways/{gatewayId}",
    UpdateGatewayCapabilityConfiguration:
      "POST /20200301/gateways/{gatewayId}/capability",
    UpdatePortal: "PUT /portals/{portalId}",
    UpdateProject: "PUT /projects/{projectId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTSiteWise = class extends AWSServiceClient {
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
} as unknown as typeof _IoTSiteWiseClient;
