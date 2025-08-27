import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Route53RecoveryReadiness as _Route53RecoveryReadiness } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route53 Recovery Readiness",
  version: "2019-12-02",
  protocol: "restJson1",
  sigV4ServiceName: "route53-recovery-readiness",
  endpointPrefix: "route53-recovery-readiness",
  operations: {
    CreateCell: "POST /cells",
    CreateCrossAccountAuthorization: "POST /crossaccountauthorizations",
    CreateReadinessCheck: "POST /readinesschecks",
    CreateRecoveryGroup: "POST /recoverygroups",
    CreateResourceSet: "POST /resourcesets",
    DeleteCell: "DELETE /cells/{CellName}",
    DeleteCrossAccountAuthorization:
      "DELETE /crossaccountauthorizations/{CrossAccountAuthorization}",
    DeleteReadinessCheck: "DELETE /readinesschecks/{ReadinessCheckName}",
    DeleteRecoveryGroup: "DELETE /recoverygroups/{RecoveryGroupName}",
    DeleteResourceSet: "DELETE /resourcesets/{ResourceSetName}",
    GetArchitectureRecommendations:
      "GET /recoverygroups/{RecoveryGroupName}/architectureRecommendations",
    GetCell: "GET /cells/{CellName}",
    GetCellReadinessSummary: "GET /cellreadiness/{CellName}",
    GetReadinessCheck: "GET /readinesschecks/{ReadinessCheckName}",
    GetReadinessCheckResourceStatus:
      "GET /readinesschecks/{ReadinessCheckName}/resource/{ResourceIdentifier}/status",
    GetReadinessCheckStatus: "GET /readinesschecks/{ReadinessCheckName}/status",
    GetRecoveryGroup: "GET /recoverygroups/{RecoveryGroupName}",
    GetRecoveryGroupReadinessSummary:
      "GET /recoverygroupreadiness/{RecoveryGroupName}",
    GetResourceSet: "GET /resourcesets/{ResourceSetName}",
    ListCells: "GET /cells",
    ListCrossAccountAuthorizations: "GET /crossaccountauthorizations",
    ListReadinessChecks: "GET /readinesschecks",
    ListRecoveryGroups: "GET /recoverygroups",
    ListResourceSets: "GET /resourcesets",
    ListRules: "GET /rules",
    ListTagsForResources: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateCell: "PUT /cells/{CellName}",
    UpdateReadinessCheck: "PUT /readinesschecks/{ReadinessCheckName}",
    UpdateRecoveryGroup: "PUT /recoverygroups/{RecoveryGroupName}",
    UpdateResourceSet: "PUT /resourcesets/{ResourceSetName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53RecoveryReadiness = class extends AWSServiceClient {
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
} as unknown as typeof _Route53RecoveryReadiness;
