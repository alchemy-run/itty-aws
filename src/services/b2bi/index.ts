import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class b2bi extends AWSServiceClient {
  createStarterMappingTemplate(
    input: CreateStarterMappingTemplateRequest,
  ): Effect.Effect<
    CreateStarterMappingTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  generateMapping(
    input: GenerateMappingRequest,
  ): Effect.Effect<
    GenerateMappingResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTransformerJob(
    input: GetTransformerJobRequest,
  ): Effect.Effect<
    GetTransformerJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startTransformerJob(
    input: StartTransformerJobRequest,
  ): Effect.Effect<
    StartTransformerJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  testConversion(
    input: TestConversionRequest,
  ): Effect.Effect<
    TestConversionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  testMapping(
    input: TestMappingRequest,
  ): Effect.Effect<
    TestMappingResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  testParsing(
    input: TestParsingRequest,
  ): Effect.Effect<
    TestParsingResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createCapability(
    input: CreateCapabilityRequest,
  ): Effect.Effect<
    CreateCapabilityResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPartnership(
    input: CreatePartnershipRequest,
  ): Effect.Effect<
    CreatePartnershipResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProfile(
    input: CreateProfileRequest,
  ): Effect.Effect<
    CreateProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTransformer(
    input: CreateTransformerRequest,
  ): Effect.Effect<
    CreateTransformerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCapability(
    input: DeleteCapabilityRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePartnership(
    input: DeletePartnershipRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProfile(
    input: DeleteProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTransformer(
    input: DeleteTransformerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCapability(
    input: GetCapabilityRequest,
  ): Effect.Effect<
    GetCapabilityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPartnership(
    input: GetPartnershipRequest,
  ): Effect.Effect<
    GetPartnershipResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfile(
    input: GetProfileRequest,
  ): Effect.Effect<
    GetProfileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTransformer(
    input: GetTransformerRequest,
  ): Effect.Effect<
    GetTransformerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCapabilities(
    input: ListCapabilitiesRequest,
  ): Effect.Effect<
    ListCapabilitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPartnerships(
    input: ListPartnershipsRequest,
  ): Effect.Effect<
    ListPartnershipsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfiles(
    input: ListProfilesRequest,
  ): Effect.Effect<
    ListProfilesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTransformers(
    input: ListTransformersRequest,
  ): Effect.Effect<
    ListTransformersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCapability(
    input: UpdateCapabilityRequest,
  ): Effect.Effect<
    UpdateCapabilityResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePartnership(
    input: UpdatePartnershipRequest,
  ): Effect.Effect<
    UpdatePartnershipResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProfile(
    input: UpdateProfileRequest,
  ): Effect.Effect<
    UpdateProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTransformer(
    input: UpdateTransformerRequest,
  ): Effect.Effect<
    UpdateTransformerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class B2bi extends b2bi {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AdvancedOptions {
  x12?: X12AdvancedOptions;
}
export type AmazonResourceName = string;

export type BucketName = string;

export type BusinessName = string;

interface _CapabilityConfiguration {
  edi?: EdiConfiguration;
}

export type CapabilityConfiguration = _CapabilityConfiguration & {
  edi: EdiConfiguration;
};
export type CapabilityDirection = "INBOUND" | "OUTBOUND";
export type CapabilityId = string;

export type CapabilityList = Array<CapabilitySummary>;
export type CapabilityName = string;

export interface CapabilityOptions {
  outboundEdi?: OutboundEdiOptions;
  inboundEdi?: InboundEdiOptions;
}
export interface CapabilitySummary {
  capabilityId: string;
  name: string;
  type: CapabilityType;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export type CapabilityType = "edi";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface ConversionSource {
  fileFormat: ConversionSourceFormat;
  inputFile: InputFileSource;
}
export type ConversionSourceFormat = "JSON" | "XML";
export interface ConversionTarget {
  fileFormat: ConversionTargetFormat;
  formatDetails?: ConversionTargetFormatDetails;
  outputSampleFile?: OutputSampleFileSource;
}
export type ConversionTargetFormat = "X12";
interface _ConversionTargetFormatDetails {
  x12?: X12Details;
}

export type ConversionTargetFormatDetails = _ConversionTargetFormatDetails & {
  x12: X12Details;
};
export interface CreateCapabilityRequest {
  name: string;
  type: CapabilityType;
  configuration: CapabilityConfiguration;
  instructionsDocuments?: Array<S3Location>;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateCapabilityResponse {
  capabilityId: string;
  capabilityArn: string;
  name: string;
  type: CapabilityType;
  configuration: CapabilityConfiguration;
  instructionsDocuments?: Array<S3Location>;
  createdAt: Date | string;
}
export type CreatedDate = Date | string;

export interface CreatePartnershipRequest {
  profileId: string;
  name: string;
  email: string;
  phone?: string;
  capabilities: Array<string>;
  capabilityOptions?: CapabilityOptions;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreatePartnershipResponse {
  profileId: string;
  partnershipId: string;
  partnershipArn: string;
  name?: string;
  email?: string;
  phone?: string;
  capabilities?: Array<string>;
  capabilityOptions?: CapabilityOptions;
  tradingPartnerId?: string;
  createdAt: Date | string;
}
export interface CreateProfileRequest {
  name: string;
  email?: string;
  phone: string;
  businessName: string;
  logging: Logging;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateProfileResponse {
  profileId: string;
  profileArn: string;
  name: string;
  businessName: string;
  phone: string;
  email?: string;
  logging?: Logging;
  logGroupName?: string;
  createdAt: Date | string;
}
export interface CreateStarterMappingTemplateRequest {
  outputSampleLocation?: S3Location;
  mappingType: MappingType;
  templateDetails: TemplateDetails;
}
export interface CreateStarterMappingTemplateResponse {
  mappingTemplate: string;
}
export interface CreateTransformerRequest {
  name: string;
  clientToken?: string;
  tags?: Array<Tag>;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export interface CreateTransformerResponse {
  transformerId: string;
  transformerArn: string;
  name: string;
  status: TransformerStatus;
  createdAt: Date | string;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export interface DeleteCapabilityRequest {
  capabilityId: string;
}
export interface DeletePartnershipRequest {
  partnershipId: string;
}
export interface DeleteProfileRequest {
  profileId: string;
}
export interface DeleteTransformerRequest {
  transformerId: string;
}
export interface EdiConfiguration {
  capabilityDirection?: CapabilityDirection;
  type: EdiType;
  inputLocation: S3Location;
  outputLocation: S3Location;
  transformerId: string;
}
interface _EdiType {
  x12Details?: X12Details;
}

export type EdiType = _EdiType & { x12Details: X12Details };
export type Email = string;

export type ErrorMessage = string;

export type FileFormat = "XML" | "JSON" | "NOT_USED";
export type FileLocation = string;

interface _FormatOptions {
  x12?: X12Details;
}

export type FormatOptions = _FormatOptions & { x12: X12Details };
export type FromFormat = "X12";
export type GenerateMappingInputFileContent = string;

export type GenerateMappingOutputFileContent = string;

export interface GenerateMappingRequest {
  inputFileContent: string;
  outputFileContent: string;
  mappingType: MappingType;
}
export interface GenerateMappingResponse {
  mappingTemplate: string;
  mappingAccuracy?: number;
}
export interface GetCapabilityRequest {
  capabilityId: string;
}
export interface GetCapabilityResponse {
  capabilityId: string;
  capabilityArn: string;
  name: string;
  type: CapabilityType;
  configuration: CapabilityConfiguration;
  instructionsDocuments?: Array<S3Location>;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface GetPartnershipRequest {
  partnershipId: string;
}
export interface GetPartnershipResponse {
  profileId: string;
  partnershipId: string;
  partnershipArn: string;
  name?: string;
  email?: string;
  phone?: string;
  capabilities?: Array<string>;
  capabilityOptions?: CapabilityOptions;
  tradingPartnerId?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface GetProfileRequest {
  profileId: string;
}
export interface GetProfileResponse {
  profileId: string;
  profileArn: string;
  name: string;
  email?: string;
  phone: string;
  businessName: string;
  logging?: Logging;
  logGroupName?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface GetTransformerJobRequest {
  transformerJobId: string;
  transformerId: string;
}
export interface GetTransformerJobResponse {
  status: TransformerJobStatus;
  outputFiles?: Array<S3Location>;
  message?: string;
}
export interface GetTransformerRequest {
  transformerId: string;
}
export interface GetTransformerResponse {
  transformerId: string;
  transformerArn: string;
  name: string;
  status: TransformerStatus;
  createdAt: Date | string;
  modifiedAt?: Date | string;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export interface InboundEdiOptions {
  x12?: X12InboundEdiOptions;
}
export interface InputConversion {
  fromFormat: FromFormat;
  formatOptions?: FormatOptions;
  advancedOptions?: AdvancedOptions;
}
interface _InputFileSource {
  fileContent?: string;
}

export type InputFileSource = _InputFileSource & { fileContent: string };
export type InstructionsDocuments = Array<S3Location>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type KeyList = Array<SampleDocumentKeys>;
export type LineLength = number;

export type LineTerminator = "CRLF" | "LF" | "CR";
export interface ListCapabilitiesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCapabilitiesResponse {
  capabilities: Array<CapabilitySummary>;
  nextToken?: string;
}
export interface ListPartnershipsRequest {
  profileId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPartnershipsResponse {
  partnerships: Array<PartnershipSummary>;
  nextToken?: string;
}
export interface ListProfilesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListProfilesResponse {
  profiles: Array<ProfileSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTransformersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListTransformersResponse {
  transformers: Array<TransformerSummary>;
  nextToken?: string;
}
export type Logging = "ENABLED" | "DISABLED";
export type LogGroupName = string;

export interface Mapping {
  templateLanguage: MappingTemplateLanguage;
  template?: string;
}
export type MappingTemplate = string;

export type MappingTemplateLanguage = "XSLT" | "JSONATA";
export type MappingType = "JSONATA" | "XSLT";
export type MaxResults = number;

export type ModifiedDate = Date | string;

interface _OutboundEdiOptions {
  x12?: X12Envelope;
}

export type OutboundEdiOptions = _OutboundEdiOptions & { x12: X12Envelope };
export interface OutputConversion {
  toFormat: ToFormat;
  formatOptions?: FormatOptions;
}
interface _OutputSampleFileSource {
  fileLocation?: S3Location;
}

export type OutputSampleFileSource = _OutputSampleFileSource & {
  fileLocation: S3Location;
};
export type PageToken = string;

export type ParsedSplitFileContentsList = Array<string>;
export type PartnerName = string;

export type PartnershipCapabilities = Array<string>;
export type PartnershipId = string;

export type PartnershipList = Array<PartnershipSummary>;
export interface PartnershipSummary {
  profileId: string;
  partnershipId: string;
  name?: string;
  capabilities?: Array<string>;
  capabilityOptions?: CapabilityOptions;
  tradingPartnerId?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export type Phone = string;

export type ProfileId = string;

export type ProfileList = Array<ProfileSummary>;
export type ProfileName = string;

export interface ProfileSummary {
  profileId: string;
  name: string;
  businessName: string;
  logging?: Logging;
  logGroupName?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type S3Key = string;

export interface S3Location {
  bucketName?: string;
  key?: string;
}
export type S3LocationList = Array<S3Location>;
export interface SampleDocumentKeys {
  input?: string;
  output?: string;
}
export interface SampleDocuments {
  bucketName: string;
  keys: Array<SampleDocumentKeys>;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type StartingFunctionalGroupControlNumber = number;

export type StartingInterchangeControlNumber = number;

export type StartingTransactionSetControlNumber = number;

export interface StartTransformerJobRequest {
  inputFile: S3Location;
  outputLocation: S3Location;
  transformerId: string;
  clientToken?: string;
}
export interface StartTransformerJobResponse {
  transformerJobId: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export type TagValue = string;

interface _TemplateDetails {
  x12?: X12Details;
}

export type TemplateDetails = _TemplateDetails & { x12: X12Details };
export interface TestConversionRequest {
  source: ConversionSource;
  target: ConversionTarget;
}
export interface TestConversionResponse {
  convertedFileContent: string;
  validationMessages?: Array<string>;
}
export type TestMappingInputFileContent = string;

export interface TestMappingRequest {
  inputFileContent: string;
  mappingTemplate: string;
  fileFormat: FileFormat;
}
export interface TestMappingResponse {
  mappedFileContent: string;
}
export interface TestParsingRequest {
  inputFile: S3Location;
  fileFormat: FileFormat;
  ediType: EdiType;
  advancedOptions?: AdvancedOptions;
}
export interface TestParsingResponse {
  parsedFileContent: string;
  parsedSplitFileContents?: Array<string>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type ToFormat = "X12";
export type TradingPartnerId = string;

export type TransformerId = string;

export type TransformerJobId = string;

export type TransformerJobStatus = "running" | "succeeded" | "failed";
export type TransformerList = Array<TransformerSummary>;
export type TransformerName = string;

export type TransformerStatus = "active" | "inactive";
export interface TransformerSummary {
  transformerId: string;
  name: string;
  status: TransformerStatus;
  createdAt: Date | string;
  modifiedAt?: Date | string;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UpdateCapabilityRequest {
  capabilityId: string;
  name?: string;
  configuration?: CapabilityConfiguration;
  instructionsDocuments?: Array<S3Location>;
}
export interface UpdateCapabilityResponse {
  capabilityId: string;
  capabilityArn: string;
  name: string;
  type: CapabilityType;
  configuration: CapabilityConfiguration;
  instructionsDocuments?: Array<S3Location>;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface UpdatePartnershipRequest {
  partnershipId: string;
  name?: string;
  capabilities?: Array<string>;
  capabilityOptions?: CapabilityOptions;
}
export interface UpdatePartnershipResponse {
  profileId: string;
  partnershipId: string;
  partnershipArn: string;
  name?: string;
  email?: string;
  phone?: string;
  capabilities?: Array<string>;
  capabilityOptions?: CapabilityOptions;
  tradingPartnerId?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface UpdateProfileRequest {
  profileId: string;
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
}
export interface UpdateProfileResponse {
  profileId: string;
  profileArn: string;
  name: string;
  email?: string;
  phone: string;
  businessName: string;
  logging?: Logging;
  logGroupName?: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
}
export interface UpdateTransformerRequest {
  transformerId: string;
  name?: string;
  status?: TransformerStatus;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export interface UpdateTransformerResponse {
  transformerId: string;
  transformerArn: string;
  name: string;
  status: TransformerStatus;
  createdAt: Date | string;
  modifiedAt: Date | string;
  fileFormat?: FileFormat;
  mappingTemplate?: string;
  ediType?: EdiType;
  sampleDocument?: string;
  inputConversion?: InputConversion;
  mapping?: Mapping;
  outputConversion?: OutputConversion;
  sampleDocuments?: SampleDocuments;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export type ValidationMessages = Array<string>;
export type WrapFormat = "SEGMENT" | "ONE_LINE" | "LINE_LENGTH";
export interface WrapOptions {
  wrapBy: WrapFormat;
  lineTerminator?: LineTerminator;
  lineLength?: number;
}
export interface X12AcknowledgmentOptions {
  functionalAcknowledgment: X12FunctionalAcknowledgment;
  technicalAcknowledgment: X12TechnicalAcknowledgment;
}
export type X12AcknowledgmentRequestedCode = string;

export interface X12AdvancedOptions {
  splitOptions?: X12SplitOptions;
}
export type X12ApplicationReceiverCode = string;

export type X12ApplicationSenderCode = string;

export type X12ComponentSeparator = string;

export interface X12ControlNumbers {
  startingInterchangeControlNumber?: number;
  startingFunctionalGroupControlNumber?: number;
  startingTransactionSetControlNumber?: number;
}
export type X12DataElementSeparator = string;

export interface X12Delimiters {
  componentSeparator?: string;
  dataElementSeparator?: string;
  segmentTerminator?: string;
}
export interface X12Details {
  transactionSet?: X12TransactionSet;
  version?: X12Version;
}
export interface X12Envelope {
  common?: X12OutboundEdiHeaders;
  wrapOptions?: WrapOptions;
}
export type X12FunctionalAcknowledgment =
  | "DO_NOT_GENERATE"
  | "GENERATE_ALL_SEGMENTS"
  | "GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP";
export interface X12FunctionalGroupHeaders {
  applicationSenderCode?: string;
  applicationReceiverCode?: string;
  responsibleAgencyCode?: string;
}
export type X12GS05TimeFormat = "HHMM" | "HHMMSS" | "HHMMSSDD";
export type X12IdQualifier = string;

export interface X12InboundEdiOptions {
  acknowledgmentOptions?: X12AcknowledgmentOptions;
}
export interface X12InterchangeControlHeaders {
  senderIdQualifier?: string;
  senderId?: string;
  receiverIdQualifier?: string;
  receiverId?: string;
  repetitionSeparator?: string;
  acknowledgmentRequestedCode?: string;
  usageIndicatorCode?: string;
}
export interface X12OutboundEdiHeaders {
  interchangeControlHeaders?: X12InterchangeControlHeaders;
  functionalGroupHeaders?: X12FunctionalGroupHeaders;
  delimiters?: X12Delimiters;
  validateEdi?: boolean;
  controlNumbers?: X12ControlNumbers;
  gs05TimeFormat?: X12GS05TimeFormat;
}
export type X12ReceiverId = string;

export type X12RepetitionSeparator = string;

export type X12ResponsibleAgencyCode = string;

export type X12SegmentTerminator = string;

export type X12SenderId = string;

export type X12SplitBy = "NONE" | "TRANSACTION";
export interface X12SplitOptions {
  splitBy: X12SplitBy;
}
export type X12TechnicalAcknowledgment =
  | "DO_NOT_GENERATE"
  | "GENERATE_ALL_SEGMENTS";
export type X12TransactionSet =
  | "X12_100"
  | "X12_101"
  | "X12_102"
  | "X12_103"
  | "X12_104"
  | "X12_105"
  | "X12_106"
  | "X12_107"
  | "X12_108"
  | "X12_109"
  | "X12_110"
  | "X12_111"
  | "X12_112"
  | "X12_113"
  | "X12_120"
  | "X12_121"
  | "X12_124"
  | "X12_125"
  | "X12_126"
  | "X12_127"
  | "X12_128"
  | "X12_129"
  | "X12_130"
  | "X12_131"
  | "X12_132"
  | "X12_133"
  | "X12_135"
  | "X12_138"
  | "X12_139"
  | "X12_140"
  | "X12_141"
  | "X12_142"
  | "X12_143"
  | "X12_144"
  | "X12_146"
  | "X12_147"
  | "X12_148"
  | "X12_149"
  | "X12_150"
  | "X12_151"
  | "X12_152"
  | "X12_153"
  | "X12_154"
  | "X12_155"
  | "X12_157"
  | "X12_158"
  | "X12_159"
  | "X12_160"
  | "X12_161"
  | "X12_163"
  | "X12_170"
  | "X12_175"
  | "X12_176"
  | "X12_179"
  | "X12_180"
  | "X12_185"
  | "X12_186"
  | "X12_187"
  | "X12_188"
  | "X12_189"
  | "X12_190"
  | "X12_191"
  | "X12_194"
  | "X12_195"
  | "X12_196"
  | "X12_197"
  | "X12_198"
  | "X12_199"
  | "X12_200"
  | "X12_201"
  | "X12_202"
  | "X12_203"
  | "X12_204"
  | "X12_205"
  | "X12_206"
  | "X12_210"
  | "X12_211"
  | "X12_212"
  | "X12_213"
  | "X12_214"
  | "X12_215"
  | "X12_216"
  | "X12_217"
  | "X12_218"
  | "X12_219"
  | "X12_220"
  | "X12_222"
  | "X12_223"
  | "X12_224"
  | "X12_225"
  | "X12_227"
  | "X12_228"
  | "X12_240"
  | "X12_242"
  | "X12_244"
  | "X12_245"
  | "X12_248"
  | "X12_249"
  | "X12_250"
  | "X12_251"
  | "X12_252"
  | "X12_255"
  | "X12_256"
  | "X12_259"
  | "X12_260"
  | "X12_261"
  | "X12_262"
  | "X12_263"
  | "X12_264"
  | "X12_265"
  | "X12_266"
  | "X12_267"
  | "X12_268"
  | "X12_269"
  | "X12_270"
  | "X12_271"
  | "X12_272"
  | "X12_273"
  | "X12_274"
  | "X12_275"
  | "X12_276"
  | "X12_277"
  | "X12_278"
  | "X12_280"
  | "X12_283"
  | "X12_284"
  | "X12_285"
  | "X12_286"
  | "X12_288"
  | "X12_290"
  | "X12_300"
  | "X12_301"
  | "X12_303"
  | "X12_304"
  | "X12_309"
  | "X12_310"
  | "X12_311"
  | "X12_312"
  | "X12_313"
  | "X12_315"
  | "X12_317"
  | "X12_319"
  | "X12_322"
  | "X12_323"
  | "X12_324"
  | "X12_325"
  | "X12_326"
  | "X12_350"
  | "X12_352"
  | "X12_353"
  | "X12_354"
  | "X12_355"
  | "X12_356"
  | "X12_357"
  | "X12_358"
  | "X12_361"
  | "X12_362"
  | "X12_404"
  | "X12_410"
  | "X12_412"
  | "X12_414"
  | "X12_417"
  | "X12_418"
  | "X12_419"
  | "X12_420"
  | "X12_421"
  | "X12_422"
  | "X12_423"
  | "X12_424"
  | "X12_425"
  | "X12_426"
  | "X12_429"
  | "X12_431"
  | "X12_432"
  | "X12_433"
  | "X12_434"
  | "X12_435"
  | "X12_436"
  | "X12_437"
  | "X12_440"
  | "X12_451"
  | "X12_452"
  | "X12_453"
  | "X12_455"
  | "X12_456"
  | "X12_460"
  | "X12_463"
  | "X12_466"
  | "X12_468"
  | "X12_470"
  | "X12_475"
  | "X12_485"
  | "X12_486"
  | "X12_490"
  | "X12_492"
  | "X12_494"
  | "X12_500"
  | "X12_501"
  | "X12_503"
  | "X12_504"
  | "X12_511"
  | "X12_517"
  | "X12_521"
  | "X12_527"
  | "X12_536"
  | "X12_540"
  | "X12_561"
  | "X12_567"
  | "X12_568"
  | "X12_601"
  | "X12_602"
  | "X12_620"
  | "X12_625"
  | "X12_650"
  | "X12_715"
  | "X12_753"
  | "X12_754"
  | "X12_805"
  | "X12_806"
  | "X12_810"
  | "X12_811"
  | "X12_812"
  | "X12_813"
  | "X12_814"
  | "X12_815"
  | "X12_816"
  | "X12_818"
  | "X12_819"
  | "X12_820"
  | "X12_821"
  | "X12_822"
  | "X12_823"
  | "X12_824"
  | "X12_826"
  | "X12_827"
  | "X12_828"
  | "X12_829"
  | "X12_830"
  | "X12_831"
  | "X12_832"
  | "X12_833"
  | "X12_834"
  | "X12_835"
  | "X12_836"
  | "X12_837"
  | "X12_838"
  | "X12_839"
  | "X12_840"
  | "X12_841"
  | "X12_842"
  | "X12_843"
  | "X12_844"
  | "X12_845"
  | "X12_846"
  | "X12_847"
  | "X12_848"
  | "X12_849"
  | "X12_850"
  | "X12_851"
  | "X12_852"
  | "X12_853"
  | "X12_854"
  | "X12_855"
  | "X12_856"
  | "X12_857"
  | "X12_858"
  | "X12_859"
  | "X12_860"
  | "X12_861"
  | "X12_862"
  | "X12_863"
  | "X12_864"
  | "X12_865"
  | "X12_866"
  | "X12_867"
  | "X12_868"
  | "X12_869"
  | "X12_870"
  | "X12_871"
  | "X12_872"
  | "X12_873"
  | "X12_874"
  | "X12_875"
  | "X12_876"
  | "X12_877"
  | "X12_878"
  | "X12_879"
  | "X12_880"
  | "X12_881"
  | "X12_882"
  | "X12_883"
  | "X12_884"
  | "X12_885"
  | "X12_886"
  | "X12_887"
  | "X12_888"
  | "X12_889"
  | "X12_891"
  | "X12_893"
  | "X12_894"
  | "X12_895"
  | "X12_896"
  | "X12_920"
  | "X12_924"
  | "X12_925"
  | "X12_926"
  | "X12_928"
  | "X12_940"
  | "X12_943"
  | "X12_944"
  | "X12_945"
  | "X12_947"
  | "X12_980"
  | "X12_990"
  | "X12_993"
  | "X12_996"
  | "X12_997"
  | "X12_998"
  | "X12_999"
  | "X12_270_X279"
  | "X12_271_X279"
  | "X12_275_X210"
  | "X12_275_X211"
  | "X12_276_X212"
  | "X12_277_X212"
  | "X12_277_X214"
  | "X12_277_X364"
  | "X12_278_X217"
  | "X12_820_X218"
  | "X12_820_X306"
  | "X12_824_X186"
  | "X12_834_X220"
  | "X12_834_X307"
  | "X12_834_X318"
  | "X12_835_X221"
  | "X12_837_X222"
  | "X12_837_X223"
  | "X12_837_X224"
  | "X12_837_X291"
  | "X12_837_X292"
  | "X12_837_X298"
  | "X12_999_X231";
export type X12UsageIndicatorCode = string;

export type X12ValidateEdi = boolean;

export type X12Version =
  | "VERSION_4010"
  | "VERSION_4030"
  | "VERSION_4050"
  | "VERSION_4060"
  | "VERSION_5010"
  | "VERSION_5010_HIPAA";
export declare namespace CreateStarterMappingTemplate {
  export type Input = CreateStarterMappingTemplateRequest;
  export type Output = CreateStarterMappingTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateMapping {
  export type Input = GenerateMappingRequest;
  export type Output = GenerateMappingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransformerJob {
  export type Input = GetTransformerJobRequest;
  export type Output = GetTransformerJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTransformerJob {
  export type Input = StartTransformerJobRequest;
  export type Output = StartTransformerJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestConversion {
  export type Input = TestConversionRequest;
  export type Output = TestConversionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestMapping {
  export type Input = TestMappingRequest;
  export type Output = TestMappingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestParsing {
  export type Input = TestParsingRequest;
  export type Output = TestParsingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCapability {
  export type Input = CreateCapabilityRequest;
  export type Output = CreateCapabilityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePartnership {
  export type Input = CreatePartnershipRequest;
  export type Output = CreatePartnershipResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfile {
  export type Input = CreateProfileRequest;
  export type Output = CreateProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTransformer {
  export type Input = CreateTransformerRequest;
  export type Output = CreateTransformerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCapability {
  export type Input = DeleteCapabilityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePartnership {
  export type Input = DeletePartnershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProfile {
  export type Input = DeleteProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTransformer {
  export type Input = DeleteTransformerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCapability {
  export type Input = GetCapabilityRequest;
  export type Output = GetCapabilityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPartnership {
  export type Input = GetPartnershipRequest;
  export type Output = GetPartnershipResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfile {
  export type Input = GetProfileRequest;
  export type Output = GetProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransformer {
  export type Input = GetTransformerRequest;
  export type Output = GetTransformerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCapabilities {
  export type Input = ListCapabilitiesRequest;
  export type Output = ListCapabilitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPartnerships {
  export type Input = ListPartnershipsRequest;
  export type Output = ListPartnershipsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfiles {
  export type Input = ListProfilesRequest;
  export type Output = ListProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTransformers {
  export type Input = ListTransformersRequest;
  export type Output = ListTransformersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCapability {
  export type Input = UpdateCapabilityRequest;
  export type Output = UpdateCapabilityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePartnership {
  export type Input = UpdatePartnershipRequest;
  export type Output = UpdatePartnershipResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfile {
  export type Input = UpdateProfileRequest;
  export type Output = UpdateProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTransformer {
  export type Input = UpdateTransformerRequest;
  export type Output = UpdateTransformerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
