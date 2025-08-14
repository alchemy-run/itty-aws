import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class NetworkMonitor extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Networkmonitor extends NetworkMonitor {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AddressFamily = "IPV4" | "IPV6";
export type AggregationPeriod = number;

export type Arn = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateMonitorInput {
  monitorName: string;
  probes?: Array<CreateMonitorProbeInput>;
  aggregationPeriod?: number;
  clientToken?: string;
  tags?: Partial<Record<string, string>>;
}
export interface CreateMonitorOutput {
  monitorArn: string;
  monitorName: string;
  state: MonitorState;
  aggregationPeriod?: number;
  tags?: Partial<Record<string, string>>;
}
export interface CreateMonitorProbeInput {
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  probeTags?: Partial<Record<string, string>>;
}
export type CreateMonitorProbeInputList = Array<CreateMonitorProbeInput>;
export interface CreateProbeInput {
  monitorName: string;
  probe: ProbeInput;
  clientToken?: string;
  tags?: Partial<Record<string, string>>;
}
export interface CreateProbeOutput {
  probeId?: string;
  probeArn?: string;
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  addressFamily?: AddressFamily;
  vpcId?: string;
  state?: ProbeState;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  tags?: Partial<Record<string, string>>;
}
export interface DeleteMonitorInput {
  monitorName: string;
}
export interface DeleteMonitorOutput {}
export interface DeleteProbeInput {
  monitorName: string;
  probeId: string;
}
export interface DeleteProbeOutput {}
export type Destination = string;

export interface GetMonitorInput {
  monitorName: string;
}
export interface GetMonitorOutput {
  monitorArn: string;
  monitorName: string;
  state: MonitorState;
  aggregationPeriod: number;
  tags?: Partial<Record<string, string>>;
  probes?: Array<Probe>;
  createdAt: Date | string;
  modifiedAt: Date | string;
}
export interface GetProbeInput {
  monitorName: string;
  probeId: string;
}
export interface GetProbeOutput {
  probeId?: string;
  probeArn?: string;
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  addressFamily?: AddressFamily;
  vpcId?: string;
  state?: ProbeState;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  tags?: Partial<Record<string, string>>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type Iso8601Timestamp = Date | string;

export interface ListMonitorsInput {
  nextToken?: string;
  maxResults?: number;
  state?: string;
}
export interface ListMonitorsOutput {
  monitors: Array<MonitorSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Partial<Record<string, string>>;
}
export type MaxResults = number;

export type MonitorArn = string;

export type MonitorList = Array<MonitorSummary>;
export type MonitorState =
  | "PENDING"
  | "ACTIVE"
  | "INACTIVE"
  | "ERROR"
  | "DELETING";
export interface MonitorSummary {
  monitorArn: string;
  monitorName: string;
  state: MonitorState;
  aggregationPeriod?: number;
  tags?: Partial<Record<string, string>>;
}
export type PacketSize = number;

export type PaginationToken = string;

export type Port = number;

export interface Probe {
  probeId?: string;
  probeArn?: string;
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  addressFamily?: AddressFamily;
  vpcId?: string;
  state?: ProbeState;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  tags?: Partial<Record<string, string>>;
}
export type ProbeId = string;

export interface ProbeInput {
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  tags?: Partial<Record<string, string>>;
}
export type ProbeList = Array<Probe>;
export type ProbeState =
  | "PENDING"
  | "ACTIVE"
  | "INACTIVE"
  | "ERROR"
  | "DELETING"
  | "DELETED";
export type Protocol = "TCP" | "ICMP";
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Partial<Record<string, string>>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Partial<Record<string, string>>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateMonitorInput {
  monitorName: string;
  aggregationPeriod: number;
}
export interface UpdateMonitorOutput {
  monitorArn: string;
  monitorName: string;
  state: MonitorState;
  aggregationPeriod?: number;
  tags?: Partial<Record<string, string>>;
}
export interface UpdateProbeInput {
  monitorName: string;
  probeId: string;
  state?: ProbeState;
  destination?: string;
  destinationPort?: number;
  protocol?: Protocol;
  packetSize?: number;
}
export interface UpdateProbeOutput {
  probeId?: string;
  probeArn?: string;
  sourceArn: string;
  destination: string;
  destinationPort?: number;
  protocol: Protocol;
  packetSize?: number;
  addressFamily?: AddressFamily;
  vpcId?: string;
  state?: ProbeState;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  tags?: Partial<Record<string, string>>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VpcId = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
