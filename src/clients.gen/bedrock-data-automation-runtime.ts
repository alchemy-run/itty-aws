import * as Schema from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class SyncInputConfiguration extends Schema.Class<SyncInputConfiguration>("SyncInputConfiguration")({bytes: Schema.optional(StreamBody()), s3Uri: Schema.optional(Schema.String)}) {}
export class DataAutomationConfiguration extends Schema.Class<DataAutomationConfiguration>("DataAutomationConfiguration")({dataAutomationProjectArn: Schema.String, stage: Schema.optional(Schema.String)}) {}
export class Blueprint extends Schema.Class<Blueprint>("Blueprint")({blueprintArn: Schema.String, version: Schema.optional(Schema.String), stage: Schema.optional(Schema.String)}) {}
export const BlueprintList = Schema.Array(Blueprint);
export class Tag extends Schema.Class<Tag>("Tag")({key: Schema.String, value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagList)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: Schema.String, tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export const EncryptionContextMap = Schema.Record({key: Schema.String, value: Schema.String});
export class EncryptionConfiguration extends Schema.Class<EncryptionConfiguration>("EncryptionConfiguration")({kmsKeyId: Schema.String, kmsEncryptionContext: Schema.optional(EncryptionContextMap)}) {}
export class InvokeDataAutomationRequest extends Schema.Class<InvokeDataAutomationRequest>("InvokeDataAutomationRequest")({inputConfiguration: SyncInputConfiguration, dataAutomationConfiguration: Schema.optional(DataAutomationConfiguration), blueprints: Schema.optional(BlueprintList), dataAutomationProfileArn: Schema.String, encryptionConfiguration: Schema.optional(EncryptionConfiguration)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.optional(Schema.String)}) {}
export class OutputSegment extends Schema.Class<OutputSegment>("OutputSegment")({customOutputStatus: Schema.optional(Schema.String), customOutput: Schema.optional(Schema.String), standardOutput: Schema.optional(Schema.String)}) {}
export const OutputSegmentList = Schema.Array(OutputSegment);
export class InvokeDataAutomationResponse extends Schema.Class<InvokeDataAutomationResponse>("InvokeDataAutomationResponse")({semanticModality: Schema.String, outputSegments: OutputSegmentList}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const invokeDataAutomation = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-06-13", uri: "/", method: "POST", sdkId: "Bedrock Data Automation Runtime", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneRuntimeService.InvokeDataAutomation" }, InvokeDataAutomationRequest, InvokeDataAutomationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
