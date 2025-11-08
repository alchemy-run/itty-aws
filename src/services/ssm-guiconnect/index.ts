import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSMGuiConnect as _SSMGuiConnectClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SSM GuiConnect",
  version: "2021-05-01",
  protocol: "restJson1",
  sigV4ServiceName: "ssm-guiconnect",
  operations: {
    "DeleteConnectionRecordingPreferences": "POST /DeleteConnectionRecordingPreferences",
    "GetConnectionRecordingPreferences": "POST /GetConnectionRecordingPreferences",
    "UpdateConnectionRecordingPreferences": "POST /UpdateConnectionRecordingPreferences",
  },
} as const satisfies ServiceMetadata;

export type _SSMGuiConnect = _SSMGuiConnectClient;
export interface SSMGuiConnect extends _SSMGuiConnect {}
export const SSMGuiConnect = class extends AWSServiceClient {
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
} as unknown as typeof _SSMGuiConnectClient;
