import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GetPolicyVersionRequest extends S.Class<GetPolicyVersionRequest>("GetPolicyVersionRequest")({PolicyVersionArn: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String, PolicyName: S.String, PolicyType: S.String}) {}
export class ListPoliciesRequest extends S.Class<ListPoliciesRequest>("ListPoliciesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPolicyVersionsRequest extends S.Class<ListPolicyVersionsRequest>("ListPolicyVersionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), PolicyArn: S.String}) {}
export class ListResourcePoliciesRequest extends S.Class<ListResourcePoliciesRequest>("ListResourcePoliciesRequest")({ResourceArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({ResourceArn: S.String, PolicyType: S.String, PolicyVersionArn: S.optional(S.String), PolicyName: S.String, PolicyDocument: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class PolicyVersion extends S.Class<PolicyVersion>("PolicyVersion")({Arn: S.String, PolicyArn: S.String, VersionId: S.Number, PolicyType: S.String, IsDefault: S.Boolean, Name: S.String, Status: S.String, CreationTime: S.Date, LastUpdatedTime: S.Date, Document: S.String}) {}
export class Policy extends S.Class<Policy>("Policy")({Arn: S.String, DefaultVersion: S.Number, PolicyType: S.String, Name: S.String}) {}
export const Policies = S.Array(Policy);
export class PolicyVersionSummary extends S.Class<PolicyVersionSummary>("PolicyVersionSummary")({Arn: S.String, PolicyArn: S.String, VersionId: S.Number, PolicyType: S.String, IsDefault: S.Boolean, Name: S.String, Status: S.String, CreationTime: S.Date, LastUpdatedTime: S.Date}) {}
export const PolicyVersions = S.Array(PolicyVersionSummary);
export class ListResourcePoliciesResponseResourcePolicy extends S.Class<ListResourcePoliciesResponseResourcePolicy>("ListResourcePoliciesResponseResourcePolicy")({PolicyArn: S.optional(S.String), PolicyType: S.optional(S.String), PolicyName: S.optional(S.String)}) {}
export const ListResourcePoliciesResponseResourcePolicies = S.Array(ListResourcePoliciesResponseResourcePolicy);
export class GetPolicyVersionResponse extends S.Class<GetPolicyVersionResponse>("GetPolicyVersionResponse")({PolicyVersion: PolicyVersion}) {}
export class ListPoliciesResponse extends S.Class<ListPoliciesResponse>("ListPoliciesResponse")({NextToken: S.optional(S.String), Policies: S.optional(Policies)}) {}
export class ListPolicyVersionsResponse extends S.Class<ListPolicyVersionsResponse>("ListPolicyVersionsResponse")({NextToken: S.optional(S.String), PolicyVersions: S.optional(PolicyVersions)}) {}
export class ListResourcePoliciesResponse extends S.Class<ListResourcePoliciesResponse>("ListResourcePoliciesResponse")({NextToken: S.optional(S.String), ResourcePolicies: S.optional(ListResourcePoliciesResponseResourcePolicies)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {Message: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.String, ResourceName: S.optional(S.String)}) {};

//# Operations
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/GetResourcePolicy", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, InvalidParameterException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicies = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/policies/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicyVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/policies/{PolicyArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicyVersions" }, ListPolicyVersionsRequest, ListPolicyVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResourcePolicies = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/resource-policies/{ResourceArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListResourcePolicies" }, ListResourcePoliciesRequest, ListResourcePoliciesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPolicyVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/policy-versions/{PolicyVersionArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetPolicyVersion" }, GetPolicyVersionRequest, GetPolicyVersionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
