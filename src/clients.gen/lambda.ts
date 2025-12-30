import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetAccountSettingsRequest = Schema.Struct({});
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsRequest = Schema.Struct({Resource: Schema.String});
export const UntagResourceRequest = Schema.Struct({Resource: Schema.String, TagKeys: TagKeyList});
export const AccountLimit = Schema.Struct({TotalCodeSize: Schema.optional(Schema.Number), CodeSizeUnzipped: Schema.optional(Schema.Number), CodeSizeZipped: Schema.optional(Schema.Number), ConcurrentExecutions: Schema.optional(Schema.Number), UnreservedConcurrentExecutions: Schema.optional(Schema.Number)});
export const AccountUsage = Schema.Struct({TotalCodeSize: Schema.optional(Schema.Number), FunctionCount: Schema.optional(Schema.Number)});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const GetAccountSettingsResponse = Schema.Struct({AccountLimit: Schema.optional(AccountLimit), AccountUsage: Schema.optional(AccountUsage)});
export const ListTagsResponse = Schema.Struct({Tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({Resource: Schema.String, Tags: Tags});
export const InvalidParameterValueException = Schema.Struct({Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String)});
export const ServiceException = Schema.Struct({Type: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Type: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const ResourceConflictException = Schema.Struct({Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String)});
export const TooManyRequestsException = Schema.Struct({retryAfterSeconds: Schema.optional(Header("Retry-After")), Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});

//# Errors
export class InvalidParameterValueExceptionError extends Schema.TaggedError<InvalidParameterValueExceptionError>()("InvalidParameterValueException", InvalidParameterValueException) {};
export class ResourceConflictExceptionError extends Schema.TaggedError<ResourceConflictExceptionError>()("ResourceConflictException", ResourceConflictException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceExceptionError extends Schema.TaggedError<ServiceExceptionError>()("ServiceException", ServiceException) {};
export class TooManyRequestsExceptionError extends Schema.TaggedError<TooManyRequestsExceptionError>()("TooManyRequestsException", TooManyRequestsException) {};

//# Operations
export const getAccountSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-03-31", uri: "/2016-08-19/account-settings", method: "GET", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "AWSGirApiService.GetAccountSettings" }, GetAccountSettingsRequest, GetAccountSettingsResponse, [ServiceExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTags = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-03-31", uri: "/2017-03-31/tags/{Resource}", method: "GET", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "AWSGirApiService.ListTags" }, ListTagsRequest, ListTagsResponse, [InvalidParameterValueExceptionError, ResourceNotFoundExceptionError, ServiceExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-03-31", uri: "/2017-03-31/tags/{Resource}", method: "POST", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "AWSGirApiService.TagResource" }, TagResourceRequest, Schema.Struct({}), [InvalidParameterValueExceptionError, ResourceConflictExceptionError, ResourceNotFoundExceptionError, ServiceExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-03-31", uri: "/2017-03-31/tags/{Resource}", method: "DELETE", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "AWSGirApiService.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [InvalidParameterValueExceptionError, ResourceConflictExceptionError, ResourceNotFoundExceptionError, ServiceExceptionError, TooManyRequestsExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
