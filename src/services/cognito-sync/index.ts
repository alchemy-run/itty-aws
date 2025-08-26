import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CognitoSync as _CognitoSync } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Cognito Sync",
  version: "2014-06-30",
  protocol: "restJson1",
  sigV4ServiceName: "cognito-sync",
  endpointPrefix: "cognito-sync",
  operations: {
    BulkPublish: "POST /identitypools/{IdentityPoolId}/bulkpublish",
    DeleteDataset:
      "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
    DescribeDataset:
      "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
    DescribeIdentityPoolUsage: "GET /identitypools/{IdentityPoolId}",
    DescribeIdentityUsage:
      "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}",
    GetBulkPublishDetails:
      "POST /identitypools/{IdentityPoolId}/getBulkPublishDetails",
    GetCognitoEvents: "GET /identitypools/{IdentityPoolId}/events",
    GetIdentityPoolConfiguration:
      "GET /identitypools/{IdentityPoolId}/configuration",
    ListDatasets:
      "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
    ListIdentityPoolUsage: "GET /identitypools",
    ListRecords:
      "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
    RegisterDevice:
      "POST /identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
    SetCognitoEvents: "POST /identitypools/{IdentityPoolId}/events",
    SetIdentityPoolConfiguration:
      "POST /identitypools/{IdentityPoolId}/configuration",
    SubscribeToDataset:
      "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
    UnsubscribeFromDataset:
      "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
    UpdateRecords:
      "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CognitoSync = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CognitoSync;
