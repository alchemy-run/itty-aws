import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-13", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "EMR Serverless", sigV4ServiceName: "emr-serverless", name: "AwsToledoWebService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-13", uri: "/tags/{resourceArn}", method: "GET", sdkId: "EMR Serverless", sigV4ServiceName: "emr-serverless", name: "AwsToledoWebService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-07-13", uri: "/tags/{resourceArn}", method: "POST", sdkId: "EMR Serverless", sigV4ServiceName: "emr-serverless", name: "AwsToledoWebService.TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
