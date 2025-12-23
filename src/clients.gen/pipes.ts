import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const TagResourceResponse = Schema.Struct({});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const InternalException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});
export const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const TagKeyList = Schema.Array(Schema.String);
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalException", InternalException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalException", InternalException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Pipes", sigV4ServiceName: "pipes", name: "Pipes.TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalException", InternalException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
