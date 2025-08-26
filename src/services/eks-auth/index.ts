import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EKSAuth as _EKSAuth } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EKS Auth",
  version: "2023-11-26",
  protocol: "restJson1",
  sigV4ServiceName: "eks-auth",
  endpointPrefix: "eks-auth",
  operations: {
    AssumeRoleForPodIdentity:
      "POST /clusters/{clusterName}/assume-role-for-pod-identity",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EKSAuth = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _EKSAuth;
