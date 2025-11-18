import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SecurityHub as _SecurityHubClient } from "./types.ts";

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
  sdkId: "SecurityHub",
  version: "2018-10-26",
  protocol: "restJson1",
  sigV4ServiceName: "securityhub",
  endpointPrefix: "securityhub",
  operations: {
    AcceptAdministratorInvitation: "POST /administrator",
    AcceptInvitation: "POST /master",
    BatchDeleteAutomationRules: "POST /automationrules/delete",
    BatchDisableStandards: "POST /standards/deregister",
    BatchEnableStandards: "POST /standards/register",
    BatchGetAutomationRules: "POST /automationrules/get",
    BatchGetConfigurationPolicyAssociations:
      "POST /configurationPolicyAssociation/batchget",
    BatchGetSecurityControls: "POST /securityControls/batchGet",
    BatchGetStandardsControlAssociations: "POST /associations/batchGet",
    BatchImportFindings: "POST /findings/import",
    BatchUpdateAutomationRules: "PATCH /automationrules/update",
    BatchUpdateFindings: "PATCH /findings/batchupdate",
    BatchUpdateFindingsV2: "PATCH /findingsv2/batchupdatev2",
    BatchUpdateStandardsControlAssociations: "PATCH /associations",
    ConnectorRegistrationsV2: "POST /connectorsv2/registrations",
    CreateActionTarget: "POST /actionTargets",
    CreateAggregatorV2: "POST /aggregatorv2/create",
    CreateAutomationRule: "POST /automationrules/create",
    CreateAutomationRuleV2: "POST /automationrulesv2/create",
    CreateConfigurationPolicy: "POST /configurationPolicy/create",
    CreateConnectorV2: "POST /connectorsv2",
    CreateFindingAggregator: "POST /findingAggregator/create",
    CreateInsight: "POST /insights",
    CreateMembers: "POST /members",
    CreateTicketV2: "POST /ticketsv2",
    DeclineInvitations: "POST /invitations/decline",
    DeleteActionTarget: "DELETE /actionTargets/{ActionTargetArn+}",
    DeleteAggregatorV2: "DELETE /aggregatorv2/delete/{AggregatorV2Arn+}",
    DeleteAutomationRuleV2: "DELETE /automationrulesv2/{Identifier}",
    DeleteConfigurationPolicy: "DELETE /configurationPolicy/{Identifier}",
    DeleteConnectorV2: "DELETE /connectorsv2/{ConnectorId+}",
    DeleteFindingAggregator:
      "DELETE /findingAggregator/delete/{FindingAggregatorArn+}",
    DeleteInsight: "DELETE /insights/{InsightArn+}",
    DeleteInvitations: "POST /invitations/delete",
    DeleteMembers: "POST /members/delete",
    DescribeActionTargets: "POST /actionTargets/get",
    DescribeHub: "GET /accounts",
    DescribeOrganizationConfiguration: "GET /organization/configuration",
    DescribeProducts: "GET /products",
    DescribeProductsV2: "GET /productsV2",
    DescribeSecurityHubV2: "GET /hubv2",
    DescribeStandards: "GET /standards",
    DescribeStandardsControls:
      "GET /standards/controls/{StandardsSubscriptionArn+}",
    DisableImportFindingsForProduct:
      "DELETE /productSubscriptions/{ProductSubscriptionArn+}",
    DisableOrganizationAdminAccount: "POST /organization/admin/disable",
    DisableSecurityHub: "DELETE /accounts",
    DisableSecurityHubV2: "DELETE /hubv2",
    DisassociateFromAdministratorAccount: "POST /administrator/disassociate",
    DisassociateFromMasterAccount: "POST /master/disassociate",
    DisassociateMembers: "POST /members/disassociate",
    EnableImportFindingsForProduct: "POST /productSubscriptions",
    EnableOrganizationAdminAccount: "POST /organization/admin/enable",
    EnableSecurityHub: "POST /accounts",
    EnableSecurityHubV2: "POST /hubv2",
    GetAdministratorAccount: "GET /administrator",
    GetAggregatorV2: "GET /aggregatorv2/get/{AggregatorV2Arn+}",
    GetAutomationRuleV2: "GET /automationrulesv2/{Identifier}",
    GetConfigurationPolicy: "GET /configurationPolicy/get/{Identifier}",
    GetConfigurationPolicyAssociation:
      "POST /configurationPolicyAssociation/get",
    GetConnectorV2: "GET /connectorsv2/{ConnectorId+}",
    GetEnabledStandards: "POST /standards/get",
    GetFindingAggregator: "GET /findingAggregator/get/{FindingAggregatorArn+}",
    GetFindingHistory: "POST /findingHistory/get",
    GetFindings: "POST /findings",
    GetFindingStatisticsV2: "POST /findingsv2/statistics",
    GetFindingsV2: "POST /findingsv2",
    GetInsightResults: "GET /insights/results/{InsightArn+}",
    GetInsights: "POST /insights/get",
    GetInvitationsCount: "GET /invitations/count",
    GetMasterAccount: "GET /master",
    GetMembers: "POST /members/get",
    GetResourcesStatisticsV2: "POST /resourcesv2/statistics",
    GetResourcesV2: "POST /resourcesv2",
    GetSecurityControlDefinition: "GET /securityControl/definition",
    InviteMembers: "POST /members/invite",
    ListAggregatorsV2: "GET /aggregatorv2/list",
    ListAutomationRules: "GET /automationrules/list",
    ListAutomationRulesV2: "GET /automationrulesv2/list",
    ListConfigurationPolicies: "GET /configurationPolicy/list",
    ListConfigurationPolicyAssociations:
      "POST /configurationPolicyAssociation/list",
    ListConnectorsV2: "GET /connectorsv2",
    ListEnabledProductsForImport: "GET /productSubscriptions",
    ListFindingAggregators: "GET /findingAggregator/list",
    ListInvitations: "GET /invitations",
    ListMembers: "GET /members",
    ListOrganizationAdminAccounts: "GET /organization/admin",
    ListSecurityControlDefinitions: "GET /securityControls/definitions",
    ListStandardsControlAssociations: "GET /associations",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    StartConfigurationPolicyAssociation:
      "POST /configurationPolicyAssociation/associate",
    StartConfigurationPolicyDisassociation:
      "POST /configurationPolicyAssociation/disassociate",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateActionTarget: "PATCH /actionTargets/{ActionTargetArn+}",
    UpdateAggregatorV2: "PATCH /aggregatorv2/update/{AggregatorV2Arn+}",
    UpdateAutomationRuleV2: "PATCH /automationrulesv2/{Identifier}",
    UpdateConfigurationPolicy: "PATCH /configurationPolicy/{Identifier}",
    UpdateConnectorV2: "PATCH /connectorsv2/{ConnectorId+}",
    UpdateFindingAggregator: "PATCH /findingAggregator/update",
    UpdateFindings: "PATCH /findings",
    UpdateInsight: "PATCH /insights/{InsightArn+}",
    UpdateOrganizationConfiguration: "POST /organization/configuration",
    UpdateSecurityControl: "PATCH /securityControl/update",
    UpdateSecurityHubConfiguration: "PATCH /accounts",
    UpdateStandardsControl: "PATCH /standards/control/{StandardsControlArn+}",
  },
} as const satisfies ServiceMetadata;

export type _SecurityHub = _SecurityHubClient;
export interface SecurityHub extends _SecurityHub {}
export const SecurityHub = class extends AWSServiceClient {
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
} as unknown as typeof _SecurityHubClient;
