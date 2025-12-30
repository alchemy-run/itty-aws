import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetDeploymentsRequest = Schema.Struct({DeviceName: Schema.String, DeviceFleetName: Schema.String});
export const GetDeviceRegistrationRequest = Schema.Struct({DeviceName: Schema.String, DeviceFleetName: Schema.String});
export const EdgeMetric = Schema.Struct({Dimension: Schema.optional(Schema.String), MetricName: Schema.optional(Schema.String), Value: Schema.optional(Schema.Number), Timestamp: Schema.optional(Schema.Date)});
export const EdgeMetrics = Schema.Array(EdgeMetric);
export const Model = Schema.Struct({ModelName: Schema.optional(Schema.String), ModelVersion: Schema.optional(Schema.String), LatestSampleTime: Schema.optional(Schema.Date), LatestInference: Schema.optional(Schema.Date), ModelMetrics: Schema.optional(EdgeMetrics)});
export const Models = Schema.Array(Model);
export const GetDeviceRegistrationResult = Schema.Struct({DeviceRegistration: Schema.optional(Schema.String), CacheTTL: Schema.optional(Schema.String)});
export const DeploymentModel = Schema.Struct({ModelHandle: Schema.optional(Schema.String), ModelName: Schema.optional(Schema.String), ModelVersion: Schema.optional(Schema.String), DesiredState: Schema.optional(Schema.String), State: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), StatusReason: Schema.optional(Schema.String), RollbackFailureReason: Schema.optional(Schema.String)});
export const DeploymentModels = Schema.Array(DeploymentModel);
export const DeploymentResult = Schema.Struct({DeploymentName: Schema.optional(Schema.String), DeploymentStatus: Schema.optional(Schema.String), DeploymentStatusMessage: Schema.optional(Schema.String), DeploymentStartTime: Schema.optional(Schema.Date), DeploymentEndTime: Schema.optional(Schema.Date), DeploymentModels: Schema.optional(DeploymentModels)});
export const InternalServiceException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SendHeartbeatRequest = Schema.Struct({AgentMetrics: Schema.optional(EdgeMetrics), Models: Schema.optional(Models), AgentVersion: Schema.String, DeviceName: Schema.String, DeviceFleetName: Schema.String, DeploymentResult: Schema.optional(DeploymentResult)});
export const Checksum = Schema.Struct({Type: Schema.optional(Schema.String), Sum: Schema.optional(Schema.String)});
export const Definition = Schema.Struct({ModelHandle: Schema.optional(Schema.String), S3Url: Schema.optional(Schema.String), Checksum: Schema.optional(Checksum), State: Schema.optional(Schema.String)});
export const Definitions = Schema.Array(Definition);
export const EdgeDeployment = Schema.Struct({DeploymentName: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), FailureHandlingPolicy: Schema.optional(Schema.String), Definitions: Schema.optional(Definitions)});
export const EdgeDeployments = Schema.Array(EdgeDeployment);
export const GetDeploymentsResult = Schema.Struct({Deployments: Schema.optional(EdgeDeployments)});

//# Errors
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException) {};

//# Operations
export const getDeviceRegistration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-23", uri: "/GetDeviceRegistration", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.GetDeviceRegistration" }, GetDeviceRegistrationRequest, GetDeviceRegistrationResult, [InternalServiceExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const sendHeartbeat = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-23", uri: "/SendHeartbeat", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.SendHeartbeat" }, SendHeartbeatRequest, Schema.Struct({}), [InternalServiceExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDeployments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-23", uri: "/GetDeployments", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerEdge.GetDeployments" }, GetDeploymentsRequest, GetDeploymentsResult, [InternalServiceExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
