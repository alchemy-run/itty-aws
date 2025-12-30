import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagMap}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({resourceArn: Schema.String, tags: TagMap}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
