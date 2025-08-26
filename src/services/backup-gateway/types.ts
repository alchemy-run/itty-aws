import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BackupGateway extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  associateGatewayToServer(
    input: AssociateGatewayToServerInput,
  ): Effect.Effect<
    AssociateGatewayToServerOutput,
    ConflictException | CommonAwsError
  >;
  createGateway(
    input: CreateGatewayInput,
  ): Effect.Effect<CreateGatewayOutput, CommonAwsError>;
  deleteGateway(
    input: DeleteGatewayInput,
  ): Effect.Effect<
    DeleteGatewayOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  deleteHypervisor(
    input: DeleteHypervisorInput,
  ): Effect.Effect<
    DeleteHypervisorOutput,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateGatewayFromServer(
    input: DisassociateGatewayFromServerInput,
  ): Effect.Effect<
    DisassociateGatewayFromServerOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  getBandwidthRateLimitSchedule(
    input: GetBandwidthRateLimitScheduleInput,
  ): Effect.Effect<
    GetBandwidthRateLimitScheduleOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getGateway(
    input: GetGatewayInput,
  ): Effect.Effect<
    GetGatewayOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getHypervisor(
    input: GetHypervisorInput,
  ): Effect.Effect<
    GetHypervisorOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getHypervisorPropertyMappings(
    input: GetHypervisorPropertyMappingsInput,
  ): Effect.Effect<
    GetHypervisorPropertyMappingsOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getVirtualMachine(
    input: GetVirtualMachineInput,
  ): Effect.Effect<
    GetVirtualMachineOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  importHypervisorConfiguration(
    input: ImportHypervisorConfigurationInput,
  ): Effect.Effect<
    ImportHypervisorConfigurationOutput,
    AccessDeniedException | ConflictException | CommonAwsError
  >;
  listGateways(
    input: ListGatewaysInput,
  ): Effect.Effect<ListGatewaysOutput, CommonAwsError>;
  listHypervisors(
    input: ListHypervisorsInput,
  ): Effect.Effect<ListHypervisorsOutput, CommonAwsError>;
  listVirtualMachines(
    input: ListVirtualMachinesInput,
  ): Effect.Effect<ListVirtualMachinesOutput, CommonAwsError>;
  putBandwidthRateLimitSchedule(
    input: PutBandwidthRateLimitScheduleInput,
  ): Effect.Effect<
    PutBandwidthRateLimitScheduleOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  putHypervisorPropertyMappings(
    input: PutHypervisorPropertyMappingsInput,
  ): Effect.Effect<
    PutHypervisorPropertyMappingsOutput,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putMaintenanceStartTime(
    input: PutMaintenanceStartTimeInput,
  ): Effect.Effect<
    PutMaintenanceStartTimeOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  startVirtualMachinesMetadataSync(
    input: StartVirtualMachinesMetadataSyncInput,
  ): Effect.Effect<
    StartVirtualMachinesMetadataSyncOutput,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  testHypervisorConfiguration(
    input: TestHypervisorConfigurationInput,
  ): Effect.Effect<
    TestHypervisorConfigurationOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updateGatewayInformation(
    input: UpdateGatewayInformationInput,
  ): Effect.Effect<
    UpdateGatewayInformationOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updateGatewaySoftwareNow(
    input: UpdateGatewaySoftwareNowInput,
  ): Effect.Effect<
    UpdateGatewaySoftwareNowOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  updateHypervisor(
    input: UpdateHypervisorInput,
  ): Effect.Effect<
    UpdateHypervisorOutput,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type ActivationKey = string;

export interface AssociateGatewayToServerInput {
  GatewayArn: string;
  ServerArn: string;
}
export interface AssociateGatewayToServerOutput {
  GatewayArn?: string;
}
export type AverageUploadRateLimit = number;

export interface BandwidthRateLimitInterval {
  AverageUploadRateLimitInBitsPerSec?: number;
  StartHourOfDay: number;
  EndHourOfDay: number;
  StartMinuteOfHour: number;
  EndMinuteOfHour: number;
  DaysOfWeek: Array<number>;
}
export type BandwidthRateLimitIntervals = Array<BandwidthRateLimitInterval>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export interface CreateGatewayInput {
  ActivationKey: string;
  GatewayDisplayName: string;
  GatewayType: string;
  Tags?: Array<Tag>;
}
export interface CreateGatewayOutput {
  GatewayArn?: string;
}
export type DayOfMonth = number;

export type DayOfWeek = number;

export type DaysOfWeek = Array<number>;
export interface DeleteGatewayInput {
  GatewayArn: string;
}
export interface DeleteGatewayOutput {
  GatewayArn?: string;
}
export interface DeleteHypervisorInput {
  HypervisorArn: string;
}
export interface DeleteHypervisorOutput {
  HypervisorArn?: string;
}
export interface DisassociateGatewayFromServerInput {
  GatewayArn: string;
}
export interface DisassociateGatewayFromServerOutput {
  GatewayArn?: string;
}
export interface Gateway {
  GatewayArn?: string;
  GatewayDisplayName?: string;
  GatewayType?: string;
  HypervisorId?: string;
  LastSeenTime?: Date | string;
}
export type GatewayArn = string;

