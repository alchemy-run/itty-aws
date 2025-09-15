import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DataZone as _DataZoneClient } from "./types.ts";

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
  sdkId: "DataZone",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "datazone",
  operations: {
    AcceptPredictions:
      "PUT /v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions",
    AcceptSubscriptionRequest:
      "PUT /v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept",
    AddEntityOwner:
      "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/addOwner",
    AddPolicyGrant:
      "POST /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/addGrant",
    AssociateEnvironmentRole:
      "PUT /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
    CancelSubscription:
      "PUT /v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel",
    CreateAssetFilter:
      "POST /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
    CreateConnection: "POST /v2/domains/{domainIdentifier}/connections",
    CreateEnvironment: "POST /v2/domains/{domainIdentifier}/environments",
    CreateEnvironmentAction:
      "POST /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
    CreateEnvironmentProfile:
      "POST /v2/domains/{domainIdentifier}/environment-profiles",
    CreateGroupProfile: "POST /v2/domains/{domainIdentifier}/group-profiles",
    CreateListingChangeSet:
      "POST /v2/domains/{domainIdentifier}/listings/change-set",
    CreateProject: "POST /v2/domains/{domainIdentifier}/projects",
    CreateProjectMembership:
      "POST /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership",
    CreateProjectProfile:
      "POST /v2/domains/{domainIdentifier}/project-profiles",
    CreateSubscriptionGrant:
      "POST /v2/domains/{domainIdentifier}/subscription-grants",
    CreateSubscriptionRequest:
      "POST /v2/domains/{domainIdentifier}/subscription-requests",
    CreateSubscriptionTarget:
      "POST /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
    CreateUserProfile: "POST /v2/domains/{domainIdentifier}/user-profiles",
    DeleteAssetFilter:
      "DELETE /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
    DeleteConnection:
      "DELETE /v2/domains/{domainIdentifier}/connections/{identifier}",
    DeleteEnvironment:
      "DELETE /v2/domains/{domainIdentifier}/environments/{identifier}",
    DeleteEnvironmentAction:
      "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
    DeleteEnvironmentProfile:
      "DELETE /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
    DeleteProject:
      "DELETE /v2/domains/{domainIdentifier}/projects/{identifier}",
    DeleteProjectMembership:
      "POST /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership",
    DeleteProjectProfile:
      "DELETE /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
    DeleteSubscriptionGrant:
      "DELETE /v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
    DeleteSubscriptionRequest:
      "DELETE /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
    DeleteSubscriptionTarget:
      "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
    DeleteTimeSeriesDataPoints:
      "DELETE /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
    DisassociateEnvironmentRole:
      "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
    GetAssetFilter:
      "GET /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
    GetConnection:
      "GET /v2/domains/{domainIdentifier}/connections/{identifier}",
    GetEnvironment:
      "GET /v2/domains/{domainIdentifier}/environments/{identifier}",
    GetEnvironmentAction:
      "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
    GetEnvironmentBlueprint:
      "GET /v2/domains/{domainIdentifier}/environment-blueprints/{identifier}",
    GetEnvironmentCredentials:
      "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/credentials",
    GetEnvironmentProfile:
      "GET /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
    GetGroupProfile:
      "GET /v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
    GetIamPortalLoginUrl:
      "POST /v2/domains/{domainIdentifier}/get-portal-login-url",
    GetJobRun: "GET /v2/domains/{domainIdentifier}/jobRuns/{identifier}",
    GetLineageEvent: {
      http: "GET /v2/domains/{domainIdentifier}/lineage/events/{identifier}",
      traits: {
        domainId: "Domain-Id",
        id: "Id",
        event: "httpPayload",
        createdBy: "Created-By",
        processingStatus: "Processing-Status",
        eventTime: "Event-Time",
        createdAt: "Created-At",
      },
    },
    GetLineageNode:
      "GET /v2/domains/{domainIdentifier}/lineage/nodes/{identifier}",
    GetProject: "GET /v2/domains/{domainIdentifier}/projects/{identifier}",
    GetProjectProfile:
      "GET /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
    GetSubscription:
      "GET /v2/domains/{domainIdentifier}/subscriptions/{identifier}",
    GetSubscriptionGrant:
      "GET /v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
    GetSubscriptionRequestDetails:
      "GET /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
    GetSubscriptionTarget:
      "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
    GetTimeSeriesDataPoint:
      "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}",
    GetUserProfile:
      "GET /v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
    ListAssetFilters:
      "GET /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
    ListAssetRevisions:
      "GET /v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
    ListConnections: "GET /v2/domains/{domainIdentifier}/connections",
    ListDataProductRevisions:
      "GET /v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
    ListDataSourceRunActivities:
      "GET /v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities",
    ListEntityOwners:
      "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/owners",
    ListEnvironmentActions:
      "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
    ListEnvironmentBlueprints:
      "GET /v2/domains/{domainIdentifier}/environment-blueprints",
    ListEnvironmentProfiles:
      "GET /v2/domains/{domainIdentifier}/environment-profiles",
    ListEnvironments: "GET /v2/domains/{domainIdentifier}/environments",
    ListJobRuns: "GET /v2/domains/{domainIdentifier}/jobs/{jobIdentifier}/runs",
    ListLineageEvents: "GET /v2/domains/{domainIdentifier}/lineage/events",
    ListLineageNodeHistory:
      "GET /v2/domains/{domainIdentifier}/lineage/nodes/{identifier}/history",
    ListNotifications: "GET /v2/domains/{domainIdentifier}/notifications",
    ListPolicyGrants:
      "GET /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/grants",
    ListProjectMemberships:
      "GET /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships",
    ListProjectProfiles: "GET /v2/domains/{domainIdentifier}/project-profiles",
    ListProjects: "GET /v2/domains/{domainIdentifier}/projects",
    ListSubscriptionGrants:
      "GET /v2/domains/{domainIdentifier}/subscription-grants",
    ListSubscriptionRequests:
      "GET /v2/domains/{domainIdentifier}/subscription-requests",
    ListSubscriptions: "GET /v2/domains/{domainIdentifier}/subscriptions",
    ListSubscriptionTargets:
      "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListTimeSeriesDataPoints:
      "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
    PostLineageEvent: "POST /v2/domains/{domainIdentifier}/lineage/events",
    PostTimeSeriesDataPoints:
      "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
    RejectPredictions:
      "PUT /v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions",
    RejectSubscriptionRequest:
      "PUT /v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject",
    RemoveEntityOwner:
      "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/removeOwner",
    RemovePolicyGrant:
      "POST /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/removeGrant",
    RevokeSubscription:
      "PUT /v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke",
    Search: "POST /v2/domains/{domainIdentifier}/search",
    SearchGroupProfiles:
      "POST /v2/domains/{domainIdentifier}/search-group-profiles",
    SearchListings: "POST /v2/domains/{domainIdentifier}/listings/search",
    SearchTypes: "POST /v2/domains/{domainIdentifier}/types-search",
    SearchUserProfiles:
      "POST /v2/domains/{domainIdentifier}/search-user-profiles",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAssetFilter:
      "PATCH /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
    UpdateConnection:
      "PATCH /v2/domains/{domainIdentifier}/connections/{identifier}",
    UpdateEnvironment:
      "PATCH /v2/domains/{domainIdentifier}/environments/{identifier}",
    UpdateEnvironmentAction:
      "PATCH /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
    UpdateEnvironmentProfile:
      "PATCH /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
    UpdateGroupProfile:
      "PUT /v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
    UpdateProject: "PATCH /v2/domains/{domainIdentifier}/projects/{identifier}",
    UpdateProjectProfile:
      "PATCH /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
    UpdateSubscriptionGrantStatus:
      "PATCH /v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}",
    UpdateSubscriptionRequest:
      "PATCH /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
    UpdateSubscriptionTarget:
      "PATCH /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
    UpdateUserProfile:
      "PUT /v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
    CancelMetadataGenerationRun:
      "POST /v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel",
    CreateAsset: "POST /v2/domains/{domainIdentifier}/assets",
    CreateAssetRevision:
      "POST /v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
    CreateAssetType: "POST /v2/domains/{domainIdentifier}/asset-types",
    CreateDataProduct: "POST /v2/domains/{domainIdentifier}/data-products",
    CreateDataProductRevision:
      "POST /v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
    CreateDataSource: "POST /v2/domains/{domainIdentifier}/data-sources",
    CreateDomain: "POST /v2/domains",
    CreateDomainUnit: "POST /v2/domains/{domainIdentifier}/domain-units",
    CreateFormType: "POST /v2/domains/{domainIdentifier}/form-types",
    CreateGlossary: "POST /v2/domains/{domainIdentifier}/glossaries",
    CreateGlossaryTerm: "POST /v2/domains/{domainIdentifier}/glossary-terms",
    CreateRule: "POST /v2/domains/{domainIdentifier}/rules",
    DeleteAsset: "DELETE /v2/domains/{domainIdentifier}/assets/{identifier}",
    DeleteAssetType:
      "DELETE /v2/domains/{domainIdentifier}/asset-types/{identifier}",
    DeleteDataProduct:
      "DELETE /v2/domains/{domainIdentifier}/data-products/{identifier}",
    DeleteDataSource:
      "DELETE /v2/domains/{domainIdentifier}/data-sources/{identifier}",
    DeleteDomain: "DELETE /v2/domains/{identifier}",
    DeleteDomainUnit:
      "DELETE /v2/domains/{domainIdentifier}/domain-units/{identifier}",
    DeleteEnvironmentBlueprintConfiguration:
      "DELETE /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
    DeleteFormType:
      "DELETE /v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
    DeleteGlossary:
      "DELETE /v2/domains/{domainIdentifier}/glossaries/{identifier}",
    DeleteGlossaryTerm:
      "DELETE /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
    DeleteListing:
      "DELETE /v2/domains/{domainIdentifier}/listings/{identifier}",
    DeleteRule: "DELETE /v2/domains/{domainIdentifier}/rules/{identifier}",
    GetAsset: "GET /v2/domains/{domainIdentifier}/assets/{identifier}",
    GetAssetType: "GET /v2/domains/{domainIdentifier}/asset-types/{identifier}",
    GetDataProduct:
      "GET /v2/domains/{domainIdentifier}/data-products/{identifier}",
    GetDataSource:
      "GET /v2/domains/{domainIdentifier}/data-sources/{identifier}",
    GetDataSourceRun:
      "GET /v2/domains/{domainIdentifier}/data-source-runs/{identifier}",
    GetDomain: "GET /v2/domains/{identifier}",
    GetDomainUnit:
      "GET /v2/domains/{domainIdentifier}/domain-units/{identifier}",
    GetEnvironmentBlueprintConfiguration:
      "GET /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
    GetFormType:
      "GET /v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
    GetGlossary: "GET /v2/domains/{domainIdentifier}/glossaries/{identifier}",
    GetGlossaryTerm:
      "GET /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
    GetListing: "GET /v2/domains/{domainIdentifier}/listings/{identifier}",
    GetMetadataGenerationRun:
      "GET /v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}",
    GetRule: "GET /v2/domains/{domainIdentifier}/rules/{identifier}",
    ListDataSourceRuns:
      "GET /v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
    ListDataSources: "GET /v2/domains/{domainIdentifier}/data-sources",
    ListDomainUnitsForParent: "GET /v2/domains/{domainIdentifier}/domain-units",
    ListDomains: "GET /v2/domains",
    ListEnvironmentBlueprintConfigurations:
      "GET /v2/domains/{domainIdentifier}/environment-blueprint-configurations",
    ListMetadataGenerationRuns:
      "GET /v2/domains/{domainIdentifier}/metadata-generation-runs",
    ListRules:
      "GET /v2/domains/{domainIdentifier}/list-rules/{targetType}/{targetIdentifier}",
    PutEnvironmentBlueprintConfiguration:
      "PUT /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
    StartDataSourceRun:
      "POST /v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
    StartMetadataGenerationRun:
      "POST /v2/domains/{domainIdentifier}/metadata-generation-runs",
    UpdateDataSource:
      "PATCH /v2/domains/{domainIdentifier}/data-sources/{identifier}",
    UpdateDomain: "PUT /v2/domains/{identifier}",
    UpdateDomainUnit:
      "PUT /v2/domains/{domainIdentifier}/domain-units/{identifier}",
    UpdateGlossary:
      "PATCH /v2/domains/{domainIdentifier}/glossaries/{identifier}",
    UpdateGlossaryTerm:
      "PATCH /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
    UpdateRule: "PATCH /v2/domains/{domainIdentifier}/rules/{identifier}",
  },
} as const satisfies ServiceMetadata;

export type _DataZone = _DataZoneClient;
export interface DataZone extends _DataZone {}
export const DataZone = class extends AWSServiceClient {
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
} as unknown as typeof _DataZoneClient;
