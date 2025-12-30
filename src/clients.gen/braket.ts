import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const InternalServiceException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ProgramValidationFailuresList = Schema.Array(Schema.String);
export const ProgramSetValidationFailure = Schema.Struct({programIndex: Schema.Number, inputsIndex: Schema.optional(Schema.Number), errors: Schema.optional(ProgramValidationFailuresList)});
export const ProgramSetValidationFailuresList = Schema.Array(ProgramSetValidationFailure);
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), programSetValidationFailures: Schema.optional(ProgramSetValidationFailuresList)});

//# Errors
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-09-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Braket", sigV4ServiceName: "braket", name: "Braket.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServiceExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-09-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Braket", sigV4ServiceName: "braket", name: "Braket.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServiceExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-09-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Braket", sigV4ServiceName: "braket", name: "Braket.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServiceExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
