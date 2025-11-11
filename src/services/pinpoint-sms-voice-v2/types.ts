import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class PinpointSMSVoiceV2 extends AWSServiceClient {
  associateOriginationIdentity(
    input: AssociateOriginationIdentityRequest,
  ): Effect.Effect<
    AssociateOriginationIdentityResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateProtectConfiguration(
    input: AssociateProtectConfigurationRequest,
  ): Effect.Effect<
    AssociateProtectConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createConfigurationSet(
    input: CreateConfigurationSetRequest,
  ): Effect.Effect<
    CreateConfigurationSetResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEventDestination(
    input: CreateEventDestinationRequest,
  ): Effect.Effect<
    CreateEventDestinationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOptOutList(
    input: CreateOptOutListRequest,
  ): Effect.Effect<
    CreateOptOutListResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPool(
    input: CreatePoolRequest,
  ): Effect.Effect<
    CreatePoolResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProtectConfiguration(
    input: CreateProtectConfigurationRequest,
  ): Effect.Effect<
    CreateProtectConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRegistration(
    input: CreateRegistrationRequest,
  ): Effect.Effect<
    CreateRegistrationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRegistrationAssociation(
    input: CreateRegistrationAssociationRequest,
  ): Effect.Effect<
    CreateRegistrationAssociationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRegistrationAttachment(
    input: CreateRegistrationAttachmentRequest,
  ): Effect.Effect<
    CreateRegistrationAttachmentResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRegistrationVersion(
    input: CreateRegistrationVersionRequest,
  ): Effect.Effect<
    CreateRegistrationVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createVerifiedDestinationNumber(
    input: CreateVerifiedDestinationNumberRequest,
  ): Effect.Effect<
    CreateVerifiedDestinationNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAccountDefaultProtectConfiguration(
    input: DeleteAccountDefaultProtectConfigurationRequest,
  ): Effect.Effect<
    DeleteAccountDefaultProtectConfigurationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteConfigurationSet(
    input: DeleteConfigurationSetRequest,
  ): Effect.Effect<
    DeleteConfigurationSetResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDefaultMessageType(
    input: DeleteDefaultMessageTypeRequest,
  ): Effect.Effect<
    DeleteDefaultMessageTypeResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDefaultSenderId(
    input: DeleteDefaultSenderIdRequest,
  ): Effect.Effect<
    DeleteDefaultSenderIdResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventDestination(
    input: DeleteEventDestinationRequest,
  ): Effect.Effect<
    DeleteEventDestinationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteKeyword(
    input: DeleteKeywordRequest,
  ): Effect.Effect<
    DeleteKeywordResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMediaMessageSpendLimitOverride(
    input: DeleteMediaMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    DeleteMediaMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOptedOutNumber(
    input: DeleteOptedOutNumberRequest,
  ): Effect.Effect<
    DeleteOptedOutNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOptOutList(
    input: DeleteOptOutListRequest,
  ): Effect.Effect<
    DeleteOptOutListResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePool(
    input: DeletePoolRequest,
  ): Effect.Effect<
    DeletePoolResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProtectConfiguration(
    input: DeleteProtectConfigurationRequest,
  ): Effect.Effect<
    DeleteProtectConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProtectConfigurationRuleSetNumberOverride(
    input: DeleteProtectConfigurationRuleSetNumberOverrideRequest,
  ): Effect.Effect<
    DeleteProtectConfigurationRuleSetNumberOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRegistration(
    input: DeleteRegistrationRequest,
  ): Effect.Effect<
    DeleteRegistrationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRegistrationAttachment(
    input: DeleteRegistrationAttachmentRequest,
  ): Effect.Effect<
    DeleteRegistrationAttachmentResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRegistrationFieldValue(
    input: DeleteRegistrationFieldValueRequest,
  ): Effect.Effect<
    DeleteRegistrationFieldValueResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTextMessageSpendLimitOverride(
    input: DeleteTextMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    DeleteTextMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteVerifiedDestinationNumber(
    input: DeleteVerifiedDestinationNumberRequest,
  ): Effect.Effect<
    DeleteVerifiedDestinationNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteVoiceMessageSpendLimitOverride(
    input: DeleteVoiceMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    DeleteVoiceMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesRequest,
  ): Effect.Effect<
    DescribeAccountAttributesResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountLimits(
    input: DescribeAccountLimitsRequest,
  ): Effect.Effect<
    DescribeAccountLimitsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeConfigurationSets(
    input: DescribeConfigurationSetsRequest,
  ): Effect.Effect<
    DescribeConfigurationSetsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeKeywords(
    input: DescribeKeywordsRequest,
  ): Effect.Effect<
    DescribeKeywordsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOptedOutNumbers(
    input: DescribeOptedOutNumbersRequest,
  ): Effect.Effect<
    DescribeOptedOutNumbersResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOptOutLists(
    input: DescribeOptOutListsRequest,
  ): Effect.Effect<
    DescribeOptOutListsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePhoneNumbers(
    input: DescribePhoneNumbersRequest,
  ): Effect.Effect<
    DescribePhoneNumbersResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePools(
    input: DescribePoolsRequest,
  ): Effect.Effect<
    DescribePoolsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeProtectConfigurations(
    input: DescribeProtectConfigurationsRequest,
  ): Effect.Effect<
    DescribeProtectConfigurationsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationAttachments(
    input: DescribeRegistrationAttachmentsRequest,
  ): Effect.Effect<
    DescribeRegistrationAttachmentsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationFieldDefinitions(
    input: DescribeRegistrationFieldDefinitionsRequest,
  ): Effect.Effect<
    DescribeRegistrationFieldDefinitionsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationFieldValues(
    input: DescribeRegistrationFieldValuesRequest,
  ): Effect.Effect<
    DescribeRegistrationFieldValuesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrations(
    input: DescribeRegistrationsRequest,
  ): Effect.Effect<
    DescribeRegistrationsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationSectionDefinitions(
    input: DescribeRegistrationSectionDefinitionsRequest,
  ): Effect.Effect<
    DescribeRegistrationSectionDefinitionsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationTypeDefinitions(
    input: DescribeRegistrationTypeDefinitionsRequest,
  ): Effect.Effect<
    DescribeRegistrationTypeDefinitionsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistrationVersions(
    input: DescribeRegistrationVersionsRequest,
  ): Effect.Effect<
    DescribeRegistrationVersionsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeSenderIds(
    input: DescribeSenderIdsRequest,
  ): Effect.Effect<
    DescribeSenderIdsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeSpendLimits(
    input: DescribeSpendLimitsRequest,
  ): Effect.Effect<
    DescribeSpendLimitsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeVerifiedDestinationNumbers(
    input: DescribeVerifiedDestinationNumbersRequest,
  ): Effect.Effect<
    DescribeVerifiedDestinationNumbersResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateOriginationIdentity(
    input: DisassociateOriginationIdentityRequest,
  ): Effect.Effect<
    DisassociateOriginationIdentityResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateProtectConfiguration(
    input: DisassociateProtectConfigurationRequest,
  ): Effect.Effect<
    DisassociateProtectConfigurationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  discardRegistrationVersion(
    input: DiscardRegistrationVersionRequest,
  ): Effect.Effect<
    DiscardRegistrationVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProtectConfigurationCountryRuleSet(
    input: GetProtectConfigurationCountryRuleSetRequest,
  ): Effect.Effect<
    GetProtectConfigurationCountryRuleSetResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPoolOriginationIdentities(
    input: ListPoolOriginationIdentitiesRequest,
  ): Effect.Effect<
    ListPoolOriginationIdentitiesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProtectConfigurationRuleSetNumberOverrides(
    input: ListProtectConfigurationRuleSetNumberOverridesRequest,
  ): Effect.Effect<
    ListProtectConfigurationRuleSetNumberOverridesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRegistrationAssociations(
    input: ListRegistrationAssociationsRequest,
  ): Effect.Effect<
    ListRegistrationAssociationsResult,
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
    ListTagsForResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putKeyword(
    input: PutKeywordRequest,
  ): Effect.Effect<
    PutKeywordResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putMessageFeedback(
    input: PutMessageFeedbackRequest,
  ): Effect.Effect<
    PutMessageFeedbackResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putOptedOutNumber(
    input: PutOptedOutNumberRequest,
  ): Effect.Effect<
    PutOptedOutNumberResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putProtectConfigurationRuleSetNumberOverride(
    input: PutProtectConfigurationRuleSetNumberOverrideRequest,
  ): Effect.Effect<
    PutProtectConfigurationRuleSetNumberOverrideResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putRegistrationFieldValue(
    input: PutRegistrationFieldValueRequest,
  ): Effect.Effect<
    PutRegistrationFieldValueResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  releasePhoneNumber(
    input: ReleasePhoneNumberRequest,
  ): Effect.Effect<
    ReleasePhoneNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  releaseSenderId(
    input: ReleaseSenderIdRequest,
  ): Effect.Effect<
    ReleaseSenderIdResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  requestPhoneNumber(
    input: RequestPhoneNumberRequest,
  ): Effect.Effect<
    RequestPhoneNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  requestSenderId(
    input: RequestSenderIdRequest,
  ): Effect.Effect<
    RequestSenderIdResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendDestinationNumberVerificationCode(
    input: SendDestinationNumberVerificationCodeRequest,
  ): Effect.Effect<
    SendDestinationNumberVerificationCodeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendMediaMessage(
    input: SendMediaMessageRequest,
  ): Effect.Effect<
    SendMediaMessageResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendTextMessage(
    input: SendTextMessageRequest,
  ): Effect.Effect<
    SendTextMessageResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendVoiceMessage(
    input: SendVoiceMessageRequest,
  ): Effect.Effect<
    SendVoiceMessageResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setAccountDefaultProtectConfiguration(
    input: SetAccountDefaultProtectConfigurationRequest,
  ): Effect.Effect<
    SetAccountDefaultProtectConfigurationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setDefaultMessageFeedbackEnabled(
    input: SetDefaultMessageFeedbackEnabledRequest,
  ): Effect.Effect<
    SetDefaultMessageFeedbackEnabledResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setDefaultMessageType(
    input: SetDefaultMessageTypeRequest,
  ): Effect.Effect<
    SetDefaultMessageTypeResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setDefaultSenderId(
    input: SetDefaultSenderIdRequest,
  ): Effect.Effect<
    SetDefaultSenderIdResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setMediaMessageSpendLimitOverride(
    input: SetMediaMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    SetMediaMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setTextMessageSpendLimitOverride(
    input: SetTextMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    SetTextMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  setVoiceMessageSpendLimitOverride(
    input: SetVoiceMessageSpendLimitOverrideRequest,
  ): Effect.Effect<
    SetVoiceMessageSpendLimitOverrideResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  submitRegistrationVersion(
    input: SubmitRegistrationVersionRequest,
  ): Effect.Effect<
    SubmitRegistrationVersionResult,
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
    TagResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventDestination(
    input: UpdateEventDestinationRequest,
  ): Effect.Effect<
    UpdateEventDestinationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePhoneNumber(
    input: UpdatePhoneNumberRequest,
  ): Effect.Effect<
    UpdatePhoneNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePool(
    input: UpdatePoolRequest,
  ): Effect.Effect<
    UpdatePoolResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProtectConfiguration(
    input: UpdateProtectConfigurationRequest,
  ): Effect.Effect<
    UpdateProtectConfigurationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProtectConfigurationCountryRuleSet(
    input: UpdateProtectConfigurationCountryRuleSetRequest,
  ): Effect.Effect<
    UpdateProtectConfigurationCountryRuleSetResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSenderId(
    input: UpdateSenderIdRequest,
  ): Effect.Effect<
    UpdateSenderIdResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  verifyDestinationNumber(
    input: VerifyDestinationNumberRequest,
  ): Effect.Effect<
    VerifyDestinationNumberResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class PinpointSmsVoiceV2 extends PinpointSMSVoiceV2 {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Reason?: string;
}> {}
export type AccessDeniedExceptionReason = string;

export interface AccountAttribute {
  Name: string;
  Value: string;
}
export type AccountAttributeList = Array<AccountAttribute>;
export type AccountAttributeName = string;

export interface AccountLimit {
  Name: string;
  Used: number;
  Max: number;
}
export type AccountLimitList = Array<AccountLimit>;
export type AccountLimitName = string;

export type AmazonResourceName = string;

export interface AssociateOriginationIdentityRequest {
  PoolId: string;
  OriginationIdentity: string;
  IsoCountryCode: string;
  ClientToken?: string;
}
export interface AssociateOriginationIdentityResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  IsoCountryCode?: string;
}
export interface AssociateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  ConfigurationSetName: string;
}
export interface AssociateProtectConfigurationResult {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
}
export type AttachmentBody = Uint8Array | string;

export type AttachmentStatus = string;

export type AttachmentUploadErrorReason = string;

export type AttachmentUrl = string;

export type ClientToken = string;

export interface CloudWatchLogsDestination {
  IamRoleArn: string;
  LogGroupArn: string;
}
export interface ConfigurationSetFilter {
  Name: string;
  Values: Array<string>;
}
export type ConfigurationSetFilterList = Array<ConfigurationSetFilter>;
export type ConfigurationSetFilterName = string;

export interface ConfigurationSetInformation {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  EventDestinations: Array<EventDestination>;
  DefaultMessageType?: string;
  DefaultSenderId?: string;
  DefaultMessageFeedbackEnabled?: boolean;
  CreatedTimestamp: Date | string;
  ProtectConfigurationId?: string;
}
export type ConfigurationSetInformationList =
  Array<ConfigurationSetInformation>;
export type ConfigurationSetName = string;

export type ConfigurationSetNameList = Array<string>;
export type ConfigurationSetNameOrArn = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Reason?: string;
  readonly ResourceType?: string;
  readonly ResourceId?: string;
}> {}
export type ConflictExceptionReason = string;

export type ContextKey = string;

export type ContextMap = Record<string, string>;
export type ContextValue = string;

export interface CreateConfigurationSetRequest {
  ConfigurationSetName: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateConfigurationSetResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  Tags?: Array<Tag>;
  CreatedTimestamp?: Date | string;
}
export interface CreateEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  MatchingEventTypes: Array<string>;
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
  ClientToken?: string;
}
export interface CreateEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export interface CreateOptOutListRequest {
  OptOutListName: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateOptOutListResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  Tags?: Array<Tag>;
  CreatedTimestamp?: Date | string;
}
export interface CreatePoolRequest {
  OriginationIdentity: string;
  IsoCountryCode: string;
  MessageType: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreatePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  Tags?: Array<Tag>;
  CreatedTimestamp?: Date | string;
}
export interface CreateProtectConfigurationRequest {
  ClientToken?: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date | string;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
  Tags?: Array<Tag>;
}
export interface CreateRegistrationAssociationRequest {
  RegistrationId: string;
  ResourceId: string;
}
export interface CreateRegistrationAssociationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  ResourceArn: string;
  ResourceId: string;
  ResourceType: string;
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export interface CreateRegistrationAttachmentRequest {
  AttachmentBody?: Uint8Array | string;
  AttachmentUrl?: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateRegistrationAttachmentResult {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  Tags?: Array<Tag>;
  CreatedTimestamp: Date | string;
}
export interface CreateRegistrationRequest {
  RegistrationType: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateRegistrationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  AdditionalAttributes?: Record<string, string>;
  Tags?: Array<Tag>;
  CreatedTimestamp: Date | string;
}
export interface CreateRegistrationVersionRequest {
  RegistrationId: string;
}
export interface CreateRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
}
export interface CreateVerifiedDestinationNumberRequest {
  DestinationPhoneNumber: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateVerifiedDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  Tags?: Array<Tag>;
  CreatedTimestamp: Date | string;
}
export interface DeleteAccountDefaultProtectConfigurationRequest {}
export interface DeleteAccountDefaultProtectConfigurationResult {
  DefaultProtectConfigurationArn: string;
  DefaultProtectConfigurationId: string;
}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export interface DeleteConfigurationSetResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestinations?: Array<EventDestination>;
  DefaultMessageType?: string;
  DefaultSenderId?: string;
  DefaultMessageFeedbackEnabled?: boolean;
  CreatedTimestamp?: Date | string;
}
export interface DeleteDefaultMessageTypeRequest {
  ConfigurationSetName: string;
}
export interface DeleteDefaultMessageTypeResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageType?: string;
}
export interface DeleteDefaultSenderIdRequest {
  ConfigurationSetName: string;
}
export interface DeleteDefaultSenderIdResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  SenderId?: string;
}
export interface DeleteEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export interface DeleteKeywordRequest {
  OriginationIdentity: string;
  Keyword: string;
}
export interface DeleteKeywordResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keyword?: string;
  KeywordMessage?: string;
  KeywordAction?: string;
}
export interface DeleteMediaMessageSpendLimitOverrideRequest {}
export interface DeleteMediaMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface DeleteOptedOutNumberRequest {
  OptOutListName: string;
  OptedOutNumber: string;
}
export interface DeleteOptedOutNumberResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumber?: string;
  OptedOutTimestamp?: Date | string;
  EndUserOptedOut?: boolean;
}
export interface DeleteOptOutListRequest {
  OptOutListName: string;
}
export interface DeleteOptOutListResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  CreatedTimestamp?: Date | string;
}
export interface DeletePoolRequest {
  PoolId: string;
}
export interface DeletePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  CreatedTimestamp?: Date | string;
}
export interface DeleteProtectConfigurationRequest {
  ProtectConfigurationId: string;
}
export interface DeleteProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date | string;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export interface DeleteProtectConfigurationRuleSetNumberOverrideRequest {
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
}
export interface DeleteProtectConfigurationRuleSetNumberOverrideResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date | string;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date | string;
}
export interface DeleteRegistrationAttachmentRequest {
  RegistrationAttachmentId: string;
}
export interface DeleteRegistrationAttachmentResult {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  AttachmentUploadErrorReason?: string;
  CreatedTimestamp: Date | string;
}
export interface DeleteRegistrationFieldValueRequest {
  RegistrationId: string;
  FieldPath: string;
}
export interface DeleteRegistrationFieldValueResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  FieldPath: string;
  SelectChoices?: Array<string>;
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export interface DeleteRegistrationRequest {
  RegistrationId: string;
}
export interface DeleteRegistrationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  ApprovedVersionNumber?: number;
  LatestDeniedVersionNumber?: number;
  AdditionalAttributes?: Record<string, string>;
  CreatedTimestamp: Date | string;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date | string;
}
export interface DeleteTextMessageSpendLimitOverrideRequest {}
export interface DeleteTextMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface DeleteVerifiedDestinationNumberRequest {
  VerifiedDestinationNumberId: string;
}
export interface DeleteVerifiedDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date | string;
}
export interface DeleteVoiceMessageSpendLimitOverrideRequest {}
export interface DeleteVoiceMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export type DeliveryStreamArn = string;

