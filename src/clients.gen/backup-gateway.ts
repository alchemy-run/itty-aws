import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceARN: S.String, TagKeys: TagKeys}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const Tags = S.Array(Tag);
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({ResourceArn: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceARN: S.String, Tags: Tags}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({ResourceARN: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({ErrorCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({ResourceARN: S.optional(S.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
