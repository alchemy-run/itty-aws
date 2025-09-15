import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { drs as _drsClient } from "./types.ts";

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
  sdkId: "drs",
  version: "2020-02-26",
  protocol: "restJson1",
  sigV4ServiceName: "drs",
  operations: {
    CreateExtendedSourceServer: "POST /CreateExtendedSourceServer",
    DeleteLaunchAction: "POST /DeleteLaunchAction",
    InitializeService: "POST /InitializeService",
    ListExtensibleSourceServers: "POST /ListExtensibleSourceServers",
    ListLaunchActions: "POST /ListLaunchActions",
    ListStagingAccounts: "GET /ListStagingAccounts",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutLaunchAction: "POST /PutLaunchAction",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    AssociateSourceNetworkStack: "POST /AssociateSourceNetworkStack",
    CreateLaunchConfigurationTemplate:
      "POST /CreateLaunchConfigurationTemplate",
    CreateReplicationConfigurationTemplate:
      "POST /CreateReplicationConfigurationTemplate",
    CreateSourceNetwork: "POST /CreateSourceNetwork",
    DeleteJob: "POST /DeleteJob",
    DeleteLaunchConfigurationTemplate:
      "POST /DeleteLaunchConfigurationTemplate",
    DeleteRecoveryInstance: "POST /DeleteRecoveryInstance",
    DeleteReplicationConfigurationTemplate:
      "POST /DeleteReplicationConfigurationTemplate",
    DeleteSourceNetwork: "POST /DeleteSourceNetwork",
    DeleteSourceServer: "POST /DeleteSourceServer",
    DescribeJobLogItems: "POST /DescribeJobLogItems",
    DescribeJobs: "POST /DescribeJobs",
    DescribeLaunchConfigurationTemplates:
      "POST /DescribeLaunchConfigurationTemplates",
    DescribeRecoveryInstances: "POST /DescribeRecoveryInstances",
    DescribeRecoverySnapshots: "POST /DescribeRecoverySnapshots",
    DescribeReplicationConfigurationTemplates:
      "POST /DescribeReplicationConfigurationTemplates",
    DescribeSourceNetworks: "POST /DescribeSourceNetworks",
    DescribeSourceServers: "POST /DescribeSourceServers",
    DisconnectRecoveryInstance: "POST /DisconnectRecoveryInstance",
    DisconnectSourceServer: "POST /DisconnectSourceServer",
    ExportSourceNetworkCfnTemplate: "POST /ExportSourceNetworkCfnTemplate",
    GetFailbackReplicationConfiguration:
      "POST /GetFailbackReplicationConfiguration",
    GetLaunchConfiguration: "POST /GetLaunchConfiguration",
    GetReplicationConfiguration: "POST /GetReplicationConfiguration",
    RetryDataReplication: "POST /RetryDataReplication",
    ReverseReplication: "POST /ReverseReplication",
    StartFailbackLaunch: "POST /StartFailbackLaunch",
    StartRecovery: "POST /StartRecovery",
    StartReplication: "POST /StartReplication",
    StartSourceNetworkRecovery: "POST /StartSourceNetworkRecovery",
    StartSourceNetworkReplication: "POST /StartSourceNetworkReplication",
    StopFailback: "POST /StopFailback",
    StopReplication: "POST /StopReplication",
    StopSourceNetworkReplication: "POST /StopSourceNetworkReplication",
    TerminateRecoveryInstances: "POST /TerminateRecoveryInstances",
    UpdateFailbackReplicationConfiguration:
      "POST /UpdateFailbackReplicationConfiguration",
    UpdateLaunchConfiguration: "POST /UpdateLaunchConfiguration",
    UpdateLaunchConfigurationTemplate:
      "POST /UpdateLaunchConfigurationTemplate",
    UpdateReplicationConfiguration: "POST /UpdateReplicationConfiguration",
    UpdateReplicationConfigurationTemplate:
      "POST /UpdateReplicationConfigurationTemplate",
  },
} as const satisfies ServiceMetadata;

export type _drs = _drsClient;
export interface drs extends _drs {}
export const drs = class extends AWSServiceClient {
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
} as unknown as typeof _drsClient;
