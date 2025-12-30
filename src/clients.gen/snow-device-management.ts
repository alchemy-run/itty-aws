import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: Schema.optional(TagMap)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({resourceArn: Schema.String, tags: TagMap}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.UntagResource" }, UntagResourceInput, Schema.Struct({}), [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-04", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Snow Device Management", sigV4ServiceName: "snow-device-management", name: "SnowDeviceManagement.TagResource" }, TagResourceInput, Schema.Struct({}), [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
