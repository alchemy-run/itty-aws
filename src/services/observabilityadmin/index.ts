import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ObservabilityAdmin as _ObservabilityAdminClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ObservabilityAdmin",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "observabilityadmin",
  operations: {
    "CreateTelemetryRule": "POST /CreateTelemetryRule",
    "CreateTelemetryRuleForOrganization": "POST /CreateTelemetryRuleForOrganization",
    "DeleteTelemetryRule": "POST /DeleteTelemetryRule",
    "DeleteTelemetryRuleForOrganization": "POST /DeleteTelemetryRuleForOrganization",
    "GetTelemetryEvaluationStatus": "POST /GetTelemetryEvaluationStatus",
    "GetTelemetryEvaluationStatusForOrganization": "POST /GetTelemetryEvaluationStatusForOrganization",
    "GetTelemetryRule": "POST /GetTelemetryRule",
    "GetTelemetryRuleForOrganization": "POST /GetTelemetryRuleForOrganization",
    "ListResourceTelemetry": "POST /ListResourceTelemetry",
    "ListResourceTelemetryForOrganization": "POST /ListResourceTelemetryForOrganization",
    "ListTagsForResource": "POST /ListTagsForResource",
    "ListTelemetryRules": "POST /ListTelemetryRules",
    "ListTelemetryRulesForOrganization": "POST /ListTelemetryRulesForOrganization",
    "StartTelemetryEvaluation": "POST /StartTelemetryEvaluation",
    "StartTelemetryEvaluationForOrganization": "POST /StartTelemetryEvaluationForOrganization",
    "StopTelemetryEvaluation": "POST /StopTelemetryEvaluation",
    "StopTelemetryEvaluationForOrganization": "POST /StopTelemetryEvaluationForOrganization",
    "TagResource": "POST /TagResource",
    "UntagResource": "POST /UntagResource",
    "UpdateTelemetryRule": "POST /UpdateTelemetryRule",
    "UpdateTelemetryRuleForOrganization": "POST /UpdateTelemetryRuleForOrganization",
  },
} as const satisfies ServiceMetadata;

export type _ObservabilityAdmin = _ObservabilityAdminClient;
export interface ObservabilityAdmin extends _ObservabilityAdmin {}
export const ObservabilityAdmin = class extends AWSServiceClient {
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
} as unknown as typeof _ObservabilityAdminClient;
