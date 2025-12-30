import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListVersionsRequest extends S.Class<ListVersionsRequest>("ListVersionsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), workspaceId: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const GrafanaVersionList = S.Array(S.String);
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class ListVersionsResponse extends S.Class<ListVersionsResponse>("ListVersionsResponse")({nextToken: S.optional(S.String), grafanaVersions: S.optional(GrafanaVersionList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * The `ListTagsForResource` operation returns the tags that are associated
 * with the Amazon Managed Service for Grafana resource specified by the
 * `resourceArn`. Currently, the only resource that can be tagged is a
 * workspace.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-18", uri: "/tags/{resourceArn}", method: "GET", sdkId: "grafana", sigV4ServiceName: "grafana", name: "AWSGrafanaControlPlane.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists available versions of Grafana. These are available when calling
 * `CreateWorkspace`. Optionally, include a workspace to list the versions
 * to which it can be upgraded.
 */export const listVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-18", uri: "/versions", method: "GET", sdkId: "grafana", sigV4ServiceName: "grafana", name: "AWSGrafanaControlPlane.ListVersions" }, ListVersionsRequest, ListVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `TagResource` operation associates tags with an Amazon Managed Grafana
 * resource. Currently, the only resource that can be tagged is workspaces.
 * 
 * If you specify a new tag key for the resource, this tag is appended to the list of
 * tags associated with the resource. If you specify a tag key that is already associated
 * with the resource, the new tag value that you specify replaces the previous value for
 * that tag.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-18", uri: "/tags/{resourceArn}", sdkId: "grafana", sigV4ServiceName: "grafana", name: "AWSGrafanaControlPlane.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `UntagResource` operation removes the association of the tag with the
 * Amazon Managed Grafana resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-18", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "grafana", sigV4ServiceName: "grafana", name: "AWSGrafanaControlPlane.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
