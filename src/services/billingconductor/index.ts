import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { billingconductor as _billingconductorClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "billingconductor",
  version: "2021-07-30",
  protocol: "restJson1",
  sigV4ServiceName: "billingconductor",
  operations: {
    "GetBillingGroupCostReport": "POST /get-billing-group-cost-report",
    "ListAccountAssociations": "POST /list-account-associations",
    "ListBillingGroupCostReports": "POST /list-billing-group-cost-reports",
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "AssociateAccounts": "POST /associate-accounts",
    "AssociatePricingRules": "PUT /associate-pricing-rules",
    "BatchAssociateResourcesToCustomLineItem": "PUT /batch-associate-resources-to-custom-line-item",
    "BatchDisassociateResourcesFromCustomLineItem": "PUT /batch-disassociate-resources-from-custom-line-item",
    "CreateBillingGroup": "POST /create-billing-group",
    "CreateCustomLineItem": "POST /create-custom-line-item",
    "CreatePricingPlan": "POST /create-pricing-plan",
    "CreatePricingRule": "POST /create-pricing-rule",
    "DeleteBillingGroup": "POST /delete-billing-group",
    "DeleteCustomLineItem": "POST /delete-custom-line-item",
    "DeletePricingPlan": "POST /delete-pricing-plan",
    "DeletePricingRule": "POST /delete-pricing-rule",
    "DisassociateAccounts": "POST /disassociate-accounts",
    "DisassociatePricingRules": "PUT /disassociate-pricing-rules",
    "ListBillingGroups": "POST /list-billing-groups",
    "ListCustomLineItemVersions": "POST /list-custom-line-item-versions",
    "ListCustomLineItems": "POST /list-custom-line-items",
    "ListPricingPlans": "POST /list-pricing-plans",
    "ListPricingPlansAssociatedWithPricingRule": "POST /list-pricing-plans-associated-with-pricing-rule",
    "ListPricingRules": "POST /list-pricing-rules",
    "ListPricingRulesAssociatedToPricingPlan": "POST /list-pricing-rules-associated-to-pricing-plan",
    "ListResourcesAssociatedToCustomLineItem": "POST /list-resources-associated-to-custom-line-item",
    "UpdateBillingGroup": "POST /update-billing-group",
    "UpdateCustomLineItem": "POST /update-custom-line-item",
    "UpdatePricingPlan": "PUT /update-pricing-plan",
    "UpdatePricingRule": "PUT /update-pricing-rule",
  },
} as const satisfies ServiceMetadata;

export type _billingconductor = _billingconductorClient;
export interface billingconductor extends _billingconductor {}
export const billingconductor = class extends AWSServiceClient {
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
} as unknown as typeof _billingconductorClient;
