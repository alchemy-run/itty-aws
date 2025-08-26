import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { neptunedata as _neptunedata } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "neptunedata",
  version: "2023-08-01",
  protocol: "restJson1",
  sigV4ServiceName: "neptune-db",
  operations: {
    CancelGremlinQuery: "DELETE /gremlin/status/{queryId}",
    CancelLoaderJob: "DELETE /loader/{loadId}",
    CancelMLDataProcessingJob: "DELETE /ml/dataprocessing/{id}",
    CancelMLModelTrainingJob: "DELETE /ml/modeltraining/{id}",
    CancelMLModelTransformJob: "DELETE /ml/modeltransform/{id}",
    CancelOpenCypherQuery: "DELETE /opencypher/status/{queryId}",
    CreateMLEndpoint: "POST /ml/endpoints",
    DeleteMLEndpoint: "DELETE /ml/endpoints/{id}",
    DeletePropertygraphStatistics: {
      http: "DELETE /propertygraph/statistics",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    DeleteSparqlStatistics: {
      http: "DELETE /sparql/statistics",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    ExecuteFastReset: "POST /system",
    ExecuteGremlinExplainQuery: {
      http: "POST /gremlin/explain",
      traits: {
        output: "httpPayload",
      },
    },
    ExecuteGremlinProfileQuery: {
      http: "POST /gremlin/profile",
      traits: {
        output: "httpPayload",
      },
    },
    ExecuteGremlinQuery: "POST /gremlin",
    ExecuteOpenCypherExplainQuery: {
      http: "POST /opencypher/explain",
      traits: {
        results: "httpPayload",
      },
    },
    ExecuteOpenCypherQuery: "POST /opencypher",
    GetEngineStatus: "GET /status",
    GetGremlinQueryStatus: "GET /gremlin/status/{queryId}",
    GetLoaderJobStatus: "GET /loader/{loadId}",
    GetMLDataProcessingJob: "GET /ml/dataprocessing/{id}",
    GetMLEndpoint: "GET /ml/endpoints/{id}",
    GetMLModelTrainingJob: "GET /ml/modeltraining/{id}",
    GetMLModelTransformJob: "GET /ml/modeltransform/{id}",
    GetOpenCypherQueryStatus: "GET /opencypher/status/{queryId}",
    GetPropertygraphStatistics: "GET /propertygraph/statistics",
    GetPropertygraphStream: "GET /propertygraph/stream",
    GetPropertygraphSummary: {
      http: "GET /propertygraph/statistics/summary",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    GetRDFGraphSummary: {
      http: "GET /rdf/statistics/summary",
      traits: {
        statusCode: "httpResponseCode",
      },
    },
    GetSparqlStatistics: "GET /sparql/statistics",
    GetSparqlStream: "GET /sparql/stream",
    ListGremlinQueries: "GET /gremlin/status",
    ListLoaderJobs: "GET /loader",
    ListMLDataProcessingJobs: "GET /ml/dataprocessing",
    ListMLEndpoints: "GET /ml/endpoints",
    ListMLModelTrainingJobs: "GET /ml/modeltraining",
    ListMLModelTransformJobs: "GET /ml/modeltransform",
    ListOpenCypherQueries: "GET /opencypher/status",
    ManagePropertygraphStatistics: "POST /propertygraph/statistics",
    ManageSparqlStatistics: "POST /sparql/statistics",
    StartLoaderJob: "POST /loader",
    StartMLDataProcessingJob: "POST /ml/dataprocessing",
    StartMLModelTrainingJob: "POST /ml/modeltraining",
    StartMLModelTransformJob: "POST /ml/modeltransform",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const neptunedata = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _neptunedata;
