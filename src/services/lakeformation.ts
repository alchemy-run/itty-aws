import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetDataLakePrincipalRequest extends S.Class<GetDataLakePrincipalRequest>("GetDataLakePrincipalRequest")({}) {}
export const TagValueList = S.Array(S.String);
export const PermissionList = S.Array(S.String);
export const PermissionTypeList = S.Array(S.String);
export class AssumeDecoratedRoleWithSAMLRequest extends S.Class<AssumeDecoratedRoleWithSAMLRequest>("AssumeDecoratedRoleWithSAMLRequest")({SAMLAssertion: S.String, RoleArn: S.String, PrincipalArn: S.String, DurationSeconds: S.optional(S.Number)}) {}
export class DataLakePrincipal extends S.Class<DataLakePrincipal>("DataLakePrincipal")({DataLakePrincipalIdentifier: S.optional(S.String)}) {}
export class CatalogResource extends S.Class<CatalogResource>("CatalogResource")({Id: S.optional(S.String)}) {}
export class DatabaseResource extends S.Class<DatabaseResource>("DatabaseResource")({CatalogId: S.optional(S.String), Name: S.String}) {}
export class TableWildcard extends S.Class<TableWildcard>("TableWildcard")({}) {}
export class TableResource extends S.Class<TableResource>("TableResource")({CatalogId: S.optional(S.String), DatabaseName: S.String, Name: S.optional(S.String), TableWildcard: S.optional(TableWildcard)}) {}
export const ColumnNames = S.Array(S.String);
export class ColumnWildcard extends S.Class<ColumnWildcard>("ColumnWildcard")({ExcludedColumnNames: S.optional(ColumnNames)}) {}
export class TableWithColumnsResource extends S.Class<TableWithColumnsResource>("TableWithColumnsResource")({CatalogId: S.optional(S.String), DatabaseName: S.String, Name: S.String, ColumnNames: S.optional(ColumnNames), ColumnWildcard: S.optional(ColumnWildcard)}) {}
export class DataLocationResource extends S.Class<DataLocationResource>("DataLocationResource")({CatalogId: S.optional(S.String), ResourceArn: S.String}) {}
export class DataCellsFilterResource extends S.Class<DataCellsFilterResource>("DataCellsFilterResource")({TableCatalogId: S.optional(S.String), DatabaseName: S.optional(S.String), TableName: S.optional(S.String), Name: S.optional(S.String)}) {}
export class LFTagKeyResource extends S.Class<LFTagKeyResource>("LFTagKeyResource")({CatalogId: S.optional(S.String), TagKey: S.String, TagValues: TagValueList}) {}
export class LFTag extends S.Class<LFTag>("LFTag")({TagKey: S.String, TagValues: TagValueList}) {}
export const Expression = S.Array(LFTag);
export class LFTagPolicyResource extends S.Class<LFTagPolicyResource>("LFTagPolicyResource")({CatalogId: S.optional(S.String), ResourceType: S.String, Expression: S.optional(Expression), ExpressionName: S.optional(S.String)}) {}
export class LFTagExpressionResource extends S.Class<LFTagExpressionResource>("LFTagExpressionResource")({CatalogId: S.optional(S.String), Name: S.String}) {}
export class Resource extends S.Class<Resource>("Resource")({Catalog: S.optional(CatalogResource), Database: S.optional(DatabaseResource), Table: S.optional(TableResource), TableWithColumns: S.optional(TableWithColumnsResource), DataLocation: S.optional(DataLocationResource), DataCellsFilter: S.optional(DataCellsFilterResource), LFTag: S.optional(LFTagKeyResource), LFTagPolicy: S.optional(LFTagPolicyResource), LFTagExpression: S.optional(LFTagExpressionResource)}) {}
export class Condition extends S.Class<Condition>("Condition")({Expression: S.optional(S.String)}) {}
export class BatchPermissionsRequestEntry extends S.Class<BatchPermissionsRequestEntry>("BatchPermissionsRequestEntry")({Id: S.String, Principal: S.optional(DataLakePrincipal), Resource: S.optional(Resource), Permissions: S.optional(PermissionList), Condition: S.optional(Condition), PermissionsWithGrantOption: S.optional(PermissionList)}) {}
export const BatchPermissionsRequestEntryList = S.Array(BatchPermissionsRequestEntry);
export class BatchRevokePermissionsRequest extends S.Class<BatchRevokePermissionsRequest>("BatchRevokePermissionsRequest")({CatalogId: S.optional(S.String), Entries: BatchPermissionsRequestEntryList}) {}
export class CancelTransactionRequest extends S.Class<CancelTransactionRequest>("CancelTransactionRequest")({TransactionId: S.String}) {}
export class CancelTransactionResponse extends S.Class<CancelTransactionResponse>("CancelTransactionResponse")({}) {}
export class CommitTransactionRequest extends S.Class<CommitTransactionRequest>("CommitTransactionRequest")({TransactionId: S.String}) {}
export class CreateLFTagRequest extends S.Class<CreateLFTagRequest>("CreateLFTagRequest")({CatalogId: S.optional(S.String), TagKey: S.String, TagValues: TagValueList}) {}
export class CreateLFTagResponse extends S.Class<CreateLFTagResponse>("CreateLFTagResponse")({}) {}
export class DeleteDataCellsFilterRequest extends S.Class<DeleteDataCellsFilterRequest>("DeleteDataCellsFilterRequest")({TableCatalogId: S.optional(S.String), DatabaseName: S.optional(S.String), TableName: S.optional(S.String), Name: S.optional(S.String)}) {}
export class DeleteDataCellsFilterResponse extends S.Class<DeleteDataCellsFilterResponse>("DeleteDataCellsFilterResponse")({}) {}
export class DeleteLakeFormationIdentityCenterConfigurationRequest extends S.Class<DeleteLakeFormationIdentityCenterConfigurationRequest>("DeleteLakeFormationIdentityCenterConfigurationRequest")({CatalogId: S.optional(S.String)}) {}
export class DeleteLakeFormationIdentityCenterConfigurationResponse extends S.Class<DeleteLakeFormationIdentityCenterConfigurationResponse>("DeleteLakeFormationIdentityCenterConfigurationResponse")({}) {}
export class DeleteLakeFormationOptInRequest extends S.Class<DeleteLakeFormationOptInRequest>("DeleteLakeFormationOptInRequest")({Principal: DataLakePrincipal, Resource: Resource, Condition: S.optional(Condition)}) {}
export class DeleteLakeFormationOptInResponse extends S.Class<DeleteLakeFormationOptInResponse>("DeleteLakeFormationOptInResponse")({}) {}
export class DeleteLFTagRequest extends S.Class<DeleteLFTagRequest>("DeleteLFTagRequest")({CatalogId: S.optional(S.String), TagKey: S.String}) {}
export class DeleteLFTagResponse extends S.Class<DeleteLFTagResponse>("DeleteLFTagResponse")({}) {}
export class DeleteLFTagExpressionRequest extends S.Class<DeleteLFTagExpressionRequest>("DeleteLFTagExpressionRequest")({Name: S.String, CatalogId: S.optional(S.String)}) {}
export class DeleteLFTagExpressionResponse extends S.Class<DeleteLFTagExpressionResponse>("DeleteLFTagExpressionResponse")({}) {}
export class DeregisterResourceRequest extends S.Class<DeregisterResourceRequest>("DeregisterResourceRequest")({ResourceArn: S.String}) {}
export class DeregisterResourceResponse extends S.Class<DeregisterResourceResponse>("DeregisterResourceResponse")({}) {}
export class DescribeLakeFormationIdentityCenterConfigurationRequest extends S.Class<DescribeLakeFormationIdentityCenterConfigurationRequest>("DescribeLakeFormationIdentityCenterConfigurationRequest")({CatalogId: S.optional(S.String)}) {}
export class DescribeResourceRequest extends S.Class<DescribeResourceRequest>("DescribeResourceRequest")({ResourceArn: S.String}) {}
export class DescribeTransactionRequest extends S.Class<DescribeTransactionRequest>("DescribeTransactionRequest")({TransactionId: S.String}) {}
export class ExtendTransactionRequest extends S.Class<ExtendTransactionRequest>("ExtendTransactionRequest")({TransactionId: S.optional(S.String)}) {}
export class ExtendTransactionResponse extends S.Class<ExtendTransactionResponse>("ExtendTransactionResponse")({}) {}
export class GetDataCellsFilterRequest extends S.Class<GetDataCellsFilterRequest>("GetDataCellsFilterRequest")({TableCatalogId: S.String, DatabaseName: S.String, TableName: S.String, Name: S.String}) {}
export class GetDataLakePrincipalResponse extends S.Class<GetDataLakePrincipalResponse>("GetDataLakePrincipalResponse")({Identity: S.optional(S.String)}) {}
export class GetDataLakeSettingsRequest extends S.Class<GetDataLakeSettingsRequest>("GetDataLakeSettingsRequest")({CatalogId: S.optional(S.String)}) {}
export class GetEffectivePermissionsForPathRequest extends S.Class<GetEffectivePermissionsForPathRequest>("GetEffectivePermissionsForPathRequest")({CatalogId: S.optional(S.String), ResourceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetLFTagRequest extends S.Class<GetLFTagRequest>("GetLFTagRequest")({CatalogId: S.optional(S.String), TagKey: S.String}) {}
export class GetLFTagExpressionRequest extends S.Class<GetLFTagExpressionRequest>("GetLFTagExpressionRequest")({Name: S.String, CatalogId: S.optional(S.String)}) {}
export class GetQueryStateRequest extends S.Class<GetQueryStateRequest>("GetQueryStateRequest")({QueryId: S.String}) {}
export class GetQueryStatisticsRequest extends S.Class<GetQueryStatisticsRequest>("GetQueryStatisticsRequest")({QueryId: S.String}) {}
export class GetResourceLFTagsRequest extends S.Class<GetResourceLFTagsRequest>("GetResourceLFTagsRequest")({CatalogId: S.optional(S.String), Resource: Resource, ShowAssignedLFTags: S.optional(S.Boolean)}) {}
export class GetTableObjectsRequest extends S.Class<GetTableObjectsRequest>("GetTableObjectsRequest")({CatalogId: S.optional(S.String), DatabaseName: S.String, TableName: S.String, TransactionId: S.optional(S.String), QueryAsOfTime: S.optional(S.Date), PartitionPredicate: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetWorkUnitResultsRequest extends S.Class<GetWorkUnitResultsRequest>("GetWorkUnitResultsRequest")({QueryId: S.String, WorkUnitId: S.Number, WorkUnitToken: S.String}) {}
export class GetWorkUnitsRequest extends S.Class<GetWorkUnitsRequest>("GetWorkUnitsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number), QueryId: S.String}) {}
export class GrantPermissionsRequest extends S.Class<GrantPermissionsRequest>("GrantPermissionsRequest")({CatalogId: S.optional(S.String), Principal: DataLakePrincipal, Resource: Resource, Permissions: PermissionList, Condition: S.optional(Condition), PermissionsWithGrantOption: S.optional(PermissionList)}) {}
export class GrantPermissionsResponse extends S.Class<GrantPermissionsResponse>("GrantPermissionsResponse")({}) {}
export class ListLakeFormationOptInsRequest extends S.Class<ListLakeFormationOptInsRequest>("ListLakeFormationOptInsRequest")({Principal: S.optional(DataLakePrincipal), Resource: S.optional(Resource), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLFTagExpressionsRequest extends S.Class<ListLFTagExpressionsRequest>("ListLFTagExpressionsRequest")({CatalogId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLFTagsRequest extends S.Class<ListLFTagsRequest>("ListLFTagsRequest")({CatalogId: S.optional(S.String), ResourceShareType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPermissionsRequest extends S.Class<ListPermissionsRequest>("ListPermissionsRequest")({CatalogId: S.optional(S.String), Principal: S.optional(DataLakePrincipal), ResourceType: S.optional(S.String), Resource: S.optional(Resource), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), IncludeRelated: S.optional(S.String)}) {}
export class ListTableStorageOptimizersRequest extends S.Class<ListTableStorageOptimizersRequest>("ListTableStorageOptimizersRequest")({CatalogId: S.optional(S.String), DatabaseName: S.String, TableName: S.String, StorageOptimizerType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTransactionsRequest extends S.Class<ListTransactionsRequest>("ListTransactionsRequest")({CatalogId: S.optional(S.String), StatusFilter: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class RegisterResourceRequest extends S.Class<RegisterResourceRequest>("RegisterResourceRequest")({ResourceArn: S.String, UseServiceLinkedRole: S.optional(S.Boolean), RoleArn: S.optional(S.String), WithFederation: S.optional(S.Boolean), HybridAccessEnabled: S.optional(S.Boolean), WithPrivilegedAccess: S.optional(S.Boolean)}) {}
export class RegisterResourceResponse extends S.Class<RegisterResourceResponse>("RegisterResourceResponse")({}) {}
export class LFTagPair extends S.Class<LFTagPair>("LFTagPair")({CatalogId: S.optional(S.String), TagKey: S.String, TagValues: TagValueList}) {}
export const LFTagsList = S.Array(LFTagPair);
export class RemoveLFTagsFromResourceRequest extends S.Class<RemoveLFTagsFromResourceRequest>("RemoveLFTagsFromResourceRequest")({CatalogId: S.optional(S.String), Resource: Resource, LFTags: LFTagsList}) {}
export class RevokePermissionsRequest extends S.Class<RevokePermissionsRequest>("RevokePermissionsRequest")({CatalogId: S.optional(S.String), Principal: DataLakePrincipal, Resource: Resource, Permissions: PermissionList, Condition: S.optional(Condition), PermissionsWithGrantOption: S.optional(PermissionList)}) {}
export class RevokePermissionsResponse extends S.Class<RevokePermissionsResponse>("RevokePermissionsResponse")({}) {}
export class SearchDatabasesByLFTagsRequest extends S.Class<SearchDatabasesByLFTagsRequest>("SearchDatabasesByLFTagsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), CatalogId: S.optional(S.String), Expression: Expression}) {}
export class SearchTablesByLFTagsRequest extends S.Class<SearchTablesByLFTagsRequest>("SearchTablesByLFTagsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), CatalogId: S.optional(S.String), Expression: Expression}) {}
export class StartTransactionRequest extends S.Class<StartTransactionRequest>("StartTransactionRequest")({TransactionType: S.optional(S.String)}) {}
export class AllRowsWildcard extends S.Class<AllRowsWildcard>("AllRowsWildcard")({}) {}
export class RowFilter extends S.Class<RowFilter>("RowFilter")({FilterExpression: S.optional(S.String), AllRowsWildcard: S.optional(AllRowsWildcard)}) {}
export class DataCellsFilter extends S.Class<DataCellsFilter>("DataCellsFilter")({TableCatalogId: S.String, DatabaseName: S.String, TableName: S.String, Name: S.String, RowFilter: S.optional(RowFilter), ColumnNames: S.optional(ColumnNames), ColumnWildcard: S.optional(ColumnWildcard), VersionId: S.optional(S.String)}) {}
export class UpdateDataCellsFilterRequest extends S.Class<UpdateDataCellsFilterRequest>("UpdateDataCellsFilterRequest")({TableData: DataCellsFilter}) {}
export class UpdateDataCellsFilterResponse extends S.Class<UpdateDataCellsFilterResponse>("UpdateDataCellsFilterResponse")({}) {}
export const DataLakePrincipalList = S.Array(DataLakePrincipal);
export class RedshiftConnect extends S.Class<RedshiftConnect>("RedshiftConnect")({Authorization: S.String}) {}
export const RedshiftScopeUnion = S.Union(RedshiftConnect);
export const RedshiftServiceIntegrations = S.Array(RedshiftScopeUnion);
export const ServiceIntegrationUnion = S.Union(RedshiftServiceIntegrations);
export const ServiceIntegrationList = S.Array(ServiceIntegrationUnion);
export const ScopeTargets = S.Array(S.String);
export class ExternalFilteringConfiguration extends S.Class<ExternalFilteringConfiguration>("ExternalFilteringConfiguration")({Status: S.String, AuthorizedTargets: ScopeTargets}) {}
export class UpdateLakeFormationIdentityCenterConfigurationRequest extends S.Class<UpdateLakeFormationIdentityCenterConfigurationRequest>("UpdateLakeFormationIdentityCenterConfigurationRequest")({CatalogId: S.optional(S.String), ShareRecipients: S.optional(DataLakePrincipalList), ServiceIntegrations: S.optional(ServiceIntegrationList), ApplicationStatus: S.optional(S.String), ExternalFiltering: S.optional(ExternalFilteringConfiguration)}) {}
export class UpdateLakeFormationIdentityCenterConfigurationResponse extends S.Class<UpdateLakeFormationIdentityCenterConfigurationResponse>("UpdateLakeFormationIdentityCenterConfigurationResponse")({}) {}
export class UpdateLFTagRequest extends S.Class<UpdateLFTagRequest>("UpdateLFTagRequest")({CatalogId: S.optional(S.String), TagKey: S.String, TagValuesToDelete: S.optional(TagValueList), TagValuesToAdd: S.optional(TagValueList)}) {}
export class UpdateLFTagResponse extends S.Class<UpdateLFTagResponse>("UpdateLFTagResponse")({}) {}
export class UpdateLFTagExpressionRequest extends S.Class<UpdateLFTagExpressionRequest>("UpdateLFTagExpressionRequest")({Name: S.String, Description: S.optional(S.String), CatalogId: S.optional(S.String), Expression: Expression}) {}
export class UpdateLFTagExpressionResponse extends S.Class<UpdateLFTagExpressionResponse>("UpdateLFTagExpressionResponse")({}) {}
export class UpdateResourceRequest extends S.Class<UpdateResourceRequest>("UpdateResourceRequest")({RoleArn: S.String, ResourceArn: S.String, WithFederation: S.optional(S.Boolean), HybridAccessEnabled: S.optional(S.Boolean)}) {}
export class UpdateResourceResponse extends S.Class<UpdateResourceResponse>("UpdateResourceResponse")({}) {}
export const ValueStringList = S.Array(S.String);
export const StringValueList = S.Array(S.String);
export const TrustedResourceOwners = S.Array(S.String);
export const AuthorizedSessionTagValueList = S.Array(S.String);
export class VirtualObject extends S.Class<VirtualObject>("VirtualObject")({Uri: S.String, ETag: S.optional(S.String)}) {}
export const VirtualObjectList = S.Array(VirtualObject);
export class PartitionValueList extends S.Class<PartitionValueList>("PartitionValueList")({Values: ValueStringList}) {}
export class AuditContext extends S.Class<AuditContext>("AuditContext")({AdditionalAuditContext: S.optional(S.String)}) {}
export class FilterCondition extends S.Class<FilterCondition>("FilterCondition")({Field: S.optional(S.String), ComparisonOperator: S.optional(S.String), StringValueList: S.optional(StringValueList)}) {}
export const FilterConditionList = S.Array(FilterCondition);
export class TransactionDescription extends S.Class<TransactionDescription>("TransactionDescription")({TransactionId: S.optional(S.String), TransactionStatus: S.optional(S.String), TransactionStartTime: S.optional(S.Date), TransactionEndTime: S.optional(S.Date)}) {}
export const TransactionDescriptionList = S.Array(TransactionDescription);
export const PartitionValuesList = S.Array(S.String);
export class AssumeDecoratedRoleWithSAMLResponse extends S.Class<AssumeDecoratedRoleWithSAMLResponse>("AssumeDecoratedRoleWithSAMLResponse")({AccessKeyId: S.optional(S.String), SecretAccessKey: S.optional(S.String), SessionToken: S.optional(S.String), Expiration: S.optional(S.Date)}) {}
export class BatchGrantPermissionsRequest extends S.Class<BatchGrantPermissionsRequest>("BatchGrantPermissionsRequest")({CatalogId: S.optional(S.String), Entries: BatchPermissionsRequestEntryList}) {}
export class CommitTransactionResponse extends S.Class<CommitTransactionResponse>("CommitTransactionResponse")({TransactionStatus: S.optional(S.String)}) {}
export class CreateLakeFormationOptInRequest extends S.Class<CreateLakeFormationOptInRequest>("CreateLakeFormationOptInRequest")({Principal: DataLakePrincipal, Resource: Resource, Condition: S.optional(Condition)}) {}
export class CreateLakeFormationOptInResponse extends S.Class<CreateLakeFormationOptInResponse>("CreateLakeFormationOptInResponse")({}) {}
export class CreateLFTagExpressionRequest extends S.Class<CreateLFTagExpressionRequest>("CreateLFTagExpressionRequest")({Name: S.String, Description: S.optional(S.String), CatalogId: S.optional(S.String), Expression: Expression}) {}
export class CreateLFTagExpressionResponse extends S.Class<CreateLFTagExpressionResponse>("CreateLFTagExpressionResponse")({}) {}
export class DeleteObjectsOnCancelRequest extends S.Class<DeleteObjectsOnCancelRequest>("DeleteObjectsOnCancelRequest")({CatalogId: S.optional(S.String), DatabaseName: S.String, TableName: S.String, TransactionId: S.String, Objects: VirtualObjectList}) {}
export class DeleteObjectsOnCancelResponse extends S.Class<DeleteObjectsOnCancelResponse>("DeleteObjectsOnCancelResponse")({}) {}
export class DescribeLakeFormationIdentityCenterConfigurationResponse extends S.Class<DescribeLakeFormationIdentityCenterConfigurationResponse>("DescribeLakeFormationIdentityCenterConfigurationResponse")({CatalogId: S.optional(S.String), InstanceArn: S.optional(S.String), ApplicationArn: S.optional(S.String), ExternalFiltering: S.optional(ExternalFilteringConfiguration), ShareRecipients: S.optional(DataLakePrincipalList), ServiceIntegrations: S.optional(ServiceIntegrationList), ResourceShare: S.optional(S.String)}) {}
export class GetDataCellsFilterResponse extends S.Class<GetDataCellsFilterResponse>("GetDataCellsFilterResponse")({DataCellsFilter: S.optional(DataCellsFilter)}) {}
export class PrincipalPermissions extends S.Class<PrincipalPermissions>("PrincipalPermissions")({Principal: S.optional(DataLakePrincipal), Permissions: S.optional(PermissionList)}) {}
export const PrincipalPermissionsList = S.Array(PrincipalPermissions);
export const ParametersMap = S.Record({key: S.String, value: S.String});
export class DataLakeSettings extends S.Class<DataLakeSettings>("DataLakeSettings")({DataLakeAdmins: S.optional(DataLakePrincipalList), ReadOnlyAdmins: S.optional(DataLakePrincipalList), CreateDatabaseDefaultPermissions: S.optional(PrincipalPermissionsList), CreateTableDefaultPermissions: S.optional(PrincipalPermissionsList), Parameters: S.optional(ParametersMap), TrustedResourceOwners: S.optional(TrustedResourceOwners), AllowExternalDataFiltering: S.optional(S.Boolean), AllowFullTableExternalDataAccess: S.optional(S.Boolean), ExternalDataFilteringAllowList: S.optional(DataLakePrincipalList), AuthorizedSessionTagValueList: S.optional(AuthorizedSessionTagValueList)}) {}
export class GetDataLakeSettingsResponse extends S.Class<GetDataLakeSettingsResponse>("GetDataLakeSettingsResponse")({DataLakeSettings: S.optional(DataLakeSettings)}) {}
export class GetLFTagResponse extends S.Class<GetLFTagResponse>("GetLFTagResponse")({CatalogId: S.optional(S.String), TagKey: S.optional(S.String), TagValues: S.optional(TagValueList)}) {}
export class GetLFTagExpressionResponse extends S.Class<GetLFTagExpressionResponse>("GetLFTagExpressionResponse")({Name: S.optional(S.String), Description: S.optional(S.String), CatalogId: S.optional(S.String), Expression: S.optional(Expression)}) {}
export class GetQueryStateResponse extends S.Class<GetQueryStateResponse>("GetQueryStateResponse")({Error: S.optional(S.String), State: S.String}) {}
export class GetTemporaryGluePartitionCredentialsRequest extends S.Class<GetTemporaryGluePartitionCredentialsRequest>("GetTemporaryGluePartitionCredentialsRequest")({TableArn: S.String, Partition: PartitionValueList, Permissions: S.optional(PermissionList), DurationSeconds: S.optional(S.Number), AuditContext: S.optional(AuditContext), SupportedPermissionTypes: S.optional(PermissionTypeList)}) {}
export class GetWorkUnitResultsResponse extends S.Class<GetWorkUnitResultsResponse>("GetWorkUnitResultsResponse")({ResultStream: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class ListDataCellsFilterRequest extends S.Class<ListDataCellsFilterRequest>("ListDataCellsFilterRequest")({Table: S.optional(TableResource), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLFTagsResponse extends S.Class<ListLFTagsResponse>("ListLFTagsResponse")({LFTags: S.optional(LFTagsList), NextToken: S.optional(S.String)}) {}
export const ResourceShareList = S.Array(S.String);
export class DetailsMap extends S.Class<DetailsMap>("DetailsMap")({ResourceShare: S.optional(ResourceShareList)}) {}
export class PrincipalResourcePermissions extends S.Class<PrincipalResourcePermissions>("PrincipalResourcePermissions")({Principal: S.optional(DataLakePrincipal), Resource: S.optional(Resource), Condition: S.optional(Condition), Permissions: S.optional(PermissionList), PermissionsWithGrantOption: S.optional(PermissionList), AdditionalDetails: S.optional(DetailsMap), LastUpdated: S.optional(S.Date), LastUpdatedBy: S.optional(S.String)}) {}
export const PrincipalResourcePermissionsList = S.Array(PrincipalResourcePermissions);
export class ListPermissionsResponse extends S.Class<ListPermissionsResponse>("ListPermissionsResponse")({PrincipalResourcePermissions: S.optional(PrincipalResourcePermissionsList), NextToken: S.optional(S.String)}) {}
export class ListResourcesRequest extends S.Class<ListResourcesRequest>("ListResourcesRequest")({FilterConditionList: S.optional(FilterConditionList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTransactionsResponse extends S.Class<ListTransactionsResponse>("ListTransactionsResponse")({Transactions: S.optional(TransactionDescriptionList), NextToken: S.optional(S.String)}) {}
export class StartTransactionResponse extends S.Class<StartTransactionResponse>("StartTransactionResponse")({TransactionId: S.optional(S.String)}) {}
export const AdditionalContextMap = S.Record({key: S.String, value: S.String});
export const QueryParameterMap = S.Record({key: S.String, value: S.String});
export class AddObjectInput extends S.Class<AddObjectInput>("AddObjectInput")({Uri: S.String, ETag: S.String, Size: S.Number, PartitionValues: S.optional(PartitionValuesList)}) {}
export class DeleteObjectInput extends S.Class<DeleteObjectInput>("DeleteObjectInput")({Uri: S.String, ETag: S.optional(S.String), PartitionValues: S.optional(PartitionValuesList)}) {}
export const StorageOptimizerConfig = S.Record({key: S.String, value: S.String});
export class ResourceInfo extends S.Class<ResourceInfo>("ResourceInfo")({ResourceArn: S.optional(S.String), RoleArn: S.optional(S.String), LastModified: S.optional(S.Date), WithFederation: S.optional(S.Boolean), HybridAccessEnabled: S.optional(S.Boolean), WithPrivilegedAccess: S.optional(S.Boolean)}) {}
export class ExecutionStatistics extends S.Class<ExecutionStatistics>("ExecutionStatistics")({AverageExecutionTimeMillis: S.optional(S.Number), DataScannedBytes: S.optional(S.Number), WorkUnitsExecutedCount: S.optional(S.Number)}) {}
export class PlanningStatistics extends S.Class<PlanningStatistics>("PlanningStatistics")({EstimatedDataToScanBytes: S.optional(S.Number), PlanningTimeMillis: S.optional(S.Number), QueueTimeMillis: S.optional(S.Number), WorkUnitsGeneratedCount: S.optional(S.Number)}) {}
export class ColumnLFTag extends S.Class<ColumnLFTag>("ColumnLFTag")({Name: S.optional(S.String), LFTags: S.optional(LFTagsList)}) {}
export const ColumnLFTagsList = S.Array(ColumnLFTag);
export class QuerySessionContext extends S.Class<QuerySessionContext>("QuerySessionContext")({QueryId: S.optional(S.String), QueryStartTime: S.optional(S.Date), ClusterId: S.optional(S.String), QueryAuthorizationId: S.optional(S.String), AdditionalContext: S.optional(AdditionalContextMap)}) {}
export class WorkUnitRange extends S.Class<WorkUnitRange>("WorkUnitRange")({WorkUnitIdMax: S.Number, WorkUnitIdMin: S.Number, WorkUnitToken: S.String}) {}
export const WorkUnitRangeList = S.Array(WorkUnitRange);
export const DataCellsFilterList = S.Array(DataCellsFilter);
export class LakeFormationOptInsInfo extends S.Class<LakeFormationOptInsInfo>("LakeFormationOptInsInfo")({Resource: S.optional(Resource), Principal: S.optional(DataLakePrincipal), Condition: S.optional(Condition), LastModified: S.optional(S.Date), LastUpdatedBy: S.optional(S.String)}) {}
export const LakeFormationOptInsInfoList = S.Array(LakeFormationOptInsInfo);
export class LFTagExpression extends S.Class<LFTagExpression>("LFTagExpression")({Name: S.optional(S.String), Description: S.optional(S.String), CatalogId: S.optional(S.String), Expression: S.optional(Expression)}) {}
export const LFTagExpressionsList = S.Array(LFTagExpression);
export const ResourceInfoList = S.Array(ResourceInfo);
export class StorageOptimizer extends S.Class<StorageOptimizer>("StorageOptimizer")({StorageOptimizerType: S.optional(S.String), Config: S.optional(StorageOptimizerConfig), ErrorMessage: S.optional(S.String), Warnings: S.optional(S.String), LastRunDetails: S.optional(S.String)}) {}
export const StorageOptimizerList = S.Array(StorageOptimizer);
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class LFTagError extends S.Class<LFTagError>("LFTagError")({LFTag: S.optional(LFTagPair), Error: S.optional(ErrorDetail)}) {}
export const LFTagErrors = S.Array(LFTagError);
export class TaggedDatabase extends S.Class<TaggedDatabase>("TaggedDatabase")({Database: S.optional(DatabaseResource), LFTags: S.optional(LFTagsList)}) {}
export const DatabaseLFTagsList = S.Array(TaggedDatabase);
export class TaggedTable extends S.Class<TaggedTable>("TaggedTable")({Table: S.optional(TableResource), LFTagOnDatabase: S.optional(LFTagsList), LFTagsOnTable: S.optional(LFTagsList), LFTagsOnColumns: S.optional(ColumnLFTagsList)}) {}
export const TableLFTagsList = S.Array(TaggedTable);
export class QueryPlanningContext extends S.Class<QueryPlanningContext>("QueryPlanningContext")({CatalogId: S.optional(S.String), DatabaseName: S.String, QueryAsOfTime: S.optional(S.Date), QueryParameters: S.optional(QueryParameterMap), TransactionId: S.optional(S.String)}) {}
export class WriteOperation extends S.Class<WriteOperation>("WriteOperation")({AddObject: S.optional(AddObjectInput), DeleteObject: S.optional(DeleteObjectInput)}) {}
export const WriteOperationList = S.Array(WriteOperation);
export const StorageOptimizerConfigMap = S.Record({key: S.String, value: StorageOptimizerConfig});
export class AddLFTagsToResourceRequest extends S.Class<AddLFTagsToResourceRequest>("AddLFTagsToResourceRequest")({CatalogId: S.optional(S.String), Resource: Resource, LFTags: LFTagsList}) {}
export class BatchPermissionsFailureEntry extends S.Class<BatchPermissionsFailureEntry>("BatchPermissionsFailureEntry")({RequestEntry: S.optional(BatchPermissionsRequestEntry), Error: S.optional(ErrorDetail)}) {}
export const BatchPermissionsFailureList = S.Array(BatchPermissionsFailureEntry);
export class BatchGrantPermissionsResponse extends S.Class<BatchGrantPermissionsResponse>("BatchGrantPermissionsResponse")({Failures: S.optional(BatchPermissionsFailureList)}) {}
export class CreateDataCellsFilterRequest extends S.Class<CreateDataCellsFilterRequest>("CreateDataCellsFilterRequest")({TableData: DataCellsFilter}) {}
export class CreateDataCellsFilterResponse extends S.Class<CreateDataCellsFilterResponse>("CreateDataCellsFilterResponse")({}) {}
export class DescribeResourceResponse extends S.Class<DescribeResourceResponse>("DescribeResourceResponse")({ResourceInfo: S.optional(ResourceInfo)}) {}
export class DescribeTransactionResponse extends S.Class<DescribeTransactionResponse>("DescribeTransactionResponse")({TransactionDescription: S.optional(TransactionDescription)}) {}
export class GetQueryStatisticsResponse extends S.Class<GetQueryStatisticsResponse>("GetQueryStatisticsResponse")({ExecutionStatistics: S.optional(ExecutionStatistics), PlanningStatistics: S.optional(PlanningStatistics), QuerySubmissionTime: S.optional(S.Date)}) {}
export class GetResourceLFTagsResponse extends S.Class<GetResourceLFTagsResponse>("GetResourceLFTagsResponse")({LFTagOnDatabase: S.optional(LFTagsList), LFTagsOnTable: S.optional(LFTagsList), LFTagsOnColumns: S.optional(ColumnLFTagsList)}) {}
export class GetTemporaryGluePartitionCredentialsResponse extends S.Class<GetTemporaryGluePartitionCredentialsResponse>("GetTemporaryGluePartitionCredentialsResponse")({AccessKeyId: S.optional(S.String), SecretAccessKey: S.optional(S.String), SessionToken: S.optional(S.String), Expiration: S.optional(S.Date)}) {}
export class GetTemporaryGlueTableCredentialsRequest extends S.Class<GetTemporaryGlueTableCredentialsRequest>("GetTemporaryGlueTableCredentialsRequest")({TableArn: S.String, Permissions: S.optional(PermissionList), DurationSeconds: S.optional(S.Number), AuditContext: S.optional(AuditContext), SupportedPermissionTypes: S.optional(PermissionTypeList), S3Path: S.optional(S.String), QuerySessionContext: S.optional(QuerySessionContext)}) {}
export class GetWorkUnitsResponse extends S.Class<GetWorkUnitsResponse>("GetWorkUnitsResponse")({NextToken: S.optional(S.String), QueryId: S.String, WorkUnitRanges: WorkUnitRangeList}) {}
export class ListDataCellsFilterResponse extends S.Class<ListDataCellsFilterResponse>("ListDataCellsFilterResponse")({DataCellsFilters: S.optional(DataCellsFilterList), NextToken: S.optional(S.String)}) {}
export class ListLakeFormationOptInsResponse extends S.Class<ListLakeFormationOptInsResponse>("ListLakeFormationOptInsResponse")({LakeFormationOptInsInfoList: S.optional(LakeFormationOptInsInfoList), NextToken: S.optional(S.String)}) {}
export class ListLFTagExpressionsResponse extends S.Class<ListLFTagExpressionsResponse>("ListLFTagExpressionsResponse")({LFTagExpressions: S.optional(LFTagExpressionsList), NextToken: S.optional(S.String)}) {}
export class ListResourcesResponse extends S.Class<ListResourcesResponse>("ListResourcesResponse")({ResourceInfoList: S.optional(ResourceInfoList), NextToken: S.optional(S.String)}) {}
export class ListTableStorageOptimizersResponse extends S.Class<ListTableStorageOptimizersResponse>("ListTableStorageOptimizersResponse")({StorageOptimizerList: S.optional(StorageOptimizerList), NextToken: S.optional(S.String)}) {}
export class PutDataLakeSettingsRequest extends S.Class<PutDataLakeSettingsRequest>("PutDataLakeSettingsRequest")({CatalogId: S.optional(S.String), DataLakeSettings: DataLakeSettings}) {}
export class PutDataLakeSettingsResponse extends S.Class<PutDataLakeSettingsResponse>("PutDataLakeSettingsResponse")({}) {}
export class RemoveLFTagsFromResourceResponse extends S.Class<RemoveLFTagsFromResourceResponse>("RemoveLFTagsFromResourceResponse")({Failures: S.optional(LFTagErrors)}) {}
export class SearchDatabasesByLFTagsResponse extends S.Class<SearchDatabasesByLFTagsResponse>("SearchDatabasesByLFTagsResponse")({NextToken: S.optional(S.String), DatabaseList: S.optional(DatabaseLFTagsList)}) {}
export class SearchTablesByLFTagsResponse extends S.Class<SearchTablesByLFTagsResponse>("SearchTablesByLFTagsResponse")({NextToken: S.optional(S.String), TableList: S.optional(TableLFTagsList)}) {}
export class StartQueryPlanningRequest extends S.Class<StartQueryPlanningRequest>("StartQueryPlanningRequest")({QueryPlanningContext: QueryPlanningContext, QueryString: S.String}) {}
export class UpdateTableObjectsRequest extends S.Class<UpdateTableObjectsRequest>("UpdateTableObjectsRequest")({CatalogId: S.optional(S.String), DatabaseName: S.String, TableName: S.String, TransactionId: S.optional(S.String), WriteOperations: WriteOperationList}) {}
export class UpdateTableObjectsResponse extends S.Class<UpdateTableObjectsResponse>("UpdateTableObjectsResponse")({}) {}
export class UpdateTableStorageOptimizerRequest extends S.Class<UpdateTableStorageOptimizerRequest>("UpdateTableStorageOptimizerRequest")({CatalogId: S.optional(S.String), DatabaseName: S.String, TableName: S.String, StorageOptimizerConfig: StorageOptimizerConfigMap}) {}
export class TableObject extends S.Class<TableObject>("TableObject")({Uri: S.optional(S.String), ETag: S.optional(S.String), Size: S.optional(S.Number)}) {}
export const TableObjectList = S.Array(TableObject);
export class PartitionObjects extends S.Class<PartitionObjects>("PartitionObjects")({PartitionValues: S.optional(PartitionValuesList), Objects: S.optional(TableObjectList)}) {}
export const PartitionedTableObjectsList = S.Array(PartitionObjects);
export const PathStringList = S.Array(S.String);
export class AddLFTagsToResourceResponse extends S.Class<AddLFTagsToResourceResponse>("AddLFTagsToResourceResponse")({Failures: S.optional(LFTagErrors)}) {}
export class BatchRevokePermissionsResponse extends S.Class<BatchRevokePermissionsResponse>("BatchRevokePermissionsResponse")({Failures: S.optional(BatchPermissionsFailureList)}) {}
export class CreateLakeFormationIdentityCenterConfigurationRequest extends S.Class<CreateLakeFormationIdentityCenterConfigurationRequest>("CreateLakeFormationIdentityCenterConfigurationRequest")({CatalogId: S.optional(S.String), InstanceArn: S.optional(S.String), ExternalFiltering: S.optional(ExternalFilteringConfiguration), ShareRecipients: S.optional(DataLakePrincipalList), ServiceIntegrations: S.optional(ServiceIntegrationList)}) {}
export class GetEffectivePermissionsForPathResponse extends S.Class<GetEffectivePermissionsForPathResponse>("GetEffectivePermissionsForPathResponse")({Permissions: S.optional(PrincipalResourcePermissionsList), NextToken: S.optional(S.String)}) {}
export class GetTableObjectsResponse extends S.Class<GetTableObjectsResponse>("GetTableObjectsResponse")({Objects: S.optional(PartitionedTableObjectsList), NextToken: S.optional(S.String)}) {}
export class GetTemporaryGlueTableCredentialsResponse extends S.Class<GetTemporaryGlueTableCredentialsResponse>("GetTemporaryGlueTableCredentialsResponse")({AccessKeyId: S.optional(S.String), SecretAccessKey: S.optional(S.String), SessionToken: S.optional(S.String), Expiration: S.optional(S.Date), VendedS3Path: S.optional(PathStringList)}) {}
export class StartQueryPlanningResponse extends S.Class<StartQueryPlanningResponse>("StartQueryPlanningResponse")({QueryId: S.String}) {}
export class UpdateTableStorageOptimizerResponse extends S.Class<UpdateTableStorageOptimizerResponse>("UpdateTableStorageOptimizerResponse")({Result: S.optional(S.String)}) {}
export class CreateLakeFormationIdentityCenterConfigurationResponse extends S.Class<CreateLakeFormationIdentityCenterConfigurationResponse>("CreateLakeFormationIdentityCenterConfigurationResponse")({ApplicationArn: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class EntityNotFoundException extends S.TaggedError<EntityNotFoundException>()("EntityNotFoundException", {}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class OperationTimeoutException extends S.TaggedError<OperationTimeoutException>()("OperationTimeoutException", {}) {};
export class TransactionCanceledException extends S.TaggedError<TransactionCanceledException>()("TransactionCanceledException", {}) {};
export class ResourceNumberLimitExceededException extends S.TaggedError<ResourceNumberLimitExceededException>()("ResourceNumberLimitExceededException", {}) {};
export class TransactionCommitInProgressException extends S.TaggedError<TransactionCommitInProgressException>()("TransactionCommitInProgressException", {}) {};
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {Message: S.optional(S.String)}) {};
export class TransactionCommittedException extends S.TaggedError<TransactionCommittedException>()("TransactionCommittedException", {}) {};
export class ResourceNotReadyException extends S.TaggedError<ResourceNotReadyException>()("ResourceNotReadyException", {Message: S.optional(S.String)}) {};
export class ExpiredException extends S.TaggedError<ExpiredException>()("ExpiredException", {}) {};
export class GlueEncryptionException extends S.TaggedError<GlueEncryptionException>()("GlueEncryptionException", {}) {};
export class StatisticsNotReadyYetException extends S.TaggedError<StatisticsNotReadyYetException>()("StatisticsNotReadyYetException", {Message: S.optional(S.String)}) {};
export class ThrottledException extends S.TaggedError<ThrottledException>()("ThrottledException", {}) {};
export class PermissionTypeMismatchException extends S.TaggedError<PermissionTypeMismatchException>()("PermissionTypeMismatchException", {Message: S.optional(S.String)}) {};
export class WorkUnitsNotReadyYetException extends S.TaggedError<WorkUnitsNotReadyYetException>()("WorkUnitsNotReadyYetException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the LF-Tag expression. The caller must be a data lake admin or have `DROP` permissions on the LF-Tag expression.
 * Deleting a LF-Tag expression will also delete all `LFTagPolicy` permissions referencing the LF-Tag expression.
 */export const deleteLFTagExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteLFTagExpression", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteLFTagExpression" }, DeleteLFTagExpressionRequest, DeleteLFTagExpressionResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregisters the resource as managed by the Data Catalog.
 * 
 * 
 * When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.
 */export const deregisterResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeregisterResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeregisterResource" }, DeregisterResourceRequest, DeregisterResourceResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the identity of the invoking principal.
 */export const getDataLakePrincipal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetDataLakePrincipal", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetDataLakePrincipal" }, GetDataLakePrincipalRequest, GetDataLakePrincipalResponse, [AccessDeniedException, InternalServiceException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
 * 
 * 
 * For information about permissions, see Security and Access Control to Metadata and Data.
 */export const grantPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GrantPermissions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GrantPermissions" }, GrantPermissionsRequest, GrantPermissionsResponse, [ConcurrentModificationException, EntityNotFoundException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
 */export const revokePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/RevokePermissions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.RevokePermissions" }, RevokePermissionsRequest, RevokePermissionsResponse, [ConcurrentModificationException, EntityNotFoundException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a data cell filter.
 */export const updateDataCellsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateDataCellsFilter", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateDataCellsFilter" }, UpdateDataCellsFilterRequest, UpdateDataCellsFilterResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the IAM Identity Center connection parameters.
 */export const updateLakeFormationIdentityCenterConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateLakeFormationIdentityCenterConfiguration", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateLakeFormationIdentityCenterConfiguration" }, UpdateLakeFormationIdentityCenterConfigurationRequest, UpdateLakeFormationIdentityCenterConfigurationResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.
 */export const updateLFTag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateLFTag", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateLFTag" }, UpdateLFTagRequest, UpdateLFTagResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the data access role used for vending access to the given (registered) resource in Lake Formation.
 */export const updateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateResource" }, UpdateResourceRequest, UpdateResourceResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions.
 * Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session.
 * 
 * 
 * 
 * 
 * This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API `GetDataAccess`.
 * Therefore, all SAML roles that can be assumed via `AssumeDecoratedRoleWithSAML` must at a minimum include `lakeformation:GetDataAccess` in their role policies.
 * A typical IAM policy attached to such a role would include the following actions:
 * 
 * 
 * 
 * 
 * - glue:*Database*
 * 
 * 
 * 
 * - glue:*Table*
 * 
 * 
 * 
 * - glue:*Partition*
 * 
 * 
 * 
 * - glue:*UserDefinedFunction*
 * 
 * 
 * 
 * - lakeformation:GetDataAccess
 */export const assumeDecoratedRoleWithSAML = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/AssumeDecoratedRoleWithSAML", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.AssumeDecoratedRoleWithSAML" }, AssumeDecoratedRoleWithSAMLRequest, AssumeDecoratedRoleWithSAMLResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
 */export const commitTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CommitTransaction", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CommitTransaction" }, CommitTransactionRequest, CommitTransactionResponse, [ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, TransactionCanceledException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enforce Lake Formation permissions for the given databases, tables, and principals.
 */export const createLakeFormationOptIn = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CreateLakeFormationOptIn", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CreateLakeFormationOptIn" }, CreateLakeFormationOptInRequest, CreateLakeFormationOptInResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an LF-tag with the specified name and values.
 */export const createLFTag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CreateLFTag", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CreateLFTag" }, CreateLFTagRequest, CreateLFTagResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new LF-Tag expression with the provided name, description, catalog ID, and
 * expression body. This call fails if a LF-Tag expression with the same name already exists in
 * the caller’s account or if the underlying LF-Tags don't exist. To call this API operation,
 * caller needs the following Lake Formation permissions:
 * 
 * 
 * 
 * `CREATE_LF_TAG_EXPRESSION` on the root catalog resource.
 * 
 * 
 * 
 * `GRANT_WITH_LF_TAG_EXPRESSION` on all underlying LF-Tag key:value pairs
 * included in the expression.
 */export const createLFTagExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CreateLFTagExpression", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CreateLFTagExpression" }, CreateLFTagExpressionRequest, CreateLFTagExpressionResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a data cell filter.
 */export const deleteDataCellsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteDataCellsFilter", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteDataCellsFilter" }, DeleteDataCellsFilterRequest, DeleteDataCellsFilterResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an IAM Identity Center connection with Lake Formation.
 */export const deleteLakeFormationIdentityCenterConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteLakeFormationIdentityCenterConfiguration", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteLakeFormationIdentityCenterConfiguration" }, DeleteLakeFormationIdentityCenterConfigurationRequest, DeleteLakeFormationIdentityCenterConfigurationResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove the Lake Formation permissions enforcement of the given databases, tables, and principals.
 */export const deleteLakeFormationOptIn = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteLakeFormationOptIn", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteLakeFormationOptIn" }, DeleteLakeFormationOptInRequest, DeleteLakeFormationOptInResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't
 * exist. When you delete an LF-Tag:
 * 
 * 
 * 
 * - The associated LF-Tag policy becomes invalid.
 * 
 * 
 * 
 * - Resources that had this tag assigned will no longer have the tag policy applied to
 * them.
 */export const deleteLFTag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteLFTag", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteLFTag" }, DeleteLFTagRequest, DeleteLFTagResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the instance ARN and application ARN for the connection.
 */export const describeLakeFormationIdentityCenterConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DescribeLakeFormationIdentityCenterConfiguration", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DescribeLakeFormationIdentityCenterConfiguration" }, DescribeLakeFormationIdentityCenterConfigurationRequest, DescribeLakeFormationIdentityCenterConfigurationResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a data cells filter.
 */export const getDataCellsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetDataCellsFilter", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetDataCellsFilter" }, GetDataCellsFilterRequest, GetDataCellsFilterResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.
 */export const getDataLakeSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetDataLakeSettings", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetDataLakeSettings" }, GetDataLakeSettingsRequest, GetDataLakeSettingsResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an LF-tag definition.
 */export const getLFTag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetLFTag", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetLFTag" }, GetLFTagRequest, GetLFTagResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have `DESCRIBE` permission on the LF-Tag expression resource.
 */export const getLFTagExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetLFTagExpression", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetLFTagExpression" }, GetLFTagExpressionRequest, GetLFTagExpressionResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the state of a query previously submitted. Clients are expected to poll `GetQueryState` to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to `StartQueryPlanning`.
 */export const getQueryState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetQueryState", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetQueryState" }, GetQueryStateRequest, GetQueryStateResponse, [AccessDeniedException, InternalServiceException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists LF-tags that the requester has permission to view.
 */export const listLFTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListLFTags", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListLFTags" }, ListLFTagsRequest, ListLFTagsResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.
 * 
 * 
 * This operation returns only those permissions that have been explicitly granted. If both
 * `Principal` and `Resource` parameters are provided, the response
 * returns effective permissions rather than the explicitly granted permissions.
 * 
 * 
 * For information about permissions, see Security and Access Control to Metadata and Data.
 */export const listPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListPermissions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListPermissions" }, ListPermissionsRequest, ListPermissionsResponse, [InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.
 * 
 * 
 * This operation can help you identify uncommitted transactions or to get information about transactions.
 */export const listTransactions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListTransactions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListTransactions" }, ListTransactionsRequest, ListTransactionsResponse, [InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers the resource as managed by the Data Catalog.
 * 
 * 
 * To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.
 * 
 * 
 * The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.
 * 
 * 
 * 
 * ResourceArn = arn:aws:s3:::my-bucket/
 * UseServiceLinkedRole = true
 * 
 * 
 * 
 * If `UseServiceLinkedRole` is not set to true, you must provide or set the `RoleArn`:
 * 
 * 
 * 
 * `arn:aws:iam::12345:role/my-data-access-role`
 */export const registerResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/RegisterResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.RegisterResource" }, RegisterResourceRequest, RegisterResourceResponse, [AccessDeniedException, AlreadyExistsException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
 */export const startTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/StartTransaction", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.StartTransaction" }, StartTransactionRequest, StartTransactionResponse, [InternalServiceException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the name of the LF-Tag expression to the new description and expression body provided.
 * Updating a LF-Tag expression immediately changes the permission boundaries of all existing `LFTagPolicy` permission grants that reference the given LF-Tag expression.
 */export const updateLFTagExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateLFTagExpression", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateLFTagExpression" }, UpdateLFTagExpressionRequest, UpdateLFTagExpressionResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Batch operation to grant permissions to the principal.
 */export const batchGrantPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/BatchGrantPermissions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.BatchGrantPermissions" }, BatchGrantPermissionsRequest, BatchGrantPermissionsResponse, [InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
 */export const cancelTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CancelTransaction", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CancelTransaction" }, CancelTransactionRequest, CancelTransactionResponse, [ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, TransactionCommitInProgressException, TransactionCommittedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a data cell filter to allow one to grant access to certain columns on certain rows.
 */export const createDataCellsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CreateDataCellsFilter", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CreateDataCellsFilter" }, CreateDataCellsFilterRequest, CreateDataCellsFilterResponse, [AccessDeniedException, AlreadyExistsException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNumberLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
 * if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 * 
 * 
 * 
 * 
 * The Glue ETL library function `write_dynamic_frame.from_catalog()` includes an option to automatically
 * call `DeleteObjectsOnCancel` before writes. For more information, see
 * Rolling Back Amazon S3 Writes.
 */export const deleteObjectsOnCancel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DeleteObjectsOnCancel", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DeleteObjectsOnCancel" }, DeleteObjectsOnCancelRequest, DeleteObjectsOnCancelResponse, [ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNotReadyException, TransactionCanceledException, TransactionCommittedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current data access role for the given resource registered in Lake Formation.
 */export const describeResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DescribeResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DescribeResource" }, DescribeResourceRequest, DescribeResourceResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details of a single transaction.
 */export const describeTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/DescribeTransaction", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.DescribeTransaction" }, DescribeTransactionRequest, DescribeTransactionResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.
 * 
 * 
 * Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.
 */export const extendTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ExtendTransaction", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ExtendTransaction" }, ExtendTransactionRequest, ExtendTransactionResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, TransactionCanceledException, TransactionCommitInProgressException, TransactionCommittedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the data cell filters on a table.
 */export const listDataCellsFilter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListDataCellsFilter", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListDataCellsFilter" }, ListDataCellsFilterRequest, ListDataCellsFilterResponse, [AccessDeniedException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions.
 */export const listLakeFormationOptIns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListLakeFormationOptIns", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListLakeFormationOptIns" }, ListLakeFormationOptInsRequest, ListLakeFormationOptInsResponse, [AccessDeniedException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the LF-Tag expressions in caller’s account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression.
 */export const listLFTagExpressions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListLFTagExpressions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListLFTagExpressions" }, ListLFTagExpressionsRequest, ListLFTagExpressionsResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resources registered to be managed by the Data Catalog.
 */export const listResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListResources", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListResources" }, ListResourcesRequest, ListResourcesResponse, [InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the configuration of all storage optimizers associated with a specified table.
 */export const listTableStorageOptimizers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/ListTableStorageOptimizers", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.ListTableStorageOptimizers" }, ListTableStorageOptimizersRequest, ListTableStorageOptimizersResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions.
 * 
 * 
 * This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.
 */export const putDataLakeSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/PutDataLakeSettings", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.PutDataLakeSettings" }, PutDataLakeSettingsRequest, PutDataLakeSettingsResponse, [InternalServiceException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in `tableWithColumns` to specify column input.
 */export const removeLFTagsFromResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/RemoveLFTagsFromResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.RemoveLFTagsFromResource" }, RemoveLFTagsFromResourceRequest, RemoveLFTagsFromResourceResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, GlueEncryptionException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation allows a search on `DATABASE` resources by `TagCondition`. This operation is used by admins who want to grant user permissions on certain `TagConditions`. Before making a grant, the admin can use `SearchDatabasesByTags` to find all resources where the given `TagConditions` are valid to verify whether the returned resources can be shared.
 */export const searchDatabasesByLFTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/SearchDatabasesByLFTags", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.SearchDatabasesByLFTags" }, SearchDatabasesByLFTagsRequest, SearchDatabasesByLFTagsResponse, [AccessDeniedException, EntityNotFoundException, GlueEncryptionException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation allows a search on `TABLE` resources by `LFTag`s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use `SearchTablesByLFTags` to find all resources where the given `LFTag`s are valid to verify whether the returned resources can be shared.
 */export const searchTablesByLFTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/SearchTablesByLFTags", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.SearchTablesByLFTags" }, SearchTablesByLFTagsRequest, SearchTablesByLFTagsResponse, [AccessDeniedException, EntityNotFoundException, GlueEncryptionException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the manifest of Amazon S3 objects that make up the specified governed table.
 */export const updateTableObjects = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateTableObjects", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateTableObjects" }, UpdateTableObjectsRequest, UpdateTableObjectsResponse, [ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNotReadyException, TransactionCanceledException, TransactionCommitInProgressException, TransactionCommittedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches one or more LF-tags to an existing resource.
 */export const addLFTagsToResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/AddLFTagsToResource", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.AddLFTagsToResource" }, AddLFTagsToResourceRequest, AddLFTagsToResourceResponse, [AccessDeniedException, ConcurrentModificationException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Batch operation to revoke permissions from the principal.
 */export const batchRevokePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/BatchRevokePermissions", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.BatchRevokePermissions" }, BatchRevokePermissionsRequest, BatchRevokePermissionsResponse, [InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the Lake Formation permissions for a specified table or database resource located
 * at a path in Amazon S3. `GetEffectivePermissionsForPath` will not return databases and tables if the catalog is encrypted.
 */export const getEffectivePermissionsForPath = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetEffectivePermissionsForPath", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetEffectivePermissionsForPath" }, GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves statistics on the planning and execution of a query.
 */export const getQueryStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetQueryStatistics", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetQueryStatistics" }, GetQueryStatisticsRequest, GetQueryStatisticsResponse, [AccessDeniedException, ExpiredException, InternalServiceException, InvalidInputException, StatisticsNotReadyYetException, ThrottledException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the LF-tags applied to a resource.
 */export const getResourceLFTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetResourceLFTags", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetResourceLFTags" }, GetResourceLFTagsRequest, GetResourceLFTagsResponse, [AccessDeniedException, EntityNotFoundException, GlueEncryptionException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
 */export const getTableObjects = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetTableObjects", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetTableObjects" }, GetTableObjectsRequest, GetTableObjectsResponse, [EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, ResourceNotReadyException, TransactionCanceledException, TransactionCommittedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This API is identical to `GetTemporaryTableCredentials` except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
 */export const getTemporaryGluePartitionCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetTemporaryGluePartitionCredentials", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetTemporaryGluePartitionCredentials" }, GetTemporaryGluePartitionCredentialsRequest, GetTemporaryGluePartitionCredentialsResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, PermissionTypeMismatchException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
 * 
 * 
 * To call this API, the role that the service assumes must have `lakeformation:GetDataAccess` permission on the resource.
 */export const getTemporaryGlueTableCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetTemporaryGlueTableCredentials", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetTemporaryGlueTableCredentials" }, GetTemporaryGlueTableCredentialsRequest, GetTemporaryGlueTableCredentialsResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException, OperationTimeoutException, PermissionTypeMismatchException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the work units resulting from the query. Work units can be executed in any order and in parallel.
 */export const getWorkUnitResults = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetWorkUnitResults", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetWorkUnitResults" }, GetWorkUnitResultsRequest, GetWorkUnitResultsResponse, [AccessDeniedException, ExpiredException, InternalServiceException, InvalidInputException, ThrottledException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the work units generated by the `StartQueryPlanning` operation.
 */export const getWorkUnits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/GetWorkUnits", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.GetWorkUnits" }, GetWorkUnitsRequest, GetWorkUnitsResponse, [AccessDeniedException, ExpiredException, InternalServiceException, InvalidInputException, WorkUnitsNotReadyYetException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a request to process a query statement.
 * 
 * 
 * This operation generates work units that can be retrieved with the `GetWorkUnits` operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.
 */export const startQueryPlanning = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/StartQueryPlanning", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.StartQueryPlanning" }, StartQueryPlanningRequest, StartQueryPlanningResponse, [AccessDeniedException, InternalServiceException, InvalidInputException, ThrottledException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration of the storage optimizers for a table.
 */export const updateTableStorageOptimizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/UpdateTableStorageOptimizer", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.UpdateTableStorageOptimizer" }, UpdateTableStorageOptimizerRequest, UpdateTableStorageOptimizerResponse, [AccessDeniedException, EntityNotFoundException, InternalServiceException, InvalidInputException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.
 */export const createLakeFormationIdentityCenterConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-31", uri: "/CreateLakeFormationIdentityCenterConfiguration", sdkId: "LakeFormation", sigV4ServiceName: "lakeformation", name: "AWSLakeFormation.CreateLakeFormationIdentityCenterConfiguration" }, CreateLakeFormationIdentityCenterConfigurationRequest, CreateLakeFormationIdentityCenterConfigurationResponse, [AccessDeniedException, AlreadyExistsException, ConcurrentModificationException, InternalServiceException, InvalidInputException, OperationTimeoutException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
