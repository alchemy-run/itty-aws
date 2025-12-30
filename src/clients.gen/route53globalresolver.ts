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
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.String}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.String, fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/get-all-tags", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/tag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/untag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const disassociateHostedZone = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-27", uri: "/hosted-zone-associations/hosted-zone/{hostedZoneId}/resource-arn/{resourceArn+}", method: "DELETE", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.DisassociateHostedZone" }, DisassociateHostedZoneInput, DisassociateHostedZoneOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
