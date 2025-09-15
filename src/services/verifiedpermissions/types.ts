import type { Effect, Data as EffectData } from "effect";
import type {
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
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class VerifiedPermissions extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetPolicy(
    input: BatchGetPolicyInput,
  ): Effect.Effect<BatchGetPolicyOutput, CommonAwsError>;
  batchIsAuthorized(
    input: BatchIsAuthorizedInput,
  ): Effect.Effect<
    BatchIsAuthorizedOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  batchIsAuthorizedWithToken(
    input: BatchIsAuthorizedWithTokenInput,
  ): Effect.Effect<
    BatchIsAuthorizedWithTokenOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  createIdentitySource(
    input: CreateIdentitySourceInput,
  ): Effect.Effect<
    CreateIdentitySourceOutput,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createPolicy(
    input: CreatePolicyInput,
  ): Effect.Effect<
    CreatePolicyOutput,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createPolicyStore(
    input: CreatePolicyStoreInput,
  ): Effect.Effect<
    CreatePolicyStoreOutput,
    ConflictException | ServiceQuotaExceededException | CommonAwsError
  >;
  createPolicyTemplate(
    input: CreatePolicyTemplateInput,
  ): Effect.Effect<
    CreatePolicyTemplateOutput,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  deleteIdentitySource(
    input: DeleteIdentitySourceInput,
  ): Effect.Effect<
    DeleteIdentitySourceOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyInput,
  ): Effect.Effect<
    DeletePolicyOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  deletePolicyStore(
    input: DeletePolicyStoreInput,
  ): Effect.Effect<
    DeletePolicyStoreOutput,
    InvalidStateException | CommonAwsError
  >;
  deletePolicyTemplate(
    input: DeletePolicyTemplateInput,
  ): Effect.Effect<
    DeletePolicyTemplateOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  getIdentitySource(
    input: GetIdentitySourceInput,
  ): Effect.Effect<
    GetIdentitySourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyInput,
  ): Effect.Effect<GetPolicyOutput, ResourceNotFoundException | CommonAwsError>;
  getPolicyStore(
    input: GetPolicyStoreInput,
  ): Effect.Effect<
    GetPolicyStoreOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getPolicyTemplate(
    input: GetPolicyTemplateInput,
  ): Effect.Effect<
    GetPolicyTemplateOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getSchema(
    input: GetSchemaInput,
  ): Effect.Effect<GetSchemaOutput, ResourceNotFoundException | CommonAwsError>;
  isAuthorized(
    input: IsAuthorizedInput,
  ): Effect.Effect<
    IsAuthorizedOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  isAuthorizedWithToken(
    input: IsAuthorizedWithTokenInput,
  ): Effect.Effect<
    IsAuthorizedWithTokenOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listIdentitySources(
    input: ListIdentitySourcesInput,
  ): Effect.Effect<
    ListIdentitySourcesOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesInput,
  ): Effect.Effect<
    ListPoliciesOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  listPolicyStores(
    input: ListPolicyStoresInput,
  ): Effect.Effect<ListPolicyStoresOutput, CommonAwsError>;
  listPolicyTemplates(
    input: ListPolicyTemplatesInput,
  ): Effect.Effect<
    ListPolicyTemplatesOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  putSchema(
    input: PutSchemaInput,
  ): Effect.Effect<
    PutSchemaOutput,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  updateIdentitySource(
    input: UpdateIdentitySourceInput,
  ): Effect.Effect<
    UpdateIdentitySourceOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updatePolicy(
    input: UpdatePolicyInput,
  ): Effect.Effect<
    UpdatePolicyOutput,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  updatePolicyStore(
    input: UpdatePolicyStoreInput,
  ): Effect.Effect<
    UpdatePolicyStoreOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  updatePolicyTemplate(
    input: UpdatePolicyTemplateInput,
  ): Effect.Effect<
    UpdatePolicyTemplateOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
}

