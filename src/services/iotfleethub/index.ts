import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTFleetHub as _IoTFleetHubClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  sdkId: "IoTFleetHub",
  version: "2020-11-03",
  protocol: "restJson1",
  sigV4ServiceName: "iotfleethub",
  endpointPrefix: "api.fleethub.iot",
  operations: {
    CreateApplication: "POST /applications",
    DeleteApplication: "DELETE /applications/{applicationId}",
    DescribeApplication: "GET /applications/{applicationId}",
    ListApplications: "GET /applications",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApplication: "PATCH /applications/{applicationId}",
  },
} as const satisfies ServiceMetadata;

export type _IoTFleetHub = _IoTFleetHubClient;
export interface IoTFleetHub extends _IoTFleetHub {}
export const IoTFleetHub = class extends AWSServiceClient {
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
} as unknown as typeof _IoTFleetHubClient;
