import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-10-28", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
