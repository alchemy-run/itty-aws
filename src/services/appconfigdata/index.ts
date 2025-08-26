import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppConfigData as _AppConfigData } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AppConfigData",
  version: "2021-11-11",
  protocol: "restJson1",
  sigV4ServiceName: "appconfig",
  endpointPrefix: "appconfigdata",
  operations: {
    GetLatestConfiguration: {
      http: "GET /configuration",
      traits: {
        NextPollConfigurationToken: "Next-Poll-Configuration-Token",
        NextPollIntervalInSeconds: "Next-Poll-Interval-In-Seconds",
        ContentType: "Content-Type",
        Configuration: "httpPayload",
        VersionLabel: "Version-Label",
      },
    },
    StartConfigurationSession: "POST /configurationsessions",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AppConfigData = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _AppConfigData;
