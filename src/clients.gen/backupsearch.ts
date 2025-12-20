import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListSearchJobBackupsInput = Schema.Struct({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const ListSearchJobResultsInput = Schema.Struct({SearchJobIdentifier: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagMap)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap})
const TagResourceResponse = Schema.Struct({})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "TagResource" }, TagResourceRequest, TagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const SearchJobBackupsResult = Schema.Struct({Status: Schema.optional(Schema.String), StatusMessage: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), IndexCreationTime: Schema.optional(Schema.Date), BackupCreationTime: Schema.optional(Schema.Date)})
const SearchJobBackupsResults = Schema.Array(SearchJobBackupsResult)
const ListSearchJobBackupsOutput = Schema.Struct({Results: SearchJobBackupsResults, NextToken: Schema.optional(Schema.String)})
export const ListSearchJobBackups = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/search-jobs/{SearchJobIdentifier}/backups", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "ListSearchJobBackups" }, ListSearchJobBackupsInput, ListSearchJobBackupsOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const S3ResultItem = Schema.Struct({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), ObjectKey: Schema.optional(Schema.String), ObjectSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), ETag: Schema.optional(Schema.String), VersionId: Schema.optional(Schema.String)})
const EBSResultItem = Schema.Struct({BackupResourceArn: Schema.optional(Schema.String), SourceResourceArn: Schema.optional(Schema.String), BackupVaultName: Schema.optional(Schema.String), FileSystemIdentifier: Schema.optional(Schema.String), FilePath: Schema.optional(Schema.String), FileSize: Schema.optional(Schema.Number), CreationTime: Schema.optional(Schema.Date), LastModifiedTime: Schema.optional(Schema.Date)})
const ResultItem = Schema.Union(S3ResultItem, EBSResultItem)
const Results = Schema.Array(ResultItem)
const ListSearchJobResultsOutput = Schema.Struct({Results: Results, NextToken: Schema.optional(Schema.String)})
export const ListSearchJobResults = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/search-jobs/{SearchJobIdentifier}/search-results", method: "GET", sdkId: "BackupSearch", sigV4ServiceName: "backup-search", name: "ListSearchJobResults" }, ListSearchJobResultsInput, ListSearchJobResultsOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
