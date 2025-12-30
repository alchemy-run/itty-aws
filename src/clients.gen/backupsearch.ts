import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListSearchJobBackupsInput extends S.Class<ListSearchJobBackupsInput>("ListSearchJobBackupsInput")({SearchJobIdentifier: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListSearchJobResultsInput extends S.Class<ListSearchJobResultsInput>("ListSearchJobResultsInput")({SearchJobIdentifier: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class SearchJobBackupsResult extends S.Class<SearchJobBackupsResult>("SearchJobBackupsResult")({Status: S.optional(S.String), StatusMessage: S.optional(S.String), ResourceType: S.optional(S.String), BackupResourceArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), IndexCreationTime: S.optional(S.Date), BackupCreationTime: S.optional(S.Date)}) {}
export const SearchJobBackupsResults = S.Array(SearchJobBackupsResult);
export class ListSearchJobBackupsOutput extends S.Class<ListSearchJobBackupsOutput>("ListSearchJobBackupsOutput")({Results: SearchJobBackupsResults, NextToken: S.optional(S.String)}) {}
export class S3ResultItem extends S.Class<S3ResultItem>("S3ResultItem")({BackupResourceArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), BackupVaultName: S.optional(S.String), ObjectKey: S.optional(S.String), ObjectSize: S.optional(S.Number), CreationTime: S.optional(S.Date), ETag: S.optional(S.String), VersionId: S.optional(S.String)}) {}
export class EBSResultItem extends S.Class<EBSResultItem>("EBSResultItem")({BackupResourceArn: S.optional(S.String), SourceResourceArn: S.optional(S.String), BackupVaultName: S.optional(S.String), FileSystemIdentifier: S.optional(S.String), FilePath: S.optional(S.String), FileSize: S.optional(S.Number), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export const ResultItem = S.Union(S3ResultItem, EBSResultItem);
export const Results = S.Array(ResultItem);
export class ListSearchJobResultsOutput extends S.Class<ListSearchJobResultsOutput>("ListSearchJobResultsOutput")({Results: Results, NextToken: S.optional(S.String)}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobBackups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/backups", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobBackups" }, ListSearchJobBackupsInput, ListSearchJobBackupsOutput, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobResults = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/search-results", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobResults" }, ListSearchJobResultsInput, ListSearchJobResultsOutput, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
