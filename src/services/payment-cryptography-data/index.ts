import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PaymentCryptographyData as _PaymentCryptographyDataClient } from "./types.ts";

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
  sdkId: "Payment Cryptography Data",
  version: "2022-02-03",
  protocol: "restJson1",
  sigV4ServiceName: "payment-cryptography",
  endpointPrefix: "dataplane.payment-cryptography",
  operations: {
    DecryptData: "POST /keys/{KeyIdentifier}/decrypt",
    EncryptData: "POST /keys/{KeyIdentifier}/encrypt",
    GenerateCardValidationData: "POST /cardvalidationdata/generate",
    GenerateMac: "POST /mac/generate",
    GenerateMacEmvPinChange: "POST /macemvpinchange/generate",
    GeneratePinData: "POST /pindata/generate",
    ReEncryptData: "POST /keys/{IncomingKeyIdentifier}/reencrypt",
    TranslatePinData: "POST /pindata/translate",
    VerifyAuthRequestCryptogram: "POST /cryptogram/verify",
    VerifyCardValidationData: "POST /cardvalidationdata/verify",
    VerifyMac: "POST /mac/verify",
    VerifyPinData: "POST /pindata/verify",
  },
} as const satisfies ServiceMetadata;

export type _PaymentCryptographyData = _PaymentCryptographyDataClient;
export interface PaymentCryptographyData extends _PaymentCryptographyData {}
export const PaymentCryptographyData = class extends AWSServiceClient {
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
} as unknown as typeof _PaymentCryptographyDataClient;
