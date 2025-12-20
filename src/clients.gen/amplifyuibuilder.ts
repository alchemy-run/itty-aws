import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const GetMetadataRequest = Schema.Struct({appId: Schema.String, environmentName: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const ExchangeCodeForTokenRequestBody = Schema.Struct({code: Schema.String, redirectUri: Schema.String, clientId: Schema.optional(Schema.String)})
const PutMetadataFlagBody = Schema.Struct({newValue: Schema.String})
const RefreshTokenRequestBody = Schema.Struct({token: Schema.String, clientId: Schema.optional(Schema.String)})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ExchangeCodeForTokenRequest = Schema.Struct({provider: Schema.String, request: Body("undefined", ExchangeCodeForTokenRequestBody)})
const ListTagsForResourceResponse = Schema.Struct({tags: Tags})
const PutMetadataFlagRequest = Schema.Struct({appId: Schema.String, environmentName: Schema.String, featureName: Schema.String, body: Body("undefined", PutMetadataFlagBody)})
const RefreshTokenRequest = Schema.Struct({provider: Schema.String, refreshTokenBody: Body("undefined", RefreshTokenRequestBody)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: Tags})
const TagResourceResponse = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
const FeaturesMap = Schema.Record({key: Schema.String, value: Schema.String})
const ExchangeCodeForTokenResponse = Schema.Struct({accessToken: Schema.String, expiresIn: Schema.Number, refreshToken: Schema.String})
export const ExchangeCodeForToken = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tokens/{provider}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "ExchangeCodeForToken" }, ExchangeCodeForTokenRequest, ExchangeCodeForTokenResponse, ErrorAnnotation("InvalidParameterException", InvalidParameterException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const GetMetadataResponse = Schema.Struct({features: FeaturesMap})
export const GetMetadata = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/app/{appId}/environment/{environmentName}/metadata", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "GetMetadata" }, GetMetadataRequest, GetMetadataResponse, Schema.Union(ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutMetadataFlag = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", method: "PUT", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "PutMetadataFlag" }, PutMetadataFlagRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const RefreshTokenResponse = Schema.Struct({accessToken: Schema.String, expiresIn: Schema.Number})
export const RefreshToken = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tokens/{provider}/refresh", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "RefreshToken" }, RefreshTokenRequest, RefreshTokenResponse, ErrorAnnotation("InvalidParameterException", InvalidParameterException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AmplifyUIBuilder", sigV4ServiceName: "amplifyuibuilder", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnauthorizedException", UnauthorizedException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
