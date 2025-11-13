import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SupplyChain as _SupplyChainClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SupplyChain",
  version: "2024-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "scn",
  endpointPrefix: "scn",
  operations: {
    "GetDataIntegrationEvent": "GET /api-data/data-integration/instance/{instanceId}/data-integration-events/{eventId}",
    "GetDataIntegrationFlowExecution": "GET /api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions/{executionId}",
    "ListDataIntegrationEvents": "GET /api-data/data-integration/instance/{instanceId}/data-integration-events",
    "ListDataIntegrationFlowExecutions": "GET /api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions",
    "ListTagsForResource": "GET /api/tags/{resourceArn}",
    "SendDataIntegrationEvent": "POST /api-data/data-integration/instance/{instanceId}/data-integration-events",
    "TagResource": "POST /api/tags/{resourceArn}",
    "UntagResource": "DELETE /api/tags/{resourceArn}",
    "CreateBillOfMaterialsImportJob": "POST /api/configuration/instances/{instanceId}/bill-of-materials-import-jobs",
    "CreateDataIntegrationFlow": "PUT /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
    "CreateDataLakeDataset": "PUT /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
    "CreateDataLakeNamespace": "PUT /api/datalake/instance/{instanceId}/namespaces/{name}",
    "CreateInstance": "POST /api/instance",
    "DeleteDataIntegrationFlow": "DELETE /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
    "DeleteDataLakeDataset": "DELETE /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
    "DeleteDataLakeNamespace": "DELETE /api/datalake/instance/{instanceId}/namespaces/{name}",
    "DeleteInstance": "DELETE /api/instance/{instanceId}",
    "GetBillOfMaterialsImportJob": "GET /api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}",
    "GetDataIntegrationFlow": "GET /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
    "GetDataLakeDataset": "GET /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
    "GetDataLakeNamespace": "GET /api/datalake/instance/{instanceId}/namespaces/{name}",
    "GetInstance": "GET /api/instance/{instanceId}",
    "ListDataIntegrationFlows": "GET /api/data-integration/instance/{instanceId}/data-integration-flows",
    "ListDataLakeDatasets": "GET /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets",
    "ListDataLakeNamespaces": "GET /api/datalake/instance/{instanceId}/namespaces",
    "ListInstances": "GET /api/instance",
    "UpdateDataIntegrationFlow": "PATCH /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
    "UpdateDataLakeDataset": "PATCH /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
    "UpdateDataLakeNamespace": "PATCH /api/datalake/instance/{instanceId}/namespaces/{name}",
    "UpdateInstance": "PATCH /api/instance/{instanceId}",
  },
  retryableErrors: {
    "InternalServerException": {},
    "ThrottlingException": {},
  },
} as const satisfies ServiceMetadata;

export type _SupplyChain = _SupplyChainClient;
export interface SupplyChain extends _SupplyChain {}
export const SupplyChain = class extends AWSServiceClient {
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
} as unknown as typeof _SupplyChainClient;
