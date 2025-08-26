import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DataBrew as _DataBrew } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "DataBrew",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "databrew",
  endpointPrefix: "databrew",
  operations: {
    BatchDeleteRecipeVersion: "POST /recipes/{Name}/batchDeleteRecipeVersion",
    CreateDataset: "POST /datasets",
    CreateProfileJob: "POST /profileJobs",
    CreateProject: "POST /projects",
    CreateRecipe: "POST /recipes",
    CreateRecipeJob: "POST /recipeJobs",
    CreateRuleset: "POST /rulesets",
    CreateSchedule: "POST /schedules",
    DeleteDataset: "DELETE /datasets/{Name}",
    DeleteJob: "DELETE /jobs/{Name}",
    DeleteProject: "DELETE /projects/{Name}",
    DeleteRecipeVersion: "DELETE /recipes/{Name}/recipeVersion/{RecipeVersion}",
    DeleteRuleset: "DELETE /rulesets/{Name}",
    DeleteSchedule: "DELETE /schedules/{Name}",
    DescribeDataset: "GET /datasets/{Name}",
    DescribeJob: "GET /jobs/{Name}",
    DescribeJobRun: "GET /jobs/{Name}/jobRun/{RunId}",
    DescribeProject: "GET /projects/{Name}",
    DescribeRecipe: "GET /recipes/{Name}",
    DescribeRuleset: "GET /rulesets/{Name}",
    DescribeSchedule: "GET /schedules/{Name}",
    ListDatasets: "GET /datasets",
    ListJobRuns: "GET /jobs/{Name}/jobRuns",
    ListJobs: "GET /jobs",
    ListProjects: "GET /projects",
    ListRecipes: "GET /recipes",
    ListRecipeVersions: "GET /recipeVersions",
    ListRulesets: "GET /rulesets",
    ListSchedules: "GET /schedules",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PublishRecipe: "POST /recipes/{Name}/publishRecipe",
    SendProjectSessionAction: "PUT /projects/{Name}/sendProjectSessionAction",
    StartJobRun: "POST /jobs/{Name}/startJobRun",
    StartProjectSession: "PUT /projects/{Name}/startProjectSession",
    StopJobRun: "POST /jobs/{Name}/jobRun/{RunId}/stopJobRun",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateDataset: "PUT /datasets/{Name}",
    UpdateProfileJob: "PUT /profileJobs/{Name}",
    UpdateProject: "PUT /projects/{Name}",
    UpdateRecipe: "PUT /recipes/{Name}",
    UpdateRecipeJob: "PUT /recipeJobs/{Name}",
    UpdateRuleset: "PUT /rulesets/{Name}",
    UpdateSchedule: "PUT /schedules/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DataBrew = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _DataBrew;
