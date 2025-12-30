import * as Schema from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class DeleteContainerInput extends Schema.Class<DeleteContainerInput>("DeleteContainerInput")({ContainerName: Schema.String}) {}
export class DeleteContainerOutput extends Schema.Class<DeleteContainerOutput>("DeleteContainerOutput")({}) {}
export class DeleteContainerPolicyInput extends Schema.Class<DeleteContainerPolicyInput>("DeleteContainerPolicyInput")({ContainerName: Schema.String}) {}
export class DeleteContainerPolicyOutput extends Schema.Class<DeleteContainerPolicyOutput>("DeleteContainerPolicyOutput")({}) {}
export class DeleteCorsPolicyInput extends Schema.Class<DeleteCorsPolicyInput>("DeleteCorsPolicyInput")({ContainerName: Schema.String}) {}
export class DeleteCorsPolicyOutput extends Schema.Class<DeleteCorsPolicyOutput>("DeleteCorsPolicyOutput")({}) {}
export class DeleteLifecyclePolicyInput extends Schema.Class<DeleteLifecyclePolicyInput>("DeleteLifecyclePolicyInput")({ContainerName: Schema.String}) {}
export class DeleteLifecyclePolicyOutput extends Schema.Class<DeleteLifecyclePolicyOutput>("DeleteLifecyclePolicyOutput")({}) {}
export class DeleteMetricPolicyInput extends Schema.Class<DeleteMetricPolicyInput>("DeleteMetricPolicyInput")({ContainerName: Schema.String}) {}
export class DeleteMetricPolicyOutput extends Schema.Class<DeleteMetricPolicyOutput>("DeleteMetricPolicyOutput")({}) {}
export class DescribeContainerInput extends Schema.Class<DescribeContainerInput>("DescribeContainerInput")({ContainerName: Schema.optional(Schema.String)}) {}
export class GetContainerPolicyInput extends Schema.Class<GetContainerPolicyInput>("GetContainerPolicyInput")({ContainerName: Schema.String}) {}
export class GetCorsPolicyInput extends Schema.Class<GetCorsPolicyInput>("GetCorsPolicyInput")({ContainerName: Schema.String}) {}
export class GetLifecyclePolicyInput extends Schema.Class<GetLifecyclePolicyInput>("GetLifecyclePolicyInput")({ContainerName: Schema.String}) {}
export class GetMetricPolicyInput extends Schema.Class<GetMetricPolicyInput>("GetMetricPolicyInput")({ContainerName: Schema.String}) {}
export class ListContainersInput extends Schema.Class<ListContainersInput>("ListContainersInput")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceInput extends Schema.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({Resource: Schema.String}) {}
export class PutContainerPolicyInput extends Schema.Class<PutContainerPolicyInput>("PutContainerPolicyInput")({ContainerName: Schema.String, Policy: Schema.String}) {}
export class PutContainerPolicyOutput extends Schema.Class<PutContainerPolicyOutput>("PutContainerPolicyOutput")({}) {}
export class PutLifecyclePolicyInput extends Schema.Class<PutLifecyclePolicyInput>("PutLifecyclePolicyInput")({ContainerName: Schema.String, LifecyclePolicy: Schema.String}) {}
export class PutLifecyclePolicyOutput extends Schema.Class<PutLifecyclePolicyOutput>("PutLifecyclePolicyOutput")({}) {}
export class StartAccessLoggingInput extends Schema.Class<StartAccessLoggingInput>("StartAccessLoggingInput")({ContainerName: Schema.String}) {}
export class StartAccessLoggingOutput extends Schema.Class<StartAccessLoggingOutput>("StartAccessLoggingOutput")({}) {}
export class StopAccessLoggingInput extends Schema.Class<StopAccessLoggingInput>("StopAccessLoggingInput")({ContainerName: Schema.String}) {}
export class StopAccessLoggingOutput extends Schema.Class<StopAccessLoggingOutput>("StopAccessLoggingOutput")({}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.optional(Schema.String)}) {}
export const TagList = Schema.Array(Tag);
export class TagResourceInput extends Schema.Class<TagResourceInput>("TagResourceInput")({Resource: Schema.String, Tags: TagList}) {}
export class TagResourceOutput extends Schema.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends Schema.Class<UntagResourceInput>("UntagResourceInput")({Resource: Schema.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends Schema.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const AllowedOrigins = Schema.Array(Schema.String);
export const AllowedMethods = Schema.Array(Schema.String);
export const AllowedHeaders = Schema.Array(Schema.String);
export const ExposeHeaders = Schema.Array(Schema.String);
export class Container extends Schema.Class<Container>("Container")({Endpoint: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), ARN: Schema.optional(Schema.String), Name: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), AccessLoggingEnabled: Schema.optional(Schema.Boolean)}) {}
export const ContainerList = Schema.Array(Container);
export class CorsRule extends Schema.Class<CorsRule>("CorsRule")({AllowedOrigins: AllowedOrigins, AllowedMethods: Schema.optional(AllowedMethods), AllowedHeaders: AllowedHeaders, MaxAgeSeconds: Schema.optional(Schema.Number), ExposeHeaders: Schema.optional(ExposeHeaders)}) {}
export const CorsPolicy = Schema.Array(CorsRule);
export class CreateContainerInput extends Schema.Class<CreateContainerInput>("CreateContainerInput")({ContainerName: Schema.String, Tags: Schema.optional(TagList)}) {}
export class ContainerInUseException extends Schema.Class<ContainerInUseException>("ContainerInUseException")({Message: Schema.optional(Schema.String)}) {}
export class ContainerNotFoundException extends Schema.Class<ContainerNotFoundException>("ContainerNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class CorsPolicyNotFoundException extends Schema.Class<CorsPolicyNotFoundException>("CorsPolicyNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class InternalServerError extends Schema.Class<InternalServerError>("InternalServerError")({Message: Schema.optional(Schema.String)}) {}
export class PolicyNotFoundException extends Schema.Class<PolicyNotFoundException>("PolicyNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class GetContainerPolicyOutput extends Schema.Class<GetContainerPolicyOutput>("GetContainerPolicyOutput")({Policy: Schema.String}) {}
export class GetCorsPolicyOutput extends Schema.Class<GetCorsPolicyOutput>("GetCorsPolicyOutput")({CorsPolicy: CorsPolicy}) {}
export class GetLifecyclePolicyOutput extends Schema.Class<GetLifecyclePolicyOutput>("GetLifecyclePolicyOutput")({LifecyclePolicy: Schema.String}) {}
export class MetricPolicyRule extends Schema.Class<MetricPolicyRule>("MetricPolicyRule")({ObjectGroup: Schema.String, ObjectGroupName: Schema.String}) {}
export const MetricPolicyRules = Schema.Array(MetricPolicyRule);
export class MetricPolicy extends Schema.Class<MetricPolicy>("MetricPolicy")({ContainerLevelMetrics: Schema.String, MetricPolicyRules: Schema.optional(MetricPolicyRules)}) {}
export class GetMetricPolicyOutput extends Schema.Class<GetMetricPolicyOutput>("GetMetricPolicyOutput")({MetricPolicy: MetricPolicy}) {}
export class ListContainersOutput extends Schema.Class<ListContainersOutput>("ListContainersOutput")({Containers: ContainerList, NextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceOutput extends Schema.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: Schema.optional(TagList)}) {}
export class PutCorsPolicyInput extends Schema.Class<PutCorsPolicyInput>("PutCorsPolicyInput")({ContainerName: Schema.String, CorsPolicy: CorsPolicy}) {}
export class PutCorsPolicyOutput extends Schema.Class<PutCorsPolicyOutput>("PutCorsPolicyOutput")({}) {}
export class CreateContainerOutput extends Schema.Class<CreateContainerOutput>("CreateContainerOutput")({Container: Container}) {}
export class DescribeContainerOutput extends Schema.Class<DescribeContainerOutput>("DescribeContainerOutput")({Container: Schema.optional(Container)}) {}
export class PutMetricPolicyInput extends Schema.Class<PutMetricPolicyInput>("PutMetricPolicyInput")({ContainerName: Schema.String, MetricPolicy: MetricPolicy}) {}
export class PutMetricPolicyOutput extends Schema.Class<PutMetricPolicyOutput>("PutMetricPolicyOutput")({}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class ContainerInUseExceptionError extends Schema.TaggedError<ContainerInUseExceptionError>()("ContainerInUseException", ContainerInUseException.fields) {};
export class ContainerNotFoundExceptionError extends Schema.TaggedError<ContainerNotFoundExceptionError>()("ContainerNotFoundException", ContainerNotFoundException.fields) {};
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class PolicyNotFoundExceptionError extends Schema.TaggedError<PolicyNotFoundExceptionError>()("PolicyNotFoundException", PolicyNotFoundException.fields) {};
export class CorsPolicyNotFoundExceptionError extends Schema.TaggedError<CorsPolicyNotFoundExceptionError>()("CorsPolicyNotFoundException", CorsPolicyNotFoundException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};

//# Operations
export const putContainerPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutContainerPolicy" }, PutContainerPolicyInput, PutContainerPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutLifecyclePolicy" }, PutLifecyclePolicyInput, PutLifecyclePolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startAccessLogging = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StartAccessLogging" }, StartAccessLoggingInput, StartAccessLoggingOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const stopAccessLogging = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StopAccessLogging" }, StopAccessLoggingInput, StopAccessLoggingOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.TagResource" }, TagResourceInput, TagResourceOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteContainer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainer" }, DeleteContainerInput, DeleteContainerOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteContainerPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainerPolicy" }, DeleteContainerPolicyInput, DeleteContainerPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteCorsPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteCorsPolicy" }, DeleteCorsPolicyInput, DeleteCorsPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, CorsPolicyNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMetricPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteMetricPolicy" }, DeleteMetricPolicyInput, DeleteMetricPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getContainerPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetContainerPolicy" }, GetContainerPolicyInput, GetContainerPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getCorsPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetCorsPolicy" }, GetCorsPolicyInput, GetCorsPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, CorsPolicyNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getLifecyclePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetLifecyclePolicy" }, GetLifecyclePolicyInput, GetLifecyclePolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetricPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetMetricPolicy" }, GetMetricPolicyInput, GetMetricPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError, PolicyNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listContainers = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListContainers" }, ListContainersInput, ListContainersOutput, [InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putCorsPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutCorsPolicy" }, PutCorsPolicyInput, PutCorsPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeContainer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DescribeContainer" }, DescribeContainerInput, DescribeContainerOutput, [ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putMetricPolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutMetricPolicy" }, PutMetricPolicyInput, PutMetricPolicyOutput, [ContainerInUseExceptionError, ContainerNotFoundExceptionError, InternalServerErrorError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createContainer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.CreateContainer" }, CreateContainerInput, CreateContainerOutput, [ContainerInUseExceptionError, InternalServerErrorError, LimitExceededExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
