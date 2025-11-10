import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaPackage as _MediaPackageClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "MediaPackage",
  version: "2017-10-12",
  protocol: "restJson1",
  sigV4ServiceName: "mediapackage",
  endpointPrefix: "mediapackage",
  operations: {
    ConfigureLogs: "PUT /channels/{Id}/configure_logs",
    CreateChannel: "POST /channels",
    CreateHarvestJob: "POST /harvest_jobs",
    CreateOriginEndpoint: "POST /origin_endpoints",
    DeleteChannel: "DELETE /channels/{Id}",
    DeleteOriginEndpoint: "DELETE /origin_endpoints/{Id}",
    DescribeChannel: "GET /channels/{Id}",
    DescribeHarvestJob: "GET /harvest_jobs/{Id}",
    DescribeOriginEndpoint: "GET /origin_endpoints/{Id}",
    ListChannels: "GET /channels",
    ListHarvestJobs: "GET /harvest_jobs",
    ListOriginEndpoints: "GET /origin_endpoints",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    RotateChannelCredentials: "PUT /channels/{Id}/credentials",
    RotateIngestEndpointCredentials:
      "PUT /channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateChannel: "PUT /channels/{Id}",
    UpdateOriginEndpoint: "PUT /origin_endpoints/{Id}",
  },
} as const satisfies ServiceMetadata;

export type _MediaPackage = _MediaPackageClient;
export interface MediaPackage extends _MediaPackage {}
export const MediaPackage = class extends AWSServiceClient {
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
} as unknown as typeof _MediaPackageClient;
