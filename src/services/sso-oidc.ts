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
export const startDeviceAuthorization = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/device_authorization", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.StartDeviceAuthorization" }, StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse, [InternalServerException, InvalidClientException, InvalidRequestException, SlowDownException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createToken = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/token", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateToken" }, CreateTokenRequest, CreateTokenResponse, [AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createTokenWithIAM = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/token?aws_iam=t", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateTokenWithIAM" }, CreateTokenWithIAMRequest, CreateTokenWithIAMResponse, [AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidRequestRegionException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerClient = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-10", uri: "/client/register", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.RegisterClient" }, RegisterClientRequest, RegisterClientResponse, [InternalServerException, InvalidClientMetadataException, InvalidRedirectUriException, InvalidRequestException, InvalidScopeException, SlowDownException, UnsupportedGrantTypeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
