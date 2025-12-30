import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetCustomEndpointRequest extends S.Class<GetCustomEndpointRequest>("GetCustomEndpointRequest")({}) {}
export class RegisterCustomEndpointRequest extends S.Class<RegisterCustomEndpointRequest>("RegisterCustomEndpointRequest")({}) {}
export const TagKeyList = S.Array(S.String);
export class GetCustomEndpointResponse extends S.Class<GetCustomEndpointResponse>("GetCustomEndpointResponse")({EndpointAddress: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class RegisterCustomEndpointResponse extends S.Class<RegisterCustomEndpointResponse>("RegisterCustomEndpointResponse")({EndpointAddress: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({Message: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InvalidRequestException extends S.Class<InvalidRequestException>("InvalidRequestException")({Message: S.optional(S.String)}) {}
export class CapabilitySchemaItem extends S.Class<CapabilitySchemaItem>("CapabilitySchemaItem")({Format: S.String, CapabilityId: S.String, ExtrinsicId: S.String, ExtrinsicVersion: S.Number, Schema: S.Any}) {}
export const CapabilitySchemas = S.Array(CapabilitySchemaItem);
export const DeviceTypes = S.Array(S.String);
export const MatterCapabilityReportEndpointParts = S.Array(S.String);
export const MatterCapabilityReportEndpointSemanticTags = S.Array(S.String);
export const MatterCapabilityReportEndpointClientClusters = S.Array(S.String);
export const MatterCommands = S.Record({key: S.String, value: S.Any});
export const MatterEvents = S.Record({key: S.String, value: S.Any});
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String), ResourceId: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({Message: S.optional(S.String)}) {}
export const MatterCapabilityReportCommands = S.Array(S.String);
export const MatterCapabilityReportEvents = S.Array(S.String);
export const MatterCapabilityReportGeneratedCommands = S.Array(S.String);
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.optional(S.String)}) {}
export class UnauthorizedException extends S.Class<UnauthorizedException>("UnauthorizedException")({Message: S.optional(S.String)}) {}
export class MatterCluster extends S.Class<MatterCluster>("MatterCluster")({id: S.optional(S.String), attributes: S.optional(S.Any), commands: S.optional(MatterCommands), events: S.optional(MatterEvents)}) {}
export const MatterClusters = S.Array(MatterCluster);
export class MatterEndpoint extends S.Class<MatterEndpoint>("MatterEndpoint")({id: S.optional(S.String), clusters: S.optional(MatterClusters)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.optional(S.String)}) {}
export class MatterCapabilityReportAttribute extends S.Class<MatterCapabilityReportAttribute>("MatterCapabilityReportAttribute")({id: S.optional(S.String), name: S.optional(S.String), value: S.optional(S.Any)}) {}
export const MatterCapabilityReportAttributes = S.Array(MatterCapabilityReportAttribute);
export class MatterCapabilityReportCluster extends S.Class<MatterCapabilityReportCluster>("MatterCapabilityReportCluster")({id: S.String, revision: S.Number, publicId: S.optional(S.String), name: S.optional(S.String), specVersion: S.optional(S.String), attributes: S.optional(MatterCapabilityReportAttributes), commands: S.optional(MatterCapabilityReportCommands), events: S.optional(MatterCapabilityReportEvents), featureMap: S.optional(S.Number), generatedCommands: S.optional(MatterCapabilityReportGeneratedCommands), fabricIndex: S.optional(S.Number)}) {}
export const MatterCapabilityReportClusters = S.Array(MatterCapabilityReportCluster);
export class MatterCapabilityReportEndpoint extends S.Class<MatterCapabilityReportEndpoint>("MatterCapabilityReportEndpoint")({id: S.String, deviceTypes: DeviceTypes, clusters: MatterCapabilityReportClusters, parts: S.optional(MatterCapabilityReportEndpointParts), semanticTags: S.optional(MatterCapabilityReportEndpointSemanticTags), clientClusters: S.optional(MatterCapabilityReportEndpointClientClusters)}) {}
export const MatterCapabilityReportEndpoints = S.Array(MatterCapabilityReportEndpoint);
export class MatterCapabilityReport extends S.Class<MatterCapabilityReport>("MatterCapabilityReport")({version: S.String, nodeId: S.optional(S.String), endpoints: MatterCapabilityReportEndpoints}) {}
export class Device extends S.Class<Device>("Device")({ConnectorDeviceId: S.String, ConnectorDeviceName: S.optional(S.String), CapabilityReport: MatterCapabilityReport, CapabilitySchemas: S.optional(CapabilitySchemas), DeviceMetadata: S.optional(S.Any)}) {}
export const Devices = S.Array(Device);
export class SendConnectorEventRequest extends S.Class<SendConnectorEventRequest>("SendConnectorEventRequest")({ConnectorId: S.String, UserId: S.optional(S.String), Operation: S.String, OperationVersion: S.optional(S.String), StatusCode: S.optional(S.Number), Message: S.optional(S.String), DeviceDiscoveryId: S.optional(S.String), ConnectorDeviceId: S.optional(S.String), TraceId: S.optional(S.String), Devices: S.optional(Devices), MatterEndpoint: S.optional(MatterEndpoint)}) {}
export class SendConnectorEventResponse extends S.Class<SendConnectorEventResponse>("SendConnectorEventResponse")({ConnectorId: S.String}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InvalidRequestExceptionError extends S.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class UnauthorizedExceptionError extends S.TaggedError<UnauthorizedExceptionError>()("UnauthorizedException", UnauthorizedException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const registerCustomEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.RegisterCustomEndpoint" }, RegisterCustomEndpointRequest, RegisterCustomEndpointResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getCustomEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.GetCustomEndpoint" }, GetCustomEndpointRequest, GetCustomEndpointResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, UnauthorizedExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendConnectorEvent = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/connector-event/{ConnectorId}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.SendConnectorEvent" }, SendConnectorEventRequest, SendConnectorEventResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
