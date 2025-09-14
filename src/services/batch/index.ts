import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Batch as _BatchClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Batch",
  version: "2016-08-10",
  protocol: "restJson1",
  sigV4ServiceName: "batch",
  endpointPrefix: "batch",
  operations: {
    CancelJob: "POST /v1/canceljob",
    CreateComputeEnvironment: "POST /v1/createcomputeenvironment",
    CreateConsumableResource: "POST /v1/createconsumableresource",
    CreateJobQueue: "POST /v1/createjobqueue",
    CreateSchedulingPolicy: "POST /v1/createschedulingpolicy",
    CreateServiceEnvironment: "POST /v1/createserviceenvironment",
    DeleteComputeEnvironment: "POST /v1/deletecomputeenvironment",
    DeleteConsumableResource: "POST /v1/deleteconsumableresource",
    DeleteJobQueue: "POST /v1/deletejobqueue",
    DeleteSchedulingPolicy: "POST /v1/deleteschedulingpolicy",
    DeleteServiceEnvironment: "POST /v1/deleteserviceenvironment",
    DeregisterJobDefinition: "POST /v1/deregisterjobdefinition",
    DescribeComputeEnvironments: "POST /v1/describecomputeenvironments",
    DescribeConsumableResource: "POST /v1/describeconsumableresource",
    DescribeJobDefinitions: "POST /v1/describejobdefinitions",
    DescribeJobQueues: "POST /v1/describejobqueues",
    DescribeJobs: "POST /v1/describejobs",
    DescribeSchedulingPolicies: "POST /v1/describeschedulingpolicies",
    DescribeServiceEnvironments: "POST /v1/describeserviceenvironments",
    DescribeServiceJob: "POST /v1/describeservicejob",
    GetJobQueueSnapshot: "POST /v1/getjobqueuesnapshot",
    ListConsumableResources: "POST /v1/listconsumableresources",
    ListJobs: "POST /v1/listjobs",
    ListJobsByConsumableResource: "POST /v1/listjobsbyconsumableresource",
    ListSchedulingPolicies: "POST /v1/listschedulingpolicies",
    ListServiceJobs: "POST /v1/listservicejobs",
    ListTagsForResource: "GET /v1/tags/{resourceArn}",
    RegisterJobDefinition: "POST /v1/registerjobdefinition",
    SubmitJob: "POST /v1/submitjob",
    SubmitServiceJob: "POST /v1/submitservicejob",
    TagResource: "POST /v1/tags/{resourceArn}",
    TerminateJob: "POST /v1/terminatejob",
    TerminateServiceJob: "POST /v1/terminateservicejob",
    UntagResource: "DELETE /v1/tags/{resourceArn}",
    UpdateComputeEnvironment: "POST /v1/updatecomputeenvironment",
    UpdateConsumableResource: "POST /v1/updateconsumableresource",
    UpdateJobQueue: "POST /v1/updatejobqueue",
    UpdateSchedulingPolicy: "POST /v1/updateschedulingpolicy",
    UpdateServiceEnvironment: "POST /v1/updateserviceenvironment",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Batch = class extends AWSServiceClient {
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
} as unknown as typeof _BatchClient;
