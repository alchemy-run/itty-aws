import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EntityResolution as _EntityResolutionClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EntityResolution",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "entityresolution",
  operations: {
    AddPolicyStatement: "POST /policies/{arn}/{statementId}",
    BatchDeleteUniqueId: "DELETE /matchingworkflows/{workflowName}/uniqueids",
    CreateIdMappingWorkflow: "POST /idmappingworkflows",
    CreateIdNamespace: "POST /idnamespaces",
    CreateMatchingWorkflow: "POST /matchingworkflows",
    CreateSchemaMapping: "POST /schemas",
    DeleteIdMappingWorkflow: "DELETE /idmappingworkflows/{workflowName}",
    DeleteIdNamespace: "DELETE /idnamespaces/{idNamespaceName}",
    DeleteMatchingWorkflow: "DELETE /matchingworkflows/{workflowName}",
    DeletePolicyStatement: "DELETE /policies/{arn}/{statementId}",
    DeleteSchemaMapping: "DELETE /schemas/{schemaName}",
    GenerateMatchId: "POST /matchingworkflows/{workflowName}/generateMatches",
    GetIdMappingJob: "GET /idmappingworkflows/{workflowName}/jobs/{jobId}",
    GetIdMappingWorkflow: "GET /idmappingworkflows/{workflowName}",
    GetIdNamespace: "GET /idnamespaces/{idNamespaceName}",
    GetMatchId: "POST /matchingworkflows/{workflowName}/matches",
    GetMatchingJob: "GET /matchingworkflows/{workflowName}/jobs/{jobId}",
    GetMatchingWorkflow: "GET /matchingworkflows/{workflowName}",
    GetPolicy: "GET /policies/{arn}",
    GetProviderService:
      "GET /providerservices/{providerName}/{providerServiceName}",
    GetSchemaMapping: "GET /schemas/{schemaName}",
    ListIdMappingJobs: "GET /idmappingworkflows/{workflowName}/jobs",
    ListIdMappingWorkflows: "GET /idmappingworkflows",
    ListIdNamespaces: "GET /idnamespaces",
    ListMatchingJobs: "GET /matchingworkflows/{workflowName}/jobs",
    ListMatchingWorkflows: "GET /matchingworkflows",
    ListProviderServices: "GET /providerservices",
    ListSchemaMappings: "GET /schemas",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutPolicy: "PUT /policies/{arn}",
    StartIdMappingJob: "POST /idmappingworkflows/{workflowName}/jobs",
    StartMatchingJob: "POST /matchingworkflows/{workflowName}/jobs",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateIdMappingWorkflow: "PUT /idmappingworkflows/{workflowName}",
    UpdateIdNamespace: "PUT /idnamespaces/{idNamespaceName}",
    UpdateMatchingWorkflow: "PUT /matchingworkflows/{workflowName}",
    UpdateSchemaMapping: "PUT /schemas/{schemaName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EntityResolution = class extends AWSServiceClient {
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
} as unknown as typeof _EntityResolutionClient;
