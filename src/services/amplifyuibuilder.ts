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
export const FeaturesMap = S.Record({key: S.String, value: S.String});
export class ExchangeCodeForTokenResponse extends S.Class<ExchangeCodeForTokenResponse>("ExchangeCodeForTokenResponse")({accessToken: S.String, expiresIn: S.Number, refreshToken: S.String}) {}
export class GetMetadataResponse extends S.Class<GetMetadataResponse>("GetMetadataResponse")({features: FeaturesMap}) {}
export class RefreshTokenResponse extends S.Class<RefreshTokenResponse>("RefreshTokenResponse")({accessToken: S.String, expiresIn: S.Number}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};

//# Operations
/**
 * This is for internal use.
 * 
 * 
 * 
 * 
 * Amplify uses this action to exchange an access code for a token.
 */export const exchangeCodeForToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tokens/{provider}", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ExchangeCodeForToken" }, ExchangeCodeForTokenRequest, ExchangeCodeForTokenResponse, [InvalidParameterException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns existing metadata for an Amplify app.
 */export const getMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.GetMetadata" }, GetMetadataRequest, GetMetadataResponse, [InvalidParameterException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags for a specified Amazon Resource Name (ARN).
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stores the metadata information about a feature on a form.
 */export const putMetadataFlag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", method: "PUT", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.PutMetadataFlag" }, PutMetadataFlagRequest, S.Struct({}), [InvalidParameterException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This is for internal use.
 * 
 * 
 * 
 * 
 * Amplify uses this action to refresh a previously issued access token that might have expired.
 */export const refreshToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tokens/{provider}/refresh", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.RefreshToken" }, RefreshTokenRequest, RefreshTokenResponse, [InvalidParameterException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags the resource with a tag key and value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Untags a resource with a specified Amazon Resource Name (ARN).
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
