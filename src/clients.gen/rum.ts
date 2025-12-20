import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
const AppMonitorDetails = Schema.Struct({name: Schema.optional(Schema.String), id: Schema.optional(Schema.String), version: Schema.optional(Schema.String)})
const UserDetails = Schema.Struct({userId: Schema.optional(Schema.String), sessionId: Schema.optional(Schema.String)})
const RumEvent = Schema.Struct({id: Schema.String, timestamp: Schema.Date, type: Schema.String, metadata: Schema.optional(Schema.String), details: Schema.String})
const RumEventList = Schema.Array(RumEvent)
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap})
const PutRumEventsRequest = Schema.Struct({Id: Schema.String, BatchId: Schema.String, AppMonitorDetails: AppMonitorDetails, UserDetails: UserDetails, RumEvents: RumEventList, Alias: Schema.optional(Schema.String)})
const PutRumEventsResponse = Schema.Struct({})
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap})
const TagResourceResponse = Schema.Struct({})
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "RUM", sigV4ServiceName: "rum", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceName: Schema.String, resourceType: Schema.optional(Schema.String)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "RUM", sigV4ServiceName: "rum", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const AccessDeniedException = Schema.Struct({message: Schema.String})
const ValidationException = Schema.Struct({message: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const PutRumEvents = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/appmonitors/{Id}/", method: "POST", sdkId: "RUM", sigV4ServiceName: "rum", name: "PutRumEvents" }, PutRumEventsRequest, PutRumEventsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
