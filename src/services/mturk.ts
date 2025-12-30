import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountBalanceRequest extends S.Class<GetAccountBalanceRequest>("GetAccountBalanceRequest")({}) {}
export const AssignmentStatusList = S.Array(S.String);
export const ReviewPolicyLevelList = S.Array(S.String);
export const CustomerIdList = S.Array(S.String);
export class AcceptQualificationRequestRequest extends S.Class<AcceptQualificationRequestRequest>("AcceptQualificationRequestRequest")({QualificationRequestId: S.String, IntegerValue: S.optional(S.Number)}) {}
export class AcceptQualificationRequestResponse extends S.Class<AcceptQualificationRequestResponse>("AcceptQualificationRequestResponse")({}) {}
export class ApproveAssignmentRequest extends S.Class<ApproveAssignmentRequest>("ApproveAssignmentRequest")({AssignmentId: S.String, RequesterFeedback: S.optional(S.String), OverrideRejection: S.optional(S.Boolean)}) {}
export class ApproveAssignmentResponse extends S.Class<ApproveAssignmentResponse>("ApproveAssignmentResponse")({}) {}
export class AssociateQualificationWithWorkerRequest extends S.Class<AssociateQualificationWithWorkerRequest>("AssociateQualificationWithWorkerRequest")({QualificationTypeId: S.String, WorkerId: S.String, IntegerValue: S.optional(S.Number), SendNotification: S.optional(S.Boolean)}) {}
export class AssociateQualificationWithWorkerResponse extends S.Class<AssociateQualificationWithWorkerResponse>("AssociateQualificationWithWorkerResponse")({}) {}
export class CreateAdditionalAssignmentsForHITRequest extends S.Class<CreateAdditionalAssignmentsForHITRequest>("CreateAdditionalAssignmentsForHITRequest")({HITId: S.String, NumberOfAdditionalAssignments: S.Number, UniqueRequestToken: S.optional(S.String)}) {}
export class CreateAdditionalAssignmentsForHITResponse extends S.Class<CreateAdditionalAssignmentsForHITResponse>("CreateAdditionalAssignmentsForHITResponse")({}) {}
export const IntegerList = S.Array(S.Number);
export class Locale extends S.Class<Locale>("Locale")({Country: S.String, Subdivision: S.optional(S.String)}) {}
export const LocaleList = S.Array(Locale);
export class QualificationRequirement extends S.Class<QualificationRequirement>("QualificationRequirement")({QualificationTypeId: S.String, Comparator: S.String, IntegerValues: S.optional(IntegerList), LocaleValues: S.optional(LocaleList), RequiredToPreview: S.optional(S.Boolean), ActionsGuarded: S.optional(S.String)}) {}
export const QualificationRequirementList = S.Array(QualificationRequirement);
export class CreateHITTypeRequest extends S.Class<CreateHITTypeRequest>("CreateHITTypeRequest")({AutoApprovalDelayInSeconds: S.optional(S.Number), AssignmentDurationInSeconds: S.Number, Reward: S.String, Title: S.String, Keywords: S.optional(S.String), Description: S.String, QualificationRequirements: S.optional(QualificationRequirementList)}) {}
export const StringList = S.Array(S.String);
export class ParameterMapEntry extends S.Class<ParameterMapEntry>("ParameterMapEntry")({Key: S.optional(S.String), Values: S.optional(StringList)}) {}
export const ParameterMapEntryList = S.Array(ParameterMapEntry);
export class PolicyParameter extends S.Class<PolicyParameter>("PolicyParameter")({Key: S.optional(S.String), Values: S.optional(StringList), MapEntries: S.optional(ParameterMapEntryList)}) {}
export const PolicyParameterList = S.Array(PolicyParameter);
export class ReviewPolicy extends S.Class<ReviewPolicy>("ReviewPolicy")({PolicyName: S.String, Parameters: S.optional(PolicyParameterList)}) {}
export class HITLayoutParameter extends S.Class<HITLayoutParameter>("HITLayoutParameter")({Name: S.String, Value: S.String}) {}
export const HITLayoutParameterList = S.Array(HITLayoutParameter);
export class CreateHITWithHITTypeRequest extends S.Class<CreateHITWithHITTypeRequest>("CreateHITWithHITTypeRequest")({HITTypeId: S.String, MaxAssignments: S.optional(S.Number), LifetimeInSeconds: S.Number, Question: S.optional(S.String), RequesterAnnotation: S.optional(S.String), UniqueRequestToken: S.optional(S.String), AssignmentReviewPolicy: S.optional(ReviewPolicy), HITReviewPolicy: S.optional(ReviewPolicy), HITLayoutId: S.optional(S.String), HITLayoutParameters: S.optional(HITLayoutParameterList)}) {}
export class CreateQualificationTypeRequest extends S.Class<CreateQualificationTypeRequest>("CreateQualificationTypeRequest")({Name: S.String, Keywords: S.optional(S.String), Description: S.String, QualificationTypeStatus: S.String, RetryDelayInSeconds: S.optional(S.Number), Test: S.optional(S.String), AnswerKey: S.optional(S.String), TestDurationInSeconds: S.optional(S.Number), AutoGranted: S.optional(S.Boolean), AutoGrantedValue: S.optional(S.Number)}) {}
export class CreateWorkerBlockRequest extends S.Class<CreateWorkerBlockRequest>("CreateWorkerBlockRequest")({WorkerId: S.String, Reason: S.String}) {}
export class CreateWorkerBlockResponse extends S.Class<CreateWorkerBlockResponse>("CreateWorkerBlockResponse")({}) {}
export class DeleteHITRequest extends S.Class<DeleteHITRequest>("DeleteHITRequest")({HITId: S.String}) {}
export class DeleteHITResponse extends S.Class<DeleteHITResponse>("DeleteHITResponse")({}) {}
export class DeleteQualificationTypeRequest extends S.Class<DeleteQualificationTypeRequest>("DeleteQualificationTypeRequest")({QualificationTypeId: S.String}) {}
export class DeleteQualificationTypeResponse extends S.Class<DeleteQualificationTypeResponse>("DeleteQualificationTypeResponse")({}) {}
export class DeleteWorkerBlockRequest extends S.Class<DeleteWorkerBlockRequest>("DeleteWorkerBlockRequest")({WorkerId: S.String, Reason: S.optional(S.String)}) {}
export class DeleteWorkerBlockResponse extends S.Class<DeleteWorkerBlockResponse>("DeleteWorkerBlockResponse")({}) {}
export class DisassociateQualificationFromWorkerRequest extends S.Class<DisassociateQualificationFromWorkerRequest>("DisassociateQualificationFromWorkerRequest")({WorkerId: S.String, QualificationTypeId: S.String, Reason: S.optional(S.String)}) {}
export class DisassociateQualificationFromWorkerResponse extends S.Class<DisassociateQualificationFromWorkerResponse>("DisassociateQualificationFromWorkerResponse")({}) {}
export class GetAccountBalanceResponse extends S.Class<GetAccountBalanceResponse>("GetAccountBalanceResponse")({AvailableBalance: S.optional(S.String), OnHoldBalance: S.optional(S.String)}) {}
export class GetAssignmentRequest extends S.Class<GetAssignmentRequest>("GetAssignmentRequest")({AssignmentId: S.String}) {}
export class GetFileUploadURLRequest extends S.Class<GetFileUploadURLRequest>("GetFileUploadURLRequest")({AssignmentId: S.String, QuestionIdentifier: S.String}) {}
export class GetHITRequest extends S.Class<GetHITRequest>("GetHITRequest")({HITId: S.String}) {}
export class GetQualificationScoreRequest extends S.Class<GetQualificationScoreRequest>("GetQualificationScoreRequest")({QualificationTypeId: S.String, WorkerId: S.String}) {}
export class GetQualificationTypeRequest extends S.Class<GetQualificationTypeRequest>("GetQualificationTypeRequest")({QualificationTypeId: S.String}) {}
export class ListAssignmentsForHITRequest extends S.Class<ListAssignmentsForHITRequest>("ListAssignmentsForHITRequest")({HITId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), AssignmentStatuses: S.optional(AssignmentStatusList)}) {}
export class ListBonusPaymentsRequest extends S.Class<ListBonusPaymentsRequest>("ListBonusPaymentsRequest")({HITId: S.optional(S.String), AssignmentId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListHITsRequest extends S.Class<ListHITsRequest>("ListHITsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListHITsForQualificationTypeRequest extends S.Class<ListHITsForQualificationTypeRequest>("ListHITsForQualificationTypeRequest")({QualificationTypeId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListQualificationRequestsRequest extends S.Class<ListQualificationRequestsRequest>("ListQualificationRequestsRequest")({QualificationTypeId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListQualificationTypesRequest extends S.Class<ListQualificationTypesRequest>("ListQualificationTypesRequest")({Query: S.optional(S.String), MustBeRequestable: S.Boolean, MustBeOwnedByCaller: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReviewableHITsRequest extends S.Class<ListReviewableHITsRequest>("ListReviewableHITsRequest")({HITTypeId: S.optional(S.String), Status: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListReviewPolicyResultsForHITRequest extends S.Class<ListReviewPolicyResultsForHITRequest>("ListReviewPolicyResultsForHITRequest")({HITId: S.String, PolicyLevels: S.optional(ReviewPolicyLevelList), RetrieveActions: S.optional(S.Boolean), RetrieveResults: S.optional(S.Boolean), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListWorkerBlocksRequest extends S.Class<ListWorkerBlocksRequest>("ListWorkerBlocksRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListWorkersWithQualificationTypeRequest extends S.Class<ListWorkersWithQualificationTypeRequest>("ListWorkersWithQualificationTypeRequest")({QualificationTypeId: S.String, Status: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class NotifyWorkersRequest extends S.Class<NotifyWorkersRequest>("NotifyWorkersRequest")({Subject: S.String, MessageText: S.String, WorkerIds: CustomerIdList}) {}
export class RejectAssignmentRequest extends S.Class<RejectAssignmentRequest>("RejectAssignmentRequest")({AssignmentId: S.String, RequesterFeedback: S.String}) {}
export class RejectAssignmentResponse extends S.Class<RejectAssignmentResponse>("RejectAssignmentResponse")({}) {}
export class RejectQualificationRequestRequest extends S.Class<RejectQualificationRequestRequest>("RejectQualificationRequestRequest")({QualificationRequestId: S.String, Reason: S.optional(S.String)}) {}
export class RejectQualificationRequestResponse extends S.Class<RejectQualificationRequestResponse>("RejectQualificationRequestResponse")({}) {}
export class SendBonusRequest extends S.Class<SendBonusRequest>("SendBonusRequest")({WorkerId: S.String, BonusAmount: S.String, AssignmentId: S.String, Reason: S.String, UniqueRequestToken: S.optional(S.String)}) {}
export class SendBonusResponse extends S.Class<SendBonusResponse>("SendBonusResponse")({}) {}
export class UpdateExpirationForHITRequest extends S.Class<UpdateExpirationForHITRequest>("UpdateExpirationForHITRequest")({HITId: S.String, ExpireAt: S.Date}) {}
export class UpdateExpirationForHITResponse extends S.Class<UpdateExpirationForHITResponse>("UpdateExpirationForHITResponse")({}) {}
export class UpdateHITReviewStatusRequest extends S.Class<UpdateHITReviewStatusRequest>("UpdateHITReviewStatusRequest")({HITId: S.String, Revert: S.optional(S.Boolean)}) {}
export class UpdateHITReviewStatusResponse extends S.Class<UpdateHITReviewStatusResponse>("UpdateHITReviewStatusResponse")({}) {}
export class UpdateHITTypeOfHITRequest extends S.Class<UpdateHITTypeOfHITRequest>("UpdateHITTypeOfHITRequest")({HITId: S.String, HITTypeId: S.String}) {}
export class UpdateHITTypeOfHITResponse extends S.Class<UpdateHITTypeOfHITResponse>("UpdateHITTypeOfHITResponse")({}) {}
export const EventTypeList = S.Array(S.String);
export class NotificationSpecification extends S.Class<NotificationSpecification>("NotificationSpecification")({Destination: S.String, Transport: S.String, Version: S.String, EventTypes: EventTypeList}) {}
export class UpdateNotificationSettingsRequest extends S.Class<UpdateNotificationSettingsRequest>("UpdateNotificationSettingsRequest")({HITTypeId: S.String, Notification: S.optional(NotificationSpecification), Active: S.optional(S.Boolean)}) {}
export class UpdateNotificationSettingsResponse extends S.Class<UpdateNotificationSettingsResponse>("UpdateNotificationSettingsResponse")({}) {}
export class UpdateQualificationTypeRequest extends S.Class<UpdateQualificationTypeRequest>("UpdateQualificationTypeRequest")({QualificationTypeId: S.String, Description: S.optional(S.String), QualificationTypeStatus: S.optional(S.String), Test: S.optional(S.String), AnswerKey: S.optional(S.String), TestDurationInSeconds: S.optional(S.Number), RetryDelayInSeconds: S.optional(S.Number), AutoGranted: S.optional(S.Boolean), AutoGrantedValue: S.optional(S.Number)}) {}
export class Assignment extends S.Class<Assignment>("Assignment")({AssignmentId: S.optional(S.String), WorkerId: S.optional(S.String), HITId: S.optional(S.String), AssignmentStatus: S.optional(S.String), AutoApprovalTime: S.optional(S.Date), AcceptTime: S.optional(S.Date), SubmitTime: S.optional(S.Date), ApprovalTime: S.optional(S.Date), RejectionTime: S.optional(S.Date), Deadline: S.optional(S.Date), Answer: S.optional(S.String), RequesterFeedback: S.optional(S.String)}) {}
export const AssignmentList = S.Array(Assignment);
export class HIT extends S.Class<HIT>("HIT")({HITId: S.optional(S.String), HITTypeId: S.optional(S.String), HITGroupId: S.optional(S.String), HITLayoutId: S.optional(S.String), CreationTime: S.optional(S.Date), Title: S.optional(S.String), Description: S.optional(S.String), Question: S.optional(S.String), Keywords: S.optional(S.String), HITStatus: S.optional(S.String), MaxAssignments: S.optional(S.Number), Reward: S.optional(S.String), AutoApprovalDelayInSeconds: S.optional(S.Number), Expiration: S.optional(S.Date), AssignmentDurationInSeconds: S.optional(S.Number), RequesterAnnotation: S.optional(S.String), QualificationRequirements: S.optional(QualificationRequirementList), HITReviewStatus: S.optional(S.String), NumberOfAssignmentsPending: S.optional(S.Number), NumberOfAssignmentsAvailable: S.optional(S.Number), NumberOfAssignmentsCompleted: S.optional(S.Number)}) {}
export const HITList = S.Array(HIT);
export class QualificationType extends S.Class<QualificationType>("QualificationType")({QualificationTypeId: S.optional(S.String), CreationTime: S.optional(S.Date), Name: S.optional(S.String), Description: S.optional(S.String), Keywords: S.optional(S.String), QualificationTypeStatus: S.optional(S.String), Test: S.optional(S.String), TestDurationInSeconds: S.optional(S.Number), AnswerKey: S.optional(S.String), RetryDelayInSeconds: S.optional(S.Number), IsRequestable: S.optional(S.Boolean), AutoGranted: S.optional(S.Boolean), AutoGrantedValue: S.optional(S.Number)}) {}
export const QualificationTypeList = S.Array(QualificationType);
export class Qualification extends S.Class<Qualification>("Qualification")({QualificationTypeId: S.optional(S.String), WorkerId: S.optional(S.String), GrantTime: S.optional(S.Date), IntegerValue: S.optional(S.Number), LocaleValue: S.optional(Locale), Status: S.optional(S.String)}) {}
export const QualificationList = S.Array(Qualification);
export class CreateHITTypeResponse extends S.Class<CreateHITTypeResponse>("CreateHITTypeResponse")({HITTypeId: S.optional(S.String)}) {}
export class GetFileUploadURLResponse extends S.Class<GetFileUploadURLResponse>("GetFileUploadURLResponse")({FileUploadURL: S.optional(S.String)}) {}
export class GetHITResponse extends S.Class<GetHITResponse>("GetHITResponse")({HIT: S.optional(HIT)}) {}
export class GetQualificationTypeResponse extends S.Class<GetQualificationTypeResponse>("GetQualificationTypeResponse")({QualificationType: S.optional(QualificationType)}) {}
export class ListAssignmentsForHITResponse extends S.Class<ListAssignmentsForHITResponse>("ListAssignmentsForHITResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), Assignments: S.optional(AssignmentList)}) {}
export class ListHITsResponse extends S.Class<ListHITsResponse>("ListHITsResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), HITs: S.optional(HITList)}) {}
export class ListHITsForQualificationTypeResponse extends S.Class<ListHITsForQualificationTypeResponse>("ListHITsForQualificationTypeResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), HITs: S.optional(HITList)}) {}
export class ListQualificationTypesResponse extends S.Class<ListQualificationTypesResponse>("ListQualificationTypesResponse")({NumResults: S.optional(S.Number), NextToken: S.optional(S.String), QualificationTypes: S.optional(QualificationTypeList)}) {}
export class ListReviewableHITsResponse extends S.Class<ListReviewableHITsResponse>("ListReviewableHITsResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), HITs: S.optional(HITList)}) {}
export class ListWorkersWithQualificationTypeResponse extends S.Class<ListWorkersWithQualificationTypeResponse>("ListWorkersWithQualificationTypeResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), Qualifications: S.optional(QualificationList)}) {}
export class SendTestEventNotificationRequest extends S.Class<SendTestEventNotificationRequest>("SendTestEventNotificationRequest")({Notification: NotificationSpecification, TestEventType: S.String}) {}
export class SendTestEventNotificationResponse extends S.Class<SendTestEventNotificationResponse>("SendTestEventNotificationResponse")({}) {}
export class UpdateQualificationTypeResponse extends S.Class<UpdateQualificationTypeResponse>("UpdateQualificationTypeResponse")({QualificationType: S.optional(QualificationType)}) {}
export class BonusPayment extends S.Class<BonusPayment>("BonusPayment")({WorkerId: S.optional(S.String), BonusAmount: S.optional(S.String), AssignmentId: S.optional(S.String), Reason: S.optional(S.String), GrantTime: S.optional(S.Date)}) {}
export const BonusPaymentList = S.Array(BonusPayment);
export class QualificationRequest extends S.Class<QualificationRequest>("QualificationRequest")({QualificationRequestId: S.optional(S.String), QualificationTypeId: S.optional(S.String), WorkerId: S.optional(S.String), Test: S.optional(S.String), Answer: S.optional(S.String), SubmitTime: S.optional(S.Date)}) {}
export const QualificationRequestList = S.Array(QualificationRequest);
export class WorkerBlock extends S.Class<WorkerBlock>("WorkerBlock")({WorkerId: S.optional(S.String), Reason: S.optional(S.String)}) {}
export const WorkerBlockList = S.Array(WorkerBlock);
export class NotifyWorkersFailureStatus extends S.Class<NotifyWorkersFailureStatus>("NotifyWorkersFailureStatus")({NotifyWorkersFailureCode: S.optional(S.String), NotifyWorkersFailureMessage: S.optional(S.String), WorkerId: S.optional(S.String)}) {}
export const NotifyWorkersFailureStatusList = S.Array(NotifyWorkersFailureStatus);
export class CreateHITWithHITTypeResponse extends S.Class<CreateHITWithHITTypeResponse>("CreateHITWithHITTypeResponse")({HIT: S.optional(HIT)}) {}
export class CreateQualificationTypeResponse extends S.Class<CreateQualificationTypeResponse>("CreateQualificationTypeResponse")({QualificationType: S.optional(QualificationType)}) {}
export class GetAssignmentResponse extends S.Class<GetAssignmentResponse>("GetAssignmentResponse")({Assignment: S.optional(Assignment), HIT: S.optional(HIT)}) {}
export class GetQualificationScoreResponse extends S.Class<GetQualificationScoreResponse>("GetQualificationScoreResponse")({Qualification: S.optional(Qualification)}) {}
export class ListBonusPaymentsResponse extends S.Class<ListBonusPaymentsResponse>("ListBonusPaymentsResponse")({NumResults: S.optional(S.Number), NextToken: S.optional(S.String), BonusPayments: S.optional(BonusPaymentList)}) {}
export class ListQualificationRequestsResponse extends S.Class<ListQualificationRequestsResponse>("ListQualificationRequestsResponse")({NumResults: S.optional(S.Number), NextToken: S.optional(S.String), QualificationRequests: S.optional(QualificationRequestList)}) {}
export class ListWorkerBlocksResponse extends S.Class<ListWorkerBlocksResponse>("ListWorkerBlocksResponse")({NextToken: S.optional(S.String), NumResults: S.optional(S.Number), WorkerBlocks: S.optional(WorkerBlockList)}) {}
export class NotifyWorkersResponse extends S.Class<NotifyWorkersResponse>("NotifyWorkersResponse")({NotifyWorkersFailureStatuses: S.optional(NotifyWorkersFailureStatusList)}) {}
export class ReviewResultDetail extends S.Class<ReviewResultDetail>("ReviewResultDetail")({ActionId: S.optional(S.String), SubjectId: S.optional(S.String), SubjectType: S.optional(S.String), QuestionId: S.optional(S.String), Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const ReviewResultDetailList = S.Array(ReviewResultDetail);
export class ReviewActionDetail extends S.Class<ReviewActionDetail>("ReviewActionDetail")({ActionId: S.optional(S.String), ActionName: S.optional(S.String), TargetId: S.optional(S.String), TargetType: S.optional(S.String), Status: S.optional(S.String), CompleteTime: S.optional(S.Date), Result: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export const ReviewActionDetailList = S.Array(ReviewActionDetail);
export class ReviewReport extends S.Class<ReviewReport>("ReviewReport")({ReviewResults: S.optional(ReviewResultDetailList), ReviewActions: S.optional(ReviewActionDetailList)}) {}
export class CreateHITRequest extends S.Class<CreateHITRequest>("CreateHITRequest")({MaxAssignments: S.optional(S.Number), AutoApprovalDelayInSeconds: S.optional(S.Number), LifetimeInSeconds: S.Number, AssignmentDurationInSeconds: S.Number, Reward: S.String, Title: S.String, Keywords: S.optional(S.String), Description: S.String, Question: S.optional(S.String), RequesterAnnotation: S.optional(S.String), QualificationRequirements: S.optional(QualificationRequirementList), UniqueRequestToken: S.optional(S.String), AssignmentReviewPolicy: S.optional(ReviewPolicy), HITReviewPolicy: S.optional(ReviewPolicy), HITLayoutId: S.optional(S.String), HITLayoutParameters: S.optional(HITLayoutParameterList)}) {}
export class ListReviewPolicyResultsForHITResponse extends S.Class<ListReviewPolicyResultsForHITResponse>("ListReviewPolicyResultsForHITResponse")({HITId: S.optional(S.String), AssignmentReviewPolicy: S.optional(ReviewPolicy), HITReviewPolicy: S.optional(ReviewPolicy), AssignmentReviewReport: S.optional(ReviewReport), HITReviewReport: S.optional(ReviewReport), NextToken: S.optional(S.String)}) {}
export class CreateHITResponse extends S.Class<CreateHITResponse>("CreateHITResponse")({HIT: S.optional(HIT)}) {}

//# Errors
export class RequestError extends S.TaggedError<RequestError>()("RequestError", {}) {};
export class ServiceFault extends S.TaggedError<ServiceFault>()("ServiceFault", {}) {};

//# Operations
/**
 * The `AssociateQualificationWithWorker` operation gives a Worker a
 * Qualification. `AssociateQualificationWithWorker` does not require that the Worker
 * submit a Qualification request. It gives the Qualification directly to the Worker.
 * 
 * You can only assign a Qualification of a Qualification type that you created (using
 * the `CreateQualificationType` operation).
 * 
 * Note: `AssociateQualificationWithWorker` does not affect any pending Qualification
 * requests for the Qualification by the Worker. If you assign a Qualification to a
 * Worker, then later grant a Qualification request made by the Worker, the granting of
 * the request may modify the Qualification score. To resolve a pending Qualification
 * request without affecting the Qualification the Worker already has, reject the
 * request with the `RejectQualificationRequest` operation.
 */export const associateQualificationWithWorker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker" }, AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `CreateAdditionalAssignmentsForHIT`
 * operation increases the maximum number of assignments of an existing HIT.
 * 
 * To extend the maximum number of assignments, specify the number of additional assignments.
 * 
 * - HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 * assignments will result in an
 * `AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease`
 * exception.
 * 
 * - HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 * `AWS.MechanicalTurk.HITTooOldForExtension`
 * exception.
 */export const createAdditionalAssignmentsForHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT" }, CreateAdditionalAssignmentsForHITRequest, CreateAdditionalAssignmentsForHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `CreateWorkerBlock` operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
 */export const createWorkerBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateWorkerBlock" }, CreateWorkerBlockRequest, CreateWorkerBlockResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `DeleteHIT` operation is used to delete HIT that is no longer needed.
 * Only the Requester who created the HIT can delete it.
 * 
 * You can only dispose of HITs that are in the `Reviewable` state,
 * with all of their submitted assignments already either approved or rejected.
 * If you call the DeleteHIT operation on a HIT that is not in the `Reviewable` state
 * (for example, that has not expired, or still has active assignments),
 * or on a HIT that is Reviewable but without all of its submitted assignments
 * already approved or rejected, the service will return an error.
 * 
 * - HITs are automatically disposed of after 120 days.
 * 
 * - After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 * 
 * - Disposed HITs are not returned in results for the ListHITs operation.
 * 
 * - Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 */export const deleteHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.DeleteHIT" }, DeleteHITRequest, DeleteHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `DeleteQualificationType`
 * deletes a Qualification type and deletes any HIT types that are
 * associated with the Qualification type.
 * 
 * This operation does not revoke Qualifications already assigned
 * to Workers because the Qualifications might be needed for active HITs.
 * If there are any pending requests for the Qualification type, Amazon
 * Mechanical Turk rejects those requests. After you delete a
 * Qualification type, you can no longer use it to create HITs or HIT
 * types.
 * 
 * DeleteQualificationType must wait for all the HITs that use
 * the deleted Qualification type to be deleted before completing. It
 * may take up to 48 hours before DeleteQualificationType completes and
 * the unique name of the Qualification type is available for reuse with
 * CreateQualificationType.
 */export const deleteQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.DeleteQualificationType" }, DeleteQualificationTypeRequest, DeleteQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `DeleteWorkerBlock` operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
 */export const deleteWorkerBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.DeleteWorkerBlock" }, DeleteWorkerBlockRequest, DeleteWorkerBlockResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `DisassociateQualificationFromWorker`
 * revokes a previously granted Qualification from a user.
 * 
 * You can provide a text message explaining why the Qualification was
 * revoked. The user who had the Qualification can see this message.
 */export const disassociateQualificationFromWorker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker" }, DisassociateQualificationFromWorkerRequest, DisassociateQualificationFromWorkerResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `GetAccountBalance` operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester.
 * Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing.
 * Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.
 */export const getAccountBalance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetAccountBalance" }, GetAccountBalanceRequest, GetAccountBalanceResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `RejectAssignment` operation rejects the results of a completed assignment.
 * 
 * You can include an optional feedback message with the rejection,
 * which the Worker can see in the Status section of the web site.
 * When you include a feedback message with the rejection,
 * it helps the Worker understand why the assignment was rejected,
 * and can improve the quality of the results the Worker submits in the future.
 * 
 * Only the Requester who created the HIT can reject an assignment for the HIT.
 */export const rejectAssignment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.RejectAssignment" }, RejectAssignmentRequest, RejectAssignmentResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `RejectQualificationRequest`
 * operation rejects a user's request for a Qualification.
 * 
 * You can provide a text message explaining why the request was
 * rejected. The Worker who made the request can see this message.
 */export const rejectQualificationRequest = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.RejectQualificationRequest" }, RejectQualificationRequestRequest, RejectQualificationRequestResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `SendBonus`
 * operation issues a payment of money from your account to a Worker.
 * This payment happens separately from the reward you pay to the Worker
 * when you approve the Worker's assignment. The SendBonus operation
 * requires the Worker's ID and the assignment ID as parameters to
 * initiate payment of the bonus. You must include a message that
 * explains the reason for the bonus payment, as the Worker may not be
 * expecting the payment. Amazon Mechanical Turk collects a fee for
 * bonus payments, similar to the HIT listing fee. This operation fails
 * if your account does not have enough funds to pay for both the bonus
 * and the fees.
 */export const sendBonus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.SendBonus" }, SendBonusRequest, SendBonusResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `UpdateExpirationForHIT` operation allows you update the expiration time of a HIT.
 * If you update it to a time in the past, the HIT will be immediately expired.
 */export const updateExpirationForHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.UpdateExpirationForHIT" }, UpdateExpirationForHITRequest, UpdateExpirationForHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `UpdateHITReviewStatus` operation updates the status of a HIT.
 * If the status is Reviewable, this operation can update the status to Reviewing,
 * or it can revert a Reviewing HIT back to the Reviewable status.
 */export const updateHITReviewStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.UpdateHITReviewStatus" }, UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `UpdateHITTypeOfHIT`
 * operation allows you to change the HITType properties of a HIT. This
 * operation disassociates the HIT from its old HITType properties and
 * associates it with the new HITType properties. The HIT takes on the
 * properties of the new HITType in place of the old ones.
 */export const updateHITTypeOfHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT" }, UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `UpdateNotificationSettings` operation creates, updates,
 * disables or re-enables notifications for a HIT type.
 * If you call the UpdateNotificationSettings operation for a HIT type that already has a
 * notification specification, the operation replaces the old specification with a new one.
 * You can call the UpdateNotificationSettings operation to enable or disable notifications
 * for the HIT type, without having to modify the notification specification itself by providing
 * updates to the Active status without specifying a new notification specification.
 * To change the Active status of a HIT type's notifications,
 * the HIT type must already have a notification specification,
 * or one must be provided in the same call to `UpdateNotificationSettings`.
 */export const updateNotificationSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.UpdateNotificationSettings" }, UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `AcceptQualificationRequest` operation approves a Worker's request for a Qualification.
 * 
 * Only the owner of the Qualification type can grant a Qualification request for that type.
 * 
 * A successful request for the `AcceptQualificationRequest` operation
 * returns with no errors and an empty body.
 */export const acceptQualificationRequest = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.AcceptQualificationRequest" }, AcceptQualificationRequestRequest, AcceptQualificationRequestResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ApproveAssignment` operation approves the results of a completed assignment.
 * 
 * Approving an assignment initiates two payments from the Requester's Amazon.com account
 * 
 * - The Worker who submitted the results is paid the reward specified in the HIT.
 * 
 * - Amazon Mechanical Turk fees are debited.
 * 
 * If the Requester's account does not have adequate funds for these payments,
 * the call to ApproveAssignment returns an exception, and the approval is not processed.
 * You can include an optional feedback message with the approval,
 * which the Worker can see in the Status section of the web site.
 * 
 * You can also call this operation for assignments that were previous rejected
 * and approve them by explicitly overriding the previous rejection.
 * This only works on rejected assignments that were submitted within the previous 30 days
 * and only if the assignment's related HIT has not been deleted.
 */export const approveAssignment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ApproveAssignment" }, ApproveAssignmentRequest, ApproveAssignmentResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `CreateHITType` operation creates a new HIT type. This operation
 * allows you to define a standard set of HIT properties to use when creating HITs.
 * If you register a HIT type with values that match an existing HIT type, the HIT type
 * ID of the existing type will be returned.
 */export const createHITType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateHITType" }, CreateHITTypeRequest, CreateHITTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `GetFileUploadURL`
 * operation generates and returns a temporary URL. You use the
 * temporary URL to retrieve a file uploaded by a Worker as an answer to
 * a FileUploadAnswer question for a HIT. The temporary URL is generated
 * the instant the GetFileUploadURL operation is called, and is valid
 * for 60 seconds. You can get a temporary file upload URL any time
 * until the HIT is disposed. After the HIT is disposed, any uploaded
 * files are deleted, and cannot be retrieved.
 * 
 * Pending Deprecation on December 12, 2017. The Answer Specification
 * structure will no longer support the `FileUploadAnswer`
 * element to be used for the QuestionForm data structure.
 * Instead, we recommend that Requesters who want to create HITs asking
 * Workers to upload files to use Amazon S3.
 */export const getFileUploadURL = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetFileUploadURL" }, GetFileUploadURLRequest, GetFileUploadURLResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `GetHIT` operation retrieves the details of the specified HIT.
 */export const getHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetHIT" }, GetHITRequest, GetHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `GetQualificationType`operation retrieves information about a Qualification type using its ID.
 */export const getQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetQualificationType" }, GetQualificationTypeRequest, GetQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `ListAssignmentsForHIT`
 * operation retrieves completed assignments for a HIT. You can use this
 * operation to retrieve the results for a HIT.
 * 
 * You can get assignments for a HIT at any time, even if the
 * HIT is not yet Reviewable. If a HIT requested multiple assignments,
 * and has received some results but has not yet become Reviewable, you
 * can still retrieve the partial results with this operation.
 * 
 * Use the AssignmentStatus parameter to control which set of
 * assignments for a HIT are returned. The ListAssignmentsForHIT
 * operation
 * can return submitted assignments awaiting approval, or it can return
 * assignments that have already been approved or rejected. You can set
 * AssignmentStatus=Approved,Rejected to get assignments that have
 * already been approved and rejected together in one result set.
 * 
 * Only the Requester who created the HIT can retrieve the
 * assignments for that HIT.
 * 
 * Results are sorted and divided into numbered pages and the
 * operation returns a single page of results. You can use the
 * parameters
 * of the operation to control sorting and pagination.
 */export const listAssignmentsForHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListAssignmentsForHIT" }, ListAssignmentsForHITRequest, ListAssignmentsForHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `ListHITs`
 * operation returns all of a Requester's HITs. The operation returns
 * HITs of any status, except for HITs that have been deleted of with
 * the DeleteHIT operation or that have been auto-deleted.
 */export const listHITs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListHITs" }, ListHITsRequest, ListHITsResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListHITsForQualificationType` operation returns the HITs that use
 * the given Qualification type for a Qualification requirement.
 * The operation returns HITs of any status, except for HITs that have been deleted
 * with the `DeleteHIT` operation or that have been auto-deleted.
 */export const listHITsForQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListHITsForQualificationType" }, ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `ListQualificationTypes`
 * operation returns a list of Qualification types, filtered by
 * an optional search term.
 */export const listQualificationTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListQualificationTypes" }, ListQualificationTypesRequest, ListQualificationTypesResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListReviewableHITs` operation retrieves the HITs with Status equal to
 * Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 */export const listReviewableHITs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListReviewableHITs" }, ListReviewableHITsRequest, ListReviewableHITsResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListWorkersWithQualificationType` operation returns all of the Workers
 * that have been associated with a given Qualification type.
 */export const listWorkersWithQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType" }, ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `SendTestEventNotification` operation causes Amazon Mechanical Turk to send
 * a notification message as if a HIT event occurred, according to the provided
 * notification specification. This allows you to test notifications without
 * setting up notifications for a real HIT type and trying to trigger them using the website.
 * When you call this operation, the service attempts to send the test notification immediately.
 */export const sendTestEventNotification = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.SendTestEventNotification" }, SendTestEventNotificationRequest, SendTestEventNotificationResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `UpdateQualificationType`
 * operation modifies the attributes of an existing Qualification type,
 * which is represented by a QualificationType data structure. Only the
 * owner of a Qualification type can modify its attributes.
 * 
 * Most attributes of a Qualification type can be changed after
 * the type has been created. However, the Name and Keywords fields
 * cannot be modified. The RetryDelayInSeconds parameter can be modified
 * or added to change the delay or to enable retries, but
 * RetryDelayInSeconds cannot be used to disable retries.
 * 
 * You can use this operation to update the test for a
 * Qualification type. The test is updated based on the values specified
 * for the Test, TestDurationInSeconds and AnswerKey parameters. All
 * three parameters specify the updated test. If you are updating the
 * test for a type, you must specify the Test and TestDurationInSeconds
 * parameters. The AnswerKey parameter is optional; omitting it specifies
 * that the updated test does not have an answer key.
 * 
 * If you omit the Test parameter, the test for the
 * Qualification type is unchanged. There is no way to remove a test from
 * a Qualification type that has one. If the type already has a test, you
 * cannot update it to be AutoGranted. If the Qualification type does not
 * have a test and one is provided by an update, the type will henceforth
 * have a test.
 * 
 * If you want to update the test duration or answer key for an
 * existing test without changing the questions, you must specify a Test
 * parameter with the original questions, along with the updated values.
 * 
 * If you provide an updated Test but no AnswerKey, the new test
 * will not have an answer key. Requests for such Qualifications must be
 * granted manually.
 * 
 * You can also update the AutoGranted and AutoGrantedValue
 * attributes of the Qualification type.
 */export const updateQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.UpdateQualificationType" }, UpdateQualificationTypeRequest, UpdateQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `CreateHITWithHITType` operation creates a new Human Intelligence Task (HIT)
 * using an existing HITTypeID generated by the `CreateHITType` operation.
 * 
 * This is an alternative way to create HITs from the `CreateHIT` operation.
 * This is the recommended best practice for Requesters who are creating large numbers of HITs.
 * 
 * CreateHITWithHITType also supports several ways to provide question data:
 * by providing a value for the `Question` parameter that fully specifies the contents of the HIT,
 * or by providing a `HitLayoutId` and associated `HitLayoutParameters`.
 * 
 * If a HIT is created with 10 or more maximum assignments, there is an additional fee.
 * For more information, see Amazon Mechanical Turk Pricing.
 */export const createHITWithHITType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateHITWithHITType" }, CreateHITWithHITTypeRequest, CreateHITWithHITTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `CreateQualificationType`
 * operation creates a new Qualification type, which is represented by a
 * `QualificationType`
 * data structure.
 */export const createQualificationType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateQualificationType" }, CreateQualificationTypeRequest, CreateQualificationTypeResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `GetAssignment` operation retrieves the details of the specified Assignment.
 */export const getAssignment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetAssignment" }, GetAssignmentRequest, GetAssignmentResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `GetQualificationScore`
 * operation returns the value of a Worker's Qualification for a given
 * Qualification type.
 * 
 * To get a Worker's Qualification, you must know the Worker's ID. The
 * Worker's ID is included in the assignment data returned by the
 * `ListAssignmentsForHIT`
 * operation.
 * 
 * Only the owner of a Qualification type can query the value of
 * a Worker's Qualification of that type.
 */export const getQualificationScore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.GetQualificationScore" }, GetQualificationScoreRequest, GetQualificationScoreResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `ListBonusPayments`
 * operation retrieves the amounts of bonuses you have paid to Workers
 * for a given HIT or assignment.
 */export const listBonusPayments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListBonusPayments" }, ListBonusPaymentsRequest, ListBonusPaymentsResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `ListQualificationRequests`
 * operation retrieves requests for Qualifications of a particular
 * Qualification type. The owner of the Qualification type calls this
 * operation to poll for pending requests, and accepts them using the
 * AcceptQualification operation.
 */export const listQualificationRequests = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListQualificationRequests" }, ListQualificationRequestsRequest, ListQualificationRequestsResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListWorkersBlocks` operation retrieves a list of Workers who are blocked from working on your HITs.
 */export const listWorkerBlocks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListWorkerBlocks" }, ListWorkerBlocksRequest, ListWorkerBlocksResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The
 * `NotifyWorkers`
 * operation sends an email to one or more Workers that you specify with
 * the Worker ID. You can specify up to 100 Worker IDs to send the same
 * message with a single call to the NotifyWorkers operation. The
 * NotifyWorkers operation will send a notification email to a Worker
 * only if you have previously approved or rejected work from the
 * Worker.
 */export const notifyWorkers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.NotifyWorkers" }, NotifyWorkersRequest, NotifyWorkersResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `ListReviewPolicyResultsForHIT` operation retrieves the computed results
 * and the actions taken in the course of executing your Review Policies for a given HIT.
 * For information about how to specify Review Policies when you call CreateHIT,
 * see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
 * Assignment-level and HIT-level review results.
 */export const listReviewPolicyResultsForHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT" }, ListReviewPolicyResultsForHITRequest, ListReviewPolicyResultsForHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `CreateHIT` operation creates a new Human Intelligence Task (HIT).
 * The new HIT is made available for Workers to find and accept on the Amazon Mechanical
 * Turk website.
 * 
 * This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to `CreateHIT`, a new HIT is created for you, with a new `HITTypeID`. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.
 * 
 * An alternative way to create HITs is to first generate a HITTypeID using the `CreateHITType` operation and then call the `CreateHITWithHITType` operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
 * 
 * CreateHIT also supports several ways to provide question data: by providing a value
 * for the `Question` parameter that fully specifies the contents of the HIT, or by providing
 * a `HitLayoutId` and associated `HitLayoutParameters`.
 * 
 * If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
 * Amazon Mechanical Turk Pricing.
 */export const createHIT = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-17", sdkId: "MTurk", sigV4ServiceName: "mturk-requester", name: "MTurkRequesterServiceV20170117.CreateHIT" }, CreateHITRequest, CreateHITResponse, [RequestError, ServiceFault]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
