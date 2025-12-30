import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ExpireSessionRequest = Schema.Struct({portalId: Schema.String, sessionId: Schema.String});
export const ExpireSessionResponse = Schema.Struct({});
export const GetSessionRequest = Schema.Struct({portalId: Schema.String, sessionId: Schema.String});
export const ListSessionsRequest = Schema.Struct({portalId: Schema.String, username: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), sortBy: Schema.optional(Schema.String), status: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList, clientToken: Schema.optional(Schema.String)});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const IpAddressList = Schema.Array(Schema.String);
export const Session = Schema.Struct({portalArn: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), username: Schema.optional(Schema.String), clientIpAddresses: Schema.optional(IpAddressList), status: Schema.optional(Schema.String), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date)});
export const SessionSummary = Schema.Struct({portalArn: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String), username: Schema.optional(Schema.String), status: Schema.optional(Schema.String), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date)});
export const SessionSummaryList = Schema.Array(SessionSummary);
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)});
export const GetSessionResponse = Schema.Struct({session: Schema.optional(Session)});
export const ListSessionsResponse = Schema.Struct({sessions: SessionSummaryList, nextToken: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const expireSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ExpireSession" }, ExpireSessionRequest, ExpireSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions/{sessionId}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.GetSession" }, GetSessionRequest, GetSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSessions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/portals/{portalId}/sessions", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListSessions" }, ListSessionsRequest, ListSessionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "GET", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "POST", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-08", uri: "/tags/{resourceArn+}", method: "DELETE", sdkId: "WorkSpaces Web", sigV4ServiceName: "workspaces-web", name: "AWSErmineControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
