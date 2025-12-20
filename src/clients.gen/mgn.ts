import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const InitializeServiceRequest = Schema.Struct({})
const InitializeServiceResponse = Schema.Struct({})
const TagKeys = Schema.Array(Schema.String)
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)})
const ListManagedAccountsRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "mgn", sigV4ServiceName: "mgn", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({name: Schema.optional(Schema.String), message: Schema.optional(Schema.String)})
const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField)
const ManagedAccount = Schema.Struct({accountId: Schema.optional(Schema.String)})
const ManagedAccounts = Schema.Array(ManagedAccount)
const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)})
export const InitializeService = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/InitializeService", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "InitializeService" }, InitializeServiceRequest, InitializeServiceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListManagedAccountsResponse = Schema.Struct({items: ManagedAccounts, nextToken: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After"))})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UninitializedAccountException = Schema.Struct({message: Schema.optional(Schema.String), code: Schema.optional(Schema.String)})
export const ListManagedAccounts = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/ListManagedAccounts", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ListManagedAccounts" }, ListManagedAccountsRequest, ListManagedAccountsResponse, Schema.Union(ErrorAnnotation("UninitializedAccountException", UninitializedAccountException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
