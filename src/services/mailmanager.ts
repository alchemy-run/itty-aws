import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeregisterMemberFromAddressListRequest extends S.Class<DeregisterMemberFromAddressListRequest>("DeregisterMemberFromAddressListRequest")({AddressListId: S.String, Address: S.String}) {}
export class DeregisterMemberFromAddressListResponse extends S.Class<DeregisterMemberFromAddressListResponse>("DeregisterMemberFromAddressListResponse")({}) {}
export class GetAddressListImportJobRequest extends S.Class<GetAddressListImportJobRequest>("GetAddressListImportJobRequest")({JobId: S.String}) {}
export class GetArchiveExportRequest extends S.Class<GetArchiveExportRequest>("GetArchiveExportRequest")({ExportId: S.String}) {}
export class GetArchiveMessageRequest extends S.Class<GetArchiveMessageRequest>("GetArchiveMessageRequest")({ArchivedMessageId: S.String}) {}
export class GetArchiveMessageContentRequest extends S.Class<GetArchiveMessageContentRequest>("GetArchiveMessageContentRequest")({ArchivedMessageId: S.String}) {}
export class GetArchiveSearchRequest extends S.Class<GetArchiveSearchRequest>("GetArchiveSearchRequest")({SearchId: S.String}) {}
export class GetArchiveSearchResultsRequest extends S.Class<GetArchiveSearchResultsRequest>("GetArchiveSearchResultsRequest")({SearchId: S.String}) {}
export class GetMemberOfAddressListRequest extends S.Class<GetMemberOfAddressListRequest>("GetMemberOfAddressListRequest")({AddressListId: S.String, Address: S.String}) {}
export class ListAddressListImportJobsRequest extends S.Class<ListAddressListImportJobsRequest>("ListAddressListImportJobsRequest")({AddressListId: S.String, NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListArchiveExportsRequest extends S.Class<ListArchiveExportsRequest>("ListArchiveExportsRequest")({ArchiveId: S.String, NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListArchiveSearchesRequest extends S.Class<ListArchiveSearchesRequest>("ListArchiveSearchesRequest")({ArchiveId: S.String, NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class RegisterMemberToAddressListRequest extends S.Class<RegisterMemberToAddressListRequest>("RegisterMemberToAddressListRequest")({AddressListId: S.String, Address: S.String}) {}
export class RegisterMemberToAddressListResponse extends S.Class<RegisterMemberToAddressListResponse>("RegisterMemberToAddressListResponse")({}) {}
export class StartAddressListImportJobRequest extends S.Class<StartAddressListImportJobRequest>("StartAddressListImportJobRequest")({JobId: S.String}) {}
export class StartAddressListImportJobResponse extends S.Class<StartAddressListImportJobResponse>("StartAddressListImportJobResponse")({}) {}
export const ArchiveStringToEvaluate = S.Union(S.String);
export const StringValueList = S.Array(S.String);
export class ArchiveStringExpression extends S.Class<ArchiveStringExpression>("ArchiveStringExpression")({Evaluate: ArchiveStringToEvaluate, Operator: S.String, Values: StringValueList}) {}
export const ArchiveBooleanToEvaluate = S.Union(S.String);
export class ArchiveBooleanExpression extends S.Class<ArchiveBooleanExpression>("ArchiveBooleanExpression")({Evaluate: ArchiveBooleanToEvaluate, Operator: S.String}) {}
export const ArchiveFilterCondition = S.Union(ArchiveStringExpression, ArchiveBooleanExpression);
export const ArchiveFilterConditions = S.Array(ArchiveFilterCondition);
export class ArchiveFilters extends S.Class<ArchiveFilters>("ArchiveFilters")({Include: S.optional(ArchiveFilterConditions), Unless: S.optional(ArchiveFilterConditions)}) {}
export class StartArchiveSearchRequest extends S.Class<StartArchiveSearchRequest>("StartArchiveSearchRequest")({ArchiveId: S.String, Filters: S.optional(ArchiveFilters), FromTimestamp: S.Date, ToTimestamp: S.Date, MaxResults: S.Number}) {}
export class StopAddressListImportJobRequest extends S.Class<StopAddressListImportJobRequest>("StopAddressListImportJobRequest")({JobId: S.String}) {}
export class StopAddressListImportJobResponse extends S.Class<StopAddressListImportJobResponse>("StopAddressListImportJobResponse")({}) {}
export class StopArchiveExportRequest extends S.Class<StopArchiveExportRequest>("StopArchiveExportRequest")({ExportId: S.String}) {}
export class StopArchiveExportResponse extends S.Class<StopArchiveExportResponse>("StopArchiveExportResponse")({}) {}
export class StopArchiveSearchRequest extends S.Class<StopArchiveSearchRequest>("StopArchiveSearchRequest")({SearchId: S.String}) {}
export class StopArchiveSearchResponse extends S.Class<StopArchiveSearchResponse>("StopArchiveSearchResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ImportDataFormat extends S.Class<ImportDataFormat>("ImportDataFormat")({ImportDataType: S.String}) {}
export class AddressFilter extends S.Class<AddressFilter>("AddressFilter")({AddressPrefix: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateAddressListImportJobRequest extends S.Class<CreateAddressListImportJobRequest>("CreateAddressListImportJobRequest")({ClientToken: S.optional(S.String), AddressListId: S.String, Name: S.String, ImportDataFormat: ImportDataFormat}) {}
export class GetAddressListImportJobResponse extends S.Class<GetAddressListImportJobResponse>("GetAddressListImportJobResponse")({JobId: S.String, Name: S.String, Status: S.String, PreSignedUrl: S.String, ImportedItemsCount: S.optional(S.Number), FailedItemsCount: S.optional(S.Number), ImportDataFormat: ImportDataFormat, AddressListId: S.String, CreatedTimestamp: S.Date, StartTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date), Error: S.optional(S.String)}) {}
export class GetMemberOfAddressListResponse extends S.Class<GetMemberOfAddressListResponse>("GetMemberOfAddressListResponse")({Address: S.String, CreatedTimestamp: S.Date}) {}
export class ListMembersOfAddressListRequest extends S.Class<ListMembersOfAddressListRequest>("ListMembersOfAddressListRequest")({AddressListId: S.String, Filter: S.optional(AddressFilter), NextToken: S.optional(S.String), PageSize: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: TagList}) {}
export class StartArchiveSearchResponse extends S.Class<StartArchiveSearchResponse>("StartArchiveSearchResponse")({SearchId: S.optional(S.String)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const StringList = S.Array(S.String);
export const EmailReceivedHeadersList = S.Array(S.String);
export class S3ExportDestinationConfiguration extends S.Class<S3ExportDestinationConfiguration>("S3ExportDestinationConfiguration")({S3Location: S.optional(S.String)}) {}
export class ExportStatus extends S.Class<ExportStatus>("ExportStatus")({SubmissionTimestamp: S.optional(S.Date), CompletionTimestamp: S.optional(S.Date), State: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class Metadata extends S.Class<Metadata>("Metadata")({Timestamp: S.optional(S.Date), IngressPointId: S.optional(S.String), TrafficPolicyId: S.optional(S.String), RuleSetId: S.optional(S.String), SenderHostname: S.optional(S.String), SenderIpAddress: S.optional(S.String), TlsCipherSuite: S.optional(S.String), TlsProtocol: S.optional(S.String), SendingMethod: S.optional(S.String), SourceIdentity: S.optional(S.String), SendingPool: S.optional(S.String), ConfigurationSet: S.optional(S.String), SourceArn: S.optional(S.String)}) {}
export class Envelope extends S.Class<Envelope>("Envelope")({Helo: S.optional(S.String), From: S.optional(S.String), To: S.optional(StringList)}) {}
export class MessageBody extends S.Class<MessageBody>("MessageBody")({Text: S.optional(S.String), Html: S.optional(S.String), MessageMalformed: S.optional(S.Boolean)}) {}
export class SearchStatus extends S.Class<SearchStatus>("SearchStatus")({SubmissionTimestamp: S.optional(S.Date), CompletionTimestamp: S.optional(S.Date), State: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class Row extends S.Class<Row>("Row")({ArchivedMessageId: S.optional(S.String), ReceivedTimestamp: S.optional(S.Date), Date: S.optional(S.String), To: S.optional(S.String), From: S.optional(S.String), Cc: S.optional(S.String), Subject: S.optional(S.String), MessageId: S.optional(S.String), HasAttachments: S.optional(S.Boolean), ReceivedHeaders: S.optional(EmailReceivedHeadersList), InReplyTo: S.optional(S.String), XMailer: S.optional(S.String), XOriginalMailer: S.optional(S.String), XPriority: S.optional(S.String), IngressPointId: S.optional(S.String), SenderHostname: S.optional(S.String), SenderIpAddress: S.optional(S.String), Envelope: S.optional(Envelope), SourceArn: S.optional(S.String)}) {}
export const RowsList = S.Array(Row);
export class ImportJob extends S.Class<ImportJob>("ImportJob")({JobId: S.String, Name: S.String, Status: S.String, PreSignedUrl: S.String, ImportedItemsCount: S.optional(S.Number), FailedItemsCount: S.optional(S.Number), ImportDataFormat: ImportDataFormat, AddressListId: S.String, CreatedTimestamp: S.Date, StartTimestamp: S.optional(S.Date), CompletedTimestamp: S.optional(S.Date), Error: S.optional(S.String)}) {}
export const ImportJobs = S.Array(ImportJob);
export class ExportSummary extends S.Class<ExportSummary>("ExportSummary")({ExportId: S.optional(S.String), Status: S.optional(ExportStatus)}) {}
export const ExportSummaryList = S.Array(ExportSummary);
export class SearchSummary extends S.Class<SearchSummary>("SearchSummary")({SearchId: S.optional(S.String), Status: S.optional(SearchStatus)}) {}
export const SearchSummaryList = S.Array(SearchSummary);
export const ExportDestinationConfiguration = S.Union(S3ExportDestinationConfiguration);
export class CreateAddressListImportJobResponse extends S.Class<CreateAddressListImportJobResponse>("CreateAddressListImportJobResponse")({JobId: S.String, PreSignedUrl: S.String}) {}
export class GetArchiveExportResponse extends S.Class<GetArchiveExportResponse>("GetArchiveExportResponse")({ArchiveId: S.optional(S.String), Filters: S.optional(ArchiveFilters), FromTimestamp: S.optional(S.Date), ToTimestamp: S.optional(S.Date), MaxResults: S.optional(S.Number), ExportDestinationConfiguration: S.optional(ExportDestinationConfiguration), Status: S.optional(ExportStatus)}) {}
export class GetArchiveMessageResponse extends S.Class<GetArchiveMessageResponse>("GetArchiveMessageResponse")({MessageDownloadLink: S.optional(S.String), Metadata: S.optional(Metadata), Envelope: S.optional(Envelope)}) {}
export class GetArchiveMessageContentResponse extends S.Class<GetArchiveMessageContentResponse>("GetArchiveMessageContentResponse")({Body: S.optional(MessageBody)}) {}
export class GetArchiveSearchResponse extends S.Class<GetArchiveSearchResponse>("GetArchiveSearchResponse")({ArchiveId: S.optional(S.String), Filters: S.optional(ArchiveFilters), FromTimestamp: S.optional(S.Date), ToTimestamp: S.optional(S.Date), MaxResults: S.optional(S.Number), Status: S.optional(SearchStatus)}) {}
export class GetArchiveSearchResultsResponse extends S.Class<GetArchiveSearchResultsResponse>("GetArchiveSearchResultsResponse")({Rows: S.optional(RowsList)}) {}
export class ListAddressListImportJobsResponse extends S.Class<ListAddressListImportJobsResponse>("ListAddressListImportJobsResponse")({ImportJobs: ImportJobs, NextToken: S.optional(S.String)}) {}
export class ListArchiveExportsResponse extends S.Class<ListArchiveExportsResponse>("ListArchiveExportsResponse")({Exports: S.optional(ExportSummaryList), NextToken: S.optional(S.String)}) {}
export class ListArchiveSearchesResponse extends S.Class<ListArchiveSearchesResponse>("ListArchiveSearchesResponse")({Searches: S.optional(SearchSummaryList), NextToken: S.optional(S.String)}) {}
export class SavedAddress extends S.Class<SavedAddress>("SavedAddress")({Address: S.String, CreatedTimestamp: S.Date}) {}
export const SavedAddresses = S.Array(SavedAddress);
export class ListMembersOfAddressListResponse extends S.Class<ListMembersOfAddressListResponse>("ListMembersOfAddressListResponse")({Addresses: SavedAddresses, NextToken: S.optional(S.String)}) {}
export class StartArchiveExportRequest extends S.Class<StartArchiveExportRequest>("StartArchiveExportRequest")({ArchiveId: S.String, Filters: S.optional(ArchiveFilters), FromTimestamp: S.Date, ToTimestamp: S.Date, MaxResults: S.optional(S.Number), ExportDestinationConfiguration: ExportDestinationConfiguration, IncludeMetadata: S.optional(S.Boolean)}) {}
export class StartArchiveExportResponse extends S.Class<StartArchiveExportResponse>("StartArchiveExportResponse")({ExportId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Stops an in-progress archive search job.
 */export const stopArchiveSearch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StopArchiveSearch" }, StopArchiveSearchRequest, StopArchiveSearchResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove one or more tags (keys and values) from a specified resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a member from an address list.
 */export const deregisterMemberFromAddressList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.DeregisterMemberFromAddressList" }, DeregisterMemberFromAddressListRequest, DeregisterMemberFromAddressListResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Fetch attributes of an import job.
 */export const getAddressListImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetAddressListImportJob" }, GetAddressListImportJobRequest, GetAddressListImportJobResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Fetch attributes of a member in an address list.
 */export const getMemberOfAddressList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetMemberOfAddressList" }, GetMemberOfAddressListRequest, GetMemberOfAddressListResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of tags (keys and values) assigned to the resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts an import job for an address list.
 */export const startAddressListImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StartAddressListImportJob" }, StartAddressListImportJobRequest, StartAddressListImportJobResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a search across emails in the specified archive.
 */export const startArchiveSearch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StartArchiveSearch" }, StartArchiveSearchRequest, StartArchiveSearchResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an ongoing import job for an address list.
 */export const stopAddressListImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StopAddressListImportJob" }, StopAddressListImportJobRequest, StopAddressListImportJobResponse, [AccessDeniedException, ConflictException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an in-progress export of emails from an archive.
 */export const stopArchiveExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StopArchiveExport" }, StopArchiveExportRequest, StopArchiveExportResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more tags (keys and values) to a specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an import job for an address list.
 */export const createAddressListImportJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.CreateAddressListImportJob" }, CreateAddressListImportJobRequest, CreateAddressListImportJobResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details and current status of a specific email archive export job.
 */export const getArchiveExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetArchiveExport" }, GetArchiveExportRequest, GetArchiveExportResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive.
 */export const getArchiveMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetArchiveMessage" }, GetArchiveMessageRequest, GetArchiveMessageResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the textual content of a specific email message stored in the archive. Attachments are not included.
 */export const getArchiveMessageContent = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetArchiveMessageContent" }, GetArchiveMessageContentRequest, GetArchiveMessageContentResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details and current status of a specific email archive search job.
 */export const getArchiveSearch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetArchiveSearch" }, GetArchiveSearchRequest, GetArchiveSearchResponse, [AccessDeniedException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the results of a completed email archive search job.
 */export const getArchiveSearchResults = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.GetArchiveSearchResults" }, GetArchiveSearchResultsRequest, GetArchiveSearchResultsResponse, [AccessDeniedException, ConflictException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists jobs for an address list.
 */export const listAddressListImportJobs = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.ListAddressListImportJobs" }, ListAddressListImportJobsRequest, ListAddressListImportJobsResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of email archive export jobs.
 */export const listArchiveExports = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.ListArchiveExports" }, ListArchiveExportsRequest, ListArchiveExportsResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of email archive search jobs.
 */export const listArchiveSearches = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.ListArchiveSearches" }, ListArchiveSearchesRequest, ListArchiveSearchesResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a member to an address list.
 */export const registerMemberToAddressList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.RegisterMemberToAddressList" }, RegisterMemberToAddressListRequest, RegisterMemberToAddressListResponse, [AccessDeniedException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists members of an address list.
 */export const listMembersOfAddressList = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.ListMembersOfAddressList" }, ListMembersOfAddressListRequest, ListMembersOfAddressListResponse, [AccessDeniedException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates an export of emails from the specified archive.
 */export const startArchiveExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-10-17", uri: "/", method: "POST", sdkId: "MailManager", sigV4ServiceName: "ses", name: "MailManagerSvc.StartArchiveExport" }, StartArchiveExportRequest, StartArchiveExportResponse, [AccessDeniedException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
