import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: TagMap});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "POST", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
