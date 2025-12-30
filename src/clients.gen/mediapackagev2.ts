import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String), ValidationExceptionType: Schema.optional(Schema.String)});

//# Errors
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.TagResource" }, TagResourceRequest, Schema.Struct({}), [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-12-25", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "mediapackagev2.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
