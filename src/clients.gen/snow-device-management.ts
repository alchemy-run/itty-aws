import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.UntagResource" }, UntagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.TagResource" }, TagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
