import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GetSellingSystemSettingsRequest extends S.Class<GetSellingSystemSettingsRequest>("GetSellingSystemSettingsRequest")({Catalog: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class PutSellingSystemSettingsRequest extends S.Class<PutSellingSystemSettingsRequest>("PutSellingSystemSettingsRequest")({Catalog: S.String, ResourceSnapshotJobRoleIdentifier: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class GetSellingSystemSettingsResponse extends S.Class<GetSellingSystemSettingsResponse>("GetSellingSystemSettingsResponse")({Catalog: S.String, ResourceSnapshotJobRoleArn: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: TagList}) {}
export class PutSellingSystemSettingsResponse extends S.Class<PutSellingSystemSettingsResponse>("PutSellingSystemSettingsResponse")({Catalog: S.String, ResourceSnapshotJobRoleArn: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class AddressSummary extends S.Class<AddressSummary>("AddressSummary")({City: S.optional(S.String), PostalCode: S.optional(S.String), StateOrRegion: S.optional(S.String), CountryCode: S.optional(S.String)}) {}
export class LeadCustomer extends S.Class<LeadCustomer>("LeadCustomer")({Industry: S.optional(S.String), CompanyName: S.String, WebsiteUrl: S.optional(S.String), Address: AddressSummary, AwsMaturity: S.optional(S.String), MarketSegment: S.optional(S.String)}) {}
export class LeadContact extends S.Class<LeadContact>("LeadContact")({BusinessTitle: S.String, Email: S.String, FirstName: S.String, LastName: S.String, Phone: S.optional(S.String)}) {}
export class LeadInteraction extends S.Class<LeadInteraction>("LeadInteraction")({SourceType: S.String, SourceId: S.String, SourceName: S.String, Usecase: S.optional(S.String), InteractionDate: S.optional(S.Date), CustomerAction: S.String, BusinessProblem: S.optional(S.String), Contact: LeadContact}) {}
export class UpdateLeadContext extends S.Class<UpdateLeadContext>("UpdateLeadContext")({QualificationStatus: S.optional(S.String), Customer: LeadCustomer, Interaction: S.optional(LeadInteraction)}) {}
export class EngagementCustomer extends S.Class<EngagementCustomer>("EngagementCustomer")({Industry: S.String, CompanyName: S.String, WebsiteUrl: S.String, CountryCode: S.String}) {}
export class EngagementCustomerProjectDetails extends S.Class<EngagementCustomerProjectDetails>("EngagementCustomerProjectDetails")({Title: S.String, BusinessProblem: S.String, TargetCompletionDate: S.String}) {}
export class CustomerProjectsContext extends S.Class<CustomerProjectsContext>("CustomerProjectsContext")({Customer: S.optional(EngagementCustomer), Project: S.optional(EngagementCustomerProjectDetails)}) {}
export const UpdateEngagementContextPayload = S.Union(UpdateLeadContext, CustomerProjectsContext);
export class UpdateEngagementContextRequest extends S.Class<UpdateEngagementContextRequest>("UpdateEngagementContextRequest")({Catalog: S.String, EngagementIdentifier: S.String, ContextIdentifier: S.String, EngagementLastModifiedAt: S.Date, Type: S.String, Payload: UpdateEngagementContextPayload}) {}
export class ValidationExceptionError extends S.Class<ValidationExceptionError>("ValidationExceptionError")({FieldName: S.optional(S.String), Message: S.String, Code: S.String}) {}
export const ValidationExceptionErrorList = S.Array(ValidationExceptionError);
export const LeadInteractionList = S.Array(LeadInteraction);
export class UpdateEngagementContextResponse extends S.Class<UpdateEngagementContextResponse>("UpdateEngagementContextResponse")({EngagementId: S.String, EngagementArn: S.String, EngagementLastModifiedAt: S.Date, ContextId: S.String}) {}
export class LeadContext extends S.Class<LeadContext>("LeadContext")({QualificationStatus: S.optional(S.String), Customer: LeadCustomer, Interactions: LeadInteractionList}) {}
export const EngagementContextPayload = S.Union(CustomerProjectsContext, LeadContext);
export class CreateEngagementContextRequest extends S.Class<CreateEngagementContextRequest>("CreateEngagementContextRequest")({Catalog: S.String, EngagementIdentifier: S.String, ClientToken: S.String, Type: S.String, Payload: EngagementContextPayload}) {}
export class CreateEngagementContextResponse extends S.Class<CreateEngagementContextResponse>("CreateEngagementContextResponse")({EngagementId: S.optional(S.String), EngagementArn: S.optional(S.String), EngagementLastModifiedAt: S.optional(S.Date), ContextId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.optional(S.String)}) {};

//# Operations
export const getSellingSystemSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/GetSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.GetSellingSystemSettings" }, GetSellingSystemSettingsRequest, GetSellingSystemSettingsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/ListTagsForResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putSellingSystemSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/PutSellingSystemSettings", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.PutSellingSystemSettings" }, PutSellingSystemSettingsRequest, PutSellingSystemSettingsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/TagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/UntagResource", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateEngagementContext = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/UpdateEngagementContext", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.UpdateEngagementContext" }, UpdateEngagementContextRequest, UpdateEngagementContextResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createEngagementContext = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/CreateEngagementContext", method: "POST", sdkId: "PartnerCentral Selling", sigV4ServiceName: "partnercentral-selling", name: "AWSPartnerCentralSelling.CreateEngagementContext" }, CreateEngagementContextRequest, CreateEngagementContextResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
