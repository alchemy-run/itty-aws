import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectCases as _ConnectCasesClient } from "./types.ts";

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
  sdkId: "ConnectCases",
  version: "2022-10-03",
  protocol: "restJson1",
  sigV4ServiceName: "cases",
  endpointPrefix: "cases",
  operations: {
    ListTagsForResource: "GET /tags/{arn}",
    TagResource: "POST /tags/{arn}",
    UntagResource: "DELETE /tags/{arn}",
    BatchGetCaseRule: "POST /domains/{domainId}/rules-batch",
    BatchGetField: "POST /domains/{domainId}/fields-batch",
    BatchPutFieldOptions: "PUT /domains/{domainId}/fields/{fieldId}/options",
    CreateCase: "POST /domains/{domainId}/cases",
    CreateCaseRule: "POST /domains/{domainId}/case-rules",
    CreateDomain: "POST /domains",
    CreateField: "POST /domains/{domainId}/fields",
    CreateLayout: "POST /domains/{domainId}/layouts",
    CreateRelatedItem: "POST /domains/{domainId}/cases/{caseId}/related-items/",
    CreateTemplate: "POST /domains/{domainId}/templates",
    DeleteCase: "DELETE /domains/{domainId}/cases/{caseId}",
    DeleteCaseRule: "DELETE /domains/{domainId}/case-rules/{caseRuleId}",
    DeleteDomain: "DELETE /domains/{domainId}",
    DeleteField: "DELETE /domains/{domainId}/fields/{fieldId}",
    DeleteLayout: "DELETE /domains/{domainId}/layouts/{layoutId}",
    DeleteRelatedItem:
      "DELETE /domains/{domainId}/cases/{caseId}/related-items/{relatedItemId}",
    DeleteTemplate: "DELETE /domains/{domainId}/templates/{templateId}",
    GetCase: "POST /domains/{domainId}/cases/{caseId}",
    GetCaseAuditEvents: "POST /domains/{domainId}/cases/{caseId}/audit-history",
    GetCaseEventConfiguration:
      "POST /domains/{domainId}/case-event-configuration",
    GetDomain: "POST /domains/{domainId}",
    GetLayout: "POST /domains/{domainId}/layouts/{layoutId}",
    GetTemplate: "POST /domains/{domainId}/templates/{templateId}",
    ListCaseRules: "POST /domains/{domainId}/rules-list/",
    ListCasesForContact: "POST /domains/{domainId}/list-cases-for-contact",
    ListDomains: "POST /domains-list",
    ListFieldOptions: "POST /domains/{domainId}/fields/{fieldId}/options-list",
    ListFields: "POST /domains/{domainId}/fields-list",
    ListLayouts: "POST /domains/{domainId}/layouts-list",
    ListTemplates: "POST /domains/{domainId}/templates-list",
    PutCaseEventConfiguration:
      "PUT /domains/{domainId}/case-event-configuration",
    SearchCases: "POST /domains/{domainId}/cases-search",
    SearchRelatedItems:
      "POST /domains/{domainId}/cases/{caseId}/related-items-search",
    UpdateCase: "PUT /domains/{domainId}/cases/{caseId}",
    UpdateCaseRule: "PUT /domains/{domainId}/case-rules/{caseRuleId}",
    UpdateField: "PUT /domains/{domainId}/fields/{fieldId}",
    UpdateLayout: "PUT /domains/{domainId}/layouts/{layoutId}",
    UpdateTemplate: "PUT /domains/{domainId}/templates/{templateId}",
  },
} as const satisfies ServiceMetadata;

export type _ConnectCases = _ConnectCasesClient;
export interface ConnectCases extends _ConnectCases {}
export const ConnectCases = class extends AWSServiceClient {
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
} as unknown as typeof _ConnectCasesClient;
