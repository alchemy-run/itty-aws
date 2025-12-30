import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class SyncInputConfiguration extends S.Class<SyncInputConfiguration>("SyncInputConfiguration")({bytes: S.optional(H.StreamBody()), s3Uri: S.optional(S.String)}) {}
export class DataAutomationConfiguration extends S.Class<DataAutomationConfiguration>("DataAutomationConfiguration")({dataAutomationProjectArn: S.String, stage: S.optional(S.String)}) {}
export class Blueprint extends S.Class<Blueprint>("Blueprint")({blueprintArn: S.String, version: S.optional(S.String), stage: S.optional(S.String)}) {}
export const BlueprintList = S.Array(Blueprint);
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const EncryptionContextMap = S.Record({key: S.String, value: S.String});
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({kmsKeyId: S.String, kmsEncryptionContext: S.optional(EncryptionContextMap)}) {}
export class InvokeDataAutomationRequest extends S.Class<InvokeDataAutomationRequest>("InvokeDataAutomationRequest")({inputConfiguration: SyncInputConfiguration, dataAutomationConfiguration: S.optional(DataAutomationConfiguration), blueprints: S.optional(BlueprintList), dataAutomationProfileArn: S.String, encryptionConfiguration: S.optional(EncryptionConfiguration)}) {}
export class OutputSegment extends S.Class<OutputSegment>("OutputSegment")({customOutputStatus: S.optional(S.String), customOutput: S.optional(S.String), standardOutput: S.optional(S.String)}) {}
export const OutputSegmentList = S.Array(OutputSegment);
export class InvokeDataAutomationResponse extends S.Class<InvokeDataAutomationResponse>("InvokeDataAutomationResponse")({semanticModality: S.String, outputSegments: OutputSegmentList}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Untag an Amazon Bedrock Data Automation resource
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List tags for an Amazon Bedrock Data Automation resource
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tag an Amazon Bedrock Data Automation resource
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sync API: Invoke data automation.
 */export const invokeDataAutomation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.InvokeDataAutomation" }, InvokeDataAutomationRequest, InvokeDataAutomationResponse, [AccessDeniedException, InternalServerException, ServiceUnavailableException, ThrottlingException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
