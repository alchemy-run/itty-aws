import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const CreateBlueprintVersionRequest = Schema.Struct({blueprintArn: Schema.String, clientToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceARN: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceARN: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tag = Schema.Struct({key: Schema.String, value: Schema.String});
export const TagList = Schema.Array(Tag);
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)});
export const TagResourceRequest = Schema.Struct({resourceARN: Schema.String, tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const KmsEncryptionContext = Schema.Record({key: Schema.String, value: Schema.String});
export const Blueprint = Schema.Struct({blueprintArn: Schema.String, schema: Schema.String, type: Schema.String, creationTime: Schema.Date, lastModifiedTime: Schema.Date, blueprintName: Schema.String, blueprintVersion: Schema.optional(Schema.String), blueprintStage: Schema.optional(Schema.String), kmsKeyId: Schema.optional(Schema.String), kmsEncryptionContext: Schema.optional(KmsEncryptionContext)});
export const CreateBlueprintVersionResponse = Schema.Struct({blueprint: Blueprint});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/untagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createBlueprintVersion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/blueprints/{blueprintArn}/versions/", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.CreateBlueprintVersion" }, CreateBlueprintVersionRequest, CreateBlueprintVersionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/tagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-07-26", uri: "/listTagsForResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "AmazonBedrockKeystoneBuildTimeService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
