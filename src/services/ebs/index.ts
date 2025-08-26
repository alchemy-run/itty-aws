import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EBS as _EBS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EBS",
  version: "2019-11-02",
  protocol: "restJson1",
  sigV4ServiceName: "ebs",
  endpointPrefix: "ebs",
  operations: {
    CompleteSnapshot: "POST /snapshots/completion/{SnapshotId}",
    GetSnapshotBlock: {
      http: "GET /snapshots/{SnapshotId}/blocks/{BlockIndex}",
      traits: {
        DataLength: "x-amz-Data-Length",
        BlockData: "httpPayload",
        Checksum: "x-amz-Checksum",
        ChecksumAlgorithm: "x-amz-Checksum-Algorithm",
      },
    },
    ListChangedBlocks: "GET /snapshots/{SecondSnapshotId}/changedblocks",
    ListSnapshotBlocks: "GET /snapshots/{SnapshotId}/blocks",
    PutSnapshotBlock: {
      http: "PUT /snapshots/{SnapshotId}/blocks/{BlockIndex}",
      traits: {
        Checksum: "x-amz-Checksum",
        ChecksumAlgorithm: "x-amz-Checksum-Algorithm",
      },
    },
    StartSnapshot: "POST /snapshots",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EBS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _EBS;
