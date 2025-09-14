import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { QLDB as _QLDBClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "QLDB",
  version: "2019-01-02",
  protocol: "restJson1",
  sigV4ServiceName: "qldb",
  endpointPrefix: "qldb",
  operations: {
    CancelJournalKinesisStream:
      "DELETE /ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}",
    CreateLedger: "POST /ledgers",
    DeleteLedger: "DELETE /ledgers/{Name}",
    DescribeJournalKinesisStream:
      "GET /ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}",
    DescribeJournalS3Export:
      "GET /ledgers/{Name}/journal-s3-exports/{ExportId}",
    DescribeLedger: "GET /ledgers/{Name}",
    ExportJournalToS3: "POST /ledgers/{Name}/journal-s3-exports",
    GetBlock: "POST /ledgers/{Name}/block",
    GetDigest: "POST /ledgers/{Name}/digest",
    GetRevision: "POST /ledgers/{Name}/revision",
    ListJournalKinesisStreamsForLedger:
      "GET /ledgers/{LedgerName}/journal-kinesis-streams",
    ListJournalS3Exports: "GET /journal-s3-exports",
    ListJournalS3ExportsForLedger: "GET /ledgers/{Name}/journal-s3-exports",
    ListLedgers: "GET /ledgers",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    StreamJournalToKinesis:
      "POST /ledgers/{LedgerName}/journal-kinesis-streams",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateLedger: "PATCH /ledgers/{Name}",
    UpdateLedgerPermissionsMode: "PATCH /ledgers/{Name}/permissions-mode",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const QLDB = class extends AWSServiceClient {
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
} as unknown as typeof _QLDBClient;