export declare class Verifiedpermissions extends VerifiedPermissions {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type ActionId = string;

export interface ActionIdentifier {
  actionType: string;
  actionId: string;
}
export type ActionIdentifierList = Array<ActionIdentifier>;
export type ActionType = string;

export type AmazonResourceName = string;

interface _AttributeValue {
  boolean?: boolean;
  entityIdentifier?: EntityIdentifier;
  long?: number;
  string?: string;
  set?: Array<AttributeValue>;
  record?: Record<string, AttributeValue>;
  ipaddr?: string;
  decimal?: string;
}

export type AttributeValue =
  | (_AttributeValue & { boolean: boolean })
  | (_AttributeValue & { entityIdentifier: EntityIdentifier })
  | (_AttributeValue & { long: number })
  | (_AttributeValue & { string: string })
  | (_AttributeValue & { set: Array<AttributeValue> })
  | (_AttributeValue & { record: Record<string, AttributeValue> })
  | (_AttributeValue & { ipaddr: string })
  | (_AttributeValue & { decimal: string });
export type Audience = string;

export type Audiences = Array<string>;
export type BatchGetPolicyErrorCode =
  | "POLICY_STORE_NOT_FOUND"
  | "POLICY_NOT_FOUND";
export interface BatchGetPolicyErrorItem {
  code: BatchGetPolicyErrorCode;
  policyStoreId: string;
  policyId: string;
  message: string;
}
export type BatchGetPolicyErrorList = Array<BatchGetPolicyErrorItem>;
export interface BatchGetPolicyInput {
  requests: Array<BatchGetPolicyInputItem>;
}
export interface BatchGetPolicyInputItem {
  policyStoreId: string;
  policyId: string;
}
export type BatchGetPolicyInputList = Array<BatchGetPolicyInputItem>;
export interface BatchGetPolicyOutput {
  results: Array<BatchGetPolicyOutputItem>;
  errors: Array<BatchGetPolicyErrorItem>;
}
export interface BatchGetPolicyOutputItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  definition: PolicyDefinitionDetail;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type BatchGetPolicyOutputList = Array<BatchGetPolicyOutputItem>;
export interface BatchIsAuthorizedInput {
  policyStoreId: string;
  entities?: EntitiesDefinition;
  requests: Array<BatchIsAuthorizedInputItem>;
}
export interface BatchIsAuthorizedInputItem {
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
export type BatchIsAuthorizedInputList = Array<BatchIsAuthorizedInputItem>;
export interface BatchIsAuthorizedOutput {
  results: Array<BatchIsAuthorizedOutputItem>;
}
export interface BatchIsAuthorizedOutputItem {
  request: BatchIsAuthorizedInputItem;
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export type BatchIsAuthorizedOutputList = Array<BatchIsAuthorizedOutputItem>;
export interface BatchIsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string;
  accessToken?: string;
  entities?: EntitiesDefinition;
  requests: Array<BatchIsAuthorizedWithTokenInputItem>;
}
export interface BatchIsAuthorizedWithTokenInputItem {
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
export type BatchIsAuthorizedWithTokenInputList =
  Array<BatchIsAuthorizedWithTokenInputItem>;
export interface BatchIsAuthorizedWithTokenOutput {
  principal?: EntityIdentifier;
  results: Array<BatchIsAuthorizedWithTokenOutputItem>;
}
export interface BatchIsAuthorizedWithTokenOutputItem {
  request: BatchIsAuthorizedWithTokenInputItem;
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export type BatchIsAuthorizedWithTokenOutputList =
  Array<BatchIsAuthorizedWithTokenOutputItem>;
export type BooleanAttribute = boolean;

export type CedarJson = string;

export type CedarVersion = "CEDAR_2" | "CEDAR_4";
export type Claim = string;

export type ClientId = string;

export type ClientIds = Array<string>;
export interface CognitoGroupConfiguration {
  groupEntityType: string;
}
export interface CognitoGroupConfigurationDetail {
  groupEntityType?: string;
}
export interface CognitoGroupConfigurationItem {
  groupEntityType?: string;
}
export interface CognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: Array<string>;
  groupConfiguration?: CognitoGroupConfiguration;
}
export interface CognitoUserPoolConfigurationDetail {
  userPoolArn: string;
  clientIds: Array<string>;
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationDetail;
}
export interface CognitoUserPoolConfigurationItem {
  userPoolArn: string;
  clientIds: Array<string>;
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationItem;
}
interface _Configuration {
  cognitoUserPoolConfiguration?: CognitoUserPoolConfiguration;
  openIdConnectConfiguration?: OpenIdConnectConfiguration;
}

export type Configuration =
  | (_Configuration & {
      cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    })
  | (_Configuration & {
      openIdConnectConfiguration: OpenIdConnectConfiguration;
    });
interface _ConfigurationDetail {
  cognitoUserPoolConfiguration?: CognitoUserPoolConfigurationDetail;
  openIdConnectConfiguration?: OpenIdConnectConfigurationDetail;
}

export type ConfigurationDetail =
  | (_ConfigurationDetail & {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail;
    })
  | (_ConfigurationDetail & {
      openIdConnectConfiguration: OpenIdConnectConfigurationDetail;
    });
interface _ConfigurationItem {
  cognitoUserPoolConfiguration?: CognitoUserPoolConfigurationItem;
  openIdConnectConfiguration?: OpenIdConnectConfigurationItem;
}

export type ConfigurationItem =
  | (_ConfigurationItem & {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItem;
    })
  | (_ConfigurationItem & {
      openIdConnectConfiguration: OpenIdConnectConfigurationItem;
    });
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resources: Array<ResourceConflict>;
}> {}
interface _ContextDefinition {
  contextMap?: Record<string, AttributeValue>;
  cedarJson?: string;
}

export type ContextDefinition =
  | (_ContextDefinition & { contextMap: Record<string, AttributeValue> })
  | (_ContextDefinition & { cedarJson: string });
export type ContextMap = Record<string, AttributeValue>;
export interface CreateIdentitySourceInput {
  clientToken?: string;
  policyStoreId: string;
  configuration: Configuration;
  principalEntityType?: string;
}
export interface CreateIdentitySourceOutput {
  createdDate: Date | string;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
}
export interface CreatePolicyInput {
  clientToken?: string;
  policyStoreId: string;
  definition: PolicyDefinition;
}
export interface CreatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface CreatePolicyStoreInput {
  clientToken?: string;
  validationSettings: ValidationSettings;
  description?: string;
  deletionProtection?: DeletionProtection;
  tags?: Record<string, string>;
}
export interface CreatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface CreatePolicyTemplateInput {
  clientToken?: string;
  policyStoreId: string;
  description?: string;
  statement: string;
}
export interface CreatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type Decimal = string;

export type Decision = "ALLOW" | "DENY";
export interface DeleteIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
export interface DeleteIdentitySourceOutput {}
export interface DeletePolicyInput {
  policyStoreId: string;
  policyId: string;
}
export interface DeletePolicyOutput {}
export interface DeletePolicyStoreInput {
  policyStoreId: string;
}
export interface DeletePolicyStoreOutput {}
export interface DeletePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
export interface DeletePolicyTemplateOutput {}
export type DeletionProtection = "ENABLED" | "DISABLED";
export interface DeterminingPolicyItem {
  policyId: string;
}
export type DeterminingPolicyList = Array<DeterminingPolicyItem>;
export type DiscoveryUrl = string;

interface _EntitiesDefinition {
  entityList?: Array<EntityItem>;
  cedarJson?: string;
}

export type EntitiesDefinition =
  | (_EntitiesDefinition & { entityList: Array<EntityItem> })
  | (_EntitiesDefinition & { cedarJson: string });
export type EntityAttributes = Record<string, AttributeValue>;
export type EntityId = string;

export interface EntityIdentifier {
  entityType: string;
  entityId: string;
}
export type EntityIdPrefix = string;

export interface EntityItem {
  identifier: EntityIdentifier;
  attributes?: Record<string, AttributeValue>;
  parents?: Array<EntityIdentifier>;
}
export type EntityList = Array<EntityItem>;
interface _EntityReference {
  unspecified?: boolean;
  identifier?: EntityIdentifier;
}

export type EntityReference =
  | (_EntityReference & { unspecified: boolean })
  | (_EntityReference & { identifier: EntityIdentifier });
export type EntityType = string;

export interface EvaluationErrorItem {
  errorDescription: string;
}
export type EvaluationErrorList = Array<EvaluationErrorItem>;
export interface GetIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
export interface GetIdentitySourceOutput {
  createdDate: Date | string;
  details?: IdentitySourceDetails;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
  principalEntityType: string;
  configuration?: ConfigurationDetail;
}
export interface GetPolicyInput {
  policyStoreId: string;
  policyId: string;
}
export interface GetPolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  definition: PolicyDefinitionDetail;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface GetPolicyStoreInput {
  policyStoreId: string;
  tags?: boolean;
}
export interface GetPolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  validationSettings: ValidationSettings;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  description?: string;
  deletionProtection?: DeletionProtection;
  cedarVersion?: CedarVersion;
  tags?: Record<string, string>;
}
export interface GetPolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
export interface GetPolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  statement: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface GetSchemaInput {
  policyStoreId: string;
}
export interface GetSchemaOutput {
  policyStoreId: string;
  schema: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  namespaces?: Array<string>;
}
export type GroupEntityType = string;

export type IdempotencyToken = string;

export interface IdentitySourceDetails {
  clientIds?: Array<string>;
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
export interface IdentitySourceFilter {
  principalEntityType?: string;
}
export type IdentitySourceFilters = Array<IdentitySourceFilter>;
export type IdentitySourceId = string;

export interface IdentitySourceItem {
  createdDate: Date | string;
  details?: IdentitySourceItemDetails;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
  principalEntityType: string;
  configuration?: ConfigurationItem;
}
export interface IdentitySourceItemDetails {
  clientIds?: Array<string>;
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
export type IdentitySources = Array<IdentitySourceItem>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message: string;
}> {}
export type IpAddr = string;

export interface IsAuthorizedInput {
  policyStoreId: string;
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
export interface IsAuthorizedOutput {
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export interface IsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string;
  accessToken?: string;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
export interface IsAuthorizedWithTokenOutput {
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
  principal?: EntityIdentifier;
}
export type Issuer = string;

export interface ListIdentitySourcesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<IdentitySourceFilter>;
}
export type ListIdentitySourcesMaxResults = number;

export interface ListIdentitySourcesOutput {
  nextToken?: string;
  identitySources: Array<IdentitySourceItem>;
}
export interface ListPoliciesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: PolicyFilter;
}
export interface ListPoliciesOutput {
  nextToken?: string;
  policies: Array<PolicyItem>;
}
export interface ListPolicyStoresInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPolicyStoresOutput {
  nextToken?: string;
  policyStores: Array<PolicyStoreItem>;
}
export interface ListPolicyTemplatesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPolicyTemplatesOutput {
  nextToken?: string;
  policyTemplates: Array<PolicyTemplateItem>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export type LongAttribute = number;

export type MaxResults = number;

export type Namespace = string;

export type NamespaceList = Array<string>;
export type NextToken = string;

export interface OpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectAccessTokenConfigurationDetail {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectAccessTokenConfigurationItem {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfiguration;
  tokenSelection: OpenIdConnectTokenSelection;
}
export interface OpenIdConnectConfigurationDetail {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfigurationDetail;
  tokenSelection: OpenIdConnectTokenSelectionDetail;
}
export interface OpenIdConnectConfigurationItem {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfigurationItem;
  tokenSelection: OpenIdConnectTokenSelectionItem;
}
export interface OpenIdConnectGroupConfiguration {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectGroupConfigurationDetail {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectGroupConfigurationItem {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export interface OpenIdConnectIdentityTokenConfigurationDetail {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export interface OpenIdConnectIdentityTokenConfigurationItem {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
interface _OpenIdConnectTokenSelection {
  accessTokenOnly?: OpenIdConnectAccessTokenConfiguration;
  identityTokenOnly?: OpenIdConnectIdentityTokenConfiguration;
}

export type OpenIdConnectTokenSelection =
  | (_OpenIdConnectTokenSelection & {
      accessTokenOnly: OpenIdConnectAccessTokenConfiguration;
    })
  | (_OpenIdConnectTokenSelection & {
      identityTokenOnly: OpenIdConnectIdentityTokenConfiguration;
    });
interface _OpenIdConnectTokenSelectionDetail {
  accessTokenOnly?: OpenIdConnectAccessTokenConfigurationDetail;
  identityTokenOnly?: OpenIdConnectIdentityTokenConfigurationDetail;
}

export type OpenIdConnectTokenSelectionDetail =
  | (_OpenIdConnectTokenSelectionDetail & {
      accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetail;
    })
  | (_OpenIdConnectTokenSelectionDetail & {
      identityTokenOnly: OpenIdConnectIdentityTokenConfigurationDetail;
    });
interface _OpenIdConnectTokenSelectionItem {
  accessTokenOnly?: OpenIdConnectAccessTokenConfigurationItem;
  identityTokenOnly?: OpenIdConnectIdentityTokenConfigurationItem;
}

export type OpenIdConnectTokenSelectionItem =
  | (_OpenIdConnectTokenSelectionItem & {
      accessTokenOnly: OpenIdConnectAccessTokenConfigurationItem;
    })
  | (_OpenIdConnectTokenSelectionItem & {
      identityTokenOnly: OpenIdConnectIdentityTokenConfigurationItem;
    });
export type OpenIdIssuer = "COGNITO";
export type ParentList = Array<EntityIdentifier>;
interface _PolicyDefinition {
  static?: StaticPolicyDefinition;
  templateLinked?: TemplateLinkedPolicyDefinition;
}

export type PolicyDefinition =
  | (_PolicyDefinition & { static: StaticPolicyDefinition })
  | (_PolicyDefinition & { templateLinked: TemplateLinkedPolicyDefinition });
interface _PolicyDefinitionDetail {
  static?: StaticPolicyDefinitionDetail;
  templateLinked?: TemplateLinkedPolicyDefinitionDetail;
}

export type PolicyDefinitionDetail =
  | (_PolicyDefinitionDetail & { static: StaticPolicyDefinitionDetail })
  | (_PolicyDefinitionDetail & {
      templateLinked: TemplateLinkedPolicyDefinitionDetail;
    });
interface _PolicyDefinitionItem {
  static?: StaticPolicyDefinitionItem;
  templateLinked?: TemplateLinkedPolicyDefinitionItem;
}

export type PolicyDefinitionItem =
  | (_PolicyDefinitionItem & { static: StaticPolicyDefinitionItem })
  | (_PolicyDefinitionItem & {
      templateLinked: TemplateLinkedPolicyDefinitionItem;
    });
export type PolicyEffect = "Permit" | "Forbid";
export interface PolicyFilter {
  principal?: EntityReference;
  resource?: EntityReference;
  policyType?: PolicyType;
  policyTemplateId?: string;
}
export type PolicyId = string;

export interface PolicyItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  definition: PolicyDefinitionItem;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export type PolicyList = Array<PolicyItem>;
export type PolicyStatement = string;

export type PolicyStoreDescription = string;

export type PolicyStoreId = string;

export interface PolicyStoreItem {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate?: Date | string;
  description?: string;
}
export type PolicyStoreList = Array<PolicyStoreItem>;
export type PolicyTemplateDescription = string;

export type PolicyTemplateId = string;

export interface PolicyTemplateItem {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type PolicyTemplatesList = Array<PolicyTemplateItem>;
export type PolicyType = "STATIC" | "TEMPLATE_LINKED";
export type PrincipalEntityType = string;

export interface PutSchemaInput {
  policyStoreId: string;
  definition: SchemaDefinition;
}
export interface PutSchemaOutput {
  policyStoreId: string;
  namespaces: Array<string>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type RecordAttribute = Record<string, AttributeValue>;
export type ResourceArn = string;

export interface ResourceConflict {
  resourceId: string;
  resourceType: ResourceType;
}
export type ResourceConflictList = Array<ResourceConflict>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: ResourceType;
}> {}
export type ResourceType =
  | "IDENTITY_SOURCE"
  | "POLICY_STORE"
  | "POLICY"
  | "POLICY_TEMPLATE"
  | "SCHEMA";
interface _SchemaDefinition {
  cedarJson?: string;
}

export type SchemaDefinition = _SchemaDefinition & { cedarJson: string };
export type SchemaJson = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType: ResourceType;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type SetAttribute = Array<AttributeValue>;
export interface StaticPolicyDefinition {
  description?: string;
  statement: string;
}
export interface StaticPolicyDefinitionDetail {
  description?: string;
  statement: string;
}
export interface StaticPolicyDefinitionItem {
  description?: string;
}
export type StaticPolicyDescription = string;

export type StringAttribute = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export interface TemplateLinkedPolicyDefinition {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export interface TemplateLinkedPolicyDefinitionDetail {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export interface TemplateLinkedPolicyDefinitionItem {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type TimestampFormat = Date | string;

export type Token = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateCognitoGroupConfiguration {
  groupEntityType: string;
}
export interface UpdateCognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: Array<string>;
  groupConfiguration?: UpdateCognitoGroupConfiguration;
}
interface _UpdateConfiguration {
  cognitoUserPoolConfiguration?: UpdateCognitoUserPoolConfiguration;
  openIdConnectConfiguration?: UpdateOpenIdConnectConfiguration;
}

export type UpdateConfiguration =
  | (_UpdateConfiguration & {
      cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration;
    })
  | (_UpdateConfiguration & {
      openIdConnectConfiguration: UpdateOpenIdConnectConfiguration;
    });
export interface UpdateIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
  updateConfiguration: UpdateConfiguration;
  principalEntityType?: string;
}
export interface UpdateIdentitySourceOutput {
  createdDate: Date | string;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
}
export interface UpdateOpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface UpdateOpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: UpdateOpenIdConnectGroupConfiguration;
  tokenSelection: UpdateOpenIdConnectTokenSelection;
}
export interface UpdateOpenIdConnectGroupConfiguration {
  groupClaim: string;
  groupEntityType: string;
}
export interface UpdateOpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
interface _UpdateOpenIdConnectTokenSelection {
  accessTokenOnly?: UpdateOpenIdConnectAccessTokenConfiguration;
  identityTokenOnly?: UpdateOpenIdConnectIdentityTokenConfiguration;
}

export type UpdateOpenIdConnectTokenSelection =
  | (_UpdateOpenIdConnectTokenSelection & {
      accessTokenOnly: UpdateOpenIdConnectAccessTokenConfiguration;
    })
  | (_UpdateOpenIdConnectTokenSelection & {
      identityTokenOnly: UpdateOpenIdConnectIdentityTokenConfiguration;
    });
interface _UpdatePolicyDefinition {
  static?: UpdateStaticPolicyDefinition;
}

export type UpdatePolicyDefinition = _UpdatePolicyDefinition & {
  static: UpdateStaticPolicyDefinition;
};
export interface UpdatePolicyInput {
  policyStoreId: string;
  policyId: string;
  definition: UpdatePolicyDefinition;
}
export interface UpdatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface UpdatePolicyStoreInput {
  policyStoreId: string;
  validationSettings: ValidationSettings;
  deletionProtection?: DeletionProtection;
  description?: string;
}
export interface UpdatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface UpdatePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  statement: string;
}
export interface UpdatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface UpdateStaticPolicyDefinition {
  description?: string;
  statement: string;
}
export type UserPoolArn = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationMode = "OFF" | "STRICT";
export interface ValidationSettings {
  mode: ValidationMode;
}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetPolicy {
  export type Input = BatchGetPolicyInput;
  export type Output = BatchGetPolicyOutput;
  export type Error = CommonAwsError;
}

export declare namespace BatchIsAuthorized {
  export type Input = BatchIsAuthorizedInput;
  export type Output = BatchIsAuthorizedOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace BatchIsAuthorizedWithToken {
  export type Input = BatchIsAuthorizedWithTokenInput;
  export type Output = BatchIsAuthorizedWithTokenOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace CreateIdentitySource {
  export type Input = CreateIdentitySourceInput;
  export type Output = CreateIdentitySourceOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreatePolicy {
  export type Input = CreatePolicyInput;
  export type Output = CreatePolicyOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreatePolicyStore {
  export type Input = CreatePolicyStoreInput;
  export type Output = CreatePolicyStoreOutput;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreatePolicyTemplate {
  export type Input = CreatePolicyTemplateInput;
  export type Output = CreatePolicyTemplateOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteIdentitySource {
  export type Input = DeleteIdentitySourceInput;
  export type Output = DeleteIdentitySourceOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyInput;
  export type Output = DeletePolicyOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePolicyStore {
  export type Input = DeletePolicyStoreInput;
  export type Output = DeletePolicyStoreOutput;
  export type Error = InvalidStateException | CommonAwsError;
}

export declare namespace DeletePolicyTemplate {
  export type Input = DeletePolicyTemplateInput;
  export type Output = DeletePolicyTemplateOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetIdentitySource {
  export type Input = GetIdentitySourceInput;
  export type Output = GetIdentitySourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyInput;
  export type Output = GetPolicyOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetPolicyStore {
  export type Input = GetPolicyStoreInput;
  export type Output = GetPolicyStoreOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetPolicyTemplate {
  export type Input = GetPolicyTemplateInput;
  export type Output = GetPolicyTemplateOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetSchema {
  export type Input = GetSchemaInput;
  export type Output = GetSchemaOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace IsAuthorized {
  export type Input = IsAuthorizedInput;
  export type Output = IsAuthorizedOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace IsAuthorizedWithToken {
  export type Input = IsAuthorizedWithTokenInput;
  export type Output = IsAuthorizedWithTokenOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListIdentitySources {
  export type Input = ListIdentitySourcesInput;
  export type Output = ListIdentitySourcesOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesInput;
  export type Output = ListPoliciesOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListPolicyStores {
  export type Input = ListPolicyStoresInput;
  export type Output = ListPolicyStoresOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListPolicyTemplates {
  export type Input = ListPolicyTemplatesInput;
  export type Output = ListPolicyTemplatesOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace PutSchema {
  export type Input = PutSchemaInput;
  export type Output = PutSchemaOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UpdateIdentitySource {
  export type Input = UpdateIdentitySourceInput;
  export type Output = UpdateIdentitySourceOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePolicy {
  export type Input = UpdatePolicyInput;
  export type Output = UpdatePolicyOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UpdatePolicyStore {
  export type Input = UpdatePolicyStoreInput;
  export type Output = UpdatePolicyStoreOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePolicyTemplate {
  export type Input = UpdatePolicyTemplateInput;
  export type Output = UpdatePolicyTemplateOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}
