import * as S from "effect/Schema"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const VersionLabels = S.Array(S.String);
export const ApplicationNamesList = S.Array(S.String);
export const VersionLabelsList = S.Array(S.String);
export const EnvironmentHealthAttributes = S.Array(S.String);
export const EnvironmentIdList = S.Array(S.String);
export const EnvironmentNamesList = S.Array(S.String);
export const InstancesHealthAttributes = S.Array(S.String);
export const AvailableSolutionStackNamesList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export const TagKeyList = S.Array(S.String);
export class AbortEnvironmentUpdateMessage extends S.Class<AbortEnvironmentUpdateMessage>("AbortEnvironmentUpdateMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export class ApplyEnvironmentManagedActionRequest extends S.Class<ApplyEnvironmentManagedActionRequest>("ApplyEnvironmentManagedActionRequest")({EnvironmentName: S.optional(S.String), EnvironmentId: S.optional(S.String), ActionId: S.String}) {}
export class AssociateEnvironmentOperationsRoleMessage extends S.Class<AssociateEnvironmentOperationsRoleMessage>("AssociateEnvironmentOperationsRoleMessage")({EnvironmentName: S.String, OperationsRole: S.String}) {}
export class CheckDNSAvailabilityMessage extends S.Class<CheckDNSAvailabilityMessage>("CheckDNSAvailabilityMessage")({CNAMEPrefix: S.String}) {}
export class ComposeEnvironmentsMessage extends S.Class<ComposeEnvironmentsMessage>("ComposeEnvironmentsMessage")({ApplicationName: S.optional(S.String), GroupName: S.optional(S.String), VersionLabels: S.optional(VersionLabels)}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({S3Bucket: S.optional(S.String), S3Key: S.optional(S.String)}) {}
export class ConfigurationOptionSetting extends S.Class<ConfigurationOptionSetting>("ConfigurationOptionSetting")({ResourceName: S.optional(S.String), Namespace: S.optional(S.String), OptionName: S.optional(S.String), Value: S.optional(S.String)}) {}
export const ConfigurationOptionSettingsList = S.Array(ConfigurationOptionSetting);
export const Tags = S.Array(Tag);
export class CreatePlatformVersionRequest extends S.Class<CreatePlatformVersionRequest>("CreatePlatformVersionRequest")({PlatformName: S.String, PlatformVersion: S.String, PlatformDefinitionBundle: S3Location, EnvironmentName: S.optional(S.String), OptionSettings: S.optional(ConfigurationOptionSettingsList), Tags: S.optional(Tags)}) {}
export class CreateStorageLocationResultMessage extends S.Class<CreateStorageLocationResultMessage>("CreateStorageLocationResultMessage")({S3Bucket: S.optional(S.String)}) {}
export class DeleteApplicationMessage extends S.Class<DeleteApplicationMessage>("DeleteApplicationMessage")({ApplicationName: S.String, TerminateEnvByForce: S.optional(S.Boolean)}) {}
export class DeleteApplicationVersionMessage extends S.Class<DeleteApplicationVersionMessage>("DeleteApplicationVersionMessage")({ApplicationName: S.String, VersionLabel: S.String, DeleteSourceBundle: S.optional(S.Boolean)}) {}
export class DeleteConfigurationTemplateMessage extends S.Class<DeleteConfigurationTemplateMessage>("DeleteConfigurationTemplateMessage")({ApplicationName: S.String, TemplateName: S.String}) {}
export class DeleteEnvironmentConfigurationMessage extends S.Class<DeleteEnvironmentConfigurationMessage>("DeleteEnvironmentConfigurationMessage")({ApplicationName: S.String, EnvironmentName: S.String}) {}
export class DeletePlatformVersionRequest extends S.Class<DeletePlatformVersionRequest>("DeletePlatformVersionRequest")({PlatformArn: S.optional(S.String)}) {}
export class DescribeApplicationsMessage extends S.Class<DescribeApplicationsMessage>("DescribeApplicationsMessage")({ApplicationNames: S.optional(ApplicationNamesList)}) {}
export class DescribeApplicationVersionsMessage extends S.Class<DescribeApplicationVersionsMessage>("DescribeApplicationVersionsMessage")({ApplicationName: S.optional(S.String), VersionLabels: S.optional(VersionLabelsList), MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class OptionSpecification extends S.Class<OptionSpecification>("OptionSpecification")({ResourceName: S.optional(S.String), Namespace: S.optional(S.String), OptionName: S.optional(S.String)}) {}
export const OptionsSpecifierList = S.Array(OptionSpecification);
export class DescribeConfigurationOptionsMessage extends S.Class<DescribeConfigurationOptionsMessage>("DescribeConfigurationOptionsMessage")({ApplicationName: S.optional(S.String), TemplateName: S.optional(S.String), EnvironmentName: S.optional(S.String), SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), Options: S.optional(OptionsSpecifierList)}) {}
export class DescribeConfigurationSettingsMessage extends S.Class<DescribeConfigurationSettingsMessage>("DescribeConfigurationSettingsMessage")({ApplicationName: S.String, TemplateName: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export class DescribeEnvironmentHealthRequest extends S.Class<DescribeEnvironmentHealthRequest>("DescribeEnvironmentHealthRequest")({EnvironmentName: S.optional(S.String), EnvironmentId: S.optional(S.String), AttributeNames: S.optional(EnvironmentHealthAttributes)}) {}
export class DescribeEnvironmentManagedActionHistoryRequest extends S.Class<DescribeEnvironmentManagedActionHistoryRequest>("DescribeEnvironmentManagedActionHistoryRequest")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), NextToken: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class DescribeEnvironmentManagedActionsRequest extends S.Class<DescribeEnvironmentManagedActionsRequest>("DescribeEnvironmentManagedActionsRequest")({EnvironmentName: S.optional(S.String), EnvironmentId: S.optional(S.String), Status: S.optional(S.String)}) {}
export class DescribeEnvironmentResourcesMessage extends S.Class<DescribeEnvironmentResourcesMessage>("DescribeEnvironmentResourcesMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export class DescribeEnvironmentsMessage extends S.Class<DescribeEnvironmentsMessage>("DescribeEnvironmentsMessage")({ApplicationName: S.optional(S.String), VersionLabel: S.optional(S.String), EnvironmentIds: S.optional(EnvironmentIdList), EnvironmentNames: S.optional(EnvironmentNamesList), IncludeDeleted: S.optional(S.Boolean), IncludedDeletedBackTo: S.optional(S.Date), MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeEventsMessage extends S.Class<DescribeEventsMessage>("DescribeEventsMessage")({ApplicationName: S.optional(S.String), VersionLabel: S.optional(S.String), TemplateName: S.optional(S.String), EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), PlatformArn: S.optional(S.String), RequestId: S.optional(S.String), Severity: S.optional(S.String), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeInstancesHealthRequest extends S.Class<DescribeInstancesHealthRequest>("DescribeInstancesHealthRequest")({EnvironmentName: S.optional(S.String), EnvironmentId: S.optional(S.String), AttributeNames: S.optional(InstancesHealthAttributes), NextToken: S.optional(S.String)}) {}
export class DescribePlatformVersionRequest extends S.Class<DescribePlatformVersionRequest>("DescribePlatformVersionRequest")({PlatformArn: S.optional(S.String)}) {}
export class DisassociateEnvironmentOperationsRoleMessage extends S.Class<DisassociateEnvironmentOperationsRoleMessage>("DisassociateEnvironmentOperationsRoleMessage")({EnvironmentName: S.String}) {}
export class ListTagsForResourceMessage extends S.Class<ListTagsForResourceMessage>("ListTagsForResourceMessage")({ResourceArn: S.String}) {}
export class RebuildEnvironmentMessage extends S.Class<RebuildEnvironmentMessage>("RebuildEnvironmentMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export class RequestEnvironmentInfoMessage extends S.Class<RequestEnvironmentInfoMessage>("RequestEnvironmentInfoMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), InfoType: S.String}) {}
export class RestartAppServerMessage extends S.Class<RestartAppServerMessage>("RestartAppServerMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export class RetrieveEnvironmentInfoMessage extends S.Class<RetrieveEnvironmentInfoMessage>("RetrieveEnvironmentInfoMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), InfoType: S.String}) {}
export class SwapEnvironmentCNAMEsMessage extends S.Class<SwapEnvironmentCNAMEsMessage>("SwapEnvironmentCNAMEsMessage")({SourceEnvironmentId: S.optional(S.String), SourceEnvironmentName: S.optional(S.String), DestinationEnvironmentId: S.optional(S.String), DestinationEnvironmentName: S.optional(S.String)}) {}
export class TerminateEnvironmentMessage extends S.Class<TerminateEnvironmentMessage>("TerminateEnvironmentMessage")({EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), TerminateResources: S.optional(S.Boolean), ForceTerminate: S.optional(S.Boolean)}) {}
export class UpdateApplicationMessage extends S.Class<UpdateApplicationMessage>("UpdateApplicationMessage")({ApplicationName: S.String, Description: S.optional(S.String)}) {}
export class MaxCountRule extends S.Class<MaxCountRule>("MaxCountRule")({Enabled: S.Boolean, MaxCount: S.optional(S.Number), DeleteSourceFromS3: S.optional(S.Boolean)}) {}
export class MaxAgeRule extends S.Class<MaxAgeRule>("MaxAgeRule")({Enabled: S.Boolean, MaxAgeInDays: S.optional(S.Number), DeleteSourceFromS3: S.optional(S.Boolean)}) {}
export class ApplicationVersionLifecycleConfig extends S.Class<ApplicationVersionLifecycleConfig>("ApplicationVersionLifecycleConfig")({MaxCountRule: S.optional(MaxCountRule), MaxAgeRule: S.optional(MaxAgeRule)}) {}
export class ApplicationResourceLifecycleConfig extends S.Class<ApplicationResourceLifecycleConfig>("ApplicationResourceLifecycleConfig")({ServiceRole: S.optional(S.String), VersionLifecycleConfig: S.optional(ApplicationVersionLifecycleConfig)}) {}
export class UpdateApplicationResourceLifecycleMessage extends S.Class<UpdateApplicationResourceLifecycleMessage>("UpdateApplicationResourceLifecycleMessage")({ApplicationName: S.String, ResourceLifecycleConfig: ApplicationResourceLifecycleConfig}) {}
export class UpdateApplicationVersionMessage extends S.Class<UpdateApplicationVersionMessage>("UpdateApplicationVersionMessage")({ApplicationName: S.String, VersionLabel: S.String, Description: S.optional(S.String)}) {}
export class UpdateConfigurationTemplateMessage extends S.Class<UpdateConfigurationTemplateMessage>("UpdateConfigurationTemplateMessage")({ApplicationName: S.String, TemplateName: S.String, Description: S.optional(S.String), OptionSettings: S.optional(ConfigurationOptionSettingsList), OptionsToRemove: S.optional(OptionsSpecifierList)}) {}
export class EnvironmentTier extends S.Class<EnvironmentTier>("EnvironmentTier")({Name: S.optional(S.String), Type: S.optional(S.String), Version: S.optional(S.String)}) {}
export class UpdateEnvironmentMessage extends S.Class<UpdateEnvironmentMessage>("UpdateEnvironmentMessage")({ApplicationName: S.optional(S.String), EnvironmentId: S.optional(S.String), EnvironmentName: S.optional(S.String), GroupName: S.optional(S.String), Description: S.optional(S.String), Tier: S.optional(EnvironmentTier), VersionLabel: S.optional(S.String), TemplateName: S.optional(S.String), SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), OptionSettings: S.optional(ConfigurationOptionSettingsList), OptionsToRemove: S.optional(OptionsSpecifierList)}) {}
export class UpdateTagsForResourceMessage extends S.Class<UpdateTagsForResourceMessage>("UpdateTagsForResourceMessage")({ResourceArn: S.String, TagsToAdd: S.optional(TagList), TagsToRemove: S.optional(TagKeyList)}) {}
export class ValidateConfigurationSettingsMessage extends S.Class<ValidateConfigurationSettingsMessage>("ValidateConfigurationSettingsMessage")({ApplicationName: S.String, TemplateName: S.optional(S.String), EnvironmentName: S.optional(S.String), OptionSettings: ConfigurationOptionSettingsList}) {}
export const SolutionStackFileTypeList = S.Array(S.String);
export const SearchFilterValues = S.Array(S.String);
export const PlatformFilterValueList = S.Array(S.String);
export class Listener extends S.Class<Listener>("Listener")({Protocol: S.optional(S.String), Port: S.optional(S.Number)}) {}
export const LoadBalancerListenersDescription = S.Array(Listener);
export class LoadBalancerDescription extends S.Class<LoadBalancerDescription>("LoadBalancerDescription")({LoadBalancerName: S.optional(S.String), Domain: S.optional(S.String), Listeners: S.optional(LoadBalancerListenersDescription)}) {}
export class EnvironmentResourcesDescription extends S.Class<EnvironmentResourcesDescription>("EnvironmentResourcesDescription")({LoadBalancer: S.optional(LoadBalancerDescription)}) {}
export class EnvironmentLink extends S.Class<EnvironmentLink>("EnvironmentLink")({LinkName: S.optional(S.String), EnvironmentName: S.optional(S.String)}) {}
export const EnvironmentLinks = S.Array(EnvironmentLink);
export class EnvironmentDescription extends S.Class<EnvironmentDescription>("EnvironmentDescription")({EnvironmentName: S.optional(S.String), EnvironmentId: S.optional(S.String), ApplicationName: S.optional(S.String), VersionLabel: S.optional(S.String), SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), TemplateName: S.optional(S.String), Description: S.optional(S.String), EndpointURL: S.optional(S.String), CNAME: S.optional(S.String), DateCreated: S.optional(S.Date), DateUpdated: S.optional(S.Date), Status: S.optional(S.String), AbortableOperationInProgress: S.optional(S.Boolean), Health: S.optional(S.String), HealthStatus: S.optional(S.String), Resources: S.optional(EnvironmentResourcesDescription), Tier: S.optional(EnvironmentTier), EnvironmentLinks: S.optional(EnvironmentLinks), EnvironmentArn: S.optional(S.String), OperationsRole: S.optional(S.String)}) {}
export const EnvironmentDescriptionsList = S.Array(EnvironmentDescription);
export class SourceBuildInformation extends S.Class<SourceBuildInformation>("SourceBuildInformation")({SourceType: S.String, SourceRepository: S.String, SourceLocation: S.String}) {}
export class BuildConfiguration extends S.Class<BuildConfiguration>("BuildConfiguration")({ArtifactName: S.optional(S.String), CodeBuildServiceRole: S.String, ComputeType: S.optional(S.String), Image: S.String, TimeoutInMinutes: S.optional(S.Number)}) {}
export class SourceConfiguration extends S.Class<SourceConfiguration>("SourceConfiguration")({ApplicationName: S.optional(S.String), TemplateName: S.optional(S.String)}) {}
export class ConfigurationSettingsDescription extends S.Class<ConfigurationSettingsDescription>("ConfigurationSettingsDescription")({SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), ApplicationName: S.optional(S.String), TemplateName: S.optional(S.String), Description: S.optional(S.String), EnvironmentName: S.optional(S.String), DeploymentStatus: S.optional(S.String), DateCreated: S.optional(S.Date), DateUpdated: S.optional(S.Date), OptionSettings: S.optional(ConfigurationOptionSettingsList)}) {}
export const ConfigurationSettingsDescriptionList = S.Array(ConfigurationSettingsDescription);
export const Causes = S.Array(S.String);
export class SolutionStackDescription extends S.Class<SolutionStackDescription>("SolutionStackDescription")({SolutionStackName: S.optional(S.String), PermittedFileTypes: S.optional(SolutionStackFileTypeList)}) {}
export const AvailableSolutionStackDetailsList = S.Array(SolutionStackDescription);
export class SearchFilter extends S.Class<SearchFilter>("SearchFilter")({Attribute: S.optional(S.String), Operator: S.optional(S.String), Values: S.optional(SearchFilterValues)}) {}
export const SearchFilters = S.Array(SearchFilter);
export class PlatformFilter extends S.Class<PlatformFilter>("PlatformFilter")({Type: S.optional(S.String), Operator: S.optional(S.String), Values: S.optional(PlatformFilterValueList)}) {}
export const PlatformFilters = S.Array(PlatformFilter);
export class ApplyEnvironmentManagedActionResult extends S.Class<ApplyEnvironmentManagedActionResult>("ApplyEnvironmentManagedActionResult")({ActionId: S.optional(S.String), ActionDescription: S.optional(S.String), ActionType: S.optional(S.String), Status: S.optional(S.String)}) {}
export class CheckDNSAvailabilityResultMessage extends S.Class<CheckDNSAvailabilityResultMessage>("CheckDNSAvailabilityResultMessage")({Available: S.optional(S.Boolean), FullyQualifiedCNAME: S.optional(S.String)}) {}
export class EnvironmentDescriptionsMessage extends S.Class<EnvironmentDescriptionsMessage>("EnvironmentDescriptionsMessage")({Environments: S.optional(EnvironmentDescriptionsList), NextToken: S.optional(S.String)}) {}
export class CreateApplicationVersionMessage extends S.Class<CreateApplicationVersionMessage>("CreateApplicationVersionMessage")({ApplicationName: S.String, VersionLabel: S.String, Description: S.optional(S.String), SourceBuildInformation: S.optional(SourceBuildInformation), SourceBundle: S.optional(S3Location), BuildConfiguration: S.optional(BuildConfiguration), AutoCreateApplication: S.optional(S.Boolean), Process: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class CreateConfigurationTemplateMessage extends S.Class<CreateConfigurationTemplateMessage>("CreateConfigurationTemplateMessage")({ApplicationName: S.String, TemplateName: S.String, SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), SourceConfiguration: S.optional(SourceConfiguration), EnvironmentId: S.optional(S.String), Description: S.optional(S.String), OptionSettings: S.optional(ConfigurationOptionSettingsList), Tags: S.optional(Tags)}) {}
export class CreateEnvironmentMessage extends S.Class<CreateEnvironmentMessage>("CreateEnvironmentMessage")({ApplicationName: S.String, EnvironmentName: S.optional(S.String), GroupName: S.optional(S.String), Description: S.optional(S.String), CNAMEPrefix: S.optional(S.String), Tier: S.optional(EnvironmentTier), Tags: S.optional(Tags), VersionLabel: S.optional(S.String), TemplateName: S.optional(S.String), SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), OptionSettings: S.optional(ConfigurationOptionSettingsList), OptionsToRemove: S.optional(OptionsSpecifierList), OperationsRole: S.optional(S.String)}) {}
export const SupportedTierList = S.Array(S.String);
export const SupportedAddonList = S.Array(S.String);
export class PlatformSummary extends S.Class<PlatformSummary>("PlatformSummary")({PlatformArn: S.optional(S.String), PlatformOwner: S.optional(S.String), PlatformStatus: S.optional(S.String), PlatformCategory: S.optional(S.String), OperatingSystemName: S.optional(S.String), OperatingSystemVersion: S.optional(S.String), SupportedTierList: S.optional(SupportedTierList), SupportedAddonList: S.optional(SupportedAddonList), PlatformLifecycleState: S.optional(S.String), PlatformVersion: S.optional(S.String), PlatformBranchName: S.optional(S.String), PlatformBranchLifecycleState: S.optional(S.String)}) {}
export class DeletePlatformVersionResult extends S.Class<DeletePlatformVersionResult>("DeletePlatformVersionResult")({PlatformSummary: S.optional(PlatformSummary)}) {}
export class ConfigurationSettingsDescriptions extends S.Class<ConfigurationSettingsDescriptions>("ConfigurationSettingsDescriptions")({ConfigurationSettings: S.optional(ConfigurationSettingsDescriptionList)}) {}
export class ListAvailableSolutionStacksResultMessage extends S.Class<ListAvailableSolutionStacksResultMessage>("ListAvailableSolutionStacksResultMessage")({SolutionStacks: S.optional(AvailableSolutionStackNamesList), SolutionStackDetails: S.optional(AvailableSolutionStackDetailsList)}) {}
export class ListPlatformBranchesRequest extends S.Class<ListPlatformBranchesRequest>("ListPlatformBranchesRequest")({Filters: S.optional(SearchFilters), MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPlatformVersionsRequest extends S.Class<ListPlatformVersionsRequest>("ListPlatformVersionsRequest")({Filters: S.optional(PlatformFilters), MaxRecords: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ResourceTagsDescriptionMessage extends S.Class<ResourceTagsDescriptionMessage>("ResourceTagsDescriptionMessage")({ResourceArn: S.optional(S.String), ResourceTags: S.optional(TagList)}) {}
export const ConfigurationTemplateNamesList = S.Array(S.String);
export class ApplicationDescription extends S.Class<ApplicationDescription>("ApplicationDescription")({ApplicationArn: S.optional(S.String), ApplicationName: S.optional(S.String), Description: S.optional(S.String), DateCreated: S.optional(S.Date), DateUpdated: S.optional(S.Date), Versions: S.optional(VersionLabelsList), ConfigurationTemplates: S.optional(ConfigurationTemplateNamesList), ResourceLifecycleConfig: S.optional(ApplicationResourceLifecycleConfig)}) {}
export class ApplicationDescriptionMessage extends S.Class<ApplicationDescriptionMessage>("ApplicationDescriptionMessage")({Application: S.optional(ApplicationDescription)}) {}
export class ApplicationResourceLifecycleDescriptionMessage extends S.Class<ApplicationResourceLifecycleDescriptionMessage>("ApplicationResourceLifecycleDescriptionMessage")({ApplicationName: S.optional(S.String), ResourceLifecycleConfig: S.optional(ApplicationResourceLifecycleConfig)}) {}
export class ApplicationVersionDescription extends S.Class<ApplicationVersionDescription>("ApplicationVersionDescription")({ApplicationVersionArn: S.optional(S.String), ApplicationName: S.optional(S.String), Description: S.optional(S.String), VersionLabel: S.optional(S.String), SourceBuildInformation: S.optional(SourceBuildInformation), BuildArn: S.optional(S.String), SourceBundle: S.optional(S3Location), DateCreated: S.optional(S.Date), DateUpdated: S.optional(S.Date), Status: S.optional(S.String)}) {}
export class ApplicationVersionDescriptionMessage extends S.Class<ApplicationVersionDescriptionMessage>("ApplicationVersionDescriptionMessage")({ApplicationVersion: S.optional(ApplicationVersionDescription)}) {}
export class ResourceQuota extends S.Class<ResourceQuota>("ResourceQuota")({Maximum: S.optional(S.Number)}) {}
export const ConfigurationOptionPossibleValues = S.Array(S.String);
export class Builder extends S.Class<Builder>("Builder")({ARN: S.optional(S.String)}) {}
export class ResourceQuotas extends S.Class<ResourceQuotas>("ResourceQuotas")({ApplicationQuota: S.optional(ResourceQuota), ApplicationVersionQuota: S.optional(ResourceQuota), EnvironmentQuota: S.optional(ResourceQuota), ConfigurationTemplateQuota: S.optional(ResourceQuota), CustomPlatformQuota: S.optional(ResourceQuota)}) {}
export const ApplicationDescriptionList = S.Array(ApplicationDescription);
export const ApplicationVersionDescriptionList = S.Array(ApplicationVersionDescription);
export class InstanceHealthSummary extends S.Class<InstanceHealthSummary>("InstanceHealthSummary")({NoData: S.optional(S.Number), Unknown: S.optional(S.Number), Pending: S.optional(S.Number), Ok: S.optional(S.Number), Info: S.optional(S.Number), Warning: S.optional(S.Number), Degraded: S.optional(S.Number), Severe: S.optional(S.Number)}) {}
export class ManagedActionHistoryItem extends S.Class<ManagedActionHistoryItem>("ManagedActionHistoryItem")({ActionId: S.optional(S.String), ActionType: S.optional(S.String), ActionDescription: S.optional(S.String), FailureType: S.optional(S.String), Status: S.optional(S.String), FailureDescription: S.optional(S.String), ExecutedTime: S.optional(S.Date), FinishedTime: S.optional(S.Date)}) {}
export const ManagedActionHistoryItems = S.Array(ManagedActionHistoryItem);
export class ManagedAction extends S.Class<ManagedAction>("ManagedAction")({ActionId: S.optional(S.String), ActionDescription: S.optional(S.String), ActionType: S.optional(S.String), Status: S.optional(S.String), WindowStartTime: S.optional(S.Date)}) {}
export const ManagedActions = S.Array(ManagedAction);
export class EventDescription extends S.Class<EventDescription>("EventDescription")({EventDate: S.optional(S.Date), Message: S.optional(S.String), ApplicationName: S.optional(S.String), VersionLabel: S.optional(S.String), TemplateName: S.optional(S.String), EnvironmentName: S.optional(S.String), PlatformArn: S.optional(S.String), RequestId: S.optional(S.String), Severity: S.optional(S.String)}) {}
export const EventDescriptionList = S.Array(EventDescription);
export const PlatformSummaryList = S.Array(PlatformSummary);
export class EnvironmentInfoDescription extends S.Class<EnvironmentInfoDescription>("EnvironmentInfoDescription")({InfoType: S.optional(S.String), Ec2InstanceId: S.optional(S.String), SampleTimestamp: S.optional(S.Date), Message: S.optional(S.String)}) {}
export const EnvironmentInfoDescriptionList = S.Array(EnvironmentInfoDescription);
export class ValidationMessage extends S.Class<ValidationMessage>("ValidationMessage")({Message: S.optional(S.String), Severity: S.optional(S.String), Namespace: S.optional(S.String), OptionName: S.optional(S.String)}) {}
export const ValidationMessagesList = S.Array(ValidationMessage);
export const LoadAverage = S.Array(S.Number);
export class CreatePlatformVersionResult extends S.Class<CreatePlatformVersionResult>("CreatePlatformVersionResult")({PlatformSummary: S.optional(PlatformSummary), Builder: S.optional(Builder)}) {}
export class DescribeAccountAttributesResult extends S.Class<DescribeAccountAttributesResult>("DescribeAccountAttributesResult")({ResourceQuotas: S.optional(ResourceQuotas)}) {}
export class ApplicationDescriptionsMessage extends S.Class<ApplicationDescriptionsMessage>("ApplicationDescriptionsMessage")({Applications: S.optional(ApplicationDescriptionList)}) {}
export class ApplicationVersionDescriptionsMessage extends S.Class<ApplicationVersionDescriptionsMessage>("ApplicationVersionDescriptionsMessage")({ApplicationVersions: S.optional(ApplicationVersionDescriptionList), NextToken: S.optional(S.String)}) {}
export class DescribeEnvironmentManagedActionHistoryResult extends S.Class<DescribeEnvironmentManagedActionHistoryResult>("DescribeEnvironmentManagedActionHistoryResult")({ManagedActionHistoryItems: S.optional(ManagedActionHistoryItems), NextToken: S.optional(S.String)}) {}
export class DescribeEnvironmentManagedActionsResult extends S.Class<DescribeEnvironmentManagedActionsResult>("DescribeEnvironmentManagedActionsResult")({ManagedActions: S.optional(ManagedActions)}) {}
export class EventDescriptionsMessage extends S.Class<EventDescriptionsMessage>("EventDescriptionsMessage")({Events: S.optional(EventDescriptionList), NextToken: S.optional(S.String)}) {}
export class ListPlatformVersionsResult extends S.Class<ListPlatformVersionsResult>("ListPlatformVersionsResult")({PlatformSummaryList: S.optional(PlatformSummaryList), NextToken: S.optional(S.String)}) {}
export class RetrieveEnvironmentInfoResultMessage extends S.Class<RetrieveEnvironmentInfoResultMessage>("RetrieveEnvironmentInfoResultMessage")({EnvironmentInfo: S.optional(EnvironmentInfoDescriptionList)}) {}
export class ConfigurationSettingsValidationMessages extends S.Class<ConfigurationSettingsValidationMessages>("ConfigurationSettingsValidationMessages")({Messages: S.optional(ValidationMessagesList)}) {}
export class OptionRestrictionRegex extends S.Class<OptionRestrictionRegex>("OptionRestrictionRegex")({Pattern: S.optional(S.String), Label: S.optional(S.String)}) {}
export class StatusCodes extends S.Class<StatusCodes>("StatusCodes")({Status2xx: S.optional(S.Number), Status3xx: S.optional(S.Number), Status4xx: S.optional(S.Number), Status5xx: S.optional(S.Number)}) {}
export class Latency extends S.Class<Latency>("Latency")({P999: S.optional(S.Number), P99: S.optional(S.Number), P95: S.optional(S.Number), P90: S.optional(S.Number), P85: S.optional(S.Number), P75: S.optional(S.Number), P50: S.optional(S.Number), P10: S.optional(S.Number)}) {}
export class AutoScalingGroup extends S.Class<AutoScalingGroup>("AutoScalingGroup")({Name: S.optional(S.String)}) {}
export const AutoScalingGroupList = S.Array(AutoScalingGroup);
export class Instance extends S.Class<Instance>("Instance")({Id: S.optional(S.String)}) {}
export const InstanceList = S.Array(Instance);
export class LaunchConfiguration extends S.Class<LaunchConfiguration>("LaunchConfiguration")({Name: S.optional(S.String)}) {}
export const LaunchConfigurationList = S.Array(LaunchConfiguration);
export class LaunchTemplate extends S.Class<LaunchTemplate>("LaunchTemplate")({Id: S.optional(S.String)}) {}
export const LaunchTemplateList = S.Array(LaunchTemplate);
export class LoadBalancer extends S.Class<LoadBalancer>("LoadBalancer")({Name: S.optional(S.String)}) {}
export const LoadBalancerList = S.Array(LoadBalancer);
export class Trigger extends S.Class<Trigger>("Trigger")({Name: S.optional(S.String)}) {}
export const TriggerList = S.Array(Trigger);
export class Queue extends S.Class<Queue>("Queue")({Name: S.optional(S.String), URL: S.optional(S.String)}) {}
export const QueueList = S.Array(Queue);
export class Deployment extends S.Class<Deployment>("Deployment")({VersionLabel: S.optional(S.String), DeploymentId: S.optional(S.Number), Status: S.optional(S.String), DeploymentTime: S.optional(S.Date)}) {}
export class PlatformProgrammingLanguage extends S.Class<PlatformProgrammingLanguage>("PlatformProgrammingLanguage")({Name: S.optional(S.String), Version: S.optional(S.String)}) {}
export const PlatformProgrammingLanguages = S.Array(PlatformProgrammingLanguage);
export class PlatformFramework extends S.Class<PlatformFramework>("PlatformFramework")({Name: S.optional(S.String), Version: S.optional(S.String)}) {}
export const PlatformFrameworks = S.Array(PlatformFramework);
export class CustomAmi extends S.Class<CustomAmi>("CustomAmi")({VirtualizationType: S.optional(S.String), ImageId: S.optional(S.String)}) {}
export const CustomAmiList = S.Array(CustomAmi);
export class ConfigurationOptionDescription extends S.Class<ConfigurationOptionDescription>("ConfigurationOptionDescription")({Namespace: S.optional(S.String), Name: S.optional(S.String), DefaultValue: S.optional(S.String), ChangeSeverity: S.optional(S.String), UserDefined: S.optional(S.Boolean), ValueType: S.optional(S.String), ValueOptions: S.optional(ConfigurationOptionPossibleValues), MinValue: S.optional(S.Number), MaxValue: S.optional(S.Number), MaxLength: S.optional(S.Number), Regex: S.optional(OptionRestrictionRegex)}) {}
export const ConfigurationOptionDescriptionsList = S.Array(ConfigurationOptionDescription);
export class ApplicationMetrics extends S.Class<ApplicationMetrics>("ApplicationMetrics")({Duration: S.optional(S.Number), RequestCount: S.optional(S.Number), StatusCodes: S.optional(StatusCodes), Latency: S.optional(Latency)}) {}
export class EnvironmentResourceDescription extends S.Class<EnvironmentResourceDescription>("EnvironmentResourceDescription")({EnvironmentName: S.optional(S.String), AutoScalingGroups: S.optional(AutoScalingGroupList), Instances: S.optional(InstanceList), LaunchConfigurations: S.optional(LaunchConfigurationList), LaunchTemplates: S.optional(LaunchTemplateList), LoadBalancers: S.optional(LoadBalancerList), Triggers: S.optional(TriggerList), Queues: S.optional(QueueList)}) {}
export class PlatformDescription extends S.Class<PlatformDescription>("PlatformDescription")({PlatformArn: S.optional(S.String), PlatformOwner: S.optional(S.String), PlatformName: S.optional(S.String), PlatformVersion: S.optional(S.String), SolutionStackName: S.optional(S.String), PlatformStatus: S.optional(S.String), DateCreated: S.optional(S.Date), DateUpdated: S.optional(S.Date), PlatformCategory: S.optional(S.String), Description: S.optional(S.String), Maintainer: S.optional(S.String), OperatingSystemName: S.optional(S.String), OperatingSystemVersion: S.optional(S.String), ProgrammingLanguages: S.optional(PlatformProgrammingLanguages), Frameworks: S.optional(PlatformFrameworks), CustomAmiList: S.optional(CustomAmiList), SupportedTierList: S.optional(SupportedTierList), SupportedAddonList: S.optional(SupportedAddonList), PlatformLifecycleState: S.optional(S.String), PlatformBranchName: S.optional(S.String), PlatformBranchLifecycleState: S.optional(S.String)}) {}
export class PlatformBranchSummary extends S.Class<PlatformBranchSummary>("PlatformBranchSummary")({PlatformName: S.optional(S.String), BranchName: S.optional(S.String), LifecycleState: S.optional(S.String), BranchOrder: S.optional(S.Number), SupportedTierList: S.optional(SupportedTierList)}) {}
export const PlatformBranchSummaryList = S.Array(PlatformBranchSummary);
export class CPUUtilization extends S.Class<CPUUtilization>("CPUUtilization")({User: S.optional(S.Number), Nice: S.optional(S.Number), System: S.optional(S.Number), Idle: S.optional(S.Number), IOWait: S.optional(S.Number), IRQ: S.optional(S.Number), SoftIRQ: S.optional(S.Number), Privileged: S.optional(S.Number)}) {}
export class CreateApplicationMessage extends S.Class<CreateApplicationMessage>("CreateApplicationMessage")({ApplicationName: S.String, Description: S.optional(S.String), ResourceLifecycleConfig: S.optional(ApplicationResourceLifecycleConfig), Tags: S.optional(Tags)}) {}
export class ConfigurationOptionsDescription extends S.Class<ConfigurationOptionsDescription>("ConfigurationOptionsDescription")({SolutionStackName: S.optional(S.String), PlatformArn: S.optional(S.String), Options: S.optional(ConfigurationOptionDescriptionsList)}) {}
export class DescribeEnvironmentHealthResult extends S.Class<DescribeEnvironmentHealthResult>("DescribeEnvironmentHealthResult")({EnvironmentName: S.optional(S.String), HealthStatus: S.optional(S.String), Status: S.optional(S.String), Color: S.optional(S.String), Causes: S.optional(Causes), ApplicationMetrics: S.optional(ApplicationMetrics), InstancesHealth: S.optional(InstanceHealthSummary), RefreshedAt: S.optional(S.Date)}) {}
export class EnvironmentResourceDescriptionsMessage extends S.Class<EnvironmentResourceDescriptionsMessage>("EnvironmentResourceDescriptionsMessage")({EnvironmentResources: S.optional(EnvironmentResourceDescription)}) {}
export class DescribePlatformVersionResult extends S.Class<DescribePlatformVersionResult>("DescribePlatformVersionResult")({PlatformDescription: S.optional(PlatformDescription)}) {}
export class ListPlatformBranchesResult extends S.Class<ListPlatformBranchesResult>("ListPlatformBranchesResult")({PlatformBranchSummaryList: S.optional(PlatformBranchSummaryList), NextToken: S.optional(S.String)}) {}
export class SystemStatus extends S.Class<SystemStatus>("SystemStatus")({CPUUtilization: S.optional(CPUUtilization), LoadAverage: S.optional(LoadAverage)}) {}
export class SingleInstanceHealth extends S.Class<SingleInstanceHealth>("SingleInstanceHealth")({InstanceId: S.optional(S.String), HealthStatus: S.optional(S.String), Color: S.optional(S.String), Causes: S.optional(Causes), LaunchedAt: S.optional(S.Date), ApplicationMetrics: S.optional(ApplicationMetrics), System: S.optional(SystemStatus), Deployment: S.optional(Deployment), AvailabilityZone: S.optional(S.String), InstanceType: S.optional(S.String)}) {}
export const InstanceHealthList = S.Array(SingleInstanceHealth);
export class DescribeInstancesHealthResult extends S.Class<DescribeInstancesHealthResult>("DescribeInstancesHealthResult")({InstanceHealthList: S.optional(InstanceHealthList), RefreshedAt: S.optional(S.Date), NextToken: S.optional(S.String)}) {}

//# Errors
export class InsufficientPrivilegesException extends S.TaggedError<InsufficientPrivilegesException>()("InsufficientPrivilegesException", {}) {};
export class OperationInProgressException extends S.TaggedError<OperationInProgressException>()("OperationInProgressException", {}) {};
export class TooManyBucketsException extends S.TaggedError<TooManyBucketsException>()("TooManyBucketsException", {}) {};
export class TooManyEnvironmentsException extends S.TaggedError<TooManyEnvironmentsException>()("TooManyEnvironmentsException", {}) {};
export class S3SubscriptionRequiredException extends S.TaggedError<S3SubscriptionRequiredException>()("S3SubscriptionRequiredException", {message: S.optional(S.String)}) {};
export class S3LocationNotInServiceRegionException extends S.TaggedError<S3LocationNotInServiceRegionException>()("S3LocationNotInServiceRegionException", {message: S.optional(S.String)}) {};
export class ElasticBeanstalkServiceException extends S.TaggedError<ElasticBeanstalkServiceException>()("ElasticBeanstalkServiceException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ResourceTypeNotSupportedException extends S.TaggedError<ResourceTypeNotSupportedException>()("ResourceTypeNotSupportedException", {}) {};
export class CodeBuildNotInServiceRegionException extends S.TaggedError<CodeBuildNotInServiceRegionException>()("CodeBuildNotInServiceRegionException", {message: S.optional(S.String)}) {};
export class TooManyConfigurationTemplatesException extends S.TaggedError<TooManyConfigurationTemplatesException>()("TooManyConfigurationTemplatesException", {message: S.optional(S.String)}) {};
export class SourceBundleDeletionException extends S.TaggedError<SourceBundleDeletionException>()("SourceBundleDeletionException", {message: S.optional(S.String)}) {};
export class PlatformVersionStillReferencedException extends S.TaggedError<PlatformVersionStillReferencedException>()("PlatformVersionStillReferencedException", {message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String)}) {};
export class ManagedActionInvalidStateException extends S.TaggedError<ManagedActionInvalidStateException>()("ManagedActionInvalidStateException", {message: S.optional(S.String)}) {};
export class TooManyApplicationsException extends S.TaggedError<TooManyApplicationsException>()("TooManyApplicationsException", {}) {};
export class TooManyPlatformsException extends S.TaggedError<TooManyPlatformsException>()("TooManyPlatformsException", {message: S.optional(S.String)}) {};
export class TooManyApplicationVersionsException extends S.TaggedError<TooManyApplicationVersionsException>()("TooManyApplicationVersionsException", {message: S.optional(S.String)}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 * uses the associated operations role for permissions to downstream services during subsequent
 * calls acting on this environment. For more information, see Operations roles in the
 * *AWS Elastic Beanstalk Developer Guide*.
 */export const associateEnvironmentOperationsRole = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.AssociateEnvironmentOperationsRole" }, AssociateEnvironmentOperationsRoleMessage, S.Struct({}), [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified configuration template.
 * 
 * 
 * 
 * 
 * When you launch an environment using a configuration template, the environment gets a
 * copy of the template. You can delete or modify the environment's copy of the template
 * without affecting the running environment.
 */export const deleteConfigurationTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DeleteConfigurationTemplate" }, DeleteConfigurationTemplateMessage, S.Struct({}), [OperationInProgressException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the draft configuration associated with the running environment.
 * 
 * 
 * Updating a running environment with any configuration changes creates a draft
 * configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update
 * fails. The `DeploymentStatus` for the draft configuration indicates whether the
 * deployment is in process or has failed. The draft configuration remains in existence until it
 * is deleted with this action.
 */export const deleteEnvironmentConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DeleteEnvironmentConfiguration" }, DeleteEnvironmentConfigurationMessage, S.Struct({}), []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns descriptions for existing environments.
 */export const describeEnvironments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEnvironments" }, DescribeEnvironmentsMessage, EnvironmentDescriptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses
 * the caller's permissions for permissions to downstream services during subsequent calls acting
 * on this environment. For more information, see Operations roles in the
 * *AWS Elastic Beanstalk Developer Guide*.
 */export const disassociateEnvironmentOperationsRole = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DisassociateEnvironmentOperationsRole" }, DisassociateEnvironmentOperationsRoleMessage, S.Struct({}), [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
 * load balancer, etc.) for a specified environment and forces a restart.
 */export const rebuildEnvironment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.RebuildEnvironment" }, RebuildEnvironmentMessage, S.Struct({}), [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Initiates a request to compile the specified type of information of the deployed
 * environment.
 * 
 * 
 * Setting the `InfoType` to `tail` compiles the last lines from
 * the application server log files of every Amazon EC2 instance in your environment.
 * 
 * 
 * Setting the `InfoType` to `bundle` compresses the application
 * server log files for every Amazon EC2 instance into a `.zip` file. Legacy and .NET
 * containers do not support bundle logs.
 * 
 * 
 * Use RetrieveEnvironmentInfo to obtain the set of logs.
 * 
 * 
 * Related Topics
 * 
 * 
 * 
 * - RetrieveEnvironmentInfo
 */export const requestEnvironmentInfo = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.RequestEnvironmentInfo" }, RequestEnvironmentInfoMessage, S.Struct({}), []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Causes the environment to restart the application container server running on each
 * Amazon EC2 instance.
 */export const restartAppServer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.RestartAppServer" }, RestartAppServerMessage, S.Struct({}), []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Swaps the CNAMEs of two environments.
 */export const swapEnvironmentCNAMEs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.SwapEnvironmentCNAMEs" }, SwapEnvironmentCNAMEsMessage, S.Struct({}), []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Cancels in-progress environment configuration update or application version
 * deployment.
 */export const abortEnvironmentUpdate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.AbortEnvironmentUpdate" }, AbortEnvironmentUpdateMessage, S.Struct({}), [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Checks if the specified CNAME is available.
 */export const checkDNSAvailability = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CheckDNSAvailability" }, CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Launches an AWS Elastic Beanstalk environment for the specified application using the specified
 * configuration.
 */export const createEnvironment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreateEnvironment" }, CreateEnvironmentMessage, EnvironmentDescription, [InsufficientPrivilegesException, TooManyEnvironmentsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 * by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 * first time you create an environment in a region. If the storage location already exists,
 * `CreateStorageLocation` still returns the bucket name but does not create a new
 * bucket.
 */export const createStorageLocation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreateStorageLocation" }, S.Struct({}), CreateStorageLocationResultMessage, [InsufficientPrivilegesException, S3SubscriptionRequiredException, TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified application along with all associated versions and
 * configurations. The application versions will not be deleted from your Amazon S3
 * bucket.
 * 
 * 
 * 
 * 
 * You cannot delete an application that has a running environment.
 */export const deleteApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DeleteApplication" }, DeleteApplicationMessage, S.Struct({}), [OperationInProgressException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a description of the settings for the specified configuration set, that is,
 * either a configuration template or the configuration set associated with a running
 * environment.
 * 
 * 
 * When describing the settings for the configuration set associated with a running
 * environment, it is possible to receive two sets of setting descriptions. One is the deployed
 * configuration set, and the other is a draft configuration of an environment that is either in
 * the process of deployment or that failed to deploy.
 * 
 * 
 * Related Topics
 * 
 * 
 * 
 * - DeleteEnvironmentConfiguration
 */export const describeConfigurationSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeConfigurationSettings" }, DescribeConfigurationSettingsMessage, ConfigurationSettingsDescriptions, [TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns a list of the available solution stack names, with the public version first and
 * then in reverse chronological order.
 */export const listAvailableSolutionStacks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ListAvailableSolutionStacks" }, S.Struct({}), ListAvailableSolutionStacksResultMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the specified application to have the specified properties.
 * 
 * 
 * 
 * 
 * If a property (for example, `description`) is not provided, the value
 * remains unchanged. To clear these properties, specify an empty string.
 */export const updateApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateApplication" }, UpdateApplicationMessage, ApplicationDescriptionMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Modifies lifecycle settings for an application.
 */export const updateApplicationResourceLifecycle = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateApplicationResourceLifecycle" }, UpdateApplicationResourceLifecycleMessage, ApplicationResourceLifecycleDescriptionMessage, [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the specified application version to have the specified properties.
 * 
 * 
 * 
 * 
 * If a property (for example, `description`) is not provided, the value
 * remains unchanged. To clear properties, specify an empty string.
 */export const updateApplicationVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateApplicationVersion" }, UpdateApplicationVersionMessage, ApplicationVersionDescriptionMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the specified configuration template to have the specified properties or
 * configuration option values.
 * 
 * 
 * 
 * 
 * If a property (for example, `ApplicationName`) is not provided, its value
 * remains unchanged. To clear such properties, specify an empty string.
 * 
 * 
 * 
 * 
 * Related Topics
 * 
 * 
 * 
 * - DescribeConfigurationOptions
 */export const updateConfigurationTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateConfigurationTemplate" }, UpdateConfigurationTemplateMessage, ConfigurationSettingsDescription, [InsufficientPrivilegesException, TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the environment description, deploys a new application version, updates the
 * configuration settings to an entirely new configuration template, or updates select
 * configuration option values in the running environment.
 * 
 * 
 * Attempting to update both the release and configuration is not allowed and AWS Elastic
 * Beanstalk returns an `InvalidParameterCombination` error.
 * 
 * 
 * When updating the configuration settings to a new template or individual settings, a
 * draft configuration is created and DescribeConfigurationSettings for this
 * environment returns two setting descriptions with different `DeploymentStatus`
 * values.
 */export const updateEnvironment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateEnvironment" }, UpdateEnvironmentMessage, EnvironmentDescription, [InsufficientPrivilegesException, TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Create or update a group of environments that each run a separate component of a single
 * application. Takes a list of version labels that specify application source bundles for each
 * of the environments to create or update. The name of each environment and other required
 * information must be included in the source bundles in an environment manifest named
 * `env.yaml`. See Compose Environments
 * for details.
 */export const composeEnvironments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ComposeEnvironments" }, ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage, [InsufficientPrivilegesException, TooManyEnvironmentsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk
 * application. You define application configuration settings in a configuration template. You
 * can then use the configuration template to deploy different versions of the application with
 * the same configuration settings.
 * 
 * 
 * Templates aren't associated with any environment. The `EnvironmentName`
 * response element is always `null`.
 * 
 * 
 * Related Topics
 * 
 * 
 * 
 * - DescribeConfigurationOptions
 * 
 * 
 * 
 * 
 * - DescribeConfigurationSettings
 * 
 * 
 * 
 * 
 * - ListAvailableSolutionStacks
 */export const createConfigurationTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreateConfigurationTemplate" }, CreateConfigurationTemplateMessage, ConfigurationSettingsDescription, [InsufficientPrivilegesException, TooManyBucketsException, TooManyConfigurationTemplatesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified version from the specified application.
 * 
 * 
 * 
 * 
 * You cannot delete an application version that is associated with a running
 * environment.
 */export const deleteApplicationVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DeleteApplicationVersion" }, DeleteApplicationVersionMessage, S.Struct({}), [InsufficientPrivilegesException, OperationInProgressException, S3LocationNotInServiceRegionException, SourceBundleDeletionException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes the specified version of a custom platform.
 */export const deletePlatformVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DeletePlatformVersion" }, DeletePlatformVersionRequest, DeletePlatformVersionResult, [ElasticBeanstalkServiceException, InsufficientPrivilegesException, OperationInProgressException, PlatformVersionStillReferencedException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS
 * account.
 * 
 * 
 * The result currently has one set of attributes—resource quotas.
 */export const describeAccountAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeAccountAttributes" }, S.Struct({}), DescribeAccountAttributesResult, [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns the descriptions of existing applications.
 */export const describeApplications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeApplications" }, DescribeApplicationsMessage, ApplicationDescriptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieve a list of application versions.
 */export const describeApplicationVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeApplicationVersions" }, DescribeApplicationVersionsMessage, ApplicationVersionDescriptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists an environment's completed and failed managed actions.
 */export const describeEnvironmentManagedActionHistory = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEnvironmentManagedActionHistory" }, DescribeEnvironmentManagedActionHistoryRequest, DescribeEnvironmentManagedActionHistoryResult, [ElasticBeanstalkServiceException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists an environment's upcoming and in-progress managed actions.
 */export const describeEnvironmentManagedActions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEnvironmentManagedActions" }, DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult, [ElasticBeanstalkServiceException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns list of event descriptions matching criteria up to the last 6 weeks.
 * 
 * 
 * 
 * 
 * This action returns the most recent 1,000 events from the specified
 * `NextToken`.
 */export const describeEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEvents" }, DescribeEventsMessage, EventDescriptionsMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists the platform versions available for your account in an AWS Region. Provides
 * summary information about each platform version. Compare to DescribePlatformVersion, which provides full details about a single platform
 * version.
 * 
 * 
 * For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk
 * Platforms Glossary.
 */export const listPlatformVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ListPlatformVersions" }, ListPlatformVersionsRequest, ListPlatformVersionsResult, [ElasticBeanstalkServiceException, InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.
 * 
 * 
 * Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 * Tagging Application
 * Resources.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ListTagsForResource" }, ListTagsForResourceMessage, ResourceTagsDescriptionMessage, [InsufficientPrivilegesException, ResourceNotFoundException, ResourceTypeNotSupportedException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieves the compiled information from a RequestEnvironmentInfo
 * request.
 * 
 * 
 * Related Topics
 * 
 * 
 * 
 * - RequestEnvironmentInfo
 */export const retrieveEnvironmentInfo = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.RetrieveEnvironmentInfo" }, RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: `TagsToAdd`
 * for tags to add or update, and `TagsToRemove`.
 * 
 * 
 * Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 * Tagging Application
 * Resources.
 * 
 * 
 * If you create a custom IAM user policy to control permission to this operation, specify
 * one of the following two virtual actions (or both) instead of the API operation name:
 * 
 * 
 * 
 * ### elasticbeanstalk:AddTags
 * 
 * 
 * 
 * Controls permission to call `UpdateTagsForResource` and pass a list of tags to add in the `TagsToAdd`
 * parameter.
 * 
 * 
 * 
 * 
 * ### elasticbeanstalk:RemoveTags
 * 
 * 
 * 
 * Controls permission to call `UpdateTagsForResource` and pass a list of tag keys to remove in the `TagsToRemove`
 * parameter.
 * 
 * 
 * 
 * 
 * 
 * For details about creating a custom user policy, see Creating a Custom User Policy.
 */export const updateTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.UpdateTagsForResource" }, UpdateTagsForResourceMessage, S.Struct({}), [InsufficientPrivilegesException, OperationInProgressException, ResourceNotFoundException, ResourceTypeNotSupportedException, TooManyTagsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Takes a set of configuration settings and either a configuration template or
 * environment, and determines whether those values are valid.
 * 
 * 
 * This action returns a list of messages indicating any errors or warnings associated
 * with the selection of option values.
 */export const validateConfigurationSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ValidateConfigurationSettings" }, ValidateConfigurationSettingsMessage, ConfigurationSettingsValidationMessages, [InsufficientPrivilegesException, TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Applies a scheduled managed action immediately. A managed action can be applied only if
 * its status is `Scheduled`. Get the status and action ID of a managed action with
 * DescribeEnvironmentManagedActions.
 */export const applyEnvironmentManagedAction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ApplyEnvironmentManagedAction" }, ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult, [ElasticBeanstalkServiceException, ManagedActionInvalidStateException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an application that has one configuration template named `default`
 * and no application versions.
 */export const createApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreateApplication" }, CreateApplicationMessage, ApplicationDescriptionMessage, [TooManyApplicationsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Create a new version of your custom platform.
 */export const createPlatformVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreatePlatformVersion" }, CreatePlatformVersionRequest, CreatePlatformVersionResult, [ElasticBeanstalkServiceException, InsufficientPrivilegesException, TooManyPlatformsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes the configuration options that are used in a particular configuration
 * template or environment, or that a specified solution stack defines. The description includes
 * the values the options, their default values, and an indication of the required action on a
 * running environment if an option value is changed.
 */export const describeConfigurationOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeConfigurationOptions" }, DescribeConfigurationOptionsMessage, ConfigurationOptionsDescription, [TooManyBucketsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns AWS resources for this environment.
 */export const describeEnvironmentResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEnvironmentResources" }, DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage, [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Describes a platform version. Provides full details. Compare to ListPlatformVersions, which provides summary information about a list of
 * platform versions.
 * 
 * 
 * For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk
 * Platforms Glossary.
 */export const describePlatformVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribePlatformVersion" }, DescribePlatformVersionRequest, DescribePlatformVersionResult, [ElasticBeanstalkServiceException, InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists the platform branches available for your account in an AWS Region. Provides
 * summary information about each platform branch.
 * 
 * 
 * For definitions of platform branch and other platform-related terms, see AWS Elastic Beanstalk
 * Platforms Glossary.
 */export const listPlatformBranches = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.ListPlatformBranches" }, ListPlatformBranchesRequest, ListPlatformBranchesResult, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates an application version for the specified application. You can create an
 * application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the
 * output of an AWS CodeBuild build as follows:
 * 
 * 
 * Specify a commit in an AWS CodeCommit repository with
 * `SourceBuildInformation`.
 * 
 * 
 * Specify a build in an AWS CodeBuild with `SourceBuildInformation` and
 * `BuildConfiguration`.
 * 
 * 
 * Specify a source bundle in S3 with `SourceBundle`
 * 
 * 
 * 
 * Omit both `SourceBuildInformation` and `SourceBundle` to use the
 * default sample application.
 * 
 * 
 * 
 * 
 * After you create an application version with a specified Amazon S3 bucket and key
 * location, you can't change that Amazon S3 location. If you change the Amazon S3 location,
 * you receive an exception when you attempt to launch an environment from the application
 * version.
 */export const createApplicationVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.CreateApplicationVersion" }, CreateApplicationVersionMessage, ApplicationVersionDescriptionMessage, [CodeBuildNotInServiceRegionException, InsufficientPrivilegesException, S3LocationNotInServiceRegionException, TooManyApplicationsException, TooManyApplicationVersionsException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns information about the overall health of the specified environment. The
 * **DescribeEnvironmentHealth** operation is only available with
 * AWS Elastic Beanstalk Enhanced Health.
 */export const describeEnvironmentHealth = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeEnvironmentHealth" }, DescribeEnvironmentHealthRequest, DescribeEnvironmentHealthResult, [ElasticBeanstalkServiceException, InvalidRequestException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Retrieves detailed information about the health of instances in your AWS Elastic
 * Beanstalk. This operation requires enhanced health
 * reporting.
 */export const describeInstancesHealth = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.DescribeInstancesHealth" }, DescribeInstancesHealthRequest, DescribeInstancesHealthResult, [ElasticBeanstalkServiceException, InvalidRequestException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Terminates the specified environment.
 */export const terminateEnvironment = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2010-12-01", uri: "/", method: "POST", sdkId: "Elastic Beanstalk", sigV4ServiceName: "elasticbeanstalk", name: "AWSElasticBeanstalkService.TerminateEnvironment" }, TerminateEnvironmentMessage, EnvironmentDescription, [InsufficientPrivilegesException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
