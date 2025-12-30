import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ExpireSessionRequest extends S.Class<ExpireSessionRequest>("ExpireSessionRequest")({portalId: S.String, sessionId: S.String}) {}
export class ExpireSessionResponse extends S.Class<ExpireSessionResponse>("ExpireSessionResponse")({}) {}
export class GetSessionRequest extends S.Class<GetSessionRequest>("GetSessionRequest")({portalId: S.String, sessionId: S.String}) {}
export class ListSessionsRequest extends S.Class<ListSessionsRequest>("ListSessionsRequest")({portalId: S.String, username: S.optional(S.String), sessionId: S.optional(S.String), sortBy: S.optional(S.String), status: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList, clientToken: S.optional(S.String)}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export const IpAddressList = S.Array(S.String);
export class Session extends S.Class<Session>("Session")({portalArn: S.optional(S.String), sessionId: S.optional(S.String), username: S.optional(S.String), clientIpAddresses: S.optional(IpAddressList), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class SessionSummary extends S.Class<SessionSummary>("SessionSummary")({portalArn: S.optional(S.String), sessionId: S.optional(S.String), username: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const SessionSummaryList = S.Array(SessionSummary);
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String), resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class GetSessionResponse extends S.Class<GetSessionResponse>("GetSessionResponse")({session: S.optional(Session)}) {}
export class ListSessionsResponse extends S.Class<ListSessionsResponse>("ListSessionsResponse")({sessions: SessionSummaryList, nextToken: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String), serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({message: S.optional(S.String), resourceName: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const expireSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ExpireSession" }, ExpireSessionRequest, ExpireSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.GetSession" }, GetSessionRequest, GetSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSessions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListSessions" }, ListSessionsRequest, ListSessionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "POST", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
