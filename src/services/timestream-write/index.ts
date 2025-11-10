import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";
import type { TimestreamWrite as _TimestreamWriteClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Timestream Write",
  version: "2018-11-01",
  protocol: "awsJson1_0",
  sigV4ServiceName: "timestream",
  endpointPrefix: "ingest.timestream",
  targetPrefix: "Timestream_20181101",
} as const satisfies ServiceMetadata;

export type _TimestreamWrite = _TimestreamWriteClient;
export interface TimestreamWrite extends _TimestreamWrite {}
export const TimestreamWrite = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new AwsJson10Handler());
  }
} as unknown as typeof _TimestreamWriteClient;
