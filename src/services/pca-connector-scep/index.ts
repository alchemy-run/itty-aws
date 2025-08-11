import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class PcaConnectorScep extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AzureApplicationId = string;

export type AzureDomain = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message: string;
}> {}
export type CertificateAuthorityArn = string;

export interface Challenge {
  Arn?: string;
  ConnectorArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Password?: string;
}
export type ChallengeArn = string;

export interface ChallengeMetadata {
  Arn?: string;
  ConnectorArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ChallengeMetadataList = Array<ChallengeMetadataSummary>;
export interface ChallengeMetadataSummary {
  Arn?: string;
  ConnectorArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface Connector {
  Arn?: string;
  CertificateAuthorityArn?: string;
  Type?: ConnectorType;
  MobileDeviceManagement?: MobileDeviceManagement;
  OpenIdConfiguration?: OpenIdConfiguration;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  Endpoint?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ConnectorArn = string;

export type ConnectorList = Array<ConnectorSummary>;
export type ConnectorStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
export type ConnectorStatusReason =
  | "INTERNAL_FAILURE"
  | "PRIVATECA_ACCESS_DENIED"
  | "PRIVATECA_INVALID_STATE"
  | "PRIVATECA_RESOURCE_NOT_FOUND";
export interface ConnectorSummary {
  Arn?: string;
  CertificateAuthorityArn?: string;
  Type?: ConnectorType;
  MobileDeviceManagement?: MobileDeviceManagement;
  OpenIdConfiguration?: OpenIdConfiguration;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  Endpoint?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ConnectorType = "GENERAL_PURPOSE" | "INTUNE";
export interface CreateChallengeRequest {
  ConnectorArn: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateChallengeResponse {
  Challenge?: Challenge;
}
export interface CreateConnectorRequest {
  CertificateAuthorityArn: string;
  MobileDeviceManagement?: MobileDeviceManagement;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateConnectorResponse {
  ConnectorArn?: string;
}
export interface DeleteChallengeRequest {
  ChallengeArn: string;
}
export interface DeleteConnectorRequest {
  ConnectorArn: string;
}
export interface GetChallengeMetadataRequest {
  ChallengeArn: string;
}
export interface GetChallengeMetadataResponse {
  ChallengeMetadata?: ChallengeMetadata;
}
export interface GetChallengePasswordRequest {
  ChallengeArn: string;
}
export interface GetChallengePasswordResponse {
  Password?: string;
}
export interface GetConnectorRequest {
  ConnectorArn: string;
}
export interface GetConnectorResponse {
  Connector?: Connector;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface IntuneConfiguration {
  AzureApplicationId: string;
  Domain: string;
}
export interface ListChallengeMetadataRequest {
  MaxResults?: number;
  NextToken?: string;
  ConnectorArn: string;
}
export interface ListChallengeMetadataResponse {
  Challenges?: Array<ChallengeMetadataSummary>;
  NextToken?: string;
}
export interface ListConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectorsResponse {
  Connectors?: Array<ConnectorSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

interface _MobileDeviceManagement {
  Intune?: IntuneConfiguration;
}

export type MobileDeviceManagement = _MobileDeviceManagement & {
  Intune: IntuneConfiguration;
};
export type NextToken = string;

export interface OpenIdConfiguration {
  Issuer?: string;
  Subject?: string;
  Audience?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type SensitiveString = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceType: string;
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}> {}
export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "CA_CERT_VALIDITY_TOO_SHORT"
  | "INVALID_CA_USAGE_MODE"
  | "INVALID_CONNECTOR_TYPE"
  | "INVALID_STATE"
  | "NO_CLIENT_TOKEN"
  | "UNKNOWN_OPERATION"
  | "OTHER";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
