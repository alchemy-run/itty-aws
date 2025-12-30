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
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const KmsEncryptionContext = S.Record({key: S.String, value: S.String});
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class S3Object extends S.Class<S3Object>("S3Object")({s3Uri: S.String, version: S.optional(S.String)}) {}
export class BlueprintOptimizationSample extends S.Class<BlueprintOptimizationSample>("BlueprintOptimizationSample")({assetS3Object: S3Object, groundTruthS3Object: S3Object}) {}
export const BlueprintOptimizationSamples = S.Array(BlueprintOptimizationSample);
export class Blueprint extends S.Class<Blueprint>("Blueprint")({blueprintArn: S.String, schema: S.String, type: S.String, creationTime: S.Date, lastModifiedTime: S.Date, blueprintName: S.String, blueprintVersion: S.optional(S.String), blueprintStage: S.optional(S.String), kmsKeyId: S.optional(S.String), kmsEncryptionContext: S.optional(KmsEncryptionContext), optimizationSamples: S.optional(BlueprintOptimizationSamples), optimizationTime: S.optional(S.Date)}) {}
export class CreateBlueprintVersionResponse extends S.Class<CreateBlueprintVersionResponse>("CreateBlueprintVersionResponse")({blueprint: Blueprint}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Copies a Blueprint from one stage to another
 */export const copyBlueprintStage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/copy-stage", method: "PUT", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CopyBlueprintStage" }, CopyBlueprintStageRequest, CopyBlueprintStageResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List tags for an Amazon Bedrock Data Automation resource
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/listTagsForResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tag an Amazon Bedrock Data Automation resource
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/tagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Untag an Amazon Bedrock Data Automation resource
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/untagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of an existing Amazon Bedrock Data Automation Blueprint
 */export const createBlueprintVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/versions/", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CreateBlueprintVersion" }, CreateBlueprintVersionRequest, CreateBlueprintVersionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
