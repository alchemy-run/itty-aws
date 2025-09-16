import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AIOps as _AIOpsClient } from "./types.ts";

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
  sdkId: "AIOps",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "aiops",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateInvestigationGroup: "POST /investigationGroups",
    DeleteInvestigationGroup: "DELETE /investigationGroups/{identifier}",
    DeleteInvestigationGroupPolicy:
      "DELETE /investigationGroups/{identifier}/policy",
    GetInvestigationGroup: "GET /investigationGroups/{identifier}",
    GetInvestigationGroupPolicy: "GET /investigationGroups/{identifier}/policy",
    ListInvestigationGroups: "GET /investigationGroups",
    PutInvestigationGroupPolicy:
      "POST /investigationGroups/{identifier}/policy",
    UpdateInvestigationGroup: "PATCH /investigationGroups/{identifier}",
  },
} as const satisfies ServiceMetadata;

export type _AIOps = _AIOpsClient;
export interface AIOps extends _AIOps {}
export const AIOps = class extends AWSServiceClient {
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
} as unknown as typeof _AIOpsClient;
