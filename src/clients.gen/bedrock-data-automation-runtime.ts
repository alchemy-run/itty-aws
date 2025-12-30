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
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export const EncryptionContextMap = S.Record({key: S.String, value: S.String});
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({kmsKeyId: S.String, kmsEncryptionContext: S.optional(EncryptionContextMap)}) {}
export class InvokeDataAutomationRequest extends S.Class<InvokeDataAutomationRequest>("InvokeDataAutomationRequest")({inputConfiguration: SyncInputConfiguration, dataAutomationConfiguration: S.optional(DataAutomationConfiguration), blueprints: S.optional(BlueprintList), dataAutomationProfileArn: S.String, encryptionConfiguration: S.optional(EncryptionConfiguration)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.optional(S.String)}) {}
export class OutputSegment extends S.Class<OutputSegment>("OutputSegment")({customOutputStatus: S.optional(S.String), customOutput: S.optional(S.String), standardOutput: S.optional(S.String)}) {}
export const OutputSegmentList = S.Array(OutputSegment);
export class InvokeDataAutomationResponse extends S.Class<InvokeDataAutomationResponse>("InvokeDataAutomationResponse")({semanticModality: S.String, outputSegments: OutputSegmentList}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const invokeDataAutomation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.InvokeDataAutomation" }, InvokeDataAutomationRequest, InvokeDataAutomationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
