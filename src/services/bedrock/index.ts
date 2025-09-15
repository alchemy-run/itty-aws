import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Bedrock as _BedrockClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock",
  version: "2023-04-20",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock",
  operations: {
    BatchDeleteEvaluationJob: "POST /evaluation-jobs/batch-delete",
    CreateCustomModel: "POST /custom-models/create-custom-model",
    CreateCustomModelDeployment:
      "POST /model-customization/custom-model-deployments",
    CreateEvaluationJob: "POST /evaluation-jobs",
    CreateFoundationModelAgreement: "POST /create-foundation-model-agreement",
    CreateGuardrail: "POST /guardrails",
    CreateGuardrailVersion: "POST /guardrails/{guardrailIdentifier}",
    CreateInferenceProfile: "POST /inference-profiles",
    CreateMarketplaceModelEndpoint: "POST /marketplace-model/endpoints",
    CreateModelCopyJob: "POST /model-copy-jobs",
    CreateModelCustomizationJob: "POST /model-customization-jobs",
    CreateModelImportJob: "POST /model-import-jobs",
    CreateModelInvocationJob: "POST /model-invocation-job",
    CreatePromptRouter: "POST /prompt-routers",
    CreateProvisionedModelThroughput: "POST /provisioned-model-throughput",
    DeleteCustomModel: "DELETE /custom-models/{modelIdentifier}",
    DeleteCustomModelDeployment:
      "DELETE /model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
    DeleteFoundationModelAgreement: "POST /delete-foundation-model-agreement",
    DeleteGuardrail: "DELETE /guardrails/{guardrailIdentifier}",
    DeleteImportedModel: "DELETE /imported-models/{modelIdentifier}",
    DeleteInferenceProfile:
      "DELETE /inference-profiles/{inferenceProfileIdentifier}",
    DeleteMarketplaceModelEndpoint:
      "DELETE /marketplace-model/endpoints/{endpointArn}",
    DeleteModelInvocationLoggingConfiguration:
      "DELETE /logging/modelinvocations",
    DeletePromptRouter: "DELETE /prompt-routers/{promptRouterArn}",
    DeleteProvisionedModelThroughput:
      "DELETE /provisioned-model-throughput/{provisionedModelId}",
    DeregisterMarketplaceModelEndpoint:
      "DELETE /marketplace-model/endpoints/{endpointArn}/registration",
    GetCustomModel: "GET /custom-models/{modelIdentifier}",
    GetCustomModelDeployment:
      "GET /model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
    GetEvaluationJob: "GET /evaluation-jobs/{jobIdentifier}",
    GetFoundationModel: "GET /foundation-models/{modelIdentifier}",
    GetFoundationModelAvailability:
      "GET /foundation-model-availability/{modelId}",
    GetGuardrail: "GET /guardrails/{guardrailIdentifier}",
    GetImportedModel: "GET /imported-models/{modelIdentifier}",
    GetInferenceProfile: "GET /inference-profiles/{inferenceProfileIdentifier}",
    GetMarketplaceModelEndpoint:
      "GET /marketplace-model/endpoints/{endpointArn}",
    GetModelCopyJob: "GET /model-copy-jobs/{jobArn}",
    GetModelCustomizationJob: "GET /model-customization-jobs/{jobIdentifier}",
    GetModelImportJob: "GET /model-import-jobs/{jobIdentifier}",
    GetModelInvocationJob: "GET /model-invocation-job/{jobIdentifier}",
    GetModelInvocationLoggingConfiguration: "GET /logging/modelinvocations",
    GetPromptRouter: "GET /prompt-routers/{promptRouterArn}",
    GetProvisionedModelThroughput:
      "GET /provisioned-model-throughput/{provisionedModelId}",
    GetUseCaseForModelAccess: "GET /use-case-for-model-access",
    ListCustomModelDeployments:
      "GET /model-customization/custom-model-deployments",
    ListCustomModels: "GET /custom-models",
    ListEvaluationJobs: "GET /evaluation-jobs",
    ListFoundationModelAgreementOffers:
      "GET /list-foundation-model-agreement-offers/{modelId}",
    ListFoundationModels: "GET /foundation-models",
    ListGuardrails: "GET /guardrails",
    ListImportedModels: "GET /imported-models",
    ListInferenceProfiles: "GET /inference-profiles",
    ListMarketplaceModelEndpoints: "GET /marketplace-model/endpoints",
    ListModelCopyJobs: "GET /model-copy-jobs",
    ListModelCustomizationJobs: "GET /model-customization-jobs",
    ListModelImportJobs: "GET /model-import-jobs",
    ListModelInvocationJobs: "GET /model-invocation-jobs",
    ListPromptRouters: "GET /prompt-routers",
    ListProvisionedModelThroughputs: "GET /provisioned-model-throughputs",
    ListTagsForResource: "POST /listTagsForResource",
    PutModelInvocationLoggingConfiguration: "PUT /logging/modelinvocations",
    PutUseCaseForModelAccess: "POST /use-case-for-model-access",
    RegisterMarketplaceModelEndpoint:
      "POST /marketplace-model/endpoints/{endpointIdentifier}/registration",
    StopEvaluationJob: "POST /evaluation-job/{jobIdentifier}/stop",
    StopModelCustomizationJob:
      "POST /model-customization-jobs/{jobIdentifier}/stop",
    StopModelInvocationJob: "POST /model-invocation-job/{jobIdentifier}/stop",
    TagResource: "POST /tagResource",
    UntagResource: "POST /untagResource",
    UpdateGuardrail: "PUT /guardrails/{guardrailIdentifier}",
    UpdateMarketplaceModelEndpoint:
      "PATCH /marketplace-model/endpoints/{endpointArn}",
    UpdateProvisionedModelThroughput:
      "PATCH /provisioned-model-throughput/{provisionedModelId}",
  },
} as const satisfies ServiceMetadata;

export type _Bedrock = _BedrockClient;
export interface Bedrock extends _Bedrock {}
export const Bedrock = class extends AWSServiceClient {
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
} as unknown as typeof _BedrockClient;
