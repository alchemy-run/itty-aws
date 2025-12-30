import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetDefaultScraperConfigurationRequest extends S.Class<GetDefaultScraperConfigurationRequest>("GetDefaultScraperConfigurationRequest")({}) {}
export const TagKeys = S.Array(S.String);
export class GetDefaultScraperConfigurationResponse extends S.Class<GetDefaultScraperConfigurationResponse>("GetDefaultScraperConfigurationResponse")({configuration: H.StreamBody()}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
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
 * Removes the specified tags from an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `GetDefaultScraperConfiguration` operation returns the default scraper configuration used when Amazon EKS creates a scraper for you.
 */export const getDefaultScraperConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/scraperconfiguration", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.GetDefaultScraperConfiguration" }, GetDefaultScraperConfigurationRequest, GetDefaultScraperConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListTagsForResource` operation returns the tags that are associated with an Amazon Managed Service for Prometheus resource. Currently, the only resources that can be tagged are scrapers, workspaces, and rule groups namespaces.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `TagResource` operation associates tags with an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces.
 * 
 * If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. To remove a tag, use `UntagResource`.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
