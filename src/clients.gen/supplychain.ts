import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GetDataIntegrationEventRequest = Schema.Struct({instanceId: Schema.String, eventId: Schema.String});
export const GetDataIntegrationFlowExecutionRequest = Schema.Struct({instanceId: Schema.String, flowName: Schema.String, executionId: Schema.String});
export const ListDataIntegrationEventsRequest = Schema.Struct({instanceId: Schema.String, eventType: Schema.optional(Schema.String), nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const ListDataIntegrationFlowExecutionsRequest = Schema.Struct({instanceId: Schema.String, flowName: Schema.String, nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const DataIntegrationEventDatasetLoadExecutionDetails = Schema.Struct({status: Schema.String, message: Schema.optional(Schema.String)});
export const DataIntegrationEventDatasetTargetDetails = Schema.Struct({datasetIdentifier: Schema.String, operationType: Schema.String, datasetLoadExecution: DataIntegrationEventDatasetLoadExecutionDetails});
export const DataIntegrationEvent = Schema.Struct({instanceId: Schema.String, eventId: Schema.String, eventType: Schema.String, eventGroupId: Schema.String, eventTimestamp: Schema.Date, datasetTargetDetails: Schema.optional(DataIntegrationEventDatasetTargetDetails)});
export const DataIntegrationEventList = Schema.Array(DataIntegrationEvent);
export const DataIntegrationFlowS3Source = Schema.Struct({bucketName: Schema.String, key: Schema.String});
export const DataIntegrationFlowDatasetSource = Schema.Struct({datasetIdentifier: Schema.String});
export const DataIntegrationFlowExecutionSourceInfo = Schema.Struct({sourceType: Schema.String, s3Source: Schema.optional(DataIntegrationFlowS3Source), datasetSource: Schema.optional(DataIntegrationFlowDatasetSource)});
export const DataIntegrationFlowExecutionOutputMetadata = Schema.Struct({diagnosticReportsRootS3URI: Schema.optional(Schema.String)});
export const DataIntegrationFlowExecution = Schema.Struct({instanceId: Schema.String, flowName: Schema.String, executionId: Schema.String, status: Schema.optional(Schema.String), sourceInfo: Schema.optional(DataIntegrationFlowExecutionSourceInfo), message: Schema.optional(Schema.String), startTime: Schema.optional(Schema.Date), endTime: Schema.optional(Schema.Date), outputMetadata: Schema.optional(DataIntegrationFlowExecutionOutputMetadata)});
export const DataIntegrationFlowExecutionList = Schema.Array(DataIntegrationFlowExecution);
export const DataIntegrationEventDatasetTargetConfiguration = Schema.Struct({datasetIdentifier: Schema.String, operationType: Schema.String});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListDataIntegrationEventsResponse = Schema.Struct({events: DataIntegrationEventList, nextToken: Schema.optional(Schema.String)});
export const ListDataIntegrationFlowExecutionsResponse = Schema.Struct({flowExecutions: DataIntegrationFlowExecutionList, nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: TagMap});
export const SendDataIntegrationEventRequest = Schema.Struct({instanceId: Schema.String, eventType: Schema.String, data: Schema.String, eventGroupId: Schema.String, eventTimestamp: Schema.optional(Schema.Date), clientToken: Schema.optional(Schema.String), datasetTarget: Schema.optional(DataIntegrationEventDatasetTargetConfiguration)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const SendDataIntegrationEventResponse = Schema.Struct({eventId: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetDataIntegrationEventResponse = Schema.Struct({event: DataIntegrationEvent});
export const GetDataIntegrationFlowExecutionResponse = Schema.Struct({flowExecution: DataIntegrationFlowExecution});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api/tags/{resourceArn}", method: "DELETE", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listDataIntegrationEvents = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events", method: "GET", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.ListDataIntegrationEvents" }, ListDataIntegrationEventsRequest, ListDataIntegrationEventsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listDataIntegrationFlowExecutions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions", method: "GET", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.ListDataIntegrationFlowExecutions" }, ListDataIntegrationFlowExecutionsRequest, ListDataIntegrationFlowExecutionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api/tags/{resourceArn}", method: "GET", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api/tags/{resourceArn}", method: "POST", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDataIntegrationEvent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events/{eventId}", method: "GET", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.GetDataIntegrationEvent" }, GetDataIntegrationEventRequest, GetDataIntegrationEventResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDataIntegrationFlowExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions/{executionId}", method: "GET", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.GetDataIntegrationFlowExecution" }, GetDataIntegrationFlowExecutionRequest, GetDataIntegrationFlowExecutionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendDataIntegrationEvent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-01-01", uri: "/api-data/data-integration/instance/{instanceId}/data-integration-events", method: "POST", sdkId: "SupplyChain", sigV4ServiceName: "scn", name: "GalaxyPublicAPIGateway.SendDataIntegrationEvent" }, SendDataIntegrationEventRequest, SendDataIntegrationEventResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
