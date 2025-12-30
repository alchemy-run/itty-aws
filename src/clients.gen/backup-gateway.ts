import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({ResourceARN: Schema.String, TagKeys: TagKeys}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const Tags = Schema.Array(Tag);
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({ResourceArn: Schema.optional(Schema.String), Tags: Schema.optional(Tags)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({ResourceARN: Schema.String, Tags: Tags}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({ResourceARN: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({ErrorCode: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({ResourceARN: Schema.optional(Schema.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
