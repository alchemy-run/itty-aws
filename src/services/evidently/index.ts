import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Evidently as _Evidently } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Evidently",
  version: "2021-02-01",
  protocol: "restJson1",
  sigV4ServiceName: "evidently",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    TestSegmentPattern: "POST /test-segment-pattern",
    UntagResource: "DELETE /tags/{resourceArn}",
    BatchEvaluateFeature: "POST /projects/{project}/evaluations",
    CreateExperiment: "POST /projects/{project}/experiments",
    CreateFeature: "POST /projects/{project}/features",
    CreateLaunch: "POST /projects/{project}/launches",
    CreateProject: "POST /projects",
    CreateSegment: "POST /segments",
    DeleteExperiment: "DELETE /projects/{project}/experiments/{experiment}",
    DeleteFeature: "DELETE /projects/{project}/features/{feature}",
    DeleteLaunch: "DELETE /projects/{project}/launches/{launch}",
    DeleteProject: "DELETE /projects/{project}",
    DeleteSegment: "DELETE /segments/{segment}",
    EvaluateFeature: "POST /projects/{project}/evaluations/{feature}",
    GetExperiment: "GET /projects/{project}/experiments/{experiment}",
    GetExperimentResults:
      "POST /projects/{project}/experiments/{experiment}/results",
    GetFeature: "GET /projects/{project}/features/{feature}",
    GetLaunch: "GET /projects/{project}/launches/{launch}",
    GetProject: "GET /projects/{project}",
    GetSegment: "GET /segments/{segment}",
    ListExperiments: "GET /projects/{project}/experiments",
    ListFeatures: "GET /projects/{project}/features",
    ListLaunches: "GET /projects/{project}/launches",
    ListProjects: "GET /projects",
    ListSegmentReferences: "GET /segments/{segment}/references",
    ListSegments: "GET /segments",
    PutProjectEvents: "POST /events/projects/{project}",
    StartExperiment: "POST /projects/{project}/experiments/{experiment}/start",
    StartLaunch: "POST /projects/{project}/launches/{launch}/start",
    StopExperiment: "POST /projects/{project}/experiments/{experiment}/cancel",
    StopLaunch: "POST /projects/{project}/launches/{launch}/cancel",
    UpdateExperiment: "PATCH /projects/{project}/experiments/{experiment}",
    UpdateFeature: "PATCH /projects/{project}/features/{feature}",
    UpdateLaunch: "PATCH /projects/{project}/launches/{launch}",
    UpdateProject: "PATCH /projects/{project}",
    UpdateProjectDataDelivery: "PATCH /projects/{project}/data-delivery",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Evidently = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Evidently;
