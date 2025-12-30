import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetSellingSystemSettingsRequest = Schema.Struct({Catalog: Schema.String});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const PutSellingSystemSettingsRequest = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleIdentifier: Schema.optional(Schema.String)});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const GetSellingSystemSettingsResponse = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleArn: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: TagList});
export const PutSellingSystemSettingsResponse = Schema.Struct({Catalog: Schema.String, ResourceSnapshotJobRoleArn: Schema.optional(Schema.String)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationExceptionError = Schema.Struct({FieldName: Schema.optional(Schema.String), Message: Schema.String, Code: Schema.String});
export const ValidationExceptionErrorList = Schema.Array(ValidationExceptionError);
export const ValidationException = Schema.Struct({Message: Schema.String, Reason: Schema.String, ErrorList: Schema.optional(ValidationExceptionErrorList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const getSellingSystemSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/GetSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.GetSellingSystemSettings" }, GetSellingSystemSettingsRequest, GetSellingSystemSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/ListTagsForResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putSellingSystemSettings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/PutSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.PutSellingSystemSettings" }, PutSellingSystemSettingsRequest, PutSellingSystemSettingsResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/TagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/UntagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
