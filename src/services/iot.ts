import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ClearDefaultAuthorizerRequest extends S.Class<ClearDefaultAuthorizerRequest>("ClearDefaultAuthorizerRequest")({}) {}
export class ClearDefaultAuthorizerResponse extends S.Class<ClearDefaultAuthorizerResponse>("ClearDefaultAuthorizerResponse")({}) {}
export class DeleteRegistrationCodeRequest extends S.Class<DeleteRegistrationCodeRequest>("DeleteRegistrationCodeRequest")({}) {}
export class DeleteRegistrationCodeResponse extends S.Class<DeleteRegistrationCodeResponse>("DeleteRegistrationCodeResponse")({}) {}
export class DescribeAccountAuditConfigurationRequest extends S.Class<DescribeAccountAuditConfigurationRequest>("DescribeAccountAuditConfigurationRequest")({}) {}
export class DescribeDefaultAuthorizerRequest extends S.Class<DescribeDefaultAuthorizerRequest>("DescribeDefaultAuthorizerRequest")({}) {}
export class DescribeEncryptionConfigurationRequest extends S.Class<DescribeEncryptionConfigurationRequest>("DescribeEncryptionConfigurationRequest")({}) {}
export class DescribeEventConfigurationsRequest extends S.Class<DescribeEventConfigurationsRequest>("DescribeEventConfigurationsRequest")({}) {}
export class GetIndexingConfigurationRequest extends S.Class<GetIndexingConfigurationRequest>("GetIndexingConfigurationRequest")({}) {}
export class GetLoggingOptionsRequest extends S.Class<GetLoggingOptionsRequest>("GetLoggingOptionsRequest")({}) {}
export class GetPackageConfigurationRequest extends S.Class<GetPackageConfigurationRequest>("GetPackageConfigurationRequest")({}) {}
export class GetRegistrationCodeRequest extends S.Class<GetRegistrationCodeRequest>("GetRegistrationCodeRequest")({}) {}
export const JobTargets = S.Array(S.String);
export const CertificateProviderAccountDefaultForOperations = S.Array(S.String);
export const DimensionStringValues = S.Array(S.String);
export const ServerCertificateArns = S.Array(S.String);
export const DestinationPackageVersions = S.Array(S.String);
export const Targets = S.Array(S.String);
export const Protocols = S.Array(S.String);
export const TargetAuditCheckNames = S.Array(S.String);
export const AdditionalMetricsToRetainList = S.Array(S.String);
export const PercentList = S.Array(S.Number);
export const DetectMitigationActionsToExecuteList = S.Array(S.String);
export const PolicyNames = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const ThingGroupList = S.Array(S.String);
export class AcceptCertificateTransferRequest extends S.Class<AcceptCertificateTransferRequest>("AcceptCertificateTransferRequest")({certificateId: S.String, setAsActive: S.optional(S.Boolean)}) {}
export class AddThingToBillingGroupRequest extends S.Class<AddThingToBillingGroupRequest>("AddThingToBillingGroupRequest")({billingGroupName: S.optional(S.String), billingGroupArn: S.optional(S.String), thingName: S.optional(S.String), thingArn: S.optional(S.String)}) {}
export class AddThingToBillingGroupResponse extends S.Class<AddThingToBillingGroupResponse>("AddThingToBillingGroupResponse")({}) {}
export class AddThingToThingGroupRequest extends S.Class<AddThingToThingGroupRequest>("AddThingToThingGroupRequest")({thingGroupName: S.optional(S.String), thingGroupArn: S.optional(S.String), thingName: S.optional(S.String), thingArn: S.optional(S.String), overrideDynamicGroups: S.optional(S.Boolean)}) {}
export class AddThingToThingGroupResponse extends S.Class<AddThingToThingGroupResponse>("AddThingToThingGroupResponse")({}) {}
export class AssociateTargetsWithJobRequest extends S.Class<AssociateTargetsWithJobRequest>("AssociateTargetsWithJobRequest")({targets: JobTargets, jobId: S.String, comment: S.optional(S.String), namespaceId: S.optional(S.String)}) {}
export class AttachPolicyRequest extends S.Class<AttachPolicyRequest>("AttachPolicyRequest")({policyName: S.String, target: S.String}) {}
export class AttachPrincipalPolicyRequest extends S.Class<AttachPrincipalPolicyRequest>("AttachPrincipalPolicyRequest")({policyName: S.String, principal: H.Header("x-amzn-iot-principal")}) {}
export class AttachSecurityProfileRequest extends S.Class<AttachSecurityProfileRequest>("AttachSecurityProfileRequest")({securityProfileName: S.String, securityProfileTargetArn: S.String}) {}
export class AttachSecurityProfileResponse extends S.Class<AttachSecurityProfileResponse>("AttachSecurityProfileResponse")({}) {}
export class AttachThingPrincipalRequest extends S.Class<AttachThingPrincipalRequest>("AttachThingPrincipalRequest")({thingName: S.String, principal: H.Header("x-amzn-principal"), thingPrincipalType: S.optional(S.String)}) {}
export class AttachThingPrincipalResponse extends S.Class<AttachThingPrincipalResponse>("AttachThingPrincipalResponse")({}) {}
export class CancelAuditMitigationActionsTaskRequest extends S.Class<CancelAuditMitigationActionsTaskRequest>("CancelAuditMitigationActionsTaskRequest")({taskId: S.String}) {}
export class CancelAuditMitigationActionsTaskResponse extends S.Class<CancelAuditMitigationActionsTaskResponse>("CancelAuditMitigationActionsTaskResponse")({}) {}
export class CancelAuditTaskRequest extends S.Class<CancelAuditTaskRequest>("CancelAuditTaskRequest")({taskId: S.String}) {}
export class CancelAuditTaskResponse extends S.Class<CancelAuditTaskResponse>("CancelAuditTaskResponse")({}) {}
export class CancelCertificateTransferRequest extends S.Class<CancelCertificateTransferRequest>("CancelCertificateTransferRequest")({certificateId: S.String}) {}
export class CancelDetectMitigationActionsTaskRequest extends S.Class<CancelDetectMitigationActionsTaskRequest>("CancelDetectMitigationActionsTaskRequest")({taskId: S.String}) {}
export class CancelDetectMitigationActionsTaskResponse extends S.Class<CancelDetectMitigationActionsTaskResponse>("CancelDetectMitigationActionsTaskResponse")({}) {}
export class CancelJobRequest extends S.Class<CancelJobRequest>("CancelJobRequest")({jobId: S.String, reasonCode: S.optional(S.String), comment: S.optional(S.String), force: S.optional(S.Boolean)}) {}
export class ConfirmTopicRuleDestinationRequest extends S.Class<ConfirmTopicRuleDestinationRequest>("ConfirmTopicRuleDestinationRequest")({confirmationToken: S.String}) {}
export class ConfirmTopicRuleDestinationResponse extends S.Class<ConfirmTopicRuleDestinationResponse>("ConfirmTopicRuleDestinationResponse")({}) {}
export class CreateCertificateFromCsrRequest extends S.Class<CreateCertificateFromCsrRequest>("CreateCertificateFromCsrRequest")({certificateSigningRequest: S.String, setAsActive: S.optional(S.Boolean)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class CreateCertificateProviderRequest extends S.Class<CreateCertificateProviderRequest>("CreateCertificateProviderRequest")({certificateProviderName: S.String, lambdaFunctionArn: S.String, accountDefaultForOperations: CertificateProviderAccountDefaultForOperations, clientToken: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateCustomMetricRequest extends S.Class<CreateCustomMetricRequest>("CreateCustomMetricRequest")({metricName: S.String, displayName: S.optional(S.String), metricType: S.String, tags: S.optional(TagList), clientRequestToken: S.String}) {}
export class CreateDimensionRequest extends S.Class<CreateDimensionRequest>("CreateDimensionRequest")({name: S.String, type: S.String, stringValues: DimensionStringValues, tags: S.optional(TagList), clientRequestToken: S.String}) {}
export class CreateKeysAndCertificateRequest extends S.Class<CreateKeysAndCertificateRequest>("CreateKeysAndCertificateRequest")({setAsActive: S.optional(S.Boolean)}) {}
export class CreatePolicyRequest extends S.Class<CreatePolicyRequest>("CreatePolicyRequest")({policyName: S.String, policyDocument: S.String, tags: S.optional(TagList)}) {}
export class CreatePolicyVersionRequest extends S.Class<CreatePolicyVersionRequest>("CreatePolicyVersionRequest")({policyName: S.String, policyDocument: S.String, setAsDefault: S.optional(S.Boolean)}) {}
export class CreateProvisioningClaimRequest extends S.Class<CreateProvisioningClaimRequest>("CreateProvisioningClaimRequest")({templateName: S.String}) {}
export class CreateProvisioningTemplateVersionRequest extends S.Class<CreateProvisioningTemplateVersionRequest>("CreateProvisioningTemplateVersionRequest")({templateName: S.String, templateBody: S.String, setAsDefault: S.optional(S.Boolean)}) {}
export class CreateRoleAliasRequest extends S.Class<CreateRoleAliasRequest>("CreateRoleAliasRequest")({roleAlias: S.String, roleArn: S.String, credentialDurationSeconds: S.optional(S.Number), tags: S.optional(TagList)}) {}
export class CreateScheduledAuditRequest extends S.Class<CreateScheduledAuditRequest>("CreateScheduledAuditRequest")({frequency: S.String, dayOfMonth: S.optional(S.String), dayOfWeek: S.optional(S.String), targetCheckNames: TargetAuditCheckNames, scheduledAuditName: S.String, tags: S.optional(TagList)}) {}
export const Attributes = S.Record({key: S.String, value: S.String});
export class AttributePayload extends S.Class<AttributePayload>("AttributePayload")({attributes: S.optional(Attributes), merge: S.optional(S.Boolean)}) {}
export class ThingGroupProperties extends S.Class<ThingGroupProperties>("ThingGroupProperties")({thingGroupDescription: S.optional(S.String), attributePayload: S.optional(AttributePayload)}) {}
export class CreateThingGroupRequest extends S.Class<CreateThingGroupRequest>("CreateThingGroupRequest")({thingGroupName: S.String, parentGroupName: S.optional(S.String), thingGroupProperties: S.optional(ThingGroupProperties), tags: S.optional(TagList)}) {}
export class DeleteAccountAuditConfigurationRequest extends S.Class<DeleteAccountAuditConfigurationRequest>("DeleteAccountAuditConfigurationRequest")({deleteScheduledAudits: S.optional(S.Boolean)}) {}
export class DeleteAccountAuditConfigurationResponse extends S.Class<DeleteAccountAuditConfigurationResponse>("DeleteAccountAuditConfigurationResponse")({}) {}
export class PolicyVersionIdentifier extends S.Class<PolicyVersionIdentifier>("PolicyVersionIdentifier")({policyName: S.optional(S.String), policyVersionId: S.optional(S.String)}) {}
export class IssuerCertificateIdentifier extends S.Class<IssuerCertificateIdentifier>("IssuerCertificateIdentifier")({issuerCertificateSubject: S.optional(S.String), issuerId: S.optional(S.String), issuerCertificateSerialNumber: S.optional(S.String)}) {}
export class ResourceIdentifier extends S.Class<ResourceIdentifier>("ResourceIdentifier")({deviceCertificateId: S.optional(S.String), caCertificateId: S.optional(S.String), cognitoIdentityPoolId: S.optional(S.String), clientId: S.optional(S.String), policyVersionIdentifier: S.optional(PolicyVersionIdentifier), account: S.optional(S.String), iamRoleArn: S.optional(S.String), roleAliasArn: S.optional(S.String), issuerCertificateIdentifier: S.optional(IssuerCertificateIdentifier), deviceCertificateArn: S.optional(S.String)}) {}
export class DeleteAuditSuppressionRequest extends S.Class<DeleteAuditSuppressionRequest>("DeleteAuditSuppressionRequest")({checkName: S.String, resourceIdentifier: ResourceIdentifier}) {}
export class DeleteAuditSuppressionResponse extends S.Class<DeleteAuditSuppressionResponse>("DeleteAuditSuppressionResponse")({}) {}
export class DeleteAuthorizerRequest extends S.Class<DeleteAuthorizerRequest>("DeleteAuthorizerRequest")({authorizerName: S.String}) {}
export class DeleteAuthorizerResponse extends S.Class<DeleteAuthorizerResponse>("DeleteAuthorizerResponse")({}) {}
export class DeleteBillingGroupRequest extends S.Class<DeleteBillingGroupRequest>("DeleteBillingGroupRequest")({billingGroupName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteBillingGroupResponse extends S.Class<DeleteBillingGroupResponse>("DeleteBillingGroupResponse")({}) {}
export class DeleteCACertificateRequest extends S.Class<DeleteCACertificateRequest>("DeleteCACertificateRequest")({certificateId: S.String}) {}
export class DeleteCACertificateResponse extends S.Class<DeleteCACertificateResponse>("DeleteCACertificateResponse")({}) {}
export class DeleteCertificateRequest extends S.Class<DeleteCertificateRequest>("DeleteCertificateRequest")({certificateId: S.String, forceDelete: S.optional(S.Boolean)}) {}
export class DeleteCertificateProviderRequest extends S.Class<DeleteCertificateProviderRequest>("DeleteCertificateProviderRequest")({certificateProviderName: S.String}) {}
export class DeleteCertificateProviderResponse extends S.Class<DeleteCertificateProviderResponse>("DeleteCertificateProviderResponse")({}) {}
export class DeleteCommandRequest extends S.Class<DeleteCommandRequest>("DeleteCommandRequest")({commandId: S.String}) {}
export class DeleteCommandExecutionRequest extends S.Class<DeleteCommandExecutionRequest>("DeleteCommandExecutionRequest")({executionId: S.String, targetArn: S.String}) {}
export class DeleteCommandExecutionResponse extends S.Class<DeleteCommandExecutionResponse>("DeleteCommandExecutionResponse")({}) {}
export class DeleteCustomMetricRequest extends S.Class<DeleteCustomMetricRequest>("DeleteCustomMetricRequest")({metricName: S.String}) {}
export class DeleteCustomMetricResponse extends S.Class<DeleteCustomMetricResponse>("DeleteCustomMetricResponse")({}) {}
export class DeleteDimensionRequest extends S.Class<DeleteDimensionRequest>("DeleteDimensionRequest")({name: S.String}) {}
export class DeleteDimensionResponse extends S.Class<DeleteDimensionResponse>("DeleteDimensionResponse")({}) {}
export class DeleteDomainConfigurationRequest extends S.Class<DeleteDomainConfigurationRequest>("DeleteDomainConfigurationRequest")({domainConfigurationName: S.String}) {}
export class DeleteDomainConfigurationResponse extends S.Class<DeleteDomainConfigurationResponse>("DeleteDomainConfigurationResponse")({}) {}
export class DeleteDynamicThingGroupRequest extends S.Class<DeleteDynamicThingGroupRequest>("DeleteDynamicThingGroupRequest")({thingGroupName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteDynamicThingGroupResponse extends S.Class<DeleteDynamicThingGroupResponse>("DeleteDynamicThingGroupResponse")({}) {}
export class DeleteFleetMetricRequest extends S.Class<DeleteFleetMetricRequest>("DeleteFleetMetricRequest")({metricName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteJobRequest extends S.Class<DeleteJobRequest>("DeleteJobRequest")({jobId: S.String, force: S.optional(S.Boolean), namespaceId: S.optional(S.String)}) {}
export class DeleteJobExecutionRequest extends S.Class<DeleteJobExecutionRequest>("DeleteJobExecutionRequest")({jobId: S.String, thingName: S.String, executionNumber: S.Number, force: S.optional(S.Boolean), namespaceId: S.optional(S.String)}) {}
export class DeleteJobTemplateRequest extends S.Class<DeleteJobTemplateRequest>("DeleteJobTemplateRequest")({jobTemplateId: S.String}) {}
export class DeleteMitigationActionRequest extends S.Class<DeleteMitigationActionRequest>("DeleteMitigationActionRequest")({actionName: S.String}) {}
export class DeleteMitigationActionResponse extends S.Class<DeleteMitigationActionResponse>("DeleteMitigationActionResponse")({}) {}
export class DeleteOTAUpdateRequest extends S.Class<DeleteOTAUpdateRequest>("DeleteOTAUpdateRequest")({otaUpdateId: S.String, deleteStream: S.optional(S.Boolean), forceDeleteAWSJob: S.optional(S.Boolean)}) {}
export class DeleteOTAUpdateResponse extends S.Class<DeleteOTAUpdateResponse>("DeleteOTAUpdateResponse")({}) {}
export class DeletePackageRequest extends S.Class<DeletePackageRequest>("DeletePackageRequest")({packageName: S.String, clientToken: S.optional(S.String)}) {}
export class DeletePackageResponse extends S.Class<DeletePackageResponse>("DeletePackageResponse")({}) {}
export class DeletePackageVersionRequest extends S.Class<DeletePackageVersionRequest>("DeletePackageVersionRequest")({packageName: S.String, versionName: S.String, clientToken: S.optional(S.String)}) {}
export class DeletePackageVersionResponse extends S.Class<DeletePackageVersionResponse>("DeletePackageVersionResponse")({}) {}
export class DeletePolicyRequest extends S.Class<DeletePolicyRequest>("DeletePolicyRequest")({policyName: S.String}) {}
export class DeletePolicyVersionRequest extends S.Class<DeletePolicyVersionRequest>("DeletePolicyVersionRequest")({policyName: S.String, policyVersionId: S.String}) {}
export class DeleteProvisioningTemplateRequest extends S.Class<DeleteProvisioningTemplateRequest>("DeleteProvisioningTemplateRequest")({templateName: S.String}) {}
export class DeleteProvisioningTemplateResponse extends S.Class<DeleteProvisioningTemplateResponse>("DeleteProvisioningTemplateResponse")({}) {}
export class DeleteProvisioningTemplateVersionRequest extends S.Class<DeleteProvisioningTemplateVersionRequest>("DeleteProvisioningTemplateVersionRequest")({templateName: S.String, versionId: S.Number}) {}
export class DeleteProvisioningTemplateVersionResponse extends S.Class<DeleteProvisioningTemplateVersionResponse>("DeleteProvisioningTemplateVersionResponse")({}) {}
export class DeleteRoleAliasRequest extends S.Class<DeleteRoleAliasRequest>("DeleteRoleAliasRequest")({roleAlias: S.String}) {}
export class DeleteRoleAliasResponse extends S.Class<DeleteRoleAliasResponse>("DeleteRoleAliasResponse")({}) {}
export class DeleteScheduledAuditRequest extends S.Class<DeleteScheduledAuditRequest>("DeleteScheduledAuditRequest")({scheduledAuditName: S.String}) {}
export class DeleteScheduledAuditResponse extends S.Class<DeleteScheduledAuditResponse>("DeleteScheduledAuditResponse")({}) {}
export class DeleteSecurityProfileRequest extends S.Class<DeleteSecurityProfileRequest>("DeleteSecurityProfileRequest")({securityProfileName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteSecurityProfileResponse extends S.Class<DeleteSecurityProfileResponse>("DeleteSecurityProfileResponse")({}) {}
export class DeleteStreamRequest extends S.Class<DeleteStreamRequest>("DeleteStreamRequest")({streamId: S.String}) {}
export class DeleteStreamResponse extends S.Class<DeleteStreamResponse>("DeleteStreamResponse")({}) {}
export class DeleteThingRequest extends S.Class<DeleteThingRequest>("DeleteThingRequest")({thingName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteThingResponse extends S.Class<DeleteThingResponse>("DeleteThingResponse")({}) {}
export class DeleteThingGroupRequest extends S.Class<DeleteThingGroupRequest>("DeleteThingGroupRequest")({thingGroupName: S.String, expectedVersion: S.optional(S.Number)}) {}
export class DeleteThingGroupResponse extends S.Class<DeleteThingGroupResponse>("DeleteThingGroupResponse")({}) {}
export class DeleteThingTypeRequest extends S.Class<DeleteThingTypeRequest>("DeleteThingTypeRequest")({thingTypeName: S.String}) {}
export class DeleteThingTypeResponse extends S.Class<DeleteThingTypeResponse>("DeleteThingTypeResponse")({}) {}
export class DeleteTopicRuleRequest extends S.Class<DeleteTopicRuleRequest>("DeleteTopicRuleRequest")({ruleName: S.String}) {}
export class DeleteTopicRuleDestinationRequest extends S.Class<DeleteTopicRuleDestinationRequest>("DeleteTopicRuleDestinationRequest")({arn: S.String}) {}
export class DeleteTopicRuleDestinationResponse extends S.Class<DeleteTopicRuleDestinationResponse>("DeleteTopicRuleDestinationResponse")({}) {}
export class DeleteV2LoggingLevelRequest extends S.Class<DeleteV2LoggingLevelRequest>("DeleteV2LoggingLevelRequest")({targetType: S.String, targetName: S.String}) {}
export class DeprecateThingTypeRequest extends S.Class<DeprecateThingTypeRequest>("DeprecateThingTypeRequest")({thingTypeName: S.String, undoDeprecate: S.optional(S.Boolean)}) {}
export class DeprecateThingTypeResponse extends S.Class<DeprecateThingTypeResponse>("DeprecateThingTypeResponse")({}) {}
export class DescribeAuditFindingRequest extends S.Class<DescribeAuditFindingRequest>("DescribeAuditFindingRequest")({findingId: S.String}) {}
export class DescribeAuditMitigationActionsTaskRequest extends S.Class<DescribeAuditMitigationActionsTaskRequest>("DescribeAuditMitigationActionsTaskRequest")({taskId: S.String}) {}
export class DescribeAuditSuppressionRequest extends S.Class<DescribeAuditSuppressionRequest>("DescribeAuditSuppressionRequest")({checkName: S.String, resourceIdentifier: ResourceIdentifier}) {}
export class DescribeAuditTaskRequest extends S.Class<DescribeAuditTaskRequest>("DescribeAuditTaskRequest")({taskId: S.String}) {}
export class DescribeAuthorizerRequest extends S.Class<DescribeAuthorizerRequest>("DescribeAuthorizerRequest")({authorizerName: S.String}) {}
export class DescribeBillingGroupRequest extends S.Class<DescribeBillingGroupRequest>("DescribeBillingGroupRequest")({billingGroupName: S.String}) {}
export class DescribeCACertificateRequest extends S.Class<DescribeCACertificateRequest>("DescribeCACertificateRequest")({certificateId: S.String}) {}
export class DescribeCertificateRequest extends S.Class<DescribeCertificateRequest>("DescribeCertificateRequest")({certificateId: S.String}) {}
export class DescribeCertificateProviderRequest extends S.Class<DescribeCertificateProviderRequest>("DescribeCertificateProviderRequest")({certificateProviderName: S.String}) {}
export class DescribeCustomMetricRequest extends S.Class<DescribeCustomMetricRequest>("DescribeCustomMetricRequest")({metricName: S.String}) {}
export class DescribeDetectMitigationActionsTaskRequest extends S.Class<DescribeDetectMitigationActionsTaskRequest>("DescribeDetectMitigationActionsTaskRequest")({taskId: S.String}) {}
export class DescribeDimensionRequest extends S.Class<DescribeDimensionRequest>("DescribeDimensionRequest")({name: S.String}) {}
export class DescribeDomainConfigurationRequest extends S.Class<DescribeDomainConfigurationRequest>("DescribeDomainConfigurationRequest")({domainConfigurationName: S.String}) {}
export class DescribeEndpointRequest extends S.Class<DescribeEndpointRequest>("DescribeEndpointRequest")({endpointType: S.optional(S.String)}) {}
export class DescribeFleetMetricRequest extends S.Class<DescribeFleetMetricRequest>("DescribeFleetMetricRequest")({metricName: S.String}) {}
export class DescribeIndexRequest extends S.Class<DescribeIndexRequest>("DescribeIndexRequest")({indexName: S.String}) {}
export class DescribeJobRequest extends S.Class<DescribeJobRequest>("DescribeJobRequest")({jobId: S.String, beforeSubstitution: S.optional(S.Boolean)}) {}
export class DescribeJobExecutionRequest extends S.Class<DescribeJobExecutionRequest>("DescribeJobExecutionRequest")({jobId: S.String, thingName: S.String, executionNumber: S.optional(S.Number)}) {}
export class DescribeJobTemplateRequest extends S.Class<DescribeJobTemplateRequest>("DescribeJobTemplateRequest")({jobTemplateId: S.String}) {}
export class DescribeManagedJobTemplateRequest extends S.Class<DescribeManagedJobTemplateRequest>("DescribeManagedJobTemplateRequest")({templateName: S.String, templateVersion: S.optional(S.String)}) {}
export class DescribeMitigationActionRequest extends S.Class<DescribeMitigationActionRequest>("DescribeMitigationActionRequest")({actionName: S.String}) {}
export class DescribeProvisioningTemplateRequest extends S.Class<DescribeProvisioningTemplateRequest>("DescribeProvisioningTemplateRequest")({templateName: S.String}) {}
export class DescribeProvisioningTemplateVersionRequest extends S.Class<DescribeProvisioningTemplateVersionRequest>("DescribeProvisioningTemplateVersionRequest")({templateName: S.String, versionId: S.Number}) {}
export class DescribeRoleAliasRequest extends S.Class<DescribeRoleAliasRequest>("DescribeRoleAliasRequest")({roleAlias: S.String}) {}
export class DescribeScheduledAuditRequest extends S.Class<DescribeScheduledAuditRequest>("DescribeScheduledAuditRequest")({scheduledAuditName: S.String}) {}
export class DescribeSecurityProfileRequest extends S.Class<DescribeSecurityProfileRequest>("DescribeSecurityProfileRequest")({securityProfileName: S.String}) {}
export class DescribeStreamRequest extends S.Class<DescribeStreamRequest>("DescribeStreamRequest")({streamId: S.String}) {}
export class DescribeThingRequest extends S.Class<DescribeThingRequest>("DescribeThingRequest")({thingName: S.String}) {}
export class DescribeThingGroupRequest extends S.Class<DescribeThingGroupRequest>("DescribeThingGroupRequest")({thingGroupName: S.String}) {}
export class DescribeThingRegistrationTaskRequest extends S.Class<DescribeThingRegistrationTaskRequest>("DescribeThingRegistrationTaskRequest")({taskId: S.String}) {}
export class DescribeThingTypeRequest extends S.Class<DescribeThingTypeRequest>("DescribeThingTypeRequest")({thingTypeName: S.String}) {}
export class DetachPolicyRequest extends S.Class<DetachPolicyRequest>("DetachPolicyRequest")({policyName: S.String, target: S.String}) {}
export class DetachPrincipalPolicyRequest extends S.Class<DetachPrincipalPolicyRequest>("DetachPrincipalPolicyRequest")({policyName: S.String, principal: H.Header("x-amzn-iot-principal")}) {}
export class DetachSecurityProfileRequest extends S.Class<DetachSecurityProfileRequest>("DetachSecurityProfileRequest")({securityProfileName: S.String, securityProfileTargetArn: S.String}) {}
export class DetachSecurityProfileResponse extends S.Class<DetachSecurityProfileResponse>("DetachSecurityProfileResponse")({}) {}
export class DetachThingPrincipalRequest extends S.Class<DetachThingPrincipalRequest>("DetachThingPrincipalRequest")({thingName: S.String, principal: H.Header("x-amzn-principal")}) {}
export class DetachThingPrincipalResponse extends S.Class<DetachThingPrincipalResponse>("DetachThingPrincipalResponse")({}) {}
export class DisableTopicRuleRequest extends S.Class<DisableTopicRuleRequest>("DisableTopicRuleRequest")({ruleName: S.String}) {}
export class DisassociateSbomFromPackageVersionRequest extends S.Class<DisassociateSbomFromPackageVersionRequest>("DisassociateSbomFromPackageVersionRequest")({packageName: S.String, versionName: S.String, clientToken: S.optional(S.String)}) {}
export class DisassociateSbomFromPackageVersionResponse extends S.Class<DisassociateSbomFromPackageVersionResponse>("DisassociateSbomFromPackageVersionResponse")({}) {}
export class EnableTopicRuleRequest extends S.Class<EnableTopicRuleRequest>("EnableTopicRuleRequest")({ruleName: S.String}) {}
export class GetBehaviorModelTrainingSummariesRequest extends S.Class<GetBehaviorModelTrainingSummariesRequest>("GetBehaviorModelTrainingSummariesRequest")({securityProfileName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetCardinalityRequest extends S.Class<GetCardinalityRequest>("GetCardinalityRequest")({indexName: S.optional(S.String), queryString: S.String, aggregationField: S.optional(S.String), queryVersion: S.optional(S.String)}) {}
export class GetCommandRequest extends S.Class<GetCommandRequest>("GetCommandRequest")({commandId: S.String}) {}
export class GetCommandExecutionRequest extends S.Class<GetCommandExecutionRequest>("GetCommandExecutionRequest")({executionId: S.String, targetArn: S.String, includeResult: S.optional(S.Boolean)}) {}
export class GetEffectivePoliciesRequest extends S.Class<GetEffectivePoliciesRequest>("GetEffectivePoliciesRequest")({principal: S.optional(S.String), cognitoIdentityPoolId: S.optional(S.String), thingName: S.optional(S.String)}) {}
export class GetJobDocumentRequest extends S.Class<GetJobDocumentRequest>("GetJobDocumentRequest")({jobId: S.String, beforeSubstitution: S.optional(S.Boolean)}) {}
export class GetLoggingOptionsResponse extends S.Class<GetLoggingOptionsResponse>("GetLoggingOptionsResponse")({roleArn: S.optional(S.String), logLevel: S.optional(S.String)}) {}
export class GetOTAUpdateRequest extends S.Class<GetOTAUpdateRequest>("GetOTAUpdateRequest")({otaUpdateId: S.String}) {}
export class GetPackageRequest extends S.Class<GetPackageRequest>("GetPackageRequest")({packageName: S.String}) {}
export class GetPackageVersionRequest extends S.Class<GetPackageVersionRequest>("GetPackageVersionRequest")({packageName: S.String, versionName: S.String}) {}
export class GetPercentilesRequest extends S.Class<GetPercentilesRequest>("GetPercentilesRequest")({indexName: S.optional(S.String), queryString: S.String, aggregationField: S.optional(S.String), queryVersion: S.optional(S.String), percents: S.optional(PercentList)}) {}
export class GetPolicyRequest extends S.Class<GetPolicyRequest>("GetPolicyRequest")({policyName: S.String}) {}
export class GetPolicyVersionRequest extends S.Class<GetPolicyVersionRequest>("GetPolicyVersionRequest")({policyName: S.String, policyVersionId: S.String}) {}
export class GetRegistrationCodeResponse extends S.Class<GetRegistrationCodeResponse>("GetRegistrationCodeResponse")({registrationCode: S.optional(S.String)}) {}
export class GetStatisticsRequest extends S.Class<GetStatisticsRequest>("GetStatisticsRequest")({indexName: S.optional(S.String), queryString: S.String, aggregationField: S.optional(S.String), queryVersion: S.optional(S.String)}) {}
export class GetThingConnectivityDataRequest extends S.Class<GetThingConnectivityDataRequest>("GetThingConnectivityDataRequest")({thingName: S.String}) {}
export class GetTopicRuleRequest extends S.Class<GetTopicRuleRequest>("GetTopicRuleRequest")({ruleName: S.String}) {}
export class GetTopicRuleDestinationRequest extends S.Class<GetTopicRuleDestinationRequest>("GetTopicRuleDestinationRequest")({arn: S.String}) {}
export class GetV2LoggingOptionsRequest extends S.Class<GetV2LoggingOptionsRequest>("GetV2LoggingOptionsRequest")({verbose: S.optional(S.Boolean)}) {}
export class ListActiveViolationsRequest extends S.Class<ListActiveViolationsRequest>("ListActiveViolationsRequest")({thingName: S.optional(S.String), securityProfileName: S.optional(S.String), behaviorCriteriaType: S.optional(S.String), listSuppressedAlerts: S.optional(S.Boolean), verificationState: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAttachedPoliciesRequest extends S.Class<ListAttachedPoliciesRequest>("ListAttachedPoliciesRequest")({target: S.String, recursive: S.optional(S.Boolean), marker: S.optional(S.String), pageSize: S.optional(S.Number)}) {}
export class ListAuditFindingsRequest extends S.Class<ListAuditFindingsRequest>("ListAuditFindingsRequest")({taskId: S.optional(S.String), checkName: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), listSuppressedFindings: S.optional(S.Boolean)}) {}
export class ListAuditMitigationActionsExecutionsRequest extends S.Class<ListAuditMitigationActionsExecutionsRequest>("ListAuditMitigationActionsExecutionsRequest")({taskId: S.String, actionStatus: S.optional(S.String), findingId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListAuditMitigationActionsTasksRequest extends S.Class<ListAuditMitigationActionsTasksRequest>("ListAuditMitigationActionsTasksRequest")({auditTaskId: S.optional(S.String), findingId: S.optional(S.String), taskStatus: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), startTime: S.Date, endTime: S.Date}) {}
export class ListAuditSuppressionsRequest extends S.Class<ListAuditSuppressionsRequest>("ListAuditSuppressionsRequest")({checkName: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), ascendingOrder: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAuditTasksRequest extends S.Class<ListAuditTasksRequest>("ListAuditTasksRequest")({startTime: S.Date, endTime: S.Date, taskType: S.optional(S.String), taskStatus: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAuthorizersRequest extends S.Class<ListAuthorizersRequest>("ListAuthorizersRequest")({pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean), status: S.optional(S.String)}) {}
export class ListBillingGroupsRequest extends S.Class<ListBillingGroupsRequest>("ListBillingGroupsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), namePrefixFilter: S.optional(S.String)}) {}
export class ListCACertificatesRequest extends S.Class<ListCACertificatesRequest>("ListCACertificatesRequest")({pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean), templateName: S.optional(S.String)}) {}
export class ListCertificateProvidersRequest extends S.Class<ListCertificateProvidersRequest>("ListCertificateProvidersRequest")({nextToken: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListCertificatesRequest extends S.Class<ListCertificatesRequest>("ListCertificatesRequest")({pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListCertificatesByCARequest extends S.Class<ListCertificatesByCARequest>("ListCertificatesByCARequest")({caCertificateId: S.String, pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListCommandsRequest extends S.Class<ListCommandsRequest>("ListCommandsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), namespace: S.optional(S.String), commandParameterName: S.optional(S.String), sortOrder: S.optional(S.String)}) {}
export class ListCustomMetricsRequest extends S.Class<ListCustomMetricsRequest>("ListCustomMetricsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDetectMitigationActionsExecutionsRequest extends S.Class<ListDetectMitigationActionsExecutionsRequest>("ListDetectMitigationActionsExecutionsRequest")({taskId: S.optional(S.String), violationId: S.optional(S.String), thingName: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListDetectMitigationActionsTasksRequest extends S.Class<ListDetectMitigationActionsTasksRequest>("ListDetectMitigationActionsTasksRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), startTime: S.Date, endTime: S.Date}) {}
export class ListDimensionsRequest extends S.Class<ListDimensionsRequest>("ListDimensionsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDomainConfigurationsRequest extends S.Class<ListDomainConfigurationsRequest>("ListDomainConfigurationsRequest")({marker: S.optional(S.String), pageSize: S.optional(S.Number), serviceType: S.optional(S.String)}) {}
export class ListFleetMetricsRequest extends S.Class<ListFleetMetricsRequest>("ListFleetMetricsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListIndicesRequest extends S.Class<ListIndicesRequest>("ListIndicesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListJobExecutionsForJobRequest extends S.Class<ListJobExecutionsForJobRequest>("ListJobExecutionsForJobRequest")({jobId: S.String, status: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListJobExecutionsForThingRequest extends S.Class<ListJobExecutionsForThingRequest>("ListJobExecutionsForThingRequest")({thingName: S.String, status: S.optional(S.String), namespaceId: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), jobId: S.optional(S.String)}) {}
export class ListJobsRequest extends S.Class<ListJobsRequest>("ListJobsRequest")({status: S.optional(S.String), targetSelection: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), thingGroupName: S.optional(S.String), thingGroupId: S.optional(S.String), namespaceId: S.optional(S.String)}) {}
export class ListJobTemplatesRequest extends S.Class<ListJobTemplatesRequest>("ListJobTemplatesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListManagedJobTemplatesRequest extends S.Class<ListManagedJobTemplatesRequest>("ListManagedJobTemplatesRequest")({templateName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListMetricValuesRequest extends S.Class<ListMetricValuesRequest>("ListMetricValuesRequest")({thingName: S.String, metricName: S.String, dimensionName: S.optional(S.String), dimensionValueOperator: S.optional(S.String), startTime: S.Date, endTime: S.Date, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListMitigationActionsRequest extends S.Class<ListMitigationActionsRequest>("ListMitigationActionsRequest")({actionType: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListOTAUpdatesRequest extends S.Class<ListOTAUpdatesRequest>("ListOTAUpdatesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), otaUpdateStatus: S.optional(S.String)}) {}
export class ListOutgoingCertificatesRequest extends S.Class<ListOutgoingCertificatesRequest>("ListOutgoingCertificatesRequest")({pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListPackagesRequest extends S.Class<ListPackagesRequest>("ListPackagesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListPackageVersionsRequest extends S.Class<ListPackageVersionsRequest>("ListPackageVersionsRequest")({packageName: S.String, status: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListPoliciesRequest extends S.Class<ListPoliciesRequest>("ListPoliciesRequest")({marker: S.optional(S.String), pageSize: S.optional(S.Number), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListPolicyPrincipalsRequest extends S.Class<ListPolicyPrincipalsRequest>("ListPolicyPrincipalsRequest")({policyName: H.Header("x-amzn-iot-policy"), marker: S.optional(S.String), pageSize: S.optional(S.Number), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListPolicyVersionsRequest extends S.Class<ListPolicyVersionsRequest>("ListPolicyVersionsRequest")({policyName: S.String}) {}
export class ListPrincipalPoliciesRequest extends S.Class<ListPrincipalPoliciesRequest>("ListPrincipalPoliciesRequest")({principal: H.Header("x-amzn-iot-principal"), marker: S.optional(S.String), pageSize: S.optional(S.Number), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListPrincipalThingsRequest extends S.Class<ListPrincipalThingsRequest>("ListPrincipalThingsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), principal: H.Header("x-amzn-principal")}) {}
export class ListPrincipalThingsV2Request extends S.Class<ListPrincipalThingsV2Request>("ListPrincipalThingsV2Request")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), principal: H.Header("x-amzn-principal"), thingPrincipalType: S.optional(S.String)}) {}
export class ListProvisioningTemplatesRequest extends S.Class<ListProvisioningTemplatesRequest>("ListProvisioningTemplatesRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListProvisioningTemplateVersionsRequest extends S.Class<ListProvisioningTemplateVersionsRequest>("ListProvisioningTemplateVersionsRequest")({templateName: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListRelatedResourcesForAuditFindingRequest extends S.Class<ListRelatedResourcesForAuditFindingRequest>("ListRelatedResourcesForAuditFindingRequest")({findingId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRoleAliasesRequest extends S.Class<ListRoleAliasesRequest>("ListRoleAliasesRequest")({pageSize: S.optional(S.Number), marker: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListSbomValidationResultsRequest extends S.Class<ListSbomValidationResultsRequest>("ListSbomValidationResultsRequest")({packageName: S.String, versionName: S.String, validationResult: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListScheduledAuditsRequest extends S.Class<ListScheduledAuditsRequest>("ListScheduledAuditsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSecurityProfilesRequest extends S.Class<ListSecurityProfilesRequest>("ListSecurityProfilesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), dimensionName: S.optional(S.String), metricName: S.optional(S.String)}) {}
export class ListSecurityProfilesForTargetRequest extends S.Class<ListSecurityProfilesForTargetRequest>("ListSecurityProfilesForTargetRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), recursive: S.optional(S.Boolean), securityProfileTargetArn: S.String}) {}
export class ListStreamsRequest extends S.Class<ListStreamsRequest>("ListStreamsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), ascendingOrder: S.optional(S.Boolean)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String, nextToken: S.optional(S.String)}) {}
export class ListTargetsForPolicyRequest extends S.Class<ListTargetsForPolicyRequest>("ListTargetsForPolicyRequest")({policyName: S.String, marker: S.optional(S.String), pageSize: S.optional(S.Number)}) {}
export class ListTargetsForSecurityProfileRequest extends S.Class<ListTargetsForSecurityProfileRequest>("ListTargetsForSecurityProfileRequest")({securityProfileName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListThingGroupsRequest extends S.Class<ListThingGroupsRequest>("ListThingGroupsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), parentGroup: S.optional(S.String), namePrefixFilter: S.optional(S.String), recursive: S.optional(S.Boolean)}) {}
export class ListThingGroupsForThingRequest extends S.Class<ListThingGroupsForThingRequest>("ListThingGroupsForThingRequest")({thingName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListThingPrincipalsRequest extends S.Class<ListThingPrincipalsRequest>("ListThingPrincipalsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), thingName: S.String}) {}
export class ListThingPrincipalsV2Request extends S.Class<ListThingPrincipalsV2Request>("ListThingPrincipalsV2Request")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), thingName: S.String, thingPrincipalType: S.optional(S.String)}) {}
export class ListThingRegistrationTaskReportsRequest extends S.Class<ListThingRegistrationTaskReportsRequest>("ListThingRegistrationTaskReportsRequest")({taskId: S.String, reportType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListThingRegistrationTasksRequest extends S.Class<ListThingRegistrationTasksRequest>("ListThingRegistrationTasksRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), status: S.optional(S.String)}) {}
export class ListThingsRequest extends S.Class<ListThingsRequest>("ListThingsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), attributeName: S.optional(S.String), attributeValue: S.optional(S.String), thingTypeName: S.optional(S.String), usePrefixAttributeValue: S.optional(S.Boolean)}) {}
export class ListThingsInBillingGroupRequest extends S.Class<ListThingsInBillingGroupRequest>("ListThingsInBillingGroupRequest")({billingGroupName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListThingsInThingGroupRequest extends S.Class<ListThingsInThingGroupRequest>("ListThingsInThingGroupRequest")({thingGroupName: S.String, recursive: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListThingTypesRequest extends S.Class<ListThingTypesRequest>("ListThingTypesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), thingTypeName: S.optional(S.String)}) {}
export class ListTopicRuleDestinationsRequest extends S.Class<ListTopicRuleDestinationsRequest>("ListTopicRuleDestinationsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTopicRulesRequest extends S.Class<ListTopicRulesRequest>("ListTopicRulesRequest")({topic: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), ruleDisabled: S.optional(S.Boolean)}) {}
export class ListV2LoggingLevelsRequest extends S.Class<ListV2LoggingLevelsRequest>("ListV2LoggingLevelsRequest")({targetType: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListViolationEventsRequest extends S.Class<ListViolationEventsRequest>("ListViolationEventsRequest")({startTime: S.Date, endTime: S.Date, thingName: S.optional(S.String), securityProfileName: S.optional(S.String), behaviorCriteriaType: S.optional(S.String), listSuppressedAlerts: S.optional(S.Boolean), verificationState: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class PutVerificationStateOnViolationRequest extends S.Class<PutVerificationStateOnViolationRequest>("PutVerificationStateOnViolationRequest")({violationId: S.String, verificationState: S.String, verificationStateDescription: S.optional(S.String)}) {}
export class PutVerificationStateOnViolationResponse extends S.Class<PutVerificationStateOnViolationResponse>("PutVerificationStateOnViolationResponse")({}) {}
export class RegisterCertificateRequest extends S.Class<RegisterCertificateRequest>("RegisterCertificateRequest")({certificatePem: S.String, caCertificatePem: S.optional(S.String), setAsActive: S.optional(S.Boolean), status: S.optional(S.String)}) {}
export class RegisterCertificateWithoutCARequest extends S.Class<RegisterCertificateWithoutCARequest>("RegisterCertificateWithoutCARequest")({certificatePem: S.String, status: S.optional(S.String)}) {}
export class RejectCertificateTransferRequest extends S.Class<RejectCertificateTransferRequest>("RejectCertificateTransferRequest")({certificateId: S.String, rejectReason: S.optional(S.String)}) {}
export class RemoveThingFromBillingGroupRequest extends S.Class<RemoveThingFromBillingGroupRequest>("RemoveThingFromBillingGroupRequest")({billingGroupName: S.optional(S.String), billingGroupArn: S.optional(S.String), thingName: S.optional(S.String), thingArn: S.optional(S.String)}) {}
export class RemoveThingFromBillingGroupResponse extends S.Class<RemoveThingFromBillingGroupResponse>("RemoveThingFromBillingGroupResponse")({}) {}
export class RemoveThingFromThingGroupRequest extends S.Class<RemoveThingFromThingGroupRequest>("RemoveThingFromThingGroupRequest")({thingGroupName: S.optional(S.String), thingGroupArn: S.optional(S.String), thingName: S.optional(S.String), thingArn: S.optional(S.String)}) {}
export class RemoveThingFromThingGroupResponse extends S.Class<RemoveThingFromThingGroupResponse>("RemoveThingFromThingGroupResponse")({}) {}
export class DynamoDBAction extends S.Class<DynamoDBAction>("DynamoDBAction")({tableName: S.String, roleArn: S.String, operation: S.optional(S.String), hashKeyField: S.String, hashKeyValue: S.String, hashKeyType: S.optional(S.String), rangeKeyField: S.optional(S.String), rangeKeyValue: S.optional(S.String), rangeKeyType: S.optional(S.String), payloadField: S.optional(S.String)}) {}
export class PutItemInput extends S.Class<PutItemInput>("PutItemInput")({tableName: S.String}) {}
export class DynamoDBv2Action extends S.Class<DynamoDBv2Action>("DynamoDBv2Action")({roleArn: S.String, putItem: PutItemInput}) {}
export class LambdaAction extends S.Class<LambdaAction>("LambdaAction")({functionArn: S.String}) {}
export class SnsAction extends S.Class<SnsAction>("SnsAction")({targetArn: S.String, roleArn: S.String, messageFormat: S.optional(S.String)}) {}
export class SqsAction extends S.Class<SqsAction>("SqsAction")({roleArn: S.String, queueUrl: S.String, useBase64: S.optional(S.Boolean)}) {}
export class KinesisAction extends S.Class<KinesisAction>("KinesisAction")({roleArn: S.String, streamName: S.String, partitionKey: S.optional(S.String)}) {}
export class UserProperty extends S.Class<UserProperty>("UserProperty")({key: S.String, value: S.String}) {}
export const UserProperties = S.Array(UserProperty);
export class MqttHeaders extends S.Class<MqttHeaders>("MqttHeaders")({payloadFormatIndicator: S.optional(S.String), contentType: S.optional(S.String), responseTopic: S.optional(S.String), correlationData: S.optional(S.String), messageExpiry: S.optional(S.String), userProperties: S.optional(UserProperties)}) {}
export class RepublishAction extends S.Class<RepublishAction>("RepublishAction")({roleArn: S.String, topic: S.String, qos: S.optional(S.Number), headers: S.optional(MqttHeaders)}) {}
export class S3Action extends S.Class<S3Action>("S3Action")({roleArn: S.String, bucketName: S.String, key: S.String, cannedAcl: S.optional(S.String)}) {}
export class FirehoseAction extends S.Class<FirehoseAction>("FirehoseAction")({roleArn: S.String, deliveryStreamName: S.String, separator: S.optional(S.String), batchMode: S.optional(S.Boolean)}) {}
export class CloudwatchMetricAction extends S.Class<CloudwatchMetricAction>("CloudwatchMetricAction")({roleArn: S.String, metricNamespace: S.String, metricName: S.String, metricValue: S.String, metricUnit: S.String, metricTimestamp: S.optional(S.String)}) {}
export class CloudwatchAlarmAction extends S.Class<CloudwatchAlarmAction>("CloudwatchAlarmAction")({roleArn: S.String, alarmName: S.String, stateReason: S.String, stateValue: S.String}) {}
export class CloudwatchLogsAction extends S.Class<CloudwatchLogsAction>("CloudwatchLogsAction")({roleArn: S.String, logGroupName: S.String, batchMode: S.optional(S.Boolean)}) {}
export class ElasticsearchAction extends S.Class<ElasticsearchAction>("ElasticsearchAction")({roleArn: S.String, endpoint: S.String, index: S.String, type: S.String, id: S.String}) {}
export class SalesforceAction extends S.Class<SalesforceAction>("SalesforceAction")({token: S.String, url: S.String}) {}
export class IotAnalyticsAction extends S.Class<IotAnalyticsAction>("IotAnalyticsAction")({channelArn: S.optional(S.String), channelName: S.optional(S.String), batchMode: S.optional(S.Boolean), roleArn: S.optional(S.String)}) {}
export class IotEventsAction extends S.Class<IotEventsAction>("IotEventsAction")({inputName: S.String, messageId: S.optional(S.String), batchMode: S.optional(S.Boolean), roleArn: S.String}) {}
export const AssetPropertyVariant = S.Union(S.String, S.String, S.String, S.String);
export class AssetPropertyTimestamp extends S.Class<AssetPropertyTimestamp>("AssetPropertyTimestamp")({timeInSeconds: S.String, offsetInNanos: S.optional(S.String)}) {}
export class AssetPropertyValue extends S.Class<AssetPropertyValue>("AssetPropertyValue")({value: AssetPropertyVariant, timestamp: AssetPropertyTimestamp, quality: S.optional(S.String)}) {}
export const AssetPropertyValueList = S.Array(AssetPropertyValue);
export class PutAssetPropertyValueEntry extends S.Class<PutAssetPropertyValueEntry>("PutAssetPropertyValueEntry")({entryId: S.optional(S.String), assetId: S.optional(S.String), propertyId: S.optional(S.String), propertyAlias: S.optional(S.String), propertyValues: AssetPropertyValueList}) {}
export const PutAssetPropertyValueEntryList = S.Array(PutAssetPropertyValueEntry);
export class IotSiteWiseAction extends S.Class<IotSiteWiseAction>("IotSiteWiseAction")({putAssetPropertyValueEntries: PutAssetPropertyValueEntryList, roleArn: S.String}) {}
export class StepFunctionsAction extends S.Class<StepFunctionsAction>("StepFunctionsAction")({executionNamePrefix: S.optional(S.String), stateMachineName: S.String, roleArn: S.String}) {}
export class TimestreamDimension extends S.Class<TimestreamDimension>("TimestreamDimension")({name: S.String, value: S.String}) {}
export const TimestreamDimensionList = S.Array(TimestreamDimension);
export class TimestreamTimestamp extends S.Class<TimestreamTimestamp>("TimestreamTimestamp")({value: S.String, unit: S.String}) {}
export class TimestreamAction extends S.Class<TimestreamAction>("TimestreamAction")({roleArn: S.String, databaseName: S.String, tableName: S.String, dimensions: TimestreamDimensionList, timestamp: S.optional(TimestreamTimestamp)}) {}
export class HttpActionHeader extends S.Class<HttpActionHeader>("HttpActionHeader")({key: S.String, value: S.String}) {}
export const HeaderList = S.Array(HttpActionHeader);
export class SigV4Authorization extends S.Class<SigV4Authorization>("SigV4Authorization")({signingRegion: S.String, serviceName: S.String, roleArn: S.String}) {}
export class HttpAuthorization extends S.Class<HttpAuthorization>("HttpAuthorization")({sigv4: S.optional(SigV4Authorization)}) {}
export class BatchConfig extends S.Class<BatchConfig>("BatchConfig")({maxBatchOpenMs: S.optional(S.Number), maxBatchSize: S.optional(S.Number), maxBatchSizeBytes: S.optional(S.Number)}) {}
export class HttpAction extends S.Class<HttpAction>("HttpAction")({url: S.String, confirmationUrl: S.optional(S.String), headers: S.optional(HeaderList), auth: S.optional(HttpAuthorization), enableBatching: S.optional(S.Boolean), batchConfig: S.optional(BatchConfig)}) {}
export const ClientProperties = S.Record({key: S.String, value: S.String});
export class KafkaActionHeader extends S.Class<KafkaActionHeader>("KafkaActionHeader")({key: S.String, value: S.String}) {}
export const KafkaHeaders = S.Array(KafkaActionHeader);
export class KafkaAction extends S.Class<KafkaAction>("KafkaAction")({destinationArn: S.String, topic: S.String, key: S.optional(S.String), partition: S.optional(S.String), clientProperties: ClientProperties, headers: S.optional(KafkaHeaders)}) {}
export class OpenSearchAction extends S.Class<OpenSearchAction>("OpenSearchAction")({roleArn: S.String, endpoint: S.String, index: S.String, type: S.String, id: S.String}) {}
export class LocationTimestamp extends S.Class<LocationTimestamp>("LocationTimestamp")({value: S.String, unit: S.optional(S.String)}) {}
export class LocationAction extends S.Class<LocationAction>("LocationAction")({roleArn: S.String, trackerName: S.String, deviceId: S.String, timestamp: S.optional(LocationTimestamp), latitude: S.String, longitude: S.String}) {}
export class Action extends S.Class<Action>("Action")({dynamoDB: S.optional(DynamoDBAction), dynamoDBv2: S.optional(DynamoDBv2Action), lambda: S.optional(LambdaAction), sns: S.optional(SnsAction), sqs: S.optional(SqsAction), kinesis: S.optional(KinesisAction), republish: S.optional(RepublishAction), s3: S.optional(S3Action), firehose: S.optional(FirehoseAction), cloudwatchMetric: S.optional(CloudwatchMetricAction), cloudwatchAlarm: S.optional(CloudwatchAlarmAction), cloudwatchLogs: S.optional(CloudwatchLogsAction), elasticsearch: S.optional(ElasticsearchAction), salesforce: S.optional(SalesforceAction), iotAnalytics: S.optional(IotAnalyticsAction), iotEvents: S.optional(IotEventsAction), iotSiteWise: S.optional(IotSiteWiseAction), stepFunctions: S.optional(StepFunctionsAction), timestream: S.optional(TimestreamAction), http: S.optional(HttpAction), kafka: S.optional(KafkaAction), openSearch: S.optional(OpenSearchAction), location: S.optional(LocationAction)}) {}
export const ActionList = S.Array(Action);
export class TopicRulePayload extends S.Class<TopicRulePayload>("TopicRulePayload")({sql: S.String, description: S.optional(S.String), actions: ActionList, ruleDisabled: S.optional(S.Boolean), awsIotSqlVersion: S.optional(S.String), errorAction: S.optional(Action)}) {}
export class ReplaceTopicRuleRequest extends S.Class<ReplaceTopicRuleRequest>("ReplaceTopicRuleRequest")({ruleName: S.String, topicRulePayload: H.Body("undefined", TopicRulePayload)}) {}
export class SearchIndexRequest extends S.Class<SearchIndexRequest>("SearchIndexRequest")({indexName: S.optional(S.String), queryString: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), queryVersion: S.optional(S.String)}) {}
export class SetDefaultAuthorizerRequest extends S.Class<SetDefaultAuthorizerRequest>("SetDefaultAuthorizerRequest")({authorizerName: S.String}) {}
export class SetDefaultPolicyVersionRequest extends S.Class<SetDefaultPolicyVersionRequest>("SetDefaultPolicyVersionRequest")({policyName: S.String, policyVersionId: S.String}) {}
export class StartOnDemandAuditTaskRequest extends S.Class<StartOnDemandAuditTaskRequest>("StartOnDemandAuditTaskRequest")({targetCheckNames: TargetAuditCheckNames}) {}
export class StartThingRegistrationTaskRequest extends S.Class<StartThingRegistrationTaskRequest>("StartThingRegistrationTaskRequest")({templateBody: S.String, inputFileBucket: S.String, inputFileKey: S.String, roleArn: S.String}) {}
export class StopThingRegistrationTaskRequest extends S.Class<StopThingRegistrationTaskRequest>("StopThingRegistrationTaskRequest")({taskId: S.String}) {}
export class StopThingRegistrationTaskResponse extends S.Class<StopThingRegistrationTaskResponse>("StopThingRegistrationTaskResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TransferCertificateRequest extends S.Class<TransferCertificateRequest>("TransferCertificateRequest")({certificateId: S.String, targetAwsAccount: S.String, transferMessage: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class AuditNotificationTarget extends S.Class<AuditNotificationTarget>("AuditNotificationTarget")({targetArn: S.optional(S.String), roleArn: S.optional(S.String), enabled: S.optional(S.Boolean)}) {}
export const AuditNotificationTargetConfigurations = S.Record({key: S.String, value: AuditNotificationTarget});
export const CheckCustomConfiguration = S.Record({key: S.String, value: S.String});
export class AuditCheckConfiguration extends S.Class<AuditCheckConfiguration>("AuditCheckConfiguration")({enabled: S.optional(S.Boolean), configuration: S.optional(CheckCustomConfiguration)}) {}
export const AuditCheckConfigurations = S.Record({key: S.String, value: AuditCheckConfiguration});
export class UpdateAccountAuditConfigurationRequest extends S.Class<UpdateAccountAuditConfigurationRequest>("UpdateAccountAuditConfigurationRequest")({roleArn: S.optional(S.String), auditNotificationTargetConfigurations: S.optional(AuditNotificationTargetConfigurations), auditCheckConfigurations: S.optional(AuditCheckConfigurations)}) {}
export class UpdateAccountAuditConfigurationResponse extends S.Class<UpdateAccountAuditConfigurationResponse>("UpdateAccountAuditConfigurationResponse")({}) {}
export class UpdateAuditSuppressionRequest extends S.Class<UpdateAuditSuppressionRequest>("UpdateAuditSuppressionRequest")({checkName: S.String, resourceIdentifier: ResourceIdentifier, expirationDate: S.optional(S.Date), suppressIndefinitely: S.optional(S.Boolean), description: S.optional(S.String)}) {}
export class UpdateAuditSuppressionResponse extends S.Class<UpdateAuditSuppressionResponse>("UpdateAuditSuppressionResponse")({}) {}
export const PublicKeyMap = S.Record({key: S.String, value: S.String});
export class UpdateAuthorizerRequest extends S.Class<UpdateAuthorizerRequest>("UpdateAuthorizerRequest")({authorizerName: S.String, authorizerFunctionArn: S.optional(S.String), tokenKeyName: S.optional(S.String), tokenSigningPublicKeys: S.optional(PublicKeyMap), status: S.optional(S.String), enableCachingForHttp: S.optional(S.Boolean)}) {}
export class BillingGroupProperties extends S.Class<BillingGroupProperties>("BillingGroupProperties")({billingGroupDescription: S.optional(S.String)}) {}
export class UpdateBillingGroupRequest extends S.Class<UpdateBillingGroupRequest>("UpdateBillingGroupRequest")({billingGroupName: S.String, billingGroupProperties: BillingGroupProperties, expectedVersion: S.optional(S.Number)}) {}
export class RegistrationConfig extends S.Class<RegistrationConfig>("RegistrationConfig")({templateBody: S.optional(S.String), roleArn: S.optional(S.String), templateName: S.optional(S.String)}) {}
export class UpdateCACertificateRequest extends S.Class<UpdateCACertificateRequest>("UpdateCACertificateRequest")({certificateId: S.String, newStatus: S.optional(S.String), newAutoRegistrationStatus: S.optional(S.String), registrationConfig: S.optional(RegistrationConfig), removeAutoRegistration: S.optional(S.Boolean)}) {}
export class UpdateCertificateRequest extends S.Class<UpdateCertificateRequest>("UpdateCertificateRequest")({certificateId: S.String, newStatus: S.String}) {}
export class UpdateCertificateProviderRequest extends S.Class<UpdateCertificateProviderRequest>("UpdateCertificateProviderRequest")({certificateProviderName: S.String, lambdaFunctionArn: S.optional(S.String), accountDefaultForOperations: S.optional(CertificateProviderAccountDefaultForOperations)}) {}
export class UpdateCommandRequest extends S.Class<UpdateCommandRequest>("UpdateCommandRequest")({commandId: S.String, displayName: S.optional(S.String), description: S.optional(S.String), deprecated: S.optional(S.Boolean)}) {}
export class UpdateCustomMetricRequest extends S.Class<UpdateCustomMetricRequest>("UpdateCustomMetricRequest")({metricName: S.String, displayName: S.String}) {}
export class UpdateDimensionRequest extends S.Class<UpdateDimensionRequest>("UpdateDimensionRequest")({name: S.String, stringValues: DimensionStringValues}) {}
export class AuthorizerConfig extends S.Class<AuthorizerConfig>("AuthorizerConfig")({defaultAuthorizerName: S.optional(S.String), allowAuthorizerOverride: S.optional(S.Boolean)}) {}
export class TlsConfig extends S.Class<TlsConfig>("TlsConfig")({securityPolicy: S.optional(S.String)}) {}
export class ServerCertificateConfig extends S.Class<ServerCertificateConfig>("ServerCertificateConfig")({enableOCSPCheck: S.optional(S.Boolean), ocspLambdaArn: S.optional(S.String), ocspAuthorizedResponderArn: S.optional(S.String)}) {}
export class ClientCertificateConfig extends S.Class<ClientCertificateConfig>("ClientCertificateConfig")({clientCertificateCallbackArn: S.optional(S.String)}) {}
export class UpdateDomainConfigurationRequest extends S.Class<UpdateDomainConfigurationRequest>("UpdateDomainConfigurationRequest")({domainConfigurationName: S.String, authorizerConfig: S.optional(AuthorizerConfig), domainConfigurationStatus: S.optional(S.String), removeAuthorizerConfig: S.optional(S.Boolean), tlsConfig: S.optional(TlsConfig), serverCertificateConfig: S.optional(ServerCertificateConfig), authenticationType: S.optional(S.String), applicationProtocol: S.optional(S.String), clientCertificateConfig: S.optional(ClientCertificateConfig)}) {}
export class UpdateDynamicThingGroupRequest extends S.Class<UpdateDynamicThingGroupRequest>("UpdateDynamicThingGroupRequest")({thingGroupName: S.String, thingGroupProperties: ThingGroupProperties, expectedVersion: S.optional(S.Number), indexName: S.optional(S.String), queryString: S.optional(S.String), queryVersion: S.optional(S.String)}) {}
export class UpdateEncryptionConfigurationRequest extends S.Class<UpdateEncryptionConfigurationRequest>("UpdateEncryptionConfigurationRequest")({encryptionType: S.String, kmsKeyArn: S.optional(S.String), kmsAccessRoleArn: S.optional(S.String)}) {}
export class UpdateEncryptionConfigurationResponse extends S.Class<UpdateEncryptionConfigurationResponse>("UpdateEncryptionConfigurationResponse")({}) {}
export class Configuration extends S.Class<Configuration>("Configuration")({Enabled: S.optional(S.Boolean)}) {}
export const EventConfigurations = S.Record({key: S.String, value: Configuration});
export class UpdateEventConfigurationsRequest extends S.Class<UpdateEventConfigurationsRequest>("UpdateEventConfigurationsRequest")({eventConfigurations: S.optional(EventConfigurations)}) {}
export class UpdateEventConfigurationsResponse extends S.Class<UpdateEventConfigurationsResponse>("UpdateEventConfigurationsResponse")({}) {}
export const AggregationTypeValues = S.Array(S.String);
export class AggregationType extends S.Class<AggregationType>("AggregationType")({name: S.String, values: S.optional(AggregationTypeValues)}) {}
export class UpdateFleetMetricRequest extends S.Class<UpdateFleetMetricRequest>("UpdateFleetMetricRequest")({metricName: S.String, queryString: S.optional(S.String), aggregationType: S.optional(AggregationType), period: S.optional(S.Number), aggregationField: S.optional(S.String), description: S.optional(S.String), queryVersion: S.optional(S.String), indexName: S.String, unit: S.optional(S.String), expectedVersion: S.optional(S.Number)}) {}
export class Field extends S.Class<Field>("Field")({name: S.optional(S.String), type: S.optional(S.String)}) {}
export const Fields = S.Array(Field);
export const NamedShadowNamesFilter = S.Array(S.String);
export class GeoLocationTarget extends S.Class<GeoLocationTarget>("GeoLocationTarget")({name: S.optional(S.String), order: S.optional(S.String)}) {}
export const GeoLocationsFilter = S.Array(GeoLocationTarget);
export class IndexingFilter extends S.Class<IndexingFilter>("IndexingFilter")({namedShadowNames: S.optional(NamedShadowNamesFilter), geoLocations: S.optional(GeoLocationsFilter)}) {}
export class ThingIndexingConfiguration extends S.Class<ThingIndexingConfiguration>("ThingIndexingConfiguration")({thingIndexingMode: S.String, thingConnectivityIndexingMode: S.optional(S.String), deviceDefenderIndexingMode: S.optional(S.String), namedShadowIndexingMode: S.optional(S.String), managedFields: S.optional(Fields), customFields: S.optional(Fields), filter: S.optional(IndexingFilter)}) {}
export class ThingGroupIndexingConfiguration extends S.Class<ThingGroupIndexingConfiguration>("ThingGroupIndexingConfiguration")({thingGroupIndexingMode: S.String, managedFields: S.optional(Fields), customFields: S.optional(Fields)}) {}
export class UpdateIndexingConfigurationRequest extends S.Class<UpdateIndexingConfigurationRequest>("UpdateIndexingConfigurationRequest")({thingIndexingConfiguration: S.optional(ThingIndexingConfiguration), thingGroupIndexingConfiguration: S.optional(ThingGroupIndexingConfiguration)}) {}
export class UpdateIndexingConfigurationResponse extends S.Class<UpdateIndexingConfigurationResponse>("UpdateIndexingConfigurationResponse")({}) {}
export class PresignedUrlConfig extends S.Class<PresignedUrlConfig>("PresignedUrlConfig")({roleArn: S.optional(S.String), expiresInSec: S.optional(S.Number)}) {}
export class RateIncreaseCriteria extends S.Class<RateIncreaseCriteria>("RateIncreaseCriteria")({numberOfNotifiedThings: S.optional(S.Number), numberOfSucceededThings: S.optional(S.Number)}) {}
export class ExponentialRolloutRate extends S.Class<ExponentialRolloutRate>("ExponentialRolloutRate")({baseRatePerMinute: S.Number, incrementFactor: S.Number, rateIncreaseCriteria: RateIncreaseCriteria}) {}
export class JobExecutionsRolloutConfig extends S.Class<JobExecutionsRolloutConfig>("JobExecutionsRolloutConfig")({maximumPerMinute: S.optional(S.Number), exponentialRate: S.optional(ExponentialRolloutRate)}) {}
export class AbortCriteria extends S.Class<AbortCriteria>("AbortCriteria")({failureType: S.String, action: S.String, thresholdPercentage: S.Number, minNumberOfExecutedThings: S.Number}) {}
export const AbortCriteriaList = S.Array(AbortCriteria);
export class AbortConfig extends S.Class<AbortConfig>("AbortConfig")({criteriaList: AbortCriteriaList}) {}
export class TimeoutConfig extends S.Class<TimeoutConfig>("TimeoutConfig")({inProgressTimeoutInMinutes: S.optional(S.Number)}) {}
export class RetryCriteria extends S.Class<RetryCriteria>("RetryCriteria")({failureType: S.String, numberOfRetries: S.Number}) {}
export const RetryCriteriaList = S.Array(RetryCriteria);
export class JobExecutionsRetryConfig extends S.Class<JobExecutionsRetryConfig>("JobExecutionsRetryConfig")({criteriaList: RetryCriteriaList}) {}
export class UpdateJobRequest extends S.Class<UpdateJobRequest>("UpdateJobRequest")({jobId: S.String, description: S.optional(S.String), presignedUrlConfig: S.optional(PresignedUrlConfig), jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig), abortConfig: S.optional(AbortConfig), timeoutConfig: S.optional(TimeoutConfig), namespaceId: S.optional(S.String), jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig)}) {}
export class UpdateDeviceCertificateParams extends S.Class<UpdateDeviceCertificateParams>("UpdateDeviceCertificateParams")({action: S.String}) {}
export class UpdateCACertificateParams extends S.Class<UpdateCACertificateParams>("UpdateCACertificateParams")({action: S.String}) {}
export const ThingGroupNames = S.Array(S.String);
export class AddThingsToThingGroupParams extends S.Class<AddThingsToThingGroupParams>("AddThingsToThingGroupParams")({thingGroupNames: ThingGroupNames, overrideDynamicGroups: S.optional(S.Boolean)}) {}
export class ReplaceDefaultPolicyVersionParams extends S.Class<ReplaceDefaultPolicyVersionParams>("ReplaceDefaultPolicyVersionParams")({templateName: S.String}) {}
export class EnableIoTLoggingParams extends S.Class<EnableIoTLoggingParams>("EnableIoTLoggingParams")({roleArnForLogging: S.String, logLevel: S.String}) {}
export class PublishFindingToSnsParams extends S.Class<PublishFindingToSnsParams>("PublishFindingToSnsParams")({topicArn: S.String}) {}
export class MitigationActionParams extends S.Class<MitigationActionParams>("MitigationActionParams")({updateDeviceCertificateParams: S.optional(UpdateDeviceCertificateParams), updateCACertificateParams: S.optional(UpdateCACertificateParams), addThingsToThingGroupParams: S.optional(AddThingsToThingGroupParams), replaceDefaultPolicyVersionParams: S.optional(ReplaceDefaultPolicyVersionParams), enableIoTLoggingParams: S.optional(EnableIoTLoggingParams), publishFindingToSnsParams: S.optional(PublishFindingToSnsParams)}) {}
export class UpdateMitigationActionRequest extends S.Class<UpdateMitigationActionRequest>("UpdateMitigationActionRequest")({actionName: S.String, roleArn: S.optional(S.String), actionParams: S.optional(MitigationActionParams)}) {}
export class UpdatePackageRequest extends S.Class<UpdatePackageRequest>("UpdatePackageRequest")({packageName: S.String, description: S.optional(S.String), defaultVersionName: S.optional(S.String), unsetDefaultVersion: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class UpdatePackageResponse extends S.Class<UpdatePackageResponse>("UpdatePackageResponse")({}) {}
export class VersionUpdateByJobsConfig extends S.Class<VersionUpdateByJobsConfig>("VersionUpdateByJobsConfig")({enabled: S.optional(S.Boolean), roleArn: S.optional(S.String)}) {}
export class UpdatePackageConfigurationRequest extends S.Class<UpdatePackageConfigurationRequest>("UpdatePackageConfigurationRequest")({versionUpdateByJobsConfig: S.optional(VersionUpdateByJobsConfig), clientToken: S.optional(S.String)}) {}
export class UpdatePackageConfigurationResponse extends S.Class<UpdatePackageConfigurationResponse>("UpdatePackageConfigurationResponse")({}) {}
export const ResourceAttributes = S.Record({key: S.String, value: S.String});
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.optional(S.String), key: S.optional(S.String), version: S.optional(S.String)}) {}
export class PackageVersionArtifact extends S.Class<PackageVersionArtifact>("PackageVersionArtifact")({s3Location: S.optional(S3Location)}) {}
export class UpdatePackageVersionRequest extends S.Class<UpdatePackageVersionRequest>("UpdatePackageVersionRequest")({packageName: S.String, versionName: S.String, description: S.optional(S.String), attributes: S.optional(ResourceAttributes), artifact: S.optional(PackageVersionArtifact), action: S.optional(S.String), recipe: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class UpdatePackageVersionResponse extends S.Class<UpdatePackageVersionResponse>("UpdatePackageVersionResponse")({}) {}
export class ProvisioningHook extends S.Class<ProvisioningHook>("ProvisioningHook")({payloadVersion: S.optional(S.String), targetArn: S.String}) {}
export class UpdateProvisioningTemplateRequest extends S.Class<UpdateProvisioningTemplateRequest>("UpdateProvisioningTemplateRequest")({templateName: S.String, description: S.optional(S.String), enabled: S.optional(S.Boolean), defaultVersionId: S.optional(S.Number), provisioningRoleArn: S.optional(S.String), preProvisioningHook: S.optional(ProvisioningHook), removePreProvisioningHook: S.optional(S.Boolean)}) {}
export class UpdateProvisioningTemplateResponse extends S.Class<UpdateProvisioningTemplateResponse>("UpdateProvisioningTemplateResponse")({}) {}
export class UpdateRoleAliasRequest extends S.Class<UpdateRoleAliasRequest>("UpdateRoleAliasRequest")({roleAlias: S.String, roleArn: S.optional(S.String), credentialDurationSeconds: S.optional(S.Number)}) {}
export class UpdateScheduledAuditRequest extends S.Class<UpdateScheduledAuditRequest>("UpdateScheduledAuditRequest")({frequency: S.optional(S.String), dayOfMonth: S.optional(S.String), dayOfWeek: S.optional(S.String), targetCheckNames: S.optional(TargetAuditCheckNames), scheduledAuditName: S.String}) {}
export class MetricDimension extends S.Class<MetricDimension>("MetricDimension")({dimensionName: S.String, operator: S.optional(S.String)}) {}
export const Cidrs = S.Array(S.String);
export const Ports = S.Array(S.Number);
export const NumberList = S.Array(S.Number);
export const StringList = S.Array(S.String);
export class MetricValue extends S.Class<MetricValue>("MetricValue")({count: S.optional(S.Number), cidrs: S.optional(Cidrs), ports: S.optional(Ports), number: S.optional(S.Number), numbers: S.optional(NumberList), strings: S.optional(StringList)}) {}
export class StatisticalThreshold extends S.Class<StatisticalThreshold>("StatisticalThreshold")({statistic: S.optional(S.String)}) {}
export class MachineLearningDetectionConfig extends S.Class<MachineLearningDetectionConfig>("MachineLearningDetectionConfig")({confidenceLevel: S.String}) {}
export class BehaviorCriteria extends S.Class<BehaviorCriteria>("BehaviorCriteria")({comparisonOperator: S.optional(S.String), value: S.optional(MetricValue), durationSeconds: S.optional(S.Number), consecutiveDatapointsToAlarm: S.optional(S.Number), consecutiveDatapointsToClear: S.optional(S.Number), statisticalThreshold: S.optional(StatisticalThreshold), mlDetectionConfig: S.optional(MachineLearningDetectionConfig)}) {}
export class Behavior extends S.Class<Behavior>("Behavior")({name: S.String, metric: S.optional(S.String), metricDimension: S.optional(MetricDimension), criteria: S.optional(BehaviorCriteria), suppressAlerts: S.optional(S.Boolean), exportMetric: S.optional(S.Boolean)}) {}
export const Behaviors = S.Array(Behavior);
export class AlertTarget extends S.Class<AlertTarget>("AlertTarget")({alertTargetArn: S.String, roleArn: S.String}) {}
export const AlertTargets = S.Record({key: S.String, value: AlertTarget});
export class MetricToRetain extends S.Class<MetricToRetain>("MetricToRetain")({metric: S.String, metricDimension: S.optional(MetricDimension), exportMetric: S.optional(S.Boolean)}) {}
export const AdditionalMetricsToRetainV2List = S.Array(MetricToRetain);
export class MetricsExportConfig extends S.Class<MetricsExportConfig>("MetricsExportConfig")({mqttTopic: S.String, roleArn: S.String}) {}
export class UpdateSecurityProfileRequest extends S.Class<UpdateSecurityProfileRequest>("UpdateSecurityProfileRequest")({securityProfileName: S.String, securityProfileDescription: S.optional(S.String), behaviors: S.optional(Behaviors), alertTargets: S.optional(AlertTargets), additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList), additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List), deleteBehaviors: S.optional(S.Boolean), deleteAlertTargets: S.optional(S.Boolean), deleteAdditionalMetricsToRetain: S.optional(S.Boolean), expectedVersion: S.optional(S.Number), metricsExportConfig: S.optional(MetricsExportConfig), deleteMetricsExportConfig: S.optional(S.Boolean)}) {}
export class StreamFile extends S.Class<StreamFile>("StreamFile")({fileId: S.optional(S.Number), s3Location: S.optional(S3Location)}) {}
export const StreamFiles = S.Array(StreamFile);
export class UpdateStreamRequest extends S.Class<UpdateStreamRequest>("UpdateStreamRequest")({streamId: S.String, description: S.optional(S.String), files: S.optional(StreamFiles), roleArn: S.optional(S.String)}) {}
export class UpdateThingRequest extends S.Class<UpdateThingRequest>("UpdateThingRequest")({thingName: S.String, thingTypeName: S.optional(S.String), attributePayload: S.optional(AttributePayload), expectedVersion: S.optional(S.Number), removeThingType: S.optional(S.Boolean)}) {}
export class UpdateThingResponse extends S.Class<UpdateThingResponse>("UpdateThingResponse")({}) {}
export class UpdateThingGroupRequest extends S.Class<UpdateThingGroupRequest>("UpdateThingGroupRequest")({thingGroupName: S.String, thingGroupProperties: ThingGroupProperties, expectedVersion: S.optional(S.Number)}) {}
export class UpdateThingGroupsForThingRequest extends S.Class<UpdateThingGroupsForThingRequest>("UpdateThingGroupsForThingRequest")({thingName: S.optional(S.String), thingGroupsToAdd: S.optional(ThingGroupList), thingGroupsToRemove: S.optional(ThingGroupList), overrideDynamicGroups: S.optional(S.Boolean)}) {}
export class UpdateThingGroupsForThingResponse extends S.Class<UpdateThingGroupsForThingResponse>("UpdateThingGroupsForThingResponse")({}) {}
export const SearchableAttributes = S.Array(S.String);
export class PropagatingAttribute extends S.Class<PropagatingAttribute>("PropagatingAttribute")({userPropertyKey: S.optional(S.String), thingAttribute: S.optional(S.String), connectionAttribute: S.optional(S.String)}) {}
export const PropagatingAttributeList = S.Array(PropagatingAttribute);
export class Mqtt5Configuration extends S.Class<Mqtt5Configuration>("Mqtt5Configuration")({propagatingAttributes: S.optional(PropagatingAttributeList)}) {}
export class ThingTypeProperties extends S.Class<ThingTypeProperties>("ThingTypeProperties")({thingTypeDescription: S.optional(S.String), searchableAttributes: S.optional(SearchableAttributes), mqtt5Configuration: S.optional(Mqtt5Configuration)}) {}
export class UpdateThingTypeRequest extends S.Class<UpdateThingTypeRequest>("UpdateThingTypeRequest")({thingTypeName: S.String, thingTypeProperties: S.optional(ThingTypeProperties)}) {}
export class UpdateThingTypeResponse extends S.Class<UpdateThingTypeResponse>("UpdateThingTypeResponse")({}) {}
export class UpdateTopicRuleDestinationRequest extends S.Class<UpdateTopicRuleDestinationRequest>("UpdateTopicRuleDestinationRequest")({arn: S.String, status: S.String}) {}
export class UpdateTopicRuleDestinationResponse extends S.Class<UpdateTopicRuleDestinationResponse>("UpdateTopicRuleDestinationResponse")({}) {}
export class ValidateSecurityProfileBehaviorsRequest extends S.Class<ValidateSecurityProfileBehaviorsRequest>("ValidateSecurityProfileBehaviorsRequest")({behaviors: Behaviors}) {}
export const FindingIds = S.Array(S.String);
export const MitigationActionNameList = S.Array(S.String);
export const TargetViolationIdsForDetectMitigationActions = S.Array(S.String);
export const Resources = S.Array(S.String);
export const DetailsMap = S.Record({key: S.String, value: S.String});
export class CommandPayload extends S.Class<CommandPayload>("CommandPayload")({content: S.optional(H.StreamBody()), contentType: S.optional(S.String)}) {}
export const ParameterMap = S.Record({key: S.String, value: S.String});
export class MaintenanceWindow extends S.Class<MaintenanceWindow>("MaintenanceWindow")({startTime: S.String, durationInMinutes: S.Number}) {}
export const MaintenanceWindows = S.Array(MaintenanceWindow);
export class SchedulingConfig extends S.Class<SchedulingConfig>("SchedulingConfig")({startTime: S.optional(S.String), endTime: S.optional(S.String), endBehavior: S.optional(S.String), maintenanceWindows: S.optional(MaintenanceWindows)}) {}
export class AwsJobPresignedUrlConfig extends S.Class<AwsJobPresignedUrlConfig>("AwsJobPresignedUrlConfig")({expiresInSec: S.optional(S.Number)}) {}
export class AwsJobTimeoutConfig extends S.Class<AwsJobTimeoutConfig>("AwsJobTimeoutConfig")({inProgressTimeoutInMinutes: S.optional(S.Number)}) {}
export const AdditionalParameterMap = S.Record({key: S.String, value: S.String});
export const TagMap = S.Record({key: S.String, value: S.String});
export class AuthorizerDescription extends S.Class<AuthorizerDescription>("AuthorizerDescription")({authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String), authorizerFunctionArn: S.optional(S.String), tokenKeyName: S.optional(S.String), tokenSigningPublicKeys: S.optional(PublicKeyMap), status: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), signingDisabled: S.optional(S.Boolean), enableCachingForHttp: S.optional(S.Boolean)}) {}
export class ConfigurationDetails extends S.Class<ConfigurationDetails>("ConfigurationDetails")({configurationStatus: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const Environments = S.Array(S.String);
export const StringMap = S.Record({key: S.String, value: S.String});
export class NonCompliantResource extends S.Class<NonCompliantResource>("NonCompliantResource")({resourceType: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), additionalInfo: S.optional(StringMap)}) {}
export class RelatedResource extends S.Class<RelatedResource>("RelatedResource")({resourceType: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), additionalInfo: S.optional(StringMap)}) {}
export const RelatedResources = S.Array(RelatedResource);
export class AuditFinding extends S.Class<AuditFinding>("AuditFinding")({findingId: S.optional(S.String), taskId: S.optional(S.String), checkName: S.optional(S.String), taskStartTime: S.optional(S.Date), findingTime: S.optional(S.Date), severity: S.optional(S.String), nonCompliantResource: S.optional(NonCompliantResource), relatedResources: S.optional(RelatedResources), reasonForNonCompliance: S.optional(S.String), reasonForNonComplianceCode: S.optional(S.String), isSuppressed: S.optional(S.Boolean)}) {}
export const AuditFindings = S.Array(AuditFinding);
export class TimeFilter extends S.Class<TimeFilter>("TimeFilter")({after: S.optional(S.String), before: S.optional(S.String)}) {}
export const MetricNames = S.Array(S.String);
export class DetectMitigationActionsTaskTarget extends S.Class<DetectMitigationActionsTaskTarget>("DetectMitigationActionsTaskTarget")({violationIds: S.optional(TargetViolationIdsForDetectMitigationActions), securityProfileName: S.optional(S.String), behaviorName: S.optional(S.String)}) {}
export class ViolationEventOccurrenceRange extends S.Class<ViolationEventOccurrenceRange>("ViolationEventOccurrenceRange")({startTime: S.Date, endTime: S.Date}) {}
export class MitigationAction extends S.Class<MitigationAction>("MitigationAction")({name: S.optional(S.String), id: S.optional(S.String), roleArn: S.optional(S.String), actionParams: S.optional(MitigationActionParams)}) {}
export const MitigationActionList = S.Array(MitigationAction);
export class DetectMitigationActionsTaskStatistics extends S.Class<DetectMitigationActionsTaskStatistics>("DetectMitigationActionsTaskStatistics")({actionsExecuted: S.optional(S.Number), actionsSkipped: S.optional(S.Number), actionsFailed: S.optional(S.Number)}) {}
export class DetectMitigationActionsTaskSummary extends S.Class<DetectMitigationActionsTaskSummary>("DetectMitigationActionsTaskSummary")({taskId: S.optional(S.String), taskStatus: S.optional(S.String), taskStartTime: S.optional(S.Date), taskEndTime: S.optional(S.Date), target: S.optional(DetectMitigationActionsTaskTarget), violationEventOccurrenceRange: S.optional(ViolationEventOccurrenceRange), onlyActiveViolationsIncluded: S.optional(S.Boolean), suppressedAlertsIncluded: S.optional(S.Boolean), actionsDefinition: S.optional(MitigationActionList), taskStatistics: S.optional(DetectMitigationActionsTaskStatistics)}) {}
export const DetectMitigationActionsTaskSummaryList = S.Array(DetectMitigationActionsTaskSummary);
export const DimensionNames = S.Array(S.String);
export const IndexNamesList = S.Array(S.String);
export const Principals = S.Array(S.String);
export const ThingNameList = S.Array(S.String);
export const RoleAliases = S.Array(S.String);
export const PolicyTargets = S.Array(S.String);
export class GroupNameAndArn extends S.Class<GroupNameAndArn>("GroupNameAndArn")({groupName: S.optional(S.String), groupArn: S.optional(S.String)}) {}
export const ThingGroupNameAndArnList = S.Array(GroupNameAndArn);
export const S3FileUrlList = S.Array(S.String);
export const TaskIdList = S.Array(S.String);
export const Parameters = S.Record({key: S.String, value: S.String});
export class LoggingOptionsPayload extends S.Class<LoggingOptionsPayload>("LoggingOptionsPayload")({roleArn: S.String, logLevel: S.optional(S.String)}) {}
export class LogTarget extends S.Class<LogTarget>("LogTarget")({targetType: S.String, targetName: S.optional(S.String)}) {}
export class LogEventConfiguration extends S.Class<LogEventConfiguration>("LogEventConfiguration")({eventType: S.String, logLevel: S.optional(S.String), logDestination: S.optional(S.String)}) {}
export const LogEventConfigurations = S.Array(LogEventConfiguration);
export const AuditCheckToActionsMapping = S.Record({key: S.String, value: MitigationActionNameList});
export class AuthInfo extends S.Class<AuthInfo>("AuthInfo")({actionType: S.optional(S.String), resources: Resources}) {}
export const AuthInfos = S.Array(AuthInfo);
export class MqttContext extends S.Class<MqttContext>("MqttContext")({username: S.optional(S.String), password: S.optional(H.StreamBody()), clientId: S.optional(S.String)}) {}
export class TlsContext extends S.Class<TlsContext>("TlsContext")({serverName: S.optional(S.String)}) {}
export const SubnetIdList = S.Array(S.String);
export const SecurityGroupList = S.Array(S.String);
export const ReasonForNonComplianceCodes = S.Array(S.String);
export class AssociateTargetsWithJobResponse extends S.Class<AssociateTargetsWithJobResponse>("AssociateTargetsWithJobResponse")({jobArn: S.optional(S.String), jobId: S.optional(S.String), description: S.optional(S.String)}) {}
export class CancelJobResponse extends S.Class<CancelJobResponse>("CancelJobResponse")({jobArn: S.optional(S.String), jobId: S.optional(S.String), description: S.optional(S.String)}) {}
export class CancelJobExecutionRequest extends S.Class<CancelJobExecutionRequest>("CancelJobExecutionRequest")({jobId: S.String, thingName: S.String, force: S.optional(S.Boolean), expectedVersion: S.optional(S.Number), statusDetails: S.optional(DetailsMap)}) {}
export class CreateAuthorizerRequest extends S.Class<CreateAuthorizerRequest>("CreateAuthorizerRequest")({authorizerName: S.String, authorizerFunctionArn: S.String, tokenKeyName: S.optional(S.String), tokenSigningPublicKeys: S.optional(PublicKeyMap), status: S.optional(S.String), tags: S.optional(TagList), signingDisabled: S.optional(S.Boolean), enableCachingForHttp: S.optional(S.Boolean)}) {}
export class CreateBillingGroupRequest extends S.Class<CreateBillingGroupRequest>("CreateBillingGroupRequest")({billingGroupName: S.String, billingGroupProperties: S.optional(BillingGroupProperties), tags: S.optional(TagList)}) {}
export class CreateCertificateFromCsrResponse extends S.Class<CreateCertificateFromCsrResponse>("CreateCertificateFromCsrResponse")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), certificatePem: S.optional(S.String)}) {}
export class CreateCertificateProviderResponse extends S.Class<CreateCertificateProviderResponse>("CreateCertificateProviderResponse")({certificateProviderName: S.optional(S.String), certificateProviderArn: S.optional(S.String)}) {}
export class CreateCustomMetricResponse extends S.Class<CreateCustomMetricResponse>("CreateCustomMetricResponse")({metricName: S.optional(S.String), metricArn: S.optional(S.String)}) {}
export class CreateDimensionResponse extends S.Class<CreateDimensionResponse>("CreateDimensionResponse")({name: S.optional(S.String), arn: S.optional(S.String)}) {}
export class CreateDomainConfigurationRequest extends S.Class<CreateDomainConfigurationRequest>("CreateDomainConfigurationRequest")({domainConfigurationName: S.String, domainName: S.optional(S.String), serverCertificateArns: S.optional(ServerCertificateArns), validationCertificateArn: S.optional(S.String), authorizerConfig: S.optional(AuthorizerConfig), serviceType: S.optional(S.String), tags: S.optional(TagList), tlsConfig: S.optional(TlsConfig), serverCertificateConfig: S.optional(ServerCertificateConfig), authenticationType: S.optional(S.String), applicationProtocol: S.optional(S.String), clientCertificateConfig: S.optional(ClientCertificateConfig)}) {}
export class CreateDynamicThingGroupRequest extends S.Class<CreateDynamicThingGroupRequest>("CreateDynamicThingGroupRequest")({thingGroupName: S.String, thingGroupProperties: S.optional(ThingGroupProperties), indexName: S.optional(S.String), queryString: S.String, queryVersion: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateFleetMetricRequest extends S.Class<CreateFleetMetricRequest>("CreateFleetMetricRequest")({metricName: S.String, queryString: S.String, aggregationType: AggregationType, period: S.Number, aggregationField: S.String, description: S.optional(S.String), queryVersion: S.optional(S.String), indexName: S.optional(S.String), unit: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateJobTemplateRequest extends S.Class<CreateJobTemplateRequest>("CreateJobTemplateRequest")({jobTemplateId: S.String, jobArn: S.optional(S.String), documentSource: S.optional(S.String), document: S.optional(S.String), description: S.String, presignedUrlConfig: S.optional(PresignedUrlConfig), jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig), abortConfig: S.optional(AbortConfig), timeoutConfig: S.optional(TimeoutConfig), tags: S.optional(TagList), jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig), maintenanceWindows: S.optional(MaintenanceWindows), destinationPackageVersions: S.optional(DestinationPackageVersions)}) {}
export class CreatePackageRequest extends S.Class<CreatePackageRequest>("CreatePackageRequest")({packageName: S.String, description: S.optional(S.String), tags: S.optional(TagMap), clientToken: S.optional(S.String)}) {}
export class CreatePackageVersionRequest extends S.Class<CreatePackageVersionRequest>("CreatePackageVersionRequest")({packageName: S.String, versionName: S.String, description: S.optional(S.String), attributes: S.optional(ResourceAttributes), artifact: S.optional(PackageVersionArtifact), recipe: S.optional(S.String), tags: S.optional(TagMap), clientToken: S.optional(S.String)}) {}
export class CreatePolicyResponse extends S.Class<CreatePolicyResponse>("CreatePolicyResponse")({policyName: S.optional(S.String), policyArn: S.optional(S.String), policyDocument: S.optional(S.String), policyVersionId: S.optional(S.String)}) {}
export class CreatePolicyVersionResponse extends S.Class<CreatePolicyVersionResponse>("CreatePolicyVersionResponse")({policyArn: S.optional(S.String), policyDocument: S.optional(S.String), policyVersionId: S.optional(S.String), isDefaultVersion: S.optional(S.Boolean)}) {}
export class KeyPair extends S.Class<KeyPair>("KeyPair")({PublicKey: S.optional(S.String), PrivateKey: S.optional(S.String)}) {}
export class CreateProvisioningClaimResponse extends S.Class<CreateProvisioningClaimResponse>("CreateProvisioningClaimResponse")({certificateId: S.optional(S.String), certificatePem: S.optional(S.String), keyPair: S.optional(KeyPair), expiration: S.optional(S.Date)}) {}
export class CreateProvisioningTemplateRequest extends S.Class<CreateProvisioningTemplateRequest>("CreateProvisioningTemplateRequest")({templateName: S.String, description: S.optional(S.String), templateBody: S.String, enabled: S.optional(S.Boolean), provisioningRoleArn: S.String, preProvisioningHook: S.optional(ProvisioningHook), tags: S.optional(TagList), type: S.optional(S.String)}) {}
export class CreateProvisioningTemplateVersionResponse extends S.Class<CreateProvisioningTemplateVersionResponse>("CreateProvisioningTemplateVersionResponse")({templateArn: S.optional(S.String), templateName: S.optional(S.String), versionId: S.optional(S.Number), isDefaultVersion: S.optional(S.Boolean)}) {}
export class CreateRoleAliasResponse extends S.Class<CreateRoleAliasResponse>("CreateRoleAliasResponse")({roleAlias: S.optional(S.String), roleAliasArn: S.optional(S.String)}) {}
export class CreateScheduledAuditResponse extends S.Class<CreateScheduledAuditResponse>("CreateScheduledAuditResponse")({scheduledAuditArn: S.optional(S.String)}) {}
export class CreateStreamRequest extends S.Class<CreateStreamRequest>("CreateStreamRequest")({streamId: S.String, description: S.optional(S.String), files: StreamFiles, roleArn: S.String, tags: S.optional(TagList)}) {}
export class CreateThingGroupResponse extends S.Class<CreateThingGroupResponse>("CreateThingGroupResponse")({thingGroupName: S.optional(S.String), thingGroupArn: S.optional(S.String), thingGroupId: S.optional(S.String)}) {}
export class DeleteCommandResponse extends S.Class<DeleteCommandResponse>("DeleteCommandResponse")({statusCode: S.optional(S.Number)}) {}
export class DescribeAuditSuppressionResponse extends S.Class<DescribeAuditSuppressionResponse>("DescribeAuditSuppressionResponse")({checkName: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), expirationDate: S.optional(S.Date), suppressIndefinitely: S.optional(S.Boolean), description: S.optional(S.String)}) {}
export class DescribeAuthorizerResponse extends S.Class<DescribeAuthorizerResponse>("DescribeAuthorizerResponse")({authorizerDescription: S.optional(AuthorizerDescription)}) {}
export class DescribeCertificateProviderResponse extends S.Class<DescribeCertificateProviderResponse>("DescribeCertificateProviderResponse")({certificateProviderName: S.optional(S.String), certificateProviderArn: S.optional(S.String), lambdaFunctionArn: S.optional(S.String), accountDefaultForOperations: S.optional(CertificateProviderAccountDefaultForOperations), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeCustomMetricResponse extends S.Class<DescribeCustomMetricResponse>("DescribeCustomMetricResponse")({metricName: S.optional(S.String), metricArn: S.optional(S.String), metricType: S.optional(S.String), displayName: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeDefaultAuthorizerResponse extends S.Class<DescribeDefaultAuthorizerResponse>("DescribeDefaultAuthorizerResponse")({authorizerDescription: S.optional(AuthorizerDescription)}) {}
export class DescribeDimensionResponse extends S.Class<DescribeDimensionResponse>("DescribeDimensionResponse")({name: S.optional(S.String), arn: S.optional(S.String), type: S.optional(S.String), stringValues: S.optional(DimensionStringValues), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeEncryptionConfigurationResponse extends S.Class<DescribeEncryptionConfigurationResponse>("DescribeEncryptionConfigurationResponse")({encryptionType: S.optional(S.String), kmsKeyArn: S.optional(S.String), kmsAccessRoleArn: S.optional(S.String), configurationDetails: S.optional(ConfigurationDetails), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeEndpointResponse extends S.Class<DescribeEndpointResponse>("DescribeEndpointResponse")({endpointAddress: S.optional(S.String)}) {}
export class DescribeFleetMetricResponse extends S.Class<DescribeFleetMetricResponse>("DescribeFleetMetricResponse")({metricName: S.optional(S.String), queryString: S.optional(S.String), aggregationType: S.optional(AggregationType), period: S.optional(S.Number), aggregationField: S.optional(S.String), description: S.optional(S.String), queryVersion: S.optional(S.String), indexName: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), unit: S.optional(S.String), version: S.optional(S.Number), metricArn: S.optional(S.String)}) {}
export class DescribeIndexResponse extends S.Class<DescribeIndexResponse>("DescribeIndexResponse")({indexName: S.optional(S.String), indexStatus: S.optional(S.String), schema: S.optional(S.String)}) {}
export class DescribeJobTemplateResponse extends S.Class<DescribeJobTemplateResponse>("DescribeJobTemplateResponse")({jobTemplateArn: S.optional(S.String), jobTemplateId: S.optional(S.String), description: S.optional(S.String), documentSource: S.optional(S.String), document: S.optional(S.String), createdAt: S.optional(S.Date), presignedUrlConfig: S.optional(PresignedUrlConfig), jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig), abortConfig: S.optional(AbortConfig), timeoutConfig: S.optional(TimeoutConfig), jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig), maintenanceWindows: S.optional(MaintenanceWindows), destinationPackageVersions: S.optional(DestinationPackageVersions)}) {}
export class DescribeMitigationActionResponse extends S.Class<DescribeMitigationActionResponse>("DescribeMitigationActionResponse")({actionName: S.optional(S.String), actionType: S.optional(S.String), actionArn: S.optional(S.String), actionId: S.optional(S.String), roleArn: S.optional(S.String), actionParams: S.optional(MitigationActionParams), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeProvisioningTemplateResponse extends S.Class<DescribeProvisioningTemplateResponse>("DescribeProvisioningTemplateResponse")({templateArn: S.optional(S.String), templateName: S.optional(S.String), description: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), defaultVersionId: S.optional(S.Number), templateBody: S.optional(S.String), enabled: S.optional(S.Boolean), provisioningRoleArn: S.optional(S.String), preProvisioningHook: S.optional(ProvisioningHook), type: S.optional(S.String)}) {}
export class DescribeProvisioningTemplateVersionResponse extends S.Class<DescribeProvisioningTemplateVersionResponse>("DescribeProvisioningTemplateVersionResponse")({versionId: S.optional(S.Number), creationDate: S.optional(S.Date), templateBody: S.optional(S.String), isDefaultVersion: S.optional(S.Boolean)}) {}
export class DescribeScheduledAuditResponse extends S.Class<DescribeScheduledAuditResponse>("DescribeScheduledAuditResponse")({frequency: S.optional(S.String), dayOfMonth: S.optional(S.String), dayOfWeek: S.optional(S.String), targetCheckNames: S.optional(TargetAuditCheckNames), scheduledAuditName: S.optional(S.String), scheduledAuditArn: S.optional(S.String)}) {}
export class DescribeSecurityProfileResponse extends S.Class<DescribeSecurityProfileResponse>("DescribeSecurityProfileResponse")({securityProfileName: S.optional(S.String), securityProfileArn: S.optional(S.String), securityProfileDescription: S.optional(S.String), behaviors: S.optional(Behaviors), alertTargets: S.optional(AlertTargets), additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList), additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List), version: S.optional(S.Number), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), metricsExportConfig: S.optional(MetricsExportConfig)}) {}
export class DescribeThingResponse extends S.Class<DescribeThingResponse>("DescribeThingResponse")({defaultClientId: S.optional(S.String), thingName: S.optional(S.String), thingId: S.optional(S.String), thingArn: S.optional(S.String), thingTypeName: S.optional(S.String), attributes: S.optional(Attributes), version: S.optional(S.Number), billingGroupName: S.optional(S.String)}) {}
export class DescribeThingRegistrationTaskResponse extends S.Class<DescribeThingRegistrationTaskResponse>("DescribeThingRegistrationTaskResponse")({taskId: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), templateBody: S.optional(S.String), inputFileBucket: S.optional(S.String), inputFileKey: S.optional(S.String), roleArn: S.optional(S.String), status: S.optional(S.String), message: S.optional(S.String), successCount: S.optional(S.Number), failureCount: S.optional(S.Number), percentageProgress: S.optional(S.Number)}) {}
export class GetCardinalityResponse extends S.Class<GetCardinalityResponse>("GetCardinalityResponse")({cardinality: S.optional(S.Number)}) {}
export class CommandParameterValue extends S.Class<CommandParameterValue>("CommandParameterValue")({S: S.optional(S.String), B: S.optional(S.Boolean), I: S.optional(S.Number), L: S.optional(S.Number), D: S.optional(S.Number), BIN: S.optional(H.StreamBody()), UL: S.optional(S.String)}) {}
export const CommandParameterValueStringList = S.Array(S.String);
export class CommandParameterValueNumberRange extends S.Class<CommandParameterValueNumberRange>("CommandParameterValueNumberRange")({min: S.String, max: S.String}) {}
export class CommandParameterValueComparisonOperand extends S.Class<CommandParameterValueComparisonOperand>("CommandParameterValueComparisonOperand")({number: S.optional(S.String), numbers: S.optional(CommandParameterValueStringList), string: S.optional(S.String), strings: S.optional(CommandParameterValueStringList), numberRange: S.optional(CommandParameterValueNumberRange)}) {}
export class CommandParameterValueCondition extends S.Class<CommandParameterValueCondition>("CommandParameterValueCondition")({comparisonOperator: S.String, operand: CommandParameterValueComparisonOperand}) {}
export const CommandParameterValueConditionList = S.Array(CommandParameterValueCondition);
export class CommandParameter extends S.Class<CommandParameter>("CommandParameter")({name: S.String, type: S.optional(S.String), value: S.optional(CommandParameterValue), defaultValue: S.optional(CommandParameterValue), valueConditions: S.optional(CommandParameterValueConditionList), description: S.optional(S.String)}) {}
export const CommandParameterList = S.Array(CommandParameter);
export class AwsJsonSubstitutionCommandPreprocessorConfig extends S.Class<AwsJsonSubstitutionCommandPreprocessorConfig>("AwsJsonSubstitutionCommandPreprocessorConfig")({outputFormat: S.String}) {}
export class CommandPreprocessor extends S.Class<CommandPreprocessor>("CommandPreprocessor")({awsJsonSubstitution: S.optional(AwsJsonSubstitutionCommandPreprocessorConfig)}) {}
export class GetCommandResponse extends S.Class<GetCommandResponse>("GetCommandResponse")({commandId: S.optional(S.String), commandArn: S.optional(S.String), namespace: S.optional(S.String), displayName: S.optional(S.String), description: S.optional(S.String), mandatoryParameters: S.optional(CommandParameterList), payload: S.optional(CommandPayload), payloadTemplate: S.optional(S.String), preprocessor: S.optional(CommandPreprocessor), roleArn: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), deprecated: S.optional(S.Boolean), pendingDeletion: S.optional(S.Boolean)}) {}
export class GetJobDocumentResponse extends S.Class<GetJobDocumentResponse>("GetJobDocumentResponse")({document: S.optional(S.String)}) {}
export class GetPackageResponse extends S.Class<GetPackageResponse>("GetPackageResponse")({packageName: S.optional(S.String), packageArn: S.optional(S.String), description: S.optional(S.String), defaultVersionName: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class GetPackageConfigurationResponse extends S.Class<GetPackageConfigurationResponse>("GetPackageConfigurationResponse")({versionUpdateByJobsConfig: S.optional(VersionUpdateByJobsConfig)}) {}
export class Sbom extends S.Class<Sbom>("Sbom")({s3Location: S.optional(S3Location)}) {}
export class GetPackageVersionResponse extends S.Class<GetPackageVersionResponse>("GetPackageVersionResponse")({packageVersionArn: S.optional(S.String), packageName: S.optional(S.String), versionName: S.optional(S.String), description: S.optional(S.String), attributes: S.optional(ResourceAttributes), artifact: S.optional(PackageVersionArtifact), status: S.optional(S.String), errorReason: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), sbom: S.optional(Sbom), sbomValidationStatus: S.optional(S.String), recipe: S.optional(S.String)}) {}
export class GetPolicyResponse extends S.Class<GetPolicyResponse>("GetPolicyResponse")({policyName: S.optional(S.String), policyArn: S.optional(S.String), policyDocument: S.optional(S.String), defaultVersionId: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), generationId: S.optional(S.String)}) {}
export class GetPolicyVersionResponse extends S.Class<GetPolicyVersionResponse>("GetPolicyVersionResponse")({policyArn: S.optional(S.String), policyName: S.optional(S.String), policyDocument: S.optional(S.String), policyVersionId: S.optional(S.String), isDefaultVersion: S.optional(S.Boolean), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), generationId: S.optional(S.String)}) {}
export class GetThingConnectivityDataResponse extends S.Class<GetThingConnectivityDataResponse>("GetThingConnectivityDataResponse")({thingName: S.optional(S.String), connected: S.optional(S.Boolean), timestamp: S.optional(S.Date), disconnectReason: S.optional(S.String)}) {}
export class GetV2LoggingOptionsResponse extends S.Class<GetV2LoggingOptionsResponse>("GetV2LoggingOptionsResponse")({roleArn: S.optional(S.String), defaultLogLevel: S.optional(S.String), disableAllLogs: S.optional(S.Boolean), eventConfigurations: S.optional(LogEventConfigurations)}) {}
export class ListAuditFindingsResponse extends S.Class<ListAuditFindingsResponse>("ListAuditFindingsResponse")({findings: S.optional(AuditFindings), nextToken: S.optional(S.String)}) {}
export class Certificate extends S.Class<Certificate>("Certificate")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), status: S.optional(S.String), certificateMode: S.optional(S.String), creationDate: S.optional(S.Date)}) {}
export const Certificates = S.Array(Certificate);
export class ListCertificatesByCAResponse extends S.Class<ListCertificatesByCAResponse>("ListCertificatesByCAResponse")({certificates: S.optional(Certificates), nextMarker: S.optional(S.String)}) {}
export class ListCommandExecutionsRequest extends S.Class<ListCommandExecutionsRequest>("ListCommandExecutionsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), namespace: S.optional(S.String), status: S.optional(S.String), sortOrder: S.optional(S.String), startedTimeFilter: S.optional(TimeFilter), completedTimeFilter: S.optional(TimeFilter), targetArn: S.optional(S.String), commandArn: S.optional(S.String)}) {}
export class ListCustomMetricsResponse extends S.Class<ListCustomMetricsResponse>("ListCustomMetricsResponse")({metricNames: S.optional(MetricNames), nextToken: S.optional(S.String)}) {}
export class ListDetectMitigationActionsTasksResponse extends S.Class<ListDetectMitigationActionsTasksResponse>("ListDetectMitigationActionsTasksResponse")({tasks: S.optional(DetectMitigationActionsTaskSummaryList), nextToken: S.optional(S.String)}) {}
export class ListDimensionsResponse extends S.Class<ListDimensionsResponse>("ListDimensionsResponse")({dimensionNames: S.optional(DimensionNames), nextToken: S.optional(S.String)}) {}
export class ListIndicesResponse extends S.Class<ListIndicesResponse>("ListIndicesResponse")({indexNames: S.optional(IndexNamesList), nextToken: S.optional(S.String)}) {}
export class Policy extends S.Class<Policy>("Policy")({policyName: S.optional(S.String), policyArn: S.optional(S.String)}) {}
export const Policies = S.Array(Policy);
export class ListPoliciesResponse extends S.Class<ListPoliciesResponse>("ListPoliciesResponse")({policies: S.optional(Policies), nextMarker: S.optional(S.String)}) {}
export class ListPolicyPrincipalsResponse extends S.Class<ListPolicyPrincipalsResponse>("ListPolicyPrincipalsResponse")({principals: S.optional(Principals), nextMarker: S.optional(S.String)}) {}
export class ListPrincipalPoliciesResponse extends S.Class<ListPrincipalPoliciesResponse>("ListPrincipalPoliciesResponse")({policies: S.optional(Policies), nextMarker: S.optional(S.String)}) {}
export class ListPrincipalThingsResponse extends S.Class<ListPrincipalThingsResponse>("ListPrincipalThingsResponse")({things: S.optional(ThingNameList), nextToken: S.optional(S.String)}) {}
export class ListRoleAliasesResponse extends S.Class<ListRoleAliasesResponse>("ListRoleAliasesResponse")({roleAliases: S.optional(RoleAliases), nextMarker: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList), nextToken: S.optional(S.String)}) {}
export class ListTargetsForPolicyResponse extends S.Class<ListTargetsForPolicyResponse>("ListTargetsForPolicyResponse")({targets: S.optional(PolicyTargets), nextMarker: S.optional(S.String)}) {}
export class ListThingGroupsResponse extends S.Class<ListThingGroupsResponse>("ListThingGroupsResponse")({thingGroups: S.optional(ThingGroupNameAndArnList), nextToken: S.optional(S.String)}) {}
export class ListThingGroupsForThingResponse extends S.Class<ListThingGroupsForThingResponse>("ListThingGroupsForThingResponse")({thingGroups: S.optional(ThingGroupNameAndArnList), nextToken: S.optional(S.String)}) {}
export class ListThingPrincipalsResponse extends S.Class<ListThingPrincipalsResponse>("ListThingPrincipalsResponse")({principals: S.optional(Principals), nextToken: S.optional(S.String)}) {}
export class ListThingRegistrationTaskReportsResponse extends S.Class<ListThingRegistrationTaskReportsResponse>("ListThingRegistrationTaskReportsResponse")({resourceLinks: S.optional(S3FileUrlList), reportType: S.optional(S.String), nextToken: S.optional(S.String)}) {}
export class ListThingRegistrationTasksResponse extends S.Class<ListThingRegistrationTasksResponse>("ListThingRegistrationTasksResponse")({taskIds: S.optional(TaskIdList), nextToken: S.optional(S.String)}) {}
export class ListThingsInBillingGroupResponse extends S.Class<ListThingsInBillingGroupResponse>("ListThingsInBillingGroupResponse")({things: S.optional(ThingNameList), nextToken: S.optional(S.String)}) {}
export class ListThingsInThingGroupResponse extends S.Class<ListThingsInThingGroupResponse>("ListThingsInThingGroupResponse")({things: S.optional(ThingNameList), nextToken: S.optional(S.String)}) {}
export class RegisterCACertificateRequest extends S.Class<RegisterCACertificateRequest>("RegisterCACertificateRequest")({caCertificate: S.String, verificationCertificate: S.optional(S.String), setAsActive: S.optional(S.Boolean), allowAutoRegistration: S.optional(S.Boolean), registrationConfig: S.optional(RegistrationConfig), tags: S.optional(TagList), certificateMode: S.optional(S.String)}) {}
export class RegisterCertificateResponse extends S.Class<RegisterCertificateResponse>("RegisterCertificateResponse")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String)}) {}
export class RegisterCertificateWithoutCAResponse extends S.Class<RegisterCertificateWithoutCAResponse>("RegisterCertificateWithoutCAResponse")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String)}) {}
export class RegisterThingRequest extends S.Class<RegisterThingRequest>("RegisterThingRequest")({templateBody: S.String, parameters: S.optional(Parameters)}) {}
export class SetDefaultAuthorizerResponse extends S.Class<SetDefaultAuthorizerResponse>("SetDefaultAuthorizerResponse")({authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String)}) {}
export class SetLoggingOptionsRequest extends S.Class<SetLoggingOptionsRequest>("SetLoggingOptionsRequest")({loggingOptionsPayload: H.Body("undefined", LoggingOptionsPayload)}) {}
export class SetV2LoggingLevelRequest extends S.Class<SetV2LoggingLevelRequest>("SetV2LoggingLevelRequest")({logTarget: LogTarget, logLevel: S.String}) {}
export class SetV2LoggingOptionsRequest extends S.Class<SetV2LoggingOptionsRequest>("SetV2LoggingOptionsRequest")({roleArn: S.optional(S.String), defaultLogLevel: S.optional(S.String), disableAllLogs: S.optional(S.Boolean), eventConfigurations: S.optional(LogEventConfigurations)}) {}
export class StartDetectMitigationActionsTaskRequest extends S.Class<StartDetectMitigationActionsTaskRequest>("StartDetectMitigationActionsTaskRequest")({taskId: S.String, target: DetectMitigationActionsTaskTarget, actions: DetectMitigationActionsToExecuteList, violationEventOccurrenceRange: S.optional(ViolationEventOccurrenceRange), includeOnlyActiveViolations: S.optional(S.Boolean), includeSuppressedAlerts: S.optional(S.Boolean), clientRequestToken: S.String}) {}
export class StartOnDemandAuditTaskResponse extends S.Class<StartOnDemandAuditTaskResponse>("StartOnDemandAuditTaskResponse")({taskId: S.optional(S.String)}) {}
export class StartThingRegistrationTaskResponse extends S.Class<StartThingRegistrationTaskResponse>("StartThingRegistrationTaskResponse")({taskId: S.optional(S.String)}) {}
export class TestAuthorizationRequest extends S.Class<TestAuthorizationRequest>("TestAuthorizationRequest")({principal: S.optional(S.String), cognitoIdentityPoolId: S.optional(S.String), authInfos: AuthInfos, clientId: S.optional(S.String), policyNamesToAdd: S.optional(PolicyNames), policyNamesToSkip: S.optional(PolicyNames)}) {}
export class TransferCertificateResponse extends S.Class<TransferCertificateResponse>("TransferCertificateResponse")({transferredCertificateArn: S.optional(S.String)}) {}
export class UpdateAuthorizerResponse extends S.Class<UpdateAuthorizerResponse>("UpdateAuthorizerResponse")({authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String)}) {}
export class UpdateBillingGroupResponse extends S.Class<UpdateBillingGroupResponse>("UpdateBillingGroupResponse")({version: S.optional(S.Number)}) {}
export class UpdateCertificateProviderResponse extends S.Class<UpdateCertificateProviderResponse>("UpdateCertificateProviderResponse")({certificateProviderName: S.optional(S.String), certificateProviderArn: S.optional(S.String)}) {}
export class UpdateCommandResponse extends S.Class<UpdateCommandResponse>("UpdateCommandResponse")({commandId: S.optional(S.String), displayName: S.optional(S.String), description: S.optional(S.String), deprecated: S.optional(S.Boolean), lastUpdatedAt: S.optional(S.Date)}) {}
export class UpdateCustomMetricResponse extends S.Class<UpdateCustomMetricResponse>("UpdateCustomMetricResponse")({metricName: S.optional(S.String), metricArn: S.optional(S.String), metricType: S.optional(S.String), displayName: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class UpdateDimensionResponse extends S.Class<UpdateDimensionResponse>("UpdateDimensionResponse")({name: S.optional(S.String), arn: S.optional(S.String), type: S.optional(S.String), stringValues: S.optional(DimensionStringValues), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class UpdateDomainConfigurationResponse extends S.Class<UpdateDomainConfigurationResponse>("UpdateDomainConfigurationResponse")({domainConfigurationName: S.optional(S.String), domainConfigurationArn: S.optional(S.String)}) {}
export class UpdateDynamicThingGroupResponse extends S.Class<UpdateDynamicThingGroupResponse>("UpdateDynamicThingGroupResponse")({version: S.optional(S.Number)}) {}
export class UpdateMitigationActionResponse extends S.Class<UpdateMitigationActionResponse>("UpdateMitigationActionResponse")({actionArn: S.optional(S.String), actionId: S.optional(S.String)}) {}
export class UpdateRoleAliasResponse extends S.Class<UpdateRoleAliasResponse>("UpdateRoleAliasResponse")({roleAlias: S.optional(S.String), roleAliasArn: S.optional(S.String)}) {}
export class UpdateScheduledAuditResponse extends S.Class<UpdateScheduledAuditResponse>("UpdateScheduledAuditResponse")({scheduledAuditArn: S.optional(S.String)}) {}
export class UpdateSecurityProfileResponse extends S.Class<UpdateSecurityProfileResponse>("UpdateSecurityProfileResponse")({securityProfileName: S.optional(S.String), securityProfileArn: S.optional(S.String), securityProfileDescription: S.optional(S.String), behaviors: S.optional(Behaviors), alertTargets: S.optional(AlertTargets), additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList), additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List), version: S.optional(S.Number), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), metricsExportConfig: S.optional(MetricsExportConfig)}) {}
export class UpdateStreamResponse extends S.Class<UpdateStreamResponse>("UpdateStreamResponse")({streamId: S.optional(S.String), streamArn: S.optional(S.String), description: S.optional(S.String), streamVersion: S.optional(S.Number)}) {}
export class UpdateThingGroupResponse extends S.Class<UpdateThingGroupResponse>("UpdateThingGroupResponse")({version: S.optional(S.Number)}) {}
export class AwsJobAbortCriteria extends S.Class<AwsJobAbortCriteria>("AwsJobAbortCriteria")({failureType: S.String, action: S.String, thresholdPercentage: S.Number, minNumberOfExecutedThings: S.Number}) {}
export const AwsJobAbortCriteriaList = S.Array(AwsJobAbortCriteria);
export const AttributesMap = S.Record({key: S.String, value: S.String});
export class HttpUrlDestinationConfiguration extends S.Class<HttpUrlDestinationConfiguration>("HttpUrlDestinationConfiguration")({confirmationUrl: S.String}) {}
export class VpcDestinationConfiguration extends S.Class<VpcDestinationConfiguration>("VpcDestinationConfiguration")({subnetIds: SubnetIdList, securityGroups: S.optional(SecurityGroupList), vpcId: S.String, roleArn: S.String}) {}
export class TermsAggregation extends S.Class<TermsAggregation>("TermsAggregation")({maxBuckets: S.optional(S.Number)}) {}
export const ThingGroupNameList = S.Array(S.String);
export const AuditCheckToReasonCodeFilter = S.Record({key: S.String, value: ReasonForNonComplianceCodes});
export const HttpHeaders = S.Record({key: S.String, value: S.String});
export class AwsJobAbortConfig extends S.Class<AwsJobAbortConfig>("AwsJobAbortConfig")({abortCriteriaList: AwsJobAbortCriteriaList}) {}
export class TopicRuleDestinationConfiguration extends S.Class<TopicRuleDestinationConfiguration>("TopicRuleDestinationConfiguration")({httpUrlConfiguration: S.optional(HttpUrlDestinationConfiguration), vpcConfiguration: S.optional(VpcDestinationConfiguration)}) {}
export class TaskStatistics extends S.Class<TaskStatistics>("TaskStatistics")({totalChecks: S.optional(S.Number), inProgressChecks: S.optional(S.Number), waitingForDataCollectionChecks: S.optional(S.Number), compliantChecks: S.optional(S.Number), nonCompliantChecks: S.optional(S.Number), failedChecks: S.optional(S.Number), canceledChecks: S.optional(S.Number)}) {}
export class BillingGroupMetadata extends S.Class<BillingGroupMetadata>("BillingGroupMetadata")({creationDate: S.optional(S.Date)}) {}
export class ServerCertificateSummary extends S.Class<ServerCertificateSummary>("ServerCertificateSummary")({serverCertificateArn: S.optional(S.String), serverCertificateStatus: S.optional(S.String), serverCertificateStatusDetail: S.optional(S.String)}) {}
export const ServerCertificates = S.Array(ServerCertificateSummary);
export class DocumentParameter extends S.Class<DocumentParameter>("DocumentParameter")({key: S.optional(S.String), description: S.optional(S.String), regex: S.optional(S.String), example: S.optional(S.String), optional: S.optional(S.Boolean)}) {}
export const DocumentParameters = S.Array(DocumentParameter);
export class RoleAliasDescription extends S.Class<RoleAliasDescription>("RoleAliasDescription")({roleAlias: S.optional(S.String), roleAliasArn: S.optional(S.String), roleArn: S.optional(S.String), owner: S.optional(S.String), credentialDurationSeconds: S.optional(S.Number), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class StreamInfo extends S.Class<StreamInfo>("StreamInfo")({streamId: S.optional(S.String), streamArn: S.optional(S.String), streamVersion: S.optional(S.Number), description: S.optional(S.String), files: S.optional(StreamFiles), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), roleArn: S.optional(S.String)}) {}
export class ThingGroupMetadata extends S.Class<ThingGroupMetadata>("ThingGroupMetadata")({parentGroupName: S.optional(S.String), rootToParentThingGroups: S.optional(ThingGroupNameAndArnList), creationDate: S.optional(S.Date)}) {}
export class ThingTypeMetadata extends S.Class<ThingTypeMetadata>("ThingTypeMetadata")({deprecated: S.optional(S.Boolean), deprecationDate: S.optional(S.Date), creationDate: S.optional(S.Date)}) {}
export class BehaviorModelTrainingSummary extends S.Class<BehaviorModelTrainingSummary>("BehaviorModelTrainingSummary")({securityProfileName: S.optional(S.String), behaviorName: S.optional(S.String), trainingDataCollectionStartDate: S.optional(S.Date), modelStatus: S.optional(S.String), datapointsCollectionPercentage: S.optional(S.Number), lastModelRefreshDate: S.optional(S.Date)}) {}
export const BehaviorModelTrainingSummaries = S.Array(BehaviorModelTrainingSummary);
export class BucketsAggregationType extends S.Class<BucketsAggregationType>("BucketsAggregationType")({termsAggregation: S.optional(TermsAggregation)}) {}
export class StatusReason extends S.Class<StatusReason>("StatusReason")({reasonCode: S.String, reasonDescription: S.optional(S.String)}) {}
export const CommandExecutionParameterMap = S.Record({key: S.String, value: CommandParameterValue});
export class EffectivePolicy extends S.Class<EffectivePolicy>("EffectivePolicy")({policyName: S.optional(S.String), policyArn: S.optional(S.String), policyDocument: S.optional(S.String)}) {}
export const EffectivePolicies = S.Array(EffectivePolicy);
export class PercentPair extends S.Class<PercentPair>("PercentPair")({percent: S.optional(S.Number), value: S.optional(S.Number)}) {}
export const Percentiles = S.Array(PercentPair);
export class Statistics extends S.Class<Statistics>("Statistics")({count: S.optional(S.Number), average: S.optional(S.Number), sum: S.optional(S.Number), minimum: S.optional(S.Number), maximum: S.optional(S.Number), sumOfSquares: S.optional(S.Number), variance: S.optional(S.Number), stdDeviation: S.optional(S.Number)}) {}
export class TopicRule extends S.Class<TopicRule>("TopicRule")({ruleName: S.optional(S.String), sql: S.optional(S.String), description: S.optional(S.String), createdAt: S.optional(S.Date), actions: S.optional(ActionList), ruleDisabled: S.optional(S.Boolean), awsIotSqlVersion: S.optional(S.String), errorAction: S.optional(Action)}) {}
export class AuditMitigationActionExecutionMetadata extends S.Class<AuditMitigationActionExecutionMetadata>("AuditMitigationActionExecutionMetadata")({taskId: S.optional(S.String), findingId: S.optional(S.String), actionName: S.optional(S.String), actionId: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), errorCode: S.optional(S.String), message: S.optional(S.String)}) {}
export const AuditMitigationActionExecutionMetadataList = S.Array(AuditMitigationActionExecutionMetadata);
export class AuditMitigationActionsTaskMetadata extends S.Class<AuditMitigationActionsTaskMetadata>("AuditMitigationActionsTaskMetadata")({taskId: S.optional(S.String), startTime: S.optional(S.Date), taskStatus: S.optional(S.String)}) {}
export const AuditMitigationActionsTaskMetadataList = S.Array(AuditMitigationActionsTaskMetadata);
export class AuditSuppression extends S.Class<AuditSuppression>("AuditSuppression")({checkName: S.String, resourceIdentifier: ResourceIdentifier, expirationDate: S.optional(S.Date), suppressIndefinitely: S.optional(S.Boolean), description: S.optional(S.String)}) {}
export const AuditSuppressionList = S.Array(AuditSuppression);
export class AuditTaskMetadata extends S.Class<AuditTaskMetadata>("AuditTaskMetadata")({taskId: S.optional(S.String), taskStatus: S.optional(S.String), taskType: S.optional(S.String)}) {}
export const AuditTaskMetadataList = S.Array(AuditTaskMetadata);
export class AuthorizerSummary extends S.Class<AuthorizerSummary>("AuthorizerSummary")({authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String)}) {}
export const Authorizers = S.Array(AuthorizerSummary);
export const BillingGroupNameAndArnList = S.Array(GroupNameAndArn);
export class CACertificate extends S.Class<CACertificate>("CACertificate")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), status: S.optional(S.String), creationDate: S.optional(S.Date)}) {}
export const CACertificates = S.Array(CACertificate);
export class CertificateProviderSummary extends S.Class<CertificateProviderSummary>("CertificateProviderSummary")({certificateProviderName: S.optional(S.String), certificateProviderArn: S.optional(S.String)}) {}
export const CertificateProviders = S.Array(CertificateProviderSummary);
export class CommandSummary extends S.Class<CommandSummary>("CommandSummary")({commandArn: S.optional(S.String), commandId: S.optional(S.String), displayName: S.optional(S.String), deprecated: S.optional(S.Boolean), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), pendingDeletion: S.optional(S.Boolean)}) {}
export const CommandSummaryList = S.Array(CommandSummary);
export class DetectMitigationActionExecution extends S.Class<DetectMitigationActionExecution>("DetectMitigationActionExecution")({taskId: S.optional(S.String), violationId: S.optional(S.String), actionName: S.optional(S.String), thingName: S.optional(S.String), executionStartDate: S.optional(S.Date), executionEndDate: S.optional(S.Date), status: S.optional(S.String), errorCode: S.optional(S.String), message: S.optional(S.String)}) {}
export const DetectMitigationActionExecutionList = S.Array(DetectMitigationActionExecution);
export class DomainConfigurationSummary extends S.Class<DomainConfigurationSummary>("DomainConfigurationSummary")({domainConfigurationName: S.optional(S.String), domainConfigurationArn: S.optional(S.String), serviceType: S.optional(S.String)}) {}
export const DomainConfigurations = S.Array(DomainConfigurationSummary);
export class FleetMetricNameAndArn extends S.Class<FleetMetricNameAndArn>("FleetMetricNameAndArn")({metricName: S.optional(S.String), metricArn: S.optional(S.String)}) {}
export const FleetMetricNameAndArnList = S.Array(FleetMetricNameAndArn);
export class JobExecutionSummary extends S.Class<JobExecutionSummary>("JobExecutionSummary")({status: S.optional(S.String), queuedAt: S.optional(S.Date), startedAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), executionNumber: S.optional(S.Number), retryAttempt: S.optional(S.Number)}) {}
export class JobExecutionSummaryForThing extends S.Class<JobExecutionSummaryForThing>("JobExecutionSummaryForThing")({jobId: S.optional(S.String), jobExecutionSummary: S.optional(JobExecutionSummary)}) {}
export const JobExecutionSummaryForThingList = S.Array(JobExecutionSummaryForThing);
export class JobSummary extends S.Class<JobSummary>("JobSummary")({jobArn: S.optional(S.String), jobId: S.optional(S.String), thingGroupId: S.optional(S.String), targetSelection: S.optional(S.String), status: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), completedAt: S.optional(S.Date), isConcurrent: S.optional(S.Boolean)}) {}
export const JobSummaryList = S.Array(JobSummary);
export class JobTemplateSummary extends S.Class<JobTemplateSummary>("JobTemplateSummary")({jobTemplateArn: S.optional(S.String), jobTemplateId: S.optional(S.String), description: S.optional(S.String), createdAt: S.optional(S.Date)}) {}
export const JobTemplateSummaryList = S.Array(JobTemplateSummary);
export class ManagedJobTemplateSummary extends S.Class<ManagedJobTemplateSummary>("ManagedJobTemplateSummary")({templateArn: S.optional(S.String), templateName: S.optional(S.String), description: S.optional(S.String), environments: S.optional(Environments), templateVersion: S.optional(S.String)}) {}
export const ManagedJobTemplatesSummaryList = S.Array(ManagedJobTemplateSummary);
export class MetricDatum extends S.Class<MetricDatum>("MetricDatum")({timestamp: S.optional(S.Date), value: S.optional(MetricValue)}) {}
export const MetricDatumList = S.Array(MetricDatum);
export class MitigationActionIdentifier extends S.Class<MitigationActionIdentifier>("MitigationActionIdentifier")({actionName: S.optional(S.String), actionArn: S.optional(S.String), creationDate: S.optional(S.Date)}) {}
export const MitigationActionIdentifierList = S.Array(MitigationActionIdentifier);
export class OTAUpdateSummary extends S.Class<OTAUpdateSummary>("OTAUpdateSummary")({otaUpdateId: S.optional(S.String), otaUpdateArn: S.optional(S.String), creationDate: S.optional(S.Date)}) {}
export const OTAUpdatesSummary = S.Array(OTAUpdateSummary);
export class OutgoingCertificate extends S.Class<OutgoingCertificate>("OutgoingCertificate")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), transferredTo: S.optional(S.String), transferDate: S.optional(S.Date), transferMessage: S.optional(S.String), creationDate: S.optional(S.Date)}) {}
export const OutgoingCertificates = S.Array(OutgoingCertificate);
export class PackageSummary extends S.Class<PackageSummary>("PackageSummary")({packageName: S.optional(S.String), defaultVersionName: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export const PackageSummaryList = S.Array(PackageSummary);
export class PackageVersionSummary extends S.Class<PackageVersionSummary>("PackageVersionSummary")({packageName: S.optional(S.String), versionName: S.optional(S.String), status: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export const PackageVersionSummaryList = S.Array(PackageVersionSummary);
export class PolicyVersion extends S.Class<PolicyVersion>("PolicyVersion")({versionId: S.optional(S.String), isDefaultVersion: S.optional(S.Boolean), createDate: S.optional(S.Date)}) {}
export const PolicyVersions = S.Array(PolicyVersion);
export class PrincipalThingObject extends S.Class<PrincipalThingObject>("PrincipalThingObject")({thingName: S.String, thingPrincipalType: S.optional(S.String)}) {}
export const PrincipalThingObjects = S.Array(PrincipalThingObject);
export class ProvisioningTemplateSummary extends S.Class<ProvisioningTemplateSummary>("ProvisioningTemplateSummary")({templateArn: S.optional(S.String), templateName: S.optional(S.String), description: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), enabled: S.optional(S.Boolean), type: S.optional(S.String)}) {}
export const ProvisioningTemplateListing = S.Array(ProvisioningTemplateSummary);
export class ProvisioningTemplateVersionSummary extends S.Class<ProvisioningTemplateVersionSummary>("ProvisioningTemplateVersionSummary")({versionId: S.optional(S.Number), creationDate: S.optional(S.Date), isDefaultVersion: S.optional(S.Boolean)}) {}
export const ProvisioningTemplateVersionListing = S.Array(ProvisioningTemplateVersionSummary);
export class SbomValidationResultSummary extends S.Class<SbomValidationResultSummary>("SbomValidationResultSummary")({fileName: S.optional(S.String), validationResult: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const SbomValidationResultSummaryList = S.Array(SbomValidationResultSummary);
export class ScheduledAuditMetadata extends S.Class<ScheduledAuditMetadata>("ScheduledAuditMetadata")({scheduledAuditName: S.optional(S.String), scheduledAuditArn: S.optional(S.String), frequency: S.optional(S.String), dayOfMonth: S.optional(S.String), dayOfWeek: S.optional(S.String)}) {}
export const ScheduledAuditMetadataList = S.Array(ScheduledAuditMetadata);
export class SecurityProfileIdentifier extends S.Class<SecurityProfileIdentifier>("SecurityProfileIdentifier")({name: S.String, arn: S.String}) {}
export const SecurityProfileIdentifiers = S.Array(SecurityProfileIdentifier);
export class SecurityProfileTarget extends S.Class<SecurityProfileTarget>("SecurityProfileTarget")({arn: S.String}) {}
export class SecurityProfileTargetMapping extends S.Class<SecurityProfileTargetMapping>("SecurityProfileTargetMapping")({securityProfileIdentifier: S.optional(SecurityProfileIdentifier), target: S.optional(SecurityProfileTarget)}) {}
export const SecurityProfileTargetMappings = S.Array(SecurityProfileTargetMapping);
export class StreamSummary extends S.Class<StreamSummary>("StreamSummary")({streamId: S.optional(S.String), streamArn: S.optional(S.String), streamVersion: S.optional(S.Number), description: S.optional(S.String)}) {}
export const StreamsSummary = S.Array(StreamSummary);
export const SecurityProfileTargets = S.Array(SecurityProfileTarget);
export class ThingPrincipalObject extends S.Class<ThingPrincipalObject>("ThingPrincipalObject")({principal: S.String, thingPrincipalType: S.optional(S.String)}) {}
export const ThingPrincipalObjects = S.Array(ThingPrincipalObject);
export class ThingAttribute extends S.Class<ThingAttribute>("ThingAttribute")({thingName: S.optional(S.String), thingTypeName: S.optional(S.String), thingArn: S.optional(S.String), attributes: S.optional(Attributes), version: S.optional(S.Number)}) {}
export const ThingAttributeList = S.Array(ThingAttribute);
export class ThingTypeDefinition extends S.Class<ThingTypeDefinition>("ThingTypeDefinition")({thingTypeName: S.optional(S.String), thingTypeArn: S.optional(S.String), thingTypeProperties: S.optional(ThingTypeProperties), thingTypeMetadata: S.optional(ThingTypeMetadata)}) {}
export const ThingTypeList = S.Array(ThingTypeDefinition);
export class TopicRuleListItem extends S.Class<TopicRuleListItem>("TopicRuleListItem")({ruleArn: S.optional(S.String), ruleName: S.optional(S.String), topicPattern: S.optional(S.String), createdAt: S.optional(S.Date), ruleDisabled: S.optional(S.Boolean)}) {}
export const TopicRuleList = S.Array(TopicRuleListItem);
export class LogTargetConfiguration extends S.Class<LogTargetConfiguration>("LogTargetConfiguration")({logTarget: S.optional(LogTarget), logLevel: S.optional(S.String)}) {}
export const LogTargetConfigurations = S.Array(LogTargetConfiguration);
export class ViolationEventAdditionalInfo extends S.Class<ViolationEventAdditionalInfo>("ViolationEventAdditionalInfo")({confidenceLevel: S.optional(S.String)}) {}
export class ViolationEvent extends S.Class<ViolationEvent>("ViolationEvent")({violationId: S.optional(S.String), thingName: S.optional(S.String), securityProfileName: S.optional(S.String), behavior: S.optional(Behavior), metricValue: S.optional(MetricValue), violationEventAdditionalInfo: S.optional(ViolationEventAdditionalInfo), violationEventType: S.optional(S.String), verificationState: S.optional(S.String), verificationStateDescription: S.optional(S.String), violationEventTime: S.optional(S.Date)}) {}
export const ViolationEvents = S.Array(ViolationEvent);
export class ThingGroupDocument extends S.Class<ThingGroupDocument>("ThingGroupDocument")({thingGroupName: S.optional(S.String), thingGroupId: S.optional(S.String), thingGroupDescription: S.optional(S.String), attributes: S.optional(Attributes), parentGroupNames: S.optional(ThingGroupNameList)}) {}
export const ThingGroupDocumentList = S.Array(ThingGroupDocument);
export class AuditMitigationActionsTaskTarget extends S.Class<AuditMitigationActionsTaskTarget>("AuditMitigationActionsTaskTarget")({auditTaskId: S.optional(S.String), findingIds: S.optional(FindingIds), auditCheckToReasonCodeFilter: S.optional(AuditCheckToReasonCodeFilter)}) {}
export class HttpContext extends S.Class<HttpContext>("HttpContext")({headers: S.optional(HttpHeaders), queryString: S.optional(S.String)}) {}
export class ValidationError extends S.Class<ValidationError>("ValidationError")({errorMessage: S.optional(S.String)}) {}
export const ValidationErrors = S.Array(ValidationError);
export class AwsJobRateIncreaseCriteria extends S.Class<AwsJobRateIncreaseCriteria>("AwsJobRateIncreaseCriteria")({numberOfNotifiedThings: S.optional(S.Number), numberOfSucceededThings: S.optional(S.Number)}) {}
export class Stream extends S.Class<Stream>("Stream")({streamId: S.optional(S.String), fileId: S.optional(S.Number)}) {}
export const ProcessingTargetNameList = S.Array(S.String);
export class AssociateSbomWithPackageVersionRequest extends S.Class<AssociateSbomWithPackageVersionRequest>("AssociateSbomWithPackageVersionRequest")({packageName: S.String, versionName: S.String, sbom: Sbom, clientToken: S.optional(S.String)}) {}
export class CreateAuditSuppressionRequest extends S.Class<CreateAuditSuppressionRequest>("CreateAuditSuppressionRequest")({checkName: S.String, resourceIdentifier: ResourceIdentifier, expirationDate: S.optional(S.Date), suppressIndefinitely: S.optional(S.Boolean), description: S.optional(S.String), clientRequestToken: S.String}) {}
export class CreateAuditSuppressionResponse extends S.Class<CreateAuditSuppressionResponse>("CreateAuditSuppressionResponse")({}) {}
export class CreateAuthorizerResponse extends S.Class<CreateAuthorizerResponse>("CreateAuthorizerResponse")({authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String)}) {}
export class CreateBillingGroupResponse extends S.Class<CreateBillingGroupResponse>("CreateBillingGroupResponse")({billingGroupName: S.optional(S.String), billingGroupArn: S.optional(S.String), billingGroupId: S.optional(S.String)}) {}
export class CreateDomainConfigurationResponse extends S.Class<CreateDomainConfigurationResponse>("CreateDomainConfigurationResponse")({domainConfigurationName: S.optional(S.String), domainConfigurationArn: S.optional(S.String)}) {}
export class CreateDynamicThingGroupResponse extends S.Class<CreateDynamicThingGroupResponse>("CreateDynamicThingGroupResponse")({thingGroupName: S.optional(S.String), thingGroupArn: S.optional(S.String), thingGroupId: S.optional(S.String), indexName: S.optional(S.String), queryString: S.optional(S.String), queryVersion: S.optional(S.String)}) {}
export class CreateFleetMetricResponse extends S.Class<CreateFleetMetricResponse>("CreateFleetMetricResponse")({metricName: S.optional(S.String), metricArn: S.optional(S.String)}) {}
export class CreateJobTemplateResponse extends S.Class<CreateJobTemplateResponse>("CreateJobTemplateResponse")({jobTemplateArn: S.optional(S.String), jobTemplateId: S.optional(S.String)}) {}
export class CreateKeysAndCertificateResponse extends S.Class<CreateKeysAndCertificateResponse>("CreateKeysAndCertificateResponse")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), certificatePem: S.optional(S.String), keyPair: S.optional(KeyPair)}) {}
export class CreateMitigationActionRequest extends S.Class<CreateMitigationActionRequest>("CreateMitigationActionRequest")({actionName: S.String, roleArn: S.String, actionParams: MitigationActionParams, tags: S.optional(TagList)}) {}
export class CreatePackageResponse extends S.Class<CreatePackageResponse>("CreatePackageResponse")({packageName: S.optional(S.String), packageArn: S.optional(S.String), description: S.optional(S.String)}) {}
export class CreatePackageVersionResponse extends S.Class<CreatePackageVersionResponse>("CreatePackageVersionResponse")({packageVersionArn: S.optional(S.String), packageName: S.optional(S.String), versionName: S.optional(S.String), description: S.optional(S.String), attributes: S.optional(ResourceAttributes), status: S.optional(S.String), errorReason: S.optional(S.String)}) {}
export class CreateProvisioningTemplateResponse extends S.Class<CreateProvisioningTemplateResponse>("CreateProvisioningTemplateResponse")({templateArn: S.optional(S.String), templateName: S.optional(S.String), defaultVersionId: S.optional(S.Number)}) {}
export class CreateStreamResponse extends S.Class<CreateStreamResponse>("CreateStreamResponse")({streamId: S.optional(S.String), streamArn: S.optional(S.String), description: S.optional(S.String), streamVersion: S.optional(S.Number)}) {}
export class CreateThingRequest extends S.Class<CreateThingRequest>("CreateThingRequest")({thingName: S.String, thingTypeName: S.optional(S.String), attributePayload: S.optional(AttributePayload), billingGroupName: S.optional(S.String)}) {}
export class CreateTopicRuleDestinationRequest extends S.Class<CreateTopicRuleDestinationRequest>("CreateTopicRuleDestinationRequest")({destinationConfiguration: TopicRuleDestinationConfiguration}) {}
export class DescribeBillingGroupResponse extends S.Class<DescribeBillingGroupResponse>("DescribeBillingGroupResponse")({billingGroupName: S.optional(S.String), billingGroupId: S.optional(S.String), billingGroupArn: S.optional(S.String), version: S.optional(S.Number), billingGroupProperties: S.optional(BillingGroupProperties), billingGroupMetadata: S.optional(BillingGroupMetadata)}) {}
export class DescribeDomainConfigurationResponse extends S.Class<DescribeDomainConfigurationResponse>("DescribeDomainConfigurationResponse")({domainConfigurationName: S.optional(S.String), domainConfigurationArn: S.optional(S.String), domainName: S.optional(S.String), serverCertificates: S.optional(ServerCertificates), authorizerConfig: S.optional(AuthorizerConfig), domainConfigurationStatus: S.optional(S.String), serviceType: S.optional(S.String), domainType: S.optional(S.String), lastStatusChangeDate: S.optional(S.Date), tlsConfig: S.optional(TlsConfig), serverCertificateConfig: S.optional(ServerCertificateConfig), authenticationType: S.optional(S.String), applicationProtocol: S.optional(S.String), clientCertificateConfig: S.optional(ClientCertificateConfig)}) {}
export class DescribeEventConfigurationsResponse extends S.Class<DescribeEventConfigurationsResponse>("DescribeEventConfigurationsResponse")({eventConfigurations: S.optional(EventConfigurations), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date)}) {}
export class DescribeManagedJobTemplateResponse extends S.Class<DescribeManagedJobTemplateResponse>("DescribeManagedJobTemplateResponse")({templateName: S.optional(S.String), templateArn: S.optional(S.String), description: S.optional(S.String), templateVersion: S.optional(S.String), environments: S.optional(Environments), documentParameters: S.optional(DocumentParameters), document: S.optional(S.String)}) {}
export class DescribeRoleAliasResponse extends S.Class<DescribeRoleAliasResponse>("DescribeRoleAliasResponse")({roleAliasDescription: S.optional(RoleAliasDescription)}) {}
export class DescribeStreamResponse extends S.Class<DescribeStreamResponse>("DescribeStreamResponse")({streamInfo: S.optional(StreamInfo)}) {}
export class DescribeThingGroupResponse extends S.Class<DescribeThingGroupResponse>("DescribeThingGroupResponse")({thingGroupName: S.optional(S.String), thingGroupId: S.optional(S.String), thingGroupArn: S.optional(S.String), version: S.optional(S.Number), thingGroupProperties: S.optional(ThingGroupProperties), thingGroupMetadata: S.optional(ThingGroupMetadata), indexName: S.optional(S.String), queryString: S.optional(S.String), queryVersion: S.optional(S.String), status: S.optional(S.String)}) {}
export class DescribeThingTypeResponse extends S.Class<DescribeThingTypeResponse>("DescribeThingTypeResponse")({thingTypeName: S.optional(S.String), thingTypeId: S.optional(S.String), thingTypeArn: S.optional(S.String), thingTypeProperties: S.optional(ThingTypeProperties), thingTypeMetadata: S.optional(ThingTypeMetadata)}) {}
export class GetBehaviorModelTrainingSummariesResponse extends S.Class<GetBehaviorModelTrainingSummariesResponse>("GetBehaviorModelTrainingSummariesResponse")({summaries: S.optional(BehaviorModelTrainingSummaries), nextToken: S.optional(S.String)}) {}
export class GetBucketsAggregationRequest extends S.Class<GetBucketsAggregationRequest>("GetBucketsAggregationRequest")({indexName: S.optional(S.String), queryString: S.String, aggregationField: S.String, queryVersion: S.optional(S.String), bucketsAggregationType: BucketsAggregationType}) {}
export class GetEffectivePoliciesResponse extends S.Class<GetEffectivePoliciesResponse>("GetEffectivePoliciesResponse")({effectivePolicies: S.optional(EffectivePolicies)}) {}
export class GetPercentilesResponse extends S.Class<GetPercentilesResponse>("GetPercentilesResponse")({percentiles: S.optional(Percentiles)}) {}
export class GetStatisticsResponse extends S.Class<GetStatisticsResponse>("GetStatisticsResponse")({statistics: S.optional(Statistics)}) {}
export class GetTopicRuleResponse extends S.Class<GetTopicRuleResponse>("GetTopicRuleResponse")({ruleArn: S.optional(S.String), rule: S.optional(TopicRule)}) {}
export class ListAttachedPoliciesResponse extends S.Class<ListAttachedPoliciesResponse>("ListAttachedPoliciesResponse")({policies: S.optional(Policies), nextMarker: S.optional(S.String)}) {}
export class ListAuditMitigationActionsExecutionsResponse extends S.Class<ListAuditMitigationActionsExecutionsResponse>("ListAuditMitigationActionsExecutionsResponse")({actionsExecutions: S.optional(AuditMitigationActionExecutionMetadataList), nextToken: S.optional(S.String)}) {}
export class ListAuditMitigationActionsTasksResponse extends S.Class<ListAuditMitigationActionsTasksResponse>("ListAuditMitigationActionsTasksResponse")({tasks: S.optional(AuditMitigationActionsTaskMetadataList), nextToken: S.optional(S.String)}) {}
export class ListAuditSuppressionsResponse extends S.Class<ListAuditSuppressionsResponse>("ListAuditSuppressionsResponse")({suppressions: S.optional(AuditSuppressionList), nextToken: S.optional(S.String)}) {}
export class ListAuditTasksResponse extends S.Class<ListAuditTasksResponse>("ListAuditTasksResponse")({tasks: S.optional(AuditTaskMetadataList), nextToken: S.optional(S.String)}) {}
export class ListAuthorizersResponse extends S.Class<ListAuthorizersResponse>("ListAuthorizersResponse")({authorizers: S.optional(Authorizers), nextMarker: S.optional(S.String)}) {}
export class ListBillingGroupsResponse extends S.Class<ListBillingGroupsResponse>("ListBillingGroupsResponse")({billingGroups: S.optional(BillingGroupNameAndArnList), nextToken: S.optional(S.String)}) {}
export class ListCACertificatesResponse extends S.Class<ListCACertificatesResponse>("ListCACertificatesResponse")({certificates: S.optional(CACertificates), nextMarker: S.optional(S.String)}) {}
export class ListCertificateProvidersResponse extends S.Class<ListCertificateProvidersResponse>("ListCertificateProvidersResponse")({certificateProviders: S.optional(CertificateProviders), nextToken: S.optional(S.String)}) {}
export class ListCertificatesResponse extends S.Class<ListCertificatesResponse>("ListCertificatesResponse")({certificates: S.optional(Certificates), nextMarker: S.optional(S.String)}) {}
export class ListCommandsResponse extends S.Class<ListCommandsResponse>("ListCommandsResponse")({commands: S.optional(CommandSummaryList), nextToken: S.optional(S.String)}) {}
export class ListDetectMitigationActionsExecutionsResponse extends S.Class<ListDetectMitigationActionsExecutionsResponse>("ListDetectMitigationActionsExecutionsResponse")({actionsExecutions: S.optional(DetectMitigationActionExecutionList), nextToken: S.optional(S.String)}) {}
export class ListDomainConfigurationsResponse extends S.Class<ListDomainConfigurationsResponse>("ListDomainConfigurationsResponse")({domainConfigurations: S.optional(DomainConfigurations), nextMarker: S.optional(S.String)}) {}
export class ListFleetMetricsResponse extends S.Class<ListFleetMetricsResponse>("ListFleetMetricsResponse")({fleetMetrics: S.optional(FleetMetricNameAndArnList), nextToken: S.optional(S.String)}) {}
export class ListJobExecutionsForThingResponse extends S.Class<ListJobExecutionsForThingResponse>("ListJobExecutionsForThingResponse")({executionSummaries: S.optional(JobExecutionSummaryForThingList), nextToken: S.optional(S.String)}) {}
export class ListJobsResponse extends S.Class<ListJobsResponse>("ListJobsResponse")({jobs: S.optional(JobSummaryList), nextToken: S.optional(S.String)}) {}
export class ListJobTemplatesResponse extends S.Class<ListJobTemplatesResponse>("ListJobTemplatesResponse")({jobTemplates: S.optional(JobTemplateSummaryList), nextToken: S.optional(S.String)}) {}
export class ListManagedJobTemplatesResponse extends S.Class<ListManagedJobTemplatesResponse>("ListManagedJobTemplatesResponse")({managedJobTemplates: S.optional(ManagedJobTemplatesSummaryList), nextToken: S.optional(S.String)}) {}
export class ListMetricValuesResponse extends S.Class<ListMetricValuesResponse>("ListMetricValuesResponse")({metricDatumList: S.optional(MetricDatumList), nextToken: S.optional(S.String)}) {}
export class ListMitigationActionsResponse extends S.Class<ListMitigationActionsResponse>("ListMitigationActionsResponse")({actionIdentifiers: S.optional(MitigationActionIdentifierList), nextToken: S.optional(S.String)}) {}
export class ListOTAUpdatesResponse extends S.Class<ListOTAUpdatesResponse>("ListOTAUpdatesResponse")({otaUpdates: S.optional(OTAUpdatesSummary), nextToken: S.optional(S.String)}) {}
export class ListOutgoingCertificatesResponse extends S.Class<ListOutgoingCertificatesResponse>("ListOutgoingCertificatesResponse")({outgoingCertificates: S.optional(OutgoingCertificates), nextMarker: S.optional(S.String)}) {}
export class ListPackagesResponse extends S.Class<ListPackagesResponse>("ListPackagesResponse")({packageSummaries: S.optional(PackageSummaryList), nextToken: S.optional(S.String)}) {}
export class ListPackageVersionsResponse extends S.Class<ListPackageVersionsResponse>("ListPackageVersionsResponse")({packageVersionSummaries: S.optional(PackageVersionSummaryList), nextToken: S.optional(S.String)}) {}
export class ListPolicyVersionsResponse extends S.Class<ListPolicyVersionsResponse>("ListPolicyVersionsResponse")({policyVersions: S.optional(PolicyVersions)}) {}
export class ListPrincipalThingsV2Response extends S.Class<ListPrincipalThingsV2Response>("ListPrincipalThingsV2Response")({principalThingObjects: S.optional(PrincipalThingObjects), nextToken: S.optional(S.String)}) {}
export class ListProvisioningTemplatesResponse extends S.Class<ListProvisioningTemplatesResponse>("ListProvisioningTemplatesResponse")({templates: S.optional(ProvisioningTemplateListing), nextToken: S.optional(S.String)}) {}
export class ListProvisioningTemplateVersionsResponse extends S.Class<ListProvisioningTemplateVersionsResponse>("ListProvisioningTemplateVersionsResponse")({versions: S.optional(ProvisioningTemplateVersionListing), nextToken: S.optional(S.String)}) {}
export class ListSbomValidationResultsResponse extends S.Class<ListSbomValidationResultsResponse>("ListSbomValidationResultsResponse")({validationResultSummaries: S.optional(SbomValidationResultSummaryList), nextToken: S.optional(S.String)}) {}
export class ListScheduledAuditsResponse extends S.Class<ListScheduledAuditsResponse>("ListScheduledAuditsResponse")({scheduledAudits: S.optional(ScheduledAuditMetadataList), nextToken: S.optional(S.String)}) {}
export class ListSecurityProfilesResponse extends S.Class<ListSecurityProfilesResponse>("ListSecurityProfilesResponse")({securityProfileIdentifiers: S.optional(SecurityProfileIdentifiers), nextToken: S.optional(S.String)}) {}
export class ListSecurityProfilesForTargetResponse extends S.Class<ListSecurityProfilesForTargetResponse>("ListSecurityProfilesForTargetResponse")({securityProfileTargetMappings: S.optional(SecurityProfileTargetMappings), nextToken: S.optional(S.String)}) {}
export class ListStreamsResponse extends S.Class<ListStreamsResponse>("ListStreamsResponse")({streams: S.optional(StreamsSummary), nextToken: S.optional(S.String)}) {}
export class ListTargetsForSecurityProfileResponse extends S.Class<ListTargetsForSecurityProfileResponse>("ListTargetsForSecurityProfileResponse")({securityProfileTargets: S.optional(SecurityProfileTargets), nextToken: S.optional(S.String)}) {}
export class ListThingPrincipalsV2Response extends S.Class<ListThingPrincipalsV2Response>("ListThingPrincipalsV2Response")({thingPrincipalObjects: S.optional(ThingPrincipalObjects), nextToken: S.optional(S.String)}) {}
export class ListThingsResponse extends S.Class<ListThingsResponse>("ListThingsResponse")({things: S.optional(ThingAttributeList), nextToken: S.optional(S.String)}) {}
export class ListThingTypesResponse extends S.Class<ListThingTypesResponse>("ListThingTypesResponse")({thingTypes: S.optional(ThingTypeList), nextToken: S.optional(S.String)}) {}
export class ListTopicRulesResponse extends S.Class<ListTopicRulesResponse>("ListTopicRulesResponse")({rules: S.optional(TopicRuleList), nextToken: S.optional(S.String)}) {}
export class ListV2LoggingLevelsResponse extends S.Class<ListV2LoggingLevelsResponse>("ListV2LoggingLevelsResponse")({logTargetConfigurations: S.optional(LogTargetConfigurations), nextToken: S.optional(S.String)}) {}
export class ListViolationEventsResponse extends S.Class<ListViolationEventsResponse>("ListViolationEventsResponse")({violationEvents: S.optional(ViolationEvents), nextToken: S.optional(S.String)}) {}
export class RegisterCACertificateResponse extends S.Class<RegisterCACertificateResponse>("RegisterCACertificateResponse")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String)}) {}
export class StartAuditMitigationActionsTaskRequest extends S.Class<StartAuditMitigationActionsTaskRequest>("StartAuditMitigationActionsTaskRequest")({taskId: S.String, target: AuditMitigationActionsTaskTarget, auditCheckToActionsMapping: AuditCheckToActionsMapping, clientRequestToken: S.String}) {}
export class StartDetectMitigationActionsTaskResponse extends S.Class<StartDetectMitigationActionsTaskResponse>("StartDetectMitigationActionsTaskResponse")({taskId: S.optional(S.String)}) {}
export class TestInvokeAuthorizerRequest extends S.Class<TestInvokeAuthorizerRequest>("TestInvokeAuthorizerRequest")({authorizerName: S.String, token: S.optional(S.String), tokenSignature: S.optional(S.String), httpContext: S.optional(HttpContext), mqttContext: S.optional(MqttContext), tlsContext: S.optional(TlsContext)}) {}
export class ValidateSecurityProfileBehaviorsResponse extends S.Class<ValidateSecurityProfileBehaviorsResponse>("ValidateSecurityProfileBehaviorsResponse")({valid: S.optional(S.Boolean), validationErrors: S.optional(ValidationErrors)}) {}
export class AwsJobExponentialRolloutRate extends S.Class<AwsJobExponentialRolloutRate>("AwsJobExponentialRolloutRate")({baseRatePerMinute: S.Number, incrementFactor: S.Number, rateIncreaseCriteria: AwsJobRateIncreaseCriteria}) {}
export class FileLocation extends S.Class<FileLocation>("FileLocation")({stream: S.optional(Stream), s3Location: S.optional(S3Location)}) {}
export class TaskStatisticsForAuditCheck extends S.Class<TaskStatisticsForAuditCheck>("TaskStatisticsForAuditCheck")({totalFindingsCount: S.optional(S.Number), failedFindingsCount: S.optional(S.Number), succeededFindingsCount: S.optional(S.Number), skippedFindingsCount: S.optional(S.Number), canceledFindingsCount: S.optional(S.Number)}) {}
export class AuditCheckDetails extends S.Class<AuditCheckDetails>("AuditCheckDetails")({checkRunStatus: S.optional(S.String), checkCompliant: S.optional(S.Boolean), totalResourcesCount: S.optional(S.Number), nonCompliantResourcesCount: S.optional(S.Number), suppressedNonCompliantResourcesCount: S.optional(S.Number), errorCode: S.optional(S.String), message: S.optional(S.String)}) {}
export class CertificateValidity extends S.Class<CertificateValidity>("CertificateValidity")({notBefore: S.optional(S.Date), notAfter: S.optional(S.Date)}) {}
export class TransferData extends S.Class<TransferData>("TransferData")({transferMessage: S.optional(S.String), rejectReason: S.optional(S.String), transferDate: S.optional(S.Date), acceptDate: S.optional(S.Date), rejectDate: S.optional(S.Date)}) {}
export class JobProcessDetails extends S.Class<JobProcessDetails>("JobProcessDetails")({processingTargets: S.optional(ProcessingTargetNameList), numberOfCanceledThings: S.optional(S.Number), numberOfSucceededThings: S.optional(S.Number), numberOfFailedThings: S.optional(S.Number), numberOfRejectedThings: S.optional(S.Number), numberOfQueuedThings: S.optional(S.Number), numberOfInProgressThings: S.optional(S.Number), numberOfRemovedThings: S.optional(S.Number), numberOfTimedOutThings: S.optional(S.Number)}) {}
export class ScheduledJobRollout extends S.Class<ScheduledJobRollout>("ScheduledJobRollout")({startTime: S.optional(S.String)}) {}
export const ScheduledJobRolloutList = S.Array(ScheduledJobRollout);
export class JobExecutionStatusDetails extends S.Class<JobExecutionStatusDetails>("JobExecutionStatusDetails")({detailsMap: S.optional(DetailsMap)}) {}
export class CommandExecutionResult extends S.Class<CommandExecutionResult>("CommandExecutionResult")({S: S.optional(S.String), B: S.optional(S.Boolean), BIN: S.optional(H.StreamBody())}) {}
export class ErrorInfo extends S.Class<ErrorInfo>("ErrorInfo")({code: S.optional(S.String), message: S.optional(S.String)}) {}
export class HttpUrlDestinationProperties extends S.Class<HttpUrlDestinationProperties>("HttpUrlDestinationProperties")({confirmationUrl: S.optional(S.String)}) {}
export class VpcDestinationProperties extends S.Class<VpcDestinationProperties>("VpcDestinationProperties")({subnetIds: S.optional(SubnetIdList), securityGroups: S.optional(SecurityGroupList), vpcId: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class HttpUrlDestinationSummary extends S.Class<HttpUrlDestinationSummary>("HttpUrlDestinationSummary")({confirmationUrl: S.optional(S.String)}) {}
export class VpcDestinationSummary extends S.Class<VpcDestinationSummary>("VpcDestinationSummary")({subnetIds: S.optional(SubnetIdList), securityGroups: S.optional(SecurityGroupList), vpcId: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class ThingConnectivity extends S.Class<ThingConnectivity>("ThingConnectivity")({connected: S.optional(S.Boolean), timestamp: S.optional(S.Number), disconnectReason: S.optional(S.String)}) {}
export const MissingContextValues = S.Array(S.String);
export class SigningProfileParameter extends S.Class<SigningProfileParameter>("SigningProfileParameter")({certificateArn: S.optional(S.String), platform: S.optional(S.String), certificatePathOnDevice: S.optional(S.String)}) {}
export class CodeSigningSignature extends S.Class<CodeSigningSignature>("CodeSigningSignature")({inlineDocument: S.optional(H.StreamBody())}) {}
export class CodeSigningCertificateChain extends S.Class<CodeSigningCertificateChain>("CodeSigningCertificateChain")({certificateName: S.optional(S.String), inlineDocument: S.optional(S.String)}) {}
export class AwsJobExecutionsRolloutConfig extends S.Class<AwsJobExecutionsRolloutConfig>("AwsJobExecutionsRolloutConfig")({maximumPerMinute: S.optional(S.Number), exponentialRate: S.optional(AwsJobExponentialRolloutRate)}) {}
export const AuditMitigationActionsTaskStatistics = S.Record({key: S.String, value: TaskStatisticsForAuditCheck});
export const AuditDetails = S.Record({key: S.String, value: AuditCheckDetails});
export class CACertificateDescription extends S.Class<CACertificateDescription>("CACertificateDescription")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), status: S.optional(S.String), certificatePem: S.optional(S.String), ownedBy: S.optional(S.String), creationDate: S.optional(S.Date), autoRegistrationStatus: S.optional(S.String), lastModifiedDate: S.optional(S.Date), customerVersion: S.optional(S.Number), generationId: S.optional(S.String), validity: S.optional(CertificateValidity), certificateMode: S.optional(S.String)}) {}
export class CertificateDescription extends S.Class<CertificateDescription>("CertificateDescription")({certificateArn: S.optional(S.String), certificateId: S.optional(S.String), caCertificateId: S.optional(S.String), status: S.optional(S.String), certificatePem: S.optional(S.String), ownedBy: S.optional(S.String), previousOwnedBy: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), customerVersion: S.optional(S.Number), transferData: S.optional(TransferData), generationId: S.optional(S.String), validity: S.optional(CertificateValidity), certificateMode: S.optional(S.String)}) {}
export class Job extends S.Class<Job>("Job")({jobArn: S.optional(S.String), jobId: S.optional(S.String), targetSelection: S.optional(S.String), status: S.optional(S.String), forceCanceled: S.optional(S.Boolean), reasonCode: S.optional(S.String), comment: S.optional(S.String), targets: S.optional(JobTargets), description: S.optional(S.String), presignedUrlConfig: S.optional(PresignedUrlConfig), jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig), abortConfig: S.optional(AbortConfig), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), completedAt: S.optional(S.Date), jobProcessDetails: S.optional(JobProcessDetails), timeoutConfig: S.optional(TimeoutConfig), namespaceId: S.optional(S.String), jobTemplateArn: S.optional(S.String), jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig), documentParameters: S.optional(ParameterMap), isConcurrent: S.optional(S.Boolean), schedulingConfig: S.optional(SchedulingConfig), scheduledJobRollouts: S.optional(ScheduledJobRolloutList), destinationPackageVersions: S.optional(DestinationPackageVersions)}) {}
export class JobExecution extends S.Class<JobExecution>("JobExecution")({jobId: S.optional(S.String), status: S.optional(S.String), forceCanceled: S.optional(S.Boolean), statusDetails: S.optional(JobExecutionStatusDetails), thingArn: S.optional(S.String), queuedAt: S.optional(S.Date), startedAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), executionNumber: S.optional(S.Number), versionNumber: S.optional(S.Number), approximateSecondsBeforeTimedOut: S.optional(S.Number)}) {}
export const CommandExecutionResultMap = S.Record({key: S.String, value: CommandExecutionResult});
export class S3Destination extends S.Class<S3Destination>("S3Destination")({bucket: S.optional(S.String), prefix: S.optional(S.String)}) {}
export class Destination extends S.Class<Destination>("Destination")({s3Destination: S.optional(S3Destination)}) {}
export class StartSigningJobParameter extends S.Class<StartSigningJobParameter>("StartSigningJobParameter")({signingProfileParameter: S.optional(SigningProfileParameter), signingProfileName: S.optional(S.String), destination: S.optional(Destination)}) {}
export class CustomCodeSigning extends S.Class<CustomCodeSigning>("CustomCodeSigning")({signature: S.optional(CodeSigningSignature), certificateChain: S.optional(CodeSigningCertificateChain), hashAlgorithm: S.optional(S.String), signatureAlgorithm: S.optional(S.String)}) {}
export class CodeSigning extends S.Class<CodeSigning>("CodeSigning")({awsSignerJobId: S.optional(S.String), startSigningJobParameter: S.optional(StartSigningJobParameter), customCodeSigning: S.optional(CustomCodeSigning)}) {}
export class OTAUpdateFile extends S.Class<OTAUpdateFile>("OTAUpdateFile")({fileName: S.optional(S.String), fileType: S.optional(S.Number), fileVersion: S.optional(S.String), fileLocation: S.optional(FileLocation), codeSigning: S.optional(CodeSigning), attributes: S.optional(AttributesMap)}) {}
export const OTAUpdateFiles = S.Array(OTAUpdateFile);
export class OTAUpdateInfo extends S.Class<OTAUpdateInfo>("OTAUpdateInfo")({otaUpdateId: S.optional(S.String), otaUpdateArn: S.optional(S.String), creationDate: S.optional(S.Date), lastModifiedDate: S.optional(S.Date), description: S.optional(S.String), targets: S.optional(Targets), protocols: S.optional(Protocols), awsJobExecutionsRolloutConfig: S.optional(AwsJobExecutionsRolloutConfig), awsJobPresignedUrlConfig: S.optional(AwsJobPresignedUrlConfig), targetSelection: S.optional(S.String), otaUpdateFiles: S.optional(OTAUpdateFiles), otaUpdateStatus: S.optional(S.String), awsIotJobId: S.optional(S.String), awsIotJobArn: S.optional(S.String), errorInfo: S.optional(ErrorInfo), additionalParameters: S.optional(AdditionalParameterMap)}) {}
export class TopicRuleDestination extends S.Class<TopicRuleDestination>("TopicRuleDestination")({arn: S.optional(S.String), status: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), statusReason: S.optional(S.String), httpUrlProperties: S.optional(HttpUrlDestinationProperties), vpcProperties: S.optional(VpcDestinationProperties)}) {}
export class ActiveViolation extends S.Class<ActiveViolation>("ActiveViolation")({violationId: S.optional(S.String), thingName: S.optional(S.String), securityProfileName: S.optional(S.String), behavior: S.optional(Behavior), lastViolationValue: S.optional(MetricValue), violationEventAdditionalInfo: S.optional(ViolationEventAdditionalInfo), verificationState: S.optional(S.String), verificationStateDescription: S.optional(S.String), lastViolationTime: S.optional(S.Date), violationStartTime: S.optional(S.Date)}) {}
export const ActiveViolations = S.Array(ActiveViolation);
export class CommandExecutionSummary extends S.Class<CommandExecutionSummary>("CommandExecutionSummary")({commandArn: S.optional(S.String), executionId: S.optional(S.String), targetArn: S.optional(S.String), status: S.optional(S.String), createdAt: S.optional(S.Date), startedAt: S.optional(S.Date), completedAt: S.optional(S.Date)}) {}
export const CommandExecutionSummaryList = S.Array(CommandExecutionSummary);
export class JobExecutionSummaryForJob extends S.Class<JobExecutionSummaryForJob>("JobExecutionSummaryForJob")({thingArn: S.optional(S.String), jobExecutionSummary: S.optional(JobExecutionSummary)}) {}
export const JobExecutionSummaryForJobList = S.Array(JobExecutionSummaryForJob);
export class TopicRuleDestinationSummary extends S.Class<TopicRuleDestinationSummary>("TopicRuleDestinationSummary")({arn: S.optional(S.String), status: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), statusReason: S.optional(S.String), httpUrlSummary: S.optional(HttpUrlDestinationSummary), vpcDestinationSummary: S.optional(VpcDestinationSummary)}) {}
export const TopicRuleDestinationSummaries = S.Array(TopicRuleDestinationSummary);
export const ResourceArns = S.Record({key: S.String, value: S.String});
export class ThingDocument extends S.Class<ThingDocument>("ThingDocument")({thingName: S.optional(S.String), thingId: S.optional(S.String), thingTypeName: S.optional(S.String), thingGroupNames: S.optional(ThingGroupNameList), attributes: S.optional(Attributes), shadow: S.optional(S.String), deviceDefender: S.optional(S.String), connectivity: S.optional(ThingConnectivity)}) {}
export const ThingDocumentList = S.Array(ThingDocument);
export const PolicyDocuments = S.Array(S.String);
export class AssociateSbomWithPackageVersionResponse extends S.Class<AssociateSbomWithPackageVersionResponse>("AssociateSbomWithPackageVersionResponse")({packageName: S.optional(S.String), versionName: S.optional(S.String), sbom: S.optional(Sbom), sbomValidationStatus: S.optional(S.String)}) {}
export class CreateJobRequest extends S.Class<CreateJobRequest>("CreateJobRequest")({jobId: S.String, targets: JobTargets, documentSource: S.optional(S.String), document: S.optional(S.String), description: S.optional(S.String), presignedUrlConfig: S.optional(PresignedUrlConfig), targetSelection: S.optional(S.String), jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig), abortConfig: S.optional(AbortConfig), timeoutConfig: S.optional(TimeoutConfig), tags: S.optional(TagList), namespaceId: S.optional(S.String), jobTemplateArn: S.optional(S.String), jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig), documentParameters: S.optional(ParameterMap), schedulingConfig: S.optional(SchedulingConfig), destinationPackageVersions: S.optional(DestinationPackageVersions)}) {}
export class CreateMitigationActionResponse extends S.Class<CreateMitigationActionResponse>("CreateMitigationActionResponse")({actionArn: S.optional(S.String), actionId: S.optional(S.String)}) {}
export class CreateSecurityProfileRequest extends S.Class<CreateSecurityProfileRequest>("CreateSecurityProfileRequest")({securityProfileName: S.String, securityProfileDescription: S.optional(S.String), behaviors: S.optional(Behaviors), alertTargets: S.optional(AlertTargets), additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList), additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List), tags: S.optional(TagList), metricsExportConfig: S.optional(MetricsExportConfig)}) {}
export class CreateThingResponse extends S.Class<CreateThingResponse>("CreateThingResponse")({thingName: S.optional(S.String), thingArn: S.optional(S.String), thingId: S.optional(S.String)}) {}
export class CreateThingTypeRequest extends S.Class<CreateThingTypeRequest>("CreateThingTypeRequest")({thingTypeName: S.String, thingTypeProperties: S.optional(ThingTypeProperties), tags: S.optional(TagList)}) {}
export class CreateTopicRuleDestinationResponse extends S.Class<CreateTopicRuleDestinationResponse>("CreateTopicRuleDestinationResponse")({topicRuleDestination: S.optional(TopicRuleDestination)}) {}
export class DescribeAccountAuditConfigurationResponse extends S.Class<DescribeAccountAuditConfigurationResponse>("DescribeAccountAuditConfigurationResponse")({roleArn: S.optional(S.String), auditNotificationTargetConfigurations: S.optional(AuditNotificationTargetConfigurations), auditCheckConfigurations: S.optional(AuditCheckConfigurations)}) {}
export class DescribeAuditFindingResponse extends S.Class<DescribeAuditFindingResponse>("DescribeAuditFindingResponse")({finding: S.optional(AuditFinding)}) {}
export class DescribeAuditMitigationActionsTaskResponse extends S.Class<DescribeAuditMitigationActionsTaskResponse>("DescribeAuditMitigationActionsTaskResponse")({taskStatus: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), taskStatistics: S.optional(AuditMitigationActionsTaskStatistics), target: S.optional(AuditMitigationActionsTaskTarget), auditCheckToActionsMapping: S.optional(AuditCheckToActionsMapping), actionsDefinition: S.optional(MitigationActionList)}) {}
export class DescribeAuditTaskResponse extends S.Class<DescribeAuditTaskResponse>("DescribeAuditTaskResponse")({taskStatus: S.optional(S.String), taskType: S.optional(S.String), taskStartTime: S.optional(S.Date), taskStatistics: S.optional(TaskStatistics), scheduledAuditName: S.optional(S.String), auditDetails: S.optional(AuditDetails)}) {}
export class DescribeCACertificateResponse extends S.Class<DescribeCACertificateResponse>("DescribeCACertificateResponse")({certificateDescription: S.optional(CACertificateDescription), registrationConfig: S.optional(RegistrationConfig)}) {}
export class DescribeCertificateResponse extends S.Class<DescribeCertificateResponse>("DescribeCertificateResponse")({certificateDescription: S.optional(CertificateDescription)}) {}
export class DescribeDetectMitigationActionsTaskResponse extends S.Class<DescribeDetectMitigationActionsTaskResponse>("DescribeDetectMitigationActionsTaskResponse")({taskSummary: S.optional(DetectMitigationActionsTaskSummary)}) {}
export class DescribeJobResponse extends S.Class<DescribeJobResponse>("DescribeJobResponse")({documentSource: S.optional(S.String), job: S.optional(Job)}) {}
export class DescribeJobExecutionResponse extends S.Class<DescribeJobExecutionResponse>("DescribeJobExecutionResponse")({execution: S.optional(JobExecution)}) {}
export class GetCommandExecutionResponse extends S.Class<GetCommandExecutionResponse>("GetCommandExecutionResponse")({executionId: S.optional(S.String), commandArn: S.optional(S.String), targetArn: S.optional(S.String), status: S.optional(S.String), statusReason: S.optional(StatusReason), result: S.optional(CommandExecutionResultMap), parameters: S.optional(CommandExecutionParameterMap), executionTimeoutSeconds: S.optional(S.Number), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), startedAt: S.optional(S.Date), completedAt: S.optional(S.Date), timeToLive: S.optional(S.Date)}) {}
export class GetIndexingConfigurationResponse extends S.Class<GetIndexingConfigurationResponse>("GetIndexingConfigurationResponse")({thingIndexingConfiguration: S.optional(ThingIndexingConfiguration), thingGroupIndexingConfiguration: S.optional(ThingGroupIndexingConfiguration)}) {}
export class GetOTAUpdateResponse extends S.Class<GetOTAUpdateResponse>("GetOTAUpdateResponse")({otaUpdateInfo: S.optional(OTAUpdateInfo)}) {}
export class GetTopicRuleDestinationResponse extends S.Class<GetTopicRuleDestinationResponse>("GetTopicRuleDestinationResponse")({topicRuleDestination: S.optional(TopicRuleDestination)}) {}
export class ListActiveViolationsResponse extends S.Class<ListActiveViolationsResponse>("ListActiveViolationsResponse")({activeViolations: S.optional(ActiveViolations), nextToken: S.optional(S.String)}) {}
export class ListCommandExecutionsResponse extends S.Class<ListCommandExecutionsResponse>("ListCommandExecutionsResponse")({commandExecutions: S.optional(CommandExecutionSummaryList), nextToken: S.optional(S.String)}) {}
export class ListJobExecutionsForJobResponse extends S.Class<ListJobExecutionsForJobResponse>("ListJobExecutionsForJobResponse")({executionSummaries: S.optional(JobExecutionSummaryForJobList), nextToken: S.optional(S.String)}) {}
export class ListRelatedResourcesForAuditFindingResponse extends S.Class<ListRelatedResourcesForAuditFindingResponse>("ListRelatedResourcesForAuditFindingResponse")({relatedResources: S.optional(RelatedResources), nextToken: S.optional(S.String)}) {}
export class ListTopicRuleDestinationsResponse extends S.Class<ListTopicRuleDestinationsResponse>("ListTopicRuleDestinationsResponse")({destinationSummaries: S.optional(TopicRuleDestinationSummaries), nextToken: S.optional(S.String)}) {}
export class RegisterThingResponse extends S.Class<RegisterThingResponse>("RegisterThingResponse")({certificatePem: S.optional(S.String), resourceArns: S.optional(ResourceArns)}) {}
export class SearchIndexResponse extends S.Class<SearchIndexResponse>("SearchIndexResponse")({nextToken: S.optional(S.String), things: S.optional(ThingDocumentList), thingGroups: S.optional(ThingGroupDocumentList)}) {}
export class StartAuditMitigationActionsTaskResponse extends S.Class<StartAuditMitigationActionsTaskResponse>("StartAuditMitigationActionsTaskResponse")({taskId: S.optional(S.String)}) {}
export class TestInvokeAuthorizerResponse extends S.Class<TestInvokeAuthorizerResponse>("TestInvokeAuthorizerResponse")({isAuthenticated: S.optional(S.Boolean), principalId: S.optional(S.String), policyDocuments: S.optional(PolicyDocuments), refreshAfterInSeconds: S.optional(S.Number), disconnectAfterInSeconds: S.optional(S.Number)}) {}
export class Allowed extends S.Class<Allowed>("Allowed")({policies: S.optional(Policies)}) {}
export class Bucket extends S.Class<Bucket>("Bucket")({keyValue: S.optional(S.String), count: S.optional(S.Number)}) {}
export const Buckets = S.Array(Bucket);
export class ImplicitDeny extends S.Class<ImplicitDeny>("ImplicitDeny")({policies: S.optional(Policies)}) {}
export class ExplicitDeny extends S.Class<ExplicitDeny>("ExplicitDeny")({policies: S.optional(Policies)}) {}
export class CreateCommandRequest extends S.Class<CreateCommandRequest>("CreateCommandRequest")({commandId: S.String, namespace: S.optional(S.String), displayName: S.optional(S.String), description: S.optional(S.String), payload: S.optional(CommandPayload), payloadTemplate: S.optional(S.String), preprocessor: S.optional(CommandPreprocessor), mandatoryParameters: S.optional(CommandParameterList), roleArn: S.optional(S.String), tags: S.optional(TagList)}) {}
export class CreateJobResponse extends S.Class<CreateJobResponse>("CreateJobResponse")({jobArn: S.optional(S.String), jobId: S.optional(S.String), description: S.optional(S.String)}) {}
export class CreateSecurityProfileResponse extends S.Class<CreateSecurityProfileResponse>("CreateSecurityProfileResponse")({securityProfileName: S.optional(S.String), securityProfileArn: S.optional(S.String)}) {}
export class CreateThingTypeResponse extends S.Class<CreateThingTypeResponse>("CreateThingTypeResponse")({thingTypeName: S.optional(S.String), thingTypeArn: S.optional(S.String), thingTypeId: S.optional(S.String)}) {}
export class GetBucketsAggregationResponse extends S.Class<GetBucketsAggregationResponse>("GetBucketsAggregationResponse")({totalCount: S.optional(S.Number), buckets: S.optional(Buckets)}) {}
export class Denied extends S.Class<Denied>("Denied")({implicitDeny: S.optional(ImplicitDeny), explicitDeny: S.optional(ExplicitDeny)}) {}
export class AuthResult extends S.Class<AuthResult>("AuthResult")({authInfo: S.optional(AuthInfo), allowed: S.optional(Allowed), denied: S.optional(Denied), authDecision: S.optional(S.String), missingContextValues: S.optional(MissingContextValues)}) {}
export const AuthResults = S.Array(AuthResult);
export class CreateCommandResponse extends S.Class<CreateCommandResponse>("CreateCommandResponse")({commandId: S.optional(S.String), commandArn: S.optional(S.String)}) {}
export class CreateOTAUpdateRequest extends S.Class<CreateOTAUpdateRequest>("CreateOTAUpdateRequest")({otaUpdateId: S.String, description: S.optional(S.String), targets: Targets, protocols: S.optional(Protocols), targetSelection: S.optional(S.String), awsJobExecutionsRolloutConfig: S.optional(AwsJobExecutionsRolloutConfig), awsJobPresignedUrlConfig: S.optional(AwsJobPresignedUrlConfig), awsJobAbortConfig: S.optional(AwsJobAbortConfig), awsJobTimeoutConfig: S.optional(AwsJobTimeoutConfig), files: OTAUpdateFiles, roleArn: S.String, additionalParameters: S.optional(AdditionalParameterMap), tags: S.optional(TagList)}) {}
export class TestAuthorizationResponse extends S.Class<TestAuthorizationResponse>("TestAuthorizationResponse")({authResults: S.optional(AuthResults)}) {}
export class CreateOTAUpdateResponse extends S.Class<CreateOTAUpdateResponse>("CreateOTAUpdateResponse")({otaUpdateId: S.optional(S.String), awsIotJobId: S.optional(S.String), otaUpdateArn: S.optional(S.String), awsIotJobArn: S.optional(S.String), otaUpdateStatus: S.optional(S.String)}) {}
export class CreateTopicRuleRequest extends S.Class<CreateTopicRuleRequest>("CreateTopicRuleRequest")({ruleName: S.String, topicRulePayload: H.Body("undefined", TopicRulePayload), tags: S.optional(H.Header("x-amz-tagging"))}) {}

//# Errors
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class VersionConflictException extends S.TaggedError<VersionConflictException>()("VersionConflictException", {}) {};
export class CertificateStateException extends S.TaggedError<CertificateStateException>()("CertificateStateException", {}) {};
export class DeleteConflictException extends S.TaggedError<DeleteConflictException>()("DeleteConflictException", {}) {};
export class InvalidStateTransitionException extends S.TaggedError<InvalidStateTransitionException>()("InvalidStateTransitionException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictingResourceUpdateException extends S.TaggedError<ConflictingResourceUpdateException>()("ConflictingResourceUpdateException", {}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TransferAlreadyCompletedException extends S.TaggedError<TransferAlreadyCompletedException>()("TransferAlreadyCompletedException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class MalformedPolicyException extends S.TaggedError<MalformedPolicyException>()("MalformedPolicyException", {}) {};
export class VersionsLimitExceededException extends S.TaggedError<VersionsLimitExceededException>()("VersionsLimitExceededException", {}) {};
export class IndexNotReadyException extends S.TaggedError<IndexNotReadyException>()("IndexNotReadyException", {}) {};
export class SqlParseException extends S.TaggedError<SqlParseException>()("SqlParseException", {message: S.optional(S.String)}) {};
export class NotConfiguredException extends S.TaggedError<NotConfiguredException>()("NotConfiguredException", {}) {};
export class CertificateValidationException extends S.TaggedError<CertificateValidationException>()("CertificateValidationException", {}) {};
export class InvalidAggregationException extends S.TaggedError<InvalidAggregationException>()("InvalidAggregationException", {}) {};
export class InvalidQueryException extends S.TaggedError<InvalidQueryException>()("InvalidQueryException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class CertificateConflictException extends S.TaggedError<CertificateConflictException>()("CertificateConflictException", {message: S.optional(S.String)}) {};
export class TransferConflictException extends S.TaggedError<TransferConflictException>()("TransferConflictException", {message: S.optional(S.String)}) {};
export class RegistrationCodeValidationException extends S.TaggedError<RegistrationCodeValidationException>()("RegistrationCodeValidationException", {message: S.optional(S.String)}) {};
export class TaskAlreadyExistsException extends S.TaggedError<TaskAlreadyExistsException>()("TaskAlreadyExistsException", {}) {};
export class ResourceRegistrationFailureException extends S.TaggedError<ResourceRegistrationFailureException>()("ResourceRegistrationFailureException", {message: S.optional(S.String)}) {};
export class InvalidResponseException extends S.TaggedError<InvalidResponseException>()("InvalidResponseException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Adds a thing to a thing group.
 * 
 * 
 * Requires permission to access the AddThingToThingGroup action.
 */export const addThingToThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/addThingToThingGroup", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AddThingToThingGroup" }, AddThingToThingGroupRequest, AddThingToThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a mitigation action task that is in progress. If the task
 * is not
 * in progress, an InvalidRequestException occurs.
 * 
 * 
 * Requires permission to access the CancelAuditMitigationActionsTask action.
 */export const cancelAuditMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/mitigationactions/tasks/{taskId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelAuditMitigationActionsTask" }, CancelAuditMitigationActionsTaskRequest, CancelAuditMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.
 * 
 * 
 * Requires permission to access the CancelAuditTask action.
 */export const cancelAuditTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/tasks/{taskId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelAuditTask" }, CancelAuditTaskRequest, CancelAuditTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a Device Defender ML Detect mitigation action.
 * 
 * 
 * 
 * Requires permission to access the CancelDetectMitigationActionsTask action.
 */export const cancelDetectMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/detect/mitigationactions/tasks/{taskId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelDetectMitigationActionsTask" }, CancelDetectMitigationActionsTaskRequest, CancelDetectMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Clears the default authorizer.
 * 
 * 
 * Requires permission to access the ClearDefaultAuthorizer action.
 */export const clearDefaultAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/default-authorizer", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ClearDefaultAuthorizer" }, ClearDefaultAuthorizerRequest, ClearDefaultAuthorizerResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores the default settings for Device Defender audits for this account. Any
 * configuration data you entered is deleted and all audit checks are reset to
 * disabled.
 * 
 * 
 * Requires permission to access the DeleteAccountAuditConfiguration action.
 */export const deleteAccountAuditConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/configuration", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteAccountAuditConfiguration" }, DeleteAccountAuditConfigurationRequest, DeleteAccountAuditConfigurationResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Device Defender audit suppression.
 * 
 * 
 * 
 * Requires permission to access the DeleteAuditSuppression action.
 */export const deleteAuditSuppression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/suppressions/delete", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteAuditSuppression" }, DeleteAuditSuppressionRequest, DeleteAuditSuppressionResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the billing group.
 * 
 * 
 * Requires permission to access the DeleteBillingGroup action.
 */export const deleteBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/{billingGroupName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteBillingGroup" }, DeleteBillingGroupRequest, DeleteBillingGroupResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified certificate.
 * 
 * 
 * A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
 * its status is set to ACTIVE. To delete a certificate, first use the DetachPolicy action to detach all policies. Next, use the UpdateCertificate action to set the certificate to the INACTIVE
 * status.
 * 
 * 
 * Requires permission to access the DeleteCertificate action.
 */export const deleteCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates/{certificateId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCertificate" }, DeleteCertificateRequest, S.Struct({}), [CertificateStateException, DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a certificate provider.
 * 
 * 
 * Requires permission to access the DeleteCertificateProvider action.
 * 
 * 
 * 
 * If you delete the certificate provider resource, the behavior of
 * `CreateCertificateFromCsr` will resume, and IoT will create
 * certificates signed by IoT from a certificate signing request (CSR).
 */export const deleteCertificateProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate-providers/{certificateProviderName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCertificateProvider" }, DeleteCertificateProviderRequest, DeleteCertificateProviderResponse, [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Device Defender detect custom metric.
 * 
 * 
 * 
 * Requires permission to access the DeleteCustomMetric action.
 * 
 * 
 * 
 * 
 * Before you can delete a custom metric, you must first remove the custom metric from all
 * security profiles it's a part of.
 * The
 * security
 * profile associated with the custom metric can be found using the ListSecurityProfiles
 * API with `metricName` set to your custom metric name.
 */export const deleteCustomMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/custom-metric/{metricName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCustomMetric" }, DeleteCustomMetricRequest, DeleteCustomMetricResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified dimension from your Amazon Web Services accounts.
 * 
 * 
 * Requires permission to access the DeleteDimension action.
 */export const deleteDimension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dimensions/{name}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteDimension" }, DeleteDimensionRequest, DeleteDimensionResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified domain configuration.
 * 
 * 
 * Requires permission to access the DeleteDomainConfiguration action.
 */export const deleteDomainConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/domainConfigurations/{domainConfigurationName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteDomainConfiguration" }, DeleteDomainConfigurationRequest, DeleteDomainConfigurationResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a dynamic thing group.
 * 
 * 
 * Requires permission to access the DeleteDynamicThingGroup action.
 */export const deleteDynamicThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dynamic-thing-groups/{thingGroupName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteDynamicThingGroup" }, DeleteDynamicThingGroupRequest, DeleteDynamicThingGroupResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified fleet metric.
 * Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.
 * 
 * 
 * Requires permission to access the DeleteFleetMetric action.
 */export const deleteFleetMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/fleet-metric/{metricName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteFleetMetric" }, DeleteFleetMetricRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a job execution.
 * 
 * 
 * Requires permission to access the DeleteJobExecution action.
 */export const deleteJobExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteJobExecution" }, DeleteJobExecutionRequest, S.Struct({}), [InvalidRequestException, InvalidStateTransitionException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified job template.
 */export const deleteJobTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/job-templates/{jobTemplateId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteJobTemplate" }, DeleteJobTemplateRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a defined mitigation action from your Amazon Web Services accounts.
 * 
 * 
 * Requires permission to access the DeleteMitigationAction action.
 */export const deleteMitigationAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/mitigationactions/actions/{actionName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteMitigationAction" }, DeleteMitigationActionRequest, DeleteMitigationActionResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an OTA update.
 * 
 * 
 * Requires permission to access the DeleteOTAUpdate action.
 */export const deleteOTAUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/otaUpdates/{otaUpdateId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteOTAUpdate" }, DeleteOTAUpdateRequest, DeleteOTAUpdateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified policy.
 * 
 * 
 * A policy cannot be deleted if it has non-default versions or it is attached to any
 * certificate.
 * 
 * 
 * To delete a policy, use the DeletePolicyVersion action to delete all non-default
 * versions of the policy; use the DetachPolicy action to detach the policy from any
 * certificate; and then use the DeletePolicy action to delete the policy.
 * 
 * 
 * When a policy is deleted using DeletePolicy, its default version is deleted with
 * it.
 * 
 * 
 * 
 * 
 * Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 * a policy is detached before it's ready to be deleted.
 * 
 * 
 * 
 * 
 * Requires permission to access the DeletePolicy action.
 */export const deletePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeletePolicy" }, DeletePolicyRequest, S.Struct({}), [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified version of the specified policy. You cannot delete the default
 * version of a policy using this action. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default
 * version, use ListPolicyVersions.
 * 
 * 
 * Requires permission to access the DeletePolicyVersion action.
 */export const deletePolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}/version/{policyVersionId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeletePolicyVersion" }, DeletePolicyVersionRequest, S.Struct({}), [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a provisioning template.
 * 
 * 
 * Requires permission to access the DeleteProvisioningTemplate action.
 */export const deleteProvisioningTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteProvisioningTemplate" }, DeleteProvisioningTemplateRequest, DeleteProvisioningTemplateResponse, [ConflictingResourceUpdateException, DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a provisioning template version.
 * 
 * 
 * Requires permission to access the DeleteProvisioningTemplateVersion action.
 */export const deleteProvisioningTemplateVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}/versions/{versionId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteProvisioningTemplateVersion" }, DeleteProvisioningTemplateVersionRequest, DeleteProvisioningTemplateVersionResponse, [ConflictingResourceUpdateException, DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a CA certificate registration code.
 * 
 * 
 * Requires permission to access the DeleteRegistrationCode action.
 */export const deleteRegistrationCode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/registrationcode", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteRegistrationCode" }, DeleteRegistrationCodeRequest, DeleteRegistrationCodeResponse, [InternalFailureException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a role alias
 * 
 * 
 * Requires permission to access the DeleteRoleAlias action.
 */export const deleteRoleAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/role-aliases/{roleAlias}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteRoleAlias" }, DeleteRoleAliasRequest, DeleteRoleAliasResponse, [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a scheduled audit.
 * 
 * 
 * Requires permission to access the DeleteScheduledAudit action.
 */export const deleteScheduledAudit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/scheduledaudits/{scheduledAuditName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteScheduledAudit" }, DeleteScheduledAuditRequest, DeleteScheduledAuditResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Device Defender security profile.
 * 
 * 
 * Requires permission to access the DeleteSecurityProfile action.
 */export const deleteSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteSecurityProfile" }, DeleteSecurityProfileRequest, DeleteSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a stream.
 * 
 * 
 * Requires permission to access the DeleteStream action.
 */export const deleteStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/streams/{streamId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteStream" }, DeleteStreamRequest, DeleteStreamResponse, [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified thing. Returns successfully with no error if the deletion is
 * successful or you specify a thing that doesn't exist.
 * 
 * 
 * Requires permission to access the DeleteThing action.
 */export const deleteThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteThing" }, DeleteThingRequest, DeleteThingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a thing group.
 * 
 * 
 * Requires permission to access the DeleteThingGroup action.
 */export const deleteThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/{thingGroupName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteThingGroup" }, DeleteThingGroupRequest, DeleteThingGroupResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified thing type. You cannot delete a thing type if it has things
 * associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and
 * finally use DeleteThingType to delete the thing type.
 * 
 * 
 * Requires permission to access the DeleteThingType action.
 */export const deleteThingType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types/{thingTypeName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteThingType" }, DeleteThingTypeRequest, DeleteThingTypeResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a topic rule destination.
 * 
 * 
 * Requires permission to access the DeleteTopicRuleDestination action.
 */export const deleteTopicRuleDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/destinations/{arn+}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteTopicRuleDestination" }, DeleteTopicRuleDestinationRequest, DeleteTopicRuleDestinationResponse, [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a logging level.
 * 
 * 
 * Requires permission to access the DeleteV2LoggingLevel action.
 */export const deleteV2LoggingLevel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/v2LoggingLevel", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteV2LoggingLevel" }, DeleteV2LoggingLevelRequest, S.Struct({}), [InternalException, InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deprecates a thing type. You can not associate new things with deprecated thing
 * type.
 * 
 * 
 * Requires permission to access the DeprecateThingType action.
 */export const deprecateThingType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types/{thingTypeName}/deprecate", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeprecateThingType" }, DeprecateThingTypeRequest, DeprecateThingTypeResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detaches a policy from the specified target.
 * 
 * 
 * 
 * 
 * Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 * a policy is detached before it's ready to be deleted.
 * 
 * 
 * 
 * 
 * Requires permission to access the DetachPolicy action.
 */export const detachPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/target-policies/{policyName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DetachPolicy" }, DetachPolicyRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, LimitExceededException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified policy from the specified certificate.
 * 
 * 
 * 
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use DetachPolicy instead.
 * 
 * 
 * Requires permission to access the DetachPrincipalPolicy action.
 */export const detachPrincipalPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/principal-policies/{policyName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DetachPrincipalPolicy" }, DetachPrincipalPolicyRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a Device Defender security profile from a thing group or from this account.
 * 
 * 
 * Requires permission to access the DetachSecurityProfile action.
 */export const detachSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}/targets", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DetachSecurityProfile" }, DetachSecurityProfileRequest, DetachSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detaches the specified principal from the specified thing. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 * 
 * 
 * 
 * 
 * This call is asynchronous. It might take several seconds for the detachment to
 * propagate.
 * 
 * 
 * 
 * 
 * Requires permission to access the DetachThingPrincipal action.
 */export const detachThingPrincipal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/principals", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DetachThingPrincipal" }, DetachThingPrincipalRequest, DetachThingPrincipalResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the rule.
 * 
 * 
 * Requires permission to access the DisableTopicRule action.
 */export const disableTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}/disable", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DisableTopicRule" }, DisableTopicRuleRequest, S.Struct({}), [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the selected software bill of materials (SBOM) from a specific software package version.
 * 
 * 
 * Requires permission to access the DisassociateSbomWithPackageVersion action.
 */export const disassociateSbomFromPackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}/sbom", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DisassociateSbomFromPackageVersion" }, DisassociateSbomFromPackageVersionRequest, DisassociateSbomFromPackageVersionResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the rule.
 * 
 * 
 * Requires permission to access the EnableTopicRule action.
 */export const enableTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}/enable", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.EnableTopicRule" }, EnableTopicRuleRequest, S.Struct({}), [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the logging options.
 * 
 * 
 * NOTE: use of this command is not recommended. Use `GetV2LoggingOptions`
 * instead.
 * 
 * 
 * Requires permission to access the GetLoggingOptions action.
 */export const getLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/loggingOptions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetLoggingOptions" }, GetLoggingOptionsRequest, GetLoggingOptionsResponse, [InternalException, InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a registration code used to register a CA certificate with IoT.
 * 
 * 
 * IoT will create a registration code as part of this API call if the registration
 * code doesn't exist or has been deleted. If you already have a registration code, this API
 * call will return the same registration code.
 * 
 * 
 * Requires permission to access the GetRegistrationCode action.
 */export const getRegistrationCode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/registrationcode", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetRegistrationCode" }, GetRegistrationCodeRequest, GetRegistrationCodeResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Set a verification state and provide a description of that verification state on a violation (detect alarm).
 */export const putVerificationStateOnViolation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/violations/verification-state/{violationId}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.PutVerificationStateOnViolation" }, PutVerificationStateOnViolationRequest, PutVerificationStateOnViolationResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects a pending certificate transfer. After IoT rejects a certificate transfer,
 * the certificate status changes from **PENDING_TRANSFER** to
 * **INACTIVE**.
 * 
 * 
 * To check for pending certificate transfers, call ListCertificates
 * to enumerate your certificates.
 * 
 * 
 * This operation can only be called by the transfer destination. After it is called,
 * the certificate will be returned to the source's account in the INACTIVE state.
 * 
 * 
 * Requires permission to access the RejectCertificateTransfer action.
 */export const rejectCertificateTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/reject-certificate-transfer/{certificateId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RejectCertificateTransfer" }, RejectCertificateTransferRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, TransferAlreadyCompletedException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the given thing from the billing group.
 * 
 * 
 * Requires permission to access the RemoveThingFromBillingGroup action.
 * 
 * 
 * 
 * 
 * This call is asynchronous. It might take several seconds for the detachment to propagate.
 */export const removeThingFromBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/removeThingFromBillingGroup", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RemoveThingFromBillingGroup" }, RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove the specified thing from the specified group.
 * 
 * 
 * You must specify either a `thingGroupArn` or a
 * `thingGroupName` to identify the thing group and
 * either a `thingArn` or a `thingName` to
 * identify the thing to remove from the thing group.
 * 
 * 
 * 
 * Requires permission to access the RemoveThingFromThingGroup action.
 */export const removeThingFromThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/removeThingFromThingGroup", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RemoveThingFromThingGroup" }, RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the specified version of the specified policy as the policy's default
 * (operative) version. This action affects all certificates to which the policy is attached.
 * To list the principals the policy is attached to, use the ListPrincipalPolicies
 * action.
 * 
 * 
 * Requires permission to access the SetDefaultPolicyVersion action.
 */export const setDefaultPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}/version/{policyVersionId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SetDefaultPolicyVersion" }, SetDefaultPolicyVersionRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a bulk thing provisioning task.
 * 
 * 
 * Requires permission to access the StopThingRegistrationTask action.
 */export const stopThingRegistrationTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-registration-tasks/{taskId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.StopThingRegistrationTask" }, StopThingRegistrationTaskRequest, StopThingRegistrationTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata which can be
 * used to manage a resource.
 * 
 * 
 * Requires permission to access the TagResource action.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/tags", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the given tags (metadata) from the resource.
 * 
 * 
 * Requires permission to access the UntagResource action.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/untag", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configures or reconfigures the Device Defender audit settings for this account.
 * Settings include how audit notifications are sent and which audit checks are
 * enabled or disabled.
 * 
 * 
 * Requires permission to access the UpdateAccountAuditConfiguration action.
 */export const updateAccountAuditConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/configuration", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateAccountAuditConfiguration" }, UpdateAccountAuditConfigurationRequest, UpdateAccountAuditConfigurationResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Device Defender audit suppression.
 */export const updateAuditSuppression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/suppressions/update", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateAuditSuppression" }, UpdateAuditSuppressionRequest, UpdateAuditSuppressionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a registered CA certificate.
 * 
 * 
 * Requires permission to access the UpdateCACertificate action.
 */export const updateCACertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cacertificate/{certificateId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateCACertificate" }, UpdateCACertificateRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of the specified certificate. This operation is
 * idempotent.
 * 
 * 
 * Requires permission to access the UpdateCertificate action.
 * 
 * 
 * Certificates must be in the ACTIVE state to authenticate devices that use
 * a certificate to connect to IoT.
 * 
 * 
 * Within a few minutes of updating a certificate from the ACTIVE state to any other
 * state, IoT disconnects all devices that used that certificate to connect. Devices cannot
 * use a certificate that is not in the ACTIVE state to reconnect.
 */export const updateCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates/{certificateId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateCertificate" }, UpdateCertificateRequest, S.Struct({}), [CertificateStateException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the encryption configuration. By default, Amazon Web Services IoT Core encrypts your data at rest using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys
 * from Key Management Service (KMS). With customer managed keys, you create, own, and
 * manage the KMS keys in your Amazon Web Services account.
 * 
 * 
 * Before using this API, you must set up permissions for Amazon Web Services IoT Core to access KMS. For more information, see Data encryption at rest in the *Amazon Web Services IoT Core Developer Guide*.
 */export const updateEncryptionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/encryption-configuration", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateEncryptionConfiguration" }, UpdateEncryptionConfigurationRequest, UpdateEncryptionConfigurationResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the event configurations.
 * 
 * 
 * Requires permission to access the UpdateEventConfigurations action.
 */export const updateEventConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/event-configurations", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateEventConfigurations" }, UpdateEventConfigurationsRequest, UpdateEventConfigurationsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the search configuration.
 * 
 * 
 * Requires permission to access the UpdateIndexingConfiguration action.
 */export const updateIndexingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indexing/config", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateIndexingConfiguration" }, UpdateIndexingConfigurationRequest, UpdateIndexingConfigurationResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates supported fields of the specified job.
 * 
 * 
 * Requires permission to access the UpdateJob action.
 */export const updateJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateJob" }, UpdateJobRequest, S.Struct({}), [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the supported fields for a specific software package.
 * 
 * 
 * Requires permission to access the UpdatePackage and GetIndexingConfiguration actions.
 */export const updatePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdatePackage" }, UpdatePackageRequest, UpdatePackageResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the software package configuration.
 * 
 * 
 * Requires permission to access the UpdatePackageConfiguration and iam:PassRole actions.
 */export const updatePackageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/package-configuration", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdatePackageConfiguration" }, UpdatePackageConfigurationRequest, UpdatePackageConfigurationResponse, [ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the supported fields for a specific package version.
 * 
 * 
 * Requires permission to access the UpdatePackageVersion and GetIndexingConfiguration actions.
 */export const updatePackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdatePackageVersion" }, UpdatePackageVersionRequest, UpdatePackageVersionResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a provisioning template.
 * 
 * 
 * Requires permission to access the UpdateProvisioningTemplate action.
 */export const updateProvisioningTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateProvisioningTemplate" }, UpdateProvisioningTemplateRequest, UpdateProvisioningTemplateResponse, [ConflictingResourceUpdateException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the data for a thing.
 * 
 * 
 * Requires permission to access the UpdateThing action.
 */export const updateThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateThing" }, UpdateThingRequest, UpdateThingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the groups to which the thing belongs.
 * 
 * 
 * Requires permission to access the UpdateThingGroupsForThing action.
 */export const updateThingGroupsForThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/updateThingGroupsForThing", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateThingGroupsForThing" }, UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a thing type.
 */export const updateThingType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types/{thingTypeName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateThingType" }, UpdateThingTypeRequest, UpdateThingTypeResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a topic rule destination. You use this to change the status, endpoint URL, or
 * confirmation URL of the destination.
 * 
 * 
 * Requires permission to access the UpdateTopicRuleDestination action.
 */export const updateTopicRuleDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/destinations", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateTopicRuleDestination" }, UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse, [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts a pending certificate transfer. The default state of the certificate is
 * INACTIVE.
 * 
 * 
 * To check for pending certificate transfers, call ListCertificates
 * to enumerate your certificates.
 * 
 * 
 * Requires permission to access the AcceptCertificateTransfer action.
 */export const acceptCertificateTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/accept-certificate-transfer/{certificateId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AcceptCertificateTransfer" }, AcceptCertificateTransferRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, TransferAlreadyCompletedException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a thing to a billing group.
 * 
 * 
 * Requires permission to access the AddThingToBillingGroup action.
 */export const addThingToBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/addThingToBillingGroup", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AddThingToBillingGroup" }, AddThingToBillingGroupRequest, AddThingToBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a group with a continuous job. The following criteria must be met:
 * 
 * 
 * 
 * - The job must have been created with the `targetSelection` field
 * set to "CONTINUOUS".
 * 
 * 
 * 
 * - The job status must currently be "IN_PROGRESS".
 * 
 * 
 * 
 * - The total number of targets associated with a job must not exceed
 * 100.
 * 
 * 
 * 
 * 
 * 
 * Requires permission to access the AssociateTargetsWithJob action.
 */export const associateTargetsWithJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}/targets", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AssociateTargetsWithJob" }, AssociateTargetsWithJobRequest, AssociateTargetsWithJobResponse, [InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches the specified policy to the specified principal (certificate or other
 * credential).
 * 
 * 
 * Requires permission to access the AttachPolicy action.
 */export const attachPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/target-policies/{policyName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AttachPolicy" }, AttachPolicyRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches the specified policy to the specified principal (certificate or other
 * credential).
 * 
 * 
 * 
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use AttachPolicy instead.
 * 
 * 
 * Requires permission to access the AttachPrincipalPolicy action.
 */export const attachPrincipalPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/principal-policies/{policyName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AttachPrincipalPolicy" }, AttachPrincipalPolicyRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a Device Defender security profile with a thing group or this account. Each
 * thing group or account can have up to five security profiles associated with it.
 * 
 * 
 * Requires permission to access the AttachSecurityProfile action.
 */export const attachSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}/targets", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AttachSecurityProfile" }, AttachSecurityProfileRequest, AttachSecurityProfileResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches the specified principal to the specified thing. A principal can be X.509
 * certificates, Amazon Cognito identities or federated identities.
 * 
 * 
 * Requires permission to access the AttachThingPrincipal action.
 */export const attachThingPrincipal = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/principals", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AttachThingPrincipal" }, AttachThingPrincipalRequest, AttachThingPrincipalResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a pending transfer for the specified certificate.
 * 
 * 
 * 
 * **Note** Only the transfer source account can use this
 * operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, IoT returns the
 * certificate to the source account in the INACTIVE state. After the destination account has
 * accepted the transfer, the transfer cannot be cancelled.
 * 
 * 
 * After a certificate transfer is cancelled, the status of the certificate changes from
 * PENDING_TRANSFER to INACTIVE.
 * 
 * 
 * Requires permission to access the CancelCertificateTransfer action.
 */export const cancelCertificateTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cancel-certificate-transfer/{certificateId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelCertificateTransfer" }, CancelCertificateTransferRequest, S.Struct({}), [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, TransferAlreadyCompletedException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a job.
 * 
 * 
 * Requires permission to access the CancelJob action.
 */export const cancelJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelJob" }, CancelJobRequest, CancelJobResponse, [InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the execution of a job for a given thing.
 * 
 * 
 * Requires permission to access the CancelJobExecution action.
 */export const cancelJobExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/jobs/{jobId}/cancel", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CancelJobExecution" }, CancelJobExecutionRequest, S.Struct({}), [InvalidRequestException, InvalidStateTransitionException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Confirms a topic rule destination. When you create a rule requiring a destination, IoT
 * sends a confirmation message to the endpoint or base address you specify. The message
 * includes a token which you pass back when calling `ConfirmTopicRuleDestination`
 * to confirm that you own or have access to the endpoint.
 * 
 * 
 * Requires permission to access the ConfirmTopicRuleDestination action.
 */export const confirmTopicRuleDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/confirmdestination/{confirmationToken+}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ConfirmTopicRuleDestination" }, ConfirmTopicRuleDestinationRequest, ConfirmTopicRuleDestinationResponse, [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an X.509 certificate using the specified certificate signing
 * request.
 * 
 * 
 * 
 * Requires permission to access the CreateCertificateFromCsr action.
 * 
 * 
 * 
 * 
 * 
 * The CSR must include a public key that is either an RSA key with a length of at least
 * 2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-521 curves. For supported
 * certificates, consult Certificate signing algorithms supported by IoT.
 * 
 * 
 * 
 * 
 * 
 * 
 * Reusing the same certificate signing request (CSR)
 * results in a distinct certificate.
 * 
 * 
 * 
 * 
 * You can create multiple certificates in a batch by creating a directory, copying
 * multiple `.csr` files into that directory, and then specifying that directory on the command
 * line. The following commands show how to create a batch of certificates given a batch of
 * CSRs. In the following commands, we assume that a set of CSRs are located inside of the
 * directory my-csr-directory:
 * 
 * 
 * On Linux and OS X, the command is:
 * 
 * 
 * 
 * $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/{}
 * 
 * 
 * 
 * This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
 * to the `aws iot create-certificate-from-csr` Amazon Web Services CLI command to create a certificate for
 * the corresponding CSR.
 * 
 * 
 * You can also run the `aws iot create-certificate-from-csr` part of the
 * command in parallel to speed up the certificate creation process:
 * 
 * 
 * 
 * $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/{}
 * 
 * 
 * 
 * 
 * On Windows PowerShell, the command to create certificates for all CSRs in
 * my-csr-directory is:
 * 
 * 
 * 
 * > ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/$_}
 * 
 * 
 * 
 * 
 * On a Windows command prompt, the command to create certificates for all CSRs in
 * my-csr-directory is:
 * 
 * 
 * 
 * > forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
 * --certificate-signing-request file://@path"
 */export const createCertificateFromCsr = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateCertificateFromCsr" }, CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this API to define a
 * Custom
 * Metric
 * published by your devices to Device Defender.
 * 
 * 
 * Requires permission to access the CreateCustomMetric action.
 */export const createCustomMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/custom-metric/{metricName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateCustomMetric" }, CreateCustomMetricRequest, CreateCustomMetricResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender.
 * For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
 * 
 * 
 * Requires permission to access the CreateDimension action.
 */export const createDimension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dimensions/{name}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateDimension" }, CreateDimensionRequest, CreateDimensionResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a provisioning claim.
 * 
 * 
 * Requires permission to access the CreateProvisioningClaim action.
 */export const createProvisioningClaim = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}/provisioning-claim", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateProvisioningClaim" }, CreateProvisioningClaimRequest, CreateProvisioningClaimResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of a provisioning template.
 * 
 * 
 * Requires permission to access the CreateProvisioningTemplateVersion action.
 */export const createProvisioningTemplateVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}/versions", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateProvisioningTemplateVersion" }, CreateProvisioningTemplateVersionRequest, CreateProvisioningTemplateVersionResponse, [ConflictingResourceUpdateException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, VersionsLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a role alias.
 * 
 * 
 * Requires permission to access the CreateRoleAlias action.
 * 
 * 
 * 
 * 
 * The value of
 * `credentialDurationSeconds`
 * must be less than or equal to the maximum session
 * duration of the IAM role that the role alias references. For more information, see
 * 
 * Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.
 */export const createRoleAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/role-aliases/{roleAlias}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateRoleAlias" }, CreateRoleAliasRequest, CreateRoleAliasResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a scheduled audit that is run at a specified
 * time interval.
 * 
 * 
 * Requires permission to access the CreateScheduledAudit action.
 */export const createScheduledAudit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/scheduledaudits/{scheduledAuditName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateScheduledAudit" }, CreateScheduledAuditRequest, CreateScheduledAuditResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a thing group.
 * 
 * 
 * 
 * 
 * This is a control plane operation. See Authorization for
 * information about authorizing control plane actions.
 * 
 * 
 * If the `ThingGroup` that you create has the exact same attributes as an existing
 * `ThingGroup`, you will get a 200 success response.
 * 
 * 
 * 
 * 
 * 
 * Requires permission to access the CreateThingGroup action.
 */export const createThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/{thingGroupName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateThingGroup" }, CreateThingGroupRequest, CreateThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an authorizer.
 * 
 * 
 * Requires permission to access the DeleteAuthorizer action.
 */export const deleteAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizer/{authorizerName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteAuthorizer" }, DeleteAuthorizerRequest, DeleteAuthorizerResponse, [DeleteConflictException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a registered CA certificate.
 * 
 * 
 * Requires permission to access the DeleteCACertificate action.
 */export const deleteCACertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cacertificate/{certificateId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCACertificate" }, DeleteCACertificateRequest, DeleteCACertificateResponse, [CertificateStateException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a command resource.
 */export const deleteCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/commands/{commandId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCommand" }, DeleteCommandRequest, DeleteCommandResponse, [ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a command execution.
 * 
 * 
 * 
 * 
 * Only command executions that enter a terminal state can be deleted from
 * your account.
 */export const deleteCommandExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/command-executions/{executionId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteCommandExecution" }, DeleteCommandExecutionRequest, DeleteCommandExecutionResponse, [ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a job and its related job executions.
 * 
 * 
 * Deleting a job may take time, depending on the number of job executions created for
 * the job and various other factors. While the job is being deleted, the status of the job
 * will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose
 * status is already "DELETION_IN_PROGRESS" will result in an error.
 * 
 * 
 * Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a
 * LimitExceededException will occur.
 * 
 * 
 * Requires permission to access the DeleteJob action.
 */export const deleteJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteJob" }, DeleteJobRequest, S.Struct({}), [InvalidRequestException, InvalidStateTransitionException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version from a software package.
 * 
 * 
 * 
 * **Note:** All package versions must be deleted before deleting the software package.
 * 
 * 
 * Requires permission to access the DeletePackageVersion action.
 */export const deletePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeletePackage" }, DeletePackageRequest, DeletePackageResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version from a software package.
 * 
 * 
 * 
 * **Note:** If a package version is designated as default, you must remove the designation from the software package using the UpdatePackage action.
 */export const deletePackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeletePackageVersion" }, DeletePackageVersionRequest, DeletePackageVersionResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the rule.
 * 
 * 
 * Requires permission to access the DeleteTopicRule action.
 */export const deleteTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}", method: "DELETE", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DeleteTopicRule" }, DeleteTopicRuleRequest, S.Struct({}), [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Defender audit suppression.
 */export const describeAuditSuppression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/suppressions/describe", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAuditSuppression" }, DescribeAuditSuppressionRequest, DescribeAuditSuppressionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an authorizer.
 * 
 * 
 * Requires permission to access the DescribeAuthorizer action.
 */export const describeAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizer/{authorizerName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAuthorizer" }, DescribeAuthorizerRequest, DescribeAuthorizerResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a certificate provider.
 * 
 * 
 * Requires permission to access the DescribeCertificateProvider action.
 */export const describeCertificateProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate-providers/{certificateProviderName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeCertificateProvider" }, DescribeCertificateProviderRequest, DescribeCertificateProviderResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Defender detect custom metric.
 * 
 * 
 * 
 * Requires permission to access the DescribeCustomMetric action.
 */export const describeCustomMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/custom-metric/{metricName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeCustomMetric" }, DescribeCustomMetricRequest, DescribeCustomMetricResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the default authorizer.
 * 
 * 
 * Requires permission to access the DescribeDefaultAuthorizer action.
 */export const describeDefaultAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/default-authorizer", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeDefaultAuthorizer" }, DescribeDefaultAuthorizerRequest, DescribeDefaultAuthorizerResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides details about a dimension that is defined in your Amazon Web Services accounts.
 * 
 * 
 * Requires permission to access the DescribeDimension action.
 */export const describeDimension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dimensions/{name}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeDimension" }, DescribeDimensionRequest, DescribeDimensionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the encryption configuration for resources and data of your Amazon Web Services account in
 * Amazon Web Services IoT Core. For more information, see Data encryption at rest in
 * the *Amazon Web Services IoT Core Developer Guide*.
 */export const describeEncryptionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/encryption-configuration", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeEncryptionConfiguration" }, DescribeEncryptionConfigurationRequest, DescribeEncryptionConfigurationResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns or creates a unique endpoint specific to the Amazon Web Services account making the
 * call.
 * 
 * 
 * 
 * 
 * The first time `DescribeEndpoint` is called, an endpoint is created. All subsequent calls to `DescribeEndpoint` return the same endpoint.
 * 
 * 
 * 
 * 
 * Requires permission to access the DescribeEndpoint action.
 */export const describeEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/endpoint", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeEndpoint" }, DescribeEndpointRequest, DescribeEndpointResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified fleet metric.
 * 
 * 
 * Requires permission to access the DescribeFleetMetric action.
 */export const describeFleetMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/fleet-metric/{metricName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeFleetMetric" }, DescribeFleetMetricRequest, DescribeFleetMetricResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a search index.
 * 
 * 
 * Requires permission to access the DescribeIndex action.
 */export const describeIndex = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/{indexName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeIndex" }, DescribeIndexRequest, DescribeIndexResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a job template.
 */export const describeJobTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/job-templates/{jobTemplateId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeJobTemplate" }, DescribeJobTemplateRequest, DescribeJobTemplateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a mitigation action.
 * 
 * 
 * Requires permission to access the DescribeMitigationAction action.
 */export const describeMitigationAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/mitigationactions/actions/{actionName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeMitigationAction" }, DescribeMitigationActionRequest, DescribeMitigationActionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a provisioning template.
 * 
 * 
 * Requires permission to access the DescribeProvisioningTemplate action.
 */export const describeProvisioningTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeProvisioningTemplate" }, DescribeProvisioningTemplateRequest, DescribeProvisioningTemplateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a provisioning template version.
 * 
 * 
 * Requires permission to access the DescribeProvisioningTemplateVersion action.
 */export const describeProvisioningTemplateVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}/versions/{versionId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeProvisioningTemplateVersion" }, DescribeProvisioningTemplateVersionRequest, DescribeProvisioningTemplateVersionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a scheduled audit.
 * 
 * 
 * Requires permission to access the DescribeScheduledAudit action.
 */export const describeScheduledAudit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/scheduledaudits/{scheduledAuditName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeScheduledAudit" }, DescribeScheduledAuditRequest, DescribeScheduledAuditResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Defender security profile.
 * 
 * 
 * Requires permission to access the DescribeSecurityProfile action.
 */export const describeSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeSecurityProfile" }, DescribeSecurityProfileRequest, DescribeSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified thing.
 * 
 * 
 * Requires permission to access the DescribeThing action.
 */export const describeThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeThing" }, DescribeThingRequest, DescribeThingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a bulk thing provisioning task.
 * 
 * 
 * Requires permission to access the DescribeThingRegistrationTask action.
 */export const describeThingRegistrationTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-registration-tasks/{taskId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeThingRegistrationTask" }, DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified command.
 */export const getCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/commands/{commandId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetCommand" }, GetCommandRequest, GetCommandResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a job document.
 * 
 * 
 * Requires permission to access the GetJobDocument action.
 */export const getJobDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}/job-document", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetJobDocument" }, GetJobDocumentRequest, GetJobDocumentResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified software package.
 * 
 * 
 * Requires permission to access the GetPackage action.
 */export const getPackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPackage" }, GetPackageRequest, GetPackageResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified software package's configuration.
 * 
 * 
 * Requires permission to access the GetPackageConfiguration action.
 */export const getPackageConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/package-configuration", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPackageConfiguration" }, GetPackageConfigurationRequest, GetPackageConfigurationResponse, [InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified package version.
 * 
 * 
 * Requires permission to access the GetPackageVersion action.
 */export const getPackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPackageVersion" }, GetPackageVersionRequest, GetPackageVersionResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified policy with the policy document of the default
 * version.
 * 
 * 
 * Requires permission to access the GetPolicy action.
 */export const getPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPolicy" }, GetPolicyRequest, GetPolicyResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified policy version.
 * 
 * 
 * Requires permission to access the GetPolicyVersion action.
 */export const getPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}/version/{policyVersionId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPolicyVersion" }, GetPolicyVersionRequest, GetPolicyVersionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the live connectivity status per device.
 */export const getThingConnectivityData = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/connectivity-data", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetThingConnectivityData" }, GetThingConnectivityDataRequest, GetThingConnectivityDataResponse, [IndexNotReadyException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the findings (results) of a Device Defender audit or of the audits
 * performed during a specified time period. (Findings are retained for 90 days.)
 * 
 * 
 * Requires permission to access the ListAuditFindings action.
 */export const listAuditFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/findings", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuditFindings" }, ListAuditFindingsRequest, ListAuditFindingsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the device certificates signed by the specified CA certificate.
 * 
 * 
 * Requires permission to access the ListCertificatesByCA action.
 */export const listCertificatesByCA = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates-by-ca/{caCertificateId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCertificatesByCA" }, ListCertificatesByCARequest, ListCertificatesByCAResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your Device Defender detect custom metrics.
 * 
 * 
 * 
 * Requires permission to access the ListCustomMetrics action.
 */export const listCustomMetrics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/custom-metrics", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCustomMetrics" }, ListCustomMetricsRequest, ListCustomMetricsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of Device Defender ML Detect mitigation actions tasks.
 * 
 * 
 * 
 * Requires permission to access the ListDetectMitigationActionsTasks action.
 */export const listDetectMitigationActionsTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/detect/mitigationactions/tasks", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListDetectMitigationActionsTasks" }, ListDetectMitigationActionsTasksRequest, ListDetectMitigationActionsTasksResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the set of dimensions that are defined for your Amazon Web Services accounts.
 * 
 * 
 * Requires permission to access the ListDimensions action.
 */export const listDimensions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dimensions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListDimensions" }, ListDimensionsRequest, ListDimensionsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the search indices.
 * 
 * 
 * Requires permission to access the ListIndices action.
 */export const listIndices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListIndices" }, ListIndicesRequest, ListIndicesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your policies.
 * 
 * 
 * Requires permission to access the ListPolicies action.
 */export const listPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the principals associated with the specified policy.
 * 
 * 
 * 
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use ListTargetsForPolicy instead.
 * 
 * 
 * Requires permission to access the ListPolicyPrincipals action.
 */export const listPolicyPrincipals = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policy-principals", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPolicyPrincipals" }, ListPolicyPrincipalsRequest, ListPolicyPrincipalsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the policies attached to the specified principal. If you use an Cognito
 * identity, the ID must be in AmazonCognito Identity format.
 * 
 * 
 * 
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use ListAttachedPolicies instead.
 * 
 * 
 * Requires permission to access the ListPrincipalPolicies action.
 */export const listPrincipalPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/principal-policies", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPrincipalPolicies" }, ListPrincipalPoliciesRequest, ListPrincipalPoliciesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the things associated with the specified principal. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 * 
 * 
 * Requires permission to access the ListPrincipalThings action.
 */export const listPrincipalThings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/principals/things", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPrincipalThings" }, ListPrincipalThingsRequest, ListPrincipalThingsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the role aliases registered in your account.
 * 
 * 
 * Requires permission to access the ListRoleAliases action.
 */export const listRoleAliases = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/role-aliases", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListRoleAliases" }, ListRoleAliasesRequest, ListRoleAliasesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags (metadata) you have assigned to the resource.
 * 
 * 
 * Requires permission to access the ListTagsForResource action.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/tags", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List targets for the specified policy.
 * 
 * 
 * Requires permission to access the ListTargetsForPolicy action.
 */export const listTargetsForPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policy-targets/{policyName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListTargetsForPolicy" }, ListTargetsForPolicyRequest, ListTargetsForPolicyResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the thing groups in your account.
 * 
 * 
 * Requires permission to access the ListThingGroups action.
 */export const listThingGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingGroups" }, ListThingGroupsRequest, ListThingGroupsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the thing groups to which the specified thing belongs.
 * 
 * 
 * Requires permission to access the ListThingGroupsForThing action.
 */export const listThingGroupsForThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/thing-groups", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingGroupsForThing" }, ListThingGroupsForThingRequest, ListThingGroupsForThingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the principals associated with the specified thing. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 * 
 * 
 * Requires permission to access the ListThingPrincipals action.
 */export const listThingPrincipals = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/principals", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingPrincipals" }, ListThingPrincipalsRequest, ListThingPrincipalsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Information about the thing registration tasks.
 */export const listThingRegistrationTaskReports = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-registration-tasks/{taskId}/reports", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingRegistrationTaskReports" }, ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List bulk thing provisioning tasks.
 * 
 * 
 * Requires permission to access the ListThingRegistrationTasks action.
 */export const listThingRegistrationTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-registration-tasks", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingRegistrationTasks" }, ListThingRegistrationTasksRequest, ListThingRegistrationTasksResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the things you have added to the given billing group.
 * 
 * 
 * Requires permission to access the ListThingsInBillingGroup action.
 */export const listThingsInBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/{billingGroupName}/things", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingsInBillingGroup" }, ListThingsInBillingGroupRequest, ListThingsInBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the things in the specified group.
 * 
 * 
 * Requires permission to access the ListThingsInThingGroup action.
 */export const listThingsInThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/{thingGroupName}/things", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingsInThingGroup" }, ListThingsInThingGroupRequest, ListThingsInThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Replaces the rule. You must specify all parameters for the new rule. Creating rules
 * is an administrator-level action. Any user who has permission to create rules will be able
 * to access data processed by the rule.
 * 
 * 
 * Requires permission to access the ReplaceTopicRule action.
 */export const replaceTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ReplaceTopicRule" }, ReplaceTopicRuleRequest, S.Struct({}), [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ServiceUnavailableException, SqlParseException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the default authorizer. This will be used if a websocket connection is made
 * without specifying an authorizer.
 * 
 * 
 * Requires permission to access the SetDefaultAuthorizer action.
 */export const setDefaultAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/default-authorizer", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SetDefaultAuthorizer" }, SetDefaultAuthorizerRequest, SetDefaultAuthorizerResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the logging options.
 * 
 * 
 * NOTE: use of this command is not recommended. Use `SetV2LoggingOptions`
 * instead.
 * 
 * 
 * Requires permission to access the SetLoggingOptions action.
 */export const setLoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/loggingOptions", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SetLoggingOptions" }, SetLoggingOptionsRequest, S.Struct({}), [InternalException, InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the logging level.
 * 
 * 
 * Requires permission to access the SetV2LoggingLevel action.
 */export const setV2LoggingLevel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/v2LoggingLevel", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SetV2LoggingLevel" }, SetV2LoggingLevelRequest, S.Struct({}), [InternalException, InvalidRequestException, LimitExceededException, NotConfiguredException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the logging options for the V2 logging service.
 * 
 * 
 * Requires permission to access the SetV2LoggingOptions action.
 */export const setV2LoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/v2LoggingOptions", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SetV2LoggingOptions" }, SetV2LoggingOptionsRequest, S.Struct({}), [InternalException, InvalidRequestException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an on-demand Device Defender audit.
 * 
 * 
 * Requires permission to access the StartOnDemandAuditTask action.
 */export const startOnDemandAuditTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/tasks", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.StartOnDemandAuditTask" }, StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a bulk thing provisioning task.
 * 
 * 
 * Requires permission to access the StartThingRegistrationTask action.
 */export const startThingRegistrationTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-registration-tasks", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.StartThingRegistrationTask" }, StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an authorizer.
 * 
 * 
 * Requires permission to access the UpdateAuthorizer action.
 */export const updateAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizer/{authorizerName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateAuthorizer" }, UpdateAuthorizerRequest, UpdateAuthorizerResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates information about the billing group.
 * 
 * 
 * Requires permission to access the UpdateBillingGroup action.
 */export const updateBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/{billingGroupName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateBillingGroup" }, UpdateBillingGroupRequest, UpdateBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a certificate provider.
 * 
 * 
 * Requires permission to access the UpdateCertificateProvider action.
 */export const updateCertificateProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate-providers/{certificateProviderName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateCertificateProvider" }, UpdateCertificateProviderRequest, UpdateCertificateProviderResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update information about a command or mark a command for deprecation.
 */export const updateCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/commands/{commandId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateCommand" }, UpdateCommandRequest, UpdateCommandResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a
 * Device Defender detect custom metric.
 * 
 * 
 * Requires permission to access the UpdateCustomMetric action.
 */export const updateCustomMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/custom-metric/{metricName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateCustomMetric" }, UpdateCustomMetricRequest, UpdateCustomMetricResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the definition for a dimension. You
 * cannot
 * change the type of a dimension after
 * it is created (you can delete it and
 * recreate
 * it).
 * 
 * 
 * Requires permission to access the UpdateDimension action.
 */export const updateDimension = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dimensions/{name}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateDimension" }, UpdateDimensionRequest, UpdateDimensionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates values stored in the domain configuration. Domain configurations for default
 * endpoints can't be updated.
 * 
 * 
 * Requires permission to access the UpdateDomainConfiguration action.
 */export const updateDomainConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/domainConfigurations/{domainConfigurationName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateDomainConfiguration" }, UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse, [CertificateValidationException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the data for a fleet metric.
 * 
 * 
 * Requires permission to access the UpdateFleetMetric action.
 */export const updateFleetMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/fleet-metric/{metricName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateFleetMetric" }, UpdateFleetMetricRequest, S.Struct({}), [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the definition for the specified mitigation action.
 * 
 * 
 * Requires permission to access the UpdateMitigationAction action.
 */export const updateMitigationAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/mitigationactions/actions/{actionName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateMitigationAction" }, UpdateMitigationActionRequest, UpdateMitigationActionResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a role alias.
 * 
 * 
 * Requires permission to access the UpdateRoleAlias action.
 * 
 * 
 * 
 * 
 * The value of
 * `credentialDurationSeconds`
 * must be less than or equal to the
 * maximum session duration of the IAM role that the role alias references. For more
 * information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services
 * Identity and Access Management User Guide.
 */export const updateRoleAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/role-aliases/{roleAlias}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateRoleAlias" }, UpdateRoleAliasRequest, UpdateRoleAliasResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a scheduled audit, including which checks are performed and
 * how often the audit takes place.
 * 
 * 
 * Requires permission to access the UpdateScheduledAudit action.
 */export const updateScheduledAudit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/scheduledaudits/{scheduledAuditName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateScheduledAudit" }, UpdateScheduledAuditRequest, UpdateScheduledAuditResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Device Defender security profile.
 * 
 * 
 * Requires permission to access the UpdateSecurityProfile action.
 */export const updateSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateSecurityProfile" }, UpdateSecurityProfileRequest, UpdateSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing stream. The stream version will be incremented by one.
 * 
 * 
 * Requires permission to access the UpdateStream action.
 */export const updateStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/streams/{streamId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateStream" }, UpdateStreamRequest, UpdateStreamResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a thing group.
 * 
 * 
 * Requires permission to access the UpdateThingGroup action.
 */export const updateThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/{thingGroupName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateThingGroup" }, UpdateThingGroupRequest, UpdateThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Device Defender audit suppression.
 * 
 * 
 * 
 * Requires permission to access the CreateAuditSuppression action.
 */export const createAuditSuppression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/suppressions/create", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateAuditSuppression" }, CreateAuditSuppressionRequest, CreateAuditSuppressionResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an authorizer.
 * 
 * 
 * Requires permission to access the CreateAuthorizer action.
 */export const createAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizer/{authorizerName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateAuthorizer" }, CreateAuthorizerRequest, CreateAuthorizerResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a billing group. If this call is made multiple times using
 * the same billing group name and configuration, the call will succeed. If this call is made with
 * the same billing group name but different configuration a `ResourceAlreadyExistsException` is thrown.
 * 
 * 
 * Requires permission to access the CreateBillingGroup action.
 */export const createBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/{billingGroupName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateBillingGroup" }, CreateBillingGroupRequest, CreateBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to
 * customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For
 * more information, see Customizing certificate
 * signing using Amazon Web Services IoT Core certificate provider from Amazon Web Services IoT Core Developer
 * Guide.
 * 
 * 
 * Requires permission to access the CreateCertificateProvider action.
 * 
 * 
 * 
 * 
 * After you create a certificate provider, the behavior of
 * `CreateCertificateFromCsr` API for fleet provisioning will
 * change and all API calls to `CreateCertificateFromCsr` will invoke the
 * certificate provider to create the certificates. It can take up to a few minutes for
 * this behavior to change after a certificate provider is created.
 */export const createCertificateProvider = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate-providers/{certificateProviderName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateCertificateProvider" }, CreateCertificateProviderRequest, CreateCertificateProviderResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a domain configuration.
 * 
 * 
 * Requires permission to access the CreateDomainConfiguration action.
 */export const createDomainConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/domainConfigurations/{domainConfigurationName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateDomainConfiguration" }, CreateDomainConfigurationRequest, CreateDomainConfigurationResponse, [CertificateValidationException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a dynamic thing group.
 * 
 * 
 * Requires permission to access the CreateDynamicThingGroup action.
 */export const createDynamicThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dynamic-thing-groups/{thingGroupName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateDynamicThingGroup" }, CreateDynamicThingGroupRequest, CreateDynamicThingGroupResponse, [InternalFailureException, InvalidQueryException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a fleet metric.
 * 
 * 
 * Requires permission to access the CreateFleetMetric action.
 */export const createFleetMetric = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/fleet-metric/{metricName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateFleetMetric" }, CreateFleetMetricRequest, CreateFleetMetricResponse, [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a job template.
 * 
 * 
 * Requires permission to access the CreateJobTemplate action.
 */export const createJobTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/job-templates/{jobTemplateId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateJobTemplate" }, CreateJobTemplateRequest, CreateJobTemplateResponse, [ConflictException, InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 * public key. You can also call `CreateKeysAndCertificate` over MQTT from a
 * device, for more information, see Provisioning MQTT API.
 * 
 * 
 * 
 * **Note** This is the only time IoT issues the private key
 * for this certificate, so it is important to keep it in a secure location.
 * 
 * 
 * Requires permission to access the CreateKeysAndCertificate action.
 */export const createKeysAndCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/keys-and-certificate", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateKeysAndCertificate" }, CreateKeysAndCertificateRequest, CreateKeysAndCertificateResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version for an existing IoT software package.
 * 
 * 
 * Requires permission to access the CreatePackageVersion and GetIndexingConfiguration actions.
 */export const createPackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreatePackageVersion" }, CreatePackageVersionRequest, CreatePackageVersionResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an IoT policy.
 * 
 * 
 * The created policy is the default version for the policy. This operation creates a
 * policy version with a version identifier of **1** and sets
 * **1** as the policy's default version.
 * 
 * 
 * Requires permission to access the CreatePolicy action.
 */export const createPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreatePolicy" }, CreatePolicyRequest, CreatePolicyResponse, [InternalFailureException, InvalidRequestException, MalformedPolicyException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new version of the specified IoT policy. To update a policy, create a
 * new policy version. A managed policy can have up to five versions. If the policy has five
 * versions, you must use DeletePolicyVersion to delete an existing version
 * before you create a new one.
 * 
 * 
 * Optionally, you can set the new version as the policy's default version. The default
 * version is the operative version (that is, the version that is in effect for the
 * certificates to which the policy is attached).
 * 
 * 
 * Requires permission to access the CreatePolicyVersion action.
 */export const createPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}/version", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreatePolicyVersion" }, CreatePolicyVersionRequest, CreatePolicyVersionResponse, [InternalFailureException, InvalidRequestException, MalformedPolicyException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException, VersionsLimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a provisioning template.
 * 
 * 
 * Requires permission to access the CreateProvisioningTemplate action.
 */export const createProvisioningTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateProvisioningTemplate" }, CreateProvisioningTemplateRequest, CreateProvisioningTemplateResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data
 * bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files
 * associated with a stream.
 * 
 * 
 * Requires permission to access the CreateStream action.
 */export const createStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/streams/{streamId}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateStream" }, CreateStreamRequest, CreateStreamResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a billing group.
 * 
 * 
 * Requires permission to access the DescribeBillingGroup action.
 */export const describeBillingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups/{billingGroupName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeBillingGroup" }, DescribeBillingGroupRequest, DescribeBillingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets summary information about a domain configuration.
 * 
 * 
 * Requires permission to access the DescribeDomainConfiguration action.
 */export const describeDomainConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/domainConfigurations/{domainConfigurationName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeDomainConfiguration" }, DescribeDomainConfigurationRequest, DescribeDomainConfigurationResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes event configurations.
 * 
 * 
 * Requires permission to access the DescribeEventConfigurations action.
 */export const describeEventConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/event-configurations", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeEventConfigurations" }, DescribeEventConfigurationsRequest, DescribeEventConfigurationsResponse, [InternalFailureException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * View details of a managed job template.
 */export const describeManagedJobTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/managed-job-templates/{templateName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeManagedJobTemplate" }, DescribeManagedJobTemplateRequest, DescribeManagedJobTemplateResponse, [InternalServerException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a role alias.
 * 
 * 
 * Requires permission to access the DescribeRoleAlias action.
 */export const describeRoleAlias = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/role-aliases/{roleAlias}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeRoleAlias" }, DescribeRoleAliasRequest, DescribeRoleAliasResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a stream.
 * 
 * 
 * Requires permission to access the DescribeStream action.
 */export const describeStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/streams/{streamId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeStream" }, DescribeStreamRequest, DescribeStreamResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe a thing group.
 * 
 * 
 * Requires permission to access the DescribeThingGroup action.
 */export const describeThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-groups/{thingGroupName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeThingGroup" }, DescribeThingGroupRequest, DescribeThingGroupResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified thing type.
 * 
 * 
 * Requires permission to access the DescribeThingType action.
 */export const describeThingType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types/{thingTypeName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeThingType" }, DescribeThingTypeRequest, DescribeThingTypeResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a Device Defender's ML Detect Security Profile training model's status.
 * 
 * 
 * 
 * Requires permission to access the GetBehaviorModelTrainingSummaries action.
 */export const getBehaviorModelTrainingSummaries = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/behavior-model-training/summaries", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetBehaviorModelTrainingSummaries" }, GetBehaviorModelTrainingSummariesRequest, GetBehaviorModelTrainingSummariesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the approximate count of unique values that match the query.
 * 
 * 
 * Requires permission to access the GetCardinality action.
 */export const getCardinality = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/cardinality", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetCardinality" }, GetCardinalityRequest, GetCardinalityResponse, [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of the policies that have an effect on the authorization behavior of the
 * specified device when it connects to the IoT device gateway.
 * 
 * 
 * Requires permission to access the GetEffectivePolicies action.
 */export const getEffectivePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/effective-policies", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetEffectivePolicies" }, GetEffectivePoliciesRequest, GetEffectivePoliciesResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Groups the aggregated values that match the query into percentile groupings. The default
 * percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
 * when you call `GetPercentiles`. This function returns a value for each
 * percentile group specified (or the default percentile groupings). The percentile group
 * "1" contains the aggregated field value that occurs in approximately one percent of the
 * values that match the query. The percentile group "5" contains the aggregated field value
 * that occurs in approximately five percent of the values that match the query, and so on.
 * The result is an approximation, the more values that match the query, the more accurate
 * the percentile values.
 * 
 * 
 * Requires permission to access the GetPercentiles action.
 */export const getPercentiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/percentiles", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetPercentiles" }, GetPercentilesRequest, GetPercentilesResponse, [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 * and standard deviation for the specified aggregated field. If the aggregation field is of type
 * `String`, only the count statistic is returned.
 * 
 * 
 * Requires permission to access the GetStatistics action.
 */export const getStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/statistics", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetStatistics" }, GetStatisticsRequest, GetStatisticsResponse, [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the rule.
 * 
 * 
 * Requires permission to access the GetTopicRule action.
 */export const getTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetTopicRule" }, GetTopicRuleRequest, GetTopicRuleResponse, [InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the fine grained logging options.
 * 
 * 
 * Requires permission to access the GetV2LoggingOptions action.
 */export const getV2LoggingOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/v2LoggingOptions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetV2LoggingOptions" }, GetV2LoggingOptionsRequest, GetV2LoggingOptionsResponse, [InternalException, NotConfiguredException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the policies attached to the specified thing group.
 * 
 * 
 * Requires permission to access the ListAttachedPolicies action.
 */export const listAttachedPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/attached-policies/{target}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAttachedPolicies" }, ListAttachedPoliciesRequest, ListAttachedPoliciesResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the status of audit mitigation action tasks that were
 * executed.
 * 
 * 
 * Requires permission to access the ListAuditMitigationActionsExecutions action.
 */export const listAuditMitigationActionsExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/mitigationactions/executions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuditMitigationActionsExecutions" }, ListAuditMitigationActionsExecutionsRequest, ListAuditMitigationActionsExecutionsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of audit mitigation action tasks that match the specified filters.
 * 
 * 
 * Requires permission to access the ListAuditMitigationActionsTasks action.
 */export const listAuditMitigationActionsTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/mitigationactions/tasks", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuditMitigationActionsTasks" }, ListAuditMitigationActionsTasksRequest, ListAuditMitigationActionsTasksResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your Device Defender audit listings.
 * 
 * 
 * 
 * Requires permission to access the ListAuditSuppressions action.
 */export const listAuditSuppressions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/suppressions/list", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuditSuppressions" }, ListAuditSuppressionsRequest, ListAuditSuppressionsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Device Defender audits that have been performed during a given
 * time period.
 * 
 * 
 * Requires permission to access the ListAuditTasks action.
 */export const listAuditTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/tasks", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuditTasks" }, ListAuditTasksRequest, ListAuditTasksResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the authorizers registered in your account.
 * 
 * 
 * Requires permission to access the ListAuthorizers action.
 */export const listAuthorizers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizers", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListAuthorizers" }, ListAuthorizersRequest, ListAuthorizersResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the billing groups you have created.
 * 
 * 
 * Requires permission to access the ListBillingGroups action.
 */export const listBillingGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/billing-groups", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListBillingGroups" }, ListBillingGroupsRequest, ListBillingGroupsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the CA certificates registered for your Amazon Web Services account.
 * 
 * 
 * The results are paginated with a default page size of 25. You can use the returned
 * marker to retrieve additional results.
 * 
 * 
 * Requires permission to access the ListCACertificates action.
 */export const listCACertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cacertificates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCACertificates" }, ListCACertificatesRequest, ListCACertificatesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all your certificate providers in your Amazon Web Services account.
 * 
 * 
 * Requires permission to access the ListCertificateProviders action.
 */export const listCertificateProviders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate-providers", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCertificateProviders" }, ListCertificateProvidersRequest, ListCertificateProvidersResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the certificates registered in your Amazon Web Services account.
 * 
 * 
 * The results are paginated with a default page size of 25. You can use the returned
 * marker to retrieve additional results.
 * 
 * 
 * Requires permission to access the ListCertificates action.
 */export const listCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCertificates" }, ListCertificatesRequest, ListCertificatesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all commands in your account.
 */export const listCommands = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/commands", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCommands" }, ListCommandsRequest, ListCommandsResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 * 
 * 
 * 
 * Requires permission to access the ListDetectMitigationActionsExecutions action.
 */export const listDetectMitigationActionsExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/detect/mitigationactions/executions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListDetectMitigationActionsExecutions" }, ListDetectMitigationActionsExecutionsRequest, ListDetectMitigationActionsExecutionsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of domain configurations for the user. This list is sorted
 * alphabetically by domain configuration name.
 * 
 * 
 * Requires permission to access the ListDomainConfigurations action.
 */export const listDomainConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/domainConfigurations", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListDomainConfigurations" }, ListDomainConfigurationsRequest, ListDomainConfigurationsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all your fleet metrics.
 * 
 * 
 * Requires permission to access the ListFleetMetrics action.
 */export const listFleetMetrics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/fleet-metrics", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListFleetMetrics" }, ListFleetMetricsRequest, ListFleetMetricsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the job executions for the specified thing.
 * 
 * 
 * Requires permission to access the ListJobExecutionsForThing action.
 */export const listJobExecutionsForThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/jobs", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListJobExecutionsForThing" }, ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists jobs.
 * 
 * 
 * Requires permission to access the ListJobs action.
 */export const listJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListJobs" }, ListJobsRequest, ListJobsResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of job templates.
 * 
 * 
 * Requires permission to access the ListJobTemplates action.
 */export const listJobTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/job-templates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListJobTemplates" }, ListJobTemplatesRequest, ListJobTemplatesResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of managed job templates.
 */export const listManagedJobTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/managed-job-templates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListManagedJobTemplates" }, ListManagedJobTemplatesRequest, ListManagedJobTemplatesResponse, [InternalServerException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
 * by the given thing during the specified time period.
 */export const listMetricValues = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/metric-values", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListMetricValues" }, ListMetricValuesRequest, ListMetricValuesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of all mitigation actions that match the specified filter criteria.
 * 
 * 
 * Requires permission to access the ListMitigationActions action.
 */export const listMitigationActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/mitigationactions/actions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListMitigationActions" }, ListMitigationActionsRequest, ListMitigationActionsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists OTA updates.
 * 
 * 
 * Requires permission to access the ListOTAUpdates action.
 */export const listOTAUpdates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/otaUpdates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListOTAUpdates" }, ListOTAUpdatesRequest, ListOTAUpdatesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists certificates that are being transferred but not yet accepted.
 * 
 * 
 * Requires permission to access the ListOutgoingCertificates action.
 */export const listOutgoingCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates-out-going", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListOutgoingCertificates" }, ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the software packages associated to the account.
 * 
 * 
 * Requires permission to access the ListPackages action.
 */export const listPackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPackages" }, ListPackagesRequest, ListPackagesResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the software package versions associated to the account.
 * 
 * 
 * Requires permission to access the ListPackageVersions action.
 */export const listPackageVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPackageVersions" }, ListPackageVersionsRequest, ListPackageVersionsResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the versions of the specified policy and identifies the default
 * version.
 * 
 * 
 * Requires permission to access the ListPolicyVersions action.
 */export const listPolicyVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/policies/{policyName}/version", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPolicyVersions" }, ListPolicyVersionsRequest, ListPolicyVersionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the things associated with the specified principal. A principal can be an X.509
 * certificate or an Amazon Cognito ID.
 * 
 * 
 * Requires permission to access the ListPrincipalThings action.
 */export const listPrincipalThingsV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/principals/things-v2", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListPrincipalThingsV2" }, ListPrincipalThingsV2Request, ListPrincipalThingsV2Response, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the provisioning templates in your Amazon Web Services account.
 * 
 * 
 * Requires permission to access the ListProvisioningTemplates action.
 */export const listProvisioningTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListProvisioningTemplates" }, ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse, [InternalFailureException, InvalidRequestException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list of provisioning template versions.
 * 
 * 
 * Requires permission to access the ListProvisioningTemplateVersions action.
 */export const listProvisioningTemplateVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/provisioning-templates/{templateName}/versions", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListProvisioningTemplateVersions" }, ListProvisioningTemplateVersionsRequest, ListProvisioningTemplateVersionsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The validation results for all software bill of materials (SBOM) attached to a specific software package version.
 * 
 * 
 * Requires permission to access the ListSbomValidationResults action.
 */export const listSbomValidationResults = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}/sbom-validation-results", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListSbomValidationResults" }, ListSbomValidationResultsRequest, ListSbomValidationResultsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of your scheduled audits.
 * 
 * 
 * Requires permission to access the ListScheduledAudits action.
 */export const listScheduledAudits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/scheduledaudits", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListScheduledAudits" }, ListScheduledAuditsRequest, ListScheduledAuditsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Device Defender security profiles
 * you've
 * created. You can filter security profiles by dimension or custom metric.
 * 
 * 
 * Requires permission to access the ListSecurityProfiles action.
 * 
 * 
 * 
 * 
 * 
 * `dimensionName` and `metricName` cannot be used in the same request.
 */export const listSecurityProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListSecurityProfiles" }, ListSecurityProfilesRequest, ListSecurityProfilesResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Device Defender security profiles attached to a target (thing group).
 * 
 * 
 * Requires permission to access the ListSecurityProfilesForTarget action.
 */export const listSecurityProfilesForTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles-for-target", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListSecurityProfilesForTarget" }, ListSecurityProfilesForTargetRequest, ListSecurityProfilesForTargetResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the streams in your Amazon Web Services account.
 * 
 * 
 * Requires permission to access the ListStreams action.
 */export const listStreams = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/streams", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListStreams" }, ListStreamsRequest, ListStreamsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the targets (thing groups) associated with a given Device Defender security profile.
 * 
 * 
 * Requires permission to access the ListTargetsForSecurityProfile action.
 */export const listTargetsForSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}/targets", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListTargetsForSecurityProfile" }, ListTargetsForSecurityProfileRequest, ListTargetsForSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the principals associated with the specified thing. A principal can be an X.509
 * certificate or an Amazon Cognito ID.
 * 
 * 
 * Requires permission to access the ListThingPrincipals action.
 */export const listThingPrincipalsV2 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/principals-v2", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingPrincipalsV2" }, ListThingPrincipalsV2Request, ListThingPrincipalsV2Response, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your things. Use the **attributeName** and **attributeValue** parameters to filter your things. For example,
 * calling `ListThings` with attributeName=Color and attributeValue=Red
 * retrieves all things in the registry that contain an attribute **Color** with the value **Red**. For more
 * information, see List Things from the Amazon Web Services IoT Core Developer
 * Guide.
 * 
 * 
 * Requires permission to access the ListThings action.
 * 
 * 
 * 
 * 
 * You will not be charged for calling this API if an `Access denied` error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.
 */export const listThings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThings" }, ListThingsRequest, ListThingsResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the existing thing types.
 * 
 * 
 * Requires permission to access the ListThingTypes action.
 */export const listThingTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListThingTypes" }, ListThingTypesRequest, ListThingTypesResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the rules for the specific topic.
 * 
 * 
 * Requires permission to access the ListTopicRules action.
 */export const listTopicRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListTopicRules" }, ListTopicRulesRequest, ListTopicRulesResponse, [InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists logging levels.
 * 
 * 
 * Requires permission to access the ListV2LoggingLevels action.
 */export const listV2LoggingLevels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/v2LoggingLevel", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListV2LoggingLevels" }, ListV2LoggingLevelsRequest, ListV2LoggingLevelsResponse, [InternalException, InvalidRequestException, NotConfiguredException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Device Defender security profile violations discovered during the given time period.
 * You can use filters to limit the results to those alerts issued for a particular security profile,
 * behavior, or thing (device).
 * 
 * 
 * Requires permission to access the ListViolationEvents action.
 */export const listViolationEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/violation-events", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListViolationEvents" }, ListViolationEventsRequest, ListViolationEventsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a device certificate with IoT in the same certificate mode as the signing CA. If you have more than one CA certificate that has the same subject field, you must
 * specify the CA certificate that was used to sign the device certificate being
 * registered.
 * 
 * 
 * Requires permission to access the RegisterCertificate action.
 */export const registerCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate/register", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RegisterCertificate" }, RegisterCertificateRequest, RegisterCertificateResponse, [CertificateConflictException, CertificateStateException, CertificateValidationException, InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Register a certificate that does not have a certificate authority (CA).
 * For supported certificates, consult
 * Certificate signing algorithms supported by IoT.
 */export const registerCertificateWithoutCA = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificate/register-no-ca", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RegisterCertificateWithoutCA" }, RegisterCertificateWithoutCARequest, RegisterCertificateWithoutCAResponse, [CertificateStateException, CertificateValidationException, InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Transfers the specified certificate to the specified Amazon Web Services account.
 * 
 * 
 * Requires permission to access the TransferCertificate action.
 * 
 * 
 * You can cancel the transfer until it is accepted by the recipient.
 * 
 * 
 * No notification is sent to the transfer destination's account. The caller is responsible for notifying the transfer target.
 * 
 * 
 * The certificate being transferred must not be in the `ACTIVE` state. You can use the
 * UpdateCertificate action to deactivate it.
 * 
 * 
 * The certificate must not have any policies attached to it. You can use the
 * DetachPolicy action to detach them.
 * 
 * 
 * 
 * **Customer managed key behavior:** When you use a customer managed key to encrypt your data and then transfer
 * the certificate to a customer in a different account using the `TransferCertificate` operation, the certificates will no longer be encrypted by their
 * customer managed key configuration. During the transfer process, certificates are encrypted using Amazon Web Services IoT Core owned keys.
 * 
 * 
 * While a certificate is in the **PENDING_TRANSFER** state, it's always protected by Amazon Web Services IoT Core owned keys, regardless of the customer managed key configuration of either the source or destination account.
 * 
 * 
 * Once the transfer is completed through AcceptCertificateTransfer, RejectCertificateTransfer, or
 * CancelCertificateTransfer, the certificate will be protected by the customer managed key configuration of the account that owns
 * the certificate after the transfer operation:
 * 
 * 
 * 
 * - If the transfer is accepted: The certificate is encrypted by the target account's customer managed key configuration.
 * 
 * 
 * 
 * - If the transfer is rejected or cancelled: The certificate is protected by the source account's customer managed key configuration.
 */export const transferCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/transfer-certificate/{certificateId}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.TransferCertificate" }, TransferCertificateRequest, TransferCertificateResponse, [CertificateStateException, InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, TransferConflictException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a dynamic thing group.
 * 
 * 
 * Requires permission to access the UpdateDynamicThingGroup action.
 */export const updateDynamicThingGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/dynamic-thing-groups/{thingGroupName}", method: "PATCH", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.UpdateDynamicThingGroup" }, UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse, [InternalFailureException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ThrottlingException, VersionConflictException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Validates a Device Defender security profile behaviors specification.
 * 
 * 
 * Requires permission to access the ValidateSecurityProfileBehaviors action.
 */export const validateSecurityProfileBehaviors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profile-behaviors/validate", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ValidateSecurityProfileBehaviors" }, ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse, [InternalFailureException, InvalidRequestException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates the selected software bill of materials (SBOM) with a specific software package version.
 * 
 * 
 * Requires permission to access the AssociateSbomWithPackageVersion action.
 */export const associateSbomWithPackageVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}/versions/{versionName}/sbom", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.AssociateSbomWithPackageVersion" }, AssociateSbomWithPackageVersionRequest, AssociateSbomWithPackageVersionResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
 * For more information, see Mitigation actions. Each mitigation action can apply only one type of change.
 * 
 * 
 * Requires permission to access the CreateMitigationAction action.
 */export const createMitigationAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/mitigationactions/actions/{actionName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateMitigationAction" }, CreateMitigationActionRequest, CreateMitigationActionResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an IoT software package that can be deployed to your fleet.
 * 
 * 
 * Requires permission to access the CreatePackage and GetIndexingConfiguration actions.
 */export const createPackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/packages/{packageName}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreatePackage" }, CreatePackageRequest, CreatePackageResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a thing record in the registry. If this call is made multiple times using
 * the same thing name and configuration, the call will succeed. If this call is made with
 * the same thing name but different configuration a
 * `ResourceAlreadyExistsException` is thrown.
 * 
 * 
 * 
 * 
 * This is a control plane operation. See Authorization for
 * information about authorizing control plane actions.
 * 
 * 
 * 
 * 
 * Requires permission to access the CreateThing action.
 */export const createThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateThing" }, CreateThingRequest, CreateThingResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a topic rule destination. The destination must be confirmed prior to use.
 * 
 * 
 * Requires permission to access the CreateTopicRuleDestination action.
 */export const createTopicRuleDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/destinations", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateTopicRuleDestination" }, CreateTopicRuleDestinationRequest, CreateTopicRuleDestinationResponse, [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ResourceAlreadyExistsException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the Device Defender audit settings for this account.
 * Settings include how audit notifications are sent and which audit checks are
 * enabled or disabled.
 * 
 * 
 * Requires permission to access the DescribeAccountAuditConfiguration action.
 */export const describeAccountAuditConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/configuration", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAccountAuditConfiguration" }, DescribeAccountAuditConfigurationRequest, DescribeAccountAuditConfigurationResponse, [InternalFailureException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a single audit finding. Properties include the reason for
 * noncompliance, the severity of the issue,
 * and the start time
 * when the audit that returned the
 * finding.
 * 
 * 
 * Requires permission to access the DescribeAuditFinding action.
 */export const describeAuditFinding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/findings/{findingId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAuditFinding" }, DescribeAuditFindingRequest, DescribeAuditFindingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
 */export const describeAuditMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/mitigationactions/tasks/{taskId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAuditMitigationActionsTask" }, DescribeAuditMitigationActionsTaskRequest, DescribeAuditMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Defender audit.
 * 
 * 
 * Requires permission to access the DescribeAuditTask action.
 */export const describeAuditTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/tasks/{taskId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeAuditTask" }, DescribeAuditTaskRequest, DescribeAuditTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a registered CA certificate.
 * 
 * 
 * Requires permission to access the DescribeCACertificate action.
 */export const describeCACertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cacertificate/{certificateId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeCACertificate" }, DescribeCACertificateRequest, DescribeCACertificateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specified certificate.
 * 
 * 
 * Requires permission to access the DescribeCertificate action.
 */export const describeCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/certificates/{certificateId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeCertificate" }, DescribeCertificateRequest, DescribeCertificateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Defender ML Detect mitigation action.
 * 
 * 
 * 
 * Requires permission to access the DescribeDetectMitigationActionsTask action.
 */export const describeDetectMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/detect/mitigationactions/tasks/{taskId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeDetectMitigationActionsTask" }, DescribeDetectMitigationActionsTaskRequest, DescribeDetectMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a job.
 * 
 * 
 * Requires permission to access the DescribeJob action.
 */export const describeJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeJob" }, DescribeJobRequest, DescribeJobResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a job execution.
 * 
 * 
 * Requires permission to access the DescribeJobExecution action.
 */export const describeJobExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things/{thingName}/jobs/{jobId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.DescribeJobExecution" }, DescribeJobExecutionRequest, DescribeJobExecutionResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the specific command execution on a single device.
 */export const getCommandExecution = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/command-executions/{executionId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetCommandExecution" }, GetCommandExecutionRequest, GetCommandExecutionResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the indexing configuration.
 * 
 * 
 * Requires permission to access the GetIndexingConfiguration action.
 */export const getIndexingConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indexing/config", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetIndexingConfiguration" }, GetIndexingConfigurationRequest, GetIndexingConfigurationResponse, [InternalFailureException, InvalidRequestException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets an OTA update.
 * 
 * 
 * Requires permission to access the GetOTAUpdate action.
 */export const getOTAUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/otaUpdates/{otaUpdateId}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetOTAUpdate" }, GetOTAUpdateRequest, GetOTAUpdateResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a topic rule destination.
 * 
 * 
 * Requires permission to access the GetTopicRuleDestination action.
 */export const getTopicRuleDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/destinations/{arn+}", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetTopicRuleDestination" }, GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse, [InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the active violations for a given Device Defender security profile.
 * 
 * 
 * Requires permission to access the ListActiveViolations action.
 */export const listActiveViolations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/active-violations", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListActiveViolations" }, ListActiveViolationsRequest, ListActiveViolationsResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all command executions.
 * 
 * 
 * 
 * 
 * 
 * - You must provide only the `startedTimeFilter` or
 * the `completedTimeFilter` information. If you provide
 * both time filters, the API will generate an error. You can use
 * this information to retrieve a list of command executions
 * within a specific timeframe.
 * 
 * 
 * 
 * - You must provide only the `commandArn` or
 * the `thingArn` information depending on whether you want
 * to list executions for a specific command or an IoT thing. If you provide
 * both fields, the API will generate an error.
 * 
 * 
 * 
 * 
 * 
 * For more information about considerations for using this API, see
 * List
 * command executions in your account (CLI).
 */export const listCommandExecutions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/command-executions", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListCommandExecutions" }, ListCommandExecutionsRequest, ListCommandExecutionsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the job executions for a job.
 * 
 * 
 * Requires permission to access the ListJobExecutionsForJob action.
 */export const listJobExecutionsForJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}/things", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListJobExecutionsForJob" }, ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse, [InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The related resources of an Audit finding.
 * The following resources can be returned from calling this API:
 * 
 * 
 * 
 * - DEVICE_CERTIFICATE
 * 
 * 
 * 
 * - CA_CERTIFICATE
 * 
 * 
 * 
 * - IOT_POLICY
 * 
 * 
 * 
 * - COGNITO_IDENTITY_POOL
 * 
 * 
 * 
 * - CLIENT_ID
 * 
 * 
 * 
 * - ACCOUNT_SETTINGS
 * 
 * 
 * 
 * - ROLE_ALIAS
 * 
 * 
 * 
 * - IAM_ROLE
 * 
 * 
 * 
 * - ISSUER_CERTIFICATE
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * This API is similar to DescribeAuditFinding's RelatedResources
 * but provides pagination and is not limited to 10 resources.
 * When calling DescribeAuditFinding for the intermediate CA revoked for
 * active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.
 */export const listRelatedResourcesForAuditFinding = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/relatedResources", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListRelatedResourcesForAuditFinding" }, ListRelatedResourcesForAuditFindingRequest, ListRelatedResourcesForAuditFindingResponse, [InternalFailureException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the topic rule destinations in your Amazon Web Services account.
 * 
 * 
 * Requires permission to access the ListTopicRuleDestinations action.
 */export const listTopicRuleDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/destinations", method: "GET", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.ListTopicRuleDestinations" }, ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse, [InternalException, InvalidRequestException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA
 * certificates you can register in your Amazon Web Services account. You can register up to 10 CA
 * certificates with the same `CA subject field` per Amazon Web Services account.
 * 
 * 
 * Requires permission to access the RegisterCACertificate action.
 */export const registerCACertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/cacertificate", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RegisterCACertificate" }, RegisterCACertificateRequest, RegisterCACertificateResponse, [CertificateValidationException, InternalFailureException, InvalidRequestException, LimitExceededException, RegistrationCodeValidationException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The query search index.
 * 
 * 
 * Requires permission to access the SearchIndex action.
 */export const searchIndex = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/search", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.SearchIndex" }, SearchIndexRequest, SearchIndexResponse, [IndexNotReadyException, InternalFailureException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a task that applies a set of mitigation actions to the specified target.
 * 
 * 
 * Requires permission to access the StartAuditMitigationActionsTask action.
 */export const startAuditMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/audit/mitigationactions/tasks/{taskId}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.StartAuditMitigationActionsTask" }, StartAuditMitigationActionsTaskRequest, StartAuditMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, TaskAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a Device Defender ML Detect mitigation actions task.
 * 
 * 
 * 
 * Requires permission to access the StartDetectMitigationActionsTask action.
 */export const startDetectMitigationActionsTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/detect/mitigationactions/tasks/{taskId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.StartDetectMitigationActionsTask" }, StartDetectMitigationActionsTaskRequest, StartDetectMitigationActionsTaskResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, TaskAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a job.
 * 
 * 
 * Requires permission to access the CreateJob action.
 */export const createJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/jobs/{jobId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateJob" }, CreateJobRequest, CreateJobResponse, [InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Device Defender security profile.
 * 
 * 
 * Requires permission to access the CreateSecurityProfile action.
 */export const createSecurityProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/security-profiles/{securityProfileName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateSecurityProfile" }, CreateSecurityProfileRequest, CreateSecurityProfileResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new thing type. If this call is made multiple times using
 * the same thing type name and configuration, the call will succeed. If this call is made with
 * the same thing type name but different configuration a `ResourceAlreadyExistsException` is thrown.
 * 
 * 
 * 
 * Requires permission to access the CreateThingType action.
 */export const createThingType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/thing-types/{thingTypeName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateThingType" }, CreateThingTypeRequest, CreateThingTypeResponse, [InternalFailureException, InvalidRequestException, ResourceAlreadyExistsException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Aggregates on indexed data with search queries pertaining to particular fields.
 * 
 * 
 * Requires permission to access the GetBucketsAggregation action.
 */export const getBucketsAggregation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/indices/buckets", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.GetBucketsAggregation" }, GetBucketsAggregationRequest, GetBucketsAggregationResponse, [IndexNotReadyException, InternalFailureException, InvalidAggregationException, InvalidQueryException, InvalidRequestException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provisions a thing in the device registry. RegisterThing calls other IoT control
 * plane APIs. These calls might exceed your account level
 * IoT Throttling Limits and cause throttle errors. Please contact Amazon Web Services Customer Support to raise
 * your throttling limits if necessary.
 * 
 * 
 * Requires permission to access the RegisterThing action.
 */export const registerThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/things", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.RegisterThing" }, RegisterThingRequest, RegisterThingResponse, [ConflictingResourceUpdateException, InternalFailureException, InvalidRequestException, ResourceRegistrationFailureException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 * this to test and debug the custom authorization behavior of devices that connect to the IoT
 * device gateway.
 * 
 * 
 * Requires permission to access the TestInvokeAuthorizer action.
 */export const testInvokeAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/authorizer/{authorizerName}/test", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.TestInvokeAuthorizer" }, TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse, [InternalFailureException, InvalidRequestException, InvalidResponseException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a command. A command contains reusable configurations that can be applied
 * before they are sent to the devices.
 */export const createCommand = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/commands/{commandId}", method: "PUT", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateCommand" }, CreateCommandRequest, CreateCommandResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests if a specified principal is authorized to perform an IoT action on a
 * specified resource. Use this to test and debug the authorization behavior of devices that
 * connect to the IoT device gateway.
 * 
 * 
 * Requires permission to access the TestAuthorization action.
 */export const testAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/test-authorization", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.TestAuthorization" }, TestAuthorizationRequest, TestAuthorizationResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an IoT OTA update on a target group of things or groups.
 * 
 * 
 * Requires permission to access the CreateOTAUpdate action.
 */export const createOTAUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/otaUpdates/{otaUpdateId}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateOTAUpdate" }, CreateOTAUpdateRequest, CreateOTAUpdateResponse, [InternalFailureException, InvalidRequestException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ServiceUnavailableException, ThrottlingException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a rule. Creating rules is an administrator-level action. Any user who has
 * permission to create rules will be able to access data processed by the rule.
 * 
 * 
 * Requires permission to access the CreateTopicRule action.
 */export const createTopicRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-05-28", uri: "/rules/{ruleName}", sdkId: "IoT", sigV4ServiceName: "iot", name: "AWSIotService.CreateTopicRule" }, CreateTopicRuleRequest, S.Struct({}), [ConflictingResourceUpdateException, InternalException, InvalidRequestException, ResourceAlreadyExistsException, ServiceUnavailableException, SqlParseException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
