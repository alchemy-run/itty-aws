import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteDataLakeExceptionSubscriptionRequest = Schema.Struct({});
export const DeleteDataLakeExceptionSubscriptionResponse = Schema.Struct({});
export const DeregisterDataLakeDelegatedAdministratorRequest = Schema.Struct({});
export const DeregisterDataLakeDelegatedAdministratorResponse = Schema.Struct({});
export const GetDataLakeExceptionSubscriptionRequest = Schema.Struct({});
export const RegionList = Schema.Array(Schema.String);
export const TagKeyList = Schema.Array(Schema.String);
export const CreateDataLakeExceptionSubscriptionRequest = Schema.Struct({subscriptionProtocol: Schema.String, notificationEndpoint: Schema.String, exceptionTimeToLive: Schema.optional(Schema.Number)});
export const CreateDataLakeExceptionSubscriptionResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String)});
export const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetDataLakeExceptionSubscriptionResponse = Schema.Struct({subscriptionProtocol: Schema.optional(Schema.String), notificationEndpoint: Schema.optional(Schema.String), exceptionTimeToLive: Schema.optional(Schema.Number)});
export const ListDataLakeExceptionsRequest = Schema.Struct({regions: Schema.optional(RegionList), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const RegisterDataLakeDelegatedAdministratorRequest = Schema.Struct({accountId: Schema.String});
export const RegisterDataLakeDelegatedAdministratorResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const UpdateDataLakeExceptionSubscriptionRequest = Schema.Struct({subscriptionProtocol: Schema.String, notificationEndpoint: Schema.String, exceptionTimeToLive: Schema.optional(Schema.Number)});
export const UpdateDataLakeExceptionSubscriptionResponse = Schema.Struct({});
export const Tag = Schema.Struct({key: Schema.String, value: Schema.String});
export const TagList = Schema.Array(Tag);
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String), serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const DataLakeException = Schema.Struct({region: Schema.optional(Schema.String), exception: Schema.optional(Schema.String), remediation: Schema.optional(Schema.String), timestamp: Schema.optional(Schema.Date)});
export const DataLakeExceptionList = Schema.Array(DataLakeException);
export const ListDataLakeExceptionsResponse = Schema.Struct({exceptions: Schema.optional(DataLakeExceptionList), nextToken: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const registerDataLakeDelegatedAdministrator = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/delegate", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.RegisterDataLakeDelegatedAdministrator" }, RegisterDataLakeDelegatedAdministratorRequest, RegisterDataLakeDelegatedAdministratorResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "PUT", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.UpdateDataLakeExceptionSubscription" }, UpdateDataLakeExceptionSubscriptionRequest, UpdateDataLakeExceptionSubscriptionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.CreateDataLakeExceptionSubscription" }, CreateDataLakeExceptionSubscriptionRequest, CreateDataLakeExceptionSubscriptionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.DeleteDataLakeExceptionSubscription" }, DeleteDataLakeExceptionSubscriptionRequest, DeleteDataLakeExceptionSubscriptionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deregisterDataLakeDelegatedAdministrator = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/delegate", method: "DELETE", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.DeregisterDataLakeDelegatedAdministrator" }, DeregisterDataLakeDelegatedAdministratorRequest, DeregisterDataLakeDelegatedAdministratorResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDataLakeExceptionSubscription = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions/subscription", method: "GET", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.GetDataLakeExceptionSubscription" }, GetDataLakeExceptionSubscriptionRequest, GetDataLakeExceptionSubscriptionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/tags/{resourceArn}", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listDataLakeExceptions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/v1/datalake/exceptions", method: "POST", sdkId: "SecurityLake", sigV4ServiceName: "securitylake", name: "SecurityLake.ListDataLakeExceptions" }, ListDataLakeExceptionsRequest, ListDataLakeExceptionsResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
