import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RoboMaker as _RoboMakerClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "RoboMaker",
  version: "2018-06-29",
  protocol: "restJson1",
  sigV4ServiceName: "robomaker",
  endpointPrefix: "robomaker",
  operations: {
    BatchDeleteWorlds: "POST /batchDeleteWorlds",
    BatchDescribeSimulationJob: "POST /batchDescribeSimulationJob",
    CancelDeploymentJob: "POST /cancelDeploymentJob",
    CancelSimulationJob: "POST /cancelSimulationJob",
    CancelSimulationJobBatch: "POST /cancelSimulationJobBatch",
    CancelWorldExportJob: "POST /cancelWorldExportJob",
    CancelWorldGenerationJob: "POST /cancelWorldGenerationJob",
    CreateDeploymentJob: "POST /createDeploymentJob",
    CreateFleet: "POST /createFleet",
    CreateRobot: "POST /createRobot",
    CreateRobotApplication: "POST /createRobotApplication",
    CreateRobotApplicationVersion: "POST /createRobotApplicationVersion",
    CreateSimulationApplication: "POST /createSimulationApplication",
    CreateSimulationApplicationVersion:
      "POST /createSimulationApplicationVersion",
    CreateSimulationJob: "POST /createSimulationJob",
    CreateWorldExportJob: "POST /createWorldExportJob",
    CreateWorldGenerationJob: "POST /createWorldGenerationJob",
    CreateWorldTemplate: "POST /createWorldTemplate",
    DeleteFleet: "POST /deleteFleet",
    DeleteRobot: "POST /deleteRobot",
    DeleteRobotApplication: "POST /deleteRobotApplication",
    DeleteSimulationApplication: "POST /deleteSimulationApplication",
    DeleteWorldTemplate: "POST /deleteWorldTemplate",
    DeregisterRobot: "POST /deregisterRobot",
    DescribeDeploymentJob: "POST /describeDeploymentJob",
    DescribeFleet: "POST /describeFleet",
    DescribeRobot: "POST /describeRobot",
    DescribeRobotApplication: "POST /describeRobotApplication",
    DescribeSimulationApplication: "POST /describeSimulationApplication",
    DescribeSimulationJob: "POST /describeSimulationJob",
    DescribeSimulationJobBatch: "POST /describeSimulationJobBatch",
    DescribeWorld: "POST /describeWorld",
    DescribeWorldExportJob: "POST /describeWorldExportJob",
    DescribeWorldGenerationJob: "POST /describeWorldGenerationJob",
    DescribeWorldTemplate: "POST /describeWorldTemplate",
    GetWorldTemplateBody: "POST /getWorldTemplateBody",
    ListDeploymentJobs: "POST /listDeploymentJobs",
    ListFleets: "POST /listFleets",
    ListRobotApplications: "POST /listRobotApplications",
    ListRobots: "POST /listRobots",
    ListSimulationApplications: "POST /listSimulationApplications",
    ListSimulationJobBatches: "POST /listSimulationJobBatches",
    ListSimulationJobs: "POST /listSimulationJobs",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListWorldExportJobs: "POST /listWorldExportJobs",
    ListWorldGenerationJobs: "POST /listWorldGenerationJobs",
    ListWorlds: "POST /listWorlds",
    ListWorldTemplates: "POST /listWorldTemplates",
    RegisterRobot: "POST /registerRobot",
    RestartSimulationJob: "POST /restartSimulationJob",
    StartSimulationJobBatch: "POST /startSimulationJobBatch",
    SyncDeploymentJob: "POST /syncDeploymentJob",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateRobotApplication: "POST /updateRobotApplication",
    UpdateSimulationApplication: "POST /updateSimulationApplication",
    UpdateWorldTemplate: "POST /updateWorldTemplate",
  },
} as const satisfies ServiceMetadata;

export type _RoboMaker = _RoboMakerClient;
export interface RoboMaker extends _RoboMaker {}
export const RoboMaker = class extends AWSServiceClient {
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
} as unknown as typeof _RoboMakerClient;
