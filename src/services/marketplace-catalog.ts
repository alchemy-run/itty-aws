import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class CancelChangeSetRequest extends S.Class<CancelChangeSetRequest>("CancelChangeSetRequest")({Catalog: S.String, ChangeSetId: S.String}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({ResourceArn: S.String}) {}
export class DeleteResourcePolicyResponse extends S.Class<DeleteResourcePolicyResponse>("DeleteResourcePolicyResponse")({}) {}
export class DescribeChangeSetRequest extends S.Class<DescribeChangeSetRequest>("DescribeChangeSetRequest")({Catalog: S.String, ChangeSetId: S.String}) {}
export class DescribeEntityRequest extends S.Class<DescribeEntityRequest>("DescribeEntityRequest")({Catalog: S.String, EntityId: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({ResourceArn: S.String, Policy: S.String}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const ValueList = S.Array(S.String);
export class EntityRequest extends S.Class<EntityRequest>("EntityRequest")({Catalog: S.String, EntityId: S.String}) {}
export const EntityRequestList = S.Array(EntityRequest);
export class Filter extends S.Class<Filter>("Filter")({Name: S.optional(S.String), ValueList: S.optional(ValueList)}) {}
export const FilterList = S.Array(Filter);
export class Sort extends S.Class<Sort>("Sort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class BatchDescribeEntitiesRequest extends S.Class<BatchDescribeEntitiesRequest>("BatchDescribeEntitiesRequest")({EntityRequestList: EntityRequestList}) {}
export class CancelChangeSetResponse extends S.Class<CancelChangeSetResponse>("CancelChangeSetResponse")({ChangeSetId: S.optional(S.String), ChangeSetArn: S.optional(S.String)}) {}
export class DescribeEntityResponse extends S.Class<DescribeEntityResponse>("DescribeEntityResponse")({EntityType: S.optional(S.String), EntityIdentifier: S.optional(S.String), EntityArn: S.optional(S.String), LastModifiedDate: S.optional(S.String), Details: S.optional(S.String), DetailsDocument: S.optional(S.Any)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({Policy: S.optional(S.String)}) {}
export class ListChangeSetsRequest extends S.Class<ListChangeSetsRequest>("ListChangeSetsRequest")({Catalog: S.String, FilterList: S.optional(FilterList), Sort: S.optional(Sort), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceArn: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DataProductSort extends S.Class<DataProductSort>("DataProductSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class SaaSProductSort extends S.Class<SaaSProductSort>("SaaSProductSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class AmiProductSort extends S.Class<AmiProductSort>("AmiProductSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class OfferSort extends S.Class<OfferSort>("OfferSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class ContainerProductSort extends S.Class<ContainerProductSort>("ContainerProductSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class ResaleAuthorizationSort extends S.Class<ResaleAuthorizationSort>("ResaleAuthorizationSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class MachineLearningProductSort extends S.Class<MachineLearningProductSort>("MachineLearningProductSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class OfferSetSort extends S.Class<OfferSetSort>("OfferSetSort")({SortBy: S.optional(S.String), SortOrder: S.optional(S.String)}) {}
export class Entity extends S.Class<Entity>("Entity")({Type: S.String, Identifier: S.optional(S.String)}) {}
export const DataProductEntityIdFilterValueList = S.Array(S.String);
export const DataProductTitleFilterValueList = S.Array(S.String);
export const DataProductVisibilityFilterValueList = S.Array(S.String);
export const SaaSProductEntityIdFilterValueList = S.Array(S.String);
export const SaaSProductTitleFilterValueList = S.Array(S.String);
export const SaaSProductVisibilityFilterValueList = S.Array(S.String);
export const AmiProductEntityIdFilterValueList = S.Array(S.String);
export const AmiProductTitleFilterValueList = S.Array(S.String);
export const AmiProductVisibilityFilterValueList = S.Array(S.String);
export const OfferEntityIdFilterValueList = S.Array(S.String);
export const OfferNameFilterValueList = S.Array(S.String);
export const OfferProductIdFilterValueList = S.Array(S.String);
export const OfferResaleAuthorizationIdFilterValueList = S.Array(S.String);
export const OfferStateFilterValueList = S.Array(S.String);
export const OfferTargetingFilterValueList = S.Array(S.String);
export const OfferSetIdFilterValueList = S.Array(S.String);
export const ContainerProductEntityIdFilterValueList = S.Array(S.String);
export const ContainerProductTitleFilterValueList = S.Array(S.String);
export const ContainerProductVisibilityFilterValueList = S.Array(S.String);
export const ResaleAuthorizationEntityIdFilterValueList = S.Array(S.String);
export const ResaleAuthorizationNameFilterValueList = S.Array(S.String);
export const ResaleAuthorizationProductIdFilterValueList = S.Array(S.String);
export const ResaleAuthorizationCreatedDateFilterValueList = S.Array(S.String);
export const ResaleAuthorizationAvailabilityEndDateFilterValueList = S.Array(S.String);
export const ResaleAuthorizationManufacturerAccountIdFilterValueList = S.Array(S.String);
export const ResaleAuthorizationProductNameFilterValueList = S.Array(S.String);
export const ResaleAuthorizationManufacturerLegalNameFilterValueList = S.Array(S.String);
export const ResaleAuthorizationResellerAccountIDFilterValueList = S.Array(S.String);
export const ResaleAuthorizationResellerLegalNameFilterValueList = S.Array(S.String);
export const ResaleAuthorizationStatusFilterValueList = S.Array(S.String);
export const ResaleAuthorizationOfferExtendedStatusFilterValueList = S.Array(S.String);
export const MachineLearningProductEntityIdFilterValueList = S.Array(S.String);
export const MachineLearningProductTitleFilterValueList = S.Array(S.String);
export const MachineLearningProductVisibilityFilterValueList = S.Array(S.String);
export const OfferSetEntityIdFilterValueList = S.Array(S.String);
export const OfferSetNameFilterValueList = S.Array(S.String);
export const OfferSetStateFilterValueList = S.Array(S.String);
export const OfferSetAssociatedOfferIdsFilterValueList = S.Array(S.String);
export const OfferSetSolutionIdFilterValueList = S.Array(S.String);
export const EntityTypeSort = S.Union(DataProductSort, SaaSProductSort, AmiProductSort, OfferSort, ContainerProductSort, ResaleAuthorizationSort, MachineLearningProductSort, OfferSetSort);
export class Change extends S.Class<Change>("Change")({ChangeType: S.String, Entity: Entity, EntityTags: S.optional(TagList), Details: S.optional(S.String), DetailsDocument: S.optional(S.Any), ChangeName: S.optional(S.String)}) {}
export const RequestedChangeList = S.Array(Change);
export class DataProductEntityIdFilter extends S.Class<DataProductEntityIdFilter>("DataProductEntityIdFilter")({ValueList: S.optional(DataProductEntityIdFilterValueList)}) {}
export class DataProductTitleFilter extends S.Class<DataProductTitleFilter>("DataProductTitleFilter")({ValueList: S.optional(DataProductTitleFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class DataProductVisibilityFilter extends S.Class<DataProductVisibilityFilter>("DataProductVisibilityFilter")({ValueList: S.optional(DataProductVisibilityFilterValueList)}) {}
export class SaaSProductEntityIdFilter extends S.Class<SaaSProductEntityIdFilter>("SaaSProductEntityIdFilter")({ValueList: S.optional(SaaSProductEntityIdFilterValueList)}) {}
export class SaaSProductTitleFilter extends S.Class<SaaSProductTitleFilter>("SaaSProductTitleFilter")({ValueList: S.optional(SaaSProductTitleFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class SaaSProductVisibilityFilter extends S.Class<SaaSProductVisibilityFilter>("SaaSProductVisibilityFilter")({ValueList: S.optional(SaaSProductVisibilityFilterValueList)}) {}
export class AmiProductEntityIdFilter extends S.Class<AmiProductEntityIdFilter>("AmiProductEntityIdFilter")({ValueList: S.optional(AmiProductEntityIdFilterValueList)}) {}
export class AmiProductTitleFilter extends S.Class<AmiProductTitleFilter>("AmiProductTitleFilter")({ValueList: S.optional(AmiProductTitleFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class AmiProductVisibilityFilter extends S.Class<AmiProductVisibilityFilter>("AmiProductVisibilityFilter")({ValueList: S.optional(AmiProductVisibilityFilterValueList)}) {}
export class OfferEntityIdFilter extends S.Class<OfferEntityIdFilter>("OfferEntityIdFilter")({ValueList: S.optional(OfferEntityIdFilterValueList)}) {}
export class OfferNameFilter extends S.Class<OfferNameFilter>("OfferNameFilter")({ValueList: S.optional(OfferNameFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class OfferProductIdFilter extends S.Class<OfferProductIdFilter>("OfferProductIdFilter")({ValueList: S.optional(OfferProductIdFilterValueList)}) {}
export class OfferResaleAuthorizationIdFilter extends S.Class<OfferResaleAuthorizationIdFilter>("OfferResaleAuthorizationIdFilter")({ValueList: S.optional(OfferResaleAuthorizationIdFilterValueList)}) {}
export class OfferBuyerAccountsFilter extends S.Class<OfferBuyerAccountsFilter>("OfferBuyerAccountsFilter")({WildCardValue: S.optional(S.String)}) {}
export class OfferStateFilter extends S.Class<OfferStateFilter>("OfferStateFilter")({ValueList: S.optional(OfferStateFilterValueList)}) {}
export class OfferTargetingFilter extends S.Class<OfferTargetingFilter>("OfferTargetingFilter")({ValueList: S.optional(OfferTargetingFilterValueList)}) {}
export class OfferSetIdFilter extends S.Class<OfferSetIdFilter>("OfferSetIdFilter")({ValueList: S.optional(OfferSetIdFilterValueList)}) {}
export class ContainerProductEntityIdFilter extends S.Class<ContainerProductEntityIdFilter>("ContainerProductEntityIdFilter")({ValueList: S.optional(ContainerProductEntityIdFilterValueList)}) {}
export class ContainerProductTitleFilter extends S.Class<ContainerProductTitleFilter>("ContainerProductTitleFilter")({ValueList: S.optional(ContainerProductTitleFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ContainerProductVisibilityFilter extends S.Class<ContainerProductVisibilityFilter>("ContainerProductVisibilityFilter")({ValueList: S.optional(ContainerProductVisibilityFilterValueList)}) {}
export class ResaleAuthorizationEntityIdFilter extends S.Class<ResaleAuthorizationEntityIdFilter>("ResaleAuthorizationEntityIdFilter")({ValueList: S.optional(ResaleAuthorizationEntityIdFilterValueList)}) {}
export class ResaleAuthorizationNameFilter extends S.Class<ResaleAuthorizationNameFilter>("ResaleAuthorizationNameFilter")({ValueList: S.optional(ResaleAuthorizationNameFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationProductIdFilter extends S.Class<ResaleAuthorizationProductIdFilter>("ResaleAuthorizationProductIdFilter")({ValueList: S.optional(ResaleAuthorizationProductIdFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationManufacturerAccountIdFilter extends S.Class<ResaleAuthorizationManufacturerAccountIdFilter>("ResaleAuthorizationManufacturerAccountIdFilter")({ValueList: S.optional(ResaleAuthorizationManufacturerAccountIdFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationProductNameFilter extends S.Class<ResaleAuthorizationProductNameFilter>("ResaleAuthorizationProductNameFilter")({ValueList: S.optional(ResaleAuthorizationProductNameFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationManufacturerLegalNameFilter extends S.Class<ResaleAuthorizationManufacturerLegalNameFilter>("ResaleAuthorizationManufacturerLegalNameFilter")({ValueList: S.optional(ResaleAuthorizationManufacturerLegalNameFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationResellerAccountIDFilter extends S.Class<ResaleAuthorizationResellerAccountIDFilter>("ResaleAuthorizationResellerAccountIDFilter")({ValueList: S.optional(ResaleAuthorizationResellerAccountIDFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationResellerLegalNameFilter extends S.Class<ResaleAuthorizationResellerLegalNameFilter>("ResaleAuthorizationResellerLegalNameFilter")({ValueList: S.optional(ResaleAuthorizationResellerLegalNameFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class ResaleAuthorizationStatusFilter extends S.Class<ResaleAuthorizationStatusFilter>("ResaleAuthorizationStatusFilter")({ValueList: S.optional(ResaleAuthorizationStatusFilterValueList)}) {}
export class ResaleAuthorizationOfferExtendedStatusFilter extends S.Class<ResaleAuthorizationOfferExtendedStatusFilter>("ResaleAuthorizationOfferExtendedStatusFilter")({ValueList: S.optional(ResaleAuthorizationOfferExtendedStatusFilterValueList)}) {}
export class MachineLearningProductEntityIdFilter extends S.Class<MachineLearningProductEntityIdFilter>("MachineLearningProductEntityIdFilter")({ValueList: S.optional(MachineLearningProductEntityIdFilterValueList)}) {}
export class MachineLearningProductTitleFilter extends S.Class<MachineLearningProductTitleFilter>("MachineLearningProductTitleFilter")({ValueList: S.optional(MachineLearningProductTitleFilterValueList), WildCardValue: S.optional(S.String)}) {}
export class MachineLearningProductVisibilityFilter extends S.Class<MachineLearningProductVisibilityFilter>("MachineLearningProductVisibilityFilter")({ValueList: S.optional(MachineLearningProductVisibilityFilterValueList)}) {}
export class OfferSetEntityIdFilter extends S.Class<OfferSetEntityIdFilter>("OfferSetEntityIdFilter")({ValueList: S.optional(OfferSetEntityIdFilterValueList)}) {}
export class OfferSetNameFilter extends S.Class<OfferSetNameFilter>("OfferSetNameFilter")({ValueList: S.optional(OfferSetNameFilterValueList)}) {}
export class OfferSetStateFilter extends S.Class<OfferSetStateFilter>("OfferSetStateFilter")({ValueList: S.optional(OfferSetStateFilterValueList)}) {}
export class OfferSetAssociatedOfferIdsFilter extends S.Class<OfferSetAssociatedOfferIdsFilter>("OfferSetAssociatedOfferIdsFilter")({ValueList: S.optional(OfferSetAssociatedOfferIdsFilterValueList)}) {}
export class OfferSetSolutionIdFilter extends S.Class<OfferSetSolutionIdFilter>("OfferSetSolutionIdFilter")({ValueList: S.optional(OfferSetSolutionIdFilterValueList)}) {}
export class StartChangeSetRequest extends S.Class<StartChangeSetRequest>("StartChangeSetRequest")({Catalog: S.String, ChangeSet: RequestedChangeList, ChangeSetName: S.optional(S.String), ClientRequestToken: S.optional(S.String), ChangeSetTags: S.optional(TagList), Intent: S.optional(S.String)}) {}
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const ErrorDetailList = S.Array(ErrorDetail);
export const ResourceIdList = S.Array(S.String);
export class DataProductLastModifiedDateFilterDateRange extends S.Class<DataProductLastModifiedDateFilterDateRange>("DataProductLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class SaaSProductLastModifiedDateFilterDateRange extends S.Class<SaaSProductLastModifiedDateFilterDateRange>("SaaSProductLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class AmiProductLastModifiedDateFilterDateRange extends S.Class<AmiProductLastModifiedDateFilterDateRange>("AmiProductLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class OfferReleaseDateFilterDateRange extends S.Class<OfferReleaseDateFilterDateRange>("OfferReleaseDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class OfferAvailabilityEndDateFilterDateRange extends S.Class<OfferAvailabilityEndDateFilterDateRange>("OfferAvailabilityEndDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class OfferLastModifiedDateFilterDateRange extends S.Class<OfferLastModifiedDateFilterDateRange>("OfferLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class ContainerProductLastModifiedDateFilterDateRange extends S.Class<ContainerProductLastModifiedDateFilterDateRange>("ContainerProductLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class ResaleAuthorizationCreatedDateFilterDateRange extends S.Class<ResaleAuthorizationCreatedDateFilterDateRange>("ResaleAuthorizationCreatedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class ResaleAuthorizationAvailabilityEndDateFilterDateRange extends S.Class<ResaleAuthorizationAvailabilityEndDateFilterDateRange>("ResaleAuthorizationAvailabilityEndDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class ResaleAuthorizationLastModifiedDateFilterDateRange extends S.Class<ResaleAuthorizationLastModifiedDateFilterDateRange>("ResaleAuthorizationLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class MachineLearningProductLastModifiedDateFilterDateRange extends S.Class<MachineLearningProductLastModifiedDateFilterDateRange>("MachineLearningProductLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class OfferSetReleaseDateFilterDateRange extends S.Class<OfferSetReleaseDateFilterDateRange>("OfferSetReleaseDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class OfferSetLastModifiedDateFilterDateRange extends S.Class<OfferSetLastModifiedDateFilterDateRange>("OfferSetLastModifiedDateFilterDateRange")({AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String)}) {}
export class ChangeSummary extends S.Class<ChangeSummary>("ChangeSummary")({ChangeType: S.optional(S.String), Entity: S.optional(Entity), Details: S.optional(S.String), DetailsDocument: S.optional(S.Any), ErrorDetailList: S.optional(ErrorDetailList), ChangeName: S.optional(S.String)}) {}
export const ChangeSetDescription = S.Array(ChangeSummary);
export class ChangeSetSummaryListItem extends S.Class<ChangeSetSummaryListItem>("ChangeSetSummaryListItem")({ChangeSetId: S.optional(S.String), ChangeSetArn: S.optional(S.String), ChangeSetName: S.optional(S.String), StartTime: S.optional(S.String), EndTime: S.optional(S.String), Status: S.optional(S.String), EntityIdList: S.optional(ResourceIdList), FailureCode: S.optional(S.String)}) {}
export const ChangeSetSummaryList = S.Array(ChangeSetSummaryListItem);
export class DataProductLastModifiedDateFilter extends S.Class<DataProductLastModifiedDateFilter>("DataProductLastModifiedDateFilter")({DateRange: S.optional(DataProductLastModifiedDateFilterDateRange)}) {}
export class SaaSProductLastModifiedDateFilter extends S.Class<SaaSProductLastModifiedDateFilter>("SaaSProductLastModifiedDateFilter")({DateRange: S.optional(SaaSProductLastModifiedDateFilterDateRange)}) {}
export class AmiProductLastModifiedDateFilter extends S.Class<AmiProductLastModifiedDateFilter>("AmiProductLastModifiedDateFilter")({DateRange: S.optional(AmiProductLastModifiedDateFilterDateRange)}) {}
export class OfferReleaseDateFilter extends S.Class<OfferReleaseDateFilter>("OfferReleaseDateFilter")({DateRange: S.optional(OfferReleaseDateFilterDateRange)}) {}
export class OfferAvailabilityEndDateFilter extends S.Class<OfferAvailabilityEndDateFilter>("OfferAvailabilityEndDateFilter")({DateRange: S.optional(OfferAvailabilityEndDateFilterDateRange)}) {}
export class OfferLastModifiedDateFilter extends S.Class<OfferLastModifiedDateFilter>("OfferLastModifiedDateFilter")({DateRange: S.optional(OfferLastModifiedDateFilterDateRange)}) {}
export class ContainerProductLastModifiedDateFilter extends S.Class<ContainerProductLastModifiedDateFilter>("ContainerProductLastModifiedDateFilter")({DateRange: S.optional(ContainerProductLastModifiedDateFilterDateRange)}) {}
export class ResaleAuthorizationCreatedDateFilter extends S.Class<ResaleAuthorizationCreatedDateFilter>("ResaleAuthorizationCreatedDateFilter")({DateRange: S.optional(ResaleAuthorizationCreatedDateFilterDateRange), ValueList: S.optional(ResaleAuthorizationCreatedDateFilterValueList)}) {}
export class ResaleAuthorizationAvailabilityEndDateFilter extends S.Class<ResaleAuthorizationAvailabilityEndDateFilter>("ResaleAuthorizationAvailabilityEndDateFilter")({DateRange: S.optional(ResaleAuthorizationAvailabilityEndDateFilterDateRange), ValueList: S.optional(ResaleAuthorizationAvailabilityEndDateFilterValueList)}) {}
export class ResaleAuthorizationLastModifiedDateFilter extends S.Class<ResaleAuthorizationLastModifiedDateFilter>("ResaleAuthorizationLastModifiedDateFilter")({DateRange: S.optional(ResaleAuthorizationLastModifiedDateFilterDateRange)}) {}
export class MachineLearningProductLastModifiedDateFilter extends S.Class<MachineLearningProductLastModifiedDateFilter>("MachineLearningProductLastModifiedDateFilter")({DateRange: S.optional(MachineLearningProductLastModifiedDateFilterDateRange)}) {}
export class OfferSetReleaseDateFilter extends S.Class<OfferSetReleaseDateFilter>("OfferSetReleaseDateFilter")({DateRange: S.optional(OfferSetReleaseDateFilterDateRange)}) {}
export class OfferSetLastModifiedDateFilter extends S.Class<OfferSetLastModifiedDateFilter>("OfferSetLastModifiedDateFilter")({DateRange: S.optional(OfferSetLastModifiedDateFilterDateRange)}) {}
export class DescribeChangeSetResponse extends S.Class<DescribeChangeSetResponse>("DescribeChangeSetResponse")({ChangeSetId: S.optional(S.String), ChangeSetArn: S.optional(S.String), ChangeSetName: S.optional(S.String), Intent: S.optional(S.String), StartTime: S.optional(S.String), EndTime: S.optional(S.String), Status: S.optional(S.String), FailureCode: S.optional(S.String), FailureDescription: S.optional(S.String), ChangeSet: S.optional(ChangeSetDescription)}) {}
export class ListChangeSetsResponse extends S.Class<ListChangeSetsResponse>("ListChangeSetsResponse")({ChangeSetSummaryList: S.optional(ChangeSetSummaryList), NextToken: S.optional(S.String)}) {}
export class StartChangeSetResponse extends S.Class<StartChangeSetResponse>("StartChangeSetResponse")({ChangeSetId: S.optional(S.String), ChangeSetArn: S.optional(S.String)}) {}
export class EntityDetail extends S.Class<EntityDetail>("EntityDetail")({EntityType: S.optional(S.String), EntityArn: S.optional(S.String), EntityIdentifier: S.optional(S.String), LastModifiedDate: S.optional(S.String), DetailsDocument: S.optional(S.Any)}) {}
export class BatchDescribeErrorDetail extends S.Class<BatchDescribeErrorDetail>("BatchDescribeErrorDetail")({ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class DataProductFilters extends S.Class<DataProductFilters>("DataProductFilters")({EntityId: S.optional(DataProductEntityIdFilter), ProductTitle: S.optional(DataProductTitleFilter), Visibility: S.optional(DataProductVisibilityFilter), LastModifiedDate: S.optional(DataProductLastModifiedDateFilter)}) {}
export class SaaSProductFilters extends S.Class<SaaSProductFilters>("SaaSProductFilters")({EntityId: S.optional(SaaSProductEntityIdFilter), ProductTitle: S.optional(SaaSProductTitleFilter), Visibility: S.optional(SaaSProductVisibilityFilter), LastModifiedDate: S.optional(SaaSProductLastModifiedDateFilter)}) {}
export class AmiProductFilters extends S.Class<AmiProductFilters>("AmiProductFilters")({EntityId: S.optional(AmiProductEntityIdFilter), LastModifiedDate: S.optional(AmiProductLastModifiedDateFilter), ProductTitle: S.optional(AmiProductTitleFilter), Visibility: S.optional(AmiProductVisibilityFilter)}) {}
export class OfferFilters extends S.Class<OfferFilters>("OfferFilters")({EntityId: S.optional(OfferEntityIdFilter), Name: S.optional(OfferNameFilter), ProductId: S.optional(OfferProductIdFilter), ResaleAuthorizationId: S.optional(OfferResaleAuthorizationIdFilter), ReleaseDate: S.optional(OfferReleaseDateFilter), AvailabilityEndDate: S.optional(OfferAvailabilityEndDateFilter), BuyerAccounts: S.optional(OfferBuyerAccountsFilter), State: S.optional(OfferStateFilter), Targeting: S.optional(OfferTargetingFilter), LastModifiedDate: S.optional(OfferLastModifiedDateFilter), OfferSetId: S.optional(OfferSetIdFilter)}) {}
export class ContainerProductFilters extends S.Class<ContainerProductFilters>("ContainerProductFilters")({EntityId: S.optional(ContainerProductEntityIdFilter), LastModifiedDate: S.optional(ContainerProductLastModifiedDateFilter), ProductTitle: S.optional(ContainerProductTitleFilter), Visibility: S.optional(ContainerProductVisibilityFilter)}) {}
export class ResaleAuthorizationFilters extends S.Class<ResaleAuthorizationFilters>("ResaleAuthorizationFilters")({EntityId: S.optional(ResaleAuthorizationEntityIdFilter), Name: S.optional(ResaleAuthorizationNameFilter), ProductId: S.optional(ResaleAuthorizationProductIdFilter), CreatedDate: S.optional(ResaleAuthorizationCreatedDateFilter), AvailabilityEndDate: S.optional(ResaleAuthorizationAvailabilityEndDateFilter), ManufacturerAccountId: S.optional(ResaleAuthorizationManufacturerAccountIdFilter), ProductName: S.optional(ResaleAuthorizationProductNameFilter), ManufacturerLegalName: S.optional(ResaleAuthorizationManufacturerLegalNameFilter), ResellerAccountID: S.optional(ResaleAuthorizationResellerAccountIDFilter), ResellerLegalName: S.optional(ResaleAuthorizationResellerLegalNameFilter), Status: S.optional(ResaleAuthorizationStatusFilter), OfferExtendedStatus: S.optional(ResaleAuthorizationOfferExtendedStatusFilter), LastModifiedDate: S.optional(ResaleAuthorizationLastModifiedDateFilter)}) {}
export class MachineLearningProductFilters extends S.Class<MachineLearningProductFilters>("MachineLearningProductFilters")({EntityId: S.optional(MachineLearningProductEntityIdFilter), LastModifiedDate: S.optional(MachineLearningProductLastModifiedDateFilter), ProductTitle: S.optional(MachineLearningProductTitleFilter), Visibility: S.optional(MachineLearningProductVisibilityFilter)}) {}
export class OfferSetFilters extends S.Class<OfferSetFilters>("OfferSetFilters")({EntityId: S.optional(OfferSetEntityIdFilter), Name: S.optional(OfferSetNameFilter), State: S.optional(OfferSetStateFilter), ReleaseDate: S.optional(OfferSetReleaseDateFilter), AssociatedOfferIds: S.optional(OfferSetAssociatedOfferIdsFilter), SolutionId: S.optional(OfferSetSolutionIdFilter), LastModifiedDate: S.optional(OfferSetLastModifiedDateFilter)}) {}
export const EntityDetails = S.Record({key: S.String, value: EntityDetail});
export const Errors = S.Record({key: S.String, value: BatchDescribeErrorDetail});
export const EntityTypeFilters = S.Union(DataProductFilters, SaaSProductFilters, AmiProductFilters, OfferFilters, ContainerProductFilters, ResaleAuthorizationFilters, MachineLearningProductFilters, OfferSetFilters);
export class BatchDescribeEntitiesResponse extends S.Class<BatchDescribeEntitiesResponse>("BatchDescribeEntitiesResponse")({EntityDetails: S.optional(EntityDetails), Errors: S.optional(Errors)}) {}
export class ListEntitiesRequest extends S.Class<ListEntitiesRequest>("ListEntitiesRequest")({Catalog: S.String, EntityType: S.String, FilterList: S.optional(FilterList), Sort: S.optional(Sort), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), OwnershipType: S.optional(S.String), EntityTypeFilters: S.optional(EntityTypeFilters), EntityTypeSort: S.optional(EntityTypeSort)}) {}
export const OfferBuyerAccountsList = S.Array(S.String);
export const OfferTargetingList = S.Array(S.String);
export const OfferSetAssociatedOfferIdsList = S.Array(S.String);
export class AmiProductSummary extends S.Class<AmiProductSummary>("AmiProductSummary")({ProductTitle: S.optional(S.String), Visibility: S.optional(S.String)}) {}
export class ContainerProductSummary extends S.Class<ContainerProductSummary>("ContainerProductSummary")({ProductTitle: S.optional(S.String), Visibility: S.optional(S.String)}) {}
export class DataProductSummary extends S.Class<DataProductSummary>("DataProductSummary")({ProductTitle: S.optional(S.String), Visibility: S.optional(S.String)}) {}
export class SaaSProductSummary extends S.Class<SaaSProductSummary>("SaaSProductSummary")({ProductTitle: S.optional(S.String), Visibility: S.optional(S.String)}) {}
export class OfferSummary extends S.Class<OfferSummary>("OfferSummary")({Name: S.optional(S.String), ProductId: S.optional(S.String), ResaleAuthorizationId: S.optional(S.String), ReleaseDate: S.optional(S.String), AvailabilityEndDate: S.optional(S.String), BuyerAccounts: S.optional(OfferBuyerAccountsList), State: S.optional(S.String), Targeting: S.optional(OfferTargetingList), OfferSetId: S.optional(S.String)}) {}
export class ResaleAuthorizationSummary extends S.Class<ResaleAuthorizationSummary>("ResaleAuthorizationSummary")({Name: S.optional(S.String), ProductId: S.optional(S.String), ProductName: S.optional(S.String), ManufacturerAccountId: S.optional(S.String), ManufacturerLegalName: S.optional(S.String), ResellerAccountID: S.optional(S.String), ResellerLegalName: S.optional(S.String), Status: S.optional(S.String), OfferExtendedStatus: S.optional(S.String), CreatedDate: S.optional(S.String), AvailabilityEndDate: S.optional(S.String)}) {}
export class MachineLearningProductSummary extends S.Class<MachineLearningProductSummary>("MachineLearningProductSummary")({ProductTitle: S.optional(S.String), Visibility: S.optional(S.String)}) {}
export class OfferSetSummary extends S.Class<OfferSetSummary>("OfferSetSummary")({Name: S.optional(S.String), State: S.optional(S.String), ReleaseDate: S.optional(S.String), AssociatedOfferIds: S.optional(OfferSetAssociatedOfferIdsList), SolutionId: S.optional(S.String)}) {}
export class EntitySummary extends S.Class<EntitySummary>("EntitySummary")({Name: S.optional(S.String), EntityType: S.optional(S.String), EntityId: S.optional(S.String), EntityArn: S.optional(S.String), LastModifiedDate: S.optional(S.String), Visibility: S.optional(S.String), AmiProductSummary: S.optional(AmiProductSummary), ContainerProductSummary: S.optional(ContainerProductSummary), DataProductSummary: S.optional(DataProductSummary), SaaSProductSummary: S.optional(SaaSProductSummary), OfferSummary: S.optional(OfferSummary), ResaleAuthorizationSummary: S.optional(ResaleAuthorizationSummary), MachineLearningProductSummary: S.optional(MachineLearningProductSummary), OfferSetSummary: S.optional(OfferSetSummary)}) {}
export const EntitySummaryList = S.Array(EntitySummary);
export class ListEntitiesResponse extends S.Class<ListEntitiesResponse>("ListEntitiesResponse")({EntitySummaryList: S.optional(EntitySummaryList), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ResourceInUseException extends S.TaggedError<ResourceInUseException>()("ResourceInUseException", {Message: S.optional(S.String)}) {};
export class ResourceNotSupportedException extends S.TaggedError<ResourceNotSupportedException>()("ResourceNotSupportedException", {Message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Gets a resource-based policy of an entity that is identified by its resource
 * ARN.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/GetResourcePolicy", method: "GET", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags that have been added to a resource (either an entity or change set).
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/ListTagsForResource", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches a resource-based policy to an entity. Examples of an entity include:
 * `AmiProduct` and `ContainerProduct`.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/PutResourcePolicy", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags a resource (either an entity or change set).
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/TagResource", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag or list of tags from a resource (either an entity or change set).
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/UntagResource", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to cancel an open change request. Must be sent before the status of the request
 * changes to `APPLYING`, the final stage of completing your change request. You
 * can describe a change during the 60-day request history retention period for API
 * calls.
 */export const cancelChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/CancelChangeSet", method: "PATCH", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.CancelChangeSet" }, CancelChangeSetRequest, CancelChangeSetResponse, [AccessDeniedException, InternalServiceException, ResourceInUseException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource-based policy on an entity that is identified by its resource
 * ARN.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/DeleteResourcePolicy", method: "DELETE", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, DeleteResourcePolicyResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the metadata and content of the entity.
 */export const describeEntity = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/DescribeEntity", method: "GET", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.DescribeEntity" }, DescribeEntityRequest, DescribeEntityResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ResourceNotSupportedException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides information about a given change set.
 */export const describeChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/DescribeChangeSet", method: "GET", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.DescribeChangeSet" }, DescribeChangeSetRequest, DescribeChangeSetResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of change sets owned by the account being used to make the call. You
 * can filter this list by providing any combination of `entityId`,
 * `ChangeSetName`, and status. If you provide more than one filter, the API
 * operation applies a logical AND between the filters.
 * 
 * You can describe a change during the 60-day request history retention period for API
 * calls.
 */export const listChangeSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/ListChangeSets", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.ListChangeSets" }, ListChangeSetsRequest, ListChangeSetsResponse, [AccessDeniedException, InternalServiceException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata and content for multiple entities. This is the Batch version of the `DescribeEntity` API and uses the same IAM permission action as `DescribeEntity` API.
 */export const batchDescribeEntities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/BatchDescribeEntities", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.BatchDescribeEntities" }, BatchDescribeEntitiesRequest, BatchDescribeEntitiesResponse, [AccessDeniedException, InternalServiceException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to request changes for your entities. Within a single
 * `ChangeSet`, you can't start the same change type against the same entity
 * multiple times. Additionally, when a `ChangeSet` is running, all the entities
 * targeted by the different changes are locked until the change set has completed (either
 * succeeded, cancelled, or failed). If you try to start a change set containing a change
 * against an entity that is already locked, you will receive a
 * `ResourceInUseException` error.
 * 
 * For example, you can't start the `ChangeSet` described in the example later in this topic because it contains two changes to run the same
 * change type (`AddRevisions`) against the same entity
 * (`entity-id@1`).
 * 
 * For more information about working with change sets, see Working with change sets. For information about change types for
 * single-AMI products, see Working with single-AMI products. Also, for more information about change
 * types available for container-based products, see Working with container products.
 * 
 * To download "DetailsDocument" shapes, see Python
 * and Java shapes on GitHub.
 */export const startChangeSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/StartChangeSet", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.StartChangeSet" }, StartChangeSetRequest, StartChangeSetResponse, [AccessDeniedException, InternalServiceException, ResourceInUseException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides the list of entities of a given type.
 */export const listEntities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-17", uri: "/ListEntities", sdkId: "Marketplace Catalog", sigV4ServiceName: "aws-marketplace", name: "AWSMPSeymour.ListEntities" }, ListEntitiesRequest, ListEntitiesResponse, [AccessDeniedException, InternalServiceException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
