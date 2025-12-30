import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class CopyBlueprintStageRequest extends S.Class<CopyBlueprintStageRequest>("CopyBlueprintStageRequest")({blueprintArn: S.String, sourceStage: S.String, targetStage: S.String, clientToken: S.optional(S.String)}) {}
export class CopyBlueprintStageResponse extends S.Class<CopyBlueprintStageResponse>("CopyBlueprintStageResponse")({}) {}
export class CreateBlueprintVersionRequest extends S.Class<CreateBlueprintVersionRequest>("CreateBlueprintVersionRequest")({blueprintArn: S.String, clientToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.optional(S.String)}) {}
export const KmsEncryptionContext = S.Record({key: S.String, value: S.String});
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class S3Object extends S.Class<S3Object>("S3Object")({s3Uri: S.String, version: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class BlueprintOptimizationSample extends S.Class<BlueprintOptimizationSample>("BlueprintOptimizationSample")({assetS3Object: S3Object, groundTruthS3Object: S3Object}) {}
export const BlueprintOptimizationSamples = S.Array(BlueprintOptimizationSample);
export class Blueprint extends S.Class<Blueprint>("Blueprint")({blueprintArn: S.String, schema: S.String, type: S.String, creationTime: S.Date, lastModifiedTime: S.Date, blueprintName: S.String, blueprintVersion: S.optional(S.String), blueprintStage: S.optional(S.String), kmsKeyId: S.optional(S.String), kmsEncryptionContext: S.optional(KmsEncryptionContext), optimizationSamples: S.optional(BlueprintOptimizationSamples), optimizationTime: S.optional(S.Date)}) {}
export class CreateBlueprintVersionResponse extends S.Class<CreateBlueprintVersionResponse>("CreateBlueprintVersionResponse")({blueprint: Blueprint}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const copyBlueprintStage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/copy-stage", method: "PUT", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CopyBlueprintStage" }, CopyBlueprintStageRequest, CopyBlueprintStageResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/listTagsForResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/tagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/untagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createBlueprintVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/versions/", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CreateBlueprintVersion" }, CreateBlueprintVersionRequest, CreateBlueprintVersionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
