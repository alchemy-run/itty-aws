import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ResourceTag = Schema.Struct({ResourceTagKey: Schema.String, ResourceTagValue: Schema.optional(Schema.String)});
export const ExcludeResourceTags = Schema.Array(ResourceTag);
export const TagKeyList = Schema.Array(Schema.String);
export const DeleteRuleRequest = Schema.Struct({Identifier: Schema.String});
export const DeleteRuleResponse = Schema.Struct({});
export const GetRuleRequest = Schema.Struct({Identifier: Schema.String});
export const ResourceTags = Schema.Array(ResourceTag);
export const ListRulesRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), ResourceType: Schema.String, ResourceTags: Schema.optional(ResourceTags), LockState: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UnlockDelay = Schema.Struct({UnlockDelayValue: Schema.Number, UnlockDelayUnit: Schema.String});
export const LockConfiguration = Schema.Struct({UnlockDelay: UnlockDelay});
export const LockRuleRequest = Schema.Struct({Identifier: Schema.String, LockConfiguration: LockConfiguration});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const UnlockRuleRequest = Schema.Struct({Identifier: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const RetentionPeriod = Schema.Struct({RetentionPeriodValue: Schema.Number, RetentionPeriodUnit: Schema.String});
export const UpdateRuleRequest = Schema.Struct({Identifier: Schema.String, RetentionPeriod: Schema.optional(RetentionPeriod), Description: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ResourceTags: Schema.optional(ResourceTags), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const GetRuleResponse = Schema.Struct({Identifier: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), ResourceTags: Schema.optional(ResourceTags), Status: Schema.optional(Schema.String), LockConfiguration: Schema.optional(LockConfiguration), LockState: Schema.optional(Schema.String), LockEndTime: Schema.optional(Schema.Date), RuleArn: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const LockRuleResponse = Schema.Struct({Identifier: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), ResourceTags: Schema.optional(ResourceTags), Status: Schema.optional(Schema.String), LockConfiguration: Schema.optional(LockConfiguration), LockState: Schema.optional(Schema.String), RuleArn: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const UnlockRuleResponse = Schema.Struct({Identifier: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), ResourceTags: Schema.optional(ResourceTags), Status: Schema.optional(Schema.String), LockConfiguration: Schema.optional(LockConfiguration), LockState: Schema.optional(Schema.String), LockEndTime: Schema.optional(Schema.Date), RuleArn: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const UpdateRuleResponse = Schema.Struct({Identifier: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), Description: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ResourceTags: Schema.optional(ResourceTags), Status: Schema.optional(Schema.String), LockState: Schema.optional(Schema.String), LockEndTime: Schema.optional(Schema.Date), RuleArn: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const RuleSummary = Schema.Struct({Identifier: Schema.optional(Schema.String), Description: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), LockState: Schema.optional(Schema.String), RuleArn: Schema.optional(Schema.String)});
export const RuleSummaryList = Schema.Array(RuleSummary);
export const CreateRuleRequest = Schema.Struct({RetentionPeriod: RetentionPeriod, Description: Schema.optional(Schema.String), Tags: Schema.optional(TagList), ResourceType: Schema.String, ResourceTags: Schema.optional(ResourceTags), LockConfiguration: Schema.optional(LockConfiguration), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const ListRulesResponse = Schema.Struct({Rules: Schema.optional(RuleSummaryList), NextToken: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const CreateRuleResponse = Schema.Struct({Identifier: Schema.optional(Schema.String), RetentionPeriod: Schema.optional(RetentionPeriod), Description: Schema.optional(Schema.String), Tags: Schema.optional(TagList), ResourceType: Schema.optional(Schema.String), ResourceTags: Schema.optional(ResourceTags), Status: Schema.optional(Schema.String), LockConfiguration: Schema.optional(LockConfiguration), LockState: Schema.optional(Schema.String), RuleArn: Schema.optional(Schema.String), ExcludeResourceTags: Schema.optional(ExcludeResourceTags)});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const getRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "GET", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.GetRule" }, GetRuleRequest, GetRuleResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const lockRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules/{Identifier}/lock", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.LockRule" }, LockRuleRequest, LockRuleResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const unlockRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules/{Identifier}/unlock", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UnlockRule" }, UnlockRuleRequest, UnlockRuleResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "PATCH", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.UpdateRule" }, UpdateRuleRequest, UpdateRuleResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules/{Identifier}", method: "DELETE", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.DeleteRule" }, DeleteRuleRequest, DeleteRuleResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listRules = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/list-rules", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.ListRules" }, ListRulesRequest, ListRulesResponse, [InternalServerExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createRule = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-15", uri: "/rules", method: "POST", sdkId: "rbin", sigV4ServiceName: "rbin", name: "AmazonRecycleBin.CreateRule" }, CreateRuleRequest, CreateRuleResponse, [InternalServerExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
