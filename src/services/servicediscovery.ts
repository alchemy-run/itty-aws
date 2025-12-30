import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ServiceAttributeKeyList = S.Array(S.String);
export const InstanceIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteNamespaceRequest extends S.Class<DeleteNamespaceRequest>("DeleteNamespaceRequest")({Id: S.String}) {}
export class DeleteServiceRequest extends S.Class<DeleteServiceRequest>("DeleteServiceRequest")({Id: S.String}) {}
export class DeleteServiceResponse extends S.Class<DeleteServiceResponse>("DeleteServiceResponse")({}) {}
export class DeleteServiceAttributesRequest extends S.Class<DeleteServiceAttributesRequest>("DeleteServiceAttributesRequest")({ServiceId: S.String, Attributes: ServiceAttributeKeyList}) {}
export class DeleteServiceAttributesResponse extends S.Class<DeleteServiceAttributesResponse>("DeleteServiceAttributesResponse")({}) {}
export class DeregisterInstanceRequest extends S.Class<DeregisterInstanceRequest>("DeregisterInstanceRequest")({ServiceId: S.String, InstanceId: S.String}) {}
export class DiscoverInstancesRevisionRequest extends S.Class<DiscoverInstancesRevisionRequest>("DiscoverInstancesRevisionRequest")({NamespaceName: S.String, ServiceName: S.String, OwnerAccount: S.optional(S.String)}) {}
export class GetInstanceRequest extends S.Class<GetInstanceRequest>("GetInstanceRequest")({ServiceId: S.String, InstanceId: S.String}) {}
export class GetInstancesHealthStatusRequest extends S.Class<GetInstancesHealthStatusRequest>("GetInstancesHealthStatusRequest")({ServiceId: S.String, Instances: S.optional(InstanceIdList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetNamespaceRequest extends S.Class<GetNamespaceRequest>("GetNamespaceRequest")({Id: S.String}) {}
export class GetOperationRequest extends S.Class<GetOperationRequest>("GetOperationRequest")({OperationId: S.String, OwnerAccount: S.optional(S.String)}) {}
export class GetServiceRequest extends S.Class<GetServiceRequest>("GetServiceRequest")({Id: S.String}) {}
export class GetServiceAttributesRequest extends S.Class<GetServiceAttributesRequest>("GetServiceAttributesRequest")({ServiceId: S.String}) {}
export class ListInstancesRequest extends S.Class<ListInstancesRequest>("ListInstancesRequest")({ServiceId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export const Attributes = S.Record({key: S.String, value: S.String});
export class RegisterInstanceRequest extends S.Class<RegisterInstanceRequest>("RegisterInstanceRequest")({ServiceId: S.String, InstanceId: S.String, CreatorRequestId: S.optional(S.String), Attributes: Attributes}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateInstanceCustomHealthStatusRequest extends S.Class<UpdateInstanceCustomHealthStatusRequest>("UpdateInstanceCustomHealthStatusRequest")({ServiceId: S.String, InstanceId: S.String, Status: S.String}) {}
export const FilterValues = S.Array(S.String);
export class HealthCheckConfig extends S.Class<HealthCheckConfig>("HealthCheckConfig")({Type: S.String, ResourcePath: S.optional(S.String), FailureThreshold: S.optional(S.Number)}) {}
export class HealthCheckCustomConfig extends S.Class<HealthCheckCustomConfig>("HealthCheckCustomConfig")({FailureThreshold: S.optional(S.Number)}) {}
export class NamespaceFilter extends S.Class<NamespaceFilter>("NamespaceFilter")({Name: S.String, Values: FilterValues, Condition: S.optional(S.String)}) {}
export const NamespaceFilters = S.Array(NamespaceFilter);
export class OperationFilter extends S.Class<OperationFilter>("OperationFilter")({Name: S.String, Values: FilterValues, Condition: S.optional(S.String)}) {}
export const OperationFilters = S.Array(OperationFilter);
export class ServiceFilter extends S.Class<ServiceFilter>("ServiceFilter")({Name: S.String, Values: FilterValues, Condition: S.optional(S.String)}) {}
export const ServiceFilters = S.Array(ServiceFilter);
export class HttpNamespaceChange extends S.Class<HttpNamespaceChange>("HttpNamespaceChange")({Description: S.String}) {}
export const ServiceAttributesMap = S.Record({key: S.String, value: S.String});
export class CreateHttpNamespaceRequest extends S.Class<CreateHttpNamespaceRequest>("CreateHttpNamespaceRequest")({Name: S.String, CreatorRequestId: S.optional(S.String), Description: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DeleteNamespaceResponse extends S.Class<DeleteNamespaceResponse>("DeleteNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class DeregisterInstanceResponse extends S.Class<DeregisterInstanceResponse>("DeregisterInstanceResponse")({OperationId: S.optional(S.String)}) {}
export class DiscoverInstancesRequest extends S.Class<DiscoverInstancesRequest>("DiscoverInstancesRequest")({NamespaceName: S.String, ServiceName: S.String, MaxResults: S.optional(S.Number), QueryParameters: S.optional(Attributes), OptionalParameters: S.optional(Attributes), HealthStatus: S.optional(S.String), OwnerAccount: S.optional(S.String)}) {}
export class DiscoverInstancesRevisionResponse extends S.Class<DiscoverInstancesRevisionResponse>("DiscoverInstancesRevisionResponse")({InstancesRevision: S.optional(S.Number)}) {}
export class ListNamespacesRequest extends S.Class<ListNamespacesRequest>("ListNamespacesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(NamespaceFilters)}) {}
export class ListOperationsRequest extends S.Class<ListOperationsRequest>("ListOperationsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(OperationFilters)}) {}
export class ListServicesRequest extends S.Class<ListServicesRequest>("ListServicesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filters: S.optional(ServiceFilters)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class RegisterInstanceResponse extends S.Class<RegisterInstanceResponse>("RegisterInstanceResponse")({OperationId: S.optional(S.String)}) {}
export class UpdateHttpNamespaceRequest extends S.Class<UpdateHttpNamespaceRequest>("UpdateHttpNamespaceRequest")({Id: S.String, UpdaterRequestId: S.optional(S.String), Namespace: HttpNamespaceChange}) {}
export class UpdateServiceAttributesRequest extends S.Class<UpdateServiceAttributesRequest>("UpdateServiceAttributesRequest")({ServiceId: S.String, Attributes: ServiceAttributesMap}) {}
export class UpdateServiceAttributesResponse extends S.Class<UpdateServiceAttributesResponse>("UpdateServiceAttributesResponse")({}) {}
export class SOA extends S.Class<SOA>("SOA")({TTL: S.Number}) {}
export class PublicDnsPropertiesMutable extends S.Class<PublicDnsPropertiesMutable>("PublicDnsPropertiesMutable")({SOA: SOA}) {}
export class DnsRecord extends S.Class<DnsRecord>("DnsRecord")({Type: S.String, TTL: S.Number}) {}
export const DnsRecordList = S.Array(DnsRecord);
export class DnsConfigChange extends S.Class<DnsConfigChange>("DnsConfigChange")({DnsRecords: DnsRecordList}) {}
export class PublicDnsNamespaceProperties extends S.Class<PublicDnsNamespaceProperties>("PublicDnsNamespaceProperties")({DnsProperties: PublicDnsPropertiesMutable}) {}
export class DnsConfig extends S.Class<DnsConfig>("DnsConfig")({NamespaceId: S.optional(S.String), RoutingPolicy: S.optional(S.String), DnsRecords: DnsRecordList}) {}
export class Instance extends S.Class<Instance>("Instance")({Id: S.String, CreatorRequestId: S.optional(S.String), Attributes: S.optional(Attributes), CreatedByAccount: S.optional(S.String)}) {}
export const InstanceHealthStatusMap = S.Record({key: S.String, value: S.String});
export class Service extends S.Class<Service>("Service")({Id: S.optional(S.String), Arn: S.optional(S.String), ResourceOwner: S.optional(S.String), Name: S.optional(S.String), NamespaceId: S.optional(S.String), Description: S.optional(S.String), InstanceCount: S.optional(S.Number), DnsConfig: S.optional(DnsConfig), Type: S.optional(S.String), HealthCheckConfig: S.optional(HealthCheckConfig), HealthCheckCustomConfig: S.optional(HealthCheckCustomConfig), CreateDate: S.optional(S.Date), CreatorRequestId: S.optional(S.String), CreatedByAccount: S.optional(S.String)}) {}
export class ServiceAttributes extends S.Class<ServiceAttributes>("ServiceAttributes")({ServiceArn: S.optional(S.String), ResourceOwner: S.optional(S.String), Attributes: S.optional(ServiceAttributesMap)}) {}
export class InstanceSummary extends S.Class<InstanceSummary>("InstanceSummary")({Id: S.optional(S.String), Attributes: S.optional(Attributes), CreatedByAccount: S.optional(S.String)}) {}
export const InstanceSummaryList = S.Array(InstanceSummary);
export class ServiceChange extends S.Class<ServiceChange>("ServiceChange")({Description: S.optional(S.String), DnsConfig: S.optional(DnsConfigChange), HealthCheckConfig: S.optional(HealthCheckConfig)}) {}
export class SOAChange extends S.Class<SOAChange>("SOAChange")({TTL: S.Number}) {}
export class PublicDnsPropertiesMutableChange extends S.Class<PublicDnsPropertiesMutableChange>("PublicDnsPropertiesMutableChange")({SOA: SOAChange}) {}
export class CreateHttpNamespaceResponse extends S.Class<CreateHttpNamespaceResponse>("CreateHttpNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class CreatePublicDnsNamespaceRequest extends S.Class<CreatePublicDnsNamespaceRequest>("CreatePublicDnsNamespaceRequest")({Name: S.String, CreatorRequestId: S.optional(S.String), Description: S.optional(S.String), Tags: S.optional(TagList), Properties: S.optional(PublicDnsNamespaceProperties)}) {}
export class CreateServiceRequest extends S.Class<CreateServiceRequest>("CreateServiceRequest")({Name: S.String, NamespaceId: S.optional(S.String), CreatorRequestId: S.optional(S.String), Description: S.optional(S.String), DnsConfig: S.optional(DnsConfig), HealthCheckConfig: S.optional(HealthCheckConfig), HealthCheckCustomConfig: S.optional(HealthCheckCustomConfig), Tags: S.optional(TagList), Type: S.optional(S.String)}) {}
export class GetInstanceResponse extends S.Class<GetInstanceResponse>("GetInstanceResponse")({ResourceOwner: S.optional(S.String), Instance: S.optional(Instance)}) {}
export class GetInstancesHealthStatusResponse extends S.Class<GetInstancesHealthStatusResponse>("GetInstancesHealthStatusResponse")({Status: S.optional(InstanceHealthStatusMap), NextToken: S.optional(S.String)}) {}
export class GetServiceResponse extends S.Class<GetServiceResponse>("GetServiceResponse")({Service: S.optional(Service)}) {}
export class GetServiceAttributesResponse extends S.Class<GetServiceAttributesResponse>("GetServiceAttributesResponse")({ServiceAttributes: S.optional(ServiceAttributes)}) {}
export class ListInstancesResponse extends S.Class<ListInstancesResponse>("ListInstancesResponse")({ResourceOwner: S.optional(S.String), Instances: S.optional(InstanceSummaryList), NextToken: S.optional(S.String)}) {}
export class UpdateHttpNamespaceResponse extends S.Class<UpdateHttpNamespaceResponse>("UpdateHttpNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class UpdateServiceRequest extends S.Class<UpdateServiceRequest>("UpdateServiceRequest")({Id: S.String, Service: ServiceChange}) {}
export class PrivateDnsPropertiesMutable extends S.Class<PrivateDnsPropertiesMutable>("PrivateDnsPropertiesMutable")({SOA: SOA}) {}
export const OperationTargetsMap = S.Record({key: S.String, value: S.String});
export class PublicDnsNamespacePropertiesChange extends S.Class<PublicDnsNamespacePropertiesChange>("PublicDnsNamespacePropertiesChange")({DnsProperties: PublicDnsPropertiesMutableChange}) {}
export class PrivateDnsNamespaceProperties extends S.Class<PrivateDnsNamespaceProperties>("PrivateDnsNamespaceProperties")({DnsProperties: PrivateDnsPropertiesMutable}) {}
export class HttpInstanceSummary extends S.Class<HttpInstanceSummary>("HttpInstanceSummary")({InstanceId: S.optional(S.String), NamespaceName: S.optional(S.String), ServiceName: S.optional(S.String), HealthStatus: S.optional(S.String), Attributes: S.optional(Attributes)}) {}
export const HttpInstanceSummaryList = S.Array(HttpInstanceSummary);
export class Operation extends S.Class<Operation>("Operation")({Id: S.optional(S.String), OwnerAccount: S.optional(S.String), Type: S.optional(S.String), Status: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorCode: S.optional(S.String), CreateDate: S.optional(S.Date), UpdateDate: S.optional(S.Date), Targets: S.optional(OperationTargetsMap)}) {}
export class DnsProperties extends S.Class<DnsProperties>("DnsProperties")({HostedZoneId: S.optional(S.String), SOA: S.optional(SOA)}) {}
export class HttpProperties extends S.Class<HttpProperties>("HttpProperties")({HttpName: S.optional(S.String)}) {}
export class NamespaceProperties extends S.Class<NamespaceProperties>("NamespaceProperties")({DnsProperties: S.optional(DnsProperties), HttpProperties: S.optional(HttpProperties)}) {}
export class NamespaceSummary extends S.Class<NamespaceSummary>("NamespaceSummary")({Id: S.optional(S.String), Arn: S.optional(S.String), ResourceOwner: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), ServiceCount: S.optional(S.Number), Properties: S.optional(NamespaceProperties), CreateDate: S.optional(S.Date)}) {}
export const NamespaceSummariesList = S.Array(NamespaceSummary);
export class OperationSummary extends S.Class<OperationSummary>("OperationSummary")({Id: S.optional(S.String), Status: S.optional(S.String)}) {}
export const OperationSummaryList = S.Array(OperationSummary);
export class ServiceSummary extends S.Class<ServiceSummary>("ServiceSummary")({Id: S.optional(S.String), Arn: S.optional(S.String), ResourceOwner: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), InstanceCount: S.optional(S.Number), DnsConfig: S.optional(DnsConfig), HealthCheckConfig: S.optional(HealthCheckConfig), HealthCheckCustomConfig: S.optional(HealthCheckCustomConfig), CreateDate: S.optional(S.Date), CreatedByAccount: S.optional(S.String)}) {}
export const ServiceSummariesList = S.Array(ServiceSummary);
export class PublicDnsNamespaceChange extends S.Class<PublicDnsNamespaceChange>("PublicDnsNamespaceChange")({Description: S.optional(S.String), Properties: S.optional(PublicDnsNamespacePropertiesChange)}) {}
export class PrivateDnsPropertiesMutableChange extends S.Class<PrivateDnsPropertiesMutableChange>("PrivateDnsPropertiesMutableChange")({SOA: SOAChange}) {}
export class CreatePrivateDnsNamespaceRequest extends S.Class<CreatePrivateDnsNamespaceRequest>("CreatePrivateDnsNamespaceRequest")({Name: S.String, CreatorRequestId: S.optional(S.String), Description: S.optional(S.String), Vpc: S.String, Tags: S.optional(TagList), Properties: S.optional(PrivateDnsNamespaceProperties)}) {}
export class CreatePublicDnsNamespaceResponse extends S.Class<CreatePublicDnsNamespaceResponse>("CreatePublicDnsNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class CreateServiceResponse extends S.Class<CreateServiceResponse>("CreateServiceResponse")({Service: S.optional(Service)}) {}
export class DiscoverInstancesResponse extends S.Class<DiscoverInstancesResponse>("DiscoverInstancesResponse")({Instances: S.optional(HttpInstanceSummaryList), InstancesRevision: S.optional(S.Number)}) {}
export class GetOperationResponse extends S.Class<GetOperationResponse>("GetOperationResponse")({Operation: S.optional(Operation)}) {}
export class ListNamespacesResponse extends S.Class<ListNamespacesResponse>("ListNamespacesResponse")({Namespaces: S.optional(NamespaceSummariesList), NextToken: S.optional(S.String)}) {}
export class ListOperationsResponse extends S.Class<ListOperationsResponse>("ListOperationsResponse")({Operations: S.optional(OperationSummaryList), NextToken: S.optional(S.String)}) {}
export class ListServicesResponse extends S.Class<ListServicesResponse>("ListServicesResponse")({Services: S.optional(ServiceSummariesList), NextToken: S.optional(S.String)}) {}
export class UpdatePublicDnsNamespaceRequest extends S.Class<UpdatePublicDnsNamespaceRequest>("UpdatePublicDnsNamespaceRequest")({Id: S.String, UpdaterRequestId: S.optional(S.String), Namespace: PublicDnsNamespaceChange}) {}
export class UpdateServiceResponse extends S.Class<UpdateServiceResponse>("UpdateServiceResponse")({OperationId: S.optional(S.String)}) {}
export class PrivateDnsNamespacePropertiesChange extends S.Class<PrivateDnsNamespacePropertiesChange>("PrivateDnsNamespacePropertiesChange")({DnsProperties: PrivateDnsPropertiesMutableChange}) {}
export class Namespace extends S.Class<Namespace>("Namespace")({Id: S.optional(S.String), Arn: S.optional(S.String), ResourceOwner: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String), Description: S.optional(S.String), ServiceCount: S.optional(S.Number), Properties: S.optional(NamespaceProperties), CreateDate: S.optional(S.Date), CreatorRequestId: S.optional(S.String)}) {}
export class PrivateDnsNamespaceChange extends S.Class<PrivateDnsNamespaceChange>("PrivateDnsNamespaceChange")({Description: S.optional(S.String), Properties: S.optional(PrivateDnsNamespacePropertiesChange)}) {}
export class CreatePrivateDnsNamespaceResponse extends S.Class<CreatePrivateDnsNamespaceResponse>("CreatePrivateDnsNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class GetNamespaceResponse extends S.Class<GetNamespaceResponse>("GetNamespaceResponse")({Namespace: S.optional(Namespace)}) {}
export class UpdatePrivateDnsNamespaceRequest extends S.Class<UpdatePrivateDnsNamespaceRequest>("UpdatePrivateDnsNamespaceRequest")({Id: S.String, UpdaterRequestId: S.optional(S.String), Namespace: PrivateDnsNamespaceChange}) {}
export class UpdatePublicDnsNamespaceResponse extends S.Class<UpdatePublicDnsNamespaceResponse>("UpdatePublicDnsNamespaceResponse")({OperationId: S.optional(S.String)}) {}
export class UpdatePrivateDnsNamespaceResponse extends S.Class<UpdatePrivateDnsNamespaceResponse>("UpdatePrivateDnsNamespaceResponse")({OperationId: S.optional(S.String)}) {}

//# Errors
export class InvalidInput extends S.TaggedError<InvalidInput>()("InvalidInput", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceNotFound extends S.TaggedError<ServiceNotFound>()("ServiceNotFound", {Message: S.optional(S.String)}) {};
export class DuplicateRequest extends S.TaggedError<DuplicateRequest>()("DuplicateRequest", {}) {};
export class ResourceInUse extends S.TaggedError<ResourceInUse>()("ResourceInUse", {}) {};
export class CustomHealthNotFound extends S.TaggedError<CustomHealthNotFound>()("CustomHealthNotFound", {Message: S.optional(S.String)}) {};
export class InstanceNotFound extends S.TaggedError<InstanceNotFound>()("InstanceNotFound", {}) {};
export class NamespaceNotFound extends S.TaggedError<NamespaceNotFound>()("NamespaceNotFound", {}) {};
export class ResourceLimitExceeded extends S.TaggedError<ResourceLimitExceeded>()("ResourceLimitExceeded", {Message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String), ResourceName: S.optional(S.String)}) {};
export class ServiceAttributesLimitExceededException extends S.TaggedError<ServiceAttributesLimitExceededException>()("ServiceAttributesLimitExceededException", {Message: S.optional(S.String)}) {};
export class NamespaceAlreadyExists extends S.TaggedError<NamespaceAlreadyExists>()("NamespaceAlreadyExists", {Message: S.optional(S.String), CreatorRequestId: S.optional(S.String), NamespaceId: S.optional(S.String)}) {};
export class RequestLimitExceeded extends S.TaggedError<RequestLimitExceeded>()("RequestLimitExceeded", {}) {};
export class ServiceAlreadyExists extends S.TaggedError<ServiceAlreadyExists>()("ServiceAlreadyExists", {Message: S.optional(S.String), CreatorRequestId: S.optional(S.String), ServiceId: S.optional(S.String), ServiceArn: S.optional(S.String)}) {};
export class OperationNotFound extends S.TaggedError<OperationNotFound>()("OperationNotFound", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Removes one or more tags from the specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InvalidInput, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes specific attributes associated with a service.
 */export const deleteServiceAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DeleteServiceAttributes" }, DeleteServiceAttributesRequest, DeleteServiceAttributesResponse, [InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags for the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidInput, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a request to change the health status of a custom health check to healthy or
 * unhealthy.
 * 
 * 
 * You can use `UpdateInstanceCustomHealthStatus` to change the status only for
 * custom health checks, which you define using `HealthCheckCustomConfig` when you create
 * a service. You can't use it to change the status for Route 53 health checks, which you define using
 * `HealthCheckConfig`.
 * 
 * 
 * For more information, see HealthCheckCustomConfig.
 */export const updateInstanceCustomHealthStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus" }, UpdateInstanceCustomHealthStatusRequest, S.Struct({}), [CustomHealthNotFound, InstanceNotFound, InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a namespace from the current account. If the namespace still contains one or more
 * services, the request fails.
 */export const deleteNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DeleteNamespace" }, DeleteNamespaceRequest, DeleteNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceNotFound, ResourceInUse]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specified service and all associated service attributes. If the service still
 * contains one or more registered instances, the request fails.
 */export const deleteService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DeleteService" }, DeleteServiceRequest, DeleteServiceResponse, [InvalidInput, ResourceInUse, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the
 * specified instance.
 */export const deregisterInstance = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DeregisterInstance" }, DeregisterInstanceRequest, DeregisterInstanceResponse, [DuplicateRequest, InstanceNotFound, InvalidInput, ResourceInUse, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specified instance.
 */export const getInstance = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetInstance" }, GetInstanceRequest, GetInstanceResponse, [InstanceNotFound, InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the current health status (`Healthy`, `Unhealthy`, or
 * `Unknown`) of one or more instances that are associated with a specified
 * service.
 * 
 * 
 * 
 * 
 * There's a brief delay between when you register an instance and when the health status for
 * the instance is available.
 */export const getInstancesHealthStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetInstancesHealthStatus" }, GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse, [InstanceNotFound, InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the settings for a specified service.
 */export const getService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetService" }, GetServiceRequest, GetServiceResponse, [InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the attributes associated with a specified service.
 */export const getServiceAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetServiceAttributes" }, GetServiceAttributesRequest, GetServiceAttributesResponse, [InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists summary information about the instances that you registered by using a specified
 * service.
 */export const listInstances = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.ListInstances" }, ListInstancesRequest, ListInstancesResponse, [InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates one or more records and, optionally, creates a health check based on the
 * settings in a specified service. When you submit a `RegisterInstance` request, the
 * following occurs:
 * 
 * 
 * 
 * - For each DNS record that you define in the service that's specified by
 * `ServiceId`, a record is created or updated in the hosted zone that's associated
 * with the corresponding namespace.
 * 
 * 
 * 
 * - If the service includes `HealthCheckConfig`, a health check is created based on
 * the settings in the health check configuration.
 * 
 * 
 * 
 * - The health check, if any, is associated with each of the new or updated records.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * One `RegisterInstance` request must complete before you can submit another
 * request and specify the same service ID and instance ID.
 * 
 * 
 * 
 * 
 * For more information, see CreateService.
 * 
 * 
 * When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable
 * value:
 * 
 * 
 * 
 * - **If the health check is healthy**: returns all the
 * records
 * 
 * 
 * 
 * - **If the health check is unhealthy**: returns the applicable
 * value for the last healthy instance
 * 
 * 
 * 
 * - **If you didn't specify a health check configuration**:
 * returns all the records
 * 
 * 
 * 
 * 
 * 
 * For the current quota on the number of instances that you can register using the same
 * namespace and using the same service, see Cloud Map quotas in the
 * *Cloud Map Developer Guide*.
 */export const registerInstance = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.RegisterInstance" }, RegisterInstanceRequest, RegisterInstanceResponse, [DuplicateRequest, InvalidInput, ResourceInUse, ResourceLimitExceeded, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to the specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidInput, ResourceNotFoundException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an HTTP
 * namespace.
 */export const updateHttpNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdateHttpNamespace" }, UpdateHttpNamespaceRequest, UpdateHttpNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceNotFound, ResourceInUse]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a request to update a specified service to add service-level attributes.
 */export const updateServiceAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdateServiceAttributes" }, UpdateServiceAttributesRequest, UpdateServiceAttributesResponse, [InvalidInput, ServiceAttributesLimitExceededException, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an HTTP namespace. Service instances registered using an HTTP namespace can be
 * discovered using a `DiscoverInstances` request but can't be discovered using
 * DNS.
 * 
 * 
 * For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the
 * *Cloud Map Developer Guide*.
 */export const createHttpNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.CreateHttpNamespace" }, CreateHttpNamespaceRequest, CreateHttpNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceAlreadyExists, ResourceLimitExceeded, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a public namespace based on DNS, which is visible on the internet. The namespace
 * defines your service naming scheme. For example, if you name your namespace
 * `example.com` and name your service `backend`, the resulting DNS name for
 * the service is `backend.example.com`. You can discover instances that were registered
 * with a public DNS namespace by using either a `DiscoverInstances` request or using
 * DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the
 * *Cloud Map Developer Guide*.
 * 
 * 
 * 
 * 
 * The `CreatePublicDnsNamespace` API operation is not supported in the Amazon Web Services GovCloud (US) Regions.
 */export const createPublicDnsNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.CreatePublicDnsNamespace" }, CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceAlreadyExists, ResourceLimitExceeded, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Discovers registered instances for a specified namespace and service. You can use
 * `DiscoverInstances` to discover instances for any type of namespace.
 * `DiscoverInstances` returns a randomized list of instances allowing customers to
 * distribute traffic evenly across instances. For public and private DNS namespaces, you can also
 * use DNS queries to discover instances.
 */export const discoverInstances = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DiscoverInstances" }, DiscoverInstancesRequest, DiscoverInstancesResponse, [InvalidInput, NamespaceNotFound, RequestLimitExceeded, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Discovers the increasing revision associated with an instance.
 */export const discoverInstancesRevision = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.DiscoverInstancesRevision" }, DiscoverInstancesRevisionRequest, DiscoverInstancesRevisionResponse, [InvalidInput, NamespaceNotFound, RequestLimitExceeded, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists summary information about the namespaces that were created by the current Amazon Web Services account and shared with the current Amazon Web Services account.
 */export const listNamespaces = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.ListNamespaces" }, ListNamespacesRequest, ListNamespacesResponse, [InvalidInput]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists operations that match the criteria that you specify.
 */export const listOperations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.ListOperations" }, ListOperationsRequest, ListOperationsResponse, [InvalidInput]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists summary information for all the services that are associated with one or more
 * namespaces.
 */export const listServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.ListServices" }, ListServicesRequest, ListServicesResponse, [InvalidInput]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a request to perform the following operations:
 * 
 * 
 * 
 * - Update the TTL setting for existing `DnsRecords` configurations
 * 
 * 
 * 
 * - Add, update, or delete `HealthCheckConfig` for a specified service
 * 
 * 
 * 
 * 
 * You can't add, update, or delete a `HealthCheckCustomConfig`
 * configuration.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * For public and private DNS namespaces, note the following:
 * 
 * 
 * 
 * - If you omit any existing `DnsRecords` or `HealthCheckConfig`
 * configurations from an `UpdateService` request, the configurations are deleted from
 * the service.
 * 
 * 
 * 
 * - If you omit an existing `HealthCheckCustomConfig` configuration from an
 * `UpdateService` request, the configuration isn't deleted from the service.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * You can't call `UpdateService` and update settings in the following
 * scenarios:
 * 
 * 
 * 
 * - When the service is associated with an HTTP namespace
 * 
 * 
 * 
 * - When the service is associated with a shared namespace and contains instances that were
 * registered by Amazon Web Services accounts other than the account making the `UpdateService`
 * call
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * When you update settings for a service, Cloud Map also updates the corresponding settings
 * in all the records and health checks that were created by using the specified service.
 */export const updateService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdateService" }, UpdateServiceRequest, UpdateServiceResponse, [DuplicateRequest, InvalidInput, ServiceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a private namespace based on DNS, which is visible only inside a specified Amazon
 * VPC. The namespace defines your service naming scheme. For example, if you name your namespace
 * `example.com` and name your service `backend`, the resulting DNS name for
 * the service is `backend.example.com`. Service instances that are registered using a
 * private DNS namespace can be discovered using either a `DiscoverInstances` request or
 * using DNS. For the current quota on the number of namespaces that you can create using the same
 * Amazon Web Services account, see Cloud Map quotas in the
 * *Cloud Map Developer Guide*.
 */export const createPrivateDnsNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace" }, CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceAlreadyExists, ResourceLimitExceeded, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a service. This action defines the configuration for the following entities:
 * 
 * 
 * 
 * - For public and private DNS namespaces, one of the following combinations of DNS records in
 * Amazon Route 53:
 * 
 * 
 * 
 * - `A`
 * 
 * 
 * 
 * 
 * - `AAAA`
 * 
 * 
 * 
 * 
 * - `A` and `AAAA`
 * 
 * 
 * 
 * 
 * - `SRV`
 * 
 * 
 * 
 * 
 * - `CNAME`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * - Optionally, a health check
 * 
 * 
 * 
 * 
 * 
 * After you create the service, you can submit a RegisterInstance request, and
 * Cloud Map uses the values in the configuration to create the specified entities.
 * 
 * 
 * For the current quota on the number of instances that you can register using the same
 * namespace and using the same service, see Cloud Map quotas in the
 * *Cloud Map Developer Guide*.
 */export const createService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.CreateService" }, CreateServiceRequest, CreateServiceResponse, [InvalidInput, NamespaceNotFound, ResourceLimitExceeded, ServiceAlreadyExists, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a namespace.
 */export const getNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetNamespace" }, GetNamespaceRequest, GetNamespaceResponse, [InvalidInput, NamespaceNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about any operation that returns an operation ID in the response, such as a
 * `CreateHttpNamespace` request.
 * 
 * 
 * 
 * 
 * To get a list of operations that match specified criteria, see ListOperations.
 */export const getOperation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.GetOperation" }, GetOperationRequest, GetOperationResponse, [InvalidInput, OperationNotFound]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a public DNS namespace.
 */export const updatePublicDnsNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace" }, UpdatePublicDnsNamespaceRequest, UpdatePublicDnsNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceNotFound, ResourceInUse]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a private DNS
 * namespace.
 */export const updatePrivateDnsNamespace = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-03-14", uri: "/", method: "POST", sdkId: "ServiceDiscovery", sigV4ServiceName: "servicediscovery", name: "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace" }, UpdatePrivateDnsNamespaceRequest, UpdatePrivateDnsNamespaceResponse, [DuplicateRequest, InvalidInput, NamespaceNotFound, ResourceInUse]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
