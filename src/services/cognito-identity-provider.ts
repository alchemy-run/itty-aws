import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const DeliveryMediumListType = S.Array(S.String);
export const AttributeNameListType = S.Array(S.String);
export const IdpIdentifiersListType = S.Array(S.String);
export const VerifiedAttributesListType = S.Array(S.String);
export const AliasAttributesListType = S.Array(S.String);
export const UsernameAttributesListType = S.Array(S.String);
export class NumberAttributeConstraintsType extends S.Class<NumberAttributeConstraintsType>("NumberAttributeConstraintsType")({MinValue: S.optional(S.String), MaxValue: S.optional(S.String)}) {}
export class StringAttributeConstraintsType extends S.Class<StringAttributeConstraintsType>("StringAttributeConstraintsType")({MinLength: S.optional(S.String), MaxLength: S.optional(S.String)}) {}
export class SchemaAttributeType extends S.Class<SchemaAttributeType>("SchemaAttributeType")({Name: S.optional(S.String), AttributeDataType: S.optional(S.String), DeveloperOnlyAttribute: S.optional(S.Boolean), Mutable: S.optional(S.Boolean), Required: S.optional(S.Boolean), NumberAttributeConstraints: S.optional(NumberAttributeConstraintsType), StringAttributeConstraints: S.optional(StringAttributeConstraintsType)}) {}
export const SchemaAttributesListType = S.Array(SchemaAttributeType);
export const ClientPermissionListType = S.Array(S.String);
export const ExplicitAuthFlowsListType = S.Array(S.String);
export const SupportedIdentityProvidersListType = S.Array(S.String);
export const CallbackURLsListType = S.Array(S.String);
export const LogoutURLsListType = S.Array(S.String);
export const OAuthFlowsType = S.Array(S.String);
export const ScopeListType = S.Array(S.String);
export const SearchedAttributeNamesListType = S.Array(S.String);
export const UserPoolTagsListType = S.Array(S.String);
export class AdminAddUserToGroupRequest extends S.Class<AdminAddUserToGroupRequest>("AdminAddUserToGroupRequest")({UserPoolId: S.String, Username: S.String, GroupName: S.String}) {}
export class AdminDeleteUserRequest extends S.Class<AdminDeleteUserRequest>("AdminDeleteUserRequest")({UserPoolId: S.String, Username: S.String}) {}
export class AdminDeleteUserAttributesRequest extends S.Class<AdminDeleteUserAttributesRequest>("AdminDeleteUserAttributesRequest")({UserPoolId: S.String, Username: S.String, UserAttributeNames: AttributeNameListType}) {}
export class AdminDeleteUserAttributesResponse extends S.Class<AdminDeleteUserAttributesResponse>("AdminDeleteUserAttributesResponse")({}) {}
export class AdminDisableUserRequest extends S.Class<AdminDisableUserRequest>("AdminDisableUserRequest")({UserPoolId: S.String, Username: S.String}) {}
export class AdminDisableUserResponse extends S.Class<AdminDisableUserResponse>("AdminDisableUserResponse")({}) {}
export class AdminEnableUserRequest extends S.Class<AdminEnableUserRequest>("AdminEnableUserRequest")({UserPoolId: S.String, Username: S.String}) {}
export class AdminEnableUserResponse extends S.Class<AdminEnableUserResponse>("AdminEnableUserResponse")({}) {}
export class AdminForgetDeviceRequest extends S.Class<AdminForgetDeviceRequest>("AdminForgetDeviceRequest")({UserPoolId: S.String, Username: S.String, DeviceKey: S.String}) {}
export class AdminGetDeviceRequest extends S.Class<AdminGetDeviceRequest>("AdminGetDeviceRequest")({DeviceKey: S.String, UserPoolId: S.String, Username: S.String}) {}
export class AdminGetUserRequest extends S.Class<AdminGetUserRequest>("AdminGetUserRequest")({UserPoolId: S.String, Username: S.String}) {}
export class ProviderUserIdentifierType extends S.Class<ProviderUserIdentifierType>("ProviderUserIdentifierType")({ProviderName: S.optional(S.String), ProviderAttributeName: S.optional(S.String), ProviderAttributeValue: S.optional(S.String)}) {}
export class AdminLinkProviderForUserRequest extends S.Class<AdminLinkProviderForUserRequest>("AdminLinkProviderForUserRequest")({UserPoolId: S.String, DestinationUser: ProviderUserIdentifierType, SourceUser: ProviderUserIdentifierType}) {}
export class AdminLinkProviderForUserResponse extends S.Class<AdminLinkProviderForUserResponse>("AdminLinkProviderForUserResponse")({}) {}
export class AdminListDevicesRequest extends S.Class<AdminListDevicesRequest>("AdminListDevicesRequest")({UserPoolId: S.String, Username: S.String, Limit: S.optional(S.Number), PaginationToken: S.optional(S.String)}) {}
export class AdminListGroupsForUserRequest extends S.Class<AdminListGroupsForUserRequest>("AdminListGroupsForUserRequest")({Username: S.String, UserPoolId: S.String, Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class AdminListUserAuthEventsRequest extends S.Class<AdminListUserAuthEventsRequest>("AdminListUserAuthEventsRequest")({UserPoolId: S.String, Username: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class AdminRemoveUserFromGroupRequest extends S.Class<AdminRemoveUserFromGroupRequest>("AdminRemoveUserFromGroupRequest")({UserPoolId: S.String, Username: S.String, GroupName: S.String}) {}
export const ClientMetadataType = S.Record({key: S.String, value: S.String});
export class AdminResetUserPasswordRequest extends S.Class<AdminResetUserPasswordRequest>("AdminResetUserPasswordRequest")({UserPoolId: S.String, Username: S.String, ClientMetadata: S.optional(ClientMetadataType)}) {}
export class AdminResetUserPasswordResponse extends S.Class<AdminResetUserPasswordResponse>("AdminResetUserPasswordResponse")({}) {}
export class AdminSetUserPasswordRequest extends S.Class<AdminSetUserPasswordRequest>("AdminSetUserPasswordRequest")({UserPoolId: S.String, Username: S.String, Password: S.String, Permanent: S.optional(S.Boolean)}) {}
export class AdminSetUserPasswordResponse extends S.Class<AdminSetUserPasswordResponse>("AdminSetUserPasswordResponse")({}) {}
export class AdminUpdateAuthEventFeedbackRequest extends S.Class<AdminUpdateAuthEventFeedbackRequest>("AdminUpdateAuthEventFeedbackRequest")({UserPoolId: S.String, Username: S.String, EventId: S.String, FeedbackValue: S.String}) {}
export class AdminUpdateAuthEventFeedbackResponse extends S.Class<AdminUpdateAuthEventFeedbackResponse>("AdminUpdateAuthEventFeedbackResponse")({}) {}
export class AdminUpdateDeviceStatusRequest extends S.Class<AdminUpdateDeviceStatusRequest>("AdminUpdateDeviceStatusRequest")({UserPoolId: S.String, Username: S.String, DeviceKey: S.String, DeviceRememberedStatus: S.optional(S.String)}) {}
export class AdminUpdateDeviceStatusResponse extends S.Class<AdminUpdateDeviceStatusResponse>("AdminUpdateDeviceStatusResponse")({}) {}
export class AttributeType extends S.Class<AttributeType>("AttributeType")({Name: S.String, Value: S.optional(S.String)}) {}
export const AttributeListType = S.Array(AttributeType);
export class AdminUpdateUserAttributesRequest extends S.Class<AdminUpdateUserAttributesRequest>("AdminUpdateUserAttributesRequest")({UserPoolId: S.String, Username: S.String, UserAttributes: AttributeListType, ClientMetadata: S.optional(ClientMetadataType)}) {}
export class AdminUpdateUserAttributesResponse extends S.Class<AdminUpdateUserAttributesResponse>("AdminUpdateUserAttributesResponse")({}) {}
export class AdminUserGlobalSignOutRequest extends S.Class<AdminUserGlobalSignOutRequest>("AdminUserGlobalSignOutRequest")({UserPoolId: S.String, Username: S.String}) {}
export class AdminUserGlobalSignOutResponse extends S.Class<AdminUserGlobalSignOutResponse>("AdminUserGlobalSignOutResponse")({}) {}
export class AssociateSoftwareTokenRequest extends S.Class<AssociateSoftwareTokenRequest>("AssociateSoftwareTokenRequest")({AccessToken: S.optional(S.String), Session: S.optional(S.String)}) {}
export class ChangePasswordRequest extends S.Class<ChangePasswordRequest>("ChangePasswordRequest")({PreviousPassword: S.optional(S.String), ProposedPassword: S.String, AccessToken: S.String}) {}
export class ChangePasswordResponse extends S.Class<ChangePasswordResponse>("ChangePasswordResponse")({}) {}
export class CompleteWebAuthnRegistrationRequest extends S.Class<CompleteWebAuthnRegistrationRequest>("CompleteWebAuthnRegistrationRequest")({AccessToken: S.String, Credential: S.Any}) {}
export class CompleteWebAuthnRegistrationResponse extends S.Class<CompleteWebAuthnRegistrationResponse>("CompleteWebAuthnRegistrationResponse")({}) {}
export class AnalyticsMetadataType extends S.Class<AnalyticsMetadataType>("AnalyticsMetadataType")({AnalyticsEndpointId: S.optional(S.String)}) {}
export class UserContextDataType extends S.Class<UserContextDataType>("UserContextDataType")({IpAddress: S.optional(S.String), EncodedData: S.optional(S.String)}) {}
export class ConfirmSignUpRequest extends S.Class<ConfirmSignUpRequest>("ConfirmSignUpRequest")({ClientId: S.String, SecretHash: S.optional(S.String), Username: S.String, ConfirmationCode: S.String, ForceAliasCreation: S.optional(S.Boolean), AnalyticsMetadata: S.optional(AnalyticsMetadataType), UserContextData: S.optional(UserContextDataType), ClientMetadata: S.optional(ClientMetadataType), Session: S.optional(S.String)}) {}
export class CreateGroupRequest extends S.Class<CreateGroupRequest>("CreateGroupRequest")({GroupName: S.String, UserPoolId: S.String, Description: S.optional(S.String), RoleArn: S.optional(S.String), Precedence: S.optional(S.Number)}) {}
export class CreateUserImportJobRequest extends S.Class<CreateUserImportJobRequest>("CreateUserImportJobRequest")({JobName: S.String, UserPoolId: S.String, CloudWatchLogsRoleArn: S.String}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({GroupName: S.String, UserPoolId: S.String}) {}
export class DeleteIdentityProviderRequest extends S.Class<DeleteIdentityProviderRequest>("DeleteIdentityProviderRequest")({UserPoolId: S.String, ProviderName: S.String}) {}
export class DeleteManagedLoginBrandingRequest extends S.Class<DeleteManagedLoginBrandingRequest>("DeleteManagedLoginBrandingRequest")({ManagedLoginBrandingId: S.String, UserPoolId: S.String}) {}
export class DeleteResourceServerRequest extends S.Class<DeleteResourceServerRequest>("DeleteResourceServerRequest")({UserPoolId: S.String, Identifier: S.String}) {}
export class DeleteTermsRequest extends S.Class<DeleteTermsRequest>("DeleteTermsRequest")({TermsId: S.String, UserPoolId: S.String}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({AccessToken: S.String}) {}
export class DeleteUserAttributesRequest extends S.Class<DeleteUserAttributesRequest>("DeleteUserAttributesRequest")({UserAttributeNames: AttributeNameListType, AccessToken: S.String}) {}
export class DeleteUserAttributesResponse extends S.Class<DeleteUserAttributesResponse>("DeleteUserAttributesResponse")({}) {}
export class DeleteUserPoolRequest extends S.Class<DeleteUserPoolRequest>("DeleteUserPoolRequest")({UserPoolId: S.String}) {}
export class DeleteUserPoolClientRequest extends S.Class<DeleteUserPoolClientRequest>("DeleteUserPoolClientRequest")({UserPoolId: S.String, ClientId: S.String}) {}
export class DeleteUserPoolDomainRequest extends S.Class<DeleteUserPoolDomainRequest>("DeleteUserPoolDomainRequest")({Domain: S.String, UserPoolId: S.String}) {}
export class DeleteUserPoolDomainResponse extends S.Class<DeleteUserPoolDomainResponse>("DeleteUserPoolDomainResponse")({}) {}
export class DeleteWebAuthnCredentialRequest extends S.Class<DeleteWebAuthnCredentialRequest>("DeleteWebAuthnCredentialRequest")({AccessToken: S.String, CredentialId: S.String}) {}
export class DeleteWebAuthnCredentialResponse extends S.Class<DeleteWebAuthnCredentialResponse>("DeleteWebAuthnCredentialResponse")({}) {}
export class DescribeIdentityProviderRequest extends S.Class<DescribeIdentityProviderRequest>("DescribeIdentityProviderRequest")({UserPoolId: S.String, ProviderName: S.String}) {}
export class DescribeManagedLoginBrandingRequest extends S.Class<DescribeManagedLoginBrandingRequest>("DescribeManagedLoginBrandingRequest")({UserPoolId: S.String, ManagedLoginBrandingId: S.String, ReturnMergedResources: S.optional(S.Boolean)}) {}
export class DescribeManagedLoginBrandingByClientRequest extends S.Class<DescribeManagedLoginBrandingByClientRequest>("DescribeManagedLoginBrandingByClientRequest")({UserPoolId: S.String, ClientId: S.String, ReturnMergedResources: S.optional(S.Boolean)}) {}
export class DescribeResourceServerRequest extends S.Class<DescribeResourceServerRequest>("DescribeResourceServerRequest")({UserPoolId: S.String, Identifier: S.String}) {}
export class DescribeRiskConfigurationRequest extends S.Class<DescribeRiskConfigurationRequest>("DescribeRiskConfigurationRequest")({UserPoolId: S.String, ClientId: S.optional(S.String)}) {}
export class DescribeTermsRequest extends S.Class<DescribeTermsRequest>("DescribeTermsRequest")({TermsId: S.String, UserPoolId: S.String}) {}
export class DescribeUserImportJobRequest extends S.Class<DescribeUserImportJobRequest>("DescribeUserImportJobRequest")({UserPoolId: S.String, JobId: S.String}) {}
export class DescribeUserPoolRequest extends S.Class<DescribeUserPoolRequest>("DescribeUserPoolRequest")({UserPoolId: S.String}) {}
export class DescribeUserPoolClientRequest extends S.Class<DescribeUserPoolClientRequest>("DescribeUserPoolClientRequest")({UserPoolId: S.String, ClientId: S.String}) {}
export class DescribeUserPoolDomainRequest extends S.Class<DescribeUserPoolDomainRequest>("DescribeUserPoolDomainRequest")({Domain: S.String}) {}
export class ForgetDeviceRequest extends S.Class<ForgetDeviceRequest>("ForgetDeviceRequest")({AccessToken: S.optional(S.String), DeviceKey: S.String}) {}
export class ForgotPasswordRequest extends S.Class<ForgotPasswordRequest>("ForgotPasswordRequest")({ClientId: S.String, SecretHash: S.optional(S.String), UserContextData: S.optional(UserContextDataType), Username: S.String, AnalyticsMetadata: S.optional(AnalyticsMetadataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class GetCSVHeaderRequest extends S.Class<GetCSVHeaderRequest>("GetCSVHeaderRequest")({UserPoolId: S.String}) {}
export class GetDeviceRequest extends S.Class<GetDeviceRequest>("GetDeviceRequest")({DeviceKey: S.String, AccessToken: S.optional(S.String)}) {}
export class GetGroupRequest extends S.Class<GetGroupRequest>("GetGroupRequest")({GroupName: S.String, UserPoolId: S.String}) {}
export class GetIdentityProviderByIdentifierRequest extends S.Class<GetIdentityProviderByIdentifierRequest>("GetIdentityProviderByIdentifierRequest")({UserPoolId: S.String, IdpIdentifier: S.String}) {}
export class GetLogDeliveryConfigurationRequest extends S.Class<GetLogDeliveryConfigurationRequest>("GetLogDeliveryConfigurationRequest")({UserPoolId: S.String}) {}
export class GetSigningCertificateRequest extends S.Class<GetSigningCertificateRequest>("GetSigningCertificateRequest")({UserPoolId: S.String}) {}
export class GetTokensFromRefreshTokenRequest extends S.Class<GetTokensFromRefreshTokenRequest>("GetTokensFromRefreshTokenRequest")({RefreshToken: S.String, ClientId: S.String, ClientSecret: S.optional(S.String), DeviceKey: S.optional(S.String), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class GetUICustomizationRequest extends S.Class<GetUICustomizationRequest>("GetUICustomizationRequest")({UserPoolId: S.String, ClientId: S.optional(S.String)}) {}
export class GetUserRequest extends S.Class<GetUserRequest>("GetUserRequest")({AccessToken: S.String}) {}
export class GetUserAttributeVerificationCodeRequest extends S.Class<GetUserAttributeVerificationCodeRequest>("GetUserAttributeVerificationCodeRequest")({AccessToken: S.String, AttributeName: S.String, ClientMetadata: S.optional(ClientMetadataType)}) {}
export class GetUserAuthFactorsRequest extends S.Class<GetUserAuthFactorsRequest>("GetUserAuthFactorsRequest")({AccessToken: S.String}) {}
export class GetUserPoolMfaConfigRequest extends S.Class<GetUserPoolMfaConfigRequest>("GetUserPoolMfaConfigRequest")({UserPoolId: S.String}) {}
export class GlobalSignOutRequest extends S.Class<GlobalSignOutRequest>("GlobalSignOutRequest")({AccessToken: S.String}) {}
export class GlobalSignOutResponse extends S.Class<GlobalSignOutResponse>("GlobalSignOutResponse")({}) {}
export const AuthParametersType = S.Record({key: S.String, value: S.String});
export class InitiateAuthRequest extends S.Class<InitiateAuthRequest>("InitiateAuthRequest")({AuthFlow: S.String, AuthParameters: S.optional(AuthParametersType), ClientMetadata: S.optional(ClientMetadataType), ClientId: S.String, AnalyticsMetadata: S.optional(AnalyticsMetadataType), UserContextData: S.optional(UserContextDataType), Session: S.optional(S.String)}) {}
export class ListDevicesRequest extends S.Class<ListDevicesRequest>("ListDevicesRequest")({AccessToken: S.String, Limit: S.optional(S.Number), PaginationToken: S.optional(S.String)}) {}
export class ListGroupsRequest extends S.Class<ListGroupsRequest>("ListGroupsRequest")({UserPoolId: S.String, Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListIdentityProvidersRequest extends S.Class<ListIdentityProvidersRequest>("ListIdentityProvidersRequest")({UserPoolId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListResourceServersRequest extends S.Class<ListResourceServersRequest>("ListResourceServersRequest")({UserPoolId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListTermsRequest extends S.Class<ListTermsRequest>("ListTermsRequest")({UserPoolId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListUserImportJobsRequest extends S.Class<ListUserImportJobsRequest>("ListUserImportJobsRequest")({UserPoolId: S.String, MaxResults: S.Number, PaginationToken: S.optional(S.String)}) {}
export class ListUserPoolClientsRequest extends S.Class<ListUserPoolClientsRequest>("ListUserPoolClientsRequest")({UserPoolId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListUserPoolsRequest extends S.Class<ListUserPoolsRequest>("ListUserPoolsRequest")({NextToken: S.optional(S.String), MaxResults: S.Number}) {}
export class ListUsersRequest extends S.Class<ListUsersRequest>("ListUsersRequest")({UserPoolId: S.String, AttributesToGet: S.optional(SearchedAttributeNamesListType), Limit: S.optional(S.Number), PaginationToken: S.optional(S.String), Filter: S.optional(S.String)}) {}
export class ListUsersInGroupRequest extends S.Class<ListUsersInGroupRequest>("ListUsersInGroupRequest")({UserPoolId: S.String, GroupName: S.String, Limit: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListWebAuthnCredentialsRequest extends S.Class<ListWebAuthnCredentialsRequest>("ListWebAuthnCredentialsRequest")({AccessToken: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ResendConfirmationCodeRequest extends S.Class<ResendConfirmationCodeRequest>("ResendConfirmationCodeRequest")({ClientId: S.String, SecretHash: S.optional(S.String), UserContextData: S.optional(UserContextDataType), Username: S.String, AnalyticsMetadata: S.optional(AnalyticsMetadataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export const ChallengeResponsesType = S.Record({key: S.String, value: S.String});
export class RespondToAuthChallengeRequest extends S.Class<RespondToAuthChallengeRequest>("RespondToAuthChallengeRequest")({ClientId: S.String, ChallengeName: S.String, Session: S.optional(S.String), ChallengeResponses: S.optional(ChallengeResponsesType), AnalyticsMetadata: S.optional(AnalyticsMetadataType), UserContextData: S.optional(UserContextDataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class RevokeTokenRequest extends S.Class<RevokeTokenRequest>("RevokeTokenRequest")({Token: S.String, ClientId: S.String, ClientSecret: S.optional(S.String)}) {}
export class RevokeTokenResponse extends S.Class<RevokeTokenResponse>("RevokeTokenResponse")({}) {}
export class SetUICustomizationRequest extends S.Class<SetUICustomizationRequest>("SetUICustomizationRequest")({UserPoolId: S.String, ClientId: S.optional(S.String), CSS: S.optional(S.String), ImageFile: S.optional(H.StreamBody())}) {}
export class SMSMfaSettingsType extends S.Class<SMSMfaSettingsType>("SMSMfaSettingsType")({Enabled: S.optional(S.Boolean), PreferredMfa: S.optional(S.Boolean)}) {}
export class SoftwareTokenMfaSettingsType extends S.Class<SoftwareTokenMfaSettingsType>("SoftwareTokenMfaSettingsType")({Enabled: S.optional(S.Boolean), PreferredMfa: S.optional(S.Boolean)}) {}
export class EmailMfaSettingsType extends S.Class<EmailMfaSettingsType>("EmailMfaSettingsType")({Enabled: S.optional(S.Boolean), PreferredMfa: S.optional(S.Boolean)}) {}
export class SetUserMFAPreferenceRequest extends S.Class<SetUserMFAPreferenceRequest>("SetUserMFAPreferenceRequest")({SMSMfaSettings: S.optional(SMSMfaSettingsType), SoftwareTokenMfaSettings: S.optional(SoftwareTokenMfaSettingsType), EmailMfaSettings: S.optional(EmailMfaSettingsType), AccessToken: S.String}) {}
export class SetUserMFAPreferenceResponse extends S.Class<SetUserMFAPreferenceResponse>("SetUserMFAPreferenceResponse")({}) {}
export class MFAOptionType extends S.Class<MFAOptionType>("MFAOptionType")({DeliveryMedium: S.optional(S.String), AttributeName: S.optional(S.String)}) {}
export const MFAOptionListType = S.Array(MFAOptionType);
export class SetUserSettingsRequest extends S.Class<SetUserSettingsRequest>("SetUserSettingsRequest")({AccessToken: S.String, MFAOptions: MFAOptionListType}) {}
export class SetUserSettingsResponse extends S.Class<SetUserSettingsResponse>("SetUserSettingsResponse")({}) {}
export class SignUpRequest extends S.Class<SignUpRequest>("SignUpRequest")({ClientId: S.String, SecretHash: S.optional(S.String), Username: S.String, Password: S.optional(S.String), UserAttributes: S.optional(AttributeListType), ValidationData: S.optional(AttributeListType), AnalyticsMetadata: S.optional(AnalyticsMetadataType), UserContextData: S.optional(UserContextDataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class StartUserImportJobRequest extends S.Class<StartUserImportJobRequest>("StartUserImportJobRequest")({UserPoolId: S.String, JobId: S.String}) {}
export class StartWebAuthnRegistrationRequest extends S.Class<StartWebAuthnRegistrationRequest>("StartWebAuthnRegistrationRequest")({AccessToken: S.String}) {}
export class StopUserImportJobRequest extends S.Class<StopUserImportJobRequest>("StopUserImportJobRequest")({UserPoolId: S.String, JobId: S.String}) {}
export const UserPoolTagsType = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: UserPoolTagsType}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: UserPoolTagsListType}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateAuthEventFeedbackRequest extends S.Class<UpdateAuthEventFeedbackRequest>("UpdateAuthEventFeedbackRequest")({UserPoolId: S.String, Username: S.String, EventId: S.String, FeedbackToken: S.String, FeedbackValue: S.String}) {}
export class UpdateAuthEventFeedbackResponse extends S.Class<UpdateAuthEventFeedbackResponse>("UpdateAuthEventFeedbackResponse")({}) {}
export class UpdateDeviceStatusRequest extends S.Class<UpdateDeviceStatusRequest>("UpdateDeviceStatusRequest")({AccessToken: S.String, DeviceKey: S.String, DeviceRememberedStatus: S.optional(S.String)}) {}
export class UpdateDeviceStatusResponse extends S.Class<UpdateDeviceStatusResponse>("UpdateDeviceStatusResponse")({}) {}
export class UpdateGroupRequest extends S.Class<UpdateGroupRequest>("UpdateGroupRequest")({GroupName: S.String, UserPoolId: S.String, Description: S.optional(S.String), RoleArn: S.optional(S.String), Precedence: S.optional(S.Number)}) {}
export const ProviderDetailsType = S.Record({key: S.String, value: S.String});
export const AttributeMappingType = S.Record({key: S.String, value: S.String});
export class UpdateIdentityProviderRequest extends S.Class<UpdateIdentityProviderRequest>("UpdateIdentityProviderRequest")({UserPoolId: S.String, ProviderName: S.String, ProviderDetails: S.optional(ProviderDetailsType), AttributeMapping: S.optional(AttributeMappingType), IdpIdentifiers: S.optional(IdpIdentifiersListType)}) {}
export class AssetType extends S.Class<AssetType>("AssetType")({Category: S.String, ColorMode: S.String, Extension: S.String, Bytes: S.optional(H.StreamBody()), ResourceId: S.optional(S.String)}) {}
export const AssetListType = S.Array(AssetType);
export class UpdateManagedLoginBrandingRequest extends S.Class<UpdateManagedLoginBrandingRequest>("UpdateManagedLoginBrandingRequest")({UserPoolId: S.optional(S.String), ManagedLoginBrandingId: S.optional(S.String), UseCognitoProvidedValues: S.optional(S.Boolean), Settings: S.optional(S.Any), Assets: S.optional(AssetListType)}) {}
export class ResourceServerScopeType extends S.Class<ResourceServerScopeType>("ResourceServerScopeType")({ScopeName: S.String, ScopeDescription: S.String}) {}
export const ResourceServerScopeListType = S.Array(ResourceServerScopeType);
export class UpdateResourceServerRequest extends S.Class<UpdateResourceServerRequest>("UpdateResourceServerRequest")({UserPoolId: S.String, Identifier: S.String, Name: S.String, Scopes: S.optional(ResourceServerScopeListType)}) {}
export const LinksType = S.Record({key: S.String, value: S.String});
export class UpdateTermsRequest extends S.Class<UpdateTermsRequest>("UpdateTermsRequest")({TermsId: S.String, UserPoolId: S.String, TermsName: S.optional(S.String), TermsSource: S.optional(S.String), Enforcement: S.optional(S.String), Links: S.optional(LinksType)}) {}
export class UpdateUserAttributesRequest extends S.Class<UpdateUserAttributesRequest>("UpdateUserAttributesRequest")({UserAttributes: AttributeListType, AccessToken: S.String, ClientMetadata: S.optional(ClientMetadataType)}) {}
export class PasswordPolicyType extends S.Class<PasswordPolicyType>("PasswordPolicyType")({MinimumLength: S.optional(S.Number), RequireUppercase: S.optional(S.Boolean), RequireLowercase: S.optional(S.Boolean), RequireNumbers: S.optional(S.Boolean), RequireSymbols: S.optional(S.Boolean), PasswordHistorySize: S.optional(S.Number), TemporaryPasswordValidityDays: S.optional(S.Number)}) {}
export const AllowedFirstAuthFactorsListType = S.Array(S.String);
export class SignInPolicyType extends S.Class<SignInPolicyType>("SignInPolicyType")({AllowedFirstAuthFactors: S.optional(AllowedFirstAuthFactorsListType)}) {}
export class UserPoolPolicyType extends S.Class<UserPoolPolicyType>("UserPoolPolicyType")({PasswordPolicy: S.optional(PasswordPolicyType), SignInPolicy: S.optional(SignInPolicyType)}) {}
export class PreTokenGenerationVersionConfigType extends S.Class<PreTokenGenerationVersionConfigType>("PreTokenGenerationVersionConfigType")({LambdaVersion: S.String, LambdaArn: S.String}) {}
export class CustomSMSLambdaVersionConfigType extends S.Class<CustomSMSLambdaVersionConfigType>("CustomSMSLambdaVersionConfigType")({LambdaVersion: S.String, LambdaArn: S.String}) {}
export class CustomEmailLambdaVersionConfigType extends S.Class<CustomEmailLambdaVersionConfigType>("CustomEmailLambdaVersionConfigType")({LambdaVersion: S.String, LambdaArn: S.String}) {}
export class LambdaConfigType extends S.Class<LambdaConfigType>("LambdaConfigType")({PreSignUp: S.optional(S.String), CustomMessage: S.optional(S.String), PostConfirmation: S.optional(S.String), PreAuthentication: S.optional(S.String), PostAuthentication: S.optional(S.String), DefineAuthChallenge: S.optional(S.String), CreateAuthChallenge: S.optional(S.String), VerifyAuthChallengeResponse: S.optional(S.String), PreTokenGeneration: S.optional(S.String), UserMigration: S.optional(S.String), PreTokenGenerationConfig: S.optional(PreTokenGenerationVersionConfigType), CustomSMSSender: S.optional(CustomSMSLambdaVersionConfigType), CustomEmailSender: S.optional(CustomEmailLambdaVersionConfigType), KMSKeyID: S.optional(S.String)}) {}
export class VerificationMessageTemplateType extends S.Class<VerificationMessageTemplateType>("VerificationMessageTemplateType")({SmsMessage: S.optional(S.String), EmailMessage: S.optional(S.String), EmailSubject: S.optional(S.String), EmailMessageByLink: S.optional(S.String), EmailSubjectByLink: S.optional(S.String), DefaultEmailOption: S.optional(S.String)}) {}
export const AttributesRequireVerificationBeforeUpdateType = S.Array(S.String);
export class UserAttributeUpdateSettingsType extends S.Class<UserAttributeUpdateSettingsType>("UserAttributeUpdateSettingsType")({AttributesRequireVerificationBeforeUpdate: S.optional(AttributesRequireVerificationBeforeUpdateType)}) {}
export class DeviceConfigurationType extends S.Class<DeviceConfigurationType>("DeviceConfigurationType")({ChallengeRequiredOnNewDevice: S.optional(S.Boolean), DeviceOnlyRememberedOnUserPrompt: S.optional(S.Boolean)}) {}
export class EmailConfigurationType extends S.Class<EmailConfigurationType>("EmailConfigurationType")({SourceArn: S.optional(S.String), ReplyToEmailAddress: S.optional(S.String), EmailSendingAccount: S.optional(S.String), From: S.optional(S.String), ConfigurationSet: S.optional(S.String)}) {}
export class SmsConfigurationType extends S.Class<SmsConfigurationType>("SmsConfigurationType")({SnsCallerArn: S.String, ExternalId: S.optional(S.String), SnsRegion: S.optional(S.String)}) {}
export class MessageTemplateType extends S.Class<MessageTemplateType>("MessageTemplateType")({SMSMessage: S.optional(S.String), EmailMessage: S.optional(S.String), EmailSubject: S.optional(S.String)}) {}
export class AdminCreateUserConfigType extends S.Class<AdminCreateUserConfigType>("AdminCreateUserConfigType")({AllowAdminCreateUserOnly: S.optional(S.Boolean), UnusedAccountValidityDays: S.optional(S.Number), InviteMessageTemplate: S.optional(MessageTemplateType)}) {}
export class AdvancedSecurityAdditionalFlowsType extends S.Class<AdvancedSecurityAdditionalFlowsType>("AdvancedSecurityAdditionalFlowsType")({CustomAuthMode: S.optional(S.String)}) {}
export class UserPoolAddOnsType extends S.Class<UserPoolAddOnsType>("UserPoolAddOnsType")({AdvancedSecurityMode: S.String, AdvancedSecurityAdditionalFlows: S.optional(AdvancedSecurityAdditionalFlowsType)}) {}
export class RecoveryOptionType extends S.Class<RecoveryOptionType>("RecoveryOptionType")({Priority: S.Number, Name: S.String}) {}
export const RecoveryMechanismsType = S.Array(RecoveryOptionType);
export class AccountRecoverySettingType extends S.Class<AccountRecoverySettingType>("AccountRecoverySettingType")({RecoveryMechanisms: S.optional(RecoveryMechanismsType)}) {}
export class UpdateUserPoolRequest extends S.Class<UpdateUserPoolRequest>("UpdateUserPoolRequest")({UserPoolId: S.String, Policies: S.optional(UserPoolPolicyType), DeletionProtection: S.optional(S.String), LambdaConfig: S.optional(LambdaConfigType), AutoVerifiedAttributes: S.optional(VerifiedAttributesListType), SmsVerificationMessage: S.optional(S.String), EmailVerificationMessage: S.optional(S.String), EmailVerificationSubject: S.optional(S.String), VerificationMessageTemplate: S.optional(VerificationMessageTemplateType), SmsAuthenticationMessage: S.optional(S.String), UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType), MfaConfiguration: S.optional(S.String), DeviceConfiguration: S.optional(DeviceConfigurationType), EmailConfiguration: S.optional(EmailConfigurationType), SmsConfiguration: S.optional(SmsConfigurationType), UserPoolTags: S.optional(UserPoolTagsType), AdminCreateUserConfig: S.optional(AdminCreateUserConfigType), UserPoolAddOns: S.optional(UserPoolAddOnsType), AccountRecoverySetting: S.optional(AccountRecoverySettingType), PoolName: S.optional(S.String), UserPoolTier: S.optional(S.String)}) {}
export class UpdateUserPoolResponse extends S.Class<UpdateUserPoolResponse>("UpdateUserPoolResponse")({}) {}
export class TokenValidityUnitsType extends S.Class<TokenValidityUnitsType>("TokenValidityUnitsType")({AccessToken: S.optional(S.String), IdToken: S.optional(S.String), RefreshToken: S.optional(S.String)}) {}
export class AnalyticsConfigurationType extends S.Class<AnalyticsConfigurationType>("AnalyticsConfigurationType")({ApplicationId: S.optional(S.String), ApplicationArn: S.optional(S.String), RoleArn: S.optional(S.String), ExternalId: S.optional(S.String), UserDataShared: S.optional(S.Boolean)}) {}
export class RefreshTokenRotationType extends S.Class<RefreshTokenRotationType>("RefreshTokenRotationType")({Feature: S.String, RetryGracePeriodSeconds: S.optional(S.Number)}) {}
export class UpdateUserPoolClientRequest extends S.Class<UpdateUserPoolClientRequest>("UpdateUserPoolClientRequest")({UserPoolId: S.String, ClientId: S.String, ClientName: S.optional(S.String), RefreshTokenValidity: S.optional(S.Number), AccessTokenValidity: S.optional(S.Number), IdTokenValidity: S.optional(S.Number), TokenValidityUnits: S.optional(TokenValidityUnitsType), ReadAttributes: S.optional(ClientPermissionListType), WriteAttributes: S.optional(ClientPermissionListType), ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType), SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType), CallbackURLs: S.optional(CallbackURLsListType), LogoutURLs: S.optional(LogoutURLsListType), DefaultRedirectURI: S.optional(S.String), AllowedOAuthFlows: S.optional(OAuthFlowsType), AllowedOAuthScopes: S.optional(ScopeListType), AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean), AnalyticsConfiguration: S.optional(AnalyticsConfigurationType), PreventUserExistenceErrors: S.optional(S.String), EnableTokenRevocation: S.optional(S.Boolean), EnablePropagateAdditionalUserContextData: S.optional(S.Boolean), AuthSessionValidity: S.optional(S.Number), RefreshTokenRotation: S.optional(RefreshTokenRotationType)}) {}
export class CustomDomainConfigType extends S.Class<CustomDomainConfigType>("CustomDomainConfigType")({CertificateArn: S.String}) {}
export class UpdateUserPoolDomainRequest extends S.Class<UpdateUserPoolDomainRequest>("UpdateUserPoolDomainRequest")({Domain: S.String, UserPoolId: S.String, ManagedLoginVersion: S.optional(S.Number), CustomDomainConfig: S.optional(CustomDomainConfigType)}) {}
export class VerifySoftwareTokenRequest extends S.Class<VerifySoftwareTokenRequest>("VerifySoftwareTokenRequest")({AccessToken: S.optional(S.String), Session: S.optional(S.String), UserCode: S.String, FriendlyDeviceName: S.optional(S.String)}) {}
export class VerifyUserAttributeRequest extends S.Class<VerifyUserAttributeRequest>("VerifyUserAttributeRequest")({AccessToken: S.String, AttributeName: S.String, Code: S.String}) {}
export class VerifyUserAttributeResponse extends S.Class<VerifyUserAttributeResponse>("VerifyUserAttributeResponse")({}) {}
export const EventFiltersType = S.Array(S.String);
export const BlockedIPRangeListType = S.Array(S.String);
export const SkippedIPRangeListType = S.Array(S.String);
export const UserMFASettingListType = S.Array(S.String);
export class DeviceType extends S.Class<DeviceType>("DeviceType")({DeviceKey: S.optional(S.String), DeviceAttributes: S.optional(AttributeListType), DeviceCreateDate: S.optional(S.Date), DeviceLastModifiedDate: S.optional(S.Date), DeviceLastAuthenticatedDate: S.optional(S.Date)}) {}
export const DeviceListType = S.Array(DeviceType);
export class DeviceSecretVerifierConfigType extends S.Class<DeviceSecretVerifierConfigType>("DeviceSecretVerifierConfigType")({PasswordVerifier: S.optional(S.String), Salt: S.optional(S.String)}) {}
export class UsernameConfigurationType extends S.Class<UsernameConfigurationType>("UsernameConfigurationType")({CaseSensitive: S.Boolean}) {}
export const ListOfStringTypes = S.Array(S.String);
export const ConfiguredUserAuthFactorsListType = S.Array(S.String);
export const AvailableChallengeListType = S.Array(S.String);
export class ResourceServerType extends S.Class<ResourceServerType>("ResourceServerType")({UserPoolId: S.optional(S.String), Identifier: S.optional(S.String), Name: S.optional(S.String), Scopes: S.optional(ResourceServerScopeListType)}) {}
export const ResourceServersListType = S.Array(ResourceServerType);
export class UserImportJobType extends S.Class<UserImportJobType>("UserImportJobType")({JobName: S.optional(S.String), JobId: S.optional(S.String), UserPoolId: S.optional(S.String), PreSignedUrl: S.optional(S.String), CreationDate: S.optional(S.Date), StartDate: S.optional(S.Date), CompletionDate: S.optional(S.Date), Status: S.optional(S.String), CloudWatchLogsRoleArn: S.optional(S.String), ImportedUsers: S.optional(S.Number), SkippedUsers: S.optional(S.Number), FailedUsers: S.optional(S.Number), CompletionMessage: S.optional(S.String)}) {}
export const UserImportJobsListType = S.Array(UserImportJobType);
export class RiskExceptionConfigurationType extends S.Class<RiskExceptionConfigurationType>("RiskExceptionConfigurationType")({BlockedIPRangeList: S.optional(BlockedIPRangeListType), SkippedIPRangeList: S.optional(SkippedIPRangeListType)}) {}
export class SmsMfaConfigType extends S.Class<SmsMfaConfigType>("SmsMfaConfigType")({SmsAuthenticationMessage: S.optional(S.String), SmsConfiguration: S.optional(SmsConfigurationType)}) {}
export class SoftwareTokenMfaConfigType extends S.Class<SoftwareTokenMfaConfigType>("SoftwareTokenMfaConfigType")({Enabled: S.optional(S.Boolean)}) {}
export class EmailMfaConfigType extends S.Class<EmailMfaConfigType>("EmailMfaConfigType")({Message: S.optional(S.String), Subject: S.optional(S.String)}) {}
export class WebAuthnConfigurationType extends S.Class<WebAuthnConfigurationType>("WebAuthnConfigurationType")({RelyingPartyId: S.optional(S.String), UserVerification: S.optional(S.String)}) {}
export class CodeDeliveryDetailsType extends S.Class<CodeDeliveryDetailsType>("CodeDeliveryDetailsType")({Destination: S.optional(S.String), DeliveryMedium: S.optional(S.String), AttributeName: S.optional(S.String)}) {}
export const CodeDeliveryDetailsListType = S.Array(CodeDeliveryDetailsType);
export class AdminConfirmSignUpRequest extends S.Class<AdminConfirmSignUpRequest>("AdminConfirmSignUpRequest")({UserPoolId: S.String, Username: S.String, ClientMetadata: S.optional(ClientMetadataType)}) {}
export class AdminConfirmSignUpResponse extends S.Class<AdminConfirmSignUpResponse>("AdminConfirmSignUpResponse")({}) {}
export class AdminCreateUserRequest extends S.Class<AdminCreateUserRequest>("AdminCreateUserRequest")({UserPoolId: S.String, Username: S.String, UserAttributes: S.optional(AttributeListType), ValidationData: S.optional(AttributeListType), TemporaryPassword: S.optional(S.String), ForceAliasCreation: S.optional(S.Boolean), MessageAction: S.optional(S.String), DesiredDeliveryMediums: S.optional(DeliveryMediumListType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class AdminDisableProviderForUserRequest extends S.Class<AdminDisableProviderForUserRequest>("AdminDisableProviderForUserRequest")({UserPoolId: S.String, User: ProviderUserIdentifierType}) {}
export class AdminDisableProviderForUserResponse extends S.Class<AdminDisableProviderForUserResponse>("AdminDisableProviderForUserResponse")({}) {}
export class AdminGetUserResponse extends S.Class<AdminGetUserResponse>("AdminGetUserResponse")({Username: S.String, UserAttributes: S.optional(AttributeListType), UserCreateDate: S.optional(S.Date), UserLastModifiedDate: S.optional(S.Date), Enabled: S.optional(S.Boolean), UserStatus: S.optional(S.String), MFAOptions: S.optional(MFAOptionListType), PreferredMfaSetting: S.optional(S.String), UserMFASettingList: S.optional(UserMFASettingListType)}) {}
export class AdminListDevicesResponse extends S.Class<AdminListDevicesResponse>("AdminListDevicesResponse")({Devices: S.optional(DeviceListType), PaginationToken: S.optional(S.String)}) {}
export class HttpHeader extends S.Class<HttpHeader>("HttpHeader")({headerName: S.optional(S.String), headerValue: S.optional(S.String)}) {}
export const HttpHeaderList = S.Array(HttpHeader);
export class ContextDataType extends S.Class<ContextDataType>("ContextDataType")({IpAddress: S.String, ServerName: S.String, ServerPath: S.String, HttpHeaders: HttpHeaderList, EncodedData: S.optional(S.String)}) {}
export class AdminRespondToAuthChallengeRequest extends S.Class<AdminRespondToAuthChallengeRequest>("AdminRespondToAuthChallengeRequest")({UserPoolId: S.String, ClientId: S.String, ChallengeName: S.String, ChallengeResponses: S.optional(ChallengeResponsesType), Session: S.optional(S.String), AnalyticsMetadata: S.optional(AnalyticsMetadataType), ContextData: S.optional(ContextDataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class AdminSetUserMFAPreferenceRequest extends S.Class<AdminSetUserMFAPreferenceRequest>("AdminSetUserMFAPreferenceRequest")({SMSMfaSettings: S.optional(SMSMfaSettingsType), SoftwareTokenMfaSettings: S.optional(SoftwareTokenMfaSettingsType), EmailMfaSettings: S.optional(EmailMfaSettingsType), Username: S.String, UserPoolId: S.String}) {}
export class AdminSetUserMFAPreferenceResponse extends S.Class<AdminSetUserMFAPreferenceResponse>("AdminSetUserMFAPreferenceResponse")({}) {}
export class AdminSetUserSettingsRequest extends S.Class<AdminSetUserSettingsRequest>("AdminSetUserSettingsRequest")({UserPoolId: S.String, Username: S.String, MFAOptions: MFAOptionListType}) {}
export class AdminSetUserSettingsResponse extends S.Class<AdminSetUserSettingsResponse>("AdminSetUserSettingsResponse")({}) {}
export class AssociateSoftwareTokenResponse extends S.Class<AssociateSoftwareTokenResponse>("AssociateSoftwareTokenResponse")({SecretCode: S.optional(S.String), Session: S.optional(S.String)}) {}
export class ConfirmDeviceRequest extends S.Class<ConfirmDeviceRequest>("ConfirmDeviceRequest")({AccessToken: S.String, DeviceKey: S.String, DeviceSecretVerifierConfig: S.optional(DeviceSecretVerifierConfigType), DeviceName: S.optional(S.String)}) {}
export class ConfirmForgotPasswordRequest extends S.Class<ConfirmForgotPasswordRequest>("ConfirmForgotPasswordRequest")({ClientId: S.String, SecretHash: S.optional(S.String), Username: S.String, ConfirmationCode: S.String, Password: S.String, AnalyticsMetadata: S.optional(AnalyticsMetadataType), UserContextData: S.optional(UserContextDataType), ClientMetadata: S.optional(ClientMetadataType)}) {}
export class ConfirmForgotPasswordResponse extends S.Class<ConfirmForgotPasswordResponse>("ConfirmForgotPasswordResponse")({}) {}
export class ConfirmSignUpResponse extends S.Class<ConfirmSignUpResponse>("ConfirmSignUpResponse")({Session: S.optional(S.String)}) {}
export class GroupType extends S.Class<GroupType>("GroupType")({GroupName: S.optional(S.String), UserPoolId: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String), Precedence: S.optional(S.Number), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date)}) {}
export class CreateGroupResponse extends S.Class<CreateGroupResponse>("CreateGroupResponse")({Group: S.optional(GroupType)}) {}
export class CreateIdentityProviderRequest extends S.Class<CreateIdentityProviderRequest>("CreateIdentityProviderRequest")({UserPoolId: S.String, ProviderName: S.String, ProviderType: S.String, ProviderDetails: ProviderDetailsType, AttributeMapping: S.optional(AttributeMappingType), IdpIdentifiers: S.optional(IdpIdentifiersListType)}) {}
export class CreateManagedLoginBrandingRequest extends S.Class<CreateManagedLoginBrandingRequest>("CreateManagedLoginBrandingRequest")({UserPoolId: S.String, ClientId: S.String, UseCognitoProvidedValues: S.optional(S.Boolean), Settings: S.optional(S.Any), Assets: S.optional(AssetListType)}) {}
export class CreateResourceServerRequest extends S.Class<CreateResourceServerRequest>("CreateResourceServerRequest")({UserPoolId: S.String, Identifier: S.String, Name: S.String, Scopes: S.optional(ResourceServerScopeListType)}) {}
export class CreateTermsRequest extends S.Class<CreateTermsRequest>("CreateTermsRequest")({UserPoolId: S.String, ClientId: S.String, TermsName: S.String, TermsSource: S.String, Enforcement: S.String, Links: S.optional(LinksType)}) {}
export class CreateUserPoolClientRequest extends S.Class<CreateUserPoolClientRequest>("CreateUserPoolClientRequest")({UserPoolId: S.String, ClientName: S.String, GenerateSecret: S.optional(S.Boolean), RefreshTokenValidity: S.optional(S.Number), AccessTokenValidity: S.optional(S.Number), IdTokenValidity: S.optional(S.Number), TokenValidityUnits: S.optional(TokenValidityUnitsType), ReadAttributes: S.optional(ClientPermissionListType), WriteAttributes: S.optional(ClientPermissionListType), ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType), SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType), CallbackURLs: S.optional(CallbackURLsListType), LogoutURLs: S.optional(LogoutURLsListType), DefaultRedirectURI: S.optional(S.String), AllowedOAuthFlows: S.optional(OAuthFlowsType), AllowedOAuthScopes: S.optional(ScopeListType), AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean), AnalyticsConfiguration: S.optional(AnalyticsConfigurationType), PreventUserExistenceErrors: S.optional(S.String), EnableTokenRevocation: S.optional(S.Boolean), EnablePropagateAdditionalUserContextData: S.optional(S.Boolean), AuthSessionValidity: S.optional(S.Number), RefreshTokenRotation: S.optional(RefreshTokenRotationType)}) {}
export class CreateUserPoolDomainRequest extends S.Class<CreateUserPoolDomainRequest>("CreateUserPoolDomainRequest")({Domain: S.String, UserPoolId: S.String, ManagedLoginVersion: S.optional(S.Number), CustomDomainConfig: S.optional(CustomDomainConfigType)}) {}
export class ManagedLoginBrandingType extends S.Class<ManagedLoginBrandingType>("ManagedLoginBrandingType")({ManagedLoginBrandingId: S.optional(S.String), UserPoolId: S.optional(S.String), UseCognitoProvidedValues: S.optional(S.Boolean), Settings: S.optional(S.Any), Assets: S.optional(AssetListType), CreationDate: S.optional(S.Date), LastModifiedDate: S.optional(S.Date)}) {}
export class DescribeManagedLoginBrandingByClientResponse extends S.Class<DescribeManagedLoginBrandingByClientResponse>("DescribeManagedLoginBrandingByClientResponse")({ManagedLoginBranding: S.optional(ManagedLoginBrandingType)}) {}
export class DescribeUserImportJobResponse extends S.Class<DescribeUserImportJobResponse>("DescribeUserImportJobResponse")({UserImportJob: S.optional(UserImportJobType)}) {}
export class GetCSVHeaderResponse extends S.Class<GetCSVHeaderResponse>("GetCSVHeaderResponse")({UserPoolId: S.optional(S.String), CSVHeader: S.optional(ListOfStringTypes)}) {}
export class GetDeviceResponse extends S.Class<GetDeviceResponse>("GetDeviceResponse")({Device: DeviceType}) {}
export class GetGroupResponse extends S.Class<GetGroupResponse>("GetGroupResponse")({Group: S.optional(GroupType)}) {}
export class IdentityProviderType extends S.Class<IdentityProviderType>("IdentityProviderType")({UserPoolId: S.optional(S.String), ProviderName: S.optional(S.String), ProviderType: S.optional(S.String), ProviderDetails: S.optional(ProviderDetailsType), AttributeMapping: S.optional(AttributeMappingType), IdpIdentifiers: S.optional(IdpIdentifiersListType), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date)}) {}
export class GetIdentityProviderByIdentifierResponse extends S.Class<GetIdentityProviderByIdentifierResponse>("GetIdentityProviderByIdentifierResponse")({IdentityProvider: IdentityProviderType}) {}
export class GetSigningCertificateResponse extends S.Class<GetSigningCertificateResponse>("GetSigningCertificateResponse")({Certificate: S.optional(S.String)}) {}
export class GetUserResponse extends S.Class<GetUserResponse>("GetUserResponse")({Username: S.String, UserAttributes: AttributeListType, MFAOptions: S.optional(MFAOptionListType), PreferredMfaSetting: S.optional(S.String), UserMFASettingList: S.optional(UserMFASettingListType)}) {}
export class GetUserAttributeVerificationCodeResponse extends S.Class<GetUserAttributeVerificationCodeResponse>("GetUserAttributeVerificationCodeResponse")({CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType)}) {}
export class GetUserAuthFactorsResponse extends S.Class<GetUserAuthFactorsResponse>("GetUserAuthFactorsResponse")({Username: S.String, PreferredMfaSetting: S.optional(S.String), UserMFASettingList: S.optional(UserMFASettingListType), ConfiguredUserAuthFactors: S.optional(ConfiguredUserAuthFactorsListType)}) {}
export class GetUserPoolMfaConfigResponse extends S.Class<GetUserPoolMfaConfigResponse>("GetUserPoolMfaConfigResponse")({SmsMfaConfiguration: S.optional(SmsMfaConfigType), SoftwareTokenMfaConfiguration: S.optional(SoftwareTokenMfaConfigType), EmailMfaConfiguration: S.optional(EmailMfaConfigType), MfaConfiguration: S.optional(S.String), WebAuthnConfiguration: S.optional(WebAuthnConfigurationType)}) {}
export class ListDevicesResponse extends S.Class<ListDevicesResponse>("ListDevicesResponse")({Devices: S.optional(DeviceListType), PaginationToken: S.optional(S.String)}) {}
export const GroupListType = S.Array(GroupType);
export class ListGroupsResponse extends S.Class<ListGroupsResponse>("ListGroupsResponse")({Groups: S.optional(GroupListType), NextToken: S.optional(S.String)}) {}
export class ListResourceServersResponse extends S.Class<ListResourceServersResponse>("ListResourceServersResponse")({ResourceServers: ResourceServersListType, NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(UserPoolTagsType)}) {}
export class ListUserImportJobsResponse extends S.Class<ListUserImportJobsResponse>("ListUserImportJobsResponse")({UserImportJobs: S.optional(UserImportJobsListType), PaginationToken: S.optional(S.String)}) {}
export class UserType extends S.Class<UserType>("UserType")({Username: S.optional(S.String), Attributes: S.optional(AttributeListType), UserCreateDate: S.optional(S.Date), UserLastModifiedDate: S.optional(S.Date), Enabled: S.optional(S.Boolean), UserStatus: S.optional(S.String), MFAOptions: S.optional(MFAOptionListType)}) {}
export const UsersListType = S.Array(UserType);
export class ListUsersInGroupResponse extends S.Class<ListUsersInGroupResponse>("ListUsersInGroupResponse")({Users: S.optional(UsersListType), NextToken: S.optional(S.String)}) {}
export class ResendConfirmationCodeResponse extends S.Class<ResendConfirmationCodeResponse>("ResendConfirmationCodeResponse")({CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType)}) {}
export const ChallengeParametersType = S.Record({key: S.String, value: S.String});
export class NewDeviceMetadataType extends S.Class<NewDeviceMetadataType>("NewDeviceMetadataType")({DeviceKey: S.optional(S.String), DeviceGroupKey: S.optional(S.String)}) {}
export class AuthenticationResultType extends S.Class<AuthenticationResultType>("AuthenticationResultType")({AccessToken: S.optional(S.String), ExpiresIn: S.optional(S.Number), TokenType: S.optional(S.String), RefreshToken: S.optional(S.String), IdToken: S.optional(S.String), NewDeviceMetadata: S.optional(NewDeviceMetadataType)}) {}
export class RespondToAuthChallengeResponse extends S.Class<RespondToAuthChallengeResponse>("RespondToAuthChallengeResponse")({ChallengeName: S.optional(S.String), Session: S.optional(S.String), ChallengeParameters: S.optional(ChallengeParametersType), AuthenticationResult: S.optional(AuthenticationResultType)}) {}
export class UICustomizationType extends S.Class<UICustomizationType>("UICustomizationType")({UserPoolId: S.optional(S.String), ClientId: S.optional(S.String), ImageUrl: S.optional(S.String), CSS: S.optional(S.String), CSSVersion: S.optional(S.String), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date)}) {}
export class SetUICustomizationResponse extends S.Class<SetUICustomizationResponse>("SetUICustomizationResponse")({UICustomization: UICustomizationType}) {}
export class SetUserPoolMfaConfigRequest extends S.Class<SetUserPoolMfaConfigRequest>("SetUserPoolMfaConfigRequest")({UserPoolId: S.String, SmsMfaConfiguration: S.optional(SmsMfaConfigType), SoftwareTokenMfaConfiguration: S.optional(SoftwareTokenMfaConfigType), EmailMfaConfiguration: S.optional(EmailMfaConfigType), MfaConfiguration: S.optional(S.String), WebAuthnConfiguration: S.optional(WebAuthnConfigurationType)}) {}
export class SignUpResponse extends S.Class<SignUpResponse>("SignUpResponse")({UserConfirmed: S.Boolean, CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType), UserSub: S.String, Session: S.optional(S.String)}) {}
export class StartUserImportJobResponse extends S.Class<StartUserImportJobResponse>("StartUserImportJobResponse")({UserImportJob: S.optional(UserImportJobType)}) {}
export class StartWebAuthnRegistrationResponse extends S.Class<StartWebAuthnRegistrationResponse>("StartWebAuthnRegistrationResponse")({CredentialCreationOptions: S.Any}) {}
export class StopUserImportJobResponse extends S.Class<StopUserImportJobResponse>("StopUserImportJobResponse")({UserImportJob: S.optional(UserImportJobType)}) {}
export class UpdateGroupResponse extends S.Class<UpdateGroupResponse>("UpdateGroupResponse")({Group: S.optional(GroupType)}) {}
export class UpdateIdentityProviderResponse extends S.Class<UpdateIdentityProviderResponse>("UpdateIdentityProviderResponse")({IdentityProvider: IdentityProviderType}) {}
export class UpdateManagedLoginBrandingResponse extends S.Class<UpdateManagedLoginBrandingResponse>("UpdateManagedLoginBrandingResponse")({ManagedLoginBranding: S.optional(ManagedLoginBrandingType)}) {}
export class UpdateResourceServerResponse extends S.Class<UpdateResourceServerResponse>("UpdateResourceServerResponse")({ResourceServer: ResourceServerType}) {}
export class TermsType extends S.Class<TermsType>("TermsType")({TermsId: S.String, UserPoolId: S.String, ClientId: S.String, TermsName: S.String, TermsSource: S.String, Enforcement: S.String, Links: LinksType, CreationDate: S.Date, LastModifiedDate: S.Date}) {}
export class UpdateTermsResponse extends S.Class<UpdateTermsResponse>("UpdateTermsResponse")({Terms: S.optional(TermsType)}) {}
export class UpdateUserAttributesResponse extends S.Class<UpdateUserAttributesResponse>("UpdateUserAttributesResponse")({CodeDeliveryDetailsList: S.optional(CodeDeliveryDetailsListType)}) {}
export class UserPoolClientType extends S.Class<UserPoolClientType>("UserPoolClientType")({UserPoolId: S.optional(S.String), ClientName: S.optional(S.String), ClientId: S.optional(S.String), ClientSecret: S.optional(S.String), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date), RefreshTokenValidity: S.optional(S.Number), AccessTokenValidity: S.optional(S.Number), IdTokenValidity: S.optional(S.Number), TokenValidityUnits: S.optional(TokenValidityUnitsType), ReadAttributes: S.optional(ClientPermissionListType), WriteAttributes: S.optional(ClientPermissionListType), ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType), SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType), CallbackURLs: S.optional(CallbackURLsListType), LogoutURLs: S.optional(LogoutURLsListType), DefaultRedirectURI: S.optional(S.String), AllowedOAuthFlows: S.optional(OAuthFlowsType), AllowedOAuthScopes: S.optional(ScopeListType), AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean), AnalyticsConfiguration: S.optional(AnalyticsConfigurationType), PreventUserExistenceErrors: S.optional(S.String), EnableTokenRevocation: S.optional(S.Boolean), EnablePropagateAdditionalUserContextData: S.optional(S.Boolean), AuthSessionValidity: S.optional(S.Number), RefreshTokenRotation: S.optional(RefreshTokenRotationType)}) {}
export class UpdateUserPoolClientResponse extends S.Class<UpdateUserPoolClientResponse>("UpdateUserPoolClientResponse")({UserPoolClient: S.optional(UserPoolClientType)}) {}
export class UpdateUserPoolDomainResponse extends S.Class<UpdateUserPoolDomainResponse>("UpdateUserPoolDomainResponse")({ManagedLoginVersion: S.optional(S.Number), CloudFrontDomain: S.optional(S.String)}) {}
export class VerifySoftwareTokenResponse extends S.Class<VerifySoftwareTokenResponse>("VerifySoftwareTokenResponse")({Status: S.optional(S.String), Session: S.optional(S.String)}) {}
export const WebAuthnAuthenticatorTransportsList = S.Array(S.String);
export class CloudWatchLogsConfigurationType extends S.Class<CloudWatchLogsConfigurationType>("CloudWatchLogsConfigurationType")({LogGroupArn: S.optional(S.String)}) {}
export class S3ConfigurationType extends S.Class<S3ConfigurationType>("S3ConfigurationType")({BucketArn: S.optional(S.String)}) {}
export class FirehoseConfigurationType extends S.Class<FirehoseConfigurationType>("FirehoseConfigurationType")({StreamArn: S.optional(S.String)}) {}
export class CompromisedCredentialsActionsType extends S.Class<CompromisedCredentialsActionsType>("CompromisedCredentialsActionsType")({EventAction: S.String}) {}
export const CustomAttributesListType = S.Array(SchemaAttributeType);
export class CompromisedCredentialsRiskConfigurationType extends S.Class<CompromisedCredentialsRiskConfigurationType>("CompromisedCredentialsRiskConfigurationType")({EventFilter: S.optional(EventFiltersType), Actions: CompromisedCredentialsActionsType}) {}
export class NotifyEmailType extends S.Class<NotifyEmailType>("NotifyEmailType")({Subject: S.String, HtmlBody: S.optional(S.String), TextBody: S.optional(S.String)}) {}
export class NotifyConfigurationType extends S.Class<NotifyConfigurationType>("NotifyConfigurationType")({From: S.optional(S.String), ReplyTo: S.optional(S.String), SourceArn: S.String, BlockEmail: S.optional(NotifyEmailType), NoActionEmail: S.optional(NotifyEmailType), MfaEmail: S.optional(NotifyEmailType)}) {}
export class AccountTakeoverActionType extends S.Class<AccountTakeoverActionType>("AccountTakeoverActionType")({Notify: S.Boolean, EventAction: S.String}) {}
export class AccountTakeoverActionsType extends S.Class<AccountTakeoverActionsType>("AccountTakeoverActionsType")({LowAction: S.optional(AccountTakeoverActionType), MediumAction: S.optional(AccountTakeoverActionType), HighAction: S.optional(AccountTakeoverActionType)}) {}
export class AccountTakeoverRiskConfigurationType extends S.Class<AccountTakeoverRiskConfigurationType>("AccountTakeoverRiskConfigurationType")({NotifyConfiguration: S.optional(NotifyConfigurationType), Actions: AccountTakeoverActionsType}) {}
export class RiskConfigurationType extends S.Class<RiskConfigurationType>("RiskConfigurationType")({UserPoolId: S.optional(S.String), ClientId: S.optional(S.String), CompromisedCredentialsRiskConfiguration: S.optional(CompromisedCredentialsRiskConfigurationType), AccountTakeoverRiskConfiguration: S.optional(AccountTakeoverRiskConfigurationType), RiskExceptionConfiguration: S.optional(RiskExceptionConfigurationType), LastModifiedDate: S.optional(S.Date)}) {}
export class UserPoolType extends S.Class<UserPoolType>("UserPoolType")({Id: S.optional(S.String), Name: S.optional(S.String), Policies: S.optional(UserPoolPolicyType), DeletionProtection: S.optional(S.String), LambdaConfig: S.optional(LambdaConfigType), Status: S.optional(S.String), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date), SchemaAttributes: S.optional(SchemaAttributesListType), AutoVerifiedAttributes: S.optional(VerifiedAttributesListType), AliasAttributes: S.optional(AliasAttributesListType), UsernameAttributes: S.optional(UsernameAttributesListType), SmsVerificationMessage: S.optional(S.String), EmailVerificationMessage: S.optional(S.String), EmailVerificationSubject: S.optional(S.String), VerificationMessageTemplate: S.optional(VerificationMessageTemplateType), SmsAuthenticationMessage: S.optional(S.String), UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType), MfaConfiguration: S.optional(S.String), DeviceConfiguration: S.optional(DeviceConfigurationType), EstimatedNumberOfUsers: S.optional(S.Number), EmailConfiguration: S.optional(EmailConfigurationType), SmsConfiguration: S.optional(SmsConfigurationType), UserPoolTags: S.optional(UserPoolTagsType), SmsConfigurationFailure: S.optional(S.String), EmailConfigurationFailure: S.optional(S.String), Domain: S.optional(S.String), CustomDomain: S.optional(S.String), AdminCreateUserConfig: S.optional(AdminCreateUserConfigType), UserPoolAddOns: S.optional(UserPoolAddOnsType), UsernameConfiguration: S.optional(UsernameConfigurationType), Arn: S.optional(S.String), AccountRecoverySetting: S.optional(AccountRecoverySettingType), UserPoolTier: S.optional(S.String)}) {}
export class DomainDescriptionType extends S.Class<DomainDescriptionType>("DomainDescriptionType")({UserPoolId: S.optional(S.String), AWSAccountId: S.optional(S.String), Domain: S.optional(S.String), S3Bucket: S.optional(S.String), CloudFrontDistribution: S.optional(S.String), Version: S.optional(S.String), Status: S.optional(S.String), CustomDomainConfig: S.optional(CustomDomainConfigType), ManagedLoginVersion: S.optional(S.Number)}) {}
export class LogConfigurationType extends S.Class<LogConfigurationType>("LogConfigurationType")({LogLevel: S.String, EventSource: S.String, CloudWatchLogsConfiguration: S.optional(CloudWatchLogsConfigurationType), S3Configuration: S.optional(S3ConfigurationType), FirehoseConfiguration: S.optional(FirehoseConfigurationType)}) {}
export const LogConfigurationListType = S.Array(LogConfigurationType);
export class LogDeliveryConfigurationType extends S.Class<LogDeliveryConfigurationType>("LogDeliveryConfigurationType")({UserPoolId: S.String, LogConfigurations: LogConfigurationListType}) {}
export class ProviderDescription extends S.Class<ProviderDescription>("ProviderDescription")({ProviderName: S.optional(S.String), ProviderType: S.optional(S.String), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date)}) {}
export const ProvidersListType = S.Array(ProviderDescription);
export class TermsDescriptionType extends S.Class<TermsDescriptionType>("TermsDescriptionType")({TermsId: S.String, TermsName: S.String, Enforcement: S.String, CreationDate: S.Date, LastModifiedDate: S.Date}) {}
export const TermsDescriptionListType = S.Array(TermsDescriptionType);
export class UserPoolClientDescription extends S.Class<UserPoolClientDescription>("UserPoolClientDescription")({ClientId: S.optional(S.String), UserPoolId: S.optional(S.String), ClientName: S.optional(S.String)}) {}
export const UserPoolClientListType = S.Array(UserPoolClientDescription);
export class UserPoolDescriptionType extends S.Class<UserPoolDescriptionType>("UserPoolDescriptionType")({Id: S.optional(S.String), Name: S.optional(S.String), LambdaConfig: S.optional(LambdaConfigType), Status: S.optional(S.String), LastModifiedDate: S.optional(S.Date), CreationDate: S.optional(S.Date)}) {}
export const UserPoolListType = S.Array(UserPoolDescriptionType);
export class WebAuthnCredentialDescription extends S.Class<WebAuthnCredentialDescription>("WebAuthnCredentialDescription")({CredentialId: S.String, FriendlyCredentialName: S.String, RelyingPartyId: S.String, AuthenticatorAttachment: S.optional(S.String), AuthenticatorTransports: WebAuthnAuthenticatorTransportsList, CreatedAt: S.Date}) {}
export const WebAuthnCredentialDescriptionListType = S.Array(WebAuthnCredentialDescription);
export class AddCustomAttributesRequest extends S.Class<AddCustomAttributesRequest>("AddCustomAttributesRequest")({UserPoolId: S.String, CustomAttributes: CustomAttributesListType}) {}
export class AddCustomAttributesResponse extends S.Class<AddCustomAttributesResponse>("AddCustomAttributesResponse")({}) {}
export class AdminCreateUserResponse extends S.Class<AdminCreateUserResponse>("AdminCreateUserResponse")({User: S.optional(UserType)}) {}
export class AdminGetDeviceResponse extends S.Class<AdminGetDeviceResponse>("AdminGetDeviceResponse")({Device: DeviceType}) {}
export class AdminInitiateAuthRequest extends S.Class<AdminInitiateAuthRequest>("AdminInitiateAuthRequest")({UserPoolId: S.String, ClientId: S.String, AuthFlow: S.String, AuthParameters: S.optional(AuthParametersType), ClientMetadata: S.optional(ClientMetadataType), AnalyticsMetadata: S.optional(AnalyticsMetadataType), ContextData: S.optional(ContextDataType), Session: S.optional(S.String)}) {}
export class AdminListGroupsForUserResponse extends S.Class<AdminListGroupsForUserResponse>("AdminListGroupsForUserResponse")({Groups: S.optional(GroupListType), NextToken: S.optional(S.String)}) {}
export class AdminRespondToAuthChallengeResponse extends S.Class<AdminRespondToAuthChallengeResponse>("AdminRespondToAuthChallengeResponse")({ChallengeName: S.optional(S.String), Session: S.optional(S.String), ChallengeParameters: S.optional(ChallengeParametersType), AuthenticationResult: S.optional(AuthenticationResultType)}) {}
export class ConfirmDeviceResponse extends S.Class<ConfirmDeviceResponse>("ConfirmDeviceResponse")({UserConfirmationNecessary: S.optional(S.Boolean)}) {}
export class CreateIdentityProviderResponse extends S.Class<CreateIdentityProviderResponse>("CreateIdentityProviderResponse")({IdentityProvider: IdentityProviderType}) {}
export class CreateManagedLoginBrandingResponse extends S.Class<CreateManagedLoginBrandingResponse>("CreateManagedLoginBrandingResponse")({ManagedLoginBranding: S.optional(ManagedLoginBrandingType)}) {}
export class CreateResourceServerResponse extends S.Class<CreateResourceServerResponse>("CreateResourceServerResponse")({ResourceServer: ResourceServerType}) {}
export class CreateTermsResponse extends S.Class<CreateTermsResponse>("CreateTermsResponse")({Terms: S.optional(TermsType)}) {}
export class CreateUserImportJobResponse extends S.Class<CreateUserImportJobResponse>("CreateUserImportJobResponse")({UserImportJob: S.optional(UserImportJobType)}) {}
export class CreateUserPoolRequest extends S.Class<CreateUserPoolRequest>("CreateUserPoolRequest")({PoolName: S.String, Policies: S.optional(UserPoolPolicyType), DeletionProtection: S.optional(S.String), LambdaConfig: S.optional(LambdaConfigType), AutoVerifiedAttributes: S.optional(VerifiedAttributesListType), AliasAttributes: S.optional(AliasAttributesListType), UsernameAttributes: S.optional(UsernameAttributesListType), SmsVerificationMessage: S.optional(S.String), EmailVerificationMessage: S.optional(S.String), EmailVerificationSubject: S.optional(S.String), VerificationMessageTemplate: S.optional(VerificationMessageTemplateType), SmsAuthenticationMessage: S.optional(S.String), MfaConfiguration: S.optional(S.String), UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType), DeviceConfiguration: S.optional(DeviceConfigurationType), EmailConfiguration: S.optional(EmailConfigurationType), SmsConfiguration: S.optional(SmsConfigurationType), UserPoolTags: S.optional(UserPoolTagsType), AdminCreateUserConfig: S.optional(AdminCreateUserConfigType), Schema: S.optional(SchemaAttributesListType), UserPoolAddOns: S.optional(UserPoolAddOnsType), UsernameConfiguration: S.optional(UsernameConfigurationType), AccountRecoverySetting: S.optional(AccountRecoverySettingType), UserPoolTier: S.optional(S.String)}) {}
export class CreateUserPoolClientResponse extends S.Class<CreateUserPoolClientResponse>("CreateUserPoolClientResponse")({UserPoolClient: S.optional(UserPoolClientType)}) {}
export class CreateUserPoolDomainResponse extends S.Class<CreateUserPoolDomainResponse>("CreateUserPoolDomainResponse")({ManagedLoginVersion: S.optional(S.Number), CloudFrontDomain: S.optional(S.String)}) {}
export class DescribeIdentityProviderResponse extends S.Class<DescribeIdentityProviderResponse>("DescribeIdentityProviderResponse")({IdentityProvider: IdentityProviderType}) {}
export class DescribeManagedLoginBrandingResponse extends S.Class<DescribeManagedLoginBrandingResponse>("DescribeManagedLoginBrandingResponse")({ManagedLoginBranding: S.optional(ManagedLoginBrandingType)}) {}
export class DescribeResourceServerResponse extends S.Class<DescribeResourceServerResponse>("DescribeResourceServerResponse")({ResourceServer: ResourceServerType}) {}
export class DescribeRiskConfigurationResponse extends S.Class<DescribeRiskConfigurationResponse>("DescribeRiskConfigurationResponse")({RiskConfiguration: RiskConfigurationType}) {}
export class DescribeTermsResponse extends S.Class<DescribeTermsResponse>("DescribeTermsResponse")({Terms: S.optional(TermsType)}) {}
export class DescribeUserPoolResponse extends S.Class<DescribeUserPoolResponse>("DescribeUserPoolResponse")({UserPool: S.optional(UserPoolType)}) {}
export class DescribeUserPoolClientResponse extends S.Class<DescribeUserPoolClientResponse>("DescribeUserPoolClientResponse")({UserPoolClient: S.optional(UserPoolClientType)}) {}
export class DescribeUserPoolDomainResponse extends S.Class<DescribeUserPoolDomainResponse>("DescribeUserPoolDomainResponse")({DomainDescription: S.optional(DomainDescriptionType)}) {}
export class ForgotPasswordResponse extends S.Class<ForgotPasswordResponse>("ForgotPasswordResponse")({CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType)}) {}
export class GetLogDeliveryConfigurationResponse extends S.Class<GetLogDeliveryConfigurationResponse>("GetLogDeliveryConfigurationResponse")({LogDeliveryConfiguration: S.optional(LogDeliveryConfigurationType)}) {}
export class GetUICustomizationResponse extends S.Class<GetUICustomizationResponse>("GetUICustomizationResponse")({UICustomization: UICustomizationType}) {}
export class InitiateAuthResponse extends S.Class<InitiateAuthResponse>("InitiateAuthResponse")({ChallengeName: S.optional(S.String), Session: S.optional(S.String), ChallengeParameters: S.optional(ChallengeParametersType), AuthenticationResult: S.optional(AuthenticationResultType), AvailableChallenges: S.optional(AvailableChallengeListType)}) {}
export class ListIdentityProvidersResponse extends S.Class<ListIdentityProvidersResponse>("ListIdentityProvidersResponse")({Providers: ProvidersListType, NextToken: S.optional(S.String)}) {}
export class ListTermsResponse extends S.Class<ListTermsResponse>("ListTermsResponse")({Terms: TermsDescriptionListType, NextToken: S.optional(S.String)}) {}
export class ListUserPoolClientsResponse extends S.Class<ListUserPoolClientsResponse>("ListUserPoolClientsResponse")({UserPoolClients: S.optional(UserPoolClientListType), NextToken: S.optional(S.String)}) {}
export class ListUserPoolsResponse extends S.Class<ListUserPoolsResponse>("ListUserPoolsResponse")({UserPools: S.optional(UserPoolListType), NextToken: S.optional(S.String)}) {}
export class ListUsersResponse extends S.Class<ListUsersResponse>("ListUsersResponse")({Users: S.optional(UsersListType), PaginationToken: S.optional(S.String)}) {}
export class ListWebAuthnCredentialsResponse extends S.Class<ListWebAuthnCredentialsResponse>("ListWebAuthnCredentialsResponse")({Credentials: WebAuthnCredentialDescriptionListType, NextToken: S.optional(S.String)}) {}
export class SetLogDeliveryConfigurationRequest extends S.Class<SetLogDeliveryConfigurationRequest>("SetLogDeliveryConfigurationRequest")({UserPoolId: S.String, LogConfigurations: LogConfigurationListType}) {}
export class SetUserPoolMfaConfigResponse extends S.Class<SetUserPoolMfaConfigResponse>("SetUserPoolMfaConfigResponse")({SmsMfaConfiguration: S.optional(SmsMfaConfigType), SoftwareTokenMfaConfiguration: S.optional(SoftwareTokenMfaConfigType), EmailMfaConfiguration: S.optional(EmailMfaConfigType), MfaConfiguration: S.optional(S.String), WebAuthnConfiguration: S.optional(WebAuthnConfigurationType)}) {}
export class EventRiskType extends S.Class<EventRiskType>("EventRiskType")({RiskDecision: S.optional(S.String), RiskLevel: S.optional(S.String), CompromisedCredentialsDetected: S.optional(S.Boolean)}) {}
export class ChallengeResponseType extends S.Class<ChallengeResponseType>("ChallengeResponseType")({ChallengeName: S.optional(S.String), ChallengeResponse: S.optional(S.String)}) {}
export const ChallengeResponseListType = S.Array(ChallengeResponseType);
export class EventContextDataType extends S.Class<EventContextDataType>("EventContextDataType")({IpAddress: S.optional(S.String), DeviceName: S.optional(S.String), Timezone: S.optional(S.String), City: S.optional(S.String), Country: S.optional(S.String)}) {}
export class EventFeedbackType extends S.Class<EventFeedbackType>("EventFeedbackType")({FeedbackValue: S.String, Provider: S.String, FeedbackDate: S.optional(S.Date)}) {}
export class AuthEventType extends S.Class<AuthEventType>("AuthEventType")({EventId: S.optional(S.String), EventType: S.optional(S.String), CreationDate: S.optional(S.Date), EventResponse: S.optional(S.String), EventRisk: S.optional(EventRiskType), ChallengeResponses: S.optional(ChallengeResponseListType), EventContextData: S.optional(EventContextDataType), EventFeedback: S.optional(EventFeedbackType)}) {}
export const AuthEventsType = S.Array(AuthEventType);
export class AdminInitiateAuthResponse extends S.Class<AdminInitiateAuthResponse>("AdminInitiateAuthResponse")({ChallengeName: S.optional(S.String), Session: S.optional(S.String), ChallengeParameters: S.optional(ChallengeParametersType), AuthenticationResult: S.optional(AuthenticationResultType), AvailableChallenges: S.optional(AvailableChallengeListType)}) {}
export class AdminListUserAuthEventsResponse extends S.Class<AdminListUserAuthEventsResponse>("AdminListUserAuthEventsResponse")({AuthEvents: S.optional(AuthEventsType), NextToken: S.optional(S.String)}) {}
export class CreateUserPoolResponse extends S.Class<CreateUserPoolResponse>("CreateUserPoolResponse")({UserPool: S.optional(UserPoolType)}) {}
export class GetTokensFromRefreshTokenResponse extends S.Class<GetTokensFromRefreshTokenResponse>("GetTokensFromRefreshTokenResponse")({AuthenticationResult: S.optional(AuthenticationResultType)}) {}
export class SetLogDeliveryConfigurationResponse extends S.Class<SetLogDeliveryConfigurationResponse>("SetLogDeliveryConfigurationResponse")({LogDeliveryConfiguration: S.optional(LogDeliveryConfigurationType)}) {}
export class SetRiskConfigurationRequest extends S.Class<SetRiskConfigurationRequest>("SetRiskConfigurationRequest")({UserPoolId: S.String, ClientId: S.optional(S.String), CompromisedCredentialsRiskConfiguration: S.optional(CompromisedCredentialsRiskConfigurationType), AccountTakeoverRiskConfiguration: S.optional(AccountTakeoverRiskConfigurationType), RiskExceptionConfiguration: S.optional(RiskExceptionConfigurationType)}) {}
export class SetRiskConfigurationResponse extends S.Class<SetRiskConfigurationResponse>("SetRiskConfigurationResponse")({RiskConfiguration: RiskConfigurationType}) {}

//# Errors
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class UserNotFoundException extends S.TaggedError<UserNotFoundException>()("UserNotFoundException", {}) {};
export class InvalidUserPoolConfigurationException extends S.TaggedError<InvalidUserPoolConfigurationException>()("InvalidUserPoolConfigurationException", {}) {};
export class AliasExistsException extends S.TaggedError<AliasExistsException>()("AliasExistsException", {}) {};
export class InvalidEmailRoleAccessPolicyException extends S.TaggedError<InvalidEmailRoleAccessPolicyException>()("InvalidEmailRoleAccessPolicyException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class PasswordResetRequiredException extends S.TaggedError<PasswordResetRequiredException>()("PasswordResetRequiredException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class UserNotConfirmedException extends S.TaggedError<UserNotConfirmedException>()("UserNotConfirmedException", {}) {};
export class UserPoolAddOnNotEnabledException extends S.TaggedError<UserPoolAddOnNotEnabledException>()("UserPoolAddOnNotEnabledException", {}) {};
export class InvalidLambdaResponseException extends S.TaggedError<InvalidLambdaResponseException>()("InvalidLambdaResponseException", {}) {};
export class InvalidPasswordException extends S.TaggedError<InvalidPasswordException>()("InvalidPasswordException", {message: S.optional(S.String)}) {};
export class InvalidSmsRoleAccessPolicyException extends S.TaggedError<InvalidSmsRoleAccessPolicyException>()("InvalidSmsRoleAccessPolicyException", {}) {};
export class PasswordHistoryPolicyViolationException extends S.TaggedError<PasswordHistoryPolicyViolationException>()("PasswordHistoryPolicyViolationException", {}) {};
export class CodeMismatchException extends S.TaggedError<CodeMismatchException>()("CodeMismatchException", {}) {};
export class ExpiredCodeException extends S.TaggedError<ExpiredCodeException>()("ExpiredCodeException", {}) {};
export class TooManyFailedAttemptsException extends S.TaggedError<TooManyFailedAttemptsException>()("TooManyFailedAttemptsException", {}) {};
export class UserImportInProgressException extends S.TaggedError<UserImportInProgressException>()("UserImportInProgressException", {message: S.optional(S.String)}) {};
export class CodeDeliveryFailureException extends S.TaggedError<CodeDeliveryFailureException>()("CodeDeliveryFailureException", {}) {};
export class InvalidSmsRoleTrustRelationshipException extends S.TaggedError<InvalidSmsRoleTrustRelationshipException>()("InvalidSmsRoleTrustRelationshipException", {}) {};
export class UnexpectedLambdaException extends S.TaggedError<UnexpectedLambdaException>()("UnexpectedLambdaException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {message: S.optional(S.String)}) {};
export class UserLambdaValidationException extends S.TaggedError<UserLambdaValidationException>()("UserLambdaValidationException", {}) {};
export class PreconditionNotMetException extends S.TaggedError<PreconditionNotMetException>()("PreconditionNotMetException", {}) {};
export class UnsupportedIdentityProviderException extends S.TaggedError<UnsupportedIdentityProviderException>()("UnsupportedIdentityProviderException", {}) {};
export class FeatureUnavailableInTierException extends S.TaggedError<FeatureUnavailableInTierException>()("FeatureUnavailableInTierException", {message: S.optional(S.String)}) {};
export class MFAMethodNotFoundException extends S.TaggedError<MFAMethodNotFoundException>()("MFAMethodNotFoundException", {}) {};
export class SoftwareTokenMFANotFoundException extends S.TaggedError<SoftwareTokenMFANotFoundException>()("SoftwareTokenMFANotFoundException", {}) {};
export class WebAuthnChallengeNotFoundException extends S.TaggedError<WebAuthnChallengeNotFoundException>()("WebAuthnChallengeNotFoundException", {message: S.optional(S.String)}) {};
export class GroupExistsException extends S.TaggedError<GroupExistsException>()("GroupExistsException", {message: S.optional(S.String)}) {};
export class TermsExistsException extends S.TaggedError<TermsExistsException>()("TermsExistsException", {}) {};
export class InvalidOAuthFlowException extends S.TaggedError<InvalidOAuthFlowException>()("InvalidOAuthFlowException", {}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {}) {};
export class UsernameExistsException extends S.TaggedError<UsernameExistsException>()("UsernameExistsException", {message: S.optional(S.String)}) {};
export class WebAuthnConfigurationMissingException extends S.TaggedError<WebAuthnConfigurationMissingException>()("WebAuthnConfigurationMissingException", {message: S.optional(S.String)}) {};
export class TierChangeNotAllowedException extends S.TaggedError<TierChangeNotAllowedException>()("TierChangeNotAllowedException", {message: S.optional(S.String)}) {};
export class UserPoolTaggingException extends S.TaggedError<UserPoolTaggingException>()("UserPoolTaggingException", {}) {};
export class ScopeDoesNotExistException extends S.TaggedError<ScopeDoesNotExistException>()("ScopeDoesNotExistException", {}) {};
export class EnableSoftwareTokenMFAException extends S.TaggedError<EnableSoftwareTokenMFAException>()("EnableSoftwareTokenMFAException", {message: S.optional(S.String)}) {};
export class UnsupportedUserStateException extends S.TaggedError<UnsupportedUserStateException>()("UnsupportedUserStateException", {message: S.optional(S.String)}) {};
export class WebAuthnClientMismatchException extends S.TaggedError<WebAuthnClientMismatchException>()("WebAuthnClientMismatchException", {message: S.optional(S.String)}) {};
export class DeviceKeyExistsException extends S.TaggedError<DeviceKeyExistsException>()("DeviceKeyExistsException", {message: S.optional(S.String)}) {};
export class DuplicateProviderException extends S.TaggedError<DuplicateProviderException>()("DuplicateProviderException", {message: S.optional(S.String)}) {};
export class ManagedLoginBrandingExistsException extends S.TaggedError<ManagedLoginBrandingExistsException>()("ManagedLoginBrandingExistsException", {message: S.optional(S.String)}) {};
export class UnsupportedTokenTypeException extends S.TaggedError<UnsupportedTokenTypeException>()("UnsupportedTokenTypeException", {message: S.optional(S.String)}) {};
export class WebAuthnNotEnabledException extends S.TaggedError<WebAuthnNotEnabledException>()("WebAuthnNotEnabledException", {message: S.optional(S.String)}) {};
export class WebAuthnCredentialNotSupportedException extends S.TaggedError<WebAuthnCredentialNotSupportedException>()("WebAuthnCredentialNotSupportedException", {message: S.optional(S.String)}) {};
export class RefreshTokenReuseException extends S.TaggedError<RefreshTokenReuseException>()("RefreshTokenReuseException", {message: S.optional(S.String)}) {};
export class WebAuthnOriginNotAllowedException extends S.TaggedError<WebAuthnOriginNotAllowedException>()("WebAuthnOriginNotAllowedException", {message: S.optional(S.String)}) {};
export class WebAuthnRelyingPartyMismatchException extends S.TaggedError<WebAuthnRelyingPartyMismatchException>()("WebAuthnRelyingPartyMismatchException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Updates the status of a user's device so that it is marked as remembered or not
 * remembered for the purpose of device authentication. Device authentication is a
 * "remember me" mechanism that silently completes sign-in from trusted devices with a
 * device key instead of a user-provided MFA code. This operation changes the status of a
 * device without deleting it, so you can enable it again later. For more information about
 * device authentication, see Working with devices.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminUpdateDeviceStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus" }, AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse, [InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 * this operation with your administrative credentials when your user signs out of your
 * app. This results in the following behavior.
 * 
 * - Amazon Cognito no longer accepts *token-authorized* user operations
 * that you authorize with a signed-out user's access tokens. For more information,
 * see Using the Amazon Cognito user pools API and user pool
 * endpoints.
 * 
 * Amazon Cognito returns an `Access Token has been revoked` error when your
 * app attempts to authorize a user pools API request with a revoked access token
 * that contains the scope `aws.cognito.signin.user.admin`.
 * 
 * - Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with
 * `ServerSideTokenCheck` enabled for its user pool IdP
 * configuration in CognitoIdentityProvider.
 * 
 * - Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh
 * requests.
 * 
 * Other requests might be valid until your user's token expires. This operation
 * doesn't clear the managed login session cookie. To clear the session for
 * a user who signed in with managed login or the classic hosted UI, direct their browser
 * session to the logout endpoint.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminUserGlobalSignOut = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut" }, AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group from the specified user pool. When you delete a group, that group no
 * longer contributes to users' `cognito:preferred_group` or
 * `cognito:groups` claims, and no longer influence access-control decision
 * that are based on group membership. For more information about user pool groups, see
 * Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteGroup" }, DeleteGroupRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a managed login branding style. When you delete a style, you delete the
 * branding association for an app client. When an app client doesn't have a style
 * assigned, your managed login pages for that app client are nonfunctional until you
 * create a new style or switch the domain branding version.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const deleteManagedLoginBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteManagedLoginBranding" }, DeleteManagedLoginBrandingRequest, S.Struct({}), [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource server. After you delete a resource server, users can no longer
 * generate access tokens with scopes that are associate with that resource server.
 * 
 * Resource servers are associated with custom scopes and machine-to-machine (M2M)
 * authorization. For more information, see Access control with resource servers.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const deleteResourceServer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteResourceServer" }, DeleteResourceServerRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the terms documents with the requested ID from your app client.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const deleteTerms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteTerms" }, DeleteTermsRequest, S.Struct({}), [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user pool app client. After you delete an app client, users can no longer
 * sign in to the associated application.
 */export const deleteUserPoolClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteUserPoolClient" }, DeleteUserPoolClientRequest, S.Struct({}), [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID and domain identifier, deletes a user pool domain. After you
 * delete a user pool domain, your managed login pages and authorization server are no
 * longer available.
 */export const deleteUserPoolDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteUserPoolDomain" }, DeleteUserPoolDomainRequest, DeleteUserPoolDomainResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a registered passkey, or WebAuthn, authenticator for the currently signed-in
 * user.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const deleteWebAuthnCredential = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteWebAuthnCredential" }, DeleteWebAuthnCredentialRequest, DeleteWebAuthnCredentialResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a device key, deletes a remembered device as the currently signed-in user. For
 * more information about device authentication, see Working with user devices in your user pool.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const forgetDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ForgetDevice" }, ForgetDeviceRequest, S.Struct({}), [ForbiddenException, InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 * this operation when your user signs out of your app. This results in the following
 * behavior.
 * 
 * - Amazon Cognito no longer accepts *token-authorized* user operations
 * that you authorize with a signed-out user's access tokens. For more information,
 * see Using the Amazon Cognito user pools API and user pool
 * endpoints.
 * 
 * Amazon Cognito returns an `Access Token has been revoked` error when your
 * app attempts to authorize a user pools API request with a revoked access token
 * that contains the scope `aws.cognito.signin.user.admin`.
 * 
 * - Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with
 * `ServerSideTokenCheck` enabled for its user pool IdP
 * configuration in CognitoIdentityProvider.
 * 
 * - Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh
 * requests.
 * 
 * Other requests might be valid until your user's token expires. This operation
 * doesn't clear the managed login session cookie. To clear the session for
 * a user who signed in with managed login or the classic hosted UI, direct their browser
 * session to the logout endpoint.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const globalSignOut = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GlobalSignOut" }, GlobalSignOutRequest, GlobalSignOutResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Set the user's multi-factor authentication (MFA) method preference, including which
 * MFA factors are activated and if any are preferred. Only one factor can be set as
 * preferred. The preferred MFA factor will be used to authenticate a user if multiple
 * factors are activated. If multiple options are activated and no preference is set, a
 * challenge to choose an MFA option will be returned during sign-in. If an MFA type is
 * activated for a user, the user will be prompted for MFA during all sign-in attempts
 * unless device tracking is turned on and the device has been trusted. If you want MFA to
 * be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 * MFA for users and turn on Adaptive Authentication for the user pool.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const setUserMFAPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetUserMFAPreference" }, SetUserMFAPreferenceRequest, SetUserMFAPreferenceResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * *This action is no longer supported.* You can use it to configure
 * only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
 * token or email MFA.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const setUserSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetUserSettings" }, SetUserSettingsRequest, SetUserSettingsResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to
 * categorize and manage user pools in different ways, such as by purpose, owner,
 * environment, or other criteria.
 * 
 * Each tag consists of a key and value, both of which you define. A key is a general
 * category for more specific values. For example, if you have two versions of a user pool,
 * one for testing and another for production, you might assign an `Environment`
 * tag key to both user pools. The value of this key might be `Test` for one
 * user pool, and `Production` for the other.
 * 
 * Tags are useful for cost tracking and access control. You can activate your tags so
 * that they appear on the Billing and Cost Management console, where you can track the
 * costs associated with your user pools. In an Identity and Access Management policy, you can constrain
 * permissions for user pools based on specific tags or tag values.
 * 
 * You can use this action up to 5 times per second, per account. A user pool can have as
 * many as 50 tags.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given tag IDs that you previously assigned to a user pool, removes them.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the feedback for an authentication event generated by threat protection
 * features. The user's response indicates that you think that the event either was from a
 * valid user or was an unwanted authentication attempt. This feedback improves the risk
 * evaluation decision for the user pool as part of Amazon Cognito threat protection.
 * To activate this setting, your user pool must be on the
 * Plus tier.
 * 
 * This operation requires a `FeedbackToken` that Amazon Cognito generates and adds to
 * notification emails when users have potentially suspicious authentication events. Users
 * invoke this operation when they select the link that corresponds to
 * `{one-click-link-valid}` or `{one-click-link-invalid}` in your
 * notification template. Because `FeedbackToken` is a required parameter, you
 * can't make requests to `UpdateAuthEventFeedback` without the contents of
 * the notification email message.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const updateAuthEventFeedback = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback" }, UpdateAuthEventFeedbackRequest, UpdateAuthEventFeedbackResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException, UserPoolAddOnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of a the currently signed-in user's device so that it is
 * marked as remembered or not remembered for the purpose of device authentication. Device
 * authentication is a "remember me" mechanism that silently completes sign-in from trusted
 * devices with a device key instead of a user-provided MFA code. This operation changes
 * the status of a device without deleting it, so you can enable it again later. For more
 * information about device authentication, see Working with devices.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const updateDeviceStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateDeviceStatus" }, UpdateDeviceStatusRequest, UpdateDeviceStatusResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a user to a group. A user who is in a group can present a preferred-role claim to
 * an identity pool, and populates a `cognito:groups` claim to their access and
 * identity tokens.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminAddUserToGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminAddUserToGroup" }, AdminAddUserToGroupRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user profile in your user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminDeleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminDeleteUser" }, AdminDeleteUserRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes attribute values from a user. This operation doesn't affect tokens for
 * existing user sessions. The next ID token that the user receives will no longer have the
 * deleted attributes.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminDeleteUserAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes" }, AdminDeleteUserAttributesRequest, AdminDeleteUserAttributesResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Prevents the user from signing in with the specified external (SAML or social)
 * identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools
 * native username + password user, they can't use their password to sign in. If the user
 * to deactivate is a linked external IdP user, any link between that user and an existing
 * user is removed. When the external user signs in again, and the user is no longer
 * attached to the previously linked `DestinationUser`, the user must create a
 * new user account.
 * 
 * The value of `ProviderName` must match the name of a user pool IdP.
 * 
 * To deactivate a local user, set `ProviderName` to `Cognito` and
 * the `ProviderAttributeName` to `Cognito_Subject`. The
 * `ProviderAttributeValue` must be user's local username.
 * 
 * The `ProviderAttributeName` must always be `Cognito_Subject` for
 * social IdPs. The `ProviderAttributeValue` must always be the exact subject
 * that was used when the user was originally linked as a source user.
 * 
 * For de-linking a SAML identity, there are two scenarios. If the linked identity has
 * not yet been used to sign in, the `ProviderAttributeName` and
 * `ProviderAttributeValue` must be the same values that were used for the
 * `SourceUser` when the identities were originally linked using
 * AdminLinkProviderForUser call. This is also true if the linking was done with
 * `ProviderAttributeName` set to `Cognito_Subject`. If the user
 * has already signed in, the `ProviderAttributeName` must be
 * `Cognito_Subject` and `ProviderAttributeValue` must be the
 * `NameID` from their SAML assertion.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminDisableProviderForUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminDisableProviderForUser" }, AdminDisableProviderForUserRequest, AdminDisableProviderForUserResponse, [AliasExistsException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deactivates a user profile and revokes all access tokens for the user. A deactivated
 * user can't sign in, but still appears in the responses to `ListUsers`
 * API requests.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminDisableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminDisableUser" }, AdminDisableUserRequest, AdminDisableUserResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Activates sign-in for a user profile that previously had sign-in access
 * disabled.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminEnableUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminEnableUser" }, AdminEnableUserRequest, AdminEnableUserResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Forgets, or deletes, a remembered device from a user's profile. After you forget
 * the device, the user can no longer complete device authentication with that device and
 * when applicable, must submit MFA codes again. For more information, see Working with devices.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminForgetDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminForgetDevice" }, AdminForgetDeviceRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a username, returns details about a user profile in a user pool. You can specify
 * alias attributes in the `Username` request parameter.
 * 
 * This operation contributes to your monthly active user (MAU) count for the purpose of
 * billing.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminGetUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminGetUser" }, AdminGetUserRequest, AdminGetUserResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Links an existing user account in a user pool, or `DestinationUser`, to an
 * identity from an external IdP, or `SourceUser`, based on a specified
 * attribute name and value from the external IdP.
 * 
 * This operation connects a local user profile with a user identity who hasn't yet
 * signed in from their third-party IdP. When the user signs in with their IdP, they get
 * access-control configuration from the local user profile. Linked local users can also
 * sign in with SDK-based API operations like `InitiateAuth` after they sign in
 * at least once through their IdP. For more information, see Linking federated users.
 * 
 * The maximum number of federated identities linked to a user is five.
 * 
 * Because this API allows a user with an external federated identity to sign in as a
 * local user, it is critical that it only be used with external IdPs and linked
 * attributes that you trust.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminLinkProviderForUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminLinkProviderForUser" }, AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse, [AliasExistsException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists a user's registered devices. Remembered devices are used in authentication
 * services where you offer a "Remember me" option for users who you want to permit to sign
 * in without MFA from a trusted device. Users can bypass MFA while your application
 * performs device SRP authentication on the back end. For more information, see Working with devices.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminListDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminListDevices" }, AdminListDevicesRequest, AdminListDevicesResponse, [InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a username and a group name, removes them from the group. User pool groups are
 * identifiers that you can reference from the contents of ID and access tokens, and set
 * preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminRemoveUserFromGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup" }, AdminRemoveUserFromGroupRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the user's multi-factor authentication (MFA) preference, including which MFA
 * options are activated, and if any are preferred. Only one factor can be set as
 * preferred. The preferred MFA factor will be used to authenticate a user if multiple
 * factors are activated. If multiple options are activated and no preference is set, a
 * challenge to choose an MFA option will be returned during sign-in.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminSetUserMFAPreference = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference" }, AdminSetUserMFAPreferenceRequest, AdminSetUserMFAPreferenceResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * *This action is no longer supported.* You can use it to configure
 * only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
 * token MFA.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminSetUserSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminSetUserSettings" }, AdminSetUserSettingsRequest, AdminSetUserSettingsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the feedback for an authentication event generated by threat protection
 * features. Your response indicates that you think that the event either was from a valid
 * user or was an unwanted authentication attempt. This feedback improves the risk
 * evaluation decision for the user pool as part of Amazon Cognito threat protection.
 * To activate this setting, your user pool must be on the
 * Plus tier.
 * 
 * To train the threat-protection model to recognize trusted and untrusted sign-in
 * characteristics, configure threat protection in audit-only mode and provide a mechanism
 * for users or administrators to submit feedback. Your feedback can tell Amazon Cognito that a risk
 * rating was assigned at a level you don't agree with.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminUpdateAuthEventFeedback = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback" }, AdminUpdateAuthEventFeedbackRequest, AdminUpdateAuthEventFeedbackResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException, UserPoolAddOnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the password for the currently signed-in user.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const changePassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ChangePassword" }, ChangePasswordRequest, ChangePasswordResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, InvalidPasswordException, LimitExceededException, NotAuthorizedException, PasswordHistoryPolicyViolationException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the profile of the currently signed-in user. A deleted user profile can no
 * longer be used to sign in and can't be restored.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteUser" }, DeleteUserRequest, S.Struct({}), [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes attributes from the currently signed-in user. For example, your application
 * can submit a request to this operation when a user wants to remove their
 * `birthdate` attribute value.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const deleteUserAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteUserAttributes" }, DeleteUserAttributesRequest, DeleteUserAttributesResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user pool. After you delete a user pool, users can no longer sign in to any
 * associated applications.
 * 
 * When you delete a user pool, it's no longer visible or operational in your Amazon Web Services account. Amazon Cognito retains deleted user pools in an inactive state for 14
 * days, then begins a cleanup process that fully removes them from Amazon Web Services systems. In case
 * of accidental deletion, contact Amazon Web ServicesSupport within 14 days for restoration
 * assistance.
 * 
 * Amazon Cognito begins full deletion of all resources from deleted user pools after 14 days. In
 * the case of large user pools, the cleanup process might take significant additional time
 * before all user data is permanently deleted.
 */export const deleteUserPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteUserPool" }, DeleteUserPoolRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserImportInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given the ID of a user pool app client, returns detailed information about the style
 * assigned to the app client.
 */export const describeManagedLoginBrandingByClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeManagedLoginBrandingByClient" }, DescribeManagedLoginBrandingByClientRequest, DescribeManagedLoginBrandingByClientResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a user import job. For more information about user CSV import, see Importing users from a CSV file.
 */export const describeUserImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeUserImportJob" }, DescribeUserImportJobRequest, DescribeUserImportJobResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, generates a comma-separated value (CSV) list populated with
 * available user attributes in the user pool. This list is the header for the CSV file
 * that determines the users in a user import job. Save the content of
 * `CSVHeader` in the response as a `.csv` file and populate it
 * with the usernames and attributes of users that you want to import. For more information
 * about CSV user import, see Importing users from a CSV file.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const getCSVHeader = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetCSVHeader" }, GetCSVHeaderRequest, GetCSVHeaderResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a device key, returns information about a remembered device for the current
 * user. For more information about device authentication, see Working with user devices in your user pool.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const getDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetDevice" }, GetDeviceRequest, GetDeviceResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID and a group name, returns information about the user
 * group.
 * 
 * For more information about user pool groups, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const getGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetGroup" }, GetGroupRequest, GetGroupResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given the identifier of an identity provider (IdP), for example
 * `examplecorp`, returns information about the user pool configuration for
 * that IdP. For more information about IdPs, see Third-party IdP sign-in.
 */export const getIdentityProviderByIdentifier = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier" }, GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns the signing certificate for SAML 2.0 federation.
 * 
 * Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and
 * assigns a new signing certificate annually. This renewal process returns a new value in
 * the response to `GetSigningCertificate`, but doesn't invalidate the original
 * certificate.
 * 
 * For more information, see Signing SAML requests.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const getSigningCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetSigningCertificate" }, GetSigningCertificateRequest, GetSigningCertificateResponse, [InternalErrorException, InvalidParameterException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets user attributes and and MFA settings for the currently signed-in user.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const getUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetUser" }, GetUserRequest, GetUserResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the authentication options for the currently signed-in user. Returns the
 * following:
 * 
 * - The user's multi-factor authentication (MFA) preferences.
 * 
 * - The user's options for choice-based authentication with the
 * `USER_AUTH` flow.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const getUserAuthFactors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetUserAuthFactors" }, GetUserAuthFactorsRequest, GetUserAuthFactorsResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators
 * and for multi-factor authentication (MFA). This operation describes the
 * following:
 * 
 * - The WebAuthn relying party (RP) ID and user-verification settings.
 * 
 * - The required, optional, or disabled state of MFA for all user pool
 * users.
 * 
 * - The message templates for email and SMS MFA.
 * 
 * - The enabled or disabled state of time-based one-time password (TOTP)
 * MFA.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const getUserPoolMfaConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig" }, GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the devices that Amazon Cognito has registered to the currently signed-in user. For more
 * information about device authentication, see Working with user devices in your user pool.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const listDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListDevices" }, ListDevicesRequest, ListDevicesResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns user pool groups and their details.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListGroups" }, ListGroupsRequest, ListGroupsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns all resource servers and their details. For more
 * information about resource servers, see Access control with resource servers.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listResourceServers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListResourceServers" }, ListResourceServersRequest, ListResourceServersResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags that are assigned to an Amazon Cognito user pool. For more information, see
 * Tagging
 * resources.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns user import jobs and their details. Import jobs are
 * retained in user pool configuration so that you can stage, stop, start, review, and
 * delete them. For more information about user import, see Importing users from a CSV file.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listUserImportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListUserImportJobs" }, ListUserImportJobsRequest, ListUserImportJobsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID and a group name, returns a list of users in the group. For more
 * information about user pool groups, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listUsersInGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListUsersInGroup" }, ListUsersInGroupRequest, ListUsersInGroupResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures UI branding settings for domains with the hosted UI (classic) branding
 * version. Your user pool must have a domain. Configure a domain with .
 * 
 * Set the default configuration for all clients with a `ClientId` of
 * `ALL`. When the `ClientId` value is an app client ID, the
 * settings you pass in this request apply to that app client and override the default
 * `ALL` configuration.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const setUICustomization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetUICustomization" }, SetUICustomizationRequest, SetUICustomizationResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Instructs your user pool to stop a running job that's importing users from a CSV
 * file that contains their usernames and attributes. For more information about importing
 * users from a CSV file, see Importing users from a CSV file.
 */export const stopUserImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.StopUserImportJob" }, StopUserImportJobRequest, StopUserImportJobResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, PreconditionNotMetException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given the name of a user pool group, updates any of the properties for precedence,
 * IAM role, or description. For more information about user pool groups, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateGroup" }, UpdateGroupRequest, UpdateGroupResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the configuration and trust relationship between a third-party identity
 * provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity
 * providers through managed login and OIDC relying-party libraries. For more information,
 * see Third-party IdP sign-in.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateIdentityProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateIdentityProvider" }, UpdateIdentityProviderRequest, UpdateIdentityProviderResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnsupportedIdentityProviderException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures the branding settings for a user pool style. This operation is the
 * programmatic option for the configuration of a style in the branding editor.
 * 
 * Provides values for UI customization in a `Settings` JSON object and image
 * files in an `Assets` array.
 * 
 * This operation has a 2-megabyte request-size limit and include the CSS settings and
 * image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 * doesn't require that you pass all parameters in one request and preserves existing
 * style settings that you don't specify. If your request is larger than 2MB, separate it
 * into multiple requests, each with a size smaller than the limit.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateManagedLoginBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateManagedLoginBranding" }, UpdateManagedLoginBrandingRequest, UpdateManagedLoginBrandingResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the name and scopes of a resource server. All other fields are read-only. For
 * more information about resource servers, see Access control with resource servers.
 * 
 * If you don't provide a value for an attribute, it is set to the default
 * value.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateResourceServer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateResourceServer" }, UpdateResourceServerRequest, UpdateResourceServerResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the currently signed-in user's attributes. To delete an attribute from
 * the user, submit the attribute in your API request with a blank value.
 * 
 * For custom attributes, you must add a `custom:` prefix to the attribute
 * name, for example `custom:department`.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const updateUserAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateUserAttributes" }, UpdateUserAttributesRequest, UpdateUserAttributesResponse, [AliasExistsException, CodeDeliveryFailureException, CodeMismatchException, ExpiredCodeException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A user pool domain hosts managed login, an authorization server and web server for
 * authentication in your application. This operation updates the branding version for user
 * pool domains between `1` for hosted UI (classic) and `2` for
 * managed login. It also updates the SSL certificate for user pool custom domains.
 * 
 * Changes to the domain branding version take up to one minute to take effect for a
 * prefix domain and up to five minutes for a custom domain.
 * 
 * This operation doesn't change the name of your user pool domain. To change your
 * domain, delete it with `DeleteUserPoolDomain` and create a new domain with
 * `CreateUserPoolDomain`.
 * 
 * You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM
 * certificates automatically renew and you user pool can continue to use the same ARN. But
 * if you generate a new certificate for your custom domain name, replace the original
 * configuration with the new ARN in this request.
 * 
 * ACM certificates for custom domains must be in the US East (N. Virginia)
 * Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute
 * your new certificate to your custom domain.
 * 
 * For more information about adding a custom domain to your user pool, see Configuring a user pool domain.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateUserPoolDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateUserPoolDomain" }, UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse, [ConcurrentModificationException, FeatureUnavailableInTierException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a verification code for a signed-in user who has added or changed a value of
 * an auto-verified attribute. When successful, the user's attribute becomes verified
 * and the attribute `email_verified` or `phone_number_verified`
 * becomes `true`.
 * 
 * If your user pool requires verification before Amazon Cognito updates the attribute value,
 * this operation updates the affected attribute to its pending value.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const verifyUserAttribute = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.VerifyUserAttribute" }, VerifyUserAttributeRequest, VerifyUserAttributeResponse, [AliasExistsException, CodeMismatchException, ExpiredCodeException, ForbiddenException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds additional user attributes to the user pool schema. Custom attributes can be
 * mutable or immutable and have a `custom:` or `dev:` prefix. For
 * more information, see Custom attributes.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const addCustomAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AddCustomAttributes" }, AddCustomAttributesRequest, AddCustomAttributesResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserImportInProgressException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Confirms user sign-up as an administrator.
 * 
 * This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can
 * configure your user pool to not send confirmation codes to new users and instead confirm
 * them with this API operation on the back end.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 * 
 * To configure your user pool to require administrative confirmation of users, set
 * `AllowAdminCreateUserOnly` to `true` in a
 * `CreateUserPool` or `UpdateUserPool` request.
 */export const adminConfirmSignUp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminConfirmSignUp" }, AdminConfirmSignUpRequest, AdminConfirmSignUpResponse, [InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyFailedAttemptsException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given the device key, returns details for a user's device. For more information,
 * see Working with devices.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminGetDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminGetDevice" }, AdminGetDeviceRequest, AdminGetDeviceResponse, [InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the groups that a user belongs to. User pool groups are identifiers that you can
 * reference from the contents of ID and access tokens, and set preferred IAM roles for
 * identity-pool authentication. For more information, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminListGroupsForUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminListGroupsForUser" }, AdminListGroupsForUserRequest, AdminListGroupsForUserResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Begins the password reset process. Sets the requested user’s account into a
 * `RESET_REQUIRED` status, and sends them a password-reset code. Your user
 * pool also sends the user a notification with a reset code and the information that their
 * password has been reset. At sign-in, your application or the managed login session
 * receives a challenge to complete the reset by confirming the code and setting a new
 * password.
 * 
 * To use this API operation, your user pool must have self-service account recovery
 * configured.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminResetUserPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminResetUserPassword" }, AdminResetUserPasswordRequest, AdminResetUserPasswordResponse, [InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Some API operations in a user pool generate a challenge, like a prompt for an MFA
 * code, for device authentication that bypasses MFA, or for a custom authentication
 * challenge. An `AdminRespondToAuthChallenge` API request provides the answer
 * to that challenge, like a code or a secure remote password (SRP). The parameters of a
 * response to an authentication challenge vary with the type of challenge.
 * 
 * For more information about custom authentication challenges, see Custom
 * authentication challenge Lambda triggers.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminRespondToAuthChallenge = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge" }, AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse, [AliasExistsException, CodeMismatchException, ExpiredCodeException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, InvalidUserPoolConfigurationException, MFAMethodNotFoundException, NotAuthorizedException, PasswordHistoryPolicyViolationException, PasswordResetRequiredException, ResourceNotFoundException, SoftwareTokenMFANotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the specified user's password in a user pool. This operation administratively
 * sets a temporary or permanent password for a user. With this operation, you can bypass
 * self-service password changes and permit immediate sign-in with the password that you
 * set. To do this, set `Permanent` to `true`.
 * 
 * You can also set a new temporary password in this request, send it to a user, and
 * require them to choose a new password on their next sign-in. To do this, set
 * `Permanent` to `false`.
 * 
 * If the password is temporary, the user's `Status` becomes
 * `FORCE_CHANGE_PASSWORD`. When the user next tries to sign in, the
 * `InitiateAuth` or `AdminInitiateAuth` response includes the
 * `NEW_PASSWORD_REQUIRED` challenge. If the user doesn't sign in
 * before the temporary password expires, they can no longer sign in and you must repeat
 * this operation to set a temporary or permanent password for them.
 * 
 * After the user sets a new password, or if you set a permanent password, their status
 * becomes `Confirmed`.
 * 
 * `AdminSetUserPassword` can set a password for the user profile that Amazon Cognito
 * creates for third-party federated users. When you set a password, the federated user's
 * status changes from `EXTERNAL_PROVIDER` to `CONFIRMED`. A user in
 * this state can sign in as a federated user, and initiate authentication flows in the API
 * like a linked native user. They can also modify their password and attributes in
 * token-authenticated API requests like `ChangePassword` and
 * `UpdateUserAttributes`. As a best security practice and to keep users in
 * sync with your external IdP, don't set passwords on federated user profiles. To set up a
 * federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user
 * profile.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminSetUserPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminSetUserPassword" }, AdminSetUserPasswordRequest, AdminSetUserPasswordResponse, [InternalErrorException, InvalidParameterException, InvalidPasswordException, NotAuthorizedException, PasswordHistoryPolicyViolationException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified user's attributes. To delete an attribute from your user,
 * submit the attribute in your API request with a blank value.
 * 
 * For custom attributes, you must add a `custom:` prefix to the attribute
 * name, for example `custom:department`.
 * 
 * This operation can set a user's email address or phone number as verified and
 * permit immediate sign-in in user pools that require verification of these attributes. To
 * do this, set the `email_verified` or `phone_number_verified`
 * attribute to `true`.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const adminUpdateUserAttributes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes" }, AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse, [AliasExistsException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA)
 * for a user, with a unique private key that Amazon Cognito generates and returns in the API
 * response. You can authorize an `AssociateSoftwareToken` request with either
 * the user's access token, or a session string from a challenge response that you received
 * from Amazon Cognito.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */export const associateSoftwareToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AssociateSoftwareToken" }, AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse, [ConcurrentModificationException, ForbiddenException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, SoftwareTokenMFANotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This public API operation accepts a confirmation code that Amazon Cognito sent to a user and
 * accepts a new password for that user.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const confirmForgotPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ConfirmForgotPassword" }, ConfirmForgotPasswordRequest, ConfirmForgotPasswordResponse, [CodeMismatchException, ExpiredCodeException, ForbiddenException, InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, LimitExceededException, NotAuthorizedException, PasswordHistoryPolicyViolationException, ResourceNotFoundException, TooManyFailedAttemptsException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Confirms the account of a new user. This public API operation submits a code that
 * Amazon Cognito sent to your user when they signed up in your user pool. After your user enters
 * their code, they confirm ownership of the email address or phone number that they
 * provided, and their user account becomes active. Depending on your user pool
 * configuration, your users will receive their confirmation code in an email or SMS
 * message.
 * 
 * Local users who signed up in your user pool are the only type of user who can confirm
 * sign-up with a code. Users who federate through an external identity provider (IdP) have
 * already been confirmed by their IdP.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const confirmSignUp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ConfirmSignUp" }, ConfirmSignUpRequest, ConfirmSignUpResponse, [AliasExistsException, CodeMismatchException, ExpiredCodeException, ForbiddenException, InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyFailedAttemptsException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new group in the specified user pool. For more information about user pool
 * groups, see Adding groups to a user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateGroup" }, CreateGroupRequest, CreateGroupResponse, [GroupExistsException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new OAuth2.0 resource server and defines custom scopes within it. Resource
 * servers are associated with custom scopes and machine-to-machine (M2M) authorization.
 * For more information, see Access control with resource servers.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createResourceServer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateResourceServer" }, CreateResourceServerRequest, CreateResourceServerResponse, [InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates terms documents for the requested app client. When Terms and conditions and
 * Privacy policy documents are configured, the app client displays links to them in the
 * sign-up page of managed login for the app client.
 * 
 * You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for
 * their current language, with fallback to `default` if no document exists for
 * the language.
 * 
 * Each request accepts one type of terms document and a map of language-to-link for that
 * document type. You must provide both types of terms documents in at least one language
 * before Amazon Cognito displays your terms documents. Supply each type in separate
 * requests.
 * 
 * For more information, see Terms documents.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createTerms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateTerms" }, CreateTermsRequest, CreateTermsResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TermsExistsException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a user import job. You can import users into user pools from a comma-separated
 * values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createUserImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateUserImportJob" }, CreateUserImportJobRequest, CreateUserImportJobResponse, [InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, PreconditionNotMetException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A user pool domain hosts managed login, an authorization server and web server for
 * authentication in your application. This operation creates a new user pool prefix domain
 * or custom domain and sets the managed login branding version. Set the branding version
 * to `1` for hosted UI (classic) or `2` for managed login. When you
 * choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia)
 * Amazon Web Services Region in your request.
 * 
 * Your prefix domain might take up to one minute to take effect. Your custom domain is
 * online within five minutes, but it can take up to one hour to distribute your SSL
 * certificate.
 * 
 * For more information about adding a custom domain to your user pool, see Configuring a user pool domain.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createUserPoolDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateUserPoolDomain" }, CreateUserPoolDomainRequest, CreateUserPoolDomainResponse, [ConcurrentModificationException, FeatureUnavailableInTierException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user pool identity provider (IdP). After you delete an IdP, users can no
 * longer sign in to your user pool through that IdP. For more information about user pool
 * IdPs, see Third-party IdP sign-in.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const deleteIdentityProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DeleteIdentityProvider" }, DeleteIdentityProviderRequest, S.Struct({}), [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnsupportedIdentityProviderException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID and identity provider (IdP) name, returns details about the
 * IdP.
 */export const describeIdentityProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeIdentityProvider" }, DescribeIdentityProviderRequest, DescribeIdentityProviderResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given the ID of a managed login branding style, returns detailed information about the
 * style.
 */export const describeManagedLoginBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeManagedLoginBranding" }, DescribeManagedLoginBrandingRequest, DescribeManagedLoginBrandingResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a resource server. For more information about resource servers, see Access control with resource servers.
 */export const describeResourceServer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeResourceServer" }, DescribeResourceServerRequest, DescribeResourceServerResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given an app client or user pool ID where threat protection is configured, describes
 * the risk configuration. This operation returns details about adaptive authentication,
 * compromised credentials, and IP-address allow- and denylists. For more information about
 * threat protection, see Threat protection.
 */export const describeRiskConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeRiskConfiguration" }, DescribeRiskConfigurationRequest, DescribeRiskConfigurationResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserPoolAddOnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details for the requested terms documents ID. For more information, see Terms documents.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const describeTerms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeTerms" }, DescribeTermsRequest, DescribeTermsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given an app client ID, returns configuration information. This operation is useful
 * when you want to inspect an existing app client and programmatically replicate the
 * configuration to another app client. For more information about app clients, see App clients.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const describeUserPoolClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeUserPoolClient" }, DescribeUserPoolClientRequest, DescribeUserPoolClientResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool domain name, returns information about the domain
 * configuration.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const describeUserPoolDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeUserPoolDomain" }, DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a password-reset confirmation code to the email address or phone number of the
 * requested username. The message delivery method is determined by the user's
 * available attributes and the `AccountRecoverySetting` configuration of the
 * user pool.
 * 
 * For the `Username` parameter, you can use the username or an email, phone,
 * or preferred username alias.
 * 
 * If neither a verified phone number nor a verified email exists, Amazon Cognito responds with an
 * `InvalidParameterException` error . If your app client has a client
 * secret and you don't provide a `SECRET_HASH` parameter, this API returns
 * `NotAuthorizedException`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const forgotPassword = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ForgotPassword" }, ForgotPasswordRequest, ForgotPasswordResponse, [CodeDeliveryFailureException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns the logging configuration. User pools can export
 * message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see Exporting user pool logs.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const getLogDeliveryConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration" }, GetLogDeliveryConfigurationRequest, GetLogDeliveryConfigurationResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID or app client, returns information about classic hosted UI
 * branding that you applied, if any. Returns user-pool level branding information if no
 * app client branding is applied, or if you don't specify an app client ID. Returns
 * an empty object if you haven't applied hosted UI branding to either the client or
 * the user pool. For more information, see Hosted UI (classic) branding.
 */export const getUICustomization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetUICustomization" }, GetUICustomizationRequest, GetUICustomizationResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given an attribute name, sends a user attribute verification code for the specified
 * attribute name to the currently signed-in user.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const getUserAttributeVerificationCode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode" }, GetUserAttributeVerificationCodeRequest, GetUserAttributeVerificationCodeResponse, [CodeDeliveryFailureException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Declares an authentication flow and initiates sign-in for a user in the Amazon Cognito user
 * directory. Amazon Cognito might respond with an additional challenge or an
 * `AuthenticationResult` that contains the outcome of a successful
 * authentication. You can't sign in a user with a federated IdP with
 * `InitiateAuth`. For more information, see Authentication.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const initiateAuth = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.InitiateAuth" }, InitiateAuthRequest, InitiateAuthResponse, [ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UnsupportedOperationException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns information about configured identity providers (IdPs).
 * For more information about IdPs, see Third-party IdP sign-in.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listIdentityProviders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListIdentityProviders" }, ListIdentityProvidersRequest, ListIdentityProvidersResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about all terms documents for the requested user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listTerms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListTerms" }, ListTermsRequest, ListTermsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, lists app clients. App clients are sets of rules for the access
 * that you want a user pool to grant to one application. For more information, see App clients.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listUserPoolClients = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListUserPoolClients" }, ListUserPoolClientsRequest, ListUserPoolClientsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists user pools and their details in the current Amazon Web Services account.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listUserPools = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListUserPools" }, ListUserPoolsRequest, ListUserPoolsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns a list of users and their basic details in a user
 * pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const listUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListUsers" }, ListUsersRequest, ListUsersResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a list of the currently signed-in user's registered passkey, or
 * WebAuthn, credentials.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const listWebAuthnCredentials = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ListWebAuthnCredentials" }, ListWebAuthnCredentialsRequest, ListWebAuthnCredentialsResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resends the code that confirms a new account for a user who has signed up in your user
 * pool. Amazon Cognito sends confirmation codes to the user attribute in the
 * `AutoVerifiedAttributes` property of your user pool. When you prompt new
 * users for the confirmation code, include a "Resend code" option that generates a call to
 * this API operation.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const resendConfirmationCode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ResendConfirmationCode" }, ResendConfirmationCodeRequest, ResendConfirmationCodeResponse, [CodeDeliveryFailureException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Some API operations in a user pool generate a challenge, like a prompt for an MFA
 * code, for device authentication that bypasses MFA, or for a custom authentication
 * challenge. A `RespondToAuthChallenge` API request provides the answer to that
 * challenge, like a code or a secure remote password (SRP). The parameters of a response
 * to an authentication challenge vary with the type of challenge.
 * 
 * For more information about custom authentication challenges, see Custom
 * authentication challenge Lambda triggers.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const respondToAuthChallenge = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.RespondToAuthChallenge" }, RespondToAuthChallengeRequest, RespondToAuthChallengeResponse, [AliasExistsException, CodeMismatchException, ExpiredCodeException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, InvalidUserPoolConfigurationException, MFAMethodNotFoundException, NotAuthorizedException, PasswordHistoryPolicyViolationException, PasswordResetRequiredException, ResourceNotFoundException, SoftwareTokenMFANotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets user pool multi-factor authentication (MFA) and passkey configuration. For more
 * information about user pool MFA, see Adding MFA. For more information about WebAuthn passkeys see Authentication flows.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */export const setUserPoolMfaConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig" }, SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse, [ConcurrentModificationException, FeatureUnavailableInTierException, InternalErrorException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a user with an app client and requests a user name, password, and user
 * attributes in the user pool.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * You might receive a `LimitExceeded` exception in response to this request
 * if you have exceeded a rate quota for email or SMS messages, and if your user pool
 * automatically verifies email addresses or phone numbers. When you get this exception in
 * the response, the user is successfully created and is in an `UNCONFIRMED`
 * state.
 */export const signUp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SignUp" }, SignUpRequest, SignUpResponse, [CodeDeliveryFailureException, ForbiddenException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UsernameExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Instructs your user pool to start importing users from a CSV file that contains their
 * usernames and attributes. For more information about importing users from a CSV file,
 * see Importing users from a CSV file.
 */export const startUserImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.StartUserImportJob" }, StartUserImportJobRequest, StartUserImportJobResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, PreconditionNotMetException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies existing terms documents for the requested app client. When Terms and
 * conditions and Privacy policy documents are configured, the app client displays links to
 * them in the sign-up page of managed login for the app client.
 * 
 * You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for
 * their current language, with fallback to `default` if no document exists for
 * the language.
 * 
 * Each request accepts one type of terms document and a map of language-to-link for that
 * document type. You must provide both types of terms documents in at least one language
 * before Amazon Cognito displays your terms documents. Supply each type in separate
 * requests.
 * 
 * For more information, see Terms documents.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateTerms = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateTerms" }, UpdateTermsRequest, UpdateTermsResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TermsExistsException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito
 * defaults, construct this API request to pass the existing configuration of your user
 * pool, modified to include the changes that you want to make.
 * 
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateUserPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateUserPool" }, UpdateUserPoolRequest, UpdateUserPoolResponse, [ConcurrentModificationException, FeatureUnavailableInTierException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, NotAuthorizedException, ResourceNotFoundException, TierChangeNotAllowedException, TooManyRequestsException, UserImportInProgressException, UserPoolTaggingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool app client ID, updates the configuration. To avoid setting
 * parameters to Amazon Cognito defaults, construct this API request to pass the existing
 * configuration of your app client, modified to include the changes that you want to
 * make.
 * 
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 * 
 * Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const updateUserPoolClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.UpdateUserPoolClient" }, UpdateUserPoolClientRequest, UpdateUserPoolClientResponse, [ConcurrentModificationException, FeatureUnavailableInTierException, InternalErrorException, InvalidOAuthFlowException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, ScopeDoesNotExistException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers the current user's time-based one-time password (TOTP) authenticator
 * with a code generated in their authenticator app from a private key that's supplied
 * by your user pool. Marks the user's software token MFA status as "verified" if
 * successful. The request takes an access token or a session string, but not both.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const verifySoftwareToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.VerifySoftwareToken" }, VerifySoftwareTokenRequest, VerifySoftwareTokenResponse, [CodeMismatchException, EnableSoftwareTokenMFAException, ForbiddenException, InternalErrorException, InvalidParameterException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, SoftwareTokenMFANotFoundException, TooManyRequestsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new user in the specified user pool.
 * 
 * If `MessageAction` isn't set, the default is to send a welcome message via
 * email or phone (SMS).
 * 
 * This message is based on a template that you configured in your call to create or
 * update a user pool. This template includes your custom sign-up instructions and
 * placeholders for user name and temporary password.
 * 
 * Alternatively, you can call `AdminCreateUser` with `SUPPRESS`
 * for the `MessageAction` parameter, and Amazon Cognito won't send any email.
 * 
 * In either case, if the user has a password, they will be in the
 * `FORCE_CHANGE_PASSWORD` state until they sign in and set their password.
 * Your invitation message template must have the `{####}` password placeholder
 * if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito
 * doesn't deliver the invitation message. In this case, you must update your message
 * template and resend the password with a new `AdminCreateUser` request with a
 * `MessageAction` value of `RESEND`.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminCreateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminCreateUser" }, AdminCreateUserRequest, AdminCreateUserResponse, [CodeDeliveryFailureException, InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, NotAuthorizedException, PreconditionNotMetException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UnsupportedUserStateException, UserLambdaValidationException, UsernameExistsException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts sign-in for applications with a server-side component, for example a
 * traditional web application. This operation specifies the authentication flow that
 * you'd like to begin. The authentication flow that you specify must be supported in
 * your app client configuration. For more information about authentication flows, see
 * Authentication flows.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminInitiateAuth = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminInitiateAuth" }, AdminInitiateAuthRequest, AdminInitiateAuthResponse, [InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidLambdaResponseException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, InvalidUserPoolConfigurationException, MFAMethodNotFoundException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UnsupportedOperationException, UserLambdaValidationException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Requests a history of user activity and any risks detected as part of Amazon Cognito threat
 * protection. For more information, see Viewing user event history.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const adminListUserAuthEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.AdminListUserAuthEvents" }, AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserNotFoundException, UserPoolAddOnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Confirms a device that a user wants to remember. A remembered device is a "Remember me
 * on this device" option for user pools that perform authentication with the device key of
 * a trusted device in the back end, instead of a user-provided MFA code. For more
 * information about device authentication, see Working with user devices in your user pool.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const confirmDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.ConfirmDevice" }, ConfirmDeviceRequest, ConfirmDeviceResponse, [DeviceKeyExistsException, ForbiddenException, InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, InvalidPasswordException, InvalidUserPoolConfigurationException, NotAuthorizedException, PasswordResetRequiredException, ResourceNotFoundException, TooManyRequestsException, UsernameExistsException, UserNotConfirmedException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a configuration and trust relationship between a third-party identity provider
 * (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through
 * managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createIdentityProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateIdentityProvider" }, CreateIdentityProviderRequest, CreateIdentityProviderResponse, [DuplicateProviderException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new set of branding settings for a user pool style and associates it with an
 * app client. This operation is the programmatic option for the creation of a new style in
 * the branding editor.
 * 
 * Provides values for UI customization in a `Settings` JSON object and image
 * files in an `Assets` array. To send the JSON object `Document`
 * type parameter in `Settings`, you might need to update to the most recent
 * version of your Amazon Web Services SDK. To create a new style with default settings, set
 * `UseCognitoProvidedValues` to `true` and don't provide
 * values for any other options.
 * 
 * This operation has a 2-megabyte request-size limit and include the CSS settings and
 * image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 * doesn't require that you pass all parameters in one request and preserves existing
 * style settings that you don't specify. If your request is larger than 2MB, separate it
 * into multiple requests, each with a size smaller than the limit.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createManagedLoginBranding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateManagedLoginBranding" }, CreateManagedLoginBrandingRequest, CreateManagedLoginBrandingResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, LimitExceededException, ManagedLoginBrandingExistsException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Amazon Cognito user pool. This operation sets basic and advanced configuration
 * options.
 * 
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 * 
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 * 
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createUserPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateUserPool" }, CreateUserPoolRequest, CreateUserPoolResponse, [FeatureUnavailableInTierException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidParameterException, InvalidSmsRoleAccessPolicyException, InvalidSmsRoleTrustRelationshipException, LimitExceededException, NotAuthorizedException, TierChangeNotAllowedException, TooManyRequestsException, UserPoolTaggingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an app client in a user pool. This operation sets basic and advanced
 * configuration options.
 * 
 * Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.
 * 
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const createUserPoolClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CreateUserPoolClient" }, CreateUserPoolClientRequest, CreateUserPoolClientResponse, [FeatureUnavailableInTierException, InternalErrorException, InvalidOAuthFlowException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceNotFoundException, ScopeDoesNotExistException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a user pool ID, returns configuration information. This operation is useful when
 * you want to inspect an existing user pool and programmatically replicate the
 * configuration to another user pool.
 * 
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 * 
 * **Learn more**
 * 
 * - Signing Amazon Web Services API Requests
 * 
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */export const describeUserPool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.DescribeUserPool" }, DescribeUserPoolRequest, DescribeUserPoolResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserPoolTaggingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes all of the access tokens generated by, and at the same time as, the specified
 * refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito
 * user APIs, or to authorize access to your resource server.
 * 
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */export const revokeToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.RevokeToken" }, RevokeTokenRequest, RevokeTokenResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, TooManyRequestsException, UnauthorizedException, UnsupportedOperationException, UnsupportedTokenTypeException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets up or modifies the logging configuration of a user pool. User pools can export
 * user notification logs and, when threat protection is active, user-activity logs. For
 * more information, see Exporting user
 * pool logs.
 */export const setLogDeliveryConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration" }, SetLogDeliveryConfigurationRequest, SetLogDeliveryConfigurationResponse, [FeatureUnavailableInTierException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Requests credential creation options from your user pool for the currently signed-in
 * user. Returns information about the user pool, the user profile, and authentication
 * requirements. Users must provide this information in their request to enroll your
 * application with their passkey provider.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */export const startWebAuthnRegistration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.StartWebAuthnRegistration" }, StartWebAuthnRegistrationRequest, StartWebAuthnRegistrationResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, TooManyRequestsException, WebAuthnConfigurationMissingException, WebAuthnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Given a refresh token, issues new ID, access, and optionally refresh tokens for the
 * user who owns the submitted token. This operation issues a new refresh token and
 * invalidates the original refresh token after an optional grace period when refresh token
 * rotation is enabled. If refresh token rotation is disabled, issues new ID and access
 * tokens only.
 */export const getTokensFromRefreshToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.GetTokensFromRefreshToken" }, GetTokensFromRefreshTokenRequest, GetTokensFromRefreshTokenResponse, [ForbiddenException, InternalErrorException, InvalidLambdaResponseException, InvalidParameterException, NotAuthorizedException, RefreshTokenReuseException, ResourceNotFoundException, TooManyRequestsException, UnexpectedLambdaException, UserLambdaValidationException, UserNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures threat protection for a user pool or app client. Sets configuration for the
 * following.
 * 
 * - Responses to risks with adaptive authentication
 * 
 * - Responses to vulnerable passwords with compromised-credentials
 * detection
 * 
 * - Notifications to users who have had risky activity detected
 * 
 * - IP-address denylist and allowlist
 * 
 * To set the risk configuration for the user pool to defaults, send this request with
 * only the `UserPoolId` parameter. To reset the threat protection settings of
 * an app client to be inherited from the user pool, send `UserPoolId` and
 * `ClientId` parameters only. To change threat protection to audit-only or
 * off, update the value of `UserPoolAddOns` in an `UpdateUserPool`
 * request. To activate this setting, your user pool must be on the
 * Plus tier.
 */export const setRiskConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.SetRiskConfiguration" }, SetRiskConfigurationRequest, SetRiskConfigurationResponse, [CodeDeliveryFailureException, InternalErrorException, InvalidEmailRoleAccessPolicyException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException, UserPoolAddOnNotEnabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Completes registration of a passkey authenticator for the currently signed-in
 * user.
 * 
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */export const completeWebAuthnRegistration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-04-18", sdkId: "Cognito Identity Provider", sigV4ServiceName: "cognito-idp", name: "AWSCognitoIdentityProviderService.CompleteWebAuthnRegistration" }, CompleteWebAuthnRegistrationRequest, CompleteWebAuthnRegistrationResponse, [ForbiddenException, InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, TooManyRequestsException, WebAuthnChallengeNotFoundException, WebAuthnClientMismatchException, WebAuthnCredentialNotSupportedException, WebAuthnNotEnabledException, WebAuthnOriginNotAllowedException, WebAuthnRelyingPartyMismatchException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
