import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetDeploymentsRequest = Schema.Struct({DeviceName: Schema.String, DeviceFleetName: Schema.String})
const GetDeviceRegistrationRequest = Schema.Struct({DeviceName: Schema.String, DeviceFleetName: Schema.String})
const EdgeMetric = Schema.Struct({Dimension: Schema.optional(Schema.String), MetricName: Schema.optional(Schema.String), Value: Schema.optional(Schema.Number), Timestamp: Schema.optional(Schema.Date)})
const EdgeMetrics = Schema.Array(EdgeMetric)
const Model = Schema.Struct({ModelName: Schema.optional(Schema.String), ModelVersion: Schema.optional(Schema.String), LatestSampleTime: Schema.optional(Schema.Date), LatestInference: Schema.optional(Schema.Date), ModelMetrics: Schema.optional(EdgeMetrics)})
const Models = Schema.Array(Model)
const GetDeviceRegistrationResult = Schema.Struct({DeviceRegistration: Schema.optional(Schema.String), CacheTTL: Schema.optional(Schema.String)})
const DeploymentModel = Schema.Struct({ModelHandle: Schema.optional(Schema.String), ModelName: Schema.optional(Schema.String), ModelVersion: Schema.optional(Schema.String), DesiredState: Schema.optional(Schema.String), State: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), StatusReason: Schema.optional(Schema.String), RollbackFailureReason: Schema.optional(Schema.String)})
const DeploymentModels = Schema.Array(DeploymentModel)
const DeploymentResult = Schema.Struct({DeploymentName: Schema.optional(Schema.String), DeploymentStatus: Schema.optional(Schema.String), DeploymentStatusMessage: Schema.optional(Schema.String), DeploymentStartTime: Schema.optional(Schema.Date), DeploymentEndTime: Schema.optional(Schema.Date), DeploymentModels: Schema.optional(DeploymentModels)})
const InternalServiceException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const GetDeviceRegistration = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/GetDeviceRegistration", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "GetDeviceRegistration" }, GetDeviceRegistrationRequest, GetDeviceRegistrationResult, ErrorAnnotation("InternalServiceException", InternalServiceException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const SendHeartbeatRequest = Schema.Struct({AgentMetrics: Schema.optional(EdgeMetrics), Models: Schema.optional(Models), AgentVersion: Schema.String, DeviceName: Schema.String, DeviceFleetName: Schema.String, DeploymentResult: Schema.optional(DeploymentResult)})
export const SendHeartbeat = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/SendHeartbeat", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "SendHeartbeat" }, SendHeartbeatRequest, Schema.Struct({}), ErrorAnnotation("InternalServiceException", InternalServiceException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const Checksum = Schema.Struct({Type: Schema.optional(Schema.String), Sum: Schema.optional(Schema.String)})
const Definition = Schema.Struct({ModelHandle: Schema.optional(Schema.String), S3Url: Schema.optional(Schema.String), Checksum: Schema.optional(Checksum), State: Schema.optional(Schema.String)})
const Definitions = Schema.Array(Definition)
const EdgeDeployment = Schema.Struct({DeploymentName: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), FailureHandlingPolicy: Schema.optional(Schema.String), Definitions: Schema.optional(Definitions)})
const EdgeDeployments = Schema.Array(EdgeDeployment)
const GetDeploymentsResult = Schema.Struct({Deployments: Schema.optional(EdgeDeployments)})
export const GetDeployments = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/GetDeployments", method: "POST", sdkId: "Sagemaker Edge", sigV4ServiceName: "sagemaker", name: "GetDeployments" }, GetDeploymentsRequest, GetDeploymentsResult, ErrorAnnotation("InternalServiceException", InternalServiceException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
