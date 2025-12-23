import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ResourceNotFoundException = Schema.Struct({Message: Schema.String, ResourceId: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.String, ResourceId: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.String, ResourceId: Schema.optional(Schema.String)});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({Message: Schema.String, ResourceId: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(Tags)});
export const UntagResourceResponse = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const TagKeyList = Schema.Array(Schema.String);
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: Tags});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SageMaker Geospatial", sigV4ServiceName: "sagemaker-geospatial", name: "SageMakerGeospatial.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
