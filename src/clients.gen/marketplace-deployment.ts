import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const StringList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: StringList});
export const UntagResourceResponse = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Schema.optional(Tags)});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ConflictException = Schema.Struct({message: Schema.String, resourceId: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String, fieldName: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-25", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Marketplace Deployment", sigV4ServiceName: "aws-marketplace", name: "AWSMPDeploymentParametersService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-25", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Marketplace Deployment", sigV4ServiceName: "aws-marketplace", name: "AWSMPDeploymentParametersService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-25", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Marketplace Deployment", sigV4ServiceName: "aws-marketplace", name: "AWSMPDeploymentParametersService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
