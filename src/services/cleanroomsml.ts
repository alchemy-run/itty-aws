import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class ListCollaborationConfiguredModelAlgorithmAssociationsRequest extends S.Class<ListCollaborationConfiguredModelAlgorithmAssociationsRequest>("ListCollaborationConfiguredModelAlgorithmAssociationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), collaborationIdentifier: S.String}) {}
export class ListCollaborationMLInputChannelsRequest extends S.Class<ListCollaborationMLInputChannelsRequest>("ListCollaborationMLInputChannelsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), collaborationIdentifier: S.String}) {}
export class ListCollaborationTrainedModelExportJobsRequest extends S.Class<ListCollaborationTrainedModelExportJobsRequest>("ListCollaborationTrainedModelExportJobsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), collaborationIdentifier: S.String, trainedModelArn: S.String, trainedModelVersionIdentifier: S.optional(S.String)}) {}
export class ListCollaborationTrainedModelInferenceJobsRequest extends S.Class<ListCollaborationTrainedModelInferenceJobsRequest>("ListCollaborationTrainedModelInferenceJobsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), collaborationIdentifier: S.String, trainedModelArn: S.optional(S.String), trainedModelVersionIdentifier: S.optional(S.String)}) {}
export class ListCollaborationTrainedModelsRequest extends S.Class<ListCollaborationTrainedModelsRequest>("ListCollaborationTrainedModelsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), collaborationIdentifier: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const ConfiguredModelAlgorithmAssociationArnList = S.Array(S.String);
export class CollaborationConfiguredModelAlgorithmAssociationSummary extends S.Class<CollaborationConfiguredModelAlgorithmAssociationSummary>("CollaborationConfiguredModelAlgorithmAssociationSummary")({createTime: S.Date, updateTime: S.Date, configuredModelAlgorithmAssociationArn: S.String, name: S.String, description: S.optional(S.String), membershipIdentifier: S.String, collaborationIdentifier: S.String, configuredModelAlgorithmArn: S.String, creatorAccountId: S.String}) {}
export const CollaborationConfiguredModelAlgorithmAssociationList = S.Array(CollaborationConfiguredModelAlgorithmAssociationSummary);
export class CollaborationMLInputChannelSummary extends S.Class<CollaborationMLInputChannelSummary>("CollaborationMLInputChannelSummary")({createTime: S.Date, updateTime: S.Date, membershipIdentifier: S.String, collaborationIdentifier: S.String, name: S.String, configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList, mlInputChannelArn: S.String, status: S.String, creatorAccountId: S.String, description: S.optional(S.String)}) {}
export const CollaborationMLInputChannelsList = S.Array(CollaborationMLInputChannelSummary);
export class ListCollaborationConfiguredModelAlgorithmAssociationsResponse extends S.Class<ListCollaborationConfiguredModelAlgorithmAssociationsResponse>("ListCollaborationConfiguredModelAlgorithmAssociationsResponse")({nextToken: S.optional(S.String), collaborationConfiguredModelAlgorithmAssociations: CollaborationConfiguredModelAlgorithmAssociationList}) {}
export class ListCollaborationMLInputChannelsResponse extends S.Class<ListCollaborationMLInputChannelsResponse>("ListCollaborationMLInputChannelsResponse")({nextToken: S.optional(S.String), collaborationMLInputChannelsList: CollaborationMLInputChannelsList}) {}
export class StatusDetails extends S.Class<StatusDetails>("StatusDetails")({statusCode: S.optional(S.String), message: S.optional(S.String)}) {}
export class IncrementalTrainingDataChannelOutput extends S.Class<IncrementalTrainingDataChannelOutput>("IncrementalTrainingDataChannelOutput")({channelName: S.String, versionIdentifier: S.optional(S.String), modelName: S.String}) {}
export const IncrementalTrainingDataChannelsOutput = S.Array(IncrementalTrainingDataChannelOutput);
export class CollaborationTrainedModelSummary extends S.Class<CollaborationTrainedModelSummary>("CollaborationTrainedModelSummary")({createTime: S.Date, updateTime: S.Date, trainedModelArn: S.String, name: S.String, versionIdentifier: S.optional(S.String), incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannelsOutput), description: S.optional(S.String), membershipIdentifier: S.String, collaborationIdentifier: S.String, status: S.String, configuredModelAlgorithmAssociationArn: S.String, creatorAccountId: S.String}) {}
export const CollaborationTrainedModelList = S.Array(CollaborationTrainedModelSummary);
export class TrainedModelExportReceiverMember extends S.Class<TrainedModelExportReceiverMember>("TrainedModelExportReceiverMember")({accountId: S.String}) {}
export const TrainedModelExportReceiverMembers = S.Array(TrainedModelExportReceiverMember);
export class InferenceReceiverMember extends S.Class<InferenceReceiverMember>("InferenceReceiverMember")({accountId: S.String}) {}
export const InferenceReceiverMembers = S.Array(InferenceReceiverMember);
export class ListCollaborationTrainedModelsResponse extends S.Class<ListCollaborationTrainedModelsResponse>("ListCollaborationTrainedModelsResponse")({nextToken: S.optional(S.String), collaborationTrainedModels: CollaborationTrainedModelList}) {}
export class TrainedModelExportOutputConfiguration extends S.Class<TrainedModelExportOutputConfiguration>("TrainedModelExportOutputConfiguration")({members: TrainedModelExportReceiverMembers}) {}
export class InferenceOutputConfiguration extends S.Class<InferenceOutputConfiguration>("InferenceOutputConfiguration")({accept: S.optional(S.String), members: InferenceReceiverMembers}) {}
export class CollaborationTrainedModelExportJobSummary extends S.Class<CollaborationTrainedModelExportJobSummary>("CollaborationTrainedModelExportJobSummary")({createTime: S.Date, updateTime: S.Date, name: S.String, outputConfiguration: TrainedModelExportOutputConfiguration, status: S.String, statusDetails: S.optional(StatusDetails), description: S.optional(S.String), creatorAccountId: S.String, trainedModelArn: S.String, trainedModelVersionIdentifier: S.optional(S.String), membershipIdentifier: S.String, collaborationIdentifier: S.String}) {}
export const CollaborationTrainedModelExportJobList = S.Array(CollaborationTrainedModelExportJobSummary);
export class CollaborationTrainedModelInferenceJobSummary extends S.Class<CollaborationTrainedModelInferenceJobSummary>("CollaborationTrainedModelInferenceJobSummary")({trainedModelInferenceJobArn: S.String, configuredModelAlgorithmAssociationArn: S.optional(S.String), membershipIdentifier: S.String, trainedModelArn: S.String, trainedModelVersionIdentifier: S.optional(S.String), collaborationIdentifier: S.String, status: S.String, outputConfiguration: InferenceOutputConfiguration, name: S.String, description: S.optional(S.String), metricsStatus: S.optional(S.String), metricsStatusDetails: S.optional(S.String), logsStatus: S.optional(S.String), logsStatusDetails: S.optional(S.String), createTime: S.Date, updateTime: S.Date, creatorAccountId: S.String}) {}
export const CollaborationTrainedModelInferenceJobList = S.Array(CollaborationTrainedModelInferenceJobSummary);
export class ListCollaborationTrainedModelExportJobsResponse extends S.Class<ListCollaborationTrainedModelExportJobsResponse>("ListCollaborationTrainedModelExportJobsResponse")({nextToken: S.optional(S.String), collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobList}) {}
export class ListCollaborationTrainedModelInferenceJobsResponse extends S.Class<ListCollaborationTrainedModelInferenceJobsResponse>("ListCollaborationTrainedModelInferenceJobsResponse")({nextToken: S.optional(S.String), collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobList}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};

//# Operations
/**
 * Removes metadata tags from a specified resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the ML input channels in a collaboration.
 */export const listCollaborationMLInputChannels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/collaborations/{collaborationIdentifier}/ml-input-channels", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListCollaborationMLInputChannels" }, ListCollaborationMLInputChannelsRequest, ListCollaborationMLInputChannelsResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags for a provided resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds metadata tags to a specified resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/tags/{resourceArn}", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the configured model algorithm associations in a collaboration.
 */export const listCollaborationConfiguredModelAlgorithmAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListCollaborationConfiguredModelAlgorithmAssociations" }, ListCollaborationConfiguredModelAlgorithmAssociationsRequest, ListCollaborationConfiguredModelAlgorithmAssociationsResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the trained models in a collaboration.
 */export const listCollaborationTrainedModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/collaborations/{collaborationIdentifier}/trained-models", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListCollaborationTrainedModels" }, ListCollaborationTrainedModelsRequest, ListCollaborationTrainedModelsResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the export jobs for a trained model in a collaboration.
 */export const listCollaborationTrainedModelExportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListCollaborationTrainedModelExportJobs" }, ListCollaborationTrainedModelExportJobsRequest, ListCollaborationTrainedModelExportJobsResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of trained model inference jobs in a specified collaboration.
 */export const listCollaborationTrainedModelInferenceJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-09-06", uri: "/collaborations/{collaborationIdentifier}/trained-model-inference-jobs", method: "GET", sdkId: "CleanRoomsML", sigV4ServiceName: "cleanrooms-ml", name: "AWSStarkControlService.ListCollaborationTrainedModelInferenceJobs" }, ListCollaborationTrainedModelInferenceJobsRequest, ListCollaborationTrainedModelInferenceJobsResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
