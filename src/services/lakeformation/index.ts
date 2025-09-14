import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LakeFormation as _LakeFormationClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "LakeFormation",
  version: "2017-03-31",
  protocol: "restJson1",
  sigV4ServiceName: "lakeformation",
  endpointPrefix: "lakeformation",
  operations: {
    AddLFTagsToResource: "POST /AddLFTagsToResource",
    AssumeDecoratedRoleWithSAML: "POST /AssumeDecoratedRoleWithSAML",
    BatchGrantPermissions: "POST /BatchGrantPermissions",
    BatchRevokePermissions: "POST /BatchRevokePermissions",
    CancelTransaction: "POST /CancelTransaction",
    CommitTransaction: "POST /CommitTransaction",
    CreateDataCellsFilter: "POST /CreateDataCellsFilter",
    CreateLakeFormationIdentityCenterConfiguration:
      "POST /CreateLakeFormationIdentityCenterConfiguration",
    CreateLakeFormationOptIn: "POST /CreateLakeFormationOptIn",
    CreateLFTag: "POST /CreateLFTag",
    CreateLFTagExpression: "POST /CreateLFTagExpression",
    DeleteDataCellsFilter: "POST /DeleteDataCellsFilter",
    DeleteLakeFormationIdentityCenterConfiguration:
      "POST /DeleteLakeFormationIdentityCenterConfiguration",
    DeleteLakeFormationOptIn: "POST /DeleteLakeFormationOptIn",
    DeleteLFTag: "POST /DeleteLFTag",
    DeleteLFTagExpression: "POST /DeleteLFTagExpression",
    DeleteObjectsOnCancel: "POST /DeleteObjectsOnCancel",
    DeregisterResource: "POST /DeregisterResource",
    DescribeLakeFormationIdentityCenterConfiguration:
      "POST /DescribeLakeFormationIdentityCenterConfiguration",
    DescribeResource: "POST /DescribeResource",
    DescribeTransaction: "POST /DescribeTransaction",
    ExtendTransaction: "POST /ExtendTransaction",
    GetDataCellsFilter: "POST /GetDataCellsFilter",
    GetDataLakePrincipal: "POST /GetDataLakePrincipal",
    GetDataLakeSettings: "POST /GetDataLakeSettings",
    GetEffectivePermissionsForPath: "POST /GetEffectivePermissionsForPath",
    GetLFTag: "POST /GetLFTag",
    GetLFTagExpression: "POST /GetLFTagExpression",
    GetQueryState: "POST /GetQueryState",
    GetQueryStatistics: "POST /GetQueryStatistics",
    GetResourceLFTags: "POST /GetResourceLFTags",
    GetTableObjects: "POST /GetTableObjects",
    GetTemporaryGluePartitionCredentials:
      "POST /GetTemporaryGluePartitionCredentials",
    GetTemporaryGlueTableCredentials: "POST /GetTemporaryGlueTableCredentials",
    GetWorkUnitResults: {
      http: "POST /GetWorkUnitResults",
      traits: {
        ResultStream: "httpPayload",
      },
    },
    GetWorkUnits: "POST /GetWorkUnits",
    GrantPermissions: "POST /GrantPermissions",
    ListDataCellsFilter: "POST /ListDataCellsFilter",
    ListLakeFormationOptIns: "POST /ListLakeFormationOptIns",
    ListLFTagExpressions: "POST /ListLFTagExpressions",
    ListLFTags: "POST /ListLFTags",
    ListPermissions: "POST /ListPermissions",
    ListResources: "POST /ListResources",
    ListTableStorageOptimizers: "POST /ListTableStorageOptimizers",
    ListTransactions: "POST /ListTransactions",
    PutDataLakeSettings: "POST /PutDataLakeSettings",
    RegisterResource: "POST /RegisterResource",
    RemoveLFTagsFromResource: "POST /RemoveLFTagsFromResource",
    RevokePermissions: "POST /RevokePermissions",
    SearchDatabasesByLFTags: "POST /SearchDatabasesByLFTags",
    SearchTablesByLFTags: "POST /SearchTablesByLFTags",
    StartQueryPlanning: "POST /StartQueryPlanning",
    StartTransaction: "POST /StartTransaction",
    UpdateDataCellsFilter: "POST /UpdateDataCellsFilter",
    UpdateLakeFormationIdentityCenterConfiguration:
      "POST /UpdateLakeFormationIdentityCenterConfiguration",
    UpdateLFTag: "POST /UpdateLFTag",
    UpdateLFTagExpression: "POST /UpdateLFTagExpression",
    UpdateResource: "POST /UpdateResource",
    UpdateTableObjects: "POST /UpdateTableObjects",
    UpdateTableStorageOptimizer: "POST /UpdateTableStorageOptimizer",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LakeFormation = class extends AWSServiceClient {
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
} as unknown as typeof _LakeFormationClient;
