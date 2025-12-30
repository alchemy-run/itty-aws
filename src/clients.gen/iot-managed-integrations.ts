import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetCustomEndpointRequest extends Schema.Class<GetCustomEndpointRequest>("GetCustomEndpointRequest")({}) {}
export class RegisterCustomEndpointRequest extends Schema.Class<RegisterCustomEndpointRequest>("RegisterCustomEndpointRequest")({}) {}
export const TagKeyList = Schema.Array(Schema.String);
export class GetCustomEndpointResponse extends Schema.Class<GetCustomEndpointResponse>("GetCustomEndpointResponse")({EndpointAddress: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: Schema.String}) {}
export class RegisterCustomEndpointResponse extends Schema.Class<RegisterCustomEndpointResponse>("RegisterCustomEndpointResponse")({EndpointAddress: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.optional(Schema.String)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: Schema.String, Tags: TagsMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({Message: Schema.optional(Schema.String)}) {}
export class CapabilitySchemaItem extends Schema.Class<CapabilitySchemaItem>("CapabilitySchemaItem")({Format: Schema.String, CapabilityId: Schema.String, ExtrinsicId: Schema.String, ExtrinsicVersion: Schema.Number, Schema: Schema.JsonValue}) {}
export const CapabilitySchemas = Schema.Array(CapabilitySchemaItem);
export const DeviceTypes = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointParts = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointSemanticTags = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointClientClusters = Schema.Array(Schema.String);
export const MatterCommands = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export const MatterEvents = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String), ResourceId: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({Message: Schema.optional(Schema.String)}) {}
export const MatterCapabilityReportCommands = Schema.Array(Schema.String);
export const MatterCapabilityReportEvents = Schema.Array(Schema.String);
export const MatterCapabilityReportGeneratedCommands = Schema.Array(Schema.String);
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class UnauthorizedException extends Schema.Class<UnauthorizedException>("UnauthorizedException")({Message: Schema.optional(Schema.String)}) {}
export class MatterCluster extends Schema.Class<MatterCluster>("MatterCluster")({id: Schema.optional(Schema.String), attributes: Schema.optional(Schema.JsonValue), commands: Schema.optional(MatterCommands), events: Schema.optional(MatterEvents)}) {}
export const MatterClusters = Schema.Array(MatterCluster);
export class MatterEndpoint extends Schema.Class<MatterEndpoint>("MatterEndpoint")({id: Schema.optional(Schema.String), clusters: Schema.optional(MatterClusters)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}
export class MatterCapabilityReportAttribute extends Schema.Class<MatterCapabilityReportAttribute>("MatterCapabilityReportAttribute")({id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), value: Schema.optional(Schema.JsonValue)}) {}
export const MatterCapabilityReportAttributes = Schema.Array(MatterCapabilityReportAttribute);
export class MatterCapabilityReportCluster extends Schema.Class<MatterCapabilityReportCluster>("MatterCapabilityReportCluster")({id: Schema.String, revision: Schema.Number, publicId: Schema.optional(Schema.String), name: Schema.optional(Schema.String), specVersion: Schema.optional(Schema.String), attributes: Schema.optional(MatterCapabilityReportAttributes), commands: Schema.optional(MatterCapabilityReportCommands), events: Schema.optional(MatterCapabilityReportEvents), featureMap: Schema.optional(Schema.Number), generatedCommands: Schema.optional(MatterCapabilityReportGeneratedCommands), fabricIndex: Schema.optional(Schema.Number)}) {}
export const MatterCapabilityReportClusters = Schema.Array(MatterCapabilityReportCluster);
export class MatterCapabilityReportEndpoint extends Schema.Class<MatterCapabilityReportEndpoint>("MatterCapabilityReportEndpoint")({id: Schema.String, deviceTypes: DeviceTypes, clusters: MatterCapabilityReportClusters, parts: Schema.optional(MatterCapabilityReportEndpointParts), semanticTags: Schema.optional(MatterCapabilityReportEndpointSemanticTags), clientClusters: Schema.optional(MatterCapabilityReportEndpointClientClusters)}) {}
export const MatterCapabilityReportEndpoints = Schema.Array(MatterCapabilityReportEndpoint);
export class MatterCapabilityReport extends Schema.Class<MatterCapabilityReport>("MatterCapabilityReport")({version: Schema.String, nodeId: Schema.optional(Schema.String), endpoints: MatterCapabilityReportEndpoints}) {}
export class Device extends Schema.Class<Device>("Device")({ConnectorDeviceId: Schema.String, ConnectorDeviceName: Schema.optional(Schema.String), CapabilityReport: MatterCapabilityReport, CapabilitySchemas: Schema.optional(CapabilitySchemas), DeviceMetadata: Schema.optional(Schema.JsonValue)}) {}
export const Devices = Schema.Array(Device);
export class SendConnectorEventRequest extends Schema.Class<SendConnectorEventRequest>("SendConnectorEventRequest")({ConnectorId: Schema.String, UserId: Schema.optional(Schema.String), Operation: Schema.String, OperationVersion: Schema.optional(Schema.String), StatusCode: Schema.optional(Schema.Number), Message: Schema.optional(Schema.String), DeviceDiscoveryId: Schema.optional(Schema.String), ConnectorDeviceId: Schema.optional(Schema.String), TraceId: Schema.optional(Schema.String), Devices: Schema.optional(Devices), MatterEndpoint: Schema.optional(MatterEndpoint)}) {}
export class SendConnectorEventResponse extends Schema.Class<SendConnectorEventResponse>("SendConnectorEventResponse")({ConnectorId: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerCustomEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.RegisterCustomEndpoint" }, RegisterCustomEndpointRequest, RegisterCustomEndpointResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getCustomEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.GetCustomEndpoint" }, GetCustomEndpointRequest, GetCustomEndpointResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendConnectorEvent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/connector-event/{ConnectorId}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.SendConnectorEvent" }, SendConnectorEventRequest, SendConnectorEventResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
