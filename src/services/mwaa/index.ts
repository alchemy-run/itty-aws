import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MWAA as _MWAA } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MWAA",
  version: "2020-07-01",
  protocol: "restJson1",
  sigV4ServiceName: "airflow",
  operations: {
    CreateCliToken: "POST /clitoken/{Name}",
    CreateEnvironment: "PUT /environments/{Name}",
    CreateWebLoginToken: "POST /webtoken/{Name}",
    DeleteEnvironment: "DELETE /environments/{Name}",
    GetEnvironment: "GET /environments/{Name}",
    InvokeRestApi: "POST /restapi/{Name}",
    ListEnvironments: "GET /environments",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PublishMetrics: "POST /metrics/environments/{EnvironmentName}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateEnvironment: "PATCH /environments/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MWAA = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MWAA;
