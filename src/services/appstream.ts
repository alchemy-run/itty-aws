import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CreateUsageReportSubscriptionRequest extends S.Class<CreateUsageReportSubscriptionRequest>("CreateUsageReportSubscriptionRequest")({}) {}
export class DeleteUsageReportSubscriptionRequest extends S.Class<DeleteUsageReportSubscriptionRequest>("DeleteUsageReportSubscriptionRequest")({}) {}
export class DeleteUsageReportSubscriptionResult extends S.Class<DeleteUsageReportSubscriptionResult>("DeleteUsageReportSubscriptionResult")({}) {}
export const StringList = S.Array(S.String);
export const Platforms = S.Array(S.String);
export const OrganizationalUnitDistinguishedNamesList = S.Array(S.String);
export const UsbDeviceFilterStrings = S.Array(S.String);
export const EmbedHostDomains = S.Array(S.String);
export const ArnList = S.Array(S.String);
export const DirectoryNameList = S.Array(S.String);
export const AwsAccountIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const AppBlockBuilderAttributes = S.Array(S.String);
export const ApplicationAttributes = S.Array(S.String);
export const FleetAttributes = S.Array(S.String);
export const StackAttributes = S.Array(S.String);
export const ThemeAttributes = S.Array(S.String);
export class AssociateAppBlockBuilderAppBlockRequest extends S.Class<AssociateAppBlockBuilderAppBlockRequest>("AssociateAppBlockBuilderAppBlockRequest")({AppBlockArn: S.String, AppBlockBuilderName: S.String}) {}
export class AssociateApplicationFleetRequest extends S.Class<AssociateApplicationFleetRequest>("AssociateApplicationFleetRequest")({FleetName: S.String, ApplicationArn: S.String}) {}
export class AssociateApplicationToEntitlementRequest extends S.Class<AssociateApplicationToEntitlementRequest>("AssociateApplicationToEntitlementRequest")({StackName: S.String, EntitlementName: S.String, ApplicationIdentifier: S.String}) {}
export class AssociateApplicationToEntitlementResult extends S.Class<AssociateApplicationToEntitlementResult>("AssociateApplicationToEntitlementResult")({}) {}
export class AssociateFleetRequest extends S.Class<AssociateFleetRequest>("AssociateFleetRequest")({FleetName: S.String, StackName: S.String}) {}
export class AssociateFleetResult extends S.Class<AssociateFleetResult>("AssociateFleetResult")({}) {}
export class AssociateSoftwareToImageBuilderRequest extends S.Class<AssociateSoftwareToImageBuilderRequest>("AssociateSoftwareToImageBuilderRequest")({ImageBuilderName: S.String, SoftwareNames: StringList}) {}
export class AssociateSoftwareToImageBuilderResult extends S.Class<AssociateSoftwareToImageBuilderResult>("AssociateSoftwareToImageBuilderResult")({}) {}
export class UserStackAssociation extends S.Class<UserStackAssociation>("UserStackAssociation")({StackName: S.String, UserName: S.String, AuthenticationType: S.String, SendEmailNotification: S.optional(S.Boolean)}) {}
export const UserStackAssociationList = S.Array(UserStackAssociation);
export class BatchDisassociateUserStackRequest extends S.Class<BatchDisassociateUserStackRequest>("BatchDisassociateUserStackRequest")({UserStackAssociations: UserStackAssociationList}) {}
export class CopyImageRequest extends S.Class<CopyImageRequest>("CopyImageRequest")({SourceImageName: S.String, DestinationImageName: S.String, DestinationRegion: S.String, DestinationImageDescription: S.optional(S.String)}) {}
export class CreateAppBlockBuilderStreamingURLRequest extends S.Class<CreateAppBlockBuilderStreamingURLRequest>("CreateAppBlockBuilderStreamingURLRequest")({AppBlockBuilderName: S.String, Validity: S.optional(S.Number)}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({S3Bucket: S.String, S3Key: S.optional(S.String)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class CreateApplicationRequest extends S.Class<CreateApplicationRequest>("CreateApplicationRequest")({Name: S.String, DisplayName: S.optional(S.String), Description: S.optional(S.String), IconS3Location: S3Location, LaunchPath: S.String, WorkingDirectory: S.optional(S.String), LaunchParameters: S.optional(S.String), Platforms: Platforms, InstanceFamilies: StringList, AppBlockArn: S.String, Tags: S.optional(Tags)}) {}
export class CreateExportImageTaskRequest extends S.Class<CreateExportImageTaskRequest>("CreateExportImageTaskRequest")({ImageName: S.String, AmiName: S.String, IamRoleArn: S.String, TagSpecifications: S.optional(Tags), AmiDescription: S.optional(S.String)}) {}
export const SubnetIdList = S.Array(S.String);
export const SecurityGroupIdList = S.Array(S.String);
export class VpcConfig extends S.Class<VpcConfig>("VpcConfig")({SubnetIds: S.optional(SubnetIdList), SecurityGroupIds: S.optional(SecurityGroupIdList)}) {}
export class DomainJoinInfo extends S.Class<DomainJoinInfo>("DomainJoinInfo")({DirectoryName: S.optional(S.String), OrganizationalUnitDistinguishedName: S.optional(S.String)}) {}
export class AccessEndpoint extends S.Class<AccessEndpoint>("AccessEndpoint")({EndpointType: S.String, VpceId: S.optional(S.String)}) {}
export const AccessEndpointList = S.Array(AccessEndpoint);
export class VolumeConfig extends S.Class<VolumeConfig>("VolumeConfig")({VolumeSizeInGb: S.optional(S.Number)}) {}
export class CreateImageBuilderRequest extends S.Class<CreateImageBuilderRequest>("CreateImageBuilderRequest")({Name: S.String, ImageName: S.optional(S.String), ImageArn: S.optional(S.String), InstanceType: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), VpcConfig: S.optional(VpcConfig), IamRoleArn: S.optional(S.String), EnableDefaultInternetAccess: S.optional(S.Boolean), DomainJoinInfo: S.optional(DomainJoinInfo), AppstreamAgentVersion: S.optional(S.String), Tags: S.optional(Tags), AccessEndpoints: S.optional(AccessEndpointList), RootVolumeConfig: S.optional(VolumeConfig), SoftwaresToInstall: S.optional(StringList), SoftwaresToUninstall: S.optional(StringList)}) {}
export class CreateImageBuilderStreamingURLRequest extends S.Class<CreateImageBuilderStreamingURLRequest>("CreateImageBuilderStreamingURLRequest")({Name: S.String, Validity: S.optional(S.Number)}) {}
export class CreateStreamingURLRequest extends S.Class<CreateStreamingURLRequest>("CreateStreamingURLRequest")({StackName: S.String, FleetName: S.String, UserId: S.String, ApplicationId: S.optional(S.String), Validity: S.optional(S.Number), SessionContext: S.optional(S.String)}) {}
export class CreateUpdatedImageRequest extends S.Class<CreateUpdatedImageRequest>("CreateUpdatedImageRequest")({existingImageName: S.String, newImageName: S.String, newImageDescription: S.optional(S.String), newImageDisplayName: S.optional(S.String), newImageTags: S.optional(Tags), dryRun: S.optional(S.Boolean)}) {}
export class CreateUsageReportSubscriptionResult extends S.Class<CreateUsageReportSubscriptionResult>("CreateUsageReportSubscriptionResult")({S3BucketName: S.optional(S.String), Schedule: S.optional(S.String)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({UserName: S.String, MessageAction: S.optional(S.String), FirstName: S.optional(S.String), LastName: S.optional(S.String), AuthenticationType: S.String}) {}
export class CreateUserResult extends S.Class<CreateUserResult>("CreateUserResult")({}) {}
export class DeleteAppBlockRequest extends S.Class<DeleteAppBlockRequest>("DeleteAppBlockRequest")({Name: S.String}) {}
export class DeleteAppBlockResult extends S.Class<DeleteAppBlockResult>("DeleteAppBlockResult")({}) {}
export class DeleteAppBlockBuilderRequest extends S.Class<DeleteAppBlockBuilderRequest>("DeleteAppBlockBuilderRequest")({Name: S.String}) {}
export class DeleteAppBlockBuilderResult extends S.Class<DeleteAppBlockBuilderResult>("DeleteAppBlockBuilderResult")({}) {}
export class DeleteApplicationRequest extends S.Class<DeleteApplicationRequest>("DeleteApplicationRequest")({Name: S.String}) {}
export class DeleteApplicationResult extends S.Class<DeleteApplicationResult>("DeleteApplicationResult")({}) {}
export class DeleteDirectoryConfigRequest extends S.Class<DeleteDirectoryConfigRequest>("DeleteDirectoryConfigRequest")({DirectoryName: S.String}) {}
export class DeleteDirectoryConfigResult extends S.Class<DeleteDirectoryConfigResult>("DeleteDirectoryConfigResult")({}) {}
export class DeleteEntitlementRequest extends S.Class<DeleteEntitlementRequest>("DeleteEntitlementRequest")({Name: S.String, StackName: S.String}) {}
export class DeleteEntitlementResult extends S.Class<DeleteEntitlementResult>("DeleteEntitlementResult")({}) {}
export class DeleteFleetRequest extends S.Class<DeleteFleetRequest>("DeleteFleetRequest")({Name: S.String}) {}
export class DeleteFleetResult extends S.Class<DeleteFleetResult>("DeleteFleetResult")({}) {}
export class DeleteImageRequest extends S.Class<DeleteImageRequest>("DeleteImageRequest")({Name: S.String}) {}
export class DeleteImageBuilderRequest extends S.Class<DeleteImageBuilderRequest>("DeleteImageBuilderRequest")({Name: S.String}) {}
export class DeleteImagePermissionsRequest extends S.Class<DeleteImagePermissionsRequest>("DeleteImagePermissionsRequest")({Name: S.String, SharedAccountId: S.String}) {}
export class DeleteImagePermissionsResult extends S.Class<DeleteImagePermissionsResult>("DeleteImagePermissionsResult")({}) {}
export class DeleteStackRequest extends S.Class<DeleteStackRequest>("DeleteStackRequest")({Name: S.String}) {}
export class DeleteStackResult extends S.Class<DeleteStackResult>("DeleteStackResult")({}) {}
export class DeleteThemeForStackRequest extends S.Class<DeleteThemeForStackRequest>("DeleteThemeForStackRequest")({StackName: S.String}) {}
export class DeleteThemeForStackResult extends S.Class<DeleteThemeForStackResult>("DeleteThemeForStackResult")({}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({UserName: S.String, AuthenticationType: S.String}) {}
export class DeleteUserResult extends S.Class<DeleteUserResult>("DeleteUserResult")({}) {}
export class DescribeAppBlockBuilderAppBlockAssociationsRequest extends S.Class<DescribeAppBlockBuilderAppBlockAssociationsRequest>("DescribeAppBlockBuilderAppBlockAssociationsRequest")({AppBlockArn: S.optional(S.String), AppBlockBuilderName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeAppBlockBuildersRequest extends S.Class<DescribeAppBlockBuildersRequest>("DescribeAppBlockBuildersRequest")({Names: S.optional(StringList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeAppBlocksRequest extends S.Class<DescribeAppBlocksRequest>("DescribeAppBlocksRequest")({Arns: S.optional(ArnList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeApplicationFleetAssociationsRequest extends S.Class<DescribeApplicationFleetAssociationsRequest>("DescribeApplicationFleetAssociationsRequest")({FleetName: S.optional(S.String), ApplicationArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeApplicationsRequest extends S.Class<DescribeApplicationsRequest>("DescribeApplicationsRequest")({Arns: S.optional(ArnList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeAppLicenseUsageRequest extends S.Class<DescribeAppLicenseUsageRequest>("DescribeAppLicenseUsageRequest")({BillingPeriod: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeDirectoryConfigsRequest extends S.Class<DescribeDirectoryConfigsRequest>("DescribeDirectoryConfigsRequest")({DirectoryNames: S.optional(DirectoryNameList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeEntitlementsRequest extends S.Class<DescribeEntitlementsRequest>("DescribeEntitlementsRequest")({Name: S.optional(S.String), StackName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeFleetsRequest extends S.Class<DescribeFleetsRequest>("DescribeFleetsRequest")({Names: S.optional(StringList), NextToken: S.optional(S.String)}) {}
export class DescribeImageBuildersRequest extends S.Class<DescribeImageBuildersRequest>("DescribeImageBuildersRequest")({Names: S.optional(StringList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeImagePermissionsRequest extends S.Class<DescribeImagePermissionsRequest>("DescribeImagePermissionsRequest")({Name: S.String, MaxResults: S.optional(S.Number), SharedAwsAccountIds: S.optional(AwsAccountIdList), NextToken: S.optional(S.String)}) {}
export class DescribeImagesRequest extends S.Class<DescribeImagesRequest>("DescribeImagesRequest")({Names: S.optional(StringList), Arns: S.optional(ArnList), Type: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeSessionsRequest extends S.Class<DescribeSessionsRequest>("DescribeSessionsRequest")({StackName: S.String, FleetName: S.String, UserId: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number), AuthenticationType: S.optional(S.String), InstanceId: S.optional(S.String)}) {}
export class DescribeSoftwareAssociationsRequest extends S.Class<DescribeSoftwareAssociationsRequest>("DescribeSoftwareAssociationsRequest")({AssociatedResource: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeStacksRequest extends S.Class<DescribeStacksRequest>("DescribeStacksRequest")({Names: S.optional(StringList), NextToken: S.optional(S.String)}) {}
export class DescribeThemeForStackRequest extends S.Class<DescribeThemeForStackRequest>("DescribeThemeForStackRequest")({StackName: S.String}) {}
export class DescribeUsageReportSubscriptionsRequest extends S.Class<DescribeUsageReportSubscriptionsRequest>("DescribeUsageReportSubscriptionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeUsersRequest extends S.Class<DescribeUsersRequest>("DescribeUsersRequest")({AuthenticationType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeUserStackAssociationsRequest extends S.Class<DescribeUserStackAssociationsRequest>("DescribeUserStackAssociationsRequest")({StackName: S.optional(S.String), UserName: S.optional(S.String), AuthenticationType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DisableUserRequest extends S.Class<DisableUserRequest>("DisableUserRequest")({UserName: S.String, AuthenticationType: S.String}) {}
export class DisableUserResult extends S.Class<DisableUserResult>("DisableUserResult")({}) {}
export class DisassociateAppBlockBuilderAppBlockRequest extends S.Class<DisassociateAppBlockBuilderAppBlockRequest>("DisassociateAppBlockBuilderAppBlockRequest")({AppBlockArn: S.String, AppBlockBuilderName: S.String}) {}
export class DisassociateAppBlockBuilderAppBlockResult extends S.Class<DisassociateAppBlockBuilderAppBlockResult>("DisassociateAppBlockBuilderAppBlockResult")({}) {}
export class DisassociateApplicationFleetRequest extends S.Class<DisassociateApplicationFleetRequest>("DisassociateApplicationFleetRequest")({FleetName: S.String, ApplicationArn: S.String}) {}
export class DisassociateApplicationFleetResult extends S.Class<DisassociateApplicationFleetResult>("DisassociateApplicationFleetResult")({}) {}
export class DisassociateApplicationFromEntitlementRequest extends S.Class<DisassociateApplicationFromEntitlementRequest>("DisassociateApplicationFromEntitlementRequest")({StackName: S.String, EntitlementName: S.String, ApplicationIdentifier: S.String}) {}
export class DisassociateApplicationFromEntitlementResult extends S.Class<DisassociateApplicationFromEntitlementResult>("DisassociateApplicationFromEntitlementResult")({}) {}
export class DisassociateFleetRequest extends S.Class<DisassociateFleetRequest>("DisassociateFleetRequest")({FleetName: S.String, StackName: S.String}) {}
export class DisassociateFleetResult extends S.Class<DisassociateFleetResult>("DisassociateFleetResult")({}) {}
export class DisassociateSoftwareFromImageBuilderRequest extends S.Class<DisassociateSoftwareFromImageBuilderRequest>("DisassociateSoftwareFromImageBuilderRequest")({ImageBuilderName: S.String, SoftwareNames: StringList}) {}
export class DisassociateSoftwareFromImageBuilderResult extends S.Class<DisassociateSoftwareFromImageBuilderResult>("DisassociateSoftwareFromImageBuilderResult")({}) {}
export class EnableUserRequest extends S.Class<EnableUserRequest>("EnableUserRequest")({UserName: S.String, AuthenticationType: S.String}) {}
export class EnableUserResult extends S.Class<EnableUserResult>("EnableUserResult")({}) {}
export class ExpireSessionRequest extends S.Class<ExpireSessionRequest>("ExpireSessionRequest")({SessionId: S.String}) {}
export class ExpireSessionResult extends S.Class<ExpireSessionResult>("ExpireSessionResult")({}) {}
export class GetExportImageTaskRequest extends S.Class<GetExportImageTaskRequest>("GetExportImageTaskRequest")({TaskId: S.optional(S.String)}) {}
export class ListAssociatedFleetsRequest extends S.Class<ListAssociatedFleetsRequest>("ListAssociatedFleetsRequest")({StackName: S.String, NextToken: S.optional(S.String)}) {}
export class ListAssociatedStacksRequest extends S.Class<ListAssociatedStacksRequest>("ListAssociatedStacksRequest")({FleetName: S.String, NextToken: S.optional(S.String)}) {}
export class ListEntitledApplicationsRequest extends S.Class<ListEntitledApplicationsRequest>("ListEntitledApplicationsRequest")({StackName: S.String, EntitlementName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class StartAppBlockBuilderRequest extends S.Class<StartAppBlockBuilderRequest>("StartAppBlockBuilderRequest")({Name: S.String}) {}
export class StartFleetRequest extends S.Class<StartFleetRequest>("StartFleetRequest")({Name: S.String}) {}
export class StartFleetResult extends S.Class<StartFleetResult>("StartFleetResult")({}) {}
export class StartImageBuilderRequest extends S.Class<StartImageBuilderRequest>("StartImageBuilderRequest")({Name: S.String, AppstreamAgentVersion: S.optional(S.String)}) {}
export class StartSoftwareDeploymentToImageBuilderRequest extends S.Class<StartSoftwareDeploymentToImageBuilderRequest>("StartSoftwareDeploymentToImageBuilderRequest")({ImageBuilderName: S.String, RetryFailedDeployments: S.optional(S.Boolean)}) {}
export class StartSoftwareDeploymentToImageBuilderResult extends S.Class<StartSoftwareDeploymentToImageBuilderResult>("StartSoftwareDeploymentToImageBuilderResult")({}) {}
export class StopAppBlockBuilderRequest extends S.Class<StopAppBlockBuilderRequest>("StopAppBlockBuilderRequest")({Name: S.String}) {}
export class StopFleetRequest extends S.Class<StopFleetRequest>("StopFleetRequest")({Name: S.String}) {}
export class StopFleetResult extends S.Class<StopFleetResult>("StopFleetResult")({}) {}
export class StopImageBuilderRequest extends S.Class<StopImageBuilderRequest>("StopImageBuilderRequest")({Name: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateAppBlockBuilderRequest extends S.Class<UpdateAppBlockBuilderRequest>("UpdateAppBlockBuilderRequest")({Name: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), Platform: S.optional(S.String), InstanceType: S.optional(S.String), VpcConfig: S.optional(VpcConfig), EnableDefaultInternetAccess: S.optional(S.Boolean), IamRoleArn: S.optional(S.String), AccessEndpoints: S.optional(AccessEndpointList), AttributesToDelete: S.optional(AppBlockBuilderAttributes)}) {}
export class UpdateApplicationRequest extends S.Class<UpdateApplicationRequest>("UpdateApplicationRequest")({Name: S.String, DisplayName: S.optional(S.String), Description: S.optional(S.String), IconS3Location: S.optional(S3Location), LaunchPath: S.optional(S.String), WorkingDirectory: S.optional(S.String), LaunchParameters: S.optional(S.String), AppBlockArn: S.optional(S.String), AttributesToDelete: S.optional(ApplicationAttributes)}) {}
export class ServiceAccountCredentials extends S.Class<ServiceAccountCredentials>("ServiceAccountCredentials")({AccountName: S.String, AccountPassword: S.String}) {}
export class CertificateBasedAuthProperties extends S.Class<CertificateBasedAuthProperties>("CertificateBasedAuthProperties")({Status: S.optional(S.String), CertificateAuthorityArn: S.optional(S.String)}) {}
export class UpdateDirectoryConfigRequest extends S.Class<UpdateDirectoryConfigRequest>("UpdateDirectoryConfigRequest")({DirectoryName: S.String, OrganizationalUnitDistinguishedNames: S.optional(OrganizationalUnitDistinguishedNamesList), ServiceAccountCredentials: S.optional(ServiceAccountCredentials), CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties)}) {}
export class EntitlementAttribute extends S.Class<EntitlementAttribute>("EntitlementAttribute")({Name: S.String, Value: S.String}) {}
export const EntitlementAttributeList = S.Array(EntitlementAttribute);
export class UpdateEntitlementRequest extends S.Class<UpdateEntitlementRequest>("UpdateEntitlementRequest")({Name: S.String, StackName: S.String, Description: S.optional(S.String), AppVisibility: S.optional(S.String), Attributes: S.optional(EntitlementAttributeList)}) {}
export class ComputeCapacity extends S.Class<ComputeCapacity>("ComputeCapacity")({DesiredInstances: S.optional(S.Number), DesiredSessions: S.optional(S.Number)}) {}
export class UpdateFleetRequest extends S.Class<UpdateFleetRequest>("UpdateFleetRequest")({ImageName: S.optional(S.String), ImageArn: S.optional(S.String), Name: S.optional(S.String), InstanceType: S.optional(S.String), ComputeCapacity: S.optional(ComputeCapacity), VpcConfig: S.optional(VpcConfig), MaxUserDurationInSeconds: S.optional(S.Number), DisconnectTimeoutInSeconds: S.optional(S.Number), DeleteVpcConfig: S.optional(S.Boolean), Description: S.optional(S.String), DisplayName: S.optional(S.String), EnableDefaultInternetAccess: S.optional(S.Boolean), DomainJoinInfo: S.optional(DomainJoinInfo), IdleDisconnectTimeoutInSeconds: S.optional(S.Number), AttributesToDelete: S.optional(FleetAttributes), IamRoleArn: S.optional(S.String), StreamView: S.optional(S.String), Platform: S.optional(S.String), MaxConcurrentSessions: S.optional(S.Number), UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings), SessionScriptS3Location: S.optional(S3Location), MaxSessionsPerInstance: S.optional(S.Number), RootVolumeConfig: S.optional(VolumeConfig)}) {}
export const DomainList = S.Array(S.String);
export class StorageConnector extends S.Class<StorageConnector>("StorageConnector")({ConnectorType: S.String, ResourceIdentifier: S.optional(S.String), Domains: S.optional(DomainList), DomainsRequireAdminConsent: S.optional(DomainList)}) {}
export const StorageConnectorList = S.Array(StorageConnector);
export class UserSetting extends S.Class<UserSetting>("UserSetting")({Action: S.String, Permission: S.String, MaximumLength: S.optional(S.Number)}) {}
export const UserSettingList = S.Array(UserSetting);
export class ApplicationSettings extends S.Class<ApplicationSettings>("ApplicationSettings")({Enabled: S.Boolean, SettingsGroup: S.optional(S.String)}) {}
export class StreamingExperienceSettings extends S.Class<StreamingExperienceSettings>("StreamingExperienceSettings")({PreferredProtocol: S.optional(S.String)}) {}
export class UpdateStackRequest extends S.Class<UpdateStackRequest>("UpdateStackRequest")({DisplayName: S.optional(S.String), Description: S.optional(S.String), Name: S.String, StorageConnectors: S.optional(StorageConnectorList), DeleteStorageConnectors: S.optional(S.Boolean), RedirectURL: S.optional(S.String), FeedbackURL: S.optional(S.String), AttributesToDelete: S.optional(StackAttributes), UserSettings: S.optional(UserSettingList), ApplicationSettings: S.optional(ApplicationSettings), AccessEndpoints: S.optional(AccessEndpointList), EmbedHostDomains: S.optional(EmbedHostDomains), StreamingExperienceSettings: S.optional(StreamingExperienceSettings)}) {}
export class ThemeFooterLink extends S.Class<ThemeFooterLink>("ThemeFooterLink")({DisplayName: S.optional(S.String), FooterLinkURL: S.optional(S.String)}) {}
export const ThemeFooterLinks = S.Array(ThemeFooterLink);
export class UpdateThemeForStackRequest extends S.Class<UpdateThemeForStackRequest>("UpdateThemeForStackRequest")({StackName: S.String, FooterLinks: S.optional(ThemeFooterLinks), TitleText: S.optional(S.String), ThemeStyling: S.optional(S.String), OrganizationLogoS3Location: S.optional(S3Location), FaviconS3Location: S.optional(S3Location), State: S.optional(S.String), AttributesToDelete: S.optional(ThemeAttributes)}) {}
export const FilterValues = S.Array(S.String);
export class ScriptDetails extends S.Class<ScriptDetails>("ScriptDetails")({ScriptS3Location: S3Location, ExecutablePath: S.String, ExecutableParameters: S.optional(S.String), TimeoutInSeconds: S.Number}) {}
export class RuntimeValidationConfig extends S.Class<RuntimeValidationConfig>("RuntimeValidationConfig")({IntendedInstanceType: S.optional(S.String)}) {}
export class ApplicationConfig extends S.Class<ApplicationConfig>("ApplicationConfig")({Name: S.String, DisplayName: S.optional(S.String), AbsoluteAppPath: S.String, AbsoluteIconPath: S.optional(S.String), AbsoluteManifestPath: S.optional(S.String), WorkingDirectory: S.optional(S.String), LaunchParameters: S.optional(S.String)}) {}
export const AppCatalogConfig = S.Array(ApplicationConfig);
export class AppBlockBuilderAppBlockAssociation extends S.Class<AppBlockBuilderAppBlockAssociation>("AppBlockBuilderAppBlockAssociation")({AppBlockArn: S.String, AppBlockBuilderName: S.String}) {}
export const AppBlockBuilderAppBlockAssociationsList = S.Array(AppBlockBuilderAppBlockAssociation);
export class ApplicationFleetAssociation extends S.Class<ApplicationFleetAssociation>("ApplicationFleetAssociation")({FleetName: S.String, ApplicationArn: S.String}) {}
export const ApplicationFleetAssociationList = S.Array(ApplicationFleetAssociation);
export const Metadata = S.Record({key: S.String, value: S.String});
export class Application extends S.Class<Application>("Application")({Name: S.optional(S.String), DisplayName: S.optional(S.String), IconURL: S.optional(S.String), LaunchPath: S.optional(S.String), LaunchParameters: S.optional(S.String), Enabled: S.optional(S.Boolean), Metadata: S.optional(Metadata), WorkingDirectory: S.optional(S.String), Description: S.optional(S.String), Arn: S.optional(S.String), AppBlockArn: S.optional(S.String), IconS3Location: S.optional(S3Location), Platforms: S.optional(Platforms), InstanceFamilies: S.optional(StringList), CreatedTime: S.optional(S.Date)}) {}
export const Applications = S.Array(Application);
export class ImageBuilderStateChangeReason extends S.Class<ImageBuilderStateChangeReason>("ImageBuilderStateChangeReason")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class NetworkAccessConfiguration extends S.Class<NetworkAccessConfiguration>("NetworkAccessConfiguration")({EniPrivateIpAddress: S.optional(S.String), EniIpv6Addresses: S.optional(StringList), EniId: S.optional(S.String)}) {}
export class ResourceError extends S.Class<ResourceError>("ResourceError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorTimestamp: S.optional(S.Date)}) {}
export const ResourceErrors = S.Array(ResourceError);
export class ImageBuilder extends S.Class<ImageBuilder>("ImageBuilder")({Name: S.String, Arn: S.optional(S.String), ImageArn: S.optional(S.String), Description: S.optional(S.String), DisplayName: S.optional(S.String), VpcConfig: S.optional(VpcConfig), InstanceType: S.optional(S.String), Platform: S.optional(S.String), IamRoleArn: S.optional(S.String), State: S.optional(S.String), StateChangeReason: S.optional(ImageBuilderStateChangeReason), CreatedTime: S.optional(S.Date), EnableDefaultInternetAccess: S.optional(S.Boolean), DomainJoinInfo: S.optional(DomainJoinInfo), NetworkAccessConfiguration: S.optional(NetworkAccessConfiguration), ImageBuilderErrors: S.optional(ResourceErrors), AppstreamAgentVersion: S.optional(S.String), AccessEndpoints: S.optional(AccessEndpointList), RootVolumeConfig: S.optional(VolumeConfig), LatestAppstreamAgentVersion: S.optional(S.String)}) {}
export const ImageBuilderList = S.Array(ImageBuilder);
export class ImageStateChangeReason extends S.Class<ImageStateChangeReason>("ImageStateChangeReason")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class ImagePermissions extends S.Class<ImagePermissions>("ImagePermissions")({allowFleet: S.optional(S.Boolean), allowImageBuilder: S.optional(S.Boolean)}) {}
export class Image extends S.Class<Image>("Image")({Name: S.String, Arn: S.optional(S.String), BaseImageArn: S.optional(S.String), DisplayName: S.optional(S.String), State: S.optional(S.String), Visibility: S.optional(S.String), ImageBuilderSupported: S.optional(S.Boolean), ImageBuilderName: S.optional(S.String), Platform: S.optional(S.String), Description: S.optional(S.String), StateChangeReason: S.optional(ImageStateChangeReason), Applications: S.optional(Applications), CreatedTime: S.optional(S.Date), PublicBaseImageReleasedDate: S.optional(S.Date), AppstreamAgentVersion: S.optional(S.String), ImagePermissions: S.optional(ImagePermissions), ImageErrors: S.optional(ResourceErrors), LatestAppstreamAgentVersion: S.optional(S.String), SupportedInstanceFamilies: S.optional(StringList), DynamicAppProvidersEnabled: S.optional(S.String), ImageSharedWithOthers: S.optional(S.String), ManagedSoftwareIncluded: S.optional(S.Boolean), ImageType: S.optional(S.String)}) {}
export const ImageList = S.Array(Image);
export class Filter extends S.Class<Filter>("Filter")({Name: S.String, Values: FilterValues}) {}
export const Filters = S.Array(Filter);
export class BatchAssociateUserStackRequest extends S.Class<BatchAssociateUserStackRequest>("BatchAssociateUserStackRequest")({UserStackAssociations: UserStackAssociationList}) {}
export class CopyImageResponse extends S.Class<CopyImageResponse>("CopyImageResponse")({DestinationImageName: S.optional(S.String)}) {}
export class CreateAppBlockRequest extends S.Class<CreateAppBlockRequest>("CreateAppBlockRequest")({Name: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), SourceS3Location: S3Location, SetupScriptDetails: S.optional(ScriptDetails), Tags: S.optional(Tags), PostSetupScriptDetails: S.optional(ScriptDetails), PackagingType: S.optional(S.String)}) {}
export class CreateAppBlockBuilderRequest extends S.Class<CreateAppBlockBuilderRequest>("CreateAppBlockBuilderRequest")({Name: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), Tags: S.optional(Tags), Platform: S.String, InstanceType: S.String, VpcConfig: VpcConfig, EnableDefaultInternetAccess: S.optional(S.Boolean), IamRoleArn: S.optional(S.String), AccessEndpoints: S.optional(AccessEndpointList)}) {}
export class CreateAppBlockBuilderStreamingURLResult extends S.Class<CreateAppBlockBuilderStreamingURLResult>("CreateAppBlockBuilderStreamingURLResult")({StreamingURL: S.optional(S.String), Expires: S.optional(S.Date)}) {}
export class CreateDirectoryConfigRequest extends S.Class<CreateDirectoryConfigRequest>("CreateDirectoryConfigRequest")({DirectoryName: S.String, OrganizationalUnitDistinguishedNames: OrganizationalUnitDistinguishedNamesList, ServiceAccountCredentials: S.optional(ServiceAccountCredentials), CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties)}) {}
export class CreateEntitlementRequest extends S.Class<CreateEntitlementRequest>("CreateEntitlementRequest")({Name: S.String, StackName: S.String, Description: S.optional(S.String), AppVisibility: S.String, Attributes: EntitlementAttributeList}) {}
export class CreateFleetRequest extends S.Class<CreateFleetRequest>("CreateFleetRequest")({Name: S.String, ImageName: S.optional(S.String), ImageArn: S.optional(S.String), InstanceType: S.String, FleetType: S.optional(S.String), ComputeCapacity: S.optional(ComputeCapacity), VpcConfig: S.optional(VpcConfig), MaxUserDurationInSeconds: S.optional(S.Number), DisconnectTimeoutInSeconds: S.optional(S.Number), Description: S.optional(S.String), DisplayName: S.optional(S.String), EnableDefaultInternetAccess: S.optional(S.Boolean), DomainJoinInfo: S.optional(DomainJoinInfo), Tags: S.optional(Tags), IdleDisconnectTimeoutInSeconds: S.optional(S.Number), IamRoleArn: S.optional(S.String), StreamView: S.optional(S.String), Platform: S.optional(S.String), MaxConcurrentSessions: S.optional(S.Number), UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings), SessionScriptS3Location: S.optional(S3Location), MaxSessionsPerInstance: S.optional(S.Number), RootVolumeConfig: S.optional(VolumeConfig)}) {}
export class CreateImageBuilderStreamingURLResult extends S.Class<CreateImageBuilderStreamingURLResult>("CreateImageBuilderStreamingURLResult")({StreamingURL: S.optional(S.String), Expires: S.optional(S.Date)}) {}
export class CreateImportedImageRequest extends S.Class<CreateImportedImageRequest>("CreateImportedImageRequest")({Name: S.String, SourceAmiId: S.String, IamRoleArn: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), Tags: S.optional(Tags), RuntimeValidationConfig: S.optional(RuntimeValidationConfig), AgentSoftwareVersion: S.optional(S.String), AppCatalogConfig: S.optional(AppCatalogConfig), DryRun: S.optional(S.Boolean)}) {}
export class CreateStackRequest extends S.Class<CreateStackRequest>("CreateStackRequest")({Name: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), StorageConnectors: S.optional(StorageConnectorList), RedirectURL: S.optional(S.String), FeedbackURL: S.optional(S.String), UserSettings: S.optional(UserSettingList), ApplicationSettings: S.optional(ApplicationSettings), Tags: S.optional(Tags), AccessEndpoints: S.optional(AccessEndpointList), EmbedHostDomains: S.optional(EmbedHostDomains), StreamingExperienceSettings: S.optional(StreamingExperienceSettings)}) {}
export class CreateStreamingURLResult extends S.Class<CreateStreamingURLResult>("CreateStreamingURLResult")({StreamingURL: S.optional(S.String), Expires: S.optional(S.Date)}) {}
export class CreateThemeForStackRequest extends S.Class<CreateThemeForStackRequest>("CreateThemeForStackRequest")({StackName: S.String, FooterLinks: S.optional(ThemeFooterLinks), TitleText: S.String, ThemeStyling: S.String, OrganizationLogoS3Location: S3Location, FaviconS3Location: S3Location}) {}
export class DeleteImageResult extends S.Class<DeleteImageResult>("DeleteImageResult")({Image: S.optional(Image)}) {}
export class DeleteImageBuilderResult extends S.Class<DeleteImageBuilderResult>("DeleteImageBuilderResult")({ImageBuilder: S.optional(ImageBuilder)}) {}
export class DescribeAppBlockBuilderAppBlockAssociationsResult extends S.Class<DescribeAppBlockBuilderAppBlockAssociationsResult>("DescribeAppBlockBuilderAppBlockAssociationsResult")({AppBlockBuilderAppBlockAssociations: S.optional(AppBlockBuilderAppBlockAssociationsList), NextToken: S.optional(S.String)}) {}
export class DescribeApplicationFleetAssociationsResult extends S.Class<DescribeApplicationFleetAssociationsResult>("DescribeApplicationFleetAssociationsResult")({ApplicationFleetAssociations: S.optional(ApplicationFleetAssociationList), NextToken: S.optional(S.String)}) {}
export class DescribeApplicationsResult extends S.Class<DescribeApplicationsResult>("DescribeApplicationsResult")({Applications: S.optional(Applications), NextToken: S.optional(S.String)}) {}
export class DescribeImageBuildersResult extends S.Class<DescribeImageBuildersResult>("DescribeImageBuildersResult")({ImageBuilders: S.optional(ImageBuilderList), NextToken: S.optional(S.String)}) {}
export class DescribeImagesResult extends S.Class<DescribeImagesResult>("DescribeImagesResult")({Images: S.optional(ImageList), NextToken: S.optional(S.String)}) {}
export class DescribeUserStackAssociationsResult extends S.Class<DescribeUserStackAssociationsResult>("DescribeUserStackAssociationsResult")({UserStackAssociations: S.optional(UserStackAssociationList), NextToken: S.optional(S.String)}) {}
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const ErrorDetailsList = S.Array(ErrorDetails);
export class ExportImageTask extends S.Class<ExportImageTask>("ExportImageTask")({TaskId: S.String, ImageArn: S.String, AmiName: S.String, CreatedDate: S.Date, AmiDescription: S.optional(S.String), State: S.optional(S.String), AmiId: S.optional(S.String), TagSpecifications: S.optional(Tags), ErrorDetails: S.optional(ErrorDetailsList)}) {}
export class GetExportImageTaskResult extends S.Class<GetExportImageTaskResult>("GetExportImageTaskResult")({ExportImageTask: S.optional(ExportImageTask)}) {}
export class ListAssociatedFleetsResult extends S.Class<ListAssociatedFleetsResult>("ListAssociatedFleetsResult")({Names: S.optional(StringList), NextToken: S.optional(S.String)}) {}
export class ListAssociatedStacksResult extends S.Class<ListAssociatedStacksResult>("ListAssociatedStacksResult")({Names: S.optional(StringList), NextToken: S.optional(S.String)}) {}
export class ListExportImageTasksRequest extends S.Class<ListExportImageTasksRequest>("ListExportImageTasksRequest")({Filters: S.optional(Filters), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class AppBlockBuilderStateChangeReason extends S.Class<AppBlockBuilderStateChangeReason>("AppBlockBuilderStateChangeReason")({Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export class AppBlockBuilder extends S.Class<AppBlockBuilder>("AppBlockBuilder")({Arn: S.String, Name: S.String, DisplayName: S.optional(S.String), Description: S.optional(S.String), Platform: S.String, InstanceType: S.String, EnableDefaultInternetAccess: S.optional(S.Boolean), IamRoleArn: S.optional(S.String), VpcConfig: VpcConfig, State: S.String, CreatedTime: S.optional(S.Date), AppBlockBuilderErrors: S.optional(ResourceErrors), StateChangeReason: S.optional(AppBlockBuilderStateChangeReason), AccessEndpoints: S.optional(AccessEndpointList)}) {}
export class StartAppBlockBuilderResult extends S.Class<StartAppBlockBuilderResult>("StartAppBlockBuilderResult")({AppBlockBuilder: S.optional(AppBlockBuilder)}) {}
export class StartImageBuilderResult extends S.Class<StartImageBuilderResult>("StartImageBuilderResult")({ImageBuilder: S.optional(ImageBuilder)}) {}
export class StopAppBlockBuilderResult extends S.Class<StopAppBlockBuilderResult>("StopAppBlockBuilderResult")({AppBlockBuilder: S.optional(AppBlockBuilder)}) {}
export class StopImageBuilderResult extends S.Class<StopImageBuilderResult>("StopImageBuilderResult")({ImageBuilder: S.optional(ImageBuilder)}) {}
export class UpdateAppBlockBuilderResult extends S.Class<UpdateAppBlockBuilderResult>("UpdateAppBlockBuilderResult")({AppBlockBuilder: S.optional(AppBlockBuilder)}) {}
export class UpdateApplicationResult extends S.Class<UpdateApplicationResult>("UpdateApplicationResult")({Application: S.optional(Application)}) {}
export class DirectoryConfig extends S.Class<DirectoryConfig>("DirectoryConfig")({DirectoryName: S.String, OrganizationalUnitDistinguishedNames: S.optional(OrganizationalUnitDistinguishedNamesList), ServiceAccountCredentials: S.optional(ServiceAccountCredentials), CreatedTime: S.optional(S.Date), CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties)}) {}
export class UpdateDirectoryConfigResult extends S.Class<UpdateDirectoryConfigResult>("UpdateDirectoryConfigResult")({DirectoryConfig: S.optional(DirectoryConfig)}) {}
export class Entitlement extends S.Class<Entitlement>("Entitlement")({Name: S.String, StackName: S.String, Description: S.optional(S.String), AppVisibility: S.String, Attributes: EntitlementAttributeList, CreatedTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class UpdateEntitlementResult extends S.Class<UpdateEntitlementResult>("UpdateEntitlementResult")({Entitlement: S.optional(Entitlement)}) {}
export class ComputeCapacityStatus extends S.Class<ComputeCapacityStatus>("ComputeCapacityStatus")({Desired: S.Number, Running: S.optional(S.Number), InUse: S.optional(S.Number), Available: S.optional(S.Number), DesiredUserSessions: S.optional(S.Number), AvailableUserSessions: S.optional(S.Number), ActiveUserSessions: S.optional(S.Number), ActualUserSessions: S.optional(S.Number)}) {}
export class FleetError extends S.Class<FleetError>("FleetError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const FleetErrors = S.Array(FleetError);
export class Fleet extends S.Class<Fleet>("Fleet")({Arn: S.String, Name: S.String, DisplayName: S.optional(S.String), Description: S.optional(S.String), ImageName: S.optional(S.String), ImageArn: S.optional(S.String), InstanceType: S.String, FleetType: S.optional(S.String), ComputeCapacityStatus: ComputeCapacityStatus, MaxUserDurationInSeconds: S.optional(S.Number), DisconnectTimeoutInSeconds: S.optional(S.Number), State: S.String, VpcConfig: S.optional(VpcConfig), CreatedTime: S.optional(S.Date), FleetErrors: S.optional(FleetErrors), EnableDefaultInternetAccess: S.optional(S.Boolean), DomainJoinInfo: S.optional(DomainJoinInfo), IdleDisconnectTimeoutInSeconds: S.optional(S.Number), IamRoleArn: S.optional(S.String), StreamView: S.optional(S.String), Platform: S.optional(S.String), MaxConcurrentSessions: S.optional(S.Number), UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings), SessionScriptS3Location: S.optional(S3Location), MaxSessionsPerInstance: S.optional(S.Number), RootVolumeConfig: S.optional(VolumeConfig)}) {}
export class UpdateFleetResult extends S.Class<UpdateFleetResult>("UpdateFleetResult")({Fleet: S.optional(Fleet)}) {}
export class UpdateImagePermissionsRequest extends S.Class<UpdateImagePermissionsRequest>("UpdateImagePermissionsRequest")({Name: S.String, SharedAccountId: S.String, ImagePermissions: ImagePermissions}) {}
export class UpdateImagePermissionsResult extends S.Class<UpdateImagePermissionsResult>("UpdateImagePermissionsResult")({}) {}
export class StackError extends S.Class<StackError>("StackError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const StackErrors = S.Array(StackError);
export class ApplicationSettingsResponse extends S.Class<ApplicationSettingsResponse>("ApplicationSettingsResponse")({Enabled: S.optional(S.Boolean), SettingsGroup: S.optional(S.String), S3BucketName: S.optional(S.String)}) {}
export class Stack extends S.Class<Stack>("Stack")({Arn: S.optional(S.String), Name: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), CreatedTime: S.optional(S.Date), StorageConnectors: S.optional(StorageConnectorList), RedirectURL: S.optional(S.String), FeedbackURL: S.optional(S.String), StackErrors: S.optional(StackErrors), UserSettings: S.optional(UserSettingList), ApplicationSettings: S.optional(ApplicationSettingsResponse), AccessEndpoints: S.optional(AccessEndpointList), EmbedHostDomains: S.optional(EmbedHostDomains), StreamingExperienceSettings: S.optional(StreamingExperienceSettings)}) {}
export class UpdateStackResult extends S.Class<UpdateStackResult>("UpdateStackResult")({Stack: S.optional(Stack)}) {}
export class Theme extends S.Class<Theme>("Theme")({StackName: S.optional(S.String), State: S.optional(S.String), ThemeTitleText: S.optional(S.String), ThemeStyling: S.optional(S.String), ThemeFooterLinks: S.optional(ThemeFooterLinks), ThemeOrganizationLogoURL: S.optional(S.String), ThemeFaviconURL: S.optional(S.String), CreatedTime: S.optional(S.Date)}) {}
export class UpdateThemeForStackResult extends S.Class<UpdateThemeForStackResult>("UpdateThemeForStackResult")({Theme: S.optional(Theme)}) {}
export class UserStackAssociationError extends S.Class<UserStackAssociationError>("UserStackAssociationError")({UserStackAssociation: S.optional(UserStackAssociation), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const UserStackAssociationErrorList = S.Array(UserStackAssociationError);
export class AppBlock extends S.Class<AppBlock>("AppBlock")({Name: S.String, Arn: S.String, Description: S.optional(S.String), DisplayName: S.optional(S.String), SourceS3Location: S.optional(S3Location), SetupScriptDetails: S.optional(ScriptDetails), CreatedTime: S.optional(S.Date), PostSetupScriptDetails: S.optional(ScriptDetails), PackagingType: S.optional(S.String), State: S.optional(S.String), AppBlockErrors: S.optional(ErrorDetailsList)}) {}
export const AppBlocks = S.Array(AppBlock);
export class AdminAppLicenseUsageRecord extends S.Class<AdminAppLicenseUsageRecord>("AdminAppLicenseUsageRecord")({UserArn: S.String, BillingPeriod: S.String, OwnerAWSAccountId: S.String, SubscriptionFirstUsedDate: S.Date, SubscriptionLastUsedDate: S.Date, LicenseType: S.String, UserId: S.String}) {}
export const AdminAppLicenseUsageList = S.Array(AdminAppLicenseUsageRecord);
export const DirectoryConfigList = S.Array(DirectoryConfig);
export const EntitlementList = S.Array(Entitlement);
export class SharedImagePermissions extends S.Class<SharedImagePermissions>("SharedImagePermissions")({sharedAccountId: S.String, imagePermissions: ImagePermissions}) {}
export const SharedImagePermissionsList = S.Array(SharedImagePermissions);
export class Session extends S.Class<Session>("Session")({Id: S.String, UserId: S.String, StackName: S.String, FleetName: S.String, State: S.String, ConnectionState: S.optional(S.String), StartTime: S.optional(S.Date), MaxExpirationTime: S.optional(S.Date), AuthenticationType: S.optional(S.String), NetworkAccessConfiguration: S.optional(NetworkAccessConfiguration), InstanceId: S.optional(S.String)}) {}
export const SessionList = S.Array(Session);
export class SoftwareAssociations extends S.Class<SoftwareAssociations>("SoftwareAssociations")({SoftwareName: S.optional(S.String), Status: S.optional(S.String), DeploymentError: S.optional(ErrorDetailsList)}) {}
export const SoftwareAssociationsList = S.Array(SoftwareAssociations);
export class User extends S.Class<User>("User")({Arn: S.optional(S.String), UserName: S.optional(S.String), Enabled: S.optional(S.Boolean), Status: S.optional(S.String), FirstName: S.optional(S.String), LastName: S.optional(S.String), CreatedTime: S.optional(S.Date), AuthenticationType: S.String}) {}
export const UserList = S.Array(User);
export class EntitledApplication extends S.Class<EntitledApplication>("EntitledApplication")({ApplicationIdentifier: S.String}) {}
export const EntitledApplicationList = S.Array(EntitledApplication);
export const ExportImageTasks = S.Array(ExportImageTask);
export class AssociateAppBlockBuilderAppBlockResult extends S.Class<AssociateAppBlockBuilderAppBlockResult>("AssociateAppBlockBuilderAppBlockResult")({AppBlockBuilderAppBlockAssociation: S.optional(AppBlockBuilderAppBlockAssociation)}) {}
export class AssociateApplicationFleetResult extends S.Class<AssociateApplicationFleetResult>("AssociateApplicationFleetResult")({ApplicationFleetAssociation: S.optional(ApplicationFleetAssociation)}) {}
export class BatchAssociateUserStackResult extends S.Class<BatchAssociateUserStackResult>("BatchAssociateUserStackResult")({errors: S.optional(UserStackAssociationErrorList)}) {}
export class BatchDisassociateUserStackResult extends S.Class<BatchDisassociateUserStackResult>("BatchDisassociateUserStackResult")({errors: S.optional(UserStackAssociationErrorList)}) {}
export class CreateAppBlockResult extends S.Class<CreateAppBlockResult>("CreateAppBlockResult")({AppBlock: S.optional(AppBlock)}) {}
export class CreateAppBlockBuilderResult extends S.Class<CreateAppBlockBuilderResult>("CreateAppBlockBuilderResult")({AppBlockBuilder: S.optional(AppBlockBuilder)}) {}
export class CreateDirectoryConfigResult extends S.Class<CreateDirectoryConfigResult>("CreateDirectoryConfigResult")({DirectoryConfig: S.optional(DirectoryConfig)}) {}
export class CreateEntitlementResult extends S.Class<CreateEntitlementResult>("CreateEntitlementResult")({Entitlement: S.optional(Entitlement)}) {}
export class CreateFleetResult extends S.Class<CreateFleetResult>("CreateFleetResult")({Fleet: S.optional(Fleet)}) {}
export class CreateImportedImageResult extends S.Class<CreateImportedImageResult>("CreateImportedImageResult")({Image: S.optional(Image)}) {}
export class CreateStackResult extends S.Class<CreateStackResult>("CreateStackResult")({Stack: S.optional(Stack)}) {}
export class CreateThemeForStackResult extends S.Class<CreateThemeForStackResult>("CreateThemeForStackResult")({Theme: S.optional(Theme)}) {}
export class DescribeAppBlocksResult extends S.Class<DescribeAppBlocksResult>("DescribeAppBlocksResult")({AppBlocks: S.optional(AppBlocks), NextToken: S.optional(S.String)}) {}
export class DescribeAppLicenseUsageResult extends S.Class<DescribeAppLicenseUsageResult>("DescribeAppLicenseUsageResult")({AppLicenseUsages: S.optional(AdminAppLicenseUsageList), NextToken: S.optional(S.String)}) {}
export class DescribeDirectoryConfigsResult extends S.Class<DescribeDirectoryConfigsResult>("DescribeDirectoryConfigsResult")({DirectoryConfigs: S.optional(DirectoryConfigList), NextToken: S.optional(S.String)}) {}
export class DescribeEntitlementsResult extends S.Class<DescribeEntitlementsResult>("DescribeEntitlementsResult")({Entitlements: S.optional(EntitlementList), NextToken: S.optional(S.String)}) {}
export class DescribeImagePermissionsResult extends S.Class<DescribeImagePermissionsResult>("DescribeImagePermissionsResult")({Name: S.optional(S.String), SharedImagePermissionsList: S.optional(SharedImagePermissionsList), NextToken: S.optional(S.String)}) {}
export class DescribeSessionsResult extends S.Class<DescribeSessionsResult>("DescribeSessionsResult")({Sessions: S.optional(SessionList), NextToken: S.optional(S.String)}) {}
export class DescribeSoftwareAssociationsResult extends S.Class<DescribeSoftwareAssociationsResult>("DescribeSoftwareAssociationsResult")({AssociatedResource: S.optional(S.String), SoftwareAssociations: S.optional(SoftwareAssociationsList), NextToken: S.optional(S.String)}) {}
export class DescribeThemeForStackResult extends S.Class<DescribeThemeForStackResult>("DescribeThemeForStackResult")({Theme: S.optional(Theme)}) {}
export class DescribeUsersResult extends S.Class<DescribeUsersResult>("DescribeUsersResult")({Users: S.optional(UserList), NextToken: S.optional(S.String)}) {}
export class ListEntitledApplicationsResult extends S.Class<ListEntitledApplicationsResult>("ListEntitledApplicationsResult")({EntitledApplications: S.optional(EntitledApplicationList), NextToken: S.optional(S.String)}) {}
export class ListExportImageTasksResult extends S.Class<ListExportImageTasksResult>("ListExportImageTasksResult")({ExportImageTasks: S.optional(ExportImageTasks), NextToken: S.optional(S.String)}) {}
export class LastReportGenerationExecutionError extends S.Class<LastReportGenerationExecutionError>("LastReportGenerationExecutionError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const LastReportGenerationExecutionErrors = S.Array(LastReportGenerationExecutionError);
export const AppBlockBuilderList = S.Array(AppBlockBuilder);
export const FleetList = S.Array(Fleet);
export const StackList = S.Array(Stack);
export class UsageReportSubscription extends S.Class<UsageReportSubscription>("UsageReportSubscription")({S3BucketName: S.optional(S.String), Schedule: S.optional(S.String), LastGeneratedReportDate: S.optional(S.Date), SubscriptionErrors: S.optional(LastReportGenerationExecutionErrors)}) {}
export const UsageReportSubscriptionList = S.Array(UsageReportSubscription);
export class CreateApplicationResult extends S.Class<CreateApplicationResult>("CreateApplicationResult")({Application: S.optional(Application)}) {}
export class CreateExportImageTaskResult extends S.Class<CreateExportImageTaskResult>("CreateExportImageTaskResult")({ExportImageTask: S.optional(ExportImageTask)}) {}
export class CreateImageBuilderResult extends S.Class<CreateImageBuilderResult>("CreateImageBuilderResult")({ImageBuilder: S.optional(ImageBuilder)}) {}
export class CreateUpdatedImageResult extends S.Class<CreateUpdatedImageResult>("CreateUpdatedImageResult")({image: S.optional(Image), canUpdateImage: S.optional(S.Boolean)}) {}
export class DescribeAppBlockBuildersResult extends S.Class<DescribeAppBlockBuildersResult>("DescribeAppBlockBuildersResult")({AppBlockBuilders: S.optional(AppBlockBuilderList), NextToken: S.optional(S.String)}) {}
export class DescribeFleetsResult extends S.Class<DescribeFleetsResult>("DescribeFleetsResult")({Fleets: S.optional(FleetList), NextToken: S.optional(S.String)}) {}
export class DescribeStacksResult extends S.Class<DescribeStacksResult>("DescribeStacksResult")({Stacks: S.optional(StackList), NextToken: S.optional(S.String)}) {}
export class DescribeUsageReportSubscriptionsResult extends S.Class<DescribeUsageReportSubscriptionsResult>("DescribeUsageReportSubscriptionsResult")({UsageReportSubscriptions: S.optional(UsageReportSubscriptionList), NextToken: S.optional(S.String)}) {}

//# Errors
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InvalidAccountStatusException extends S.TaggedError<InvalidAccountStatusException>()("InvalidAccountStatusException", {}) {};
export class OperationNotPermittedException extends S.TaggedError<OperationNotPermittedException>()("OperationNotPermittedException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class EntitlementNotFoundException extends S.TaggedError<EntitlementNotFoundException>()("EntitlementNotFoundException", {}) {};
export class InvalidParameterCombinationException extends S.TaggedError<InvalidParameterCombinationException>()("InvalidParameterCombinationException", {}) {};
export class InvalidRoleException extends S.TaggedError<InvalidRoleException>()("InvalidRoleException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class IncompatibleImageException extends S.TaggedError<IncompatibleImageException>()("IncompatibleImageException", {}) {};
export class ResourceNotAvailableException extends S.TaggedError<ResourceNotAvailableException>()("ResourceNotAvailableException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class RequestLimitExceededException extends S.TaggedError<RequestLimitExceededException>()("RequestLimitExceededException", {}) {};
export class EntitlementAlreadyExistsException extends S.TaggedError<EntitlementAlreadyExistsException>()("EntitlementAlreadyExistsException", {Message: S.optional(S.String)}) {};
export class DryRunOperationException extends S.TaggedError<DryRunOperationException>()("DryRunOperationException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the specified Directory Config object from WorkSpaces Applications. This object includes the information required to join streaming instances to an Active Directory domain.
 */export const deleteDirectoryConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteDirectoryConfig" }, DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult, [ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified entitlement.
 */export const deleteEntitlement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteEntitlement" }, DeleteEntitlementRequest, DeleteEntitlementResult, [ConcurrentModificationException, EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified fleet.
 */export const deleteFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteFleet" }, DeleteFleetRequest, DeleteFleetResult, [ConcurrentModificationException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
 */export const deleteStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteStack" }, DeleteStackRequest, DeleteStackResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes custom branding that customizes the appearance of the streaming application catalog page.
 */export const deleteThemeForStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteThemeForStack" }, DeleteThemeForStackRequest, DeleteThemeForStackResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables usage report generation.
 */export const deleteUsageReportSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteUsageReportSubscription" }, DeleteUsageReportSubscriptionRequest, DeleteUsageReportSubscriptionResult, [InvalidAccountStatusException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user from the user pool.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteUser" }, DeleteUserRequest, DeleteUserResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the specified user in the user pool. Users can't sign in to WorkSpaces Applications until they are re-enabled. This action does not delete the user.
 */export const disableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisableUser" }, DisableUserRequest, DisableUserResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a specified app block builder from a specified app block.
 */export const disassociateAppBlockBuilderAppBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisassociateAppBlockBuilderAppBlock" }, DisassociateAppBlockBuilderAppBlockRequest, DisassociateAppBlockBuilderAppBlockResult, [ConcurrentModificationException, InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified application from the fleet.
 */export const disassociateApplicationFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisassociateApplicationFleet" }, DisassociateApplicationFleetRequest, DisassociateApplicationFleetResult, [ConcurrentModificationException, InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified application from the specified entitlement.
 */export const disassociateApplicationFromEntitlement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisassociateApplicationFromEntitlement" }, DisassociateApplicationFromEntitlementRequest, DisassociateApplicationFromEntitlementResult, [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified fleet from the specified stack.
 */export const disassociateFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisassociateFleet" }, DisassociateFleetRequest, DisassociateFleetResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes license included application(s) association(s) from an image builder instance.
 */export const disassociateSoftwareFromImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DisassociateSoftwareFromImageBuilder" }, DisassociateSoftwareFromImageBuilderRequest, DisassociateSoftwareFromImageBuilderResult, [ConcurrentModificationException, InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables a user in the user pool. After being enabled, users can sign in to WorkSpaces Applications and open applications from the stacks to which they are assigned.
 */export const enableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.EnableUser" }, EnableUserRequest, EnableUserResult, [InvalidAccountStatusException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Immediately stops the specified streaming session.
 */export const expireSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ExpireSession" }, ExpireSessionRequest, ExpireSessionResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates license included applications deployment to an image builder instance.
 */export const startSoftwareDeploymentToImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StartSoftwareDeploymentToImageBuilder" }, StartSoftwareDeploymentToImageBuilderRequest, StartSoftwareDeploymentToImageBuilderResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the specified fleet.
 */export const stopFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StopFleet" }, StopFleetRequest, StopFleetResult, [ConcurrentModificationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites one or more tags for the specified WorkSpaces Applications resource. You can tag WorkSpaces Applications image builders, images, fleets, and stacks.
 * 
 * Each tag consists of a key and an optional value. If a resource already has a tag with the same key,
 * this operation updates its value.
 * 
 * To list the current tags for your resources, use ListTagsForResource.
 * To disassociate tags from your resources, use UntagResource.
 * 
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidAccountStatusException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates one or more specified tags from the specified WorkSpaces Applications resource.
 * 
 * To list the current tags for your resources, use ListTagsForResource.
 * 
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates an application to entitle.
 */export const associateApplicationToEntitlement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.AssociateApplicationToEntitlement" }, AssociateApplicationToEntitlementRequest, AssociateApplicationToEntitlementResult, [EntitlementNotFoundException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified fleet with the specified stack.
 */export const associateFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.AssociateFleet" }, AssociateFleetRequest, AssociateFleetResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates license included application(s) with an existing image builder instance.
 */export const associateSoftwareToImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.AssociateSoftwareToImageBuilder" }, AssociateSoftwareToImageBuilderRequest, AssociateSoftwareToImageBuilderResult, [ConcurrentModificationException, IncompatibleImageException, InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a URL to start a create app block builder streaming session.
 */export const createAppBlockBuilderStreamingURL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateAppBlockBuilderStreamingURL" }, CreateAppBlockBuilderStreamingURLRequest, CreateAppBlockBuilderStreamingURLResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a URL to start an image builder streaming session.
 */export const createImageBuilderStreamingURL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateImageBuilderStreamingURL" }, CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a temporary URL to start an WorkSpaces Applications streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
 */export const createStreamingURL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateStreamingURL" }, CreateStreamingURLRequest, CreateStreamingURLResult, [InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a usage report subscription. Usage reports are generated daily.
 */export const createUsageReportSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateUsageReportSubscription" }, CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult, [InvalidAccountStatusException, InvalidRoleException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new user in the user pool.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateUser" }, CreateUserRequest, CreateUserResult, [InvalidAccountStatusException, InvalidParameterCombinationException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an app block.
 */export const deleteAppBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteAppBlock" }, DeleteAppBlockRequest, DeleteAppBlockResult, [ConcurrentModificationException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an app block builder.
 * 
 * An app block builder can only be deleted when it has no association with an app
 * block.
 */export const deleteAppBlockBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteAppBlockBuilder" }, DeleteAppBlockBuilderRequest, DeleteAppBlockBuilderResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an application.
 */export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteApplication" }, DeleteApplicationRequest, DeleteApplicationResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified image. You cannot delete an image when it is in use.
 * After you delete an image, you cannot provision new capacity using the image.
 */export const deleteImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteImage" }, DeleteImageRequest, DeleteImageResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified image builder and releases the capacity.
 */export const deleteImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteImageBuilder" }, DeleteImageBuilderRequest, DeleteImageBuilderResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
 */export const deleteImagePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DeleteImagePermissions" }, DeleteImagePermissionsRequest, DeleteImagePermissionsResult, [ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more app block builder associations.
 */export const describeAppBlockBuilderAppBlockAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeAppBlockBuilderAppBlockAssociations" }, DescribeAppBlockBuilderAppBlockAssociationsRequest, DescribeAppBlockBuilderAppBlockAssociationsResult, [InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
 */export const describeApplicationFleetAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeApplicationFleetAssociations" }, DescribeApplicationFleetAssociationsRequest, DescribeApplicationFleetAssociationsResult, [InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more applications.
 */export const describeApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeApplications" }, DescribeApplicationsRequest, DescribeApplicationsResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
 */export const describeImageBuilders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeImageBuilders" }, DescribeImageBuildersRequest, DescribeImageBuildersResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
 */export const describeImages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeImages" }, DescribeImagesRequest, DescribeImagesResult, [InvalidParameterCombinationException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:
 * 
 * - The stack name
 * 
 * - The user name (email address of the user associated with the stack) and the authentication type for the user
 */export const describeUserStackAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeUserStackAssociations" }, DescribeUserStackAssociationsRequest, DescribeUserStackAssociationsResult, [InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an export image task, including its current state, progress, and any error details.
 */export const getExportImageTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.GetExportImageTask" }, GetExportImageTaskRequest, GetExportImageTaskResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the name of the fleet that is associated with the specified stack.
 */export const listAssociatedFleets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ListAssociatedFleets" }, ListAssociatedFleetsRequest, ListAssociatedFleetsResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the name of the stack with which the specified fleet is associated.
 */export const listAssociatedStacks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ListAssociatedStacks" }, ListAssociatedStacksRequest, ListAssociatedStacksResult, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all tags for the specified WorkSpaces Applications resource. You can tag WorkSpaces Applications image builders, images, fleets, and stacks.
 * 
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified fleet.
 */export const startFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StartFleet" }, StartFleetRequest, StartFleetResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified image builder.
 */export const startImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StartImageBuilder" }, StartImageBuilderRequest, StartImageBuilderResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an app block builder.
 * 
 * Stopping an app block builder terminates the instance, and the instance state is not
 * persisted.
 */export const stopAppBlockBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StopAppBlockBuilder" }, StopAppBlockBuilderRequest, StopAppBlockBuilderResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the specified image builder.
 */export const stopImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StopImageBuilder" }, StopImageBuilderRequest, StopImageBuilderResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an app block builder.
 * 
 * If the app block builder is in the `STARTING` or `STOPPING`
 * state, you can't update it. If the app block builder is in the `RUNNING`
 * state, you can only update the DisplayName and Description. If the app block builder is
 * in the `STOPPED` state, you can update any attribute except the Name.
 */export const updateAppBlockBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateAppBlockBuilder" }, UpdateAppBlockBuilderRequest, UpdateAppBlockBuilderResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceInUseException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified application.
 */export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateApplication" }, UpdateApplicationRequest, UpdateApplicationResult, [ConcurrentModificationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 */export const updateDirectoryConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateDirectoryConfig" }, UpdateDirectoryConfigRequest, UpdateDirectoryConfigResult, [ConcurrentModificationException, IncompatibleImageException, InvalidRoleException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified entitlement.
 */export const updateEntitlement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateEntitlement" }, UpdateEntitlementRequest, UpdateEntitlementResult, [ConcurrentModificationException, EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified fleet.
 * 
 * If the fleet is in the `STOPPED` state, you can update any attribute except
 * the fleet name.
 * 
 * If the fleet is in the `RUNNING` state, you can update the following based
 * on the fleet type:
 * 
 * - Always-On and On-Demand fleet types
 * 
 * You can update the `DisplayName`, `ComputeCapacity`,
 * `ImageARN`, `ImageName`,
 * `IdleDisconnectTimeoutInSeconds`, and
 * `DisconnectTimeoutInSeconds` attributes.
 * 
 * - Elastic fleet type
 * 
 * You can update the `DisplayName`,
 * `IdleDisconnectTimeoutInSeconds`,
 * `DisconnectTimeoutInSeconds`, `MaxConcurrentSessions`, `SessionScriptS3Location`
 * and `UsbDeviceFilterStrings` attributes.
 * 
 * If the fleet is in the `STARTING` or `STOPPED` state, you can't update it.
 */export const updateFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateFleet" }, UpdateFleetRequest, UpdateFleetResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceInUseException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates permissions for the specified private image.
 */export const updateImagePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateImagePermissions" }, UpdateImagePermissionsRequest, UpdateImagePermissionsResult, [LimitExceededException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified fields for the specified stack.
 */export const updateStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateStack" }, UpdateStackRequest, UpdateStackResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, ResourceInUseException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates custom branding that customizes the appearance of the streaming application catalog page.
 */export const updateThemeForStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.UpdateThemeForStack" }, UpdateThemeForStackRequest, UpdateThemeForStackResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidParameterCombinationException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified app block builder with the specified app block.
 */export const associateAppBlockBuilderAppBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.AssociateAppBlockBuilderAppBlock" }, AssociateAppBlockBuilderAppBlockRequest, AssociateAppBlockBuilderAppBlockResult, [ConcurrentModificationException, InvalidParameterCombinationException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
 */export const associateApplicationFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.AssociateApplicationFleet" }, AssociateApplicationFleetRequest, AssociateApplicationFleetResult, [ConcurrentModificationException, InvalidParameterCombinationException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
 */export const batchAssociateUserStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.BatchAssociateUserStack" }, BatchAssociateUserStackRequest, BatchAssociateUserStackResult, [InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified users from the specified stacks.
 */export const batchDisassociateUserStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.BatchDisassociateUserStack" }, BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult, [InvalidParameterCombinationException, OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
 */export const copyImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CopyImage" }, CopyImageRequest, CopyImageResponse, [IncompatibleImageException, InvalidAccountStatusException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an app block.
 * 
 * App blocks are a WorkSpaces Applications resource that stores the details about the
 * virtual hard disk in an S3 bucket. It also stores the setup script with details about
 * how to mount the virtual hard disk. The virtual hard disk includes the application
 * binaries and other files necessary to launch your applications. Multiple applications
 * can be assigned to a single app block.
 * 
 * This is only supported for Elastic fleets.
 */export const createAppBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateAppBlock" }, CreateAppBlockRequest, CreateAppBlockResult, [ConcurrentModificationException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an app block builder.
 */export const createAppBlockBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateAppBlockBuilder" }, CreateAppBlockBuilderRequest, CreateAppBlockBuilderResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceAlreadyExistsException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 */export const createDirectoryConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateDirectoryConfig" }, CreateDirectoryConfigRequest, CreateDirectoryConfigResult, [InvalidAccountStatusException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
 */export const createFleet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateFleet" }, CreateFleetRequest, CreateFleetResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceAlreadyExistsException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
 */export const createStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateStack" }, CreateStackRequest, CreateStackResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates custom branding that customizes the appearance of the streaming application catalog page.
 */export const createThemeForStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateThemeForStack" }, CreateThemeForStackRequest, CreateThemeForStackResult, [ConcurrentModificationException, InvalidAccountStatusException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more app blocks.
 */export const describeAppBlocks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeAppBlocks" }, DescribeAppBlocksRequest, DescribeAppBlocksResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves license included application usage information.
 */export const describeAppLicenseUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeAppLicenseUsage" }, DescribeAppLicenseUsageRequest, DescribeAppLicenseUsageResult, [InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified Directory Config objects for WorkSpaces Applications, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 * 
 * Although the response syntax in this topic includes the account password, this password is not returned in the actual response.
 */export const describeDirectoryConfigs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeDirectoryConfigs" }, DescribeDirectoryConfigsRequest, DescribeDirectoryConfigsResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one of more entitlements.
 */export const describeEntitlements = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeEntitlements" }, DescribeEntitlementsRequest, DescribeEntitlementsResult, [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
 */export const describeImagePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeImagePermissions" }, DescribeImagePermissionsRequest, DescribeImagePermissionsResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
 * only streaming sessions for that user are described. If an authentication type is not provided,
 * the default is to authenticate users using a streaming URL.
 */export const describeSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeSessions" }, DescribeSessionsRequest, DescribeSessionsResult, [InvalidParameterCombinationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves license included application associations for a specified resource.
 */export const describeSoftwareAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeSoftwareAssociations" }, DescribeSoftwareAssociationsRequest, DescribeSoftwareAssociationsResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes the theme for a specified stack. A theme is custom branding that customizes the appearance of the streaming application catalog page.
 */export const describeThemeForStack = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeThemeForStack" }, DescribeThemeForStackRequest, DescribeThemeForStackResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified users in the user pool.
 */export const describeUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeUsers" }, DescribeUsersRequest, DescribeUsersResult, [InvalidParameterCombinationException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of entitled applications.
 */export const listEntitledApplications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ListEntitledApplications" }, ListEntitledApplicationsRequest, ListEntitledApplicationsResult, [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists export image tasks, with optional filtering and pagination. Use this operation to monitor the status of multiple export operations.
 */export const listExportImageTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.ListExportImageTasks" }, ListExportImageTasksRequest, ListExportImageTasksResult, [OperationNotPermittedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an app block builder.
 * 
 * An app block builder can only be started when it's associated with an app
 * block.
 * 
 * Starting an app block builder starts a new instance, which is equivalent to an elastic
 * fleet instance with application builder assistance functionality.
 */export const startAppBlockBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.StartAppBlockBuilder" }, StartAppBlockBuilderRequest, StartAppBlockBuilderResult, [ConcurrentModificationException, InvalidAccountStatusException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an application.
 * 
 * Applications are a WorkSpaces Applications resource that stores the details about how to
 * launch applications on Elastic fleet streaming instances. An application consists of the
 * launch details, icon, and display name. Applications are associated with an app block
 * that contains the application binaries and other files. The applications assigned to an
 * Elastic fleet are the applications users can launch.
 * 
 * This is only supported for Elastic fleets.
 */export const createApplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateApplication" }, CreateApplicationRequest, CreateApplicationResult, [ConcurrentModificationException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new entitlement. Entitlements control access to specific applications within
 * a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
 * identities. WorkSpaces Applications user pool and streaming URL users are entitled to all
 * applications in a stack. Entitlements don't apply to the desktop stream view
 * application, or to applications managed by a dynamic app provider using the Dynamic
 * Application Framework.
 */export const createEntitlement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateEntitlement" }, CreateEntitlementRequest, CreateEntitlementResult, [EntitlementAlreadyExistsException, LimitExceededException, OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.
 */export const createExportImageTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateExportImageTask" }, CreateExportImageTaskRequest, CreateExportImageTaskResult, [ConcurrentModificationException, InvalidAccountStatusException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an image builder. An image builder is a virtual machine that is used to create an image.
 * 
 * The initial state of the builder is `PENDING`. When it is ready, the state is `RUNNING`.
 */export const createImageBuilder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateImageBuilder" }, CreateImageBuilderRequest, CreateImageBuilderResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, InvalidParameterCombinationException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, RequestLimitExceededException, ResourceAlreadyExistsException, ResourceNotAvailableException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom WorkSpaces Applications image by importing an EC2 AMI. This allows you to use your own customized AMI to create WorkSpaces Applications images that support additional instance types beyond the standard stream.* instances.
 */export const createImportedImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateImportedImage" }, CreateImportedImageRequest, CreateImportedImageResult, [DryRunOperationException, IncompatibleImageException, InvalidAccountStatusException, InvalidRoleException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new image with the latest Windows operating system updates, driver updates, and WorkSpaces Applications agent software.
 * 
 * For more information, see the "Update an Image by Using
 * Managed WorkSpaces Applications Image Updates" section in Administer Your WorkSpaces Applications Images, in the *Amazon WorkSpaces Applications Administration Guide*.
 */export const createUpdatedImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.CreateUpdatedImage" }, CreateUpdatedImageRequest, CreateUpdatedImageResult, [ConcurrentModificationException, IncompatibleImageException, InvalidAccountStatusException, LimitExceededException, OperationNotPermittedException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more app block builders.
 */export const describeAppBlockBuilders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeAppBlockBuilders" }, DescribeAppBlockBuildersRequest, DescribeAppBlockBuildersResult, [OperationNotPermittedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
 */export const describeFleets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeFleets" }, DescribeFleetsRequest, DescribeFleetsResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
 */export const describeStacks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeStacks" }, DescribeStacksRequest, DescribeStacksResult, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list that describes one or more usage report subscriptions.
 */export const describeUsageReportSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-12-01", sdkId: "AppStream", sigV4ServiceName: "appstream", name: "PhotonAdminProxyService.DescribeUsageReportSubscriptions" }, DescribeUsageReportSubscriptionsRequest, DescribeUsageReportSubscriptionsResult, [InvalidAccountStatusException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
