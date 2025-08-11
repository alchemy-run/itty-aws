import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SocialMessaging extends AWSServiceClient {
  createWhatsAppMessageTemplate(
    input: CreateWhatsAppMessageTemplateInput,
  ): Effect.Effect<
    CreateWhatsAppMessageTemplateOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  createWhatsAppMessageTemplateFromLibrary(
    input: CreateWhatsAppMessageTemplateFromLibraryInput,
  ): Effect.Effect<
    CreateWhatsAppMessageTemplateFromLibraryOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  createWhatsAppMessageTemplateMedia(
    input: CreateWhatsAppMessageTemplateMediaInput,
  ): Effect.Effect<
    CreateWhatsAppMessageTemplateMediaOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  deleteWhatsAppMessageTemplate(
    input: DeleteWhatsAppMessageTemplateInput,
  ): Effect.Effect<
    DeleteWhatsAppMessageTemplateOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  getWhatsAppMessageTemplate(
    input: GetWhatsAppMessageTemplateInput,
  ): Effect.Effect<
    GetWhatsAppMessageTemplateOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError
  >;
  listWhatsAppMessageTemplates(
    input: ListWhatsAppMessageTemplatesInput,
  ): Effect.Effect<
    ListWhatsAppMessageTemplatesOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  listWhatsAppTemplateLibrary(
    input: ListWhatsAppTemplateLibraryInput,
  ): Effect.Effect<
    ListWhatsAppTemplateLibraryOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError
  >;
  updateWhatsAppMessageTemplate(
    input: UpdateWhatsAppMessageTemplateInput,
  ): Effect.Effect<
    UpdateWhatsAppMessageTemplateOutput,
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError
  >;
}

export declare class Socialmessaging extends SocialMessaging {}

export declare class AccessDeniedByMetaException extends EffectData.TaggedError(
  "AccessDeniedByMetaException",
)<{
  readonly message?: string;
}> {}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AddContactNumber = boolean;

export type AddLearnMoreLink = boolean;

export type AddSecurityRecommendation = boolean;

export type AddTrackPackageLink = boolean;

export type Arn = string;

export type AssociateInProgressToken = string;

export interface AssociateWhatsAppBusinessAccountInput {
  signupCallback?: WhatsAppSignupCallback;
  setupFinalization?: WhatsAppSetupFinalization;
}
export interface AssociateWhatsAppBusinessAccountOutput {
  signupCallbackResult?: WhatsAppSignupCallbackResult;
  statusCode?: number;
}
export type ButtonType = string;

export type CodeExpirationMinutes = number;

export interface CreateWhatsAppMessageTemplateFromLibraryInput {
  metaLibraryTemplate: MetaLibraryTemplate;
  id: string;
}
export interface CreateWhatsAppMessageTemplateFromLibraryOutput {
  metaTemplateId?: string;
  templateStatus?: string;
  category?: string;
}
export interface CreateWhatsAppMessageTemplateInput {
  templateDefinition: Uint8Array | string;
  id: string;
}
export interface CreateWhatsAppMessageTemplateMediaInput {
  id: string;
  sourceS3File?: S3File;
}
export interface CreateWhatsAppMessageTemplateMediaOutput {
  metaHeaderHandle?: string;
}
export interface CreateWhatsAppMessageTemplateOutput {
  metaTemplateId?: string;
  templateStatus?: string;
  category?: string;
}
export type DeleteAllLanguages = boolean;

export interface DeleteWhatsAppMessageMediaInput {
  mediaId: string;
  originationPhoneNumberId: string;
}
export interface DeleteWhatsAppMessageMediaOutput {
  success?: boolean;
}
export interface DeleteWhatsAppMessageTemplateInput {
  metaTemplateId?: string;
  deleteAllLanguages?: boolean;
  id: string;
  templateName: string;
}
export interface DeleteWhatsAppMessageTemplateOutput {}
export declare class DependencyException extends EffectData.TaggedError(
  "DependencyException",
)<{
  readonly message?: string;
}> {}
export interface DisassociateWhatsAppBusinessAccountInput {
  id: string;
}
export interface DisassociateWhatsAppBusinessAccountOutput {}
export type ErrorMessage = string;

