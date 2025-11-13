import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SagemakerEdge extends AWSServiceClient {
  getDeployments(
    input: GetDeploymentsRequest,
  ): Effect.Effect<
    GetDeploymentsResult,
    InternalServiceException | CommonAwsError
  >;
  getDeviceRegistration(
    input: GetDeviceRegistrationRequest,
  ): Effect.Effect<
    GetDeviceRegistrationResult,
    InternalServiceException | CommonAwsError
  >;
  sendHeartbeat(
    input: SendHeartbeatRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | CommonAwsError
  >;
}

export type CacheTTLSeconds = string;

export interface Checksum {
  Type?: ChecksumType;
  Sum?: string;
}
export type ChecksumString = string;

export type ChecksumType = "SHA1";
export interface Definition {
  ModelHandle?: string;
  S3Url?: string;
  Checksum?: Checksum;
  State?: ModelState;
}
export type Definitions = Array<Definition>;
export interface DeploymentModel {
  ModelHandle?: string;
  ModelName?: string;
  ModelVersion?: string;
  DesiredState?: ModelState;
  State?: ModelState;
  Status?: DeploymentStatus;
  StatusReason?: string;
  RollbackFailureReason?: string;
}
export type DeploymentModels = Array<DeploymentModel>;
export interface DeploymentResult {
  DeploymentName?: string;
  DeploymentStatus?: string;
  DeploymentStatusMessage?: string;
  DeploymentStartTime?: Date | string;
  DeploymentEndTime?: Date | string;
  DeploymentModels?: Array<DeploymentModel>;
}
export type DeploymentStatus = "SUCCESS" | "FAIL";
export type DeploymentType = "Model";
export type DeviceFleetName = string;

export type DeviceName = string;

export type DeviceRegistration = string;

export type Dimension = string;

export interface EdgeDeployment {
  DeploymentName?: string;
  Type?: DeploymentType;
  FailureHandlingPolicy?: FailureHandlingPolicy;
  Definitions?: Array<Definition>;
}
export type EdgeDeployments = Array<EdgeDeployment>;
export interface EdgeMetric {
  Dimension?: string;
  MetricName?: string;
  Value?: number;
  Timestamp?: Date | string;
}
export type EdgeMetrics = Array<EdgeMetric>;
export type EntityName = string;

export type ErrorMessage = string;

export type FailureHandlingPolicy = "ROLLBACK_ON_FAILURE" | "DO_NOTHING";
export interface GetDeploymentsRequest {
  DeviceName: string;
  DeviceFleetName: string;
}
export interface GetDeploymentsResult {
  Deployments?: Array<EdgeDeployment>;
}
export interface GetDeviceRegistrationRequest {
  DeviceName: string;
  DeviceFleetName: string;
}
export interface GetDeviceRegistrationResult {
  DeviceRegistration?: string;
  CacheTTL?: string;
}
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export type Metric = string;

export interface Model {
  ModelName?: string;
  ModelVersion?: string;
  LatestSampleTime?: Date | string;
  LatestInference?: Date | string;
  ModelMetrics?: Array<EdgeMetric>;
}
export type ModelName = string;

export type Models = Array<Model>;
export type ModelState = "DEPLOY" | "UNDEPLOY";
export type S3Uri = string;

export interface SendHeartbeatRequest {
  AgentMetrics?: Array<EdgeMetric>;
  Models?: Array<Model>;
  AgentVersion: string;
  DeviceName: string;
  DeviceFleetName: string;
  DeploymentResult?: DeploymentResult;
}
export type SagemakerEdgeString = string;

export type Timestamp = Date | string;

export type Value = number;

export type Version = string;

export declare namespace GetDeployments {
  export type Input = GetDeploymentsRequest;
  export type Output = GetDeploymentsResult;
  export type Error =
    | InternalServiceException
    | CommonAwsError;
}

export declare namespace GetDeviceRegistration {
  export type Input = GetDeviceRegistrationRequest;
  export type Output = GetDeviceRegistrationResult;
  export type Error =
    | InternalServiceException
    | CommonAwsError;
}

export declare namespace SendHeartbeat {
  export type Input = SendHeartbeatRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | CommonAwsError;
}

export type SagemakerEdgeErrors = InternalServiceException | CommonAwsError;

