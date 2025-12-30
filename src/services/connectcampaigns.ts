import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const CampaignIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class DeleteCampaignRequest extends S.Class<DeleteCampaignRequest>("DeleteCampaignRequest")({id: S.String}) {}
export class DeleteConnectInstanceConfigRequest extends S.Class<DeleteConnectInstanceConfigRequest>("DeleteConnectInstanceConfigRequest")({connectInstanceId: S.String}) {}
export class DeleteInstanceOnboardingJobRequest extends S.Class<DeleteInstanceOnboardingJobRequest>("DeleteInstanceOnboardingJobRequest")({connectInstanceId: S.String}) {}
export class DescribeCampaignRequest extends S.Class<DescribeCampaignRequest>("DescribeCampaignRequest")({id: S.String}) {}
export class GetCampaignStateRequest extends S.Class<GetCampaignStateRequest>("GetCampaignStateRequest")({id: S.String}) {}
export class GetCampaignStateBatchRequest extends S.Class<GetCampaignStateBatchRequest>("GetCampaignStateBatchRequest")({campaignIds: CampaignIdList}) {}
export class GetConnectInstanceConfigRequest extends S.Class<GetConnectInstanceConfigRequest>("GetConnectInstanceConfigRequest")({connectInstanceId: S.String}) {}
export class GetInstanceOnboardingJobStatusRequest extends S.Class<GetInstanceOnboardingJobStatusRequest>("GetInstanceOnboardingJobStatusRequest")({connectInstanceId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({arn: S.String}) {}
export class PauseCampaignRequest extends S.Class<PauseCampaignRequest>("PauseCampaignRequest")({id: S.String}) {}
export class ResumeCampaignRequest extends S.Class<ResumeCampaignRequest>("ResumeCampaignRequest")({id: S.String}) {}
export class StartCampaignRequest extends S.Class<StartCampaignRequest>("StartCampaignRequest")({id: S.String}) {}
export class StopCampaignRequest extends S.Class<StopCampaignRequest>("StopCampaignRequest")({id: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({arn: S.String, tags: TagMap}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({arn: S.String, tagKeys: TagKeyList}) {}
export class ProgressiveDialerConfig extends S.Class<ProgressiveDialerConfig>("ProgressiveDialerConfig")({bandwidthAllocation: S.Number, dialingCapacity: S.optional(S.Number)}) {}
export class PredictiveDialerConfig extends S.Class<PredictiveDialerConfig>("PredictiveDialerConfig")({bandwidthAllocation: S.Number, dialingCapacity: S.optional(S.Number)}) {}
export class AgentlessDialerConfig extends S.Class<AgentlessDialerConfig>("AgentlessDialerConfig")({dialingCapacity: S.optional(S.Number)}) {}
export const DialerConfig = S.Union(ProgressiveDialerConfig, PredictiveDialerConfig, AgentlessDialerConfig);
export class UpdateCampaignDialerConfigRequest extends S.Class<UpdateCampaignDialerConfigRequest>("UpdateCampaignDialerConfigRequest")({id: S.String, dialerConfig: DialerConfig}) {}
export class UpdateCampaignNameRequest extends S.Class<UpdateCampaignNameRequest>("UpdateCampaignNameRequest")({id: S.String, name: S.String}) {}
export class AnswerMachineDetectionConfig extends S.Class<AnswerMachineDetectionConfig>("AnswerMachineDetectionConfig")({enableAnswerMachineDetection: S.Boolean, awaitAnswerMachinePrompt: S.optional(S.Boolean)}) {}
export class OutboundCallConfig extends S.Class<OutboundCallConfig>("OutboundCallConfig")({connectContactFlowId: S.String, connectSourcePhoneNumber: S.optional(S.String), connectQueueId: S.optional(S.String), answerMachineDetectionConfig: S.optional(AnswerMachineDetectionConfig)}) {}
export class EncryptionConfig extends S.Class<EncryptionConfig>("EncryptionConfig")({enabled: S.Boolean, encryptionType: S.optional(S.String), keyArn: S.optional(S.String)}) {}
export class GetCampaignStateResponse extends S.Class<GetCampaignStateResponse>("GetCampaignStateResponse")({state: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class StartInstanceOnboardingJobRequest extends S.Class<StartInstanceOnboardingJobRequest>("StartInstanceOnboardingJobRequest")({connectInstanceId: S.String, encryptionConfig: EncryptionConfig}) {}
export class UpdateCampaignOutboundCallConfigRequest extends S.Class<UpdateCampaignOutboundCallConfigRequest>("UpdateCampaignOutboundCallConfigRequest")({id: S.String, connectContactFlowId: S.optional(S.String), connectSourcePhoneNumber: S.optional(S.String), answerMachineDetectionConfig: S.optional(AnswerMachineDetectionConfig)}) {}
export class InstanceIdFilter extends S.Class<InstanceIdFilter>("InstanceIdFilter")({value: S.String, operator: S.String}) {}
export const Attributes = S.Record({key: S.String, value: S.String});
export class Campaign extends S.Class<Campaign>("Campaign")({id: S.String, arn: S.String, name: S.String, connectInstanceId: S.String, dialerConfig: DialerConfig, outboundCallConfig: OutboundCallConfig, tags: S.optional(TagMap)}) {}
export class SuccessfulCampaignStateResponse extends S.Class<SuccessfulCampaignStateResponse>("SuccessfulCampaignStateResponse")({campaignId: S.optional(S.String), state: S.optional(S.String)}) {}
export const SuccessfulCampaignStateResponseList = S.Array(SuccessfulCampaignStateResponse);
export class FailedCampaignStateResponse extends S.Class<FailedCampaignStateResponse>("FailedCampaignStateResponse")({campaignId: S.optional(S.String), failureCode: S.optional(S.String)}) {}
export const FailedCampaignStateResponseList = S.Array(FailedCampaignStateResponse);
export class InstanceConfig extends S.Class<InstanceConfig>("InstanceConfig")({connectInstanceId: S.String, serviceLinkedRoleArn: S.String, encryptionConfig: EncryptionConfig}) {}
export class InstanceOnboardingJobStatus extends S.Class<InstanceOnboardingJobStatus>("InstanceOnboardingJobStatus")({connectInstanceId: S.String, status: S.String, failureCode: S.optional(S.String)}) {}
export class CampaignFilters extends S.Class<CampaignFilters>("CampaignFilters")({instanceIdFilter: S.optional(InstanceIdFilter)}) {}
export class DialRequest extends S.Class<DialRequest>("DialRequest")({clientToken: S.String, phoneNumber: S.String, expirationTime: S.Date, attributes: Attributes}) {}
export const DialRequestList = S.Array(DialRequest);
export class CreateCampaignRequest extends S.Class<CreateCampaignRequest>("CreateCampaignRequest")({name: S.String, connectInstanceId: S.String, dialerConfig: DialerConfig, outboundCallConfig: OutboundCallConfig, tags: S.optional(TagMap)}) {}
export class DescribeCampaignResponse extends S.Class<DescribeCampaignResponse>("DescribeCampaignResponse")({campaign: S.optional(Campaign)}) {}
export class GetCampaignStateBatchResponse extends S.Class<GetCampaignStateBatchResponse>("GetCampaignStateBatchResponse")({successfulRequests: S.optional(SuccessfulCampaignStateResponseList), failedRequests: S.optional(FailedCampaignStateResponseList)}) {}
export class GetConnectInstanceConfigResponse extends S.Class<GetConnectInstanceConfigResponse>("GetConnectInstanceConfigResponse")({connectInstanceConfig: S.optional(InstanceConfig)}) {}
export class GetInstanceOnboardingJobStatusResponse extends S.Class<GetInstanceOnboardingJobStatusResponse>("GetInstanceOnboardingJobStatusResponse")({connectInstanceOnboardingJobStatus: S.optional(InstanceOnboardingJobStatus)}) {}
export class ListCampaignsRequest extends S.Class<ListCampaignsRequest>("ListCampaignsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String), filters: S.optional(CampaignFilters)}) {}
export class PutDialRequestBatchRequest extends S.Class<PutDialRequestBatchRequest>("PutDialRequestBatchRequest")({id: S.String, dialRequests: DialRequestList}) {}
export class StartInstanceOnboardingJobResponse extends S.Class<StartInstanceOnboardingJobResponse>("StartInstanceOnboardingJobResponse")({connectInstanceOnboardingJobStatus: S.optional(InstanceOnboardingJobStatus)}) {}
export class CreateCampaignResponse extends S.Class<CreateCampaignResponse>("CreateCampaignResponse")({id: S.optional(S.String), arn: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CampaignSummary extends S.Class<CampaignSummary>("CampaignSummary")({id: S.String, arn: S.String, name: S.String, connectInstanceId: S.String}) {}
export const CampaignSummaryList = S.Array(CampaignSummary);
export class SuccessfulRequest extends S.Class<SuccessfulRequest>("SuccessfulRequest")({clientToken: S.optional(S.String), id: S.optional(S.String)}) {}
export const SuccessfulRequestList = S.Array(SuccessfulRequest);
export class FailedRequest extends S.Class<FailedRequest>("FailedRequest")({clientToken: S.optional(S.String), id: S.optional(S.String), failureCode: S.optional(S.String)}) {}
export const FailedRequestList = S.Array(FailedRequest);
export class ListCampaignsResponse extends S.Class<ListCampaignsResponse>("ListCampaignsResponse")({nextToken: S.optional(S.String), campaignSummaryList: S.optional(CampaignSummaryList)}) {}
export class PutDialRequestBatchResponse extends S.Class<PutDialRequestBatchResponse>("PutDialRequestBatchResponse")({successfulRequests: S.optional(SuccessfulRequestList), failedRequests: S.optional(FailedRequestList)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InvalidCampaignStateException extends S.TaggedError<InvalidCampaignStateException>()("InvalidCampaignStateException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class InvalidStateException extends S.TaggedError<InvalidStateException>()("InvalidStateException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, xAmzErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {};

//# Operations
/**
 * Untag a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/tags/{arn}", method: "DELETE", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.UntagResource" }, UntagResourceRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the dialer config of a campaign. This API is idempotent.
 */export const updateCampaignDialerConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/dialer-config", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.UpdateCampaignDialerConfig" }, UpdateCampaignDialerConfigRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the name of a campaign. This API is idempotent.
 */export const updateCampaignName = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/name", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.UpdateCampaignName" }, UpdateCampaignNameRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a campaign from the specified Amazon Connect account.
 */export const deleteCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}", method: "DELETE", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.DeleteCampaign" }, DeleteCampaignRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a connect instance config from the specified AWS account.
 */export const deleteConnectInstanceConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/connect-instance/{connectInstanceId}/config", method: "DELETE", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.DeleteConnectInstanceConfig" }, DeleteConnectInstanceConfigRequest, S.Struct({}), [AccessDeniedException, InternalServerException, InvalidStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
 */export const deleteInstanceOnboardingJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/connect-instance/{connectInstanceId}/onboarding", method: "DELETE", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.DeleteInstanceOnboardingJob" }, DeleteInstanceOnboardingJobRequest, S.Struct({}), [AccessDeniedException, InternalServerException, InvalidStateException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get state of a campaign for the specified Amazon Connect account.
 */export const getCampaignState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/state", method: "GET", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.GetCampaignState" }, GetCampaignStateRequest, GetCampaignStateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List tags for a resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/tags/{arn}", method: "GET", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Pauses a campaign for the specified Amazon Connect account.
 */export const pauseCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/pause", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.PauseCampaign" }, PauseCampaignRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, InvalidCampaignStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a campaign for the specified Amazon Connect account.
 */export const resumeCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/resume", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.ResumeCampaign" }, ResumeCampaignRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, InvalidCampaignStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a campaign for the specified Amazon Connect account.
 */export const startCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/start", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.StartCampaign" }, StartCampaignRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, InvalidCampaignStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a campaign for the specified Amazon Connect account.
 */export const stopCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/stop", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.StopCampaign" }, StopCampaignRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, InvalidCampaignStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tag a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/tags/{arn}", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.TagResource" }, TagResourceRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the outbound call config of a campaign. This API is idempotent.
 */export const updateCampaignOutboundCallConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/outbound-call-config", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.UpdateCampaignOutboundCallConfig" }, UpdateCampaignOutboundCallConfigRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specific campaign.
 */export const describeCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}", method: "GET", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.DescribeCampaign" }, DescribeCampaignRequest, DescribeCampaignResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get state of campaigns for the specified Amazon Connect account.
 */export const getCampaignStateBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns-state", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.GetCampaignStateBatch" }, GetCampaignStateBatchRequest, GetCampaignStateBatchResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the specific Connect instance config.
 */export const getConnectInstanceConfig = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/connect-instance/{connectInstanceId}/config", method: "GET", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.GetConnectInstanceConfig" }, GetConnectInstanceConfigRequest, GetConnectInstanceConfigResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the specific instance onboarding job status.
 */export const getInstanceOnboardingJobStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/connect-instance/{connectInstanceId}/onboarding", method: "GET", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.GetInstanceOnboardingJobStatus" }, GetInstanceOnboardingJobStatusRequest, GetInstanceOnboardingJobStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Onboard the specific Amazon Connect instance to Connect Campaigns.
 */export const startInstanceOnboardingJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/connect-instance/{connectInstanceId}/onboarding", method: "PUT", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.StartInstanceOnboardingJob" }, StartInstanceOnboardingJobRequest, StartInstanceOnboardingJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
 */export const createCampaign = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns", method: "PUT", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.CreateCampaign" }, CreateCampaignRequest, CreateCampaignResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides summary information about the campaigns under the specified Amazon Connect account.
 */export const listCampaigns = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns-summary", method: "POST", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.ListCampaigns" }, ListCampaignsRequest, ListCampaignsResponse, [AccessDeniedException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
 */export const putDialRequestBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-01-30", uri: "/campaigns/{id}/dial-requests", method: "PUT", sdkId: "ConnectCampaigns", sigV4ServiceName: "connect-campaigns", name: "AmazonConnectCampaignService.PutDialRequestBatch" }, PutDialRequestBatchRequest, PutDialRequestBatchResponse, [AccessDeniedException, ConflictException, InternalServerException, InvalidCampaignStateException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
