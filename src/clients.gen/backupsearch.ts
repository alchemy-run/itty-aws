import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListSearchJobBackupsInput = Schema.Struct({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListSearchJobResultsInput = Schema.Struct({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const SearchJobBackupsResult = Schema.Struct({Status: Schema.optional(Schema.String), StatusMessage: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), IndexCreationTime: Schema.optional(Schema.Date), BackupCreationTime: Schema.optional(Schema.Date)});
export const SearchJobBackupsResults = Schema.Array(SearchJobBackupsResult);
export const ListSearchJobBackupsOutput = Schema.Struct({Results: SearchJobBackupsResults, NextToken: Schema.optional(Schema.String)});
export const S3ResultItem = Schema.Struct({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), ObjectKey: Schema.optional(Schema.String), ObjectSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), ETag: Schema.optional(Schema.String), VersionId: Schema.optional(Schema.String)});
export const EBSResultItem = Schema.Struct({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), FileSystemIdentifier: Schema.optional(Schema.String), FilePath: Schema.optional(Schema.String), FileSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), LastModifiedTime: Schema.optional(Schema.Date)});
export const ResultItem = Schema.Union(S3ResultItem, EBSResultItem);
export const Results = Schema.Array(ResultItem);
export const ListSearchJobResultsOutput = Schema.Struct({Results: Results, NextToken: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobBackups = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/backups", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobBackups" }, ListSearchJobBackupsInput, ListSearchJobBackupsOutput, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSearchJobResults = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/search-jobs/{SearchJobIdentifier}/search-results", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "CryoBackupSearchService.ListSearchJobResults" }, ListSearchJobResultsInput, ListSearchJobResultsOutput, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
