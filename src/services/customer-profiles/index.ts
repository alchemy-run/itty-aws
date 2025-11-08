import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CustomerProfiles as _CustomerProfilesClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Customer Profiles",
  version: "2020-08-15",
  protocol: "restJson1",
  sigV4ServiceName: "profile",
  endpointPrefix: "profile",
  operations: {
    "AddProfileKey": "POST /domains/{DomainName}/profiles/keys",
    "BatchGetCalculatedAttributeForProfile": "POST /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}/batch-get-for-profiles",
    "BatchGetProfile": "POST /domains/{DomainName}/batch-get-profiles",
    "CreateCalculatedAttributeDefinition": "POST /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
    "CreateDomain": "POST /domains/{DomainName}",
    "CreateDomainLayout": "POST /domains/{DomainName}/layouts/{LayoutDefinitionName}",
    "CreateEventStream": "POST /domains/{DomainName}/event-streams/{EventStreamName}",
    "CreateEventTrigger": "POST /domains/{DomainName}/event-triggers/{EventTriggerName}",
    "CreateIntegrationWorkflow": "POST /domains/{DomainName}/workflows/integrations",
    "CreateProfile": "POST /domains/{DomainName}/profiles",
    "CreateSegmentDefinition": "POST /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
    "CreateSegmentEstimate": {
      http: "POST /domains/{DomainName}/segment-estimates",
      traits: {
        "StatusCode": "httpResponseCode",
      },
    },
    "CreateSegmentSnapshot": "POST /domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots",
    "CreateUploadJob": "POST /domains/{DomainName}/upload-jobs",
    "DeleteCalculatedAttributeDefinition": "DELETE /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
    "DeleteDomain": "DELETE /domains/{DomainName}",
    "DeleteDomainLayout": "DELETE /domains/{DomainName}/layouts/{LayoutDefinitionName}",
    "DeleteEventStream": "DELETE /domains/{DomainName}/event-streams/{EventStreamName}",
    "DeleteEventTrigger": "DELETE /domains/{DomainName}/event-triggers/{EventTriggerName}",
    "DeleteIntegration": "POST /domains/{DomainName}/integrations/delete",
    "DeleteProfile": "POST /domains/{DomainName}/profiles/delete",
    "DeleteProfileKey": "POST /domains/{DomainName}/profiles/keys/delete",
    "DeleteProfileObject": "POST /domains/{DomainName}/profiles/objects/delete",
    "DeleteProfileObjectType": "DELETE /domains/{DomainName}/object-types/{ObjectTypeName}",
    "DeleteSegmentDefinition": "DELETE /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
    "DeleteWorkflow": "DELETE /domains/{DomainName}/workflows/{WorkflowId}",
    "DetectProfileObjectType": "POST /domains/{DomainName}/detect/object-types",
    "GetAutoMergingPreview": "POST /domains/{DomainName}/identity-resolution-jobs/auto-merging-preview",
    "GetCalculatedAttributeDefinition": "GET /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
    "GetCalculatedAttributeForProfile": "GET /domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}",
    "GetDomain": "GET /domains/{DomainName}",
    "GetDomainLayout": "GET /domains/{DomainName}/layouts/{LayoutDefinitionName}",
    "GetEventStream": "GET /domains/{DomainName}/event-streams/{EventStreamName}",
    "GetEventTrigger": "GET /domains/{DomainName}/event-triggers/{EventTriggerName}",
    "GetIdentityResolutionJob": "GET /domains/{DomainName}/identity-resolution-jobs/{JobId}",
    "GetIntegration": "POST /domains/{DomainName}/integrations",
    "GetMatches": "GET /domains/{DomainName}/matches",
    "GetProfileObjectType": "GET /domains/{DomainName}/object-types/{ObjectTypeName}",
    "GetProfileObjectTypeTemplate": "GET /templates/{TemplateId}",
    "GetSegmentDefinition": "GET /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
    "GetSegmentEstimate": {
      http: "GET /domains/{DomainName}/segment-estimates/{EstimateId}",
      traits: {
        "StatusCode": "httpResponseCode",
      },
    },
    "GetSegmentMembership": "POST /domains/{DomainName}/segments/{SegmentDefinitionName}/membership",
    "GetSegmentSnapshot": "GET /domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots/{SnapshotId}",
    "GetSimilarProfiles": "POST /domains/{DomainName}/matches",
    "GetUploadJob": "GET /domains/{DomainName}/upload-jobs/{JobId}",
    "GetUploadJobPath": "GET /domains/{DomainName}/upload-jobs/{JobId}/path",
    "GetWorkflow": "GET /domains/{DomainName}/workflows/{WorkflowId}",
    "GetWorkflowSteps": "GET /domains/{DomainName}/workflows/{WorkflowId}/steps",
    "ListAccountIntegrations": "POST /integrations",
    "ListCalculatedAttributeDefinitions": "GET /domains/{DomainName}/calculated-attributes",
    "ListCalculatedAttributesForProfile": "GET /domains/{DomainName}/profile/{ProfileId}/calculated-attributes",
    "ListDomainLayouts": "GET /domains/{DomainName}/layouts",
    "ListDomains": "GET /domains",
    "ListEventStreams": "GET /domains/{DomainName}/event-streams",
    "ListEventTriggers": "GET /domains/{DomainName}/event-triggers",
    "ListIdentityResolutionJobs": "GET /domains/{DomainName}/identity-resolution-jobs",
    "ListIntegrations": "GET /domains/{DomainName}/integrations",
    "ListObjectTypeAttributes": "GET /domains/{DomainName}/object-types/{ObjectTypeName}/attributes",
    "ListProfileAttributeValues": {
      http: "GET /domains/{DomainName}/profile-attributes/{AttributeName}/values",
      traits: {
        "StatusCode": "httpResponseCode",
      },
    },
    "ListProfileObjects": "POST /domains/{DomainName}/profiles/objects",
    "ListProfileObjectTypes": "GET /domains/{DomainName}/object-types",
    "ListProfileObjectTypeTemplates": "GET /templates",
    "ListRuleBasedMatches": "GET /domains/{DomainName}/profiles/ruleBasedMatches",
    "ListSegmentDefinitions": "GET /domains/{DomainName}/segment-definitions",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "ListUploadJobs": "GET /domains/{DomainName}/upload-jobs",
    "ListWorkflows": "POST /domains/{DomainName}/workflows",
    "MergeProfiles": "POST /domains/{DomainName}/profiles/objects/merge",
    "PutIntegration": "PUT /domains/{DomainName}/integrations",
    "PutProfileObject": "PUT /domains/{DomainName}/profiles/objects",
    "PutProfileObjectType": "PUT /domains/{DomainName}/object-types/{ObjectTypeName}",
    "SearchProfiles": "POST /domains/{DomainName}/profiles/search",
    "StartUploadJob": "PUT /domains/{DomainName}/upload-jobs/{JobId}",
    "StopUploadJob": "PUT /domains/{DomainName}/upload-jobs/{JobId}/stop",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "UpdateCalculatedAttributeDefinition": "PUT /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
    "UpdateDomain": "PUT /domains/{DomainName}",
    "UpdateDomainLayout": "PUT /domains/{DomainName}/layouts/{LayoutDefinitionName}",
    "UpdateEventTrigger": "PUT /domains/{DomainName}/event-triggers/{EventTriggerName}",
    "UpdateProfile": "PUT /domains/{DomainName}/profiles",
  },
} as const satisfies ServiceMetadata;

export type _CustomerProfiles = _CustomerProfilesClient;
export interface CustomerProfiles extends _CustomerProfiles {}
export const CustomerProfiles = class extends AWSServiceClient {
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
} as unknown as typeof _CustomerProfilesClient;
