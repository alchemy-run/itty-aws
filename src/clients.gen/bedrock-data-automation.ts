import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const CreateBlueprintVersionRequest = Schema.Struct({blueprintArn: Schema.String, clientToken: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({resourceARN: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceARN: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const Tag = Schema.Struct({key: Schema.String, value: Schema.String})
const TagList = Schema.Array(Tag)
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)})
const TagResourceRequest = Schema.Struct({resourceARN: Schema.String, tags: TagList})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/untagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const KmsEncryptionContext = Schema.Record({key: Schema.String, value: Schema.String})
const Blueprint = Schema.Struct({blueprintArn: Schema.String, schema: Schema.String, type: Schema.String, creationTime: Schema.Date, lastModifiedTime: Schema.Date, blueprintName: Schema.String, blueprintVersion: Schema.optional(Schema.String), blueprintStage: Schema.optional(Schema.String), kmsKeyId: Schema.optional(Schema.String), kmsEncryptionContext: Schema.optional(KmsEncryptionContext)})
const CreateBlueprintVersionResponse = Schema.Struct({blueprint: Blueprint})
export const CreateBlueprintVersion = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/blueprints/{blueprintArn}/versions/", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "CreateBlueprintVersion" }, CreateBlueprintVersionRequest, CreateBlueprintVersionResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tagResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/listTagsForResource", method: "POST", sdkId: "Bedrock Data Automation", sigV4ServiceName: "bedrock", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
