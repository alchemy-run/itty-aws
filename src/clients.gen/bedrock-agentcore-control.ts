import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetTokenVaultRequest = Schema.Struct({tokenVaultId: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const KmsConfiguration = Schema.Struct({keyType: Schema.String, kmsKeyArn: Schema.optional(Schema.String)});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const GetTokenVaultResponse = Schema.Struct({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const SetTokenVaultCMKRequest = Schema.Struct({tokenVaultId: Schema.optional(Schema.String), kmsConfiguration: KmsConfiguration});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const SetTokenVaultCMKResponse = Schema.Struct({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UnauthorizedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ConcurrentModificationException = Schema.Struct({message: Schema.String});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException) {};
export class ConcurrentModificationExceptionError extends Schema.TaggedError<ConcurrentModificationExceptionError>()("ConcurrentModificationException", ConcurrentModificationException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTokenVault = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/identities/get-token-vault", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.GetTokenVault" }, GetTokenVaultRequest, GetTokenVaultResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const setTokenVaultCMK = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/identities/set-token-vault-cmk", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.SetTokenVaultCMK" }, SetTokenVaultCMKRequest, SetTokenVaultCMKResponse, [AccessDeniedExceptionError, ConcurrentModificationExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
