import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeregisterAccountRequest extends S.Class<DeregisterAccountRequest>("DeregisterAccountRequest")({}) {}
export class GetAccountStatusRequest extends S.Class<GetAccountStatusRequest>("GetAccountStatusRequest")({}) {}
export class GetInsightsRequest extends S.Class<GetInsightsRequest>("GetInsightsRequest")({}) {}
export class GetOrganizationAdminAccountRequest extends S.Class<GetOrganizationAdminAccountRequest>("GetOrganizationAdminAccountRequest")({}) {}
export class GetServicesInScopeRequest extends S.Class<GetServicesInScopeRequest>("GetServicesInScopeRequest")({}) {}
export const EvidenceIds = S.Array(S.String);
export const DelegationIds = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateAssessmentReportEvidenceFolderRequest extends S.Class<AssociateAssessmentReportEvidenceFolderRequest>("AssociateAssessmentReportEvidenceFolderRequest")({assessmentId: S.String, evidenceFolderId: S.String}) {}
export class AssociateAssessmentReportEvidenceFolderResponse extends S.Class<AssociateAssessmentReportEvidenceFolderResponse>("AssociateAssessmentReportEvidenceFolderResponse")({}) {}
export class BatchAssociateAssessmentReportEvidenceRequest extends S.Class<BatchAssociateAssessmentReportEvidenceRequest>("BatchAssociateAssessmentReportEvidenceRequest")({assessmentId: S.String, evidenceFolderId: S.String, evidenceIds: EvidenceIds}) {}
export class BatchDeleteDelegationByAssessmentRequest extends S.Class<BatchDeleteDelegationByAssessmentRequest>("BatchDeleteDelegationByAssessmentRequest")({delegationIds: DelegationIds, assessmentId: S.String}) {}
export class BatchDisassociateAssessmentReportEvidenceRequest extends S.Class<BatchDisassociateAssessmentReportEvidenceRequest>("BatchDisassociateAssessmentReportEvidenceRequest")({assessmentId: S.String, evidenceFolderId: S.String, evidenceIds: EvidenceIds}) {}
export class CreateAssessmentReportRequest extends S.Class<CreateAssessmentReportRequest>("CreateAssessmentReportRequest")({name: S.String, description: S.optional(S.String), assessmentId: S.String, queryStatement: S.optional(S.String)}) {}
export class DeleteAssessmentRequest extends S.Class<DeleteAssessmentRequest>("DeleteAssessmentRequest")({assessmentId: S.String}) {}
export class DeleteAssessmentResponse extends S.Class<DeleteAssessmentResponse>("DeleteAssessmentResponse")({}) {}
export class DeleteAssessmentFrameworkRequest extends S.Class<DeleteAssessmentFrameworkRequest>("DeleteAssessmentFrameworkRequest")({frameworkId: S.String}) {}
export class DeleteAssessmentFrameworkResponse extends S.Class<DeleteAssessmentFrameworkResponse>("DeleteAssessmentFrameworkResponse")({}) {}
export class DeleteAssessmentFrameworkShareRequest extends S.Class<DeleteAssessmentFrameworkShareRequest>("DeleteAssessmentFrameworkShareRequest")({requestId: S.String, requestType: S.String}) {}
export class DeleteAssessmentFrameworkShareResponse extends S.Class<DeleteAssessmentFrameworkShareResponse>("DeleteAssessmentFrameworkShareResponse")({}) {}
export class DeleteAssessmentReportRequest extends S.Class<DeleteAssessmentReportRequest>("DeleteAssessmentReportRequest")({assessmentId: S.String, assessmentReportId: S.String}) {}
export class DeleteAssessmentReportResponse extends S.Class<DeleteAssessmentReportResponse>("DeleteAssessmentReportResponse")({}) {}
export class DeleteControlRequest extends S.Class<DeleteControlRequest>("DeleteControlRequest")({controlId: S.String}) {}
export class DeleteControlResponse extends S.Class<DeleteControlResponse>("DeleteControlResponse")({}) {}
export class DeregisterAccountResponse extends S.Class<DeregisterAccountResponse>("DeregisterAccountResponse")({status: S.optional(S.String)}) {}
export class DeregisterOrganizationAdminAccountRequest extends S.Class<DeregisterOrganizationAdminAccountRequest>("DeregisterOrganizationAdminAccountRequest")({adminAccountId: S.optional(S.String)}) {}
export class DeregisterOrganizationAdminAccountResponse extends S.Class<DeregisterOrganizationAdminAccountResponse>("DeregisterOrganizationAdminAccountResponse")({}) {}
export class DisassociateAssessmentReportEvidenceFolderRequest extends S.Class<DisassociateAssessmentReportEvidenceFolderRequest>("DisassociateAssessmentReportEvidenceFolderRequest")({assessmentId: S.String, evidenceFolderId: S.String}) {}
export class DisassociateAssessmentReportEvidenceFolderResponse extends S.Class<DisassociateAssessmentReportEvidenceFolderResponse>("DisassociateAssessmentReportEvidenceFolderResponse")({}) {}
export class GetAccountStatusResponse extends S.Class<GetAccountStatusResponse>("GetAccountStatusResponse")({status: S.optional(S.String)}) {}
export class GetAssessmentRequest extends S.Class<GetAssessmentRequest>("GetAssessmentRequest")({assessmentId: S.String}) {}
export class GetAssessmentFrameworkRequest extends S.Class<GetAssessmentFrameworkRequest>("GetAssessmentFrameworkRequest")({frameworkId: S.String}) {}
export class GetAssessmentReportUrlRequest extends S.Class<GetAssessmentReportUrlRequest>("GetAssessmentReportUrlRequest")({assessmentReportId: S.String, assessmentId: S.String}) {}
export class GetChangeLogsRequest extends S.Class<GetChangeLogsRequest>("GetChangeLogsRequest")({assessmentId: S.String, controlSetId: S.optional(S.String), controlId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetControlRequest extends S.Class<GetControlRequest>("GetControlRequest")({controlId: S.String}) {}
export class GetDelegationsRequest extends S.Class<GetDelegationsRequest>("GetDelegationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetEvidenceRequest extends S.Class<GetEvidenceRequest>("GetEvidenceRequest")({assessmentId: S.String, controlSetId: S.String, evidenceFolderId: S.String, evidenceId: S.String}) {}
export class GetEvidenceByEvidenceFolderRequest extends S.Class<GetEvidenceByEvidenceFolderRequest>("GetEvidenceByEvidenceFolderRequest")({assessmentId: S.String, controlSetId: S.String, evidenceFolderId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetEvidenceFileUploadUrlRequest extends S.Class<GetEvidenceFileUploadUrlRequest>("GetEvidenceFileUploadUrlRequest")({fileName: S.String}) {}
export class GetEvidenceFolderRequest extends S.Class<GetEvidenceFolderRequest>("GetEvidenceFolderRequest")({assessmentId: S.String, controlSetId: S.String, evidenceFolderId: S.String}) {}
export class GetEvidenceFoldersByAssessmentRequest extends S.Class<GetEvidenceFoldersByAssessmentRequest>("GetEvidenceFoldersByAssessmentRequest")({assessmentId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetEvidenceFoldersByAssessmentControlRequest extends S.Class<GetEvidenceFoldersByAssessmentControlRequest>("GetEvidenceFoldersByAssessmentControlRequest")({assessmentId: S.String, controlSetId: S.String, controlId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetInsightsByAssessmentRequest extends S.Class<GetInsightsByAssessmentRequest>("GetInsightsByAssessmentRequest")({assessmentId: S.String}) {}
export class GetOrganizationAdminAccountResponse extends S.Class<GetOrganizationAdminAccountResponse>("GetOrganizationAdminAccountResponse")({adminAccountId: S.optional(S.String), organizationId: S.optional(S.String)}) {}
export class GetSettingsRequest extends S.Class<GetSettingsRequest>("GetSettingsRequest")({attribute: S.String}) {}
export class ListAssessmentControlInsightsByControlDomainRequest extends S.Class<ListAssessmentControlInsightsByControlDomainRequest>("ListAssessmentControlInsightsByControlDomainRequest")({controlDomainId: S.String, assessmentId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentFrameworksRequest extends S.Class<ListAssessmentFrameworksRequest>("ListAssessmentFrameworksRequest")({frameworkType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentFrameworkShareRequestsRequest extends S.Class<ListAssessmentFrameworkShareRequestsRequest>("ListAssessmentFrameworkShareRequestsRequest")({requestType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentReportsRequest extends S.Class<ListAssessmentReportsRequest>("ListAssessmentReportsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentsRequest extends S.Class<ListAssessmentsRequest>("ListAssessmentsRequest")({status: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListControlDomainInsightsRequest extends S.Class<ListControlDomainInsightsRequest>("ListControlDomainInsightsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListControlDomainInsightsByAssessmentRequest extends S.Class<ListControlDomainInsightsByAssessmentRequest>("ListControlDomainInsightsByAssessmentRequest")({assessmentId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListControlInsightsByControlDomainRequest extends S.Class<ListControlInsightsByControlDomainRequest>("ListControlInsightsByControlDomainRequest")({controlDomainId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListControlsRequest extends S.Class<ListControlsRequest>("ListControlsRequest")({controlType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), controlCatalogId: S.optional(S.String)}) {}
export class ListKeywordsForDataSourceRequest extends S.Class<ListKeywordsForDataSourceRequest>("ListKeywordsForDataSourceRequest")({source: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListNotificationsRequest extends S.Class<ListNotificationsRequest>("ListNotificationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class RegisterAccountRequest extends S.Class<RegisterAccountRequest>("RegisterAccountRequest")({kmsKey: S.optional(S.String), delegatedAdminAccount: S.optional(S.String)}) {}
export class RegisterOrganizationAdminAccountRequest extends S.Class<RegisterOrganizationAdminAccountRequest>("RegisterOrganizationAdminAccountRequest")({adminAccountId: S.String}) {}
export class StartAssessmentFrameworkShareRequest extends S.Class<StartAssessmentFrameworkShareRequest>("StartAssessmentFrameworkShareRequest")({frameworkId: S.String, destinationAccount: S.String, destinationRegion: S.String, comment: S.optional(S.String)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class AWSAccount extends S.Class<AWSAccount>("AWSAccount")({id: S.optional(S.String), emailAddress: S.optional(S.String), name: S.optional(S.String)}) {}
export const AWSAccounts = S.Array(AWSAccount);
export class AWSService extends S.Class<AWSService>("AWSService")({serviceName: S.optional(S.String)}) {}
export const AWSServices = S.Array(AWSService);
export class Scope extends S.Class<Scope>("Scope")({awsAccounts: S.optional(AWSAccounts), awsServices: S.optional(AWSServices)}) {}
export class AssessmentReportsDestination extends S.Class<AssessmentReportsDestination>("AssessmentReportsDestination")({destinationType: S.optional(S.String), destination: S.optional(S.String)}) {}
export class Role extends S.Class<Role>("Role")({roleType: S.String, roleArn: S.String}) {}
export const Roles = S.Array(Role);
export class UpdateAssessmentRequest extends S.Class<UpdateAssessmentRequest>("UpdateAssessmentRequest")({assessmentId: S.String, assessmentName: S.optional(S.String), assessmentDescription: S.optional(S.String), scope: Scope, assessmentReportsDestination: S.optional(AssessmentReportsDestination), roles: S.optional(Roles)}) {}
export class UpdateAssessmentControlRequest extends S.Class<UpdateAssessmentControlRequest>("UpdateAssessmentControlRequest")({assessmentId: S.String, controlSetId: S.String, controlId: S.String, controlStatus: S.optional(S.String), commentBody: S.optional(S.String)}) {}
export class UpdateAssessmentControlSetStatusRequest extends S.Class<UpdateAssessmentControlSetStatusRequest>("UpdateAssessmentControlSetStatusRequest")({assessmentId: S.String, controlSetId: S.String, status: S.String, comment: S.String}) {}
export class UpdateAssessmentFrameworkShareRequest extends S.Class<UpdateAssessmentFrameworkShareRequest>("UpdateAssessmentFrameworkShareRequest")({requestId: S.String, requestType: S.String, action: S.String}) {}
export class UpdateAssessmentStatusRequest extends S.Class<UpdateAssessmentStatusRequest>("UpdateAssessmentStatusRequest")({assessmentId: S.String, status: S.String}) {}
export class ValidateAssessmentReportIntegrityRequest extends S.Class<ValidateAssessmentReportIntegrityRequest>("ValidateAssessmentReportIntegrityRequest")({s3RelativePath: S.String}) {}
export class CreateDelegationRequest extends S.Class<CreateDelegationRequest>("CreateDelegationRequest")({comment: S.optional(S.String), controlSetId: S.optional(S.String), roleArn: S.optional(S.String), roleType: S.optional(S.String)}) {}
export const CreateDelegationRequests = S.Array(CreateDelegationRequest);
export class ManualEvidence extends S.Class<ManualEvidence>("ManualEvidence")({s3ResourcePath: S.optional(S.String), textResponse: S.optional(S.String), evidenceFileName: S.optional(S.String)}) {}
export const ManualEvidenceList = S.Array(ManualEvidence);
export class Resource extends S.Class<Resource>("Resource")({arn: S.optional(S.String), value: S.optional(S.String), complianceCheck: S.optional(S.String)}) {}
export const Resources = S.Array(Resource);
export const EvidenceAttributes = S.Record({key: S.String, value: S.String});
export class Evidence extends S.Class<Evidence>("Evidence")({dataSource: S.optional(S.String), evidenceAwsAccountId: S.optional(S.String), time: S.optional(S.Date), eventSource: S.optional(S.String), eventName: S.optional(S.String), evidenceByType: S.optional(S.String), resourcesIncluded: S.optional(Resources), attributes: S.optional(EvidenceAttributes), iamId: S.optional(S.String), complianceCheck: S.optional(S.String), awsOrganization: S.optional(S.String), awsAccountId: S.optional(S.String), evidenceFolderId: S.optional(S.String), id: S.optional(S.String), assessmentReportSelection: S.optional(S.String)}) {}
export const EvidenceList = S.Array(Evidence);
export class AssessmentEvidenceFolder extends S.Class<AssessmentEvidenceFolder>("AssessmentEvidenceFolder")({name: S.optional(S.String), date: S.optional(S.Date), assessmentId: S.optional(S.String), controlSetId: S.optional(S.String), controlId: S.optional(S.String), id: S.optional(S.String), dataSource: S.optional(S.String), author: S.optional(S.String), totalEvidence: S.optional(S.Number), assessmentReportSelectionCount: S.optional(S.Number), controlName: S.optional(S.String), evidenceResourcesIncludedCount: S.optional(S.Number), evidenceByTypeConfigurationDataCount: S.optional(S.Number), evidenceByTypeManualCount: S.optional(S.Number), evidenceByTypeComplianceCheckCount: S.optional(S.Number), evidenceByTypeComplianceCheckIssuesCount: S.optional(S.Number), evidenceByTypeUserActivityCount: S.optional(S.Number), evidenceAwsServiceSourceCount: S.optional(S.Number)}) {}
export const AssessmentEvidenceFolders = S.Array(AssessmentEvidenceFolder);
export class Insights extends S.Class<Insights>("Insights")({activeAssessmentsCount: S.optional(S.Number), noncompliantEvidenceCount: S.optional(S.Number), compliantEvidenceCount: S.optional(S.Number), inconclusiveEvidenceCount: S.optional(S.Number), assessmentControlsCountByNoncompliantEvidence: S.optional(S.Number), totalAssessmentControlsCount: S.optional(S.Number), lastUpdated: S.optional(S.Date)}) {}
export class ServiceMetadata extends S.Class<ServiceMetadata>("ServiceMetadata")({name: S.optional(S.String), displayName: S.optional(S.String), description: S.optional(S.String), category: S.optional(S.String)}) {}
export const ServiceMetadataList = S.Array(ServiceMetadata);
export const Keywords = S.Array(S.String);
export class CreateAssessmentFrameworkControl extends S.Class<CreateAssessmentFrameworkControl>("CreateAssessmentFrameworkControl")({id: S.String}) {}
export const CreateAssessmentFrameworkControls = S.Array(CreateAssessmentFrameworkControl);
export class UpdateAssessmentFrameworkControlSet extends S.Class<UpdateAssessmentFrameworkControlSet>("UpdateAssessmentFrameworkControlSet")({id: S.optional(S.String), name: S.String, controls: CreateAssessmentFrameworkControls}) {}
export const UpdateAssessmentFrameworkControlSets = S.Array(UpdateAssessmentFrameworkControlSet);
export class SourceKeyword extends S.Class<SourceKeyword>("SourceKeyword")({keywordInputType: S.optional(S.String), keywordValue: S.optional(S.String)}) {}
export class ControlMappingSource extends S.Class<ControlMappingSource>("ControlMappingSource")({sourceId: S.optional(S.String), sourceName: S.optional(S.String), sourceDescription: S.optional(S.String), sourceSetUpOption: S.optional(S.String), sourceType: S.optional(S.String), sourceKeyword: S.optional(SourceKeyword), sourceFrequency: S.optional(S.String), troubleshootingText: S.optional(S.String)}) {}
export const ControlMappingSources = S.Array(ControlMappingSource);
export class DeregistrationPolicy extends S.Class<DeregistrationPolicy>("DeregistrationPolicy")({deleteResources: S.optional(S.String)}) {}
export class DefaultExportDestination extends S.Class<DefaultExportDestination>("DefaultExportDestination")({destinationType: S.optional(S.String), destination: S.optional(S.String)}) {}
export const ValidationErrors = S.Array(S.String);
export class BatchCreateDelegationByAssessmentRequest extends S.Class<BatchCreateDelegationByAssessmentRequest>("BatchCreateDelegationByAssessmentRequest")({createDelegationRequests: CreateDelegationRequests, assessmentId: S.String}) {}
export class AssessmentReportEvidenceError extends S.Class<AssessmentReportEvidenceError>("AssessmentReportEvidenceError")({evidenceId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const AssessmentReportEvidenceErrors = S.Array(AssessmentReportEvidenceError);
export class BatchDisassociateAssessmentReportEvidenceResponse extends S.Class<BatchDisassociateAssessmentReportEvidenceResponse>("BatchDisassociateAssessmentReportEvidenceResponse")({evidenceIds: S.optional(EvidenceIds), errors: S.optional(AssessmentReportEvidenceErrors)}) {}
export class BatchImportEvidenceToAssessmentControlRequest extends S.Class<BatchImportEvidenceToAssessmentControlRequest>("BatchImportEvidenceToAssessmentControlRequest")({assessmentId: S.String, controlSetId: S.String, controlId: S.String, manualEvidence: ManualEvidenceList}) {}
export class GetEvidenceByEvidenceFolderResponse extends S.Class<GetEvidenceByEvidenceFolderResponse>("GetEvidenceByEvidenceFolderResponse")({evidence: S.optional(EvidenceList), nextToken: S.optional(S.String)}) {}
export class GetEvidenceFileUploadUrlResponse extends S.Class<GetEvidenceFileUploadUrlResponse>("GetEvidenceFileUploadUrlResponse")({evidenceFileName: S.optional(S.String), uploadUrl: S.optional(S.String)}) {}
export class GetEvidenceFoldersByAssessmentResponse extends S.Class<GetEvidenceFoldersByAssessmentResponse>("GetEvidenceFoldersByAssessmentResponse")({evidenceFolders: S.optional(AssessmentEvidenceFolders), nextToken: S.optional(S.String)}) {}
export class GetEvidenceFoldersByAssessmentControlResponse extends S.Class<GetEvidenceFoldersByAssessmentControlResponse>("GetEvidenceFoldersByAssessmentControlResponse")({evidenceFolders: S.optional(AssessmentEvidenceFolders), nextToken: S.optional(S.String)}) {}
export class GetInsightsResponse extends S.Class<GetInsightsResponse>("GetInsightsResponse")({insights: S.optional(Insights)}) {}
export class GetServicesInScopeResponse extends S.Class<GetServicesInScopeResponse>("GetServicesInScopeResponse")({serviceMetadata: S.optional(ServiceMetadataList)}) {}
export class EvidenceInsights extends S.Class<EvidenceInsights>("EvidenceInsights")({noncompliantEvidenceCount: S.optional(S.Number), compliantEvidenceCount: S.optional(S.Number), inconclusiveEvidenceCount: S.optional(S.Number)}) {}
export class ControlDomainInsights extends S.Class<ControlDomainInsights>("ControlDomainInsights")({name: S.optional(S.String), id: S.optional(S.String), controlsCountByNoncompliantEvidence: S.optional(S.Number), totalControlsCount: S.optional(S.Number), evidenceInsights: S.optional(EvidenceInsights), lastUpdated: S.optional(S.Date)}) {}
export const ControlDomainInsightsList = S.Array(ControlDomainInsights);
export class ListControlDomainInsightsByAssessmentResponse extends S.Class<ListControlDomainInsightsByAssessmentResponse>("ListControlDomainInsightsByAssessmentResponse")({controlDomainInsights: S.optional(ControlDomainInsightsList), nextToken: S.optional(S.String)}) {}
export class ListKeywordsForDataSourceResponse extends S.Class<ListKeywordsForDataSourceResponse>("ListKeywordsForDataSourceResponse")({keywords: S.optional(Keywords), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class RegisterAccountResponse extends S.Class<RegisterAccountResponse>("RegisterAccountResponse")({status: S.optional(S.String)}) {}
export class RegisterOrganizationAdminAccountResponse extends S.Class<RegisterOrganizationAdminAccountResponse>("RegisterOrganizationAdminAccountResponse")({adminAccountId: S.optional(S.String), organizationId: S.optional(S.String)}) {}
export class AssessmentFrameworkShareRequest extends S.Class<AssessmentFrameworkShareRequest>("AssessmentFrameworkShareRequest")({id: S.optional(S.String), frameworkId: S.optional(S.String), frameworkName: S.optional(S.String), frameworkDescription: S.optional(S.String), status: S.optional(S.String), sourceAccount: S.optional(S.String), destinationAccount: S.optional(S.String), destinationRegion: S.optional(S.String), expirationTime: S.optional(S.Date), creationTime: S.optional(S.Date), lastUpdated: S.optional(S.Date), comment: S.optional(S.String), standardControlsCount: S.optional(S.Number), customControlsCount: S.optional(S.Number), complianceType: S.optional(S.String)}) {}
export class StartAssessmentFrameworkShareResponse extends S.Class<StartAssessmentFrameworkShareResponse>("StartAssessmentFrameworkShareResponse")({assessmentFrameworkShareRequest: S.optional(AssessmentFrameworkShareRequest)}) {}
export class Delegation extends S.Class<Delegation>("Delegation")({id: S.optional(S.String), assessmentName: S.optional(S.String), assessmentId: S.optional(S.String), status: S.optional(S.String), roleArn: S.optional(S.String), roleType: S.optional(S.String), creationTime: S.optional(S.Date), lastUpdated: S.optional(S.Date), controlSetId: S.optional(S.String), comment: S.optional(S.String), createdBy: S.optional(S.String)}) {}
export const Delegations = S.Array(Delegation);
export class AssessmentMetadata extends S.Class<AssessmentMetadata>("AssessmentMetadata")({name: S.optional(S.String), id: S.optional(S.String), description: S.optional(S.String), complianceType: S.optional(S.String), status: S.optional(S.String), assessmentReportsDestination: S.optional(AssessmentReportsDestination), scope: S.optional(Scope), roles: S.optional(Roles), delegations: S.optional(Delegations), creationTime: S.optional(S.Date), lastUpdated: S.optional(S.Date)}) {}
export class FrameworkMetadata extends S.Class<FrameworkMetadata>("FrameworkMetadata")({name: S.optional(S.String), description: S.optional(S.String), logo: S.optional(S.String), complianceType: S.optional(S.String)}) {}
export class ControlComment extends S.Class<ControlComment>("ControlComment")({authorName: S.optional(S.String), commentBody: S.optional(S.String), postedDate: S.optional(S.Date)}) {}
export const ControlComments = S.Array(ControlComment);
export const EvidenceSources = S.Array(S.String);
export class AssessmentControl extends S.Class<AssessmentControl>("AssessmentControl")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), status: S.optional(S.String), response: S.optional(S.String), comments: S.optional(ControlComments), evidenceSources: S.optional(EvidenceSources), evidenceCount: S.optional(S.Number), assessmentReportEvidenceCount: S.optional(S.Number)}) {}
export const AssessmentControls = S.Array(AssessmentControl);
export class AssessmentControlSet extends S.Class<AssessmentControlSet>("AssessmentControlSet")({id: S.optional(S.String), description: S.optional(S.String), status: S.optional(S.String), roles: S.optional(Roles), controls: S.optional(AssessmentControls), delegations: S.optional(Delegations), systemEvidenceCount: S.optional(S.Number), manualEvidenceCount: S.optional(S.Number)}) {}
export const AssessmentControlSets = S.Array(AssessmentControlSet);
export class AssessmentFramework extends S.Class<AssessmentFramework>("AssessmentFramework")({id: S.optional(S.String), arn: S.optional(S.String), metadata: S.optional(FrameworkMetadata), controlSets: S.optional(AssessmentControlSets)}) {}
export class Assessment extends S.Class<Assessment>("Assessment")({arn: S.optional(S.String), awsAccount: S.optional(AWSAccount), metadata: S.optional(AssessmentMetadata), framework: S.optional(AssessmentFramework), tags: S.optional(TagMap)}) {}
export class UpdateAssessmentResponse extends S.Class<UpdateAssessmentResponse>("UpdateAssessmentResponse")({assessment: S.optional(Assessment)}) {}
export class UpdateAssessmentFrameworkRequest extends S.Class<UpdateAssessmentFrameworkRequest>("UpdateAssessmentFrameworkRequest")({frameworkId: S.String, name: S.String, description: S.optional(S.String), complianceType: S.optional(S.String), controlSets: UpdateAssessmentFrameworkControlSets}) {}
export class UpdateAssessmentFrameworkShareResponse extends S.Class<UpdateAssessmentFrameworkShareResponse>("UpdateAssessmentFrameworkShareResponse")({assessmentFrameworkShareRequest: S.optional(AssessmentFrameworkShareRequest)}) {}
export class UpdateAssessmentStatusResponse extends S.Class<UpdateAssessmentStatusResponse>("UpdateAssessmentStatusResponse")({assessment: S.optional(Assessment)}) {}
export class UpdateControlRequest extends S.Class<UpdateControlRequest>("UpdateControlRequest")({controlId: S.String, name: S.String, description: S.optional(S.String), testingInformation: S.optional(S.String), actionPlanTitle: S.optional(S.String), actionPlanInstructions: S.optional(S.String), controlMappingSources: ControlMappingSources}) {}
export class UpdateSettingsRequest extends S.Class<UpdateSettingsRequest>("UpdateSettingsRequest")({snsTopic: S.optional(S.String), defaultAssessmentReportsDestination: S.optional(AssessmentReportsDestination), defaultProcessOwners: S.optional(Roles), kmsKey: S.optional(S.String), evidenceFinderEnabled: S.optional(S.Boolean), deregistrationPolicy: S.optional(DeregistrationPolicy), defaultExportDestination: S.optional(DefaultExportDestination)}) {}
export class ValidateAssessmentReportIntegrityResponse extends S.Class<ValidateAssessmentReportIntegrityResponse>("ValidateAssessmentReportIntegrityResponse")({signatureValid: S.optional(S.Boolean), signatureAlgorithm: S.optional(S.String), signatureDateTime: S.optional(S.String), signatureKeyId: S.optional(S.String), validationErrors: S.optional(ValidationErrors)}) {}
export class BatchDeleteDelegationByAssessmentError extends S.Class<BatchDeleteDelegationByAssessmentError>("BatchDeleteDelegationByAssessmentError")({delegationId: S.optional(S.String), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchDeleteDelegationByAssessmentErrors = S.Array(BatchDeleteDelegationByAssessmentError);
export class CreateAssessmentFrameworkControlSet extends S.Class<CreateAssessmentFrameworkControlSet>("CreateAssessmentFrameworkControlSet")({name: S.String, controls: S.optional(CreateAssessmentFrameworkControls)}) {}
export const CreateAssessmentFrameworkControlSets = S.Array(CreateAssessmentFrameworkControlSet);
export class AssessmentReport extends S.Class<AssessmentReport>("AssessmentReport")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), awsAccountId: S.optional(S.String), assessmentId: S.optional(S.String), assessmentName: S.optional(S.String), author: S.optional(S.String), status: S.optional(S.String), creationTime: S.optional(S.Date)}) {}
export class CreateControlMappingSource extends S.Class<CreateControlMappingSource>("CreateControlMappingSource")({sourceName: S.optional(S.String), sourceDescription: S.optional(S.String), sourceSetUpOption: S.optional(S.String), sourceType: S.optional(S.String), sourceKeyword: S.optional(SourceKeyword), sourceFrequency: S.optional(S.String), troubleshootingText: S.optional(S.String)}) {}
export const CreateControlMappingSources = S.Array(CreateControlMappingSource);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class URL extends S.Class<URL>("URL")({hyperlinkName: S.optional(S.String), link: S.optional(S.String)}) {}
export class ChangeLog extends S.Class<ChangeLog>("ChangeLog")({objectType: S.optional(S.String), objectName: S.optional(S.String), action: S.optional(S.String), createdAt: S.optional(S.Date), createdBy: S.optional(S.String)}) {}
export const ChangeLogs = S.Array(ChangeLog);
export class Control extends S.Class<Control>("Control")({arn: S.optional(S.String), id: S.optional(S.String), type: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), testingInformation: S.optional(S.String), actionPlanTitle: S.optional(S.String), actionPlanInstructions: S.optional(S.String), controlSources: S.optional(S.String), controlMappingSources: S.optional(ControlMappingSources), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), createdBy: S.optional(S.String), lastUpdatedBy: S.optional(S.String), tags: S.optional(TagMap), state: S.optional(S.String)}) {}
export class DelegationMetadata extends S.Class<DelegationMetadata>("DelegationMetadata")({id: S.optional(S.String), assessmentName: S.optional(S.String), assessmentId: S.optional(S.String), status: S.optional(S.String), roleArn: S.optional(S.String), creationTime: S.optional(S.Date), controlSetName: S.optional(S.String)}) {}
export const DelegationMetadataList = S.Array(DelegationMetadata);
export class InsightsByAssessment extends S.Class<InsightsByAssessment>("InsightsByAssessment")({noncompliantEvidenceCount: S.optional(S.Number), compliantEvidenceCount: S.optional(S.Number), inconclusiveEvidenceCount: S.optional(S.Number), assessmentControlsCountByNoncompliantEvidence: S.optional(S.Number), totalAssessmentControlsCount: S.optional(S.Number), lastUpdated: S.optional(S.Date)}) {}
export class AssessmentFrameworkMetadata extends S.Class<AssessmentFrameworkMetadata>("AssessmentFrameworkMetadata")({arn: S.optional(S.String), id: S.optional(S.String), type: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), logo: S.optional(S.String), complianceType: S.optional(S.String), controlsCount: S.optional(S.Number), controlSetsCount: S.optional(S.Number), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export const FrameworkMetadataList = S.Array(AssessmentFrameworkMetadata);
export const AssessmentFrameworkShareRequestList = S.Array(AssessmentFrameworkShareRequest);
export class AssessmentReportMetadata extends S.Class<AssessmentReportMetadata>("AssessmentReportMetadata")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), assessmentId: S.optional(S.String), assessmentName: S.optional(S.String), author: S.optional(S.String), status: S.optional(S.String), creationTime: S.optional(S.Date)}) {}
export const AssessmentReportsMetadata = S.Array(AssessmentReportMetadata);
export class ControlInsightsMetadataItem extends S.Class<ControlInsightsMetadataItem>("ControlInsightsMetadataItem")({name: S.optional(S.String), id: S.optional(S.String), evidenceInsights: S.optional(EvidenceInsights), lastUpdated: S.optional(S.Date)}) {}
export const ControlInsightsMetadata = S.Array(ControlInsightsMetadataItem);
export class ControlMetadata extends S.Class<ControlMetadata>("ControlMetadata")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), controlSources: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export const ControlMetadataList = S.Array(ControlMetadata);
export class Notification extends S.Class<Notification>("Notification")({id: S.optional(S.String), assessmentId: S.optional(S.String), assessmentName: S.optional(S.String), controlSetId: S.optional(S.String), controlSetName: S.optional(S.String), description: S.optional(S.String), eventTime: S.optional(S.Date), source: S.optional(S.String)}) {}
export const Notifications = S.Array(Notification);
export const Controls = S.Array(Control);
export class BatchAssociateAssessmentReportEvidenceResponse extends S.Class<BatchAssociateAssessmentReportEvidenceResponse>("BatchAssociateAssessmentReportEvidenceResponse")({evidenceIds: S.optional(EvidenceIds), errors: S.optional(AssessmentReportEvidenceErrors)}) {}
export class BatchDeleteDelegationByAssessmentResponse extends S.Class<BatchDeleteDelegationByAssessmentResponse>("BatchDeleteDelegationByAssessmentResponse")({errors: S.optional(BatchDeleteDelegationByAssessmentErrors)}) {}
export class CreateAssessmentRequest extends S.Class<CreateAssessmentRequest>("CreateAssessmentRequest")({name: S.String, description: S.optional(S.String), assessmentReportsDestination: AssessmentReportsDestination, scope: Scope, roles: Roles, frameworkId: S.String, tags: S.optional(TagMap)}) {}
export class CreateAssessmentFrameworkRequest extends S.Class<CreateAssessmentFrameworkRequest>("CreateAssessmentFrameworkRequest")({name: S.String, description: S.optional(S.String), complianceType: S.optional(S.String), controlSets: CreateAssessmentFrameworkControlSets, tags: S.optional(TagMap)}) {}
export class CreateAssessmentReportResponse extends S.Class<CreateAssessmentReportResponse>("CreateAssessmentReportResponse")({assessmentReport: S.optional(AssessmentReport)}) {}
export class CreateControlRequest extends S.Class<CreateControlRequest>("CreateControlRequest")({name: S.String, description: S.optional(S.String), testingInformation: S.optional(S.String), actionPlanTitle: S.optional(S.String), actionPlanInstructions: S.optional(S.String), controlMappingSources: CreateControlMappingSources, tags: S.optional(TagMap)}) {}
export class GetAssessmentReportUrlResponse extends S.Class<GetAssessmentReportUrlResponse>("GetAssessmentReportUrlResponse")({preSignedUrl: S.optional(URL)}) {}
export class GetChangeLogsResponse extends S.Class<GetChangeLogsResponse>("GetChangeLogsResponse")({changeLogs: S.optional(ChangeLogs), nextToken: S.optional(S.String)}) {}
export class GetControlResponse extends S.Class<GetControlResponse>("GetControlResponse")({control: S.optional(Control)}) {}
export class GetDelegationsResponse extends S.Class<GetDelegationsResponse>("GetDelegationsResponse")({delegations: S.optional(DelegationMetadataList), nextToken: S.optional(S.String)}) {}
export class GetEvidenceFolderResponse extends S.Class<GetEvidenceFolderResponse>("GetEvidenceFolderResponse")({evidenceFolder: S.optional(AssessmentEvidenceFolder)}) {}
export class GetInsightsByAssessmentResponse extends S.Class<GetInsightsByAssessmentResponse>("GetInsightsByAssessmentResponse")({insights: S.optional(InsightsByAssessment)}) {}
export class ListAssessmentFrameworksResponse extends S.Class<ListAssessmentFrameworksResponse>("ListAssessmentFrameworksResponse")({frameworkMetadataList: S.optional(FrameworkMetadataList), nextToken: S.optional(S.String)}) {}
export class ListAssessmentFrameworkShareRequestsResponse extends S.Class<ListAssessmentFrameworkShareRequestsResponse>("ListAssessmentFrameworkShareRequestsResponse")({assessmentFrameworkShareRequests: S.optional(AssessmentFrameworkShareRequestList), nextToken: S.optional(S.String)}) {}
export class ListAssessmentReportsResponse extends S.Class<ListAssessmentReportsResponse>("ListAssessmentReportsResponse")({assessmentReports: S.optional(AssessmentReportsMetadata), nextToken: S.optional(S.String)}) {}
export class ListControlDomainInsightsResponse extends S.Class<ListControlDomainInsightsResponse>("ListControlDomainInsightsResponse")({controlDomainInsights: S.optional(ControlDomainInsightsList), nextToken: S.optional(S.String)}) {}
export class ListControlInsightsByControlDomainResponse extends S.Class<ListControlInsightsByControlDomainResponse>("ListControlInsightsByControlDomainResponse")({controlInsightsMetadata: S.optional(ControlInsightsMetadata), nextToken: S.optional(S.String)}) {}
export class ListControlsResponse extends S.Class<ListControlsResponse>("ListControlsResponse")({controlMetadataList: S.optional(ControlMetadataList), nextToken: S.optional(S.String)}) {}
export class ListNotificationsResponse extends S.Class<ListNotificationsResponse>("ListNotificationsResponse")({notifications: S.optional(Notifications), nextToken: S.optional(S.String)}) {}
export class UpdateAssessmentControlSetStatusResponse extends S.Class<UpdateAssessmentControlSetStatusResponse>("UpdateAssessmentControlSetStatusResponse")({controlSet: S.optional(AssessmentControlSet)}) {}
export class ControlSet extends S.Class<ControlSet>("ControlSet")({id: S.optional(S.String), name: S.optional(S.String), controls: S.optional(Controls)}) {}
export const ControlSets = S.Array(ControlSet);
export class Framework extends S.Class<Framework>("Framework")({arn: S.optional(S.String), id: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), complianceType: S.optional(S.String), description: S.optional(S.String), logo: S.optional(S.String), controlSources: S.optional(S.String), controlSets: S.optional(ControlSets), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date), createdBy: S.optional(S.String), lastUpdatedBy: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class UpdateAssessmentFrameworkResponse extends S.Class<UpdateAssessmentFrameworkResponse>("UpdateAssessmentFrameworkResponse")({framework: S.optional(Framework)}) {}
export class UpdateControlResponse extends S.Class<UpdateControlResponse>("UpdateControlResponse")({control: S.optional(Control)}) {}
export class EvidenceFinderEnablement extends S.Class<EvidenceFinderEnablement>("EvidenceFinderEnablement")({eventDataStoreArn: S.optional(S.String), enablementStatus: S.optional(S.String), backfillStatus: S.optional(S.String), error: S.optional(S.String)}) {}
export class Settings extends S.Class<Settings>("Settings")({isAwsOrgEnabled: S.optional(S.Boolean), snsTopic: S.optional(S.String), defaultAssessmentReportsDestination: S.optional(AssessmentReportsDestination), defaultProcessOwners: S.optional(Roles), kmsKey: S.optional(S.String), evidenceFinderEnablement: S.optional(EvidenceFinderEnablement), deregistrationPolicy: S.optional(DeregistrationPolicy), defaultExportDestination: S.optional(DefaultExportDestination)}) {}
export class UpdateSettingsResponse extends S.Class<UpdateSettingsResponse>("UpdateSettingsResponse")({settings: S.optional(Settings)}) {}
export class BatchCreateDelegationByAssessmentError extends S.Class<BatchCreateDelegationByAssessmentError>("BatchCreateDelegationByAssessmentError")({createDelegationRequest: S.optional(CreateDelegationRequest), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchCreateDelegationByAssessmentErrors = S.Array(BatchCreateDelegationByAssessmentError);
export class BatchImportEvidenceToAssessmentControlError extends S.Class<BatchImportEvidenceToAssessmentControlError>("BatchImportEvidenceToAssessmentControlError")({manualEvidence: S.optional(ManualEvidence), errorCode: S.optional(S.String), errorMessage: S.optional(S.String)}) {}
export const BatchImportEvidenceToAssessmentControlErrors = S.Array(BatchImportEvidenceToAssessmentControlError);
export class ControlInsightsMetadataByAssessmentItem extends S.Class<ControlInsightsMetadataByAssessmentItem>("ControlInsightsMetadataByAssessmentItem")({name: S.optional(S.String), id: S.optional(S.String), evidenceInsights: S.optional(EvidenceInsights), controlSetName: S.optional(S.String), lastUpdated: S.optional(S.Date)}) {}
export const ControlInsightsMetadataByAssessment = S.Array(ControlInsightsMetadataByAssessmentItem);
export class AssessmentMetadataItem extends S.Class<AssessmentMetadataItem>("AssessmentMetadataItem")({name: S.optional(S.String), id: S.optional(S.String), complianceType: S.optional(S.String), status: S.optional(S.String), roles: S.optional(Roles), delegations: S.optional(Delegations), creationTime: S.optional(S.Date), lastUpdated: S.optional(S.Date)}) {}
export const ListAssessmentMetadata = S.Array(AssessmentMetadataItem);
export class BatchCreateDelegationByAssessmentResponse extends S.Class<BatchCreateDelegationByAssessmentResponse>("BatchCreateDelegationByAssessmentResponse")({delegations: S.optional(Delegations), errors: S.optional(BatchCreateDelegationByAssessmentErrors)}) {}
export class BatchImportEvidenceToAssessmentControlResponse extends S.Class<BatchImportEvidenceToAssessmentControlResponse>("BatchImportEvidenceToAssessmentControlResponse")({errors: S.optional(BatchImportEvidenceToAssessmentControlErrors)}) {}
export class CreateAssessmentResponse extends S.Class<CreateAssessmentResponse>("CreateAssessmentResponse")({assessment: S.optional(Assessment)}) {}
export class CreateAssessmentFrameworkResponse extends S.Class<CreateAssessmentFrameworkResponse>("CreateAssessmentFrameworkResponse")({framework: S.optional(Framework)}) {}
export class CreateControlResponse extends S.Class<CreateControlResponse>("CreateControlResponse")({control: S.optional(Control)}) {}
export class GetAssessmentFrameworkResponse extends S.Class<GetAssessmentFrameworkResponse>("GetAssessmentFrameworkResponse")({framework: S.optional(Framework)}) {}
export class GetEvidenceResponse extends S.Class<GetEvidenceResponse>("GetEvidenceResponse")({evidence: S.optional(Evidence)}) {}
export class GetSettingsResponse extends S.Class<GetSettingsResponse>("GetSettingsResponse")({settings: S.optional(Settings)}) {}
export class ListAssessmentControlInsightsByControlDomainResponse extends S.Class<ListAssessmentControlInsightsByControlDomainResponse>("ListAssessmentControlInsightsByControlDomainResponse")({controlInsightsByAssessment: S.optional(ControlInsightsMetadataByAssessment), nextToken: S.optional(S.String)}) {}
export class ListAssessmentsResponse extends S.Class<ListAssessmentsResponse>("ListAssessmentsResponse")({assessmentMetadata: S.optional(ListAssessmentMetadata), nextToken: S.optional(S.String)}) {}
export class UpdateAssessmentControlResponse extends S.Class<UpdateAssessmentControlResponse>("UpdateAssessmentControlResponse")({control: S.optional(AssessmentControl)}) {}
export class GetAssessmentResponse extends S.Class<GetAssessmentResponse>("GetAssessmentResponse")({assessment: S.optional(Assessment), userRole: S.optional(Role)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Deletes an assessment report in Audit Manager.
 * 
 * 
 * When you run the `DeleteAssessmentReport` operation, Audit Manager
 * attempts to delete the following data:
 * 
 * 
 * 
 * - The specified assessment report that’s stored in your S3 bucket
 * 
 * 
 * 
 * - The associated metadata that’s stored in Audit Manager
 * 
 * 
 * 
 * 
 * If Audit Manager can’t access the assessment report in your S3 bucket, the report
 * isn’t deleted. In this event, the `DeleteAssessmentReport` operation doesn’t
 * fail. Instead, it proceeds to delete the associated metadata only. You must then delete the
 * assessment report from the S3 bucket yourself.
 * 
 * 
 * This scenario happens when Audit Manager receives a `403 (Forbidden)` or
 * `404 (Not Found)` error from Amazon S3. To avoid this, make sure that
 * your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that
 * you can use, see Assessment report destination permissions in the *Audit Manager User Guide*. For information about the issues that could cause a 403
 * (Forbidden) or `404 (Not Found`) error from Amazon S3, see
 * List of Error Codes in the Amazon Simple Storage Service API
 * Reference.
 */export const deleteAssessmentReport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/reports/{assessmentReportId}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeleteAssessmentReport" }, DeleteAssessmentReportRequest, DeleteAssessmentReportResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a custom control in Audit Manager.
 * 
 * 
 * 
 * 
 * When you invoke this operation, the custom control is deleted from any frameworks or
 * assessments that it’s currently part of. As a result, Audit Manager will stop
 * collecting evidence for that custom control in all of your assessments. This includes
 * assessments that you previously created before you deleted the custom control.
 */export const deleteControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/controls/{controlId}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeleteControl" }, DeleteControlRequest, DeleteControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregisters an account in Audit Manager.
 * 
 * 
 * 
 * 
 * Before you deregister, you can use the UpdateSettings API operation to set your preferred data retention policy. By
 * default, Audit Manager retains your data. If you want to delete your data, you can
 * use the `DeregistrationPolicy` attribute to request the deletion of your
 * data.
 * 
 * 
 * For more information about data retention, see Data
 * Protection in the *Audit Manager User Guide*.
 */export const deregisterAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/deregisterAccount", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeregisterAccount" }, DeregisterAccountRequest, DeregisterAccountResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified Amazon Web Services account as a delegated administrator for
 * Audit Manager.
 * 
 * 
 * When you remove a delegated administrator from your Audit Manager settings, you
 * continue to have access to the evidence that you previously collected under that account.
 * This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to
 * that delegated administrator account moving forward.
 * 
 * 
 * 
 * 
 * Keep in mind the following cleanup task if you use evidence finder:
 * 
 * 
 * Before you use your management account to remove a delegated administrator, make sure
 * that the current delegated administrator account signs in to Audit Manager and
 * disables evidence finder first. Disabling evidence finder automatically deletes the
 * event data store that was created in their account when they enabled evidence finder. If
 * this task isn’t completed, the event data store remains in their account. In this case,
 * we recommend that the original delegated administrator goes to CloudTrail Lake
 * and manually deletes the
 * event data store.
 * 
 * 
 * This cleanup task is necessary to ensure that you don't end up with multiple event
 * data stores. Audit Manager ignores an unused event data store after you remove or
 * change a delegated administrator account. However, the unused event data store continues
 * to incur storage costs from CloudTrail Lake if you don't delete it.
 * 
 * 
 * 
 * 
 * When you deregister a delegated administrator account for Audit Manager, the data
 * for that account isn’t deleted. If you want to delete resource data for a delegated
 * administrator account, you must perform that task separately before you deregister the
 * account. Either, you can do this in the Audit Manager console. Or, you can use one of
 * the delete API operations that are provided by Audit Manager.
 * 
 * 
 * To delete your Audit Manager resource data, see the following instructions:
 * 
 * 
 * 
 * - DeleteAssessment (see also: Deleting an
 * assessment in the Audit Manager User
 * Guide)
 * 
 * 
 * 
 * - DeleteAssessmentFramework (see also: Deleting a
 * custom framework in the Audit Manager User
 * Guide)
 * 
 * 
 * 
 * - DeleteAssessmentFrameworkShare (see also: Deleting a share request in the Audit Manager User
 * Guide)
 * 
 * 
 * 
 * - DeleteAssessmentReport (see also: Deleting an assessment report in the Audit Manager User
 * Guide)
 * 
 * 
 * 
 * - DeleteControl (see also: Deleting a custom
 * control in the Audit Manager User
 * Guide)
 * 
 * 
 * 
 * 
 * 
 * At this time, Audit Manager doesn't provide an option to delete evidence for a
 * specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the
 * time of deregistration.
 */export const deregisterOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/deregisterOrganizationAdminAccount", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeregisterOrganizationAdminAccount" }, DeregisterOrganizationAdminAccountRequest, DeregisterOrganizationAdminAccountResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates an evidence folder from the specified assessment report in Audit Manager.
 */export const disassociateAssessmentReportEvidenceFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/disassociateFromAssessmentReport", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DisassociateAssessmentReportEvidenceFolder" }, DisassociateAssessmentReportEvidenceFolderRequest, DisassociateAssessmentReportEvidenceFolderResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the registration status of an account in Audit Manager.
 */export const getAccountStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/status", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetAccountStatus" }, GetAccountStatusRequest, GetAccountStatusResponse, [InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the name of the delegated Amazon Web Services administrator account for a specified
 * organization.
 */export const getOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/organizationAdminAccount", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetOrganizationAdminAccount" }, GetOrganizationAdminAccountRequest, GetOrganizationAdminAccountResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags the specified resource in Audit Manager.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{resourceArn}", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a resource in Audit Manager.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates an evidence folder to an assessment report in an Audit Manager
 * assessment.
 */export const associateAssessmentReportEvidenceFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/associateToAssessmentReport", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.AssociateAssessmentReportEvidenceFolder" }, AssociateAssessmentReportEvidenceFolderRequest, AssociateAssessmentReportEvidenceFolderResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a list of evidence from an assessment report in Audit Manager.
 */export const batchDisassociateAssessmentReportEvidence = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.BatchDisassociateAssessmentReportEvidence" }, BatchDisassociateAssessmentReportEvidenceRequest, BatchDisassociateAssessmentReportEvidenceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an assessment in Audit Manager.
 */export const deleteAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeleteAssessment" }, DeleteAssessmentRequest, DeleteAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a custom framework in Audit Manager.
 */export const deleteAssessmentFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks/{frameworkId}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeleteAssessmentFramework" }, DeleteAssessmentFrameworkRequest, DeleteAssessmentFrameworkResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets all evidence from a specified evidence folder in Audit Manager.
 */export const getEvidenceByEvidenceFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidenceByEvidenceFolder" }, GetEvidenceByEvidenceFolderRequest, GetEvidenceByEvidenceFolderResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the evidence folders from a specified assessment in Audit Manager.
 */export const getEvidenceFoldersByAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/evidenceFolders", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidenceFoldersByAssessment" }, GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of evidence folders that are associated with a specified control in an
 * Audit Manager assessment.
 */export const getEvidenceFoldersByAssessmentControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidenceFoldersByAssessmentControl" }, GetEvidenceFoldersByAssessmentControlRequest, GetEvidenceFoldersByAssessmentControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the latest analytics data for all your current active assessments.
 */export const getInsights = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetInsights" }, GetInsightsRequest, GetInsightsResponse, [AccessDeniedException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of the Amazon Web Services services from which Audit Manager can collect
 * evidence.
 * 
 * 
 * Audit Manager defines which Amazon Web Services services are in scope for an
 * assessment. Audit Manager infers this scope by examining the assessment’s controls and
 * their data sources, and then mapping this information to one or more of the corresponding
 * Amazon Web Services services that are in this list.
 * 
 * 
 * 
 * 
 * For information about why it's no longer possible to specify services in scope manually, see
 * I can't edit the services in scope for my assessment in
 * the *Troubleshooting* section of the Audit Manager user
 * guide.
 */export const getServicesInScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/services", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetServicesInScope" }, GetServicesInScopeRequest, GetServicesInScopeResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists analytics data for control domains within a specified active assessment.
 * 
 * 
 * Audit Manager supports the control domains that are provided by Amazon Web Services
 * Control Catalog. For information about how to find a list of available control domains, see
 * 
 * `ListDomains`
 * in the Amazon Web Services Control
 * Catalog API Reference.
 * 
 * 
 * 
 * 
 * A control domain is listed only if at least one of the controls within that domain
 * collected evidence on the `lastUpdated` date of
 * `controlDomainInsights`. If this condition isn’t met, no data is listed
 * for that domain.
 */export const listControlDomainInsightsByAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights/control-domains-by-assessment", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListControlDomainInsightsByAssessment" }, ListControlDomainInsightsByAssessmentRequest, ListControlDomainInsightsByAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of keywords that are pre-mapped to the specified control data
 * source.
 */export const listKeywordsForDataSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/dataSourceKeywords", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListKeywordsForDataSource" }, ListKeywordsForDataSourceRequest, ListKeywordsForDataSourceResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags for the specified resource in Audit Manager.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables Audit Manager for the specified Amazon Web Services account.
 */export const registerAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/registerAccount", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.RegisterAccount" }, RegisterAccountRequest, RegisterAccountResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables an Amazon Web Services account within the organization as the delegated
 * administrator for Audit Manager.
 */export const registerOrganizationAdminAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/account/registerOrganizationAdminAccount", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.RegisterOrganizationAdminAccount" }, RegisterOrganizationAdminAccountRequest, RegisterOrganizationAdminAccountResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a share request for a custom framework in Audit Manager.
 * 
 * 
 * The share request specifies a recipient and notifies them that a custom framework is
 * available. Recipients have 120 days to accept or decline the request. If no action is
 * taken, the share request expires.
 * 
 * 
 * When you create a share request, Audit Manager stores a snapshot of your custom
 * framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also
 * stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.
 * 
 * 
 * Audit Manager deletes the snapshot and the backup snapshot when one of the following
 * events occurs:
 * 
 * 
 * 
 * - The sender revokes the share request.
 * 
 * 
 * 
 * - The recipient declines the share request.
 * 
 * 
 * 
 * - The recipient encounters an error and doesn't successfully accept the share
 * request.
 * 
 * 
 * 
 * - The share request expires before the recipient responds to the request.
 * 
 * 
 * 
 * 
 * 
 * When a sender resends a share request, the snapshot is replaced with an updated version that
 * corresponds with the latest version of the custom framework.
 * 
 * 
 * When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share
 * request.
 * 
 * 
 * 
 * 
 * When you invoke the `StartAssessmentFrameworkShare` API, you are about to
 * share a custom framework with another Amazon Web Services account. You may not share a
 * custom framework that is derived from a standard framework if the standard framework is
 * designated as not eligible for sharing by Amazon Web Services, unless you have obtained
 * permission to do so from the owner of the standard framework. To learn more about which
 * standard frameworks are eligible for sharing, see Framework sharing eligibility in the Audit Manager User
 * Guide.
 */export const startAssessmentFrameworkShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks/{frameworkId}/shareRequests", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.StartAssessmentFrameworkShare" }, StartAssessmentFrameworkShareRequest, StartAssessmentFrameworkShareResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a share request for a custom framework in Audit Manager.
 */export const updateAssessmentFrameworkShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworkShareRequests/{requestId}", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessmentFrameworkShare" }, UpdateAssessmentFrameworkShareRequest, UpdateAssessmentFrameworkShareResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of an assessment in Audit Manager.
 */export const updateAssessmentStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/status", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessmentStatus" }, UpdateAssessmentStatusRequest, UpdateAssessmentStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Validates the integrity of an assessment report in Audit Manager.
 */export const validateAssessmentReportIntegrity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentReports/integrity", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ValidateAssessmentReportIntegrity" }, ValidateAssessmentReportIntegrityRequest, ValidateAssessmentReportIntegrityResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a list of evidence to an assessment report in an Audit Manager
 * assessment.
 */export const batchAssociateAssessmentReportEvidence = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/batchAssociateToAssessmentReport", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.BatchAssociateAssessmentReportEvidence" }, BatchAssociateAssessmentReportEvidenceRequest, BatchAssociateAssessmentReportEvidenceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a batch of delegations for an assessment in Audit Manager.
 */export const batchDeleteDelegationByAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/delegations", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.BatchDeleteDelegationByAssessment" }, BatchDeleteDelegationByAssessmentRequest, BatchDeleteDelegationByAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an assessment report for the specified assessment.
 */export const createAssessmentReport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/reports", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.CreateAssessmentReport" }, CreateAssessmentReportRequest, CreateAssessmentReportResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a share request for a custom framework in Audit Manager.
 */export const deleteAssessmentFrameworkShare = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworkShareRequests/{requestId}", method: "DELETE", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.DeleteAssessmentFrameworkShare" }, DeleteAssessmentFrameworkShareRequest, DeleteAssessmentFrameworkShareResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the URL of an assessment report in Audit Manager.
 */export const getAssessmentReportUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/reports/{assessmentReportId}/url", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetAssessmentReportUrl" }, GetAssessmentReportUrlRequest, GetAssessmentReportUrlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of changelogs from Audit Manager.
 */export const getChangeLogs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/changelogs", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetChangeLogs" }, GetChangeLogsRequest, GetChangeLogsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specified control.
 */export const getControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/controls/{controlId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetControl" }, GetControlRequest, GetControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of delegations from an audit owner to a delegate.
 */export const getDelegations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/delegations", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetDelegations" }, GetDelegationsRequest, GetDelegationsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a presigned Amazon S3 URL that can be used to upload a file as manual
 * evidence. For instructions on how to use this operation, see Upload a file from your browser in the Audit Manager User
 * Guide.
 * 
 * 
 * The following restrictions apply to this operation:
 * 
 * 
 * 
 * - Maximum size of an individual evidence file: 100 MB
 * 
 * 
 * 
 * - Number of daily manual evidence uploads per control: 100
 * 
 * 
 * 
 * - Supported file formats: See Supported file types for manual evidence in the *Audit Manager User Guide*
 * 
 * 
 * 
 * 
 * 
 * 
 * For more information about Audit Manager service restrictions, see Quotas and
 * restrictions for Audit Manager.
 */export const getEvidenceFileUploadUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/evidenceFileUploadUrl", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidenceFileUploadUrl" }, GetEvidenceFileUploadUrlRequest, GetEvidenceFileUploadUrlResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets an evidence folder from a specified assessment in Audit Manager.
 */export const getEvidenceFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidenceFolder" }, GetEvidenceFolderRequest, GetEvidenceFolderResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the latest analytics data for a specific active assessment.
 */export const getInsightsByAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights/assessments/{assessmentId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetInsightsByAssessment" }, GetInsightsByAssessmentRequest, GetInsightsByAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the frameworks that are available in the Audit Manager framework
 * library.
 */export const listAssessmentFrameworks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListAssessmentFrameworks" }, ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of sent or received share requests for custom frameworks in Audit Manager.
 */export const listAssessmentFrameworkShareRequests = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworkShareRequests", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListAssessmentFrameworkShareRequests" }, ListAssessmentFrameworkShareRequestsRequest, ListAssessmentFrameworkShareRequestsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of assessment reports created in Audit Manager.
 */export const listAssessmentReports = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentReports", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListAssessmentReports" }, ListAssessmentReportsRequest, ListAssessmentReportsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the latest analytics data for control domains across all of your active
 * assessments.
 * 
 * 
 * Audit Manager supports the control domains that are provided by Amazon Web Services
 * Control Catalog. For information about how to find a list of available control domains, see
 * 
 * `ListDomains`
 * in the Amazon Web Services Control
 * Catalog API Reference.
 * 
 * 
 * 
 * 
 * A control domain is listed only if at least one of the controls within that domain
 * collected evidence on the `lastUpdated` date of
 * `controlDomainInsights`. If this condition isn’t met, no data is listed
 * for that control domain.
 */export const listControlDomainInsights = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights/control-domains", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListControlDomainInsights" }, ListControlDomainInsightsRequest, ListControlDomainInsightsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the latest analytics data for controls within a specific control domain across all
 * active assessments.
 * 
 * 
 * 
 * 
 * Control insights are listed only if the control belongs to the control domain that
 * was specified and the control collected evidence on the `lastUpdated` date of
 * `controlInsightsMetadata`. If neither of these conditions are met, no data
 * is listed for that control.
 */export const listControlInsightsByControlDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights/controls", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListControlInsightsByControlDomain" }, ListControlInsightsByControlDomainRequest, ListControlInsightsByControlDomainResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of controls from Audit Manager.
 */export const listControls = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/controls", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListControls" }, ListControlsRequest, ListControlsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all Audit Manager notifications.
 */export const listNotifications = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/notifications", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListNotifications" }, ListNotificationsRequest, ListNotificationsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Edits an Audit Manager assessment.
 */export const updateAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessment" }, UpdateAssessmentRequest, UpdateAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the status of a control set in an Audit Manager assessment.
 */export const updateAssessmentControlSetStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/status", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessmentControlSetStatus" }, UpdateAssessmentControlSetStatusRequest, UpdateAssessmentControlSetStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a custom framework in Audit Manager.
 */export const updateAssessmentFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks/{frameworkId}", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessmentFramework" }, UpdateAssessmentFrameworkRequest, UpdateAssessmentFrameworkResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a custom control in Audit Manager.
 */export const updateControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/controls/{controlId}", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateControl" }, UpdateControlRequest, UpdateControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates Audit Manager settings for the current account.
 */export const updateSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/settings", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateSettings" }, UpdateSettingsRequest, UpdateSettingsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a batch of delegations for an assessment in Audit Manager.
 */export const batchCreateDelegationByAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/delegations", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.BatchCreateDelegationByAssessment" }, BatchCreateDelegationByAssessmentRequest, BatchCreateDelegationByAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more pieces of evidence to a control in an Audit Manager assessment.
 * 
 * 
 * You can import manual evidence from any S3 bucket by specifying the S3 URI of the
 * object. You can also upload a file from your browser, or enter plain text in response to a
 * risk assessment question.
 * 
 * 
 * The following restrictions apply to this action:
 * 
 * 
 * 
 * - `manualEvidence` can be only one of the following:
 * `evidenceFileName`, `s3ResourcePath`, or
 * `textResponse`
 * 
 * 
 * 
 * 
 * - Maximum size of an individual evidence file: 100 MB
 * 
 * 
 * 
 * - Number of daily manual evidence uploads per control: 100
 * 
 * 
 * 
 * - Supported file formats: See Supported file types for manual evidence in the *Audit Manager User Guide*
 * 
 * 
 * 
 * 
 * 
 * 
 * For more information about Audit Manager service restrictions, see Quotas and
 * restrictions for Audit Manager.
 */export const batchImportEvidenceToAssessmentControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.BatchImportEvidenceToAssessmentControl" }, BatchImportEvidenceToAssessmentControlRequest, BatchImportEvidenceToAssessmentControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an assessment in Audit Manager.
 */export const createAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.CreateAssessment" }, CreateAssessmentRequest, CreateAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom framework in Audit Manager.
 */export const createAssessmentFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.CreateAssessmentFramework" }, CreateAssessmentFrameworkRequest, CreateAssessmentFrameworkResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new custom control in Audit Manager.
 */export const createControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/controls", method: "POST", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.CreateControl" }, CreateControlRequest, CreateControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specified framework.
 */export const getAssessmentFramework = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessmentFrameworks/{frameworkId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetAssessmentFramework" }, GetAssessmentFrameworkRequest, GetAssessmentFrameworkResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specified evidence item.
 */export const getEvidence = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetEvidence" }, GetEvidenceRequest, GetEvidenceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the settings for a specified Amazon Web Services account.
 */export const getSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/settings/{attribute}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetSettings" }, GetSettingsRequest, GetSettingsResponse, [AccessDeniedException, InternalServerException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the latest analytics data for controls within a specific control domain and a
 * specific active assessment.
 * 
 * 
 * 
 * 
 * Control insights are listed only if the control belongs to the control domain and
 * assessment that was specified. Moreover, the control must have collected evidence on the
 * `lastUpdated` date of `controlInsightsByAssessment`. If neither
 * of these conditions are met, no data is listed for that control.
 */export const listAssessmentControlInsightsByControlDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/insights/controls-by-assessment", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListAssessmentControlInsightsByControlDomain" }, ListAssessmentControlInsightsByControlDomainRequest, ListAssessmentControlInsightsByControlDomainResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of current and past assessments from Audit Manager.
 */export const listAssessments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.ListAssessments" }, ListAssessmentsRequest, ListAssessmentsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a control within an assessment in Audit Manager.
 */export const updateAssessmentControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}", method: "PUT", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.UpdateAssessmentControl" }, UpdateAssessmentControlRequest, UpdateAssessmentControlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a specified assessment.
 */export const getAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/assessments/{assessmentId}", method: "GET", sdkId: "AuditManager", sigV4ServiceName: "auditmanager", name: "BedrockAssessmentManagerLambda.GetAssessment" }, GetAssessmentRequest, GetAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
