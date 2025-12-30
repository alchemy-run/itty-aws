import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const AppMonitorDetails = Schema.Struct({name: Schema.optional(Schema.String), id: Schema.optional(Schema.String), version: Schema.optional(Schema.String)});
export const UserDetails = Schema.Struct({userId: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String)});
export const RumEvent = Schema.Struct({id: Schema.String, timestamp: Schema.Date, type: Schema.String, metadata: Schema.optional(Schema.String), details: Schema.String});
export const RumEventList = Schema.Array(RumEvent);
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const PutRumEventsRequest = Schema.Struct({Id: Schema.String, BatchId: Schema.String, AppMonitorDetails: AppMonitorDetails, UserDetails: UserDetails, RumEvents: RumEventList, Alias: Schema.optional(Schema.String)});
export const PutRumEventsResponse = Schema.Struct({});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceName: Schema.String, resourceType: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRumEvents = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/appmonitors/{Id}/", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.PutRumEvents" }, PutRumEventsRequest, PutRumEventsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
