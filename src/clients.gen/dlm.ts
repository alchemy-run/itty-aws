import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const PolicyIdList = Schema.Array(Schema.String);
export const ResourceTypeValuesList = Schema.Array(Schema.String);
export const TargetTagsFilterList = Schema.Array(Schema.String);
export const TagsToAddFilterList = Schema.Array(Schema.String);
export const TagKeyList = Schema.Array(Schema.String);
export class DeleteLifecyclePolicyRequest extends Schema.Class<DeleteLifecyclePolicyRequest>("DeleteLifecyclePolicyRequest")({PolicyId: Schema.String}) {}
export class DeleteLifecyclePolicyResponse extends Schema.Class<DeleteLifecyclePolicyResponse>("DeleteLifecyclePolicyResponse")({}) {}
export class GetLifecyclePoliciesRequest extends Schema.Class<GetLifecyclePoliciesRequest>("GetLifecyclePoliciesRequest")({PolicyIds: Schema.optional(PolicyIdList), State: Schema.optional(Schema.String), ResourceTypes: Schema.optional(ResourceTypeValuesList), TargetTags: Schema.optional(TargetTagsFilterList), TagsToAdd: Schema.optional(TagsToAddFilterList), DefaultPolicyType: Schema.optional(Schema.String)}) {}
export class GetLifecyclePolicyRequest extends Schema.Class<GetLifecyclePolicyRequest>("GetLifecyclePolicyRequest")({PolicyId: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ResourceLocationList = Schema.Array(Schema.String);
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TargetTagList = Schema.Array(Tag);
export const TagsToAddList = Schema.Array(Tag);
export const VariableTagsList = Schema.Array(Tag);
export const TimesList = Schema.Array(Schema.String);
export const StagesList = Schema.Array(Schema.String);
export class Script extends Schema.Class<Script>("Script")({Stages: Schema.optional(StagesList), ExecutionHandlerService: Schema.optional(Schema.String), ExecutionHandler: Schema.String, ExecuteOperationOnScriptFailure: Schema.optional(Schema.Boolean), ExecutionTimeout: Schema.optional(Schema.Number), MaximumRetryCount: Schema.optional(Schema.Number)}) {}
export const ScriptsList = Schema.Array(Script);
export class CreateRule extends Schema.Class<CreateRule>("CreateRule")({Location: Schema.optional(Schema.String), Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String), Times: Schema.optional(TimesList), CronExpression: Schema.optional(Schema.String), Scripts: Schema.optional(ScriptsList)}) {}
export class RetainRule extends Schema.Class<RetainRule>("RetainRule")({Count: Schema.optional(Schema.Number), Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String)}) {}
export const AvailabilityZoneList = Schema.Array(Schema.String);
export class FastRestoreRule extends Schema.Class<FastRestoreRule>("FastRestoreRule")({Count: Schema.optional(Schema.Number), Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String), AvailabilityZones: AvailabilityZoneList}) {}
export class CrossRegionCopyRetainRule extends Schema.Class<CrossRegionCopyRetainRule>("CrossRegionCopyRetainRule")({Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String)}) {}
export class CrossRegionCopyDeprecateRule extends Schema.Class<CrossRegionCopyDeprecateRule>("CrossRegionCopyDeprecateRule")({Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String)}) {}
export class CrossRegionCopyRule extends Schema.Class<CrossRegionCopyRule>("CrossRegionCopyRule")({TargetRegion: Schema.optional(Schema.String), Target: Schema.optional(Schema.String), Encrypted: Schema.Boolean, CmkArn: Schema.optional(Schema.String), CopyTags: Schema.optional(Schema.Boolean), RetainRule: Schema.optional(CrossRegionCopyRetainRule), DeprecateRule: Schema.optional(CrossRegionCopyDeprecateRule)}) {}
export const CrossRegionCopyRules = Schema.Array(CrossRegionCopyRule);
export const ShareTargetAccountList = Schema.Array(Schema.String);
export class ShareRule extends Schema.Class<ShareRule>("ShareRule")({TargetAccounts: ShareTargetAccountList, UnshareInterval: Schema.optional(Schema.Number), UnshareIntervalUnit: Schema.optional(Schema.String)}) {}
export const ShareRules = Schema.Array(ShareRule);
export class DeprecateRule extends Schema.Class<DeprecateRule>("DeprecateRule")({Count: Schema.optional(Schema.Number), Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String)}) {}
export class RetentionArchiveTier extends Schema.Class<RetentionArchiveTier>("RetentionArchiveTier")({Count: Schema.optional(Schema.Number), Interval: Schema.optional(Schema.Number), IntervalUnit: Schema.optional(Schema.String)}) {}
export class ArchiveRetainRule extends Schema.Class<ArchiveRetainRule>("ArchiveRetainRule")({RetentionArchiveTier: RetentionArchiveTier}) {}
export class ArchiveRule extends Schema.Class<ArchiveRule>("ArchiveRule")({RetainRule: ArchiveRetainRule}) {}
export class Schedule extends Schema.Class<Schedule>("Schedule")({Name: Schema.optional(Schema.String), CopyTags: Schema.optional(Schema.Boolean), TagsToAdd: Schema.optional(TagsToAddList), VariableTags: Schema.optional(VariableTagsList), CreateRule: Schema.optional(CreateRule), RetainRule: Schema.optional(RetainRule), FastRestoreRule: Schema.optional(FastRestoreRule), CrossRegionCopyRules: Schema.optional(CrossRegionCopyRules), ShareRules: Schema.optional(ShareRules), DeprecateRule: Schema.optional(DeprecateRule), ArchiveRule: Schema.optional(ArchiveRule)}) {}
export const ScheduleList = Schema.Array(Schedule);
export const ExcludeDataVolumeTagList = Schema.Array(Tag);
export class Parameters extends Schema.Class<Parameters>("Parameters")({ExcludeBootVolume: Schema.optional(Schema.Boolean), NoReboot: Schema.optional(Schema.Boolean), ExcludeDataVolumeTags: Schema.optional(ExcludeDataVolumeTagList)}) {}
export const SnapshotOwnerList = Schema.Array(Schema.String);
export class EventParameters extends Schema.Class<EventParameters>("EventParameters")({EventType: Schema.String, SnapshotOwner: SnapshotOwnerList, DescriptionRegex: Schema.String}) {}
export class EventSource extends Schema.Class<EventSource>("EventSource")({Type: Schema.String, Parameters: Schema.optional(EventParameters)}) {}
export class EncryptionConfiguration extends Schema.Class<EncryptionConfiguration>("EncryptionConfiguration")({Encrypted: Schema.Boolean, CmkArn: Schema.optional(Schema.String)}) {}
export class CrossRegionCopyAction extends Schema.Class<CrossRegionCopyAction>("CrossRegionCopyAction")({Target: Schema.String, EncryptionConfiguration: EncryptionConfiguration, RetainRule: Schema.optional(CrossRegionCopyRetainRule)}) {}
export const CrossRegionCopyActionList = Schema.Array(CrossRegionCopyAction);
export class Action extends Schema.Class<Action>("Action")({Name: Schema.String, CrossRegionCopy: CrossRegionCopyActionList}) {}
export const ActionList = Schema.Array(Action);
export class CrossRegionCopyTarget extends Schema.Class<CrossRegionCopyTarget>("CrossRegionCopyTarget")({TargetRegion: Schema.optional(Schema.String)}) {}
export const CrossRegionCopyTargetList = Schema.Array(CrossRegionCopyTarget);
export const ExcludeVolumeTypesList = Schema.Array(Schema.String);
export const ExcludeTagsList = Schema.Array(Tag);
export class Exclusions extends Schema.Class<Exclusions>("Exclusions")({ExcludeBootVolumes: Schema.optional(Schema.Boolean), ExcludeVolumeTypes: Schema.optional(ExcludeVolumeTypesList), ExcludeTags: Schema.optional(ExcludeTagsList)}) {}
export class PolicyDetails extends Schema.Class<PolicyDetails>("PolicyDetails")({PolicyType: Schema.optional(Schema.String), ResourceTypes: Schema.optional(ResourceTypeValuesList), ResourceLocations: Schema.optional(ResourceLocationList), TargetTags: Schema.optional(TargetTagList), Schedules: Schema.optional(ScheduleList), Parameters: Schema.optional(Parameters), EventSource: Schema.optional(EventSource), Actions: Schema.optional(ActionList), PolicyLanguage: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), CreateInterval: Schema.optional(Schema.Number), RetainInterval: Schema.optional(Schema.Number), CopyTags: Schema.optional(Schema.Boolean), CrossRegionCopyTargets: Schema.optional(CrossRegionCopyTargetList), ExtendDeletion: Schema.optional(Schema.Boolean), Exclusions: Schema.optional(Exclusions)}) {}
export class UpdateLifecyclePolicyRequest extends Schema.Class<UpdateLifecyclePolicyRequest>("UpdateLifecyclePolicyRequest")({PolicyId: Schema.String, ExecutionRoleArn: Schema.optional(Schema.String), State: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), PolicyDetails: Schema.optional(PolicyDetails), CreateInterval: Schema.optional(Schema.Number), RetainInterval: Schema.optional(Schema.Number), CopyTags: Schema.optional(Schema.Boolean), ExtendDeletion: Schema.optional(Schema.Boolean), CrossRegionCopyTargets: Schema.optional(CrossRegionCopyTargetList), Exclusions: Schema.optional(Exclusions)}) {}
export class UpdateLifecyclePolicyResponse extends Schema.Class<UpdateLifecyclePolicyResponse>("UpdateLifecyclePolicyResponse")({}) {}
export const ParameterList = Schema.Array(Schema.String);
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String), Code: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(TagMap)}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({Message: Schema.optional(Schema.String), Code: Schema.optional(Schema.String), RequiredParameters: Schema.optional(ParameterList), MutuallyExclusiveParameters: Schema.optional(ParameterList)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String), Code: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ResourceIds: Schema.optional(PolicyIdList)}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({Message: Schema.optional(Schema.String), Code: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)}) {}
export class LifecyclePolicySummary extends Schema.Class<LifecyclePolicySummary>("LifecyclePolicySummary")({PolicyId: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), State: Schema.optional(Schema.String), Tags: Schema.optional(TagMap), PolicyType: Schema.optional(Schema.String), DefaultPolicy: Schema.optional(Schema.Boolean)}) {}
export const LifecyclePolicySummaryList = Schema.Array(LifecyclePolicySummary);
export class LifecyclePolicy extends Schema.Class<LifecyclePolicy>("LifecyclePolicy")({PolicyId: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), State: Schema.optional(Schema.String), StatusMessage: Schema.optional(Schema.String), ExecutionRoleArn: Schema.optional(Schema.String), DateCreated: Schema.optional(Schema.Date), DateModified: Schema.optional(Schema.Date), PolicyDetails: Schema.optional(PolicyDetails), Tags: Schema.optional(TagMap), PolicyArn: Schema.optional(Schema.String), DefaultPolicy: Schema.optional(Schema.Boolean)}) {}
export class GetLifecyclePoliciesResponse extends Schema.Class<GetLifecyclePoliciesResponse>("GetLifecyclePoliciesResponse")({Policies: Schema.optional(LifecyclePolicySummaryList)}) {}
export class GetLifecyclePolicyResponse extends Schema.Class<GetLifecyclePolicyResponse>("GetLifecyclePolicyResponse")({Policy: Schema.optional(LifecyclePolicy)}) {}
export class CreateLifecyclePolicyRequest extends Schema.Class<CreateLifecyclePolicyRequest>("CreateLifecyclePolicyRequest")({ExecutionRoleArn: Schema.String, Description: Schema.String, State: Schema.String, PolicyDetails: Schema.optional(PolicyDetails), Tags: Schema.optional(TagMap), DefaultPolicy: Schema.optional(Schema.String), CreateInterval: Schema.optional(Schema.Number), RetainInterval: Schema.optional(Schema.Number), CopyTags: Schema.optional(Schema.Boolean), ExtendDeletion: Schema.optional(Schema.Boolean), CrossRegionCopyTargets: Schema.optional(CrossRegionCopyTargetList), Exclusions: Schema.optional(Exclusions)}) {}
export class CreateLifecyclePolicyResponse extends Schema.Class<CreateLifecyclePolicyResponse>("CreateLifecyclePolicyResponse")({PolicyId: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const deleteLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "DELETE", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse, [InternalServerExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "PATCH", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.UpdateLifecyclePolicy" }, UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse, [InternalServerExceptionError, InvalidRequestExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getLifecyclePolicies = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/policies", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.GetLifecyclePolicies" }, GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse, [InternalServerExceptionError, InvalidRequestExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/policies/{PolicyId}", method: "GET", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.GetLifecyclePolicy" }, GetLifecyclePolicyRequest, GetLifecyclePolicyResponse, [InternalServerExceptionError, LimitExceededExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-01-12", uri: "/policies", method: "POST", sdkId: "DLM", sigV4ServiceName: "dlm", name: "dlm_20180112.CreateLifecyclePolicy" }, CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse, [InternalServerExceptionError, InvalidRequestExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
