import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({ResourceTagKey: S.String, ResourceTagValue: S.optional(S.String)}) {}
export const ExcludeResourceTags = S.Array(ResourceTag);
export const TagKeyList = S.Array(S.String);
export class DeleteRuleRequest extends S.Class<DeleteRuleRequest>("DeleteRuleRequest")({Identifier: S.String}) {}
export class DeleteRuleResponse extends S.Class<DeleteRuleResponse>("DeleteRuleResponse")({}) {}
export class GetRuleRequest extends S.Class<GetRuleRequest>("GetRuleRequest")({Identifier: S.String}) {}
export const ResourceTags = S.Array(ResourceTag);
export class ListRulesRequest extends S.Class<ListRulesRequest>("ListRulesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), ResourceType: S.String, ResourceTags: S.optional(ResourceTags), LockState: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UnlockDelay extends S.Class<UnlockDelay>("UnlockDelay")({UnlockDelayValue: S.Number, UnlockDelayUnit: S.String}) {}
export class LockConfiguration extends S.Class<LockConfiguration>("LockConfiguration")({UnlockDelay: UnlockDelay}) {}
export class LockRuleRequest extends S.Class<LockRuleRequest>("LockRuleRequest")({Identifier: S.String, LockConfiguration: LockConfiguration}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UnlockRuleRequest extends S.Class<UnlockRuleRequest>("UnlockRuleRequest")({Identifier: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class RetentionPeriod extends S.Class<RetentionPeriod>("RetentionPeriod")({RetentionPeriodValue: S.Number, RetentionPeriodUnit: S.String}) {}
export class UpdateRuleRequest extends S.Class<UpdateRuleRequest>("UpdateRuleRequest")({Identifier: S.String, RetentionPeriod: S.optional(RetentionPeriod), Description: S.optional(S.String), ResourceType: S.optional(S.String), ResourceTags: S.optional(ResourceTags), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class GetRuleResponse extends S.Class<GetRuleResponse>("GetRuleResponse")({Identifier: S.optional(S.String), Description: S.optional(S.String), ResourceType: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), ResourceTags: S.optional(ResourceTags), Status: S.optional(S.String), LockConfiguration: S.optional(LockConfiguration), LockState: S.optional(S.String), LockEndTime: S.optional(S.Date), RuleArn: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class LockRuleResponse extends S.Class<LockRuleResponse>("LockRuleResponse")({Identifier: S.optional(S.String), Description: S.optional(S.String), ResourceType: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), ResourceTags: S.optional(ResourceTags), Status: S.optional(S.String), LockConfiguration: S.optional(LockConfiguration), LockState: S.optional(S.String), RuleArn: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class UnlockRuleResponse extends S.Class<UnlockRuleResponse>("UnlockRuleResponse")({Identifier: S.optional(S.String), Description: S.optional(S.String), ResourceType: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), ResourceTags: S.optional(ResourceTags), Status: S.optional(S.String), LockConfiguration: S.optional(LockConfiguration), LockState: S.optional(S.String), LockEndTime: S.optional(S.Date), RuleArn: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class UpdateRuleResponse extends S.Class<UpdateRuleResponse>("UpdateRuleResponse")({Identifier: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), Description: S.optional(S.String), ResourceType: S.optional(S.String), ResourceTags: S.optional(ResourceTags), Status: S.optional(S.String), LockState: S.optional(S.String), LockEndTime: S.optional(S.Date), RuleArn: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class RuleSummary extends S.Class<RuleSummary>("RuleSummary")({Identifier: S.optional(S.String), Description: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), LockState: S.optional(S.String), RuleArn: S.optional(S.String)}) {}
export const RuleSummaryList = S.Array(RuleSummary);
export class CreateRuleRequest extends S.Class<CreateRuleRequest>("CreateRuleRequest")({RetentionPeriod: RetentionPeriod, Description: S.optional(S.String), Tags: S.optional(TagList), ResourceType: S.String, ResourceTags: S.optional(ResourceTags), LockConfiguration: S.optional(LockConfiguration), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}
export class ListRulesResponse extends S.Class<ListRulesResponse>("ListRulesResponse")({Rules: S.optional(RuleSummaryList), NextToken: S.optional(S.String)}) {}
export class CreateRuleResponse extends S.Class<CreateRuleResponse>("CreateRuleResponse")({Identifier: S.optional(S.String), RetentionPeriod: S.optional(RetentionPeriod), Description: S.optional(S.String), Tags: S.optional(TagList), ResourceType: S.optional(S.String), ResourceTags: S.optional(ResourceTags), Status: S.optional(S.String), LockConfiguration: S.optional(LockConfiguration), LockState: S.optional(S.String), RuleArn: S.optional(S.String), ExcludeResourceTags: S.optional(ExcludeResourceTags)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String), Reason: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Gets information about a Recycle Bin retention rule.
 */export const getRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "GET", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.GetRule" }, GetRuleRequest, GetRuleResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags assigned to a retention rule.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Locks a Region-level retention rule. A locked retention rule can't be modified or
 * deleted.
 * 
 * 
 * 
 * 
 * You can't lock tag-level retention rules, or Region-level retention rules that
 * have exclusion tags.
 */export const lockRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules/{Identifier}/lock", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.LockRule" }, LockRuleRequest, LockRuleResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted
 * only after the unlock delay period expires.
 */export const unlockRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules/{Identifier}/unlock", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UnlockRule" }, UnlockRuleRequest, UnlockRuleResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unassigns a tag from a retention rule.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Recycle Bin retention rule. You can update a retention rule's description,
 * resource tags, and retention period at any time after creation. You can't update a retention rule's
 * resource type after creation. For more information, see
 * Update Recycle Bin retention rules in the *Amazon Elastic Compute Cloud User Guide*.
 */export const updateRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UpdateRule" }, UpdateRuleRequest, UpdateRuleResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Recycle Bin retention rule. For more information, see
 * Delete Recycle Bin retention rules in the *Amazon Elastic Compute Cloud User Guide*.
 */export const deleteRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "DELETE", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.DeleteRule" }, DeleteRuleRequest, DeleteRuleResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Recycle Bin retention rules in the Region.
 */export const listRules = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/list-rules", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.ListRules" }, ListRulesRequest, ListRulesResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns tags to the specified retention rule.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Recycle Bin retention rule. You can create two types of retention rules:
 * 
 * 
 * 
 * - **Tag-level retention rules** - These retention rules use
 * resource tags to identify the resources to protect. For each retention rule, you specify one or
 * more tag key and value pairs. Resources (of the specified type) that have at least one of these
 * tag key and value pairs are automatically retained in the Recycle Bin upon deletion. Use this
 * type of retention rule to protect specific resources in your account based on their tags.
 * 
 * 
 * 
 * - **Region-level retention rules** - These retention rules,
 * by default, apply to all of the resources (of the specified type) in the Region, even if the
 * resources are not tagged. However, you can specify exclusion tags to exclude resources that have
 * specific tags. Use this type of retention rule to protect all resources of a specific type in a
 * Region.
 * 
 * 
 * 
 * 
 * 
 * For more information, see
 * Create Recycle Bin retention rules in the *Amazon EBS User Guide*.
 */export const createRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-15", uri: "/rules", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.CreateRule" }, CreateRuleRequest, CreateRuleResponse, [InternalServerException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
