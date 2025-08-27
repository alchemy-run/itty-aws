import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Connect as _Connect } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Connect",
  version: "2017-08-08",
  protocol: "restJson1",
  sigV4ServiceName: "connect",
  endpointPrefix: "connect",
  operations: {
    ActivateEvaluationForm:
      "POST /evaluation-forms/{InstanceId}/{EvaluationFormId}/activate",
    AssociateAnalyticsDataSet:
      "PUT /analytics-data/instance/{InstanceId}/association",
    AssociateApprovedOrigin: "PUT /instance/{InstanceId}/approved-origin",
    AssociateBot: "PUT /instance/{InstanceId}/bot",
    AssociateDefaultVocabulary:
      "PUT /default-vocabulary/{InstanceId}/{LanguageCode}",
    AssociateFlow: "PUT /flow-associations/{InstanceId}",
    AssociateInstanceStorageConfig: "PUT /instance/{InstanceId}/storage-config",
    AssociateLambdaFunction: "PUT /instance/{InstanceId}/lambda-function",
    AssociateLexBot: "PUT /instance/{InstanceId}/lex-bot",
    AssociatePhoneNumberContactFlow:
      "PUT /phone-number/{PhoneNumberId}/contact-flow",
    AssociateQueueQuickConnects:
      "POST /queues/{InstanceId}/{QueueId}/associate-quick-connects",
    AssociateRoutingProfileQueues:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues",
    AssociateSecurityKey: "PUT /instance/{InstanceId}/security-key",
    AssociateTrafficDistributionGroupUser:
      "PUT /traffic-distribution-group/{TrafficDistributionGroupId}/user",
    AssociateUserProficiencies:
      "POST /users/{InstanceId}/{UserId}/associate-proficiencies",
    BatchAssociateAnalyticsDataSet:
      "PUT /analytics-data/instance/{InstanceId}/associations",
    BatchDisassociateAnalyticsDataSet:
      "POST /analytics-data/instance/{InstanceId}/associations",
    BatchGetAttachedFileMetadata: "POST /attached-files/{InstanceId}",
    BatchGetFlowAssociation: "POST /flow-associations-batch/{InstanceId}",
    BatchPutContact: "PUT /contact/batch/{InstanceId}",
    ClaimPhoneNumber: "POST /phone-number/claim",
    CompleteAttachedFileUpload: "POST /attached-files/{InstanceId}/{FileId}",
    CreateAgentStatus: "PUT /agent-status/{InstanceId}",
    CreateContact: "PUT /contact/create-contact",
    CreateContactFlow: "PUT /contact-flows/{InstanceId}",
    CreateContactFlowModule: "PUT /contact-flow-modules/{InstanceId}",
    CreateContactFlowVersion:
      "PUT /contact-flows/{InstanceId}/{ContactFlowId}/version",
    CreateEmailAddress: "PUT /email-addresses/{InstanceId}",
    CreateEvaluationForm: "PUT /evaluation-forms/{InstanceId}",
    CreateHoursOfOperation: "PUT /hours-of-operations/{InstanceId}",
    CreateHoursOfOperationOverride:
      "PUT /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides",
    CreateInstance: "PUT /instance",
    CreateIntegrationAssociation:
      "PUT /instance/{InstanceId}/integration-associations",
    CreateParticipant: "POST /contact/create-participant",
    CreatePersistentContactAssociation:
      "POST /contact/persistent-contact-association/{InstanceId}/{InitialContactId}",
    CreatePredefinedAttribute: "PUT /predefined-attributes/{InstanceId}",
    CreatePrompt: "PUT /prompts/{InstanceId}",
    CreatePushNotificationRegistration:
      "PUT /push-notification/{InstanceId}/registrations",
    CreateQueue: "PUT /queues/{InstanceId}",
    CreateQuickConnect: "PUT /quick-connects/{InstanceId}",
    CreateRoutingProfile: "PUT /routing-profiles/{InstanceId}",
    CreateRule: "POST /rules/{InstanceId}",
    CreateSecurityProfile: "PUT /security-profiles/{InstanceId}",
    CreateTaskTemplate: "PUT /instance/{InstanceId}/task/template",
    CreateTrafficDistributionGroup: "PUT /traffic-distribution-group",
    CreateUseCase:
      "PUT /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases",
    CreateUser: "PUT /users/{InstanceId}",
    CreateUserHierarchyGroup: "PUT /user-hierarchy-groups/{InstanceId}",
    CreateView: "PUT /views/{InstanceId}",
    CreateViewVersion: "PUT /views/{InstanceId}/{ViewId}/versions",
    CreateVocabulary: "POST /vocabulary/{InstanceId}",
    DeactivateEvaluationForm:
      "POST /evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate",
    DeleteAttachedFile: "DELETE /attached-files/{InstanceId}/{FileId}",
    DeleteContactEvaluation:
      "DELETE /contact-evaluations/{InstanceId}/{EvaluationId}",
    DeleteContactFlow: "DELETE /contact-flows/{InstanceId}/{ContactFlowId}",
    DeleteContactFlowModule:
      "DELETE /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}",
    DeleteContactFlowVersion:
      "DELETE /contact-flows/{InstanceId}/{ContactFlowId}/version/{ContactFlowVersion}",
    DeleteEmailAddress: "DELETE /email-addresses/{InstanceId}/{EmailAddressId}",
    DeleteEvaluationForm:
      "DELETE /evaluation-forms/{InstanceId}/{EvaluationFormId}",
    DeleteHoursOfOperation:
      "DELETE /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
    DeleteHoursOfOperationOverride:
      "DELETE /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
    DeleteInstance: "DELETE /instance/{InstanceId}",
    DeleteIntegrationAssociation:
      "DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}",
    DeletePredefinedAttribute:
      "DELETE /predefined-attributes/{InstanceId}/{Name}",
    DeletePrompt: "DELETE /prompts/{InstanceId}/{PromptId}",
    DeletePushNotificationRegistration:
      "DELETE /push-notification/{InstanceId}/registrations/{RegistrationId}",
    DeleteQueue: "DELETE /queues/{InstanceId}/{QueueId}",
    DeleteQuickConnect: "DELETE /quick-connects/{InstanceId}/{QuickConnectId}",
    DeleteRoutingProfile:
      "DELETE /routing-profiles/{InstanceId}/{RoutingProfileId}",
    DeleteRule: "DELETE /rules/{InstanceId}/{RuleId}",
    DeleteSecurityProfile:
      "DELETE /security-profiles/{InstanceId}/{SecurityProfileId}",
    DeleteTaskTemplate:
      "DELETE /instance/{InstanceId}/task/template/{TaskTemplateId}",
    DeleteTrafficDistributionGroup:
      "DELETE /traffic-distribution-group/{TrafficDistributionGroupId}",
    DeleteUseCase:
      "DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}",
    DeleteUser: "DELETE /users/{InstanceId}/{UserId}",
    DeleteUserHierarchyGroup:
      "DELETE /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}",
    DeleteView: "DELETE /views/{InstanceId}/{ViewId}",
    DeleteViewVersion:
      "DELETE /views/{InstanceId}/{ViewId}/versions/{ViewVersion}",
    DeleteVocabulary: "POST /vocabulary-remove/{InstanceId}/{VocabularyId}",
    DescribeAgentStatus: "GET /agent-status/{InstanceId}/{AgentStatusId}",
    DescribeAuthenticationProfile:
      "GET /authentication-profiles/{InstanceId}/{AuthenticationProfileId}",
    DescribeContact: "GET /contacts/{InstanceId}/{ContactId}",
    DescribeContactEvaluation:
      "GET /contact-evaluations/{InstanceId}/{EvaluationId}",
    DescribeContactFlow: "GET /contact-flows/{InstanceId}/{ContactFlowId}",
    DescribeContactFlowModule:
      "GET /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}",
    DescribeEmailAddress: "GET /email-addresses/{InstanceId}/{EmailAddressId}",
    DescribeEvaluationForm:
      "GET /evaluation-forms/{InstanceId}/{EvaluationFormId}",
    DescribeHoursOfOperation:
      "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
    DescribeHoursOfOperationOverride:
      "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
    DescribeInstance: "GET /instance/{InstanceId}",
    DescribeInstanceAttribute:
      "GET /instance/{InstanceId}/attribute/{AttributeType}",
    DescribeInstanceStorageConfig:
      "GET /instance/{InstanceId}/storage-config/{AssociationId}",
    DescribePhoneNumber: "GET /phone-number/{PhoneNumberId}",
    DescribePredefinedAttribute:
      "GET /predefined-attributes/{InstanceId}/{Name}",
    DescribePrompt: "GET /prompts/{InstanceId}/{PromptId}",
    DescribeQueue: "GET /queues/{InstanceId}/{QueueId}",
    DescribeQuickConnect: "GET /quick-connects/{InstanceId}/{QuickConnectId}",
    DescribeRoutingProfile:
      "GET /routing-profiles/{InstanceId}/{RoutingProfileId}",
    DescribeRule: "GET /rules/{InstanceId}/{RuleId}",
    DescribeSecurityProfile:
      "GET /security-profiles/{InstanceId}/{SecurityProfileId}",
    DescribeTrafficDistributionGroup:
      "GET /traffic-distribution-group/{TrafficDistributionGroupId}",
    DescribeUser: "GET /users/{InstanceId}/{UserId}",
    DescribeUserHierarchyGroup:
      "GET /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}",
    DescribeUserHierarchyStructure:
      "GET /user-hierarchy-structure/{InstanceId}",
    DescribeView: "GET /views/{InstanceId}/{ViewId}",
    DescribeVocabulary: "GET /vocabulary/{InstanceId}/{VocabularyId}",
    DisassociateAnalyticsDataSet:
      "POST /analytics-data/instance/{InstanceId}/association",
    DisassociateApprovedOrigin: "DELETE /instance/{InstanceId}/approved-origin",
    DisassociateBot: "POST /instance/{InstanceId}/bot",
    DisassociateFlow:
      "DELETE /flow-associations/{InstanceId}/{ResourceId}/{ResourceType}",
    DisassociateInstanceStorageConfig:
      "DELETE /instance/{InstanceId}/storage-config/{AssociationId}",
    DisassociateLambdaFunction: "DELETE /instance/{InstanceId}/lambda-function",
    DisassociateLexBot: "DELETE /instance/{InstanceId}/lex-bot",
    DisassociatePhoneNumberContactFlow:
      "DELETE /phone-number/{PhoneNumberId}/contact-flow",
    DisassociateQueueQuickConnects:
      "POST /queues/{InstanceId}/{QueueId}/disassociate-quick-connects",
    DisassociateRoutingProfileQueues:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues",
    DisassociateSecurityKey:
      "DELETE /instance/{InstanceId}/security-key/{AssociationId}",
    DisassociateTrafficDistributionGroupUser:
      "DELETE /traffic-distribution-group/{TrafficDistributionGroupId}/user",
    DisassociateUserProficiencies:
      "POST /users/{InstanceId}/{UserId}/disassociate-proficiencies",
    DismissUserContact: "POST /users/{InstanceId}/{UserId}/contact",
    GetAttachedFile: "GET /attached-files/{InstanceId}/{FileId}",
    GetContactAttributes:
      "GET /contact/attributes/{InstanceId}/{InitialContactId}",
    GetCurrentMetricData: "POST /metrics/current/{InstanceId}",
    GetCurrentUserData: "POST /metrics/userdata/{InstanceId}",
    GetEffectiveHoursOfOperations:
      "GET /effective-hours-of-operations/{InstanceId}/{HoursOfOperationId}",
    GetFederationToken: "GET /user/federate/{InstanceId}",
    GetFlowAssociation:
      "GET /flow-associations/{InstanceId}/{ResourceId}/{ResourceType}",
    GetMetricData: "POST /metrics/historical/{InstanceId}",
    GetMetricDataV2: "POST /metrics/data",
    GetPromptFile: "GET /prompts/{InstanceId}/{PromptId}/file",
    GetTaskTemplate:
      "GET /instance/{InstanceId}/task/template/{TaskTemplateId}",
    GetTrafficDistribution: "GET /traffic-distribution/{Id}",
    ImportPhoneNumber: "POST /phone-number/import",
    ListAgentStatuses: "GET /agent-status/{InstanceId}",
    ListAnalyticsDataAssociations:
      "GET /analytics-data/instance/{InstanceId}/association",
    ListAnalyticsDataLakeDataSets:
      "GET /analytics-data/instance/{InstanceId}/datasets",
    ListApprovedOrigins: "GET /instance/{InstanceId}/approved-origins",
    ListAssociatedContacts: "GET /contact/associated/{InstanceId}",
    ListAuthenticationProfiles:
      "GET /authentication-profiles-summary/{InstanceId}",
    ListBots: "GET /instance/{InstanceId}/bots",
    ListContactEvaluations: "GET /contact-evaluations/{InstanceId}",
    ListContactFlowModules: "GET /contact-flow-modules-summary/{InstanceId}",
    ListContactFlows: "GET /contact-flows-summary/{InstanceId}",
    ListContactFlowVersions:
      "GET /contact-flows/{InstanceId}/{ContactFlowId}/versions",
    ListContactReferences: "GET /contact/references/{InstanceId}/{ContactId}",
    ListDefaultVocabularies: "POST /default-vocabulary-summary/{InstanceId}",
    ListEvaluationForms: "GET /evaluation-forms/{InstanceId}",
    ListEvaluationFormVersions:
      "GET /evaluation-forms/{InstanceId}/{EvaluationFormId}/versions",
    ListFlowAssociations: "GET /flow-associations-summary/{InstanceId}",
    ListHoursOfOperationOverrides:
      "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides",
    ListHoursOfOperations: "GET /hours-of-operations-summary/{InstanceId}",
    ListInstanceAttributes: "GET /instance/{InstanceId}/attributes",
    ListInstances: "GET /instance",
    ListInstanceStorageConfigs: "GET /instance/{InstanceId}/storage-configs",
    ListIntegrationAssociations:
      "GET /instance/{InstanceId}/integration-associations",
    ListLambdaFunctions: "GET /instance/{InstanceId}/lambda-functions",
    ListLexBots: "GET /instance/{InstanceId}/lex-bots",
    ListPhoneNumbers: "GET /phone-numbers-summary/{InstanceId}",
    ListPhoneNumbersV2: "POST /phone-number/list",
    ListPredefinedAttributes: "GET /predefined-attributes/{InstanceId}",
    ListPrompts: "GET /prompts-summary/{InstanceId}",
    ListQueueQuickConnects: "GET /queues/{InstanceId}/{QueueId}/quick-connects",
    ListQueues: "GET /queues-summary/{InstanceId}",
    ListQuickConnects: "GET /quick-connects/{InstanceId}",
    ListRealtimeContactAnalysisSegmentsV2:
      "POST /contact/list-real-time-analysis-segments-v2/{InstanceId}/{ContactId}",
    ListRoutingProfileQueues:
      "GET /routing-profiles/{InstanceId}/{RoutingProfileId}/queues",
    ListRoutingProfiles: "GET /routing-profiles-summary/{InstanceId}",
    ListRules: "GET /rules/{InstanceId}",
    ListSecurityKeys: "GET /instance/{InstanceId}/security-keys",
    ListSecurityProfileApplications:
      "GET /security-profiles-applications/{InstanceId}/{SecurityProfileId}",
    ListSecurityProfilePermissions:
      "GET /security-profiles-permissions/{InstanceId}/{SecurityProfileId}",
    ListSecurityProfiles: "GET /security-profiles-summary/{InstanceId}",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListTaskTemplates: "GET /instance/{InstanceId}/task/template",
    ListTrafficDistributionGroups: "GET /traffic-distribution-groups",
    ListTrafficDistributionGroupUsers:
      "GET /traffic-distribution-group/{TrafficDistributionGroupId}/user",
    ListUseCases:
      "GET /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases",
    ListUserHierarchyGroups: "GET /user-hierarchy-groups-summary/{InstanceId}",
    ListUserProficiencies: "GET /users/{InstanceId}/{UserId}/proficiencies",
    ListUsers: "GET /users-summary/{InstanceId}",
    ListViews: "GET /views/{InstanceId}",
    ListViewVersions: "GET /views/{InstanceId}/{ViewId}/versions",
    MonitorContact: "POST /contact/monitor",
    PauseContact: "POST /contact/pause",
    PutUserStatus: "PUT /users/{InstanceId}/{UserId}/status",
    ReleasePhoneNumber: "DELETE /phone-number/{PhoneNumberId}",
    ReplicateInstance: "POST /instance/{InstanceId}/replicate",
    ResumeContact: "POST /contact/resume",
    ResumeContactRecording: "POST /contact/resume-recording",
    SearchAgentStatuses: "POST /search-agent-statuses",
    SearchAvailablePhoneNumbers: "POST /phone-number/search-available",
    SearchContactFlowModules: "POST /search-contact-flow-modules",
    SearchContactFlows: "POST /search-contact-flows",
    SearchContacts: "POST /search-contacts",
    SearchEmailAddresses: "POST /search-email-addresses",
    SearchHoursOfOperationOverrides:
      "POST /search-hours-of-operation-overrides",
    SearchHoursOfOperations: "POST /search-hours-of-operations",
    SearchPredefinedAttributes: "POST /search-predefined-attributes",
    SearchPrompts: "POST /search-prompts",
    SearchQueues: "POST /search-queues",
    SearchQuickConnects: "POST /search-quick-connects",
    SearchResourceTags: "POST /search-resource-tags",
    SearchRoutingProfiles: "POST /search-routing-profiles",
    SearchSecurityProfiles: "POST /search-security-profiles",
    SearchUserHierarchyGroups: "POST /search-user-hierarchy-groups",
    SearchUsers: "POST /search-users",
    SearchVocabularies: "POST /vocabulary-summary/{InstanceId}",
    SendChatIntegrationEvent: "POST /chat-integration-event",
    SendOutboundEmail: "PUT /instance/{InstanceId}/outbound-email",
    StartAttachedFileUpload: "PUT /attached-files/{InstanceId}",
    StartChatContact: "PUT /contact/chat",
    StartContactEvaluation: "PUT /contact-evaluations/{InstanceId}",
    StartContactRecording: "POST /contact/start-recording",
    StartContactStreaming: "POST /contact/start-streaming",
    StartEmailContact: "PUT /contact/email",
    StartOutboundChatContact: "PUT /contact/outbound-chat",
    StartOutboundEmailContact: "PUT /contact/outbound-email",
    StartOutboundVoiceContact: "PUT /contact/outbound-voice",
    StartScreenSharing: "PUT /contact/screen-sharing",
    StartTaskContact: "PUT /contact/task",
    StartWebRTCContact: "PUT /contact/webrtc",
    StopContact: "POST /contact/stop",
    StopContactRecording: "POST /contact/stop-recording",
    StopContactStreaming: "POST /contact/stop-streaming",
    SubmitContactEvaluation:
      "POST /contact-evaluations/{InstanceId}/{EvaluationId}/submit",
    SuspendContactRecording: "POST /contact/suspend-recording",
    TagContact: "POST /contact/tags",
    TagResource: "POST /tags/{resourceArn}",
    TransferContact: "POST /contact/transfer",
    UntagContact: "DELETE /contact/tags/{InstanceId}/{ContactId}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAgentStatus: "POST /agent-status/{InstanceId}/{AgentStatusId}",
    UpdateAuthenticationProfile:
      "POST /authentication-profiles/{InstanceId}/{AuthenticationProfileId}",
    UpdateContact: "POST /contacts/{InstanceId}/{ContactId}",
    UpdateContactAttributes: "POST /contact/attributes",
    UpdateContactEvaluation:
      "POST /contact-evaluations/{InstanceId}/{EvaluationId}",
    UpdateContactFlowContent:
      "POST /contact-flows/{InstanceId}/{ContactFlowId}/content",
    UpdateContactFlowMetadata:
      "POST /contact-flows/{InstanceId}/{ContactFlowId}/metadata",
    UpdateContactFlowModuleContent:
      "POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content",
    UpdateContactFlowModuleMetadata:
      "POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata",
    UpdateContactFlowName:
      "POST /contact-flows/{InstanceId}/{ContactFlowId}/name",
    UpdateContactRoutingData:
      "POST /contacts/{InstanceId}/{ContactId}/routing-data",
    UpdateContactSchedule: "POST /contact/schedule",
    UpdateEmailAddressMetadata:
      "POST /email-addresses/{InstanceId}/{EmailAddressId}",
    UpdateEvaluationForm:
      "PUT /evaluation-forms/{InstanceId}/{EvaluationFormId}",
    UpdateHoursOfOperation:
      "POST /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
    UpdateHoursOfOperationOverride:
      "POST /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
    UpdateInstanceAttribute:
      "POST /instance/{InstanceId}/attribute/{AttributeType}",
    UpdateInstanceStorageConfig:
      "POST /instance/{InstanceId}/storage-config/{AssociationId}",
    UpdateParticipantAuthentication:
      "POST /contact/update-participant-authentication",
    UpdateParticipantRoleConfig:
      "PUT /contact/participant-role-config/{InstanceId}/{ContactId}",
    UpdatePhoneNumber: "PUT /phone-number/{PhoneNumberId}",
    UpdatePhoneNumberMetadata: "PUT /phone-number/{PhoneNumberId}/metadata",
    UpdatePredefinedAttribute:
      "POST /predefined-attributes/{InstanceId}/{Name}",
    UpdatePrompt: "POST /prompts/{InstanceId}/{PromptId}",
    UpdateQueueHoursOfOperation:
      "POST /queues/{InstanceId}/{QueueId}/hours-of-operation",
    UpdateQueueMaxContacts: "POST /queues/{InstanceId}/{QueueId}/max-contacts",
    UpdateQueueName: "POST /queues/{InstanceId}/{QueueId}/name",
    UpdateQueueOutboundCallerConfig:
      "POST /queues/{InstanceId}/{QueueId}/outbound-caller-config",
    UpdateQueueOutboundEmailConfig:
      "POST /queues/{InstanceId}/{QueueId}/outbound-email-config",
    UpdateQueueStatus: "POST /queues/{InstanceId}/{QueueId}/status",
    UpdateQuickConnectConfig:
      "POST /quick-connects/{InstanceId}/{QuickConnectId}/config",
    UpdateQuickConnectName:
      "POST /quick-connects/{InstanceId}/{QuickConnectId}/name",
    UpdateRoutingProfileAgentAvailabilityTimer:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer",
    UpdateRoutingProfileConcurrency:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency",
    UpdateRoutingProfileDefaultOutboundQueue:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue",
    UpdateRoutingProfileName:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/name",
    UpdateRoutingProfileQueues:
      "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/queues",
    UpdateRule: "PUT /rules/{InstanceId}/{RuleId}",
    UpdateSecurityProfile:
      "POST /security-profiles/{InstanceId}/{SecurityProfileId}",
    UpdateTaskTemplate:
      "POST /instance/{InstanceId}/task/template/{TaskTemplateId}",
    UpdateTrafficDistribution: "PUT /traffic-distribution/{Id}",
    UpdateUserHierarchy: "POST /users/{InstanceId}/{UserId}/hierarchy",
    UpdateUserHierarchyGroupName:
      "POST /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name",
    UpdateUserHierarchyStructure: "POST /user-hierarchy-structure/{InstanceId}",
    UpdateUserIdentityInfo: "POST /users/{InstanceId}/{UserId}/identity-info",
    UpdateUserPhoneConfig: "POST /users/{InstanceId}/{UserId}/phone-config",
    UpdateUserProficiencies: "POST /users/{InstanceId}/{UserId}/proficiencies",
    UpdateUserRoutingProfile:
      "POST /users/{InstanceId}/{UserId}/routing-profile",
    UpdateUserSecurityProfiles:
      "POST /users/{InstanceId}/{UserId}/security-profiles",
    UpdateViewContent: "POST /views/{InstanceId}/{ViewId}",
    UpdateViewMetadata: "POST /views/{InstanceId}/{ViewId}/metadata",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Connect = class extends AWSServiceClient {
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
} as unknown as typeof _Connect;
