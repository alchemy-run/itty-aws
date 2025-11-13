import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GuardDuty as _GuardDutyClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "GuardDuty",
  version: "2017-11-28",
  protocol: "restJson1",
  sigV4ServiceName: "guardduty",
  endpointPrefix: "guardduty",
  operations: {
    "AcceptAdministratorInvitation": "POST /detector/{DetectorId}/administrator",
    "AcceptInvitation": "POST /detector/{DetectorId}/master",
    "ArchiveFindings": "POST /detector/{DetectorId}/findings/archive",
    "CreateDetector": "POST /detector",
    "CreateFilter": "POST /detector/{DetectorId}/filter",
    "CreateIPSet": "POST /detector/{DetectorId}/ipset",
    "CreateMalwareProtectionPlan": "POST /malware-protection-plan",
    "CreateMembers": "POST /detector/{DetectorId}/member",
    "CreatePublishingDestination": "POST /detector/{DetectorId}/publishingDestination",
    "CreateSampleFindings": "POST /detector/{DetectorId}/findings/create",
    "CreateThreatEntitySet": "POST /detector/{DetectorId}/threatentityset",
    "CreateThreatIntelSet": "POST /detector/{DetectorId}/threatintelset",
    "CreateTrustedEntitySet": "POST /detector/{DetectorId}/trustedentityset",
    "DeclineInvitations": "POST /invitation/decline",
    "DeleteDetector": "DELETE /detector/{DetectorId}",
    "DeleteFilter": "DELETE /detector/{DetectorId}/filter/{FilterName}",
    "DeleteInvitations": "POST /invitation/delete",
    "DeleteIPSet": "DELETE /detector/{DetectorId}/ipset/{IpSetId}",
    "DeleteMalwareProtectionPlan": "DELETE /malware-protection-plan/{MalwareProtectionPlanId}",
    "DeleteMembers": "POST /detector/{DetectorId}/member/delete",
    "DeletePublishingDestination": "DELETE /detector/{DetectorId}/publishingDestination/{DestinationId}",
    "DeleteThreatEntitySet": "DELETE /detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
    "DeleteThreatIntelSet": "DELETE /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
    "DeleteTrustedEntitySet": "DELETE /detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
    "DescribeMalwareScans": "POST /detector/{DetectorId}/malware-scans",
    "DescribeOrganizationConfiguration": "GET /detector/{DetectorId}/admin",
    "DescribePublishingDestination": "GET /detector/{DetectorId}/publishingDestination/{DestinationId}",
    "DisableOrganizationAdminAccount": "POST /admin/disable",
    "DisassociateFromAdministratorAccount": "POST /detector/{DetectorId}/administrator/disassociate",
    "DisassociateFromMasterAccount": "POST /detector/{DetectorId}/master/disassociate",
    "DisassociateMembers": "POST /detector/{DetectorId}/member/disassociate",
    "EnableOrganizationAdminAccount": "POST /admin/enable",
    "GetAdministratorAccount": "GET /detector/{DetectorId}/administrator",
    "GetCoverageStatistics": "POST /detector/{DetectorId}/coverage/statistics",
    "GetDetector": "GET /detector/{DetectorId}",
    "GetFilter": "GET /detector/{DetectorId}/filter/{FilterName}",
    "GetFindings": "POST /detector/{DetectorId}/findings/get",
    "GetFindingsStatistics": "POST /detector/{DetectorId}/findings/statistics",
    "GetInvitationsCount": "GET /invitation/count",
    "GetIPSet": "GET /detector/{DetectorId}/ipset/{IpSetId}",
    "GetMalwareProtectionPlan": "GET /malware-protection-plan/{MalwareProtectionPlanId}",
    "GetMalwareScanSettings": "GET /detector/{DetectorId}/malware-scan-settings",
    "GetMasterAccount": "GET /detector/{DetectorId}/master",
    "GetMemberDetectors": "POST /detector/{DetectorId}/member/detector/get",
    "GetMembers": "POST /detector/{DetectorId}/member/get",
    "GetOrganizationStatistics": "GET /organization/statistics",
    "GetRemainingFreeTrialDays": "POST /detector/{DetectorId}/freeTrial/daysRemaining",
    "GetThreatEntitySet": "GET /detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
    "GetThreatIntelSet": "GET /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
    "GetTrustedEntitySet": "GET /detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
    "GetUsageStatistics": "POST /detector/{DetectorId}/usage/statistics",
    "InviteMembers": "POST /detector/{DetectorId}/member/invite",
    "ListCoverage": "POST /detector/{DetectorId}/coverage",
    "ListDetectors": "GET /detector",
    "ListFilters": "GET /detector/{DetectorId}/filter",
    "ListFindings": "POST /detector/{DetectorId}/findings",
    "ListInvitations": "GET /invitation",
    "ListIPSets": "GET /detector/{DetectorId}/ipset",
    "ListMalwareProtectionPlans": "GET /malware-protection-plan",
    "ListMembers": "GET /detector/{DetectorId}/member",
    "ListOrganizationAdminAccounts": "GET /admin",
    "ListPublishingDestinations": "GET /detector/{DetectorId}/publishingDestination",
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "ListThreatEntitySets": "GET /detector/{DetectorId}/threatentityset",
    "ListThreatIntelSets": "GET /detector/{DetectorId}/threatintelset",
    "ListTrustedEntitySets": "GET /detector/{DetectorId}/trustedentityset",
    "StartMalwareScan": "POST /malware-scan/start",
    "StartMonitoringMembers": "POST /detector/{DetectorId}/member/start",
    "StopMonitoringMembers": "POST /detector/{DetectorId}/member/stop",
    "TagResource": "POST /tags/{ResourceArn}",
    "UnarchiveFindings": "POST /detector/{DetectorId}/findings/unarchive",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "UpdateDetector": "POST /detector/{DetectorId}",
    "UpdateFilter": "POST /detector/{DetectorId}/filter/{FilterName}",
    "UpdateFindingsFeedback": "POST /detector/{DetectorId}/findings/feedback",
    "UpdateIPSet": "POST /detector/{DetectorId}/ipset/{IpSetId}",
    "UpdateMalwareProtectionPlan": "PATCH /malware-protection-plan/{MalwareProtectionPlanId}",
    "UpdateMalwareScanSettings": "POST /detector/{DetectorId}/malware-scan-settings",
    "UpdateMemberDetectors": "POST /detector/{DetectorId}/member/detector/update",
    "UpdateOrganizationConfiguration": "POST /detector/{DetectorId}/admin",
    "UpdatePublishingDestination": "POST /detector/{DetectorId}/publishingDestination/{DestinationId}",
    "UpdateThreatEntitySet": "POST /detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
    "UpdateThreatIntelSet": "POST /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
    "UpdateTrustedEntitySet": "POST /detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
  },
} as const satisfies ServiceMetadata;

export type _GuardDuty = _GuardDutyClient;
export interface GuardDuty extends _GuardDuty {}
export const GuardDuty = class extends AWSServiceClient {
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
} as unknown as typeof _GuardDutyClient;
