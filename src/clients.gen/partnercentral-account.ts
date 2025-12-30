import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GetVerificationRequest extends S.Class<GetVerificationRequest>("GetVerificationRequest")({VerificationType: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class SendEmailVerificationCodeRequest extends S.Class<SendEmailVerificationCodeRequest>("SendEmailVerificationCodeRequest")({Catalog: S.String, Email: S.String}) {}
export class SendEmailVerificationCodeResponse extends S.Class<SendEmailVerificationCodeResponse>("SendEmailVerificationCodeResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class RegistrantVerificationDetails extends S.Class<RegistrantVerificationDetails>("RegistrantVerificationDetails")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceArn: S.String, Tags: S.optional(TagList)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.String, Reason: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({Message: S.String, Reason: S.String}) {}
export class BusinessVerificationDetails extends S.Class<BusinessVerificationDetails>("BusinessVerificationDetails")({LegalName: S.String, RegistrationId: S.String, CountryCode: S.String, JurisdictionOfIncorporation: S.optional(S.String)}) {}
export const VerificationDetails = S.Union(BusinessVerificationDetails, RegistrantVerificationDetails);
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: S.String, Reason: S.String}) {}
export class StartVerificationRequest extends S.Class<StartVerificationRequest>("StartVerificationRequest")({ClientToken: S.optional(S.String), VerificationDetails: S.optional(VerificationDetails)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.String, Reason: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String, ServiceCode: S.optional(S.String), QuotaCode: S.optional(S.String)}) {}
export class BusinessVerificationResponse extends S.Class<BusinessVerificationResponse>("BusinessVerificationResponse")({BusinessVerificationDetails: BusinessVerificationDetails}) {}
export class RegistrantVerificationResponse extends S.Class<RegistrantVerificationResponse>("RegistrantVerificationResponse")({CompletionUrl: S.String, CompletionUrlExpiresAt: S.Date}) {}
export const VerificationResponseDetails = S.Union(BusinessVerificationResponse, RegistrantVerificationResponse);
export class GetVerificationResponse extends S.Class<GetVerificationResponse>("GetVerificationResponse")({VerificationType: S.String, VerificationStatus: S.String, VerificationStatusReason: S.optional(S.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: S.Date, CompletedAt: S.optional(S.Date)}) {}
export class StartVerificationResponse extends S.Class<StartVerificationResponse>("StartVerificationResponse")({VerificationType: S.String, VerificationStatus: S.String, VerificationStatusReason: S.optional(S.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: S.Date, CompletedAt: S.optional(S.Date)}) {}
export class FieldValidationError extends S.Class<FieldValidationError>("FieldValidationError")({Name: S.String, Message: S.String, Code: S.String}) {}
export class BusinessValidationError extends S.Class<BusinessValidationError>("BusinessValidationError")({Message: S.String, Code: S.String}) {}
export const ValidationError = S.Union(FieldValidationError, BusinessValidationError);
export const ValidationErrorList = S.Array(ValidationError);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.String, Reason: S.String, ErrorDetails: S.optional(ValidationErrorList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const sendEmailVerificationCode = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.SendEmailVerificationCode" }, SendEmailVerificationCodeRequest, SendEmailVerificationCodeResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getVerification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.GetVerification" }, GetVerificationRequest, GetVerificationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startVerification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.StartVerification" }, StartVerificationRequest, StartVerificationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
