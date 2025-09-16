import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CloudDirectory as _CloudDirectoryClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CloudDirectory",
  version: "2017-01-11",
  protocol: "restJson1",
  sigV4ServiceName: "clouddirectory",
  endpointPrefix: "clouddirectory",
  operations: {
    AddFacetToObject: "PUT /amazonclouddirectory/2017-01-11/object/facets",
    ApplySchema: "PUT /amazonclouddirectory/2017-01-11/schema/apply",
    AttachObject: "PUT /amazonclouddirectory/2017-01-11/object/attach",
    AttachPolicy: "PUT /amazonclouddirectory/2017-01-11/policy/attach",
    AttachToIndex: "PUT /amazonclouddirectory/2017-01-11/index/attach",
    AttachTypedLink: "PUT /amazonclouddirectory/2017-01-11/typedlink/attach",
    BatchRead: "POST /amazonclouddirectory/2017-01-11/batchread",
    BatchWrite: "PUT /amazonclouddirectory/2017-01-11/batchwrite",
    CreateDirectory: "PUT /amazonclouddirectory/2017-01-11/directory/create",
    CreateFacet: "PUT /amazonclouddirectory/2017-01-11/facet/create",
    CreateIndex: "PUT /amazonclouddirectory/2017-01-11/index",
    CreateObject: "PUT /amazonclouddirectory/2017-01-11/object",
    CreateSchema: "PUT /amazonclouddirectory/2017-01-11/schema/create",
    CreateTypedLinkFacet:
      "PUT /amazonclouddirectory/2017-01-11/typedlink/facet/create",
    DeleteDirectory: "PUT /amazonclouddirectory/2017-01-11/directory",
    DeleteFacet: "PUT /amazonclouddirectory/2017-01-11/facet/delete",
    DeleteObject: "PUT /amazonclouddirectory/2017-01-11/object/delete",
    DeleteSchema: "PUT /amazonclouddirectory/2017-01-11/schema",
    DeleteTypedLinkFacet:
      "PUT /amazonclouddirectory/2017-01-11/typedlink/facet/delete",
    DetachFromIndex: "PUT /amazonclouddirectory/2017-01-11/index/detach",
    DetachObject: "PUT /amazonclouddirectory/2017-01-11/object/detach",
    DetachPolicy: "PUT /amazonclouddirectory/2017-01-11/policy/detach",
    DetachTypedLink: "PUT /amazonclouddirectory/2017-01-11/typedlink/detach",
    DisableDirectory: "PUT /amazonclouddirectory/2017-01-11/directory/disable",
    EnableDirectory: "PUT /amazonclouddirectory/2017-01-11/directory/enable",
    GetAppliedSchemaVersion:
      "POST /amazonclouddirectory/2017-01-11/schema/getappliedschema",
    GetDirectory: "POST /amazonclouddirectory/2017-01-11/directory/get",
    GetFacet: "POST /amazonclouddirectory/2017-01-11/facet",
    GetLinkAttributes:
      "POST /amazonclouddirectory/2017-01-11/typedlink/attributes/get",
    GetObjectAttributes:
      "POST /amazonclouddirectory/2017-01-11/object/attributes/get",
    GetObjectInformation:
      "POST /amazonclouddirectory/2017-01-11/object/information",
    GetSchemaAsJson: "POST /amazonclouddirectory/2017-01-11/schema/json",
    GetTypedLinkFacetInformation:
      "POST /amazonclouddirectory/2017-01-11/typedlink/facet/get",
    ListAppliedSchemaArns:
      "POST /amazonclouddirectory/2017-01-11/schema/applied",
    ListAttachedIndices: "POST /amazonclouddirectory/2017-01-11/object/indices",
    ListDevelopmentSchemaArns:
      "POST /amazonclouddirectory/2017-01-11/schema/development",
    ListDirectories: "POST /amazonclouddirectory/2017-01-11/directory/list",
    ListFacetAttributes:
      "POST /amazonclouddirectory/2017-01-11/facet/attributes",
    ListFacetNames: "POST /amazonclouddirectory/2017-01-11/facet/list",
    ListIncomingTypedLinks:
      "POST /amazonclouddirectory/2017-01-11/typedlink/incoming",
    ListIndex: "POST /amazonclouddirectory/2017-01-11/index/targets",
    ListManagedSchemaArns:
      "POST /amazonclouddirectory/2017-01-11/schema/managed",
    ListObjectAttributes:
      "POST /amazonclouddirectory/2017-01-11/object/attributes",
    ListObjectChildren: "POST /amazonclouddirectory/2017-01-11/object/children",
    ListObjectParentPaths:
      "POST /amazonclouddirectory/2017-01-11/object/parentpaths",
    ListObjectParents: "POST /amazonclouddirectory/2017-01-11/object/parent",
    ListObjectPolicies: "POST /amazonclouddirectory/2017-01-11/object/policy",
    ListOutgoingTypedLinks:
      "POST /amazonclouddirectory/2017-01-11/typedlink/outgoing",
    ListPolicyAttachments:
      "POST /amazonclouddirectory/2017-01-11/policy/attachment",
    ListPublishedSchemaArns:
      "POST /amazonclouddirectory/2017-01-11/schema/published",
    ListTagsForResource: "POST /amazonclouddirectory/2017-01-11/tags",
    ListTypedLinkFacetAttributes:
      "POST /amazonclouddirectory/2017-01-11/typedlink/facet/attributes",
    ListTypedLinkFacetNames:
      "POST /amazonclouddirectory/2017-01-11/typedlink/facet/list",
    LookupPolicy: "POST /amazonclouddirectory/2017-01-11/policy/lookup",
    PublishSchema: "PUT /amazonclouddirectory/2017-01-11/schema/publish",
    PutSchemaFromJson: "PUT /amazonclouddirectory/2017-01-11/schema/json",
    RemoveFacetFromObject:
      "PUT /amazonclouddirectory/2017-01-11/object/facets/delete",
    TagResource: "PUT /amazonclouddirectory/2017-01-11/tags/add",
    UntagResource: "PUT /amazonclouddirectory/2017-01-11/tags/remove",
    UpdateFacet: "PUT /amazonclouddirectory/2017-01-11/facet",
    UpdateLinkAttributes:
      "POST /amazonclouddirectory/2017-01-11/typedlink/attributes/update",
    UpdateObjectAttributes:
      "PUT /amazonclouddirectory/2017-01-11/object/update",
    UpdateSchema: "PUT /amazonclouddirectory/2017-01-11/schema/update",
    UpdateTypedLinkFacet:
      "PUT /amazonclouddirectory/2017-01-11/typedlink/facet",
    UpgradeAppliedSchema:
      "PUT /amazonclouddirectory/2017-01-11/schema/upgradeapplied",
    UpgradePublishedSchema:
      "PUT /amazonclouddirectory/2017-01-11/schema/upgradepublished",
  },
} as const satisfies ServiceMetadata;

export type _CloudDirectory = _CloudDirectoryClient;
export interface CloudDirectory extends _CloudDirectory {}
export const CloudDirectory = class extends AWSServiceClient {
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
} as unknown as typeof _CloudDirectoryClient;
