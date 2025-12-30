import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
