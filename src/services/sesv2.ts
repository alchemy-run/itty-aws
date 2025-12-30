import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountRequest extends S.Class<GetAccountRequest>("GetAccountRequest")({}) {}
export class GetDeliverabilityDashboardOptionsRequest extends S.Class<GetDeliverabilityDashboardOptionsRequest>("GetDeliverabilityDashboardOptionsRequest")({}) {}
export const BlacklistItemNames = S.Array(S.String);
export const SuppressionListReasons = S.Array(S.String);
export const AdditionalContactEmailAddresses = S.Array(S.String);
export const EmailAddressList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CancelExportJobRequest extends S.Class<CancelExportJobRequest>("CancelExportJobRequest")({JobId: S.String}) {}
export class CancelExportJobResponse extends S.Class<CancelExportJobResponse>("CancelExportJobResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateCustomVerificationEmailTemplateRequest extends S.Class<CreateCustomVerificationEmailTemplateRequest>("CreateCustomVerificationEmailTemplateRequest")({TemplateName: S.String, FromEmailAddress: S.String, TemplateSubject: S.String, TemplateContent: S.String, Tags: S.optional(TagList), SuccessRedirectionURL: S.String, FailureRedirectionURL: S.String}) {}
export class CreateCustomVerificationEmailTemplateResponse extends S.Class<CreateCustomVerificationEmailTemplateResponse>("CreateCustomVerificationEmailTemplateResponse")({}) {}
export class CreateDedicatedIpPoolRequest extends S.Class<CreateDedicatedIpPoolRequest>("CreateDedicatedIpPoolRequest")({PoolName: S.String, Tags: S.optional(TagList), ScalingMode: S.optional(S.String)}) {}
export class CreateDedicatedIpPoolResponse extends S.Class<CreateDedicatedIpPoolResponse>("CreateDedicatedIpPoolResponse")({}) {}
export class CreateEmailIdentityPolicyRequest extends S.Class<CreateEmailIdentityPolicyRequest>("CreateEmailIdentityPolicyRequest")({EmailIdentity: S.String, PolicyName: S.String, Policy: S.String}) {}
export class CreateEmailIdentityPolicyResponse extends S.Class<CreateEmailIdentityPolicyResponse>("CreateEmailIdentityPolicyResponse")({}) {}
export class CreateTenantRequest extends S.Class<CreateTenantRequest>("CreateTenantRequest")({TenantName: S.String, Tags: S.optional(TagList)}) {}
export class CreateTenantResourceAssociationRequest extends S.Class<CreateTenantResourceAssociationRequest>("CreateTenantResourceAssociationRequest")({TenantName: S.String, ResourceArn: S.String}) {}
export class CreateTenantResourceAssociationResponse extends S.Class<CreateTenantResourceAssociationResponse>("CreateTenantResourceAssociationResponse")({}) {}
export class DeleteConfigurationSetRequest extends S.Class<DeleteConfigurationSetRequest>("DeleteConfigurationSetRequest")({ConfigurationSetName: S.String}) {}
export class DeleteConfigurationSetResponse extends S.Class<DeleteConfigurationSetResponse>("DeleteConfigurationSetResponse")({}) {}
export class DeleteConfigurationSetEventDestinationRequest extends S.Class<DeleteConfigurationSetEventDestinationRequest>("DeleteConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestinationName: S.String}) {}
export class DeleteConfigurationSetEventDestinationResponse extends S.Class<DeleteConfigurationSetEventDestinationResponse>("DeleteConfigurationSetEventDestinationResponse")({}) {}
export class DeleteContactRequest extends S.Class<DeleteContactRequest>("DeleteContactRequest")({ContactListName: S.String, EmailAddress: S.String}) {}
export class DeleteContactResponse extends S.Class<DeleteContactResponse>("DeleteContactResponse")({}) {}
export class DeleteContactListRequest extends S.Class<DeleteContactListRequest>("DeleteContactListRequest")({ContactListName: S.String}) {}
export class DeleteContactListResponse extends S.Class<DeleteContactListResponse>("DeleteContactListResponse")({}) {}
export class DeleteCustomVerificationEmailTemplateRequest extends S.Class<DeleteCustomVerificationEmailTemplateRequest>("DeleteCustomVerificationEmailTemplateRequest")({TemplateName: S.String}) {}
export class DeleteCustomVerificationEmailTemplateResponse extends S.Class<DeleteCustomVerificationEmailTemplateResponse>("DeleteCustomVerificationEmailTemplateResponse")({}) {}
export class DeleteDedicatedIpPoolRequest extends S.Class<DeleteDedicatedIpPoolRequest>("DeleteDedicatedIpPoolRequest")({PoolName: S.String}) {}
export class DeleteDedicatedIpPoolResponse extends S.Class<DeleteDedicatedIpPoolResponse>("DeleteDedicatedIpPoolResponse")({}) {}
export class DeleteEmailIdentityRequest extends S.Class<DeleteEmailIdentityRequest>("DeleteEmailIdentityRequest")({EmailIdentity: S.String}) {}
export class DeleteEmailIdentityResponse extends S.Class<DeleteEmailIdentityResponse>("DeleteEmailIdentityResponse")({}) {}
export class DeleteEmailIdentityPolicyRequest extends S.Class<DeleteEmailIdentityPolicyRequest>("DeleteEmailIdentityPolicyRequest")({EmailIdentity: S.String, PolicyName: S.String}) {}
export class DeleteEmailIdentityPolicyResponse extends S.Class<DeleteEmailIdentityPolicyResponse>("DeleteEmailIdentityPolicyResponse")({}) {}
export class DeleteEmailTemplateRequest extends S.Class<DeleteEmailTemplateRequest>("DeleteEmailTemplateRequest")({TemplateName: S.String}) {}
export class DeleteEmailTemplateResponse extends S.Class<DeleteEmailTemplateResponse>("DeleteEmailTemplateResponse")({}) {}
export class DeleteMultiRegionEndpointRequest extends S.Class<DeleteMultiRegionEndpointRequest>("DeleteMultiRegionEndpointRequest")({EndpointName: S.String}) {}
export class DeleteSuppressedDestinationRequest extends S.Class<DeleteSuppressedDestinationRequest>("DeleteSuppressedDestinationRequest")({EmailAddress: S.String}) {}
export class DeleteSuppressedDestinationResponse extends S.Class<DeleteSuppressedDestinationResponse>("DeleteSuppressedDestinationResponse")({}) {}
export class DeleteTenantRequest extends S.Class<DeleteTenantRequest>("DeleteTenantRequest")({TenantName: S.String}) {}
export class DeleteTenantResponse extends S.Class<DeleteTenantResponse>("DeleteTenantResponse")({}) {}
export class DeleteTenantResourceAssociationRequest extends S.Class<DeleteTenantResourceAssociationRequest>("DeleteTenantResourceAssociationRequest")({TenantName: S.String, ResourceArn: S.String}) {}
export class DeleteTenantResourceAssociationResponse extends S.Class<DeleteTenantResourceAssociationResponse>("DeleteTenantResourceAssociationResponse")({}) {}
export class GetBlacklistReportsRequest extends S.Class<GetBlacklistReportsRequest>("GetBlacklistReportsRequest")({BlacklistItemNames: BlacklistItemNames}) {}
export class GetConfigurationSetRequest extends S.Class<GetConfigurationSetRequest>("GetConfigurationSetRequest")({ConfigurationSetName: S.String}) {}
export class GetConfigurationSetEventDestinationsRequest extends S.Class<GetConfigurationSetEventDestinationsRequest>("GetConfigurationSetEventDestinationsRequest")({ConfigurationSetName: S.String}) {}
export class GetContactRequest extends S.Class<GetContactRequest>("GetContactRequest")({ContactListName: S.String, EmailAddress: S.String}) {}
export class GetContactListRequest extends S.Class<GetContactListRequest>("GetContactListRequest")({ContactListName: S.String}) {}
export class GetCustomVerificationEmailTemplateRequest extends S.Class<GetCustomVerificationEmailTemplateRequest>("GetCustomVerificationEmailTemplateRequest")({TemplateName: S.String}) {}
export class GetDedicatedIpRequest extends S.Class<GetDedicatedIpRequest>("GetDedicatedIpRequest")({Ip: S.String}) {}
export class GetDedicatedIpPoolRequest extends S.Class<GetDedicatedIpPoolRequest>("GetDedicatedIpPoolRequest")({PoolName: S.String}) {}
export class GetDedicatedIpsRequest extends S.Class<GetDedicatedIpsRequest>("GetDedicatedIpsRequest")({PoolName: S.optional(S.String), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class GetDeliverabilityTestReportRequest extends S.Class<GetDeliverabilityTestReportRequest>("GetDeliverabilityTestReportRequest")({ReportId: S.String}) {}
export class GetDomainDeliverabilityCampaignRequest extends S.Class<GetDomainDeliverabilityCampaignRequest>("GetDomainDeliverabilityCampaignRequest")({CampaignId: S.String}) {}
export class GetDomainStatisticsReportRequest extends S.Class<GetDomainStatisticsReportRequest>("GetDomainStatisticsReportRequest")({Domain: S.String, StartDate: S.Date, EndDate: S.Date}) {}
export class GetEmailAddressInsightsRequest extends S.Class<GetEmailAddressInsightsRequest>("GetEmailAddressInsightsRequest")({EmailAddress: S.String}) {}
export class GetEmailIdentityRequest extends S.Class<GetEmailIdentityRequest>("GetEmailIdentityRequest")({EmailIdentity: S.String}) {}
export class GetEmailIdentityPoliciesRequest extends S.Class<GetEmailIdentityPoliciesRequest>("GetEmailIdentityPoliciesRequest")({EmailIdentity: S.String}) {}
export class GetEmailTemplateRequest extends S.Class<GetEmailTemplateRequest>("GetEmailTemplateRequest")({TemplateName: S.String}) {}
export class GetExportJobRequest extends S.Class<GetExportJobRequest>("GetExportJobRequest")({JobId: S.String}) {}
export class GetImportJobRequest extends S.Class<GetImportJobRequest>("GetImportJobRequest")({JobId: S.String}) {}
export class GetMessageInsightsRequest extends S.Class<GetMessageInsightsRequest>("GetMessageInsightsRequest")({MessageId: S.String}) {}
export class GetMultiRegionEndpointRequest extends S.Class<GetMultiRegionEndpointRequest>("GetMultiRegionEndpointRequest")({EndpointName: S.String}) {}
export class GetReputationEntityRequest extends S.Class<GetReputationEntityRequest>("GetReputationEntityRequest")({ReputationEntityReference: S.String, ReputationEntityType: S.String}) {}
export class GetSuppressedDestinationRequest extends S.Class<GetSuppressedDestinationRequest>("GetSuppressedDestinationRequest")({EmailAddress: S.String}) {}
export class GetTenantRequest extends S.Class<GetTenantRequest>("GetTenantRequest")({TenantName: S.String}) {}
export class ListConfigurationSetsRequest extends S.Class<ListConfigurationSetsRequest>("ListConfigurationSetsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListContactListsRequest extends S.Class<ListContactListsRequest>("ListContactListsRequest")({PageSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomVerificationEmailTemplatesRequest extends S.Class<ListCustomVerificationEmailTemplatesRequest>("ListCustomVerificationEmailTemplatesRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListDedicatedIpPoolsRequest extends S.Class<ListDedicatedIpPoolsRequest>("ListDedicatedIpPoolsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListDeliverabilityTestReportsRequest extends S.Class<ListDeliverabilityTestReportsRequest>("ListDeliverabilityTestReportsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListDomainDeliverabilityCampaignsRequest extends S.Class<ListDomainDeliverabilityCampaignsRequest>("ListDomainDeliverabilityCampaignsRequest")({StartDate: S.Date, EndDate: S.Date, SubscribedDomain: S.String, NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListEmailIdentitiesRequest extends S.Class<ListEmailIdentitiesRequest>("ListEmailIdentitiesRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListEmailTemplatesRequest extends S.Class<ListEmailTemplatesRequest>("ListEmailTemplatesRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListExportJobsRequest extends S.Class<ListExportJobsRequest>("ListExportJobsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number), ExportSourceType: S.optional(S.String), JobStatus: S.optional(S.String)}) {}
export class ListImportJobsRequest extends S.Class<ListImportJobsRequest>("ListImportJobsRequest")({ImportDestinationType: S.optional(S.String), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListMultiRegionEndpointsRequest extends S.Class<ListMultiRegionEndpointsRequest>("ListMultiRegionEndpointsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListResourceTenantsRequest extends S.Class<ListResourceTenantsRequest>("ListResourceTenantsRequest")({ResourceArn: S.String, PageSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSuppressedDestinationsRequest extends S.Class<ListSuppressedDestinationsRequest>("ListSuppressedDestinationsRequest")({Reasons: S.optional(SuppressionListReasons), StartDate: S.optional(S.Date), EndDate: S.optional(S.Date), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListTenantsRequest extends S.Class<ListTenantsRequest>("ListTenantsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class PutAccountDedicatedIpWarmupAttributesRequest extends S.Class<PutAccountDedicatedIpWarmupAttributesRequest>("PutAccountDedicatedIpWarmupAttributesRequest")({AutoWarmupEnabled: S.optional(S.Boolean)}) {}
export class PutAccountDedicatedIpWarmupAttributesResponse extends S.Class<PutAccountDedicatedIpWarmupAttributesResponse>("PutAccountDedicatedIpWarmupAttributesResponse")({}) {}
export class PutAccountDetailsRequest extends S.Class<PutAccountDetailsRequest>("PutAccountDetailsRequest")({MailType: S.String, WebsiteURL: S.String, ContactLanguage: S.optional(S.String), UseCaseDescription: S.optional(S.String), AdditionalContactEmailAddresses: S.optional(AdditionalContactEmailAddresses), ProductionAccessEnabled: S.optional(S.Boolean)}) {}
export class PutAccountDetailsResponse extends S.Class<PutAccountDetailsResponse>("PutAccountDetailsResponse")({}) {}
export class PutAccountSendingAttributesRequest extends S.Class<PutAccountSendingAttributesRequest>("PutAccountSendingAttributesRequest")({SendingEnabled: S.optional(S.Boolean)}) {}
export class PutAccountSendingAttributesResponse extends S.Class<PutAccountSendingAttributesResponse>("PutAccountSendingAttributesResponse")({}) {}
export class DashboardAttributes extends S.Class<DashboardAttributes>("DashboardAttributes")({EngagementMetrics: S.optional(S.String)}) {}
export class GuardianAttributes extends S.Class<GuardianAttributes>("GuardianAttributes")({OptimizedSharedDelivery: S.optional(S.String)}) {}
export class VdmAttributes extends S.Class<VdmAttributes>("VdmAttributes")({VdmEnabled: S.String, DashboardAttributes: S.optional(DashboardAttributes), GuardianAttributes: S.optional(GuardianAttributes)}) {}
export class PutAccountVdmAttributesRequest extends S.Class<PutAccountVdmAttributesRequest>("PutAccountVdmAttributesRequest")({VdmAttributes: VdmAttributes}) {}
export class PutAccountVdmAttributesResponse extends S.Class<PutAccountVdmAttributesResponse>("PutAccountVdmAttributesResponse")({}) {}
export class PutConfigurationSetArchivingOptionsRequest extends S.Class<PutConfigurationSetArchivingOptionsRequest>("PutConfigurationSetArchivingOptionsRequest")({ConfigurationSetName: S.String, ArchiveArn: S.optional(S.String)}) {}
export class PutConfigurationSetArchivingOptionsResponse extends S.Class<PutConfigurationSetArchivingOptionsResponse>("PutConfigurationSetArchivingOptionsResponse")({}) {}
export class PutConfigurationSetDeliveryOptionsRequest extends S.Class<PutConfigurationSetDeliveryOptionsRequest>("PutConfigurationSetDeliveryOptionsRequest")({ConfigurationSetName: S.String, TlsPolicy: S.optional(S.String), SendingPoolName: S.optional(S.String), MaxDeliverySeconds: S.optional(S.Number)}) {}
export class PutConfigurationSetDeliveryOptionsResponse extends S.Class<PutConfigurationSetDeliveryOptionsResponse>("PutConfigurationSetDeliveryOptionsResponse")({}) {}
export class PutConfigurationSetReputationOptionsRequest extends S.Class<PutConfigurationSetReputationOptionsRequest>("PutConfigurationSetReputationOptionsRequest")({ConfigurationSetName: S.String, ReputationMetricsEnabled: S.optional(S.Boolean)}) {}
export class PutConfigurationSetReputationOptionsResponse extends S.Class<PutConfigurationSetReputationOptionsResponse>("PutConfigurationSetReputationOptionsResponse")({}) {}
export class PutConfigurationSetSendingOptionsRequest extends S.Class<PutConfigurationSetSendingOptionsRequest>("PutConfigurationSetSendingOptionsRequest")({ConfigurationSetName: S.String, SendingEnabled: S.optional(S.Boolean)}) {}
export class PutConfigurationSetSendingOptionsResponse extends S.Class<PutConfigurationSetSendingOptionsResponse>("PutConfigurationSetSendingOptionsResponse")({}) {}
export class PutConfigurationSetTrackingOptionsRequest extends S.Class<PutConfigurationSetTrackingOptionsRequest>("PutConfigurationSetTrackingOptionsRequest")({ConfigurationSetName: S.String, CustomRedirectDomain: S.optional(S.String), HttpsPolicy: S.optional(S.String)}) {}
export class PutConfigurationSetTrackingOptionsResponse extends S.Class<PutConfigurationSetTrackingOptionsResponse>("PutConfigurationSetTrackingOptionsResponse")({}) {}
export class DashboardOptions extends S.Class<DashboardOptions>("DashboardOptions")({EngagementMetrics: S.optional(S.String)}) {}
export class GuardianOptions extends S.Class<GuardianOptions>("GuardianOptions")({OptimizedSharedDelivery: S.optional(S.String)}) {}
export class VdmOptions extends S.Class<VdmOptions>("VdmOptions")({DashboardOptions: S.optional(DashboardOptions), GuardianOptions: S.optional(GuardianOptions)}) {}
export class PutConfigurationSetVdmOptionsRequest extends S.Class<PutConfigurationSetVdmOptionsRequest>("PutConfigurationSetVdmOptionsRequest")({ConfigurationSetName: S.String, VdmOptions: S.optional(VdmOptions)}) {}
export class PutConfigurationSetVdmOptionsResponse extends S.Class<PutConfigurationSetVdmOptionsResponse>("PutConfigurationSetVdmOptionsResponse")({}) {}
export class PutDedicatedIpInPoolRequest extends S.Class<PutDedicatedIpInPoolRequest>("PutDedicatedIpInPoolRequest")({Ip: S.String, DestinationPoolName: S.String}) {}
export class PutDedicatedIpInPoolResponse extends S.Class<PutDedicatedIpInPoolResponse>("PutDedicatedIpInPoolResponse")({}) {}
export class PutDedicatedIpPoolScalingAttributesRequest extends S.Class<PutDedicatedIpPoolScalingAttributesRequest>("PutDedicatedIpPoolScalingAttributesRequest")({PoolName: S.String, ScalingMode: S.String}) {}
export class PutDedicatedIpPoolScalingAttributesResponse extends S.Class<PutDedicatedIpPoolScalingAttributesResponse>("PutDedicatedIpPoolScalingAttributesResponse")({}) {}
export class PutDedicatedIpWarmupAttributesRequest extends S.Class<PutDedicatedIpWarmupAttributesRequest>("PutDedicatedIpWarmupAttributesRequest")({Ip: S.String, WarmupPercentage: S.Number}) {}
export class PutDedicatedIpWarmupAttributesResponse extends S.Class<PutDedicatedIpWarmupAttributesResponse>("PutDedicatedIpWarmupAttributesResponse")({}) {}
export const IspNameList = S.Array(S.String);
export class InboxPlacementTrackingOption extends S.Class<InboxPlacementTrackingOption>("InboxPlacementTrackingOption")({Global: S.optional(S.Boolean), TrackedIsps: S.optional(IspNameList)}) {}
export class DomainDeliverabilityTrackingOption extends S.Class<DomainDeliverabilityTrackingOption>("DomainDeliverabilityTrackingOption")({Domain: S.optional(S.String), SubscriptionStartDate: S.optional(S.Date), InboxPlacementTrackingOption: S.optional(InboxPlacementTrackingOption)}) {}
export const DomainDeliverabilityTrackingOptions = S.Array(DomainDeliverabilityTrackingOption);
export class PutDeliverabilityDashboardOptionRequest extends S.Class<PutDeliverabilityDashboardOptionRequest>("PutDeliverabilityDashboardOptionRequest")({DashboardEnabled: S.Boolean, SubscribedDomains: S.optional(DomainDeliverabilityTrackingOptions)}) {}
export class PutDeliverabilityDashboardOptionResponse extends S.Class<PutDeliverabilityDashboardOptionResponse>("PutDeliverabilityDashboardOptionResponse")({}) {}
export class PutEmailIdentityConfigurationSetAttributesRequest extends S.Class<PutEmailIdentityConfigurationSetAttributesRequest>("PutEmailIdentityConfigurationSetAttributesRequest")({EmailIdentity: S.String, ConfigurationSetName: S.optional(S.String)}) {}
export class PutEmailIdentityConfigurationSetAttributesResponse extends S.Class<PutEmailIdentityConfigurationSetAttributesResponse>("PutEmailIdentityConfigurationSetAttributesResponse")({}) {}
export class PutEmailIdentityDkimAttributesRequest extends S.Class<PutEmailIdentityDkimAttributesRequest>("PutEmailIdentityDkimAttributesRequest")({EmailIdentity: S.String, SigningEnabled: S.optional(S.Boolean)}) {}
export class PutEmailIdentityDkimAttributesResponse extends S.Class<PutEmailIdentityDkimAttributesResponse>("PutEmailIdentityDkimAttributesResponse")({}) {}
export class DkimSigningAttributes extends S.Class<DkimSigningAttributes>("DkimSigningAttributes")({DomainSigningSelector: S.optional(S.String), DomainSigningPrivateKey: S.optional(S.String), NextSigningKeyLength: S.optional(S.String), DomainSigningAttributesOrigin: S.optional(S.String)}) {}
export class PutEmailIdentityDkimSigningAttributesRequest extends S.Class<PutEmailIdentityDkimSigningAttributesRequest>("PutEmailIdentityDkimSigningAttributesRequest")({EmailIdentity: S.String, SigningAttributesOrigin: S.String, SigningAttributes: S.optional(DkimSigningAttributes)}) {}
export class PutEmailIdentityFeedbackAttributesRequest extends S.Class<PutEmailIdentityFeedbackAttributesRequest>("PutEmailIdentityFeedbackAttributesRequest")({EmailIdentity: S.String, EmailForwardingEnabled: S.optional(S.Boolean)}) {}
export class PutEmailIdentityFeedbackAttributesResponse extends S.Class<PutEmailIdentityFeedbackAttributesResponse>("PutEmailIdentityFeedbackAttributesResponse")({}) {}
export class PutEmailIdentityMailFromAttributesRequest extends S.Class<PutEmailIdentityMailFromAttributesRequest>("PutEmailIdentityMailFromAttributesRequest")({EmailIdentity: S.String, MailFromDomain: S.optional(S.String), BehaviorOnMxFailure: S.optional(S.String)}) {}
export class PutEmailIdentityMailFromAttributesResponse extends S.Class<PutEmailIdentityMailFromAttributesResponse>("PutEmailIdentityMailFromAttributesResponse")({}) {}
export class PutSuppressedDestinationRequest extends S.Class<PutSuppressedDestinationRequest>("PutSuppressedDestinationRequest")({EmailAddress: S.String, Reason: S.String}) {}
export class PutSuppressedDestinationResponse extends S.Class<PutSuppressedDestinationResponse>("PutSuppressedDestinationResponse")({}) {}
export class SendCustomVerificationEmailRequest extends S.Class<SendCustomVerificationEmailRequest>("SendCustomVerificationEmailRequest")({EmailAddress: S.String, TemplateName: S.String, ConfigurationSetName: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestRenderEmailTemplateRequest extends S.Class<TestRenderEmailTemplateRequest>("TestRenderEmailTemplateRequest")({TemplateName: S.String, TemplateData: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const EventTypes = S.Array(S.String);
export class KinesisFirehoseDestination extends S.Class<KinesisFirehoseDestination>("KinesisFirehoseDestination")({IamRoleArn: S.String, DeliveryStreamArn: S.String}) {}
export class CloudWatchDimensionConfiguration extends S.Class<CloudWatchDimensionConfiguration>("CloudWatchDimensionConfiguration")({DimensionName: S.String, DimensionValueSource: S.String, DefaultDimensionValue: S.String}) {}
export const CloudWatchDimensionConfigurations = S.Array(CloudWatchDimensionConfiguration);
export class CloudWatchDestination extends S.Class<CloudWatchDestination>("CloudWatchDestination")({DimensionConfigurations: CloudWatchDimensionConfigurations}) {}
export class SnsDestination extends S.Class<SnsDestination>("SnsDestination")({TopicArn: S.String}) {}
export class EventBridgeDestination extends S.Class<EventBridgeDestination>("EventBridgeDestination")({EventBusArn: S.String}) {}
export class PinpointDestination extends S.Class<PinpointDestination>("PinpointDestination")({ApplicationArn: S.optional(S.String)}) {}
export class EventDestinationDefinition extends S.Class<EventDestinationDefinition>("EventDestinationDefinition")({Enabled: S.optional(S.Boolean), MatchingEventTypes: S.optional(EventTypes), KinesisFirehoseDestination: S.optional(KinesisFirehoseDestination), CloudWatchDestination: S.optional(CloudWatchDestination), SnsDestination: S.optional(SnsDestination), EventBridgeDestination: S.optional(EventBridgeDestination), PinpointDestination: S.optional(PinpointDestination)}) {}
export class UpdateConfigurationSetEventDestinationRequest extends S.Class<UpdateConfigurationSetEventDestinationRequest>("UpdateConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestinationName: S.String, EventDestination: EventDestinationDefinition}) {}
export class UpdateConfigurationSetEventDestinationResponse extends S.Class<UpdateConfigurationSetEventDestinationResponse>("UpdateConfigurationSetEventDestinationResponse")({}) {}
export class TopicPreference extends S.Class<TopicPreference>("TopicPreference")({TopicName: S.String, SubscriptionStatus: S.String}) {}
export const TopicPreferenceList = S.Array(TopicPreference);
export class UpdateContactRequest extends S.Class<UpdateContactRequest>("UpdateContactRequest")({ContactListName: S.String, EmailAddress: S.String, TopicPreferences: S.optional(TopicPreferenceList), UnsubscribeAll: S.optional(S.Boolean), AttributesData: S.optional(S.String)}) {}
export class UpdateContactResponse extends S.Class<UpdateContactResponse>("UpdateContactResponse")({}) {}
export class Topic extends S.Class<Topic>("Topic")({TopicName: S.String, DisplayName: S.String, Description: S.optional(S.String), DefaultSubscriptionStatus: S.String}) {}
export const Topics = S.Array(Topic);
export class UpdateContactListRequest extends S.Class<UpdateContactListRequest>("UpdateContactListRequest")({ContactListName: S.String, Topics: S.optional(Topics), Description: S.optional(S.String)}) {}
export class UpdateContactListResponse extends S.Class<UpdateContactListResponse>("UpdateContactListResponse")({}) {}
export class UpdateCustomVerificationEmailTemplateRequest extends S.Class<UpdateCustomVerificationEmailTemplateRequest>("UpdateCustomVerificationEmailTemplateRequest")({TemplateName: S.String, FromEmailAddress: S.String, TemplateSubject: S.String, TemplateContent: S.String, SuccessRedirectionURL: S.String, FailureRedirectionURL: S.String}) {}
export class UpdateCustomVerificationEmailTemplateResponse extends S.Class<UpdateCustomVerificationEmailTemplateResponse>("UpdateCustomVerificationEmailTemplateResponse")({}) {}
export class UpdateEmailIdentityPolicyRequest extends S.Class<UpdateEmailIdentityPolicyRequest>("UpdateEmailIdentityPolicyRequest")({EmailIdentity: S.String, PolicyName: S.String, Policy: S.String}) {}
export class UpdateEmailIdentityPolicyResponse extends S.Class<UpdateEmailIdentityPolicyResponse>("UpdateEmailIdentityPolicyResponse")({}) {}
export class EmailTemplateContent extends S.Class<EmailTemplateContent>("EmailTemplateContent")({Subject: S.optional(S.String), Text: S.optional(S.String), Html: S.optional(S.String)}) {}
export class UpdateEmailTemplateRequest extends S.Class<UpdateEmailTemplateRequest>("UpdateEmailTemplateRequest")({TemplateName: S.String, TemplateContent: EmailTemplateContent}) {}
export class UpdateEmailTemplateResponse extends S.Class<UpdateEmailTemplateResponse>("UpdateEmailTemplateResponse")({}) {}
export class UpdateReputationEntityCustomerManagedStatusRequest extends S.Class<UpdateReputationEntityCustomerManagedStatusRequest>("UpdateReputationEntityCustomerManagedStatusRequest")({ReputationEntityType: S.String, ReputationEntityReference: S.String, SendingStatus: S.String}) {}
export class UpdateReputationEntityCustomerManagedStatusResponse extends S.Class<UpdateReputationEntityCustomerManagedStatusResponse>("UpdateReputationEntityCustomerManagedStatusResponse")({}) {}
export class UpdateReputationEntityPolicyRequest extends S.Class<UpdateReputationEntityPolicyRequest>("UpdateReputationEntityPolicyRequest")({ReputationEntityType: S.String, ReputationEntityReference: S.String, ReputationEntityPolicy: S.String}) {}
export class UpdateReputationEntityPolicyResponse extends S.Class<UpdateReputationEntityPolicyResponse>("UpdateReputationEntityPolicyResponse")({}) {}
export class TrackingOptions extends S.Class<TrackingOptions>("TrackingOptions")({CustomRedirectDomain: S.String, HttpsPolicy: S.optional(S.String)}) {}
export class DeliveryOptions extends S.Class<DeliveryOptions>("DeliveryOptions")({TlsPolicy: S.optional(S.String), SendingPoolName: S.optional(S.String), MaxDeliverySeconds: S.optional(S.Number)}) {}
export class ReputationOptions extends S.Class<ReputationOptions>("ReputationOptions")({ReputationMetricsEnabled: S.optional(S.Boolean), LastFreshStart: S.optional(S.Date)}) {}
export class SendingOptions extends S.Class<SendingOptions>("SendingOptions")({SendingEnabled: S.optional(S.Boolean)}) {}
export class SuppressionConfidenceThreshold extends S.Class<SuppressionConfidenceThreshold>("SuppressionConfidenceThreshold")({ConfidenceVerdictThreshold: S.String}) {}
export class SuppressionConditionThreshold extends S.Class<SuppressionConditionThreshold>("SuppressionConditionThreshold")({ConditionThresholdEnabled: S.String, OverallConfidenceThreshold: S.optional(SuppressionConfidenceThreshold)}) {}
export class SuppressionValidationOptions extends S.Class<SuppressionValidationOptions>("SuppressionValidationOptions")({ConditionThreshold: SuppressionConditionThreshold}) {}
export class SuppressionOptions extends S.Class<SuppressionOptions>("SuppressionOptions")({SuppressedReasons: S.optional(SuppressionListReasons), ValidationOptions: S.optional(SuppressionValidationOptions)}) {}
export class ArchivingOptions extends S.Class<ArchivingOptions>("ArchivingOptions")({ArchiveArn: S.optional(S.String)}) {}
export class ExportDestination extends S.Class<ExportDestination>("ExportDestination")({DataFormat: S.String, S3Url: S.optional(S.String)}) {}
export class ImportDataSource extends S.Class<ImportDataSource>("ImportDataSource")({S3Url: S.String, DataFormat: S.String}) {}
export class SendQuota extends S.Class<SendQuota>("SendQuota")({Max24HourSend: S.optional(S.Number), MaxSendRate: S.optional(S.Number), SentLast24Hours: S.optional(S.Number)}) {}
export class SuppressionValidationAttributes extends S.Class<SuppressionValidationAttributes>("SuppressionValidationAttributes")({ConditionThreshold: SuppressionConditionThreshold}) {}
export class SuppressionAttributes extends S.Class<SuppressionAttributes>("SuppressionAttributes")({SuppressedReasons: S.optional(SuppressionListReasons), ValidationAttributes: S.optional(SuppressionValidationAttributes)}) {}
export class DedicatedIp extends S.Class<DedicatedIp>("DedicatedIp")({Ip: S.String, WarmupStatus: S.String, WarmupPercentage: S.Number, PoolName: S.optional(S.String)}) {}
export const DedicatedIpList = S.Array(DedicatedIp);
export const ConfigurationSetNameList = S.Array(S.String);
export const ListOfDedicatedIpPools = S.Array(S.String);
export class DeliverabilityTestReport extends S.Class<DeliverabilityTestReport>("DeliverabilityTestReport")({ReportId: S.optional(S.String), ReportName: S.optional(S.String), Subject: S.optional(S.String), FromEmailAddress: S.optional(S.String), CreateDate: S.optional(S.Date), DeliverabilityTestStatus: S.optional(S.String)}) {}
export const DeliverabilityTestReports = S.Array(DeliverabilityTestReport);
export const IpList = S.Array(S.String);
export const Esps = S.Array(S.String);
export class DomainDeliverabilityCampaign extends S.Class<DomainDeliverabilityCampaign>("DomainDeliverabilityCampaign")({CampaignId: S.optional(S.String), ImageUrl: S.optional(S.String), Subject: S.optional(S.String), FromAddress: S.optional(S.String), SendingIps: S.optional(IpList), FirstSeenDateTime: S.optional(S.Date), LastSeenDateTime: S.optional(S.Date), InboxCount: S.optional(S.Number), SpamCount: S.optional(S.Number), ReadRate: S.optional(S.Number), DeleteRate: S.optional(S.Number), ReadDeleteRate: S.optional(S.Number), ProjectedVolume: S.optional(S.Number), Esps: S.optional(Esps)}) {}
export const DomainDeliverabilityCampaignList = S.Array(DomainDeliverabilityCampaign);
export const ListRecommendationsFilter = S.Record({key: S.String, value: S.String});
export const ReputationEntityFilter = S.Record({key: S.String, value: S.String});
export const ListTenantResourcesFilter = S.Record({key: S.String, value: S.String});
export const DnsTokenList = S.Array(S.String);
export class MessageTag extends S.Class<MessageTag>("MessageTag")({Name: S.String, Value: S.String}) {}
export const MessageTagList = S.Array(MessageTag);
export class MessageHeader extends S.Class<MessageHeader>("MessageHeader")({Name: S.String, Value: S.String}) {}
export const MessageHeaderList = S.Array(MessageHeader);
export class Attachment extends S.Class<Attachment>("Attachment")({RawContent: H.StreamBody(), ContentDisposition: S.optional(S.String), FileName: S.String, ContentDescription: S.optional(S.String), ContentId: S.optional(S.String), ContentTransferEncoding: S.optional(S.String), ContentType: S.optional(S.String)}) {}
export const AttachmentList = S.Array(Attachment);
export class Template extends S.Class<Template>("Template")({TemplateName: S.optional(S.String), TemplateArn: S.optional(S.String), TemplateContent: S.optional(EmailTemplateContent), TemplateData: S.optional(S.String), Headers: S.optional(MessageHeaderList), Attachments: S.optional(AttachmentList)}) {}
export class BulkEmailContent extends S.Class<BulkEmailContent>("BulkEmailContent")({Template: S.optional(Template)}) {}
export class Destination extends S.Class<Destination>("Destination")({ToAddresses: S.optional(EmailAddressList), CcAddresses: S.optional(EmailAddressList), BccAddresses: S.optional(EmailAddressList)}) {}
export class ListManagementOptions extends S.Class<ListManagementOptions>("ListManagementOptions")({ContactListName: S.String, TopicName: S.optional(S.String)}) {}
export class CreateContactRequest extends S.Class<CreateContactRequest>("CreateContactRequest")({ContactListName: S.String, EmailAddress: S.String, TopicPreferences: S.optional(TopicPreferenceList), UnsubscribeAll: S.optional(S.Boolean), AttributesData: S.optional(S.String)}) {}
export class CreateContactResponse extends S.Class<CreateContactResponse>("CreateContactResponse")({}) {}
export class CreateContactListRequest extends S.Class<CreateContactListRequest>("CreateContactListRequest")({ContactListName: S.String, Topics: S.optional(Topics), Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateContactListResponse extends S.Class<CreateContactListResponse>("CreateContactListResponse")({}) {}
export class CreateEmailIdentityRequest extends S.Class<CreateEmailIdentityRequest>("CreateEmailIdentityRequest")({EmailIdentity: S.String, Tags: S.optional(TagList), DkimSigningAttributes: S.optional(DkimSigningAttributes), ConfigurationSetName: S.optional(S.String)}) {}
export class CreateEmailTemplateRequest extends S.Class<CreateEmailTemplateRequest>("CreateEmailTemplateRequest")({TemplateName: S.String, TemplateContent: EmailTemplateContent, Tags: S.optional(TagList)}) {}
export class CreateEmailTemplateResponse extends S.Class<CreateEmailTemplateResponse>("CreateEmailTemplateResponse")({}) {}
export class CreateTenantResponse extends S.Class<CreateTenantResponse>("CreateTenantResponse")({TenantName: S.optional(S.String), TenantId: S.optional(S.String), TenantArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), Tags: S.optional(TagList), SendingStatus: S.optional(S.String)}) {}
export class DeleteMultiRegionEndpointResponse extends S.Class<DeleteMultiRegionEndpointResponse>("DeleteMultiRegionEndpointResponse")({Status: S.optional(S.String)}) {}
export class GetConfigurationSetResponse extends S.Class<GetConfigurationSetResponse>("GetConfigurationSetResponse")({ConfigurationSetName: S.optional(S.String), TrackingOptions: S.optional(TrackingOptions), DeliveryOptions: S.optional(DeliveryOptions), ReputationOptions: S.optional(ReputationOptions), SendingOptions: S.optional(SendingOptions), Tags: S.optional(TagList), SuppressionOptions: S.optional(SuppressionOptions), VdmOptions: S.optional(VdmOptions), ArchivingOptions: S.optional(ArchivingOptions)}) {}
export class GetContactResponse extends S.Class<GetContactResponse>("GetContactResponse")({ContactListName: S.optional(S.String), EmailAddress: S.optional(S.String), TopicPreferences: S.optional(TopicPreferenceList), TopicDefaultPreferences: S.optional(TopicPreferenceList), UnsubscribeAll: S.optional(S.Boolean), AttributesData: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export class GetContactListResponse extends S.Class<GetContactListResponse>("GetContactListResponse")({ContactListName: S.optional(S.String), Topics: S.optional(Topics), Description: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), Tags: S.optional(TagList)}) {}
export class GetCustomVerificationEmailTemplateResponse extends S.Class<GetCustomVerificationEmailTemplateResponse>("GetCustomVerificationEmailTemplateResponse")({TemplateName: S.optional(S.String), FromEmailAddress: S.optional(S.String), TemplateSubject: S.optional(S.String), TemplateContent: S.optional(S.String), Tags: S.optional(TagList), SuccessRedirectionURL: S.optional(S.String), FailureRedirectionURL: S.optional(S.String)}) {}
export class GetDedicatedIpsResponse extends S.Class<GetDedicatedIpsResponse>("GetDedicatedIpsResponse")({DedicatedIps: S.optional(DedicatedIpList), NextToken: S.optional(S.String)}) {}
export const PolicyMap = S.Record({key: S.String, value: S.String});
export class GetEmailIdentityPoliciesResponse extends S.Class<GetEmailIdentityPoliciesResponse>("GetEmailIdentityPoliciesResponse")({Policies: S.optional(PolicyMap)}) {}
export class GetEmailTemplateResponse extends S.Class<GetEmailTemplateResponse>("GetEmailTemplateResponse")({TemplateName: S.String, TemplateContent: EmailTemplateContent, Tags: S.optional(TagList)}) {}
export class SuppressionListDestination extends S.Class<SuppressionListDestination>("SuppressionListDestination")({SuppressionListImportAction: S.String}) {}
export class ContactListDestination extends S.Class<ContactListDestination>("ContactListDestination")({ContactListName: S.String, ContactListImportAction: S.String}) {}
export class ImportDestination extends S.Class<ImportDestination>("ImportDestination")({SuppressionListDestination: S.optional(SuppressionListDestination), ContactListDestination: S.optional(ContactListDestination)}) {}
export class FailureInfo extends S.Class<FailureInfo>("FailureInfo")({FailedRecordsS3Url: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class GetImportJobResponse extends S.Class<GetImportJobResponse>("GetImportJobResponse")({JobId: S.optional(S.String), ImportDestination: S.optional(ImportDestination), ImportDataSource: S.optional(ImportDataSource), FailureInfo: S.optional(FailureInfo), JobStatus: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date), ProcessedRecordsCount: S.optional(S.Number), FailedRecordsCount: S.optional(S.Number)}) {}
export class ListConfigurationSetsResponse extends S.Class<ListConfigurationSetsResponse>("ListConfigurationSetsResponse")({ConfigurationSets: S.optional(ConfigurationSetNameList), NextToken: S.optional(S.String)}) {}
export class ListDedicatedIpPoolsResponse extends S.Class<ListDedicatedIpPoolsResponse>("ListDedicatedIpPoolsResponse")({DedicatedIpPools: S.optional(ListOfDedicatedIpPools), NextToken: S.optional(S.String)}) {}
export class ListDeliverabilityTestReportsResponse extends S.Class<ListDeliverabilityTestReportsResponse>("ListDeliverabilityTestReportsResponse")({DeliverabilityTestReports: DeliverabilityTestReports, NextToken: S.optional(S.String)}) {}
export class ListDomainDeliverabilityCampaignsResponse extends S.Class<ListDomainDeliverabilityCampaignsResponse>("ListDomainDeliverabilityCampaignsResponse")({DomainDeliverabilityCampaigns: DomainDeliverabilityCampaignList, NextToken: S.optional(S.String)}) {}
export class ListRecommendationsRequest extends S.Class<ListRecommendationsRequest>("ListRecommendationsRequest")({Filter: S.optional(ListRecommendationsFilter), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListReputationEntitiesRequest extends S.Class<ListReputationEntitiesRequest>("ListReputationEntitiesRequest")({Filter: S.optional(ReputationEntityFilter), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: TagList}) {}
export class ListTenantResourcesRequest extends S.Class<ListTenantResourcesRequest>("ListTenantResourcesRequest")({TenantName: S.String, Filter: S.optional(ListTenantResourcesFilter), PageSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PutConfigurationSetSuppressionOptionsRequest extends S.Class<PutConfigurationSetSuppressionOptionsRequest>("PutConfigurationSetSuppressionOptionsRequest")({ConfigurationSetName: S.String, SuppressedReasons: S.optional(SuppressionListReasons), ValidationOptions: S.optional(SuppressionValidationOptions)}) {}
export class PutConfigurationSetSuppressionOptionsResponse extends S.Class<PutConfigurationSetSuppressionOptionsResponse>("PutConfigurationSetSuppressionOptionsResponse")({}) {}
export class PutEmailIdentityDkimSigningAttributesResponse extends S.Class<PutEmailIdentityDkimSigningAttributesResponse>("PutEmailIdentityDkimSigningAttributesResponse")({DkimStatus: S.optional(S.String), DkimTokens: S.optional(DnsTokenList), SigningHostedZone: S.optional(S.String)}) {}
export class SendCustomVerificationEmailResponse extends S.Class<SendCustomVerificationEmailResponse>("SendCustomVerificationEmailResponse")({MessageId: S.optional(S.String)}) {}
export class Content extends S.Class<Content>("Content")({Data: S.String, Charset: S.optional(S.String)}) {}
export class Body extends S.Class<Body>("Body")({Text: S.optional(Content), Html: S.optional(Content)}) {}
export class Message extends S.Class<Message>("Message")({Subject: Content, Body: Body, Headers: S.optional(MessageHeaderList), Attachments: S.optional(AttachmentList)}) {}
export class RawMessage extends S.Class<RawMessage>("RawMessage")({Data: H.StreamBody()}) {}
export class EmailContent extends S.Class<EmailContent>("EmailContent")({Simple: S.optional(Message), Raw: S.optional(RawMessage), Template: S.optional(Template)}) {}
export class SendEmailRequest extends S.Class<SendEmailRequest>("SendEmailRequest")({FromEmailAddress: S.optional(S.String), FromEmailAddressIdentityArn: S.optional(S.String), Destination: S.optional(Destination), ReplyToAddresses: S.optional(EmailAddressList), FeedbackForwardingEmailAddress: S.optional(S.String), FeedbackForwardingEmailAddressIdentityArn: S.optional(S.String), Content: EmailContent, EmailTags: S.optional(MessageTagList), ConfigurationSetName: S.optional(S.String), EndpointId: S.optional(S.String), TenantName: S.optional(S.String), ListManagementOptions: S.optional(ListManagementOptions)}) {}
export class TestRenderEmailTemplateResponse extends S.Class<TestRenderEmailTemplateResponse>("TestRenderEmailTemplateResponse")({RenderedTemplate: S.String}) {}
export const Dimensions = S.Record({key: S.String, value: S.String});
export class RouteDetails extends S.Class<RouteDetails>("RouteDetails")({Region: S.String}) {}
export const RoutesDetails = S.Array(RouteDetails);
export class ReviewDetails extends S.Class<ReviewDetails>("ReviewDetails")({Status: S.optional(S.String), CaseId: S.optional(S.String)}) {}
export class TopicFilter extends S.Class<TopicFilter>("TopicFilter")({TopicName: S.optional(S.String), UseDefaultIfPreferenceUnavailable: S.optional(S.Boolean)}) {}
export const Regions = S.Array(S.String);
export const ExportDimensionValue = S.Array(S.String);
export const EmailAddressFilterList = S.Array(S.String);
export const EmailSubjectFilterList = S.Array(S.String);
export const IspFilterList = S.Array(S.String);
export const LastDeliveryEventList = S.Array(S.String);
export const LastEngagementEventList = S.Array(S.String);
export class BatchGetMetricDataQuery extends S.Class<BatchGetMetricDataQuery>("BatchGetMetricDataQuery")({Id: S.String, Namespace: S.String, Metric: S.String, Dimensions: S.optional(Dimensions), StartDate: S.Date, EndDate: S.Date}) {}
export const BatchGetMetricDataQueries = S.Array(BatchGetMetricDataQuery);
export class Details extends S.Class<Details>("Details")({RoutesDetails: RoutesDetails}) {}
export class AccountDetails extends S.Class<AccountDetails>("AccountDetails")({MailType: S.optional(S.String), WebsiteURL: S.optional(S.String), ContactLanguage: S.optional(S.String), UseCaseDescription: S.optional(S.String), AdditionalContactEmailAddresses: S.optional(AdditionalContactEmailAddresses), ReviewDetails: S.optional(ReviewDetails)}) {}
export class EventDestination extends S.Class<EventDestination>("EventDestination")({Name: S.String, Enabled: S.optional(S.Boolean), MatchingEventTypes: EventTypes, KinesisFirehoseDestination: S.optional(KinesisFirehoseDestination), CloudWatchDestination: S.optional(CloudWatchDestination), SnsDestination: S.optional(SnsDestination), EventBridgeDestination: S.optional(EventBridgeDestination), PinpointDestination: S.optional(PinpointDestination)}) {}
export const EventDestinations = S.Array(EventDestination);
export class DedicatedIpPool extends S.Class<DedicatedIpPool>("DedicatedIpPool")({PoolName: S.String, ScalingMode: S.String}) {}
export class PlacementStatistics extends S.Class<PlacementStatistics>("PlacementStatistics")({InboxPercentage: S.optional(S.Number), SpamPercentage: S.optional(S.Number), MissingPercentage: S.optional(S.Number), SpfPercentage: S.optional(S.Number), DkimPercentage: S.optional(S.Number)}) {}
export class IspPlacement extends S.Class<IspPlacement>("IspPlacement")({IspName: S.optional(S.String), PlacementStatistics: S.optional(PlacementStatistics)}) {}
export const IspPlacements = S.Array(IspPlacement);
export class VolumeStatistics extends S.Class<VolumeStatistics>("VolumeStatistics")({InboxRawCount: S.optional(S.Number), SpamRawCount: S.optional(S.Number), ProjectedInbox: S.optional(S.Number), ProjectedSpam: S.optional(S.Number)}) {}
export class DomainIspPlacement extends S.Class<DomainIspPlacement>("DomainIspPlacement")({IspName: S.optional(S.String), InboxRawCount: S.optional(S.Number), SpamRawCount: S.optional(S.Number), InboxPercentage: S.optional(S.Number), SpamPercentage: S.optional(S.Number)}) {}
export const DomainIspPlacements = S.Array(DomainIspPlacement);
export class DailyVolume extends S.Class<DailyVolume>("DailyVolume")({StartDate: S.optional(S.Date), VolumeStatistics: S.optional(VolumeStatistics), DomainIspPlacements: S.optional(DomainIspPlacements)}) {}
export const DailyVolumes = S.Array(DailyVolume);
export class DkimAttributes extends S.Class<DkimAttributes>("DkimAttributes")({SigningEnabled: S.optional(S.Boolean), Status: S.optional(S.String), Tokens: S.optional(DnsTokenList), SigningHostedZone: S.optional(S.String), SigningAttributesOrigin: S.optional(S.String), NextSigningKeyLength: S.optional(S.String), CurrentSigningKeyLength: S.optional(S.String), LastKeyGenerationTimestamp: S.optional(S.Date)}) {}
export class MailFromAttributes extends S.Class<MailFromAttributes>("MailFromAttributes")({MailFromDomain: S.String, MailFromDomainStatus: S.String, BehaviorOnMxFailure: S.String}) {}
export class ExportStatistics extends S.Class<ExportStatistics>("ExportStatistics")({ProcessedRecordsCount: S.optional(S.Number), ExportedRecordsCount: S.optional(S.Number)}) {}
export class Route extends S.Class<Route>("Route")({Region: S.String}) {}
export const Routes = S.Array(Route);
export class Tenant extends S.Class<Tenant>("Tenant")({TenantName: S.optional(S.String), TenantId: S.optional(S.String), TenantArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), Tags: S.optional(TagList), SendingStatus: S.optional(S.String)}) {}
export class ContactList extends S.Class<ContactList>("ContactList")({ContactListName: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export const ListOfContactLists = S.Array(ContactList);
export class ListContactsFilter extends S.Class<ListContactsFilter>("ListContactsFilter")({FilteredStatus: S.optional(S.String), TopicFilter: S.optional(TopicFilter)}) {}
export class CustomVerificationEmailTemplateMetadata extends S.Class<CustomVerificationEmailTemplateMetadata>("CustomVerificationEmailTemplateMetadata")({TemplateName: S.optional(S.String), FromEmailAddress: S.optional(S.String), TemplateSubject: S.optional(S.String), SuccessRedirectionURL: S.optional(S.String), FailureRedirectionURL: S.optional(S.String)}) {}
export const CustomVerificationEmailTemplatesList = S.Array(CustomVerificationEmailTemplateMetadata);
export class IdentityInfo extends S.Class<IdentityInfo>("IdentityInfo")({IdentityType: S.optional(S.String), IdentityName: S.optional(S.String), SendingEnabled: S.optional(S.Boolean), VerificationStatus: S.optional(S.String)}) {}
export const IdentityInfoList = S.Array(IdentityInfo);
export class EmailTemplateMetadata extends S.Class<EmailTemplateMetadata>("EmailTemplateMetadata")({TemplateName: S.optional(S.String), CreatedTimestamp: S.optional(S.Date)}) {}
export const EmailTemplateMetadataList = S.Array(EmailTemplateMetadata);
export class ExportJobSummary extends S.Class<ExportJobSummary>("ExportJobSummary")({JobId: S.optional(S.String), ExportSourceType: S.optional(S.String), JobStatus: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date)}) {}
export const ExportJobSummaryList = S.Array(ExportJobSummary);
export class ImportJobSummary extends S.Class<ImportJobSummary>("ImportJobSummary")({JobId: S.optional(S.String), ImportDestination: S.optional(ImportDestination), JobStatus: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), ProcessedRecordsCount: S.optional(S.Number), FailedRecordsCount: S.optional(S.Number)}) {}
export const ImportJobSummaryList = S.Array(ImportJobSummary);
export class MultiRegionEndpoint extends S.Class<MultiRegionEndpoint>("MultiRegionEndpoint")({EndpointName: S.optional(S.String), Status: S.optional(S.String), EndpointId: S.optional(S.String), Regions: S.optional(Regions), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export const MultiRegionEndpoints = S.Array(MultiRegionEndpoint);
export class StatusRecord extends S.Class<StatusRecord>("StatusRecord")({Status: S.optional(S.String), Cause: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export class ReputationEntity extends S.Class<ReputationEntity>("ReputationEntity")({ReputationEntityReference: S.optional(S.String), ReputationEntityType: S.optional(S.String), ReputationManagementPolicy: S.optional(S.String), CustomerManagedStatus: S.optional(StatusRecord), AwsSesManagedStatus: S.optional(StatusRecord), SendingStatusAggregate: S.optional(S.String), ReputationImpact: S.optional(S.String)}) {}
export const ReputationEntitiesList = S.Array(ReputationEntity);
export class ResourceTenantMetadata extends S.Class<ResourceTenantMetadata>("ResourceTenantMetadata")({TenantName: S.optional(S.String), TenantId: S.optional(S.String), ResourceArn: S.optional(S.String), AssociatedTimestamp: S.optional(S.Date)}) {}
export const ResourceTenantMetadataList = S.Array(ResourceTenantMetadata);
export class SuppressedDestinationSummary extends S.Class<SuppressedDestinationSummary>("SuppressedDestinationSummary")({EmailAddress: S.String, Reason: S.String, LastUpdateTime: S.Date}) {}
export const SuppressedDestinationSummaries = S.Array(SuppressedDestinationSummary);
export class TenantInfo extends S.Class<TenantInfo>("TenantInfo")({TenantName: S.optional(S.String), TenantId: S.optional(S.String), TenantArn: S.optional(S.String), CreatedTimestamp: S.optional(S.Date)}) {}
export const TenantInfoList = S.Array(TenantInfo);
export const ExportDimensions = S.Record({key: S.String, value: ExportDimensionValue});
export class ExportMetric extends S.Class<ExportMetric>("ExportMetric")({Name: S.optional(S.String), Aggregation: S.optional(S.String)}) {}
export const ExportMetrics = S.Array(ExportMetric);
export class MessageInsightsFilters extends S.Class<MessageInsightsFilters>("MessageInsightsFilters")({FromEmailAddress: S.optional(EmailAddressFilterList), Destination: S.optional(EmailAddressFilterList), Subject: S.optional(EmailSubjectFilterList), Isp: S.optional(IspFilterList), LastDeliveryEvent: S.optional(LastDeliveryEventList), LastEngagementEvent: S.optional(LastEngagementEventList)}) {}
export class ReplacementTemplate extends S.Class<ReplacementTemplate>("ReplacementTemplate")({ReplacementTemplateData: S.optional(S.String)}) {}
export class BatchGetMetricDataRequest extends S.Class<BatchGetMetricDataRequest>("BatchGetMetricDataRequest")({Queries: BatchGetMetricDataQueries}) {}
export class CreateConfigurationSetRequest extends S.Class<CreateConfigurationSetRequest>("CreateConfigurationSetRequest")({ConfigurationSetName: S.String, TrackingOptions: S.optional(TrackingOptions), DeliveryOptions: S.optional(DeliveryOptions), ReputationOptions: S.optional(ReputationOptions), SendingOptions: S.optional(SendingOptions), Tags: S.optional(TagList), SuppressionOptions: S.optional(SuppressionOptions), VdmOptions: S.optional(VdmOptions), ArchivingOptions: S.optional(ArchivingOptions)}) {}
export class CreateConfigurationSetResponse extends S.Class<CreateConfigurationSetResponse>("CreateConfigurationSetResponse")({}) {}
export class CreateEmailIdentityResponse extends S.Class<CreateEmailIdentityResponse>("CreateEmailIdentityResponse")({IdentityType: S.optional(S.String), VerifiedForSendingStatus: S.optional(S.Boolean), DkimAttributes: S.optional(DkimAttributes)}) {}
export class CreateImportJobRequest extends S.Class<CreateImportJobRequest>("CreateImportJobRequest")({ImportDestination: ImportDestination, ImportDataSource: ImportDataSource}) {}
export class CreateMultiRegionEndpointRequest extends S.Class<CreateMultiRegionEndpointRequest>("CreateMultiRegionEndpointRequest")({EndpointName: S.String, Details: Details, Tags: S.optional(TagList)}) {}
export class GetAccountResponse extends S.Class<GetAccountResponse>("GetAccountResponse")({DedicatedIpAutoWarmupEnabled: S.optional(S.Boolean), EnforcementStatus: S.optional(S.String), ProductionAccessEnabled: S.optional(S.Boolean), SendQuota: S.optional(SendQuota), SendingEnabled: S.optional(S.Boolean), SuppressionAttributes: S.optional(SuppressionAttributes), Details: S.optional(AccountDetails), VdmAttributes: S.optional(VdmAttributes)}) {}
export class GetConfigurationSetEventDestinationsResponse extends S.Class<GetConfigurationSetEventDestinationsResponse>("GetConfigurationSetEventDestinationsResponse")({EventDestinations: S.optional(EventDestinations)}) {}
export class GetDedicatedIpResponse extends S.Class<GetDedicatedIpResponse>("GetDedicatedIpResponse")({DedicatedIp: S.optional(DedicatedIp)}) {}
export class GetDedicatedIpPoolResponse extends S.Class<GetDedicatedIpPoolResponse>("GetDedicatedIpPoolResponse")({DedicatedIpPool: S.optional(DedicatedIpPool)}) {}
export class GetDeliverabilityDashboardOptionsResponse extends S.Class<GetDeliverabilityDashboardOptionsResponse>("GetDeliverabilityDashboardOptionsResponse")({DashboardEnabled: S.Boolean, SubscriptionExpiryDate: S.optional(S.Date), AccountStatus: S.optional(S.String), ActiveSubscribedDomains: S.optional(DomainDeliverabilityTrackingOptions), PendingExpirationSubscribedDomains: S.optional(DomainDeliverabilityTrackingOptions)}) {}
export class GetDeliverabilityTestReportResponse extends S.Class<GetDeliverabilityTestReportResponse>("GetDeliverabilityTestReportResponse")({DeliverabilityTestReport: DeliverabilityTestReport, OverallPlacement: PlacementStatistics, IspPlacements: IspPlacements, Message: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class GetDomainDeliverabilityCampaignResponse extends S.Class<GetDomainDeliverabilityCampaignResponse>("GetDomainDeliverabilityCampaignResponse")({DomainDeliverabilityCampaign: DomainDeliverabilityCampaign}) {}
export class MetricsDataSource extends S.Class<MetricsDataSource>("MetricsDataSource")({Dimensions: ExportDimensions, Namespace: S.String, Metrics: ExportMetrics, StartDate: S.Date, EndDate: S.Date}) {}
export class MessageInsightsDataSource extends S.Class<MessageInsightsDataSource>("MessageInsightsDataSource")({StartDate: S.Date, EndDate: S.Date, Include: S.optional(MessageInsightsFilters), Exclude: S.optional(MessageInsightsFilters), MaxResults: S.optional(S.Number)}) {}
export class ExportDataSource extends S.Class<ExportDataSource>("ExportDataSource")({MetricsDataSource: S.optional(MetricsDataSource), MessageInsightsDataSource: S.optional(MessageInsightsDataSource)}) {}
export class GetExportJobResponse extends S.Class<GetExportJobResponse>("GetExportJobResponse")({JobId: S.optional(S.String), ExportSourceType: S.optional(S.String), JobStatus: S.optional(S.String), ExportDestination: S.optional(ExportDestination), ExportDataSource: S.optional(ExportDataSource), CreatedTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date), FailureInfo: S.optional(FailureInfo), Statistics: S.optional(ExportStatistics)}) {}
export class GetMultiRegionEndpointResponse extends S.Class<GetMultiRegionEndpointResponse>("GetMultiRegionEndpointResponse")({EndpointName: S.optional(S.String), EndpointId: S.optional(S.String), Routes: S.optional(Routes), Status: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export class GetTenantResponse extends S.Class<GetTenantResponse>("GetTenantResponse")({Tenant: S.optional(Tenant)}) {}
export class ListContactListsResponse extends S.Class<ListContactListsResponse>("ListContactListsResponse")({ContactLists: S.optional(ListOfContactLists), NextToken: S.optional(S.String)}) {}
export class ListContactsRequest extends S.Class<ListContactsRequest>("ListContactsRequest")({ContactListName: S.String, Filter: S.optional(ListContactsFilter), PageSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListCustomVerificationEmailTemplatesResponse extends S.Class<ListCustomVerificationEmailTemplatesResponse>("ListCustomVerificationEmailTemplatesResponse")({CustomVerificationEmailTemplates: S.optional(CustomVerificationEmailTemplatesList), NextToken: S.optional(S.String)}) {}
export class ListEmailIdentitiesResponse extends S.Class<ListEmailIdentitiesResponse>("ListEmailIdentitiesResponse")({EmailIdentities: S.optional(IdentityInfoList), NextToken: S.optional(S.String)}) {}
export class ListEmailTemplatesResponse extends S.Class<ListEmailTemplatesResponse>("ListEmailTemplatesResponse")({TemplatesMetadata: S.optional(EmailTemplateMetadataList), NextToken: S.optional(S.String)}) {}
export class ListExportJobsResponse extends S.Class<ListExportJobsResponse>("ListExportJobsResponse")({ExportJobs: S.optional(ExportJobSummaryList), NextToken: S.optional(S.String)}) {}
export class ListImportJobsResponse extends S.Class<ListImportJobsResponse>("ListImportJobsResponse")({ImportJobs: S.optional(ImportJobSummaryList), NextToken: S.optional(S.String)}) {}
export class ListMultiRegionEndpointsResponse extends S.Class<ListMultiRegionEndpointsResponse>("ListMultiRegionEndpointsResponse")({MultiRegionEndpoints: S.optional(MultiRegionEndpoints), NextToken: S.optional(S.String)}) {}
export class ListReputationEntitiesResponse extends S.Class<ListReputationEntitiesResponse>("ListReputationEntitiesResponse")({ReputationEntities: S.optional(ReputationEntitiesList), NextToken: S.optional(S.String)}) {}
export class ListResourceTenantsResponse extends S.Class<ListResourceTenantsResponse>("ListResourceTenantsResponse")({ResourceTenants: S.optional(ResourceTenantMetadataList), NextToken: S.optional(S.String)}) {}
export class ListSuppressedDestinationsResponse extends S.Class<ListSuppressedDestinationsResponse>("ListSuppressedDestinationsResponse")({SuppressedDestinationSummaries: S.optional(SuppressedDestinationSummaries), NextToken: S.optional(S.String)}) {}
export class ListTenantsResponse extends S.Class<ListTenantsResponse>("ListTenantsResponse")({Tenants: S.optional(TenantInfoList), NextToken: S.optional(S.String)}) {}
export class SendEmailResponse extends S.Class<SendEmailResponse>("SendEmailResponse")({MessageId: S.optional(S.String)}) {}
export class BlacklistEntry extends S.Class<BlacklistEntry>("BlacklistEntry")({RblName: S.optional(S.String), ListingTime: S.optional(S.Date), Description: S.optional(S.String)}) {}
export const BlacklistEntries = S.Array(BlacklistEntry);
export class EmailAddressInsightsVerdict extends S.Class<EmailAddressInsightsVerdict>("EmailAddressInsightsVerdict")({ConfidenceVerdict: S.optional(S.String)}) {}
export class EmailAddressInsightsMailboxEvaluations extends S.Class<EmailAddressInsightsMailboxEvaluations>("EmailAddressInsightsMailboxEvaluations")({HasValidSyntax: S.optional(EmailAddressInsightsVerdict), HasValidDnsRecords: S.optional(EmailAddressInsightsVerdict), MailboxExists: S.optional(EmailAddressInsightsVerdict), IsRoleAddress: S.optional(EmailAddressInsightsVerdict), IsDisposable: S.optional(EmailAddressInsightsVerdict), IsRandomInput: S.optional(EmailAddressInsightsVerdict)}) {}
export class SOARecord extends S.Class<SOARecord>("SOARecord")({PrimaryNameServer: S.optional(S.String), AdminEmail: S.optional(S.String), SerialNumber: S.optional(S.Number)}) {}
export class SuppressedDestinationAttributes extends S.Class<SuppressedDestinationAttributes>("SuppressedDestinationAttributes")({MessageId: S.optional(S.String), FeedbackId: S.optional(S.String)}) {}
export class ReplacementEmailContent extends S.Class<ReplacementEmailContent>("ReplacementEmailContent")({ReplacementTemplate: S.optional(ReplacementTemplate)}) {}
export const BlacklistReport = S.Record({key: S.String, value: BlacklistEntries});
export class OverallVolume extends S.Class<OverallVolume>("OverallVolume")({VolumeStatistics: S.optional(VolumeStatistics), ReadRatePercent: S.optional(S.Number), DomainIspPlacements: S.optional(DomainIspPlacements)}) {}
export class MailboxValidation extends S.Class<MailboxValidation>("MailboxValidation")({IsValid: S.optional(EmailAddressInsightsVerdict), Evaluations: S.optional(EmailAddressInsightsMailboxEvaluations)}) {}
export class VerificationInfo extends S.Class<VerificationInfo>("VerificationInfo")({LastCheckedTimestamp: S.optional(S.Date), LastSuccessTimestamp: S.optional(S.Date), ErrorType: S.optional(S.String), SOARecord: S.optional(SOARecord)}) {}
export class SuppressedDestination extends S.Class<SuppressedDestination>("SuppressedDestination")({EmailAddress: S.String, Reason: S.String, LastUpdateTime: S.Date, Attributes: S.optional(SuppressedDestinationAttributes)}) {}
export class Recommendation extends S.Class<Recommendation>("Recommendation")({ResourceArn: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), Status: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), LastUpdatedTimestamp: S.optional(S.Date), Impact: S.optional(S.String)}) {}
export const RecommendationsList = S.Array(Recommendation);
export class TenantResource extends S.Class<TenantResource>("TenantResource")({ResourceType: S.optional(S.String), ResourceArn: S.optional(S.String)}) {}
export const TenantResourceList = S.Array(TenantResource);
export class BulkEmailEntry extends S.Class<BulkEmailEntry>("BulkEmailEntry")({Destination: Destination, ReplacementTags: S.optional(MessageTagList), ReplacementEmailContent: S.optional(ReplacementEmailContent), ReplacementHeaders: S.optional(MessageHeaderList)}) {}
export const BulkEmailEntryList = S.Array(BulkEmailEntry);
export class CreateConfigurationSetEventDestinationRequest extends S.Class<CreateConfigurationSetEventDestinationRequest>("CreateConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestinationName: S.String, EventDestination: EventDestinationDefinition}) {}
export class CreateConfigurationSetEventDestinationResponse extends S.Class<CreateConfigurationSetEventDestinationResponse>("CreateConfigurationSetEventDestinationResponse")({}) {}
export class CreateDeliverabilityTestReportRequest extends S.Class<CreateDeliverabilityTestReportRequest>("CreateDeliverabilityTestReportRequest")({ReportName: S.optional(S.String), FromEmailAddress: S.String, Content: EmailContent, Tags: S.optional(TagList)}) {}
export class CreateExportJobRequest extends S.Class<CreateExportJobRequest>("CreateExportJobRequest")({ExportDataSource: ExportDataSource, ExportDestination: ExportDestination}) {}
export class CreateImportJobResponse extends S.Class<CreateImportJobResponse>("CreateImportJobResponse")({JobId: S.optional(S.String)}) {}
export class CreateMultiRegionEndpointResponse extends S.Class<CreateMultiRegionEndpointResponse>("CreateMultiRegionEndpointResponse")({Status: S.optional(S.String), EndpointId: S.optional(S.String)}) {}
export class GetBlacklistReportsResponse extends S.Class<GetBlacklistReportsResponse>("GetBlacklistReportsResponse")({BlacklistReport: BlacklistReport}) {}
export class GetDomainStatisticsReportResponse extends S.Class<GetDomainStatisticsReportResponse>("GetDomainStatisticsReportResponse")({OverallVolume: OverallVolume, DailyVolumes: DailyVolumes}) {}
export class GetEmailAddressInsightsResponse extends S.Class<GetEmailAddressInsightsResponse>("GetEmailAddressInsightsResponse")({MailboxValidation: S.optional(MailboxValidation)}) {}
export class GetEmailIdentityResponse extends S.Class<GetEmailIdentityResponse>("GetEmailIdentityResponse")({IdentityType: S.optional(S.String), FeedbackForwardingStatus: S.optional(S.Boolean), VerifiedForSendingStatus: S.optional(S.Boolean), DkimAttributes: S.optional(DkimAttributes), MailFromAttributes: S.optional(MailFromAttributes), Policies: S.optional(PolicyMap), Tags: S.optional(TagList), ConfigurationSetName: S.optional(S.String), VerificationStatus: S.optional(S.String), VerificationInfo: S.optional(VerificationInfo)}) {}
export class GetReputationEntityResponse extends S.Class<GetReputationEntityResponse>("GetReputationEntityResponse")({ReputationEntity: S.optional(ReputationEntity)}) {}
export class GetSuppressedDestinationResponse extends S.Class<GetSuppressedDestinationResponse>("GetSuppressedDestinationResponse")({SuppressedDestination: SuppressedDestination}) {}
export class ListRecommendationsResponse extends S.Class<ListRecommendationsResponse>("ListRecommendationsResponse")({Recommendations: S.optional(RecommendationsList), NextToken: S.optional(S.String)}) {}
export class ListTenantResourcesResponse extends S.Class<ListTenantResourcesResponse>("ListTenantResourcesResponse")({TenantResources: S.optional(TenantResourceList), NextToken: S.optional(S.String)}) {}
export class PutAccountSuppressionAttributesRequest extends S.Class<PutAccountSuppressionAttributesRequest>("PutAccountSuppressionAttributesRequest")({SuppressedReasons: S.optional(SuppressionListReasons), ValidationAttributes: S.optional(SuppressionValidationAttributes)}) {}
export class PutAccountSuppressionAttributesResponse extends S.Class<PutAccountSuppressionAttributesResponse>("PutAccountSuppressionAttributesResponse")({}) {}
export class SendBulkEmailRequest extends S.Class<SendBulkEmailRequest>("SendBulkEmailRequest")({FromEmailAddress: S.optional(S.String), FromEmailAddressIdentityArn: S.optional(S.String), ReplyToAddresses: S.optional(EmailAddressList), FeedbackForwardingEmailAddress: S.optional(S.String), FeedbackForwardingEmailAddressIdentityArn: S.optional(S.String), DefaultEmailTags: S.optional(MessageTagList), DefaultContent: BulkEmailContent, BulkEmailEntries: BulkEmailEntryList, ConfigurationSetName: S.optional(S.String), EndpointId: S.optional(S.String), TenantName: S.optional(S.String)}) {}
export const TimestampList = S.Array(S.Date);
export const MetricValueList = S.Array(S.Number);
export class Bounce extends S.Class<Bounce>("Bounce")({BounceType: S.optional(S.String), BounceSubType: S.optional(S.String), DiagnosticCode: S.optional(S.String)}) {}
export class Complaint extends S.Class<Complaint>("Complaint")({ComplaintSubType: S.optional(S.String), ComplaintFeedbackType: S.optional(S.String)}) {}
export class MetricDataResult extends S.Class<MetricDataResult>("MetricDataResult")({Id: S.optional(S.String), Timestamps: S.optional(TimestampList), Values: S.optional(MetricValueList)}) {}
export const MetricDataResultList = S.Array(MetricDataResult);
export class MetricDataError extends S.Class<MetricDataError>("MetricDataError")({Id: S.optional(S.String), Code: S.optional(S.String), Message: S.optional(S.String)}) {}
export const MetricDataErrorList = S.Array(MetricDataError);
export class Contact extends S.Class<Contact>("Contact")({EmailAddress: S.optional(S.String), TopicPreferences: S.optional(TopicPreferenceList), TopicDefaultPreferences: S.optional(TopicPreferenceList), UnsubscribeAll: S.optional(S.Boolean), LastUpdatedTimestamp: S.optional(S.Date)}) {}
export const ListOfContacts = S.Array(Contact);
export class EventDetails extends S.Class<EventDetails>("EventDetails")({Bounce: S.optional(Bounce), Complaint: S.optional(Complaint)}) {}
export class BatchGetMetricDataResponse extends S.Class<BatchGetMetricDataResponse>("BatchGetMetricDataResponse")({Results: S.optional(MetricDataResultList), Errors: S.optional(MetricDataErrorList)}) {}
export class CreateDeliverabilityTestReportResponse extends S.Class<CreateDeliverabilityTestReportResponse>("CreateDeliverabilityTestReportResponse")({ReportId: S.String, DeliverabilityTestStatus: S.String}) {}
export class CreateExportJobResponse extends S.Class<CreateExportJobResponse>("CreateExportJobResponse")({JobId: S.optional(S.String)}) {}
export class ListContactsResponse extends S.Class<ListContactsResponse>("ListContactsResponse")({Contacts: S.optional(ListOfContacts), NextToken: S.optional(S.String)}) {}
export class InsightsEvent extends S.Class<InsightsEvent>("InsightsEvent")({Timestamp: S.optional(S.Date), Type: S.optional(S.String), Details: S.optional(EventDetails)}) {}
export const InsightsEvents = S.Array(InsightsEvent);
export class EmailInsights extends S.Class<EmailInsights>("EmailInsights")({Destination: S.optional(S.String), Isp: S.optional(S.String), Events: S.optional(InsightsEvents)}) {}
export const EmailInsightsList = S.Array(EmailInsights);
export class BulkEmailEntryResult extends S.Class<BulkEmailEntryResult>("BulkEmailEntryResult")({Status: S.optional(S.String), Error: S.optional(S.String), MessageId: S.optional(S.String)}) {}
export const BulkEmailEntryResultList = S.Array(BulkEmailEntryResult);
export class GetMessageInsightsResponse extends S.Class<GetMessageInsightsResponse>("GetMessageInsightsResponse")({MessageId: S.optional(S.String), FromEmailAddress: S.optional(S.String), Subject: S.optional(S.String), EmailTags: S.optional(MessageTagList), Insights: S.optional(EmailInsightsList)}) {}
export class SendBulkEmailResponse extends S.Class<SendBulkEmailResponse>("SendBulkEmailResponse")({BulkEmailEntryResults: BulkEmailEntryResultList}) {}

//# Errors
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {}) {};
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class MailFromDomainNotVerifiedException extends S.TaggedError<MailFromDomainNotVerifiedException>()("MailFromDomainNotVerifiedException", {message: S.optional(S.String)}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {message: S.optional(S.String)}) {};
export class MessageRejected extends S.TaggedError<MessageRejected>()("MessageRejected", {message: S.optional(S.String)}) {};
export class AccountSuspendedException extends S.TaggedError<AccountSuspendedException>()("AccountSuspendedException", {message: S.optional(S.String)}) {};
export class SendingPausedException extends S.TaggedError<SendingPausedException>()("SendingPausedException", {}) {};
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Delete an event destination.
 * 
 * 
 * 
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */export const deleteConfigurationSetEventDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteConfigurationSetEventDestination" }, DeleteConfigurationSetEventDestinationRequest, DeleteConfigurationSetEventDestinationResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a contact from a contact list.
 */export const deleteContact = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteContact" }, DeleteContactRequest, DeleteContactResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a contact list and all of the contacts on that list.
 */export const deleteContactList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteContactList" }, DeleteContactListRequest, DeleteContactListResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing custom verification email template.
 * 
 * 
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const deleteCustomVerificationEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/custom-verification-email-templates/{TemplateName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteCustomVerificationEmailTemplate" }, DeleteCustomVerificationEmailTemplateRequest, DeleteCustomVerificationEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a dedicated IP pool.
 */export const deleteDedicatedIpPool = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ip-pools/{PoolName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteDedicatedIpPool" }, DeleteDedicatedIpPoolRequest, DeleteDedicatedIpPoolResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an email identity. An identity can be either an email address or a domain
 * name.
 */export const deleteEmailIdentity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteEmailIdentity" }, DeleteEmailIdentityRequest, DeleteEmailIdentityResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified sending authorization policy for the given identity (an email
 * address or a domain). This API returns successfully even if a policy with the specified
 * name does not exist.
 * 
 * 
 * 
 * 
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 * 
 * 
 * 
 * 
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const deleteEmailIdentityPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteEmailIdentityPolicy" }, DeleteEmailIdentityPolicyRequest, DeleteEmailIdentityPolicyResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an email template.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const deleteEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates/{TemplateName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteEmailTemplate" }, DeleteEmailTemplateRequest, DeleteEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes an email address from the suppression list for your account.
 */export const deleteSuppressedDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/suppression/addresses/{EmailAddress}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteSuppressedDestination" }, DeleteSuppressedDestinationRequest, DeleteSuppressedDestinationResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an existing tenant.
 * 
 * 
 * When you delete a tenant, its associations with resources
 * are removed, but the resources themselves are not deleted.
 */export const deleteTenant = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/delete", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteTenant" }, DeleteTenantRequest, DeleteTenantResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an association between a tenant and a resource.
 * 
 * 
 * When you delete a tenant-resource association, the resource itself is not deleted,
 * only its association with the specific tenant is removed. After removal, the resource
 * will no longer be available for use with that tenant's email sending operations.
 */export const deleteTenantResourceAssociation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/resources/delete", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteTenantResourceAssociation" }, DeleteTenantResourceAssociationRequest, DeleteTenantResourceAssociationResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enable or disable the automatic warm-up feature for dedicated IP addresses.
 */export const putAccountDedicatedIpWarmupAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account/dedicated-ips/warmup", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutAccountDedicatedIpWarmupAttributes" }, PutAccountDedicatedIpWarmupAttributesRequest, PutAccountDedicatedIpWarmupAttributesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enable or disable the ability of your account to send email.
 */export const putAccountSendingAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account/sending", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutAccountSendingAttributes" }, PutAccountSendingAttributesRequest, PutAccountSendingAttributesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update your Amazon SES account VDM attributes.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const putAccountVdmAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account/vdm", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutAccountVdmAttributes" }, PutAccountVdmAttributesRequest, PutAccountVdmAttributesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate the configuration set with a MailManager archive. When you send email using the
 * `SendEmail` or `SendBulkEmail` operations the message as it will be given
 * to the receiving SMTP server will be archived, along with the recipient information.
 */export const putConfigurationSetArchivingOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/archiving-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetArchivingOptions" }, PutConfigurationSetArchivingOptionsRequest, PutConfigurationSetArchivingOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
 * to create groups of dedicated IP addresses for sending specific types of email.
 */export const putConfigurationSetDeliveryOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetDeliveryOptions" }, PutConfigurationSetDeliveryOptionsRequest, PutConfigurationSetDeliveryOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enable or disable collection of reputation metrics for emails that you send using a
 * particular configuration set in a specific Amazon Web Services Region.
 */export const putConfigurationSetReputationOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetReputationOptions" }, PutConfigurationSetReputationOptionsRequest, PutConfigurationSetReputationOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enable or disable email sending for messages that use a particular configuration set
 * in a specific Amazon Web Services Region.
 */export const putConfigurationSetSendingOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/sending", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetSendingOptions" }, PutConfigurationSetSendingOptionsRequest, PutConfigurationSetSendingOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specify a custom domain to use for open and click tracking elements in email that you
 * send.
 */export const putConfigurationSetTrackingOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetTrackingOptions" }, PutConfigurationSetTrackingOptionsRequest, PutConfigurationSetTrackingOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specify VDM preferences for email that you send using the configuration set.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const putConfigurationSetVdmOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetVdmOptions" }, PutConfigurationSetVdmOptionsRequest, PutConfigurationSetVdmOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Move a dedicated IP address to an existing dedicated IP pool.
 * 
 * 
 * 
 * 
 * The dedicated IP address that you specify must already exist, and must be
 * associated with your Amazon Web Services account.
 * 
 * 
 * 
 * 
 * The dedicated IP pool you specify must already exist. You can create a new pool by
 * using the `CreateDedicatedIpPool` operation.
 */export const putDedicatedIpInPool = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ips/{Ip}/pool", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutDedicatedIpInPool" }, PutDedicatedIpInPoolRequest, PutDedicatedIpInPoolResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to convert a dedicated IP pool to a different scaling mode.
 * 
 * 
 * 
 * 
 * 
 * `MANAGED` pools cannot be converted to `STANDARD` scaling mode.
 */export const putDedicatedIpPoolScalingAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ip-pools/{PoolName}/scaling", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutDedicatedIpPoolScalingAttributes" }, PutDedicatedIpPoolScalingAttributesRequest, PutDedicatedIpPoolScalingAttributesResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * 
 */export const putDedicatedIpWarmupAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ips/{Ip}/warmup", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutDedicatedIpWarmupAttributes" }, PutDedicatedIpWarmupAttributesRequest, PutDedicatedIpWarmupAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 * access to reputation, deliverability, and other metrics for the domains that you use to
 * send email. You also gain the ability to perform predictive inbox placement tests.
 * 
 * 
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 * to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 * information about the features and cost of a Deliverability dashboard subscription, see Amazon SES Pricing.
 */export const putDeliverabilityDashboardOption = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutDeliverabilityDashboardOption" }, PutDeliverabilityDashboardOptionRequest, PutDeliverabilityDashboardOptionResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to associate a configuration set with an email identity.
 */export const putEmailIdentityConfigurationSetAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/configuration-set", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutEmailIdentityConfigurationSetAttributes" }, PutEmailIdentityConfigurationSetAttributesRequest, PutEmailIdentityConfigurationSetAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to enable or disable DKIM authentication for an email identity.
 */export const putEmailIdentityDkimAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/dkim", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutEmailIdentityDkimAttributes" }, PutEmailIdentityDkimAttributesRequest, PutEmailIdentityDkimAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to enable or disable feedback forwarding for an identity. This setting determines
 * what happens when an identity is used to send an email that results in a bounce or
 * complaint event.
 * 
 * 
 * If the value is `true`, you receive email notifications when bounce or
 * complaint events occur. These notifications are sent to the address that you specified
 * in the `Return-Path` header of the original email.
 * 
 * 
 * You're required to have a method of tracking bounces and complaints. If you haven't
 * set up another mechanism for receiving bounce or complaint notifications (for example,
 * by setting up an event destination), you receive an email notification when these events
 * occur (even if this setting is disabled).
 */export const putEmailIdentityFeedbackAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/feedback", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutEmailIdentityFeedbackAttributes" }, PutEmailIdentityFeedbackAttributesRequest, PutEmailIdentityFeedbackAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to enable or disable the custom Mail-From domain configuration for an email
 * identity.
 */export const putEmailIdentityMailFromAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/mail-from", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutEmailIdentityMailFromAttributes" }, PutEmailIdentityMailFromAttributesRequest, PutEmailIdentityMailFromAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an email address to the suppression list for your account.
 */export const putSuppressedDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/suppression/addresses", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutSuppressedDestination" }, PutSuppressedDestinationRequest, PutSuppressedDestinationResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add one or more tags (keys and values) to a specified resource. A
 * *tag* is a label that you optionally define and associate with a
 * resource. Tags can help you categorize and manage resources in different ways, such as
 * by purpose, owner, environment, or other criteria. A resource can have as many as 50
 * tags.
 * 
 * 
 * Each tag consists of a required *tag key* and an
 * associated *tag value*, both of which you define. A tag key is a
 * general label that acts as a category for more specific tag values. A tag value acts as
 * a descriptor within a tag key.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tags", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.TagResource" }, TagResourceRequest, TagResourceResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove one or more tags (keys and values) from a specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tags", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the configuration of an event destination for a configuration set.
 * 
 * 
 * 
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */export const updateConfigurationSetEventDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateConfigurationSetEventDestination" }, UpdateConfigurationSetEventDestinationRequest, UpdateConfigurationSetEventDestinationResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a contact's preferences for a list.
 * 
 * 
 * 
 * 
 * You must specify all existing topic preferences in the
 * `TopicPreferences` object, not just the ones that need updating;
 * otherwise, all your existing preferences will be removed.
 */export const updateContact = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateContact" }, UpdateContactRequest, UpdateContactResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates contact list metadata. This operation does a complete replacement.
 */export const updateContactList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateContactList" }, UpdateContactListRequest, UpdateContactListResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing custom verification email template.
 * 
 * 
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const updateCustomVerificationEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/custom-verification-email-templates/{TemplateName}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateCustomVerificationEmailTemplate" }, UpdateCustomVerificationEmailTemplateRequest, UpdateCustomVerificationEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified sending authorization policy for the given identity (an email
 * address or a domain). This API returns successfully even if a policy with the specified
 * name does not exist.
 * 
 * 
 * 
 * 
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 * 
 * 
 * 
 * 
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const updateEmailIdentityPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateEmailIdentityPolicy" }, UpdateEmailIdentityPolicyRequest, UpdateEmailIdentityPolicyResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single API operation. For more information, see the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const updateEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates/{TemplateName}", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateEmailTemplate" }, UpdateEmailTemplateRequest, UpdateEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the customer-managed sending status for a reputation entity. This allows
 * you to enable, disable, or reinstate sending for the entity.
 * 
 * 
 * The customer-managed status works in conjunction with the Amazon Web Services Amazon SES-managed status
 * to determine the overall sending capability. When you update the customer-managed status,
 * the Amazon Web Services Amazon SES-managed status remains unchanged. If Amazon Web Services Amazon SES has disabled the entity,
 * it will not be allowed to send regardless of the customer-managed status setting. When you
 * reinstate an entity through the customer-managed status, it can continue sending only if
 * the Amazon Web Services Amazon SES-managed status also permits sending, even if there are active reputation
 * findings, until the findings are resolved or new violations occur.
 */export const updateReputationEntityCustomerManagedStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateReputationEntityCustomerManagedStatus" }, UpdateReputationEntityCustomerManagedStatusRequest, UpdateReputationEntityCustomerManagedStatusResponse, [BadRequestException, ConflictException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the reputation management policy for a reputation entity. The policy
 * determines how the entity responds to reputation findings, such as automatically
 * pausing sending when certain thresholds are exceeded.
 * 
 * 
 * Reputation management policies are Amazon Web Services Amazon SES-managed (predefined policies).
 * You can select from none, standard, and strict policies.
 */export const updateReputationEntityPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.UpdateReputationEntityPolicy" }, UpdateReputationEntityPolicyRequest, UpdateReputationEntityPolicyResponse, [BadRequestException, ConflictException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels an export job.
 */export const cancelExportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/export-jobs/{JobId}/cancel", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CancelExportJob" }, CancelExportJobRequest, CancelExportJobResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a contact, which is an end-user who is receiving the email, and adds them to a
 * contact list.
 */export const createContact = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}/contacts", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateContact" }, CreateContactRequest, CreateContactResponse, [AlreadyExistsException, BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a contact list.
 */export const createContactList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateContactList" }, CreateContactListRequest, CreateContactListResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new custom verification email template.
 * 
 * 
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const createCustomVerificationEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/custom-verification-email-templates", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateCustomVerificationEmailTemplate" }, CreateCustomVerificationEmailTemplateRequest, CreateCustomVerificationEmailTemplateResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 * IP addresses that are associated with your Amazon Web Services account. You can associate a pool with
 * a configuration set. When you send an email that uses that configuration set, the
 * message is sent from one of the addresses in the associated pool.
 */export const createDedicatedIpPool = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ip-pools", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateDedicatedIpPool" }, CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse, [AlreadyExistsException, BadRequestException, ConcurrentModificationException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the specified sending authorization policy for the given identity (an email
 * address or a domain).
 * 
 * 
 * 
 * 
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 * 
 * 
 * 
 * 
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const createEmailIdentityPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateEmailIdentityPolicy" }, CreateEmailIdentityPolicyRequest, CreateEmailIdentityPolicyResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single API operation. For more information, see the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const createEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateEmailTemplate" }, CreateEmailTemplateRequest, CreateEmailTemplateResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a tenant.
 * 
 * 
 * 
 * *Tenants* are logical containers that group related SES resources together.
 * Each tenant can have its own set of resources like email identities, configuration sets,
 * and templates, along with reputation metrics and sending status. This helps isolate and manage
 * email sending for different customers or business units within your Amazon SES API v2 account.
 */export const createTenant = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateTenant" }, CreateTenantRequest, CreateTenantResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a resource with a tenant.
 * 
 * 
 * 
 * *Resources* can be email identities, configuration sets, or email templates.
 * When you associate a resource with a tenant, you can use that resource when sending emails
 * on behalf of that tenant.
 * 
 * 
 * A single resource can be associated with multiple tenants, allowing for resource sharing
 * across different tenants while maintaining isolation in email sending operations.
 */export const createTenantResourceAssociation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/resources", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateTenantResourceAssociation" }, CreateTenantResourceAssociationRequest, CreateTenantResourceAssociationResponse, [AlreadyExistsException, BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an existing configuration set.
 * 
 * 
 * 
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */export const deleteConfigurationSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteConfigurationSet" }, DeleteConfigurationSetRequest, DeleteConfigurationSetResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a multi-region endpoint (global-endpoint).
 * 
 * 
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed can be deleted.
 */export const deleteMultiRegionEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/multi-region-endpoints/{EndpointName}", method: "DELETE", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.DeleteMultiRegionEndpoint" }, DeleteMultiRegionEndpointRequest, DeleteMultiRegionEndpointResponse, [BadRequestException, ConcurrentModificationException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about an existing configuration set, including the dedicated IP pool
 * that it's associated with, whether or not it's enabled for sending email, and
 * more.
 * 
 * 
 * 
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */export const getConfigurationSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetConfigurationSet" }, GetConfigurationSetRequest, GetConfigurationSetResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a contact from a contact list.
 */export const getContact = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetContact" }, GetContactRequest, GetContactResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns contact list metadata. It does not return any information about the contacts
 * present in the list.
 */export const getContactList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetContactList" }, GetContactListRequest, GetContactListResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the custom email verification template for the template name you
 * specify.
 * 
 * 
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const getCustomVerificationEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/custom-verification-email-templates/{TemplateName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetCustomVerificationEmailTemplate" }, GetCustomVerificationEmailTemplateRequest, GetCustomVerificationEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the dedicated IP addresses that are associated with your Amazon Web Services
 * account.
 */export const getDedicatedIps = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ips", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDedicatedIps" }, GetDedicatedIpsRequest, GetDedicatedIpsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the requested sending authorization policies for the given identity (an email
 * address or a domain). The policies are returned as a map of policy names to policy
 * contents. You can retrieve a maximum of 20 policies at a time.
 * 
 * 
 * 
 * 
 * This API is for the identity owner only. If you have not verified the identity,
 * this API will return an error.
 * 
 * 
 * 
 * 
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const getEmailIdentityPolicies = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/policies", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetEmailIdentityPolicies" }, GetEmailIdentityPoliciesRequest, GetEmailIdentityPoliciesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the template object (which includes the subject line, HTML part and text
 * part) for the template you specify.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const getEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates/{TemplateName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetEmailTemplate" }, GetEmailTemplateRequest, GetEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about an import job.
 */export const getImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/import-jobs/{JobId}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetImportJob" }, GetImportJobRequest, GetImportJobResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all of the configuration sets associated with your account in the current
 * region.
 * 
 * 
 * 
 * *Configuration sets* are groups of rules that you can apply to the
 * emails you send. You apply a configuration set to an email by including a reference to
 * the configuration set in the headers of the email. When you apply a configuration set to
 * an email, all of the rules in that configuration set are applied to the email.
 */export const listConfigurationSets = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListConfigurationSets" }, ListConfigurationSetsRequest, ListConfigurationSetsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all of the dedicated IP pools that exist in your Amazon Web Services account in the current
 * Region.
 */export const listDedicatedIpPools = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ip-pools", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListDedicatedIpPools" }, ListDedicatedIpPoolsRequest, ListDedicatedIpPoolsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 * predictive inbox placement tests that are complete, you can use the `GetDeliverabilityTestReport`
 * operation to view the results.
 */export const listDeliverabilityTestReports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/test-reports", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListDeliverabilityTestReports" }, ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve deliverability data for all the campaigns that used a specific domain to send
 * email during a specified time range. This data is available for a domain only if you
 * enabled the Deliverability dashboard for the domain.
 */export const listDomainDeliverabilityCampaigns = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListDomainDeliverabilityCampaigns" }, ListDomainDeliverabilityCampaignsRequest, ListDomainDeliverabilityCampaignsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve a list of the tags (keys and values) that are associated with a specified
 * resource. A *tag* is a label that you optionally define and associate
 * with a resource. Each tag consists of a required *tag key* and an
 * optional associated *tag value*. A tag key is a general label that
 * acts as a category for more specific tag values. A tag value acts as a descriptor within
 * a tag key.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tags", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update your Amazon SES account details.
 */export const putAccountDetails = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account/details", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutAccountDetails" }, PutAccountDetailsRequest, PutAccountDetailsResponse, [BadRequestException, ConflictException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specify the account suppression list preferences for a configuration set.
 */export const putConfigurationSetSuppressionOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutConfigurationSetSuppressionOptions" }, PutConfigurationSetSuppressionOptionsRequest, PutConfigurationSetSuppressionOptionsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to configure or change the DKIM authentication settings for an email domain
 * identity. You can use this operation to do any of the following:
 * 
 * 
 * 
 * - Update the signing attributes for an identity that uses Bring Your Own DKIM
 * (BYODKIM).
 * 
 * 
 * 
 * - Update the key length that should be used for Easy DKIM.
 * 
 * 
 * 
 * - Change from using no DKIM authentication to using Easy DKIM.
 * 
 * 
 * 
 * - Change from using no DKIM authentication to using BYODKIM.
 * 
 * 
 * 
 * - Change from using Easy DKIM to using BYODKIM.
 * 
 * 
 * 
 * - Change from using BYODKIM to using Easy DKIM.
 */export const putEmailIdentityDkimSigningAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}/dkim/signing", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutEmailIdentityDkimSigningAttributes" }, PutEmailIdentityDkimSigningAttributesRequest, PutEmailIdentityDkimSigningAttributesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a preview of the MIME content of an email when provided with a template and a
 * set of replacement data.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const testRenderEmailTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates/{TemplateName}/render", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.TestRenderEmailTemplate" }, TestRenderEmailTemplateRequest, TestRenderEmailTemplateResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a configuration set. *Configuration sets* are groups of
 * rules that you can apply to the emails that you send. You apply a configuration set to
 * an email by specifying the name of the configuration set when you call the Amazon SES API v2. When
 * you apply a configuration set to an email, all of the rules in that configuration set
 * are applied to the email.
 */export const createConfigurationSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateConfigurationSet" }, CreateConfigurationSetRequest, CreateConfigurationSetResponse, [AlreadyExistsException, BadRequestException, ConcurrentModificationException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the process of verifying an email identity. An *identity* is
 * an email address or domain that you use when you send email. Before you can use an
 * identity to send email, you first have to verify it. By verifying an identity, you
 * demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2
 * permission to send email from the identity.
 * 
 * 
 * When you verify an email address, Amazon SES sends an email to the address. Your email
 * address is verified as soon as you follow the link in the verification email.
 * 
 * 
 * 
 * 
 * When you verify a domain without specifying the `DkimSigningAttributes`
 * object, this operation provides a set of DKIM tokens. You can convert these tokens into
 * CNAME records, which you then add to the DNS configuration for your domain. Your domain
 * is verified when Amazon SES detects these records in the DNS configuration for your domain.
 * This verification method is known as Easy DKIM.
 * 
 * 
 * Alternatively, you can perform the verification process by providing your own
 * public-private key pair. This verification method is known as Bring Your Own DKIM
 * (BYODKIM). To use BYODKIM, your call to the `CreateEmailIdentity` operation
 * has to include the `DkimSigningAttributes` object. When you specify this
 * object, you provide a selector (a component of the DNS record name that identifies the
 * public key to use for DKIM authentication) and a private key.
 * 
 * 
 * When you verify a domain, this operation provides a set of DKIM tokens, which you can
 * convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 * domain. Your domain is verified when Amazon SES detects these records in the DNS
 * configuration for your domain. For some DNS providers, it can take 72 hours or more to
 * complete the domain verification process.
 * 
 * 
 * Additionally, you can associate an existing configuration set with the email identity that you're verifying.
 */export const createEmailIdentity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateEmailIdentity" }, CreateEmailIdentityRequest, CreateEmailIdentityResponse, [AlreadyExistsException, BadRequestException, ConcurrentModificationException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtain information about the email-sending status and capabilities of your Amazon SES
 * account in the current Amazon Web Services Region.
 */export const getAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetAccount" }, GetAccountRequest, GetAccountResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve a list of event destinations that are associated with a configuration
 * set.
 * 
 * 
 * 
 * *Events* include message sends, deliveries, opens, clicks, bounces,
 * and complaints. *Event destinations* are places that you can send
 * information about these events to. For example, you can send event data to Amazon EventBridge and
 * associate a rule to send the event to the specified target.
 */export const getConfigurationSetEventDestinations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetConfigurationSetEventDestinations" }, GetConfigurationSetEventDestinationsRequest, GetConfigurationSetEventDestinationsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about a dedicated IP address, including the name of the dedicated IP
 * pool that it's associated with, as well information about the automatic warm-up process
 * for the address.
 */export const getDedicatedIp = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ips/{Ip}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDedicatedIp" }, GetDedicatedIpRequest, GetDedicatedIpResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve information about the dedicated pool.
 */export const getDedicatedIpPool = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/dedicated-ip-pools/{PoolName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDedicatedIpPool" }, GetDedicatedIpPoolRequest, GetDedicatedIpPoolResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve information about the status of the Deliverability dashboard for your account. When
 * the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other
 * metrics for the domains that you use to send email. You also gain the ability to perform
 * predictive inbox placement tests.
 * 
 * 
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 * to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 * information about the features and cost of a Deliverability dashboard subscription, see Amazon SES Pricing.
 */export const getDeliverabilityDashboardOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDeliverabilityDashboardOptions" }, GetDeliverabilityDashboardOptionsRequest, GetDeliverabilityDashboardOptionsResponse, [BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve the results of a predictive inbox placement test.
 */export const getDeliverabilityTestReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/test-reports/{ReportId}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDeliverabilityTestReport" }, GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve all the deliverability data for a specific campaign. This data is available
 * for a campaign only if the campaign sent email by using a domain that the
 * Deliverability dashboard is enabled for.
 */export const getDomainDeliverabilityCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/campaigns/{CampaignId}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDomainDeliverabilityCampaign" }, GetDomainDeliverabilityCampaignRequest, GetDomainDeliverabilityCampaignResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about an export job.
 */export const getExportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/export-jobs/{JobId}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetExportJob" }, GetExportJobRequest, GetExportJobResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the multi-region endpoint (global-endpoint) configuration.
 * 
 * 
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed can be displayed.
 */export const getMultiRegionEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/multi-region-endpoints/{EndpointName}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetMultiRegionEndpoint" }, GetMultiRegionEndpointRequest, GetMultiRegionEndpointResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about a specific tenant, including the tenant's name, ID, ARN,
 * creation timestamp, tags, and sending status.
 */export const getTenant = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/get", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetTenant" }, GetTenantRequest, GetTenantResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the contact lists available.
 * 
 * 
 * If your output includes a "NextToken" field with a string value, this indicates there may be additional
 * contacts on the filtered list - regardless of the number of contacts returned.
 */export const listContactLists = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListContactLists" }, ListContactListsRequest, ListContactListsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the existing custom verification email templates for your account in the current
 * Amazon Web Services Region.
 * 
 * 
 * For more information about custom verification email templates, see Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const listCustomVerificationEmailTemplates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/custom-verification-email-templates", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListCustomVerificationEmailTemplates" }, ListCustomVerificationEmailTemplatesRequest, ListCustomVerificationEmailTemplatesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all of the email identities that are associated with your Amazon Web Services
 * account. An identity can be either an email address or a domain. This operation returns
 * identities that are verified as well as those that aren't. This operation returns
 * identities that are associated with Amazon SES and Amazon Pinpoint.
 */export const listEmailIdentities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListEmailIdentities" }, ListEmailIdentitiesRequest, ListEmailIdentitiesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the email templates present in your Amazon SES account in the current Amazon Web Services
 * Region.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const listEmailTemplates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/templates", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListEmailTemplates" }, ListEmailTemplatesRequest, ListEmailTemplatesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the export jobs.
 */export const listExportJobs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/list-export-jobs", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListExportJobs" }, ListExportJobsRequest, ListExportJobsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the import jobs.
 */export const listImportJobs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/import-jobs/list", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListImportJobs" }, ListImportJobsRequest, ListImportJobsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the multi-region endpoints (global-endpoints).
 * 
 * 
 * Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 * where operation is executed will be listed.
 */export const listMultiRegionEndpoints = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/multi-region-endpoints", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListMultiRegionEndpoints" }, ListMultiRegionEndpointsRequest, ListMultiRegionEndpointsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List reputation entities in your Amazon SES account in the current Amazon Web Services Region.
 * You can filter the results by entity type, reputation impact, sending status,
 * or entity reference prefix.
 * 
 * 
 * 
 * *Reputation entities* represent resources in your account that have reputation
 * tracking and management capabilities. Use this operation to get an overview of
 * all entities and their current reputation status.
 */export const listReputationEntities = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/reputation/entities", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListReputationEntities" }, ListReputationEntitiesRequest, ListReputationEntitiesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all tenants associated with a specific resource.
 * 
 * 
 * This operation returns a list of tenants that are associated with the specified
 * resource. This is useful for understanding which tenants are currently using a particular
 * resource such as an email identity, configuration set, or email template.
 */export const listResourceTenants = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/resources/tenants/list", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListResourceTenants" }, ListResourceTenantsRequest, ListResourceTenantsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all tenants associated with your account in the current Amazon Web Services Region.
 * 
 * 
 * This operation returns basic information about each tenant,
 * such as tenant name, ID, ARN, and creation timestamp.
 */export const listTenants = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/list", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListTenants" }, ListTenantsRequest, ListTenantsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an event destination. *Events* include message sends,
 * deliveries, opens, clicks, bounces, and complaints. Event
 * destinations are places that you can send information about these events
 * to. For example, you can send event data to Amazon EventBridge and associate a rule to send the event
 * to the specified target.
 * 
 * 
 * A single configuration set can include more than one event destination.
 */export const createConfigurationSetEventDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateConfigurationSetEventDestination" }, CreateConfigurationSetEventDestinationRequest, CreateConfigurationSetEventDestinationResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an import job for a data destination.
 */export const createImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/import-jobs", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateImportJob" }, CreateImportJobRequest, CreateImportJobResponse, [BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a multi-region endpoint (global-endpoint).
 * 
 * 
 * The primary region is going to be the AWS-Region where the operation is executed.
 * The secondary region has to be provided in request's parameters.
 * From the data flow standpoint there is no difference between primary
 * and secondary regions - sending traffic will be split equally between the two.
 * The primary region is the region where the resource has been created and where it can be managed.
 */export const createMultiRegionEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/multi-region-endpoints", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateMultiRegionEndpoint" }, CreateMultiRegionEndpointRequest, CreateMultiRegionEndpointResponse, [AlreadyExistsException, BadRequestException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
 */export const getBlacklistReports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/blacklist-report", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetBlacklistReports" }, GetBlacklistReportsRequest, GetBlacklistReportsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve inbox placement and engagement rates for the domains that you use to send
 * email.
 */export const getDomainStatisticsReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/statistics-report/{Domain}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetDomainStatisticsReport" }, GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides validation insights about a specific email address, including syntax validation, DNS record checks, mailbox existence, and other deliverability factors.
 */export const getEmailAddressInsights = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/email-address-insights", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetEmailAddressInsights" }, GetEmailAddressInsightsRequest, GetEmailAddressInsightsResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about a specific identity, including the identity's verification
 * status, sending authorization policies, its DKIM authentication status, and its custom
 * Mail-From settings.
 */export const getEmailIdentity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/identities/{EmailIdentity}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetEmailIdentity" }, GetEmailIdentityRequest, GetEmailIdentityResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve information about a specific reputation entity, including its reputation
 * management policy, customer-managed status, Amazon Web Services Amazon SES-managed status, and aggregate
 * sending status.
 * 
 * 
 * 
 * *Reputation entities* represent resources in your Amazon SES account that have reputation
 * tracking and management capabilities. The reputation impact reflects the highest
 * impact reputation finding for the entity. Reputation findings can be retrieved
 * using the `ListRecommendations` operation.
 */export const getReputationEntity = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetReputationEntity" }, GetReputationEntityRequest, GetReputationEntityResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific email address that's on the suppression list
 * for your account.
 */export const getSuppressedDestination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/suppression/addresses/{EmailAddress}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetSuppressedDestination" }, GetSuppressedDestinationRequest, GetSuppressedDestinationResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const listRecommendations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/vdm/recommendations", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListRecommendations" }, ListRecommendationsRequest, ListRecommendationsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of email addresses that are on the suppression list for your
 * account.
 */export const listSuppressedDestinations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/suppression/addresses", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListSuppressedDestinations" }, ListSuppressedDestinationsRequest, ListSuppressedDestinationsResponse, [BadRequestException, InvalidNextTokenException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all resources associated with a specific tenant.
 * 
 * 
 * This operation returns a list of resources (email identities, configuration sets,
 * or email templates) that are associated with the specified tenant. You can optionally
 * filter the results by resource type.
 */export const listTenantResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/tenants/resources/list", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListTenantResources" }, ListTenantResourcesRequest, ListTenantResourcesResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Change the settings for the account-level suppression list.
 */export const putAccountSuppressionAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/account/suppression", method: "PUT", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.PutAccountSuppressionAttributes" }, PutAccountSuppressionAttributesRequest, PutAccountSuppressionAttributesResponse, [BadRequestException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an email message. You can use the Amazon SES API v2 to send the following types of
 * messages:
 * 
 * 
 * 
 * - **Simple** – A standard email message. When
 * you create this type of message, you specify the sender, the recipient, and the
 * message body, and Amazon SES assembles the message for you.
 * 
 * 
 * 
 * - **Raw** – A raw, MIME-formatted email
 * message. When you send this type of email, you have to specify all of the
 * message headers, as well as the message body. You can use this message type to
 * send messages that contain attachments. The message that you specify has to be a
 * valid MIME message.
 * 
 * 
 * 
 * - **Templated** – A message that contains
 * personalization tags. When you send this type of email, Amazon SES API v2 automatically
 * replaces the tags with values that you specify.
 */export const sendEmail = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/outbound-emails", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.SendEmail" }, SendEmailRequest, SendEmailResponse, [AccountSuspendedException, BadRequestException, LimitExceededException, MailFromDomainNotVerifiedException, MessageRejected, NotFoundException, SendingPausedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 * by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 * sample message that contains the content that you plan to send to your customers. Amazon SES
 * then sends that message to special email addresses spread across several major email
 * providers. After about 24 hours, the test is complete, and you can use the
 * `GetDeliverabilityTestReport` operation to view the results of the
 * test.
 */export const createDeliverabilityTestReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/deliverability-dashboard/test", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateDeliverabilityTestReport" }, CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse, [AccountSuspendedException, BadRequestException, ConcurrentModificationException, LimitExceededException, MailFromDomainNotVerifiedException, MessageRejected, NotFoundException, SendingPausedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an export job for a data source and destination.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const createExportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/export-jobs", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.CreateExportJob" }, CreateExportJobRequest, CreateExportJobResponse, [BadRequestException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the contacts present in a specific contact list.
 */export const listContacts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/contact-lists/{ContactListName}/contacts/list", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.ListContacts" }, ListContactsRequest, ListContactsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an email address to the list of identities for your Amazon SES account in the current
 * Amazon Web Services Region and attempts to verify it. As a result of executing this
 * operation, a customized verification email is sent to the specified address.
 * 
 * 
 * To use this operation, you must first create a custom verification email template. For
 * more information about creating and using custom verification email templates, see
 * Using
 * custom verification email templates in the Amazon SES Developer
 * Guide.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const sendCustomVerificationEmail = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/outbound-custom-verification-emails", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.SendCustomVerificationEmail" }, SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse, [BadRequestException, LimitExceededException, MailFromDomainNotVerifiedException, MessageRejected, NotFoundException, SendingPausedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves batches of metric data collected based on your sending activity.
 * 
 * 
 * You can execute this operation no more than 16 times per second,
 * and with at most 160 queries from the batches per second (cumulative).
 */export const batchGetMetricData = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/metrics/batch", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.BatchGetMetricData" }, BatchGetMetricDataRequest, BatchGetMetricDataResponse, [BadRequestException, InternalServiceErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about a specific message, including the from address, the
 * subject, the recipient address, email tags, as well as events associated with the message.
 * 
 * 
 * You can execute this operation no more than once per second.
 */export const getMessageInsights = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/insights/{MessageId}", method: "GET", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.GetMessageInsights" }, GetMessageInsightsRequest, GetMessageInsightsResponse, [BadRequestException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Composes an email message to multiple destinations.
 */export const sendBulkEmail = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-09-27", uri: "/v2/email/outbound-bulk-emails", method: "POST", sdkId: "SESv2", sigV4ServiceName: "ses", name: "SimpleEmailService_v2.SendBulkEmail" }, SendBulkEmailRequest, SendBulkEmailResponse, [AccountSuspendedException, BadRequestException, LimitExceededException, MailFromDomainNotVerifiedException, MessageRejected, NotFoundException, SendingPausedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
