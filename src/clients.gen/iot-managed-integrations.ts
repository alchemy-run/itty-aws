import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetCustomEndpointRequest = Schema.Struct({});
export const RegisterCustomEndpointRequest = Schema.Struct({});
export const TagKeyList = Schema.Array(Schema.String);
export const GetCustomEndpointResponse = Schema.Struct({EndpointAddress: Schema.String});
export const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String});
export const RegisterCustomEndpointResponse = Schema.Struct({EndpointAddress: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const InvalidRequestException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const CapabilitySchemaItem = Schema.Struct({Format: Schema.String, CapabilityId: Schema.String, ExtrinsicId: Schema.String, ExtrinsicVersion: Schema.Number, Schema: Schema.JsonValue});
export const CapabilitySchemas = Schema.Array(CapabilitySchemaItem);
export const DeviceTypes = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointParts = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointSemanticTags = Schema.Array(Schema.String);
export const MatterCapabilityReportEndpointClientClusters = Schema.Array(Schema.String);
export const MatterCommands = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export const MatterEvents = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), ResourceId: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const MatterCapabilityReportCommands = Schema.Array(Schema.String);
export const MatterCapabilityReportEvents = Schema.Array(Schema.String);
export const MatterCapabilityReportGeneratedCommands = Schema.Array(Schema.String);
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const UnauthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const MatterCluster = Schema.Struct({id: Schema.optional(Schema.String), attributes: Schema.optional(Schema.JsonValue), commands: Schema.optional(MatterCommands), events: Schema.optional(MatterEvents)});
export const MatterClusters = Schema.Array(MatterCluster);
export const MatterEndpoint = Schema.Struct({id: Schema.optional(Schema.String), clusters: Schema.optional(MatterClusters)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const MatterCapabilityReportAttribute = Schema.Struct({id: Schema.optional(Schema.String), name: Schema.optional(Schema.String), value: Schema.optional(Schema.JsonValue)});
export const MatterCapabilityReportAttributes = Schema.Array(MatterCapabilityReportAttribute);
export const MatterCapabilityReportCluster = Schema.Struct({id: Schema.String, revision: Schema.Number, publicId: Schema.optional(Schema.String), name: Schema.optional(Schema.String), specVersion: Schema.optional(Schema.String), attributes: Schema.optional(MatterCapabilityReportAttributes), commands: Schema.optional(MatterCapabilityReportCommands), events: Schema.optional(MatterCapabilityReportEvents), featureMap: Schema.optional(Schema.Number), generatedCommands: Schema.optional(MatterCapabilityReportGeneratedCommands), fabricIndex: Schema.optional(Schema.Number)});
export const MatterCapabilityReportClusters = Schema.Array(MatterCapabilityReportCluster);
export const MatterCapabilityReportEndpoint = Schema.Struct({id: Schema.String, deviceTypes: DeviceTypes, clusters: MatterCapabilityReportClusters, parts: Schema.optional(MatterCapabilityReportEndpointParts), semanticTags: Schema.optional(MatterCapabilityReportEndpointSemanticTags), clientClusters: Schema.optional(MatterCapabilityReportEndpointClientClusters)});
export const MatterCapabilityReportEndpoints = Schema.Array(MatterCapabilityReportEndpoint);
export const MatterCapabilityReport = Schema.Struct({version: Schema.String, nodeId: Schema.optional(Schema.String), endpoints: MatterCapabilityReportEndpoints});
export const Device = Schema.Struct({ConnectorDeviceId: Schema.String, ConnectorDeviceName: Schema.optional(Schema.String), CapabilityReport: MatterCapabilityReport, CapabilitySchemas: Schema.optional(CapabilitySchemas), DeviceMetadata: Schema.optional(Schema.JsonValue)});
export const Devices = Schema.Array(Device);
export const SendConnectorEventRequest = Schema.Struct({ConnectorId: Schema.String, UserId: Schema.optional(Schema.String), Operation: Schema.String, OperationVersion: Schema.optional(Schema.String), StatusCode: Schema.optional(Schema.Number), Message: Schema.optional(Schema.String), DeviceDiscoveryId: Schema.optional(Schema.String), ConnectorDeviceId: Schema.optional(Schema.String), TraceId: Schema.optional(Schema.String), Devices: Schema.optional(Devices), MatterEndpoint: Schema.optional(MatterEndpoint)});
export const SendConnectorEventResponse = Schema.Struct({ConnectorId: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class UnauthorizedExceptionError extends Schema.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerCustomEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.RegisterCustomEndpoint" }, RegisterCustomEndpointRequest, RegisterCustomEndpointResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getCustomEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.GetCustomEndpoint" }, GetCustomEndpointRequest, GetCustomEndpointResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendConnectorEvent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-03-03", uri: "/connector-event/{ConnectorId}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.SendConnectorEvent" }, SendConnectorEventRequest, SendConnectorEventResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
