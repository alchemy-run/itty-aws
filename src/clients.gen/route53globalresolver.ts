import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class DisassociateHostedZoneInput extends Schema.Class<DisassociateHostedZoneInput>("DisassociateHostedZoneInput")({hostedZoneId: Schema.String, resourceArn: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class DisassociateHostedZoneOutput extends Schema.Class<DisassociateHostedZoneOutput>("DisassociateHostedZoneOutput")({id: Schema.String, resourceArn: Schema.String, hostedZoneId: Schema.String, hostedZoneName: Schema.String, name: Schema.String, createdAt: Schema.Date, updatedAt: Schema.Date, status: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(Tags)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.String}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-27", uri: "/get-all-tags", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-27", uri: "/tag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-27", uri: "/untag-resource", method: "POST", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const disassociateHostedZone = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-27", uri: "/hosted-zone-associations/hosted-zone/{hostedZoneId}/resource-arn/{resourceArn+}", method: "DELETE", sdkId: "Route53GlobalResolver", sigV4ServiceName: "route53globalresolver", name: "EC2DNSGlobalResolverCustomerAPI.DisassociateHostedZone" }, DisassociateHostedZoneInput, DisassociateHostedZoneOutput, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
