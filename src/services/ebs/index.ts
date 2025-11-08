import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EBS as _EBSClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "EBS",
  version: "2019-11-02",
  protocol: "restJson1",
  sigV4ServiceName: "ebs",
  endpointPrefix: "ebs",
  operations: {
    "CompleteSnapshot": "POST /snapshots/completion/{SnapshotId}",
    "GetSnapshotBlock": {
      http: "GET /snapshots/{SnapshotId}/blocks/{BlockIndex}",
      traits: {
        "DataLength": "x-amz-Data-Length",
        "BlockData": "httpPayload",
        "Checksum": "x-amz-Checksum",
        "ChecksumAlgorithm": "x-amz-Checksum-Algorithm",
      },
    },
    "ListChangedBlocks": "GET /snapshots/{SecondSnapshotId}/changedblocks",
    "ListSnapshotBlocks": "GET /snapshots/{SnapshotId}/blocks",
    "PutSnapshotBlock": {
      http: "PUT /snapshots/{SnapshotId}/blocks/{BlockIndex}",
      traits: {
        "Checksum": "x-amz-Checksum",
        "ChecksumAlgorithm": "x-amz-Checksum-Algorithm",
      },
    },
    "StartSnapshot": "POST /snapshots",
  },
} as const satisfies ServiceMetadata;

export type _EBS = _EBSClient;
export interface EBS extends _EBS {}
export const EBS = class extends AWSServiceClient {
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
} as unknown as typeof _EBSClient;
