import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountSettingsRequest extends S.Class<GetAccountSettingsRequest>("GetAccountSettingsRequest")({}) {}
export const PackageIds = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const InstanceLabels = S.Array(S.String);
export class CreateInstanceProfileRequest extends S.Class<CreateInstanceProfileRequest>("CreateInstanceProfileRequest")({name: S.String, description: S.optional(S.String), packageCleanup: S.optional(S.Boolean), excludeAppPackagesFromCleanup: S.optional(PackageIds), rebootAfterUse: S.optional(S.Boolean)}) {}
export class CreateNetworkProfileRequest extends S.Class<CreateNetworkProfileRequest>("CreateNetworkProfileRequest")({projectArn: S.String, name: S.String, description: S.optional(S.String), type: S.optional(S.String), uplinkBandwidthBits: S.optional(S.Number), downlinkBandwidthBits: S.optional(S.Number), uplinkDelayMs: S.optional(S.Number), downlinkDelayMs: S.optional(S.Number), uplinkJitterMs: S.optional(S.Number), downlinkJitterMs: S.optional(S.Number), uplinkLossPercent: S.optional(S.Number), downlinkLossPercent: S.optional(S.Number)}) {}
export class CreateTestGridUrlRequest extends S.Class<CreateTestGridUrlRequest>("CreateTestGridUrlRequest")({projectArn: S.String, expiresInSeconds: S.Number}) {}
export class CreateUploadRequest extends S.Class<CreateUploadRequest>("CreateUploadRequest")({projectArn: S.String, name: S.String, type: S.String, contentType: S.optional(S.String)}) {}
export class CreateVPCEConfigurationRequest extends S.Class<CreateVPCEConfigurationRequest>("CreateVPCEConfigurationRequest")({vpceConfigurationName: S.String, vpceServiceName: S.String, serviceDnsName: S.String, vpceConfigurationDescription: S.optional(S.String)}) {}
export class DeleteDevicePoolRequest extends S.Class<DeleteDevicePoolRequest>("DeleteDevicePoolRequest")({arn: S.String}) {}
export class DeleteDevicePoolResult extends S.Class<DeleteDevicePoolResult>("DeleteDevicePoolResult")({}) {}
export class DeleteInstanceProfileRequest extends S.Class<DeleteInstanceProfileRequest>("DeleteInstanceProfileRequest")({arn: S.String}) {}
export class DeleteInstanceProfileResult extends S.Class<DeleteInstanceProfileResult>("DeleteInstanceProfileResult")({}) {}
export class DeleteNetworkProfileRequest extends S.Class<DeleteNetworkProfileRequest>("DeleteNetworkProfileRequest")({arn: S.String}) {}
export class DeleteNetworkProfileResult extends S.Class<DeleteNetworkProfileResult>("DeleteNetworkProfileResult")({}) {}
export class DeleteProjectRequest extends S.Class<DeleteProjectRequest>("DeleteProjectRequest")({arn: S.String}) {}
export class DeleteProjectResult extends S.Class<DeleteProjectResult>("DeleteProjectResult")({}) {}
export class DeleteRemoteAccessSessionRequest extends S.Class<DeleteRemoteAccessSessionRequest>("DeleteRemoteAccessSessionRequest")({arn: S.String}) {}
export class DeleteRemoteAccessSessionResult extends S.Class<DeleteRemoteAccessSessionResult>("DeleteRemoteAccessSessionResult")({}) {}
export class DeleteRunRequest extends S.Class<DeleteRunRequest>("DeleteRunRequest")({arn: S.String}) {}
export class DeleteRunResult extends S.Class<DeleteRunResult>("DeleteRunResult")({}) {}
export class DeleteTestGridProjectRequest extends S.Class<DeleteTestGridProjectRequest>("DeleteTestGridProjectRequest")({projectArn: S.String}) {}
export class DeleteTestGridProjectResult extends S.Class<DeleteTestGridProjectResult>("DeleteTestGridProjectResult")({}) {}
export class DeleteUploadRequest extends S.Class<DeleteUploadRequest>("DeleteUploadRequest")({arn: S.String}) {}
export class DeleteUploadResult extends S.Class<DeleteUploadResult>("DeleteUploadResult")({}) {}
export class DeleteVPCEConfigurationRequest extends S.Class<DeleteVPCEConfigurationRequest>("DeleteVPCEConfigurationRequest")({arn: S.String}) {}
export class DeleteVPCEConfigurationResult extends S.Class<DeleteVPCEConfigurationResult>("DeleteVPCEConfigurationResult")({}) {}
export class GetDeviceRequest extends S.Class<GetDeviceRequest>("GetDeviceRequest")({arn: S.String}) {}
export class GetDeviceInstanceRequest extends S.Class<GetDeviceInstanceRequest>("GetDeviceInstanceRequest")({arn: S.String}) {}
export class GetDevicePoolRequest extends S.Class<GetDevicePoolRequest>("GetDevicePoolRequest")({arn: S.String}) {}
export class GetInstanceProfileRequest extends S.Class<GetInstanceProfileRequest>("GetInstanceProfileRequest")({arn: S.String}) {}
export class GetJobRequest extends S.Class<GetJobRequest>("GetJobRequest")({arn: S.String}) {}
export class GetNetworkProfileRequest extends S.Class<GetNetworkProfileRequest>("GetNetworkProfileRequest")({arn: S.String}) {}
export class GetOfferingStatusRequest extends S.Class<GetOfferingStatusRequest>("GetOfferingStatusRequest")({nextToken: S.optional(S.String)}) {}
export class GetProjectRequest extends S.Class<GetProjectRequest>("GetProjectRequest")({arn: S.String}) {}
export class GetRemoteAccessSessionRequest extends S.Class<GetRemoteAccessSessionRequest>("GetRemoteAccessSessionRequest")({arn: S.String}) {}
export class GetRunRequest extends S.Class<GetRunRequest>("GetRunRequest")({arn: S.String}) {}
export class GetSuiteRequest extends S.Class<GetSuiteRequest>("GetSuiteRequest")({arn: S.String}) {}
export class GetTestRequest extends S.Class<GetTestRequest>("GetTestRequest")({arn: S.String}) {}
export class GetTestGridProjectRequest extends S.Class<GetTestGridProjectRequest>("GetTestGridProjectRequest")({projectArn: S.String}) {}
export class GetTestGridSessionRequest extends S.Class<GetTestGridSessionRequest>("GetTestGridSessionRequest")({projectArn: S.optional(S.String), sessionId: S.optional(S.String), sessionArn: S.optional(S.String)}) {}
export class GetUploadRequest extends S.Class<GetUploadRequest>("GetUploadRequest")({arn: S.String}) {}
export class GetVPCEConfigurationRequest extends S.Class<GetVPCEConfigurationRequest>("GetVPCEConfigurationRequest")({arn: S.String}) {}
export class InstallToRemoteAccessSessionRequest extends S.Class<InstallToRemoteAccessSessionRequest>("InstallToRemoteAccessSessionRequest")({remoteAccessSessionArn: S.String, appArn: S.String}) {}
export class ListArtifactsRequest extends S.Class<ListArtifactsRequest>("ListArtifactsRequest")({arn: S.String, type: S.String, nextToken: S.optional(S.String)}) {}
export class ListDeviceInstancesRequest extends S.Class<ListDeviceInstancesRequest>("ListDeviceInstancesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListDevicePoolsRequest extends S.Class<ListDevicePoolsRequest>("ListDevicePoolsRequest")({arn: S.String, type: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListInstanceProfilesRequest extends S.Class<ListInstanceProfilesRequest>("ListInstanceProfilesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListJobsRequest extends S.Class<ListJobsRequest>("ListJobsRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListNetworkProfilesRequest extends S.Class<ListNetworkProfilesRequest>("ListNetworkProfilesRequest")({arn: S.String, type: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListOfferingPromotionsRequest extends S.Class<ListOfferingPromotionsRequest>("ListOfferingPromotionsRequest")({nextToken: S.optional(S.String)}) {}
export class ListOfferingsRequest extends S.Class<ListOfferingsRequest>("ListOfferingsRequest")({nextToken: S.optional(S.String)}) {}
export class ListOfferingTransactionsRequest extends S.Class<ListOfferingTransactionsRequest>("ListOfferingTransactionsRequest")({nextToken: S.optional(S.String)}) {}
export class ListProjectsRequest extends S.Class<ListProjectsRequest>("ListProjectsRequest")({arn: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListRemoteAccessSessionsRequest extends S.Class<ListRemoteAccessSessionsRequest>("ListRemoteAccessSessionsRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListRunsRequest extends S.Class<ListRunsRequest>("ListRunsRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListSamplesRequest extends S.Class<ListSamplesRequest>("ListSamplesRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListSuitesRequest extends S.Class<ListSuitesRequest>("ListSuitesRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class ListTestGridProjectsRequest extends S.Class<ListTestGridProjectsRequest>("ListTestGridProjectsRequest")({maxResult: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionActionsRequest extends S.Class<ListTestGridSessionActionsRequest>("ListTestGridSessionActionsRequest")({sessionArn: S.String, maxResult: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionArtifactsRequest extends S.Class<ListTestGridSessionArtifactsRequest>("ListTestGridSessionArtifactsRequest")({sessionArn: S.String, type: S.optional(S.String), maxResult: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionsRequest extends S.Class<ListTestGridSessionsRequest>("ListTestGridSessionsRequest")({projectArn: S.String, status: S.optional(S.String), creationTimeAfter: S.optional(S.Date), creationTimeBefore: S.optional(S.Date), endTimeAfter: S.optional(S.Date), endTimeBefore: S.optional(S.Date), maxResult: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTestsRequest extends S.Class<ListTestsRequest>("ListTestsRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListUniqueProblemsRequest extends S.Class<ListUniqueProblemsRequest>("ListUniqueProblemsRequest")({arn: S.String, nextToken: S.optional(S.String)}) {}
export class ListUploadsRequest extends S.Class<ListUploadsRequest>("ListUploadsRequest")({arn: S.String, type: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListVPCEConfigurationsRequest extends S.Class<ListVPCEConfigurationsRequest>("ListVPCEConfigurationsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class PurchaseOfferingRequest extends S.Class<PurchaseOfferingRequest>("PurchaseOfferingRequest")({offeringId: S.String, quantity: S.Number, offeringPromotionId: S.optional(S.String)}) {}
export class RenewOfferingRequest extends S.Class<RenewOfferingRequest>("RenewOfferingRequest")({offeringId: S.String, quantity: S.Number}) {}
export class StopJobRequest extends S.Class<StopJobRequest>("StopJobRequest")({arn: S.String}) {}
export class StopRemoteAccessSessionRequest extends S.Class<StopRemoteAccessSessionRequest>("StopRemoteAccessSessionRequest")({arn: S.String}) {}
export class StopRunRequest extends S.Class<StopRunRequest>("StopRunRequest")({arn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDeviceInstanceRequest extends S.Class<UpdateDeviceInstanceRequest>("UpdateDeviceInstanceRequest")({arn: S.String, profileArn: S.optional(S.String), labels: S.optional(InstanceLabels)}) {}
export class Rule extends S.Class<Rule>("Rule")({attribute: S.optional(S.String), operator: S.optional(S.String), value: S.optional(S.String)}) {}
export const Rules = S.Array(Rule);
export class UpdateDevicePoolRequest extends S.Class<UpdateDevicePoolRequest>("UpdateDevicePoolRequest")({arn: S.String, name: S.optional(S.String), description: S.optional(S.String), rules: S.optional(Rules), maxDevices: S.optional(S.Number), clearMaxDevices: S.optional(S.Boolean)}) {}
export class UpdateInstanceProfileRequest extends S.Class<UpdateInstanceProfileRequest>("UpdateInstanceProfileRequest")({arn: S.String, name: S.optional(S.String), description: S.optional(S.String), packageCleanup: S.optional(S.Boolean), excludeAppPackagesFromCleanup: S.optional(PackageIds), rebootAfterUse: S.optional(S.Boolean)}) {}
export class UpdateNetworkProfileRequest extends S.Class<UpdateNetworkProfileRequest>("UpdateNetworkProfileRequest")({arn: S.String, name: S.optional(S.String), description: S.optional(S.String), type: S.optional(S.String), uplinkBandwidthBits: S.optional(S.Number), downlinkBandwidthBits: S.optional(S.Number), uplinkDelayMs: S.optional(S.Number), downlinkDelayMs: S.optional(S.Number), uplinkJitterMs: S.optional(S.Number), downlinkJitterMs: S.optional(S.Number), uplinkLossPercent: S.optional(S.Number), downlinkLossPercent: S.optional(S.Number)}) {}
export const VpcSecurityGroupIds = S.Array(S.String);
export const VpcSubnetIds = S.Array(S.String);
export class VpcConfig extends S.Class<VpcConfig>("VpcConfig")({securityGroupIds: VpcSecurityGroupIds, subnetIds: VpcSubnetIds, vpcId: S.String}) {}
export class EnvironmentVariable extends S.Class<EnvironmentVariable>("EnvironmentVariable")({name: S.String, value: S.String}) {}
export const EnvironmentVariables = S.Array(EnvironmentVariable);
export class UpdateProjectRequest extends S.Class<UpdateProjectRequest>("UpdateProjectRequest")({arn: S.String, name: S.optional(S.String), defaultJobTimeoutMinutes: S.optional(S.Number), vpcConfig: S.optional(VpcConfig), environmentVariables: S.optional(EnvironmentVariables), executionRoleArn: S.optional(S.String)}) {}
export const SecurityGroupIds = S.Array(S.String);
export const SubnetIds = S.Array(S.String);
export class TestGridVpcConfig extends S.Class<TestGridVpcConfig>("TestGridVpcConfig")({securityGroupIds: SecurityGroupIds, subnetIds: SubnetIds, vpcId: S.String}) {}
export class UpdateTestGridProjectRequest extends S.Class<UpdateTestGridProjectRequest>("UpdateTestGridProjectRequest")({projectArn: S.String, name: S.optional(S.String), description: S.optional(S.String), vpcConfig: S.optional(TestGridVpcConfig)}) {}
export class UpdateUploadRequest extends S.Class<UpdateUploadRequest>("UpdateUploadRequest")({arn: S.String, name: S.optional(S.String), contentType: S.optional(S.String), editContent: S.optional(S.Boolean)}) {}
export class UpdateVPCEConfigurationRequest extends S.Class<UpdateVPCEConfigurationRequest>("UpdateVPCEConfigurationRequest")({arn: S.String, vpceConfigurationName: S.optional(S.String), vpceServiceName: S.optional(S.String), serviceDnsName: S.optional(S.String), vpceConfigurationDescription: S.optional(S.String)}) {}
export const AuxiliaryAppArnList = S.Array(S.String);
export const AmazonResourceNames = S.Array(S.String);
export const DeviceFilterValues = S.Array(S.String);
export class InstanceProfile extends S.Class<InstanceProfile>("InstanceProfile")({arn: S.optional(S.String), packageCleanup: S.optional(S.Boolean), excludeAppPackagesFromCleanup: S.optional(PackageIds), rebootAfterUse: S.optional(S.Boolean), name: S.optional(S.String), description: S.optional(S.String)}) {}
export class DeviceInstance extends S.Class<DeviceInstance>("DeviceInstance")({arn: S.optional(S.String), deviceArn: S.optional(S.String), labels: S.optional(InstanceLabels), status: S.optional(S.String), udid: S.optional(S.String), instanceProfile: S.optional(InstanceProfile)}) {}
export const DeviceInstances = S.Array(DeviceInstance);
export class DevicePool extends S.Class<DevicePool>("DevicePool")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), type: S.optional(S.String), rules: S.optional(Rules), maxDevices: S.optional(S.Number)}) {}
export const DevicePools = S.Array(DevicePool);
export class DeviceFilter extends S.Class<DeviceFilter>("DeviceFilter")({attribute: S.String, operator: S.String, values: DeviceFilterValues}) {}
export const DeviceFilters = S.Array(DeviceFilter);
export const InstanceProfiles = S.Array(InstanceProfile);
export class Counters extends S.Class<Counters>("Counters")({total: S.optional(S.Number), passed: S.optional(S.Number), failed: S.optional(S.Number), warned: S.optional(S.Number), errored: S.optional(S.Number), stopped: S.optional(S.Number), skipped: S.optional(S.Number)}) {}
export class CPU extends S.Class<CPU>("CPU")({frequency: S.optional(S.String), architecture: S.optional(S.String), clock: S.optional(S.Number)}) {}
export class Resolution extends S.Class<Resolution>("Resolution")({width: S.optional(S.Number), height: S.optional(S.Number)}) {}
export class Device extends S.Class<Device>("Device")({arn: S.optional(S.String), name: S.optional(S.String), manufacturer: S.optional(S.String), model: S.optional(S.String), modelId: S.optional(S.String), formFactor: S.optional(S.String), platform: S.optional(S.String), os: S.optional(S.String), cpu: S.optional(CPU), resolution: S.optional(Resolution), heapSize: S.optional(S.Number), memory: S.optional(S.Number), image: S.optional(S.String), carrier: S.optional(S.String), radio: S.optional(S.String), remoteAccessEnabled: S.optional(S.Boolean), remoteDebugEnabled: S.optional(S.Boolean), fleetType: S.optional(S.String), fleetName: S.optional(S.String), instances: S.optional(DeviceInstances), availability: S.optional(S.String)}) {}
export class DeviceMinutes extends S.Class<DeviceMinutes>("DeviceMinutes")({total: S.optional(S.Number), metered: S.optional(S.Number), unmetered: S.optional(S.Number)}) {}
export class Job extends S.Class<Job>("Job")({arn: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), created: S.optional(S.Date), status: S.optional(S.String), result: S.optional(S.String), started: S.optional(S.Date), stopped: S.optional(S.Date), counters: S.optional(Counters), message: S.optional(S.String), device: S.optional(Device), instanceArn: S.optional(S.String), deviceMinutes: S.optional(DeviceMinutes), videoEndpoint: S.optional(S.String), videoCapture: S.optional(S.Boolean)}) {}
export const Jobs = S.Array(Job);
export class NetworkProfile extends S.Class<NetworkProfile>("NetworkProfile")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), type: S.optional(S.String), uplinkBandwidthBits: S.optional(S.Number), downlinkBandwidthBits: S.optional(S.Number), uplinkDelayMs: S.optional(S.Number), downlinkDelayMs: S.optional(S.Number), uplinkJitterMs: S.optional(S.Number), downlinkJitterMs: S.optional(S.Number), uplinkLossPercent: S.optional(S.Number), downlinkLossPercent: S.optional(S.Number)}) {}
export const NetworkProfiles = S.Array(NetworkProfile);
export class Project extends S.Class<Project>("Project")({arn: S.optional(S.String), name: S.optional(S.String), defaultJobTimeoutMinutes: S.optional(S.Number), created: S.optional(S.Date), vpcConfig: S.optional(VpcConfig), environmentVariables: S.optional(EnvironmentVariables), executionRoleArn: S.optional(S.String)}) {}
export const Projects = S.Array(Project);
export class DeviceProxy extends S.Class<DeviceProxy>("DeviceProxy")({host: S.String, port: S.Number}) {}
export class RemoteAccessEndpoints extends S.Class<RemoteAccessEndpoints>("RemoteAccessEndpoints")({remoteDriverEndpoint: S.optional(S.String), interactiveEndpoint: S.optional(S.String)}) {}
export class RemoteAccessSession extends S.Class<RemoteAccessSession>("RemoteAccessSession")({arn: S.optional(S.String), name: S.optional(S.String), created: S.optional(S.Date), status: S.optional(S.String), result: S.optional(S.String), message: S.optional(S.String), started: S.optional(S.Date), stopped: S.optional(S.Date), device: S.optional(Device), instanceArn: S.optional(S.String), billingMethod: S.optional(S.String), deviceMinutes: S.optional(DeviceMinutes), endpoint: S.optional(S.String), deviceUdid: S.optional(S.String), interactionMode: S.optional(S.String), skipAppResign: S.optional(S.Boolean), vpcConfig: S.optional(VpcConfig), deviceProxy: S.optional(DeviceProxy), appUpload: S.optional(S.String), endpoints: S.optional(RemoteAccessEndpoints)}) {}
export const RemoteAccessSessions = S.Array(RemoteAccessSession);
export class Radios extends S.Class<Radios>("Radios")({wifi: S.optional(S.Boolean), bluetooth: S.optional(S.Boolean), nfc: S.optional(S.Boolean), gps: S.optional(S.Boolean)}) {}
export class Location extends S.Class<Location>("Location")({latitude: S.Number, longitude: S.Number}) {}
export const IosPaths = S.Array(S.String);
export const AndroidPaths = S.Array(S.String);
export const DeviceHostPaths = S.Array(S.String);
export class CustomerArtifactPaths extends S.Class<CustomerArtifactPaths>("CustomerArtifactPaths")({iosPaths: S.optional(IosPaths), androidPaths: S.optional(AndroidPaths), deviceHostPaths: S.optional(DeviceHostPaths)}) {}
export class DeviceSelectionResult extends S.Class<DeviceSelectionResult>("DeviceSelectionResult")({filters: S.optional(DeviceFilters), matchedDevicesCount: S.optional(S.Number), maxDevices: S.optional(S.Number)}) {}
export class Run extends S.Class<Run>("Run")({arn: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), platform: S.optional(S.String), created: S.optional(S.Date), status: S.optional(S.String), result: S.optional(S.String), started: S.optional(S.Date), stopped: S.optional(S.Date), counters: S.optional(Counters), message: S.optional(S.String), totalJobs: S.optional(S.Number), completedJobs: S.optional(S.Number), billingMethod: S.optional(S.String), deviceMinutes: S.optional(DeviceMinutes), networkProfile: S.optional(NetworkProfile), deviceProxy: S.optional(DeviceProxy), parsingResultUrl: S.optional(S.String), resultCode: S.optional(S.String), seed: S.optional(S.Number), appUpload: S.optional(S.String), eventCount: S.optional(S.Number), jobTimeoutMinutes: S.optional(S.Number), devicePoolArn: S.optional(S.String), locale: S.optional(S.String), radios: S.optional(Radios), location: S.optional(Location), customerArtifactPaths: S.optional(CustomerArtifactPaths), webUrl: S.optional(S.String), skipAppResign: S.optional(S.Boolean), testSpecArn: S.optional(S.String), deviceSelectionResult: S.optional(DeviceSelectionResult), vpcConfig: S.optional(VpcConfig), executionRoleArn: S.optional(S.String), environmentVariables: S.optional(EnvironmentVariables)}) {}
export const Runs = S.Array(Run);
export class Suite extends S.Class<Suite>("Suite")({arn: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), created: S.optional(S.Date), status: S.optional(S.String), result: S.optional(S.String), started: S.optional(S.Date), stopped: S.optional(S.Date), counters: S.optional(Counters), message: S.optional(S.String), deviceMinutes: S.optional(DeviceMinutes)}) {}
export const Suites = S.Array(Suite);
export class TestGridProject extends S.Class<TestGridProject>("TestGridProject")({arn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), vpcConfig: S.optional(TestGridVpcConfig), created: S.optional(S.Date)}) {}
export const TestGridProjects = S.Array(TestGridProject);
export class TestGridSession extends S.Class<TestGridSession>("TestGridSession")({arn: S.optional(S.String), status: S.optional(S.String), created: S.optional(S.Date), ended: S.optional(S.Date), billingMinutes: S.optional(S.Number), seleniumProperties: S.optional(S.String)}) {}
export const TestGridSessions = S.Array(TestGridSession);
export class Test extends S.Class<Test>("Test")({arn: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), created: S.optional(S.Date), status: S.optional(S.String), result: S.optional(S.String), started: S.optional(S.Date), stopped: S.optional(S.Date), counters: S.optional(Counters), message: S.optional(S.String), deviceMinutes: S.optional(DeviceMinutes)}) {}
export const Tests = S.Array(Test);
export class Upload extends S.Class<Upload>("Upload")({arn: S.optional(S.String), name: S.optional(S.String), created: S.optional(S.Date), type: S.optional(S.String), status: S.optional(S.String), url: S.optional(S.String), metadata: S.optional(S.String), contentType: S.optional(S.String), message: S.optional(S.String), category: S.optional(S.String)}) {}
export const Uploads = S.Array(Upload);
export class VPCEConfiguration extends S.Class<VPCEConfiguration>("VPCEConfiguration")({arn: S.optional(S.String), vpceConfigurationName: S.optional(S.String), vpceServiceName: S.optional(S.String), serviceDnsName: S.optional(S.String), vpceConfigurationDescription: S.optional(S.String)}) {}
export const VPCEConfigurations = S.Array(VPCEConfiguration);
export class DeviceSelectionConfiguration extends S.Class<DeviceSelectionConfiguration>("DeviceSelectionConfiguration")({filters: DeviceFilters, maxDevices: S.Number}) {}
export class ExecutionConfiguration extends S.Class<ExecutionConfiguration>("ExecutionConfiguration")({jobTimeoutMinutes: S.optional(S.Number), accountsCleanup: S.optional(S.Boolean), appPackagesCleanup: S.optional(S.Boolean), videoCapture: S.optional(S.Boolean), skipAppResign: S.optional(S.Boolean)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateDevicePoolRequest extends S.Class<CreateDevicePoolRequest>("CreateDevicePoolRequest")({projectArn: S.String, name: S.String, description: S.optional(S.String), rules: Rules, maxDevices: S.optional(S.Number)}) {}
export class CreateProjectRequest extends S.Class<CreateProjectRequest>("CreateProjectRequest")({name: S.String, defaultJobTimeoutMinutes: S.optional(S.Number), vpcConfig: S.optional(VpcConfig), environmentVariables: S.optional(EnvironmentVariables), executionRoleArn: S.optional(S.String)}) {}
export class CreateTestGridProjectRequest extends S.Class<CreateTestGridProjectRequest>("CreateTestGridProjectRequest")({name: S.String, description: S.optional(S.String), vpcConfig: S.optional(TestGridVpcConfig)}) {}
export class CreateTestGridUrlResult extends S.Class<CreateTestGridUrlResult>("CreateTestGridUrlResult")({url: S.optional(S.String), expires: S.optional(S.Date)}) {}
export class GetInstanceProfileResult extends S.Class<GetInstanceProfileResult>("GetInstanceProfileResult")({instanceProfile: S.optional(InstanceProfile)}) {}
export class GetNetworkProfileResult extends S.Class<GetNetworkProfileResult>("GetNetworkProfileResult")({networkProfile: S.optional(NetworkProfile)}) {}
export class GetUploadResult extends S.Class<GetUploadResult>("GetUploadResult")({upload: S.optional(Upload)}) {}
export class GetVPCEConfigurationResult extends S.Class<GetVPCEConfigurationResult>("GetVPCEConfigurationResult")({vpceConfiguration: S.optional(VPCEConfiguration)}) {}
export class InstallToRemoteAccessSessionResult extends S.Class<InstallToRemoteAccessSessionResult>("InstallToRemoteAccessSessionResult")({appUpload: S.optional(Upload)}) {}
export class ListDeviceInstancesResult extends S.Class<ListDeviceInstancesResult>("ListDeviceInstancesResult")({deviceInstances: S.optional(DeviceInstances), nextToken: S.optional(S.String)}) {}
export class ListDevicePoolsResult extends S.Class<ListDevicePoolsResult>("ListDevicePoolsResult")({devicePools: S.optional(DevicePools), nextToken: S.optional(S.String)}) {}
export class ListDevicesRequest extends S.Class<ListDevicesRequest>("ListDevicesRequest")({arn: S.optional(S.String), nextToken: S.optional(S.String), filters: S.optional(DeviceFilters)}) {}
export class ListInstanceProfilesResult extends S.Class<ListInstanceProfilesResult>("ListInstanceProfilesResult")({instanceProfiles: S.optional(InstanceProfiles), nextToken: S.optional(S.String)}) {}
export class ListJobsResult extends S.Class<ListJobsResult>("ListJobsResult")({jobs: S.optional(Jobs), nextToken: S.optional(S.String)}) {}
export class ListNetworkProfilesResult extends S.Class<ListNetworkProfilesResult>("ListNetworkProfilesResult")({networkProfiles: S.optional(NetworkProfiles), nextToken: S.optional(S.String)}) {}
export class ListProjectsResult extends S.Class<ListProjectsResult>("ListProjectsResult")({projects: S.optional(Projects), nextToken: S.optional(S.String)}) {}
export class ListRemoteAccessSessionsResult extends S.Class<ListRemoteAccessSessionsResult>("ListRemoteAccessSessionsResult")({remoteAccessSessions: S.optional(RemoteAccessSessions), nextToken: S.optional(S.String)}) {}
export class ListRunsResult extends S.Class<ListRunsResult>("ListRunsResult")({runs: S.optional(Runs), nextToken: S.optional(S.String)}) {}
export class ListSuitesResult extends S.Class<ListSuitesResult>("ListSuitesResult")({suites: S.optional(Suites), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class ListTestGridProjectsResult extends S.Class<ListTestGridProjectsResult>("ListTestGridProjectsResult")({testGridProjects: S.optional(TestGridProjects), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionsResult extends S.Class<ListTestGridSessionsResult>("ListTestGridSessionsResult")({testGridSessions: S.optional(TestGridSessions), nextToken: S.optional(S.String)}) {}
export class ListTestsResult extends S.Class<ListTestsResult>("ListTestsResult")({tests: S.optional(Tests), nextToken: S.optional(S.String)}) {}
export class ListUploadsResult extends S.Class<ListUploadsResult>("ListUploadsResult")({uploads: S.optional(Uploads), nextToken: S.optional(S.String)}) {}
export class ListVPCEConfigurationsResult extends S.Class<ListVPCEConfigurationsResult>("ListVPCEConfigurationsResult")({vpceConfigurations: S.optional(VPCEConfigurations), nextToken: S.optional(S.String)}) {}
export class MonetaryAmount extends S.Class<MonetaryAmount>("MonetaryAmount")({amount: S.optional(S.Number), currencyCode: S.optional(S.String)}) {}
export class RecurringCharge extends S.Class<RecurringCharge>("RecurringCharge")({cost: S.optional(MonetaryAmount), frequency: S.optional(S.String)}) {}
export const RecurringCharges = S.Array(RecurringCharge);
export class Offering extends S.Class<Offering>("Offering")({id: S.optional(S.String), description: S.optional(S.String), type: S.optional(S.String), platform: S.optional(S.String), recurringCharges: S.optional(RecurringCharges)}) {}
export class OfferingStatus extends S.Class<OfferingStatus>("OfferingStatus")({type: S.optional(S.String), offering: S.optional(Offering), quantity: S.optional(S.Number), effectiveOn: S.optional(S.Date)}) {}
export class OfferingTransaction extends S.Class<OfferingTransaction>("OfferingTransaction")({offeringStatus: S.optional(OfferingStatus), transactionId: S.optional(S.String), offeringPromotionId: S.optional(S.String), createdOn: S.optional(S.Date), cost: S.optional(MonetaryAmount)}) {}
export class PurchaseOfferingResult extends S.Class<PurchaseOfferingResult>("PurchaseOfferingResult")({offeringTransaction: S.optional(OfferingTransaction)}) {}
export class RenewOfferingResult extends S.Class<RenewOfferingResult>("RenewOfferingResult")({offeringTransaction: S.optional(OfferingTransaction)}) {}
export const TestParameters = S.Record({key: S.String, value: S.String});
export class ScheduleRunTest extends S.Class<ScheduleRunTest>("ScheduleRunTest")({type: S.String, testPackageArn: S.optional(S.String), testSpecArn: S.optional(S.String), filter: S.optional(S.String), parameters: S.optional(TestParameters)}) {}
export class ScheduleRunConfiguration extends S.Class<ScheduleRunConfiguration>("ScheduleRunConfiguration")({extraDataPackageArn: S.optional(S.String), networkProfileArn: S.optional(S.String), locale: S.optional(S.String), location: S.optional(Location), vpceConfigurationArns: S.optional(AmazonResourceNames), deviceProxy: S.optional(DeviceProxy), customerArtifactPaths: S.optional(CustomerArtifactPaths), radios: S.optional(Radios), auxiliaryApps: S.optional(AmazonResourceNames), billingMethod: S.optional(S.String), environmentVariables: S.optional(EnvironmentVariables), executionRoleArn: S.optional(S.String)}) {}
export class ScheduleRunRequest extends S.Class<ScheduleRunRequest>("ScheduleRunRequest")({projectArn: S.String, appArn: S.optional(S.String), devicePoolArn: S.optional(S.String), deviceSelectionConfiguration: S.optional(DeviceSelectionConfiguration), name: S.optional(S.String), test: ScheduleRunTest, configuration: S.optional(ScheduleRunConfiguration), executionConfiguration: S.optional(ExecutionConfiguration)}) {}
export class StopJobResult extends S.Class<StopJobResult>("StopJobResult")({job: S.optional(Job)}) {}
export class StopRemoteAccessSessionResult extends S.Class<StopRemoteAccessSessionResult>("StopRemoteAccessSessionResult")({remoteAccessSession: S.optional(RemoteAccessSession)}) {}
export class StopRunResult extends S.Class<StopRunResult>("StopRunResult")({run: S.optional(Run)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UpdateDeviceInstanceResult extends S.Class<UpdateDeviceInstanceResult>("UpdateDeviceInstanceResult")({deviceInstance: S.optional(DeviceInstance)}) {}
export class UpdateDevicePoolResult extends S.Class<UpdateDevicePoolResult>("UpdateDevicePoolResult")({devicePool: S.optional(DevicePool)}) {}
export class UpdateInstanceProfileResult extends S.Class<UpdateInstanceProfileResult>("UpdateInstanceProfileResult")({instanceProfile: S.optional(InstanceProfile)}) {}
export class UpdateNetworkProfileResult extends S.Class<UpdateNetworkProfileResult>("UpdateNetworkProfileResult")({networkProfile: S.optional(NetworkProfile)}) {}
export class UpdateProjectResult extends S.Class<UpdateProjectResult>("UpdateProjectResult")({project: S.optional(Project)}) {}
export class UpdateTestGridProjectResult extends S.Class<UpdateTestGridProjectResult>("UpdateTestGridProjectResult")({testGridProject: S.optional(TestGridProject)}) {}
export class UpdateUploadResult extends S.Class<UpdateUploadResult>("UpdateUploadResult")({upload: S.optional(Upload)}) {}
export class UpdateVPCEConfigurationResult extends S.Class<UpdateVPCEConfigurationResult>("UpdateVPCEConfigurationResult")({vpceConfiguration: S.optional(VPCEConfiguration)}) {}
export const PurchasedDevicesMap = S.Record({key: S.String, value: S.Number});
export class TrialMinutes extends S.Class<TrialMinutes>("TrialMinutes")({total: S.optional(S.Number), remaining: S.optional(S.Number)}) {}
export const MaxSlotMap = S.Record({key: S.String, value: S.Number});
export class CreateRemoteAccessSessionConfiguration extends S.Class<CreateRemoteAccessSessionConfiguration>("CreateRemoteAccessSessionConfiguration")({auxiliaryApps: S.optional(AuxiliaryAppArnList), billingMethod: S.optional(S.String), vpceConfigurationArns: S.optional(AmazonResourceNames), deviceProxy: S.optional(DeviceProxy)}) {}
export class AccountSettings extends S.Class<AccountSettings>("AccountSettings")({awsAccountNumber: S.optional(S.String), unmeteredDevices: S.optional(PurchasedDevicesMap), unmeteredRemoteAccessDevices: S.optional(PurchasedDevicesMap), maxJobTimeoutMinutes: S.optional(S.Number), trialMinutes: S.optional(TrialMinutes), maxSlots: S.optional(MaxSlotMap), defaultJobTimeoutMinutes: S.optional(S.Number), skipAppResign: S.optional(S.Boolean)}) {}
export class Artifact extends S.Class<Artifact>("Artifact")({arn: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), extension: S.optional(S.String), url: S.optional(S.String)}) {}
export const Artifacts = S.Array(Artifact);
export const Devices = S.Array(Device);
export class OfferingPromotion extends S.Class<OfferingPromotion>("OfferingPromotion")({id: S.optional(S.String), description: S.optional(S.String)}) {}
export const OfferingPromotions = S.Array(OfferingPromotion);
export class Sample extends S.Class<Sample>("Sample")({arn: S.optional(S.String), type: S.optional(S.String), url: S.optional(S.String)}) {}
export const Samples = S.Array(Sample);
export class TestGridSessionAction extends S.Class<TestGridSessionAction>("TestGridSessionAction")({action: S.optional(S.String), started: S.optional(S.Date), duration: S.optional(S.Number), statusCode: S.optional(S.String), requestMethod: S.optional(S.String)}) {}
export const TestGridSessionActions = S.Array(TestGridSessionAction);
export class TestGridSessionArtifact extends S.Class<TestGridSessionArtifact>("TestGridSessionArtifact")({filename: S.optional(S.String), type: S.optional(S.String), url: S.optional(S.String)}) {}
export const TestGridSessionArtifacts = S.Array(TestGridSessionArtifact);
export class CreateDevicePoolResult extends S.Class<CreateDevicePoolResult>("CreateDevicePoolResult")({devicePool: S.optional(DevicePool)}) {}
export class CreateInstanceProfileResult extends S.Class<CreateInstanceProfileResult>("CreateInstanceProfileResult")({instanceProfile: S.optional(InstanceProfile)}) {}
export class CreateNetworkProfileResult extends S.Class<CreateNetworkProfileResult>("CreateNetworkProfileResult")({networkProfile: S.optional(NetworkProfile)}) {}
export class CreateProjectResult extends S.Class<CreateProjectResult>("CreateProjectResult")({project: S.optional(Project)}) {}
export class CreateRemoteAccessSessionRequest extends S.Class<CreateRemoteAccessSessionRequest>("CreateRemoteAccessSessionRequest")({projectArn: S.String, deviceArn: S.String, appArn: S.optional(S.String), instanceArn: S.optional(S.String), name: S.optional(S.String), configuration: S.optional(CreateRemoteAccessSessionConfiguration), interactionMode: S.optional(S.String), skipAppResign: S.optional(S.Boolean)}) {}
export class CreateTestGridProjectResult extends S.Class<CreateTestGridProjectResult>("CreateTestGridProjectResult")({testGridProject: S.optional(TestGridProject)}) {}
export class CreateUploadResult extends S.Class<CreateUploadResult>("CreateUploadResult")({upload: S.optional(Upload)}) {}
export class CreateVPCEConfigurationResult extends S.Class<CreateVPCEConfigurationResult>("CreateVPCEConfigurationResult")({vpceConfiguration: S.optional(VPCEConfiguration)}) {}
export class GetAccountSettingsResult extends S.Class<GetAccountSettingsResult>("GetAccountSettingsResult")({accountSettings: S.optional(AccountSettings)}) {}
export class GetDeviceInstanceResult extends S.Class<GetDeviceInstanceResult>("GetDeviceInstanceResult")({deviceInstance: S.optional(DeviceInstance)}) {}
export class GetDevicePoolResult extends S.Class<GetDevicePoolResult>("GetDevicePoolResult")({devicePool: S.optional(DevicePool)}) {}
export class GetDevicePoolCompatibilityRequest extends S.Class<GetDevicePoolCompatibilityRequest>("GetDevicePoolCompatibilityRequest")({devicePoolArn: S.String, appArn: S.optional(S.String), testType: S.optional(S.String), test: S.optional(ScheduleRunTest), configuration: S.optional(ScheduleRunConfiguration), projectArn: S.optional(S.String)}) {}
export class GetProjectResult extends S.Class<GetProjectResult>("GetProjectResult")({project: S.optional(Project)}) {}
export class GetSuiteResult extends S.Class<GetSuiteResult>("GetSuiteResult")({suite: S.optional(Suite)}) {}
export class GetTestResult extends S.Class<GetTestResult>("GetTestResult")({test: S.optional(Test)}) {}
export class GetTestGridProjectResult extends S.Class<GetTestGridProjectResult>("GetTestGridProjectResult")({testGridProject: S.optional(TestGridProject)}) {}
export class GetTestGridSessionResult extends S.Class<GetTestGridSessionResult>("GetTestGridSessionResult")({testGridSession: S.optional(TestGridSession)}) {}
export class ListArtifactsResult extends S.Class<ListArtifactsResult>("ListArtifactsResult")({artifacts: S.optional(Artifacts), nextToken: S.optional(S.String)}) {}
export class ListDevicesResult extends S.Class<ListDevicesResult>("ListDevicesResult")({devices: S.optional(Devices), nextToken: S.optional(S.String)}) {}
export class ListOfferingPromotionsResult extends S.Class<ListOfferingPromotionsResult>("ListOfferingPromotionsResult")({offeringPromotions: S.optional(OfferingPromotions), nextToken: S.optional(S.String)}) {}
export class ListSamplesResult extends S.Class<ListSamplesResult>("ListSamplesResult")({samples: S.optional(Samples), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionActionsResult extends S.Class<ListTestGridSessionActionsResult>("ListTestGridSessionActionsResult")({actions: S.optional(TestGridSessionActions), nextToken: S.optional(S.String)}) {}
export class ListTestGridSessionArtifactsResult extends S.Class<ListTestGridSessionArtifactsResult>("ListTestGridSessionArtifactsResult")({artifacts: S.optional(TestGridSessionArtifacts), nextToken: S.optional(S.String)}) {}
export class ScheduleRunResult extends S.Class<ScheduleRunResult>("ScheduleRunResult")({run: S.optional(Run)}) {}
export const OfferingStatusMap = S.Record({key: S.String, value: OfferingStatus});
export const Offerings = S.Array(Offering);
export const OfferingTransactions = S.Array(OfferingTransaction);
export class CreateRemoteAccessSessionResult extends S.Class<CreateRemoteAccessSessionResult>("CreateRemoteAccessSessionResult")({remoteAccessSession: S.optional(RemoteAccessSession)}) {}
export class GetDeviceResult extends S.Class<GetDeviceResult>("GetDeviceResult")({device: S.optional(Device)}) {}
export class GetJobResult extends S.Class<GetJobResult>("GetJobResult")({job: S.optional(Job)}) {}
export class GetOfferingStatusResult extends S.Class<GetOfferingStatusResult>("GetOfferingStatusResult")({current: S.optional(OfferingStatusMap), nextPeriod: S.optional(OfferingStatusMap), nextToken: S.optional(S.String)}) {}
export class GetRemoteAccessSessionResult extends S.Class<GetRemoteAccessSessionResult>("GetRemoteAccessSessionResult")({remoteAccessSession: S.optional(RemoteAccessSession)}) {}
export class GetRunResult extends S.Class<GetRunResult>("GetRunResult")({run: S.optional(Run)}) {}
export class ListOfferingsResult extends S.Class<ListOfferingsResult>("ListOfferingsResult")({offerings: S.optional(Offerings), nextToken: S.optional(S.String)}) {}
export class ListOfferingTransactionsResult extends S.Class<ListOfferingTransactionsResult>("ListOfferingTransactionsResult")({offeringTransactions: S.optional(OfferingTransactions), nextToken: S.optional(S.String)}) {}
export class ProblemDetail extends S.Class<ProblemDetail>("ProblemDetail")({arn: S.optional(S.String), name: S.optional(S.String)}) {}
export class Problem extends S.Class<Problem>("Problem")({run: S.optional(ProblemDetail), job: S.optional(ProblemDetail), suite: S.optional(ProblemDetail), test: S.optional(ProblemDetail), device: S.optional(Device), result: S.optional(S.String), message: S.optional(S.String)}) {}
export const Problems = S.Array(Problem);
export class IncompatibilityMessage extends S.Class<IncompatibilityMessage>("IncompatibilityMessage")({message: S.optional(S.String), type: S.optional(S.String)}) {}
export const IncompatibilityMessages = S.Array(IncompatibilityMessage);
export class UniqueProblem extends S.Class<UniqueProblem>("UniqueProblem")({message: S.optional(S.String), problems: S.optional(Problems)}) {}
export const UniqueProblems = S.Array(UniqueProblem);
export class DevicePoolCompatibilityResult extends S.Class<DevicePoolCompatibilityResult>("DevicePoolCompatibilityResult")({device: S.optional(Device), compatible: S.optional(S.Boolean), incompatibilityMessages: S.optional(IncompatibilityMessages)}) {}
export const DevicePoolCompatibilityResults = S.Array(DevicePoolCompatibilityResult);
export const UniqueProblemsByExecutionResultMap = S.Record({key: S.String, value: UniqueProblems});
export class GetDevicePoolCompatibilityResult extends S.Class<GetDevicePoolCompatibilityResult>("GetDevicePoolCompatibilityResult")({compatibleDevices: S.optional(DevicePoolCompatibilityResults), incompatibleDevices: S.optional(DevicePoolCompatibilityResults)}) {}
export class ListUniqueProblemsResult extends S.Class<ListUniqueProblemsResult>("ListUniqueProblemsResult")({uniqueProblems: S.optional(UniqueProblemsByExecutionResultMap), nextToken: S.optional(S.String)}) {}

//# Errors
export class ArgumentException extends S.TaggedError<ArgumentException>()("ArgumentException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceAccountException extends S.TaggedError<ServiceAccountException>()("ServiceAccountException", {}) {};
export class CannotDeleteException extends S.TaggedError<CannotDeleteException>()("CannotDeleteException", {message: S.optional(S.String)}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class InvalidOperationException extends S.TaggedError<InvalidOperationException>()("InvalidOperationException", {message: S.optional(S.String)}) {};
export class TagOperationException extends S.TaggedError<TagOperationException>()("TagOperationException", {}) {};
export class NotEligibleException extends S.TaggedError<NotEligibleException>()("NotEligibleException", {}) {};
export class TagPolicyException extends S.TaggedError<TagPolicyException>()("TagPolicyException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};
export class IdempotencyException extends S.TaggedError<IdempotencyException>()("IdempotencyException", {message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a completed remote access session and its results. You cannot delete a remote access session if it is still active.
 * 
 * 
 * 
 * 
 * You cannot undo this operation.
 */export const deleteRemoteAccessSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteRemoteAccessSession" }, DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the run, given the run ARN. You cannot delete a run if it is still active.
 * 
 * 
 * 
 * 
 * You cannot undo this operation.
 */export const deleteRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteRun" }, DeleteRunRequest, DeleteRunResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an upload given the upload ARN.
 */export const deleteUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteUpload" }, DeleteUploadRequest, DeleteUploadResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 * owned by the system.
 */export const deleteDevicePool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteDevicePool" }, DeleteDevicePoolRequest, DeleteDevicePoolResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a profile that can be applied to one or more private device instances.
 */export const deleteInstanceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteInstanceProfile" }, DeleteInstanceProfileRequest, DeleteInstanceProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a network profile.
 */export const deleteNetworkProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteNetworkProfile" }, DeleteNetworkProfileRequest, DeleteNetworkProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an AWS Device Farm project, given the project ARN. You cannot delete a project if it has an active run or session.
 * 
 * 
 * 
 * 
 * You cannot undo this operation.
 */export const deleteProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteProject" }, DeleteProjectRequest, DeleteProjectResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Selenium testing project and all content generated under it. You cannot delete a project if it has active sessions.
 * 
 * 
 * 
 * 
 * You cannot undo this operation.
 */export const deleteTestGridProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteTestGridProject" }, DeleteTestGridProjectRequest, DeleteTestGridProjectResult, [ArgumentException, CannotDeleteException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
 */export const deleteVPCEConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.DeleteVPCEConfiguration" }, DeleteVPCEConfigurationRequest, DeleteVPCEConfigurationResult, [ArgumentException, InvalidOperationException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified instance profile.
 */export const getInstanceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetInstanceProfile" }, GetInstanceProfileRequest, GetInstanceProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a network profile.
 */export const getNetworkProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetNetworkProfile" }, GetNetworkProfileRequest, GetNetworkProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about an upload.
 */export const getUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetUpload" }, GetUploadRequest, GetUploadResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the configuration settings for your Amazon Virtual Private
 * Cloud (VPC) endpoint.
 */export const getVPCEConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetVPCEConfiguration" }, GetVPCEConfigurationRequest, GetVPCEConfigurationResult, [ArgumentException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Installs an application to the device in a remote access session. For Android
 * applications, the file must be in .apk format. For iOS applications, the file must be in
 * .ipa format.
 */export const installToRemoteAccessSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.InstallToRemoteAccessSession" }, InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the private device instances associated with one or more AWS
 * accounts.
 */export const listDeviceInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListDeviceInstances" }, ListDeviceInstancesRequest, ListDeviceInstancesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about device pools.
 */export const listDevicePools = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListDevicePools" }, ListDevicePoolsRequest, ListDevicePoolsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about all the instance profiles in an AWS account.
 */export const listInstanceProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListInstanceProfiles" }, ListInstanceProfilesRequest, ListInstanceProfilesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about jobs for a given test run.
 */export const listJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListJobs" }, ListJobsRequest, ListJobsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of available network profiles.
 */export const listNetworkProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListNetworkProfiles" }, ListNetworkProfilesRequest, ListNetworkProfilesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about projects.
 */export const listProjects = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListProjects" }, ListProjectsRequest, ListProjectsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all currently running remote access sessions.
 */export const listRemoteAccessSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListRemoteAccessSessions" }, ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about runs, given an AWS Device Farm project ARN.
 */export const listRuns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListRuns" }, ListRunsRequest, ListRunsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about test suites for a given job.
 */export const listSuites = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListSuites" }, ListSuitesRequest, ListSuitesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the tags for an AWS Device Farm resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ArgumentException, NotFoundException, TagOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of all Selenium testing projects in your account.
 */export const listTestGridProjects = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTestGridProjects" }, ListTestGridProjectsRequest, ListTestGridProjectsResult, [ArgumentException, InternalServiceException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of sessions for a TestGridProject.
 */export const listTestGridSessions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTestGridSessions" }, ListTestGridSessionsRequest, ListTestGridSessionsResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about tests in a given test suite.
 */export const listTests = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTests" }, ListTestsRequest, ListTestsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about uploads, given an AWS Device Farm project ARN.
 */export const listUploads = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListUploads" }, ListUploadsRequest, ListUploadsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 * configurations in the AWS account.
 */export const listVPCEConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListVPCEConfigurations" }, ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult, [ArgumentException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Explicitly sets the quantity of devices to renew for an offering, starting from the
 * `effectiveDate` of the next period. The API returns a `NotEligible` error if the
 * user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */export const renewOffering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.RenewOffering" }, RenewOfferingRequest, RenewOfferingResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
 * where tests have not started. You are not billed for this device. On the device where tests have started,
 * setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
 * and any tests that were in progress or already completed.
 */export const stopJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.StopJob" }, StopJobRequest, StopJobResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Ends a specified remote access session.
 */export const stopRemoteAccessSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.StopRemoteAccessSession" }, StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
 * where tests have not started. You are not billed for these devices. On devices where tests have started
 * executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
 * setup, teardown, and any tests that were in progress or already completed.
 */export const stopRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.StopRun" }, StopRunRequest, StopRunResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ArgumentException, NotFoundException, TagOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information about a private device instance.
 */export const updateDeviceInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateDeviceInstance" }, UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the name, description, and rules in a device pool given the attributes and
 * the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 * whole (or not at all).
 */export const updateDevicePool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateDevicePool" }, UpdateDevicePoolRequest, UpdateDevicePoolResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information about an existing private device instance profile.
 */export const updateInstanceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateInstanceProfile" }, UpdateInstanceProfileRequest, UpdateInstanceProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the network profile.
 */export const updateNetworkProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateNetworkProfile" }, UpdateNetworkProfileRequest, UpdateNetworkProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the specified project name, given the project ARN and a new
 * name.
 */export const updateProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateProject" }, UpdateProjectRequest, UpdateProjectResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Change details of a project.
 */export const updateTestGridProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateTestGridProject" }, UpdateTestGridProjectRequest, UpdateTestGridProjectResult, [ArgumentException, InternalServiceException, LimitExceededException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an uploaded test spec.
 */export const updateUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateUpload" }, UpdateUploadRequest, UpdateUploadResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
 */export const updateVPCEConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.UpdateVPCEConfiguration" }, UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult, [ArgumentException, InvalidOperationException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a device pool.
 */export const createDevicePool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateDevicePool" }, CreateDevicePoolRequest, CreateDevicePoolResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a profile that can be applied to one or more private fleet device
 * instances.
 */export const createInstanceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateInstanceProfile" }, CreateInstanceProfileRequest, CreateInstanceProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a network profile.
 */export const createNetworkProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateNetworkProfile" }, CreateNetworkProfileRequest, CreateNetworkProfileResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a project.
 */export const createProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateProject" }, CreateProjectRequest, CreateProjectResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException, TagOperationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Selenium testing project. Projects are used to track TestGridSession
 * instances.
 */export const createTestGridProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateTestGridProject" }, CreateTestGridProjectRequest, CreateTestGridProjectResult, [ArgumentException, InternalServiceException, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a signed, short-term URL that can be passed to a Selenium `RemoteWebDriver`
 * constructor.
 */export const createTestGridUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateTestGridUrl" }, CreateTestGridUrlRequest, CreateTestGridUrlResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Uploads an app or test scripts.
 */export const createUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateUpload" }, CreateUploadRequest, CreateUploadResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
 * (VPC) endpoint.
 */export const createVPCEConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateVPCEConfiguration" }, CreateVPCEConfigurationRequest, CreateVPCEConfigurationResult, [ArgumentException, LimitExceededException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
 * account.
 */export const getAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetAccountSettings" }, GetAccountSettingsRequest, GetAccountSettingsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a device instance that belongs to a private device fleet.
 */export const getDeviceInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetDeviceInstance" }, GetDeviceInstanceRequest, GetDeviceInstanceResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a device pool.
 */export const getDevicePool = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetDevicePool" }, GetDevicePoolRequest, GetDevicePoolResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a project.
 */export const getProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetProject" }, GetProjectRequest, GetProjectResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a suite.
 */export const getSuite = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetSuite" }, GetSuiteRequest, GetSuiteResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a test.
 */export const getTest = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetTest" }, GetTestRequest, GetTestResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a Selenium testing project.
 */export const getTestGridProject = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetTestGridProject" }, GetTestGridProjectRequest, GetTestGridProjectResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A session is an instance of a browser created through a `RemoteWebDriver` with the URL from CreateTestGridUrlResult$url. You can use the following to look up sessions:
 * 
 * 
 * 
 * - The session ARN (GetTestGridSessionRequest$sessionArn).
 * 
 * 
 * 
 * - The project ARN and a session ID (GetTestGridSessionRequest$projectArn and GetTestGridSessionRequest$sessionId).
 */export const getTestGridSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetTestGridSession" }, GetTestGridSessionRequest, GetTestGridSessionResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about artifacts.
 */export const listArtifacts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListArtifacts" }, ListArtifactsRequest, ListArtifactsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about unique device types.
 */export const listDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListDevices" }, ListDevicesRequest, ListDevicesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of offering promotions. Each offering promotion record contains the ID and description
 * of the promotion. The API returns a `NotEligible` error if the caller is not permitted to invoke
 * the operation. Contact aws-devicefarm-support@amazon.com if you must be able to invoke this operation.
 */export const listOfferingPromotions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListOfferingPromotions" }, ListOfferingPromotionsRequest, ListOfferingPromotionsResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about samples, given an AWS Device Farm job ARN.
 */export const listSamples = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListSamples" }, ListSamplesRequest, ListSamplesResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the actions taken in a TestGridSession.
 */export const listTestGridSessionActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTestGridSessionActions" }, ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of artifacts created during the session.
 */export const listTestGridSessionArtifacts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListTestGridSessionArtifacts" }, ListTestGridSessionArtifactsRequest, ListTestGridSessionArtifactsResult, [ArgumentException, InternalServiceException, NotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 * quantity for an offering, unless the renewal was overridden. The API returns a `NotEligible`
 * error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 * contact aws-devicefarm-support@amazon.com.
 */export const purchaseOffering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.PurchaseOffering" }, PurchaseOfferingRequest, PurchaseOfferingResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Specifies and starts a remote access session.
 */export const createRemoteAccessSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.CreateRemoteAccessSession" }, CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a unique device type.
 */export const getDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetDevice" }, GetDeviceRequest, GetDeviceResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a job.
 */export const getJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetJob" }, GetJobRequest, GetJobResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the current status and future status of all offerings purchased by an AWS account. The response
 * indicates how many offerings are currently available and the offerings that will be available in the next
 * period. The API returns a `NotEligible` error if the user is not permitted to invoke the
 * operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */export const getOfferingStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetOfferingStatus" }, GetOfferingStatusRequest, GetOfferingStatusResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a link to a currently running remote access session.
 */export const getRemoteAccessSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetRemoteAccessSession" }, GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a run.
 */export const getRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetRun" }, GetRunRequest, GetRunResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of products or offerings that the user can manage through the API. Each offering record
 * indicates the recurring price per unit and the frequency for that offering. The API returns a
 * `NotEligible` error if the user is not permitted to invoke the operation. If you must be
 * able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */export const listOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListOfferings" }, ListOfferingsRequest, ListOfferingsResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 * account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 * The API returns a `NotEligible` error if the user is not permitted to invoke the operation. If
 * you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */export const listOfferingTransactions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListOfferingTransactions" }, ListOfferingTransactionsRequest, ListOfferingTransactionsResult, [ArgumentException, LimitExceededException, NotEligibleException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Schedules a run.
 */export const scheduleRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ScheduleRun" }, ScheduleRunRequest, ScheduleRunResult, [ArgumentException, IdempotencyException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the specified tags to a resource with the specified `resourceArn`. If existing tags
 * on a resource are not specified in the request parameters, they are not changed. When a resource is deleted,
 * the tags associated with that resource are also deleted.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.TagResource" }, TagResourceRequest, TagResourceResponse, [ArgumentException, NotFoundException, TagOperationException, TagPolicyException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about compatibility with a device pool.
 */export const getDevicePoolCompatibility = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.GetDevicePoolCompatibility" }, GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about unique problems, such as exceptions or crashes.
 * 
 * 
 * Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 * if a call in your application consistently raises an exception (OutOfBoundsException in
 * MyActivity.java:386), `ListUniqueProblems` returns a single entry instead of many
 * individual entries for that exception.
 */export const listUniqueProblems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-06-23", sdkId: "Device Farm", sigV4ServiceName: "devicefarm", name: "DeviceFarm_20150623.ListUniqueProblems" }, ListUniqueProblemsRequest, ListUniqueProblemsResult, [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
