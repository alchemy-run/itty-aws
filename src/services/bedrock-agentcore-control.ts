import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({resourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: S.String}) {}
export class GetTokenVaultRequest extends S.Class<GetTokenVaultRequest>("GetTokenVaultRequest")({tokenVaultId: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({resourceArn: S.String, policy: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class KmsConfiguration extends S.Class<KmsConfiguration>("KmsConfiguration")({keyType: S.String, kmsKeyArn: S.optional(S.String)}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({policy: S.optional(S.String)}) {}
export class GetTokenVaultResponse extends S.Class<GetTokenVaultResponse>("GetTokenVaultResponse")({tokenVaultId: S.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: S.Date}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({policy: S.String}) {}
export class SetTokenVaultCMKRequest extends S.Class<SetTokenVaultCMKRequest>("SetTokenVaultCMKRequest")({tokenVaultId: S.optional(S.String), kmsConfiguration: KmsConfiguration}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class SetTokenVaultCMKResponse extends S.Class<SetTokenVaultCMKResponse>("SetTokenVaultCMKResponse")({tokenVaultId: S.String, kmsConfiguration: KmsConfiguration, lastModifiedDate: S.Date}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {message: S.String}) {};

//# Operations
/**
 * Creates or updates a resource-based policy for a resource with the specified resourceArn.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "PUT", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified tags from the specified resource.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime, Browser, Code Interpreter tool, and Gateway.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the resource-based policy for a specified resource.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "DELETE", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource-based policy for a specified resource.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime and Gateway.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/resourcepolicy/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a token vault.
 */export const getTokenVault = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/identities/get-token-vault", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.GetTokenVault" }, GetTokenVaultRequest, GetTokenVaultResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime, Browser, Code Interpreter tool, and Gateway.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags associated with the specified resource.
 * 
 * 
 * This feature is currently available only for AgentCore Runtime, Browser, Code Interpreter tool, and Gateway.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the customer master key (CMK) for a token vault.
 */export const setTokenVaultCMK = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/identities/set-token-vault-cmk", method: "POST", sdkId: "Bedrock AgentCore Control", sigV4ServiceName: "bedrock-agentcore", name: "AmazonBedrockAgentCoreControl.SetTokenVaultCMK" }, SetTokenVaultCMKRequest, SetTokenVaultCMKResponse, [AccessDeniedException, ConcurrentModificationException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
