import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { AwsJson11Protocol } from "../../protocols/awsjson1_1.js";

export class IoTSecureTunneling extends AWSServiceClient {
  constructor(cfg: any) {
    super("iotsecuretunneling", new AwsJson11Protocol(), cfg);
  }

  closeTunnel(
    input: CloseTunnelRequest,
  ): Effect.Effect<
    CloseTunnelResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("CloseTunnel", input);
  }
  describeTunnel(
    input: DescribeTunnelRequest,
  ): Effect.Effect<
    DescribeTunnelResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("DescribeTunnel", input);
  }
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  listTunnels(
    input: ListTunnelsRequest,
  ): Effect.Effect<
    ListTunnelsResponse,
    CommonAwsError
  > {
    return this.call("ListTunnels", input);
  }
  openTunnel(
    input: OpenTunnelRequest,
  ): Effect.Effect<
    OpenTunnelResponse,
    LimitExceededException | CommonAwsError
  > {
    return this.call("OpenTunnel", input);
  }
  rotateTunnelAccessToken(
    input: RotateTunnelAccessTokenRequest,
  ): Effect.Effect<
    RotateTunnelAccessTokenResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("RotateTunnelAccessToken", input);
  }
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
}

export class Iotsecuretunneling extends IoTSecureTunneling {}

export default IoTSecureTunneling;

export type AmazonResourceName = string;

export type ClientAccessToken = string;

export type ClientMode = "SOURCE" | "DESTINATION" | "ALL";
export interface CloseTunnelRequest {
  tunnelId: string;
  delete?: boolean;
}
export interface CloseTunnelResponse {
}
export interface ConnectionState {
  status?: ConnectionStatus;
  lastUpdatedAt?: Date | string;
}
export type ConnectionStatus = "CONNECTED" | "DISCONNECTED";
export type DateType = Date | string;

export type DeleteFlag = boolean;

export interface DescribeTunnelRequest {
  tunnelId: string;
}
export interface DescribeTunnelResponse {
  tunnel?: Tunnel;
}
export type Description = string;

export interface DestinationConfig {
  thingName?: string;
  services: Array<string>;
}
export type ErrorMessage = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListTunnelsRequest {
  thingName?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTunnelsResponse {
  tunnelSummaries?: Array<TunnelSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export type NextToken = string;

export interface OpenTunnelRequest {
  description?: string;
  tags?: Array<Tag>;
  destinationConfig?: DestinationConfig;
  timeoutConfig?: TimeoutConfig;
}
export interface OpenTunnelResponse {
  tunnelId?: string;
  tunnelArn?: string;
  sourceAccessToken?: string;
  destinationAccessToken?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RotateTunnelAccessTokenRequest {
  tunnelId: string;
  clientMode: ClientMode;
  destinationConfig?: DestinationConfig;
}
export interface RotateTunnelAccessTokenResponse {
  tunnelArn?: string;
  sourceAccessToken?: string;
  destinationAccessToken?: string;
}
export type Service = string;

export type ServiceList = Array<string>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type ThingName = string;

export interface TimeoutConfig {
  maxLifetimeTimeoutMinutes?: number;
}
export type TimeoutInMin = number;

export interface Tunnel {
  tunnelId?: string;
  tunnelArn?: string;
  status?: TunnelStatus;
  sourceConnectionState?: ConnectionState;
  destinationConnectionState?: ConnectionState;
  description?: string;
  destinationConfig?: DestinationConfig;
  timeoutConfig?: TimeoutConfig;
  tags?: Array<Tag>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type TunnelArn = string;

export type TunnelId = string;

export type TunnelStatus = "OPEN" | "CLOSED";
export interface TunnelSummary {
  tunnelId?: string;
  tunnelArn?: string;
  status?: TunnelStatus;
  description?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type TunnelSummaryList = Array<TunnelSummary>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export declare namespace CloseTunnel {
  export type Input = CloseTunnelRequest;
  export type Output = CloseTunnelResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTunnel {
  export type Input = DescribeTunnelRequest;
  export type Output = DescribeTunnelResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTunnels {
  export type Input = ListTunnelsRequest;
  export type Output = ListTunnelsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace OpenTunnel {
  export type Input = OpenTunnelRequest;
  export type Output = OpenTunnelResponse;
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace RotateTunnelAccessToken {
  export type Input = RotateTunnelAccessTokenRequest;
  export type Output = RotateTunnelAccessTokenResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

