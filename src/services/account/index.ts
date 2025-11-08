import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Account as _AccountClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Account",
  version: "2021-02-01",
  protocol: "restJson1",
  sigV4ServiceName: "account",
  operations: {
    "AcceptPrimaryEmailUpdate": "POST /acceptPrimaryEmailUpdate",
    "DeleteAlternateContact": "POST /deleteAlternateContact",
    "DisableRegion": "POST /disableRegion",
    "EnableRegion": "POST /enableRegion",
    "GetAccountInformation": "POST /getAccountInformation",
    "GetAlternateContact": "POST /getAlternateContact",
    "GetContactInformation": "POST /getContactInformation",
    "GetPrimaryEmail": "POST /getPrimaryEmail",
    "GetRegionOptStatus": "POST /getRegionOptStatus",
    "ListRegions": "POST /listRegions",
    "PutAccountName": "POST /putAccountName",
    "PutAlternateContact": "POST /putAlternateContact",
    "PutContactInformation": "POST /putContactInformation",
    "StartPrimaryEmailUpdate": "POST /startPrimaryEmailUpdate",
  },
} as const satisfies ServiceMetadata;

export type _Account = _AccountClient;
export interface Account extends _Account {}
export const Account = class extends AWSServiceClient {
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
} as unknown as typeof _AccountClient;
