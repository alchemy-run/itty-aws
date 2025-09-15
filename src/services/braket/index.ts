import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Braket as _BraketClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Braket",
  version: "2019-09-01",
  protocol: "restJson1",
  sigV4ServiceName: "braket",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelJob: "PUT /job/{jobArn}/cancel",
    CancelQuantumTask: "PUT /quantum-task/{quantumTaskArn}/cancel",
    CreateJob: "POST /job",
    CreateQuantumTask: "POST /quantum-task",
    GetDevice: "GET /device/{deviceArn}",
    GetJob: "GET /job/{jobArn}",
    GetQuantumTask: "GET /quantum-task/{quantumTaskArn}",
    SearchDevices: "POST /devices",
    SearchJobs: "POST /jobs",
    SearchQuantumTasks: "POST /quantum-tasks",
  },
} as const satisfies ServiceMetadata;

export type _Braket = _BraketClient;
export interface Braket extends _Braket {}
export const Braket = class extends AWSServiceClient {
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
} as unknown as typeof _BraketClient;
