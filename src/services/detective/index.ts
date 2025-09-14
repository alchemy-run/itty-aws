import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Detective as _DetectiveClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Detective",
  version: "2018-10-26",
  protocol: "restJson1",
  sigV4ServiceName: "detective",
  endpointPrefix: "api.detective",
  operations: {
    AcceptInvitation: "PUT /invitation",
    BatchGetGraphMemberDatasources: "POST /graph/datasources/get",
    BatchGetMembershipDatasources: "POST /membership/datasources/get",
    CreateGraph: "POST /graph",
    CreateMembers: "POST /graph/members",
    DeleteGraph: "POST /graph/removal",
    DeleteMembers: "POST /graph/members/removal",
    DescribeOrganizationConfiguration:
      "POST /orgs/describeOrganizationConfiguration",
    DisableOrganizationAdminAccount: "POST /orgs/disableAdminAccount",
    DisassociateMembership: "POST /membership/removal",
    EnableOrganizationAdminAccount: "POST /orgs/enableAdminAccount",
    GetInvestigation: "POST /investigations/getInvestigation",
    GetMembers: "POST /graph/members/get",
    ListDatasourcePackages: "POST /graph/datasources/list",
    ListGraphs: "POST /graphs/list",
    ListIndicators: "POST /investigations/listIndicators",
    ListInvestigations: "POST /investigations/listInvestigations",
    ListInvitations: "POST /invitations/list",
    ListMembers: "POST /graph/members/list",
    ListOrganizationAdminAccounts: "POST /orgs/adminAccountslist",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    RejectInvitation: "POST /invitation/removal",
    StartInvestigation: "POST /investigations/startInvestigation",
    StartMonitoringMember: "POST /graph/member/monitoringstate",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateDatasourcePackages: "POST /graph/datasources/update",
    UpdateInvestigationState: "POST /investigations/updateInvestigationState",
    UpdateOrganizationConfiguration:
      "POST /orgs/updateOrganizationConfiguration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Detective = class extends AWSServiceClient {
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
} as unknown as typeof _DetectiveClient;
