import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetAccountSettingsRequest = Schema.Struct({})
const TagKeyList = Schema.Array(Schema.String)
const ListTagsRequest = Schema.Struct({Resource: Schema.String})
const UntagResourceRequest = Schema.Struct({Resource: Schema.String, TagKeys: TagKeyList})
const AccountLimit = Schema.Struct({TotalCodeSize: Schema.optional(Schema.Number), CodeSizeUnzipped: Schema.optional(Schema.Number), CodeSizeZipped: Schema.optional(Schema.Number), ConcurrentExecutions: Schema.optional(Schema.Number), UnreservedConcurrentExecutions: Schema.optional(Schema.Number)})
const AccountUsage = Schema.Struct({TotalCodeSize: Schema.optional(Schema.Number), FunctionCount: Schema.optional(Schema.Number)})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const GetAccountSettingsResponse = Schema.Struct({AccountLimit: Schema.optional(AccountLimit), AccountUsage: Schema.optional(AccountUsage)})
const ListTagsResponse = Schema.Struct({Tags: Schema.optional(Tags)})
const TagResourceRequest = Schema.Struct({Resource: Schema.String, Tags: Tags})
const InvalidParameterValueException = Schema.Struct({Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String)})
const ServiceException = Schema.Struct({Type: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)})
export const GetAccountSettings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2016-08-19/account-settings", method: "GET", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "GetAccountSettings" }, GetAccountSettingsRequest, GetAccountSettingsResponse, Schema.Union(ErrorAnnotation("ServiceException", ServiceException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({Type: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)})
export const ListTags = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2017-03-31/tags/{Resource}", method: "GET", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "ListTags" }, ListTagsRequest, ListTagsResponse, Schema.Union(ErrorAnnotation("InvalidParameterValueException", InvalidParameterValueException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceException", ServiceException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceConflictException = Schema.Struct({Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2017-03-31/tags/{Resource}", method: "POST", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidParameterValueException", InvalidParameterValueException), ErrorAnnotation("ResourceConflictException", ResourceConflictException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceException", ServiceException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TooManyRequestsException = Schema.Struct({retryAfterSeconds: Schema.optional(Header("Retry-After")), Type: Schema.optional(Schema.String), message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2017-03-31/tags/{Resource}", method: "DELETE", sdkId: "Lambda", sigV4ServiceName: "lambda", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InvalidParameterValueException", InvalidParameterValueException), ErrorAnnotation("ResourceConflictException", ResourceConflictException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceException", ServiceException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
