import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const UntagResourceOutput = Schema.Struct({ResourceARN: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({ErrorCode: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const TagResourceOutput = Schema.Struct({ResourceARN: Schema.optional(Schema.String)});
export const ListTagsForResourceOutput = Schema.Struct({ResourceArn: Schema.optional(Schema.String), Tags: Schema.optional(Tags)});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const Tags = Schema.Array(Tag);
export const UntagResourceInput = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeys});
export const TagKeys = Schema.Array(Schema.String);
export const TagResourceInput = Schema.Struct({ResourceARN: Schema.String, Tags: Tags});
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.UntagResource" }, UntagResourceInput, UntagResourceOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Backup Gateway", sigV4ServiceName: "backup-gateway", name: "BackupOnPremises_v20210101.TagResource" }, TagResourceInput, TagResourceOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
