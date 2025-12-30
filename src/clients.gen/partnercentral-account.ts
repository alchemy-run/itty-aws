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
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class BusinessVerificationDetails extends S.Class<BusinessVerificationDetails>("BusinessVerificationDetails")({LegalName: S.String, RegistrationId: S.String, CountryCode: S.String, JurisdictionOfIncorporation: S.optional(S.String)}) {}
export const VerificationDetails = S.Union(BusinessVerificationDetails, RegistrantVerificationDetails);
export class StartVerificationRequest extends S.Class<StartVerificationRequest>("StartVerificationRequest")({ClientToken: S.optional(S.String), VerificationDetails: S.optional(VerificationDetails)}) {}
export class BusinessVerificationResponse extends S.Class<BusinessVerificationResponse>("BusinessVerificationResponse")({BusinessVerificationDetails: BusinessVerificationDetails}) {}
export class RegistrantVerificationResponse extends S.Class<RegistrantVerificationResponse>("RegistrantVerificationResponse")({CompletionUrl: S.String, CompletionUrlExpiresAt: S.Date}) {}
export const VerificationResponseDetails = S.Union(BusinessVerificationResponse, RegistrantVerificationResponse);
export class GetVerificationResponse extends S.Class<GetVerificationResponse>("GetVerificationResponse")({VerificationType: S.String, VerificationStatus: S.String, VerificationStatusReason: S.optional(S.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: S.Date, CompletedAt: S.optional(S.Date)}) {}
export class StartVerificationResponse extends S.Class<StartVerificationResponse>("StartVerificationResponse")({VerificationType: S.String, VerificationStatus: S.String, VerificationStatusReason: S.optional(S.String), VerificationResponseDetails: VerificationResponseDetails, StartedAt: S.Date, CompletedAt: S.optional(S.Date)}) {}
export class FieldValidationError extends S.Class<FieldValidationError>("FieldValidationError")({Name: S.String, Message: S.String, Code: S.String}) {}
export class BusinessValidationError extends S.Class<BusinessValidationError>("BusinessValidationError")({Message: S.String, Code: S.String}) {}
export const ValidationError = S.Union(FieldValidationError, BusinessValidationError);
export const ValidationErrorList = S.Array(ValidationError);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.String, Reason: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
export const sendEmailVerificationCode = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.SendEmailVerificationCode" }, SendEmailVerificationCodeRequest, SendEmailVerificationCodeResponse, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getVerification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.GetVerification" }, GetVerificationRequest, GetVerificationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startVerification = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.StartVerification" }, StartVerificationRequest, StartVerificationResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-04-04", uri: "/", method: "POST", sdkId: "PartnerCentral Account", sigV4ServiceName: "partnercentral-account", name: "PartnerCentralAccount.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
