import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class DisassociateHostedZoneInput extends S.Class<DisassociateHostedZoneInput>("DisassociateHostedZoneInput")({hostedZoneId: S.String, resourceArn: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class DisassociateHostedZoneOutput extends S.Class<DisassociateHostedZoneOutput>("DisassociateHostedZoneOutput")({id: S.String, resourceArn: S.String, hostedZoneId: S.String, hostedZoneName: S.String, name: S.String, createdAt: S.Date, updatedAt: S.Date, status: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.optional(S.String), resourceType: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.String, resourceId: S.optional(S.String), resourceType: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {};

//# Operations
/**
 * Lists the tags associated with a Route 53 Global Resolver resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/get-all-tags", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates tags for a Route 53 Global Resolver resource. Tags are key-value pairs that help you organize and identify your resources.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/tag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a Route 53 Global Resolver resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/untag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a Route 53 private hosted zone from a Route 53 Global Resolver resource.
 */export const disassociateHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/hosted-zone-associations/hosted-zone/{hostedZoneId}/resource-arn/{resourceArn+}", method: "DELETE", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.DisassociateHostedZone" }, DisassociateHostedZoneInput, DisassociateHostedZoneOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
