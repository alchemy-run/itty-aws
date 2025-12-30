import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class CopyBlueprintStageRequest extends Schema.Class<CopyBlueprintStageRequest>("CopyBlueprintStageRequest")({blueprintArn: Schema.String, sourceStage: Schema.String, targetStage: Schema.String, clientToken: Schema.optional(Schema.String)}) {}
export class CopyBlueprintStageResponse extends Schema.Class<CopyBlueprintStageResponse>("CopyBlueprintStageResponse")({}) {}
export class CreateBlueprintVersionRequest extends Schema.Class<CreateBlueprintVersionRequest>("CreateBlueprintVersionRequest")({blueprintArn: Schema.String, clientToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Tag extends Schema.Class<Tag>("Tag")({key: Schema.String, value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagList)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: Schema.String, tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.optional(Schema.String)}) {}
export const KmsEncryptionContext = Schema.Record({key: Schema.String, value: Schema.String});
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class S3Object extends Schema.Class<S3Object>("S3Object")({s3Uri: Schema.String, version: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}
export class BlueprintOptimizationSample extends Schema.Class<BlueprintOptimizationSample>("BlueprintOptimizationSample")({assetS3Object: S3Object, groundTruthS3Object: S3Object}) {}
export const BlueprintOptimizationSamples = Schema.Array(BlueprintOptimizationSample);
export class Blueprint extends Schema.Class<Blueprint>("Blueprint")({blueprintArn: Schema.String, schema: Schema.String, type: Schema.String, creationTime: Schema.Date, lastModifiedTime: Schema.Date, blueprintName: Schema.String, blueprintVersion: Schema.optional(Schema.String), blueprintStage: Schema.optional(Schema.String), kmsKeyId: Schema.optional(Schema.String), kmsEncryptionContext: Schema.optional(KmsEncryptionContext), optimizationSamples: Schema.optional(BlueprintOptimizationSamples), optimizationTime: Schema.optional(Schema.Date)}) {}
export class CreateBlueprintVersionResponse extends Schema.Class<CreateBlueprintVersionResponse>("CreateBlueprintVersionResponse")({blueprint: Blueprint}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const copyBlueprintStage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/copy-stage", method: "PUT", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CopyBlueprintStage" }, CopyBlueprintStageRequest, CopyBlueprintStageResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/listTagsForResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/tagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/untagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createBlueprintVersion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/versions/", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CreateBlueprintVersion" }, CreateBlueprintVersionRequest, CreateBlueprintVersionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
