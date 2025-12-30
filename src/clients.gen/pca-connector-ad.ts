import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: Tags});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const InternalServerException = Schema.Struct({Message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.String, ResourceId: Schema.String, ResourceType: Schema.String});
export const ThrottlingException = Schema.Struct({Message: Schema.String, ServiceCode: Schema.optional(Schema.String), QuotaCode: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.String, Reason: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Pca Connector Ad", sigV4ServiceName: "pca-connector-ad", name: "PcaConnectorAd.TagResource" }, TagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Pca Connector Ad", sigV4ServiceName: "pca-connector-ad", name: "PcaConnectorAd.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Pca Connector Ad", sigV4ServiceName: "pca-connector-ad", name: "PcaConnectorAd.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
