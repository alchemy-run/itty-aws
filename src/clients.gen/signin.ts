import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CreateOAuth2TokenRequestBody extends S.Class<CreateOAuth2TokenRequestBody>("CreateOAuth2TokenRequestBody")({clientId: S.String, grantType: S.String, code: S.optional(S.String), redirectUri: S.optional(S.String), codeVerifier: S.optional(S.String), refreshToken: S.optional(S.String)}) {}
export class CreateOAuth2TokenRequest extends S.Class<CreateOAuth2TokenRequest>("CreateOAuth2TokenRequest")({tokenInput: H.Body("undefined", CreateOAuth2TokenRequestBody)}) {}
export class AccessToken extends S.Class<AccessToken>("AccessToken")({accessKeyId: S.String, secretAccessKey: S.String, sessionToken: S.String}) {}
export class CreateOAuth2TokenResponseBody extends S.Class<CreateOAuth2TokenResponseBody>("CreateOAuth2TokenResponseBody")({accessToken: AccessToken, tokenType: S.String, expiresIn: S.Number, refreshToken: S.String, idToken: S.optional(S.String)}) {}
export class CreateOAuth2TokenResponse extends S.Class<CreateOAuth2TokenResponse>("CreateOAuth2TokenResponse")({tokenOutput: H.Body("undefined", CreateOAuth2TokenResponseBody)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({error: S.String, message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({error: S.String, message: S.String}) {}
export class TooManyRequestsError extends S.Class<TooManyRequestsError>("TooManyRequestsError")({error: S.String, message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({error: S.String, message: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class TooManyRequestsErrorError extends S.TaggedError<TooManyRequestsErrorError>()("TooManyRequestsError", TooManyRequestsError.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const createOAuth2Token = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-01-01", uri: "/v1/token", method: "POST", sdkId: "Signin", sigV4ServiceName: "signin", name: "Signin.CreateOAuth2Token" }, CreateOAuth2TokenRequest, CreateOAuth2TokenResponse, [AccessDeniedExceptionError, InternalServerExceptionError, TooManyRequestsErrorError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
