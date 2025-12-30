import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const InitializeServiceRequest = Schema.Struct({});
export const InitializeServiceResponse = Schema.Struct({});
export const TagKeys = Schema.Array(Schema.String);
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)});
export const ListManagedAccountsRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ValidationExceptionField = Schema.Struct({name: Schema.optional(Schema.String), message: Schema.optional(Schema.String)});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ManagedAccount = Schema.Struct({accountId: Schema.optional(Schema.String)});
export const ManagedAccounts = Schema.Array(ManagedAccount);
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});
export const ListManagedAccountsResponse = Schema.Struct({items: ManagedAccounts, nextToken: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After"))});
export const UninitializedAccountException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class UninitializedAccountExceptionError extends Schema.TaggedError<UninitializedAccountExceptionError>()("UninitializedAccountException", UninitializedAccountException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const initializeService = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/InitializeService", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.InitializeService" }, InitializeServiceRequest, InitializeServiceResponse, [AccessDeniedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "GET", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.TagResource" }, TagResourceRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedAccounts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-02-26", uri: "/ListManagedAccounts", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListManagedAccounts" }, ListManagedAccountsRequest, ListManagedAccountsResponse, [UninitializedAccountExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
