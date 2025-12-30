import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetServiceSettingsRequest extends S.Class<GetServiceSettingsRequest>("GetServiceSettingsRequest")({}) {}
export const StringList = S.Array(S.String);
export const SubscriptionProviderSourceList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeregisterSubscriptionProviderRequest extends S.Class<DeregisterSubscriptionProviderRequest>("DeregisterSubscriptionProviderRequest")({SubscriptionProviderArn: S.String}) {}
export class DeregisterSubscriptionProviderResponse extends S.Class<DeregisterSubscriptionProviderResponse>("DeregisterSubscriptionProviderResponse")({}) {}
export class GetRegisteredSubscriptionProviderRequest extends S.Class<GetRegisteredSubscriptionProviderRequest>("GetRegisteredSubscriptionProviderRequest")({SubscriptionProviderArn: S.String}) {}
export class Filter extends S.Class<Filter>("Filter")({Name: S.optional(S.String), Values: S.optional(StringList), Operator: S.optional(S.String)}) {}
export const FilterList = S.Array(Filter);
export class ListLinuxSubscriptionsRequest extends S.Class<ListLinuxSubscriptionsRequest>("ListLinuxSubscriptionsRequest")({Filters: S.optional(FilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRegisteredSubscriptionProvidersRequest extends S.Class<ListRegisteredSubscriptionProvidersRequest>("ListRegisteredSubscriptionProvidersRequest")({SubscriptionProviderSources: S.optional(SubscriptionProviderSourceList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class LinuxSubscriptionsDiscoverySettings extends S.Class<LinuxSubscriptionsDiscoverySettings>("LinuxSubscriptionsDiscoverySettings")({SourceRegions: StringList, OrganizationIntegration: S.String}) {}
export class UpdateServiceSettingsRequest extends S.Class<UpdateServiceSettingsRequest>("UpdateServiceSettingsRequest")({LinuxSubscriptionsDiscovery: S.String, LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings, AllowUpdate: S.optional(S.Boolean)}) {}
export const StringMap = S.Record({key: S.String, value: S.String});
export class GetRegisteredSubscriptionProviderResponse extends S.Class<GetRegisteredSubscriptionProviderResponse>("GetRegisteredSubscriptionProviderResponse")({SubscriptionProviderArn: S.optional(S.String), SubscriptionProviderSource: S.optional(S.String), SecretArn: S.optional(S.String), SubscriptionProviderStatus: S.optional(S.String), SubscriptionProviderStatusMessage: S.optional(S.String), LastSuccessfulDataRetrievalTime: S.optional(S.String)}) {}
export class GetServiceSettingsResponse extends S.Class<GetServiceSettingsResponse>("GetServiceSettingsResponse")({LinuxSubscriptionsDiscovery: S.optional(S.String), LinuxSubscriptionsDiscoverySettings: S.optional(LinuxSubscriptionsDiscoverySettings), Status: S.optional(S.String), StatusMessage: S.optional(StringMap), HomeRegions: S.optional(StringList)}) {}
export class ListLinuxSubscriptionInstancesRequest extends S.Class<ListLinuxSubscriptionInstancesRequest>("ListLinuxSubscriptionInstancesRequest")({Filters: S.optional(FilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class RegisterSubscriptionProviderRequest extends S.Class<RegisterSubscriptionProviderRequest>("RegisterSubscriptionProviderRequest")({SubscriptionProviderSource: S.String, SecretArn: S.String, Tags: S.optional(Tags)}) {}
export class UpdateServiceSettingsResponse extends S.Class<UpdateServiceSettingsResponse>("UpdateServiceSettingsResponse")({LinuxSubscriptionsDiscovery: S.optional(S.String), LinuxSubscriptionsDiscoverySettings: S.optional(LinuxSubscriptionsDiscoverySettings), Status: S.optional(S.String), StatusMessage: S.optional(StringMap), HomeRegions: S.optional(StringList)}) {}
export class Subscription extends S.Class<Subscription>("Subscription")({Name: S.optional(S.String), Type: S.optional(S.String), InstanceCount: S.optional(S.Number)}) {}
export const SubscriptionList = S.Array(Subscription);
export class RegisteredSubscriptionProvider extends S.Class<RegisteredSubscriptionProvider>("RegisteredSubscriptionProvider")({SubscriptionProviderArn: S.optional(S.String), SubscriptionProviderSource: S.optional(S.String), SecretArn: S.optional(S.String), SubscriptionProviderStatus: S.optional(S.String), SubscriptionProviderStatusMessage: S.optional(S.String), LastSuccessfulDataRetrievalTime: S.optional(S.String)}) {}
export const RegisteredSubscriptionProviderList = S.Array(RegisteredSubscriptionProvider);
export class ListLinuxSubscriptionsResponse extends S.Class<ListLinuxSubscriptionsResponse>("ListLinuxSubscriptionsResponse")({Subscriptions: S.optional(SubscriptionList), NextToken: S.optional(S.String)}) {}
export class ListRegisteredSubscriptionProvidersResponse extends S.Class<ListRegisteredSubscriptionProvidersResponse>("ListRegisteredSubscriptionProvidersResponse")({RegisteredSubscriptionProviders: S.optional(RegisteredSubscriptionProviderList), NextToken: S.optional(S.String)}) {}
export class RegisterSubscriptionProviderResponse extends S.Class<RegisterSubscriptionProviderResponse>("RegisterSubscriptionProviderResponse")({SubscriptionProviderSource: S.optional(S.String), SubscriptionProviderArn: S.optional(S.String), SubscriptionProviderStatus: S.optional(S.String)}) {}
export const ProductCodeList = S.Array(S.String);
export class Instance extends S.Class<Instance>("Instance")({AmiId: S.optional(S.String), InstanceID: S.optional(S.String), InstanceType: S.optional(S.String), AccountID: S.optional(S.String), Status: S.optional(S.String), Region: S.optional(S.String), UsageOperation: S.optional(S.String), ProductCode: S.optional(ProductCodeList), LastUpdatedTime: S.optional(S.String), SubscriptionName: S.optional(S.String), OsVersion: S.optional(S.String), SubscriptionProviderCreateTime: S.optional(S.String), SubscriptionProviderUpdateTime: S.optional(S.String), DualSubscription: S.optional(S.String), RegisteredWithSubscriptionProvider: S.optional(S.String)}) {}
export const InstanceList = S.Array(Instance);
export class ListLinuxSubscriptionInstancesResponse extends S.Class<ListLinuxSubscriptionInstancesResponse>("ListLinuxSubscriptionInstancesResponse")({Instances: S.optional(InstanceList), NextToken: S.optional(S.String)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Remove one or more metadata tag from the specified Amazon Web Services resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Linux subscriptions service settings for your account.
 */export const getServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/GetServiceSettings", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.GetServiceSettings" }, GetServiceSettingsRequest, GetServiceSettingsResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the metadata tags that are assigned to the
 * specified Amazon Web Services resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "GET", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add metadata tags to the specified Amazon Web Services resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "PUT", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the service settings for Linux subscriptions.
 */export const updateServiceSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/UpdateServiceSettings", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.UpdateServiceSettings" }, UpdateServiceSettingsRequest, UpdateServiceSettingsResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions
 * registered to your account.
 */export const deregisterSubscriptionProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/DeregisterSubscriptionProvider", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.DeregisterSubscriptionProvider" }, DeregisterSubscriptionProviderRequest, DeregisterSubscriptionProviderResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.
 */export const getRegisteredSubscriptionProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/GetRegisteredSubscriptionProvider", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.GetRegisteredSubscriptionProvider" }, GetRegisteredSubscriptionProviderRequest, GetRegisteredSubscriptionProviderResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Linux subscriptions that have been discovered. If you have linked your
 * organization, the returned results will include data aggregated across your accounts in
 * Organizations.
 */export const listLinuxSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/ListLinuxSubscriptions", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.ListLinuxSubscriptions" }, ListLinuxSubscriptionsRequest, ListLinuxSubscriptionsResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List Bring Your Own License (BYOL) subscription registration resources for your account.
 */export const listRegisteredSubscriptionProviders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/ListRegisteredSubscriptionProviders", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.ListRegisteredSubscriptionProviders" }, ListRegisteredSubscriptionProvidersRequest, ListRegisteredSubscriptionProvidersResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.
 */export const registerSubscriptionProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/RegisterSubscriptionProvider", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.RegisterSubscriptionProvider" }, RegisterSubscriptionProviderRequest, RegisterSubscriptionProviderResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the running Amazon EC2 instances that were discovered with commercial Linux
 * subscriptions.
 */export const listLinuxSubscriptionInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/subscription/ListLinuxSubscriptionInstances", sdkId: "License Manager Linux Subscriptions", sigV4ServiceName: "license-manager-linux-subscriptions", name: "LicenseManagerLinuxSubscriptions.ListLinuxSubscriptionInstances" }, ListLinuxSubscriptionInstancesRequest, ListLinuxSubscriptionInstancesResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
