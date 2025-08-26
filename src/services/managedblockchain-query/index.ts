import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ManagedBlockchainQuery as _ManagedBlockchainQuery } from "./types.ts";

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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ManagedBlockchainQuery = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ManagedBlockchainQuery;
