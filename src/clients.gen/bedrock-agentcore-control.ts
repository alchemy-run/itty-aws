import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const GetTokenVaultRequest = Schema.Struct({tokenVaultId: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const KmsConfiguration = Schema.Struct({keyType: Schema.String, kmsKeyArn: Schema.optional(Schema.String)})
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const GetTokenVaultResponse = Schema.Struct({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
const SetTokenVaultCMKRequest = Schema.Struct({tokenVaultId: Schema.optional(Schema.String), kmsConfiguration: KmsConfiguration})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
const SetTokenVaultCMKResponse = Schema.Struct({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date})
const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetTokenVault = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/identities/get-token-vault", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "GetTokenVault" }, GetTokenVaultRequest, GetTokenVaultResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnauthorizedException", UnauthorizedException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConcurrentModificationException = Schema.Struct({message: Schema.String})
export const SetTokenVaultCMK = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/identities/set-token-vault-cmk", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "SetTokenVaultCMK" }, SetTokenVaultCMKRequest, SetTokenVaultCMKResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConcurrentModificationException", ConcurrentModificationException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("UnauthorizedException", UnauthorizedException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
