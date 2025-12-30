import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetServiceSettingsRequest extends S.Class<GetServiceSettingsRequest>("GetServiceSettingsRequest")({}) {}
export const PrincipalArnList = S.Array(S.String);
export const AllowedOperationList = S.Array(S.String);
export const LicenseAssetRulesetArnList = S.Array(S.String);
export const StringList = S.Array(S.String);
export const ReportTypeList = S.Array(S.String);
export const ArnList = S.Array(S.String);
export const MaxSize3StringList = S.Array(S.String);
export const FilterValues = S.Array(S.String);
export class Filter extends S.Class<Filter>("Filter")({Name: S.optional(S.String), Values: S.optional(FilterValues)}) {}
export const Filters = S.Array(Filter);
export const TagKeyList = S.Array(S.String);
export class AcceptGrantRequest extends S.Class<AcceptGrantRequest>("AcceptGrantRequest")({GrantArn: S.String}) {}
export class CheckInLicenseRequest extends S.Class<CheckInLicenseRequest>("CheckInLicenseRequest")({LicenseConsumptionToken: S.String, Beneficiary: S.optional(S.String)}) {}
export class CheckInLicenseResponse extends S.Class<CheckInLicenseResponse>("CheckInLicenseResponse")({}) {}
export class EntitlementData extends S.Class<EntitlementData>("EntitlementData")({Name: S.String, Value: S.optional(S.String), Unit: S.String}) {}
export const EntitlementDataList = S.Array(EntitlementData);
export class CheckoutLicenseRequest extends S.Class<CheckoutLicenseRequest>("CheckoutLicenseRequest")({ProductSKU: S.String, CheckoutType: S.String, KeyFingerprint: S.String, Entitlements: EntitlementDataList, ClientToken: S.String, Beneficiary: S.optional(S.String), NodeId: S.optional(S.String)}) {}
export class Issuer extends S.Class<Issuer>("Issuer")({Name: S.String, SignKey: S.optional(S.String)}) {}
export class DatetimeRange extends S.Class<DatetimeRange>("DatetimeRange")({Begin: S.String, End: S.optional(S.String)}) {}
export class Metadata extends S.Class<Metadata>("Metadata")({Name: S.optional(S.String), Value: S.optional(S.String)}) {}
export const MetadataList = S.Array(Metadata);
export class Entitlement extends S.Class<Entitlement>("Entitlement")({Name: S.String, Value: S.optional(S.String), MaxCount: S.optional(S.Number), Overage: S.optional(S.Boolean), Unit: S.String, AllowCheckIn: S.optional(S.Boolean)}) {}
export const EntitlementList = S.Array(Entitlement);
export class ProvisionalConfiguration extends S.Class<ProvisionalConfiguration>("ProvisionalConfiguration")({MaxTimeToLiveInMinutes: S.Number}) {}
export class BorrowConfiguration extends S.Class<BorrowConfiguration>("BorrowConfiguration")({AllowEarlyCheckIn: S.Boolean, MaxTimeToLiveInMinutes: S.Number}) {}
export class ConsumptionConfiguration extends S.Class<ConsumptionConfiguration>("ConsumptionConfiguration")({RenewType: S.optional(S.String), ProvisionalConfiguration: S.optional(ProvisionalConfiguration), BorrowConfiguration: S.optional(BorrowConfiguration)}) {}
export class CreateLicenseVersionRequest extends S.Class<CreateLicenseVersionRequest>("CreateLicenseVersionRequest")({LicenseArn: S.String, LicenseName: S.String, ProductName: S.String, Issuer: Issuer, HomeRegion: S.String, Validity: DatetimeRange, LicenseMetadata: S.optional(MetadataList), Entitlements: EntitlementList, ConsumptionConfiguration: ConsumptionConfiguration, Status: S.String, ClientToken: S.String, SourceVersion: S.optional(S.String)}) {}
export class CreateTokenRequest extends S.Class<CreateTokenRequest>("CreateTokenRequest")({LicenseArn: S.String, RoleArns: S.optional(ArnList), ExpirationInDays: S.optional(S.Number), TokenProperties: S.optional(MaxSize3StringList), ClientToken: S.String}) {}
export class DeleteGrantRequest extends S.Class<DeleteGrantRequest>("DeleteGrantRequest")({GrantArn: S.String, StatusReason: S.optional(S.String), Version: S.String}) {}
export class DeleteLicenseRequest extends S.Class<DeleteLicenseRequest>("DeleteLicenseRequest")({LicenseArn: S.String, SourceVersion: S.String}) {}
export class DeleteLicenseAssetGroupRequest extends S.Class<DeleteLicenseAssetGroupRequest>("DeleteLicenseAssetGroupRequest")({LicenseAssetGroupArn: S.String}) {}
export class DeleteLicenseAssetRulesetRequest extends S.Class<DeleteLicenseAssetRulesetRequest>("DeleteLicenseAssetRulesetRequest")({LicenseAssetRulesetArn: S.String}) {}
export class DeleteLicenseAssetRulesetResponse extends S.Class<DeleteLicenseAssetRulesetResponse>("DeleteLicenseAssetRulesetResponse")({}) {}
export class DeleteLicenseConfigurationRequest extends S.Class<DeleteLicenseConfigurationRequest>("DeleteLicenseConfigurationRequest")({LicenseConfigurationArn: S.String}) {}
export class DeleteLicenseConfigurationResponse extends S.Class<DeleteLicenseConfigurationResponse>("DeleteLicenseConfigurationResponse")({}) {}
export class DeleteLicenseManagerReportGeneratorRequest extends S.Class<DeleteLicenseManagerReportGeneratorRequest>("DeleteLicenseManagerReportGeneratorRequest")({LicenseManagerReportGeneratorArn: S.String}) {}
export class DeleteLicenseManagerReportGeneratorResponse extends S.Class<DeleteLicenseManagerReportGeneratorResponse>("DeleteLicenseManagerReportGeneratorResponse")({}) {}
export class DeleteTokenRequest extends S.Class<DeleteTokenRequest>("DeleteTokenRequest")({TokenId: S.String}) {}
export class DeleteTokenResponse extends S.Class<DeleteTokenResponse>("DeleteTokenResponse")({}) {}
export class ExtendLicenseConsumptionRequest extends S.Class<ExtendLicenseConsumptionRequest>("ExtendLicenseConsumptionRequest")({LicenseConsumptionToken: S.String, DryRun: S.optional(S.Boolean)}) {}
export class GetAccessTokenRequest extends S.Class<GetAccessTokenRequest>("GetAccessTokenRequest")({Token: S.String, TokenProperties: S.optional(MaxSize3StringList)}) {}
export class GetGrantRequest extends S.Class<GetGrantRequest>("GetGrantRequest")({GrantArn: S.String, Version: S.optional(S.String)}) {}
export class GetLicenseRequest extends S.Class<GetLicenseRequest>("GetLicenseRequest")({LicenseArn: S.String, Version: S.optional(S.String)}) {}
export class GetLicenseAssetGroupRequest extends S.Class<GetLicenseAssetGroupRequest>("GetLicenseAssetGroupRequest")({LicenseAssetGroupArn: S.String}) {}
export class GetLicenseAssetRulesetRequest extends S.Class<GetLicenseAssetRulesetRequest>("GetLicenseAssetRulesetRequest")({LicenseAssetRulesetArn: S.String}) {}
export class GetLicenseConfigurationRequest extends S.Class<GetLicenseConfigurationRequest>("GetLicenseConfigurationRequest")({LicenseConfigurationArn: S.String}) {}
export class GetLicenseConversionTaskRequest extends S.Class<GetLicenseConversionTaskRequest>("GetLicenseConversionTaskRequest")({LicenseConversionTaskId: S.String}) {}
export class GetLicenseManagerReportGeneratorRequest extends S.Class<GetLicenseManagerReportGeneratorRequest>("GetLicenseManagerReportGeneratorRequest")({LicenseManagerReportGeneratorArn: S.String}) {}
export class GetLicenseUsageRequest extends S.Class<GetLicenseUsageRequest>("GetLicenseUsageRequest")({LicenseArn: S.String}) {}
export class ListAssetsForLicenseAssetGroupRequest extends S.Class<ListAssetsForLicenseAssetGroupRequest>("ListAssetsForLicenseAssetGroupRequest")({LicenseAssetGroupArn: S.String, AssetType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListAssociationsForLicenseConfigurationRequest extends S.Class<ListAssociationsForLicenseConfigurationRequest>("ListAssociationsForLicenseConfigurationRequest")({LicenseConfigurationArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFailuresForLicenseConfigurationOperationsRequest extends S.Class<ListFailuresForLicenseConfigurationOperationsRequest>("ListFailuresForLicenseConfigurationOperationsRequest")({LicenseConfigurationArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLicenseAssetGroupsRequest extends S.Class<ListLicenseAssetGroupsRequest>("ListLicenseAssetGroupsRequest")({Filters: S.optional(Filters), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLicenseAssetRulesetsRequest extends S.Class<ListLicenseAssetRulesetsRequest>("ListLicenseAssetRulesetsRequest")({Filters: S.optional(Filters), ShowAWSManagedLicenseAssetRulesets: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLicenseConfigurationsRequest extends S.Class<ListLicenseConfigurationsRequest>("ListLicenseConfigurationsRequest")({LicenseConfigurationArns: S.optional(StringList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(Filters)}) {}
export class ListLicenseConfigurationsForOrganizationRequest extends S.Class<ListLicenseConfigurationsForOrganizationRequest>("ListLicenseConfigurationsForOrganizationRequest")({LicenseConfigurationArns: S.optional(StringList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(Filters)}) {}
export class ListLicenseConversionTasksRequest extends S.Class<ListLicenseConversionTasksRequest>("ListLicenseConversionTasksRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(Filters)}) {}
export const FilterList = S.Array(Filter);
export class ListLicenseManagerReportGeneratorsRequest extends S.Class<ListLicenseManagerReportGeneratorsRequest>("ListLicenseManagerReportGeneratorsRequest")({Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLicensesRequest extends S.Class<ListLicensesRequest>("ListLicensesRequest")({LicenseArns: S.optional(ArnList), Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLicenseSpecificationsForResourceRequest extends S.Class<ListLicenseSpecificationsForResourceRequest>("ListLicenseSpecificationsForResourceRequest")({ResourceArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListLicenseVersionsRequest extends S.Class<ListLicenseVersionsRequest>("ListLicenseVersionsRequest")({LicenseArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReceivedGrantsRequest extends S.Class<ListReceivedGrantsRequest>("ListReceivedGrantsRequest")({GrantArns: S.optional(ArnList), Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReceivedGrantsForOrganizationRequest extends S.Class<ListReceivedGrantsForOrganizationRequest>("ListReceivedGrantsForOrganizationRequest")({LicenseArn: S.String, Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReceivedLicensesRequest extends S.Class<ListReceivedLicensesRequest>("ListReceivedLicensesRequest")({LicenseArns: S.optional(ArnList), Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReceivedLicensesForOrganizationRequest extends S.Class<ListReceivedLicensesForOrganizationRequest>("ListReceivedLicensesForOrganizationRequest")({Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListTokensRequest extends S.Class<ListTokensRequest>("ListTokensRequest")({TokenIds: S.optional(StringList), Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListUsageForLicenseConfigurationRequest extends S.Class<ListUsageForLicenseConfigurationRequest>("ListUsageForLicenseConfigurationRequest")({LicenseConfigurationArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(Filters)}) {}
export class RejectGrantRequest extends S.Class<RejectGrantRequest>("RejectGrantRequest")({GrantArn: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class LicenseAssetGroupConfiguration extends S.Class<LicenseAssetGroupConfiguration>("LicenseAssetGroupConfiguration")({UsageDimension: S.optional(S.String)}) {}
export const LicenseAssetGroupConfigurationList = S.Array(LicenseAssetGroupConfiguration);
export class LicenseAssetGroupProperty extends S.Class<LicenseAssetGroupProperty>("LicenseAssetGroupProperty")({Key: S.String, Value: S.String}) {}
export const LicenseAssetGroupPropertyList = S.Array(LicenseAssetGroupProperty);
export class UpdateLicenseAssetGroupRequest extends S.Class<UpdateLicenseAssetGroupRequest>("UpdateLicenseAssetGroupRequest")({Name: S.optional(S.String), Description: S.optional(S.String), LicenseAssetGroupConfigurations: S.optional(LicenseAssetGroupConfigurationList), AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList, Properties: S.optional(LicenseAssetGroupPropertyList), LicenseAssetGroupArn: S.String, Status: S.optional(S.String), ClientToken: S.String}) {}
export class MatchingRuleStatement extends S.Class<MatchingRuleStatement>("MatchingRuleStatement")({KeyToMatch: S.String, Constraint: S.String, ValueToMatch: StringList}) {}
export const MatchingRuleStatementList = S.Array(MatchingRuleStatement);
export class ScriptRuleStatement extends S.Class<ScriptRuleStatement>("ScriptRuleStatement")({KeyToMatch: S.String, Script: S.String}) {}
export const ScriptRuleStatementList = S.Array(ScriptRuleStatement);
export class AndRuleStatement extends S.Class<AndRuleStatement>("AndRuleStatement")({MatchingRuleStatements: S.optional(MatchingRuleStatementList), ScriptRuleStatements: S.optional(ScriptRuleStatementList)}) {}
export class OrRuleStatement extends S.Class<OrRuleStatement>("OrRuleStatement")({MatchingRuleStatements: S.optional(MatchingRuleStatementList), ScriptRuleStatements: S.optional(ScriptRuleStatementList)}) {}
export class LicenseConfigurationRuleStatement extends S.Class<LicenseConfigurationRuleStatement>("LicenseConfigurationRuleStatement")({AndRuleStatement: S.optional(AndRuleStatement), OrRuleStatement: S.optional(OrRuleStatement), MatchingRuleStatement: S.optional(MatchingRuleStatement)}) {}
export class LicenseRuleStatement extends S.Class<LicenseRuleStatement>("LicenseRuleStatement")({AndRuleStatement: S.optional(AndRuleStatement), OrRuleStatement: S.optional(OrRuleStatement), MatchingRuleStatement: S.optional(MatchingRuleStatement)}) {}
export class InstanceRuleStatement extends S.Class<InstanceRuleStatement>("InstanceRuleStatement")({AndRuleStatement: S.optional(AndRuleStatement), OrRuleStatement: S.optional(OrRuleStatement), MatchingRuleStatement: S.optional(MatchingRuleStatement), ScriptRuleStatement: S.optional(ScriptRuleStatement)}) {}
export class RuleStatement extends S.Class<RuleStatement>("RuleStatement")({LicenseConfigurationRuleStatement: S.optional(LicenseConfigurationRuleStatement), LicenseRuleStatement: S.optional(LicenseRuleStatement), InstanceRuleStatement: S.optional(InstanceRuleStatement)}) {}
export class LicenseAssetRule extends S.Class<LicenseAssetRule>("LicenseAssetRule")({RuleStatement: RuleStatement}) {}
export const LicenseAssetRuleList = S.Array(LicenseAssetRule);
export class UpdateLicenseAssetRulesetRequest extends S.Class<UpdateLicenseAssetRulesetRequest>("UpdateLicenseAssetRulesetRequest")({Name: S.optional(S.String), Description: S.optional(S.String), Rules: LicenseAssetRuleList, LicenseAssetRulesetArn: S.String, ClientToken: S.String}) {}
export class ProductInformationFilter extends S.Class<ProductInformationFilter>("ProductInformationFilter")({ProductInformationFilterName: S.String, ProductInformationFilterValue: S.optional(StringList), ProductInformationFilterComparator: S.String}) {}
export const ProductInformationFilterList = S.Array(ProductInformationFilter);
export class ProductInformation extends S.Class<ProductInformation>("ProductInformation")({ResourceType: S.String, ProductInformationFilterList: ProductInformationFilterList}) {}
export const ProductInformationList = S.Array(ProductInformation);
export class UpdateLicenseConfigurationRequest extends S.Class<UpdateLicenseConfigurationRequest>("UpdateLicenseConfigurationRequest")({LicenseConfigurationArn: S.String, LicenseConfigurationStatus: S.optional(S.String), LicenseRules: S.optional(StringList), LicenseCount: S.optional(S.Number), LicenseCountHardLimit: S.optional(S.Boolean), Name: S.optional(S.String), Description: S.optional(S.String), ProductInformationList: S.optional(ProductInformationList), DisassociateWhenNotFound: S.optional(S.Boolean), LicenseExpiry: S.optional(S.Number)}) {}
export class UpdateLicenseConfigurationResponse extends S.Class<UpdateLicenseConfigurationResponse>("UpdateLicenseConfigurationResponse")({}) {}
export class ReportContext extends S.Class<ReportContext>("ReportContext")({licenseConfigurationArns: S.optional(ArnList), licenseAssetGroupArns: S.optional(ArnList), reportStartDate: S.optional(S.Date), reportEndDate: S.optional(S.Date)}) {}
export class ReportFrequency extends S.Class<ReportFrequency>("ReportFrequency")({value: S.optional(S.Number), period: S.optional(S.String)}) {}
export class UpdateLicenseManagerReportGeneratorRequest extends S.Class<UpdateLicenseManagerReportGeneratorRequest>("UpdateLicenseManagerReportGeneratorRequest")({LicenseManagerReportGeneratorArn: S.String, ReportGeneratorName: S.String, Type: ReportTypeList, ReportContext: ReportContext, ReportFrequency: ReportFrequency, ClientToken: S.String, Description: S.optional(S.String)}) {}
export class UpdateLicenseManagerReportGeneratorResponse extends S.Class<UpdateLicenseManagerReportGeneratorResponse>("UpdateLicenseManagerReportGeneratorResponse")({}) {}
export class OrganizationConfiguration extends S.Class<OrganizationConfiguration>("OrganizationConfiguration")({EnableIntegration: S.Boolean}) {}
export class UpdateServiceSettingsRequest extends S.Class<UpdateServiceSettingsRequest>("UpdateServiceSettingsRequest")({S3BucketArn: S.optional(S.String), SnsTopicArn: S.optional(S.String), OrganizationConfiguration: S.optional(OrganizationConfiguration), EnableCrossAccountsDiscovery: S.optional(S.Boolean), EnabledDiscoverySourceRegions: S.optional(StringList)}) {}
export class UpdateServiceSettingsResponse extends S.Class<UpdateServiceSettingsResponse>("UpdateServiceSettingsResponse")({}) {}
export class Options extends S.Class<Options>("Options")({ActivationOverrideBehavior: S.optional(S.String)}) {}
export class LicenseAssetGroup extends S.Class<LicenseAssetGroup>("LicenseAssetGroup")({Name: S.String, Description: S.optional(S.String), LicenseAssetGroupConfigurations: S.optional(LicenseAssetGroupConfigurationList), AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList, Properties: S.optional(LicenseAssetGroupPropertyList), LicenseAssetGroupArn: S.String, Status: S.String, StatusMessage: S.optional(S.String), LatestUsageAnalysisTime: S.optional(S.Date), LatestResourceDiscoveryTime: S.optional(S.Date)}) {}
export const LicenseAssetGroupList = S.Array(LicenseAssetGroup);
export class LicenseAssetRuleset extends S.Class<LicenseAssetRuleset>("LicenseAssetRuleset")({Name: S.String, Description: S.optional(S.String), Rules: LicenseAssetRuleList, LicenseAssetRulesetArn: S.String}) {}
export const LicenseAssetRulesetList = S.Array(LicenseAssetRuleset);
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.optional(S.String), keyPrefix: S.optional(S.String)}) {}
export class ReportGenerator extends S.Class<ReportGenerator>("ReportGenerator")({ReportGeneratorName: S.optional(S.String), ReportType: S.optional(ReportTypeList), ReportContext: S.optional(ReportContext), ReportFrequency: S.optional(ReportFrequency), LicenseManagerReportGeneratorArn: S.optional(S.String), LastRunStatus: S.optional(S.String), LastRunFailureReason: S.optional(S.String), LastReportGenerationTime: S.optional(S.String), ReportCreatorAccount: S.optional(S.String), Description: S.optional(S.String), S3Location: S.optional(S3Location), CreateTime: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const ReportGeneratorList = S.Array(ReportGenerator);
export class IssuerDetails extends S.Class<IssuerDetails>("IssuerDetails")({Name: S.optional(S.String), SignKey: S.optional(S.String), KeyFingerprint: S.optional(S.String)}) {}
export class License extends S.Class<License>("License")({LicenseArn: S.optional(S.String), LicenseName: S.optional(S.String), ProductName: S.optional(S.String), ProductSKU: S.optional(S.String), Issuer: S.optional(IssuerDetails), HomeRegion: S.optional(S.String), Status: S.optional(S.String), Validity: S.optional(DatetimeRange), Beneficiary: S.optional(S.String), Entitlements: S.optional(EntitlementList), ConsumptionConfiguration: S.optional(ConsumptionConfiguration), LicenseMetadata: S.optional(MetadataList), CreateTime: S.optional(S.String), Version: S.optional(S.String)}) {}
export const LicenseList = S.Array(License);
export class Grant extends S.Class<Grant>("Grant")({GrantArn: S.String, GrantName: S.String, ParentArn: S.String, LicenseArn: S.String, GranteePrincipalArn: S.String, HomeRegion: S.String, GrantStatus: S.String, StatusReason: S.optional(S.String), Version: S.String, GrantedOperations: AllowedOperationList, Options: S.optional(Options)}) {}
export const GrantList = S.Array(Grant);
export class InventoryFilter extends S.Class<InventoryFilter>("InventoryFilter")({Name: S.String, Condition: S.String, Value: S.optional(S.String)}) {}
export const InventoryFilterList = S.Array(InventoryFilter);
export class LicenseSpecification extends S.Class<LicenseSpecification>("LicenseSpecification")({LicenseConfigurationArn: S.String, AmiAssociationScope: S.optional(S.String)}) {}
export const LicenseSpecifications = S.Array(LicenseSpecification);
export class AcceptGrantResponse extends S.Class<AcceptGrantResponse>("AcceptGrantResponse")({GrantArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CheckoutBorrowLicenseRequest extends S.Class<CheckoutBorrowLicenseRequest>("CheckoutBorrowLicenseRequest")({LicenseArn: S.String, Entitlements: EntitlementDataList, DigitalSignatureMethod: S.String, NodeId: S.optional(S.String), CheckoutMetadata: S.optional(MetadataList), ClientToken: S.String}) {}
export class CheckoutLicenseResponse extends S.Class<CheckoutLicenseResponse>("CheckoutLicenseResponse")({CheckoutType: S.optional(S.String), LicenseConsumptionToken: S.optional(S.String), EntitlementsAllowed: S.optional(EntitlementDataList), SignedToken: S.optional(S.String), NodeId: S.optional(S.String), IssuedAt: S.optional(S.String), Expiration: S.optional(S.String), LicenseArn: S.optional(S.String)}) {}
export class CreateGrantRequest extends S.Class<CreateGrantRequest>("CreateGrantRequest")({ClientToken: S.String, GrantName: S.String, LicenseArn: S.String, Principals: PrincipalArnList, HomeRegion: S.String, AllowedOperations: AllowedOperationList, Tags: S.optional(TagList)}) {}
export class CreateGrantVersionRequest extends S.Class<CreateGrantVersionRequest>("CreateGrantVersionRequest")({ClientToken: S.String, GrantArn: S.String, GrantName: S.optional(S.String), AllowedOperations: S.optional(AllowedOperationList), Status: S.optional(S.String), StatusReason: S.optional(S.String), SourceVersion: S.optional(S.String), Options: S.optional(Options)}) {}
export class CreateLicenseAssetGroupRequest extends S.Class<CreateLicenseAssetGroupRequest>("CreateLicenseAssetGroupRequest")({Name: S.String, Description: S.optional(S.String), LicenseAssetGroupConfigurations: LicenseAssetGroupConfigurationList, AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList, Properties: S.optional(LicenseAssetGroupPropertyList), Tags: S.optional(TagList), ClientToken: S.String}) {}
export class CreateLicenseManagerReportGeneratorRequest extends S.Class<CreateLicenseManagerReportGeneratorRequest>("CreateLicenseManagerReportGeneratorRequest")({ReportGeneratorName: S.String, Type: ReportTypeList, ReportContext: ReportContext, ReportFrequency: ReportFrequency, ClientToken: S.String, Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateLicenseVersionResponse extends S.Class<CreateLicenseVersionResponse>("CreateLicenseVersionResponse")({LicenseArn: S.optional(S.String), Version: S.optional(S.String), Status: S.optional(S.String)}) {}
export class CreateTokenResponse extends S.Class<CreateTokenResponse>("CreateTokenResponse")({TokenId: S.optional(S.String), TokenType: S.optional(S.String), Token: S.optional(S.String)}) {}
export class DeleteGrantResponse extends S.Class<DeleteGrantResponse>("DeleteGrantResponse")({GrantArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class DeleteLicenseResponse extends S.Class<DeleteLicenseResponse>("DeleteLicenseResponse")({Status: S.optional(S.String), DeletionDate: S.optional(S.String)}) {}
export class DeleteLicenseAssetGroupResponse extends S.Class<DeleteLicenseAssetGroupResponse>("DeleteLicenseAssetGroupResponse")({Status: S.String}) {}
export class ExtendLicenseConsumptionResponse extends S.Class<ExtendLicenseConsumptionResponse>("ExtendLicenseConsumptionResponse")({LicenseConsumptionToken: S.optional(S.String), Expiration: S.optional(S.String)}) {}
export class GetAccessTokenResponse extends S.Class<GetAccessTokenResponse>("GetAccessTokenResponse")({AccessToken: S.optional(S.String)}) {}
export class ProductCodeListItem extends S.Class<ProductCodeListItem>("ProductCodeListItem")({ProductCodeId: S.String, ProductCodeType: S.String}) {}
export const ProductCodeList = S.Array(ProductCodeListItem);
export class LicenseConversionContext extends S.Class<LicenseConversionContext>("LicenseConversionContext")({UsageOperation: S.optional(S.String), ProductCodes: S.optional(ProductCodeList)}) {}
export class GetLicenseConversionTaskResponse extends S.Class<GetLicenseConversionTaskResponse>("GetLicenseConversionTaskResponse")({LicenseConversionTaskId: S.optional(S.String), ResourceArn: S.optional(S.String), SourceLicenseContext: S.optional(LicenseConversionContext), DestinationLicenseContext: S.optional(LicenseConversionContext), StatusMessage: S.optional(S.String), Status: S.optional(S.String), StartTime: S.optional(S.Date), LicenseConversionTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export class ListDistributedGrantsRequest extends S.Class<ListDistributedGrantsRequest>("ListDistributedGrantsRequest")({GrantArns: S.optional(ArnList), Filters: S.optional(FilterList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLicenseAssetGroupsResponse extends S.Class<ListLicenseAssetGroupsResponse>("ListLicenseAssetGroupsResponse")({LicenseAssetGroups: S.optional(LicenseAssetGroupList), NextToken: S.optional(S.String)}) {}
export class ListLicenseAssetRulesetsResponse extends S.Class<ListLicenseAssetRulesetsResponse>("ListLicenseAssetRulesetsResponse")({LicenseAssetRulesets: S.optional(LicenseAssetRulesetList), NextToken: S.optional(S.String)}) {}
export class ConsumedLicenseSummary extends S.Class<ConsumedLicenseSummary>("ConsumedLicenseSummary")({ResourceType: S.optional(S.String), ConsumedLicenses: S.optional(S.Number)}) {}
export const ConsumedLicenseSummaryList = S.Array(ConsumedLicenseSummary);
export class ManagedResourceSummary extends S.Class<ManagedResourceSummary>("ManagedResourceSummary")({ResourceType: S.optional(S.String), AssociationCount: S.optional(S.Number)}) {}
export const ManagedResourceSummaryList = S.Array(ManagedResourceSummary);
export class AutomatedDiscoveryInformation extends S.Class<AutomatedDiscoveryInformation>("AutomatedDiscoveryInformation")({LastRunTime: S.optional(S.Date)}) {}
export class LicenseConfiguration extends S.Class<LicenseConfiguration>("LicenseConfiguration")({LicenseConfigurationId: S.optional(S.String), LicenseConfigurationArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LicenseCountingType: S.optional(S.String), LicenseRules: S.optional(StringList), LicenseCount: S.optional(S.Number), LicenseCountHardLimit: S.optional(S.Boolean), DisassociateWhenNotFound: S.optional(S.Boolean), ConsumedLicenses: S.optional(S.Number), Status: S.optional(S.String), OwnerAccountId: S.optional(S.String), ConsumedLicenseSummaryList: S.optional(ConsumedLicenseSummaryList), ManagedResourceSummaryList: S.optional(ManagedResourceSummaryList), ProductInformationList: S.optional(ProductInformationList), AutomatedDiscoveryInformation: S.optional(AutomatedDiscoveryInformation), LicenseExpiry: S.optional(S.Number)}) {}
export const LicenseConfigurations = S.Array(LicenseConfiguration);
export class ListLicenseConfigurationsForOrganizationResponse extends S.Class<ListLicenseConfigurationsForOrganizationResponse>("ListLicenseConfigurationsForOrganizationResponse")({LicenseConfigurations: S.optional(LicenseConfigurations), NextToken: S.optional(S.String)}) {}
export class ListLicenseManagerReportGeneratorsResponse extends S.Class<ListLicenseManagerReportGeneratorsResponse>("ListLicenseManagerReportGeneratorsResponse")({ReportGenerators: S.optional(ReportGeneratorList), NextToken: S.optional(S.String)}) {}
export class ListLicensesResponse extends S.Class<ListLicensesResponse>("ListLicensesResponse")({Licenses: S.optional(LicenseList), NextToken: S.optional(S.String)}) {}
export class ListLicenseSpecificationsForResourceResponse extends S.Class<ListLicenseSpecificationsForResourceResponse>("ListLicenseSpecificationsForResourceResponse")({LicenseSpecifications: S.optional(LicenseSpecifications), NextToken: S.optional(S.String)}) {}
export class ListLicenseVersionsResponse extends S.Class<ListLicenseVersionsResponse>("ListLicenseVersionsResponse")({Licenses: S.optional(LicenseList), NextToken: S.optional(S.String)}) {}
export class ListReceivedGrantsResponse extends S.Class<ListReceivedGrantsResponse>("ListReceivedGrantsResponse")({Grants: S.optional(GrantList), NextToken: S.optional(S.String)}) {}
export class ListReceivedGrantsForOrganizationResponse extends S.Class<ListReceivedGrantsForOrganizationResponse>("ListReceivedGrantsForOrganizationResponse")({Grants: S.optional(GrantList), NextToken: S.optional(S.String)}) {}
export class ReceivedMetadata extends S.Class<ReceivedMetadata>("ReceivedMetadata")({ReceivedStatus: S.optional(S.String), ReceivedStatusReason: S.optional(S.String), AllowedOperations: S.optional(AllowedOperationList)}) {}
export class GrantedLicense extends S.Class<GrantedLicense>("GrantedLicense")({LicenseArn: S.optional(S.String), LicenseName: S.optional(S.String), ProductName: S.optional(S.String), ProductSKU: S.optional(S.String), Issuer: S.optional(IssuerDetails), HomeRegion: S.optional(S.String), Status: S.optional(S.String), Validity: S.optional(DatetimeRange), Beneficiary: S.optional(S.String), Entitlements: S.optional(EntitlementList), ConsumptionConfiguration: S.optional(ConsumptionConfiguration), LicenseMetadata: S.optional(MetadataList), CreateTime: S.optional(S.String), Version: S.optional(S.String), ReceivedMetadata: S.optional(ReceivedMetadata)}) {}
export const GrantedLicenseList = S.Array(GrantedLicense);
export class ListReceivedLicensesForOrganizationResponse extends S.Class<ListReceivedLicensesForOrganizationResponse>("ListReceivedLicensesForOrganizationResponse")({Licenses: S.optional(GrantedLicenseList), NextToken: S.optional(S.String)}) {}
export class ListResourceInventoryRequest extends S.Class<ListResourceInventoryRequest>("ListResourceInventoryRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Filters: S.optional(InventoryFilterList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class RejectGrantResponse extends S.Class<RejectGrantResponse>("RejectGrantResponse")({GrantArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class UpdateLicenseAssetGroupResponse extends S.Class<UpdateLicenseAssetGroupResponse>("UpdateLicenseAssetGroupResponse")({LicenseAssetGroupArn: S.String, Status: S.String}) {}
export class UpdateLicenseAssetRulesetResponse extends S.Class<UpdateLicenseAssetRulesetResponse>("UpdateLicenseAssetRulesetResponse")({LicenseAssetRulesetArn: S.String}) {}
export class UpdateLicenseSpecificationsForResourceRequest extends S.Class<UpdateLicenseSpecificationsForResourceRequest>("UpdateLicenseSpecificationsForResourceRequest")({ResourceArn: S.String, AddLicenseSpecifications: S.optional(LicenseSpecifications), RemoveLicenseSpecifications: S.optional(LicenseSpecifications)}) {}
export class UpdateLicenseSpecificationsForResourceResponse extends S.Class<UpdateLicenseSpecificationsForResourceResponse>("UpdateLicenseSpecificationsForResourceResponse")({}) {}
export class CrossAccountDiscoveryServiceStatus extends S.Class<CrossAccountDiscoveryServiceStatus>("CrossAccountDiscoveryServiceStatus")({Message: S.optional(S.String)}) {}
export class Asset extends S.Class<Asset>("Asset")({AssetArn: S.optional(S.String), LatestAssetDiscoveryTime: S.optional(S.Date)}) {}
export const AssetList = S.Array(Asset);
export class LicenseConfigurationAssociation extends S.Class<LicenseConfigurationAssociation>("LicenseConfigurationAssociation")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ResourceOwnerId: S.optional(S.String), AssociationTime: S.optional(S.Date), AmiAssociationScope: S.optional(S.String)}) {}
export const LicenseConfigurationAssociations = S.Array(LicenseConfigurationAssociation);
export class LicenseOperationFailure extends S.Class<LicenseOperationFailure>("LicenseOperationFailure")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ErrorMessage: S.optional(S.String), FailureTime: S.optional(S.Date), OperationName: S.optional(S.String), ResourceOwnerId: S.optional(S.String), OperationRequestedBy: S.optional(S.String), MetadataList: S.optional(MetadataList)}) {}
export const LicenseOperationFailureList = S.Array(LicenseOperationFailure);
export class LicenseConversionTask extends S.Class<LicenseConversionTask>("LicenseConversionTask")({LicenseConversionTaskId: S.optional(S.String), ResourceArn: S.optional(S.String), SourceLicenseContext: S.optional(LicenseConversionContext), DestinationLicenseContext: S.optional(LicenseConversionContext), Status: S.optional(S.String), StatusMessage: S.optional(S.String), StartTime: S.optional(S.Date), LicenseConversionTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export const LicenseConversionTasks = S.Array(LicenseConversionTask);
export class TokenData extends S.Class<TokenData>("TokenData")({TokenId: S.optional(S.String), TokenType: S.optional(S.String), LicenseArn: S.optional(S.String), ExpirationTime: S.optional(S.String), TokenProperties: S.optional(MaxSize3StringList), RoleArns: S.optional(ArnList), Status: S.optional(S.String)}) {}
export const TokenList = S.Array(TokenData);
export class LicenseConfigurationUsage extends S.Class<LicenseConfigurationUsage>("LicenseConfigurationUsage")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String), ResourceStatus: S.optional(S.String), ResourceOwnerId: S.optional(S.String), AssociationTime: S.optional(S.Date), ConsumedLicenses: S.optional(S.Number)}) {}
export const LicenseConfigurationUsageList = S.Array(LicenseConfigurationUsage);
export class CheckoutBorrowLicenseResponse extends S.Class<CheckoutBorrowLicenseResponse>("CheckoutBorrowLicenseResponse")({LicenseArn: S.optional(S.String), LicenseConsumptionToken: S.optional(S.String), EntitlementsAllowed: S.optional(EntitlementDataList), NodeId: S.optional(S.String), SignedToken: S.optional(S.String), IssuedAt: S.optional(S.String), Expiration: S.optional(S.String), CheckoutMetadata: S.optional(MetadataList)}) {}
export class CreateGrantResponse extends S.Class<CreateGrantResponse>("CreateGrantResponse")({GrantArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateGrantVersionResponse extends S.Class<CreateGrantVersionResponse>("CreateGrantVersionResponse")({GrantArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateLicenseRequest extends S.Class<CreateLicenseRequest>("CreateLicenseRequest")({LicenseName: S.String, ProductName: S.String, ProductSKU: S.String, Issuer: Issuer, HomeRegion: S.String, Validity: DatetimeRange, Entitlements: EntitlementList, Beneficiary: S.String, ConsumptionConfiguration: ConsumptionConfiguration, LicenseMetadata: S.optional(MetadataList), ClientToken: S.String, Tags: S.optional(TagList)}) {}
export class CreateLicenseAssetGroupResponse extends S.Class<CreateLicenseAssetGroupResponse>("CreateLicenseAssetGroupResponse")({LicenseAssetGroupArn: S.String, Status: S.String}) {}
export class CreateLicenseConfigurationRequest extends S.Class<CreateLicenseConfigurationRequest>("CreateLicenseConfigurationRequest")({Name: S.String, Description: S.optional(S.String), LicenseCountingType: S.String, LicenseCount: S.optional(S.Number), LicenseCountHardLimit: S.optional(S.Boolean), LicenseRules: S.optional(StringList), Tags: S.optional(TagList), DisassociateWhenNotFound: S.optional(S.Boolean), ProductInformationList: S.optional(ProductInformationList), LicenseExpiry: S.optional(S.Number)}) {}
export class CreateLicenseConversionTaskForResourceRequest extends S.Class<CreateLicenseConversionTaskForResourceRequest>("CreateLicenseConversionTaskForResourceRequest")({ResourceArn: S.String, SourceLicenseContext: LicenseConversionContext, DestinationLicenseContext: LicenseConversionContext}) {}
export class CreateLicenseManagerReportGeneratorResponse extends S.Class<CreateLicenseManagerReportGeneratorResponse>("CreateLicenseManagerReportGeneratorResponse")({LicenseManagerReportGeneratorArn: S.optional(S.String)}) {}
export class GetGrantResponse extends S.Class<GetGrantResponse>("GetGrantResponse")({Grant: S.optional(Grant)}) {}
export class GetLicenseAssetGroupResponse extends S.Class<GetLicenseAssetGroupResponse>("GetLicenseAssetGroupResponse")({LicenseAssetGroup: LicenseAssetGroup}) {}
export class GetLicenseAssetRulesetResponse extends S.Class<GetLicenseAssetRulesetResponse>("GetLicenseAssetRulesetResponse")({LicenseAssetRuleset: LicenseAssetRuleset}) {}
export class GetLicenseConfigurationResponse extends S.Class<GetLicenseConfigurationResponse>("GetLicenseConfigurationResponse")({LicenseConfigurationId: S.optional(S.String), LicenseConfigurationArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LicenseCountingType: S.optional(S.String), LicenseRules: S.optional(StringList), LicenseCount: S.optional(S.Number), LicenseCountHardLimit: S.optional(S.Boolean), ConsumedLicenses: S.optional(S.Number), Status: S.optional(S.String), OwnerAccountId: S.optional(S.String), ConsumedLicenseSummaryList: S.optional(ConsumedLicenseSummaryList), ManagedResourceSummaryList: S.optional(ManagedResourceSummaryList), Tags: S.optional(TagList), ProductInformationList: S.optional(ProductInformationList), AutomatedDiscoveryInformation: S.optional(AutomatedDiscoveryInformation), DisassociateWhenNotFound: S.optional(S.Boolean), LicenseExpiry: S.optional(S.Number)}) {}
export class ListAssetsForLicenseAssetGroupResponse extends S.Class<ListAssetsForLicenseAssetGroupResponse>("ListAssetsForLicenseAssetGroupResponse")({Assets: S.optional(AssetList), NextToken: S.optional(S.String)}) {}
export class ListAssociationsForLicenseConfigurationResponse extends S.Class<ListAssociationsForLicenseConfigurationResponse>("ListAssociationsForLicenseConfigurationResponse")({LicenseConfigurationAssociations: S.optional(LicenseConfigurationAssociations), NextToken: S.optional(S.String)}) {}
export class ListDistributedGrantsResponse extends S.Class<ListDistributedGrantsResponse>("ListDistributedGrantsResponse")({Grants: S.optional(GrantList), NextToken: S.optional(S.String)}) {}
export class ListFailuresForLicenseConfigurationOperationsResponse extends S.Class<ListFailuresForLicenseConfigurationOperationsResponse>("ListFailuresForLicenseConfigurationOperationsResponse")({LicenseOperationFailureList: S.optional(LicenseOperationFailureList), NextToken: S.optional(S.String)}) {}
export class ListLicenseConfigurationsResponse extends S.Class<ListLicenseConfigurationsResponse>("ListLicenseConfigurationsResponse")({LicenseConfigurations: S.optional(LicenseConfigurations), NextToken: S.optional(S.String)}) {}
export class ListLicenseConversionTasksResponse extends S.Class<ListLicenseConversionTasksResponse>("ListLicenseConversionTasksResponse")({LicenseConversionTasks: S.optional(LicenseConversionTasks), NextToken: S.optional(S.String)}) {}
export class ListTokensResponse extends S.Class<ListTokensResponse>("ListTokensResponse")({Tokens: S.optional(TokenList), NextToken: S.optional(S.String)}) {}
export class ListUsageForLicenseConfigurationResponse extends S.Class<ListUsageForLicenseConfigurationResponse>("ListUsageForLicenseConfigurationResponse")({LicenseConfigurationUsageList: S.optional(LicenseConfigurationUsageList), NextToken: S.optional(S.String)}) {}
export class EntitlementUsage extends S.Class<EntitlementUsage>("EntitlementUsage")({Name: S.String, ConsumedValue: S.String, MaxCount: S.optional(S.String), Unit: S.String}) {}
export const EntitlementUsageList = S.Array(EntitlementUsage);
export class RegionStatus extends S.Class<RegionStatus>("RegionStatus")({Status: S.optional(S.String)}) {}
export class LicenseUsage extends S.Class<LicenseUsage>("LicenseUsage")({EntitlementUsages: S.optional(EntitlementUsageList)}) {}
export class ResourceInventory extends S.Class<ResourceInventory>("ResourceInventory")({ResourceId: S.optional(S.String), ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String), Platform: S.optional(S.String), PlatformVersion: S.optional(S.String), ResourceOwningAccountId: S.optional(S.String), MarketplaceProductCodes: S.optional(StringList), UsageOperation: S.optional(S.String), AmiId: S.optional(S.String), HostId: S.optional(S.String), Region: S.optional(S.String), InstanceType: S.optional(S.String)}) {}
export const ResourceInventoryList = S.Array(ResourceInventory);
export const RegionStatusMap = S.Record({key: S.String, value: RegionStatus});
export class CreateLicenseResponse extends S.Class<CreateLicenseResponse>("CreateLicenseResponse")({LicenseArn: S.optional(S.String), Status: S.optional(S.String), Version: S.optional(S.String)}) {}
export class CreateLicenseConfigurationResponse extends S.Class<CreateLicenseConfigurationResponse>("CreateLicenseConfigurationResponse")({LicenseConfigurationArn: S.optional(S.String)}) {}
export class CreateLicenseConversionTaskForResourceResponse extends S.Class<CreateLicenseConversionTaskForResourceResponse>("CreateLicenseConversionTaskForResourceResponse")({LicenseConversionTaskId: S.optional(S.String)}) {}
export class GetLicenseResponse extends S.Class<GetLicenseResponse>("GetLicenseResponse")({License: S.optional(License)}) {}
export class GetLicenseManagerReportGeneratorResponse extends S.Class<GetLicenseManagerReportGeneratorResponse>("GetLicenseManagerReportGeneratorResponse")({ReportGenerator: S.optional(ReportGenerator)}) {}
export class GetLicenseUsageResponse extends S.Class<GetLicenseUsageResponse>("GetLicenseUsageResponse")({LicenseUsage: S.optional(LicenseUsage)}) {}
export class ListReceivedLicensesResponse extends S.Class<ListReceivedLicensesResponse>("ListReceivedLicensesResponse")({Licenses: S.optional(GrantedLicenseList), NextToken: S.optional(S.String)}) {}
export class ListResourceInventoryResponse extends S.Class<ListResourceInventoryResponse>("ListResourceInventoryResponse")({ResourceInventoryList: S.optional(ResourceInventoryList), NextToken: S.optional(S.String)}) {}
export class CrossRegionDiscoveryStatus extends S.Class<CrossRegionDiscoveryStatus>("CrossRegionDiscoveryStatus")({Message: S.optional(RegionStatusMap)}) {}
export class ServiceStatus extends S.Class<ServiceStatus>("ServiceStatus")({CrossAccountDiscovery: S.optional(CrossAccountDiscoveryServiceStatus), CrossRegionDiscovery: S.optional(CrossRegionDiscoveryStatus)}) {}
export class CreateLicenseAssetRulesetRequest extends S.Class<CreateLicenseAssetRulesetRequest>("CreateLicenseAssetRulesetRequest")({Name: S.String, Description: S.optional(S.String), Rules: LicenseAssetRuleList, Tags: S.optional(TagList), ClientToken: S.String}) {}
export class GetServiceSettingsResponse extends S.Class<GetServiceSettingsResponse>("GetServiceSettingsResponse")({S3BucketArn: S.optional(S.String), SnsTopicArn: S.optional(S.String), OrganizationConfiguration: S.optional(OrganizationConfiguration), EnableCrossAccountsDiscovery: S.optional(S.Boolean), LicenseManagerResourceShareArn: S.optional(S.String), CrossRegionDiscoveryHomeRegion: S.optional(S.String), CrossRegionDiscoverySourceRegions: S.optional(StringList), ServiceStatus: S.optional(ServiceStatus)}) {}
export class CreateLicenseAssetRulesetResponse extends S.Class<CreateLicenseAssetRulesetResponse>("CreateLicenseAssetRulesetResponse")({LicenseAssetRulesetArn: S.String}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class AuthorizationException extends S.TaggedError<AuthorizationException>()("AuthorizationException", {}) {};
export class InvalidParameterValueException extends S.TaggedError<InvalidParameterValueException>()("InvalidParameterValueException", {}) {};
export class RateLimitExceededException extends S.TaggedError<RateLimitExceededException>()("RateLimitExceededException", {}) {};
export class ServerInternalException extends S.TaggedError<ServerInternalException>()("ServerInternalException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ResourceLimitExceededException extends S.TaggedError<ResourceLimitExceededException>()("ResourceLimitExceededException", {}) {};
export class RedirectException extends S.TaggedError<RedirectException>()("RedirectException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class NoEntitlementsAllowedException extends S.TaggedError<NoEntitlementsAllowedException>()("NoEntitlementsAllowedException", {Message: S.optional(S.String)}) {};
export class FilterLimitExceededException extends S.TaggedError<FilterLimitExceededException>()("FilterLimitExceededException", {}) {};
export class InvalidResourceStateException extends S.TaggedError<InvalidResourceStateException>()("InvalidResourceStateException", {Message: S.optional(S.String)}) {};
export class EntitlementNotAllowedException extends S.TaggedError<EntitlementNotAllowedException>()("EntitlementNotAllowedException", {Message: S.optional(S.String)}) {};
export class UnsupportedDigitalSignatureMethodException extends S.TaggedError<UnsupportedDigitalSignatureMethodException>()("UnsupportedDigitalSignatureMethodException", {}) {};
export class LicenseUsageException extends S.TaggedError<LicenseUsageException>()("LicenseUsageException", {Message: S.optional(S.String)}) {};
export class FailedDependencyException extends S.TaggedError<FailedDependencyException>()("FailedDependencyException", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};

//# Operations
/**
 * Updates License Manager settings for the current Region.
 */export const updateServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateServiceSettings" }, UpdateServiceSettingsRequest, UpdateServiceSettingsResponse, [AccessDeniedException, AuthorizationException, ConflictException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts the specified grant.
 */export const acceptGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.AcceptGrant" }, AcceptGrantRequest, AcceptGrantResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of the specified license.
 */export const createLicenseVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseVersion" }, CreateLicenseVersionRequest, CreateLicenseVersionResponse, [AccessDeniedException, AuthorizationException, ConflictException, RateLimitExceededException, RedirectException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a long-lived token.
 * 
 * 
 * A refresh token is a JWT token used to get an access token. With an access token,
 * you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
 * call License Manager to manage the specified license.
 */export const createToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateToken" }, CreateTokenRequest, CreateTokenResponse, [AccessDeniedException, AuthorizationException, RateLimitExceededException, RedirectException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified grant.
 */export const deleteGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteGrant" }, DeleteGrantRequest, DeleteGrantResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified license.
 */export const deleteLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteLicense" }, DeleteLicenseRequest, DeleteLicenseResponse, [AccessDeniedException, AuthorizationException, ConflictException, InvalidParameterValueException, RateLimitExceededException, RedirectException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a license asset group.
 */export const deleteLicenseAssetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteLicenseAssetGroup" }, DeleteLicenseAssetGroupRequest, DeleteLicenseAssetGroupResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a license asset ruleset.
 */export const deleteLicenseAssetRuleset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteLicenseAssetRuleset" }, DeleteLicenseAssetRulesetRequest, DeleteLicenseAssetRulesetResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified license configuration.
 * 
 * 
 * You cannot delete a license configuration that is in use.
 */export const deleteLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteLicenseConfiguration" }, DeleteLicenseConfigurationRequest, DeleteLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified report generator.
 * 
 * 
 * This action deletes the report generator, which stops it from generating future reports.
 * The action cannot be reversed. It has no effect on the previous reports from this generator.
 */export const deleteLicenseManagerReportGenerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteLicenseManagerReportGenerator" }, DeleteLicenseManagerReportGeneratorRequest, DeleteLicenseManagerReportGeneratorResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified token. Must be called in the license home Region.
 */export const deleteToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.DeleteToken" }, DeleteTokenRequest, DeleteTokenResponse, [AccessDeniedException, AuthorizationException, RateLimitExceededException, RedirectException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Extends the expiration date for license consumption.
 */export const extendLicenseConsumption = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ExtendLicenseConsumption" }, ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 * are valid for one hour.
 */export const getAccessToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetAccessToken" }, GetAccessTokenRequest, GetAccessTokenResponse, [AccessDeniedException, AuthorizationException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified license type conversion task.
 */export const getLicenseConversionTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseConversionTask" }, GetLicenseConversionTaskRequest, GetLicenseConversionTaskResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists license asset groups.
 */export const listLicenseAssetGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseAssetGroups" }, ListLicenseAssetGroupsRequest, ListLicenseAssetGroupsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists license asset rulesets.
 */export const listLicenseAssetRulesets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseAssetRulesets" }, ListLicenseAssetRulesetsRequest, ListLicenseAssetRulesetsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the report generators for your account.
 */export const listLicenseManagerReportGenerators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseManagerReportGenerators" }, ListLicenseManagerReportGeneratorsRequest, ListLicenseManagerReportGeneratorsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the licenses for your account.
 */export const listLicenses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenses" }, ListLicensesRequest, ListLicensesResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the license configurations for the specified resource.
 */export const listLicenseSpecificationsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseSpecificationsForResource" }, ListLicenseSpecificationsForResourceRequest, ListLicenseSpecificationsForResourceResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all versions of the specified license.
 */export const listLicenseVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseVersions" }, ListLicenseVersionsRequest, ListLicenseVersionsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists grants that are received. Received grants are grants created while specifying the
 * recipient as this Amazon Web Services account, your organization, or an organizational unit
 * (OU) to which this member account belongs.
 */export const listReceivedGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListReceivedGrants" }, ListReceivedGrantsRequest, ListReceivedGrantsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the grants received for all accounts in the organization.
 */export const listReceivedGrantsForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListReceivedGrantsForOrganization" }, ListReceivedGrantsForOrganizationRequest, ListReceivedGrantsForOrganizationResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the licenses received for all accounts in the organization.
 */export const listReceivedLicensesForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListReceivedLicensesForOrganization" }, ListReceivedLicensesForOrganizationRequest, ListReceivedLicensesForOrganizationResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for the specified resource. For more information about tagging support in
 * License Manager, see the TagResource operation.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects the specified grant.
 */export const rejectGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.RejectGrant" }, RejectGrantRequest, RejectGrantResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tags to the specified resource. The following resources support
 * tagging in License Manager:
 * 
 * 
 * 
 * - Licenses
 * 
 * 
 * 
 * - Grants
 * 
 * 
 * 
 * - License configurations
 * 
 * 
 * 
 * - Report generators
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a license asset group.
 */export const updateLicenseAssetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateLicenseAssetGroup" }, UpdateLicenseAssetGroupRequest, UpdateLicenseAssetGroupResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a license asset ruleset.
 */export const updateLicenseAssetRuleset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateLicenseAssetRuleset" }, UpdateLicenseAssetRulesetRequest, UpdateLicenseAssetRulesetResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the attributes of an existing license configuration.
 */export const updateLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateLicenseConfiguration" }, UpdateLicenseConfigurationRequest, UpdateLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, ConflictException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a report generator.
 * 
 * 
 * After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.
 */export const updateLicenseManagerReportGenerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateLicenseManagerReportGenerator" }, UpdateLicenseManagerReportGeneratorRequest, UpdateLicenseManagerReportGeneratorResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks in the specified license. Check in a license when it is no longer in use.
 */export const checkInLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CheckInLicense" }, CheckInLicenseRequest, CheckInLicenseResponse, [AccessDeniedException, AuthorizationException, ConflictException, InvalidParameterValueException, RateLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a grant for the specified license. A grant shares the use of license
 * entitlements with a specific Amazon Web Services account, an organization, or an
 * organizational unit (OU). For more information, see Granted licenses in License Manager in the *License Manager User Guide*.
 */export const createGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateGrant" }, CreateGrantRequest, CreateGrantResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of the specified grant. For more information, see
 * Granted licenses in License Manager in the *License Manager User Guide*.
 */export const createGrantVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateGrantVersion" }, CreateGrantVersionRequest, CreateGrantVersionResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a license asset group.
 */export const createLicenseAssetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseAssetGroup" }, CreateLicenseAssetGroupRequest, CreateLicenseAssetGroupResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a report generator.
 */export const createLicenseManagerReportGenerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseManagerReportGenerator" }, CreateLicenseManagerReportGeneratorRequest, CreateLicenseManagerReportGeneratorResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information about the specified grant.
 */export const getGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetGrant" }, GetGrantRequest, GetGrantResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a license asset group.
 */export const getLicenseAssetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseAssetGroup" }, GetLicenseAssetGroupRequest, GetLicenseAssetGroupResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a license asset ruleset.
 */export const getLicenseAssetRuleset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseAssetRuleset" }, GetLicenseAssetRulesetRequest, GetLicenseAssetRulesetResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information about the specified license configuration.
 */export const getLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseConfiguration" }, GetLicenseConfigurationRequest, GetLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists assets for a license asset group.
 */export const listAssetsForLicenseAssetGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListAssetsForLicenseAssetGroup" }, ListAssetsForLicenseAssetGroupRequest, ListAssetsForLicenseAssetGroupResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resource associations for the specified license configuration.
 * 
 * 
 * Resource associations need not consume licenses from a license configuration.
 * For example, an AMI or a stopped instance might not consume a license (depending on
 * the license rules).
 */export const listAssociationsForLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListAssociationsForLicenseConfiguration" }, ListAssociationsForLicenseConfigurationRequest, ListAssociationsForLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, FilterLimitExceededException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the grants distributed for the specified license.
 */export const listDistributedGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListDistributedGrants" }, ListDistributedGrantsRequest, ListDistributedGrantsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the license configuration operations that failed.
 */export const listFailuresForLicenseConfigurationOperations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations" }, ListFailuresForLicenseConfigurationOperationsRequest, ListFailuresForLicenseConfigurationOperationsResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the license configurations for your account.
 */export const listLicenseConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseConfigurations" }, ListLicenseConfigurationsRequest, ListLicenseConfigurationsResponse, [AccessDeniedException, AuthorizationException, FilterLimitExceededException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists license configurations for an organization.
 */export const listLicenseConfigurationsForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseConfigurationsForOrganization" }, ListLicenseConfigurationsForOrganizationRequest, ListLicenseConfigurationsForOrganizationResponse, [AccessDeniedException, AuthorizationException, FilterLimitExceededException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the license type conversion tasks for your account.
 */export const listLicenseConversionTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListLicenseConversionTasks" }, ListLicenseConversionTasksRequest, ListLicenseConversionTasksResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your tokens.
 */export const listTokens = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListTokens" }, ListTokensRequest, ListTokensResponse, [AccessDeniedException, AuthorizationException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all license usage records for a license configuration, displaying license
 * consumption details by resource at a selected point in time. Use this action to audit the
 * current license consumption for any license inventory and configuration.
 */export const listUsageForLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListUsageForLicenseConfiguration" }, ListUsageForLicenseConfigurationRequest, ListUsageForLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, FilterLimitExceededException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks out the specified license for offline use.
 */export const checkoutBorrowLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CheckoutBorrowLicense" }, CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse, [AccessDeniedException, AuthorizationException, EntitlementNotAllowedException, InvalidParameterValueException, NoEntitlementsAllowedException, RateLimitExceededException, RedirectException, ResourceNotFoundException, ServerInternalException, UnsupportedDigitalSignatureMethodException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks out the specified license.
 * 
 * 
 * 
 * 
 * If the account that created the license is the same that is performing the check out, you must
 * specify the account as the beneficiary.
 */export const checkoutLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CheckoutLicense" }, CheckoutLicenseRequest, CheckoutLicenseResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, NoEntitlementsAllowedException, RateLimitExceededException, RedirectException, ResourceNotFoundException, ServerInternalException, UnsupportedDigitalSignatureMethodException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a license.
 */export const createLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicense" }, CreateLicenseRequest, CreateLicenseResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, RedirectException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a license configuration.
 * 
 * 
 * A license configuration is an abstraction of a customer license agreement that can be
 * consumed and enforced by License Manager. Components include specifications for the license
 * type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 * Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a
 * license must be associated with a host), and the number of licenses purchased and used.
 */export const createLicenseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseConfiguration" }, CreateLicenseConfigurationRequest, CreateLicenseConfigurationResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new license conversion task.
 */export const createLicenseConversionTaskForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseConversionTaskForResource" }, CreateLicenseConversionTaskForResourceRequest, CreateLicenseConversionTaskForResourceResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information about the specified license.
 */export const getLicense = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicense" }, GetLicenseRequest, GetLicenseResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified report generator.
 */export const getLicenseManagerReportGenerator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseManagerReportGenerator" }, GetLicenseManagerReportGeneratorRequest, GetLicenseManagerReportGeneratorResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ResourceNotFoundException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information about the usage of the specified license.
 */export const getLicenseUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetLicenseUsage" }, GetLicenseUsageRequest, GetLicenseUsageResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists received licenses.
 */export const listReceivedLicenses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListReceivedLicenses" }, ListReceivedLicensesRequest, ListReceivedLicensesResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ResourceLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or removes the specified license configurations for the specified Amazon Web Services resource.
 * 
 * 
 * You can update the license specifications of AMIs, instances, and hosts.
 * You cannot update the license specifications for launch templates and CloudFormation templates,
 * as they send license configurations to the operation that creates the resource.
 */export const updateLicenseSpecificationsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.UpdateLicenseSpecificationsForResource" }, UpdateLicenseSpecificationsForResourceRequest, UpdateLicenseSpecificationsForResourceResponse, [AccessDeniedException, AuthorizationException, ConflictException, InvalidParameterValueException, InvalidResourceStateException, LicenseUsageException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the License Manager settings for the current Region.
 */export const getServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.GetServiceSettings" }, GetServiceSettingsRequest, GetServiceSettingsResponse, [AccessDeniedException, AuthorizationException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists resources managed using Systems Manager inventory.
 */export const listResourceInventory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.ListResourceInventory" }, ListResourceInventoryRequest, ListResourceInventoryResponse, [AccessDeniedException, AuthorizationException, FailedDependencyException, FilterLimitExceededException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a license asset ruleset.
 */export const createLicenseAssetRuleset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/", method: "POST", sdkId: "License Manager", sigV4ServiceName: "license-manager", name: "AWSLicenseManager.CreateLicenseAssetRuleset" }, CreateLicenseAssetRulesetRequest, CreateLicenseAssetRulesetResponse, [AccessDeniedException, AuthorizationException, InvalidParameterValueException, RateLimitExceededException, ServerInternalException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
