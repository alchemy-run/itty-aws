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
/**
 * Creates an access policy for the specified container to restrict the users and
 * clients that can access it. For information about the data that is included in an access
 * policy, see the AWS Identity and
 * Access Management User Guide.
 * 
 * 
 * For this release of the REST API, you can create only one policy for a container. If
 * you enter `PutContainerPolicy` twice, the second command modifies the existing
 * policy.
 */export const putContainerPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutContainerPolicy" }, PutContainerPolicyInput, PutContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.
 * 
 * 
 * For information about how to construct an object lifecycle policy, see Components of an Object Lifecycle Policy.
 */export const putLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutLifecyclePolicy" }, PutLifecyclePolicyInput, PutLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
 */export const startAccessLogging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StartAccessLogging" }, StartAccessLoggingInput, StartAccessLoggingOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
 */export const stopAccessLogging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.StopAccessLogging" }, StopAccessLoggingInput, StopAccessLoggingOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the
 * tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50
 * tags to each container. For more information about tagging, including naming and usage conventions, see Tagging Resources in MediaStore.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.TagResource" }, TagResourceInput, TagResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from the specified container. You can specify one or more tags to remove.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified container. Before you make a `DeleteContainer`
 * request, delete any objects in the container or in any folders in the container. You can
 * delete only empty containers.
 */export const deleteContainer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainer" }, DeleteContainerInput, DeleteContainerOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the access policy that is associated with the specified container.
 */export const deleteContainerPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteContainerPolicy" }, DeleteContainerPolicyInput, DeleteContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the cross-origin resource sharing (CORS) configuration information that is
 * set for the container.
 * 
 * 
 * To use this operation, you must have permission to perform the
 * `MediaStore:DeleteCorsPolicy` action. The container owner has this permission
 * by default and can grant this permission to others.
 */export const deleteCorsPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteCorsPolicy" }, DeleteCorsPolicyInput, DeleteCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, CorsPolicyNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
 */export const deleteLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
 */export const deleteMetricPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DeleteMetricPolicy" }, DeleteMetricPolicyInput, DeleteMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the access policy for the specified container. For information about the
 * data that is included in an access policy, see the AWS Identity and Access Management User
 * Guide.
 */export const getContainerPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetContainerPolicy" }, GetContainerPolicyInput, GetContainerPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the cross-origin resource sharing (CORS) configuration information that is
 * set for the container.
 * 
 * 
 * To use this operation, you must have permission to perform the
 * `MediaStore:GetCorsPolicy` action. By default, the container owner has this
 * permission and can grant it to others.
 */export const getCorsPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetCorsPolicy" }, GetCorsPolicyInput, GetCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, CorsPolicyNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the object lifecycle policy that is assigned to a container.
 */export const getLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetLifecyclePolicy" }, GetLifecyclePolicyInput, GetLifecyclePolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the metric policy for the specified container.
 */export const getMetricPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.GetMetricPolicy" }, GetMetricPolicyInput, GetMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError, PolicyNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the properties of all containers in AWS Elemental MediaStore.
 * 
 * 
 * You can query to receive all the containers in one response. Or you can include the
 * `MaxResults` parameter to receive a limited number of containers in each
 * response. In this case, the response includes a token. To get the next set of containers,
 * send the command again, this time with the `NextToken` parameter (with the
 * returned token as its value). The next set of responses appears, with a token if there are
 * still more containers to receive.
 * 
 * 
 * See also DescribeContainer, which gets the properties of one
 * container.
 */export const listContainers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListContainers" }, ListContainersInput, ListContainersOutput, [InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the tags assigned to the specified container.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the cross-origin resource sharing (CORS) configuration on a container so that
 * the container can service cross-origin requests. For example, you might want to enable a
 * request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 * container at my.example.container.com by using the browser's XMLHttpRequest
 * capability.
 * 
 * 
 * To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 * policy, you configure rules that identify origins and the HTTP methods that can be executed
 * on your container. The policy can contain up to 398,000 characters. You can add up to 100
 * rules to a CORS policy. If more than one rule applies, the service uses the first
 * applicable rule listed.
 * 
 * 
 * To learn more about CORS, see Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore.
 */export const putCorsPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutCorsPolicy" }, PutCorsPolicyInput, PutCorsPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the properties of the requested container. This request is commonly used to
 * retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 * new container is created. A container's endpoint does not change after it has been
 * assigned. The `DescribeContainer` request returns a single
 * `Container` object based on `ContainerName`. To return all
 * `Container` objects that are associated with a specified AWS account, use
 * ListContainers.
 */export const describeContainer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.DescribeContainer" }, DescribeContainerInput, DescribeContainerOutput, [ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
 */export const putMetricPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.PutMetricPolicy" }, PutMetricPolicyInput, PutMetricPolicyOutput, [ContainerInUseException, ContainerNotFoundException, InternalServerError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a storage container to hold objects. A container is similar to a bucket in
 * the Amazon S3 service.
 */export const createContainer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", sdkId: "MediaStore", sigV4ServiceName: "mediastore", name: "MediaStore_20170901.CreateContainer" }, CreateContainerInput, CreateContainerOutput, [ContainerInUseException, InternalServerError, LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
