import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class SearchRequest extends S.Class<SearchRequest>("SearchRequest")({cursor: S.optional(S.String), expr: S.optional(S.String), facet: S.optional(S.String), filterQuery: S.optional(S.String), highlight: S.optional(S.String), partial: S.optional(S.Boolean), query: S.String, queryOptions: S.optional(S.String), queryParser: S.optional(S.String), return: S.optional(S.String), size: S.optional(S.Number), sort: S.optional(S.String), start: S.optional(S.Number), stats: S.optional(S.String)}) {}
export class SuggestRequest extends S.Class<SuggestRequest>("SuggestRequest")({query: S.String, suggester: S.String, size: S.optional(S.Number)}) {}
export class UploadDocumentsRequest extends S.Class<UploadDocumentsRequest>("UploadDocumentsRequest")({documents: H.Body("undefined", H.StreamBody()), contentType: H.Header("Content-Type")}) {}
export class SearchStatus extends S.Class<SearchStatus>("SearchStatus")({timems: S.optional(S.Number), rid: S.optional(S.String)}) {}
export class SuggestStatus extends S.Class<SuggestStatus>("SuggestStatus")({timems: S.optional(S.Number), rid: S.optional(S.String)}) {}
export class DocumentServiceWarning extends S.Class<DocumentServiceWarning>("DocumentServiceWarning")({message: S.optional(S.String)}) {}
export const DocumentServiceWarnings = S.Array(DocumentServiceWarning);
export class UploadDocumentsResponse extends S.Class<UploadDocumentsResponse>("UploadDocumentsResponse")({status: S.optional(S.String), adds: S.optional(S.Number), deletes: S.optional(S.Number), warnings: S.optional(DocumentServiceWarnings)}) {}
export class FieldStats extends S.Class<FieldStats>("FieldStats")({min: S.optional(S.String), max: S.optional(S.String), count: S.optional(S.Number), missing: S.optional(S.Number), sum: S.optional(S.Number), sumOfSquares: S.optional(S.Number), mean: S.optional(S.String), stddev: S.optional(S.Number)}) {}
export class SuggestionMatch extends S.Class<SuggestionMatch>("SuggestionMatch")({suggestion: S.optional(S.String), score: S.optional(S.Number), id: S.optional(S.String)}) {}
export const Suggestions = S.Array(SuggestionMatch);
export const FieldValue = S.Array(S.String);
export const Stats = S.Record({key: S.String, value: FieldStats});
export class SuggestModel extends S.Class<SuggestModel>("SuggestModel")({query: S.optional(S.String), found: S.optional(S.Number), suggestions: S.optional(Suggestions)}) {}
export const Fields = S.Record({key: S.String, value: FieldValue});
export const Exprs = S.Record({key: S.String, value: S.String});
export const Highlights = S.Record({key: S.String, value: S.String});
export class Bucket extends S.Class<Bucket>("Bucket")({value: S.optional(S.String), count: S.optional(S.Number)}) {}
export const BucketList = S.Array(Bucket);
export class SuggestResponse extends S.Class<SuggestResponse>("SuggestResponse")({status: S.optional(SuggestStatus), suggest: S.optional(SuggestModel)}) {}
export class Hit extends S.Class<Hit>("Hit")({id: S.optional(S.String), fields: S.optional(Fields), exprs: S.optional(Exprs), highlights: S.optional(Highlights)}) {}
export const HitList = S.Array(Hit);
export class BucketInfo extends S.Class<BucketInfo>("BucketInfo")({buckets: S.optional(BucketList)}) {}
export class Hits extends S.Class<Hits>("Hits")({found: S.optional(S.Number), start: S.optional(S.Number), cursor: S.optional(S.String), hit: S.optional(HitList)}) {}
export const Facets = S.Record({key: S.String, value: BucketInfo});
export class SearchResponse extends S.Class<SearchResponse>("SearchResponse")({status: S.optional(SearchStatus), hits: S.optional(Hits), facets: S.optional(Facets), stats: S.optional(Stats)}) {}

//# Errors
export class DocumentServiceException extends S.TaggedError<DocumentServiceException>()("DocumentServiceException", {status: S.optional(S.String), message: S.optional(S.String)}) {};
export class SearchException extends S.TaggedError<SearchException>()("SearchException", {}) {};

//# Operations
export const uploadDocuments = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/2013-01-01/documents/batch?format=sdk", method: "POST", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.UploadDocuments" }, UploadDocumentsRequest, UploadDocumentsResponse, [DocumentServiceException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const search = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/2013-01-01/search?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.Search" }, SearchRequest, SearchResponse, [SearchException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const suggest = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-01-01", uri: "/2013-01-01/suggest?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "AmazonCloudSearch2013.Suggest" }, SuggestRequest, SuggestResponse, [SearchException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
