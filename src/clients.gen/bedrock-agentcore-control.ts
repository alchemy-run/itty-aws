import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class DeleteResourcePolicyRequest extends Schema.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({resourceArn: Schema.String}) {}
export class DeleteResourcePolicyResponse extends Schema.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetResourcePolicyRequest extends Schema.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: Schema.String}) {}
export class GetTokenVaultRequest extends Schema.Class<GetTokenVaultRequest>("GetTokenVaultRequest")({tokenVaultId: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class PutResourcePolicyRequest extends Schema.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({resourceArn: Schema.String, policy: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class KmsConfiguration extends Schema.Class<KmsConfiguration>("KmsConfiguration")({keyType: Schema.String, kmsKeyArn: Schema.optional(Schema.String)}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class GetResourcePolicyResponse extends Schema.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({policy: Schema.optional(Schema.String)}) {}
export class GetTokenVaultResponse extends Schema.Class<GetTokenVaultResponse>("GetTokenVaultResponse")({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class PutResourcePolicyResponse extends Schema.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({policy: Schema.String}) {}
export class SetTokenVaultCMKRequest extends Schema.Class<SetTokenVaultCMKRequest>("SetTokenVaultCMKRequest")({tokenVaultId: Schema.optional(Schema.String), kmsConfiguration: KmsConfiguration}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagsMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class UnauthorizedException extends Schema.Class<UnauthorizedException>("UnauthorizedException")({message: Schema.optional(Schema.String)}) {}
export class SetTokenVaultCMKResponse extends Schema.Class<SetTokenVaultCMKResponse>("SetTokenVaultCMKResponse")({tokenVaultId: Schema.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: Schema.Date}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)}) {}
export class ConcurrentModificationException extends Schema.Class<ConcurrentModificationException>("ConcurrentModificationException")({message: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ConcurrentModificationExceptionError extends Schema.TaggedError<ConcurrentModificationExceptionError>()("ConcurrentModificationException", ConcurrentModificationException.fields) {};

//# Operations
export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "PUT", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getTokenVault = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/identities/get-token-vault", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.GetTokenVault" }, GetTokenVaultRequest, GetTokenVaultResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const setTokenVaultCMK = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/identities/set-token-vault-cmk", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.SetTokenVaultCMK" }, SetTokenVaultCMKRequest, SetTokenVaultCMKResponse, [AccessDeniedExceptionError, ConcurrentModificationExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
