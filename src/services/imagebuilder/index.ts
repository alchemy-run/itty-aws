import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { imagebuilder as _imagebuilderClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "imagebuilder",
  version: "2019-12-02",
  protocol: "restJson1",
  sigV4ServiceName: "imagebuilder",
  endpointPrefix: "imagebuilder",
  operations: {
    CancelImageCreation: "PUT /CancelImageCreation",
    CancelLifecycleExecution: "PUT /CancelLifecycleExecution",
    CreateComponent: "PUT /CreateComponent",
    CreateContainerRecipe: "PUT /CreateContainerRecipe",
    CreateDistributionConfiguration: "PUT /CreateDistributionConfiguration",
    CreateImage: "PUT /CreateImage",
    CreateImagePipeline: "PUT /CreateImagePipeline",
    CreateImageRecipe: "PUT /CreateImageRecipe",
    CreateInfrastructureConfiguration: "PUT /CreateInfrastructureConfiguration",
    CreateLifecyclePolicy: "PUT /CreateLifecyclePolicy",
    CreateWorkflow: "PUT /CreateWorkflow",
    DeleteComponent: "DELETE /DeleteComponent",
    DeleteContainerRecipe: "DELETE /DeleteContainerRecipe",
    DeleteDistributionConfiguration: "DELETE /DeleteDistributionConfiguration",
    DeleteImage: "DELETE /DeleteImage",
    DeleteImagePipeline: "DELETE /DeleteImagePipeline",
    DeleteImageRecipe: "DELETE /DeleteImageRecipe",
    DeleteInfrastructureConfiguration:
      "DELETE /DeleteInfrastructureConfiguration",
    DeleteLifecyclePolicy: "DELETE /DeleteLifecyclePolicy",
    DeleteWorkflow: "DELETE /DeleteWorkflow",
    GetComponent: "GET /GetComponent",
    GetComponentPolicy: "GET /GetComponentPolicy",
    GetContainerRecipe: "GET /GetContainerRecipe",
    GetContainerRecipePolicy: "GET /GetContainerRecipePolicy",
    GetDistributionConfiguration: "GET /GetDistributionConfiguration",
    GetImage: "GET /GetImage",
    GetImagePipeline: "GET /GetImagePipeline",
    GetImagePolicy: "GET /GetImagePolicy",
    GetImageRecipe: "GET /GetImageRecipe",
    GetImageRecipePolicy: "GET /GetImageRecipePolicy",
    GetInfrastructureConfiguration: "GET /GetInfrastructureConfiguration",
    GetLifecycleExecution: "GET /GetLifecycleExecution",
    GetLifecyclePolicy: "GET /GetLifecyclePolicy",
    GetMarketplaceResource: "POST /GetMarketplaceResource",
    GetWorkflow: "GET /GetWorkflow",
    GetWorkflowExecution: "GET /GetWorkflowExecution",
    GetWorkflowStepExecution: "GET /GetWorkflowStepExecution",
    ImportComponent: "PUT /ImportComponent",
    ImportDiskImage: "PUT /ImportDiskImage",
    ImportVmImage: "PUT /ImportVmImage",
    ListComponentBuildVersions: "POST /ListComponentBuildVersions",
    ListComponents: "POST /ListComponents",
    ListContainerRecipes: "POST /ListContainerRecipes",
    ListDistributionConfigurations: "POST /ListDistributionConfigurations",
    ListImageBuildVersions: "POST /ListImageBuildVersions",
    ListImagePackages: "POST /ListImagePackages",
    ListImagePipelineImages: "POST /ListImagePipelineImages",
    ListImagePipelines: "POST /ListImagePipelines",
    ListImageRecipes: "POST /ListImageRecipes",
    ListImages: "POST /ListImages",
    ListImageScanFindingAggregations: "POST /ListImageScanFindingAggregations",
    ListImageScanFindings: "POST /ListImageScanFindings",
    ListInfrastructureConfigurations: "POST /ListInfrastructureConfigurations",
    ListLifecycleExecutionResources: "POST /ListLifecycleExecutionResources",
    ListLifecycleExecutions: "POST /ListLifecycleExecutions",
    ListLifecyclePolicies: "POST /ListLifecyclePolicies",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListWaitingWorkflowSteps: "POST /ListWaitingWorkflowSteps",
    ListWorkflowBuildVersions: "POST /ListWorkflowBuildVersions",
    ListWorkflowExecutions: "POST /ListWorkflowExecutions",
    ListWorkflows: "POST /ListWorkflows",
    ListWorkflowStepExecutions: "POST /ListWorkflowStepExecutions",
    PutComponentPolicy: "PUT /PutComponentPolicy",
    PutContainerRecipePolicy: "PUT /PutContainerRecipePolicy",
    PutImagePolicy: "PUT /PutImagePolicy",
    PutImageRecipePolicy: "PUT /PutImageRecipePolicy",
    SendWorkflowStepAction: "PUT /SendWorkflowStepAction",
    StartImagePipelineExecution: "PUT /StartImagePipelineExecution",
    StartResourceStateUpdate: "PUT /StartResourceStateUpdate",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateDistributionConfiguration: "PUT /UpdateDistributionConfiguration",
    UpdateImagePipeline: "PUT /UpdateImagePipeline",
    UpdateInfrastructureConfiguration: "PUT /UpdateInfrastructureConfiguration",
    UpdateLifecyclePolicy: "PUT /UpdateLifecyclePolicy",
  },
} as const satisfies ServiceMetadata;

export type _imagebuilder = _imagebuilderClient;
export interface imagebuilder extends _imagebuilder {}
export const imagebuilder = class extends AWSServiceClient {
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
} as unknown as typeof _imagebuilderClient;
