import * as S from "effect/Schema"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const StandardNameList = S.Array(S.String);
export const DomainNameList = S.Array(S.String);
export const DynamicFieldNameList = S.Array(S.String);
export class BuildSuggestersRequest extends S.Class<BuildSuggestersRequest>("BuildSuggestersRequest")({DomainName: S.String}) {}
export class CreateDomainRequest extends S.Class<CreateDomainRequest>("CreateDomainRequest")({DomainName: S.String}) {}
export class DeleteAnalysisSchemeRequest extends S.Class<DeleteAnalysisSchemeRequest>("DeleteAnalysisSchemeRequest")({DomainName: S.String, AnalysisSchemeName: S.String}) {}
export class DeleteDomainRequest extends S.Class<DeleteDomainRequest>("DeleteDomainRequest")({DomainName: S.String}) {}
export class DeleteExpressionRequest extends S.Class<DeleteExpressionRequest>("DeleteExpressionRequest")({DomainName: S.String, ExpressionName: S.String}) {}
export class DeleteIndexFieldRequest extends S.Class<DeleteIndexFieldRequest>("DeleteIndexFieldRequest")({DomainName: S.String, IndexFieldName: S.String}) {}
export class DeleteSuggesterRequest extends S.Class<DeleteSuggesterRequest>("DeleteSuggesterRequest")({DomainName: S.String, SuggesterName: S.String}) {}
export class DescribeAnalysisSchemesRequest extends S.Class<DescribeAnalysisSchemesRequest>("DescribeAnalysisSchemesRequest")({DomainName: S.String, AnalysisSchemeNames: S.optional(StandardNameList), Deployed: S.optional(S.Boolean)}) {}
export class DescribeAvailabilityOptionsRequest extends S.Class<DescribeAvailabilityOptionsRequest>("DescribeAvailabilityOptionsRequest")({DomainName: S.String, Deployed: S.optional(S.Boolean)}) {}
export class DescribeDomainEndpointOptionsRequest extends S.Class<DescribeDomainEndpointOptionsRequest>("DescribeDomainEndpointOptionsRequest")({DomainName: S.String, Deployed: S.optional(S.Boolean)}) {}
export class DescribeDomainsRequest extends S.Class<DescribeDomainsRequest>("DescribeDomainsRequest")({DomainNames: S.optional(DomainNameList)}) {}
export class DescribeExpressionsRequest extends S.Class<DescribeExpressionsRequest>("DescribeExpressionsRequest")({DomainName: S.String, ExpressionNames: S.optional(StandardNameList), Deployed: S.optional(S.Boolean)}) {}
export class DescribeIndexFieldsRequest extends S.Class<DescribeIndexFieldsRequest>("DescribeIndexFieldsRequest")({DomainName: S.String, FieldNames: S.optional(DynamicFieldNameList), Deployed: S.optional(S.Boolean)}) {}
export class DescribeScalingParametersRequest extends S.Class<DescribeScalingParametersRequest>("DescribeScalingParametersRequest")({DomainName: S.String}) {}
export class DescribeServiceAccessPoliciesRequest extends S.Class<DescribeServiceAccessPoliciesRequest>("DescribeServiceAccessPoliciesRequest")({DomainName: S.String, Deployed: S.optional(S.Boolean)}) {}
export class DescribeSuggestersRequest extends S.Class<DescribeSuggestersRequest>("DescribeSuggestersRequest")({DomainName: S.String, SuggesterNames: S.optional(StandardNameList), Deployed: S.optional(S.Boolean)}) {}
export class IndexDocumentsRequest extends S.Class<IndexDocumentsRequest>("IndexDocumentsRequest")({DomainName: S.String}) {}
export class UpdateAvailabilityOptionsRequest extends S.Class<UpdateAvailabilityOptionsRequest>("UpdateAvailabilityOptionsRequest")({DomainName: S.String, MultiAZ: S.Boolean}) {}
export class UpdateServiceAccessPoliciesRequest extends S.Class<UpdateServiceAccessPoliciesRequest>("UpdateServiceAccessPoliciesRequest")({DomainName: S.String, AccessPolicies: S.String}) {}
export const FieldNameList = S.Array(S.String);
export class Expression extends S.Class<Expression>("Expression")({ExpressionName: S.String, ExpressionValue: S.String}) {}
export class AnalysisOptions extends S.Class<AnalysisOptions>("AnalysisOptions")({Synonyms: S.optional(S.String), Stopwords: S.optional(S.String), StemmingDictionary: S.optional(S.String), JapaneseTokenizationDictionary: S.optional(S.String), AlgorithmicStemming: S.optional(S.String)}) {}
export class AnalysisScheme extends S.Class<AnalysisScheme>("AnalysisScheme")({AnalysisSchemeName: S.String, AnalysisSchemeLanguage: S.String, AnalysisOptions: S.optional(AnalysisOptions)}) {}
export class OptionStatus extends S.Class<OptionStatus>("OptionStatus")({CreationDate: S.Date, UpdateDate: S.Date, UpdateVersion: S.optional(S.Number), State: S.String, PendingDeletion: S.optional(S.Boolean)}) {}
export class AnalysisSchemeStatus extends S.Class<AnalysisSchemeStatus>("AnalysisSchemeStatus")({Options: AnalysisScheme, Status: OptionStatus}) {}
export const AnalysisSchemeStatusList = S.Array(AnalysisSchemeStatus);
export class ServiceEndpoint extends S.Class<ServiceEndpoint>("ServiceEndpoint")({Endpoint: S.optional(S.String)}) {}
export class Limits extends S.Class<Limits>("Limits")({MaximumReplicationCount: S.Number, MaximumPartitionCount: S.Number}) {}
export class DomainStatus extends S.Class<DomainStatus>("DomainStatus")({DomainId: S.String, DomainName: S.String, ARN: S.optional(S.String), Created: S.optional(S.Boolean), Deleted: S.optional(S.Boolean), DocService: S.optional(ServiceEndpoint), SearchService: S.optional(ServiceEndpoint), RequiresIndexDocuments: S.Boolean, Processing: S.optional(S.Boolean), SearchInstanceType: S.optional(S.String), SearchPartitionCount: S.optional(S.Number), SearchInstanceCount: S.optional(S.Number), Limits: S.optional(Limits)}) {}
export const DomainStatusList = S.Array(DomainStatus);
export class ExpressionStatus extends S.Class<ExpressionStatus>("ExpressionStatus")({Options: Expression, Status: OptionStatus}) {}
export const ExpressionStatusList = S.Array(ExpressionStatus);
export class IntOptions extends S.Class<IntOptions>("IntOptions")({DefaultValue: S.optional(S.Number), SourceField: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean)}) {}
export class DoubleOptions extends S.Class<DoubleOptions>("DoubleOptions")({DefaultValue: S.optional(S.Number), SourceField: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean)}) {}
export class LiteralOptions extends S.Class<LiteralOptions>("LiteralOptions")({DefaultValue: S.optional(S.String), SourceField: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean)}) {}
export class TextOptions extends S.Class<TextOptions>("TextOptions")({DefaultValue: S.optional(S.String), SourceField: S.optional(S.String), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean), HighlightEnabled: S.optional(S.Boolean), AnalysisScheme: S.optional(S.String)}) {}
export class DateOptions extends S.Class<DateOptions>("DateOptions")({DefaultValue: S.optional(S.String), SourceField: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean)}) {}
export class LatLonOptions extends S.Class<LatLonOptions>("LatLonOptions")({DefaultValue: S.optional(S.String), SourceField: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean), SortEnabled: S.optional(S.Boolean)}) {}
export class IntArrayOptions extends S.Class<IntArrayOptions>("IntArrayOptions")({DefaultValue: S.optional(S.Number), SourceFields: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean)}) {}
export class DoubleArrayOptions extends S.Class<DoubleArrayOptions>("DoubleArrayOptions")({DefaultValue: S.optional(S.Number), SourceFields: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean)}) {}
export class LiteralArrayOptions extends S.Class<LiteralArrayOptions>("LiteralArrayOptions")({DefaultValue: S.optional(S.String), SourceFields: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean)}) {}
export class TextArrayOptions extends S.Class<TextArrayOptions>("TextArrayOptions")({DefaultValue: S.optional(S.String), SourceFields: S.optional(S.String), ReturnEnabled: S.optional(S.Boolean), HighlightEnabled: S.optional(S.Boolean), AnalysisScheme: S.optional(S.String)}) {}
export class DateArrayOptions extends S.Class<DateArrayOptions>("DateArrayOptions")({DefaultValue: S.optional(S.String), SourceFields: S.optional(S.String), FacetEnabled: S.optional(S.Boolean), SearchEnabled: S.optional(S.Boolean), ReturnEnabled: S.optional(S.Boolean)}) {}
export class IndexField extends S.Class<IndexField>("IndexField")({IndexFieldName: S.String, IndexFieldType: S.String, IntOptions: S.optional(IntOptions), DoubleOptions: S.optional(DoubleOptions), LiteralOptions: S.optional(LiteralOptions), TextOptions: S.optional(TextOptions), DateOptions: S.optional(DateOptions), LatLonOptions: S.optional(LatLonOptions), IntArrayOptions: S.optional(IntArrayOptions), DoubleArrayOptions: S.optional(DoubleArrayOptions), LiteralArrayOptions: S.optional(LiteralArrayOptions), TextArrayOptions: S.optional(TextArrayOptions), DateArrayOptions: S.optional(DateArrayOptions)}) {}
export class IndexFieldStatus extends S.Class<IndexFieldStatus>("IndexFieldStatus")({Options: IndexField, Status: OptionStatus}) {}
export const IndexFieldStatusList = S.Array(IndexFieldStatus);
export class DocumentSuggesterOptions extends S.Class<DocumentSuggesterOptions>("DocumentSuggesterOptions")({SourceField: S.String, FuzzyMatching: S.optional(S.String), SortExpression: S.optional(S.String)}) {}
export class Suggester extends S.Class<Suggester>("Suggester")({SuggesterName: S.String, DocumentSuggesterOptions: DocumentSuggesterOptions}) {}
export class SuggesterStatus extends S.Class<SuggesterStatus>("SuggesterStatus")({Options: Suggester, Status: OptionStatus}) {}
export const SuggesterStatusList = S.Array(SuggesterStatus);
export const DomainNameMap = S.Record({key: S.String, value: S.String});
export class DomainEndpointOptions extends S.Class<DomainEndpointOptions>("DomainEndpointOptions")({EnforceHTTPS: S.optional(S.Boolean), TLSSecurityPolicy: S.optional(S.String)}) {}
export class ScalingParameters extends S.Class<ScalingParameters>("ScalingParameters")({DesiredInstanceType: S.optional(S.String), DesiredReplicationCount: S.optional(S.Number), DesiredPartitionCount: S.optional(S.Number)}) {}
export class BuildSuggestersResponse extends S.Class<BuildSuggestersResponse>("BuildSuggestersResponse")({FieldNames: S.optional(FieldNameList)}) {}
export class DefineExpressionRequest extends S.Class<DefineExpressionRequest>("DefineExpressionRequest")({DomainName: S.String, Expression: Expression}) {}
export class DeleteDomainResponse extends S.Class<DeleteDomainResponse>("DeleteDomainResponse")({DomainStatus: S.optional(DomainStatus)}) {}
export class DescribeAnalysisSchemesResponse extends S.Class<DescribeAnalysisSchemesResponse>("DescribeAnalysisSchemesResponse")({AnalysisSchemes: AnalysisSchemeStatusList}) {}
export class DescribeDomainsResponse extends S.Class<DescribeDomainsResponse>("DescribeDomainsResponse")({DomainStatusList: DomainStatusList}) {}
export class DescribeExpressionsResponse extends S.Class<DescribeExpressionsResponse>("DescribeExpressionsResponse")({Expressions: ExpressionStatusList}) {}
export class DescribeIndexFieldsResponse extends S.Class<DescribeIndexFieldsResponse>("DescribeIndexFieldsResponse")({IndexFields: IndexFieldStatusList}) {}
export class DescribeSuggestersResponse extends S.Class<DescribeSuggestersResponse>("DescribeSuggestersResponse")({Suggesters: SuggesterStatusList}) {}
export class IndexDocumentsResponse extends S.Class<IndexDocumentsResponse>("IndexDocumentsResponse")({FieldNames: S.optional(FieldNameList)}) {}
export class ListDomainNamesResponse extends S.Class<ListDomainNamesResponse>("ListDomainNamesResponse")({DomainNames: S.optional(DomainNameMap)}) {}
export class AvailabilityOptionsStatus extends S.Class<AvailabilityOptionsStatus>("AvailabilityOptionsStatus")({Options: S.Boolean, Status: OptionStatus}) {}
export class UpdateAvailabilityOptionsResponse extends S.Class<UpdateAvailabilityOptionsResponse>("UpdateAvailabilityOptionsResponse")({AvailabilityOptions: S.optional(AvailabilityOptionsStatus)}) {}
export class UpdateDomainEndpointOptionsRequest extends S.Class<UpdateDomainEndpointOptionsRequest>("UpdateDomainEndpointOptionsRequest")({DomainName: S.String, DomainEndpointOptions: DomainEndpointOptions}) {}
export class UpdateScalingParametersRequest extends S.Class<UpdateScalingParametersRequest>("UpdateScalingParametersRequest")({DomainName: S.String, ScalingParameters: ScalingParameters}) {}
export class AccessPoliciesStatus extends S.Class<AccessPoliciesStatus>("AccessPoliciesStatus")({Options: S.String, Status: OptionStatus}) {}
export class UpdateServiceAccessPoliciesResponse extends S.Class<UpdateServiceAccessPoliciesResponse>("UpdateServiceAccessPoliciesResponse")({AccessPolicies: AccessPoliciesStatus}) {}
export class DomainEndpointOptionsStatus extends S.Class<DomainEndpointOptionsStatus>("DomainEndpointOptionsStatus")({Options: DomainEndpointOptions, Status: OptionStatus}) {}
export class ScalingParametersStatus extends S.Class<ScalingParametersStatus>("ScalingParametersStatus")({Options: ScalingParameters, Status: OptionStatus}) {}
export class DefineAnalysisSchemeRequest extends S.Class<DefineAnalysisSchemeRequest>("DefineAnalysisSchemeRequest")({DomainName: S.String, AnalysisScheme: AnalysisScheme}) {}
export class DefineExpressionResponse extends S.Class<DefineExpressionResponse>("DefineExpressionResponse")({Expression: ExpressionStatus}) {}
export class DefineIndexFieldRequest extends S.Class<DefineIndexFieldRequest>("DefineIndexFieldRequest")({DomainName: S.String, IndexField: IndexField}) {}
export class DefineSuggesterRequest extends S.Class<DefineSuggesterRequest>("DefineSuggesterRequest")({DomainName: S.String, Suggester: Suggester}) {}
export class DeleteExpressionResponse extends S.Class<DeleteExpressionResponse>("DeleteExpressionResponse")({Expression: ExpressionStatus}) {}
export class DeleteIndexFieldResponse extends S.Class<DeleteIndexFieldResponse>("DeleteIndexFieldResponse")({IndexField: IndexFieldStatus}) {}
export class DeleteSuggesterResponse extends S.Class<DeleteSuggesterResponse>("DeleteSuggesterResponse")({Suggester: SuggesterStatus}) {}
export class DescribeAvailabilityOptionsResponse extends S.Class<DescribeAvailabilityOptionsResponse>("DescribeAvailabilityOptionsResponse")({AvailabilityOptions: S.optional(AvailabilityOptionsStatus)}) {}
export class DescribeDomainEndpointOptionsResponse extends S.Class<DescribeDomainEndpointOptionsResponse>("DescribeDomainEndpointOptionsResponse")({DomainEndpointOptions: S.optional(DomainEndpointOptionsStatus)}) {}
export class DescribeScalingParametersResponse extends S.Class<DescribeScalingParametersResponse>("DescribeScalingParametersResponse")({ScalingParameters: ScalingParametersStatus}) {}
export class DescribeServiceAccessPoliciesResponse extends S.Class<DescribeServiceAccessPoliciesResponse>("DescribeServiceAccessPoliciesResponse")({AccessPolicies: AccessPoliciesStatus}) {}
export class UpdateDomainEndpointOptionsResponse extends S.Class<UpdateDomainEndpointOptionsResponse>("UpdateDomainEndpointOptionsResponse")({DomainEndpointOptions: S.optional(DomainEndpointOptionsStatus)}) {}
export class UpdateScalingParametersResponse extends S.Class<UpdateScalingParametersResponse>("UpdateScalingParametersResponse")({ScalingParameters: ScalingParametersStatus}) {}
export class CreateDomainResponse extends S.Class<CreateDomainResponse>("CreateDomainResponse")({DomainStatus: S.optional(DomainStatus)}) {}
export class DefineAnalysisSchemeResponse extends S.Class<DefineAnalysisSchemeResponse>("DefineAnalysisSchemeResponse")({AnalysisScheme: AnalysisSchemeStatus}) {}
export class DefineIndexFieldResponse extends S.Class<DefineIndexFieldResponse>("DefineIndexFieldResponse")({IndexField: IndexFieldStatus}) {}
export class DefineSuggesterResponse extends S.Class<DefineSuggesterResponse>("DefineSuggesterResponse")({Suggester: SuggesterStatus}) {}
export class DeleteAnalysisSchemeResponse extends S.Class<DeleteAnalysisSchemeResponse>("DeleteAnalysisSchemeResponse")({AnalysisScheme: AnalysisSchemeStatus}) {}

