import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Inspector2 as _Inspector2Client } from "./types.ts";

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
  sdkId: "Inspector2",
  version: "2020-06-08",
  protocol: "restJson1",
  sigV4ServiceName: "inspector2",
  operations: {
    AssociateMember: "POST /members/associate",
    BatchAssociateCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/batch/associate",
    BatchDisassociateCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/batch/disassociate",
    BatchGetAccountStatus: "POST /status/batch/get",
    BatchGetCodeSnippet: "POST /codesnippet/batchget",
    BatchGetFindingDetails: "POST /findings/details/batch/get",
    BatchGetFreeTrialInfo: "POST /freetrialinfo/batchget",
    BatchGetMemberEc2DeepInspectionStatus:
      "POST /ec2deepinspectionstatus/member/batch/get",
    BatchUpdateMemberEc2DeepInspectionStatus:
      "POST /ec2deepinspectionstatus/member/batch/update",
    CancelFindingsReport: "POST /reporting/cancel",
    CancelSbomExport: "POST /sbomexport/cancel",
    CreateCisScanConfiguration: "POST /cis/scan-configuration/create",
    CreateCodeSecurityIntegration: "POST /codesecurity/integration/create",
    CreateCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/create",
    CreateFilter: "POST /filters/create",
    CreateFindingsReport: "POST /reporting/create",
    CreateSbomExport: "POST /sbomexport/create",
    DeleteCisScanConfiguration: "POST /cis/scan-configuration/delete",
    DeleteCodeSecurityIntegration: "POST /codesecurity/integration/delete",
    DeleteCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/delete",
    DeleteFilter: "POST /filters/delete",
    DescribeOrganizationConfiguration:
      "POST /organizationconfiguration/describe",
    Disable: "POST /disable",
    DisableDelegatedAdminAccount: "POST /delegatedadminaccounts/disable",
    DisassociateMember: "POST /members/disassociate",
    Enable: "POST /enable",
    EnableDelegatedAdminAccount: "POST /delegatedadminaccounts/enable",
    GetCisScanReport: "POST /cis/scan/report/get",
    GetCisScanResultDetails: "POST /cis/scan-result/details/get",
    GetClustersForImage: "POST /cluster/get",
    GetCodeSecurityIntegration: "POST /codesecurity/integration/get",
    GetCodeSecurityScan: "POST /codesecurity/scan/get",
    GetCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/get",
    GetConfiguration: "POST /configuration/get",
    GetDelegatedAdminAccount: "POST /delegatedadminaccounts/get",
    GetEc2DeepInspectionConfiguration:
      "POST /ec2deepinspectionconfiguration/get",
    GetEncryptionKey: "GET /encryptionkey/get",
    GetFindingsReportStatus: "POST /reporting/status/get",
    GetMember: "POST /members/get",
    GetSbomExport: "POST /sbomexport/get",
    ListAccountPermissions: "POST /accountpermissions/list",
    ListCisScanConfigurations: "POST /cis/scan-configuration/list",
    ListCisScanResultsAggregatedByChecks: "POST /cis/scan-result/check/list",
    ListCisScanResultsAggregatedByTargetResource:
      "POST /cis/scan-result/resource/list",
    ListCisScans: "POST /cis/scan/list",
    ListCodeSecurityIntegrations: "POST /codesecurity/integration/list",
    ListCodeSecurityScanConfigurationAssociations:
      "POST /codesecurity/scan-configuration/associations/list",
    ListCodeSecurityScanConfigurations:
      "POST /codesecurity/scan-configuration/list",
    ListCoverage: "POST /coverage/list",
    ListCoverageStatistics: "POST /coverage/statistics/list",
    ListDelegatedAdminAccounts: "POST /delegatedadminaccounts/list",
    ListFilters: "POST /filters/list",
    ListFindingAggregations: "POST /findings/aggregation/list",
    ListFindings: "POST /findings/list",
    ListMembers: "POST /members/list",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListUsageTotals: "POST /usage/list",
    ResetEncryptionKey: "PUT /encryptionkey/reset",
    SearchVulnerabilities: "POST /vulnerabilities/search",
    SendCisSessionHealth: "PUT /cissession/health/send",
    SendCisSessionTelemetry: "PUT /cissession/telemetry/send",
    StartCisSession: "PUT /cissession/start",
    StartCodeSecurityScan: "POST /codesecurity/scan/start",
    StopCisSession: "PUT /cissession/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateCisScanConfiguration: "POST /cis/scan-configuration/update",
    UpdateCodeSecurityIntegration: "POST /codesecurity/integration/update",
    UpdateCodeSecurityScanConfiguration:
      "POST /codesecurity/scan-configuration/update",
    UpdateConfiguration: "POST /configuration/update",
    UpdateEc2DeepInspectionConfiguration:
      "POST /ec2deepinspectionconfiguration/update",
    UpdateEncryptionKey: "PUT /encryptionkey/update",
    UpdateFilter: "POST /filters/update",
    UpdateOrganizationConfiguration: "POST /organizationconfiguration/update",
    UpdateOrgEc2DeepInspectionConfiguration:
      "POST /ec2deepinspectionconfiguration/org/update",
  },
  retryableErrors: {
    InternalServerException: { retryAfterSeconds: "Retry-After" },
    ThrottlingException: { retryAfterSeconds: "Retry-After" },
  },
} as const satisfies ServiceMetadata;

export type _Inspector2 = _Inspector2Client;
export interface Inspector2 extends _Inspector2 {}
export const Inspector2 = class extends AWSServiceClient {
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
} as unknown as typeof _Inspector2Client;
