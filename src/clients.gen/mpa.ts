import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetPolicyVersionRequest = Schema.Struct({PolicyVersionArn: Schema.String});
export const GetResourcePolicyRequest = Schema.Struct({ResourceArn: Schema.String, PolicyName: Schema.String, PolicyType: Schema.String});
export const ListPoliciesRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListPolicyVersionsRequest = Schema.Struct({MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), PolicyArn: Schema.String});
export const ListResourcePoliciesRequest = Schema.Struct({ResourceArn: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const GetResourcePolicyResponse = Schema.Struct({ResourceArn: Schema.String, PolicyType: Schema.String, PolicyVersionArn: Schema.optional(Schema.String), PolicyName: Schema.String, PolicyDocument: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(Tags)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: Tags});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const PolicyVersion = Schema.Struct({Arn: Schema.String, PolicyArn: Schema.String, VersionId: Schema.Number, PolicyType: Schema.String, IsDefault: Schema.Boolean, Name: Schema.String, Status: Schema.String, CreationTime: Schema.Date, LastUpdatedTime: Schema.Date, Document: Schema.String});
export const Policy = Schema.Struct({Arn: Schema.String, DefaultVersion: Schema.Number, PolicyType: Schema.String, Name: Schema.String});
export const Policies = Schema.Array(Policy);
export const PolicyVersionSummary = Schema.Struct({Arn: Schema.String, PolicyArn: Schema.String, VersionId: Schema.Number, PolicyType: Schema.String, IsDefault: Schema.Boolean, Name: Schema.String, Status: Schema.String, CreationTime: Schema.Date, LastUpdatedTime: Schema.Date});
export const PolicyVersions = Schema.Array(PolicyVersionSummary);
export const ListResourcePoliciesResponseResourcePolicy = Schema.Struct({PolicyArn: Schema.optional(Schema.String), PolicyType: Schema.optional(Schema.String), PolicyName: Schema.optional(Schema.String)});
export const ListResourcePoliciesResponseResourcePolicies = Schema.Array(ListResourcePoliciesResponseResourcePolicy);
export const GetPolicyVersionResponse = Schema.Struct({PolicyVersion: PolicyVersion});
export const InvalidParameterException = Schema.Struct({Message: Schema.String});
export const ListPoliciesResponse = Schema.Struct({NextToken: Schema.optional(Schema.String), Policies: Schema.optional(Policies)});
export const ListPolicyVersionsResponse = Schema.Struct({NextToken: Schema.optional(Schema.String), PolicyVersions: Schema.optional(PolicyVersions)});
export const ListResourcePoliciesResponse = Schema.Struct({NextToken: Schema.optional(Schema.String), ResourcePolicies: Schema.optional(ListResourcePoliciesResponseResourcePolicies)});
export const InternalServerException = Schema.Struct({Message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.String});
export const ThrottlingException = Schema.Struct({Message: Schema.String});
export const ValidationException = Schema.Struct({Message: Schema.String});
export const TooManyTagsException = Schema.Struct({Message: Schema.String, ResourceName: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class TooManyTagsExceptionError extends Schema.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException) {};

//# Operations
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/GetResourcePolicy", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicies = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policies/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicyVersions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policies/{PolicyArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListPolicyVersions" }, ListPolicyVersionsRequest, ListPolicyVersionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listResourcePolicies = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/resource-policies/{ResourceArn}/?List", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListResourcePolicies" }, ListResourcePoliciesRequest, ListResourcePoliciesResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPolicyVersion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/policy-versions/{PolicyVersionArn}", method: "GET", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.GetPolicyVersion" }, GetPolicyVersionRequest, GetPolicyVersionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "MPA", sigV4ServiceName: "mpa", name: "AWSFluffyCoreService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