//# Errors
export class BaseException extends S.TaggedError<BaseException>()("BaseException", {}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class InvalidTypeException extends S.TaggedError<InvalidTypeException>()("InvalidTypeException", {}) {};
export class DisabledOperationException extends S.TaggedError<DisabledOperationException>()("DisabledOperationException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {Code: S.optional(S.String), Message: S.optional(S.String)}) {};

//# Operations
/**
 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
 * all domains by default. To get the number of searchable documents in a domain, use the console or submit a `matchall` request to your domain's search endpoint: `q=matchall&q.parser=structured&size=0`. For more information,
 * see Getting Information about a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */export const describeDomains = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeDomains" }, DescribeDomainsRequest, DescribeDomainsResponse, [BaseException, InternalException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */export const describeExpressions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeExpressions" }, DescribeExpressionsRequest, DescribeExpressionsResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets information about the index fields configured for the search domain.
 * Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information,
 * see Getting Domain Information in the *Amazon CloudSearch Developer Guide*.
 */export const describeIndexFields = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeIndexFields" }, DescribeIndexFieldsRequest, DescribeIndexFieldsResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */export const describeSuggesters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeSuggesters" }, DescribeSuggestersRequest, DescribeSuggestersResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Lists all search domains owned by an account.
 */export const listDomainNames = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.ListDomainNames" }, S.Struct({}), ListDomainNamesResponse, [BaseException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Indexes the search suggestions. For more information, see Configuring Suggesters in the *Amazon CloudSearch Developer Guide*.
 */export const buildSuggesters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.BuildSuggesters" }, BuildSuggestersRequest, BuildSuggestersResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information,
 * see Deleting a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */export const deleteDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DeleteDomain" }, DeleteDomainRequest, DeleteDomainResponse, [BaseException, InternalException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes an `Expression` from the search domain. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */export const deleteExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DeleteExpression" }, DeleteExpressionRequest, DeleteExpressionResponse, [BaseException, InternalException, InvalidTypeException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Removes an `IndexField` from the search domain. For more information, see Configuring Index Fields in the *Amazon CloudSearch Developer Guide*.
 */export const deleteIndexField = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DeleteIndexField" }, DeleteIndexFieldRequest, DeleteIndexFieldResponse, [BaseException, InternalException, InvalidTypeException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes a suggester. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */export const deleteSuggester = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DeleteSuggester" }, DeleteSuggesterRequest, DeleteSuggesterResponse, [BaseException, InternalException, InvalidTypeException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a `text` field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */export const describeAnalysisSchemes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeAnalysisSchemes" }, DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see Configuring Availability Options in the *Amazon CloudSearch Developer Guide*.
 */export const describeAvailabilityOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeAvailabilityOptions" }, DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse, [BaseException, DisabledOperationException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the *Amazon CloudSearch Developer Guide*.
 */export const describeDomainEndpointOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeDomainEndpointOptions" }, DescribeDomainEndpointOptionsRequest, DescribeDomainEndpointOptionsResponse, [BaseException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the *Amazon CloudSearch Developer Guide*.
 */export const describeScalingParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeScalingParameters" }, DescribeScalingParametersRequest, DescribeScalingParametersResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information,
 * see Configuring Access for a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */export const describeServiceAccessPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DescribeServiceAccessPolicies" }, DescribeServiceAccessPoliciesRequest, DescribeServiceAccessPoliciesResponse, [BaseException, InternalException, ResourceNotFoundException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is `RequiresIndexDocuments`.
 */export const indexDocuments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.IndexDocuments" }, IndexDocumentsRequest, IndexDocumentsResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see Configuring Availability Options in the *Amazon CloudSearch Developer Guide*.
 */export const updateAvailabilityOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.UpdateAvailabilityOptions" }, UpdateAvailabilityOptionsRequest, UpdateAvailabilityOptionsResponse, [BaseException, DisabledOperationException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the *Amazon CloudSearch Developer Guide*.
 */export const updateDomainEndpointOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.UpdateDomainEndpointOptions" }, UpdateDomainEndpointOptionsRequest, UpdateDomainEndpointOptionsResponse, [BaseException, DisabledOperationException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the *Amazon CloudSearch Developer Guide*.
 */export const updateScalingParameters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.UpdateScalingParameters" }, UpdateScalingParametersRequest, UpdateScalingParametersResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures the access rules that control access to the domain's document and search endpoints.
 * For more information, see
 * Configuring Access for an Amazon CloudSearch Domain.
 */export const updateServiceAccessPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.UpdateServiceAccessPolicies" }, UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures an analysis scheme that can be applied to a `text` or `text-array` field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */export const defineAnalysisScheme = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DefineAnalysisScheme" }, DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures an `Expression` for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the *Amazon CloudSearch Developer Guide*.
 */export const defineExpression = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DefineExpression" }, DefineExpressionRequest, DefineExpressionResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures an `IndexField` for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the `IndexFieldType`. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the *Amazon CloudSearch Developer Guide*.
 */export const defineIndexField = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DefineIndexField" }, DefineIndexFieldRequest, DefineIndexFieldResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the *Amazon CloudSearch Developer Guide*.
 */export const defineSuggester = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DefineSuggester" }, DefineSuggesterRequest, DefineSuggesterResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the *Amazon CloudSearch Developer Guide*.
 */export const deleteAnalysisScheme = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.DeleteAnalysisScheme" }, DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse, [BaseException, InternalException, InvalidTypeException, ResourceNotFoundException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
/**
 * Creates a new search domain. For more information,
 * see Creating a Search Domain in the *Amazon CloudSearch Developer Guide*.
 */export const createDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/", method: "POST", sdkId: "CloudSearch", sigV4ServiceName: "cloudsearch", name: "A9SearchCloudConfigService2013.CreateDomain" }, CreateDomainRequest, CreateDomainResponse, [BaseException, InternalException, LimitExceededException, ResourceAlreadyExistsException, ValidationException]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAwsXMLError);
