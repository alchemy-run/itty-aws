import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class GetVerificationRequest extends Schema.Class<GetVerificationRequest>("GetVerificationRequest")({VerificationType: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class SendEmailVerificationCodeRequest extends Schema.Class<SendEmailVerificationCodeRequest>("SendEmailVerificationCodeRequest")({Catalog: Schema.String, Email: Schema.String}) {}
export class SendEmailVerificationCodeResponse extends Schema.Class<SendEmailVerificationCodeResponse>("SendEmailVerificationCodeResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class RegistrantVerificationDetails extends Schema.Class<RegistrantVerificationDetails>("RegistrantVerificationDetails")({}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceArn: Schema.String, Tags: Schema.optional(TagList)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.String, Reason: Schema.String}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.String, Reason: Schema.String}) {}
export class BusinessVerificationDetails extends Schema.Class<BusinessVerificationDetails>("BusinessVerificationDetails")({LegalName: Schema.String, RegistrationId: Schema.String, CountryCode: Schema.String, JurisdictionOfIncorporation: Schema.optional(Schema.String)}) {}
export const VerificationDetails = Schema.Union(BusinessVerificationDetails, RegistrantVerificationDetails);
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: Schema.String, Reason: Schema.String}) {}
export class StartVerificationRequest extends Schema.Class<StartVerificationRequest>("StartVerificationRequest")({ClientToken: Schema.optional(Schema.String), VerificationDetails: Schema.optional(VerificationDetails)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String, Reason: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String, ServiceCode: Schema.optional(Schema.String), QuotaCode: Schema.optional(Schema.String)}) {}
export class BusinessVerificationResponse extends Schema.Class<BusinessVerificationResponse>("BusinessVerificationResponse")({BusinessVerificationDetails: BusinessVerificationDetails}) {}
export class RegistrantVerificationResponse extends Schema.Class<RegistrantVerificationResponse>("RegistrantVerificationResponse")({CompletionUrl: Schema.String, CompletionUrlExpiresAt: Schema.Date}) {}
export const VerificationResponseDetails = Schema.Union(BusinessVerificationResponse, RegistrantVerificationResponse);
export class GetVerificationResponse extends Schema.Class<GetVerificationResponse>("GetVerificationResponse")({VerificationType: Schema.String, VerificationStatus: Schema.String, VerificationStatusReason: Schema.optional(Schema.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: Schema.Date, CompletedAt: Schema.optional(Schema.Date)}) {}
export class StartVerificationResponse extends Schema.Class<StartVerificationResponse>("StartVerificationResponse")({VerificationType: Schema.String, VerificationStatus: Schema.String, VerificationStatusReason: Schema.optional(Schema.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: Schema.Date, CompletedAt: Schema.optional(Schema.Date)}) {}
export class FieldValidationError extends Schema.Class<FieldValidationError>("FieldValidationError")({Name: Schema.String, Message: Schema.String, Code: Schema.String}) {}
export class BusinessValidationError extends Schema.Class<BusinessValidationError>("BusinessValidationError")({Message: Schema.String, Code: Schema.String}) {}
export const ValidationError = Schema.Union(FieldValidationError, BusinessValidationError);
export const ValidationErrorList = Schema.Array(ValidationError);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String, Reason: Schema.String, ErrorDetails: Schema.optional(ValidationErrorList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const sendEmailVerificationCode = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.SendEmailVerificationCode" }, SendEmailVerificationCodeRequest, SendEmailVerificationCodeResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getVerification = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.GetVerification" }, GetVerificationRequest, GetVerificationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startVerification = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.StartVerification" }, StartVerificationRequest, StartVerificationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
