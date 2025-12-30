import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const StringList = S.Array(S.String);
export class CreateWhatsAppMessageTemplateInput extends S.Class<CreateWhatsAppMessageTemplateInput>("CreateWhatsAppMessageTemplateInput")({templateDefinition: H.StreamBody(), id: S.String}) {}
export class DeleteWhatsAppMessageTemplateInput extends S.Class<DeleteWhatsAppMessageTemplateInput>("DeleteWhatsAppMessageTemplateInput")({metaTemplateId: S.optional(S.String), deleteAllLanguages: S.optional(S.Boolean), id: S.String, templateName: S.String}) {}
export class DeleteWhatsAppMessageTemplateOutput extends S.Class<DeleteWhatsAppMessageTemplateOutput>("DeleteWhatsAppMessageTemplateOutput")({}) {}
export class GetWhatsAppMessageTemplateInput extends S.Class<GetWhatsAppMessageTemplateInput>("GetWhatsAppMessageTemplateInput")({metaTemplateId: S.String, id: S.String}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class ListWhatsAppMessageTemplatesInput extends S.Class<ListWhatsAppMessageTemplatesInput>("ListWhatsAppMessageTemplatesInput")({id: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: StringList}) {}
export class UpdateWhatsAppMessageTemplateInput extends S.Class<UpdateWhatsAppMessageTemplateInput>("UpdateWhatsAppMessageTemplateInput")({id: S.String, metaTemplateId: S.String, templateCategory: S.optional(S.String), templateComponents: S.optional(H.StreamBody())}) {}
export class UpdateWhatsAppMessageTemplateOutput extends S.Class<UpdateWhatsAppMessageTemplateOutput>("UpdateWhatsAppMessageTemplateOutput")({}) {}
export class S3File extends S.Class<S3File>("S3File")({bucketName: S.String, key: S.String}) {}
export const Filter = S.Record({key: S.String, value: S.String});
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateWhatsAppMessageTemplateOutput extends S.Class<CreateWhatsAppMessageTemplateOutput>("CreateWhatsAppMessageTemplateOutput")({metaTemplateId: S.optional(S.String), templateStatus: S.optional(S.String), category: S.optional(S.String)}) {}
export class CreateWhatsAppMessageTemplateMediaInput extends S.Class<CreateWhatsAppMessageTemplateMediaInput>("CreateWhatsAppMessageTemplateMediaInput")({id: S.String, sourceS3File: S.optional(S3File)}) {}
export class GetWhatsAppMessageTemplateOutput extends S.Class<GetWhatsAppMessageTemplateOutput>("GetWhatsAppMessageTemplateOutput")({template: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({statusCode: S.optional(S.Number), tags: S.optional(TagList)}) {}
export class ListWhatsAppTemplateLibraryInput extends S.Class<ListWhatsAppTemplateLibraryInput>("ListWhatsAppTemplateLibraryInput")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), id: S.String, filters: S.optional(Filter)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({statusCode: S.optional(S.Number)}) {}
export class LibraryTemplateBodyInputs extends S.Class<LibraryTemplateBodyInputs>("LibraryTemplateBodyInputs")({addContactNumber: S.optional(S.Boolean), addLearnMoreLink: S.optional(S.Boolean), addSecurityRecommendation: S.optional(S.Boolean), addTrackPackageLink: S.optional(S.Boolean), codeExpirationMinutes: S.optional(S.Number)}) {}
export class TemplateSummary extends S.Class<TemplateSummary>("TemplateSummary")({templateName: S.optional(S.String), metaTemplateId: S.optional(S.String), templateStatus: S.optional(S.String), templateQualityScore: S.optional(S.String), templateLanguage: S.optional(S.String), templateCategory: S.optional(S.String)}) {}
export const TemplateSummaryList = S.Array(TemplateSummary);
export const MetaUrlWithSuffixExample = S.Record({key: S.String, value: S.String});
export const SupportedApp = S.Record({key: S.String, value: S.String});
export const SupportedApps = S.Array(SupportedApp);
export class CreateWhatsAppMessageTemplateMediaOutput extends S.Class<CreateWhatsAppMessageTemplateMediaOutput>("CreateWhatsAppMessageTemplateMediaOutput")({metaHeaderHandle: S.optional(S.String)}) {}
export class ListWhatsAppMessageTemplatesOutput extends S.Class<ListWhatsAppMessageTemplatesOutput>("ListWhatsAppMessageTemplatesOutput")({templates: S.optional(TemplateSummaryList), nextToken: S.optional(S.String)}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({statusCode: S.optional(S.Number)}) {}
export class LibraryTemplateButtonInput extends S.Class<LibraryTemplateButtonInput>("LibraryTemplateButtonInput")({type: S.optional(S.String), phoneNumber: S.optional(S.String), url: S.optional(MetaUrlWithSuffixExample), otpType: S.optional(S.String), zeroTapTermsAccepted: S.optional(S.Boolean), supportedApps: S.optional(SupportedApps)}) {}
export const MetaLibraryTemplateButtonInputs = S.Array(LibraryTemplateButtonInput);
export const MetaIndustries = S.Array(S.String);
export class MetaLibraryTemplate extends S.Class<MetaLibraryTemplate>("MetaLibraryTemplate")({templateName: S.String, libraryTemplateName: S.String, templateCategory: S.String, templateLanguage: S.String, libraryTemplateButtonInputs: S.optional(MetaLibraryTemplateButtonInputs), libraryTemplateBodyInputs: S.optional(LibraryTemplateBodyInputs)}) {}
export class CreateWhatsAppMessageTemplateFromLibraryInput extends S.Class<CreateWhatsAppMessageTemplateFromLibraryInput>("CreateWhatsAppMessageTemplateFromLibraryInput")({metaLibraryTemplate: MetaLibraryTemplate, id: S.String}) {}
export class LibraryTemplateButtonList extends S.Class<LibraryTemplateButtonList>("LibraryTemplateButtonList")({type: S.optional(S.String), text: S.optional(S.String), phoneNumber: S.optional(S.String), url: S.optional(S.String), otpType: S.optional(S.String), zeroTapTermsAccepted: S.optional(S.Boolean), supportedApps: S.optional(SupportedApps)}) {}
export const MetaLibraryTemplateButtonList = S.Array(LibraryTemplateButtonList);
export class MetaLibraryTemplateDefinition extends S.Class<MetaLibraryTemplateDefinition>("MetaLibraryTemplateDefinition")({templateName: S.optional(S.String), templateLanguage: S.optional(S.String), templateCategory: S.optional(S.String), templateTopic: S.optional(S.String), templateUseCase: S.optional(S.String), templateIndustry: S.optional(MetaIndustries), templateHeader: S.optional(S.String), templateBody: S.optional(S.String), templateButtons: S.optional(MetaLibraryTemplateButtonList), templateId: S.optional(S.String)}) {}
export const MetaLibraryTemplatesList = S.Array(MetaLibraryTemplateDefinition);
export class CreateWhatsAppMessageTemplateFromLibraryOutput extends S.Class<CreateWhatsAppMessageTemplateFromLibraryOutput>("CreateWhatsAppMessageTemplateFromLibraryOutput")({metaTemplateId: S.optional(S.String), templateStatus: S.optional(S.String), category: S.optional(S.String)}) {}
export class ListWhatsAppTemplateLibraryOutput extends S.Class<ListWhatsAppTemplateLibraryOutput>("ListWhatsAppTemplateLibraryOutput")({metaLibraryTemplates: S.optional(MetaLibraryTemplatesList), nextToken: S.optional(S.String)}) {}

//# Errors
export class DependencyException extends S.TaggedError<DependencyException>()("DependencyException", {}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class InvalidParametersException extends S.TaggedError<InvalidParametersException>()("InvalidParametersException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottledRequestException extends S.TaggedError<ThrottledRequestException>()("ThrottledRequestException", {}) {};

//# Operations
/**
 * List all tags associated with a resource, such as a phone number or WABA.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/tags/list", method: "GET", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServiceException, InvalidParametersException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/tags/untag-resource", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServiceException, InvalidParametersException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing WhatsApp message template.
 */export const updateWhatsAppMessageTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.UpdateWhatsAppMessageTemplate" }, UpdateWhatsAppMessageTemplateInput, UpdateWhatsAppMessageTemplateOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new WhatsApp message template from a custom definition.
 */export const createWhatsAppMessageTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template/put", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.CreateWhatsAppMessageTemplate" }, CreateWhatsAppMessageTemplateInput, CreateWhatsAppMessageTemplateOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Uploads media for use in a WhatsApp message template.
 */export const createWhatsAppMessageTemplateMedia = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template/media", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.CreateWhatsAppMessageTemplateMedia" }, CreateWhatsAppMessageTemplateMediaInput, CreateWhatsAppMessageTemplateMediaOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a WhatsApp message template.
 */export const deleteWhatsAppMessageTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template", method: "DELETE", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.DeleteWhatsAppMessageTemplate" }, DeleteWhatsAppMessageTemplateInput, DeleteWhatsAppMessageTemplateOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a specific WhatsApp message template.
 */export const getWhatsAppMessageTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template", method: "GET", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.GetWhatsAppMessageTemplate" }, GetWhatsAppMessageTemplateInput, GetWhatsAppMessageTemplateOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists WhatsApp message templates for a specific WhatsApp Business Account.
 */export const listWhatsAppMessageTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template/list", method: "GET", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.ListWhatsAppMessageTemplates" }, ListWhatsAppMessageTemplatesInput, ListWhatsAppMessageTemplatesOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites only the specified tags for the specified resource. When you specify
 * an existing tag key, the value is overwritten with the new value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/tags/tag-resource", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServiceException, InvalidParametersException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new WhatsApp message template using a template from Meta's template library.
 */export const createWhatsAppMessageTemplateFromLibrary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template/create", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.CreateWhatsAppMessageTemplateFromLibrary" }, CreateWhatsAppMessageTemplateFromLibraryInput, CreateWhatsAppMessageTemplateFromLibraryOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists templates available in Meta's template library for WhatsApp messaging.
 */export const listWhatsAppTemplateLibrary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-01-01", uri: "/v1/whatsapp/template/library", sdkId: "SocialMessaging", sigV4ServiceName: "social-messaging", name: "SocialMessaging.ListWhatsAppTemplateLibrary" }, ListWhatsAppTemplateLibraryInput, ListWhatsAppTemplateLibraryOutput, [DependencyException, InternalServiceException, InvalidParametersException, ResourceNotFoundException, ThrottledRequestException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
