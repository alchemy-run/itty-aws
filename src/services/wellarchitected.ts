import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetProfileTemplateInput extends S.Class<GetProfileTemplateInput>("GetProfileTemplateInput")({}) {}
export const LensAliases = S.Array(S.String);
export const ProfileArns = S.Array(S.String);
export const ReviewTemplateLenses = S.Array(S.String);
export const WorkloadAccountIds = S.Array(S.String);
export const WorkloadAwsRegions = S.Array(S.String);
export const WorkloadNonAwsRegions = S.Array(S.String);
export const WorkloadPillarPriorities = S.Array(S.String);
export const WorkloadLenses = S.Array(S.String);
export const WorkloadApplications = S.Array(S.String);
export const WorkloadProfileArns = S.Array(S.String);
export const ReviewTemplateArns = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const SelectedChoices = S.Array(S.String);
export const ReviewTemplateLensAliases = S.Array(S.String);
export class AssociateLensesInput extends S.Class<AssociateLensesInput>("AssociateLensesInput")({WorkloadId: S.String, LensAliases: LensAliases}) {}
export class AssociateProfilesInput extends S.Class<AssociateProfilesInput>("AssociateProfilesInput")({WorkloadId: S.String, ProfileArns: ProfileArns}) {}
export class CreateLensShareInput extends S.Class<CreateLensShareInput>("CreateLensShareInput")({LensAlias: S.String, SharedWith: S.String, ClientRequestToken: S.String}) {}
export class CreateLensVersionInput extends S.Class<CreateLensVersionInput>("CreateLensVersionInput")({LensAlias: S.String, LensVersion: S.String, IsMajorVersion: S.optional(S.Boolean), ClientRequestToken: S.String}) {}
export class CreateMilestoneInput extends S.Class<CreateMilestoneInput>("CreateMilestoneInput")({WorkloadId: S.String, MilestoneName: S.String, ClientRequestToken: S.String}) {}
export class CreateProfileShareInput extends S.Class<CreateProfileShareInput>("CreateProfileShareInput")({ProfileArn: S.String, SharedWith: S.String, ClientRequestToken: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateReviewTemplateInput extends S.Class<CreateReviewTemplateInput>("CreateReviewTemplateInput")({TemplateName: S.String, Description: S.String, Lenses: ReviewTemplateLenses, Notes: S.optional(S.String), Tags: S.optional(TagMap), ClientRequestToken: S.String}) {}
export class CreateTemplateShareInput extends S.Class<CreateTemplateShareInput>("CreateTemplateShareInput")({TemplateArn: S.String, SharedWith: S.String, ClientRequestToken: S.String}) {}
export class CreateWorkloadShareInput extends S.Class<CreateWorkloadShareInput>("CreateWorkloadShareInput")({WorkloadId: S.String, SharedWith: S.String, PermissionType: S.String, ClientRequestToken: S.String}) {}
export class DeleteLensInput extends S.Class<DeleteLensInput>("DeleteLensInput")({LensAlias: S.String, ClientRequestToken: S.String, LensStatus: S.String}) {}
export class DeleteLensShareInput extends S.Class<DeleteLensShareInput>("DeleteLensShareInput")({ShareId: S.String, LensAlias: S.String, ClientRequestToken: S.String}) {}
export class DeleteProfileInput extends S.Class<DeleteProfileInput>("DeleteProfileInput")({ProfileArn: S.String, ClientRequestToken: S.String}) {}
export class DeleteProfileShareInput extends S.Class<DeleteProfileShareInput>("DeleteProfileShareInput")({ShareId: S.String, ProfileArn: S.String, ClientRequestToken: S.String}) {}
export class DeleteReviewTemplateInput extends S.Class<DeleteReviewTemplateInput>("DeleteReviewTemplateInput")({TemplateArn: S.String, ClientRequestToken: S.String}) {}
export class DeleteTemplateShareInput extends S.Class<DeleteTemplateShareInput>("DeleteTemplateShareInput")({ShareId: S.String, TemplateArn: S.String, ClientRequestToken: S.String}) {}
export class DeleteWorkloadInput extends S.Class<DeleteWorkloadInput>("DeleteWorkloadInput")({WorkloadId: S.String, ClientRequestToken: S.String}) {}
export class DeleteWorkloadShareInput extends S.Class<DeleteWorkloadShareInput>("DeleteWorkloadShareInput")({ShareId: S.String, WorkloadId: S.String, ClientRequestToken: S.String}) {}
export class DisassociateLensesInput extends S.Class<DisassociateLensesInput>("DisassociateLensesInput")({WorkloadId: S.String, LensAliases: LensAliases}) {}
export class DisassociateProfilesInput extends S.Class<DisassociateProfilesInput>("DisassociateProfilesInput")({WorkloadId: S.String, ProfileArns: ProfileArns}) {}
export class ExportLensInput extends S.Class<ExportLensInput>("ExportLensInput")({LensAlias: S.String, LensVersion: S.optional(S.String)}) {}
export class GetAnswerInput extends S.Class<GetAnswerInput>("GetAnswerInput")({WorkloadId: S.String, LensAlias: S.String, QuestionId: S.String, MilestoneNumber: S.optional(S.Number)}) {}
export class GetConsolidatedReportInput extends S.Class<GetConsolidatedReportInput>("GetConsolidatedReportInput")({Format: S.String, IncludeSharedResources: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetLensInput extends S.Class<GetLensInput>("GetLensInput")({LensAlias: S.String, LensVersion: S.optional(S.String)}) {}
export class GetLensReviewInput extends S.Class<GetLensReviewInput>("GetLensReviewInput")({WorkloadId: S.String, LensAlias: S.String, MilestoneNumber: S.optional(S.Number)}) {}
export class GetLensReviewReportInput extends S.Class<GetLensReviewReportInput>("GetLensReviewReportInput")({WorkloadId: S.String, LensAlias: S.String, MilestoneNumber: S.optional(S.Number)}) {}
export class GetLensVersionDifferenceInput extends S.Class<GetLensVersionDifferenceInput>("GetLensVersionDifferenceInput")({LensAlias: S.String, BaseLensVersion: S.optional(S.String), TargetLensVersion: S.optional(S.String)}) {}
export class GetMilestoneInput extends S.Class<GetMilestoneInput>("GetMilestoneInput")({WorkloadId: S.String, MilestoneNumber: S.Number}) {}
export class GetProfileInput extends S.Class<GetProfileInput>("GetProfileInput")({ProfileArn: S.String, ProfileVersion: S.optional(S.String)}) {}
export class GetReviewTemplateInput extends S.Class<GetReviewTemplateInput>("GetReviewTemplateInput")({TemplateArn: S.String}) {}
export class GetReviewTemplateAnswerInput extends S.Class<GetReviewTemplateAnswerInput>("GetReviewTemplateAnswerInput")({TemplateArn: S.String, LensAlias: S.String, QuestionId: S.String}) {}
export class GetReviewTemplateLensReviewInput extends S.Class<GetReviewTemplateLensReviewInput>("GetReviewTemplateLensReviewInput")({TemplateArn: S.String, LensAlias: S.String}) {}
export class GetWorkloadInput extends S.Class<GetWorkloadInput>("GetWorkloadInput")({WorkloadId: S.String}) {}
export class ImportLensInput extends S.Class<ImportLensInput>("ImportLensInput")({LensAlias: S.optional(S.String), JSONString: S.String, ClientRequestToken: S.String, Tags: S.optional(TagMap)}) {}
export class ListAnswersInput extends S.Class<ListAnswersInput>("ListAnswersInput")({WorkloadId: S.String, LensAlias: S.String, PillarId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), QuestionPriority: S.optional(S.String)}) {}
export class ListCheckDetailsInput extends S.Class<ListCheckDetailsInput>("ListCheckDetailsInput")({WorkloadId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), LensArn: S.String, PillarId: S.String, QuestionId: S.String, ChoiceId: S.String}) {}
export class ListCheckSummariesInput extends S.Class<ListCheckSummariesInput>("ListCheckSummariesInput")({WorkloadId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), LensArn: S.String, PillarId: S.String, QuestionId: S.String, ChoiceId: S.String}) {}
export class ListLensesInput extends S.Class<ListLensesInput>("ListLensesInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), LensType: S.optional(S.String), LensStatus: S.optional(S.String), LensName: S.optional(S.String)}) {}
export class ListLensReviewImprovementsInput extends S.Class<ListLensReviewImprovementsInput>("ListLensReviewImprovementsInput")({WorkloadId: S.String, LensAlias: S.String, PillarId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), QuestionPriority: S.optional(S.String)}) {}
export class ListLensReviewsInput extends S.Class<ListLensReviewsInput>("ListLensReviewsInput")({WorkloadId: S.String, MilestoneNumber: S.optional(S.Number), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListLensSharesInput extends S.Class<ListLensSharesInput>("ListLensSharesInput")({LensAlias: S.String, SharedWithPrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListMilestonesInput extends S.Class<ListMilestonesInput>("ListMilestonesInput")({WorkloadId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListNotificationsInput extends S.Class<ListNotificationsInput>("ListNotificationsInput")({WorkloadId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ResourceArn: S.optional(S.String)}) {}
export class ListProfileNotificationsInput extends S.Class<ListProfileNotificationsInput>("ListProfileNotificationsInput")({WorkloadId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProfilesInput extends S.Class<ListProfilesInput>("ListProfilesInput")({ProfileNamePrefix: S.optional(S.String), ProfileOwnerType: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListProfileSharesInput extends S.Class<ListProfileSharesInput>("ListProfileSharesInput")({ProfileArn: S.String, SharedWithPrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListReviewTemplateAnswersInput extends S.Class<ListReviewTemplateAnswersInput>("ListReviewTemplateAnswersInput")({TemplateArn: S.String, LensAlias: S.String, PillarId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReviewTemplatesInput extends S.Class<ListReviewTemplatesInput>("ListReviewTemplatesInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListShareInvitationsInput extends S.Class<ListShareInvitationsInput>("ListShareInvitationsInput")({WorkloadNamePrefix: S.optional(S.String), LensNamePrefix: S.optional(S.String), ShareResourceType: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), ProfileNamePrefix: S.optional(S.String), TemplateNamePrefix: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({WorkloadArn: S.String}) {}
export class ListTemplateSharesInput extends S.Class<ListTemplateSharesInput>("ListTemplateSharesInput")({TemplateArn: S.String, SharedWithPrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class ListWorkloadsInput extends S.Class<ListWorkloadsInput>("ListWorkloadsInput")({WorkloadNamePrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListWorkloadSharesInput extends S.Class<ListWorkloadSharesInput>("ListWorkloadSharesInput")({WorkloadId: S.String, SharedWithPrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Status: S.optional(S.String)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({WorkloadArn: S.String, Tags: TagMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({WorkloadArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class UpdateIntegrationInput extends S.Class<UpdateIntegrationInput>("UpdateIntegrationInput")({WorkloadId: S.String, ClientRequestToken: S.String, IntegratingService: S.String}) {}
export const SelectedProfileChoiceIds = S.Array(S.String);
export class ProfileQuestionUpdate extends S.Class<ProfileQuestionUpdate>("ProfileQuestionUpdate")({QuestionId: S.optional(S.String), SelectedChoiceIds: S.optional(SelectedProfileChoiceIds)}) {}
export const ProfileQuestionUpdates = S.Array(ProfileQuestionUpdate);
export class UpdateProfileInput extends S.Class<UpdateProfileInput>("UpdateProfileInput")({ProfileArn: S.String, ProfileDescription: S.optional(S.String), ProfileQuestions: S.optional(ProfileQuestionUpdates)}) {}
export class UpdateReviewTemplateInput extends S.Class<UpdateReviewTemplateInput>("UpdateReviewTemplateInput")({TemplateArn: S.String, TemplateName: S.optional(S.String), Description: S.optional(S.String), Notes: S.optional(S.String), LensesToAssociate: S.optional(ReviewTemplateLensAliases), LensesToDisassociate: S.optional(ReviewTemplateLensAliases)}) {}
export class ChoiceUpdate extends S.Class<ChoiceUpdate>("ChoiceUpdate")({Status: S.String, Reason: S.optional(S.String), Notes: S.optional(S.String)}) {}
export const ChoiceUpdates = S.Record({key: S.String, value: ChoiceUpdate});
export class UpdateReviewTemplateAnswerInput extends S.Class<UpdateReviewTemplateAnswerInput>("UpdateReviewTemplateAnswerInput")({TemplateArn: S.String, LensAlias: S.String, QuestionId: S.String, SelectedChoices: S.optional(SelectedChoices), ChoiceUpdates: S.optional(ChoiceUpdates), Notes: S.optional(S.String), IsApplicable: S.optional(S.Boolean), Reason: S.optional(S.String)}) {}
export const PillarNotes = S.Record({key: S.String, value: S.String});
export class UpdateReviewTemplateLensReviewInput extends S.Class<UpdateReviewTemplateLensReviewInput>("UpdateReviewTemplateLensReviewInput")({TemplateArn: S.String, LensAlias: S.String, LensNotes: S.optional(S.String), PillarNotes: S.optional(PillarNotes)}) {}
export class UpdateShareInvitationInput extends S.Class<UpdateShareInvitationInput>("UpdateShareInvitationInput")({ShareInvitationId: S.String, ShareInvitationAction: S.String}) {}
export const WorkloadResourceDefinition = S.Array(S.String);
export class WorkloadDiscoveryConfig extends S.Class<WorkloadDiscoveryConfig>("WorkloadDiscoveryConfig")({TrustedAdvisorIntegrationStatus: S.optional(S.String), WorkloadResourceDefinition: S.optional(WorkloadResourceDefinition)}) {}
export class WorkloadJiraConfigurationInput extends S.Class<WorkloadJiraConfigurationInput>("WorkloadJiraConfigurationInput")({IssueManagementStatus: S.optional(S.String), IssueManagementType: S.optional(S.String), JiraProjectKey: S.optional(S.String)}) {}
export class UpdateWorkloadInput extends S.Class<UpdateWorkloadInput>("UpdateWorkloadInput")({WorkloadId: S.String, WorkloadName: S.optional(S.String), Description: S.optional(S.String), Environment: S.optional(S.String), AccountIds: S.optional(WorkloadAccountIds), AwsRegions: S.optional(WorkloadAwsRegions), NonAwsRegions: S.optional(WorkloadNonAwsRegions), PillarPriorities: S.optional(WorkloadPillarPriorities), ArchitecturalDesign: S.optional(S.String), ReviewOwner: S.optional(S.String), IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean), IndustryType: S.optional(S.String), Industry: S.optional(S.String), Notes: S.optional(S.String), ImprovementStatus: S.optional(S.String), DiscoveryConfig: S.optional(WorkloadDiscoveryConfig), Applications: S.optional(WorkloadApplications), JiraConfiguration: S.optional(WorkloadJiraConfigurationInput)}) {}
export class UpdateWorkloadShareInput extends S.Class<UpdateWorkloadShareInput>("UpdateWorkloadShareInput")({ShareId: S.String, WorkloadId: S.String, PermissionType: S.String}) {}
export class UpgradeLensReviewInput extends S.Class<UpgradeLensReviewInput>("UpgradeLensReviewInput")({WorkloadId: S.String, LensAlias: S.String, MilestoneName: S.String, ClientRequestToken: S.optional(S.String)}) {}
export class UpgradeProfileVersionInput extends S.Class<UpgradeProfileVersionInput>("UpgradeProfileVersionInput")({WorkloadId: S.String, ProfileArn: S.String, MilestoneName: S.optional(S.String), ClientRequestToken: S.optional(S.String)}) {}
export class UpgradeReviewTemplateLensReviewInput extends S.Class<UpgradeReviewTemplateLensReviewInput>("UpgradeReviewTemplateLensReviewInput")({TemplateArn: S.String, LensAlias: S.String, ClientRequestToken: S.optional(S.String)}) {}
export class AccountJiraConfigurationOutput extends S.Class<AccountJiraConfigurationOutput>("AccountJiraConfigurationOutput")({IntegrationStatus: S.optional(S.String), IssueManagementStatus: S.optional(S.String), IssueManagementType: S.optional(S.String), Subdomain: S.optional(S.String), JiraProjectKey: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export class AccountJiraConfigurationInput extends S.Class<AccountJiraConfigurationInput>("AccountJiraConfigurationInput")({IssueManagementStatus: S.optional(S.String), IssueManagementType: S.optional(S.String), JiraProjectKey: S.optional(S.String), IntegrationStatus: S.optional(S.String)}) {}
export const SelectedQuestionIds = S.Array(S.String);
export class CreateLensShareOutput extends S.Class<CreateLensShareOutput>("CreateLensShareOutput")({ShareId: S.optional(S.String)}) {}
export class CreateLensVersionOutput extends S.Class<CreateLensVersionOutput>("CreateLensVersionOutput")({LensArn: S.optional(S.String), LensVersion: S.optional(S.String)}) {}
export class CreateMilestoneOutput extends S.Class<CreateMilestoneOutput>("CreateMilestoneOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number)}) {}
export class CreateProfileInput extends S.Class<CreateProfileInput>("CreateProfileInput")({ProfileName: S.String, ProfileDescription: S.String, ProfileQuestions: ProfileQuestionUpdates, ClientRequestToken: S.String, Tags: S.optional(TagMap)}) {}
export class CreateProfileShareOutput extends S.Class<CreateProfileShareOutput>("CreateProfileShareOutput")({ShareId: S.optional(S.String), ProfileArn: S.optional(S.String)}) {}
export class CreateReviewTemplateOutput extends S.Class<CreateReviewTemplateOutput>("CreateReviewTemplateOutput")({TemplateArn: S.optional(S.String)}) {}
export class CreateTemplateShareOutput extends S.Class<CreateTemplateShareOutput>("CreateTemplateShareOutput")({TemplateArn: S.optional(S.String), ShareId: S.optional(S.String)}) {}
export class CreateWorkloadInput extends S.Class<CreateWorkloadInput>("CreateWorkloadInput")({WorkloadName: S.String, Description: S.String, Environment: S.String, AccountIds: S.optional(WorkloadAccountIds), AwsRegions: S.optional(WorkloadAwsRegions), NonAwsRegions: S.optional(WorkloadNonAwsRegions), PillarPriorities: S.optional(WorkloadPillarPriorities), ArchitecturalDesign: S.optional(S.String), ReviewOwner: S.optional(S.String), IndustryType: S.optional(S.String), Industry: S.optional(S.String), Lenses: WorkloadLenses, Notes: S.optional(S.String), ClientRequestToken: S.String, Tags: S.optional(TagMap), DiscoveryConfig: S.optional(WorkloadDiscoveryConfig), Applications: S.optional(WorkloadApplications), ProfileArns: S.optional(WorkloadProfileArns), ReviewTemplateArns: S.optional(ReviewTemplateArns), JiraConfiguration: S.optional(WorkloadJiraConfigurationInput)}) {}
export class CreateWorkloadShareOutput extends S.Class<CreateWorkloadShareOutput>("CreateWorkloadShareOutput")({WorkloadId: S.optional(S.String), ShareId: S.optional(S.String)}) {}
export class ExportLensOutput extends S.Class<ExportLensOutput>("ExportLensOutput")({LensJSON: S.optional(S.String)}) {}
export class GetGlobalSettingsOutput extends S.Class<GetGlobalSettingsOutput>("GetGlobalSettingsOutput")({OrganizationSharingStatus: S.optional(S.String), DiscoveryIntegrationStatus: S.optional(S.String), JiraConfiguration: S.optional(AccountJiraConfigurationOutput)}) {}
export class ImportLensOutput extends S.Class<ImportLensOutput>("ImportLensOutput")({LensArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMap)}) {}
export class UpdateGlobalSettingsInput extends S.Class<UpdateGlobalSettingsInput>("UpdateGlobalSettingsInput")({OrganizationSharingStatus: S.optional(S.String), DiscoveryIntegrationStatus: S.optional(S.String), JiraConfiguration: S.optional(AccountJiraConfigurationInput)}) {}
export class ProfileChoice extends S.Class<ProfileChoice>("ProfileChoice")({ChoiceId: S.optional(S.String), ChoiceTitle: S.optional(S.String), ChoiceDescription: S.optional(S.String)}) {}
export const ProfileQuestionChoices = S.Array(ProfileChoice);
export const SelectedChoiceIds = S.Array(S.String);
export class ProfileQuestion extends S.Class<ProfileQuestion>("ProfileQuestion")({QuestionId: S.optional(S.String), QuestionTitle: S.optional(S.String), QuestionDescription: S.optional(S.String), QuestionChoices: S.optional(ProfileQuestionChoices), SelectedChoiceIds: S.optional(SelectedChoiceIds), MinSelectedChoices: S.optional(S.Number), MaxSelectedChoices: S.optional(S.Number)}) {}
export const ProfileQuestions = S.Array(ProfileQuestion);
export class Profile extends S.Class<Profile>("Profile")({ProfileArn: S.optional(S.String), ProfileVersion: S.optional(S.String), ProfileName: S.optional(S.String), ProfileDescription: S.optional(S.String), ProfileQuestions: S.optional(ProfileQuestions), Owner: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), ShareInvitationId: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class UpdateProfileOutput extends S.Class<UpdateProfileOutput>("UpdateProfileOutput")({Profile: S.optional(Profile)}) {}
export const QuestionCounts = S.Record({key: S.String, value: S.Number});
export class ReviewTemplate extends S.Class<ReviewTemplate>("ReviewTemplate")({Description: S.optional(S.String), Lenses: S.optional(ReviewTemplateLenses), Notes: S.optional(S.String), QuestionCounts: S.optional(QuestionCounts), Owner: S.optional(S.String), UpdatedAt: S.optional(S.Date), TemplateArn: S.optional(S.String), TemplateName: S.optional(S.String), Tags: S.optional(TagMap), UpdateStatus: S.optional(S.String), ShareInvitationId: S.optional(S.String)}) {}
export class UpdateReviewTemplateOutput extends S.Class<UpdateReviewTemplateOutput>("UpdateReviewTemplateOutput")({ReviewTemplate: S.optional(ReviewTemplate)}) {}
export class ChoiceContent extends S.Class<ChoiceContent>("ChoiceContent")({DisplayText: S.optional(S.String), Url: S.optional(S.String)}) {}
export const Urls = S.Array(ChoiceContent);
export class AdditionalResources extends S.Class<AdditionalResources>("AdditionalResources")({Type: S.optional(S.String), Content: S.optional(Urls)}) {}
export const AdditionalResourcesList = S.Array(AdditionalResources);
export class Choice extends S.Class<Choice>("Choice")({ChoiceId: S.optional(S.String), Title: S.optional(S.String), Description: S.optional(S.String), HelpfulResource: S.optional(ChoiceContent), ImprovementPlan: S.optional(ChoiceContent), AdditionalResources: S.optional(AdditionalResourcesList)}) {}
export const Choices = S.Array(Choice);
export class ChoiceAnswer extends S.Class<ChoiceAnswer>("ChoiceAnswer")({ChoiceId: S.optional(S.String), Status: S.optional(S.String), Reason: S.optional(S.String), Notes: S.optional(S.String)}) {}
export const ChoiceAnswers = S.Array(ChoiceAnswer);
export class ReviewTemplateAnswer extends S.Class<ReviewTemplateAnswer>("ReviewTemplateAnswer")({QuestionId: S.optional(S.String), PillarId: S.optional(S.String), QuestionTitle: S.optional(S.String), QuestionDescription: S.optional(S.String), ImprovementPlanUrl: S.optional(S.String), HelpfulResourceUrl: S.optional(S.String), HelpfulResourceDisplayText: S.optional(S.String), Choices: S.optional(Choices), SelectedChoices: S.optional(SelectedChoices), ChoiceAnswers: S.optional(ChoiceAnswers), IsApplicable: S.optional(S.Boolean), AnswerStatus: S.optional(S.String), Notes: S.optional(S.String), Reason: S.optional(S.String)}) {}
export class UpdateReviewTemplateAnswerOutput extends S.Class<UpdateReviewTemplateAnswerOutput>("UpdateReviewTemplateAnswerOutput")({TemplateArn: S.optional(S.String), LensAlias: S.optional(S.String), Answer: S.optional(ReviewTemplateAnswer)}) {}
export class ReviewTemplatePillarReviewSummary extends S.Class<ReviewTemplatePillarReviewSummary>("ReviewTemplatePillarReviewSummary")({PillarId: S.optional(S.String), PillarName: S.optional(S.String), Notes: S.optional(S.String), QuestionCounts: S.optional(QuestionCounts)}) {}
export const ReviewTemplatePillarReviewSummaries = S.Array(ReviewTemplatePillarReviewSummary);
export class ReviewTemplateLensReview extends S.Class<ReviewTemplateLensReview>("ReviewTemplateLensReview")({LensAlias: S.optional(S.String), LensArn: S.optional(S.String), LensVersion: S.optional(S.String), LensName: S.optional(S.String), LensStatus: S.optional(S.String), PillarReviewSummaries: S.optional(ReviewTemplatePillarReviewSummaries), UpdatedAt: S.optional(S.Date), Notes: S.optional(S.String), QuestionCounts: S.optional(QuestionCounts), NextToken: S.optional(S.String)}) {}
export class UpdateReviewTemplateLensReviewOutput extends S.Class<UpdateReviewTemplateLensReviewOutput>("UpdateReviewTemplateLensReviewOutput")({TemplateArn: S.optional(S.String), LensReview: S.optional(ReviewTemplateLensReview)}) {}
export const RiskCounts = S.Record({key: S.String, value: S.Number});
export class WorkloadProfile extends S.Class<WorkloadProfile>("WorkloadProfile")({ProfileArn: S.optional(S.String), ProfileVersion: S.optional(S.String)}) {}
export const WorkloadProfiles = S.Array(WorkloadProfile);
export class WorkloadJiraConfigurationOutput extends S.Class<WorkloadJiraConfigurationOutput>("WorkloadJiraConfigurationOutput")({IssueManagementStatus: S.optional(S.String), IssueManagementType: S.optional(S.String), JiraProjectKey: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export class Workload extends S.Class<Workload>("Workload")({WorkloadId: S.optional(S.String), WorkloadArn: S.optional(S.String), WorkloadName: S.optional(S.String), Description: S.optional(S.String), Environment: S.optional(S.String), UpdatedAt: S.optional(S.Date), AccountIds: S.optional(WorkloadAccountIds), AwsRegions: S.optional(WorkloadAwsRegions), NonAwsRegions: S.optional(WorkloadNonAwsRegions), ArchitecturalDesign: S.optional(S.String), ReviewOwner: S.optional(S.String), ReviewRestrictionDate: S.optional(S.Date), IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean), IndustryType: S.optional(S.String), Industry: S.optional(S.String), Notes: S.optional(S.String), ImprovementStatus: S.optional(S.String), RiskCounts: S.optional(RiskCounts), PillarPriorities: S.optional(WorkloadPillarPriorities), Lenses: S.optional(WorkloadLenses), Owner: S.optional(S.String), ShareInvitationId: S.optional(S.String), Tags: S.optional(TagMap), DiscoveryConfig: S.optional(WorkloadDiscoveryConfig), Applications: S.optional(WorkloadApplications), Profiles: S.optional(WorkloadProfiles), PrioritizedRiskCounts: S.optional(RiskCounts), JiraConfiguration: S.optional(WorkloadJiraConfigurationOutput)}) {}
export class UpdateWorkloadOutput extends S.Class<UpdateWorkloadOutput>("UpdateWorkloadOutput")({Workload: S.optional(Workload)}) {}
export class SelectedPillar extends S.Class<SelectedPillar>("SelectedPillar")({PillarId: S.optional(S.String), SelectedQuestionIds: S.optional(SelectedQuestionIds)}) {}
export const SelectedPillars = S.Array(SelectedPillar);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class Lens extends S.Class<Lens>("Lens")({LensArn: S.optional(S.String), LensVersion: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Owner: S.optional(S.String), ShareInvitationId: S.optional(S.String), Tags: S.optional(TagMap)}) {}
export class LensReviewReport extends S.Class<LensReviewReport>("LensReviewReport")({LensAlias: S.optional(S.String), LensArn: S.optional(S.String), Base64String: S.optional(S.String)}) {}
export class Milestone extends S.Class<Milestone>("Milestone")({MilestoneNumber: S.optional(S.Number), MilestoneName: S.optional(S.String), RecordedAt: S.optional(S.Date), Workload: S.optional(Workload)}) {}
export class CheckDetail extends S.Class<CheckDetail>("CheckDetail")({Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Provider: S.optional(S.String), LensArn: S.optional(S.String), PillarId: S.optional(S.String), QuestionId: S.optional(S.String), ChoiceId: S.optional(S.String), Status: S.optional(S.String), AccountId: S.optional(S.String), FlaggedResources: S.optional(S.Number), Reason: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export const CheckDetails = S.Array(CheckDetail);
export class LensSummary extends S.Class<LensSummary>("LensSummary")({LensArn: S.optional(S.String), LensAlias: S.optional(S.String), LensName: S.optional(S.String), LensType: S.optional(S.String), Description: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), LensVersion: S.optional(S.String), Owner: S.optional(S.String), LensStatus: S.optional(S.String)}) {}
export const LensSummaries = S.Array(LensSummary);
export class LensReviewSummary extends S.Class<LensReviewSummary>("LensReviewSummary")({LensAlias: S.optional(S.String), LensArn: S.optional(S.String), LensVersion: S.optional(S.String), LensName: S.optional(S.String), LensStatus: S.optional(S.String), UpdatedAt: S.optional(S.Date), RiskCounts: S.optional(RiskCounts), Profiles: S.optional(WorkloadProfiles), PrioritizedRiskCounts: S.optional(RiskCounts)}) {}
export const LensReviewSummaries = S.Array(LensReviewSummary);
export class LensShareSummary extends S.Class<LensShareSummary>("LensShareSummary")({ShareId: S.optional(S.String), SharedWith: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const LensShareSummaries = S.Array(LensShareSummary);
export class WorkloadSummary extends S.Class<WorkloadSummary>("WorkloadSummary")({WorkloadId: S.optional(S.String), WorkloadArn: S.optional(S.String), WorkloadName: S.optional(S.String), Owner: S.optional(S.String), UpdatedAt: S.optional(S.Date), Lenses: S.optional(WorkloadLenses), RiskCounts: S.optional(RiskCounts), ImprovementStatus: S.optional(S.String), Profiles: S.optional(WorkloadProfiles), PrioritizedRiskCounts: S.optional(RiskCounts)}) {}
export class MilestoneSummary extends S.Class<MilestoneSummary>("MilestoneSummary")({MilestoneNumber: S.optional(S.Number), MilestoneName: S.optional(S.String), RecordedAt: S.optional(S.Date), WorkloadSummary: S.optional(WorkloadSummary)}) {}
export const MilestoneSummaries = S.Array(MilestoneSummary);
export class ProfileNotificationSummary extends S.Class<ProfileNotificationSummary>("ProfileNotificationSummary")({CurrentProfileVersion: S.optional(S.String), LatestProfileVersion: S.optional(S.String), Type: S.optional(S.String), ProfileArn: S.optional(S.String), ProfileName: S.optional(S.String), WorkloadId: S.optional(S.String), WorkloadName: S.optional(S.String)}) {}
export const ProfileNotificationSummaries = S.Array(ProfileNotificationSummary);
export class ProfileSummary extends S.Class<ProfileSummary>("ProfileSummary")({ProfileArn: S.optional(S.String), ProfileVersion: S.optional(S.String), ProfileName: S.optional(S.String), ProfileDescription: S.optional(S.String), Owner: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export const ProfileSummaries = S.Array(ProfileSummary);
export class ProfileShareSummary extends S.Class<ProfileShareSummary>("ProfileShareSummary")({ShareId: S.optional(S.String), SharedWith: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const ProfileShareSummaries = S.Array(ProfileShareSummary);
export class ChoiceAnswerSummary extends S.Class<ChoiceAnswerSummary>("ChoiceAnswerSummary")({ChoiceId: S.optional(S.String), Status: S.optional(S.String), Reason: S.optional(S.String)}) {}
export const ChoiceAnswerSummaries = S.Array(ChoiceAnswerSummary);
export class ReviewTemplateAnswerSummary extends S.Class<ReviewTemplateAnswerSummary>("ReviewTemplateAnswerSummary")({QuestionId: S.optional(S.String), PillarId: S.optional(S.String), QuestionTitle: S.optional(S.String), Choices: S.optional(Choices), SelectedChoices: S.optional(SelectedChoices), ChoiceAnswerSummaries: S.optional(ChoiceAnswerSummaries), IsApplicable: S.optional(S.Boolean), AnswerStatus: S.optional(S.String), Reason: S.optional(S.String), QuestionType: S.optional(S.String)}) {}
export const ReviewTemplateAnswerSummaries = S.Array(ReviewTemplateAnswerSummary);
export class ReviewTemplateSummary extends S.Class<ReviewTemplateSummary>("ReviewTemplateSummary")({Description: S.optional(S.String), Lenses: S.optional(ReviewTemplateLenses), Owner: S.optional(S.String), UpdatedAt: S.optional(S.Date), TemplateArn: S.optional(S.String), TemplateName: S.optional(S.String), UpdateStatus: S.optional(S.String)}) {}
export const ReviewTemplates = S.Array(ReviewTemplateSummary);
export class ShareInvitationSummary extends S.Class<ShareInvitationSummary>("ShareInvitationSummary")({ShareInvitationId: S.optional(S.String), SharedBy: S.optional(S.String), SharedWith: S.optional(S.String), PermissionType: S.optional(S.String), ShareResourceType: S.optional(S.String), WorkloadName: S.optional(S.String), WorkloadId: S.optional(S.String), LensName: S.optional(S.String), LensArn: S.optional(S.String), ProfileName: S.optional(S.String), ProfileArn: S.optional(S.String), TemplateName: S.optional(S.String), TemplateArn: S.optional(S.String)}) {}
export const ShareInvitationSummaries = S.Array(ShareInvitationSummary);
export class TemplateShareSummary extends S.Class<TemplateShareSummary>("TemplateShareSummary")({ShareId: S.optional(S.String), SharedWith: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const TemplateShareSummaries = S.Array(TemplateShareSummary);
export const WorkloadSummaries = S.Array(WorkloadSummary);
export class WorkloadShareSummary extends S.Class<WorkloadShareSummary>("WorkloadShareSummary")({ShareId: S.optional(S.String), SharedWith: S.optional(S.String), PermissionType: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const WorkloadShareSummaries = S.Array(WorkloadShareSummary);
export class JiraSelectedQuestionConfiguration extends S.Class<JiraSelectedQuestionConfiguration>("JiraSelectedQuestionConfiguration")({SelectedPillars: S.optional(SelectedPillars)}) {}
export class ShareInvitation extends S.Class<ShareInvitation>("ShareInvitation")({ShareInvitationId: S.optional(S.String), ShareResourceType: S.optional(S.String), WorkloadId: S.optional(S.String), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), ProfileArn: S.optional(S.String), TemplateArn: S.optional(S.String)}) {}
export class WorkloadShare extends S.Class<WorkloadShare>("WorkloadShare")({ShareId: S.optional(S.String), SharedBy: S.optional(S.String), SharedWith: S.optional(S.String), PermissionType: S.optional(S.String), Status: S.optional(S.String), WorkloadName: S.optional(S.String), WorkloadId: S.optional(S.String)}) {}
export class ProfileTemplateChoice extends S.Class<ProfileTemplateChoice>("ProfileTemplateChoice")({ChoiceId: S.optional(S.String), ChoiceTitle: S.optional(S.String), ChoiceDescription: S.optional(S.String)}) {}
export const ProfileTemplateQuestionChoices = S.Array(ProfileTemplateChoice);
export class CreateProfileOutput extends S.Class<CreateProfileOutput>("CreateProfileOutput")({ProfileArn: S.optional(S.String), ProfileVersion: S.optional(S.String)}) {}
export class CreateWorkloadOutput extends S.Class<CreateWorkloadOutput>("CreateWorkloadOutput")({WorkloadId: S.optional(S.String), WorkloadArn: S.optional(S.String)}) {}
export class GetLensOutput extends S.Class<GetLensOutput>("GetLensOutput")({Lens: S.optional(Lens)}) {}
export class GetLensReviewReportOutput extends S.Class<GetLensReviewReportOutput>("GetLensReviewReportOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensReviewReport: S.optional(LensReviewReport)}) {}
export class GetMilestoneOutput extends S.Class<GetMilestoneOutput>("GetMilestoneOutput")({WorkloadId: S.optional(S.String), Milestone: S.optional(Milestone)}) {}
export class GetReviewTemplateAnswerOutput extends S.Class<GetReviewTemplateAnswerOutput>("GetReviewTemplateAnswerOutput")({TemplateArn: S.optional(S.String), LensAlias: S.optional(S.String), Answer: S.optional(ReviewTemplateAnswer)}) {}
export class ListCheckDetailsOutput extends S.Class<ListCheckDetailsOutput>("ListCheckDetailsOutput")({CheckDetails: S.optional(CheckDetails), NextToken: S.optional(S.String)}) {}
export class ListLensesOutput extends S.Class<ListLensesOutput>("ListLensesOutput")({LensSummaries: S.optional(LensSummaries), NextToken: S.optional(S.String)}) {}
export class ListLensReviewsOutput extends S.Class<ListLensReviewsOutput>("ListLensReviewsOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensReviewSummaries: S.optional(LensReviewSummaries), NextToken: S.optional(S.String)}) {}
export class ListLensSharesOutput extends S.Class<ListLensSharesOutput>("ListLensSharesOutput")({LensShareSummaries: S.optional(LensShareSummaries), NextToken: S.optional(S.String)}) {}
export class ListMilestonesOutput extends S.Class<ListMilestonesOutput>("ListMilestonesOutput")({WorkloadId: S.optional(S.String), MilestoneSummaries: S.optional(MilestoneSummaries), NextToken: S.optional(S.String)}) {}
export class ListProfileNotificationsOutput extends S.Class<ListProfileNotificationsOutput>("ListProfileNotificationsOutput")({NotificationSummaries: S.optional(ProfileNotificationSummaries), NextToken: S.optional(S.String)}) {}
export class ListProfilesOutput extends S.Class<ListProfilesOutput>("ListProfilesOutput")({ProfileSummaries: S.optional(ProfileSummaries), NextToken: S.optional(S.String)}) {}
export class ListProfileSharesOutput extends S.Class<ListProfileSharesOutput>("ListProfileSharesOutput")({ProfileShareSummaries: S.optional(ProfileShareSummaries), NextToken: S.optional(S.String)}) {}
export class ListReviewTemplateAnswersOutput extends S.Class<ListReviewTemplateAnswersOutput>("ListReviewTemplateAnswersOutput")({TemplateArn: S.optional(S.String), LensAlias: S.optional(S.String), AnswerSummaries: S.optional(ReviewTemplateAnswerSummaries), NextToken: S.optional(S.String)}) {}
export class ListReviewTemplatesOutput extends S.Class<ListReviewTemplatesOutput>("ListReviewTemplatesOutput")({ReviewTemplates: S.optional(ReviewTemplates), NextToken: S.optional(S.String)}) {}
export class ListShareInvitationsOutput extends S.Class<ListShareInvitationsOutput>("ListShareInvitationsOutput")({ShareInvitationSummaries: S.optional(ShareInvitationSummaries), NextToken: S.optional(S.String)}) {}
export class ListTemplateSharesOutput extends S.Class<ListTemplateSharesOutput>("ListTemplateSharesOutput")({TemplateArn: S.optional(S.String), TemplateShareSummaries: S.optional(TemplateShareSummaries), NextToken: S.optional(S.String)}) {}
export class ListWorkloadsOutput extends S.Class<ListWorkloadsOutput>("ListWorkloadsOutput")({WorkloadSummaries: S.optional(WorkloadSummaries), NextToken: S.optional(S.String)}) {}
export class ListWorkloadSharesOutput extends S.Class<ListWorkloadSharesOutput>("ListWorkloadSharesOutput")({WorkloadId: S.optional(S.String), WorkloadShareSummaries: S.optional(WorkloadShareSummaries), NextToken: S.optional(S.String)}) {}
export class UpdateAnswerInput extends S.Class<UpdateAnswerInput>("UpdateAnswerInput")({WorkloadId: S.String, LensAlias: S.String, QuestionId: S.String, SelectedChoices: S.optional(SelectedChoices), ChoiceUpdates: S.optional(ChoiceUpdates), Notes: S.optional(S.String), IsApplicable: S.optional(S.Boolean), Reason: S.optional(S.String)}) {}
export class UpdateLensReviewInput extends S.Class<UpdateLensReviewInput>("UpdateLensReviewInput")({WorkloadId: S.String, LensAlias: S.String, LensNotes: S.optional(S.String), PillarNotes: S.optional(PillarNotes), JiraConfiguration: S.optional(JiraSelectedQuestionConfiguration)}) {}
export class UpdateShareInvitationOutput extends S.Class<UpdateShareInvitationOutput>("UpdateShareInvitationOutput")({ShareInvitation: S.optional(ShareInvitation)}) {}
export class UpdateWorkloadShareOutput extends S.Class<UpdateWorkloadShareOutput>("UpdateWorkloadShareOutput")({WorkloadId: S.optional(S.String), WorkloadShare: S.optional(WorkloadShare)}) {}
export class JiraConfiguration extends S.Class<JiraConfiguration>("JiraConfiguration")({JiraIssueUrl: S.optional(S.String), LastSyncedTime: S.optional(S.Date)}) {}
export class PillarReviewSummary extends S.Class<PillarReviewSummary>("PillarReviewSummary")({PillarId: S.optional(S.String), PillarName: S.optional(S.String), Notes: S.optional(S.String), RiskCounts: S.optional(RiskCounts), PrioritizedRiskCounts: S.optional(RiskCounts)}) {}
export const PillarReviewSummaries = S.Array(PillarReviewSummary);
export class ProfileTemplateQuestion extends S.Class<ProfileTemplateQuestion>("ProfileTemplateQuestion")({QuestionId: S.optional(S.String), QuestionTitle: S.optional(S.String), QuestionDescription: S.optional(S.String), QuestionChoices: S.optional(ProfileTemplateQuestionChoices), MinSelectedChoices: S.optional(S.Number), MaxSelectedChoices: S.optional(S.Number)}) {}
export const TemplateQuestions = S.Array(ProfileTemplateQuestion);
export const AccountSummary = S.Record({key: S.String, value: S.Number});
export class ChoiceImprovementPlan extends S.Class<ChoiceImprovementPlan>("ChoiceImprovementPlan")({ChoiceId: S.optional(S.String), DisplayText: S.optional(S.String), ImprovementPlanUrl: S.optional(S.String)}) {}
export const ChoiceImprovementPlans = S.Array(ChoiceImprovementPlan);
export class LensUpgradeSummary extends S.Class<LensUpgradeSummary>("LensUpgradeSummary")({WorkloadId: S.optional(S.String), WorkloadName: S.optional(S.String), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), CurrentLensVersion: S.optional(S.String), LatestLensVersion: S.optional(S.String), ResourceArn: S.optional(S.String), ResourceName: S.optional(S.String)}) {}
export class LensReview extends S.Class<LensReview>("LensReview")({LensAlias: S.optional(S.String), LensArn: S.optional(S.String), LensVersion: S.optional(S.String), LensName: S.optional(S.String), LensStatus: S.optional(S.String), PillarReviewSummaries: S.optional(PillarReviewSummaries), JiraConfiguration: S.optional(JiraSelectedQuestionConfiguration), UpdatedAt: S.optional(S.Date), Notes: S.optional(S.String), RiskCounts: S.optional(RiskCounts), NextToken: S.optional(S.String), Profiles: S.optional(WorkloadProfiles), PrioritizedRiskCounts: S.optional(RiskCounts)}) {}
export class ProfileTemplate extends S.Class<ProfileTemplate>("ProfileTemplate")({TemplateName: S.optional(S.String), TemplateQuestions: S.optional(TemplateQuestions), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export class AnswerSummary extends S.Class<AnswerSummary>("AnswerSummary")({QuestionId: S.optional(S.String), PillarId: S.optional(S.String), QuestionTitle: S.optional(S.String), Choices: S.optional(Choices), SelectedChoices: S.optional(SelectedChoices), ChoiceAnswerSummaries: S.optional(ChoiceAnswerSummaries), IsApplicable: S.optional(S.Boolean), Risk: S.optional(S.String), Reason: S.optional(S.String), QuestionType: S.optional(S.String), JiraConfiguration: S.optional(JiraConfiguration)}) {}
export const AnswerSummaries = S.Array(AnswerSummary);
export class CheckSummary extends S.Class<CheckSummary>("CheckSummary")({Id: S.optional(S.String), Name: S.optional(S.String), Provider: S.optional(S.String), Description: S.optional(S.String), UpdatedAt: S.optional(S.Date), LensArn: S.optional(S.String), PillarId: S.optional(S.String), QuestionId: S.optional(S.String), ChoiceId: S.optional(S.String), Status: S.optional(S.String), AccountSummary: S.optional(AccountSummary)}) {}
export const CheckSummaries = S.Array(CheckSummary);
export class ImprovementSummary extends S.Class<ImprovementSummary>("ImprovementSummary")({QuestionId: S.optional(S.String), PillarId: S.optional(S.String), QuestionTitle: S.optional(S.String), Risk: S.optional(S.String), ImprovementPlanUrl: S.optional(S.String), ImprovementPlans: S.optional(ChoiceImprovementPlans), JiraConfiguration: S.optional(JiraConfiguration)}) {}
export const ImprovementSummaries = S.Array(ImprovementSummary);
export class NotificationSummary extends S.Class<NotificationSummary>("NotificationSummary")({Type: S.optional(S.String), LensUpgradeSummary: S.optional(LensUpgradeSummary)}) {}
export const NotificationSummaries = S.Array(NotificationSummary);
export class QuestionDifference extends S.Class<QuestionDifference>("QuestionDifference")({QuestionId: S.optional(S.String), QuestionTitle: S.optional(S.String), DifferenceStatus: S.optional(S.String)}) {}
export const QuestionDifferences = S.Array(QuestionDifference);
export class GetLensReviewOutput extends S.Class<GetLensReviewOutput>("GetLensReviewOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensReview: S.optional(LensReview)}) {}
export class GetProfileTemplateOutput extends S.Class<GetProfileTemplateOutput>("GetProfileTemplateOutput")({ProfileTemplate: S.optional(ProfileTemplate)}) {}
export class GetReviewTemplateOutput extends S.Class<GetReviewTemplateOutput>("GetReviewTemplateOutput")({ReviewTemplate: S.optional(ReviewTemplate)}) {}
export class GetReviewTemplateLensReviewOutput extends S.Class<GetReviewTemplateLensReviewOutput>("GetReviewTemplateLensReviewOutput")({TemplateArn: S.optional(S.String), LensReview: S.optional(ReviewTemplateLensReview)}) {}
export class GetWorkloadOutput extends S.Class<GetWorkloadOutput>("GetWorkloadOutput")({Workload: S.optional(Workload)}) {}
export class ListAnswersOutput extends S.Class<ListAnswersOutput>("ListAnswersOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), AnswerSummaries: S.optional(AnswerSummaries), NextToken: S.optional(S.String)}) {}
export class ListCheckSummariesOutput extends S.Class<ListCheckSummariesOutput>("ListCheckSummariesOutput")({CheckSummaries: S.optional(CheckSummaries), NextToken: S.optional(S.String)}) {}
export class ListLensReviewImprovementsOutput extends S.Class<ListLensReviewImprovementsOutput>("ListLensReviewImprovementsOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), ImprovementSummaries: S.optional(ImprovementSummaries), NextToken: S.optional(S.String)}) {}
export class ListNotificationsOutput extends S.Class<ListNotificationsOutput>("ListNotificationsOutput")({NotificationSummaries: S.optional(NotificationSummaries), NextToken: S.optional(S.String)}) {}
export class Answer extends S.Class<Answer>("Answer")({QuestionId: S.optional(S.String), PillarId: S.optional(S.String), QuestionTitle: S.optional(S.String), QuestionDescription: S.optional(S.String), ImprovementPlanUrl: S.optional(S.String), HelpfulResourceUrl: S.optional(S.String), HelpfulResourceDisplayText: S.optional(S.String), Choices: S.optional(Choices), SelectedChoices: S.optional(SelectedChoices), ChoiceAnswers: S.optional(ChoiceAnswers), IsApplicable: S.optional(S.Boolean), Risk: S.optional(S.String), Notes: S.optional(S.String), Reason: S.optional(S.String), JiraConfiguration: S.optional(JiraConfiguration)}) {}
export class UpdateAnswerOutput extends S.Class<UpdateAnswerOutput>("UpdateAnswerOutput")({WorkloadId: S.optional(S.String), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), Answer: S.optional(Answer)}) {}
export class UpdateLensReviewOutput extends S.Class<UpdateLensReviewOutput>("UpdateLensReviewOutput")({WorkloadId: S.optional(S.String), LensReview: S.optional(LensReview)}) {}
export class PillarDifference extends S.Class<PillarDifference>("PillarDifference")({PillarId: S.optional(S.String), PillarName: S.optional(S.String), DifferenceStatus: S.optional(S.String), QuestionDifferences: S.optional(QuestionDifferences)}) {}
export const PillarDifferences = S.Array(PillarDifference);
export class VersionDifferences extends S.Class<VersionDifferences>("VersionDifferences")({PillarDifferences: S.optional(PillarDifferences)}) {}
export class GetAnswerOutput extends S.Class<GetAnswerOutput>("GetAnswerOutput")({WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number), LensAlias: S.optional(S.String), LensArn: S.optional(S.String), Answer: S.optional(Answer)}) {}
export class BestPractice extends S.Class<BestPractice>("BestPractice")({ChoiceId: S.optional(S.String), ChoiceTitle: S.optional(S.String)}) {}
export const BestPractices = S.Array(BestPractice);
export class GetLensVersionDifferenceOutput extends S.Class<GetLensVersionDifferenceOutput>("GetLensVersionDifferenceOutput")({LensAlias: S.optional(S.String), LensArn: S.optional(S.String), BaseLensVersion: S.optional(S.String), TargetLensVersion: S.optional(S.String), LatestLensVersion: S.optional(S.String), VersionDifferences: S.optional(VersionDifferences)}) {}
export class GetProfileOutput extends S.Class<GetProfileOutput>("GetProfileOutput")({Profile: S.optional(Profile)}) {}
export class QuestionMetric extends S.Class<QuestionMetric>("QuestionMetric")({QuestionId: S.optional(S.String), Risk: S.optional(S.String), BestPractices: S.optional(BestPractices)}) {}
export const QuestionMetrics = S.Array(QuestionMetric);
export class PillarMetric extends S.Class<PillarMetric>("PillarMetric")({PillarId: S.optional(S.String), RiskCounts: S.optional(RiskCounts), Questions: S.optional(QuestionMetrics)}) {}
export const PillarMetrics = S.Array(PillarMetric);
export class LensMetric extends S.Class<LensMetric>("LensMetric")({LensArn: S.optional(S.String), Pillars: S.optional(PillarMetrics), RiskCounts: S.optional(RiskCounts)}) {}
export const LensMetrics = S.Array(LensMetric);
export class ConsolidatedReportMetric extends S.Class<ConsolidatedReportMetric>("ConsolidatedReportMetric")({MetricType: S.optional(S.String), RiskCounts: S.optional(RiskCounts), WorkloadId: S.optional(S.String), WorkloadName: S.optional(S.String), WorkloadArn: S.optional(S.String), UpdatedAt: S.optional(S.Date), Lenses: S.optional(LensMetrics), LensesAppliedCount: S.optional(S.Number)}) {}
export const ConsolidatedReportMetrics = S.Array(ConsolidatedReportMetric);
export class GetConsolidatedReportOutput extends S.Class<GetConsolidatedReportOutput>("GetConsolidatedReportOutput")({Metrics: S.optional(ConsolidatedReportMetrics), NextToken: S.optional(S.String), Base64String: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Delete a review template.
 * 
 * 
 * Only the owner of a review template can delete it.
 * 
 * 
 * After the review template is deleted, Amazon Web Services accounts, users,
 * organizations, and organizational units (OUs) that you shared the review template with
 * will no longer be able to apply it to new workloads.
 */export const deleteReviewTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteReviewTemplate" }, DeleteReviewTemplateInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a review template share.
 * 
 * 
 * After the review template share is deleted, Amazon Web Services accounts, users,
 * organizations, and organizational units (OUs) that you shared the review template with
 * will no longer be able to apply it to new workloads.
 */export const deleteTemplateShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/templates/shares/{TemplateArn}/{ShareId}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteTemplateShare" }, DeleteTemplateShareInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an existing workload.
 */export const deleteWorkload = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteWorkload" }, DeleteWorkloadInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a workload share.
 */export const deleteWorkloadShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/shares/{ShareId}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteWorkloadShare" }, DeleteWorkloadShareInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociate a lens from a workload.
 * 
 * 
 * Up to 10 lenses can be disassociated from a workload in a single API operation.
 * 
 * 
 * 
 * 
 * The Amazon Web Services Well-Architected Framework lens (`wellarchitected`) cannot be
 * removed from a workload.
 */export const disassociateLenses = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/disassociateLenses", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DisassociateLenses" }, DisassociateLensesInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociate a profile from a workload.
 */export const disassociateProfiles = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/disassociateProfiles", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DisassociateProfiles" }, DisassociateProfilesInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to the specified resource.
 * 
 * 
 * 
 * 
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/tags/{WorkloadArn}", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes specified tags from a resource.
 * 
 * 
 * 
 * 
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 * 
 * 
 * 
 * 
 * To specify multiple tags, use separate **tagKeys** parameters, for example:
 * 
 * 
 * 
 * `DELETE /tags/WorkloadArn?tagKeys=key1&tagKeys=key2`
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/tags/{WorkloadArn}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update integration features.
 */export const updateIntegration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/updateIntegration", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateIntegration" }, UpdateIntegrationInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Upgrade a profile.
 */export const upgradeProfileVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade", method: "PUT", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpgradeProfileVersion" }, UpgradeProfileVersionInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Upgrade the lens review of a review template.
 */export const upgradeReviewTemplateLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade", method: "PUT", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpgradeReviewTemplateLensReview" }, UpgradeReviewTemplateLensReviewInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a lens to a workload.
 * 
 * 
 * Up to 10 lenses can be associated with a workload in a single API operation. A
 * maximum of 20 lenses can be associated with a workload.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By accessing and/or applying custom lenses created by another Amazon Web Services user or account,
 * you acknowledge that custom lenses created by other users and shared with you are
 * Third Party Content as defined in the Amazon Web Services Customer Agreement.
 */export const associateLenses = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/associateLenses", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.AssociateLenses" }, AssociateLensesInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a profile with a workload.
 */export const associateProfiles = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/associateProfiles", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.AssociateProfiles" }, AssociateProfilesInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a lens share.
 * 
 * 
 * The owner of a lens can share it with other Amazon Web Services accounts, users, an organization,
 * and organizational units (OUs) in the same Amazon Web Services Region.
 * Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.
 * 
 * 
 * 
 * Shared access to a lens is not removed until the lens invitation is deleted.
 * 
 * 
 * If you share a lens with an organization or OU, all accounts in the organization or OU
 * are granted access to the lens.
 * 
 * 
 * For more information, see Sharing a custom lens in the
 * *Well-Architected Tool User Guide*.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By sharing your custom lenses with other Amazon Web Services accounts,
 * you acknowledge that Amazon Web Services will make your custom lenses available to those
 * other accounts. Those other accounts may continue to access and use your
 * shared custom lenses even if you delete the custom lenses
 * from your own Amazon Web Services account or terminate
 * your Amazon Web Services account.
 */export const createLensShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/shares", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateLensShare" }, CreateLensShareInput, CreateLensShareOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new lens version.
 * 
 * 
 * A lens can have up to 100 versions.
 * 
 * 
 * Use this operation to publish a new lens version after you have imported a lens. The `LensAlias`
 * is used to identify the lens to be published.
 * The owner of a lens can share the lens with other
 * Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
 */export const createLensVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/versions", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateLensVersion" }, CreateLensVersionInput, CreateLensVersionOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a milestone for an existing workload.
 */export const createMilestone = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/milestones", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateMilestone" }, CreateMilestoneInput, CreateMilestoneOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a profile share.
 */export const createProfileShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}/shares", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateProfileShare" }, CreateProfileShareInput, CreateProfileShareOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a review template.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * Do not include or gather personal identifiable information (PII) of end users or
 * other identifiable individuals in or via your review templates. If your review
 * template or those shared with you and used in your account do include or collect PII
 * you are responsible for: ensuring that the included PII is processed in accordance
 * with applicable law, providing adequate privacy notices, and obtaining necessary
 * consents for processing such data.
 */export const createReviewTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateReviewTemplate" }, CreateReviewTemplateInput, CreateReviewTemplateOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a review template share.
 * 
 * 
 * The owner of a review template can share it with other Amazon Web Services accounts,
 * users, an organization, and organizational units (OUs) in the same Amazon Web Services Region.
 * 
 * 
 * Shared access to a review template is not removed until the review template share
 * invitation is deleted.
 * 
 * 
 * If you share a review template with an organization or OU, all accounts in the
 * organization or OU are granted access to the review template.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By sharing your review template with other Amazon Web Services accounts, you
 * acknowledge that Amazon Web Services will make your review template available to
 * those other accounts.
 */export const createTemplateShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/templates/shares/{TemplateArn}", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateTemplateShare" }, CreateTemplateShareInput, CreateTemplateShareOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a workload share.
 * 
 * 
 * The owner of a workload can share it with other Amazon Web Services accounts and users in the same
 * Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is
 * deleted.
 * 
 * 
 * If you share a workload with an organization or OU, all accounts in the organization or OU
 * are granted access to the workload.
 * 
 * 
 * For more information, see Sharing a workload in the
 * *Well-Architected Tool User Guide*.
 */export const createWorkloadShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/shares", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateWorkloadShare" }, CreateWorkloadShareInput, CreateWorkloadShareOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an existing lens.
 * 
 * 
 * Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users
 * that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 * 
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By sharing your custom lenses with other Amazon Web Services accounts,
 * you acknowledge that Amazon Web Services will make your custom lenses available to those
 * other accounts. Those other accounts may continue to access and use your
 * shared custom lenses even if you delete the custom lenses
 * from your own Amazon Web Services account or terminate
 * your Amazon Web Services account.
 */export const deleteLens = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteLens" }, DeleteLensInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a lens share.
 * 
 * 
 * After the lens share is deleted, Amazon Web Services accounts, users, organizations,
 * and organizational units (OUs)
 * that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By sharing your custom lenses with other Amazon Web Services accounts,
 * you acknowledge that Amazon Web Services will make your custom lenses available to those
 * other accounts. Those other accounts may continue to access and use your
 * shared custom lenses even if you delete the custom lenses
 * from your own Amazon Web Services account or terminate
 * your Amazon Web Services account.
 */export const deleteLensShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/shares/{ShareId}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteLensShare" }, DeleteLensShareInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a profile.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * By sharing your profile with other Amazon Web Services accounts,
 * you acknowledge that Amazon Web Services will make your profile available to those
 * other accounts. Those other accounts may continue to access and use your
 * shared profile even if you delete the profile
 * from your own Amazon Web Services account or terminate
 * your Amazon Web Services account.
 */export const deleteProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteProfile" }, DeleteProfileInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Export an existing lens.
 * 
 * 
 * Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content)
 * cannot be exported.
 * 
 * 
 * Lenses are defined in JSON. For more information, see JSON format specification
 * in the *Well-Architected Tool User Guide*.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * Do not include or gather personal identifiable information (PII) of end users or
 * other identifiable individuals in or via your custom lenses. If your custom
 * lens or those shared with you and used in your account do include or collect
 * PII you are responsible for: ensuring that the included PII is processed in accordance
 * with applicable law, providing adequate privacy notices, and obtaining necessary
 * consents for processing such data.
 */export const exportLens = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/export", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ExportLens" }, ExportLensInput, ExportLensOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Global settings for all workloads.
 */export const getGlobalSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/global-settings", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetGlobalSettings" }, S.Struct({}), GetGlobalSettingsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Import a new custom lens or update an existing custom lens.
 * 
 * 
 * To update an existing custom lens, specify its ARN as the `LensAlias`. If
 * no ARN is specified, a new custom lens is created.
 * 
 * 
 * The new or updated lens will have a status of `DRAFT`. The lens cannot be
 * applied to workloads or shared with other Amazon Web Services accounts until it's
 * published with CreateLensVersion.
 * 
 * 
 * Lenses are defined in JSON. For more information, see JSON format specification
 * in the *Well-Architected Tool User Guide*.
 * 
 * 
 * A custom lens cannot exceed 500 KB in size.
 * 
 * 
 * 
 * 
 * 
 * **Disclaimer**
 * 
 * 
 * 
 * Do not include or gather personal identifiable information (PII) of end users or
 * other identifiable individuals in or via your custom lenses. If your custom
 * lens or those shared with you and used in your account do include or collect
 * PII you are responsible for: ensuring that the included PII is processed in accordance
 * with applicable law, providing adequate privacy notices, and obtaining necessary
 * consents for processing such data.
 */export const importLens = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/importLens", method: "PUT", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ImportLens" }, ImportLensInput, ImportLensOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the tags for a resource.
 * 
 * 
 * 
 * 
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/tags/{WorkloadArn}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update whether the Amazon Web Services account is opted into organization sharing and discovery integration features.
 */export const updateGlobalSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/global-settings", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateGlobalSettings" }, UpdateGlobalSettingsInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a profile.
 */export const updateProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateProfile" }, UpdateProfileInput, UpdateProfileOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a review template.
 */export const updateReviewTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateReviewTemplate" }, UpdateReviewTemplateInput, UpdateReviewTemplateOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a review template answer.
 */export const updateReviewTemplateAnswer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateReviewTemplateAnswer" }, UpdateReviewTemplateAnswerInput, UpdateReviewTemplateAnswerOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a lens review associated with a review template.
 */export const updateReviewTemplateLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateReviewTemplateLensReview" }, UpdateReviewTemplateLensReviewInput, UpdateReviewTemplateLensReviewOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an existing workload.
 */export const updateWorkload = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateWorkload" }, UpdateWorkloadInput, UpdateWorkloadOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Upgrade lens review for a particular workload.
 */export const upgradeLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade", method: "PUT", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpgradeLensReview" }, UpgradeLensReviewInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a profile.
 */export const createProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateProfile" }, CreateProfileInput, CreateProfileOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new workload.
 * 
 * 
 * The owner of a workload can share the workload with other Amazon Web Services accounts, users,
 * an organization, and organizational units (OUs)
 * in the same Amazon Web Services Region. Only the owner of a workload can delete it.
 * 
 * 
 * For more information, see Defining a Workload in the
 * *Well-Architected Tool User Guide*.
 * 
 * 
 * 
 * 
 * Either `AwsRegions`, `NonAwsRegions`, or both must be specified when
 * creating a workload.
 * 
 * 
 * You also must specify `ReviewOwner`, even though the
 * parameter is listed as not being required in the following section.
 * 
 * 
 * 
 * 
 * 
 * When creating a workload using a review template, you must have the following IAM permissions:
 * 
 * 
 * 
 * - `wellarchitected:GetReviewTemplate`
 * 
 * 
 * 
 * 
 * - `wellarchitected:GetReviewTemplateAnswer`
 * 
 * 
 * 
 * 
 * - `wellarchitected:ListReviewTemplateAnswers`
 * 
 * 
 * 
 * 
 * - `wellarchitected:GetReviewTemplateLensReview`
 */export const createWorkload = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.CreateWorkload" }, CreateWorkloadInput, CreateWorkloadOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a profile share.
 */export const deleteProfileShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}/shares/{ShareId}", method: "DELETE", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.DeleteProfileShare" }, DeleteProfileShareInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get an existing lens.
 */export const getLens = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetLens" }, GetLensInput, GetLensOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get lens review report.
 */export const getLensReviewReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetLensReviewReport" }, GetLensReviewReportInput, GetLensReviewReportOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get a milestone for an existing workload.
 */export const getMilestone = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/milestones/{MilestoneNumber}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetMilestone" }, GetMilestoneInput, GetMilestoneOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get review template answer.
 */export const getReviewTemplateAnswer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetReviewTemplateAnswer" }, GetReviewTemplateAnswerInput, GetReviewTemplateAnswerOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of Trusted Advisor check details by account related to the workload.
 */export const listCheckDetails = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/checks", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListCheckDetails" }, ListCheckDetailsInput, ListCheckDetailsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the available lenses.
 */export const listLenses = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListLenses" }, ListLensesInput, ListLensesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List lens reviews for a particular workload.
 */export const listLensReviews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListLensReviews" }, ListLensReviewsInput, ListLensReviewsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the lens shares associated with the lens.
 */export const listLensShares = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/shares", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListLensShares" }, ListLensSharesInput, ListLensSharesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all milestones for an existing workload.
 */export const listMilestones = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/milestonesSummaries", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListMilestones" }, ListMilestonesInput, ListMilestonesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List profile notifications.
 */export const listProfileNotifications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profileNotifications", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListProfileNotifications" }, ListProfileNotificationsInput, ListProfileNotificationsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List profiles.
 */export const listProfiles = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profileSummaries", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListProfiles" }, ListProfilesInput, ListProfilesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List profile shares.
 */export const listProfileShares = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}/shares", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListProfileShares" }, ListProfileSharesInput, ListProfileSharesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the answers of a review template.
 */export const listReviewTemplateAnswers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListReviewTemplateAnswers" }, ListReviewTemplateAnswersInput, ListReviewTemplateAnswersOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List review templates.
 */export const listReviewTemplates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListReviewTemplates" }, ListReviewTemplatesInput, ListReviewTemplatesOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the share invitations.
 * 
 * 
 * 
 * `WorkloadNamePrefix`, `LensNamePrefix`,
 * `ProfileNamePrefix`, and `TemplateNamePrefix` are mutually
 * exclusive. Use the parameter that matches your `ShareResourceType`.
 */export const listShareInvitations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/shareInvitations", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListShareInvitations" }, ListShareInvitationsInput, ListShareInvitationsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List review template shares.
 */export const listTemplateShares = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/templates/shares/{TemplateArn}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListTemplateShares" }, ListTemplateSharesInput, ListTemplateSharesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Paginated list of workloads.
 */export const listWorkloads = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloadsSummaries", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListWorkloads" }, ListWorkloadsInput, ListWorkloadsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the workload shares associated with the workload.
 */export const listWorkloadShares = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/shares", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListWorkloadShares" }, ListWorkloadSharesInput, ListWorkloadSharesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a workload or custom lens share invitation.
 * 
 * 
 * 
 * 
 * This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.
 */export const updateShareInvitation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/shareInvitations/{ShareInvitationId}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateShareInvitation" }, UpdateShareInvitationInput, UpdateShareInvitationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a workload share.
 */export const updateWorkloadShare = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/shares/{ShareId}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateWorkloadShare" }, UpdateWorkloadShareInput, UpdateWorkloadShareOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get lens review.
 */export const getLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetLensReview" }, GetLensReviewInput, GetLensReviewOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get profile template.
 */export const getProfileTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profileTemplate", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetProfileTemplate" }, GetProfileTemplateInput, GetProfileTemplateOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get review template.
 */export const getReviewTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetReviewTemplate" }, GetReviewTemplateInput, GetReviewTemplateOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get a lens review associated with a review template.
 */export const getReviewTemplateLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetReviewTemplateLensReview" }, GetReviewTemplateLensReviewInput, GetReviewTemplateLensReviewOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get an existing workload.
 */export const getWorkload = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetWorkload" }, GetWorkloadInput, GetWorkloadOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of answers for a particular workload and lens.
 */export const listAnswers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListAnswers" }, ListAnswersInput, ListAnswersOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of Trusted Advisor checks summarized for all accounts related to the workload.
 */export const listCheckSummaries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/checkSummaries", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListCheckSummaries" }, ListCheckSummariesInput, ListCheckSummariesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the improvements of a particular lens review.
 */export const listLensReviewImprovements = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListLensReviewImprovements" }, ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List lens notifications.
 */export const listNotifications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/notifications", method: "POST", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.ListNotifications" }, ListNotificationsInput, ListNotificationsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the answer to a specific question in a workload review.
 */export const updateAnswer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateAnswer" }, UpdateAnswerInput, UpdateAnswerOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update lens review for a particular workload.
 */export const updateLensReview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}", method: "PATCH", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.UpdateLensReview" }, UpdateLensReviewInput, UpdateLensReviewOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the answer to a specific question in a workload review.
 */export const getAnswer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetAnswer" }, GetAnswerInput, GetAnswerOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get lens version differences.
 */export const getLensVersionDifference = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/lenses/{LensAlias}/versionDifference", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetLensVersionDifference" }, GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get profile information.
 */export const getProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/profiles/{ProfileArn}", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetProfile" }, GetProfileInput, GetProfileOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get a consolidated report of your workloads.
 * 
 * 
 * You can optionally choose to include workloads that have been shared with you.
 */export const getConsolidatedReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-03-31", uri: "/consolidatedReport", method: "GET", sdkId: "WellArchitected", sigV4ServiceName: "wellarchitected", name: "WellArchitectedApiServiceLambda.GetConsolidatedReport" }, GetConsolidatedReportInput, GetConsolidatedReportOutput, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