export interface DescribeAccountAttributesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeAccountAttributesResult {
  AccountAttributes?: Array<AccountAttribute>;
  NextToken?: string;
}
export interface DescribeAccountLimitsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeAccountLimitsResult {
  AccountLimits?: Array<AccountLimit>;
  NextToken?: string;
}
export interface DescribeConfigurationSetsRequest {
  ConfigurationSetNames?: Array<string>;
  Filters?: Array<ConfigurationSetFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeConfigurationSetsResult {
  ConfigurationSets?: Array<ConfigurationSetInformation>;
  NextToken?: string;
}
export interface DescribeKeywordsRequest {
  OriginationIdentity: string;
  Keywords?: Array<string>;
  Filters?: Array<KeywordFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeKeywordsResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keywords?: Array<KeywordInformation>;
  NextToken?: string;
}
export interface DescribeOptedOutNumbersRequest {
  OptOutListName: string;
  OptedOutNumbers?: Array<string>;
  Filters?: Array<OptedOutFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeOptedOutNumbersResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumbers?: Array<OptedOutNumberInformation>;
  NextToken?: string;
}
export interface DescribeOptOutListsRequest {
  OptOutListNames?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface DescribeOptOutListsResult {
  OptOutLists?: Array<OptOutListInformation>;
  NextToken?: string;
}
export interface DescribePhoneNumbersRequest {
  PhoneNumberIds?: Array<string>;
  Filters?: Array<PhoneNumberFilter>;
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface DescribePhoneNumbersResult {
  PhoneNumbers?: Array<PhoneNumberInformation>;
  NextToken?: string;
}
export interface DescribePoolsRequest {
  PoolIds?: Array<string>;
  Filters?: Array<PoolFilter>;
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface DescribePoolsResult {
  Pools?: Array<PoolInformation>;
  NextToken?: string;
}
export interface DescribeProtectConfigurationsRequest {
  ProtectConfigurationIds?: Array<string>;
  Filters?: Array<ProtectConfigurationFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeProtectConfigurationsResult {
  ProtectConfigurations?: Array<ProtectConfigurationInformation>;
  NextToken?: string;
}
export interface DescribeRegistrationAttachmentsRequest {
  RegistrationAttachmentIds?: Array<string>;
  Filters?: Array<RegistrationAttachmentFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationAttachmentsResult {
  RegistrationAttachments: Array<RegistrationAttachmentsInformation>;
  NextToken?: string;
}
export interface DescribeRegistrationFieldDefinitionsRequest {
  RegistrationType: string;
  SectionPath?: string;
  FieldPaths?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationFieldDefinitionsResult {
  RegistrationType: string;
  RegistrationFieldDefinitions: Array<RegistrationFieldDefinition>;
  NextToken?: string;
}
export interface DescribeRegistrationFieldValuesRequest {
  RegistrationId: string;
  VersionNumber?: number;
  SectionPath?: string;
  FieldPaths?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationFieldValuesResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationFieldValues: Array<RegistrationFieldValueInformation>;
  NextToken?: string;
}
export interface DescribeRegistrationSectionDefinitionsRequest {
  RegistrationType: string;
  SectionPaths?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationSectionDefinitionsResult {
  RegistrationType: string;
  RegistrationSectionDefinitions: Array<RegistrationSectionDefinition>;
  NextToken?: string;
}
export interface DescribeRegistrationsRequest {
  RegistrationIds?: Array<string>;
  Filters?: Array<RegistrationFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationsResult {
  Registrations: Array<RegistrationInformation>;
  NextToken?: string;
}
export interface DescribeRegistrationTypeDefinitionsRequest {
  RegistrationTypes?: Array<string>;
  Filters?: Array<RegistrationTypeFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationTypeDefinitionsResult {
  RegistrationTypeDefinitions: Array<RegistrationTypeDefinition>;
  NextToken?: string;
}
export interface DescribeRegistrationVersionsRequest {
  RegistrationId: string;
  VersionNumbers?: Array<number>;
  Filters?: Array<RegistrationVersionFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRegistrationVersionsResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationVersions: Array<RegistrationVersionInformation>;
  NextToken?: string;
}
export interface DescribeSenderIdsRequest {
  SenderIds?: Array<SenderIdAndCountry>;
  Filters?: Array<SenderIdFilter>;
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface DescribeSenderIdsResult {
  SenderIds?: Array<SenderIdInformation>;
  NextToken?: string;
}
export interface DescribeSpendLimitsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSpendLimitsResult {
  SpendLimits?: Array<SpendLimit>;
  NextToken?: string;
}
export interface DescribeVerifiedDestinationNumbersRequest {
  VerifiedDestinationNumberIds?: Array<string>;
  DestinationPhoneNumbers?: Array<string>;
  Filters?: Array<VerifiedDestinationNumberFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeVerifiedDestinationNumbersResult {
  VerifiedDestinationNumbers: Array<VerifiedDestinationNumberInformation>;
  NextToken?: string;
}
export type DestinationCountryParameterKey = string;

export type DestinationCountryParameters = Record<string, string>;
export type DestinationCountryParameterValue = string;

export type DestinationPhoneNumberList = Array<string>;
export interface DisassociateOriginationIdentityRequest {
  PoolId: string;
  OriginationIdentity: string;
  IsoCountryCode: string;
  ClientToken?: string;
}
export interface DisassociateOriginationIdentityResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  IsoCountryCode?: string;
}
export interface DisassociateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  ConfigurationSetName: string;
}
export interface DisassociateProtectConfigurationResult {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
}
export interface DiscardRegistrationVersionRequest {
  RegistrationId: string;
}
export interface DiscardRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
}
export interface EventDestination {
  EventDestinationName: string;
  Enabled: boolean;
  MatchingEventTypes: Array<string>;
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
}
export type EventDestinationList = Array<EventDestination>;
export type EventDestinationName = string;

export type EventType = string;

export type EventTypeList = Array<string>;
export type FieldPath = string;

export type FieldPathList = Array<string>;
export type FieldRequirement = string;

export type FieldType = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export interface GetProtectConfigurationCountryRuleSetRequest {
  ProtectConfigurationId: string;
  NumberCapability: string;
}
export interface GetProtectConfigurationCountryRuleSetResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation>;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date | string;
}
export type IamRoleArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type IsoCountryCode = string;

export type Keyword = string;

export type KeywordAction = string;

export interface KeywordFilter {
  Name: string;
  Values: Array<string>;
}
export type KeywordFilterList = Array<KeywordFilter>;
export type KeywordFilterName = string;

export interface KeywordInformation {
  Keyword: string;
  KeywordMessage: string;
  KeywordAction: string;
}
export type KeywordInformationList = Array<KeywordInformation>;
export type KeywordList = Array<string>;
export type KeywordMessage = string;

export interface KinesisFirehoseDestination {
  IamRoleArn: string;
  DeliveryStreamArn: string;
}
export type LanguageCode = string;

export interface ListPoolOriginationIdentitiesRequest {
  PoolId: string;
  Filters?: Array<PoolOriginationIdentitiesFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPoolOriginationIdentitiesResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentities?: Array<OriginationIdentityMetadata>;
  NextToken?: string;
}
export type ListProtectConfigurationRuleSetNumberOverrideFilter =
  Array<ProtectConfigurationRuleSetNumberOverrideFilterItem>;
export interface ListProtectConfigurationRuleSetNumberOverridesRequest {
  ProtectConfigurationId: string;
  Filters?: Array<ProtectConfigurationRuleSetNumberOverrideFilterItem>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProtectConfigurationRuleSetNumberOverridesResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  RuleSetNumberOverrides?: Array<ProtectConfigurationRuleSetNumberOverride>;
  NextToken?: string;
}
export interface ListRegistrationAssociationsRequest {
  RegistrationId: string;
  Filters?: Array<RegistrationAssociationFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRegistrationAssociationsResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationAssociations: Array<RegistrationAssociationMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResult {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export type LogGroupArn = string;

export type MaxPrice = string;

export type MaxResults = number;

export type MediaMessageOriginationIdentity = string;

export type MediaUrlList = Array<string>;
export type MediaUrlValue = string;

export type MessageFeedbackStatus = string;

export type MessageId = string;

export type MessageType = string;

export type MessageTypeList = Array<string>;
export type MonthlyLimit = number;

export type NextToken = string;

export type NonEmptyTagList = Array<Tag>;
export type NumberCapability = string;

export type NumberCapabilityList = Array<string>;
export type NumberStatus = string;

export type NumberType = string;

export interface OptedOutFilter {
  Name: string;
  Values: Array<string>;
}
export type OptedOutFilterList = Array<OptedOutFilter>;
export type OptedOutFilterName = string;

export interface OptedOutNumberInformation {
  OptedOutNumber: string;
  OptedOutTimestamp: Date | string;
  EndUserOptedOut: boolean;
}
export type OptedOutNumberInformationList = Array<OptedOutNumberInformation>;
export type OptedOutNumberList = Array<string>;
export interface OptOutListInformation {
  OptOutListArn: string;
  OptOutListName: string;
  CreatedTimestamp: Date | string;
}
export type OptOutListInformationList = Array<OptOutListInformation>;
export type OptOutListName = string;

export type OptOutListNameList = Array<string>;
export type OptOutListNameOrArn = string;

export interface OriginationIdentityMetadata {
  OriginationIdentityArn: string;
  OriginationIdentity: string;
  IsoCountryCode: string;
  NumberCapabilities: Array<string>;
  PhoneNumber?: string;
}
export type OriginationIdentityMetadataList =
  Array<OriginationIdentityMetadata>;
export type Owner = string;

export type PhoneNumber = string;

export interface PhoneNumberFilter {
  Name: string;
  Values: Array<string>;
}
export type PhoneNumberFilterList = Array<PhoneNumberFilter>;
export type PhoneNumberFilterName = string;

export type PhoneNumberIdList = Array<string>;
export type PhoneNumberIdOrArn = string;

export interface PhoneNumberInformation {
  PhoneNumberArn: string;
  PhoneNumberId?: string;
  PhoneNumber: string;
  Status: string;
  IsoCountryCode: string;
  MessageType: string;
  NumberCapabilities: Array<string>;
  NumberType: string;
  MonthlyLeasingPrice: string;
  TwoWayEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled: boolean;
  OptOutListName: string;
  DeletionProtectionEnabled: boolean;
  PoolId?: string;
  RegistrationId?: string;
  CreatedTimestamp: Date | string;
}
export type PhoneNumberInformationList = Array<PhoneNumberInformation>;
export type PhoneOrPoolIdOrArn = string;

export type PhoneOrSenderIdOrArn = string;

export interface PoolFilter {
  Name: string;
  Values: Array<string>;
}
export type PoolFilterList = Array<PoolFilter>;
export type PoolFilterName = string;

export type PoolIdList = Array<string>;
export type PoolIdOrArn = string;

export interface PoolInformation {
  PoolArn: string;
  PoolId: string;
  Status: string;
  MessageType: string;
  TwoWayEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled: boolean;
  OptOutListName: string;
  SharedRoutesEnabled: boolean;
  DeletionProtectionEnabled: boolean;
  CreatedTimestamp: Date | string;
}
export type PoolInformationList = Array<PoolInformation>;
export interface PoolOriginationIdentitiesFilter {
  Name: string;
  Values: Array<string>;
}
export type PoolOriginationIdentitiesFilterList =
  Array<PoolOriginationIdentitiesFilter>;
export type PoolOriginationIdentitiesFilterName = string;

export type PoolStatus = string;

export type ProtectConfigurationArn = string;

export type ProtectConfigurationCountryRuleSet = Record<
  string,
  ProtectConfigurationCountryRuleSetInformation
>;
export interface ProtectConfigurationCountryRuleSetInformation {
  ProtectStatus: string;
}
export interface ProtectConfigurationFilter {
  Name: string;
  Values: Array<string>;
}
export type ProtectConfigurationFilterList = Array<ProtectConfigurationFilter>;
export type ProtectConfigurationFilterName = string;

export type ProtectConfigurationId = string;

export type ProtectConfigurationIdList = Array<string>;
export type ProtectConfigurationIdOrArn = string;

export interface ProtectConfigurationInformation {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date | string;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export type ProtectConfigurationInformationList =
  Array<ProtectConfigurationInformation>;
export type ProtectConfigurationRuleOverrideAction = string;

export interface ProtectConfigurationRuleSetNumberOverride {
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date | string;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date | string;
}
export interface ProtectConfigurationRuleSetNumberOverrideFilterItem {
  Name: string;
  Values: Array<string>;
}
export type ProtectConfigurationRuleSetNumberOverrideFilterName = string;

export type ProtectConfigurationRuleSetNumberOverrideList =
  Array<ProtectConfigurationRuleSetNumberOverride>;
export type ProtectStatus = string;

export interface PutKeywordRequest {
  OriginationIdentity: string;
  Keyword: string;
  KeywordMessage: string;
  KeywordAction?: string;
}
export interface PutKeywordResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keyword?: string;
  KeywordMessage?: string;
  KeywordAction?: string;
}
export interface PutMessageFeedbackRequest {
  MessageId: string;
  MessageFeedbackStatus: string;
}
export interface PutMessageFeedbackResult {
  MessageId: string;
  MessageFeedbackStatus: string;
}
export interface PutOptedOutNumberRequest {
  OptOutListName: string;
  OptedOutNumber: string;
}
export interface PutOptedOutNumberResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumber?: string;
  OptedOutTimestamp?: Date | string;
  EndUserOptedOut?: boolean;
}
export interface PutProtectConfigurationRuleSetNumberOverrideRequest {
  ClientToken?: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  Action: string;
  ExpirationTimestamp?: Date | string;
}
export interface PutProtectConfigurationRuleSetNumberOverrideResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date | string;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date | string;
}
export interface PutRegistrationFieldValueRequest {
  RegistrationId: string;
  FieldPath: string;
  SelectChoices?: Array<string>;
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export interface PutRegistrationFieldValueResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  FieldPath: string;
  SelectChoices?: Array<string>;
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date | string;
}
export type RegistrationAssociationBehavior = string;

export interface RegistrationAssociationFilter {
  Name: string;
  Values: Array<string>;
}
export type RegistrationAssociationFilterList =
  Array<RegistrationAssociationFilter>;
export type RegistrationAssociationFilterName = string;

export interface RegistrationAssociationMetadata {
  ResourceArn: string;
  ResourceId: string;
  ResourceType: string;
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export type RegistrationAssociationMetadataList =
  Array<RegistrationAssociationMetadata>;
export interface RegistrationAttachmentFilter {
  Name: string;
  Values: Array<string>;
}
export type RegistrationAttachmentFilterList =
  Array<RegistrationAttachmentFilter>;
export type RegistrationAttachmentFilterName = string;

export type RegistrationAttachmentIdList = Array<string>;
export type RegistrationAttachmentIdOrArn = string;

export interface RegistrationAttachmentsInformation {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  AttachmentUploadErrorReason?: string;
  CreatedTimestamp: Date | string;
}
export type RegistrationAttachmentsInformationList =
  Array<RegistrationAttachmentsInformation>;
export interface RegistrationDeniedReasonInformation {
  Reason: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export type RegistrationDeniedReasonInformationList =
  Array<RegistrationDeniedReasonInformation>;
export type RegistrationDisassociationBehavior = string;

export interface RegistrationFieldDefinition {
  SectionPath: string;
  FieldPath: string;
  FieldType: string;
  FieldRequirement: string;
  SelectValidation?: SelectValidation;
  TextValidation?: TextValidation;
  DisplayHints: RegistrationFieldDisplayHints;
}
export type RegistrationFieldDefinitionList =
  Array<RegistrationFieldDefinition>;
export interface RegistrationFieldDisplayHints {
  Title: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
  SelectOptionDescriptions?: Array<SelectOptionDescription>;
  TextValidationDescription?: string;
  ExampleTextValue?: string;
}
export interface RegistrationFieldValueInformation {
  FieldPath: string;
  SelectChoices?: Array<string>;
  TextValue?: string;
  RegistrationAttachmentId?: string;
  DeniedReason?: string;
}
export type RegistrationFieldValueInformationList =
  Array<RegistrationFieldValueInformation>;
export interface RegistrationFilter {
  Name: string;
  Values: Array<string>;
}
export type RegistrationFilterList = Array<RegistrationFilter>;
export type RegistrationFilterName = string;

export type RegistrationIdList = Array<string>;
export type RegistrationIdOrArn = string;

export interface RegistrationInformation {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  ApprovedVersionNumber?: number;
  LatestDeniedVersionNumber?: number;
  AdditionalAttributes?: Record<string, string>;
  CreatedTimestamp: Date | string;
}
export type RegistrationInformationList = Array<RegistrationInformation>;
export interface RegistrationSectionDefinition {
  SectionPath: string;
  DisplayHints: RegistrationSectionDisplayHints;
}
export type RegistrationSectionDefinitionList =
  Array<RegistrationSectionDefinition>;
export interface RegistrationSectionDisplayHints {
  Title: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export type RegistrationStatus = string;

export type RegistrationType = string;

export interface RegistrationTypeDefinition {
  RegistrationType: string;
  SupportedAssociations?: Array<SupportedAssociation>;
  DisplayHints: RegistrationTypeDisplayHints;
}
export type RegistrationTypeDefinitionList = Array<RegistrationTypeDefinition>;
export interface RegistrationTypeDisplayHints {
  Title: string;
  ShortDescription?: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export interface RegistrationTypeFilter {
  Name: string;
  Values: Array<string>;
}
export type RegistrationTypeFilterList = Array<RegistrationTypeFilter>;
export type RegistrationTypeFilterName = string;

export type RegistrationTypeList = Array<string>;
export interface RegistrationVersionFilter {
  Name: string;
  Values: Array<string>;
}
export type RegistrationVersionFilterList = Array<RegistrationVersionFilter>;
export type RegistrationVersionFilterName = string;

export interface RegistrationVersionInformation {
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  DeniedReasons?: Array<RegistrationDeniedReasonInformation>;
}
export type RegistrationVersionInformationList =
  Array<RegistrationVersionInformation>;
export type RegistrationVersionNumber = number;

export type RegistrationVersionNumberList = Array<number>;
export type RegistrationVersionStatus = string;

export interface RegistrationVersionStatusHistory {
  DraftTimestamp: Date | string;
  SubmittedTimestamp?: Date | string;
  ReviewingTimestamp?: Date | string;
  RequiresAuthenticationTimestamp?: Date | string;
  ApprovedTimestamp?: Date | string;
  DiscardedTimestamp?: Date | string;
  DeniedTimestamp?: Date | string;
  RevokedTimestamp?: Date | string;
  ArchivedTimestamp?: Date | string;
}
export interface ReleasePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface ReleasePhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: Array<string>;
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  RegistrationId?: string;
  CreatedTimestamp?: Date | string;
}
export interface ReleaseSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
}
export interface ReleaseSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: Array<string>;
  MonthlyLeasingPrice: string;
  Registered: boolean;
  RegistrationId?: string;
}
export type RequestableNumberType = string;

export interface RequestPhoneNumberRequest {
  IsoCountryCode: string;
  MessageType: string;
  NumberCapabilities: Array<string>;
  NumberType: string;
  OptOutListName?: string;
  PoolId?: string;
  RegistrationId?: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface RequestPhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: Array<string>;
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  DeletionProtectionEnabled?: boolean;
  PoolId?: string;
  RegistrationId?: string;
  Tags?: Array<Tag>;
  CreatedTimestamp?: Date | string;
}
export interface RequestSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes?: Array<string>;
  DeletionProtectionEnabled?: boolean;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface RequestSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: Array<string>;
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  Tags?: Array<Tag>;
}
export type ResourceIdOrArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceId?: string;
}> {}
export type ResourcePolicy = string;

export type ResourceType = string;

export type SectionPath = string;

export type SectionPathList = Array<string>;
export type SelectChoice = string;

export type SelectChoiceList = Array<string>;
export interface SelectOptionDescription {
  Option: string;
  Title?: string;
  Description?: string;
}
export type SelectOptionDescriptionsList = Array<SelectOptionDescription>;
export interface SelectValidation {
  MinChoices: number;
  MaxChoices: number;
  Options: Array<string>;
}
export interface SendDestinationNumberVerificationCodeRequest {
  VerifiedDestinationNumberId: string;
  VerificationChannel: string;
  LanguageCode?: string;
  OriginationIdentity?: string;
  ConfigurationSetName?: string;
  Context?: Record<string, string>;
  DestinationCountryParameters?: Record<string, string>;
}
export interface SendDestinationNumberVerificationCodeResult {
  MessageId: string;
}
export type SenderId = string;

export interface SenderIdAndCountry {
  SenderId: string;
  IsoCountryCode: string;
}
export interface SenderIdFilter {
  Name: string;
  Values: Array<string>;
}
export type SenderIdFilterList = Array<SenderIdFilter>;
export type SenderIdFilterName = string;

export interface SenderIdInformation {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: Array<string>;
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  RegistrationId?: string;
}
export type SenderIdInformationList = Array<SenderIdInformation>;
export type SenderIdList = Array<SenderIdAndCountry>;
export type SenderIdOrArn = string;

export interface SendMediaMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity: string;
  MessageBody?: string;
  MediaUrls?: Array<string>;
  ConfigurationSetName?: string;
  MaxPrice?: string;
  TimeToLive?: number;
  Context?: Record<string, string>;
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendMediaMessageResult {
  MessageId?: string;
}
export interface SendTextMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity?: string;
  MessageBody?: string;
  MessageType?: string;
  Keyword?: string;
  ConfigurationSetName?: string;
  MaxPrice?: string;
  TimeToLive?: number;
  Context?: Record<string, string>;
  DestinationCountryParameters?: Record<string, string>;
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendTextMessageResult {
  MessageId?: string;
}
export interface SendVoiceMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity: string;
  MessageBody?: string;
  MessageBodyTextType?: string;
  VoiceId?: string;
  ConfigurationSetName?: string;
  MaxPricePerMinute?: string;
  TimeToLive?: number;
  Context?: Record<string, string>;
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendVoiceMessageResult {
  MessageId?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Reason?: string;
}> {}
export type ServiceQuotaExceededExceptionReason = string;

export interface SetAccountDefaultProtectConfigurationRequest {
  ProtectConfigurationId: string;
}
export interface SetAccountDefaultProtectConfigurationResult {
  DefaultProtectConfigurationArn: string;
  DefaultProtectConfigurationId: string;
}
export interface SetDefaultMessageFeedbackEnabledRequest {
  ConfigurationSetName: string;
  MessageFeedbackEnabled: boolean;
}
export interface SetDefaultMessageFeedbackEnabledResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SetDefaultMessageTypeRequest {
  ConfigurationSetName: string;
  MessageType: string;
}
export interface SetDefaultMessageTypeResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageType?: string;
}
export interface SetDefaultSenderIdRequest {
  ConfigurationSetName: string;
  SenderId: string;
}
export interface SetDefaultSenderIdResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  SenderId?: string;
}
export interface SetMediaMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetMediaMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetTextMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetTextMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetVoiceMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetVoiceMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SnsDestination {
  TopicArn: string;
}
export type SnsTopicArn = string;

export interface SpendLimit {
  Name: string;
  EnforcedLimit: number;
  MaxLimit: number;
  Overridden: boolean;
}
export type SpendLimitList = Array<SpendLimit>;
export type SpendLimitName = string;

export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export interface SubmitRegistrationVersionRequest {
  RegistrationId: string;
}
export interface SubmitRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
}
export interface SupportedAssociation {
  ResourceType: string;
  IsoCountryCode?: string;
  AssociationBehavior: string;
  DisassociationBehavior: string;
}
export type SupportedAssociationList = Array<SupportedAssociation>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResult {}
export type TagValue = string;

export type TextMessageBody = string;

export type TextMessageOriginationIdentity = string;

export interface TextValidation {
  MinLength: number;
  MaxLength: number;
  Pattern: string;
}
export type TextValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TimeToLive = number;

export type TwoWayChannelArn = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdateEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  Enabled?: boolean;
  MatchingEventTypes?: Array<string>;
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
}
export interface UpdateEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdatePhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: Array<string>;
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  DeletionProtectionEnabled?: boolean;
  RegistrationId?: string;
  CreatedTimestamp?: Date | string;
}
export interface UpdatePoolRequest {
  PoolId: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdatePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  CreatedTimestamp?: Date | string;
}
export interface UpdateProtectConfigurationCountryRuleSetRequest {
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSetUpdates: Record<
    string,
    ProtectConfigurationCountryRuleSetInformation
  >;
}
export interface UpdateProtectConfigurationCountryRuleSetResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSet: Record<string, ProtectConfigurationCountryRuleSetInformation>;
}
export interface UpdateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdateProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date | string;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export interface UpdateSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdateSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: Array<string>;
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  RegistrationId?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Reason?: string;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VerificationChannel = string;

export type VerificationCode = string;

export type VerificationMessageOriginationIdentity = string;

export type VerificationStatus = string;

export interface VerifiedDestinationNumberFilter {
  Name: string;
  Values: Array<string>;
}
export type VerifiedDestinationNumberFilterList =
  Array<VerifiedDestinationNumberFilter>;
export type VerifiedDestinationNumberFilterName = string;

export type VerifiedDestinationNumberIdList = Array<string>;
export type VerifiedDestinationNumberIdOrArn = string;

export interface VerifiedDestinationNumberInformation {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  CreatedTimestamp: Date | string;
}
export type VerifiedDestinationNumberInformationList =
  Array<VerifiedDestinationNumberInformation>;
export interface VerifyDestinationNumberRequest {
  VerifiedDestinationNumberId: string;
  VerificationCode: string;
}
export interface VerifyDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  CreatedTimestamp: Date | string;
}
export type VoiceId = string;

