import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const PolicyIdList = S.Array(S.String);
export const ResourceTypeValuesList = S.Array(S.String);
export const TargetTagsFilterList = S.Array(S.String);
export const TagsToAddFilterList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteLifecyclePolicyRequest extends S.Class<DeleteLifecyclePolicyRequest>("DeleteLifecyclePolicyRequest")({PolicyId: S.String}) {}
export class DeleteLifecyclePolicyResponse extends S.Class<DeleteLifecyclePolicyResponse>("DeleteLifecyclePolicyResponse")({}) {}
export class GetLifecyclePoliciesRequest extends S.Class<GetLifecyclePoliciesRequest>("GetLifecyclePoliciesRequest")({PolicyIds: S.optional(PolicyIdList), State: S.optional(S.String), ResourceTypes: S.optional(ResourceTypeValuesList), TargetTags: S.optional(TargetTagsFilterList), TagsToAdd: S.optional(TagsToAddFilterList), DefaultPolicyType: S.optional(S.String)}) {}
export class GetLifecyclePolicyRequest extends S.Class<GetLifecyclePolicyRequest>("GetLifecyclePolicyRequest")({PolicyId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ResourceLocationList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TargetTagList = S.Array(Tag);
export const TagsToAddList = S.Array(Tag);
export const VariableTagsList = S.Array(Tag);
export const TimesList = S.Array(S.String);
export const StagesList = S.Array(S.String);
export class Script extends S.Class<Script>("Script")({Stages: S.optional(StagesList), ExecutionHandlerService: S.optional(S.String), ExecutionHandler: S.String, ExecuteOperationOnScriptFailure: S.optional(S.Boolean), ExecutionTimeout: S.optional(S.Number), MaximumRetryCount: S.optional(S.Number)}) {}
export const ScriptsList = S.Array(Script);
export class CreateRule extends S.Class<CreateRule>("CreateRule")({Location: S.optional(S.String), Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String), Times: S.optional(TimesList), CronExpression: S.optional(S.String), Scripts: S.optional(ScriptsList)}) {}
export class RetainRule extends S.Class<RetainRule>("RetainRule")({Count: S.optional(S.Number), Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String)}) {}
export const AvailabilityZoneList = S.Array(S.String);
export class FastRestoreRule extends S.Class<FastRestoreRule>("FastRestoreRule")({Count: S.optional(S.Number), Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String), AvailabilityZones: AvailabilityZoneList}) {}
export class CrossRegionCopyRetainRule extends S.Class<CrossRegionCopyRetainRule>("CrossRegionCopyRetainRule")({Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String)}) {}
export class CrossRegionCopyDeprecateRule extends S.Class<CrossRegionCopyDeprecateRule>("CrossRegionCopyDeprecateRule")({Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String)}) {}
export class CrossRegionCopyRule extends S.Class<CrossRegionCopyRule>("CrossRegionCopyRule")({TargetRegion: S.optional(S.String), Target: S.optional(S.String), Encrypted: S.Boolean, CmkArn: S.optional(S.String), CopyTags: S.optional(S.Boolean), RetainRule: S.optional(CrossRegionCopyRetainRule), DeprecateRule: S.optional(CrossRegionCopyDeprecateRule)}) {}
export const CrossRegionCopyRules = S.Array(CrossRegionCopyRule);
export const ShareTargetAccountList = S.Array(S.String);
export class ShareRule extends S.Class<ShareRule>("ShareRule")({TargetAccounts: ShareTargetAccountList, UnshareInterval: S.optional(S.Number), UnshareIntervalUnit: S.optional(S.String)}) {}
export const ShareRules = S.Array(ShareRule);
export class DeprecateRule extends S.Class<DeprecateRule>("DeprecateRule")({Count: S.optional(S.Number), Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String)}) {}
export class RetentionArchiveTier extends S.Class<RetentionArchiveTier>("RetentionArchiveTier")({Count: S.optional(S.Number), Interval: S.optional(S.Number), IntervalUnit: S.optional(S.String)}) {}
export class ArchiveRetainRule extends S.Class<ArchiveRetainRule>("ArchiveRetainRule")({RetentionArchiveTier: RetentionArchiveTier}) {}
export class ArchiveRule extends S.Class<ArchiveRule>("ArchiveRule")({RetainRule: ArchiveRetainRule}) {}
export class Schedule extends S.Class<Schedule>("Schedule")({Name: S.optional(S.String), CopyTags: S.optional(S.Boolean), TagsToAdd: S.optional(TagsToAddList), VariableTags: S.optional(VariableTagsList), CreateRule: S.optional(CreateRule), RetainRule: S.optional(RetainRule), FastRestoreRule: S.optional(FastRestoreRule), CrossRegionCopyRules: S.optional(CrossRegionCopyRules), ShareRules: S.optional(ShareRules), DeprecateRule: S.optional(DeprecateRule), ArchiveRule: S.optional(ArchiveRule)}) {}
export const ScheduleList = S.Array(Schedule);
export const ExcludeDataVolumeTagList = S.Array(Tag);
export class Parameters extends S.Class<Parameters>("Parameters")({ExcludeBootVolume: S.optional(S.Boolean), NoReboot: S.optional(S.Boolean), ExcludeDataVolumeTags: S.optional(ExcludeDataVolumeTagList)}) {}
export const SnapshotOwnerList = S.Array(S.String);
export class EventParameters extends S.Class<EventParameters>("EventParameters")({EventType: S.String, SnapshotOwner: SnapshotOwnerList, DescriptionRegex: S.String}) {}
export class EventSource extends S.Class<EventSource>("EventSource")({Type: S.String, Parameters: S.optional(EventParameters)}) {}
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({Encrypted: S.Boolean, CmkArn: S.optional(S.String)}) {}
export class CrossRegionCopyAction extends S.Class<CrossRegionCopyAction>("CrossRegionCopyAction")({Target: S.String, EncryptionConfiguration: EncryptionConfiguration, RetainRule: S.optional(CrossRegionCopyRetainRule)}) {}
export const CrossRegionCopyActionList = S.Array(CrossRegionCopyAction);
export class Action extends S.Class<Action>("Action")({Name: S.String, CrossRegionCopy: CrossRegionCopyActionList}) {}
export const ActionList = S.Array(Action);
export class CrossRegionCopyTarget extends S.Class<CrossRegionCopyTarget>("CrossRegionCopyTarget")({TargetRegion: S.optional(S.String)}) {}
export const CrossRegionCopyTargetList = S.Array(CrossRegionCopyTarget);
export const ExcludeVolumeTypesList = S.Array(S.String);
export const ExcludeTagsList = S.Array(Tag);
export class Exclusions extends S.Class<Exclusions>("Exclusions")({ExcludeBootVolumes: S.optional(S.Boolean), ExcludeVolumeTypes: S.optional(ExcludeVolumeTypesList), ExcludeTags: S.optional(ExcludeTagsList)}) {}
export class PolicyDetails extends S.Class<PolicyDetails>("PolicyDetails")({PolicyType: S.optional(S.String), ResourceTypes: S.optional(ResourceTypeValuesList), ResourceLocations: S.optional(ResourceLocationList), TargetTags: S.optional(TargetTagList), Schedules: S.optional(ScheduleList), Parameters: S.optional(Parameters), EventSource: S.optional(EventSource), Actions: S.optional(ActionList), PolicyLanguage: S.optional(S.String), ResourceType: S.optional(S.String), CreateInterval: S.optional(S.Number), RetainInterval: S.optional(S.Number), CopyTags: S.optional(S.Boolean), CrossRegionCopyTargets: S.optional(CrossRegionCopyTargetList), ExtendDeletion: S.optional(S.Boolean), Exclusions: S.optional(Exclusions)}) {}
export class UpdateLifecyclePolicyRequest extends S.Class<UpdateLifecyclePolicyRequest>("UpdateLifecyclePolicyRequest")({PolicyId: S.String, ExecutionRoleArn: S.optional(S.String), State: S.optional(S.String), Description: S.optional(S.String), PolicyDetails: S.optional(PolicyDetails), CreateInterval: S.optional(S.Number), RetainInterval: S.optional(S.Number), CopyTags: S.optional(S.Boolean), ExtendDeletion: S.optional(S.Boolean), CrossRegionCopyTargets: S.optional(CrossRegionCopyTargetList), Exclusions: S.optional(Exclusions)}) {}
export class UpdateLifecyclePolicyResponse extends S.Class<UpdateLifecyclePolicyResponse>("UpdateLifecyclePolicyResponse")({}) {}
export const ParameterList = S.Array(S.String);
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class LifecyclePolicySummary extends S.Class<LifecyclePolicySummary>("LifecyclePolicySummary")({PolicyId: S.optional(S.String), Description: S.optional(S.String), State: S.optional(S.String), Tags: S.optional(TagMap), PolicyType: S.optional(S.String), DefaultPolicy: S.optional(S.Boolean)}) {}
export const LifecyclePolicySummaryList = S.Array(LifecyclePolicySummary);
export class LifecyclePolicy extends S.Class<LifecyclePolicy>("LifecyclePolicy")({PolicyId: S.optional(S.String), Description: S.optional(S.String), State: S.optional(S.String), StatusMessage: S.optional(S.String), ExecutionRoleArn: S.optional(S.String), DateCreated: S.optional(S.Date), DateModified: S.optional(S.Date), PolicyDetails: S.optional(PolicyDetails), Tags: S.optional(TagMap), PolicyArn: S.optional(S.String), DefaultPolicy: S.optional(S.Boolean)}) {}
export class GetLifecyclePoliciesResponse extends S.Class<GetLifecyclePoliciesResponse>("GetLifecyclePoliciesResponse")({Policies: S.optional(LifecyclePolicySummaryList)}) {}
export class GetLifecyclePolicyResponse extends S.Class<GetLifecyclePolicyResponse>("GetLifecyclePolicyResponse")({Policy: S.optional(LifecyclePolicy)}) {}
export class CreateLifecyclePolicyRequest extends S.Class<CreateLifecyclePolicyRequest>("CreateLifecyclePolicyRequest")({ExecutionRoleArn: S.String, Description: S.String, State: S.String, PolicyDetails: S.optional(PolicyDetails), Tags: S.optional(TagMap), DefaultPolicy: S.optional(S.String), CreateInterval: S.optional(S.Number), RetainInterval: S.optional(S.Number), CopyTags: S.optional(S.Boolean), ExtendDeletion: S.optional(S.Boolean), CrossRegionCopyTargets: S.optional(CrossRegionCopyTargetList), Exclusions: S.optional(Exclusions)}) {}
export class CreateLifecyclePolicyResponse extends S.Class<CreateLifecyclePolicyResponse>("CreateLifecyclePolicyResponse")({PolicyId: S.optional(S.String)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
/**
 * Deletes the specified lifecycle policy and halts the automated operations that the
 * policy specified.
 * 
 * 
 * For more information about deleting a policy, see Delete lifecycle
 * policies.
 */export const deleteLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "DELETE", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse, [InternalServerException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for the specified resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tags to the specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, InvalidRequestException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified lifecycle policy.
 * 
 * 
 * For more information about updating a policy, see Modify lifecycle
 * policies.
 */export const updateLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "PATCH", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.UpdateLifecyclePolicy" }, UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse, [InternalServerException, InvalidRequestException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about all or the specified data lifecycle policies.
 * 
 * 
 * To get complete information about a policy, use GetLifecyclePolicy.
 */export const getLifecyclePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/policies", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.GetLifecyclePolicies" }, GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse, [InternalServerException, InvalidRequestException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information about the specified lifecycle policy.
 */export const getLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.GetLifecyclePolicy" }, GetLifecyclePolicyRequest, GetLifecyclePolicyResponse, [InternalServerException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types:
 * 
 * 
 * 
 * - Custom EBS snapshot policy
 * 
 * 
 * 
 * - Custom EBS-backed AMI policy
 * 
 * 
 * 
 * - Cross-account copy event policy
 * 
 * 
 * 
 * - Default policy for EBS snapshots
 * 
 * 
 * 
 * - Default policy for EBS-backed AMIs
 * 
 * 
 * 
 * 
 * 
 * For more information, see
 * Default policies vs custom policies.
 * 
 * 
 * 
 * 
 * If you create a default policy, you can specify the request parameters either in
 * the request body, or in the PolicyDetails request structure, but not both.
 */export const createLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-01-12", uri: "/policies", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.CreateLifecyclePolicy" }, CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse, [InternalServerException, InvalidRequestException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
