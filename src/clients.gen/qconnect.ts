import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "WisdomService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "WisdomService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-10-19", uri: "/tags/{resourceArn}", method: "POST", sdkId: "QConnect", sigV4ServiceName: "wisdom", name: "WisdomService.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, TooManyTagsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
