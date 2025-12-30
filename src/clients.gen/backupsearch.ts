import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListSearchJobBackupsInput extends Schema.Class<ListSearchJobBackupsInput>("ListSearchJobBackupsInput")({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListSearchJobResultsInput extends Schema.Class<ListSearchJobResultsInput>("ListSearchJobResultsInput")({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(TagMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: TagMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class SearchJobBackupsResult extends Schema.Class<SearchJobBackupsResult>("SearchJobBackupsResult")({Status: Schema.optional(Schema.String), StatusMessage: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), IndexCreationTime: Schema.optional(Schema.Date), BackupCreationTime: Schema.optional(Schema.Date)}) {}
export const SearchJobBackupsResults = Schema.Array(SearchJobBackupsResult);
export class ListSearchJobBackupsOutput extends Schema.Class<ListSearchJobBackupsOutput>("ListSearchJobBackupsOutput")({Results: SearchJobBackupsResults, NextToken: Schema.optional(Schema.String)}) {}
export class S3ResultItem extends Schema.Class<S3ResultItem>("S3ResultItem")({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), ObjectKey: Schema.optional(Schema.String), ObjectSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), ETag: Schema.optional(Schema.String), VersionId: Schema.optional(Schema.String)}) {}
export class EBSResultItem extends Schema.Class<EBSResultItem>("EBSResultItem")({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), FileSystemIdentifier: Schema.optional(Schema.String), FilePath: Schema.optional(Schema.String), FileSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), LastModifiedTime: Schema.optional(Schema.Date)}) {}
export const ResultItem = Schema.Union(S3ResultItem, EBSResultItem);
export const Results = Schema.Array(ResultItem);
export class ListSearchJobResultsOutput extends Schema.Class<ListSearchJobResultsOutput>("ListSearchJobResultsOutput")({Results: Results, NextToken: Schema.optional(Schema.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobBackups = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/backups", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobBackups" }, ListSearchJobBackupsInput, ListSearchJobBackupsOutput, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobResults = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/search-results", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobResults" }, ListSearchJobResultsInput, ListSearchJobResultsOutput, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
