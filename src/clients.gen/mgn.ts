import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class InitializeServiceRequest extends S.Class<InitializeServiceRequest>("InitializeServiceRequest")({}) {}
export class InitializeServiceResponse extends S.Class<InitializeServiceResponse>("InitializeServiceResponse")({}) {}
export const TagKeys = S.Array(S.String);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String), code: S.optional(S.String)}) {}
export class ListManagedAccountsRequest extends S.Class<ListManagedAccountsRequest>("ListManagedAccountsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.optional(S.String), message: S.optional(S.String)}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ManagedAccount extends S.Class<ManagedAccount>("ManagedAccount")({accountId: S.optional(S.String)}) {}
export const ManagedAccounts = S.Array(ManagedAccount);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), code: S.optional(S.String), reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class ListManagedAccountsResponse extends S.Class<ListManagedAccountsResponse>("ListManagedAccountsResponse")({items: ManagedAccounts, nextToken: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String), code: S.optional(S.String), resourceId: S.optional(S.String), resourceType: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After"))}) {}
export class UninitializedAccountException extends S.Class<UninitializedAccountException>("UninitializedAccountException")({message: S.optional(S.String), code: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class UninitializedAccountExceptionError extends S.TaggedError<UninitializedAccountExceptionError>()("UninitializedAccountException", UninitializedAccountException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.UntagResource" }, UntagResourceRequest, S.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const initializeService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/InitializeService", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.InitializeService" }, InitializeServiceRequest, InitializeServiceResponse, [AccessDeniedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "GET", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.TagResource" }, TagResourceRequest, S.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listManagedAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/ListManagedAccounts", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListManagedAccounts" }, ListManagedAccountsRequest, ListManagedAccountsResponse, [UninitializedAccountExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
