import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CreateOAuth2TokenRequestBody extends S.Class<CreateOAuth2TokenRequestBody>("CreateOAuth2TokenRequestBody")({clientId: S.String, grantType: S.String, code: S.optional(S.String), redirectUri: S.optional(S.String), codeVerifier: S.optional(S.String), refreshToken: S.optional(S.String)}) {}
export class CreateOAuth2TokenRequest extends S.Class<CreateOAuth2TokenRequest>("CreateOAuth2TokenRequest")({tokenInput: H.Body("undefined", CreateOAuth2TokenRequestBody)}) {}
export class AccessToken extends S.Class<AccessToken>("AccessToken")({accessKeyId: S.String, secretAccessKey: S.String, sessionToken: S.String}) {}
export class CreateOAuth2TokenResponseBody extends S.Class<CreateOAuth2TokenResponseBody>("CreateOAuth2TokenResponseBody")({accessToken: AccessToken, tokenType: S.String, expiresIn: S.Number, refreshToken: S.String, idToken: S.optional(S.String)}) {}
export class CreateOAuth2TokenResponse extends S.Class<CreateOAuth2TokenResponse>("CreateOAuth2TokenResponse")({tokenOutput: H.Body("undefined", CreateOAuth2TokenResponseBody)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {error: S.String, message: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {error: S.String, message: S.String}) {};
export class TooManyRequestsError extends S.TaggedError<TooManyRequestsError>()("TooManyRequestsError", {error: S.String, message: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {error: S.String, message: S.String}) {};

//# Operations
/**
 * CreateOAuth2Token API
 * 
 * Path: /v1/token
 * Request Method: POST
 * Content-Type: application/json or application/x-www-form-urlencoded
 * 
 * This API implements OAuth 2.0 flows for AWS Sign-In CLI clients, supporting both:
 * 1. Authorization code redemption (grant_type=authorization_code) - NOT idempotent
 * 2. Token refresh (grant_type=refresh_token) - Idempotent within token validity window
 * 
 * The operation behavior is determined by the grant_type parameter in the request body:
 * 
 * **Authorization Code Flow (NOT Idempotent):**
 * - JSON or form-encoded body with client_id, grant_type=authorization_code, code, redirect_uri, code_verifier
 * - Returns access_token, token_type, expires_in, refresh_token, and id_token
 * - Each authorization code can only be used ONCE for security (prevents replay attacks)
 * 
 * **Token Refresh Flow (Idempotent):**
 * - JSON or form-encoded body with client_id, grant_type=refresh_token, refresh_token
 * - Returns access_token, token_type, expires_in, and refresh_token (no id_token)
 * - Multiple calls with same refresh_token return consistent results within validity window
 * 
 * Authentication and authorization:
 * - Confidential clients: sigv4 signing required with signin:ExchangeToken permissions
 * - CLI clients (public): authn/authz skipped based on client_id & grant_type
 * 
 * Note: This operation cannot be marked as @idempotent because it handles both idempotent
 * (token refresh) and non-idempotent (auth code redemption) flows in a single endpoint.
 */export const createOAuth2Token = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-01-01", uri: "/v1/token", method: "POST", sdkId: "Signin", sigV4ServiceName: "signin", name: "Signin.CreateOAuth2Token" }, CreateOAuth2TokenRequest, CreateOAuth2TokenResponse, [AccessDeniedException, InternalServerException, TooManyRequestsError, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
