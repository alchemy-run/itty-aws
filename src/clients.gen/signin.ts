import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class CreateOAuth2TokenRequestBody extends Schema.Class<CreateOAuth2TokenRequestBody>("CreateOAuth2TokenRequestBody")({clientId: Schema.String, grantType: Schema.String, code: Schema.optional(Schema.String), redirectUri: Schema.optional(Schema.String), codeVerifier: Schema.optional(Schema.String), refreshToken: Schema.optional(Schema.String)}) {}
export class CreateOAuth2TokenRequest extends Schema.Class<CreateOAuth2TokenRequest>("CreateOAuth2TokenRequest")({tokenInput: Body("undefined", CreateOAuth2TokenRequestBody)}) {}
export class AccessToken extends Schema.Class<AccessToken>("AccessToken")({accessKeyId: Schema.String, secretAccessKey: Schema.String, sessionToken: Schema.String}) {}
export class CreateOAuth2TokenResponseBody extends Schema.Class<CreateOAuth2TokenResponseBody>("CreateOAuth2TokenResponseBody")({accessToken: AccessToken, tokenType: Schema.String, expiresIn: Schema.Number, refreshToken: Schema.String, idToken: Schema.optional(Schema.String)}) {}
export class CreateOAuth2TokenResponse extends Schema.Class<CreateOAuth2TokenResponse>("CreateOAuth2TokenResponse")({tokenOutput: Body("undefined", CreateOAuth2TokenResponseBody)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({error: Schema.String, message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({error: Schema.String, message: Schema.String}) {}
export class TooManyRequestsError extends Schema.Class<TooManyRequestsError>("TooManyRequestsError")({error: Schema.String, message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({error: Schema.String, message: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class TooManyRequestsErrorError extends Schema.TaggedError<TooManyRequestsErrorError>()("TooManyRequestsError", TooManyRequestsError.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const createOAuth2Token = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-01", uri: "/v1/token", method: "POST", sdkId: "Signin", sigV4ServiceName: "signin", name: "Signin.CreateOAuth2Token" }, CreateOAuth2TokenRequest, CreateOAuth2TokenResponse, [AccessDeniedExceptionError, InternalServerExceptionError, TooManyRequestsErrorError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
