import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class AcknowledgeJobInput extends S.Class<AcknowledgeJobInput>("AcknowledgeJobInput")({jobId: S.String, nonce: S.String}) {}
export class AcknowledgeThirdPartyJobInput extends S.Class<AcknowledgeThirdPartyJobInput>("AcknowledgeThirdPartyJobInput")({jobId: S.String, nonce: S.String, clientToken: S.String}) {}
export class DeleteCustomActionTypeInput extends S.Class<DeleteCustomActionTypeInput>("DeleteCustomActionTypeInput")({category: S.String, provider: S.String, version: S.String}) {}
export class DeletePipelineInput extends S.Class<DeletePipelineInput>("DeletePipelineInput")({name: S.String}) {}
export class DeleteWebhookInput extends S.Class<DeleteWebhookInput>("DeleteWebhookInput")({name: S.String}) {}
export class DeleteWebhookOutput extends S.Class<DeleteWebhookOutput>("DeleteWebhookOutput")({}) {}
export class DeregisterWebhookWithThirdPartyInput extends S.Class<DeregisterWebhookWithThirdPartyInput>("DeregisterWebhookWithThirdPartyInput")({webhookName: S.optional(S.String)}) {}
export class DeregisterWebhookWithThirdPartyOutput extends S.Class<DeregisterWebhookWithThirdPartyOutput>("DeregisterWebhookWithThirdPartyOutput")({}) {}
export class DisableStageTransitionInput extends S.Class<DisableStageTransitionInput>("DisableStageTransitionInput")({pipelineName: S.String, stageName: S.String, transitionType: S.String, reason: S.String}) {}
export class EnableStageTransitionInput extends S.Class<EnableStageTransitionInput>("EnableStageTransitionInput")({pipelineName: S.String, stageName: S.String, transitionType: S.String}) {}
export class GetActionTypeInput extends S.Class<GetActionTypeInput>("GetActionTypeInput")({category: S.String, owner: S.String, provider: S.String, version: S.String}) {}
export class GetJobDetailsInput extends S.Class<GetJobDetailsInput>("GetJobDetailsInput")({jobId: S.String}) {}
export class GetPipelineInput extends S.Class<GetPipelineInput>("GetPipelineInput")({name: S.String, version: S.optional(S.Number)}) {}
export class GetPipelineExecutionInput extends S.Class<GetPipelineExecutionInput>("GetPipelineExecutionInput")({pipelineName: S.String, pipelineExecutionId: S.String}) {}
export class GetPipelineStateInput extends S.Class<GetPipelineStateInput>("GetPipelineStateInput")({name: S.String}) {}
export class GetThirdPartyJobDetailsInput extends S.Class<GetThirdPartyJobDetailsInput>("GetThirdPartyJobDetailsInput")({jobId: S.String, clientToken: S.String}) {}
export class ListActionTypesInput extends S.Class<ListActionTypesInput>("ListActionTypesInput")({actionOwnerFilter: S.optional(S.String), nextToken: S.optional(S.String), regionFilter: S.optional(S.String)}) {}
export class ListPipelinesInput extends S.Class<ListPipelinesInput>("ListPipelinesInput")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRuleTypesInput extends S.Class<ListRuleTypesInput>("ListRuleTypesInput")({ruleOwnerFilter: S.optional(S.String), regionFilter: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListWebhooksInput extends S.Class<ListWebhooksInput>("ListWebhooksInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class OverrideStageConditionInput extends S.Class<OverrideStageConditionInput>("OverrideStageConditionInput")({pipelineName: S.String, stageName: S.String, pipelineExecutionId: S.String, conditionType: S.String}) {}
export class ActionTypeId extends S.Class<ActionTypeId>("ActionTypeId")({category: S.String, owner: S.String, provider: S.String, version: S.String}) {}
export class PollForThirdPartyJobsInput extends S.Class<PollForThirdPartyJobsInput>("PollForThirdPartyJobsInput")({actionTypeId: ActionTypeId, maxBatchSize: S.optional(S.Number)}) {}
export class FailureDetails extends S.Class<FailureDetails>("FailureDetails")({type: S.String, message: S.String, externalExecutionId: S.optional(S.String)}) {}
export class PutThirdPartyJobFailureResultInput extends S.Class<PutThirdPartyJobFailureResultInput>("PutThirdPartyJobFailureResultInput")({jobId: S.String, clientToken: S.String, failureDetails: FailureDetails}) {}
export class CurrentRevision extends S.Class<CurrentRevision>("CurrentRevision")({revision: S.String, changeIdentifier: S.String, created: S.optional(S.Date), revisionSummary: S.optional(S.String)}) {}
export class ExecutionDetails extends S.Class<ExecutionDetails>("ExecutionDetails")({summary: S.optional(S.String), externalExecutionId: S.optional(S.String), percentComplete: S.optional(S.Number)}) {}
export class PutThirdPartyJobSuccessResultInput extends S.Class<PutThirdPartyJobSuccessResultInput>("PutThirdPartyJobSuccessResultInput")({jobId: S.String, clientToken: S.String, currentRevision: S.optional(CurrentRevision), continuationToken: S.optional(S.String), executionDetails: S.optional(ExecutionDetails)}) {}
export class RegisterWebhookWithThirdPartyInput extends S.Class<RegisterWebhookWithThirdPartyInput>("RegisterWebhookWithThirdPartyInput")({webhookName: S.optional(S.String)}) {}
export class RegisterWebhookWithThirdPartyOutput extends S.Class<RegisterWebhookWithThirdPartyOutput>("RegisterWebhookWithThirdPartyOutput")({}) {}
export class RetryStageExecutionInput extends S.Class<RetryStageExecutionInput>("RetryStageExecutionInput")({pipelineName: S.String, stageName: S.String, pipelineExecutionId: S.String, retryMode: S.String}) {}
export class RollbackStageInput extends S.Class<RollbackStageInput>("RollbackStageInput")({pipelineName: S.String, stageName: S.String, targetPipelineExecutionId: S.String}) {}
export class StopPipelineExecutionInput extends S.Class<StopPipelineExecutionInput>("StopPipelineExecutionInput")({pipelineName: S.String, pipelineExecutionId: S.String, abandon: S.optional(S.Boolean), reason: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class EncryptionKey extends S.Class<EncryptionKey>("EncryptionKey")({id: S.String, type: S.String}) {}
export class ArtifactStore extends S.Class<ArtifactStore>("ArtifactStore")({type: S.String, location: S.String, encryptionKey: S.optional(EncryptionKey)}) {}
export const ArtifactStoreMap = S.Record({key: S.String, value: ArtifactStore});
export class BlockerDeclaration extends S.Class<BlockerDeclaration>("BlockerDeclaration")({name: S.String, type: S.String}) {}
export const StageBlockerDeclarationList = S.Array(BlockerDeclaration);
export const ActionConfigurationMap = S.Record({key: S.String, value: S.String});
export const CommandList = S.Array(S.String);
export const FilePathList = S.Array(S.String);
export class OutputArtifact extends S.Class<OutputArtifact>("OutputArtifact")({name: S.String, files: S.optional(FilePathList)}) {}
export const OutputArtifactList = S.Array(OutputArtifact);
export class InputArtifact extends S.Class<InputArtifact>("InputArtifact")({name: S.String}) {}
export const InputArtifactList = S.Array(InputArtifact);
export const OutputVariableList = S.Array(S.String);
export class EnvironmentVariable extends S.Class<EnvironmentVariable>("EnvironmentVariable")({name: S.String, value: S.String, type: S.optional(S.String)}) {}
export const EnvironmentVariableList = S.Array(EnvironmentVariable);
export class ActionDeclaration extends S.Class<ActionDeclaration>("ActionDeclaration")({name: S.String, actionTypeId: ActionTypeId, runOrder: S.optional(S.Number), configuration: S.optional(ActionConfigurationMap), commands: S.optional(CommandList), outputArtifacts: S.optional(OutputArtifactList), inputArtifacts: S.optional(InputArtifactList), outputVariables: S.optional(OutputVariableList), roleArn: S.optional(S.String), region: S.optional(S.String), namespace: S.optional(S.String), timeoutInMinutes: S.optional(S.Number), environmentVariables: S.optional(EnvironmentVariableList)}) {}
export const StageActionDeclarationList = S.Array(ActionDeclaration);
export class RetryConfiguration extends S.Class<RetryConfiguration>("RetryConfiguration")({retryMode: S.optional(S.String)}) {}
export class RuleTypeId extends S.Class<RuleTypeId>("RuleTypeId")({category: S.String, owner: S.optional(S.String), provider: S.String, version: S.optional(S.String)}) {}
export const RuleConfigurationMap = S.Record({key: S.String, value: S.String});
export class RuleDeclaration extends S.Class<RuleDeclaration>("RuleDeclaration")({name: S.String, ruleTypeId: RuleTypeId, configuration: S.optional(RuleConfigurationMap), commands: S.optional(CommandList), inputArtifacts: S.optional(InputArtifactList), roleArn: S.optional(S.String), region: S.optional(S.String), timeoutInMinutes: S.optional(S.Number)}) {}
export const RuleDeclarationList = S.Array(RuleDeclaration);
export class Condition extends S.Class<Condition>("Condition")({result: S.optional(S.String), rules: S.optional(RuleDeclarationList)}) {}
export const ConditionList = S.Array(Condition);
export class FailureConditions extends S.Class<FailureConditions>("FailureConditions")({result: S.optional(S.String), retryConfiguration: S.optional(RetryConfiguration), conditions: S.optional(ConditionList)}) {}
export class SuccessConditions extends S.Class<SuccessConditions>("SuccessConditions")({conditions: ConditionList}) {}
export class BeforeEntryConditions extends S.Class<BeforeEntryConditions>("BeforeEntryConditions")({conditions: ConditionList}) {}
export class StageDeclaration extends S.Class<StageDeclaration>("StageDeclaration")({name: S.String, blockers: S.optional(StageBlockerDeclarationList), actions: StageActionDeclarationList, onFailure: S.optional(FailureConditions), onSuccess: S.optional(SuccessConditions), beforeEntry: S.optional(BeforeEntryConditions)}) {}
export const PipelineStageDeclarationList = S.Array(StageDeclaration);
export class PipelineVariableDeclaration extends S.Class<PipelineVariableDeclaration>("PipelineVariableDeclaration")({name: S.String, defaultValue: S.optional(S.String), description: S.optional(S.String)}) {}
export const PipelineVariableDeclarationList = S.Array(PipelineVariableDeclaration);
export const GitTagPatternList = S.Array(S.String);
export class GitTagFilterCriteria extends S.Class<GitTagFilterCriteria>("GitTagFilterCriteria")({includes: S.optional(GitTagPatternList), excludes: S.optional(GitTagPatternList)}) {}
export const GitBranchPatternList = S.Array(S.String);
export class GitBranchFilterCriteria extends S.Class<GitBranchFilterCriteria>("GitBranchFilterCriteria")({includes: S.optional(GitBranchPatternList), excludes: S.optional(GitBranchPatternList)}) {}
export const GitFilePathPatternList = S.Array(S.String);
export class GitFilePathFilterCriteria extends S.Class<GitFilePathFilterCriteria>("GitFilePathFilterCriteria")({includes: S.optional(GitFilePathPatternList), excludes: S.optional(GitFilePathPatternList)}) {}
export class GitPushFilter extends S.Class<GitPushFilter>("GitPushFilter")({tags: S.optional(GitTagFilterCriteria), branches: S.optional(GitBranchFilterCriteria), filePaths: S.optional(GitFilePathFilterCriteria)}) {}
export const GitPushFilterList = S.Array(GitPushFilter);
export const GitPullRequestEventTypeList = S.Array(S.String);
export class GitPullRequestFilter extends S.Class<GitPullRequestFilter>("GitPullRequestFilter")({events: S.optional(GitPullRequestEventTypeList), branches: S.optional(GitBranchFilterCriteria), filePaths: S.optional(GitFilePathFilterCriteria)}) {}
export const GitPullRequestFilterList = S.Array(GitPullRequestFilter);
export class GitConfiguration extends S.Class<GitConfiguration>("GitConfiguration")({sourceActionName: S.String, push: S.optional(GitPushFilterList), pullRequest: S.optional(GitPullRequestFilterList)}) {}
export class PipelineTriggerDeclaration extends S.Class<PipelineTriggerDeclaration>("PipelineTriggerDeclaration")({providerType: S.String, gitConfiguration: GitConfiguration}) {}
export const PipelineTriggerDeclarationList = S.Array(PipelineTriggerDeclaration);
export class PipelineDeclaration extends S.Class<PipelineDeclaration>("PipelineDeclaration")({name: S.String, roleArn: S.String, artifactStore: S.optional(ArtifactStore), artifactStores: S.optional(ArtifactStoreMap), stages: PipelineStageDeclarationList, version: S.optional(S.Number), executionMode: S.optional(S.String), pipelineType: S.optional(S.String), variables: S.optional(PipelineVariableDeclarationList), triggers: S.optional(PipelineTriggerDeclarationList)}) {}
export class UpdatePipelineInput extends S.Class<UpdatePipelineInput>("UpdatePipelineInput")({pipeline: PipelineDeclaration}) {}
export const TargetFilterValueList = S.Array(S.String);
export class ActionTypeSettings extends S.Class<ActionTypeSettings>("ActionTypeSettings")({thirdPartyConfigurationUrl: S.optional(S.String), entityUrlTemplate: S.optional(S.String), executionUrlTemplate: S.optional(S.String), revisionUrlTemplate: S.optional(S.String)}) {}
export class ActionConfigurationProperty extends S.Class<ActionConfigurationProperty>("ActionConfigurationProperty")({name: S.String, required: S.Boolean, key: S.Boolean, secret: S.Boolean, queryable: S.optional(S.Boolean), description: S.optional(S.String), type: S.optional(S.String)}) {}
export const ActionConfigurationPropertyList = S.Array(ActionConfigurationProperty);
export class ArtifactDetails extends S.Class<ArtifactDetails>("ArtifactDetails")({minimumCount: S.Number, maximumCount: S.Number}) {}
export class TargetFilter extends S.Class<TargetFilter>("TargetFilter")({name: S.optional(S.String), values: S.optional(TargetFilterValueList)}) {}
export const TargetFilterList = S.Array(TargetFilter);
export class LatestInPipelineExecutionFilter extends S.Class<LatestInPipelineExecutionFilter>("LatestInPipelineExecutionFilter")({pipelineExecutionId: S.String, startTimeRange: S.String}) {}
export class RuleExecutionFilter extends S.Class<RuleExecutionFilter>("RuleExecutionFilter")({pipelineExecutionId: S.optional(S.String), latestInPipelineExecution: S.optional(LatestInPipelineExecutionFilter)}) {}
export const QueryParamMap = S.Record({key: S.String, value: S.String});
export class ActionRevision extends S.Class<ActionRevision>("ActionRevision")({revisionId: S.String, revisionChangeId: S.String, created: S.Date}) {}
export class ApprovalResult extends S.Class<ApprovalResult>("ApprovalResult")({summary: S.String, status: S.String}) {}
export const OutputVariablesMap = S.Record({key: S.String, value: S.String});
export class PipelineVariable extends S.Class<PipelineVariable>("PipelineVariable")({name: S.String, value: S.String}) {}
export const PipelineVariableList = S.Array(PipelineVariable);
export class SourceRevisionOverride extends S.Class<SourceRevisionOverride>("SourceRevisionOverride")({actionName: S.String, revisionType: S.String, revisionValue: S.String}) {}
export const SourceRevisionOverrideList = S.Array(SourceRevisionOverride);
export const AllowedAccounts = S.Array(S.String);
export class AcknowledgeJobOutput extends S.Class<AcknowledgeJobOutput>("AcknowledgeJobOutput")({status: S.optional(S.String)}) {}
export class AcknowledgeThirdPartyJobOutput extends S.Class<AcknowledgeThirdPartyJobOutput>("AcknowledgeThirdPartyJobOutput")({status: S.optional(S.String)}) {}
export class CreateCustomActionTypeInput extends S.Class<CreateCustomActionTypeInput>("CreateCustomActionTypeInput")({category: S.String, provider: S.String, version: S.String, settings: S.optional(ActionTypeSettings), configurationProperties: S.optional(ActionConfigurationPropertyList), inputArtifactDetails: ArtifactDetails, outputArtifactDetails: ArtifactDetails, tags: S.optional(TagList)}) {}
export class LambdaExecutorConfiguration extends S.Class<LambdaExecutorConfiguration>("LambdaExecutorConfiguration")({lambdaFunctionArn: S.String}) {}
export const PollingAccountList = S.Array(S.String);
export const PollingServicePrincipalList = S.Array(S.String);
export class JobWorkerExecutorConfiguration extends S.Class<JobWorkerExecutorConfiguration>("JobWorkerExecutorConfiguration")({pollingAccounts: S.optional(PollingAccountList), pollingServicePrincipals: S.optional(PollingServicePrincipalList)}) {}
export class ExecutorConfiguration extends S.Class<ExecutorConfiguration>("ExecutorConfiguration")({lambdaExecutorConfiguration: S.optional(LambdaExecutorConfiguration), jobWorkerExecutorConfiguration: S.optional(JobWorkerExecutorConfiguration)}) {}
export class ActionTypeExecutor extends S.Class<ActionTypeExecutor>("ActionTypeExecutor")({configuration: ExecutorConfiguration, type: S.String, policyStatementsTemplate: S.optional(S.String), jobTimeout: S.optional(S.Number)}) {}
export class ActionTypeIdentifier extends S.Class<ActionTypeIdentifier>("ActionTypeIdentifier")({category: S.String, owner: S.String, provider: S.String, version: S.String}) {}
export class ActionTypeArtifactDetails extends S.Class<ActionTypeArtifactDetails>("ActionTypeArtifactDetails")({minimumCount: S.Number, maximumCount: S.Number}) {}
export class ActionTypePermissions extends S.Class<ActionTypePermissions>("ActionTypePermissions")({allowedAccounts: AllowedAccounts}) {}
export class ActionTypeProperty extends S.Class<ActionTypeProperty>("ActionTypeProperty")({name: S.String, optional: S.Boolean, key: S.Boolean, noEcho: S.Boolean, queryable: S.optional(S.Boolean), description: S.optional(S.String)}) {}
export const ActionTypeProperties = S.Array(ActionTypeProperty);
export class ActionTypeUrls extends S.Class<ActionTypeUrls>("ActionTypeUrls")({configurationUrl: S.optional(S.String), entityUrlTemplate: S.optional(S.String), executionUrlTemplate: S.optional(S.String), revisionUrlTemplate: S.optional(S.String)}) {}
export class ActionTypeDeclaration extends S.Class<ActionTypeDeclaration>("ActionTypeDeclaration")({description: S.optional(S.String), executor: ActionTypeExecutor, id: ActionTypeIdentifier, inputArtifactDetails: ActionTypeArtifactDetails, outputArtifactDetails: ActionTypeArtifactDetails, permissions: S.optional(ActionTypePermissions), properties: S.optional(ActionTypeProperties), urls: S.optional(ActionTypeUrls)}) {}
export class GetActionTypeOutput extends S.Class<GetActionTypeOutput>("GetActionTypeOutput")({actionType: S.optional(ActionTypeDeclaration)}) {}
export class ListDeployActionExecutionTargetsInput extends S.Class<ListDeployActionExecutionTargetsInput>("ListDeployActionExecutionTargetsInput")({pipelineName: S.optional(S.String), actionExecutionId: S.String, filters: S.optional(TargetFilterList), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListRuleExecutionsInput extends S.Class<ListRuleExecutionsInput>("ListRuleExecutionsInput")({pipelineName: S.String, filter: S.optional(RuleExecutionFilter), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: S.optional(TagList), nextToken: S.optional(S.String)}) {}
export class PollForJobsInput extends S.Class<PollForJobsInput>("PollForJobsInput")({actionTypeId: ActionTypeId, maxBatchSize: S.optional(S.Number), queryParam: S.optional(QueryParamMap)}) {}
export class PutActionRevisionInput extends S.Class<PutActionRevisionInput>("PutActionRevisionInput")({pipelineName: S.String, stageName: S.String, actionName: S.String, actionRevision: ActionRevision}) {}
export class PutApprovalResultInput extends S.Class<PutApprovalResultInput>("PutApprovalResultInput")({pipelineName: S.String, stageName: S.String, actionName: S.String, result: ApprovalResult, token: S.String}) {}
export class PutJobFailureResultInput extends S.Class<PutJobFailureResultInput>("PutJobFailureResultInput")({jobId: S.String, failureDetails: FailureDetails}) {}
export class PutJobSuccessResultInput extends S.Class<PutJobSuccessResultInput>("PutJobSuccessResultInput")({jobId: S.String, currentRevision: S.optional(CurrentRevision), continuationToken: S.optional(S.String), executionDetails: S.optional(ExecutionDetails), outputVariables: S.optional(OutputVariablesMap)}) {}
export class RetryStageExecutionOutput extends S.Class<RetryStageExecutionOutput>("RetryStageExecutionOutput")({pipelineExecutionId: S.optional(S.String)}) {}
export class RollbackStageOutput extends S.Class<RollbackStageOutput>("RollbackStageOutput")({pipelineExecutionId: S.String}) {}
export class StartPipelineExecutionInput extends S.Class<StartPipelineExecutionInput>("StartPipelineExecutionInput")({name: S.String, variables: S.optional(PipelineVariableList), clientRequestToken: S.optional(S.String), sourceRevisions: S.optional(SourceRevisionOverrideList)}) {}
export class StopPipelineExecutionOutput extends S.Class<StopPipelineExecutionOutput>("StopPipelineExecutionOutput")({pipelineExecutionId: S.optional(S.String)}) {}
export class UpdatePipelineOutput extends S.Class<UpdatePipelineOutput>("UpdatePipelineOutput")({pipeline: S.optional(PipelineDeclaration)}) {}
export class StageExecution extends S.Class<StageExecution>("StageExecution")({pipelineExecutionId: S.String, status: S.String, type: S.optional(S.String)}) {}
export const StageExecutionList = S.Array(StageExecution);
export class SucceededInStageFilter extends S.Class<SucceededInStageFilter>("SucceededInStageFilter")({stageName: S.optional(S.String)}) {}
export class WebhookFilterRule extends S.Class<WebhookFilterRule>("WebhookFilterRule")({jsonPath: S.String, matchEquals: S.optional(S.String)}) {}
export const WebhookFilters = S.Array(WebhookFilterRule);
export class WebhookAuthConfiguration extends S.Class<WebhookAuthConfiguration>("WebhookAuthConfiguration")({AllowedIPRange: S.optional(S.String), SecretToken: S.optional(S.String)}) {}
export class PipelineMetadata extends S.Class<PipelineMetadata>("PipelineMetadata")({pipelineArn: S.optional(S.String), created: S.optional(S.Date), updated: S.optional(S.Date), pollingDisabledAt: S.optional(S.Date)}) {}
export class ActionExecutionFilter extends S.Class<ActionExecutionFilter>("ActionExecutionFilter")({pipelineExecutionId: S.optional(S.String), latestInPipelineExecution: S.optional(LatestInPipelineExecutionFilter)}) {}
export class ActionType extends S.Class<ActionType>("ActionType")({id: ActionTypeId, settings: S.optional(ActionTypeSettings), actionConfigurationProperties: S.optional(ActionConfigurationPropertyList), inputArtifactDetails: ArtifactDetails, outputArtifactDetails: ArtifactDetails}) {}
export const ActionTypeList = S.Array(ActionType);
export class PipelineExecutionFilter extends S.Class<PipelineExecutionFilter>("PipelineExecutionFilter")({succeededInStage: S.optional(SucceededInStageFilter)}) {}
export class PipelineSummary extends S.Class<PipelineSummary>("PipelineSummary")({name: S.optional(S.String), version: S.optional(S.Number), pipelineType: S.optional(S.String), executionMode: S.optional(S.String), created: S.optional(S.Date), updated: S.optional(S.Date)}) {}
export const PipelineList = S.Array(PipelineSummary);
export class WebhookDefinition extends S.Class<WebhookDefinition>("WebhookDefinition")({name: S.String, targetPipeline: S.String, targetAction: S.String, filters: WebhookFilters, authentication: S.String, authenticationConfiguration: WebhookAuthConfiguration}) {}
export class ListWebhookItem extends S.Class<ListWebhookItem>("ListWebhookItem")({definition: WebhookDefinition, url: S.String, errorMessage: S.optional(S.String), errorCode: S.optional(S.String), lastTriggered: S.optional(S.Date), arn: S.optional(S.String), tags: S.optional(TagList)}) {}
export const WebhookList = S.Array(ListWebhookItem);
export class ThirdPartyJob extends S.Class<ThirdPartyJob>("ThirdPartyJob")({clientId: S.optional(S.String), jobId: S.optional(S.String)}) {}
export const ThirdPartyJobList = S.Array(ThirdPartyJob);
export class CreateCustomActionTypeOutput extends S.Class<CreateCustomActionTypeOutput>("CreateCustomActionTypeOutput")({actionType: ActionType, tags: S.optional(TagList)}) {}
export class GetPipelineOutput extends S.Class<GetPipelineOutput>("GetPipelineOutput")({pipeline: S.optional(PipelineDeclaration), metadata: S.optional(PipelineMetadata)}) {}
export class ListActionExecutionsInput extends S.Class<ListActionExecutionsInput>("ListActionExecutionsInput")({pipelineName: S.String, filter: S.optional(ActionExecutionFilter), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListActionTypesOutput extends S.Class<ListActionTypesOutput>("ListActionTypesOutput")({actionTypes: ActionTypeList, nextToken: S.optional(S.String)}) {}
export class ListPipelineExecutionsInput extends S.Class<ListPipelineExecutionsInput>("ListPipelineExecutionsInput")({pipelineName: S.String, maxResults: S.optional(S.Number), filter: S.optional(PipelineExecutionFilter), nextToken: S.optional(S.String)}) {}
export class ListPipelinesOutput extends S.Class<ListPipelinesOutput>("ListPipelinesOutput")({pipelines: S.optional(PipelineList), nextToken: S.optional(S.String)}) {}
export class ListWebhooksOutput extends S.Class<ListWebhooksOutput>("ListWebhooksOutput")({webhooks: S.optional(WebhookList), NextToken: S.optional(S.String)}) {}
export class PollForThirdPartyJobsOutput extends S.Class<PollForThirdPartyJobsOutput>("PollForThirdPartyJobsOutput")({jobs: S.optional(ThirdPartyJobList)}) {}
export class PutActionRevisionOutput extends S.Class<PutActionRevisionOutput>("PutActionRevisionOutput")({newRevision: S.optional(S.Boolean), pipelineExecutionId: S.optional(S.String)}) {}
export class PutApprovalResultOutput extends S.Class<PutApprovalResultOutput>("PutApprovalResultOutput")({approvedAt: S.optional(S.Date)}) {}
export class PutWebhookInput extends S.Class<PutWebhookInput>("PutWebhookInput")({webhook: WebhookDefinition, tags: S.optional(TagList)}) {}
export class StartPipelineExecutionOutput extends S.Class<StartPipelineExecutionOutput>("StartPipelineExecutionOutput")({pipelineExecutionId: S.optional(S.String)}) {}
export class ArtifactRevision extends S.Class<ArtifactRevision>("ArtifactRevision")({name: S.optional(S.String), revisionId: S.optional(S.String), revisionChangeIdentifier: S.optional(S.String), revisionSummary: S.optional(S.String), created: S.optional(S.Date), revisionUrl: S.optional(S.String)}) {}
export const ArtifactRevisionList = S.Array(ArtifactRevision);
export class ResolvedPipelineVariable extends S.Class<ResolvedPipelineVariable>("ResolvedPipelineVariable")({name: S.optional(S.String), resolvedValue: S.optional(S.String)}) {}
export const ResolvedPipelineVariableList = S.Array(ResolvedPipelineVariable);
export class ExecutionTrigger extends S.Class<ExecutionTrigger>("ExecutionTrigger")({triggerType: S.optional(S.String), triggerDetail: S.optional(S.String)}) {}
export class PipelineRollbackMetadata extends S.Class<PipelineRollbackMetadata>("PipelineRollbackMetadata")({rollbackTargetPipelineExecutionId: S.optional(S.String)}) {}
export class TransitionState extends S.Class<TransitionState>("TransitionState")({enabled: S.optional(S.Boolean), lastChangedBy: S.optional(S.String), lastChangedAt: S.optional(S.Date), disabledReason: S.optional(S.String)}) {}
export class RetryStageMetadata extends S.Class<RetryStageMetadata>("RetryStageMetadata")({autoStageRetryAttempt: S.optional(S.Number), manualStageRetryAttempt: S.optional(S.Number), latestRetryTrigger: S.optional(S.String)}) {}
export class ActionConfiguration extends S.Class<ActionConfiguration>("ActionConfiguration")({configuration: S.optional(ActionConfigurationMap)}) {}
export class StageContext extends S.Class<StageContext>("StageContext")({name: S.optional(S.String)}) {}
export class ActionContext extends S.Class<ActionContext>("ActionContext")({name: S.optional(S.String), actionExecutionId: S.optional(S.String)}) {}
export class PipelineContext extends S.Class<PipelineContext>("PipelineContext")({pipelineName: S.optional(S.String), stage: S.optional(StageContext), action: S.optional(ActionContext), pipelineArn: S.optional(S.String), pipelineExecutionId: S.optional(S.String)}) {}
export class S3ArtifactLocation extends S.Class<S3ArtifactLocation>("S3ArtifactLocation")({bucketName: S.String, objectKey: S.String}) {}
export class ArtifactLocation extends S.Class<ArtifactLocation>("ArtifactLocation")({type: S.optional(S.String), s3Location: S.optional(S3ArtifactLocation)}) {}
export class Artifact extends S.Class<Artifact>("Artifact")({name: S.optional(S.String), revision: S.optional(S.String), location: S.optional(ArtifactLocation)}) {}
export const ArtifactList = S.Array(Artifact);
export class AWSSessionCredentials extends S.Class<AWSSessionCredentials>("AWSSessionCredentials")({accessKeyId: S.String, secretAccessKey: S.String, sessionToken: S.String}) {}
export class ThirdPartyJobData extends S.Class<ThirdPartyJobData>("ThirdPartyJobData")({actionTypeId: S.optional(ActionTypeId), actionConfiguration: S.optional(ActionConfiguration), pipelineContext: S.optional(PipelineContext), inputArtifacts: S.optional(ArtifactList), outputArtifacts: S.optional(ArtifactList), artifactCredentials: S.optional(AWSSessionCredentials), continuationToken: S.optional(S.String), encryptionKey: S.optional(EncryptionKey)}) {}
export class RuleTypeSettings extends S.Class<RuleTypeSettings>("RuleTypeSettings")({thirdPartyConfigurationUrl: S.optional(S.String), entityUrlTemplate: S.optional(S.String), executionUrlTemplate: S.optional(S.String), revisionUrlTemplate: S.optional(S.String)}) {}
export class RuleConfigurationProperty extends S.Class<RuleConfigurationProperty>("RuleConfigurationProperty")({name: S.String, required: S.Boolean, key: S.Boolean, secret: S.Boolean, queryable: S.optional(S.Boolean), description: S.optional(S.String), type: S.optional(S.String)}) {}
export const RuleConfigurationPropertyList = S.Array(RuleConfigurationProperty);
export class PipelineExecution extends S.Class<PipelineExecution>("PipelineExecution")({pipelineName: S.optional(S.String), pipelineVersion: S.optional(S.Number), pipelineExecutionId: S.optional(S.String), status: S.optional(S.String), statusSummary: S.optional(S.String), artifactRevisions: S.optional(ArtifactRevisionList), variables: S.optional(ResolvedPipelineVariableList), trigger: S.optional(ExecutionTrigger), executionMode: S.optional(S.String), executionType: S.optional(S.String), rollbackMetadata: S.optional(PipelineRollbackMetadata)}) {}
export class ThirdPartyJobDetails extends S.Class<ThirdPartyJobDetails>("ThirdPartyJobDetails")({id: S.optional(S.String), data: S.optional(ThirdPartyJobData), nonce: S.optional(S.String)}) {}
export class RuleType extends S.Class<RuleType>("RuleType")({id: RuleTypeId, settings: S.optional(RuleTypeSettings), ruleConfigurationProperties: S.optional(RuleConfigurationPropertyList), inputArtifactDetails: ArtifactDetails}) {}
export const RuleTypeList = S.Array(RuleType);
export class JobData extends S.Class<JobData>("JobData")({actionTypeId: S.optional(ActionTypeId), actionConfiguration: S.optional(ActionConfiguration), pipelineContext: S.optional(PipelineContext), inputArtifacts: S.optional(ArtifactList), outputArtifacts: S.optional(ArtifactList), artifactCredentials: S.optional(AWSSessionCredentials), continuationToken: S.optional(S.String), encryptionKey: S.optional(EncryptionKey)}) {}
export class Job extends S.Class<Job>("Job")({id: S.optional(S.String), data: S.optional(JobData), nonce: S.optional(S.String), accountId: S.optional(S.String)}) {}
export const JobList = S.Array(Job);
export class StageConditionsExecution extends S.Class<StageConditionsExecution>("StageConditionsExecution")({status: S.optional(S.String), summary: S.optional(S.String)}) {}
export class GetPipelineExecutionOutput extends S.Class<GetPipelineExecutionOutput>("GetPipelineExecutionOutput")({pipelineExecution: S.optional(PipelineExecution)}) {}
export class GetThirdPartyJobDetailsOutput extends S.Class<GetThirdPartyJobDetailsOutput>("GetThirdPartyJobDetailsOutput")({jobDetails: S.optional(ThirdPartyJobDetails)}) {}
export class ListRuleTypesOutput extends S.Class<ListRuleTypesOutput>("ListRuleTypesOutput")({ruleTypes: RuleTypeList}) {}
export class PollForJobsOutput extends S.Class<PollForJobsOutput>("PollForJobsOutput")({jobs: S.optional(JobList)}) {}
export class PutWebhookOutput extends S.Class<PutWebhookOutput>("PutWebhookOutput")({webhook: S.optional(ListWebhookItem)}) {}
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class ConditionExecution extends S.Class<ConditionExecution>("ConditionExecution")({status: S.optional(S.String), summary: S.optional(S.String), lastStatusChange: S.optional(S.Date)}) {}
export class ActionExecution extends S.Class<ActionExecution>("ActionExecution")({actionExecutionId: S.optional(S.String), status: S.optional(S.String), summary: S.optional(S.String), lastStatusChange: S.optional(S.Date), token: S.optional(S.String), lastUpdatedBy: S.optional(S.String), externalExecutionId: S.optional(S.String), externalExecutionUrl: S.optional(S.String), percentComplete: S.optional(S.Number), errorDetails: S.optional(ErrorDetails), logStreamARN: S.optional(S.String)}) {}
export class DeployTargetEventContext extends S.Class<DeployTargetEventContext>("DeployTargetEventContext")({ssmCommandId: S.optional(S.String), message: S.optional(S.String)}) {}
export const ResolvedRuleConfigurationMap = S.Record({key: S.String, value: S.String});
export class RuleExecutionResult extends S.Class<RuleExecutionResult>("RuleExecutionResult")({externalExecutionId: S.optional(S.String), externalExecutionSummary: S.optional(S.String), externalExecutionUrl: S.optional(S.String), errorDetails: S.optional(ErrorDetails)}) {}
export class RuleRevision extends S.Class<RuleRevision>("RuleRevision")({revisionId: S.String, revisionChangeId: S.String, created: S.Date}) {}
export class RuleExecution extends S.Class<RuleExecution>("RuleExecution")({ruleExecutionId: S.optional(S.String), status: S.optional(S.String), summary: S.optional(S.String), lastStatusChange: S.optional(S.Date), token: S.optional(S.String), lastUpdatedBy: S.optional(S.String), externalExecutionId: S.optional(S.String), externalExecutionUrl: S.optional(S.String), errorDetails: S.optional(ErrorDetails)}) {}
export class UpdateActionTypeInput extends S.Class<UpdateActionTypeInput>("UpdateActionTypeInput")({actionType: ActionTypeDeclaration}) {}
export class ActionState extends S.Class<ActionState>("ActionState")({actionName: S.optional(S.String), currentRevision: S.optional(ActionRevision), latestExecution: S.optional(ActionExecution), entityUrl: S.optional(S.String), revisionUrl: S.optional(S.String)}) {}
export const ActionStateList = S.Array(ActionState);
export class DeployTargetEvent extends S.Class<DeployTargetEvent>("DeployTargetEvent")({name: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), context: S.optional(DeployTargetEventContext)}) {}
export const DeployTargetEventList = S.Array(DeployTargetEvent);
export class SourceRevision extends S.Class<SourceRevision>("SourceRevision")({actionName: S.String, revisionId: S.optional(S.String), revisionSummary: S.optional(S.String), revisionUrl: S.optional(S.String)}) {}
export const SourceRevisionList = S.Array(SourceRevision);
export class StopExecutionTrigger extends S.Class<StopExecutionTrigger>("StopExecutionTrigger")({reason: S.optional(S.String)}) {}
export class RuleExecutionOutput extends S.Class<RuleExecutionOutput>("RuleExecutionOutput")({executionResult: S.optional(RuleExecutionResult)}) {}
export class RuleState extends S.Class<RuleState>("RuleState")({ruleName: S.optional(S.String), currentRevision: S.optional(RuleRevision), latestExecution: S.optional(RuleExecution), entityUrl: S.optional(S.String), revisionUrl: S.optional(S.String)}) {}
export const RuleStateList = S.Array(RuleState);
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.optional(S.String), key: S.optional(S.String)}) {}
export class DeployActionExecutionTarget extends S.Class<DeployActionExecutionTarget>("DeployActionExecutionTarget")({targetId: S.optional(S.String), targetType: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), events: S.optional(DeployTargetEventList)}) {}
export const DeployActionExecutionTargetList = S.Array(DeployActionExecutionTarget);
export class PipelineExecutionSummary extends S.Class<PipelineExecutionSummary>("PipelineExecutionSummary")({pipelineExecutionId: S.optional(S.String), status: S.optional(S.String), statusSummary: S.optional(S.String), startTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), sourceRevisions: S.optional(SourceRevisionList), trigger: S.optional(ExecutionTrigger), stopTrigger: S.optional(StopExecutionTrigger), executionMode: S.optional(S.String), executionType: S.optional(S.String), rollbackMetadata: S.optional(PipelineRollbackMetadata)}) {}
export const PipelineExecutionSummaryList = S.Array(PipelineExecutionSummary);
export class ConditionState extends S.Class<ConditionState>("ConditionState")({latestExecution: S.optional(ConditionExecution), ruleStates: S.optional(RuleStateList)}) {}
export const ConditionStateList = S.Array(ConditionState);
export const ResolvedActionConfigurationMap = S.Record({key: S.String, value: S.String});
export class ActionExecutionResult extends S.Class<ActionExecutionResult>("ActionExecutionResult")({externalExecutionId: S.optional(S.String), externalExecutionSummary: S.optional(S.String), externalExecutionUrl: S.optional(S.String), errorDetails: S.optional(ErrorDetails), logStreamARN: S.optional(S.String)}) {}
export class ArtifactDetail extends S.Class<ArtifactDetail>("ArtifactDetail")({name: S.optional(S.String), s3location: S.optional(S3Location)}) {}
export const ArtifactDetailList = S.Array(ArtifactDetail);
export class ListDeployActionExecutionTargetsOutput extends S.Class<ListDeployActionExecutionTargetsOutput>("ListDeployActionExecutionTargetsOutput")({targets: S.optional(DeployActionExecutionTargetList), nextToken: S.optional(S.String)}) {}
export class ListPipelineExecutionsOutput extends S.Class<ListPipelineExecutionsOutput>("ListPipelineExecutionsOutput")({pipelineExecutionSummaries: S.optional(PipelineExecutionSummaryList), nextToken: S.optional(S.String)}) {}
export class StageConditionState extends S.Class<StageConditionState>("StageConditionState")({latestExecution: S.optional(StageConditionsExecution), conditionStates: S.optional(ConditionStateList)}) {}
export class ActionExecutionInput extends S.Class<ActionExecutionInput>("ActionExecutionInput")({actionTypeId: S.optional(ActionTypeId), configuration: S.optional(ActionConfigurationMap), resolvedConfiguration: S.optional(ResolvedActionConfigurationMap), roleArn: S.optional(S.String), region: S.optional(S.String), inputArtifacts: S.optional(ArtifactDetailList), namespace: S.optional(S.String)}) {}
export class ActionExecutionOutput extends S.Class<ActionExecutionOutput>("ActionExecutionOutput")({outputArtifacts: S.optional(ArtifactDetailList), executionResult: S.optional(ActionExecutionResult), outputVariables: S.optional(OutputVariablesMap)}) {}
export class RuleExecutionInput extends S.Class<RuleExecutionInput>("RuleExecutionInput")({ruleTypeId: S.optional(RuleTypeId), configuration: S.optional(RuleConfigurationMap), resolvedConfiguration: S.optional(ResolvedRuleConfigurationMap), roleArn: S.optional(S.String), region: S.optional(S.String), inputArtifacts: S.optional(ArtifactDetailList)}) {}
export class JobDetails extends S.Class<JobDetails>("JobDetails")({id: S.optional(S.String), data: S.optional(JobData), accountId: S.optional(S.String)}) {}
export class StageState extends S.Class<StageState>("StageState")({stageName: S.optional(S.String), inboundExecution: S.optional(StageExecution), inboundExecutions: S.optional(StageExecutionList), inboundTransitionState: S.optional(TransitionState), actionStates: S.optional(ActionStateList), latestExecution: S.optional(StageExecution), beforeEntryConditionState: S.optional(StageConditionState), onSuccessConditionState: S.optional(StageConditionState), onFailureConditionState: S.optional(StageConditionState), retryStageMetadata: S.optional(RetryStageMetadata)}) {}
export const StageStateList = S.Array(StageState);
export class ActionExecutionDetail extends S.Class<ActionExecutionDetail>("ActionExecutionDetail")({pipelineExecutionId: S.optional(S.String), actionExecutionId: S.optional(S.String), pipelineVersion: S.optional(S.Number), stageName: S.optional(S.String), actionName: S.optional(S.String), startTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), updatedBy: S.optional(S.String), status: S.optional(S.String), input: S.optional(ActionExecutionInput), output: S.optional(ActionExecutionOutput)}) {}
export const ActionExecutionDetailList = S.Array(ActionExecutionDetail);
export class RuleExecutionDetail extends S.Class<RuleExecutionDetail>("RuleExecutionDetail")({pipelineExecutionId: S.optional(S.String), ruleExecutionId: S.optional(S.String), pipelineVersion: S.optional(S.Number), stageName: S.optional(S.String), ruleName: S.optional(S.String), startTime: S.optional(S.Date), lastUpdateTime: S.optional(S.Date), updatedBy: S.optional(S.String), status: S.optional(S.String), input: S.optional(RuleExecutionInput), output: S.optional(RuleExecutionOutput)}) {}
export const RuleExecutionDetailList = S.Array(RuleExecutionDetail);
export class CreatePipelineInput extends S.Class<CreatePipelineInput>("CreatePipelineInput")({pipeline: PipelineDeclaration, tags: S.optional(TagList)}) {}
export class GetJobDetailsOutput extends S.Class<GetJobDetailsOutput>("GetJobDetailsOutput")({jobDetails: S.optional(JobDetails)}) {}
export class GetPipelineStateOutput extends S.Class<GetPipelineStateOutput>("GetPipelineStateOutput")({pipelineName: S.optional(S.String), pipelineVersion: S.optional(S.Number), stageStates: S.optional(StageStateList), created: S.optional(S.Date), updated: S.optional(S.Date)}) {}
export class ListActionExecutionsOutput extends S.Class<ListActionExecutionsOutput>("ListActionExecutionsOutput")({actionExecutionDetails: S.optional(ActionExecutionDetailList), nextToken: S.optional(S.String)}) {}
export class ListRuleExecutionsOutput extends S.Class<ListRuleExecutionsOutput>("ListRuleExecutionsOutput")({ruleExecutionDetails: S.optional(RuleExecutionDetailList), nextToken: S.optional(S.String)}) {}
export class CreatePipelineOutput extends S.Class<CreatePipelineOutput>("CreatePipelineOutput")({pipeline: S.optional(PipelineDeclaration), tags: S.optional(TagList)}) {}

//# Errors
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class WebhookNotFoundException extends S.TaggedError<WebhookNotFoundException>()("WebhookNotFoundException", {}) {};
export class PipelineNotFoundException extends S.TaggedError<PipelineNotFoundException>()("PipelineNotFoundException", {}) {};
export class InvalidClientTokenException extends S.TaggedError<InvalidClientTokenException>()("InvalidClientTokenException", {}) {};
export class InvalidArnException extends S.TaggedError<InvalidArnException>()("InvalidArnException", {}) {};
export class InvalidNonceException extends S.TaggedError<InvalidNonceException>()("InvalidNonceException", {}) {};
export class StageNotFoundException extends S.TaggedError<StageNotFoundException>()("StageNotFoundException", {}) {};
export class ConcurrentPipelineExecutionsLimitExceededException extends S.TaggedError<ConcurrentPipelineExecutionsLimitExceededException>()("ConcurrentPipelineExecutionsLimitExceededException", {message: S.optional(S.String)}) {};
export class InvalidJobStateException extends S.TaggedError<InvalidJobStateException>()("InvalidJobStateException", {}) {};
export class JobNotFoundException extends S.TaggedError<JobNotFoundException>()("JobNotFoundException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InvalidTagsException extends S.TaggedError<InvalidTagsException>()("InvalidTagsException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ActionTypeNotFoundException extends S.TaggedError<ActionTypeNotFoundException>()("ActionTypeNotFoundException", {message: S.optional(S.String)}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class ConditionNotOverridableException extends S.TaggedError<ConditionNotOverridableException>()("ConditionNotOverridableException", {message: S.optional(S.String)}) {};
export class ActionNotFoundException extends S.TaggedError<ActionNotFoundException>()("ActionNotFoundException", {}) {};
export class OutputVariablesSizeExceededException extends S.TaggedError<OutputVariablesSizeExceededException>()("OutputVariablesSizeExceededException", {message: S.optional(S.String)}) {};
export class NotLatestPipelineExecutionException extends S.TaggedError<NotLatestPipelineExecutionException>()("NotLatestPipelineExecutionException", {}) {};
export class PipelineExecutionNotFoundException extends S.TaggedError<PipelineExecutionNotFoundException>()("PipelineExecutionNotFoundException", {message: S.optional(S.String)}) {};
export class DuplicatedStopRequestException extends S.TaggedError<DuplicatedStopRequestException>()("DuplicatedStopRequestException", {message: S.optional(S.String)}) {};
export class InvalidActionDeclarationException extends S.TaggedError<InvalidActionDeclarationException>()("InvalidActionDeclarationException", {message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {}) {};
export class PipelineVersionNotFoundException extends S.TaggedError<PipelineVersionNotFoundException>()("PipelineVersionNotFoundException", {message: S.optional(S.String)}) {};
export class ApprovalAlreadyCompletedException extends S.TaggedError<ApprovalAlreadyCompletedException>()("ApprovalAlreadyCompletedException", {message: S.optional(S.String)}) {};
export class StageNotRetryableException extends S.TaggedError<StageNotRetryableException>()("StageNotRetryableException", {message: S.optional(S.String)}) {};
export class PipelineExecutionOutdatedException extends S.TaggedError<PipelineExecutionOutdatedException>()("PipelineExecutionOutdatedException", {message: S.optional(S.String)}) {};
export class PipelineExecutionNotStoppableException extends S.TaggedError<PipelineExecutionNotStoppableException>()("PipelineExecutionNotStoppableException", {message: S.optional(S.String)}) {};
export class InvalidBlockerDeclarationException extends S.TaggedError<InvalidBlockerDeclarationException>()("InvalidBlockerDeclarationException", {message: S.optional(S.String)}) {};
export class InvalidJobException extends S.TaggedError<InvalidJobException>()("InvalidJobException", {message: S.optional(S.String)}) {};
export class InvalidApprovalTokenException extends S.TaggedError<InvalidApprovalTokenException>()("InvalidApprovalTokenException", {message: S.optional(S.String)}) {};
export class InvalidWebhookAuthenticationParametersException extends S.TaggedError<InvalidWebhookAuthenticationParametersException>()("InvalidWebhookAuthenticationParametersException", {message: S.optional(S.String)}) {};
export class UnableToRollbackStageException extends S.TaggedError<UnableToRollbackStageException>()("UnableToRollbackStageException", {message: S.optional(S.String)}) {};
export class InvalidStageDeclarationException extends S.TaggedError<InvalidStageDeclarationException>()("InvalidStageDeclarationException", {message: S.optional(S.String)}) {};
export class InvalidWebhookFilterPatternException extends S.TaggedError<InvalidWebhookFilterPatternException>()("InvalidWebhookFilterPatternException", {message: S.optional(S.String)}) {};
export class RequestFailedException extends S.TaggedError<RequestFailedException>()("RequestFailedException", {message: S.optional(S.String)}) {};
export class InvalidStructureException extends S.TaggedError<InvalidStructureException>()("InvalidStructureException", {message: S.optional(S.String)}) {};
export class ActionExecutionNotFoundException extends S.TaggedError<ActionExecutionNotFoundException>()("ActionExecutionNotFoundException", {message: S.optional(S.String)}) {};
export class PipelineNameInUseException extends S.TaggedError<PipelineNameInUseException>()("PipelineNameInUseException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API
 * returns successfully when trying to delete a webhook that is already deleted. If a
 * deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 * different URL.
 */export const deleteWebhook = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.DeleteWebhook" }, DeleteWebhookInput, DeleteWebhookOutput, [ConcurrentModificationException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the connection between the webhook that was created by CodePipeline
 * and the external tool with events to be detected. Currently supported only for webhooks
 * that target an action type of GitHub.
 */export const deregisterWebhookWithThirdParty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.DeregisterWebhookWithThirdParty" }, DeregisterWebhookWithThirdPartyInput, DeregisterWebhookWithThirdPartyOutput, [ValidationException, WebhookNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures a connection between the webhook that was created and the external tool
 * with events to be detected.
 */export const registerWebhookWithThirdParty = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.RegisterWebhookWithThirdParty" }, RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput, [ValidationException, WebhookNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Marks a custom action as deleted. `PollForJobs` for the custom action
 * fails after the action is marked for deletion. Used for custom actions only.
 * 
 * To re-create a custom action after it has been deleted you must use a string in
 * the version field that has never been used before. This string can be an incremented
 * version number, for example. To restore a deleted custom action, use a JSON file
 * that is identical to the deleted action, including the original string in the
 * version field.
 */export const deleteCustomActionType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.DeleteCustomActionType" }, DeleteCustomActionTypeInput, S.Struct({}), [ConcurrentModificationException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified pipeline.
 */export const deletePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.DeletePipeline" }, DeletePipelineInput, S.Struct({}), [ConcurrentModificationException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Prevents artifacts in a pipeline from transitioning to the next stage in the
 * pipeline.
 */export const disableStageTransition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.DisableStageTransition" }, DisableStageTransitionInput, S.Struct({}), [PipelineNotFoundException, StageNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables artifacts in a pipeline to transition to a stage in a pipeline.
 */export const enableStageTransition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.EnableStageTransition" }, EnableStageTransitionInput, S.Struct({}), [PipelineNotFoundException, StageNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents the failure of a job as returned to the pipeline by a job worker. Used
 * for custom actions only.
 */export const putJobFailureResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutJobFailureResult" }, PutJobFailureResultInput, S.Struct({}), [InvalidJobStateException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents the failure of a third party job as returned to the pipeline by a job
 * worker. Used for partner actions only.
 */export const putThirdPartyJobFailureResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutThirdPartyJobFailureResult" }, PutThirdPartyJobFailureResultInput, S.Struct({}), [InvalidClientTokenException, InvalidJobStateException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents the success of a third party job as returned to the pipeline by a job
 * worker. Used for partner actions only.
 */export const putThirdPartyJobSuccessResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutThirdPartyJobSuccessResult" }, PutThirdPartyJobSuccessResultInput, S.Struct({}), [InvalidClientTokenException, InvalidJobStateException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from an Amazon Web Services resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConcurrentModificationException, InvalidArnException, InvalidTagsException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified job and whether that job has been received by
 * the job worker. Used for custom actions only.
 */export const acknowledgeJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.AcknowledgeJob" }, AcknowledgeJobInput, AcknowledgeJobOutput, [InvalidNonceException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Confirms a job worker has received the specified job. Used for partner actions
 * only.
 */export const acknowledgeThirdPartyJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.AcknowledgeThirdPartyJob" }, AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput, [InvalidClientTokenException, InvalidNonceException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an action type created for an external provider, where the
 * action is to be used by customers of the external provider. The action can be created
 * with any supported integration model.
 */export const getActionType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetActionType" }, GetActionTypeInput, GetActionTypeOutput, [ActionTypeNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a summary of all CodePipeline action types associated with your
 * account.
 */export const listActionTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListActionTypes" }, ListActionTypesInput, ListActionTypesOutput, [InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a summary of all of the pipelines associated with your account.
 */export const listPipelines = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListPipelines" }, ListPipelinesInput, ListPipelinesOutput, [InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the set of key-value pairs (metadata) that are used to manage the
 * resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InvalidArnException, InvalidNextTokenException, ResourceNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a listing of all the webhooks in this Amazon Web Services Region for this
 * account. The output lists all webhooks and includes the webhook URL and ARN and the
 * configuration for each webhook.
 * 
 * If a secret token was provided, it will be redacted in the response.
 */export const listWebhooks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListWebhooks" }, ListWebhooksInput, ListWebhooksOutput, [InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Determines whether there are any third party jobs for a job worker to act on. Used
 * for partner actions only.
 * 
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts.
 */export const pollForThirdPartyJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PollForThirdPartyJobs" }, PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput, [ActionTypeNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents the success of a job as returned to the pipeline by a job worker. Used
 * for custom actions only.
 */export const putJobSuccessResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutJobSuccessResult" }, PutJobSuccessResultInput, S.Struct({}), [InvalidJobStateException, JobNotFoundException, OutputVariablesSizeExceededException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified pipeline. Specifically, it begins processing the latest commit
 * to the source location specified as part of the pipeline.
 */export const startPipelineExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.StartPipelineExecution" }, StartPipelineExecutionInput, StartPipelineExecutionOutput, [ConcurrentPipelineExecutionsLimitExceededException, ConflictException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new custom action that can be used in all pipelines associated with the
 * Amazon Web Services account. Only used for custom actions.
 */export const createCustomActionType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.CreateCustomActionType" }, CreateCustomActionTypeInput, CreateCustomActionTypeOutput, [ConcurrentModificationException, InvalidTagsException, LimitExceededException, TooManyTagsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 * return the entire structure of a pipeline in JSON format, which can then be modified and
 * used to update the pipeline structure with UpdatePipeline.
 */export const getPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetPipeline" }, GetPipelineInput, GetPipelineOutput, [PipelineNotFoundException, PipelineVersionNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an execution of a pipeline, including details about
 * artifacts, the pipeline execution ID, and the name, version, and status of the
 * pipeline.
 */export const getPipelineExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetPipelineExecution" }, GetPipelineExecutionInput, GetPipelineExecutionOutput, [PipelineExecutionNotFoundException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the rules for the condition. For more information about conditions, see Stage
 * conditions and How do
 * stage conditions work?.For more information about rules, see the CodePipeline rule reference.
 */export const listRuleTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListRuleTypes" }, ListRuleTypesInput, ListRuleTypesOutput, [InvalidNextTokenException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to override a stage condition. For more information about conditions, see Stage
 * conditions and How do
 * stage conditions work?.
 */export const overrideStageCondition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.OverrideStageCondition" }, OverrideStageConditionInput, S.Struct({}), [ConcurrentPipelineExecutionsLimitExceededException, ConditionNotOverridableException, ConflictException, NotLatestPipelineExecutionException, PipelineNotFoundException, StageNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about any jobs for CodePipeline to act on.
 * `PollForJobs` is valid only for action types with "Custom" in the owner
 * field. If the action type contains `AWS` or `ThirdParty` in the
 * owner field, the `PollForJobs` action returns an error.
 * 
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */export const pollForJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PollForJobs" }, PollForJobsInput, PollForJobsOutput, [ActionTypeNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information to CodePipeline about new revisions to a
 * source.
 */export const putActionRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutActionRevision" }, PutActionRevisionInput, PutActionRevisionOutput, [ActionNotFoundException, ConcurrentPipelineExecutionsLimitExceededException, PipelineNotFoundException, StageNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * You can retry a stage that has failed without having to run a pipeline again from
 * the beginning. You do this by either retrying the failed actions in a stage or by
 * retrying all actions in the stage starting from the first action in the stage. When you
 * retry the failed actions in a stage, all actions that are still in progress continue
 * working, and failed actions are triggered again. When you retry a failed stage from the
 * first action in the stage, the stage cannot have any actions in progress. Before a stage
 * can be retried, it must either have all actions failed or some actions failed and some
 * succeeded.
 */export const retryStageExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.RetryStageExecution" }, RetryStageExecutionInput, RetryStageExecutionOutput, [ConcurrentPipelineExecutionsLimitExceededException, ConflictException, NotLatestPipelineExecutionException, PipelineNotFoundException, StageNotFoundException, StageNotRetryableException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the specified pipeline execution. You choose to either stop the pipeline
 * execution by completing in-progress actions without starting subsequent actions, or by
 * abandoning in-progress actions. While completing or abandoning in-progress actions, the
 * pipeline execution is in a `Stopping` state. After all in-progress actions
 * are completed or abandoned, the pipeline execution is in a `Stopped`
 * state.
 */export const stopPipelineExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.StopPipelineExecution" }, StopPipelineExecutionInput, StopPipelineExecutionOutput, [ConflictException, DuplicatedStopRequestException, PipelineExecutionNotStoppableException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used
 * to manage a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.TagResource" }, TagResourceInput, TagResourceOutput, [ConcurrentModificationException, InvalidArnException, InvalidTagsException, ResourceNotFoundException, TooManyTagsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Requests the details of a job for a third party action. Used for partner actions
 * only.
 * 
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */export const getThirdPartyJobDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetThirdPartyJobDetails" }, GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput, [InvalidClientTokenException, InvalidJobException, JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the response to a manual approval request to CodePipeline. Valid
 * responses include Approved and Rejected.
 */export const putApprovalResult = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutApprovalResult" }, PutApprovalResultInput, PutApprovalResultOutput, [ActionNotFoundException, ApprovalAlreadyCompletedException, InvalidApprovalTokenException, PipelineNotFoundException, StageNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rolls back a stage execution.
 */export const rollbackStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.RollbackStage" }, RollbackStageInput, RollbackStageOutput, [ConflictException, PipelineExecutionNotFoundException, PipelineExecutionOutdatedException, PipelineNotFoundException, StageNotFoundException, UnableToRollbackStageException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a summary of the most recent executions for a pipeline.
 * 
 * When applying the filter for pipeline executions that have succeeded in the stage,
 * the operation returns all executions in the current pipeline version beginning on
 * February 1, 2024.
 */export const listPipelineExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListPipelineExecutions" }, ListPipelineExecutionsInput, ListPipelineExecutionsOutput, [InvalidNextTokenException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Defines a webhook and returns a unique webhook URL generated by CodePipeline.
 * This URL can be supplied to third party source hosting providers to call every time
 * there's a code change. When CodePipeline receives a POST request on this URL, the
 * pipeline defined in the webhook is started as long as the POST request satisfied the
 * authentication and filtering requirements supplied when defining the webhook.
 * RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to
 * automatically configure supported third parties to call the generated webhook
 * URL.
 * 
 * When creating CodePipeline webhooks, do not use your own credentials or
 * reuse the same secret token across multiple webhooks. For optimal security, generate
 * a unique secret token for each webhook you create. The secret token is an arbitrary
 * string that you provide, which GitHub uses to compute and sign the webhook payloads
 * sent to CodePipeline, for protecting the integrity and authenticity of the
 * webhook payloads. Using your own credentials or reusing the same token across
 * multiple webhooks can lead to security vulnerabilities.
 * 
 * If a secret token was provided, it will be redacted in the response.
 */export const putWebhook = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.PutWebhook" }, PutWebhookInput, PutWebhookOutput, [ConcurrentModificationException, InvalidTagsException, InvalidWebhookAuthenticationParametersException, InvalidWebhookFilterPatternException, LimitExceededException, PipelineNotFoundException, TooManyTagsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an action type that was created with any supported integration model, where
 * the action type is to be used by customers of the action type provider. Use a JSON file
 * with the action definition and `UpdateActionType` to provide the full
 * structure.
 */export const updateActionType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.UpdateActionType" }, UpdateActionTypeInput, S.Struct({}), [ActionTypeNotFoundException, RequestFailedException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a specified pipeline with edits or changes to its structure. Use a JSON
 * file with the pipeline structure and `UpdatePipeline` to provide the full
 * structure of the pipeline. Updating the pipeline increases the version number of the
 * pipeline by 1.
 */export const updatePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.UpdatePipeline" }, UpdatePipelineInput, UpdatePipelineOutput, [InvalidActionDeclarationException, InvalidBlockerDeclarationException, InvalidStageDeclarationException, InvalidStructureException, LimitExceededException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a job. Used for custom actions only.
 * 
 * When this API is called, CodePipeline returns temporary credentials for
 * the S3 bucket used to store artifacts for the pipeline, if the action requires
 * access to that S3 bucket for input or output artifacts. This API also returns any
 * secret values defined for the action.
 */export const getJobDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetJobDetails" }, GetJobDetailsInput, GetJobDetailsOutput, [JobNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the state of a pipeline, including the stages and
 * actions.
 * 
 * Values returned in the `revisionId` and `revisionUrl`
 * fields indicate the source revision information, such as the commit ID, for the
 * current state.
 */export const getPipelineState = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.GetPipelineState" }, GetPipelineStateInput, GetPipelineStateOutput, [PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the action executions that have occurred in a pipeline.
 */export const listActionExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListActionExecutions" }, ListActionExecutionsInput, ListActionExecutionsOutput, [InvalidNextTokenException, PipelineExecutionNotFoundException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the targets for the deploy action.
 */export const listDeployActionExecutionTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListDeployActionExecutionTargets" }, ListDeployActionExecutionTargetsInput, ListDeployActionExecutionTargetsOutput, [ActionExecutionNotFoundException, InvalidNextTokenException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the rule executions that have occurred in a pipeline configured for conditions
 * with rules.
 */export const listRuleExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.ListRuleExecutions" }, ListRuleExecutionsInput, ListRuleExecutionsOutput, [InvalidNextTokenException, PipelineExecutionNotFoundException, PipelineNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a pipeline.
 * 
 * In the pipeline structure, you must include either `artifactStore`
 * or `artifactStores` in your pipeline, but you cannot use both. If you
 * create a cross-region action in your pipeline, you must use
 * `artifactStores`.
 */export const createPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", sdkId: "CodePipeline", sigV4ServiceName: "codepipeline", name: "CodePipeline_20150709.CreatePipeline" }, CreatePipelineInput, CreatePipelineOutput, [ConcurrentModificationException, InvalidActionDeclarationException, InvalidBlockerDeclarationException, InvalidStageDeclarationException, InvalidStructureException, InvalidTagsException, LimitExceededException, PipelineNameInUseException, TooManyTagsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
