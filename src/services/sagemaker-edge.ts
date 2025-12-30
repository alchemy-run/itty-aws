import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetDeploymentsRequest extends S.Class<GetDeploymentsRequest>("GetDeploymentsRequest")({DeviceName: S.String, DeviceFleetName: S.String}) {}
export class GetDeviceRegistrationRequest extends S.Class<GetDeviceRegistrationRequest>("GetDeviceRegistrationRequest")({DeviceName: S.String, DeviceFleetName: S.String}) {}
export class EdgeMetric extends S.Class<EdgeMetric>("EdgeMetric")({Dimension: S.optional(S.String), MetricName: S.optional(S.String), Value: S.optional(S.Number), Timestamp: S.optional(S.Date)}) {}
export const EdgeMetrics = S.Array(EdgeMetric);
export class Model extends S.Class<Model>("Model")({ModelName: S.optional(S.String), ModelVersion: S.optional(S.String), LatestSampleTime: S.optional(S.Date), LatestInference: S.optional(S.Date), ModelMetrics: S.optional(EdgeMetrics)}) {}
export const Models = S.Array(Model);
export class GetDeviceRegistrationResult extends S.Class<GetDeviceRegistrationResult>("GetDeviceRegistrationResult")({DeviceRegistration: S.optional(S.String), CacheTTL: S.optional(S.String)}) {}
export class DeploymentModel extends S.Class<DeploymentModel>("DeploymentModel")({ModelHandle: S.optional(S.String), ModelName: S.optional(S.String), ModelVersion: S.optional(S.String), DesiredState: S.optional(S.String), State: S.optional(S.String), Status: S.optional(S.String), StatusReason: S.optional(S.String), RollbackFailureReason: S.optional(S.String)}) {}
export const DeploymentModels = S.Array(DeploymentModel);
export class DeploymentResult extends S.Class<DeploymentResult>("DeploymentResult")({DeploymentName: S.optional(S.String), DeploymentStatus: S.optional(S.String), DeploymentStatusMessage: S.optional(S.String), DeploymentStartTime: S.optional(S.Date), DeploymentEndTime: S.optional(S.Date), DeploymentModels: S.optional(DeploymentModels)}) {}
export class SendHeartbeatRequest extends S.Class<SendHeartbeatRequest>("SendHeartbeatRequest")({AgentMetrics: S.optional(EdgeMetrics), Models: S.optional(Models), AgentVersion: S.String, DeviceName: S.String, DeviceFleetName: S.String, DeploymentResult: S.optional(DeploymentResult)}) {}
export class Checksum extends S.Class<Checksum>("Checksum")({Type: S.optional(S.String), Sum: S.optional(S.String)}) {}
export class Definition extends S.Class<Definition>("Definition")({ModelHandle: S.optional(S.String), S3Url: S.optional(S.String), Checksum: S.optional(Checksum), State: S.optional(S.String)}) {}
export const Definitions = S.Array(Definition);
export class EdgeDeployment extends S.Class<EdgeDeployment>("EdgeDeployment")({DeploymentName: S.optional(S.String), Type: S.optional(S.String), FailureHandlingPolicy: S.optional(S.String), Definitions: S.optional(Definitions)}) {}
export const EdgeDeployments = S.Array(EdgeDeployment);
export class GetDeploymentsResult extends S.Class<GetDeploymentsResult>("GetDeploymentsResult")({Deployments: S.optional(EdgeDeployments)}) {}

//# Errors
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Use to check if a device is registered with SageMaker Edge Manager.
 */export const getDeviceRegistration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-23", uri: "/GetDeviceRegistration", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.GetDeviceRegistration" }, GetDeviceRegistrationRequest, GetDeviceRegistrationResult, [InternalServiceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use to get the current status of devices registered on SageMaker Edge Manager.
 */export const sendHeartbeat = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-23", uri: "/SendHeartbeat", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.SendHeartbeat" }, SendHeartbeatRequest, S.Struct({}), [InternalServiceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use to get the active deployments from a device.
 */export const getDeployments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-23", uri: "/GetDeployments", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.GetDeployments" }, GetDeploymentsRequest, GetDeploymentsResult, [InternalServiceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