export interface GatewayDetails {
  GatewayArn?: string;
  GatewayDisplayName?: string;
  GatewayType?: string;
  HypervisorId?: string;
  LastSeenTime?: Date | string;
  MaintenanceStartTime?: MaintenanceStartTime;
  NextUpdateAvailabilityTime?: Date | string;
  VpcEndpoint?: string;
}
export type Gateways = Array<Gateway>;
export type GatewayType = string;

export interface GetBandwidthRateLimitScheduleInput {
  GatewayArn: string;
}
export interface GetBandwidthRateLimitScheduleOutput {
  GatewayArn?: string;
  BandwidthRateLimitIntervals?: Array<BandwidthRateLimitInterval>;
}
export interface GetGatewayInput {
  GatewayArn: string;
}
export interface GetGatewayOutput {
  Gateway?: GatewayDetails;
}
export interface GetHypervisorInput {
  HypervisorArn: string;
}
export interface GetHypervisorOutput {
  Hypervisor?: HypervisorDetails;
}
export interface GetHypervisorPropertyMappingsInput {
  HypervisorArn: string;
}
export interface GetHypervisorPropertyMappingsOutput {
  HypervisorArn?: string;
  VmwareToAwsTagMappings?: Array<VmwareToAwsTagMapping>;
  IamRoleArn?: string;
}
export interface GetVirtualMachineInput {
  ResourceArn: string;
}
export interface GetVirtualMachineOutput {
  VirtualMachine?: VirtualMachineDetails;
}
export type Host = string;

export type HourOfDay = number;

export interface Hypervisor {
  Host?: string;
  HypervisorArn?: string;
  KmsKeyArn?: string;
  Name?: string;
  State?: string;
}
export interface HypervisorDetails {
  Host?: string;
  HypervisorArn?: string;
  KmsKeyArn?: string;
  Name?: string;
  LogGroupArn?: string;
  State?: string;
  LastSuccessfulMetadataSyncTime?: Date | string;
  LatestMetadataSyncStatusMessage?: string;
  LatestMetadataSyncStatus?: string;
}
export type HypervisorId = string;

export type Hypervisors = Array<Hypervisor>;
export type HypervisorState = string;

export type IamRoleArn = string;