export type EventDestinationArn = string;

export type Filter = Record<string, string>;
export interface GetLinkedWhatsAppBusinessAccountInput {
  id: string;
}
export interface GetLinkedWhatsAppBusinessAccountOutput {
  account?: LinkedWhatsAppBusinessAccount;
}
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberInput {
  id: string;
}
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberOutput {
  phoneNumber?: WhatsAppPhoneNumberDetail;
  linkedWhatsAppBusinessAccountId?: string;
}
export interface GetWhatsAppMessageMediaInput {
  mediaId: string;
  originationPhoneNumberId: string;
  metadataOnly?: boolean;
  destinationS3PresignedUrl?: S3PresignedUrl;
  destinationS3File?: S3File;
}
export interface GetWhatsAppMessageMediaOutput {
  mimeType?: string;
  fileSize?: number;
}
export interface GetWhatsAppMessageTemplateInput {
  metaTemplateId: string;
  id: string;
}
export interface GetWhatsAppMessageTemplateOutput {
  template?: string;
}
export type Headers = Record<string, string>;
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParametersException extends EffectData.TaggedError(
  "InvalidParametersException",
)<{
  readonly message?: string;
}> {}
export type IsoCountryCode = string;

export interface LibraryTemplateBodyInputs {
  addContactNumber?: boolean;
  addLearnMoreLink?: boolean;
  addSecurityRecommendation?: boolean;
  addTrackPackageLink?: boolean;
  codeExpirationMinutes?: number;
}
export interface LibraryTemplateButtonInput {
  type?: string;
  phoneNumber?: string;
  url?: Record<string, string>;
  otpType?: string;
  zeroTapTermsAccepted?: boolean;
  supportedApps?: Array<Record<string, string>>;
}
export interface LibraryTemplateButtonList {
  type?: string;
  text?: string;
  phoneNumber?: string;
  url?: string;
  otpType?: string;
  zeroTapTermsAccepted?: boolean;
  supportedApps?: Array<Record<string, string>>;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LinkedAccountWithIncompleteSetup = Record<
  string,
  LinkedWhatsAppBusinessAccountIdMetaData
>;
export interface LinkedWhatsAppBusinessAccount {
  arn: string;
  id: string;
  wabaId: string;
  registrationStatus: RegistrationStatus;
  linkDate: Date | string;
  wabaName: string;
  eventDestinations: Array<WhatsAppBusinessAccountEventDestination>;
  phoneNumbers: Array<WhatsAppPhoneNumberSummary>;
}
export type LinkedWhatsAppBusinessAccountArn = string;

export type LinkedWhatsAppBusinessAccountId = string;

export interface LinkedWhatsAppBusinessAccountIdMetaData {
  accountName?: string;
  registrationStatus?: RegistrationStatus;
  unregisteredWhatsAppPhoneNumbers?: Array<WhatsAppPhoneNumberDetail>;
  wabaId?: string;
}
export interface LinkedWhatsAppBusinessAccountSummary {
  arn: string;
  id: string;
  wabaId: string;
  registrationStatus: RegistrationStatus;
  linkDate: Date | string;
  wabaName: string;
  eventDestinations: Array<WhatsAppBusinessAccountEventDestination>;
}
export type LinkedWhatsAppBusinessAccountSummaryList =
  Array<LinkedWhatsAppBusinessAccountSummary>;
export type LinkedWhatsAppPhoneNumberArn = string;

export interface ListLinkedWhatsAppBusinessAccountsInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListLinkedWhatsAppBusinessAccountsOutput {
  linkedAccounts?: Array<LinkedWhatsAppBusinessAccountSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  statusCode?: number;
  tags?: Array<Tag>;
}
export interface ListWhatsAppMessageTemplatesInput {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListWhatsAppMessageTemplatesOutput {
  templates?: Array<TemplateSummary>;
  nextToken?: string;
}
export interface ListWhatsAppTemplateLibraryInput {
  nextToken?: string;
  maxResults?: number;
  id: string;
  filters?: Record<string, string>;
}
export interface ListWhatsAppTemplateLibraryOutput {
  metaLibraryTemplates?: Array<MetaLibraryTemplateDefinition>;
  nextToken?: string;
}
export type MaxResults = number;

export type MetaIndustries = Array<string>;
export type MetaIndustry = string;

export interface MetaLibraryTemplate {
  templateName: string;
  libraryTemplateName: string;
  templateCategory: string;
  templateLanguage: string;
  libraryTemplateButtonInputs?: Array<LibraryTemplateButtonInput>;
  libraryTemplateBodyInputs?: LibraryTemplateBodyInputs;
}
export type MetaLibraryTemplateButtonInputs = Array<LibraryTemplateButtonInput>;
export type MetaLibraryTemplateButtonList = Array<LibraryTemplateButtonList>;
export interface MetaLibraryTemplateDefinition {
  templateName?: string;
  templateLanguage?: string;
  templateCategory?: string;
  templateTopic?: string;
  templateUseCase?: string;
  templateIndustry?: Array<string>;
  templateHeader?: string;
  templateBody?: string;
  templateButtons?: Array<LibraryTemplateButtonList>;
  templateId?: string;
}
export type MetaLibraryTemplatesList = Array<MetaLibraryTemplateDefinition>;
export type MetaTemplate = string;

export type MetaTemplateBody = string;

export type MetaTemplateCategory = string;

export type MetaTemplateComponents = Uint8Array | string;

export type MetaTemplateDefinition = Uint8Array | string;

export type MetaTemplateHeader = string;

export type MetaTemplateId = string;

export type MetaTemplateLanguage = string;

export type MetaTemplateName = string;

export type MetaTemplateQualityScore = string;

export type MetaTemplateStatus = string;

export type MetaTemplateTopic = string;

export type MetaTemplateUseCase = string;

export type MetaText = string;

export type MetaUrl = string;

export type MetaUrlWithSuffixExample = Record<string, string>;
export type NextToken = string;

export type OtpType = string;

export type PhoneNumber = string;

export interface PostWhatsAppMessageMediaInput {
  originationPhoneNumberId: string;
  sourceS3PresignedUrl?: S3PresignedUrl;
  sourceS3File?: S3File;
}
export interface PostWhatsAppMessageMediaOutput {
  mediaId?: string;
}
export interface PutWhatsAppBusinessAccountEventDestinationsInput {
  id: string;
  eventDestinations: Array<WhatsAppBusinessAccountEventDestination>;
}
export interface PutWhatsAppBusinessAccountEventDestinationsOutput {}
export type RegistrationStatus = "COMPLETE" | "INCOMPLETE";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export interface S3File {
  bucketName: string;
  key: string;
}
export interface S3PresignedUrl {
  url: string;
  headers: Record<string, string>;
}
export interface SendWhatsAppMessageInput {
  originationPhoneNumberId: string;
  message: Uint8Array | string;
  metaApiVersion: string;
}
export interface SendWhatsAppMessageOutput {
  messageId?: string;
}
export type StringList = Array<string>;
export type SupportedApp = Record<string, string>;
export type SupportedApps = Array<Record<string, string>>;
export interface Tag {
  key: string;
  value?: string;
}
export type TagList = Array<Tag>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceOutput {
  statusCode?: number;
}
export interface TemplateSummary {
  templateName?: string;
  metaTemplateId?: string;
  templateStatus?: string;
  templateQualityScore?: string;
  templateLanguage?: string;
  templateCategory?: string;
}
export type TemplateSummaryList = Array<TemplateSummary>;
export declare class ThrottledRequestException extends EffectData.TaggedError(
  "ThrottledRequestException",
)<{
  readonly message?: string;
}> {}
export type TwoFactorPin = string;

export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
  statusCode?: number;
}
export interface UpdateWhatsAppMessageTemplateInput {
  id: string;
  metaTemplateId: string;
  templateCategory?: string;
  templateComponents?: Uint8Array | string;
}
export interface UpdateWhatsAppMessageTemplateOutput {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface WabaPhoneNumberSetupFinalization {
  id: string;
  twoFactorPin: string;
  dataLocalizationRegion?: string;
  tags?: Array<Tag>;
}
export type WabaPhoneNumberSetupFinalizationList =
  Array<WabaPhoneNumberSetupFinalization>;
export interface WabaSetupFinalization {
  id?: string;
  eventDestinations?: Array<WhatsAppBusinessAccountEventDestination>;
  tags?: Array<Tag>;
}
export interface WhatsAppBusinessAccountEventDestination {
  eventDestinationArn: string;
  roleArn?: string;
}
export type WhatsAppBusinessAccountEventDestinations =
  Array<WhatsAppBusinessAccountEventDestination>;
export type WhatsAppBusinessAccountId = string;

export type WhatsAppBusinessAccountLinkDate = Date | string;

export type WhatsAppBusinessAccountName = string;

export type WhatsAppDisplayPhoneNumber = string;

export type WhatsAppMediaId = string;

export type WhatsAppMessageBlob = Uint8Array | string;

export type WhatsAppPhoneNumber = string;

export interface WhatsAppPhoneNumberDetail {
  arn: string;
  phoneNumber: string;
  phoneNumberId: string;
  metaPhoneNumberId: string;
  displayPhoneNumberName: string;
  displayPhoneNumber: string;
  qualityRating: string;
  dataLocalizationRegion?: string;
}
export type WhatsAppPhoneNumberDetailList = Array<WhatsAppPhoneNumberDetail>;
export type WhatsAppPhoneNumberId = string;

export type WhatsAppPhoneNumberName = string;

export type WhatsAppPhoneNumberQualityRating = string;

export interface WhatsAppPhoneNumberSummary {
  arn: string;
  phoneNumber: string;
  phoneNumberId: string;
  metaPhoneNumberId: string;
  displayPhoneNumberName: string;
  displayPhoneNumber: string;
  qualityRating: string;
  dataLocalizationRegion?: string;
}
export type WhatsAppPhoneNumberSummaryList = Array<WhatsAppPhoneNumberSummary>;
export interface WhatsAppSetupFinalization {
  associateInProgressToken: string;
  phoneNumbers: Array<WabaPhoneNumberSetupFinalization>;
  phoneNumberParent?: string;
  waba?: WabaSetupFinalization;
}
export interface WhatsAppSignupCallback {
  accessToken: string;
  callbackUrl?: string;
}
export interface WhatsAppSignupCallbackResult {
  associateInProgressToken?: string;
  linkedAccountsWithIncompleteSetup?: Record<
    string,
    LinkedWhatsAppBusinessAccountIdMetaData
  >;
}
export type ZeroTapTermsAccepted = boolean;

export declare namespace CreateWhatsAppMessageTemplate {
  export type Input = CreateWhatsAppMessageTemplateInput;
  export type Output = CreateWhatsAppMessageTemplateOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace CreateWhatsAppMessageTemplateFromLibrary {
  export type Input = CreateWhatsAppMessageTemplateFromLibraryInput;
  export type Output = CreateWhatsAppMessageTemplateFromLibraryOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace CreateWhatsAppMessageTemplateMedia {
  export type Input = CreateWhatsAppMessageTemplateMediaInput;
  export type Output = CreateWhatsAppMessageTemplateMediaOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace DeleteWhatsAppMessageTemplate {
  export type Input = DeleteWhatsAppMessageTemplateInput;
  export type Output = DeleteWhatsAppMessageTemplateOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace GetWhatsAppMessageTemplate {
  export type Input = GetWhatsAppMessageTemplateInput;
  export type Output = GetWhatsAppMessageTemplateOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace ListWhatsAppMessageTemplates {
  export type Input = ListWhatsAppMessageTemplatesInput;
  export type Output = ListWhatsAppMessageTemplatesOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace ListWhatsAppTemplateLibrary {
  export type Input = ListWhatsAppTemplateLibraryInput;
  export type Output = ListWhatsAppTemplateLibraryOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServiceException
    | InvalidParametersException
    | ThrottledRequestException
    | CommonAwsError;
}

export declare namespace UpdateWhatsAppMessageTemplate {
  export type Input = UpdateWhatsAppMessageTemplateInput;
  export type Output = UpdateWhatsAppMessageTemplateOutput;
  export type Error =
    | DependencyException
    | InternalServiceException
    | InvalidParametersException
    | ResourceNotFoundException
    | ThrottledRequestException
    | CommonAwsError;
}
