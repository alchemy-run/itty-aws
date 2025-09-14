import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { mgn as _mgnClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "mgn",
  version: "2020-02-26",
  protocol: "restJson1",
  sigV4ServiceName: "mgn",
  operations: {
    InitializeService: "POST /InitializeService",
    ListManagedAccounts: "POST /ListManagedAccounts",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    ArchiveApplication: "POST /ArchiveApplication",
    ArchiveWave: "POST /ArchiveWave",
    AssociateApplications: "POST /AssociateApplications",
    AssociateSourceServers: "POST /AssociateSourceServers",
    ChangeServerLifeCycleState: "POST /ChangeServerLifeCycleState",
    CreateApplication: "POST /CreateApplication",
    CreateConnector: "POST /CreateConnector",
    CreateLaunchConfigurationTemplate:
      "POST /CreateLaunchConfigurationTemplate",
    CreateReplicationConfigurationTemplate:
      "POST /CreateReplicationConfigurationTemplate",
    CreateWave: "POST /CreateWave",
    DeleteApplication: "POST /DeleteApplication",
    DeleteConnector: "POST /DeleteConnector",
    DeleteJob: "POST /DeleteJob",
    DeleteLaunchConfigurationTemplate:
      "POST /DeleteLaunchConfigurationTemplate",
    DeleteReplicationConfigurationTemplate:
      "POST /DeleteReplicationConfigurationTemplate",
    DeleteSourceServer: "POST /DeleteSourceServer",
    DeleteVcenterClient: "POST /DeleteVcenterClient",
    DeleteWave: "POST /DeleteWave",
    DescribeJobLogItems: "POST /DescribeJobLogItems",
    DescribeJobs: "POST /DescribeJobs",
    DescribeLaunchConfigurationTemplates:
      "POST /DescribeLaunchConfigurationTemplates",
    DescribeReplicationConfigurationTemplates:
      "POST /DescribeReplicationConfigurationTemplates",
    DescribeSourceServers: "POST /DescribeSourceServers",
    DescribeVcenterClients: "GET /DescribeVcenterClients",
    DisassociateApplications: "POST /DisassociateApplications",
    DisassociateSourceServers: "POST /DisassociateSourceServers",
    DisconnectFromService: "POST /DisconnectFromService",
    FinalizeCutover: "POST /FinalizeCutover",
    GetLaunchConfiguration: "POST /GetLaunchConfiguration",
    GetReplicationConfiguration: "POST /GetReplicationConfiguration",
    ListApplications: "POST /ListApplications",
    ListConnectors: "POST /ListConnectors",
    ListExportErrors: "POST /ListExportErrors",
    ListExports: "POST /ListExports",
    ListImportErrors: "POST /ListImportErrors",
    ListImports: "POST /ListImports",
    ListSourceServerActions: "POST /ListSourceServerActions",
    ListTemplateActions: "POST /ListTemplateActions",
    ListWaves: "POST /ListWaves",
    MarkAsArchived: "POST /MarkAsArchived",
    PauseReplication: "POST /PauseReplication",
    PutSourceServerAction: "POST /PutSourceServerAction",
    PutTemplateAction: "POST /PutTemplateAction",
    RemoveSourceServerAction: "POST /RemoveSourceServerAction",
    RemoveTemplateAction: "POST /RemoveTemplateAction",
    ResumeReplication: "POST /ResumeReplication",
    RetryDataReplication: "POST /RetryDataReplication",
    StartCutover: "POST /StartCutover",
    StartExport: "POST /StartExport",
    StartImport: "POST /StartImport",
    StartReplication: "POST /StartReplication",
    StartTest: "POST /StartTest",
    StopReplication: "POST /StopReplication",
    TerminateTargetInstances: "POST /TerminateTargetInstances",
    UnarchiveApplication: "POST /UnarchiveApplication",
    UnarchiveWave: "POST /UnarchiveWave",
    UpdateApplication: "POST /UpdateApplication",
    UpdateConnector: "POST /UpdateConnector",
    UpdateLaunchConfiguration: "POST /UpdateLaunchConfiguration",
    UpdateLaunchConfigurationTemplate:
      "POST /UpdateLaunchConfigurationTemplate",
    UpdateReplicationConfiguration: "POST /UpdateReplicationConfiguration",
    UpdateReplicationConfigurationTemplate:
      "POST /UpdateReplicationConfigurationTemplate",
    UpdateSourceServer: "POST /UpdateSourceServer",
    UpdateSourceServerReplicationType:
      "POST /UpdateSourceServerReplicationType",
    UpdateWave: "POST /UpdateWave",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const mgn = class extends AWSServiceClient {
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
} as unknown as typeof _mgnClient;
