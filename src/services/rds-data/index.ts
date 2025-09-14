import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RDSData as _RDSDataClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "RDS Data",
  version: "2018-08-01",
  protocol: "restJson1",
  sigV4ServiceName: "rds-data",
  operations: {
    BatchExecuteStatement: "POST /BatchExecute",
    BeginTransaction: "POST /BeginTransaction",
    CommitTransaction: "POST /CommitTransaction",
    ExecuteSql: "POST /ExecuteSql",
    ExecuteStatement: "POST /Execute",
    RollbackTransaction: "POST /RollbackTransaction",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type RDSData = typeof RDSData;
export const RDSData = class extends AWSServiceClient {
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
} as unknown as typeof _RDSDataClient;
