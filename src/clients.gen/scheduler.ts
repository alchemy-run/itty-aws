import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: Schema.String}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: Schema.optional(TagList)}) {}
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({ResourceArn: Schema.String, Tags: TagList}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String}) {}

//# Errors
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.TagResource" }, TagResourceInput, TagResourceOutput, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
