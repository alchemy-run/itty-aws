import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { schemas as _schemasClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "schemas",
  version: "2019-12-02",
  protocol: "restJson1",
  sigV4ServiceName: "schemas",
  endpointPrefix: "schemas",
  operations: {
    CreateDiscoverer: "POST /v1/discoverers",
    CreateRegistry: "POST /v1/registries/name/{RegistryName}",
    CreateSchema:
      "POST /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
    DeleteDiscoverer: "DELETE /v1/discoverers/id/{DiscovererId}",
    DeleteRegistry: "DELETE /v1/registries/name/{RegistryName}",
    DeleteResourcePolicy: "DELETE /v1/policy",
    DeleteSchema:
      "DELETE /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
    DeleteSchemaVersion:
      "DELETE /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}",
    DescribeCodeBinding:
      "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
    DescribeDiscoverer: "GET /v1/discoverers/id/{DiscovererId}",
    DescribeRegistry: "GET /v1/registries/name/{RegistryName}",
    DescribeSchema:
      "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
    ExportSchema:
      "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export",
    GetCodeBindingSource: {
      http: "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source",
      traits: {
        Body: "httpPayload",
      },
    },
    GetDiscoveredSchema: "POST /v1/discover",
    GetResourcePolicy: "GET /v1/policy",
    ListDiscoverers: "GET /v1/discoverers",
    ListRegistries: "GET /v1/registries",
    ListSchemas: "GET /v1/registries/name/{RegistryName}/schemas",
    ListSchemaVersions:
      "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PutCodeBinding:
      "POST /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
    PutResourcePolicy: "PUT /v1/policy",
    SearchSchemas: "GET /v1/registries/name/{RegistryName}/schemas/search",
    StartDiscoverer: "POST /v1/discoverers/id/{DiscovererId}/start",
    StopDiscoverer: "POST /v1/discoverers/id/{DiscovererId}/stop",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateDiscoverer: "PUT /v1/discoverers/id/{DiscovererId}",
    UpdateRegistry: "PUT /v1/registries/name/{RegistryName}",
    UpdateSchema:
      "PUT /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type schemas = typeof schemas;
export const schemas = class extends AWSServiceClient {
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
} as unknown as typeof _schemasClient;
