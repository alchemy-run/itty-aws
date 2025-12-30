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
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class CapabilitySchemaItem extends S.Class<CapabilitySchemaItem>("CapabilitySchemaItem")({Format: S.String, CapabilityId: S.String, ExtrinsicId: S.String, ExtrinsicVersion: S.Number, Schema: S.Any}) {}
export const CapabilitySchemas = S.Array(CapabilitySchemaItem);
export const DeviceTypes = S.Array(S.String);
export const MatterCapabilityReportEndpointParts = S.Array(S.String);
export const MatterCapabilityReportEndpointSemanticTags = S.Array(S.String);
export const MatterCapabilityReportEndpointClientClusters = S.Array(S.String);
export const MatterCommands = S.Record({key: S.String, value: S.Any});
export const MatterEvents = S.Record({key: S.String, value: S.Any});
export const MatterCapabilityReportCommands = S.Array(S.String);
export const MatterCapabilityReportEvents = S.Array(S.String);
export const MatterCapabilityReportGeneratedCommands = S.Array(S.String);
export class MatterCluster extends S.Class<MatterCluster>("MatterCluster")({id: S.optional(S.String), attributes: S.optional(S.Any), commands: S.optional(MatterCommands), events: S.optional(MatterEvents)}) {}
export const MatterClusters = S.Array(MatterCluster);
export class MatterEndpoint extends S.Class<MatterEndpoint>("MatterEndpoint")({id: S.optional(S.String), clusters: S.optional(MatterClusters)}) {}
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
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * List tags for the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Customers can request IoT managed integrations to manage the server trust for them or bring their own external server trusts for the custom domain. Returns an IoT managed integrations endpoint.
 */export const registerCustomEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.RegisterCustomEndpoint" }, RegisterCustomEndpointRequest, RegisterCustomEndpointResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add tags for the specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove tags for the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the IoT managed integrations custom endpoint.
 */export const getCustomEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/custom-endpoint", method: "GET", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.GetCustomEndpoint" }, GetCustomEndpointRequest, GetCustomEndpointResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Relays third-party device events for a connector such as a new device or a device state change event.
 */export const sendConnectorEvent = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-03-03", uri: "/connector-event/{ConnectorId}", method: "POST", sdkId: "IoT Managed Integrations", sigV4ServiceName: "iotmanagedintegrations", name: "IotManagedIntegrations.SendConnectorEvent" }, SendConnectorEventRequest, SendConnectorEventResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
