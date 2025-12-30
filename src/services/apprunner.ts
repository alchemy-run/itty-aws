import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const StringList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateCustomDomainRequest extends S.Class<AssociateCustomDomainRequest>("AssociateCustomDomainRequest")({ServiceArn: S.String, DomainName: S.String, EnableWWWSubdomain: S.optional(S.Boolean)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateConnectionRequest extends S.Class<CreateConnectionRequest>("CreateConnectionRequest")({ConnectionName: S.String, ProviderType: S.String, Tags: S.optional(TagList)}) {}
export class CreateVpcConnectorRequest extends S.Class<CreateVpcConnectorRequest>("CreateVpcConnectorRequest")({VpcConnectorName: S.String, Subnets: StringList, SecurityGroups: S.optional(StringList), Tags: S.optional(TagList)}) {}
export class DeleteAutoScalingConfigurationRequest extends S.Class<DeleteAutoScalingConfigurationRequest>("DeleteAutoScalingConfigurationRequest")({AutoScalingConfigurationArn: S.String, DeleteAllRevisions: S.optional(S.Boolean)}) {}
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({ConnectionArn: S.String}) {}
export class DeleteObservabilityConfigurationRequest extends S.Class<DeleteObservabilityConfigurationRequest>("DeleteObservabilityConfigurationRequest")({ObservabilityConfigurationArn: S.String}) {}
export class DeleteServiceRequest extends S.Class<DeleteServiceRequest>("DeleteServiceRequest")({ServiceArn: S.String}) {}
export class DeleteVpcConnectorRequest extends S.Class<DeleteVpcConnectorRequest>("DeleteVpcConnectorRequest")({VpcConnectorArn: S.String}) {}
export class DeleteVpcIngressConnectionRequest extends S.Class<DeleteVpcIngressConnectionRequest>("DeleteVpcIngressConnectionRequest")({VpcIngressConnectionArn: S.String}) {}
export class DescribeAutoScalingConfigurationRequest extends S.Class<DescribeAutoScalingConfigurationRequest>("DescribeAutoScalingConfigurationRequest")({AutoScalingConfigurationArn: S.String}) {}
export class DescribeCustomDomainsRequest extends S.Class<DescribeCustomDomainsRequest>("DescribeCustomDomainsRequest")({ServiceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class DescribeObservabilityConfigurationRequest extends S.Class<DescribeObservabilityConfigurationRequest>("DescribeObservabilityConfigurationRequest")({ObservabilityConfigurationArn: S.String}) {}
export class DescribeServiceRequest extends S.Class<DescribeServiceRequest>("DescribeServiceRequest")({ServiceArn: S.String}) {}
export class DescribeVpcConnectorRequest extends S.Class<DescribeVpcConnectorRequest>("DescribeVpcConnectorRequest")({VpcConnectorArn: S.String}) {}
export class DescribeVpcIngressConnectionRequest extends S.Class<DescribeVpcIngressConnectionRequest>("DescribeVpcIngressConnectionRequest")({VpcIngressConnectionArn: S.String}) {}
export class DisassociateCustomDomainRequest extends S.Class<DisassociateCustomDomainRequest>("DisassociateCustomDomainRequest")({ServiceArn: S.String, DomainName: S.String}) {}
export class ListAutoScalingConfigurationsRequest extends S.Class<ListAutoScalingConfigurationsRequest>("ListAutoScalingConfigurationsRequest")({AutoScalingConfigurationName: S.optional(S.String), LatestOnly: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConnectionsRequest extends S.Class<ListConnectionsRequest>("ListConnectionsRequest")({ConnectionName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListObservabilityConfigurationsRequest extends S.Class<ListObservabilityConfigurationsRequest>("ListObservabilityConfigurationsRequest")({ObservabilityConfigurationName: S.optional(S.String), LatestOnly: S.optional(S.Boolean), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListOperationsRequest extends S.Class<ListOperationsRequest>("ListOperationsRequest")({ServiceArn: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListServicesRequest extends S.Class<ListServicesRequest>("ListServicesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListServicesForAutoScalingConfigurationRequest extends S.Class<ListServicesForAutoScalingConfigurationRequest>("ListServicesForAutoScalingConfigurationRequest")({AutoScalingConfigurationArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListVpcConnectorsRequest extends S.Class<ListVpcConnectorsRequest>("ListVpcConnectorsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PauseServiceRequest extends S.Class<PauseServiceRequest>("PauseServiceRequest")({ServiceArn: S.String}) {}
export class ResumeServiceRequest extends S.Class<ResumeServiceRequest>("ResumeServiceRequest")({ServiceArn: S.String}) {}
export class StartDeploymentRequest extends S.Class<StartDeploymentRequest>("StartDeploymentRequest")({ServiceArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDefaultAutoScalingConfigurationRequest extends S.Class<UpdateDefaultAutoScalingConfigurationRequest>("UpdateDefaultAutoScalingConfigurationRequest")({AutoScalingConfigurationArn: S.String}) {}
export class SourceCodeVersion extends S.Class<SourceCodeVersion>("SourceCodeVersion")({Type: S.String, Value: S.String}) {}
export const RuntimeEnvironmentVariables = S.Record({key: S.String, value: S.String});
export const RuntimeEnvironmentSecrets = S.Record({key: S.String, value: S.String});
export class CodeConfigurationValues extends S.Class<CodeConfigurationValues>("CodeConfigurationValues")({Runtime: S.String, BuildCommand: S.optional(S.String), StartCommand: S.optional(S.String), Port: S.optional(S.String), RuntimeEnvironmentVariables: S.optional(RuntimeEnvironmentVariables), RuntimeEnvironmentSecrets: S.optional(RuntimeEnvironmentSecrets)}) {}
export class CodeConfiguration extends S.Class<CodeConfiguration>("CodeConfiguration")({ConfigurationSource: S.String, CodeConfigurationValues: S.optional(CodeConfigurationValues)}) {}
export class CodeRepository extends S.Class<CodeRepository>("CodeRepository")({RepositoryUrl: S.String, SourceCodeVersion: SourceCodeVersion, CodeConfiguration: S.optional(CodeConfiguration), SourceDirectory: S.optional(S.String)}) {}
export class ImageConfiguration extends S.Class<ImageConfiguration>("ImageConfiguration")({RuntimeEnvironmentVariables: S.optional(RuntimeEnvironmentVariables), StartCommand: S.optional(S.String), Port: S.optional(S.String), RuntimeEnvironmentSecrets: S.optional(RuntimeEnvironmentSecrets)}) {}
export class ImageRepository extends S.Class<ImageRepository>("ImageRepository")({ImageIdentifier: S.String, ImageConfiguration: S.optional(ImageConfiguration), ImageRepositoryType: S.String}) {}
export class AuthenticationConfiguration extends S.Class<AuthenticationConfiguration>("AuthenticationConfiguration")({ConnectionArn: S.optional(S.String), AccessRoleArn: S.optional(S.String)}) {}
export class SourceConfiguration extends S.Class<SourceConfiguration>("SourceConfiguration")({CodeRepository: S.optional(CodeRepository), ImageRepository: S.optional(ImageRepository), AutoDeploymentsEnabled: S.optional(S.Boolean), AuthenticationConfiguration: S.optional(AuthenticationConfiguration)}) {}
export class InstanceConfiguration extends S.Class<InstanceConfiguration>("InstanceConfiguration")({Cpu: S.optional(S.String), Memory: S.optional(S.String), InstanceRoleArn: S.optional(S.String)}) {}
export class HealthCheckConfiguration extends S.Class<HealthCheckConfiguration>("HealthCheckConfiguration")({Protocol: S.optional(S.String), Path: S.optional(S.String), Interval: S.optional(S.Number), Timeout: S.optional(S.Number), HealthyThreshold: S.optional(S.Number), UnhealthyThreshold: S.optional(S.Number)}) {}
export class EgressConfiguration extends S.Class<EgressConfiguration>("EgressConfiguration")({EgressType: S.optional(S.String), VpcConnectorArn: S.optional(S.String)}) {}
export class IngressConfiguration extends S.Class<IngressConfiguration>("IngressConfiguration")({IsPubliclyAccessible: S.optional(S.Boolean)}) {}
export class NetworkConfiguration extends S.Class<NetworkConfiguration>("NetworkConfiguration")({EgressConfiguration: S.optional(EgressConfiguration), IngressConfiguration: S.optional(IngressConfiguration), IpAddressType: S.optional(S.String)}) {}
export class ServiceObservabilityConfiguration extends S.Class<ServiceObservabilityConfiguration>("ServiceObservabilityConfiguration")({ObservabilityEnabled: S.Boolean, ObservabilityConfigurationArn: S.optional(S.String)}) {}
export class UpdateServiceRequest extends S.Class<UpdateServiceRequest>("UpdateServiceRequest")({ServiceArn: S.String, SourceConfiguration: S.optional(SourceConfiguration), InstanceConfiguration: S.optional(InstanceConfiguration), AutoScalingConfigurationArn: S.optional(S.String), HealthCheckConfiguration: S.optional(HealthCheckConfiguration), NetworkConfiguration: S.optional(NetworkConfiguration), ObservabilityConfiguration: S.optional(ServiceObservabilityConfiguration)}) {}
export class IngressVpcConfiguration extends S.Class<IngressVpcConfiguration>("IngressVpcConfiguration")({VpcId: S.optional(S.String), VpcEndpointId: S.optional(S.String)}) {}
export class UpdateVpcIngressConnectionRequest extends S.Class<UpdateVpcIngressConnectionRequest>("UpdateVpcIngressConnectionRequest")({VpcIngressConnectionArn: S.String, IngressVpcConfiguration: IngressVpcConfiguration}) {}
export class TraceConfiguration extends S.Class<TraceConfiguration>("TraceConfiguration")({Vendor: S.String}) {}
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({KmsKey: S.String}) {}
export class CertificateValidationRecord extends S.Class<CertificateValidationRecord>("CertificateValidationRecord")({Name: S.optional(S.String), Type: S.optional(S.String), Value: S.optional(S.String), Status: S.optional(S.String)}) {}
export const CertificateValidationRecordList = S.Array(CertificateValidationRecord);
export class CustomDomain extends S.Class<CustomDomain>("CustomDomain")({DomainName: S.String, EnableWWWSubdomain: S.Boolean, CertificateValidationRecords: S.optional(CertificateValidationRecordList), Status: S.String}) {}
export const CustomDomainList = S.Array(CustomDomain);
export const ServiceArnList = S.Array(S.String);
export class VpcConnector extends S.Class<VpcConnector>("VpcConnector")({VpcConnectorName: S.optional(S.String), VpcConnectorArn: S.optional(S.String), VpcConnectorRevision: S.optional(S.Number), Subnets: S.optional(StringList), SecurityGroups: S.optional(StringList), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), DeletedAt: S.optional(S.Date)}) {}
export const VpcConnectors = S.Array(VpcConnector);
export class ListVpcIngressConnectionsFilter extends S.Class<ListVpcIngressConnectionsFilter>("ListVpcIngressConnectionsFilter")({ServiceArn: S.optional(S.String), VpcEndpointId: S.optional(S.String)}) {}
export class CreateAutoScalingConfigurationRequest extends S.Class<CreateAutoScalingConfigurationRequest>("CreateAutoScalingConfigurationRequest")({AutoScalingConfigurationName: S.String, MaxConcurrency: S.optional(S.Number), MinSize: S.optional(S.Number), MaxSize: S.optional(S.Number), Tags: S.optional(TagList)}) {}
export class CreateObservabilityConfigurationRequest extends S.Class<CreateObservabilityConfigurationRequest>("CreateObservabilityConfigurationRequest")({ObservabilityConfigurationName: S.String, TraceConfiguration: S.optional(TraceConfiguration), Tags: S.optional(TagList)}) {}
export class CreateVpcIngressConnectionRequest extends S.Class<CreateVpcIngressConnectionRequest>("CreateVpcIngressConnectionRequest")({ServiceArn: S.String, VpcIngressConnectionName: S.String, IngressVpcConfiguration: IngressVpcConfiguration, Tags: S.optional(TagList)}) {}
export class Connection extends S.Class<Connection>("Connection")({ConnectionName: S.optional(S.String), ConnectionArn: S.optional(S.String), ProviderType: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class DeleteConnectionResponse extends S.Class<DeleteConnectionResponse>("DeleteConnectionResponse")({Connection: S.optional(Connection)}) {}
export class DeleteVpcConnectorResponse extends S.Class<DeleteVpcConnectorResponse>("DeleteVpcConnectorResponse")({VpcConnector: VpcConnector}) {}
export class AutoScalingConfiguration extends S.Class<AutoScalingConfiguration>("AutoScalingConfiguration")({AutoScalingConfigurationArn: S.optional(S.String), AutoScalingConfigurationName: S.optional(S.String), AutoScalingConfigurationRevision: S.optional(S.Number), Latest: S.optional(S.Boolean), Status: S.optional(S.String), MaxConcurrency: S.optional(S.Number), MinSize: S.optional(S.Number), MaxSize: S.optional(S.Number), CreatedAt: S.optional(S.Date), DeletedAt: S.optional(S.Date), HasAssociatedService: S.optional(S.Boolean), IsDefault: S.optional(S.Boolean)}) {}
export class DescribeAutoScalingConfigurationResponse extends S.Class<DescribeAutoScalingConfigurationResponse>("DescribeAutoScalingConfigurationResponse")({AutoScalingConfiguration: AutoScalingConfiguration}) {}
export class VpcDNSTarget extends S.Class<VpcDNSTarget>("VpcDNSTarget")({VpcIngressConnectionArn: S.optional(S.String), VpcId: S.optional(S.String), DomainName: S.optional(S.String)}) {}
export const VpcDNSTargetList = S.Array(VpcDNSTarget);
export class DescribeCustomDomainsResponse extends S.Class<DescribeCustomDomainsResponse>("DescribeCustomDomainsResponse")({DNSTarget: S.String, ServiceArn: S.String, CustomDomains: CustomDomainList, VpcDNSTargets: VpcDNSTargetList, NextToken: S.optional(S.String)}) {}
export class ObservabilityConfiguration extends S.Class<ObservabilityConfiguration>("ObservabilityConfiguration")({ObservabilityConfigurationArn: S.optional(S.String), ObservabilityConfigurationName: S.optional(S.String), TraceConfiguration: S.optional(TraceConfiguration), ObservabilityConfigurationRevision: S.optional(S.Number), Latest: S.optional(S.Boolean), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), DeletedAt: S.optional(S.Date)}) {}
export class DescribeObservabilityConfigurationResponse extends S.Class<DescribeObservabilityConfigurationResponse>("DescribeObservabilityConfigurationResponse")({ObservabilityConfiguration: ObservabilityConfiguration}) {}
export class AutoScalingConfigurationSummary extends S.Class<AutoScalingConfigurationSummary>("AutoScalingConfigurationSummary")({AutoScalingConfigurationArn: S.optional(S.String), AutoScalingConfigurationName: S.optional(S.String), AutoScalingConfigurationRevision: S.optional(S.Number), Status: S.optional(S.String), CreatedAt: S.optional(S.Date), HasAssociatedService: S.optional(S.Boolean), IsDefault: S.optional(S.Boolean)}) {}
export class Service extends S.Class<Service>("Service")({ServiceName: S.String, ServiceId: S.String, ServiceArn: S.String, ServiceUrl: S.optional(S.String), CreatedAt: S.Date, UpdatedAt: S.Date, DeletedAt: S.optional(S.Date), Status: S.String, SourceConfiguration: SourceConfiguration, InstanceConfiguration: InstanceConfiguration, EncryptionConfiguration: S.optional(EncryptionConfiguration), HealthCheckConfiguration: S.optional(HealthCheckConfiguration), AutoScalingConfigurationSummary: AutoScalingConfigurationSummary, NetworkConfiguration: NetworkConfiguration, ObservabilityConfiguration: S.optional(ServiceObservabilityConfiguration)}) {}
export class DescribeServiceResponse extends S.Class<DescribeServiceResponse>("DescribeServiceResponse")({Service: Service}) {}
export class DescribeVpcConnectorResponse extends S.Class<DescribeVpcConnectorResponse>("DescribeVpcConnectorResponse")({VpcConnector: VpcConnector}) {}
export class VpcIngressConnection extends S.Class<VpcIngressConnection>("VpcIngressConnection")({VpcIngressConnectionArn: S.optional(S.String), VpcIngressConnectionName: S.optional(S.String), ServiceArn: S.optional(S.String), Status: S.optional(S.String), AccountId: S.optional(S.String), DomainName: S.optional(S.String), IngressVpcConfiguration: S.optional(IngressVpcConfiguration), CreatedAt: S.optional(S.Date), DeletedAt: S.optional(S.Date)}) {}
export class DescribeVpcIngressConnectionResponse extends S.Class<DescribeVpcIngressConnectionResponse>("DescribeVpcIngressConnectionResponse")({VpcIngressConnection: VpcIngressConnection}) {}
export class DisassociateCustomDomainResponse extends S.Class<DisassociateCustomDomainResponse>("DisassociateCustomDomainResponse")({DNSTarget: S.String, ServiceArn: S.String, CustomDomain: CustomDomain, VpcDNSTargets: VpcDNSTargetList}) {}
export class ListServicesForAutoScalingConfigurationResponse extends S.Class<ListServicesForAutoScalingConfigurationResponse>("ListServicesForAutoScalingConfigurationResponse")({ServiceArnList: ServiceArnList, NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class ListVpcConnectorsResponse extends S.Class<ListVpcConnectorsResponse>("ListVpcConnectorsResponse")({VpcConnectors: VpcConnectors, NextToken: S.optional(S.String)}) {}
export class ListVpcIngressConnectionsRequest extends S.Class<ListVpcIngressConnectionsRequest>("ListVpcIngressConnectionsRequest")({Filter: S.optional(ListVpcIngressConnectionsFilter), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PauseServiceResponse extends S.Class<PauseServiceResponse>("PauseServiceResponse")({Service: Service, OperationId: S.optional(S.String)}) {}
export class ResumeServiceResponse extends S.Class<ResumeServiceResponse>("ResumeServiceResponse")({Service: Service, OperationId: S.optional(S.String)}) {}
export class StartDeploymentResponse extends S.Class<StartDeploymentResponse>("StartDeploymentResponse")({OperationId: S.String}) {}
export class UpdateDefaultAutoScalingConfigurationResponse extends S.Class<UpdateDefaultAutoScalingConfigurationResponse>("UpdateDefaultAutoScalingConfigurationResponse")({AutoScalingConfiguration: AutoScalingConfiguration}) {}
export class UpdateServiceResponse extends S.Class<UpdateServiceResponse>("UpdateServiceResponse")({Service: Service, OperationId: S.String}) {}
export class UpdateVpcIngressConnectionResponse extends S.Class<UpdateVpcIngressConnectionResponse>("UpdateVpcIngressConnectionResponse")({VpcIngressConnection: VpcIngressConnection}) {}
export const AutoScalingConfigurationSummaryList = S.Array(AutoScalingConfigurationSummary);
export class ConnectionSummary extends S.Class<ConnectionSummary>("ConnectionSummary")({ConnectionName: S.optional(S.String), ConnectionArn: S.optional(S.String), ProviderType: S.optional(S.String), Status: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const ConnectionSummaryList = S.Array(ConnectionSummary);
export class ObservabilityConfigurationSummary extends S.Class<ObservabilityConfigurationSummary>("ObservabilityConfigurationSummary")({ObservabilityConfigurationArn: S.optional(S.String), ObservabilityConfigurationName: S.optional(S.String), ObservabilityConfigurationRevision: S.optional(S.Number)}) {}
export const ObservabilityConfigurationSummaryList = S.Array(ObservabilityConfigurationSummary);
export class OperationSummary extends S.Class<OperationSummary>("OperationSummary")({Id: S.optional(S.String), Type: S.optional(S.String), Status: S.optional(S.String), TargetArn: S.optional(S.String), StartedAt: S.optional(S.Date), EndedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date)}) {}
export const OperationSummaryList = S.Array(OperationSummary);
export class ServiceSummary extends S.Class<ServiceSummary>("ServiceSummary")({ServiceName: S.optional(S.String), ServiceId: S.optional(S.String), ServiceArn: S.optional(S.String), ServiceUrl: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), Status: S.optional(S.String)}) {}
export const ServiceSummaryList = S.Array(ServiceSummary);
export class CreateAutoScalingConfigurationResponse extends S.Class<CreateAutoScalingConfigurationResponse>("CreateAutoScalingConfigurationResponse")({AutoScalingConfiguration: AutoScalingConfiguration}) {}
export class CreateConnectionResponse extends S.Class<CreateConnectionResponse>("CreateConnectionResponse")({Connection: Connection}) {}
export class CreateObservabilityConfigurationResponse extends S.Class<CreateObservabilityConfigurationResponse>("CreateObservabilityConfigurationResponse")({ObservabilityConfiguration: ObservabilityConfiguration}) {}
export class CreateVpcConnectorResponse extends S.Class<CreateVpcConnectorResponse>("CreateVpcConnectorResponse")({VpcConnector: VpcConnector}) {}
export class CreateVpcIngressConnectionResponse extends S.Class<CreateVpcIngressConnectionResponse>("CreateVpcIngressConnectionResponse")({VpcIngressConnection: VpcIngressConnection}) {}
export class DeleteAutoScalingConfigurationResponse extends S.Class<DeleteAutoScalingConfigurationResponse>("DeleteAutoScalingConfigurationResponse")({AutoScalingConfiguration: AutoScalingConfiguration}) {}
export class DeleteObservabilityConfigurationResponse extends S.Class<DeleteObservabilityConfigurationResponse>("DeleteObservabilityConfigurationResponse")({ObservabilityConfiguration: ObservabilityConfiguration}) {}
export class DeleteServiceResponse extends S.Class<DeleteServiceResponse>("DeleteServiceResponse")({Service: Service, OperationId: S.String}) {}
export class DeleteVpcIngressConnectionResponse extends S.Class<DeleteVpcIngressConnectionResponse>("DeleteVpcIngressConnectionResponse")({VpcIngressConnection: VpcIngressConnection}) {}
export class ListAutoScalingConfigurationsResponse extends S.Class<ListAutoScalingConfigurationsResponse>("ListAutoScalingConfigurationsResponse")({AutoScalingConfigurationSummaryList: AutoScalingConfigurationSummaryList, NextToken: S.optional(S.String)}) {}
export class ListConnectionsResponse extends S.Class<ListConnectionsResponse>("ListConnectionsResponse")({ConnectionSummaryList: ConnectionSummaryList, NextToken: S.optional(S.String)}) {}
export class ListObservabilityConfigurationsResponse extends S.Class<ListObservabilityConfigurationsResponse>("ListObservabilityConfigurationsResponse")({ObservabilityConfigurationSummaryList: ObservabilityConfigurationSummaryList, NextToken: S.optional(S.String)}) {}
export class ListOperationsResponse extends S.Class<ListOperationsResponse>("ListOperationsResponse")({OperationSummaryList: S.optional(OperationSummaryList), NextToken: S.optional(S.String)}) {}
export class ListServicesResponse extends S.Class<ListServicesResponse>("ListServicesResponse")({ServiceSummaryList: ServiceSummaryList, NextToken: S.optional(S.String)}) {}
export class VpcIngressConnectionSummary extends S.Class<VpcIngressConnectionSummary>("VpcIngressConnectionSummary")({VpcIngressConnectionArn: S.optional(S.String), ServiceArn: S.optional(S.String)}) {}
export const VpcIngressConnectionSummaryList = S.Array(VpcIngressConnectionSummary);
export class AssociateCustomDomainResponse extends S.Class<AssociateCustomDomainResponse>("AssociateCustomDomainResponse")({DNSTarget: S.String, ServiceArn: S.String, CustomDomain: CustomDomain, VpcDNSTargets: VpcDNSTargetList}) {}
export class ListVpcIngressConnectionsResponse extends S.Class<ListVpcIngressConnectionsResponse>("ListVpcIngressConnectionsResponse")({VpcIngressConnectionSummaryList: VpcIngressConnectionSummaryList, NextToken: S.optional(S.String)}) {}
export class CreateServiceRequest extends S.Class<CreateServiceRequest>("CreateServiceRequest")({ServiceName: S.String, SourceConfiguration: SourceConfiguration, InstanceConfiguration: S.optional(InstanceConfiguration), Tags: S.optional(TagList), EncryptionConfiguration: S.optional(EncryptionConfiguration), HealthCheckConfiguration: S.optional(HealthCheckConfiguration), AutoScalingConfigurationArn: S.optional(S.String), NetworkConfiguration: S.optional(NetworkConfiguration), ObservabilityConfiguration: S.optional(ServiceObservabilityConfiguration)}) {}
export class CreateServiceResponse extends S.Class<CreateServiceResponse>("CreateServiceResponse")({Service: Service, OperationId: S.String}) {}

//# Errors
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InvalidStateException extends S.TaggedError<InvalidStateException>()("InvalidStateException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Delete an App Runner VPC connector resource. You can't delete a
 * connector that's used by one or more App Runner services.
 */export const deleteVpcConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteVpcConnector" }, DeleteVpcConnectorRequest, DeleteVpcConnectorResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a full description of an App Runner automatic scaling configuration resource.
 */export const describeAutoScalingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeAutoScalingConfiguration" }, DescribeAutoScalingConfigurationRequest, DescribeAutoScalingConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a description of custom domain names that are associated with an App Runner service.
 */export const describeCustomDomains = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeCustomDomains" }, DescribeCustomDomainsRequest, DescribeCustomDomainsResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a full description of an App Runner observability configuration resource.
 */export const describeObservabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeObservabilityConfiguration" }, DescribeObservabilityConfigurationRequest, DescribeObservabilityConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a full description of an App Runner service.
 */export const describeService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeService" }, DescribeServiceRequest, DescribeServiceResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a description of an App Runner VPC connector resource.
 */export const describeVpcConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeVpcConnector" }, DescribeVpcConnectorRequest, DescribeVpcConnectorResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a full description of an App Runner VPC Ingress Connection resource.
 */export const describeVpcIngressConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DescribeVpcIngressConnection" }, DescribeVpcIngressConnectionRequest, DescribeVpcIngressConnectionResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the associated App Runner services using an auto scaling configuration.
 */export const listServicesForAutoScalingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListServicesForAutoScalingConfiguration" }, ListServicesForAutoScalingConfigurationRequest, ListServicesForAutoScalingConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of App Runner VPC connectors in your Amazon Web Services account.
 */export const listVpcConnectors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListVpcConnectors" }, ListVpcConnectorsRequest, ListVpcConnectorsResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
 * removed).
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations
 * call to track the operation's progress.
 */export const pauseService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.PauseService" }, PauseServiceRequest, PauseServiceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resume an active App Runner service. App Runner provisions compute capacity for the service.
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations
 * call to track the operation's progress.
 */export const resumeService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ResumeService" }, ResumeServiceRequest, ResumeServiceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner
 * service.
 * 
 * For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker
 * image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations
 * call to track the operation's progress.
 */export const startDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.StartDeployment" }, StartDeploymentRequest, StartDeploymentResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove tags from an App Runner resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an auto scaling configuration to be the default. The existing default auto scaling configuration will be set to non-default
 * automatically.
 */export const updateDefaultAutoScalingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.UpdateDefaultAutoScalingConfiguration" }, UpdateDefaultAutoScalingConfigurationRequest, UpdateDefaultAutoScalingConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto
 * scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service.
 * These can be set only when you create the service.
 * 
 * To update the tags applied to your service, use the separate actions TagResource and UntagResource.
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations
 * call to track the operation's progress.
 */export const updateService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.UpdateService" }, UpdateServiceRequest, UpdateServiceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:
 * 
 * - AVAILABLE
 * 
 * - FAILED_CREATION
 * 
 * - FAILED_UPDATE
 */export const updateVpcIngressConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.UpdateVpcIngressConnection" }, UpdateVpcIngressConnectionRequest, UpdateVpcIngressConnectionResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
 * certain third-party providers. You can share a connection across multiple services.
 * 
 * A connection resource is needed to access GitHub and Bitbucket repositories. Both require
 * a user interface approval process through the App Runner console before you can use the
 * connection.
 */export const createConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateConnection" }, CreateConnectionRequest, CreateConnectionResponse, [InternalServiceErrorException, InvalidRequestException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable
 * non-default observability features. You can share an observability configuration across multiple services.
 * 
 * Create multiple revisions of a configuration by calling this action multiple times using the same `ObservabilityConfigurationName`. The
 * call returns incremental `ObservabilityConfigurationRevision` values. When you create a service and configure an observability configuration
 * resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a
 * specific revision.
 * 
 * The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional
 * parameters that describe the configuration of these features (currently one parameter, `TraceConfiguration`). If you don't specify a feature
 * parameter, App Runner doesn't enable the feature.
 */export const createObservabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateObservabilityConfiguration" }, CreateObservabilityConfigurationRequest, CreateObservabilityConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud
 * (Amazon VPC).
 */export const createVpcConnector = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateVpcConnector" }, CreateVpcConnectorRequest, CreateVpcConnectorResponse, [InternalServiceErrorException, InvalidRequestException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
 */export const createVpcIngressConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateVpcIngressConnection" }, CreateVpcIngressConnectionRequest, CreateVpcIngressConnectionResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an App Runner automatic scaling configuration resource. You can delete a top level auto scaling configuration, a specific revision of one, or all
 * revisions associated with the top level configuration. You can't delete the default auto scaling configuration or a configuration that's used by one or
 * more App Runner services.
 */export const deleteAutoScalingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteAutoScalingConfiguration" }, DeleteAutoScalingConfigurationRequest, DeleteAutoScalingConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the
 * `DeleteConnection` action fails.
 */export const deleteConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteConnection" }, DeleteConnectionRequest, DeleteConnectionResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
 * configuration that's used by one or more App Runner services.
 */export const deleteObservabilityConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteObservabilityConfiguration" }, DeleteObservabilityConfigurationRequest, DeleteObservabilityConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an App Runner service.
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations
 * call to track the operation's progress.
 * 
 * Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete.
 */export const deleteService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteService" }, DeleteServiceRequest, DeleteServiceResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted:
 * 
 * - `AVAILABLE`
 * 
 * - `FAILED_CREATION`
 * 
 * - `FAILED_UPDATE`
 * 
 * - `FAILED_DELETION`
 */export const deleteVpcIngressConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DeleteVpcIngressConnection" }, DeleteVpcIngressConnectionRequest, DeleteVpcIngressConnectionResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociate a custom domain name from an App Runner service.
 * 
 * Certificates tracking domain validity are associated with a custom domain and are stored in AWS
 * Certificate Manager (ACM). These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 * 30 days after a domain is disassociated from your service.
 */export const disassociateCustomDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.DisassociateCustomDomain" }, DisassociateCustomDomainRequest, DisassociateCustomDomainResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific
 * configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 * name.
 * 
 * To retrieve a full description of a particular configuration revision, call and provide one of
 * the ARNs returned by `ListAutoScalingConfigurations`.
 */export const listAutoScalingConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListAutoScalingConfigurations" }, ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of App Runner connections that are associated with your Amazon Web Services account.
 */export const listConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListConnections" }, ListConnectionsRequest, ListConnectionsResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific
 * configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 * name.
 * 
 * To retrieve a full description of a particular configuration revision, call and provide one
 * of the ARNs returned by `ListObservabilityConfigurations`.
 */export const listObservabilityConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListObservabilityConfigurations" }, ListObservabilityConfigurationsRequest, ListObservabilityConfigurationsResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a list of operations that occurred on an App Runner service.
 * 
 * The resulting list of OperationSummary objects is sorted in reverse chronological order. The first object on the list represents the
 * last started operation.
 */export const listOperations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListOperations" }, ListOperationsRequest, ListOperationsResponse, [InternalServiceErrorException, InvalidRequestException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of running App Runner services in your Amazon Web Services account.
 */export const listServices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListServices" }, ListServicesRequest, ListServicesResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate your own domain name with the App Runner subdomain URL of your App Runner service.
 * 
 * After you call `AssociateCustomDomain` and receive a successful response, use the information in the CustomDomain record
 * that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
 * more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
 * domain validity in a certificate stored in AWS Certificate Manager (ACM).
 */export const associateCustomDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.AssociateCustomDomain" }, AssociateCustomDomainRequest, AssociateCustomDomainResponse, [InternalServiceErrorException, InvalidRequestException, InvalidStateException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require
 * non-default auto scaling settings. You can share an auto scaling configuration across multiple services.
 * 
 * Create multiple revisions of a configuration by calling this action multiple times using the same `AutoScalingConfigurationName`. The call
 * returns incremental `AutoScalingConfigurationRevision` values. When you create a service and configure an auto scaling configuration resource,
 * the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific
 * revision.
 * 
 * Configure a higher `MinSize` to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The
 * tradeoff is a higher minimal cost.
 * 
 * Configure a lower `MaxSize` to control your cost. The tradeoff is lower responsiveness during peak demand.
 */export const createAutoScalingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateAutoScalingConfiguration" }, CreateAutoScalingConfigurationRequest, CreateAutoScalingConfigurationResponse, [InternalServiceErrorException, InvalidRequestException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
 */export const listVpcIngressConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.ListVpcIngressConnections" }, ListVpcIngressConnectionsRequest, ListVpcIngressConnectionsResponse, [InternalServiceErrorException, InvalidRequestException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an App Runner service. After the service is created, the action also automatically starts a deployment.
 * 
 * This is an asynchronous operation. On a successful call, you can use the returned `OperationId` and the ListOperations call to track the operation's progress.
 */export const createService = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-05-15", sdkId: "AppRunner", sigV4ServiceName: "apprunner", name: "AppRunner.CreateService" }, CreateServiceRequest, CreateServiceResponse, [InternalServiceErrorException, InvalidRequestException, ServiceQuotaExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