export type VoiceMessageBody = string;

export type VoiceMessageBodyTextType = string;

export type VoiceMessageOriginationIdentity = string;

export declare namespace AssociateOriginationIdentity {
  export type Input = AssociateOriginationIdentityRequest;
  export type Output = AssociateOriginationIdentityResult;
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

export declare namespace AssociateProtectConfiguration {
  export type Input = AssociateProtectConfigurationRequest;
  export type Output = AssociateProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfigurationSet {
  export type Input = CreateConfigurationSetRequest;
  export type Output = CreateConfigurationSetResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEventDestination {
  export type Input = CreateEventDestinationRequest;
  export type Output = CreateEventDestinationResult;
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

export declare namespace CreateOptOutList {
  export type Input = CreateOptOutListRequest;
  export type Output = CreateOptOutListResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePool {
  export type Input = CreatePoolRequest;
  export type Output = CreatePoolResult;
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

export declare namespace CreateProtectConfiguration {
  export type Input = CreateProtectConfigurationRequest;
  export type Output = CreateProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRegistration {
  export type Input = CreateRegistrationRequest;
  export type Output = CreateRegistrationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRegistrationAssociation {
  export type Input = CreateRegistrationAssociationRequest;
  export type Output = CreateRegistrationAssociationResult;
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

export declare namespace CreateRegistrationAttachment {
  export type Input = CreateRegistrationAttachmentRequest;
  export type Output = CreateRegistrationAttachmentResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRegistrationVersion {
  export type Input = CreateRegistrationVersionRequest;
  export type Output = CreateRegistrationVersionResult;
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

export declare namespace CreateVerifiedDestinationNumber {
  export type Input = CreateVerifiedDestinationNumberRequest;
  export type Output = CreateVerifiedDestinationNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAccountDefaultProtectConfiguration {
  export type Input = DeleteAccountDefaultProtectConfigurationRequest;
  export type Output = DeleteAccountDefaultProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationSet {
  export type Input = DeleteConfigurationSetRequest;
  export type Output = DeleteConfigurationSetResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDefaultMessageType {
  export type Input = DeleteDefaultMessageTypeRequest;
  export type Output = DeleteDefaultMessageTypeResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDefaultSenderId {
  export type Input = DeleteDefaultSenderIdRequest;
  export type Output = DeleteDefaultSenderIdResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventDestination {
  export type Input = DeleteEventDestinationRequest;
  export type Output = DeleteEventDestinationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKeyword {
  export type Input = DeleteKeywordRequest;
  export type Output = DeleteKeywordResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMediaMessageSpendLimitOverride {
  export type Input = DeleteMediaMessageSpendLimitOverrideRequest;
  export type Output = DeleteMediaMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOptedOutNumber {
  export type Input = DeleteOptedOutNumberRequest;
  export type Output = DeleteOptedOutNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOptOutList {
  export type Input = DeleteOptOutListRequest;
  export type Output = DeleteOptOutListResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePool {
  export type Input = DeletePoolRequest;
  export type Output = DeletePoolResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProtectConfiguration {
  export type Input = DeleteProtectConfigurationRequest;
  export type Output = DeleteProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProtectConfigurationRuleSetNumberOverride {
  export type Input = DeleteProtectConfigurationRuleSetNumberOverrideRequest;
  export type Output = DeleteProtectConfigurationRuleSetNumberOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRegistration {
  export type Input = DeleteRegistrationRequest;
  export type Output = DeleteRegistrationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRegistrationAttachment {
  export type Input = DeleteRegistrationAttachmentRequest;
  export type Output = DeleteRegistrationAttachmentResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRegistrationFieldValue {
  export type Input = DeleteRegistrationFieldValueRequest;
  export type Output = DeleteRegistrationFieldValueResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTextMessageSpendLimitOverride {
  export type Input = DeleteTextMessageSpendLimitOverrideRequest;
  export type Output = DeleteTextMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVerifiedDestinationNumber {
  export type Input = DeleteVerifiedDestinationNumberRequest;
  export type Output = DeleteVerifiedDestinationNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVoiceMessageSpendLimitOverride {
  export type Input = DeleteVoiceMessageSpendLimitOverrideRequest;
  export type Output = DeleteVoiceMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesRequest;
  export type Output = DescribeAccountAttributesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountLimits {
  export type Input = DescribeAccountLimitsRequest;
  export type Output = DescribeAccountLimitsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationSets {
  export type Input = DescribeConfigurationSetsRequest;
  export type Output = DescribeConfigurationSetsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeKeywords {
  export type Input = DescribeKeywordsRequest;
  export type Output = DescribeKeywordsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOptedOutNumbers {
  export type Input = DescribeOptedOutNumbersRequest;
  export type Output = DescribeOptedOutNumbersResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOptOutLists {
  export type Input = DescribeOptOutListsRequest;
  export type Output = DescribeOptOutListsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePhoneNumbers {
  export type Input = DescribePhoneNumbersRequest;
  export type Output = DescribePhoneNumbersResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePools {
  export type Input = DescribePoolsRequest;
  export type Output = DescribePoolsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProtectConfigurations {
  export type Input = DescribeProtectConfigurationsRequest;
  export type Output = DescribeProtectConfigurationsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationAttachments {
  export type Input = DescribeRegistrationAttachmentsRequest;
  export type Output = DescribeRegistrationAttachmentsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationFieldDefinitions {
  export type Input = DescribeRegistrationFieldDefinitionsRequest;
  export type Output = DescribeRegistrationFieldDefinitionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationFieldValues {
  export type Input = DescribeRegistrationFieldValuesRequest;
  export type Output = DescribeRegistrationFieldValuesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrations {
  export type Input = DescribeRegistrationsRequest;
  export type Output = DescribeRegistrationsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationSectionDefinitions {
  export type Input = DescribeRegistrationSectionDefinitionsRequest;
  export type Output = DescribeRegistrationSectionDefinitionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationTypeDefinitions {
  export type Input = DescribeRegistrationTypeDefinitionsRequest;
  export type Output = DescribeRegistrationTypeDefinitionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistrationVersions {
  export type Input = DescribeRegistrationVersionsRequest;
  export type Output = DescribeRegistrationVersionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSenderIds {
  export type Input = DescribeSenderIdsRequest;
  export type Output = DescribeSenderIdsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSpendLimits {
  export type Input = DescribeSpendLimitsRequest;
  export type Output = DescribeSpendLimitsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeVerifiedDestinationNumbers {
  export type Input = DescribeVerifiedDestinationNumbersRequest;
  export type Output = DescribeVerifiedDestinationNumbersResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateOriginationIdentity {
  export type Input = DisassociateOriginationIdentityRequest;
  export type Output = DisassociateOriginationIdentityResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateProtectConfiguration {
  export type Input = DisassociateProtectConfigurationRequest;
  export type Output = DisassociateProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DiscardRegistrationVersion {
  export type Input = DiscardRegistrationVersionRequest;
  export type Output = DiscardRegistrationVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProtectConfigurationCountryRuleSet {
  export type Input = GetProtectConfigurationCountryRuleSetRequest;
  export type Output = GetProtectConfigurationCountryRuleSetResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPoolOriginationIdentities {
  export type Input = ListPoolOriginationIdentitiesRequest;
  export type Output = ListPoolOriginationIdentitiesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProtectConfigurationRuleSetNumberOverrides {
  export type Input = ListProtectConfigurationRuleSetNumberOverridesRequest;
  export type Output = ListProtectConfigurationRuleSetNumberOverridesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRegistrationAssociations {
  export type Input = ListRegistrationAssociationsRequest;
  export type Output = ListRegistrationAssociationsResult;
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
  export type Output = ListTagsForResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutKeyword {
  export type Input = PutKeywordRequest;
  export type Output = PutKeywordResult;
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

export declare namespace PutMessageFeedback {
  export type Input = PutMessageFeedbackRequest;
  export type Output = PutMessageFeedbackResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutOptedOutNumber {
  export type Input = PutOptedOutNumberRequest;
  export type Output = PutOptedOutNumberResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutProtectConfigurationRuleSetNumberOverride {
  export type Input = PutProtectConfigurationRuleSetNumberOverrideRequest;
  export type Output = PutProtectConfigurationRuleSetNumberOverrideResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRegistrationFieldValue {
  export type Input = PutRegistrationFieldValueRequest;
  export type Output = PutRegistrationFieldValueResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReleasePhoneNumber {
  export type Input = ReleasePhoneNumberRequest;
  export type Output = ReleasePhoneNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReleaseSenderId {
  export type Input = ReleaseSenderIdRequest;
  export type Output = ReleaseSenderIdResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RequestPhoneNumber {
  export type Input = RequestPhoneNumberRequest;
  export type Output = RequestPhoneNumberResult;
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

export declare namespace RequestSenderId {
  export type Input = RequestSenderIdRequest;
  export type Output = RequestSenderIdResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendDestinationNumberVerificationCode {
  export type Input = SendDestinationNumberVerificationCodeRequest;
  export type Output = SendDestinationNumberVerificationCodeResult;
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

export declare namespace SendMediaMessage {
  export type Input = SendMediaMessageRequest;
  export type Output = SendMediaMessageResult;
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

export declare namespace SendTextMessage {
  export type Input = SendTextMessageRequest;
  export type Output = SendTextMessageResult;
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

export declare namespace SendVoiceMessage {
  export type Input = SendVoiceMessageRequest;
  export type Output = SendVoiceMessageResult;
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

export declare namespace SetAccountDefaultProtectConfiguration {
  export type Input = SetAccountDefaultProtectConfigurationRequest;
  export type Output = SetAccountDefaultProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetDefaultMessageFeedbackEnabled {
  export type Input = SetDefaultMessageFeedbackEnabledRequest;
  export type Output = SetDefaultMessageFeedbackEnabledResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetDefaultMessageType {
  export type Input = SetDefaultMessageTypeRequest;
  export type Output = SetDefaultMessageTypeResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetDefaultSenderId {
  export type Input = SetDefaultSenderIdRequest;
  export type Output = SetDefaultSenderIdResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetMediaMessageSpendLimitOverride {
  export type Input = SetMediaMessageSpendLimitOverrideRequest;
  export type Output = SetMediaMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetTextMessageSpendLimitOverride {
  export type Input = SetTextMessageSpendLimitOverrideRequest;
  export type Output = SetTextMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetVoiceMessageSpendLimitOverride {
  export type Input = SetVoiceMessageSpendLimitOverrideRequest;
  export type Output = SetVoiceMessageSpendLimitOverrideResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SubmitRegistrationVersion {
  export type Input = SubmitRegistrationVersionRequest;
  export type Output = SubmitRegistrationVersionResult;
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
  export type Output = TagResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventDestination {
  export type Input = UpdateEventDestinationRequest;
  export type Output = UpdateEventDestinationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumber {
  export type Input = UpdatePhoneNumberRequest;
  export type Output = UpdatePhoneNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePool {
  export type Input = UpdatePoolRequest;
  export type Output = UpdatePoolResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProtectConfiguration {
  export type Input = UpdateProtectConfigurationRequest;
  export type Output = UpdateProtectConfigurationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProtectConfigurationCountryRuleSet {
  export type Input = UpdateProtectConfigurationCountryRuleSetRequest;
  export type Output = UpdateProtectConfigurationCountryRuleSetResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSenderId {
  export type Input = UpdateSenderIdRequest;
  export type Output = UpdateSenderIdResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace VerifyDestinationNumber {
  export type Input = VerifyDestinationNumberRequest;
  export type Output = VerifyDestinationNumberResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type PinpointSMSVoiceV2Errors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
