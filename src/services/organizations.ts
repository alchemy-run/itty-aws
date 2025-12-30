import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class EnableAllFeaturesRequest extends S.Class<EnableAllFeaturesRequest>("EnableAllFeaturesRequest")({}) {}
export const CreateAccountStates = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class AcceptHandshakeRequest extends S.Class<AcceptHandshakeRequest>("AcceptHandshakeRequest")({HandshakeId: S.String}) {}
export class AttachPolicyRequest extends S.Class<AttachPolicyRequest>("AttachPolicyRequest")({PolicyId: S.String, TargetId: S.String}) {}
export class CancelHandshakeRequest extends S.Class<CancelHandshakeRequest>("CancelHandshakeRequest")({HandshakeId: S.String}) {}
export class CloseAccountRequest extends S.Class<CloseAccountRequest>("CloseAccountRequest")({AccountId: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const Tags = S.Array(Tag);
export class CreateGovCloudAccountRequest extends S.Class<CreateGovCloudAccountRequest>("CreateGovCloudAccountRequest")({Email: S.String, AccountName: S.String, RoleName: S.optional(S.String), IamUserAccessToBilling: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class CreateOrganizationRequest extends S.Class<CreateOrganizationRequest>("CreateOrganizationRequest")({FeatureSet: S.optional(S.String)}) {}
export class CreateOrganizationalUnitRequest extends S.Class<CreateOrganizationalUnitRequest>("CreateOrganizationalUnitRequest")({ParentId: S.String, Name: S.String, Tags: S.optional(Tags)}) {}
export class CreatePolicyRequest extends S.Class<CreatePolicyRequest>("CreatePolicyRequest")({Content: S.String, Description: S.String, Name: S.String, Type: S.String, Tags: S.optional(Tags)}) {}
export class DeclineHandshakeRequest extends S.Class<DeclineHandshakeRequest>("DeclineHandshakeRequest")({HandshakeId: S.String}) {}
export class DeleteOrganizationalUnitRequest extends S.Class<DeleteOrganizationalUnitRequest>("DeleteOrganizationalUnitRequest")({OrganizationalUnitId: S.String}) {}
export class DeletePolicyRequest extends S.Class<DeletePolicyRequest>("DeletePolicyRequest")({PolicyId: S.String}) {}
export class DeregisterDelegatedAdministratorRequest extends S.Class<DeregisterDelegatedAdministratorRequest>("DeregisterDelegatedAdministratorRequest")({AccountId: S.String, ServicePrincipal: S.String}) {}
export class DescribeAccountRequest extends S.Class<DescribeAccountRequest>("DescribeAccountRequest")({AccountId: S.String}) {}
export class DescribeCreateAccountStatusRequest extends S.Class<DescribeCreateAccountStatusRequest>("DescribeCreateAccountStatusRequest")({CreateAccountRequestId: S.String}) {}
export class DescribeEffectivePolicyRequest extends S.Class<DescribeEffectivePolicyRequest>("DescribeEffectivePolicyRequest")({PolicyType: S.String, TargetId: S.optional(S.String)}) {}
export class DescribeHandshakeRequest extends S.Class<DescribeHandshakeRequest>("DescribeHandshakeRequest")({HandshakeId: S.String}) {}
export class DescribeOrganizationalUnitRequest extends S.Class<DescribeOrganizationalUnitRequest>("DescribeOrganizationalUnitRequest")({OrganizationalUnitId: S.String}) {}
export class DescribePolicyRequest extends S.Class<DescribePolicyRequest>("DescribePolicyRequest")({PolicyId: S.String}) {}
export class DescribeResponsibilityTransferRequest extends S.Class<DescribeResponsibilityTransferRequest>("DescribeResponsibilityTransferRequest")({Id: S.String}) {}
export class DetachPolicyRequest extends S.Class<DetachPolicyRequest>("DetachPolicyRequest")({PolicyId: S.String, TargetId: S.String}) {}
export class DisableAWSServiceAccessRequest extends S.Class<DisableAWSServiceAccessRequest>("DisableAWSServiceAccessRequest")({ServicePrincipal: S.String}) {}
export class DisablePolicyTypeRequest extends S.Class<DisablePolicyTypeRequest>("DisablePolicyTypeRequest")({RootId: S.String, PolicyType: S.String}) {}
export class EnableAWSServiceAccessRequest extends S.Class<EnableAWSServiceAccessRequest>("EnableAWSServiceAccessRequest")({ServicePrincipal: S.String}) {}
export class EnablePolicyTypeRequest extends S.Class<EnablePolicyTypeRequest>("EnablePolicyTypeRequest")({RootId: S.String, PolicyType: S.String}) {}
export class HandshakeParty extends S.Class<HandshakeParty>("HandshakeParty")({Id: S.String, Type: S.String}) {}
export class InviteOrganizationToTransferResponsibilityRequest extends S.Class<InviteOrganizationToTransferResponsibilityRequest>("InviteOrganizationToTransferResponsibilityRequest")({Type: S.String, Target: HandshakeParty, Notes: S.optional(S.String), StartTimestamp: S.Date, SourceName: S.String, Tags: S.optional(Tags)}) {}
export class ListAccountsRequest extends S.Class<ListAccountsRequest>("ListAccountsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAccountsForParentRequest extends S.Class<ListAccountsForParentRequest>("ListAccountsForParentRequest")({ParentId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAccountsWithInvalidEffectivePolicyRequest extends S.Class<ListAccountsWithInvalidEffectivePolicyRequest>("ListAccountsWithInvalidEffectivePolicyRequest")({PolicyType: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAWSServiceAccessForOrganizationRequest extends S.Class<ListAWSServiceAccessForOrganizationRequest>("ListAWSServiceAccessForOrganizationRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListChildrenRequest extends S.Class<ListChildrenRequest>("ListChildrenRequest")({ParentId: S.String, ChildType: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListCreateAccountStatusRequest extends S.Class<ListCreateAccountStatusRequest>("ListCreateAccountStatusRequest")({States: S.optional(CreateAccountStates), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDelegatedAdministratorsRequest extends S.Class<ListDelegatedAdministratorsRequest>("ListDelegatedAdministratorsRequest")({ServicePrincipal: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListDelegatedServicesForAccountRequest extends S.Class<ListDelegatedServicesForAccountRequest>("ListDelegatedServicesForAccountRequest")({AccountId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListEffectivePolicyValidationErrorsRequest extends S.Class<ListEffectivePolicyValidationErrorsRequest>("ListEffectivePolicyValidationErrorsRequest")({AccountId: S.String, PolicyType: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class HandshakeFilter extends S.Class<HandshakeFilter>("HandshakeFilter")({ActionType: S.optional(S.String), ParentHandshakeId: S.optional(S.String)}) {}
export class ListHandshakesForOrganizationRequest extends S.Class<ListHandshakesForOrganizationRequest>("ListHandshakesForOrganizationRequest")({Filter: S.optional(HandshakeFilter), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListInboundResponsibilityTransfersRequest extends S.Class<ListInboundResponsibilityTransfersRequest>("ListInboundResponsibilityTransfersRequest")({Type: S.String, Id: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListOrganizationalUnitsForParentRequest extends S.Class<ListOrganizationalUnitsForParentRequest>("ListOrganizationalUnitsForParentRequest")({ParentId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListOutboundResponsibilityTransfersRequest extends S.Class<ListOutboundResponsibilityTransfersRequest>("ListOutboundResponsibilityTransfersRequest")({Type: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListParentsRequest extends S.Class<ListParentsRequest>("ListParentsRequest")({ChildId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPoliciesRequest extends S.Class<ListPoliciesRequest>("ListPoliciesRequest")({Filter: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPoliciesForTargetRequest extends S.Class<ListPoliciesForTargetRequest>("ListPoliciesForTargetRequest")({TargetId: S.String, Filter: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRootsRequest extends S.Class<ListRootsRequest>("ListRootsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceId: S.String, NextToken: S.optional(S.String)}) {}
export class ListTargetsForPolicyRequest extends S.Class<ListTargetsForPolicyRequest>("ListTargetsForPolicyRequest")({PolicyId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class MoveAccountRequest extends S.Class<MoveAccountRequest>("MoveAccountRequest")({AccountId: S.String, SourceParentId: S.String, DestinationParentId: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({Content: S.String, Tags: S.optional(Tags)}) {}
export class RegisterDelegatedAdministratorRequest extends S.Class<RegisterDelegatedAdministratorRequest>("RegisterDelegatedAdministratorRequest")({AccountId: S.String, ServicePrincipal: S.String}) {}
export class RemoveAccountFromOrganizationRequest extends S.Class<RemoveAccountFromOrganizationRequest>("RemoveAccountFromOrganizationRequest")({AccountId: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceId: S.String, Tags: Tags}) {}
export class TerminateResponsibilityTransferRequest extends S.Class<TerminateResponsibilityTransferRequest>("TerminateResponsibilityTransferRequest")({Id: S.String, EndTimestamp: S.optional(S.Date)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceId: S.String, TagKeys: TagKeys}) {}
export class UpdateOrganizationalUnitRequest extends S.Class<UpdateOrganizationalUnitRequest>("UpdateOrganizationalUnitRequest")({OrganizationalUnitId: S.String, Name: S.optional(S.String)}) {}
export class UpdatePolicyRequest extends S.Class<UpdatePolicyRequest>("UpdatePolicyRequest")({PolicyId: S.String, Name: S.optional(S.String), Description: S.optional(S.String), Content: S.optional(S.String)}) {}
export class UpdateResponsibilityTransferRequest extends S.Class<UpdateResponsibilityTransferRequest>("UpdateResponsibilityTransferRequest")({Id: S.String, Name: S.String}) {}
export const HandshakeParties = S.Array(HandshakeParty);
export class Account extends S.Class<Account>("Account")({Id: S.optional(S.String), Arn: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), State: S.optional(S.String), JoinedMethod: S.optional(S.String), JoinedTimestamp: S.optional(S.Date)}) {}
export const Accounts = S.Array(Account);
export class CreateAccountStatus extends S.Class<CreateAccountStatus>("CreateAccountStatus")({Id: S.optional(S.String), AccountName: S.optional(S.String), State: S.optional(S.String), RequestedTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date), AccountId: S.optional(S.String), GovCloudAccountId: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export const CreateAccountStatuses = S.Array(CreateAccountStatus);
export type HandshakeResources = HandshakeResource[];
export const HandshakeResources = S.Array(S.suspend((): S.Schema<HandshakeResource, any> => HandshakeResource)) as any as S.Schema<HandshakeResources>;
export class Handshake extends S.Class<Handshake>("Handshake")({Id: S.optional(S.String), Arn: S.optional(S.String), Parties: S.optional(HandshakeParties), State: S.optional(S.String), RequestedTimestamp: S.optional(S.Date), ExpirationTimestamp: S.optional(S.Date), Action: S.optional(S.String), Resources: S.optional(HandshakeResources)}) {}
export const Handshakes = S.Array(Handshake);
export class TransferParticipant extends S.Class<TransferParticipant>("TransferParticipant")({ManagementAccountId: S.optional(S.String), ManagementAccountEmail: S.optional(S.String)}) {}
export class ResponsibilityTransfer extends S.Class<ResponsibilityTransfer>("ResponsibilityTransfer")({Arn: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String), Type: S.optional(S.String), Status: S.optional(S.String), Source: S.optional(TransferParticipant), Target: S.optional(TransferParticipant), StartTimestamp: S.optional(S.Date), EndTimestamp: S.optional(S.Date), ActiveHandshakeId: S.optional(S.String)}) {}
export const ResponsibilityTransfers = S.Array(ResponsibilityTransfer);
export class OrganizationalUnit extends S.Class<OrganizationalUnit>("OrganizationalUnit")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const OrganizationalUnits = S.Array(OrganizationalUnit);
export class PolicyTypeSummary extends S.Class<PolicyTypeSummary>("PolicyTypeSummary")({Type: S.optional(S.String), Status: S.optional(S.String)}) {}
export const PolicyTypes = S.Array(PolicyTypeSummary);
export class Root extends S.Class<Root>("Root")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), PolicyTypes: S.optional(PolicyTypes)}) {}
export const Roots = S.Array(Root);
export class AcceptHandshakeResponse extends S.Class<AcceptHandshakeResponse>("AcceptHandshakeResponse")({Handshake: S.optional(Handshake)}) {}
export class CancelHandshakeResponse extends S.Class<CancelHandshakeResponse>("CancelHandshakeResponse")({Handshake: S.optional(Handshake)}) {}
export class CreateAccountRequest extends S.Class<CreateAccountRequest>("CreateAccountRequest")({Email: S.String, AccountName: S.String, RoleName: S.optional(S.String), IamUserAccessToBilling: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class Organization extends S.Class<Organization>("Organization")({Id: S.optional(S.String), Arn: S.optional(S.String), FeatureSet: S.optional(S.String), MasterAccountArn: S.optional(S.String), MasterAccountId: S.optional(S.String), MasterAccountEmail: S.optional(S.String), AvailablePolicyTypes: S.optional(PolicyTypes)}) {}
export class CreateOrganizationResponse extends S.Class<CreateOrganizationResponse>("CreateOrganizationResponse")({Organization: S.optional(Organization)}) {}
export class DeclineHandshakeResponse extends S.Class<DeclineHandshakeResponse>("DeclineHandshakeResponse")({Handshake: S.optional(Handshake)}) {}
export class DescribeCreateAccountStatusResponse extends S.Class<DescribeCreateAccountStatusResponse>("DescribeCreateAccountStatusResponse")({CreateAccountStatus: S.optional(CreateAccountStatus)}) {}
export class DescribeHandshakeResponse extends S.Class<DescribeHandshakeResponse>("DescribeHandshakeResponse")({Handshake: S.optional(Handshake)}) {}
export class DescribeOrganizationalUnitResponse extends S.Class<DescribeOrganizationalUnitResponse>("DescribeOrganizationalUnitResponse")({OrganizationalUnit: S.optional(OrganizationalUnit)}) {}
export class PolicySummary extends S.Class<PolicySummary>("PolicySummary")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Type: S.optional(S.String), AwsManaged: S.optional(S.Boolean)}) {}
export class Policy extends S.Class<Policy>("Policy")({PolicySummary: S.optional(PolicySummary), Content: S.optional(S.String)}) {}
export class DescribePolicyResponse extends S.Class<DescribePolicyResponse>("DescribePolicyResponse")({Policy: S.optional(Policy)}) {}
export class EnablePolicyTypeResponse extends S.Class<EnablePolicyTypeResponse>("EnablePolicyTypeResponse")({Root: S.optional(Root)}) {}
export class InviteAccountToOrganizationRequest extends S.Class<InviteAccountToOrganizationRequest>("InviteAccountToOrganizationRequest")({Target: HandshakeParty, Notes: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class InviteOrganizationToTransferResponsibilityResponse extends S.Class<InviteOrganizationToTransferResponsibilityResponse>("InviteOrganizationToTransferResponsibilityResponse")({Handshake: S.optional(Handshake)}) {}
export class ListAccountsResponse extends S.Class<ListAccountsResponse>("ListAccountsResponse")({Accounts: S.optional(Accounts), NextToken: S.optional(S.String)}) {}
export class ListAccountsForParentResponse extends S.Class<ListAccountsForParentResponse>("ListAccountsForParentResponse")({Accounts: S.optional(Accounts), NextToken: S.optional(S.String)}) {}
export class ListAccountsWithInvalidEffectivePolicyResponse extends S.Class<ListAccountsWithInvalidEffectivePolicyResponse>("ListAccountsWithInvalidEffectivePolicyResponse")({Accounts: S.optional(Accounts), PolicyType: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class ListCreateAccountStatusResponse extends S.Class<ListCreateAccountStatusResponse>("ListCreateAccountStatusResponse")({CreateAccountStatuses: S.optional(CreateAccountStatuses), NextToken: S.optional(S.String)}) {}
export class ListHandshakesForAccountRequest extends S.Class<ListHandshakesForAccountRequest>("ListHandshakesForAccountRequest")({Filter: S.optional(HandshakeFilter), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListHandshakesForOrganizationResponse extends S.Class<ListHandshakesForOrganizationResponse>("ListHandshakesForOrganizationResponse")({Handshakes: S.optional(Handshakes), NextToken: S.optional(S.String)}) {}
export class ListInboundResponsibilityTransfersResponse extends S.Class<ListInboundResponsibilityTransfersResponse>("ListInboundResponsibilityTransfersResponse")({ResponsibilityTransfers: S.optional(ResponsibilityTransfers), NextToken: S.optional(S.String)}) {}
export class ListOrganizationalUnitsForParentResponse extends S.Class<ListOrganizationalUnitsForParentResponse>("ListOrganizationalUnitsForParentResponse")({OrganizationalUnits: S.optional(OrganizationalUnits), NextToken: S.optional(S.String)}) {}
export class ListOutboundResponsibilityTransfersResponse extends S.Class<ListOutboundResponsibilityTransfersResponse>("ListOutboundResponsibilityTransfersResponse")({ResponsibilityTransfers: S.optional(ResponsibilityTransfers), NextToken: S.optional(S.String)}) {}
export const Policies = S.Array(PolicySummary);
export class ListPoliciesForTargetResponse extends S.Class<ListPoliciesForTargetResponse>("ListPoliciesForTargetResponse")({Policies: S.optional(Policies), NextToken: S.optional(S.String)}) {}
export class ListRootsResponse extends S.Class<ListRootsResponse>("ListRootsResponse")({Roots: S.optional(Roots), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags), NextToken: S.optional(S.String)}) {}
export class ResourcePolicySummary extends S.Class<ResourcePolicySummary>("ResourcePolicySummary")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export class ResourcePolicy extends S.Class<ResourcePolicy>("ResourcePolicy")({ResourcePolicySummary: S.optional(ResourcePolicySummary), Content: S.optional(S.String)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({ResourcePolicy: S.optional(ResourcePolicy)}) {}
export class TerminateResponsibilityTransferResponse extends S.Class<TerminateResponsibilityTransferResponse>("TerminateResponsibilityTransferResponse")({ResponsibilityTransfer: S.optional(ResponsibilityTransfer)}) {}
export class UpdateOrganizationalUnitResponse extends S.Class<UpdateOrganizationalUnitResponse>("UpdateOrganizationalUnitResponse")({OrganizationalUnit: S.optional(OrganizationalUnit)}) {}
export class UpdatePolicyResponse extends S.Class<UpdatePolicyResponse>("UpdatePolicyResponse")({Policy: S.optional(Policy)}) {}
export class UpdateResponsibilityTransferResponse extends S.Class<UpdateResponsibilityTransferResponse>("UpdateResponsibilityTransferResponse")({ResponsibilityTransfer: S.optional(ResponsibilityTransfer)}) {}
export class HandshakeResource extends S.Class<HandshakeResource>("HandshakeResource")({Value: S.optional(S.String), Type: S.optional(S.String), Resources: S.optional(S.suspend(() => HandshakeResources))}) {}
export const PolicyIds = S.Array(S.String);
export class EffectivePolicy extends S.Class<EffectivePolicy>("EffectivePolicy")({PolicyContent: S.optional(S.String), LastUpdatedTimestamp: S.optional(S.Date), TargetId: S.optional(S.String), PolicyType: S.optional(S.String)}) {}
export class EnabledServicePrincipal extends S.Class<EnabledServicePrincipal>("EnabledServicePrincipal")({ServicePrincipal: S.optional(S.String), DateEnabled: S.optional(S.Date)}) {}
export const EnabledServicePrincipals = S.Array(EnabledServicePrincipal);
export class Child extends S.Class<Child>("Child")({Id: S.optional(S.String), Type: S.optional(S.String)}) {}
export const Children = S.Array(Child);
export class DelegatedAdministrator extends S.Class<DelegatedAdministrator>("DelegatedAdministrator")({Id: S.optional(S.String), Arn: S.optional(S.String), Email: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), State: S.optional(S.String), JoinedMethod: S.optional(S.String), JoinedTimestamp: S.optional(S.Date), DelegationEnabledDate: S.optional(S.Date)}) {}
export const DelegatedAdministrators = S.Array(DelegatedAdministrator);
export class DelegatedService extends S.Class<DelegatedService>("DelegatedService")({ServicePrincipal: S.optional(S.String), DelegationEnabledDate: S.optional(S.Date)}) {}
export const DelegatedServices = S.Array(DelegatedService);
export class EffectivePolicyValidationError extends S.Class<EffectivePolicyValidationError>("EffectivePolicyValidationError")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String), PathToError: S.optional(S.String), ContributingPolicies: S.optional(PolicyIds)}) {}
export const EffectivePolicyValidationErrors = S.Array(EffectivePolicyValidationError);
export class Parent extends S.Class<Parent>("Parent")({Id: S.optional(S.String), Type: S.optional(S.String)}) {}
export const Parents = S.Array(Parent);
export class PolicyTargetSummary extends S.Class<PolicyTargetSummary>("PolicyTargetSummary")({TargetId: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Type: S.optional(S.String)}) {}
export const PolicyTargets = S.Array(PolicyTargetSummary);
export class CreateAccountResponse extends S.Class<CreateAccountResponse>("CreateAccountResponse")({CreateAccountStatus: S.optional(CreateAccountStatus)}) {}
export class CreateGovCloudAccountResponse extends S.Class<CreateGovCloudAccountResponse>("CreateGovCloudAccountResponse")({CreateAccountStatus: S.optional(CreateAccountStatus)}) {}
export class CreateOrganizationalUnitResponse extends S.Class<CreateOrganizationalUnitResponse>("CreateOrganizationalUnitResponse")({OrganizationalUnit: S.optional(OrganizationalUnit)}) {}
export class CreatePolicyResponse extends S.Class<CreatePolicyResponse>("CreatePolicyResponse")({Policy: S.optional(Policy)}) {}
export class DescribeAccountResponse extends S.Class<DescribeAccountResponse>("DescribeAccountResponse")({Account: S.optional(Account)}) {}
export class DescribeEffectivePolicyResponse extends S.Class<DescribeEffectivePolicyResponse>("DescribeEffectivePolicyResponse")({EffectivePolicy: S.optional(EffectivePolicy)}) {}
export class DescribeOrganizationResponse extends S.Class<DescribeOrganizationResponse>("DescribeOrganizationResponse")({Organization: S.optional(Organization)}) {}
export class DescribeResourcePolicyResponse extends S.Class<DescribeResourcePolicyResponse>("DescribeResourcePolicyResponse")({ResourcePolicy: S.optional(ResourcePolicy)}) {}
export class DisablePolicyTypeResponse extends S.Class<DisablePolicyTypeResponse>("DisablePolicyTypeResponse")({Root: S.optional(Root)}) {}
export class EnableAllFeaturesResponse extends S.Class<EnableAllFeaturesResponse>("EnableAllFeaturesResponse")({Handshake: S.optional(Handshake)}) {}
export class InviteAccountToOrganizationResponse extends S.Class<InviteAccountToOrganizationResponse>("InviteAccountToOrganizationResponse")({Handshake: S.optional(Handshake)}) {}
export class ListAWSServiceAccessForOrganizationResponse extends S.Class<ListAWSServiceAccessForOrganizationResponse>("ListAWSServiceAccessForOrganizationResponse")({EnabledServicePrincipals: S.optional(EnabledServicePrincipals), NextToken: S.optional(S.String)}) {}
export class ListChildrenResponse extends S.Class<ListChildrenResponse>("ListChildrenResponse")({Children: S.optional(Children), NextToken: S.optional(S.String)}) {}
export class ListDelegatedAdministratorsResponse extends S.Class<ListDelegatedAdministratorsResponse>("ListDelegatedAdministratorsResponse")({DelegatedAdministrators: S.optional(DelegatedAdministrators), NextToken: S.optional(S.String)}) {}
export class ListDelegatedServicesForAccountResponse extends S.Class<ListDelegatedServicesForAccountResponse>("ListDelegatedServicesForAccountResponse")({DelegatedServices: S.optional(DelegatedServices), NextToken: S.optional(S.String)}) {}
export class ListEffectivePolicyValidationErrorsResponse extends S.Class<ListEffectivePolicyValidationErrorsResponse>("ListEffectivePolicyValidationErrorsResponse")({AccountId: S.optional(S.String), PolicyType: S.optional(S.String), Path: S.optional(S.String), EvaluationTimestamp: S.optional(S.Date), NextToken: S.optional(S.String), EffectivePolicyValidationErrors: S.optional(EffectivePolicyValidationErrors)}) {}
export class ListHandshakesForAccountResponse extends S.Class<ListHandshakesForAccountResponse>("ListHandshakesForAccountResponse")({Handshakes: S.optional(Handshakes), NextToken: S.optional(S.String)}) {}
export class ListParentsResponse extends S.Class<ListParentsResponse>("ListParentsResponse")({Parents: S.optional(Parents), NextToken: S.optional(S.String)}) {}
export class ListPoliciesResponse extends S.Class<ListPoliciesResponse>("ListPoliciesResponse")({Policies: S.optional(Policies), NextToken: S.optional(S.String)}) {}
export class ListTargetsForPolicyResponse extends S.Class<ListTargetsForPolicyResponse>("ListTargetsForPolicyResponse")({Targets: S.optional(PolicyTargets), NextToken: S.optional(S.String)}) {}
export class DescribeResponsibilityTransferResponse extends S.Class<DescribeResponsibilityTransferResponse>("DescribeResponsibilityTransferResponse")({ResponsibilityTransfer: S.optional(ResponsibilityTransfer)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class AWSOrganizationsNotInUseException extends S.TaggedError<AWSOrganizationsNotInUseException>()("AWSOrganizationsNotInUseException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class ConstraintViolationException extends S.TaggedError<ConstraintViolationException>()("ConstraintViolationException", {}) {};
export class AccountNotFoundException extends S.TaggedError<AccountNotFoundException>()("AccountNotFoundException", {}) {};
export class ServiceException extends S.TaggedError<ServiceException>()("ServiceException", {}) {};
export class MasterCannotLeaveOrganizationException extends S.TaggedError<MasterCannotLeaveOrganizationException>()("MasterCannotLeaveOrganizationException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class TargetNotFoundException extends S.TaggedError<TargetNotFoundException>()("TargetNotFoundException", {}) {};
export class AccountAlreadyClosedException extends S.TaggedError<AccountAlreadyClosedException>()("AccountAlreadyClosedException", {Message: S.optional(S.String)}) {};
export class AccessDeniedForDependencyException extends S.TaggedError<AccessDeniedForDependencyException>()("AccessDeniedForDependencyException", {}) {};
export class HandshakeAlreadyInStateException extends S.TaggedError<HandshakeAlreadyInStateException>()("HandshakeAlreadyInStateException", {}) {};
export class PolicyInUseException extends S.TaggedError<PolicyInUseException>()("PolicyInUseException", {Message: S.optional(S.String)}) {};
export class ResourcePolicyNotFoundException extends S.TaggedError<ResourcePolicyNotFoundException>()("ResourcePolicyNotFoundException", {Message: S.optional(S.String)}) {};
export class AccountNotRegisteredException extends S.TaggedError<AccountNotRegisteredException>()("AccountNotRegisteredException", {Message: S.optional(S.String)}) {};
export class UnsupportedAPIEndpointException extends S.TaggedError<UnsupportedAPIEndpointException>()("UnsupportedAPIEndpointException", {}) {};
export class HandshakeNotFoundException extends S.TaggedError<HandshakeNotFoundException>()("HandshakeNotFoundException", {}) {};
export class PolicyNotFoundException extends S.TaggedError<PolicyNotFoundException>()("PolicyNotFoundException", {}) {};
export class PolicyChangesInProgressException extends S.TaggedError<PolicyChangesInProgressException>()("PolicyChangesInProgressException", {Message: S.optional(S.String)}) {};
export class ParentNotFoundException extends S.TaggedError<ParentNotFoundException>()("ParentNotFoundException", {}) {};
export class DestinationParentNotFoundException extends S.TaggedError<DestinationParentNotFoundException>()("DestinationParentNotFoundException", {Message: S.optional(S.String)}) {};
export class AccountAlreadyRegisteredException extends S.TaggedError<AccountAlreadyRegisteredException>()("AccountAlreadyRegisteredException", {Message: S.optional(S.String)}) {};
export class ResponsibilityTransferNotFoundException extends S.TaggedError<ResponsibilityTransferNotFoundException>()("ResponsibilityTransferNotFoundException", {}) {};
export class DuplicatePolicyAttachmentException extends S.TaggedError<DuplicatePolicyAttachmentException>()("DuplicatePolicyAttachmentException", {Message: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class FinalizingOrganizationException extends S.TaggedError<FinalizingOrganizationException>()("FinalizingOrganizationException", {}) {};
export class AlreadyInOrganizationException extends S.TaggedError<AlreadyInOrganizationException>()("AlreadyInOrganizationException", {Message: S.optional(S.String)}) {};
export class DuplicateOrganizationalUnitException extends S.TaggedError<DuplicateOrganizationalUnitException>()("DuplicateOrganizationalUnitException", {}) {};
export class DuplicatePolicyException extends S.TaggedError<DuplicatePolicyException>()("DuplicatePolicyException", {}) {};
export class InvalidHandshakeTransitionException extends S.TaggedError<InvalidHandshakeTransitionException>()("InvalidHandshakeTransitionException", {}) {};
export class OrganizationNotEmptyException extends S.TaggedError<OrganizationNotEmptyException>()("OrganizationNotEmptyException", {Message: S.optional(S.String)}) {};
export class OrganizationalUnitNotEmptyException extends S.TaggedError<OrganizationalUnitNotEmptyException>()("OrganizationalUnitNotEmptyException", {Message: S.optional(S.String)}) {};
export class OrganizationalUnitNotFoundException extends S.TaggedError<OrganizationalUnitNotFoundException>()("OrganizationalUnitNotFoundException", {}) {};
export class CreateAccountStatusNotFoundException extends S.TaggedError<CreateAccountStatusNotFoundException>()("CreateAccountStatusNotFoundException", {Message: S.optional(S.String)}) {};
export class EffectivePolicyNotFoundException extends S.TaggedError<EffectivePolicyNotFoundException>()("EffectivePolicyNotFoundException", {}) {};
export class PolicyNotAttachedException extends S.TaggedError<PolicyNotAttachedException>()("PolicyNotAttachedException", {Message: S.optional(S.String)}) {};
export class PolicyTypeNotEnabledException extends S.TaggedError<PolicyTypeNotEnabledException>()("PolicyTypeNotEnabledException", {}) {};
export class HandshakeConstraintViolationException extends S.TaggedError<HandshakeConstraintViolationException>()("HandshakeConstraintViolationException", {}) {};
export class PolicyTypeAlreadyEnabledException extends S.TaggedError<PolicyTypeAlreadyEnabledException>()("PolicyTypeAlreadyEnabledException", {Message: S.optional(S.String)}) {};
export class DuplicateHandshakeException extends S.TaggedError<DuplicateHandshakeException>()("DuplicateHandshakeException", {Message: S.optional(S.String)}) {};
export class DuplicateAccountException extends S.TaggedError<DuplicateAccountException>()("DuplicateAccountException", {Message: S.optional(S.String)}) {};
export class InvalidResponsibilityTransferTransitionException extends S.TaggedError<InvalidResponsibilityTransferTransitionException>()("InvalidResponsibilityTransferTransitionException", {Message: S.optional(S.String)}) {};
export class MalformedPolicyDocumentException extends S.TaggedError<MalformedPolicyDocumentException>()("MalformedPolicyDocumentException", {}) {};
export class PolicyTypeNotAvailableForOrganizationException extends S.TaggedError<PolicyTypeNotAvailableForOrganizationException>()("PolicyTypeNotAvailableForOrganizationException", {}) {};
export class RootNotFoundException extends S.TaggedError<RootNotFoundException>()("RootNotFoundException", {Message: S.optional(S.String)}) {};
export class AccountOwnerNotVerifiedException extends S.TaggedError<AccountOwnerNotVerifiedException>()("AccountOwnerNotVerifiedException", {Message: S.optional(S.String)}) {};
export class ChildNotFoundException extends S.TaggedError<ChildNotFoundException>()("ChildNotFoundException", {Message: S.optional(S.String)}) {};
export class SourceParentNotFoundException extends S.TaggedError<SourceParentNotFoundException>()("SourceParentNotFoundException", {Message: S.optional(S.String)}) {};
export class ResponsibilityTransferAlreadyInStatusException extends S.TaggedError<ResponsibilityTransferAlreadyInStatusException>()("ResponsibilityTransferAlreadyInStatusException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Removes the specified account from the organization.
 * 
 * 
 * The removed account becomes a standalone account that isn't a member of any
 * organization. It's no longer subject to any policies and is responsible for its own bill
 * payments. The organization's management account is no longer charged for any expenses
 * accrued by the member account after it's removed from the organization.
 * 
 * 
 * You can only call this operation from the management account. Member accounts can remove themselves with LeaveOrganization instead.
 * 
 * 
 * 
 * 
 * 
 * - You can remove an account from your organization only if the account is
 * configured with the information required to operate as a standalone account.
 * When you create an account in an organization using the Organizations console,
 * API, or CLI commands, the information required of standalone accounts is
 * *not* automatically collected. For more information,
 * see Considerations before removing an account from an organization
 * in the *Organizations User Guide*.
 * 
 * 
 * 
 * - The account that you want to leave must not be a delegated administrator
 * account for any Amazon Web Services service enabled for your organization. If the account
 * is a delegated administrator, you must first change the delegated
 * administrator account to another account that is remaining in the
 * organization.
 * 
 * 
 * 
 * - After the account leaves the organization, all tags that were attached to
 * the account object in the organization are deleted. Amazon Web Services accounts outside
 * of an organization do not support tags.
 */export const removeAccountFromOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.RemoveAccountFromOrganization" }, RemoveAccountFromOrganizationRequest, S.Struct({}), [AccessDeniedException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, MasterCannotLeaveOrganizationException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes any tags with the specified keys from the specified resource.
 * 
 * 
 * You can attach tags to the following resources in Organizations.
 * 
 * 
 * 
 * - Amazon Web Services account
 * 
 * 
 * 
 * - Organization root
 * 
 * 
 * 
 * - Organizational unit (OU)
 * 
 * 
 * 
 * - Policy (any type)
 * 
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.UntagResource" }, UntagResourceRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TargetNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified member Amazon Web Services account as a delegated administrator for the
 * specified Amazon Web Services service.
 * 
 * 
 * 
 * 
 * Deregistering a delegated administrator can have unintended impacts on the
 * functionality of the enabled Amazon Web Services service. See the documentation for the enabled
 * service before you deregister a delegated administrator so that you understand any
 * potential impacts.
 * 
 * 
 * 
 * 
 * You can run this action only for Amazon Web Services services that support this
 * feature. For a current list of services that support it, see the column Supports
 * Delegated Administrator in the table at Amazon Web Services Services that you can use with
 * Organizations in the *Organizations User Guide.*
 * 
 * 
 * 
 * You can only call this operation from the management account.
 */export const deregisterDelegatedAdministrator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator" }, DeregisterDelegatedAdministratorRequest, S.Struct({}), [AccessDeniedException, AccountNotFoundException, AccountNotRegisteredException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details for a handshake. A handshake is the secure exchange of information
 * between two Amazon Web Services accounts: a sender and a recipient.
 * 
 * 
 * You can view `ACCEPTED`, `DECLINED`, or `CANCELED`
 * handshakes in API Responses for 30 days before they are deleted.
 * 
 * 
 * You can call this operation from any account in a organization.
 */export const describeHandshake = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeHandshake" }, DescribeHandshakeRequest, DescribeHandshakeResponse, [AccessDeniedException, ConcurrentModificationException, HandshakeNotFoundException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a policy.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const describePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribePolicy" }, DescribePolicyRequest, DescribePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, PolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the integration of an Amazon Web Services service (the service that is specified by
 * `ServicePrincipal`) with Organizations. When you disable integration, the
 * specified service no longer can create a service-linked role in
 * *new* accounts in your organization. This means the service can't
 * perform operations on your behalf on any new accounts in your organization. The service
 * can still perform operations in older accounts until the service completes its clean-up
 * from Organizations.
 * 
 * 
 * 
 * 
 * We
 * *strongly recommend*
 * that
 * you don't use this command to disable integration between Organizations and the specified
 * Amazon Web Services service. Instead, use the console or commands that are provided by the
 * specified service. This lets the trusted service perform any required initialization
 * when enabling trusted access, such as creating any required resources and any
 * required clean up of resources when disabling trusted access.
 * 
 * 
 * For information about how to disable trusted service access to your organization
 * using the trusted service, see the **Learn more** link
 * under the **Supports Trusted Access** column at Amazon Web Services services that you can use with Organizations. on this page.
 * 
 * 
 * If you disable access by using this command, it causes the following actions to
 * occur:
 * 
 * 
 * 
 * - The service can no longer create a service-linked role in the accounts in
 * your organization. This means that the service can't perform operations on
 * your behalf on any new accounts in your organization. The service can still
 * perform operations in older accounts until the service completes its
 * clean-up from Organizations.
 * 
 * 
 * 
 * - The service can no longer perform tasks in the member accounts in the
 * organization, unless those operations are explicitly permitted by the IAM
 * policies that are attached to your roles. This includes any data aggregation
 * from the member accounts to the management account, or to a delegated
 * administrator account, where relevant.
 * 
 * 
 * 
 * - Some services detect this and clean up any remaining data or resources
 * related to the integration, while other services stop accessing the
 * organization but leave any historical data and configuration in place to
 * support a possible re-enabling of the integration.
 * 
 * 
 * 
 * 
 * 
 * Using the other service's console or commands to disable the integration ensures
 * that the other service is aware that it can clean up any resources that are required
 * only for the integration. How the service cleans up its resources in the
 * organization's accounts depends on that service. For more information, see the
 * documentation for the other Amazon Web Services service.
 * 
 * 
 * 
 * 
 * After you perform the `DisableAWSServiceAccess` operation, the specified
 * service can no longer perform operations in your organization's accounts
 * 
 * 
 * For more information about integrating other services with Organizations, including the
 * list of services that work with Organizations, see Using Organizations with other Amazon Web Services
 * services in the *Organizations User Guide*.
 * 
 * 
 * You can only call this operation from the management account.
 */export const disableAWSServiceAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DisableAWSServiceAccess" }, DisableAWSServiceAccessRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides an Amazon Web Services service (the service that is specified by
 * `ServicePrincipal`) with permissions to view the structure of an
 * organization, create a service-linked role in
 * all the accounts in the organization, and allow the service to perform operations on
 * behalf of the organization and its accounts. Establishing these permissions can be a
 * first step in enabling the integration of an Amazon Web Services service with Organizations.
 * 
 * 
 * 
 * 
 * We recommend that you enable integration between Organizations and the specified Amazon Web Services
 * service by using the console or commands that are provided by the specified service.
 * Doing so ensures that the service is aware that it can create the resources that are
 * required for the integration. How the service creates those resources in the
 * organization's accounts depends on that service. For more information, see the
 * documentation for the other Amazon Web Services service.
 * 
 * 
 * 
 * 
 * For more information about enabling services to integrate with Organizations, see Using
 * Organizations with other Amazon Web Services services in the
 * *Organizations User Guide*.
 * 
 * 
 * You can only call this operation from the management account.
 */export const enableAWSServiceAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.EnableAWSServiceAccess" }, EnableAWSServiceAccessRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member account from its parent organization. This version of the operation
 * is performed by the account that wants to leave. To remove a member account as a user in
 * the management account, use RemoveAccountFromOrganization
 * instead.
 * 
 * 
 * You can only call from operation from a member account.
 * 
 * 
 * 
 * 
 * 
 * - The management account in an organization with all features enabled can
 * set service control policies (SCPs) that can restrict what administrators of
 * member accounts can do. This includes preventing them from successfully
 * calling `LeaveOrganization` and leaving the organization.
 * 
 * 
 * 
 * - You can leave an organization as a member account only if the account is
 * configured with the information required to operate as a standalone account.
 * When you create an account in an organization using the Organizations console,
 * API, or CLI commands, the information required of standalone accounts is
 * *not* automatically collected. For each account that
 * you want to make standalone, you must perform the following steps. If any of
 * the steps are already completed for this account, that step doesn't
 * appear.
 * 
 * 
 * 
 * - Choose a support plan
 * 
 * 
 * 
 * - Provide and verify the required contact information
 * 
 * 
 * 
 * - Provide a current payment method
 * 
 * 
 * 
 * 
 * 
 * Amazon Web Services uses the payment method to charge for any billable (not free tier)
 * Amazon Web Services activity that occurs while the account isn't attached to an
 * organization. For more information, see Considerations before removing an account from an organization
 * in the *Organizations User Guide*.
 * 
 * 
 * 
 * - The account that you want to leave must not be a delegated administrator
 * account for any Amazon Web Services service enabled for your organization. If the account
 * is a delegated administrator, you must first change the delegated
 * administrator account to another account that is remaining in the
 * organization.
 * 
 * 
 * 
 * - After the account leaves the organization, all tags that were attached to
 * the account object in the organization are deleted. Amazon Web Services accounts outside
 * of an organization do not support tags.
 * 
 * 
 * 
 * - A newly created account has a waiting period before it can be removed from
 * its organization. You must wait until at least four days after the account
 * was created. Invited accounts aren't subject to this waiting period.
 * 
 * 
 * 
 * - If you are using an organization principal to call
 * `LeaveOrganization` across multiple accounts, you can only do
 * this up to 5 accounts per second in a single organization.
 */export const leaveOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.LeaveOrganization" }, S.Struct({}), S.Struct({}), [AccessDeniedException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, MasterCannotLeaveOrganizationException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the accounts in the organization. To request only the accounts in a
 * specified root or organizational unit (OU), use the ListAccountsForParent operation instead.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListAccounts" }, ListAccountsRequest, ListAccountsResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the account creation requests that match the specified status that is currently
 * being tracked for the organization.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listCreateAccountStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListCreateAccountStatus" }, ListCreateAccountStatusRequest, ListCreateAccountStatusResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the recent handshakes that you have sent.
 * 
 * 
 * You can view `CANCELED`, `ACCEPTED`, `DECLINED`, or
 * `EXPIRED` handshakes in API responses for 30 days before they are
 * deleted.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 */export const listHandshakesForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListHandshakesForOrganization" }, ListHandshakesForOrganizationRequest, ListHandshakesForOrganizationResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the organizational units (OUs) in a parent organizational unit or root.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listOrganizationalUnitsForParent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent" }, ListOrganizationalUnitsForParentRequest, ListOrganizationalUnitsForParentResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ParentNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists transfers that allow an account outside your organization to manage the
 * specified responsibilities for your organization. This operation returns both transfer
 * invitations and transfers.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 */export const listOutboundResponsibilityTransfers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListOutboundResponsibilityTransfers" }, ListOutboundResponsibilityTransfersRequest, ListOutboundResponsibilityTransfersResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the policies that are directly attached to the specified target root,
 * organizational unit (OU), or account. You must specify the policy type that you want
 * included in the returned list.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listPoliciesForTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListPoliciesForTarget" }, ListPoliciesForTargetRequest, ListPoliciesForTargetResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TargetNotFoundException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the roots that are defined in the current organization.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 * 
 * 
 * 
 * 
 * Policy types can be enabled and disabled in roots. This is distinct from whether
 * they're available in the organization. When you enable all features, you make policy
 * types available for use in that organization. Individual policy types can then be
 * enabled and disabled in a root. To see the availability of a policy type in an
 * organization, use DescribeOrganization.
 */export const listRoots = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListRoots" }, ListRootsRequest, ListRootsResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags that are attached to the specified resource.
 * 
 * 
 * You can attach tags to the following resources in Organizations.
 * 
 * 
 * 
 * - Amazon Web Services account
 * 
 * 
 * 
 * - Organization root
 * 
 * 
 * 
 * - Organizational unit (OU)
 * 
 * 
 * 
 * - Policy (any type)
 * 
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TargetNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates a resource policy.
 * 
 * 
 * You can only call this operation from the management account..
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the specified member account to administer the Organizations features of the specified
 * Amazon Web Services service. It grants read-only access to Organizations service data. The account still
 * requires IAM permissions to access and administer the Amazon Web Services service.
 * 
 * 
 * You can run this action only for Amazon Web Services services that support this
 * feature. For a current list of services that support it, see the column Supports
 * Delegated Administrator in the table at Amazon Web Services Services that you can use with
 * Organizations in the *Organizations User Guide.*
 * 
 * 
 * 
 * You can only call this operation from the management account.
 */export const registerDelegatedAdministrator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.RegisterDelegatedAdministrator" }, RegisterDelegatedAdministratorRequest, S.Struct({}), [AccessDeniedException, AccountAlreadyRegisteredException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags to the specified resource.
 * 
 * 
 * Currently, you can attach tags to the following resources in Organizations.
 * 
 * 
 * 
 * - Amazon Web Services account
 * 
 * 
 * 
 * - Organization root
 * 
 * 
 * 
 * - Organizational unit (OU)
 * 
 * 
 * 
 * - Policy (any type)
 * 
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.TagResource" }, TagResourceRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TargetNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a transfer. A *transfer* is the arrangement between two
 * management accounts where one account designates the other with specified
 * responsibilities for their organization.
 * 
 * 
 * You can update the name assigned to a transfer.
 */export const updateResponsibilityTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.UpdateResponsibilityTransfer" }, UpdateResponsibilityTransferRequest, UpdateResponsibilityTransferResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ResponsibilityTransferNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Closes an Amazon Web Services member account within an organization. You can close an account when
 * all
 * features are enabled . You can't close the management account with this API.
 * This is an asynchronous request that Amazon Web Services performs in the background. Because
 * `CloseAccount` operates asynchronously, it can return a successful
 * completion message even though account closure might still be in progress. You need to
 * wait a few minutes before the account is fully closed. To check the status of the
 * request, do one of the following:
 * 
 * 
 * 
 * - Use the `AccountId` that you sent in the `CloseAccount`
 * request to provide as a parameter to the DescribeAccount
 * operation.
 * 
 * 
 * While the close account request is in progress, Account status will indicate
 * PENDING_CLOSURE. When the close account request completes, the status will
 * change to SUSPENDED.
 * 
 * 
 * 
 * - Check the CloudTrail log for the `CloseAccountResult` event that gets
 * published after the account closes successfully. For information on using CloudTrail
 * with Organizations, see Logging and monitoring in Organizations in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * - You can close only 10% of member accounts, between 10 and 1000, within a
 * rolling 30 day period. This quota is not bound by a calendar month, but
 * starts when you close an account. After you reach this limit, you can't
 * close additional accounts. For more information, see Closing a member
 * account in your organization and Quotas for
 * Organizations in the *Organizations User Guide*.
 * 
 * 
 * 
 * - To reinstate a closed account, contact Amazon Web Services Support within the 90-day
 * grace period while the account is in SUSPENDED status.
 * 
 * 
 * 
 * - If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud
 * (US) account, the `CloseAccount` request will close both
 * accounts. To learn important pre-closure details, see
 * Closing an Amazon Web Services GovCloud (US) account in the
 * Amazon Web Services GovCloud User Guide.
 */export const closeAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CloseAccount" }, CloseAccountRequest, S.Struct({}), [AccessDeniedException, AccountAlreadyClosedException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConflictException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This action is available if all of the following are true:
 * 
 * 
 * 
 * - You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For
 * more information on the Amazon Web Services GovCloud (US) Region, see the
 * *Amazon Web Services GovCloud User Guide*.
 * 
 * 
 * 
 * 
 * - You already have an account in the Amazon Web Services GovCloud (US) Region that is paired
 * with a management account of an organization in the commercial Region.
 * 
 * 
 * 
 * - You call this action from the management account of your organization in the
 * commercial Region.
 * 
 * 
 * 
 * - You have the `organizations:CreateGovCloudAccount` permission.
 * 
 * 
 * 
 * 
 * 
 * 
 * Organizations automatically creates the required service-linked role named
 * `AWSServiceRoleForOrganizations`. For more information, see Organizations and service-linked roles in the
 * *Organizations User Guide*.
 * 
 * 
 * Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also
 * do the following:
 * 
 * 
 * 
 * - Verify that CloudTrail is enabled to store logs.
 * 
 * 
 * 
 * - Create an Amazon S3 bucket for CloudTrail log storage.
 * 
 * 
 * For more information, see Verifying CloudTrail Is
 * Enabled in the *Amazon Web Services GovCloud User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * If the request includes tags, then the requester must have the
 * `organizations:TagResource` permission. The tags are attached to the
 * commercial account associated with the GovCloud account, rather than the GovCloud
 * account itself. To add tags to the GovCloud account, call the TagResource operation in the GovCloud Region after the new GovCloud
 * account exists.
 * 
 * 
 * You call this action from the management account of your organization in the
 * commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US)
 * Region. After the account is created, the management account of an organization in the
 * Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on
 * inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see
 * Organizations in the
 * *Amazon Web Services GovCloud User Guide*.
 * 
 * 
 * Calling `CreateGovCloudAccount` is an asynchronous request that Amazon Web Services
 * performs in the background. Because `CreateGovCloudAccount` operates
 * asynchronously, it can return a successful completion message even though account
 * initialization might still be in progress. You might need to wait a few minutes before
 * you can successfully access the account. To check the status of the request, do one of
 * the following:
 * 
 * 
 * 
 * - Use the `OperationId` response element from this operation to
 * provide as a parameter to the DescribeCreateAccountStatus
 * operation.
 * 
 * 
 * 
 * - Check the CloudTrail log for the `CreateAccountResult` event. For
 * information on using CloudTrail with Organizations, see Logging and
 * monitoring in Organizations in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * When you call the `CreateGovCloudAccount` action, you create two accounts:
 * a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the
 * commercial Region for billing and support purposes. The account in the commercial Region
 * is automatically a member of the organization whose credentials made the request. Both
 * accounts are associated with the same email address.
 * 
 * 
 * A role is created in the new account in the commercial Region that allows the
 * management account in the organization in the commercial Region to assume it. An Amazon Web Services
 * GovCloud (US) account is then created and associated with the commercial account that
 * you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can
 * be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management
 * account of the commercial organization. For more information and to view a diagram that
 * explains how account access works, see Organizations in the
 * *Amazon Web Services GovCloud User Guide*.
 * 
 * 
 * For more information about creating accounts, see Creating
 * a member account in your organization in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * - When you create an account in an organization using the Organizations console,
 * API, or CLI commands, the information required for the account to operate as
 * a standalone account is *not* automatically collected.
 * This includes a payment method and signing the end user license agreement
 * (EULA). If you must remove an account from your organization later, you can
 * do so only after you provide the missing information. For more information,
 * see Considerations before removing an account from an organization
 * in the *Organizations User Guide*.
 * 
 * 
 * 
 * - If you get an exception that indicates that you exceeded your account
 * limits for the organization, contact Amazon Web Services Support.
 * 
 * 
 * 
 * - If you get an exception that indicates that the operation failed because
 * your organization is still initializing, wait one hour and then try again.
 * If the error persists, contact Amazon Web Services Support.
 * 
 * 
 * 
 * - Using `CreateGovCloudAccount` to create multiple temporary
 * accounts isn't recommended. You can only close an account from the Amazon Web Services
 * Billing and Cost Management console, and you must be signed in as the root user. For information on
 * the requirements and process for closing an account, see Closing a member
 * account in your organization in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * When you create a member account with this operation, you can choose whether to
 * create the account with the IAM User and Role Access to
 * Billing Information switch enabled. If you enable it, IAM users and
 * roles that have appropriate permissions can view billing information for the
 * account. If you disable it, only the account root user can access billing
 * information. For information about how to disable this switch for an account, see
 * Granting
 * access to your billing information and tools.
 */export const createGovCloudAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CreateGovCloudAccount" }, CreateGovCloudAccountRequest, CreateGovCloudAccountResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, FinalizingOrganizationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Web Services organization. The account whose user is calling the
 * `CreateOrganization` operation automatically becomes the management account of the new organization.
 * 
 * 
 * This operation must be called using credentials from the account that is to become the
 * new organization's management account. The principal must also have the relevant IAM
 * permissions.
 * 
 * 
 * By default (or if you set the `FeatureSet` parameter to `ALL`),
 * the new organization is created with all features enabled and service control policies
 * automatically enabled in the root. If you instead choose to create the organization
 * supporting only the consolidated billing features by setting the `FeatureSet`
 * parameter to `CONSOLIDATED_BILLING`, no policy types are enabled by default
 * and you can't use organization policies.
 */export const createOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CreateOrganization" }, CreateOrganizationRequest, CreateOrganizationResponse, [AccessDeniedException, AccessDeniedForDependencyException, AlreadyInOrganizationException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 * for accounts that enables you to organize your accounts to apply policies according to
 * your business requirements. The number of levels deep that you can nest OUs is dependent
 * upon the policy types enabled for that root. For service control policies, the limit is
 * five.
 * 
 * 
 * For more information about OUs, see Managing organizational units (OUs) in the
 * *Organizations User Guide*.
 * 
 * 
 * If the request includes tags, then the requester must have the
 * `organizations:TagResource` permission.
 * 
 * 
 * You can only call this operation from the management account.
 */export const createOrganizationalUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CreateOrganizationalUnit" }, CreateOrganizationalUnitRequest, CreateOrganizationalUnitResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicateOrganizationalUnitException, InvalidInputException, ParentNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Declines a Handshake.
 * 
 * 
 * Only the account that receives a handshake can call this operation. The sender of the handshake can use CancelHandshake to
 * cancel if the handshake hasn't yet been responded to.
 * 
 * 
 * You can view canceled handshakes in API responses for 30 days before they are
 * deleted.
 */export const declineHandshake = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeclineHandshake" }, DeclineHandshakeRequest, DeclineHandshakeResponse, [AccessDeniedException, ConcurrentModificationException, HandshakeAlreadyInStateException, HandshakeNotFoundException, InvalidHandshakeTransitionException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the organization. You can delete an organization only by using credentials
 * from the management account. The organization must be empty of member accounts.
 */export const deleteOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeleteOrganization" }, S.Struct({}), S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, OrganizationNotEmptyException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an organizational unit (OU) from a root or another OU. You must first remove
 * all accounts and child OUs from the OU that you want to delete.
 * 
 * 
 * You can only call this operation from the management account.
 */export const deleteOrganizationalUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeleteOrganizationalUnit" }, DeleteOrganizationalUnitRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, InvalidInputException, OrganizationalUnitNotEmptyException, OrganizationalUnitNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified policy from your organization. Before you perform this
 * operation, you must first detach the policy from all organizational units (OUs), roots,
 * and accounts.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const deletePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeletePolicy" }, DeletePolicyRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, InvalidInputException, PolicyInUseException, PolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the resource policy from your organization.
 * 
 * 
 * You can only call this operation from the management account.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DeleteResourcePolicy" }, S.Struct({}), S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, ResourcePolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves Organizations-related information about the specified account.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const describeAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeAccount" }, DescribeAccountRequest, DescribeAccountResponse, [AccessDeniedException, AccountNotFoundException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current status of an asynchronous request to create an account.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const describeCreateAccountStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeCreateAccountStatus" }, DescribeCreateAccountStatusRequest, DescribeCreateAccountStatusResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, CreateAccountStatusNotFoundException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the contents of the effective policy for specified policy type and account.
 * The effective policy is the aggregation of any policies of the specified type that the
 * account inherits, plus any policy of that type that is directly attached to the
 * account.
 * 
 * 
 * This operation applies only to management policies. It does not apply to authorization
 * policies: service control policies (SCPs) and resource control policies (RCPs).
 * 
 * 
 * For more information about policy inheritance, see Understanding
 * management policy inheritance in the
 * *Organizations User Guide*.
 * 
 * 
 * You can call this operation from any account in a organization.
 */export const describeEffectivePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeEffectivePolicy" }, DescribeEffectivePolicyRequest, DescribeEffectivePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, EffectivePolicyNotFoundException, InvalidInputException, ServiceException, TargetNotFoundException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the organization that the user's account belongs
 * to.
 * 
 * 
 * You can call this operation from any account in a organization.
 * 
 * 
 * 
 * 
 * Even if a policy type is shown as available in the organization, you can disable
 * it separately at the root level with DisablePolicyType. Use ListRoots to see the status of policy types for a specified
 * root.
 */export const describeOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeOrganization" }, S.Struct({}), DescribeOrganizationResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about an organizational unit (OU).
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const describeOrganizationalUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeOrganizationalUnit" }, DescribeOrganizationalUnitRequest, DescribeOrganizationalUnitResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, OrganizationalUnitNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about a resource policy.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const describeResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeResourcePolicy" }, S.Struct({}), DescribeResourcePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, ResourcePolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detaches a policy from a target root, organizational unit (OU), or account.
 * 
 * 
 * 
 * 
 * If the policy being detached is a service control policy (SCP), the changes to
 * permissions for Identity and Access Management (IAM) users and roles in affected accounts are
 * immediate.
 * 
 * 
 * 
 * 
 * Every root, OU, and account must have at least one SCP attached. If you want to
 * replace the default `FullAWSAccess` policy with an SCP that limits the
 * permissions that can be delegated, you must attach the replacement SCP before you can
 * remove the default SCP. This is the authorization strategy of an "allow list". If you instead attach a second SCP and
 * leave the `FullAWSAccess` SCP still attached, and specify "Effect":
 * "Deny" in the second SCP to override the `"Effect": "Allow"` in
 * the `FullAWSAccess` policy (or any other attached SCP), you're using the
 * authorization strategy of a "deny list".
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const detachPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DetachPolicy" }, DetachPolicyRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, PolicyChangesInProgressException, PolicyNotAttachedException, PolicyNotFoundException, ServiceException, TargetNotFoundException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables all features in an organization. This enables the use of organization policies
 * that can restrict the services and actions that can be called in each account. Until you
 * enable all features, you have access only to consolidated billing, and you can't use any
 * of the advanced account administration features that Organizations supports. For more
 * information, see Enabling all features in your organization in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * This operation is required only for organizations that were created explicitly
 * with only the consolidated billing features enabled. Calling this operation sends a
 * handshake to every invited account in the organization. The feature set change can
 * be finalized and the additional features enabled only after all administrators in
 * the invited accounts approve the change by accepting the handshake.
 * 
 * 
 * 
 * 
 * After you enable all features, you can separately enable or disable individual policy
 * types in a root using EnablePolicyType and DisablePolicyType. To see the status of policy types in a root, use
 * ListRoots.
 * 
 * 
 * After all invited member accounts accept the handshake, you finalize the feature set
 * change by accepting the handshake that contains "Action":
 * "ENABLE_ALL_FEATURES". This completes the change.
 * 
 * 
 * After you enable all features in your organization, the management account in the
 * organization can apply policies on all member accounts. These policies can restrict what
 * users and even administrators in those accounts can do. The management account can apply
 * policies that prevent accounts from leaving the organization. Ensure that your account
 * administrators are aware of this.
 * 
 * 
 * You can only call this operation from the management account.
 */export const enableAllFeatures = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.EnableAllFeatures" }, EnableAllFeaturesRequest, EnableAllFeaturesResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, HandshakeConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an invitation to another organization's management account to designate your
 * account with the specified responsibilities for their organization. The invitation is
 * implemented as a Handshake whose details are in the response.
 * 
 * 
 * You can only call this operation from the management account.
 */export const inviteOrganizationToTransferResponsibility = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.InviteOrganizationToTransferResponsibility" }, InviteOrganizationToTransferResponsibilityRequest, InviteOrganizationToTransferResponsibilityResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicateHandshakeException, HandshakeConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the accounts in an organization that are contained by the specified target root
 * or organizational unit (OU). If you specify the root, you get a list of all the accounts
 * that aren't in any OU. If you specify an OU, you get a list of all the accounts in only
 * that OU and not in any child OUs. To get a list of all accounts in the organization, use
 * the ListAccounts operation.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listAccountsForParent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListAccountsForParent" }, ListAccountsForParentRequest, ListAccountsForParentResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ParentNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the accounts in an organization that have invalid effective policies. An
 * *invalid effective policy* is an effective
 * policy that fails validation checks, resulting in the effective policy not
 * being fully enforced on all the intended accounts within an organization.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listAccountsWithInvalidEffectivePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListAccountsWithInvalidEffectivePolicy" }, ListAccountsWithInvalidEffectivePolicyRequest, ListAccountsWithInvalidEffectivePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, EffectivePolicyNotFoundException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the Amazon Web Services services that you enabled to integrate with your
 * organization. After a service on this list creates the resources that it requires for
 * the integration, it can perform operations on your organization and its accounts.
 * 
 * 
 * For more information about integrating other services with Organizations, including the
 * list of services that currently work with Organizations, see Using Organizations with other Amazon Web Services
 * services in the *Organizations User Guide*.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listAWSServiceAccessForOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization" }, ListAWSServiceAccessForOrganizationRequest, ListAWSServiceAccessForOrganizationResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the organizational units (OUs) or accounts that are contained in the
 * specified parent OU or root. This operation, along with ListParents
 * enables you to traverse the tree structure that makes up this root.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listChildren = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListChildren" }, ListChildrenRequest, ListChildrenResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ParentNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon Web Services accounts that are designated as delegated administrators in this
 * organization.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listDelegatedAdministrators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListDelegatedAdministrators" }, ListDelegatedAdministratorsRequest, ListDelegatedAdministratorsResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the Amazon Web Services services for which the specified account is a delegated
 * administrator.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listDelegatedServicesForAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListDelegatedServicesForAccount" }, ListDelegatedServicesForAccountRequest, ListDelegatedServicesForAccountResponse, [AccessDeniedException, AccountNotFoundException, AccountNotRegisteredException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the validation errors on an effective
 * policy for a specified account and policy type.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listEffectivePolicyValidationErrors = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListEffectivePolicyValidationErrors" }, ListEffectivePolicyValidationErrorsRequest, ListEffectivePolicyValidationErrorsResponse, [AccessDeniedException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConstraintViolationException, EffectivePolicyNotFoundException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the recent handshakes that you have received.
 * 
 * 
 * You can view `CANCELED`, `ACCEPTED`, `DECLINED`, or
 * `EXPIRED` handshakes in API responses for 30 days before they are
 * deleted.
 * 
 * 
 * You can call this operation from any account in a organization.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 */export const listHandshakesForAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListHandshakesForAccount" }, ListHandshakesForAccountRequest, ListHandshakesForAccountResponse, [AccessDeniedException, ConcurrentModificationException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists transfers that allow you to manage the specified responsibilities for another
 * organization. This operation returns both transfer invitations and transfers.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 */export const listInboundResponsibilityTransfers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListInboundResponsibilityTransfers" }, ListInboundResponsibilityTransfersRequest, ListInboundResponsibilityTransfersResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConstraintViolationException, InvalidInputException, ResponsibilityTransferNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of all policies in an organization of a specified type.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListPolicies" }, ListPoliciesRequest, ListPoliciesResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the roots, organizational units (OUs), and accounts that the specified
 * policy is attached to.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const listTargetsForPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListTargetsForPolicy" }, ListTargetsForPolicyRequest, ListTargetsForPolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, PolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 * OUs and accounts remain in place, and any attached policies of the OU remain
 * attached.
 * 
 * 
 * You can only call this operation from the management account.
 */export const updateOrganizationalUnit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.UpdateOrganizationalUnit" }, UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, DuplicateOrganizationalUnitException, InvalidInputException, OrganizationalUnitNotFoundException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing policy with a new name, description, or content. If you don't
 * supply any parameter, that value remains unchanged. You can't change a policy's
 * type.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const updatePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.UpdatePolicy" }, UpdatePolicyRequest, UpdatePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicatePolicyException, InvalidInputException, MalformedPolicyDocumentException, PolicyChangesInProgressException, PolicyNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts a handshake by sending an `ACCEPTED` response to the sender. You
 * can view accepted handshakes in API responses for 30 days before they are
 * deleted.
 * 
 * 
 * 
 * Only the management account can accept the following
 * handshakes:
 * 
 * 
 * 
 * - Enable all features final confirmation
 * (`APPROVE_ALL_FEATURES`)
 * 
 * 
 * 
 * - Billing transfer (`TRANSFER_RESPONSIBILITY`)
 * 
 * 
 * 
 * 
 * 
 * For more information, see Enabling all features and Responding to a billing transfer invitation in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * Only a member account can accept the following
 * handshakes:
 * 
 * 
 * 
 * - Invitation to join (`INVITE`)
 * 
 * 
 * 
 * - Approve all features request (`ENABLE_ALL_FEATURES`)
 * 
 * 
 * 
 * 
 * 
 * For more information, see Responding to invitations and Enabling all features in the *Organizations User Guide*.
 */export const acceptHandshake = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.AcceptHandshake" }, AcceptHandshakeRequest, AcceptHandshakeResponse, [AccessDeniedException, AccessDeniedForDependencyException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, HandshakeAlreadyInStateException, HandshakeConstraintViolationException, HandshakeNotFoundException, InvalidHandshakeTransitionException, InvalidInputException, MasterCannotLeaveOrganizationException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches a policy to a root, an organizational unit (OU), or an individual account.
 * How the policy affects accounts depends on the type of policy. Refer to the
 * *Organizations User Guide* for information about each policy type:
 * 
 * 
 * 
 * - SERVICE_CONTROL_POLICY
 * 
 * 
 * 
 * 
 * - RESOURCE_CONTROL_POLICY
 * 
 * 
 * 
 * 
 * - DECLARATIVE_POLICY_EC2
 * 
 * 
 * 
 * 
 * - BACKUP_POLICY
 * 
 * 
 * 
 * 
 * - TAG_POLICY
 * 
 * 
 * 
 * 
 * - CHATBOT_POLICY
 * 
 * 
 * 
 * 
 * - AISERVICES_OPT_OUT_POLICY
 * 
 * 
 * 
 * 
 * - SECURITYHUB_POLICY
 * 
 * 
 * 
 * 
 * - UPGRADE_ROLLOUT_POLICY
 * 
 * 
 * 
 * 
 * - INSPECTOR_POLICY
 * 
 * 
 * 
 * 
 * - BEDROCK_POLICY
 * 
 * 
 * 
 * 
 * - S3_POLICY
 * 
 * 
 * 
 * 
 * - NETWORK_SECURITY_DIRECTOR_POLICY
 * 
 * 
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const attachPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.AttachPolicy" }, AttachPolicyRequest, S.Struct({}), [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicatePolicyAttachmentException, InvalidInputException, PolicyChangesInProgressException, PolicyNotFoundException, PolicyTypeNotEnabledException, ServiceException, TargetNotFoundException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a Handshake.
 * 
 * 
 * Only the account that sent a handshake can call this operation. The recipient of the handshake can't cancel it, but can use DeclineHandshake to decline. After a handshake is canceled, the
 * recipient can no longer respond to the handshake.
 * 
 * 
 * You can view canceled handshakes in API responses for 30 days before they are
 * deleted.
 */export const cancelHandshake = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CancelHandshake" }, CancelHandshakeRequest, CancelHandshakeResponse, [AccessDeniedException, ConcurrentModificationException, HandshakeAlreadyInStateException, HandshakeNotFoundException, InvalidHandshakeTransitionException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Web Services account that is automatically a member of the organization whose
 * credentials made the request. This is an asynchronous request that Amazon Web Services performs in the
 * background. Because `CreateAccount` operates asynchronously, it can return a
 * successful completion message even though account initialization might still be in
 * progress. You might need to wait a few minutes before you can successfully access the
 * account. To check the status of the request, do one of the following:
 * 
 * 
 * 
 * - Use the `Id` value of the `CreateAccountStatus` response
 * element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation.
 * 
 * 
 * 
 * - Check the CloudTrail log for the `CreateAccountResult` event. For
 * information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * The user who calls the API to create an account must have the
 * `organizations:CreateAccount` permission. If you enabled all features in
 * the organization, Organizations creates the required service-linked role named
 * `AWSServiceRoleForOrganizations`. For more information, see Organizations and service-linked roles in the
 * *Organizations User Guide*.
 * 
 * 
 * If the request includes tags, then the requester must have the
 * `organizations:TagResource` permission.
 * 
 * 
 * Organizations preconfigures the new member account with a role (named
 * `OrganizationAccountAccessRole` by default) that grants users in the
 * management account administrator permissions in the new member account. Principals in
 * the management account can assume the role. Organizations clones the company name and address
 * information for the new account from the organization's management account.
 * 
 * 
 * You can only call this operation from the management account.
 * 
 * 
 * For more information about creating accounts, see Creating
 * a member account in your organization in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * - When you create an account in an organization using the Organizations console,
 * API, or CLI commands, the information required for the account to operate
 * as a standalone account, such as a payment method is
 * *not* automatically collected. If you must remove an
 * account from your organization later, you can do so only after you provide
 * the missing information. For more information, see Considerations before removing an account from an organization
 * in the *Organizations User Guide*.
 * 
 * 
 * 
 * - If you get an exception that indicates that you exceeded your account
 * limits for the organization, contact Amazon Web Services Support.
 * 
 * 
 * 
 * - If you get an exception that indicates that the operation failed because
 * your organization is still initializing, wait one hour and then try again.
 * If the error persists, contact Amazon Web Services Support.
 * 
 * 
 * 
 * - It isn't recommended to use `CreateAccount` to create multiple
 * temporary accounts, and using the `CreateAccount` API to close
 * accounts is subject to a 30-day usage quota. For information on the
 * requirements and process for closing an account, see Closing a member
 * account in your organization in the
 * *Organizations User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * When you create a member account with this operation, you can choose whether to
 * create the account with the IAM User and Role Access to
 * Billing Information switch enabled. If you enable it, IAM users and
 * roles that have appropriate permissions can view billing information for the
 * account. If you disable it, only the account root user can access billing
 * information. For information about how to disable this switch for an account, see
 * Granting access to
 * your billing information and tools.
 */export const createAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CreateAccount" }, CreateAccountRequest, CreateAccountResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, FinalizingOrganizationException, InvalidInputException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a policy of a specified type that you can attach to a root, an organizational
 * unit (OU), or an individual Amazon Web Services account.
 * 
 * 
 * For more information about policies and their use, see Managing
 * Organizations policies.
 * 
 * 
 * If the request includes tags, then the requester must have the
 * `organizations:TagResource` permission.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 */export const createPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.CreatePolicy" }, CreatePolicyRequest, CreatePolicyResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicatePolicyException, InvalidInputException, MalformedPolicyDocumentException, PolicyTypeNotAvailableForOrganizationException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details for a transfer. A *transfer* is an arrangement
 * between two management accounts where one account designates the other with specified
 * responsibilities for their organization.
 */export const describeResponsibilityTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DescribeResponsibilityTransfer" }, DescribeResponsibilityTransferRequest, DescribeResponsibilityTransferResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, InvalidInputException, ResponsibilityTransferNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables an organizational policy type in a root. A policy of a certain type can be
 * attached to entities in a root only if that type is enabled in the root. After you
 * perform this operation, you no longer can attach policies of the specified type to that
 * root or to any organizational unit (OU) or account in that root. You can undo this by
 * using the EnablePolicyType operation.
 * 
 * 
 * This is an asynchronous request that Amazon Web Services performs in the background. If you disable
 * a policy type for a root, it still appears enabled for the organization if all features are enabled for the organization. Amazon Web Services recommends that you
 * first use ListRoots to see the status of policy types for a specified
 * root, and then use this operation.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 * 
 * 
 * To view the status of available policy types in the organization, use ListRoots.
 */export const disablePolicyType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.DisablePolicyType" }, DisablePolicyTypeRequest, DisablePolicyTypeResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, PolicyChangesInProgressException, PolicyTypeNotEnabledException, RootNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables a policy type in a root. After you enable a policy type in a root, you can
 * attach policies of that type to the root, any organizational unit (OU), or account in
 * that root. You can undo this by using the DisablePolicyType
 * operation.
 * 
 * 
 * This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services
 * recommends that you first use ListRoots to see the status of policy
 * types for a specified root, and then use this operation.
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 * 
 * 
 * You can enable a policy type in a root only if that policy type is available in the
 * organization. To view the status of available policy types in the organization, use
 * ListRoots.
 */export const enablePolicyType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.EnablePolicyType" }, EnablePolicyTypeRequest, EnablePolicyTypeResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, PolicyChangesInProgressException, PolicyTypeAlreadyEnabledException, PolicyTypeNotAvailableForOrganizationException, RootNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends an invitation to another account to join your organization as a member account.
 * Organizations sends email on your behalf to the email address that is associated with the
 * other account's owner. The invitation is implemented as a Handshake
 * whose details are in the response.
 * 
 * 
 * 
 * 
 * If you receive an exception that indicates that you exceeded your account limits
 * for the organization or that the operation failed because your organization is still
 * initializing, wait one hour and then try again. If the error persists after an hour,
 * contact Amazon Web Services
 * Support.
 * 
 * 
 * 
 * 
 * If the request includes tags, then the requester must have the
 * `organizations:TagResource` permission.
 * 
 * 
 * You can only call this operation from the management account.
 */export const inviteAccountToOrganization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.InviteAccountToOrganization" }, InviteAccountToOrganizationRequest, InviteAccountToOrganizationResponse, [AccessDeniedException, AccountOwnerNotVerifiedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, DuplicateHandshakeException, FinalizingOrganizationException, HandshakeConstraintViolationException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the root or organizational units (OUs) that serve as the immediate parent of the
 * specified child OU or account. This operation, along with ListChildren
 * enables you to traverse the tree structure that makes up this root.
 * 
 * 
 * 
 * 
 * When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 * 
 * 
 * 
 * 
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 * 
 * 
 * 
 * 
 * In the current release, a child can have only a single parent.
 */export const listParents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.ListParents" }, ListParentsRequest, ListParentsResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ChildNotFoundException, InvalidInputException, ServiceException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Moves an account from its current source parent root or organizational unit (OU) to
 * the specified destination parent root or OU.
 * 
 * 
 * You can only call this operation from the management account.
 */export const moveAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.MoveAccount" }, MoveAccountRequest, S.Struct({}), [AccessDeniedException, AccountNotFoundException, AWSOrganizationsNotInUseException, ConcurrentModificationException, DestinationParentNotFoundException, DuplicateAccountException, InvalidInputException, ServiceException, SourceParentNotFoundException, TooManyRequestsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Ends a transfer. A *transfer* is an arrangement between two
 * management accounts where one account designates the other with specified
 * responsibilities for their organization.
 */export const terminateResponsibilityTransfer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-11-28", uri: "/", method: "POST", sdkId: "Organizations", sigV4ServiceName: "organizations", name: "AWSOrganizationsV20161128.TerminateResponsibilityTransfer" }, TerminateResponsibilityTransferRequest, TerminateResponsibilityTransferResponse, [AccessDeniedException, AWSOrganizationsNotInUseException, ConcurrentModificationException, ConstraintViolationException, InvalidInputException, InvalidResponsibilityTransferTransitionException, ResponsibilityTransferAlreadyInStatusException, ResponsibilityTransferNotFoundException, ServiceException, TooManyRequestsException, UnsupportedAPIEndpointException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
