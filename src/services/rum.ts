import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class AppMonitorDetails extends S.Class<AppMonitorDetails>("AppMonitorDetails")({name: S.optional(S.String), id: S.optional(S.String), version: S.optional(S.String)}) {}
export class UserDetails extends S.Class<UserDetails>("UserDetails")({userId: S.optional(S.String), sessionId: S.optional(S.String)}) {}
export class RumEvent extends S.Class<RumEvent>("RumEvent")({id: S.String, timestamp: S.Date, type: S.String, metadata: S.optional(S.String), details: S.String}) {}
export const RumEventList = S.Array(RumEvent);
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceArn: S.String, Tags: TagMap}) {}
export class PutRumEventsRequest extends S.Class<PutRumEventsRequest>("PutRumEventsRequest")({Id: S.String, BatchId: S.String, AppMonitorDetails: AppMonitorDetails, UserDetails: UserDetails, RumEvents: RumEventList, Alias: S.optional(S.String)}) {}
export class PutRumEventsResponse extends S.Class<PutRumEventsResponse>("PutRumEventsResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};

//# Operations
/**
 * Removes one or more tags from the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the tags associated with a CloudWatch RUM resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently, the only resources that can be tagged app monitors.
 * 
 * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 * 
 * You can use the `TagResource` action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 * 
 * You can associate as many as 50 tags with a resource.
 * 
 * For more information, see Tagging Amazon Web Services resources.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes `PutRumEvents` operations to send this data to RUM.
 * 
 * Each `PutRumEvents` operation can send a batch of events from one user session.
 */export const putRumEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/appmonitors/{Id}/", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "RUM.PutRumEvents" }, PutRumEventsRequest, PutRumEventsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
