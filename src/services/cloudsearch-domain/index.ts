import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { RestJson1Protocol } from "../../protocols/restjson1.js";

export class CloudSearchDomain extends AWSServiceClient {
  constructor(cfg: any) {
    super("cloudsearch-domain", new RestJson1Protocol(), cfg);
  }

  search(
    input: SearchRequest,
  ): Effect.Effect<
    SearchResponse,
    SearchException | CommonAwsError
  > {
    return this.call("Search", input);
  }
  suggest(
    input: SuggestRequest,
  ): Effect.Effect<
    SuggestResponse,
    SearchException | CommonAwsError
  > {
    return this.call("Suggest", input);
  }
  uploadDocuments(
    input: UploadDocumentsRequest,
  ): Effect.Effect<
    UploadDocumentsResponse,
    DocumentServiceException | CommonAwsError
  > {
    return this.call("UploadDocuments", input);
  }
}

export class CloudsearchDomain extends CloudSearchDomain {}

export default CloudSearchDomain;

export type Adds = number;

export type Blob = Uint8Array | string;

export interface Bucket {
  value?: string;
  count?: number;
}
export interface BucketInfo {
  buckets?: Array<Bucket>;
}
export type BucketList = Array<Bucket>;
export type ContentType = "application_json" | "application_xml";
export type Cursor = string;

export type Deletes = number;

export declare class DocumentServiceException extends EffectData.TaggedError(
  "DocumentServiceException",
)<{
  readonly status?: string;
  readonly message?: string;
}> {}
export interface DocumentServiceWarning {
  message?: string;
}
export type DocumentServiceWarnings = Array<DocumentServiceWarning>;
export type Double = number;

export type Expr = string;

export type Exprs = Record<string, string>;
export type Facet = string;

export type Facets = Record<string, BucketInfo>;
export type Fields = Record<string, Array<string>>;
export interface FieldStats {
  min?: string;
  max?: string;
  count?: number;
  missing?: number;
  sum?: number;
  sumOfSquares?: number;
  mean?: string;
  stddev?: number;
}
export type FieldValue = Array<string>;
export type FilterQuery = string;

export type Highlight = string;

export type Highlights = Record<string, string>;
export interface Hit {
  id?: string;
  fields?: Record<string, Array<string>>;
  exprs?: Record<string, string>;
  highlights?: Record<string, string>;
}
export type HitList = Array<Hit>;
export interface Hits {
  found?: number;
  start?: number;
  cursor?: string;
  hit?: Array<Hit>;
}
export type Long = number;

export type Partial = boolean;

export type Query = string;

export type QueryOptions = string;

export type QueryParser = "simple" | "structured" | "lucene" | "dismax";
export type Return = string;

export declare class SearchException extends EffectData.TaggedError(
  "SearchException",
)<{
  readonly message?: string;
}> {}
export interface SearchRequest {
  cursor?: string;
  expr?: string;
  facet?: string;
  filterQuery?: string;
  highlight?: string;
  partial?: boolean;
  query: string;
  queryOptions?: string;
  queryParser?: QueryParser;
  return?: string;
  size?: number;
  sort?: string;
  start?: number;
  stats?: string;
}
export interface SearchResponse {
  status?: SearchStatus;
  hits?: Hits;
  facets?: Record<string, BucketInfo>;
  stats?: Record<string, FieldStats>;
}
export interface SearchStatus {
  timems?: number;
  rid?: string;
}
export type Size = number;

export type Sort = string;

export type Start = number;

export type Stat = string;

export type Stats = Record<string, FieldStats>;
export type CloudsearchDomainString = string;

export type Suggester = string;

export interface SuggestionMatch {
  suggestion?: string;
  score?: number;
  id?: string;
}
export type Suggestions = Array<SuggestionMatch>;
export type SuggestionsSize = number;

export interface SuggestModel {
  query?: string;
  found?: number;
  suggestions?: Array<SuggestionMatch>;
}
export interface SuggestRequest {
  query: string;
  suggester: string;
  size?: number;
}
export interface SuggestResponse {
  status?: SuggestStatus;
  suggest?: SuggestModel;
}
export interface SuggestStatus {
  timems?: number;
  rid?: string;
}
export interface UploadDocumentsRequest {
  documents: Uint8Array | string;
  contentType: ContentType;
}
export interface UploadDocumentsResponse {
  status?: string;
  adds?: number;
  deletes?: number;
  warnings?: Array<DocumentServiceWarning>;
}
export declare namespace Search {
  export type Input = SearchRequest;
  export type Output = SearchResponse;
  export type Error =
    | SearchException
    | CommonAwsError;
}

export declare namespace Suggest {
  export type Input = SuggestRequest;
  export type Output = SuggestResponse;
  export type Error =
    | SearchException
    | CommonAwsError;
}

export declare namespace UploadDocuments {
  export type Input = UploadDocumentsRequest;
  export type Output = UploadDocumentsResponse;
  export type Error =
    | DocumentServiceException
    | CommonAwsError;
}

