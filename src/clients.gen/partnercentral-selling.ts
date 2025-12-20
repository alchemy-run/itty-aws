import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const GetSellingSystemSettingsRequest = Schema.Struct({Catalog: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const PutSellingSystemSettingsRequest = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleIdentifier: Schema.optional(Schema.String)})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String})
const TagList = Schema.Array(Tag)
const GetSellingSystemSettingsResponse = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleArn: Schema.optional(Schema.String)})
const ListTagsForResourceResponse = Schema.Struct({Tags: TagList})
const PutSellingSystemSettingsResponse = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleArn: Schema.optional(Schema.String)})
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagList})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const GetSellingSystemSettings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/GetSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "GetSellingSystemSettings" }, GetSellingSystemSettingsRequest, GetSellingSystemSettingsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/ListTagsForResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const PutSellingSystemSettings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/PutSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "PutSellingSystemSettings" }, PutSellingSystemSettingsRequest, PutSellingSystemSettingsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/TagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionError = Schema.Struct({FieldName: Schema.optional(Schema.String), Message: Schema.String, Code: Schema.String})
const ValidationExceptionErrorList = Schema.Array(ValidationExceptionError)
const ValidationException = Schema.Struct({Message: Schema.String, Reason: Schema.String, ErrorList: Schema.optional(ValidationExceptionErrorList)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/UntagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
