import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const Scopes = S.Array(S.String);
export const RedirectUris = S.Array(S.String);
export const GrantTypes = S.Array(S.String);
export class CreateTokenRequest extends S.Class<CreateTokenRequest>("CreateTokenRequest")({clientId: S.String, clientSecret: S.String, grantType: S.String, deviceCode: S.optional(S.String), code: S.optional(S.String), refreshToken: S.optional(S.String), scope: S.optional(Scopes), redirectUri: S.optional(S.String), codeVerifier: S.optional(S.String)}) {}
export class CreateTokenWithIAMRequest extends S.Class<CreateTokenWithIAMRequest>("CreateTokenWithIAMRequest")({clientId: S.String, grantType: S.String, code: S.optional(S.String), refreshToken: S.optional(S.String), assertion: S.optional(S.String), scope: S.optional(Scopes), redirectUri: S.optional(S.String), subjectToken: S.optional(S.String), subjectTokenType: S.optional(S.String), requestedTokenType: S.optional(S.String), codeVerifier: S.optional(S.String)}) {}
export class RegisterClientRequest extends S.Class<RegisterClientRequest>("RegisterClientRequest")({clientName: S.String, clientType: S.String, scopes: S.optional(Scopes), redirectUris: S.optional(RedirectUris), grantTypes: S.optional(GrantTypes), issuerUrl: S.optional(S.String), entitledApplicationArn: S.optional(S.String)}) {}
export class StartDeviceAuthorizationRequest extends S.Class<StartDeviceAuthorizationRequest>("StartDeviceAuthorizationRequest")({clientId: S.String, clientSecret: S.String, startUrl: S.String}) {}
export class CreateTokenResponse extends S.Class<CreateTokenResponse>("CreateTokenResponse")({accessToken: S.optional(S.String), tokenType: S.optional(S.String), expiresIn: S.optional(S.Number), refreshToken: S.optional(S.String), idToken: S.optional(S.String)}) {}
export class RegisterClientResponse extends S.Class<RegisterClientResponse>("RegisterClientResponse")({clientId: S.optional(S.String), clientSecret: S.optional(S.String), clientIdIssuedAt: S.optional(S.Number), clientSecretExpiresAt: S.optional(S.Number), authorizationEndpoint: S.optional(S.String), tokenEndpoint: S.optional(S.String)}) {}
export class StartDeviceAuthorizationResponse extends S.Class<StartDeviceAuthorizationResponse>("StartDeviceAuthorizationResponse")({deviceCode: S.optional(S.String), userCode: S.optional(S.String), verificationUri: S.optional(S.String), verificationUriComplete: S.optional(S.String), expiresIn: S.optional(S.Number), interval: S.optional(S.Number)}) {}
export class AwsAdditionalDetails extends S.Class<AwsAdditionalDetails>("AwsAdditionalDetails")({identityContext: S.optional(S.String)}) {}
export class CreateTokenWithIAMResponse extends S.Class<CreateTokenWithIAMResponse>("CreateTokenWithIAMResponse")({accessToken: S.optional(S.String), tokenType: S.optional(S.String), expiresIn: S.optional(S.Number), refreshToken: S.optional(S.String), idToken: S.optional(S.String), issuedTokenType: S.optional(S.String), scope: S.optional(Scopes), awsAdditionalDetails: S.optional(AwsAdditionalDetails)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {error: S.optional(S.String), reason: S.optional(S.String), error_description: S.optional(S.String)}) {};
export class AuthorizationPendingException extends S.TaggedError<AuthorizationPendingException>()("AuthorizationPendingException", {}) {};
export class InvalidClientException extends S.TaggedError<InvalidClientException>()("InvalidClientException", {error: S.optional(S.String), error_description: S.optional(S.String)}) {};
export class ExpiredTokenException extends S.TaggedError<ExpiredTokenException>()("ExpiredTokenException", {}) {};
export class InvalidGrantException extends S.TaggedError<InvalidGrantException>()("InvalidGrantException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class InvalidClientMetadataException extends S.TaggedError<InvalidClientMetadataException>()("InvalidClientMetadataException", {error: S.optional(S.String), error_description: S.optional(S.String)}) {};
export class InvalidRequestRegionException extends S.TaggedError<InvalidRequestRegionException>()("InvalidRequestRegionException", {error: S.optional(S.String), error_description: S.optional(S.String), endpoint: S.optional(S.String), region: S.optional(S.String)}) {};
export class InvalidScopeException extends S.TaggedError<InvalidScopeException>()("InvalidScopeException", {}) {};
export class SlowDownException extends S.TaggedError<SlowDownException>()("SlowDownException", {}) {};
export class InvalidRedirectUriException extends S.TaggedError<InvalidRedirectUriException>()("InvalidRedirectUriException", {error: S.optional(S.String), error_description: S.optional(S.String)}) {};
export class UnauthorizedClientException extends S.TaggedError<UnauthorizedClientException>()("UnauthorizedClientException", {}) {};
export class UnsupportedGrantTypeException extends S.TaggedError<UnsupportedGrantTypeException>()("UnsupportedGrantTypeException", {}) {};

//# Operations
/**
 * Initiates device authorization by requesting a pair of verification codes from the
 * authorization service.
 */export const startDeviceAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/device_authorization", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.StartDeviceAuthorization" }, StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse, [InternalServerException, InvalidClientException, InvalidRequestException, SlowDownException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and returns access and refresh tokens for clients that are authenticated using
 * client secrets. The access token can be used to fetch short-lived credentials for the assigned
 * AWS accounts or to access application APIs using `bearer` authentication.
 */export const createToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/token", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateToken" }, CreateTokenRequest, CreateTokenResponse, [AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates and returns access and refresh tokens for authorized client applications that are
 * authenticated using any IAM entity, such as a service
 * role or user. These tokens might contain defined scopes that specify permissions such as `read:profile` or `write:data`. Through downscoping, you can use the scopes parameter to request tokens with reduced permissions compared to the original client application's permissions or, if applicable, the refresh token's scopes. The access token can be used to fetch short-lived credentials for the assigned
 * Amazon Web Services accounts or to access application APIs using `bearer` authentication.
 * 
 * 
 * 
 * 
 * This API is used with Signature Version 4. For more information, see Amazon Web Services Signature
 * Version 4 for API Requests.
 */export const createTokenWithIAM = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/token?aws_iam=t", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateTokenWithIAM" }, CreateTokenWithIAMRequest, CreateTokenWithIAMResponse, [AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidRequestRegionException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a public client with IAM Identity Center. This allows clients to perform authorization using
 * the authorization code grant with Proof Key for Code Exchange (PKCE) or the device
 * code grant.
 */export const registerClient = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/client/register", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.RegisterClient" }, RegisterClientRequest, RegisterClientResponse, [InternalServerException, InvalidClientMetadataException, InvalidRedirectUriException, InvalidRequestException, InvalidScopeException, SlowDownException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