export interface ImportHypervisorConfigurationInput {
  Name: string;
  Host: string;
  Username?: string;
  Password?: string;
  KmsKeyArn?: string;
  Tags?: Array<Tag>;
}
export interface ImportHypervisorConfigurationOutput {
  HypervisorArn?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type KmsKeyArn = string;

export interface ListGatewaysInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGatewaysOutput {
  Gateways?: Array<Gateway>;
  NextToken?: string;
}
export interface ListHypervisorsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHypervisorsOutput {
  Hypervisors?: Array<Hypervisor>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export interface ListVirtualMachinesInput {
  HypervisorArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVirtualMachinesOutput {
  VirtualMachines?: Array<VirtualMachine>;
  NextToken?: string;
}
export type LogGroupArn = string;

export interface MaintenanceStartTime {
  DayOfMonth?: number;
  DayOfWeek?: number;
  HourOfDay: number;
  MinuteOfHour: number;
}
export type MaxResults = number;

export type MinuteOfHour = number;

export type Name = string;

export type NextToken = string;

export type Password = string;

export type Path = string;

export interface PutBandwidthRateLimitScheduleInput {
  GatewayArn: string;
  BandwidthRateLimitIntervals: Array<BandwidthRateLimitInterval>;
}
export interface PutBandwidthRateLimitScheduleOutput {
  GatewayArn?: string;
}
export interface PutHypervisorPropertyMappingsInput {
  HypervisorArn: string;
  VmwareToAwsTagMappings: Array<VmwareToAwsTagMapping>;
  IamRoleArn: string;
}
export interface PutHypervisorPropertyMappingsOutput {
  HypervisorArn?: string;
}
export interface PutMaintenanceStartTimeInput {
  GatewayArn: string;
  HourOfDay: number;
  MinuteOfHour: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
}
export interface PutMaintenanceStartTimeOutput {
  GatewayArn?: string;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type ServerArn = string;

export interface StartVirtualMachinesMetadataSyncInput {
  HypervisorArn: string;
}
export interface StartVirtualMachinesMetadataSyncOutput {
  HypervisorArn?: string;
}
export type BackupGatewaystring = string;

export type SyncMetadataStatus = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {
  ResourceARN?: string;
}
export type Tags = Array<Tag>;
export type TagValue = string;

export interface TestHypervisorConfigurationInput {
  GatewayArn: string;
  Host: string;
  Username?: string;
  Password?: string;
}
export interface TestHypervisorConfigurationOutput {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly ErrorCode: string;
  readonly Message?: string;
}> {}
export type Time = Date | string;

export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {
  ResourceARN?: string;
}
export interface UpdateGatewayInformationInput {
  GatewayArn: string;
  GatewayDisplayName?: string;
}
export interface UpdateGatewayInformationOutput {
  GatewayArn?: string;
}
export interface UpdateGatewaySoftwareNowInput {
  GatewayArn: string;
}
export interface UpdateGatewaySoftwareNowOutput {
  GatewayArn?: string;
}
export interface UpdateHypervisorInput {
  HypervisorArn: string;
  Host?: string;
  Username?: string;
  Password?: string;
  Name?: string;
  LogGroupArn?: string;
}
export interface UpdateHypervisorOutput {
  HypervisorArn?: string;
}
export type Username = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface VirtualMachine {
  HostName?: string;
  HypervisorId?: string;
  Name?: string;
  Path?: string;
  ResourceArn?: string;
  LastBackupDate?: Date | string;
}
export interface VirtualMachineDetails {
  HostName?: string;
  HypervisorId?: string;
  Name?: string;
  Path?: string;
  ResourceArn?: string;
  LastBackupDate?: Date | string;
  VmwareTags?: Array<VmwareTag>;
}
export type VirtualMachines = Array<VirtualMachine>;
export type VmwareCategory = string;

export interface VmwareTag {
  VmwareCategory?: string;
  VmwareTagName?: string;
  VmwareTagDescription?: string;
}
export type VmwareTagName = string;

export type VmwareTags = Array<VmwareTag>;
export interface VmwareToAwsTagMapping {
  VmwareCategory: string;
  VmwareTagName: string;
  AwsTagKey: string;
  AwsTagValue: string;
}
export type VmwareToAwsTagMappings = Array<VmwareToAwsTagMapping>;
export type VpcEndpoint = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace AssociateGatewayToServer {
  export type Input = AssociateGatewayToServerInput;
  export type Output = AssociateGatewayToServerOutput;
  export type Error = ConflictException | CommonAwsError;
}

export declare namespace CreateGateway {
  export type Input = CreateGatewayInput;
  export type Output = CreateGatewayOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeleteGateway {
  export type Input = DeleteGatewayInput;
  export type Output = DeleteGatewayOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DeleteHypervisor {
  export type Input = DeleteHypervisorInput;
  export type Output = DeleteHypervisorOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateGatewayFromServer {
  export type Input = DisassociateGatewayFromServerInput;
  export type Output = DisassociateGatewayFromServerOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetBandwidthRateLimitSchedule {
  export type Input = GetBandwidthRateLimitScheduleInput;
  export type Output = GetBandwidthRateLimitScheduleOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetGateway {
  export type Input = GetGatewayInput;
  export type Output = GetGatewayOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetHypervisor {
  export type Input = GetHypervisorInput;
  export type Output = GetHypervisorOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetHypervisorPropertyMappings {
  export type Input = GetHypervisorPropertyMappingsInput;
  export type Output = GetHypervisorPropertyMappingsOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetVirtualMachine {
  export type Input = GetVirtualMachineInput;
  export type Output = GetVirtualMachineOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ImportHypervisorConfiguration {
  export type Input = ImportHypervisorConfigurationInput;
  export type Output = ImportHypervisorConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | CommonAwsError;
}

export declare namespace ListGateways {
  export type Input = ListGatewaysInput;
  export type Output = ListGatewaysOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListHypervisors {
  export type Input = ListHypervisorsInput;
  export type Output = ListHypervisorsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListVirtualMachines {
  export type Input = ListVirtualMachinesInput;
  export type Output = ListVirtualMachinesOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutBandwidthRateLimitSchedule {
  export type Input = PutBandwidthRateLimitScheduleInput;
  export type Output = PutBandwidthRateLimitScheduleOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace PutHypervisorPropertyMappings {
  export type Input = PutHypervisorPropertyMappingsInput;
  export type Output = PutHypervisorPropertyMappingsOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutMaintenanceStartTime {
  export type Input = PutMaintenanceStartTimeInput;
  export type Output = PutMaintenanceStartTimeOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartVirtualMachinesMetadataSync {
  export type Input = StartVirtualMachinesMetadataSyncInput;
  export type Output = StartVirtualMachinesMetadataSyncOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TestHypervisorConfiguration {
  export type Input = TestHypervisorConfigurationInput;
  export type Output = TestHypervisorConfigurationOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGatewayInformation {
  export type Input = UpdateGatewayInformationInput;
  export type Output = UpdateGatewayInformationOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGatewaySoftwareNow {
  export type Input = UpdateGatewaySoftwareNowInput;
  export type Output = UpdateGatewaySoftwareNowOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateHypervisor {
  export type Input = UpdateHypervisorInput;
  export type Output = UpdateHypervisorOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}
