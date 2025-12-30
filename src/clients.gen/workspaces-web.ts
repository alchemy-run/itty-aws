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
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList, clientToken: S.optional(S.String)}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const IpAddressList = S.Array(S.String);
export class Session extends S.Class<Session>("Session")({portalArn: S.optional(S.String), sessionId: S.optional(S.String), username: S.optional(S.String), clientIpAddresses: S.optional(IpAddressList), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class SessionSummary extends S.Class<SessionSummary>("SessionSummary")({portalArn: S.optional(S.String), sessionId: S.optional(S.String), username: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export const SessionSummaryList = S.Array(SessionSummary);
export class GetSessionResponse extends S.Class<GetSessionResponse>("GetSessionResponse")({session: S.optional(Session)}) {}
export class ListSessionsResponse extends S.Class<ListSessionsResponse>("ListSessionsResponse")({sessions: SessionSummaryList, nextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};

//# Operations
export const expireSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ExpireSession" }, ExpireSessionRequest, ExpireSessionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.GetSession" }, GetSessionRequest, GetSessionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSessions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListSessions" }, ListSessionsRequest, ListSessionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "POST", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
