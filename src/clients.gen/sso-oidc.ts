import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const Scopes = Schema.Array(Schema.String);
export const RedirectUris = Schema.Array(Schema.String);
export const GrantTypes = Schema.Array(Schema.String);
export const CreateTokenRequest = Schema.Struct({clientId: Schema.String, clientSecret: Schema.String, grantType: Schema.String, deviceCode: Schema.optional(Schema.String), code: Schema.optional(Schema.String), refreshToken: Schema.optional(Schema.String), scope: Schema.optional(Scopes), redirectUri: Schema.optional(Schema.String), codeVerifier: Schema.optional(Schema.String)});
export const CreateTokenWithIAMRequest = Schema.Struct({clientId: Schema.String, grantType: Schema.String, code: Schema.optional(Schema.String), refreshToken: Schema.optional(Schema.String), assertion: Schema.optional(Schema.String), scope: Schema.optional(Scopes), redirectUri: Schema.optional(Schema.String), subjectToken: Schema.optional(Schema.String), subjectTokenType: Schema.optional(Schema.String), requestedTokenType: Schema.optional(Schema.String), codeVerifier: Schema.optional(Schema.String)});
export const RegisterClientRequest = Schema.Struct({clientName: Schema.String, clientType: Schema.String, scopes: Schema.optional(Scopes), redirectUris: Schema.optional(RedirectUris), grantTypes: Schema.optional(GrantTypes), issuerUrl: Schema.optional(Schema.String), entitledApplicationArn: Schema.optional(Schema.String)});
export const StartDeviceAuthorizationRequest = Schema.Struct({clientId: Schema.String, clientSecret: Schema.String, startUrl: Schema.String});
export const CreateTokenResponse = Schema.Struct({accessToken: Schema.optional(Schema.String), tokenType: Schema.optional(Schema.String), expiresIn: Schema.optional(Schema.Number), refreshToken: Schema.optional(Schema.String), idToken: Schema.optional(Schema.String)});
export const RegisterClientResponse = Schema.Struct({clientId: Schema.optional(Schema.String), clientSecret: Schema.optional(Schema.String), clientIdIssuedAt: Schema.optional(Schema.Number), clientSecretExpiresAt: Schema.optional(Schema.Number), authorizationEndpoint: Schema.optional(Schema.String), tokenEndpoint: Schema.optional(Schema.String)});
export const StartDeviceAuthorizationResponse = Schema.Struct({deviceCode: Schema.optional(Schema.String), userCode: Schema.optional(Schema.String), verificationUri: Schema.optional(Schema.String), verificationUriComplete: Schema.optional(Schema.String), expiresIn: Schema.optional(Schema.Number), interval: Schema.optional(Schema.Number)});
export const AwsAdditionalDetails = Schema.Struct({identityContext: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({error: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const CreateTokenWithIAMResponse = Schema.Struct({accessToken: Schema.optional(Schema.String), tokenType: Schema.optional(Schema.String), expiresIn: Schema.optional(Schema.Number), refreshToken: Schema.optional(Schema.String), idToken: Schema.optional(Schema.String), issuedTokenType: Schema.optional(Schema.String), scope: Schema.optional(Scopes), awsAdditionalDetails: Schema.optional(AwsAdditionalDetails)});
export const InternalServerException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidClientException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const AuthorizationPendingException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const ExpiredTokenException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidClientMetadataException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidRequestException = Schema.Struct({error: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidGrantException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidRequestRegionException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String), endpoint: Schema.optional(Schema.String), region: Schema.optional(Schema.String)});
export const InvalidRedirectUriException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const SlowDownException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const InvalidScopeException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const UnauthorizedClientException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});
export const UnsupportedGrantTypeException = Schema.Struct({error: Schema.optional(Schema.String), error_description: Schema.optional(Schema.String)});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class AuthorizationPendingExceptionError extends Schema.TaggedError<AuthorizationPendingExceptionError>()("AuthorizationPendingException", AuthorizationPendingException) {};
export class InvalidClientExceptionError extends Schema.TaggedError<InvalidClientExceptionError>()("InvalidClientException", InvalidClientException) {};
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException) {};
export class InvalidGrantExceptionError extends Schema.TaggedError<InvalidGrantExceptionError>()("InvalidGrantException", InvalidGrantException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class InvalidClientMetadataExceptionError extends Schema.TaggedError<InvalidClientMetadataExceptionError>()("InvalidClientMetadataException", InvalidClientMetadataException) {};
export class InvalidRequestRegionExceptionError extends Schema.TaggedError<InvalidRequestRegionExceptionError>()("InvalidRequestRegionException", InvalidRequestRegionException) {};
export class InvalidScopeExceptionError extends Schema.TaggedError<InvalidScopeExceptionError>()("InvalidScopeException", InvalidScopeException) {};
export class SlowDownExceptionError extends Schema.TaggedError<SlowDownExceptionError>()("SlowDownException", SlowDownException) {};
export class InvalidRedirectUriExceptionError extends Schema.TaggedError<InvalidRedirectUriExceptionError>()("InvalidRedirectUriException", InvalidRedirectUriException) {};
export class UnauthorizedClientExceptionError extends Schema.TaggedError<UnauthorizedClientExceptionError>()("UnauthorizedClientException", UnauthorizedClientException) {};
export class UnsupportedGrantTypeExceptionError extends Schema.TaggedError<UnsupportedGrantTypeExceptionError>()("UnsupportedGrantTypeException", UnsupportedGrantTypeException) {};

//# Operations
export const startDeviceAuthorization = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/device_authorization", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.StartDeviceAuthorization" }, StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse, [InternalServerExceptionError, InvalidClientExceptionError, InvalidRequestExceptionError, SlowDownExceptionError, UnauthorizedClientExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/token", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateToken" }, CreateTokenRequest, CreateTokenResponse, [AccessDeniedExceptionError, AuthorizationPendingExceptionError, ExpiredTokenExceptionError, InternalServerExceptionError, InvalidClientExceptionError, InvalidGrantExceptionError, InvalidRequestExceptionError, InvalidScopeExceptionError, SlowDownExceptionError, UnauthorizedClientExceptionError, UnsupportedGrantTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createTokenWithIAM = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/token?aws_iam=t", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.CreateTokenWithIAM" }, CreateTokenWithIAMRequest, CreateTokenWithIAMResponse, [AccessDeniedExceptionError, AuthorizationPendingExceptionError, ExpiredTokenExceptionError, InternalServerExceptionError, InvalidClientExceptionError, InvalidGrantExceptionError, InvalidRequestExceptionError, InvalidRequestRegionExceptionError, InvalidScopeExceptionError, SlowDownExceptionError, UnauthorizedClientExceptionError, UnsupportedGrantTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerClient = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-10", uri: "/client/register", method: "POST", sdkId: "SSO OIDC", sigV4ServiceName: "sso-oauth", name: "AWSSSOOIDCService.RegisterClient" }, RegisterClientRequest, RegisterClientResponse, [InternalServerExceptionError, InvalidClientMetadataExceptionError, InvalidRedirectUriExceptionError, InvalidRequestExceptionError, InvalidScopeExceptionError, SlowDownExceptionError, UnsupportedGrantTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
