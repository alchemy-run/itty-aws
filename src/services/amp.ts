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
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDefaultScraperConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/scraperconfiguration", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.GetDefaultScraperConfiguration" }, GetDefaultScraperConfigurationRequest, GetDefaultScraperConfigurationResponse, [AccessDeniedException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "amp", sigV4ServiceName: "aps", name: "AmazonPrometheusService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
