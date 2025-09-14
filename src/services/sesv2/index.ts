import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SESv2 as _SESv2Client } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SESv2",
  version: "2019-09-27",
  protocol: "restJson1",
  sigV4ServiceName: "ses",
  endpointPrefix: "email",
  operations: {
    BatchGetMetricData: "POST /v2/email/metrics/batch",
    CancelExportJob: "PUT /v2/email/export-jobs/{JobId}/cancel",
    CreateConfigurationSet: "POST /v2/email/configuration-sets",
    CreateConfigurationSetEventDestination:
      "POST /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
    CreateContact: "POST /v2/email/contact-lists/{ContactListName}/contacts",
    CreateContactList: "POST /v2/email/contact-lists",
    CreateCustomVerificationEmailTemplate:
      "POST /v2/email/custom-verification-email-templates",
    CreateDedicatedIpPool: "POST /v2/email/dedicated-ip-pools",
    CreateDeliverabilityTestReport:
      "POST /v2/email/deliverability-dashboard/test",
    CreateEmailIdentity: "POST /v2/email/identities",
    CreateEmailIdentityPolicy:
      "POST /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
    CreateEmailTemplate: "POST /v2/email/templates",
    CreateExportJob: "POST /v2/email/export-jobs",
    CreateImportJob: "POST /v2/email/import-jobs",
    CreateMultiRegionEndpoint: "POST /v2/email/multi-region-endpoints",
    CreateTenant: "POST /v2/email/tenants",
    CreateTenantResourceAssociation: "POST /v2/email/tenants/resources",
    DeleteConfigurationSet:
      "DELETE /v2/email/configuration-sets/{ConfigurationSetName}",
    DeleteConfigurationSetEventDestination:
      "DELETE /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    DeleteContact:
      "DELETE /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
    DeleteContactList: "DELETE /v2/email/contact-lists/{ContactListName}",
    DeleteCustomVerificationEmailTemplate:
      "DELETE /v2/email/custom-verification-email-templates/{TemplateName}",
    DeleteDedicatedIpPool: "DELETE /v2/email/dedicated-ip-pools/{PoolName}",
    DeleteEmailIdentity: "DELETE /v2/email/identities/{EmailIdentity}",
    DeleteEmailIdentityPolicy:
      "DELETE /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
    DeleteEmailTemplate: "DELETE /v2/email/templates/{TemplateName}",
    DeleteMultiRegionEndpoint:
      "DELETE /v2/email/multi-region-endpoints/{EndpointName}",
    DeleteSuppressedDestination:
      "DELETE /v2/email/suppression/addresses/{EmailAddress}",
    DeleteTenant: "POST /v2/email/tenants/delete",
    DeleteTenantResourceAssociation: "POST /v2/email/tenants/resources/delete",
    GetAccount: "GET /v2/email/account",
    GetBlacklistReports:
      "GET /v2/email/deliverability-dashboard/blacklist-report",
    GetConfigurationSet:
      "GET /v2/email/configuration-sets/{ConfigurationSetName}",
    GetConfigurationSetEventDestinations:
      "GET /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
    GetContact:
      "GET /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
    GetContactList: "GET /v2/email/contact-lists/{ContactListName}",
    GetCustomVerificationEmailTemplate:
      "GET /v2/email/custom-verification-email-templates/{TemplateName}",
    GetDedicatedIp: "GET /v2/email/dedicated-ips/{Ip}",
    GetDedicatedIpPool: "GET /v2/email/dedicated-ip-pools/{PoolName}",
    GetDedicatedIps: "GET /v2/email/dedicated-ips",
    GetDeliverabilityDashboardOptions: "GET /v2/email/deliverability-dashboard",
    GetDeliverabilityTestReport:
      "GET /v2/email/deliverability-dashboard/test-reports/{ReportId}",
    GetDomainDeliverabilityCampaign:
      "GET /v2/email/deliverability-dashboard/campaigns/{CampaignId}",
    GetDomainStatisticsReport:
      "GET /v2/email/deliverability-dashboard/statistics-report/{Domain}",
    GetEmailIdentity: "GET /v2/email/identities/{EmailIdentity}",
    GetEmailIdentityPolicies:
      "GET /v2/email/identities/{EmailIdentity}/policies",
    GetEmailTemplate: "GET /v2/email/templates/{TemplateName}",
    GetExportJob: "GET /v2/email/export-jobs/{JobId}",
    GetImportJob: "GET /v2/email/import-jobs/{JobId}",
    GetMessageInsights: "GET /v2/email/insights/{MessageId}",
    GetMultiRegionEndpoint:
      "GET /v2/email/multi-region-endpoints/{EndpointName}",
    GetReputationEntity:
      "GET /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}",
    GetSuppressedDestination:
      "GET /v2/email/suppression/addresses/{EmailAddress}",
    GetTenant: "POST /v2/email/tenants/get",
    ListConfigurationSets: "GET /v2/email/configuration-sets",
    ListContactLists: "GET /v2/email/contact-lists",
    ListContacts:
      "POST /v2/email/contact-lists/{ContactListName}/contacts/list",
    ListCustomVerificationEmailTemplates:
      "GET /v2/email/custom-verification-email-templates",
    ListDedicatedIpPools: "GET /v2/email/dedicated-ip-pools",
    ListDeliverabilityTestReports:
      "GET /v2/email/deliverability-dashboard/test-reports",
    ListDomainDeliverabilityCampaigns:
      "GET /v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns",
    ListEmailIdentities: "GET /v2/email/identities",
    ListEmailTemplates: "GET /v2/email/templates",
    ListExportJobs: "POST /v2/email/list-export-jobs",
    ListImportJobs: "POST /v2/email/import-jobs/list",
    ListMultiRegionEndpoints: "GET /v2/email/multi-region-endpoints",
    ListRecommendations: "POST /v2/email/vdm/recommendations",
    ListReputationEntities: "POST /v2/email/reputation/entities",
    ListResourceTenants: "POST /v2/email/resources/tenants/list",
    ListSuppressedDestinations: "GET /v2/email/suppression/addresses",
    ListTagsForResource: "GET /v2/email/tags",
    ListTenantResources: "POST /v2/email/tenants/resources/list",
    ListTenants: "POST /v2/email/tenants/list",
    PutAccountDedicatedIpWarmupAttributes:
      "PUT /v2/email/account/dedicated-ips/warmup",
    PutAccountDetails: "POST /v2/email/account/details",
    PutAccountSendingAttributes: "PUT /v2/email/account/sending",
    PutAccountSuppressionAttributes: "PUT /v2/email/account/suppression",
    PutAccountVdmAttributes: "PUT /v2/email/account/vdm",
    PutConfigurationSetArchivingOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/archiving-options",
    PutConfigurationSetDeliveryOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/delivery-options",
    PutConfigurationSetReputationOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/reputation-options",
    PutConfigurationSetSendingOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/sending",
    PutConfigurationSetSuppressionOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/suppression-options",
    PutConfigurationSetTrackingOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/tracking-options",
    PutConfigurationSetVdmOptions:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/vdm-options",
    PutDedicatedIpInPool: "PUT /v2/email/dedicated-ips/{Ip}/pool",
    PutDedicatedIpPoolScalingAttributes:
      "PUT /v2/email/dedicated-ip-pools/{PoolName}/scaling",
    PutDedicatedIpWarmupAttributes: "PUT /v2/email/dedicated-ips/{Ip}/warmup",
    PutDeliverabilityDashboardOption: "PUT /v2/email/deliverability-dashboard",
    PutEmailIdentityConfigurationSetAttributes:
      "PUT /v2/email/identities/{EmailIdentity}/configuration-set",
    PutEmailIdentityDkimAttributes:
      "PUT /v2/email/identities/{EmailIdentity}/dkim",
    PutEmailIdentityDkimSigningAttributes:
      "PUT /v1/email/identities/{EmailIdentity}/dkim/signing",
    PutEmailIdentityFeedbackAttributes:
      "PUT /v2/email/identities/{EmailIdentity}/feedback",
    PutEmailIdentityMailFromAttributes:
      "PUT /v2/email/identities/{EmailIdentity}/mail-from",
    PutSuppressedDestination: "PUT /v2/email/suppression/addresses",
    SendBulkEmail: "POST /v2/email/outbound-bulk-emails",
    SendCustomVerificationEmail:
      "POST /v2/email/outbound-custom-verification-emails",
    SendEmail: "POST /v2/email/outbound-emails",
    TagResource: "POST /v2/email/tags",
    TestRenderEmailTemplate: "POST /v2/email/templates/{TemplateName}/render",
    UntagResource: "DELETE /v2/email/tags",
    UpdateConfigurationSetEventDestination:
      "PUT /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    UpdateContact:
      "PUT /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
    UpdateContactList: "PUT /v2/email/contact-lists/{ContactListName}",
    UpdateCustomVerificationEmailTemplate:
      "PUT /v2/email/custom-verification-email-templates/{TemplateName}",
    UpdateEmailIdentityPolicy:
      "PUT /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
    UpdateEmailTemplate: "PUT /v2/email/templates/{TemplateName}",
    UpdateReputationEntityCustomerManagedStatus:
      "PUT /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status",
    UpdateReputationEntityPolicy:
      "PUT /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type SESv2 = typeof SESv2;
export const SESv2 = class extends AWSServiceClient {
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
} as unknown as typeof _SESv2Client;
