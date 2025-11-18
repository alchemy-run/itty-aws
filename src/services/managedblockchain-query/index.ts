import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ManagedBlockchainQuery as _ManagedBlockchainQueryClient } from "./types.ts";

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
  sdkId: "ManagedBlockchain Query",
  version: "2023-05-04",
  protocol: "restJson1",
  sigV4ServiceName: "managedblockchain-query",
  operations: {
    BatchGetTokenBalance: "POST /batch-get-token-balance",
    GetAssetContract: "POST /get-asset-contract",
    GetTokenBalance: "POST /get-token-balance",
    GetTransaction: "POST /get-transaction",
    ListAssetContracts: "POST /list-asset-contracts",
    ListFilteredTransactionEvents: "POST /list-filtered-transaction-events",
    ListTokenBalances: "POST /list-token-balances",
    ListTransactionEvents: "POST /list-transaction-events",
    ListTransactions: "POST /list-transactions",
  },
  retryableErrors: {
    InternalServerException: { retryAfterSeconds: "Retry-After" },
    ThrottlingException: { retryAfterSeconds: "Retry-After" },
  },
} as const satisfies ServiceMetadata;

export type _ManagedBlockchainQuery = _ManagedBlockchainQueryClient;
export interface ManagedBlockchainQuery extends _ManagedBlockchainQuery {}
export const ManagedBlockchainQuery = class extends AWSServiceClient {
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
} as unknown as typeof _ManagedBlockchainQueryClient;
