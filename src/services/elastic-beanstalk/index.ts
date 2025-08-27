import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { AwsQueryHandler } from "../../protocols/aws-query.ts";
import { metadata as protocolMetadata } from "../../awsquery-metadata/elastic-beanstalk.ts";
import type { ElasticBeanstalk as _ElasticBeanstalk } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Elastic Beanstalk",
  version: "2010-12-01",
  protocol: "awsQuery",
  sigV4ServiceName: "elasticbeanstalk",
  endpointPrefix: "elasticbeanstalk",
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ElasticBeanstalk = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(
      metadata,
      this.config,
      new AwsQueryHandler(protocolMetadata),
    );
  }
} as unknown as typeof _ElasticBeanstalk;
