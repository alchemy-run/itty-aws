import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class InitializeServiceRequest extends Schema.Class<InitializeServiceRequest>("InitializeServiceRequest")({}) {}
export class InitializeServiceResponse extends Schema.Class<InitializeServiceResponse>("InitializeServiceResponse")({}) {}
export const TagKeys = Schema.Array(Schema.String);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)}) {}
export class ListManagedAccountsRequest extends Schema.Class<ListManagedAccountsRequest>("ListManagedAccountsRequest")({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagsMap}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.optional(Schema.String), message: Schema.optional(Schema.String)}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ManagedAccount extends Schema.Class<ManagedAccount>("ManagedAccount")({accountId: Schema.optional(Schema.String)}) {}
export const ManagedAccounts = Schema.Array(ManagedAccount);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}
export class ListManagedAccountsResponse extends Schema.Class<ListManagedAccountsResponse>("ListManagedAccountsResponse")({items: ManagedAccounts, nextToken: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After"))}) {}
export class UninitializedAccountException extends Schema.Class<UninitializedAccountException>("UninitializedAccountException")({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class UninitializedAccountExceptionError extends Schema.TaggedError<UninitializedAccountExceptionError>()("UninitializedAccountException", UninitializedAccountException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const initializeService = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/InitializeService", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.InitializeService" }, InitializeServiceRequest, InitializeServiceResponse, [AccessDeniedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "GET", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.TagResource" }, TagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/ListManagedAccounts", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListManagedAccounts" }, ListManagedAccountsRequest, ListManagedAccountsResponse, [UninitializedAccountExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
