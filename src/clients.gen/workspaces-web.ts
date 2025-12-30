import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ExpireSessionRequest extends Schema.Class<ExpireSessionRequest>("ExpireSessionRequest")({portalId: Schema.String, sessionId: Schema.String}) {}
export class ExpireSessionResponse extends Schema.Class<ExpireSessionResponse>("ExpireSessionResponse")({}) {}
export class GetSessionRequest extends Schema.Class<GetSessionRequest>("GetSessionRequest")({portalId: Schema.String, sessionId: Schema.String}) {}
export class ListSessionsRequest extends Schema.Class<ListSessionsRequest>("ListSessionsRequest")({portalId: Schema.String, username: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), sortBy: Schema.optional(Schema.String), status: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagList)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagList, clientToken: Schema.optional(Schema.String)}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export const IpAddressList = Schema.Array(Schema.String);
export class Session extends Schema.Class<Session>("Session")({portalArn: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), username: Schema.optional(Schema.String), clientIpAddresses: Schema.optional(IpAddressList), status: Schema.optional(Schema.String), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date)}) {}
export class SessionSummary extends Schema.Class<SessionSummary>("SessionSummary")({portalArn: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), username: Schema.optional(Schema.String), status: Schema.optional(Schema.String), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date)}) {}
export const SessionSummaryList = Schema.Array(SessionSummary);
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)}) {}
export class GetSessionResponse extends Schema.Class<GetSessionResponse>("GetSessionResponse")({session: Schema.optional(Session)}) {}
export class ListSessionsResponse extends Schema.Class<ListSessionsResponse>("ListSessionsResponse")({sessions: SessionSummaryList, nextToken: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class TooManyTagsException extends Schema.Class<TooManyTagsException>("TooManyTagsException")({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const expireSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ExpireSession" }, ExpireSessionRequest, ExpireSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.GetSession" }, GetSessionRequest, GetSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSessions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListSessions" }, ListSessionsRequest, ListSessionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "POST", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
