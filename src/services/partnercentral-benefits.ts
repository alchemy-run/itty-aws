import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FulfillmentTypes = S.Array(S.String);
export const Arns = S.Array(S.String);
export const BenefitIdentifiers = S.Array(S.String);
export const BenefitApplicationIdentifierList = S.Array(S.String);
export const BenefitAllocationStatusList = S.Array(S.String);
export const Programs = S.Array(S.String);
export const Statuses = S.Array(S.String);
export const Stages = S.Array(S.String);
export const BenefitStatuses = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateBenefitApplicationResourceInput extends S.Class<AssociateBenefitApplicationResourceInput>("AssociateBenefitApplicationResourceInput")({Catalog: S.String, BenefitApplicationIdentifier: S.String, ResourceArn: S.String}) {}
export class CancelBenefitApplicationInput extends S.Class<CancelBenefitApplicationInput>("CancelBenefitApplicationInput")({Catalog: S.String, ClientToken: S.String, Identifier: S.String, Reason: S.optional(S.String)}) {}
export class CancelBenefitApplicationOutput extends S.Class<CancelBenefitApplicationOutput>("CancelBenefitApplicationOutput")({}) {}
export class DisassociateBenefitApplicationResourceInput extends S.Class<DisassociateBenefitApplicationResourceInput>("DisassociateBenefitApplicationResourceInput")({Catalog: S.String, BenefitApplicationIdentifier: S.String, ResourceArn: S.String}) {}
export class GetBenefitInput extends S.Class<GetBenefitInput>("GetBenefitInput")({Catalog: S.String, Identifier: S.String}) {}
export class GetBenefitAllocationInput extends S.Class<GetBenefitAllocationInput>("GetBenefitAllocationInput")({Catalog: S.String, Identifier: S.String}) {}
export class GetBenefitApplicationInput extends S.Class<GetBenefitApplicationInput>("GetBenefitApplicationInput")({Catalog: S.String, Identifier: S.String}) {}
export class ListBenefitAllocationsInput extends S.Class<ListBenefitAllocationsInput>("ListBenefitAllocationsInput")({Catalog: S.String, FulfillmentTypes: S.optional(FulfillmentTypes), BenefitIdentifiers: S.optional(BenefitIdentifiers), BenefitApplicationIdentifiers: S.optional(BenefitApplicationIdentifierList), Status: S.optional(BenefitAllocationStatusList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListBenefitsInput extends S.Class<ListBenefitsInput>("ListBenefitsInput")({Catalog: S.String, Programs: S.optional(Programs), FulfillmentTypes: S.optional(FulfillmentTypes), Status: S.optional(BenefitStatuses), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class RecallBenefitApplicationInput extends S.Class<RecallBenefitApplicationInput>("RecallBenefitApplicationInput")({Catalog: S.String, ClientToken: S.optional(S.String), Identifier: S.String, Reason: S.String}) {}
export class RecallBenefitApplicationOutput extends S.Class<RecallBenefitApplicationOutput>("RecallBenefitApplicationOutput")({}) {}
export class SubmitBenefitApplicationInput extends S.Class<SubmitBenefitApplicationInput>("SubmitBenefitApplicationInput")({Catalog: S.String, Identifier: S.String}) {}
export class SubmitBenefitApplicationOutput extends S.Class<SubmitBenefitApplicationOutput>("SubmitBenefitApplicationOutput")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const Tags = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class Contact extends S.Class<Contact>("Contact")({Email: S.optional(S.String), FirstName: S.optional(S.String), LastName: S.optional(S.String), BusinessTitle: S.optional(S.String), Phone: S.optional(S.String)}) {}
export const Contacts = S.Array(Contact);
export class FileInput extends S.Class<FileInput>("FileInput")({FileURI: S.String, BusinessUseCase: S.optional(S.String)}) {}
export const FileInputDetails = S.Array(FileInput);
export class UpdateBenefitApplicationInput extends S.Class<UpdateBenefitApplicationInput>("UpdateBenefitApplicationInput")({Catalog: S.String, ClientToken: S.String, Name: S.optional(S.String), Description: S.optional(S.String), Identifier: S.String, Revision: S.String, BenefitApplicationDetails: S.optional(S.Any), PartnerContacts: S.optional(Contacts), FileDetails: S.optional(FileInputDetails)}) {}
export class Amendment extends S.Class<Amendment>("Amendment")({FieldPath: S.String, NewValue: S.String}) {}
export const AmendmentList = S.Array(Amendment);
export const StatusReasonCodes = S.Array(S.String);
export class AssociatedResource extends S.Class<AssociatedResource>("AssociatedResource")({ResourceType: S.optional(S.String), ResourceIdentifier: S.optional(S.String), ResourceArn: S.optional(S.String)}) {}
export const AssociatedResources = S.Array(AssociatedResource);
export class AmendBenefitApplicationInput extends S.Class<AmendBenefitApplicationInput>("AmendBenefitApplicationInput")({Catalog: S.String, ClientToken: S.String, Revision: S.String, Identifier: S.String, AmendmentReason: S.String, Amendments: AmendmentList}) {}
export class AmendBenefitApplicationOutput extends S.Class<AmendBenefitApplicationOutput>("AmendBenefitApplicationOutput")({}) {}
export class AssociateBenefitApplicationResourceOutput extends S.Class<AssociateBenefitApplicationResourceOutput>("AssociateBenefitApplicationResourceOutput")({Id: S.optional(S.String), Arn: S.optional(S.String), Revision: S.optional(S.String)}) {}
export class CreateBenefitApplicationInput extends S.Class<CreateBenefitApplicationInput>("CreateBenefitApplicationInput")({Catalog: S.String, ClientToken: S.String, Name: S.optional(S.String), Description: S.optional(S.String), BenefitIdentifier: S.String, FulfillmentTypes: S.optional(FulfillmentTypes), BenefitApplicationDetails: S.optional(S.Any), Tags: S.optional(Tags), AssociatedResources: S.optional(Arns), PartnerContacts: S.optional(Contacts), FileDetails: S.optional(FileInputDetails)}) {}
export class DisassociateBenefitApplicationResourceOutput extends S.Class<DisassociateBenefitApplicationResourceOutput>("DisassociateBenefitApplicationResourceOutput")({Id: S.optional(S.String), Arn: S.optional(S.String), Revision: S.optional(S.String)}) {}
export class GetBenefitOutput extends S.Class<GetBenefitOutput>("GetBenefitOutput")({Id: S.optional(S.String), Catalog: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Programs: S.optional(Programs), FulfillmentTypes: S.optional(FulfillmentTypes), BenefitRequestSchema: S.optional(S.Any), Status: S.optional(S.String)}) {}
export class ListBenefitApplicationsInput extends S.Class<ListBenefitApplicationsInput>("ListBenefitApplicationsInput")({Catalog: S.String, Programs: S.optional(Programs), FulfillmentTypes: S.optional(FulfillmentTypes), BenefitIdentifiers: S.optional(BenefitIdentifiers), Status: S.optional(Statuses), Stages: S.optional(Stages), AssociatedResources: S.optional(AssociatedResources), AssociatedResourceArns: S.optional(Arns), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class UpdateBenefitApplicationOutput extends S.Class<UpdateBenefitApplicationOutput>("UpdateBenefitApplicationOutput")({Id: S.optional(S.String), Arn: S.optional(S.String), Revision: S.optional(S.String)}) {}
export const BenefitIds = S.Array(S.String);
export class FileDetail extends S.Class<FileDetail>("FileDetail")({FileURI: S.String, BusinessUseCase: S.optional(S.String), FileName: S.optional(S.String), FileStatus: S.optional(S.String), FileStatusReason: S.optional(S.String), FileType: S.optional(S.String), CreatedBy: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const FileDetails = S.Array(FileDetail);
export class BenefitAllocationSummary extends S.Class<BenefitAllocationSummary>("BenefitAllocationSummary")({Id: S.optional(S.String), Catalog: S.optional(S.String), Arn: S.optional(S.String), Status: S.optional(S.String), StatusReason: S.optional(S.String), Name: S.optional(S.String), BenefitId: S.optional(S.String), BenefitApplicationId: S.optional(S.String), FulfillmentTypes: S.optional(FulfillmentTypes), CreatedAt: S.optional(S.Date), ExpiresAt: S.optional(S.Date), ApplicableBenefitIds: S.optional(BenefitIds)}) {}
export const BenefitAllocationSummaries = S.Array(BenefitAllocationSummary);
export class BenefitSummary extends S.Class<BenefitSummary>("BenefitSummary")({Id: S.optional(S.String), Catalog: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Programs: S.optional(Programs), FulfillmentTypes: S.optional(FulfillmentTypes), Status: S.optional(S.String)}) {}
export const BenefitSummaries = S.Array(BenefitSummary);
export class CreateBenefitApplicationOutput extends S.Class<CreateBenefitApplicationOutput>("CreateBenefitApplicationOutput")({Id: S.optional(S.String), Arn: S.optional(S.String), Revision: S.optional(S.String)}) {}
export class GetBenefitApplicationOutput extends S.Class<GetBenefitApplicationOutput>("GetBenefitApplicationOutput")({Id: S.optional(S.String), Arn: S.optional(S.String), Catalog: S.optional(S.String), BenefitId: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), FulfillmentTypes: S.optional(FulfillmentTypes), BenefitApplicationDetails: S.optional(S.Any), Programs: S.optional(Programs), Status: S.optional(S.String), Stage: S.optional(S.String), StatusReason: S.optional(S.String), StatusReasonCode: S.optional(S.String), StatusReasonCodes: S.optional(StatusReasonCodes), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), Revision: S.optional(S.String), AssociatedResources: S.optional(Arns), PartnerContacts: S.optional(Contacts), FileDetails: S.optional(FileDetails)}) {}
export class ListBenefitAllocationsOutput extends S.Class<ListBenefitAllocationsOutput>("ListBenefitAllocationsOutput")({BenefitAllocationSummaries: S.optional(BenefitAllocationSummaries), NextToken: S.optional(S.String)}) {}
export class ListBenefitsOutput extends S.Class<ListBenefitsOutput>("ListBenefitsOutput")({BenefitSummaries: S.optional(BenefitSummaries), NextToken: S.optional(S.String)}) {}
export class MonetaryValue extends S.Class<MonetaryValue>("MonetaryValue")({Amount: S.String, CurrencyCode: S.String}) {}
export class IssuanceDetail extends S.Class<IssuanceDetail>("IssuanceDetail")({IssuanceId: S.optional(S.String), IssuanceAmount: S.optional(MonetaryValue), IssuedAt: S.optional(S.Date)}) {}
export class ConsumableDetails extends S.Class<ConsumableDetails>("ConsumableDetails")({AllocatedAmount: S.optional(MonetaryValue), RemainingAmount: S.optional(MonetaryValue), UtilizedAmount: S.optional(MonetaryValue), IssuanceDetails: S.optional(IssuanceDetail)}) {}
export class AccessDetails extends S.Class<AccessDetails>("AccessDetails")({Description: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({Name: S.String, Message: S.String, Code: S.optional(S.String)}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class CreditCode extends S.Class<CreditCode>("CreditCode")({AwsAccountId: S.String, Value: MonetaryValue, AwsCreditCode: S.String, Status: S.String, IssuedAt: S.Date, ExpiresAt: S.Date}) {}
export const CreditCodes = S.Array(CreditCode);
export class DisbursementDetails extends S.Class<DisbursementDetails>("DisbursementDetails")({DisbursedAmount: S.optional(MonetaryValue), IssuanceDetails: S.optional(IssuanceDetail)}) {}
export class CreditDetails extends S.Class<CreditDetails>("CreditDetails")({AllocatedAmount: MonetaryValue, IssuedAmount: MonetaryValue, Codes: CreditCodes}) {}
export const Attributes = S.Record({key: S.String, value: S.String});
export const FulfillmentDetails = S.Union(DisbursementDetails, ConsumableDetails, CreditDetails, AccessDetails);
export class BenefitApplicationSummary extends S.Class<BenefitApplicationSummary>("BenefitApplicationSummary")({Catalog: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String), Arn: S.optional(S.String), BenefitId: S.optional(S.String), Programs: S.optional(Programs), FulfillmentTypes: S.optional(FulfillmentTypes), Status: S.optional(S.String), Stage: S.optional(S.String), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), BenefitApplicationDetails: S.optional(Attributes), AssociatedResources: S.optional(Arns)}) {}
export const BenefitApplicationSummaries = S.Array(BenefitApplicationSummary);
export class GetBenefitAllocationOutput extends S.Class<GetBenefitAllocationOutput>("GetBenefitAllocationOutput")({Id: S.optional(S.String), Catalog: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Status: S.optional(S.String), StatusReason: S.optional(S.String), BenefitApplicationId: S.optional(S.String), BenefitId: S.optional(S.String), FulfillmentType: S.optional(S.String), ApplicableBenefitIds: S.optional(BenefitIdentifiers), FulfillmentDetail: S.optional(FulfillmentDetails), CreatedAt: S.optional(S.Date), UpdatedAt: S.optional(S.Date), StartsAt: S.optional(S.Date), ExpiresAt: S.optional(S.Date)}) {}
export class ListBenefitApplicationsOutput extends S.Class<ListBenefitApplicationsOutput>("ListBenefitApplicationsOutput")({BenefitApplicationSummaries: S.optional(BenefitApplicationSummaries), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Cancels a benefit application that is currently in progress, preventing further processing.
 */export const cancelBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CancelBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.CancelBenefitApplication" }, CancelBenefitApplicationInput, CancelBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the association between an AWS resource and a benefit application.
 */export const disassociateBenefitApplicationResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/DisassociateBenefitApplicationResource", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.DisassociateBenefitApplicationResource" }, DisassociateBenefitApplicationResourceInput, DisassociateBenefitApplicationResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about a specific benefit available in the partner catalog.
 */export const getBenefit = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetBenefit", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.GetBenefit" }, GetBenefitInput, GetBenefitOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves all tags associated with a specific resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListTagsForResource", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Recalls a submitted benefit application, returning it to draft status for further modifications.
 */export const recallBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/RecallBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.RecallBenefitApplication" }, RecallBenefitApplicationInput, RecallBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Submits a benefit application for review and processing by AWS.
 */export const submitBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/SubmitBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.SubmitBenefitApplication" }, SubmitBenefitApplicationInput, SubmitBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates tags for a specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/TagResource", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes specified tags from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UntagResource", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing benefit application with new information while maintaining revision control.
 */export const updateBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/UpdateBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.UpdateBenefitApplication" }, UpdateBenefitApplicationInput, UpdateBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an existing benefit application by applying amendments to specific fields while maintaining revision control.
 */export const amendBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/AmendBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.AmendBenefitApplication" }, AmendBenefitApplicationInput, AmendBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new benefit application for a partner to request access to AWS benefits and programs.
 */export const createBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/CreateBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.CreateBenefitApplication" }, CreateBenefitApplicationInput, CreateBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about a specific benefit application.
 */export const getBenefitApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetBenefitApplication", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.GetBenefitApplication" }, GetBenefitApplicationInput, GetBenefitApplicationOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of benefit allocations based on specified filter criteria.
 */export const listBenefitAllocations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListBenefitAllocations", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.ListBenefitAllocations" }, ListBenefitAllocationsInput, ListBenefitAllocationsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of available benefits based on specified filter criteria.
 */export const listBenefits = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListBenefits", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.ListBenefits" }, ListBenefitsInput, ListBenefitsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Links an AWS resource to an existing benefit application for tracking and management purposes.
 */export const associateBenefitApplicationResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/AssociateBenefitApplicationResource", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.AssociateBenefitApplicationResource" }, AssociateBenefitApplicationResourceInput, AssociateBenefitApplicationResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about a specific benefit allocation that has been granted to a partner.
 */export const getBenefitAllocation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/GetBenefitAllocation", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.GetBenefitAllocation" }, GetBenefitAllocationInput, GetBenefitAllocationOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a paginated list of benefit applications based on specified filter criteria.
 */export const listBenefitApplications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/ListBenefitApplications", method: "POST", sdkId: "PartnerCentral Benefits", sigV4ServiceName: "partnercentral-benefits", name: "PartnerCentralBenefitsService.ListBenefitApplications" }, ListBenefitApplicationsInput, ListBenefitApplicationsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
