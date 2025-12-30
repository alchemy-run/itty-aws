import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class GetPolicyVersionRequest extends Schema.Class<GetPolicyVersionRequest>("GetPolicyVersionRequest")({PolicyVersionArn: Schema.String}) {}
export class GetResourcePolicyRequest extends Schema.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: Schema.String, PolicyName: Schema.String, PolicyType: Schema.String}) {}
export class ListPoliciesRequest extends Schema.Class<ListPoliciesRequest>("ListPoliciesRequest")({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListPolicyVersionsRequest extends Schema.Class<ListPolicyVersionsRequest>("ListPolicyVersionsRequest")({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), PolicyArn: Schema.String}) {}
export class ListResourcePoliciesRequest extends Schema.Class<ListResourcePoliciesRequest>("ListResourcePoliciesRequest")({ResourceArn: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export class GetResourcePolicyResponse extends Schema.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({ResourceArn: Schema.String, PolicyType: Schema.String, PolicyVersionArn: Schema.optional(Schema.String), PolicyName: Schema.String, PolicyDocument: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(Tags)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: Tags}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.String}) {}
export class PolicyVersion extends Schema.Class<PolicyVersion>("PolicyVersion")({Arn: Schema.String, PolicyArn: Schema.String, VersionId: Schema.Number, PolicyType: Schema.String, IsDefault: Schema.Boolean, Name: Schema.String, Status: Schema.String, CreationTime: Schema.Date, LastUpdatedTime: Schema.Date, Document: Schema.String}) {}
export class Policy extends Schema.Class<Policy>("Policy")({Arn: Schema.String, DefaultVersion: Schema.Number, PolicyType: Schema.String, Name: Schema.String}) {}
export const Policies = Schema.Array(Policy);
export class PolicyVersionSummary extends Schema.Class<PolicyVersionSummary>("PolicyVersionSummary")({Arn: Schema.String, PolicyArn: Schema.String, VersionId: Schema.Number, PolicyType: Schema.String, IsDefault: Schema.Boolean, Name: Schema.String, Status: Schema.String, CreationTime: Schema.Date, LastUpdatedTime: Schema.Date}) {}
export const PolicyVersions = Schema.Array(PolicyVersionSummary);
export class ListResourcePoliciesResponseResourcePolicy extends Schema.Class<ListResourcePoliciesResponseResourcePolicy>("ListResourcePoliciesResponseResourcePolicy")({PolicyArn: Schema.optional(Schema.String), PolicyType: Schema.optional(Schema.String), PolicyName: Schema.optional(Schema.String)}) {}
export const ListResourcePoliciesResponseResourcePolicies = Schema.Array(ListResourcePoliciesResponseResourcePolicy);
export class GetPolicyVersionResponse extends Schema.Class<GetPolicyVersionResponse>("GetPolicyVersionResponse")({PolicyVersion: PolicyVersion}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({Message: Schema.String}) {}
export class ListPoliciesResponse extends Schema.Class<ListPoliciesResponse>("ListPoliciesResponse")({NextToken: Schema.optional(Schema.String), Policies: Schema.optional(Policies)}) {}
export class ListPolicyVersionsResponse extends Schema.Class<ListPolicyVersionsResponse>("ListPolicyVersionsResponse")({NextToken: Schema.optional(Schema.String), PolicyVersions: Schema.optional(PolicyVersions)}) {}
export class ListResourcePoliciesResponse extends Schema.Class<ListResourcePoliciesResponse>("ListResourcePoliciesResponse")({NextToken: Schema.optional(Schema.String), ResourcePolicies: Schema.optional(ListResourcePoliciesResponseResourcePolicies)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String}) {}
export class TooManyTagsException extends Schema.Class<TooManyTagsException>("TooManyTagsException")({Message: Schema.String, ResourceName: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/GetResourcePolicy", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicies = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policies/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicyVersions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policies/{PolicyArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicyVersions" }, ListPolicyVersionsRequest, ListPolicyVersionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResourcePolicies = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/resource-policies/{ResourceArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListResourcePolicies" }, ListResourcePoliciesRequest, ListResourcePoliciesResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPolicyVersion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policy-versions/{PolicyVersionArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetPolicyVersion" }, GetPolicyVersionRequest, GetPolicyVersionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
