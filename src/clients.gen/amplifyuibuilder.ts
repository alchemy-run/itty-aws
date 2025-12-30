import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class GetMetadataRequest extends Schema.Class<GetMetadataRequest>("GetMetadataRequest")({appId: Schema.String, environmentName: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ExchangeCodeForTokenRequestBody extends Schema.Class<ExchangeCodeForTokenRequestBody>("ExchangeCodeForTokenRequestBody")({code: Schema.String, redirectUri: Schema.String, clientId: Schema.optional(Schema.String)}) {}
export class PutMetadataFlagBody extends Schema.Class<PutMetadataFlagBody>("PutMetadataFlagBody")({newValue: Schema.String}) {}
export class RefreshTokenRequestBody extends Schema.Class<RefreshTokenRequestBody>("RefreshTokenRequestBody")({token: Schema.String, clientId: Schema.optional(Schema.String)}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class ExchangeCodeForTokenRequest extends Schema.Class<ExchangeCodeForTokenRequest>("ExchangeCodeForTokenRequest")({provider: Schema.String, request: Body("undefined", ExchangeCodeForTokenRequestBody)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Tags}) {}
export class PutMetadataFlagRequest extends Schema.Class<PutMetadataFlagRequest>("PutMetadataFlagRequest")({appId: Schema.String, environmentName: Schema.String, featureName: Schema.String, body: Body("undefined", PutMetadataFlagBody)}) {}
export class RefreshTokenRequest extends Schema.Class<RefreshTokenRequest>("RefreshTokenRequest")({provider: Schema.String, refreshTokenBody: Body("undefined", RefreshTokenRequestBody)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export const FeaturesMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ExchangeCodeForTokenResponse extends Schema.Class<ExchangeCodeForTokenResponse>("ExchangeCodeForTokenResponse")({accessToken: Schema.String, expiresIn: Schema.Number, refreshToken: Schema.String}) {}
export class GetMetadataResponse extends Schema.Class<GetMetadataResponse>("GetMetadataResponse")({features: FeaturesMap}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({message: Schema.optional(Schema.String)}) {}
export class UnauthorizedException extends Schema.Class<UnauthorizedException>("UnauthorizedException")({message: Schema.optional(Schema.String)}) {}
export class RefreshTokenResponse extends Schema.Class<RefreshTokenResponse>("RefreshTokenResponse")({accessToken: Schema.String, expiresIn: Schema.Number}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const exchangeCodeForToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tokens/{provider}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ExchangeCodeForToken" }, ExchangeCodeForTokenRequest, ExchangeCodeForTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetadata = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.GetMetadata" }, GetMetadataRequest, GetMetadataResponse, [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putMetadataFlag = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", method: "PUT", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.PutMetadataFlag" }, PutMetadataFlagRequest, Schema.Struct({}), [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const refreshToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tokens/{provider}/refresh", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.RefreshToken" }, RefreshTokenRequest, RefreshTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
