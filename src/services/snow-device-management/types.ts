import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class SnowDeviceManagement extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelTask(
    input: CancelTaskInput,
  ): Effect.Effect<
    CancelTaskOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTask(
    input: CreateTaskInput,
  ): Effect.Effect<
    CreateTaskOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDevice(
    input: DescribeDeviceInput,
  ): Effect.Effect<
    DescribeDeviceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDeviceEc2Instances(
    input: DescribeDeviceEc2Input,
  ): Effect.Effect<
    DescribeDeviceEc2Output,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeExecution(
    input: DescribeExecutionInput,
  ): Effect.Effect<
    DescribeExecutionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTask(
    input: DescribeTaskInput,
  ): Effect.Effect<
    DescribeTaskOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDeviceResources(
    input: ListDeviceResourcesInput,
  ): Effect.Effect<
    ListDeviceResourcesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDevices(
    input: ListDevicesInput,
  ): Effect.Effect<
    ListDevicesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExecutions(
    input: ListExecutionsInput,
  ): Effect.Effect<
    ListExecutionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTasks(
    input: ListTasksInput,
  ): Effect.Effect<
    ListTasksOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AttachmentStatus = string;

export interface CancelTaskInput {
  taskId: string;
}
export interface CancelTaskOutput {
  taskId?: string;
}
export interface Capacity {
  name?: string;
  unit?: string;
  total?: number;
  used?: number;
  available?: number;
}
export type CapacityList = Array<Capacity>;
interface _Command {
  unlock?: Unlock;
  reboot?: Reboot;
}

export type Command =
  | (_Command & { unlock: Unlock })
  | (_Command & { reboot: Reboot });
export interface CpuOptions {
  coreCount?: number;
  threadsPerCore?: number;
}
export interface CreateTaskInput {
  targets: Array<string>;
  command: Command;
  description?: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateTaskOutput {
  taskId?: string;
  taskArn?: string;
}
export interface DescribeDeviceEc2Input {
  managedDeviceId: string;
  instanceIds: Array<string>;
}
export interface DescribeDeviceEc2Output {
  instances?: Array<InstanceSummary>;
}
export interface DescribeDeviceInput {
  managedDeviceId: string;
}
export interface DescribeDeviceOutput {
  lastReachedOutAt?: Date | string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
  managedDeviceId?: string;
  managedDeviceArn?: string;
  deviceType?: string;
  associatedWithJob?: string;
  deviceState?: string;
  physicalNetworkInterfaces?: Array<PhysicalNetworkInterface>;
  deviceCapacities?: Array<Capacity>;
  software?: SoftwareInformation;
}
export interface DescribeExecutionInput {
  taskId: string;
  managedDeviceId: string;
}
export interface DescribeExecutionOutput {
  taskId?: string;
  executionId?: string;
  managedDeviceId?: string;
  state?: string;
  startedAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface DescribeTaskInput {
  taskId: string;
}
export interface DescribeTaskOutput {
  taskId?: string;
  taskArn?: string;
  targets?: Array<string>;
  state?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  completedAt?: Date | string;
  description?: string;
  tags?: Record<string, string>;
}
export interface DeviceSummary {
  managedDeviceId?: string;
  managedDeviceArn?: string;
  associatedWithJob?: string;
  tags?: Record<string, string>;
}
export type DeviceSummaryList = Array<DeviceSummary>;
export interface EbsInstanceBlockDevice {
  attachTime?: Date | string;
  deleteOnTermination?: boolean;
  status?: string;
  volumeId?: string;
}
export type ExecutionId = string;

export type ExecutionState = string;

export interface ExecutionSummary {
  taskId?: string;
  executionId?: string;
  managedDeviceId?: string;
  state?: string;
}
export type ExecutionSummaryList = Array<ExecutionSummary>;
export type IdempotencyToken = string;

export interface Instance {
  imageId?: string;
  amiLaunchIndex?: number;
  instanceId?: string;
  state?: InstanceState;
  instanceType?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
  securityGroups?: Array<SecurityGroupIdentifier>;
  cpuOptions?: CpuOptions;
  rootDeviceName?: string;
}
export interface InstanceBlockDeviceMapping {
  deviceName?: string;
  ebs?: EbsInstanceBlockDevice;
}
export type InstanceBlockDeviceMappingList = Array<InstanceBlockDeviceMapping>;
export type InstanceIdsList = Array<string>;
export interface InstanceState {
  code?: number;
  name?: string;
}
export type InstanceStateName = string;

export interface InstanceSummary {
  instance?: Instance;
  lastUpdatedAt?: Date | string;
}
export type InstanceSummaryList = Array<InstanceSummary>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type IpAddressAssignment = string;

export type JobId = string;

export interface ListDeviceResourcesInput {
  managedDeviceId: string;
  type?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeviceResourcesOutput {
  resources?: Array<ResourceSummary>;
  nextToken?: string;
}
export interface ListDevicesInput {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDevicesOutput {
  devices?: Array<DeviceSummary>;
  nextToken?: string;
}
export interface ListExecutionsInput {
  taskId: string;
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListExecutionsOutput {
  executions?: Array<ExecutionSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export interface ListTasksInput {
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTasksOutput {
  tasks?: Array<TaskSummary>;
  nextToken?: string;
}
export type ManagedDeviceId = string;

export type MaxResults = number;

export type NextToken = string;

export type PhysicalConnectorType = string;

export interface PhysicalNetworkInterface {
  physicalNetworkInterfaceId?: string;
  physicalConnectorType?: string;
  ipAddressAssignment?: string;
  ipAddress?: string;
  netmask?: string;
  defaultGateway?: string;
  macAddress?: string;
}
export type PhysicalNetworkInterfaceList = Array<PhysicalNetworkInterface>;
export interface Reboot {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ResourceSummary {
  resourceType: string;
  arn?: string;
  id?: string;
}
export type ResourceSummaryList = Array<ResourceSummary>;
export interface SecurityGroupIdentifier {
  groupId?: string;
  groupName?: string;
}
export type SecurityGroupIdentifierList = Array<SecurityGroupIdentifier>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export interface SoftwareInformation {
  installedVersion?: string;
  installingVersion?: string;
  installState?: string;
}
export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TargetList = Array<string>;
export type TaskDescriptionString = string;

export type TaskId = string;

export type TaskState = string;

export interface TaskSummary {
  taskId: string;
  taskArn?: string;
  state?: string;
  tags?: Record<string, string>;
}
export type TaskSummaryList = Array<TaskSummary>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface Unlock {}
export type UnlockState = string;

export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelTask {
  export type Input = CancelTaskInput;
  export type Output = CancelTaskOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTask {
  export type Input = CreateTaskInput;
  export type Output = CreateTaskOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDevice {
  export type Input = DescribeDeviceInput;
  export type Output = DescribeDeviceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeviceEc2Instances {
  export type Input = DescribeDeviceEc2Input;
  export type Output = DescribeDeviceEc2Output;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeExecution {
  export type Input = DescribeExecutionInput;
  export type Output = DescribeExecutionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTask {
  export type Input = DescribeTaskInput;
  export type Output = DescribeTaskOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeviceResources {
  export type Input = ListDeviceResourcesInput;
  export type Output = ListDeviceResourcesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesInput;
  export type Output = ListDevicesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExecutions {
  export type Input = ListExecutionsInput;
  export type Output = ListExecutionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTasks {
  export type Input = ListTasksInput;
  export type Output = ListTasksOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type SnowDeviceManagementErrors =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
