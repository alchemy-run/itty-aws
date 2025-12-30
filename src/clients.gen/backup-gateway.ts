import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeys});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const Tags = Schema.Array(Tag);
export const ListTagsForResourceOutput = Schema.Struct({ResourceArn: Schema.optional(Schema.String), Tags: Schema.optional(Tags)});
export const TagResourceInput = Schema.Struct({ResourceARN: Schema.String, Tags: Tags});
export const UntagResourceOutput = Schema.Struct({ResourceARN: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({ErrorCode: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const TagResourceOutput = Schema.Struct({ResourceARN: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-01-01", uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
