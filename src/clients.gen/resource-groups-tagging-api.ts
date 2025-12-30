import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeReportCreationInput extends S.Class<DescribeReportCreationInput>("DescribeReportCreationInput")({}) {}
export const TargetIdFilterList = S.Array(S.String);
export const RegionFilterList = S.Array(S.String);
export const ResourceTypeFilterList = S.Array(S.String);
export const TagKeyFilterList = S.Array(S.String);
export const GroupBy = S.Array(S.String);
export const ResourceARNListForGet = S.Array(S.String);
export const ResourceARNListForTagUntag = S.Array(S.String);
export const TagKeyListForUntag = S.Array(S.String);
export class DescribeReportCreationOutput extends S.Class<DescribeReportCreationOutput>("DescribeReportCreationOutput")({Status: S.optional(S.String), S3Location: S.optional(S.String), StartDate: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class GetComplianceSummaryInput extends S.Class<GetComplianceSummaryInput>("GetComplianceSummaryInput")({TargetIdFilters: S.optional(TargetIdFilterList), RegionFilters: S.optional(RegionFilterList), ResourceTypeFilters: S.optional(ResourceTypeFilterList), TagKeyFilters: S.optional(TagKeyFilterList), GroupBy: S.optional(GroupBy), MaxResults: S.optional(S.Number), PaginationToken: S.optional(S.String)}) {}
export class GetTagKeysInput extends S.Class<GetTagKeysInput>("GetTagKeysInput")({PaginationToken: S.optional(S.String)}) {}
export class GetTagValuesInput extends S.Class<GetTagValuesInput>("GetTagValuesInput")({PaginationToken: S.optional(S.String), Key: S.String}) {}
export class ListRequiredTagsInput extends S.Class<ListRequiredTagsInput>("ListRequiredTagsInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class StartReportCreationInput extends S.Class<StartReportCreationInput>("StartReportCreationInput")({S3Bucket: S.String}) {}
export class StartReportCreationOutput extends S.Class<StartReportCreationOutput>("StartReportCreationOutput")({}) {}
export class UntagResourcesInput extends S.Class<UntagResourcesInput>("UntagResourcesInput")({ResourceARNList: ResourceARNListForTagUntag, TagKeys: TagKeyListForUntag}) {}
export const TagValueList = S.Array(S.String);
export class TagFilter extends S.Class<TagFilter>("TagFilter")({Key: S.optional(S.String), Values: S.optional(TagValueList)}) {}
export const TagFilterList = S.Array(TagFilter);
export const TagKeyList = S.Array(S.String);
export const TagValuesOutputList = S.Array(S.String);
export const TagMap = S.Record({key: S.String, value: S.String});
export class GetResourcesInput extends S.Class<GetResourcesInput>("GetResourcesInput")({PaginationToken: S.optional(S.String), TagFilters: S.optional(TagFilterList), ResourcesPerPage: S.optional(S.Number), TagsPerPage: S.optional(S.Number), ResourceTypeFilters: S.optional(ResourceTypeFilterList), IncludeComplianceDetails: S.optional(S.Boolean), ExcludeCompliantResources: S.optional(S.Boolean), ResourceARNList: S.optional(ResourceARNListForGet)}) {}
export class GetTagKeysOutput extends S.Class<GetTagKeysOutput>("GetTagKeysOutput")({PaginationToken: S.optional(S.String), TagKeys: S.optional(TagKeyList)}) {}
export class GetTagValuesOutput extends S.Class<GetTagValuesOutput>("GetTagValuesOutput")({PaginationToken: S.optional(S.String), TagValues: S.optional(TagValuesOutputList)}) {}
export class TagResourcesInput extends S.Class<TagResourcesInput>("TagResourcesInput")({ResourceARNList: ResourceARNListForTagUntag, Tags: TagMap}) {}
export const CloudFormationResourceTypes = S.Array(S.String);
export const ReportingTagKeys = S.Array(S.String);
export class Summary extends S.Class<Summary>("Summary")({LastUpdated: S.optional(S.String), TargetId: S.optional(S.String), TargetIdType: S.optional(S.String), Region: S.optional(S.String), ResourceType: S.optional(S.String), NonCompliantResources: S.optional(S.Number)}) {}
export const SummaryList = S.Array(Summary);
export class RequiredTag extends S.Class<RequiredTag>("RequiredTag")({ResourceType: S.optional(S.String), CloudFormationResourceTypes: S.optional(CloudFormationResourceTypes), ReportingTagKeys: S.optional(ReportingTagKeys)}) {}
export const RequiredTagsForListRequiredTags = S.Array(RequiredTag);
export class GetComplianceSummaryOutput extends S.Class<GetComplianceSummaryOutput>("GetComplianceSummaryOutput")({SummaryList: S.optional(SummaryList), PaginationToken: S.optional(S.String)}) {}
export class ListRequiredTagsOutput extends S.Class<ListRequiredTagsOutput>("ListRequiredTagsOutput")({RequiredTags: S.optional(RequiredTagsForListRequiredTags), NextToken: S.optional(S.String)}) {}
export class FailureInfo extends S.Class<FailureInfo>("FailureInfo")({StatusCode: S.optional(S.Number), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const FailedResourcesMap = S.Record({key: S.String, value: FailureInfo});
export class TagResourcesOutput extends S.Class<TagResourcesOutput>("TagResourcesOutput")({FailedResourcesMap: S.optional(FailedResourcesMap)}) {}
export class UntagResourcesOutput extends S.Class<UntagResourcesOutput>("UntagResourcesOutput")({FailedResourcesMap: S.optional(FailedResourcesMap)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class ComplianceDetails extends S.Class<ComplianceDetails>("ComplianceDetails")({NoncompliantKeys: S.optional(TagKeyList), KeysWithNoncompliantValues: S.optional(TagKeyList), ComplianceStatus: S.optional(S.Boolean)}) {}
export class ResourceTagMapping extends S.Class<ResourceTagMapping>("ResourceTagMapping")({ResourceARN: S.optional(S.String), Tags: S.optional(TagList), ComplianceDetails: S.optional(ComplianceDetails)}) {}
export const ResourceTagMappingList = S.Array(ResourceTagMapping);
export class GetResourcesOutput extends S.Class<GetResourcesOutput>("GetResourcesOutput")({PaginationToken: S.optional(S.String), ResourceTagMappingList: S.optional(ResourceTagMappingList)}) {}

//# Errors
export class ConstraintViolationException extends S.TaggedError<ConstraintViolationException>()("ConstraintViolationException", {Message: S.optional(S.String)}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {Message: S.optional(S.String)}) {};
export class ThrottledException extends S.TaggedError<ThrottledException>()("ThrottledException", {}) {};
export class PaginationTokenExpiredException extends S.TaggedError<PaginationTokenExpiredException>()("PaginationTokenExpiredException", {}) {};

//# Operations
export const describeReportCreation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/DescribeReportCreation", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation" }, DescribeReportCreationInput, DescribeReportCreationOutput, [ConstraintViolationException, InternalServiceException, InvalidParameterException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getComplianceSummary = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/GetComplianceSummary", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary" }, GetComplianceSummaryInput, GetComplianceSummaryOutput, [ConstraintViolationException, InternalServiceException, InvalidParameterException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTagKeys = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/GetTagKeys", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetTagKeys" }, GetTagKeysInput, GetTagKeysOutput, [InternalServiceException, InvalidParameterException, PaginationTokenExpiredException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTagValues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/GetTagValues", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetTagValues" }, GetTagValuesInput, GetTagValuesOutput, [InternalServiceException, InvalidParameterException, PaginationTokenExpiredException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRequiredTags = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/ListRequiredTags", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.ListRequiredTags" }, ListRequiredTagsInput, ListRequiredTagsOutput, [InternalServiceException, InvalidParameterException, PaginationTokenExpiredException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startReportCreation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/StartReportCreation", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.StartReportCreation" }, StartReportCreationInput, StartReportCreationOutput, [ConcurrentModificationException, ConstraintViolationException, InternalServiceException, InvalidParameterException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/TagResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.TagResources" }, TagResourcesInput, TagResourcesOutput, [InternalServiceException, InvalidParameterException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/UntagResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.UntagResources" }, UntagResourcesInput, UntagResourcesOutput, [InternalServiceException, InvalidParameterException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-26", uri: "/GetResources", method: "POST", sdkId: "Resource Groups Tagging API", sigV4ServiceName: "tagging", name: "ResourceGroupsTaggingAPI_20170126.GetResources" }, GetResourcesInput, GetResourcesOutput, [InternalServiceException, InvalidParameterException, PaginationTokenExpiredException, ThrottledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
