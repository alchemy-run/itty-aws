import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { Route53 as _Route53Client } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Route 53",
  version: "2013-04-01",
  protocol: "restXml",
  sigV4ServiceName: "route53",
  endpointPrefix: "route53",
  operations: {
    CreateCidrCollection: {
      traits: {
        Location: "Location",
      },
    },
    CreateHealthCheck: {
      traits: {
        Location: "Location",
      },
    },
    CreateHostedZone: {
      traits: {
        Location: "Location",
      },
    },
    CreateKeySigningKey: {
      traits: {
        Location: "Location",
      },
    },
    CreateQueryLoggingConfig: {
      traits: {
        Location: "Location",
      },
    },
    CreateReusableDelegationSet: {
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicy: {
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicyInstance: {
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicyVersion: {
      traits: {
        Location: "Location",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Route53 = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestXmlHandler());
  }
} as unknown as typeof _Route53Client;
