import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class SearchRequest extends Schema.Class<SearchRequest>("SearchRequest")({cursor: Schema.optional(Schema.String), expr: Schema.optional(Schema.String), facet: Schema.optional(Schema.String), filterQuery: Schema.optional(Schema.String), highlight: Schema.optional(Schema.String), partial: Schema.optional(Schema.Boolean), query: Schema.String, queryOptions: Schema.optional(Schema.String), queryParser: Schema.optional(Schema.String), return: Schema.optional(Schema.String), size: Schema.optional(Schema.Number), sort: Schema.optional(Schema.String), start: Schema.optional(Schema.Number), stats: Schema.optional(Schema.String)}) {}
export class SuggestRequest extends Schema.Class<SuggestRequest>("SuggestRequest")({query: Schema.String, suggester: Schema.String, size: Schema.optional(Schema.Number)}) {}
export class UploadDocumentsRequest extends Schema.Class<UploadDocumentsRequest>("UploadDocumentsRequest")({documents: Body("undefined", StreamBody()), contentType: Header("Content-Type")}) {}
export class SearchStatus extends Schema.Class<SearchStatus>("SearchStatus")({timems: Schema.optional(Schema.Number), rid: Schema.optional(Schema.String)}) {}
export class SuggestStatus extends Schema.Class<SuggestStatus>("SuggestStatus")({timems: Schema.optional(Schema.Number), rid: Schema.optional(Schema.String)}) {}
export class DocumentServiceWarning extends Schema.Class<DocumentServiceWarning>("DocumentServiceWarning")({message: Schema.optional(Schema.String)}) {}
export const DocumentServiceWarnings = Schema.Array(DocumentServiceWarning);
export class UploadDocumentsResponse extends Schema.Class<UploadDocumentsResponse>("UploadDocumentsResponse")({status: Schema.optional(Schema.String), adds: Schema.optional(Schema.Number), deletes: Schema.optional(Schema.Number), warnings: Schema.optional(DocumentServiceWarnings)}) {}
export class FieldStats extends Schema.Class<FieldStats>("FieldStats")({min: Schema.optional(Schema.String), max: Schema.optional(Schema.String), count: Schema.optional(Schema.Number), missing: Schema.optional(Schema.Number), sum: Schema.optional(Schema.Number), sumOfSquares: Schema.optional(Schema.Number), mean: Schema.optional(Schema.String), stddev: Schema.optional(Schema.Number)}) {}
export class SuggestionMatch extends Schema.Class<SuggestionMatch>("SuggestionMatch")({suggestion: Schema.optional(Schema.String), score: Schema.optional(Schema.Number), id: Schema.optional(Schema.String)}) {}
export const Suggestions = Schema.Array(SuggestionMatch);
export const FieldValue = Schema.Array(Schema.String);
export const Stats = Schema.Record({key: Schema.String, value: FieldStats});
export class SuggestModel extends Schema.Class<SuggestModel>("SuggestModel")({query: Schema.optional(Schema.String), found: Schema.optional(Schema.Number), suggestions: Schema.optional(Suggestions)}) {}
export const Fields = Schema.Record({key: Schema.String, value: FieldValue});
export const Exprs = Schema.Record({key: Schema.String, value: Schema.String});
export const Highlights = Schema.Record({key: Schema.String, value: Schema.String});
export class Bucket extends Schema.Class<Bucket>("Bucket")({value: Schema.optional(Schema.String), count: Schema.optional(Schema.Number)}) {}
export const BucketList = Schema.Array(Bucket);
export class SuggestResponse extends Schema.Class<SuggestResponse>("SuggestResponse")({status: Schema.optional(SuggestStatus), suggest: Schema.optional(SuggestModel)}) {}
export class DocumentServiceException extends Schema.Class<DocumentServiceException>("DocumentServiceException")({status: Schema.optional(Schema.String), message: Schema.optional(Schema.String)}) {}
export class Hit extends Schema.Class<Hit>("Hit")({id: Schema.optional(Schema.String), fields: Schema.optional(Fields), exprs: Schema.optional(Exprs), highlights: Schema.optional(Highlights)}) {}
export const HitList = Schema.Array(Hit);
export class BucketInfo extends Schema.Class<BucketInfo>("BucketInfo")({buckets: Schema.optional(BucketList)}) {}
export class Hits extends Schema.Class<Hits>("Hits")({found: Schema.optional(Schema.Number), start: Schema.optional(Schema.Number), cursor: Schema.optional(Schema.String), hit: Schema.optional(HitList)}) {}
export const Facets = Schema.Record({key: Schema.String, value: BucketInfo});
export class SearchResponse extends Schema.Class<SearchResponse>("SearchResponse")({status: Schema.optional(SearchStatus), hits: Schema.optional(Hits), facets: Schema.optional(Facets), stats: Schema.optional(Stats)}) {}
export class SearchException extends Schema.Class<SearchException>("SearchException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class DocumentServiceExceptionError extends Schema.TaggedError<DocumentServiceExceptionError>()("DocumentServiceException", DocumentServiceException.fields) {};
export class SearchExceptionError extends Schema.TaggedError<SearchExceptionError>()("SearchException", SearchException.fields) {};

//# Operations
export const uploadDocuments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2013-01-01", uri: "/2013-01-01/documents/batch?format=sdk", method: "POST", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.UploadDocuments" }, UploadDocumentsRequest, UploadDocumentsResponse, [DocumentServiceExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const search = /*#__PURE__*/ makeOperation(() => Operation({ version: "2013-01-01", uri: "/2013-01-01/search?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.Search" }, SearchRequest, SearchResponse, [SearchExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const suggest = /*#__PURE__*/ makeOperation(() => Operation({ version: "2013-01-01", uri: "/2013-01-01/suggest?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.Suggest" }, SuggestRequest, SuggestResponse, [SearchExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
