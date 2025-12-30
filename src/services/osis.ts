import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ListPipelineBlueprintsRequest extends S.Class<ListPipelineBlueprintsRequest>("ListPipelineBlueprintsRequest")({}) {}
export const PipelineEndpointIdsList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class DeletePipelineRequest extends S.Class<DeletePipelineRequest>("DeletePipelineRequest")({PipelineName: S.String}) {}
export class DeletePipelineResponse extends S.Class<DeletePipelineResponse>("DeletePipelineResponse")({}) {}
export class DeletePipelineEndpointRequest extends S.Class<DeletePipelineEndpointRequest>("DeletePipelineEndpointRequest")({EndpointId: S.String}) {}
export class DeletePipelineEndpointResponse extends S.Class<DeletePipelineEndpointResponse>("DeletePipelineEndpointResponse")({}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class GetPipelineRequest extends S.Class<GetPipelineRequest>("GetPipelineRequest")({PipelineName: S.String}) {}
export class GetPipelineBlueprintRequest extends S.Class<GetPipelineBlueprintRequest>("GetPipelineBlueprintRequest")({BlueprintName: S.String, Format: S.optional(S.String)}) {}
export class GetPipelineChangeProgressRequest extends S.Class<GetPipelineChangeProgressRequest>("GetPipelineChangeProgressRequest")({PipelineName: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String}) {}
export class ListPipelineEndpointConnectionsRequest extends S.Class<ListPipelineEndpointConnectionsRequest>("ListPipelineEndpointConnectionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPipelineEndpointsRequest extends S.Class<ListPipelineEndpointsRequest>("ListPipelineEndpointsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPipelinesRequest extends S.Class<ListPipelinesRequest>("ListPipelinesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({Arn: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.String, Policy: S.String}) {}
export class RevokePipelineEndpointConnectionsRequest extends S.Class<RevokePipelineEndpointConnectionsRequest>("RevokePipelineEndpointConnectionsRequest")({PipelineArn: S.String, EndpointIds: PipelineEndpointIdsList}) {}
export class StartPipelineRequest extends S.Class<StartPipelineRequest>("StartPipelineRequest")({PipelineName: S.String}) {}
export class StopPipelineRequest extends S.Class<StopPipelineRequest>("StopPipelineRequest")({PipelineName: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({Arn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({Arn: S.String, TagKeys: StringList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class CloudWatchLogDestination extends S.Class<CloudWatchLogDestination>("CloudWatchLogDestination")({LogGroup: S.String}) {}
export class LogPublishingOptions extends S.Class<LogPublishingOptions>("LogPublishingOptions")({IsLoggingEnabled: S.optional(S.Boolean), CloudWatchLogDestination: S.optional(CloudWatchLogDestination)}) {}
export class BufferOptions extends S.Class<BufferOptions>("BufferOptions")({PersistentBufferEnabled: S.Boolean}) {}
export class EncryptionAtRestOptions extends S.Class<EncryptionAtRestOptions>("EncryptionAtRestOptions")({KmsKeyArn: S.String}) {}
export class UpdatePipelineRequest extends S.Class<UpdatePipelineRequest>("UpdatePipelineRequest")({PipelineName: S.String, MinUnits: S.optional(S.Number), MaxUnits: S.optional(S.Number), PipelineConfigurationBody: S.optional(S.String), LogPublishingOptions: S.optional(LogPublishingOptions), BufferOptions: S.optional(BufferOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), PipelineRoleArn: S.optional(S.String)}) {}
export class ValidatePipelineRequest extends S.Class<ValidatePipelineRequest>("ValidatePipelineRequest")({PipelineConfigurationBody: S.String}) {}
export const SubnetIds = S.Array(S.String);
export const SecurityGroupIds = S.Array(S.String);
export class PipelineEndpointVpcOptions extends S.Class<PipelineEndpointVpcOptions>("PipelineEndpointVpcOptions")({SubnetIds: S.optional(SubnetIds), SecurityGroupIds: S.optional(SecurityGroupIds)}) {}
export class PipelineBlueprintSummary extends S.Class<PipelineBlueprintSummary>("PipelineBlueprintSummary")({BlueprintName: S.optional(S.String), DisplayName: S.optional(S.String), DisplayDescription: S.optional(S.String), Service: S.optional(S.String), UseCase: S.optional(S.String)}) {}
export const PipelineBlueprintsSummaryList = S.Array(PipelineBlueprintSummary);
export class CreatePipelineEndpointRequest extends S.Class<CreatePipelineEndpointRequest>("CreatePipelineEndpointRequest")({PipelineArn: S.String, VpcOptions: PipelineEndpointVpcOptions}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class ListPipelineBlueprintsResponse extends S.Class<ListPipelineBlueprintsResponse>("ListPipelineBlueprintsResponse")({Blueprints: S.optional(PipelineBlueprintsSummaryList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({ResourceArn: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class RevokePipelineEndpointConnectionsResponse extends S.Class<RevokePipelineEndpointConnectionsResponse>("RevokePipelineEndpointConnectionsResponse")({PipelineArn: S.optional(S.String)}) {}
export class PipelineStatusReason extends S.Class<PipelineStatusReason>("PipelineStatusReason")({Description: S.optional(S.String)}) {}
export const IngestEndpointUrlsList = S.Array(S.String);
export class VpcAttachmentOptions extends S.Class<VpcAttachmentOptions>("VpcAttachmentOptions")({AttachToVpc: S.Boolean, CidrBlock: S.optional(S.String)}) {}
export class VpcOptions extends S.Class<VpcOptions>("VpcOptions")({SubnetIds: SubnetIds, SecurityGroupIds: S.optional(SecurityGroupIds), VpcAttachmentOptions: S.optional(VpcAttachmentOptions), VpcEndpointManagement: S.optional(S.String)}) {}
export class VpcEndpoint extends S.Class<VpcEndpoint>("VpcEndpoint")({VpcEndpointId: S.optional(S.String), VpcId: S.optional(S.String), VpcOptions: S.optional(VpcOptions)}) {}
export const VpcEndpointsList = S.Array(VpcEndpoint);
export class ServiceVpcEndpoint extends S.Class<ServiceVpcEndpoint>("ServiceVpcEndpoint")({ServiceName: S.optional(S.String), VpcEndpointId: S.optional(S.String)}) {}
export const ServiceVpcEndpointsList = S.Array(ServiceVpcEndpoint);
export class PipelineDestination extends S.Class<PipelineDestination>("PipelineDestination")({ServiceName: S.optional(S.String), Endpoint: S.optional(S.String)}) {}
export const PipelineDestinationList = S.Array(PipelineDestination);
export class Pipeline extends S.Class<Pipeline>("Pipeline")({PipelineName: S.optional(S.String), PipelineArn: S.optional(S.String), MinUnits: S.optional(S.Number), MaxUnits: S.optional(S.Number), Status: S.optional(S.String), StatusReason: S.optional(PipelineStatusReason), PipelineConfigurationBody: S.optional(S.String), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), IngestEndpointUrls: S.optional(IngestEndpointUrlsList), LogPublishingOptions: S.optional(LogPublishingOptions), VpcEndpoints: S.optional(VpcEndpointsList), BufferOptions: S.optional(BufferOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), VpcEndpointService: S.optional(S.String), ServiceVpcEndpoints: S.optional(ServiceVpcEndpointsList), Destinations: S.optional(PipelineDestinationList), Tags: S.optional(TagList), PipelineRoleArn: S.optional(S.String)}) {}
export class StartPipelineResponse extends S.Class<StartPipelineResponse>("StartPipelineResponse")({Pipeline: S.optional(Pipeline)}) {}
export class StopPipelineResponse extends S.Class<StopPipelineResponse>("StopPipelineResponse")({Pipeline: S.optional(Pipeline)}) {}
export class UpdatePipelineResponse extends S.Class<UpdatePipelineResponse>("UpdatePipelineResponse")({Pipeline: S.optional(Pipeline)}) {}
export class PipelineBlueprint extends S.Class<PipelineBlueprint>("PipelineBlueprint")({BlueprintName: S.optional(S.String), PipelineConfigurationBody: S.optional(S.String), DisplayName: S.optional(S.String), DisplayDescription: S.optional(S.String), Service: S.optional(S.String), UseCase: S.optional(S.String)}) {}
export class PipelineEndpointConnection extends S.Class<PipelineEndpointConnection>("PipelineEndpointConnection")({PipelineArn: S.optional(S.String), EndpointId: S.optional(S.String), Status: S.optional(S.String), VpcEndpointOwner: S.optional(S.String)}) {}
export const PipelineEndpointConnectionsSummaryList = S.Array(PipelineEndpointConnection);
export class PipelineEndpoint extends S.Class<PipelineEndpoint>("PipelineEndpoint")({PipelineArn: S.optional(S.String), EndpointId: S.optional(S.String), Status: S.optional(S.String), VpcId: S.optional(S.String), VpcOptions: S.optional(PipelineEndpointVpcOptions), IngestEndpointUrl: S.optional(S.String)}) {}
export const PipelineEndpointsSummaryList = S.Array(PipelineEndpoint);
export class PipelineSummary extends S.Class<PipelineSummary>("PipelineSummary")({Status: S.optional(S.String), StatusReason: S.optional(PipelineStatusReason), PipelineName: S.optional(S.String), PipelineArn: S.optional(S.String), MinUnits: S.optional(S.Number), MaxUnits: S.optional(S.Number), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), Destinations: S.optional(PipelineDestinationList), Tags: S.optional(TagList)}) {}
export const PipelineSummaryList = S.Array(PipelineSummary);
export class ValidationMessage extends S.Class<ValidationMessage>("ValidationMessage")({Message: S.optional(S.String)}) {}
export const ValidationMessageList = S.Array(ValidationMessage);
export class CreatePipelineRequest extends S.Class<CreatePipelineRequest>("CreatePipelineRequest")({PipelineName: S.String, MinUnits: S.Number, MaxUnits: S.Number, PipelineConfigurationBody: S.String, LogPublishingOptions: S.optional(LogPublishingOptions), VpcOptions: S.optional(VpcOptions), BufferOptions: S.optional(BufferOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), Tags: S.optional(TagList), PipelineRoleArn: S.optional(S.String)}) {}
export class CreatePipelineEndpointResponse extends S.Class<CreatePipelineEndpointResponse>("CreatePipelineEndpointResponse")({PipelineArn: S.optional(S.String), EndpointId: S.optional(S.String), Status: S.optional(S.String), VpcId: S.optional(S.String)}) {}
export class GetPipelineBlueprintResponse extends S.Class<GetPipelineBlueprintResponse>("GetPipelineBlueprintResponse")({Blueprint: S.optional(PipelineBlueprint), Format: S.optional(S.String)}) {}
export class ListPipelineEndpointConnectionsResponse extends S.Class<ListPipelineEndpointConnectionsResponse>("ListPipelineEndpointConnectionsResponse")({NextToken: S.optional(S.String), PipelineEndpointConnections: S.optional(PipelineEndpointConnectionsSummaryList)}) {}
export class ListPipelineEndpointsResponse extends S.Class<ListPipelineEndpointsResponse>("ListPipelineEndpointsResponse")({NextToken: S.optional(S.String), PipelineEndpoints: S.optional(PipelineEndpointsSummaryList)}) {}
export class ListPipelinesResponse extends S.Class<ListPipelinesResponse>("ListPipelinesResponse")({NextToken: S.optional(S.String), Pipelines: S.optional(PipelineSummaryList)}) {}
export class ValidatePipelineResponse extends S.Class<ValidatePipelineResponse>("ValidatePipelineResponse")({isValid: S.optional(S.Boolean), Errors: S.optional(ValidationMessageList)}) {}
export class ChangeProgressStage extends S.Class<ChangeProgressStage>("ChangeProgressStage")({Name: S.optional(S.String), Status: S.optional(S.String), Description: S.optional(S.String), LastUpdatedAt: S.optional(S.Date)}) {}
export const ChangeProgressStageList = S.Array(ChangeProgressStage);
export class ChangeProgressStatus extends S.Class<ChangeProgressStatus>("ChangeProgressStatus")({StartTime: S.optional(S.Date), Status: S.optional(S.String), TotalNumberOfStages: S.optional(S.Number), ChangeProgressStages: S.optional(ChangeProgressStageList)}) {}
export const ChangeProgressStatusList = S.Array(ChangeProgressStatus);
export class CreatePipelineResponse extends S.Class<CreatePipelineResponse>("CreatePipelineResponse")({Pipeline: S.optional(Pipeline)}) {}
export class GetPipelineResponse extends S.Class<GetPipelineResponse>("GetPipelineResponse")({Pipeline: S.optional(Pipeline)}) {}
export class GetPipelineChangeProgressResponse extends S.Class<GetPipelineChangeProgressResponse>("GetPipelineChangeProgressResponse")({ChangeProgressStatuses: S.optional(ChangeProgressStatusList)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class DisabledOperationException extends S.TaggedError<DisabledOperationException>()("DisabledOperationException", {}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InvalidPaginationTokenException extends S.TaggedError<InvalidPaginationTokenException>()("InvalidPaginationTokenException", {message: S.optional(S.String)}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a resource-based policy from an OpenSearch Ingestion resource.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}", method: "DELETE", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource-based policy attached to an OpenSearch Ingestion resource.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all resource tags associated with an OpenSearch Ingestion pipeline. For more information,
 * see Tagging Amazon OpenSearch Ingestion pipelines.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/listTagsForResource", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches a resource-based policy to an OpenSearch Ingestion resource. Resource-based
 * policies grant permissions to principals to perform actions on the resource.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}", method: "PUT", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes pipeline endpoints from specified endpoint IDs.
 */export const revokePipelineEndpointConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/revokePipelineEndpointConnections", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.RevokePipelineEndpointConnections" }, RevokePipelineEndpointConnectionsRequest, RevokePipelineEndpointConnectionsResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an OpenSearch Ingestion pipeline. For more information, see Starting an OpenSearch Ingestion pipeline.
 */export const startPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/startPipeline/{PipelineName}", method: "PUT", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.StartPipeline" }, StartPipelineRequest, StartPipelineResponse, [AccessDeniedException, ConflictException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an OpenSearch Ingestion pipeline. For more information, see Stopping
 * an OpenSearch Ingestion pipeline.
 */export const stopPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/stopPipeline/{PipelineName}", method: "PUT", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.StopPipeline" }, StopPipelineRequest, StopPipelineResponse, [AccessDeniedException, ConflictException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags an OpenSearch Ingestion pipeline. For more information, see Tagging Amazon OpenSearch
 * Ingestion pipelines.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/tagResource", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from an OpenSearch Ingestion pipeline. For more information, see Tagging
 * Amazon OpenSearch Ingestion pipelines.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/untagResource", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an OpenSearch Ingestion pipeline. For more information, see Updating Amazon OpenSearch
 * Ingestion pipelines.
 */export const updatePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/updatePipeline/{PipelineName}", method: "PUT", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.UpdatePipeline" }, UpdatePipelineRequest, UpdatePipelineResponse, [AccessDeniedException, ConflictException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a VPC endpoint for an OpenSearch Ingestion pipeline. Pipeline endpoints allow you to
 * ingest data from your VPC into pipelines that you have access to.
 */export const createPipelineEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/createPipelineEndpoint", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.CreatePipelineEndpoint" }, CreatePipelineEndpointRequest, CreatePipelineEndpointResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an OpenSearch Ingestion pipeline. For more information, see Deleting Amazon OpenSearch
 * Ingestion pipelines.
 */export const deletePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/deletePipeline/{PipelineName}", method: "DELETE", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.DeletePipeline" }, DeletePipelineRequest, DeletePipelineResponse, [AccessDeniedException, ConflictException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a VPC endpoint for an OpenSearch Ingestion pipeline.
 */export const deletePipelineEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/deletePipelineEndpoint/{EndpointId}", method: "DELETE", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.DeletePipelineEndpoint" }, DeletePipelineEndpointRequest, DeletePipelineEndpointResponse, [AccessDeniedException, DisabledOperationException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are
 * templates for the configuration needed for a `CreatePipeline` request. For more
 * information, see Using
 * blueprints to create a pipeline.
 */export const getPipelineBlueprint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/getPipelineBlueprint/{BlueprintName}", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.GetPipelineBlueprint" }, GetPipelineBlueprintRequest, GetPipelineBlueprintResponse, [AccessDeniedException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all available blueprints for Data Prepper. For more information, see
 * Using
 * blueprints to create a pipeline.
 */export const listPipelineBlueprints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/listPipelineBlueprints", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ListPipelineBlueprints" }, ListPipelineBlueprintsRequest, ListPipelineBlueprintsResponse, [AccessDeniedException, DisabledOperationException, InternalException, InvalidPaginationTokenException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the pipeline endpoints connected to pipelines in your account.
 */export const listPipelineEndpointConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/listPipelineEndpointConnections", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ListPipelineEndpointConnections" }, ListPipelineEndpointConnectionsRequest, ListPipelineEndpointConnectionsResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all pipeline endpoints in your account.
 */export const listPipelineEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/listPipelineEndpoints", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ListPipelineEndpoints" }, ListPipelineEndpointsRequest, ListPipelineEndpointsResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region.
 * For more information, see Viewing Amazon OpenSearch
 * Ingestion pipelines.
 */export const listPipelines = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/listPipelines", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ListPipelines" }, ListPipelinesRequest, ListPipelinesResponse, [AccessDeniedException, DisabledOperationException, InternalException, InvalidPaginationTokenException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For
 * more information, see Creating Amazon OpenSearch
 * Ingestion pipelines.
 */export const validatePipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/validatePipeline", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.ValidatePipeline" }, ValidatePipelineRequest, ValidatePipelineResponse, [AccessDeniedException, DisabledOperationException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an OpenSearch Ingestion pipeline.
 */export const getPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/getPipeline/{PipelineName}", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.GetPipeline" }, GetPipelineRequest, GetPipelineResponse, [AccessDeniedException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns progress information for the current change happening on an OpenSearch Ingestion
 * pipeline. Currently, this operation only returns information when a pipeline is being
 * created.
 * 
 * For more information, see Tracking the status of pipeline creation.
 */export const getPipelineChangeProgress = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/getPipelineChangeProgress/{PipelineName}", method: "GET", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.GetPipelineChangeProgress" }, GetPipelineChangeProgressRequest, GetPipelineChangeProgressResponse, [AccessDeniedException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an OpenSearch Ingestion pipeline. For more information, see Creating Amazon OpenSearch
 * Ingestion pipelines.
 */export const createPipeline = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-01-01", uri: "/2022-01-01/osis/createPipeline", sdkId: "OSIS", sigV4ServiceName: "osis", name: "AmazonOpenSearchIngestionService.CreatePipeline" }, CreatePipelineRequest, CreatePipelineResponse, [AccessDeniedException, DisabledOperationException, InternalException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
