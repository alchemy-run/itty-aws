import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CleanRoomsML as _CleanRoomsMLClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CleanRoomsML",
  version: "2023-09-06",
  protocol: "restJson1",
  sigV4ServiceName: "cleanrooms-ml",
  operations: {
    ListCollaborationConfiguredModelAlgorithmAssociations:
      "GET /collaborations/{collaborationIdentifier}/configured-model-algorithm-associations",
    ListCollaborationMLInputChannels:
      "GET /collaborations/{collaborationIdentifier}/ml-input-channels",
    ListCollaborationTrainedModelExportJobs:
      "GET /collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs",
    ListCollaborationTrainedModelInferenceJobs:
      "GET /collaborations/{collaborationIdentifier}/trained-model-inference-jobs",
    ListCollaborationTrainedModels:
      "GET /collaborations/{collaborationIdentifier}/trained-models",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelTrainedModel:
      "PATCH /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
    CancelTrainedModelInferenceJob:
      "PATCH /memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
    CreateAudienceModel: "POST /audience-model",
    CreateConfiguredAudienceModel: "POST /configured-audience-model",
    CreateConfiguredModelAlgorithm: "POST /configured-model-algorithms",
    CreateConfiguredModelAlgorithmAssociation:
      "POST /memberships/{membershipIdentifier}/configured-model-algorithm-associations",
    CreateMLInputChannel:
      "POST /memberships/{membershipIdentifier}/ml-input-channels",
    CreateTrainedModel:
      "POST /memberships/{membershipIdentifier}/trained-models",
    CreateTrainingDataset: "POST /training-dataset",
    DeleteAudienceGenerationJob:
      "DELETE /audience-generation-job/{audienceGenerationJobArn}",
    DeleteAudienceModel: "DELETE /audience-model/{audienceModelArn}",
    DeleteConfiguredAudienceModel:
      "DELETE /configured-audience-model/{configuredAudienceModelArn}",
    DeleteConfiguredAudienceModelPolicy:
      "DELETE /configured-audience-model/{configuredAudienceModelArn}/policy",
    DeleteConfiguredModelAlgorithm:
      "DELETE /configured-model-algorithms/{configuredModelAlgorithmArn}",
    DeleteConfiguredModelAlgorithmAssociation:
      "DELETE /memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
    DeleteMLConfiguration:
      "DELETE /memberships/{membershipIdentifier}/ml-configurations",
    DeleteMLInputChannelData:
      "DELETE /memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
    DeleteTrainedModelOutput:
      "DELETE /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
    DeleteTrainingDataset: "DELETE /training-dataset/{trainingDatasetArn}",
    GetAudienceGenerationJob:
      "GET /audience-generation-job/{audienceGenerationJobArn}",
    GetAudienceModel: "GET /audience-model/{audienceModelArn}",
    GetCollaborationConfiguredModelAlgorithmAssociation:
      "GET /collaborations/{collaborationIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
    GetCollaborationMLInputChannel:
      "GET /collaborations/{collaborationIdentifier}/ml-input-channels/{mlInputChannelArn}",
    GetCollaborationTrainedModel:
      "GET /collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}",
    GetConfiguredAudienceModel:
      "GET /configured-audience-model/{configuredAudienceModelArn}",
    GetConfiguredAudienceModelPolicy:
      "GET /configured-audience-model/{configuredAudienceModelArn}/policy",
    GetConfiguredModelAlgorithm:
      "GET /configured-model-algorithms/{configuredModelAlgorithmArn}",
    GetConfiguredModelAlgorithmAssociation:
      "GET /memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
    GetMLConfiguration:
      "GET /memberships/{membershipIdentifier}/ml-configurations",
    GetMLInputChannel:
      "GET /memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
    GetTrainedModel:
      "GET /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
    GetTrainedModelInferenceJob:
      "GET /memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
    GetTrainingDataset: "GET /training-dataset/{trainingDatasetArn}",
    ListAudienceExportJobs: "GET /audience-export-job",
    ListAudienceGenerationJobs: "GET /audience-generation-job",
    ListAudienceModels: "GET /audience-model",
    ListConfiguredAudienceModels: "GET /configured-audience-model",
    ListConfiguredModelAlgorithmAssociations:
      "GET /memberships/{membershipIdentifier}/configured-model-algorithm-associations",
    ListConfiguredModelAlgorithms: "GET /configured-model-algorithms",
    ListMLInputChannels:
      "GET /memberships/{membershipIdentifier}/ml-input-channels",
    ListTrainedModelInferenceJobs:
      "GET /memberships/{membershipIdentifier}/trained-model-inference-jobs",
    ListTrainedModelVersions:
      "GET /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/versions",
    ListTrainedModels: "GET /memberships/{membershipIdentifier}/trained-models",
    ListTrainingDatasets: "GET /training-dataset",
    PutConfiguredAudienceModelPolicy:
      "PUT /configured-audience-model/{configuredAudienceModelArn}/policy",
    PutMLConfiguration:
      "PUT /memberships/{membershipIdentifier}/ml-configurations",
    StartAudienceExportJob: "POST /audience-export-job",
    StartAudienceGenerationJob: "POST /audience-generation-job",
    StartTrainedModelExportJob:
      "POST /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/export-jobs",
    StartTrainedModelInferenceJob:
      "POST /memberships/{membershipIdentifier}/trained-model-inference-jobs",
    UpdateConfiguredAudienceModel:
      "PATCH /configured-audience-model/{configuredAudienceModelArn}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type CleanRoomsML = typeof CleanRoomsML;
export const CleanRoomsML = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _CleanRoomsMLClient;
