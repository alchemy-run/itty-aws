import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DescribeReportCreationInput extends Schema.Class<DescribeReportCreationInput>("DescribeReportCreationInput")({}) {}
export const TargetIdFilterList = Schema.Array(Schema.String);
export const RegionFilterList = Schema.Array(Schema.String);
export const ResourceTypeFilterList = Schema.Array(Schema.String);
export const TagKeyFilterList = Schema.Array(Schema.String);
export const GroupBy = Schema.Array(Schema.String);
export const ResourceARNListForGet = Schema.Array(Schema.String);
export const ResourceARNListForTagUntag = Schema.Array(Schema.String);
export const TagKeyListForUntag = Schema.Array(Schema.String);
export class DescribeReportCreationOutput extends Schema.Class<DescribeReportCreationOutput>("DescribeReportCreationOutput")({Status: Schema.optional(Schema.String), S3Location: Schema.optional(Schema.String), StartDate: Schema.optional(Schema.String), ErrorMessage: Schema.optional(Schema.String)}) {}
export class GetComplianceSummaryInput extends Schema.Class<GetComplianceSummaryInput>("GetComplianceSummaryInput")({TargetIdFilters: Schema.optional(TargetIdFilterList), RegionFilters: Schema.optional(RegionFilterList), ResourceTypeFilters: Schema.optional(ResourceTypeFilterList), TagKeyFilters: Schema.optional(TagKeyFilterList), GroupBy: Schema.optional(GroupBy), MaxResults: Schema.optional(Schema.Number), PaginationToken: Schema.optional(Schema.String)}) {}
export class GetTagKeysInput extends Schema.Class<GetTagKeysInput>("GetTagKeysInput")({PaginationToken: Schema.optional(Schema.String)}) {}
export class GetTagValuesInput extends Schema.Class<GetTagValuesInput>("GetTagValuesInput")({PaginationToken: Schema.optional(Schema.String), Key: Schema.String}) {}
export class ListRequiredTagsInput extends Schema.Class<ListRequiredTagsInput>("ListRequiredTagsInput")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class StartReportCreationInput extends Schema.Class<StartReportCreationInput>("StartReportCreationInput")({S3Bucket: Schema.String}) {}
export class StartReportCreationOutput extends Schema.Class<StartReportCreationOutput>("StartReportCreationOutput")({}) {}
export class UntagResourcesInput extends Schema.Class<UntagResourcesInput>("UntagResourcesInput")({ResourceARNList: ResourceARNListForTagUntag, TagKeys: TagKeyListForUntag}) {}
export const TagValueList = Schema.Array(Schema.String);
export class TagFilter extends Schema.Class<TagFilter>("TagFilter")({Key: Schema.optional(Schema.String), Values: Schema.optional(TagValueList)}) {}
export const TagFilterList = Schema.Array(TagFilter);
export const TagKeyList = Schema.Array(Schema.String);
export const TagValuesOutputList = Schema.Array(Schema.String);
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ConstraintViolationException extends Schema.Class<ConstraintViolationException>("ConstraintViolationException")({Message: Schema.optional(Schema.String)}) {}
export class GetResourcesInput extends Schema.Class<GetResourcesInput>("GetResourcesInput")({PaginationToken: Schema.optional(Schema.String), TagFilters: Schema.optional(TagFilterList), ResourcesPerPage: Schema.optional(Schema.Number), TagsPerPage: Schema.optional(Schema.Number), ResourceTypeFilters: Schema.optional(ResourceTypeFilterList), IncludeComplianceDetails: Schema.optional(Schema.Boolean), ExcludeCompliantResources: Schema.optional(Schema.Boolean), ResourceARNList: Schema.optional(ResourceARNListForGet)}) {}
export class GetTagKeysOutput extends Schema.Class<GetTagKeysOutput>("GetTagKeysOutput")({PaginationToken: Schema.optional(Schema.String), TagKeys: Schema.optional(TagKeyList)}) {}
export class GetTagValuesOutput extends Schema.Class<GetTagValuesOutput>("GetTagValuesOutput")({PaginationToken: Schema.optional(Schema.String), TagValues: Schema.optional(TagValuesOutputList)}) {}
export class ConcurrentModificationException extends Schema.Class<ConcurrentModificationException>("ConcurrentModificationException")({Message: Schema.optional(Schema.String)}) {}
export class TagResourcesInput extends Schema.Class<TagResourcesInput>("TagResourcesInput")({ResourceARNList: ResourceARNListForTagUntag, Tags: TagMap}) {}
export const CloudFormationResourceTypes = Schema.Array(Schema.String);
export const ReportingTagKeys = Schema.Array(Schema.String);
export class Summary extends Schema.Class<Summary>("Summary")({LastUpdated: Schema.optional(Schema.String), TargetId: Schema.optional(Schema.String), TargetIdType: Schema.optional(Schema.String), Region: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), NonCompliantResources: Schema.optional(Schema.Number)}) {}
export const SummaryList = Schema.Array(Summary);
export class RequiredTag extends Schema.Class<RequiredTag>("RequiredTag")({ResourceType: Schema.optional(Schema.String), CloudFormationResourceTypes: Schema.optional(CloudFormationResourceTypes), ReportingTagKeys: Schema.optional(ReportingTagKeys)}) {}
export const RequiredTagsForListRequiredTags = Schema.Array(RequiredTag);
export class InternalServiceException extends Schema.Class<InternalServiceException>("InternalServiceException")({Message: Schema.optional(Schema.String)}) {}
export class GetComplianceSummaryOutput extends Schema.Class<GetComplianceSummaryOutput>("GetComplianceSummaryOutput")({SummaryList: Schema.optional(SummaryList), PaginationToken: Schema.optional(Schema.String)}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({Message: Schema.optional(Schema.String)}) {}
export class PaginationTokenExpiredException extends Schema.Class<PaginationTokenExpiredException>("PaginationTokenExpiredException")({Message: Schema.optional(Schema.String)}) {}
export class ListRequiredTagsOutput extends Schema.Class<ListRequiredTagsOutput>("ListRequiredTagsOutput")({RequiredTags: Schema.optional(RequiredTagsForListRequiredTags), NextToken: Schema.optional(Schema.String)}) {}
export class ThrottledException extends Schema.Class<ThrottledException>("ThrottledException")({Message: Schema.optional(Schema.String)}) {}
export class FailureInfo extends Schema.Class<FailureInfo>("FailureInfo")({StatusCode: Schema.optional(Schema.Number), ErrorCode: Schema.optional(Schema.String), ErrorMessage: Schema.optional(Schema.String)}) {}
export const FailedResourcesMap = Schema.Record({key: Schema.String, value: FailureInfo});
export class TagResourcesOutput extends Schema.Class<TagResourcesOutput>("TagResourcesOutput")({FailedResourcesMap: Schema.optional(FailedResourcesMap)}) {}
export class UntagResourcesOutput extends Schema.Class<UntagResourcesOutput>("UntagResourcesOutput")({FailedResourcesMap: Schema.optional(FailedResourcesMap)}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class ComplianceDetails extends Schema.Class<ComplianceDetails>("ComplianceDetails")({NoncompliantKeys: Schema.optional(TagKeyList), KeysWithNoncompliantValues: Schema.optional(TagKeyList), ComplianceStatus: Schema.optional(Schema.Boolean)}) {}
export class ResourceTagMapping extends Schema.Class<ResourceTagMapping>("ResourceTagMapping")({ResourceARN: Schema.optional(Schema.String), Tags: Schema.optional(TagList), ComplianceDetails: Schema.optional(ComplianceDetails)}) {}
export const ResourceTagMappingList = Schema.Array(ResourceTagMapping);
export class GetResourcesOutput extends Schema.Class<GetResourcesOutput>("GetResourcesOutput")({PaginationToken: Schema.optional(Schema.String), ResourceTagMappingList: Schema.optional(ResourceTagMappingList)}) {}

//# Errors
export class ConstraintViolationExceptionError extends Schema.TaggedError<ConstraintViolationExceptionError>()("ConstraintViolationException", ConstraintViolationException.fields) {};
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ConcurrentModificationExceptionError extends Schema.TaggedError<ConcurrentModificationExceptionError>()("ConcurrentModificationException", ConcurrentModificationException.fields) {};
export class ThrottledExceptionError extends Schema.TaggedError<ThrottledExceptionError>()("ThrottledException", ThrottledException.fields) {};
export class PaginationTokenExpiredExceptionError extends Schema.TaggedError<PaginationTokenExpiredExceptionError>()("PaginationTokenExpiredException", PaginationTokenExpiredException.fields) {};

//# Operations
export const describeReportCreation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/DescribeReportCreation", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation" }, DescribeReportCreationInput, DescribeReportCreationOutput, [ConstraintViolationExceptionError, InternalServiceExceptionError, InvalidParameterExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getComplianceSummary = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/GetComplianceSummary", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary" }, GetComplianceSummaryInput, GetComplianceSummaryOutput, [ConstraintViolationExceptionError, InternalServiceExceptionError, InvalidParameterExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTagKeys = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/GetTagKeys", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetTagKeys" }, GetTagKeysInput, GetTagKeysOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, PaginationTokenExpiredExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTagValues = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/GetTagValues", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetTagValues" }, GetTagValuesInput, GetTagValuesOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, PaginationTokenExpiredExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRequiredTags = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/ListRequiredTags", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.ListRequiredTags" }, ListRequiredTagsInput, ListRequiredTagsOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, PaginationTokenExpiredExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startReportCreation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/StartReportCreation", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.StartReportCreation" }, StartReportCreationInput, StartReportCreationOutput, [ConcurrentModificationExceptionError, ConstraintViolationExceptionError, InternalServiceExceptionError, InvalidParameterExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResources = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/TagResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.TagResources" }, TagResourcesInput, TagResourcesOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResources = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/UntagResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.UntagResources" }, UntagResourcesInput, UntagResourcesOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResources = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-26", uri: "/GetResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetResources" }, GetResourcesInput, GetResourcesOutput, [InternalServiceExceptionError, InvalidParameterExceptionError, PaginationTokenExpiredExceptionError, ThrottledExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
