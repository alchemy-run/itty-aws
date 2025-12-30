import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceOutput = Schema.Struct({});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagList)});
export const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagList});
export const TagResourceOutput = Schema.Struct({});
export const ConflictException = Schema.Struct({Message: Schema.String});
export const InternalServerException = Schema.Struct({Message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.String});
export const ThrottlingException = Schema.Struct({Message: Schema.String});
export const ValidationException = Schema.Struct({Message: Schema.String});

//# Errors
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.TagResource" }, TagResourceInput, TagResourceOutput, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-06-30", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Scheduler", sigV4ServiceName: "scheduler", name: "AWSChronosService.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
