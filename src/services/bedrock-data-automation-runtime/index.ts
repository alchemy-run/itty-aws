import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BedrockDataAutomationRuntime extends AWSServiceClient {
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
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
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
  readonly message?: string;
}> {}
export interface AssetProcessingConfiguration {
  video?: VideoAssetProcessingConfiguration;
}
export type AutomationJobStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "SERVICE_ERROR"
  | "CLIENT_ERROR";
export interface Blueprint {
  blueprintArn: string;
  version?: string;
  stage?: BlueprintStage;
}
export type BlueprintArn = string;

export type BlueprintList = Array<Blueprint>;
export type BlueprintStage = "DEVELOPMENT" | "LIVE";
export type BlueprintVersion = string;

export type DataAutomationArn = string;

export interface DataAutomationConfiguration {
  dataAutomationProjectArn: string;
  stage?: DataAutomationStage;
}
export type DataAutomationProfileArn = string;

export type DataAutomationStage = "LIVE" | "DEVELOPMENT";
export interface EncryptionConfiguration {
  kmsKeyId: string;
  kmsEncryptionContext?: Record<string, string>;
}
export type EncryptionContextKey = string;

export type EncryptionContextMap = Record<string, string>;
export type EncryptionContextValue = string;

export interface EventBridgeConfiguration {
  eventBridgeEnabled: boolean;
}
export interface GetDataAutomationStatusRequest {
  invocationArn: string;
}
export interface GetDataAutomationStatusResponse {
  status?: AutomationJobStatus;
  errorType?: string;
  errorMessage?: string;
  outputConfiguration?: OutputConfiguration;
}
export type IdempotencyToken = string;

export interface InputConfiguration {
  s3Uri: string;
  assetProcessingConfiguration?: AssetProcessingConfiguration;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type InvocationArn = string;

export interface InvokeDataAutomationAsyncRequest {
  clientToken?: string;
  inputConfiguration: InputConfiguration;
  outputConfiguration: OutputConfiguration;
  dataAutomationConfiguration?: DataAutomationConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
  notificationConfiguration?: NotificationConfiguration;
  blueprints?: Array<Blueprint>;
  dataAutomationProfileArn: string;
  tags?: Array<Tag>;
}
export interface InvokeDataAutomationAsyncResponse {
  invocationArn: string;
}
export type KMSKeyId = string;

export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type NonBlankString = string;

export interface NotificationConfiguration {
  eventBridgeConfiguration: EventBridgeConfiguration;
}
export interface OutputConfiguration {
  s3Uri: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type S3Uri = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface Tag {
  key: string;
  value: string;
}
export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface TimestampSegment {
  startTimeMillis: number;
  endTimeMillis: number;
}
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VideoAssetProcessingConfiguration {
  segmentConfiguration?: VideoSegmentConfiguration;
}
interface _VideoSegmentConfiguration {
  timestampSegment?: TimestampSegment;
}

export type VideoSegmentConfiguration = _VideoSegmentConfiguration & {
  timestampSegment: TimestampSegment;
};
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
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
