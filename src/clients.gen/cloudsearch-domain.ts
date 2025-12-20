import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const SearchRequest = Schema.Struct({cursor: Schema.optional(Schema.String), expr: Schema.optional(Schema.String), facet: Schema.optional(Schema.String), filterQuery: Schema.optional(Schema.String), highlight: Schema.optional(Schema.String), partial: Schema.optional(Schema.Boolean), query: Schema.String, queryOptions: Schema.optional(Schema.String), queryParser: Schema.optional(Schema.String), return: Schema.optional(Schema.String), size: Schema.optional(Schema.Number), sort: Schema.optional(Schema.String), start: Schema.optional(Schema.Number), stats: Schema.optional(Schema.String)})
const SuggestRequest = Schema.Struct({query: Schema.String, suggester: Schema.String, size: Schema.optional(Schema.Number)})
const UploadDocumentsRequest = Schema.Struct({documents: Body("undefined", StreamBody()), contentType: Header("Content-Type")})
const SearchStatus = Schema.Struct({timems: Schema.optional(Schema.Number), rid: Schema.optional(Schema.String)})
const SuggestStatus = Schema.Struct({timems: Schema.optional(Schema.Number), rid: Schema.optional(Schema.String)})
const DocumentServiceWarning = Schema.Struct({message: Schema.optional(Schema.String)})
const DocumentServiceWarnings = Schema.Array(DocumentServiceWarning)
const UploadDocumentsResponse = Schema.Struct({status: Schema.optional(Schema.String), adds: Schema.optional(Schema.Number), deletes: Schema.optional(Schema.Number), warnings: Schema.optional(DocumentServiceWarnings)})
const FieldStats = Schema.Struct({min: Schema.optional(Schema.String), max: Schema.optional(Schema.String), count: Schema.optional(Schema.Number), missing: Schema.optional(Schema.Number), sum: Schema.optional(Schema.Number), sumOfSquares: Schema.optional(Schema.Number), mean: Schema.optional(Schema.String), stddev: Schema.optional(Schema.Number)})
const SuggestionMatch = Schema.Struct({suggestion: Schema.optional(Schema.String), score: Schema.optional(Schema.Number), id: Schema.optional(Schema.String)})
const Suggestions = Schema.Array(SuggestionMatch)
const FieldValue = Schema.Array(Schema.String)
const Stats = Schema.Record({key: Schema.String, value: FieldStats})
const SuggestModel = Schema.Struct({query: Schema.optional(Schema.String), found: Schema.optional(Schema.Number), suggestions: Schema.optional(Suggestions)})
const Fields = Schema.Record({key: Schema.String, value: FieldValue})
const Exprs = Schema.Record({key: Schema.String, value: Schema.String})
const Highlights = Schema.Record({key: Schema.String, value: Schema.String})
const Bucket = Schema.Struct({value: Schema.optional(Schema.String), count: Schema.optional(Schema.Number)})
const BucketList = Schema.Array(Bucket)
const SuggestResponse = Schema.Struct({status: Schema.optional(SuggestStatus), suggest: Schema.optional(SuggestModel)})
const DocumentServiceException = Schema.Struct({status: Schema.optional(Schema.String), message: Schema.optional(Schema.String)})
export const UploadDocuments = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2013-01-01/documents/batch?format=sdk", method: "POST", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "UploadDocuments" }, UploadDocumentsRequest, UploadDocumentsResponse, ErrorAnnotation("DocumentServiceException", DocumentServiceException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const Hit = Schema.Struct({id: Schema.optional(Schema.String), fields: Schema.optional(Fields), exprs: Schema.optional(Exprs), highlights: Schema.optional(Highlights)})
const HitList = Schema.Array(Hit)
const BucketInfo = Schema.Struct({buckets: Schema.optional(BucketList)})
const Hits = Schema.Struct({found: Schema.optional(Schema.Number), start: Schema.optional(Schema.Number), cursor: Schema.optional(Schema.String), hit: Schema.optional(HitList)})
const Facets = Schema.Record({key: Schema.String, value: BucketInfo})
const SearchResponse = Schema.Struct({status: Schema.optional(SearchStatus), hits: Schema.optional(Hits), facets: Schema.optional(Facets), stats: Schema.optional(Stats)})
export const Search = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2013-01-01/search?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "Search" }, SearchRequest, SearchResponse, ErrorAnnotation("SearchException", SearchException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const SearchException = Schema.Struct({message: Schema.optional(Schema.String)})
export const Suggest = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/2013-01-01/suggest?format=sdk&pretty=true", method: "GET", sdkId: "CloudSearch Domain", sigV4ServiceName: "cloudsearch", name: "Suggest" }, SuggestRequest, SuggestResponse, ErrorAnnotation("SearchException", SearchException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
