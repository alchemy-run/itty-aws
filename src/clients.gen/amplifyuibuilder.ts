import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GetMetadataRequest extends S.Class<GetMetadataRequest>("GetMetadataRequest")({appId: S.String, environmentName: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ExchangeCodeForTokenRequestBody extends S.Class<ExchangeCodeForTokenRequestBody>("ExchangeCodeForTokenRequestBody")({code: S.String, redirectUri: S.String, clientId: S.optional(S.String)}) {}
export class PutMetadataFlagBody extends S.Class<PutMetadataFlagBody>("PutMetadataFlagBody")({newValue: S.String}) {}
export class RefreshTokenRequestBody extends S.Class<RefreshTokenRequestBody>("RefreshTokenRequestBody")({token: S.String, clientId: S.optional(S.String)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ExchangeCodeForTokenRequest extends S.Class<ExchangeCodeForTokenRequest>("ExchangeCodeForTokenRequest")({provider: S.String, request: H.Body("undefined", ExchangeCodeForTokenRequestBody)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Tags}) {}
export class PutMetadataFlagRequest extends S.Class<PutMetadataFlagRequest>("PutMetadataFlagRequest")({appId: S.String, environmentName: S.String, featureName: S.String, body: H.Body("undefined", PutMetadataFlagBody)}) {}
export class RefreshTokenRequest extends S.Class<RefreshTokenRequest>("RefreshTokenRequest")({provider: S.String, refreshTokenBody: H.Body("undefined", RefreshTokenRequestBody)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export const FeaturesMap = S.Record({key: S.String, value: S.String});
export class ExchangeCodeForTokenResponse extends S.Class<ExchangeCodeForTokenResponse>("ExchangeCodeForTokenResponse")({accessToken: S.String, expiresIn: S.Number, refreshToken: S.String}) {}
export class GetMetadataResponse extends S.Class<GetMetadataResponse>("GetMetadataResponse")({features: FeaturesMap}) {}
export class InvalidParameterException extends S.Class<InvalidParameterException>("InvalidParameterException")({message: S.optional(S.String)}) {}
export class UnauthorizedException extends S.Class<UnauthorizedException>("UnauthorizedException")({message: S.optional(S.String)}) {}
export class RefreshTokenResponse extends S.Class<RefreshTokenResponse>("RefreshTokenResponse")({accessToken: S.String, expiresIn: S.Number}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class InvalidParameterExceptionError extends S.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class UnauthorizedExceptionError extends S.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const exchangeCodeForToken = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tokens/{provider}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ExchangeCodeForToken" }, ExchangeCodeForTokenRequest, ExchangeCodeForTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetadata = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.GetMetadata" }, GetMetadataRequest, GetMetadataResponse, [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putMetadataFlag = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", method: "PUT", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.PutMetadataFlag" }, PutMetadataFlagRequest, S.Struct({}), [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const refreshToken = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tokens/{provider}/refresh", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.RefreshToken" }, RefreshTokenRequest, RefreshTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
