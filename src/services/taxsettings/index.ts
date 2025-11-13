import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { TaxSettings as _TaxSettingsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "TaxSettings",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "tax",
  operations: {
    "BatchDeleteTaxRegistration": "POST /BatchDeleteTaxRegistration",
    "BatchGetTaxExemptions": "POST /BatchGetTaxExemptions",
    "BatchPutTaxRegistration": "POST /BatchPutTaxRegistration",
    "DeleteSupplementalTaxRegistration": "POST /DeleteSupplementalTaxRegistration",
    "DeleteTaxRegistration": "POST /DeleteTaxRegistration",
    "GetTaxExemptionTypes": "POST /GetTaxExemptionTypes",
    "GetTaxInheritance": "POST /GetTaxInheritance",
    "GetTaxRegistration": "POST /GetTaxRegistration",
    "GetTaxRegistrationDocument": "POST /GetTaxRegistrationDocument",
    "ListSupplementalTaxRegistrations": "POST /ListSupplementalTaxRegistrations",
    "ListTaxExemptions": "POST /ListTaxExemptions",
    "ListTaxRegistrations": "POST /ListTaxRegistrations",
    "PutSupplementalTaxRegistration": "POST /PutSupplementalTaxRegistration",
    "PutTaxExemption": "POST /PutTaxExemption",
    "PutTaxInheritance": "POST /PutTaxInheritance",
    "PutTaxRegistration": "POST /PutTaxRegistration",
  },
} as const satisfies ServiceMetadata;

export type _TaxSettings = _TaxSettingsClient;
export interface TaxSettings extends _TaxSettings {}
export const TaxSettings = class extends AWSServiceClient {
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
} as unknown as typeof _TaxSettingsClient;
