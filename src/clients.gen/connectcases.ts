import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({arn: Schema.String});
export const UntagResourceRequest = Schema.Struct({arn: Schema.String, tagKeys: TagKeyList});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({arn: Schema.String, tags: Tags});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-03", uri: "/tags/{arn}", method: "POST", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "AmazonConnectCases.TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-03", uri: "/tags/{arn}", method: "DELETE", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "AmazonConnectCases.UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-03", uri: "/tags/{arn}", method: "GET", sdkId: "ConnectCases", sigV4ServiceName: "cases", name: "AmazonConnectCases.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
