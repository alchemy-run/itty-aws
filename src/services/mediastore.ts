import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteContainerInput extends S.Class<DeleteContainerInput>("DeleteContainerInput")({ContainerName: S.String}) {}
export class DeleteContainerOutput extends S.Class<DeleteContainerOutput>("DeleteContainerOutput")({}) {}
export class DeleteContainerPolicyInput extends S.Class<DeleteContainerPolicyInput>("DeleteContainerPolicyInput")({ContainerName: S.String}) {}
export class DeleteContainerPolicyOutput extends S.Class<DeleteContainerPolicyOutput>("DeleteContainerPolicyOutput")({}) {}
export class DeleteCorsPolicyInput extends S.Class<DeleteCorsPolicyInput>("DeleteCorsPolicyInput")({ContainerName: S.String}) {}
export class DeleteCorsPolicyOutput extends S.Class<DeleteCorsPolicyOutput>("DeleteCorsPolicyOutput")({}) {}
export class DeleteLifecyclePolicyInput extends S.Class<DeleteLifecyclePolicyInput>("DeleteLifecyclePolicyInput")({ContainerName: S.String}) {}
export class DeleteLifecyclePolicyOutput extends S.Class<DeleteLifecyclePolicyOutput>("DeleteLifecyclePolicyOutput")({}) {}
export class DeleteMetricPolicyInput extends S.Class<DeleteMetricPolicyInput>("DeleteMetricPolicyInput")({ContainerName: S.String}) {}
export class DeleteMetricPolicyOutput extends S.Class<DeleteMetricPolicyOutput>("DeleteMetricPolicyOutput")({}) {}
export class DescribeContainerInput extends S.Class<DescribeContainerInput>("DescribeContainerInput")({ContainerName: S.optional(S.String)}) {}
export class GetContainerPolicyInput extends S.Class<GetContainerPolicyInput>("GetContainerPolicyInput")({ContainerName: S.String}) {}
export class GetCorsPolicyInput extends S.Class<GetCorsPolicyInput>("GetCorsPolicyInput")({ContainerName: S.String}) {}
export class GetLifecyclePolicyInput extends S.Class<GetLifecyclePolicyInput>("GetLifecyclePolicyInput")({ContainerName: S.String}) {}
export class GetMetricPolicyInput extends S.Class<GetMetricPolicyInput>("GetMetricPolicyInput")({ContainerName: S.String}) {}
export class ListContainersInput extends S.Class<ListContainersInput>("ListContainersInput")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({Resource: S.String}) {}
export class PutContainerPolicyInput extends S.Class<PutContainerPolicyInput>("PutContainerPolicyInput")({ContainerName: S.String, Policy: S.String}) {}
export class PutContainerPolicyOutput extends S.Class<PutContainerPolicyOutput>("PutContainerPolicyOutput")({}) {}
export class PutLifecyclePolicyInput extends S.Class<PutLifecyclePolicyInput>("PutLifecyclePolicyInput")({ContainerName: S.String, LifecyclePolicy: S.String}) {}
export class PutLifecyclePolicyOutput extends S.Class<PutLifecyclePolicyOutput>("PutLifecyclePolicyOutput")({}) {}
export class StartAccessLoggingInput extends S.Class<StartAccessLoggingInput>("StartAccessLoggingInput")({ContainerName: S.String}) {}
export class StartAccessLoggingOutput extends S.Class<StartAccessLoggingOutput>("StartAccessLoggingOutput")({}) {}
export class StopAccessLoggingInput extends S.Class<StopAccessLoggingInput>("StopAccessLoggingInput")({ContainerName: S.String}) {}
export class StopAccessLoggingOutput extends S.Class<StopAccessLoggingOutput>("StopAccessLoggingOutput")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({Resource: S.String, Tags: TagList}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({Resource: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const AllowedOrigins = S.Array(S.String);
export const AllowedMethods = S.Array(S.String);
export const AllowedHeaders = S.Array(S.String);
export const ExposeHeaders = S.Array(S.String);
export class Container extends S.Class<Container>("Container")({Endpoint: S.optional(S.String), CreationTime: S.optional(S.Date), ARN: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), AccessLoggingEnabled: S.optional(S.Boolean)}) {}
export const ContainerList = S.Array(Container);
export class CorsRule extends S.Class<CorsRule>("CorsRule")({AllowedOrigins: AllowedOrigins, AllowedMethods: S.optional(AllowedMethods), AllowedHeaders: AllowedHeaders, MaxAgeSeconds: S.optional(S.Number), ExposeHeaders: S.optional(ExposeHeaders)}) {}
export const CorsPolicy = S.Array(CorsRule);
export class CreateContainerInput extends S.Class<CreateContainerInput>("CreateContainerInput")({ContainerName: S.String, Tags: S.optional(TagList)}) {}
export class GetContainerPolicyOutput extends S.Class<GetContainerPolicyOutput>("GetContainerPolicyOutput")({Policy: S.String}) {}
export class GetCorsPolicyOutput extends S.Class<GetCorsPolicyOutput>("GetCorsPolicyOutput")({CorsPolicy: CorsPolicy}) {}
export class GetLifecyclePolicyOutput extends S.Class<GetLifecyclePolicyOutput>("GetLifecyclePolicyOutput")({LifecyclePolicy: S.String}) {}
export class MetricPolicyRule extends S.Class<MetricPolicyRule>("MetricPolicyRule")({ObjectGroup: S.String, ObjectGroupName: S.String}) {}
export const MetricPolicyRules = S.Array(MetricPolicyRule);
export class MetricPolicy extends S.Class<MetricPolicy>("MetricPolicy")({ContainerLevelMetrics: S.String, MetricPolicyRules: S.optional(MetricPolicyRules)}) {}
export class GetMetricPolicyOutput extends S.Class<GetMetricPolicyOutput>("GetMetricPolicyOutput")({MetricPolicy: MetricPolicy}) {}
export class ListContainersOutput extends S.Class<ListContainersOutput>("ListContainersOutput")({Containers: ContainerList, NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagList)}) {}
export class PutCorsPolicyInput extends S.Class<PutCorsPolicyInput>("PutCorsPolicyInput")({ContainerName: S.String, CorsPolicy: CorsPolicy}) {}
export class PutCorsPolicyOutput extends S.Class<PutCorsPolicyOutput>("PutCorsPolicyOutput")({}) {}
export class CreateContainerOutput extends S.Class<CreateContainerOutput>("CreateContainerOutput")({Container: Container}) {}
export class DescribeContainerOutput extends S.Class<DescribeContainerOutput>("DescribeContainerOutput")({Container: S.optional(Container)}) {}
export class PutMetricPolicyInput extends S.Class<PutMetricPolicyInput>("PutMetricPolicyInput")({ContainerName: S.String, MetricPolicy: MetricPolicy}) {}
export class PutMetricPolicyOutput extends S.Class<PutMetricPolicyOutput>("PutMetricPolicyOutput")({}) {}

//# Errors
export class ContainerInUseException extends S.TaggedError<ContainerInUseException>()("ContainerInUseException", {}) {};
export class ContainerNotFoundException extends S.TaggedError<ContainerNotFoundException>()("ContainerNotFoundException", {}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {}) {};
export class PolicyNotFoundException extends S.TaggedError<PolicyNotFoundException>()("PolicyNotFoundException", {}) {};
export class CorsPolicyNotFoundException extends S.TaggedError<CorsPolicyNotFoundException>()("CorsPolicyNotFoundException", {Message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {Message: S.optional(S.String)}) {};

//# Operations
export const putContainerPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutContainerPolicy" }, PutContainerPolicyInput, PutContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutLifecyclePolicy" }, PutLifecyclePolicyInput, PutLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startAccessLogging = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StartAccessLogging" }, StartAccessLoggingInput, StartAccessLoggingOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const stopAccessLogging = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StopAccessLogging" }, StopAccessLoggingInput, StopAccessLoggingOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.TagResource" }, TagResourceInput, TagResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteContainer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainer" }, DeleteContainerInput, DeleteContainerOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteContainerPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainerPolicy" }, DeleteContainerPolicyInput, DeleteContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteCorsPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteCorsPolicy" }, DeleteCorsPolicyInput, DeleteCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, CorsPolicyNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMetricPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteMetricPolicy" }, DeleteMetricPolicyInput, DeleteMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getContainerPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetContainerPolicy" }, GetContainerPolicyInput, GetContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getCorsPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetCorsPolicy" }, GetCorsPolicyInput, GetCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, CorsPolicyNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getLifecyclePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetLifecyclePolicy" }, GetLifecyclePolicyInput, GetLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getMetricPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetMetricPolicy" }, GetMetricPolicyInput, GetMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listContainers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListContainers" }, ListContainersInput, ListContainersOutput, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putCorsPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutCorsPolicy" }, PutCorsPolicyInput, PutCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeContainer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DescribeContainer" }, DescribeContainerInput, DescribeContainerOutput, [ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putMetricPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutMetricPolicy" }, PutMetricPolicyInput, PutMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createContainer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "POST", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.CreateContainer" }, CreateContainerInput, CreateContainerOutput, [ContainerInUseException, InternalServerError, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
