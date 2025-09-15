import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Pinpoint as _PinpointClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Pinpoint",
  version: "2016-12-01",
  protocol: "restJson1",
  sigV4ServiceName: "mobiletargeting",
  endpointPrefix: "pinpoint",
  operations: {
    CreateApp: {
      http: "POST /v1/apps",
      traits: {
        ApplicationResponse: "httpPayload",
      },
    },
    CreateCampaign: {
      http: "POST /v1/apps/{ApplicationId}/campaigns",
      traits: {
        CampaignResponse: "httpPayload",
      },
    },
    CreateEmailTemplate: {
      http: "POST /v1/templates/{TemplateName}/email",
      traits: {
        CreateTemplateMessageBody: "httpPayload",
      },
    },
    CreateExportJob: {
      http: "POST /v1/apps/{ApplicationId}/jobs/export",
      traits: {
        ExportJobResponse: "httpPayload",
      },
    },
    CreateImportJob: {
      http: "POST /v1/apps/{ApplicationId}/jobs/import",
      traits: {
        ImportJobResponse: "httpPayload",
      },
    },
    CreateInAppTemplate: {
      http: "POST /v1/templates/{TemplateName}/inapp",
      traits: {
        TemplateCreateMessageBody: "httpPayload",
      },
    },
    CreateJourney: {
      http: "POST /v1/apps/{ApplicationId}/journeys",
      traits: {
        JourneyResponse: "httpPayload",
      },
    },
    CreatePushTemplate: {
      http: "POST /v1/templates/{TemplateName}/push",
      traits: {
        CreateTemplateMessageBody: "httpPayload",
      },
    },
    CreateRecommenderConfiguration: {
      http: "POST /v1/recommenders",
      traits: {
        RecommenderConfigurationResponse: "httpPayload",
      },
    },
    CreateSegment: {
      http: "POST /v1/apps/{ApplicationId}/segments",
      traits: {
        SegmentResponse: "httpPayload",
      },
    },
    CreateSmsTemplate: {
      http: "POST /v1/templates/{TemplateName}/sms",
      traits: {
        CreateTemplateMessageBody: "httpPayload",
      },
    },
    CreateVoiceTemplate: {
      http: "POST /v1/templates/{TemplateName}/voice",
      traits: {
        CreateTemplateMessageBody: "httpPayload",
      },
    },
    DeleteAdmChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/adm",
      traits: {
        ADMChannelResponse: "httpPayload",
      },
    },
    DeleteApnsChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/apns",
      traits: {
        APNSChannelResponse: "httpPayload",
      },
    },
    DeleteApnsSandboxChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/apns_sandbox",
      traits: {
        APNSSandboxChannelResponse: "httpPayload",
      },
    },
    DeleteApnsVoipChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/apns_voip",
      traits: {
        APNSVoipChannelResponse: "httpPayload",
      },
    },
    DeleteApnsVoipSandboxChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
      traits: {
        APNSVoipSandboxChannelResponse: "httpPayload",
      },
    },
    DeleteApp: {
      http: "DELETE /v1/apps/{ApplicationId}",
      traits: {
        ApplicationResponse: "httpPayload",
      },
    },
    DeleteBaiduChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/baidu",
      traits: {
        BaiduChannelResponse: "httpPayload",
      },
    },
    DeleteCampaign: {
      http: "DELETE /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
      traits: {
        CampaignResponse: "httpPayload",
      },
    },
    DeleteEmailChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/email",
      traits: {
        EmailChannelResponse: "httpPayload",
      },
    },
    DeleteEmailTemplate: {
      http: "DELETE /v1/templates/{TemplateName}/email",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    DeleteEndpoint: {
      http: "DELETE /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
      traits: {
        EndpointResponse: "httpPayload",
      },
    },
    DeleteEventStream: {
      http: "DELETE /v1/apps/{ApplicationId}/eventstream",
      traits: {
        EventStream: "httpPayload",
      },
    },
    DeleteGcmChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/gcm",
      traits: {
        GCMChannelResponse: "httpPayload",
      },
    },
    DeleteInAppTemplate: {
      http: "DELETE /v1/templates/{TemplateName}/inapp",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    DeleteJourney: {
      http: "DELETE /v1/apps/{ApplicationId}/journeys/{JourneyId}",
      traits: {
        JourneyResponse: "httpPayload",
      },
    },
    DeletePushTemplate: {
      http: "DELETE /v1/templates/{TemplateName}/push",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    DeleteRecommenderConfiguration: {
      http: "DELETE /v1/recommenders/{RecommenderId}",
      traits: {
        RecommenderConfigurationResponse: "httpPayload",
      },
    },
    DeleteSegment: {
      http: "DELETE /v1/apps/{ApplicationId}/segments/{SegmentId}",
      traits: {
        SegmentResponse: "httpPayload",
      },
    },
    DeleteSmsChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/sms",
      traits: {
        SMSChannelResponse: "httpPayload",
      },
    },
    DeleteSmsTemplate: {
      http: "DELETE /v1/templates/{TemplateName}/sms",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    DeleteUserEndpoints: {
      http: "DELETE /v1/apps/{ApplicationId}/users/{UserId}",
      traits: {
        EndpointsResponse: "httpPayload",
      },
    },
    DeleteVoiceChannel: {
      http: "DELETE /v1/apps/{ApplicationId}/channels/voice",
      traits: {
        VoiceChannelResponse: "httpPayload",
      },
    },
    DeleteVoiceTemplate: {
      http: "DELETE /v1/templates/{TemplateName}/voice",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    GetAdmChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/adm",
      traits: {
        ADMChannelResponse: "httpPayload",
      },
    },
    GetApnsChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/apns",
      traits: {
        APNSChannelResponse: "httpPayload",
      },
    },
    GetApnsSandboxChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/apns_sandbox",
      traits: {
        APNSSandboxChannelResponse: "httpPayload",
      },
    },
    GetApnsVoipChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/apns_voip",
      traits: {
        APNSVoipChannelResponse: "httpPayload",
      },
    },
    GetApnsVoipSandboxChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
      traits: {
        APNSVoipSandboxChannelResponse: "httpPayload",
      },
    },
    GetApp: {
      http: "GET /v1/apps/{ApplicationId}",
      traits: {
        ApplicationResponse: "httpPayload",
      },
    },
    GetApplicationDateRangeKpi: {
      http: "GET /v1/apps/{ApplicationId}/kpis/daterange/{KpiName}",
      traits: {
        ApplicationDateRangeKpiResponse: "httpPayload",
      },
    },
    GetApplicationSettings: {
      http: "GET /v1/apps/{ApplicationId}/settings",
      traits: {
        ApplicationSettingsResource: "httpPayload",
      },
    },
    GetApps: {
      http: "GET /v1/apps",
      traits: {
        ApplicationsResponse: "httpPayload",
      },
    },
    GetBaiduChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/baidu",
      traits: {
        BaiduChannelResponse: "httpPayload",
      },
    },
    GetCampaign: {
      http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
      traits: {
        CampaignResponse: "httpPayload",
      },
    },
    GetCampaignActivities: {
      http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities",
      traits: {
        ActivitiesResponse: "httpPayload",
      },
    },
    GetCampaignDateRangeKpi: {
      http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}",
      traits: {
        CampaignDateRangeKpiResponse: "httpPayload",
      },
    },
    GetCampaigns: {
      http: "GET /v1/apps/{ApplicationId}/campaigns",
      traits: {
        CampaignsResponse: "httpPayload",
      },
    },
    GetCampaignVersion: {
      http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}",
      traits: {
        CampaignResponse: "httpPayload",
      },
    },
    GetCampaignVersions: {
      http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions",
      traits: {
        CampaignsResponse: "httpPayload",
      },
    },
    GetChannels: {
      http: "GET /v1/apps/{ApplicationId}/channels",
      traits: {
        ChannelsResponse: "httpPayload",
      },
    },
    GetEmailChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/email",
      traits: {
        EmailChannelResponse: "httpPayload",
      },
    },
    GetEmailTemplate: {
      http: "GET /v1/templates/{TemplateName}/email",
      traits: {
        EmailTemplateResponse: "httpPayload",
      },
    },
    GetEndpoint: {
      http: "GET /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
      traits: {
        EndpointResponse: "httpPayload",
      },
    },
    GetEventStream: {
      http: "GET /v1/apps/{ApplicationId}/eventstream",
      traits: {
        EventStream: "httpPayload",
      },
    },
    GetExportJob: {
      http: "GET /v1/apps/{ApplicationId}/jobs/export/{JobId}",
      traits: {
        ExportJobResponse: "httpPayload",
      },
    },
    GetExportJobs: {
      http: "GET /v1/apps/{ApplicationId}/jobs/export",
      traits: {
        ExportJobsResponse: "httpPayload",
      },
    },
    GetGcmChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/gcm",
      traits: {
        GCMChannelResponse: "httpPayload",
      },
    },
    GetImportJob: {
      http: "GET /v1/apps/{ApplicationId}/jobs/import/{JobId}",
      traits: {
        ImportJobResponse: "httpPayload",
      },
    },
    GetImportJobs: {
      http: "GET /v1/apps/{ApplicationId}/jobs/import",
      traits: {
        ImportJobsResponse: "httpPayload",
      },
    },
    GetInAppMessages: {
      http: "GET /v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages",
      traits: {
        InAppMessagesResponse: "httpPayload",
      },
    },
    GetInAppTemplate: {
      http: "GET /v1/templates/{TemplateName}/inapp",
      traits: {
        InAppTemplateResponse: "httpPayload",
      },
    },
    GetJourney: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}",
      traits: {
        JourneyResponse: "httpPayload",
      },
    },
    GetJourneyDateRangeKpi: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}",
      traits: {
        JourneyDateRangeKpiResponse: "httpPayload",
      },
    },
    GetJourneyExecutionActivityMetrics: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics",
      traits: {
        JourneyExecutionActivityMetricsResponse: "httpPayload",
      },
    },
    GetJourneyExecutionMetrics: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics",
      traits: {
        JourneyExecutionMetricsResponse: "httpPayload",
      },
    },
    GetJourneyRunExecutionActivityMetrics: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/activities/{JourneyActivityId}/execution-metrics",
      traits: {
        JourneyRunExecutionActivityMetricsResponse: "httpPayload",
      },
    },
    GetJourneyRunExecutionMetrics: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/execution-metrics",
      traits: {
        JourneyRunExecutionMetricsResponse: "httpPayload",
      },
    },
    GetJourneyRuns: {
      http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs",
      traits: {
        JourneyRunsResponse: "httpPayload",
      },
    },
    GetPushTemplate: {
      http: "GET /v1/templates/{TemplateName}/push",
      traits: {
        PushNotificationTemplateResponse: "httpPayload",
      },
    },
    GetRecommenderConfiguration: {
      http: "GET /v1/recommenders/{RecommenderId}",
      traits: {
        RecommenderConfigurationResponse: "httpPayload",
      },
    },
    GetRecommenderConfigurations: {
      http: "GET /v1/recommenders",
      traits: {
        ListRecommenderConfigurationsResponse: "httpPayload",
      },
    },
    GetSegment: {
      http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}",
      traits: {
        SegmentResponse: "httpPayload",
      },
    },
    GetSegmentExportJobs: {
      http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export",
      traits: {
        ExportJobsResponse: "httpPayload",
      },
    },
    GetSegmentImportJobs: {
      http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import",
      traits: {
        ImportJobsResponse: "httpPayload",
      },
    },
    GetSegments: {
      http: "GET /v1/apps/{ApplicationId}/segments",
      traits: {
        SegmentsResponse: "httpPayload",
      },
    },
    GetSegmentVersion: {
      http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}",
      traits: {
        SegmentResponse: "httpPayload",
      },
    },
    GetSegmentVersions: {
      http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/versions",
      traits: {
        SegmentsResponse: "httpPayload",
      },
    },
    GetSmsChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/sms",
      traits: {
        SMSChannelResponse: "httpPayload",
      },
    },
    GetSmsTemplate: {
      http: "GET /v1/templates/{TemplateName}/sms",
      traits: {
        SMSTemplateResponse: "httpPayload",
      },
    },
    GetUserEndpoints: {
      http: "GET /v1/apps/{ApplicationId}/users/{UserId}",
      traits: {
        EndpointsResponse: "httpPayload",
      },
    },
    GetVoiceChannel: {
      http: "GET /v1/apps/{ApplicationId}/channels/voice",
      traits: {
        VoiceChannelResponse: "httpPayload",
      },
    },
    GetVoiceTemplate: {
      http: "GET /v1/templates/{TemplateName}/voice",
      traits: {
        VoiceTemplateResponse: "httpPayload",
      },
    },
    ListJourneys: {
      http: "GET /v1/apps/{ApplicationId}/journeys",
      traits: {
        JourneysResponse: "httpPayload",
      },
    },
    ListTagsForResource: {
      http: "GET /v1/tags/{ResourceArn}",
      traits: {
        TagsModel: "httpPayload",
      },
    },
    ListTemplates: {
      http: "GET /v1/templates",
      traits: {
        TemplatesResponse: "httpPayload",
      },
    },
    ListTemplateVersions: {
      http: "GET /v1/templates/{TemplateName}/{TemplateType}/versions",
      traits: {
        TemplateVersionsResponse: "httpPayload",
      },
    },
    PhoneNumberValidate: {
      http: "POST /v1/phone/number/validate",
      traits: {
        NumberValidateResponse: "httpPayload",
      },
    },
    PutEvents: {
      http: "POST /v1/apps/{ApplicationId}/events",
      traits: {
        EventsResponse: "httpPayload",
      },
    },
    PutEventStream: {
      http: "POST /v1/apps/{ApplicationId}/eventstream",
      traits: {
        EventStream: "httpPayload",
      },
    },
    RemoveAttributes: {
      http: "PUT /v1/apps/{ApplicationId}/attributes/{AttributeType}",
      traits: {
        AttributesResource: "httpPayload",
      },
    },
    SendMessages: {
      http: "POST /v1/apps/{ApplicationId}/messages",
      traits: {
        MessageResponse: "httpPayload",
      },
    },
    SendOTPMessage: {
      http: "POST /v1/apps/{ApplicationId}/otp",
      traits: {
        MessageResponse: "httpPayload",
      },
    },
    SendUsersMessages: {
      http: "POST /v1/apps/{ApplicationId}/users-messages",
      traits: {
        SendUsersMessageResponse: "httpPayload",
      },
    },
    TagResource: "POST /v1/tags/{ResourceArn}",
    UntagResource: "DELETE /v1/tags/{ResourceArn}",
    UpdateAdmChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/adm",
      traits: {
        ADMChannelResponse: "httpPayload",
      },
    },
    UpdateApnsChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/apns",
      traits: {
        APNSChannelResponse: "httpPayload",
      },
    },
    UpdateApnsSandboxChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/apns_sandbox",
      traits: {
        APNSSandboxChannelResponse: "httpPayload",
      },
    },
    UpdateApnsVoipChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/apns_voip",
      traits: {
        APNSVoipChannelResponse: "httpPayload",
      },
    },
    UpdateApnsVoipSandboxChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
      traits: {
        APNSVoipSandboxChannelResponse: "httpPayload",
      },
    },
    UpdateApplicationSettings: {
      http: "PUT /v1/apps/{ApplicationId}/settings",
      traits: {
        ApplicationSettingsResource: "httpPayload",
      },
    },
    UpdateBaiduChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/baidu",
      traits: {
        BaiduChannelResponse: "httpPayload",
      },
    },
    UpdateCampaign: {
      http: "PUT /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
      traits: {
        CampaignResponse: "httpPayload",
      },
    },
    UpdateEmailChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/email",
      traits: {
        EmailChannelResponse: "httpPayload",
      },
    },
    UpdateEmailTemplate: {
      http: "PUT /v1/templates/{TemplateName}/email",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateEndpoint: {
      http: "PUT /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateEndpointsBatch: {
      http: "PUT /v1/apps/{ApplicationId}/endpoints",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateGcmChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/gcm",
      traits: {
        GCMChannelResponse: "httpPayload",
      },
    },
    UpdateInAppTemplate: {
      http: "PUT /v1/templates/{TemplateName}/inapp",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateJourney: {
      http: "PUT /v1/apps/{ApplicationId}/journeys/{JourneyId}",
      traits: {
        JourneyResponse: "httpPayload",
      },
    },
    UpdateJourneyState: {
      http: "PUT /v1/apps/{ApplicationId}/journeys/{JourneyId}/state",
      traits: {
        JourneyResponse: "httpPayload",
      },
    },
    UpdatePushTemplate: {
      http: "PUT /v1/templates/{TemplateName}/push",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateRecommenderConfiguration: {
      http: "PUT /v1/recommenders/{RecommenderId}",
      traits: {
        RecommenderConfigurationResponse: "httpPayload",
      },
    },
    UpdateSegment: {
      http: "PUT /v1/apps/{ApplicationId}/segments/{SegmentId}",
      traits: {
        SegmentResponse: "httpPayload",
      },
    },
    UpdateSmsChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/sms",
      traits: {
        SMSChannelResponse: "httpPayload",
      },
    },
    UpdateSmsTemplate: {
      http: "PUT /v1/templates/{TemplateName}/sms",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateTemplateActiveVersion: {
      http: "PUT /v1/templates/{TemplateName}/{TemplateType}/active-version",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    UpdateVoiceChannel: {
      http: "PUT /v1/apps/{ApplicationId}/channels/voice",
      traits: {
        VoiceChannelResponse: "httpPayload",
      },
    },
    UpdateVoiceTemplate: {
      http: "PUT /v1/templates/{TemplateName}/voice",
      traits: {
        MessageBody: "httpPayload",
      },
    },
    VerifyOTPMessage: {
      http: "POST /v1/apps/{ApplicationId}/verify-otp",
      traits: {
        VerificationResponse: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _Pinpoint = _PinpointClient;
export interface Pinpoint extends _Pinpoint {}
export const Pinpoint = class extends AWSServiceClient {
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
} as unknown as typeof _PinpointClient;
