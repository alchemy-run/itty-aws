import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Macie2 as _Macie2Client } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Macie2",
  version: "2020-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "macie2",
  endpointPrefix: "macie2",
  operations: {
    AcceptInvitation: "POST /invitations/accept",
    BatchGetCustomDataIdentifiers: "POST /custom-data-identifiers/get",
    BatchUpdateAutomatedDiscoveryAccounts:
      "PATCH /automated-discovery/accounts",
    CreateAllowList: "POST /allow-lists",
    CreateClassificationJob: "POST /jobs",
    CreateCustomDataIdentifier: "POST /custom-data-identifiers",
    CreateFindingsFilter: "POST /findingsfilters",
    CreateInvitations: "POST /invitations",
    CreateMember: "POST /members",
    CreateSampleFindings: "POST /findings/sample",
    DeclineInvitations: "POST /invitations/decline",
    DeleteAllowList: "DELETE /allow-lists/{id}",
    DeleteCustomDataIdentifier: "DELETE /custom-data-identifiers/{id}",
    DeleteFindingsFilter: "DELETE /findingsfilters/{id}",
    DeleteInvitations: "POST /invitations/delete",
    DeleteMember: "DELETE /members/{id}",
    DescribeBuckets: "POST /datasources/s3",
    DescribeClassificationJob: "GET /jobs/{jobId}",
    DescribeOrganizationConfiguration: "GET /admin/configuration",
    DisableMacie: "DELETE /macie",
    DisableOrganizationAdminAccount: "DELETE /admin",
    DisassociateFromAdministratorAccount: "POST /administrator/disassociate",
    DisassociateFromMasterAccount: "POST /master/disassociate",
    DisassociateMember: "POST /members/disassociate/{id}",
    EnableMacie: "POST /macie",
    EnableOrganizationAdminAccount: "POST /admin",
    GetAdministratorAccount: "GET /administrator",
    GetAllowList: "GET /allow-lists/{id}",
    GetAutomatedDiscoveryConfiguration:
      "GET /automated-discovery/configuration",
    GetBucketStatistics: "POST /datasources/s3/statistics",
    GetClassificationExportConfiguration:
      "GET /classification-export-configuration",
    GetClassificationScope: "GET /classification-scopes/{id}",
    GetCustomDataIdentifier: "GET /custom-data-identifiers/{id}",
    GetFindings: "POST /findings/describe",
    GetFindingsFilter: "GET /findingsfilters/{id}",
    GetFindingsPublicationConfiguration:
      "GET /findings-publication-configuration",
    GetFindingStatistics: "POST /findings/statistics",
    GetInvitationsCount: "GET /invitations/count",
    GetMacieSession: "GET /macie",
    GetMasterAccount: "GET /master",
    GetMember: "GET /members/{id}",
    GetResourceProfile: "GET /resource-profiles",
    GetRevealConfiguration: "GET /reveal-configuration",
    GetSensitiveDataOccurrences: "GET /findings/{findingId}/reveal",
    GetSensitiveDataOccurrencesAvailability:
      "GET /findings/{findingId}/reveal/availability",
    GetSensitivityInspectionTemplate:
      "GET /templates/sensitivity-inspections/{id}",
    GetUsageStatistics: "POST /usage/statistics",
    GetUsageTotals: "GET /usage",
    ListAllowLists: "GET /allow-lists",
    ListAutomatedDiscoveryAccounts: "GET /automated-discovery/accounts",
    ListClassificationJobs: "POST /jobs/list",
    ListClassificationScopes: "GET /classification-scopes",
    ListCustomDataIdentifiers: "POST /custom-data-identifiers/list",
    ListFindings: "POST /findings",
    ListFindingsFilters: "GET /findingsfilters",
    ListInvitations: "GET /invitations",
    ListManagedDataIdentifiers: "POST /managed-data-identifiers/list",
    ListMembers: "GET /members",
    ListOrganizationAdminAccounts: "GET /admin",
    ListResourceProfileArtifacts: "GET /resource-profiles/artifacts",
    ListResourceProfileDetections: "GET /resource-profiles/detections",
    ListSensitivityInspectionTemplates:
      "GET /templates/sensitivity-inspections",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutClassificationExportConfiguration:
      "PUT /classification-export-configuration",
    PutFindingsPublicationConfiguration:
      "PUT /findings-publication-configuration",
    SearchResources: "POST /datasources/search-resources",
    TagResource: "POST /tags/{resourceArn}",
    TestCustomDataIdentifier: "POST /custom-data-identifiers/test",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAllowList: "PUT /allow-lists/{id}",
    UpdateAutomatedDiscoveryConfiguration:
      "PUT /automated-discovery/configuration",
    UpdateClassificationJob: "PATCH /jobs/{jobId}",
    UpdateClassificationScope: "PATCH /classification-scopes/{id}",
    UpdateFindingsFilter: "PATCH /findingsfilters/{id}",
    UpdateMacieSession: "PATCH /macie",
    UpdateMemberSession: "PATCH /macie/members/{id}",
    UpdateOrganizationConfiguration: "PATCH /admin/configuration",
    UpdateResourceProfile: "PATCH /resource-profiles",
    UpdateResourceProfileDetections: "PATCH /resource-profiles/detections",
    UpdateRevealConfiguration: "PUT /reveal-configuration",
    UpdateSensitivityInspectionTemplate:
      "PUT /templates/sensitivity-inspections/{id}",
  },
} as const satisfies ServiceMetadata;

export type _Macie2 = _Macie2Client;
export interface Macie2 extends _Macie2 {}
export const Macie2 = class extends AWSServiceClient {
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
} as unknown as typeof _Macie2Client;
