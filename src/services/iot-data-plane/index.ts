import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTDataPlane as _IoTDataPlaneClient } from "./types.ts";

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
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Data Plane",
  version: "2015-05-28",
  protocol: "restJson1",
  sigV4ServiceName: "iotdata",
  endpointPrefix: "data-ats.iot",
  operations: {
    DeleteThingShadow: {
      http: "DELETE /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
    GetRetainedMessage: "GET /retainedMessage/{topic}",
    GetThingShadow: {
      http: "GET /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
    ListNamedShadowsForThing:
      "GET /api/things/shadow/ListNamedShadowsForThing/{thingName}",
    ListRetainedMessages: "GET /retainedMessage",
    Publish: "POST /topics/{topic}",
    UpdateThingShadow: {
      http: "POST /things/{thingName}/shadow",
      traits: {
        payload: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _IoTDataPlane = _IoTDataPlaneClient;
export interface IoTDataPlane extends _IoTDataPlane {}
export const IoTDataPlane = class extends AWSServiceClient {
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
} as unknown as typeof _IoTDataPlaneClient;
