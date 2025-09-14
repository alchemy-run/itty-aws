import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PcaConnectorScep as _PcaConnectorScepClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Pca Connector Scep",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "pca-connector-scep",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateChallenge: "POST /challenges",
    CreateConnector: "POST /connectors",
    DeleteChallenge: "DELETE /challenges/{ChallengeArn}",
    DeleteConnector: "DELETE /connectors/{ConnectorArn}",
    GetChallengeMetadata: "GET /challengeMetadata/{ChallengeArn}",
    GetChallengePassword: "GET /challengePasswords/{ChallengeArn}",
    GetConnector: "GET /connectors/{ConnectorArn}",
    ListChallengeMetadata: "GET /challengeMetadata",
    ListConnectors: "GET /connectors",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type PcaConnectorScep = typeof PcaConnectorScep;
export const PcaConnectorScep = class extends AWSServiceClient {
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
} as unknown as typeof _PcaConnectorScepClient;
