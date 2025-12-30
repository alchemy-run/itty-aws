import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetMetadataRequest = Schema.Struct({appId: Schema.String, environmentName: Schema.String});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const ExchangeCodeForTokenRequestBody = Schema.Struct({code: Schema.String, redirectUri: Schema.String, clientId: Schema.optional(Schema.String)});
export const PutMetadataFlagBody = Schema.Struct({newValue: Schema.String});
export const RefreshTokenRequestBody = Schema.Struct({token: Schema.String, clientId: Schema.optional(Schema.String)});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const ExchangeCodeForTokenRequest = Schema.Struct({provider: Schema.String, request: Body("undefined", ExchangeCodeForTokenRequestBody)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Tags});
export const PutMetadataFlagRequest = Schema.Struct({appId: Schema.String, environmentName: Schema.String, featureName: Schema.String, body: Body("undefined", PutMetadataFlagBody)});
export const RefreshTokenRequest = Schema.Struct({provider: Schema.String, refreshTokenBody: Body("undefined", RefreshTokenRequestBody)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags});
export const TagResourceResponse = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const FeaturesMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ExchangeCodeForTokenResponse = Schema.Struct({accessToken: Schema.String, expiresIn: Schema.Number, refreshToken: Schema.String});
export const GetMetadataResponse = Schema.Struct({features: FeaturesMap});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const RefreshTokenResponse = Schema.Struct({accessToken: Schema.String, expiresIn: Schema.Number});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const exchangeCodeForToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tokens/{provider}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ExchangeCodeForToken" }, ExchangeCodeForTokenRequest, ExchangeCodeForTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetadata = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.GetMetadata" }, GetMetadataRequest, GetMetadataResponse, [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putMetadataFlag = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", method: "PUT", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.PutMetadataFlag" }, PutMetadataFlagRequest, Schema.Struct({}), [InvalidParameterExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const refreshToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tokens/{provider}/refresh", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.RefreshToken" }, RefreshTokenRequest, RefreshTokenResponse, [InvalidParameterExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "AmplifyUIBuilder.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
