import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class GeoPlaces extends AWSServiceClient {
  autocomplete(
    input: AutocompleteRequest,
  ): Effect.Effect<
    AutocompleteResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  geocode(
    input: GeocodeRequest,
  ): Effect.Effect<
    GeocodeResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPlace(
    input: GetPlaceRequest,
  ): Effect.Effect<
    GetPlaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  reverseGeocode(
    input: ReverseGeocodeRequest,
  ): Effect.Effect<
    ReverseGeocodeResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchNearby(
    input: SearchNearbyRequest,
  ): Effect.Effect<
    SearchNearbyResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchText(
    input: SearchTextRequest,
  ): Effect.Effect<
    SearchTextResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  suggest(
    input: SuggestRequest,
  ): Effect.Effect<
    SuggestResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AccessPoint {
  Position?: Array<number>;
}
export type AccessPointList = Array<AccessPoint>;
export interface AccessRestriction {
  Restricted?: boolean;
  Categories?: Array<Category>;
}
export type AccessRestrictionList = Array<AccessRestriction>;
export interface Address {
  Label?: string;
  Country?: Country;
  Region?: Region;
  SubRegion?: SubRegion;
  Locality?: string;
  District?: string;
  SubDistrict?: string;
  PostalCode?: string;
  Block?: string;
  SubBlock?: string;
  Intersection?: Array<string>;
  Street?: string;
  StreetComponents?: Array<StreetComponents>;
  AddressNumber?: string;
  Building?: string;
  SecondaryAddressComponents?: Array<SecondaryAddressComponent>;
}
export interface AddressComponentMatchScores {
  Country?: number;
  Region?: number;
  SubRegion?: number;
  Locality?: number;
  District?: number;
  SubDistrict?: number;
  PostalCode?: number;
  Block?: number;
  SubBlock?: number;
  Intersection?: Array<number>;
  AddressNumber?: number;
  Building?: number;
  SecondaryAddressComponents?: Array<SecondaryAddressComponentMatchScore>;
}
export interface AddressComponentPhonemes {
  Country?: Array<PhonemeTranscription>;
  Region?: Array<PhonemeTranscription>;
  SubRegion?: Array<PhonemeTranscription>;
  Locality?: Array<PhonemeTranscription>;
  District?: Array<PhonemeTranscription>;
  SubDistrict?: Array<PhonemeTranscription>;
  Block?: Array<PhonemeTranscription>;
  SubBlock?: Array<PhonemeTranscription>;
  Street?: Array<PhonemeTranscription>;
}
export type ApiKey = string;

export type AutocompleteAdditionalFeature = string;

export type AutocompleteAdditionalFeatureList = Array<string>;
export interface AutocompleteAddressHighlights {
  Label?: Array<Highlight>;
  Country?: CountryHighlights;
  Region?: RegionHighlights;
  SubRegion?: SubRegionHighlights;
  Locality?: Array<Highlight>;
  District?: Array<Highlight>;
  SubDistrict?: Array<Highlight>;
  Street?: Array<Highlight>;
  Block?: Array<Highlight>;
  SubBlock?: Array<Highlight>;
  Intersection?: Array<Array<Highlight>>;
  PostalCode?: Array<Highlight>;
  AddressNumber?: Array<Highlight>;
  Building?: Array<Highlight>;
}
export interface AutocompleteFilter {
  BoundingBox?: Array<number>;
  Circle?: FilterCircle;
  IncludeCountries?: Array<string>;
  IncludePlaceTypes?: Array<string>;
}
export type AutocompleteFilterPlaceType = string;

export type AutocompleteFilterPlaceTypeList = Array<string>;
export interface AutocompleteHighlights {
  Title?: Array<Highlight>;
  Address?: AutocompleteAddressHighlights;
}
export type AutocompleteIntendedUse = string;

export interface AutocompleteRequest {
  QueryText: string;
  MaxResults?: number;
  BiasPosition?: Array<number>;
  Filter?: AutocompleteFilter;
  PostalCodeMode?: string;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  Key?: string;
}
export interface AutocompleteResponse {
  PricingBucket: string;
  ResultItems?: Array<AutocompleteResultItem>;
}
export interface AutocompleteResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  Distance?: number;
  Language?: string;
  PoliticalView?: string;
  Highlights?: AutocompleteHighlights;
}
export type AutocompleteResultItemList = Array<AutocompleteResultItem>;
export type BoundingBox = Array<number>;
export interface BusinessChain {
  Name?: string;
  Id?: string;
}
export type BusinessChainList = Array<BusinessChain>;
export interface Category {
  Id: string;
  Name: string;
  LocalizedName?: string;
  Primary?: boolean;
}
export type CategoryList = Array<Category>;
export interface ComponentMatchScores {
  Title?: number;
  Address?: AddressComponentMatchScores;
}
export interface ContactDetails {
  Label?: string;
  Value?: string;
  Categories?: Array<Category>;
}
export type ContactDetailsList = Array<ContactDetails>;
export interface Contacts {
  Phones?: Array<ContactDetails>;
  Faxes?: Array<ContactDetails>;
  Websites?: Array<ContactDetails>;
  Emails?: Array<ContactDetails>;
}
export interface Country {
  Code2?: string;
  Code3?: string;
  Name?: string;
}
export type CountryCode = string;

export type CountryCode2 = string;

export type CountryCode3 = string;

export type CountryCodeList = Array<string>;
export interface CountryHighlights {
  Code?: Array<Highlight>;
  Name?: Array<Highlight>;
}
export type DistanceMeters = number;

export type DurationSeconds = number;

export type FilterBusinessChainList = Array<string>;
export type FilterCategoryList = Array<string>;
export interface FilterCircle {
  Center: Array<number>;
  Radius: number;
}
export type FilterFoodTypeList = Array<string>;
export interface FoodType {
  LocalizedName: string;
  Id?: string;
  Primary?: boolean;
}
export type FoodTypeList = Array<FoodType>;
export type GeocodeAdditionalFeature = string;

export type GeocodeAdditionalFeatureList = Array<string>;
export interface GeocodeFilter {
  IncludeCountries?: Array<string>;
  IncludePlaceTypes?: Array<string>;
}
export type GeocodeFilterPlaceType = string;

export type GeocodeFilterPlaceTypeList = Array<string>;
export type GeocodeIntendedUse = string;

export interface GeocodeParsedQuery {
  Title?: Array<ParsedQueryComponent>;
  Address?: GeocodeParsedQueryAddressComponents;
}
export interface GeocodeParsedQueryAddressComponents {
  Country?: Array<ParsedQueryComponent>;
  Region?: Array<ParsedQueryComponent>;
  SubRegion?: Array<ParsedQueryComponent>;
  Locality?: Array<ParsedQueryComponent>;
  District?: Array<ParsedQueryComponent>;
  SubDistrict?: Array<ParsedQueryComponent>;
  PostalCode?: Array<ParsedQueryComponent>;
  Block?: Array<ParsedQueryComponent>;
  SubBlock?: Array<ParsedQueryComponent>;
  Street?: Array<ParsedQueryComponent>;
  AddressNumber?: Array<ParsedQueryComponent>;
  Building?: Array<ParsedQueryComponent>;
  SecondaryAddressComponents?: Array<ParsedQuerySecondaryAddressComponent>;
}
export interface GeocodeQueryComponents {
  Country?: string;
  Region?: string;
  SubRegion?: string;
  Locality?: string;
  District?: string;
  Street?: string;
  AddressNumber?: string;
  PostalCode?: string;
}
export interface GeocodeRequest {
  QueryText?: string;
  QueryComponents?: GeocodeQueryComponents;
  MaxResults?: number;
  BiasPosition?: Array<number>;
  Filter?: GeocodeFilter;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  Key?: string;
}
export interface GeocodeResponse {
  PricingBucket: string;
  ResultItems?: Array<GeocodeResultItem>;
}
export interface GeocodeResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: Array<PostalCodeDetails>;
  Position?: Array<number>;
  Distance?: number;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  AccessPoints?: Array<AccessPoint>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  MatchScores?: MatchScoreDetails;
  ParsedQuery?: GeocodeParsedQuery;
  Intersections?: Array<Intersection>;
  MainAddress?: RelatedPlace;
  SecondaryAddresses?: Array<RelatedPlace>;
}
export type GeocodeResultItemList = Array<GeocodeResultItem>;
export type GetPlaceAdditionalFeature = string;

export type GetPlaceAdditionalFeatureList = Array<string>;
export type GetPlaceIntendedUse = string;

export interface GetPlaceRequest {
  PlaceId: string;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  Key?: string;
}
export interface GetPlaceResponse {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  PricingBucket: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: Array<PostalCodeDetails>;
  Position?: Array<number>;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  BusinessChains?: Array<BusinessChain>;
  Contacts?: Contacts;
  OpeningHours?: Array<OpeningHours>;
  AccessPoints?: Array<AccessPoint>;
  AccessRestrictions?: Array<AccessRestriction>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  Phonemes?: PhonemeDetails;
  MainAddress?: RelatedPlace;
  SecondaryAddresses?: Array<RelatedPlace>;
}
export interface Highlight {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string;
}
export type HighlightList = Array<Highlight>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface Intersection {
  PlaceId: string;
  Title: string;
  Address?: Address;
  Position?: Array<number>;
  Distance?: number;
  RouteDistance?: number;
  MapView?: Array<number>;
  AccessPoints?: Array<AccessPoint>;
}
export type IntersectionHighlightsList = Array<Array<Highlight>>;
export type IntersectionList = Array<Intersection>;
export type IntersectionStreet = string;

export type IntersectionStreetList = Array<string>;
export type LanguageTag = string;

export type MatchScore = number;

export interface MatchScoreDetails {
  Overall?: number;
  Components?: ComponentMatchScores;
}
export type MatchScoreList = Array<number>;
export interface OpeningHours {
  Display?: Array<string>;
  OpenNow?: boolean;
  Components?: Array<OpeningHoursComponents>;
  Categories?: Array<Category>;
}
export interface OpeningHoursComponents {
  OpenTime?: string;
  OpenDuration?: string;
  Recurrence?: string;
}
export type OpeningHoursComponentsList = Array<OpeningHoursComponents>;
export type OpeningHoursDisplay = string;

export type OpeningHoursDisplayList = Array<string>;
export type OpeningHoursList = Array<OpeningHours>;
export interface ParsedQueryComponent {
  StartIndex?: number;
  EndIndex?: number;
  Value?: string;
  QueryComponent?: string;
}
export type ParsedQueryComponentList = Array<ParsedQueryComponent>;
export interface ParsedQuerySecondaryAddressComponent {
  StartIndex: number;
  EndIndex: number;
  Value: string;
  Number: string;
  Designator: string;
}
export type ParsedQuerySecondaryAddressComponentList =
  Array<ParsedQuerySecondaryAddressComponent>;
export interface PhonemeDetails {
  Title?: Array<PhonemeTranscription>;
  Address?: AddressComponentPhonemes;
}
export interface PhonemeTranscription {
  Value?: string;
  Language?: string;
  Preferred?: boolean;
}
export type PhonemeTranscriptionList = Array<PhonemeTranscription>;
export type PlaceType = string;

export type Position = Array<number>;
export type PostalAuthority = string;

export interface PostalCodeDetails {
  PostalCode?: string;
  PostalAuthority?: string;
  PostalCodeType?: string;
  UspsZip?: UspsZip;
  UspsZipPlus4?: UspsZipPlus4;
}
export type PostalCodeDetailsList = Array<PostalCodeDetails>;
export type PostalCodeMode = string;

export type PostalCodeType = string;

export interface QueryRefinement {
  RefinedTerm: string;
  OriginalTerm: string;
  StartIndex: number;
  EndIndex: number;
}
export type QueryRefinementList = Array<QueryRefinement>;
export type QueryType = string;

export type RecordTypeCode = string;

export interface Region {
  Code?: string;
  Name?: string;
}
export interface RegionHighlights {
  Code?: Array<Highlight>;
  Name?: Array<Highlight>;
}
export interface RelatedPlace {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  Position?: Array<number>;
  AccessPoints?: Array<AccessPoint>;
}
export type RelatedPlaceList = Array<RelatedPlace>;
export type ReverseGeocodeAdditionalFeature = string;

export type ReverseGeocodeAdditionalFeatureList = Array<string>;
export interface ReverseGeocodeFilter {
  IncludePlaceTypes?: Array<string>;
}
export type ReverseGeocodeFilterPlaceType = string;

export type ReverseGeocodeFilterPlaceTypeList = Array<string>;
export type ReverseGeocodeIntendedUse = string;

export interface ReverseGeocodeRequest {
  QueryPosition: Array<number>;
  QueryRadius?: number;
  MaxResults?: number;
  Filter?: ReverseGeocodeFilter;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  Key?: string;
}
export interface ReverseGeocodeResponse {
  PricingBucket: string;
  ResultItems?: Array<ReverseGeocodeResultItem>;
}
export interface ReverseGeocodeResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  PostalCodeDetails?: Array<PostalCodeDetails>;
  Position?: Array<number>;
  Distance?: number;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  AccessPoints?: Array<AccessPoint>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  Intersections?: Array<Intersection>;
}
export type ReverseGeocodeResultItemList = Array<ReverseGeocodeResultItem>;
export type SearchNearbyAdditionalFeature = string;

export type SearchNearbyAdditionalFeatureList = Array<string>;
export interface SearchNearbyFilter {
  BoundingBox?: Array<number>;
  IncludeCountries?: Array<string>;
  IncludeCategories?: Array<string>;
  ExcludeCategories?: Array<string>;
  IncludeBusinessChains?: Array<string>;
  ExcludeBusinessChains?: Array<string>;
  IncludeFoodTypes?: Array<string>;
  ExcludeFoodTypes?: Array<string>;
}
export type SearchNearbyIntendedUse = string;

export interface SearchNearbyRequest {
  QueryPosition: Array<number>;
  QueryRadius?: number;
  MaxResults?: number;
  Filter?: SearchNearbyFilter;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  NextToken?: string;
  Key?: string;
}
export interface SearchNearbyResponse {
  PricingBucket: string;
  ResultItems?: Array<SearchNearbyResultItem>;
  NextToken?: string;
}
export interface SearchNearbyResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  Position?: Array<number>;
  Distance?: number;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  BusinessChains?: Array<BusinessChain>;
  Contacts?: Contacts;
  OpeningHours?: Array<OpeningHours>;
  AccessPoints?: Array<AccessPoint>;
  AccessRestrictions?: Array<AccessRestriction>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  Phonemes?: PhonemeDetails;
}
export type SearchNearbyResultItemList = Array<SearchNearbyResultItem>;
export type SearchTextAdditionalFeature = string;

export type SearchTextAdditionalFeatureList = Array<string>;
export interface SearchTextFilter {
  BoundingBox?: Array<number>;
  Circle?: FilterCircle;
  IncludeCountries?: Array<string>;
}
export type SearchTextIntendedUse = string;

export interface SearchTextRequest {
  QueryText?: string;
  QueryId?: string;
  MaxResults?: number;
  BiasPosition?: Array<number>;
  Filter?: SearchTextFilter;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  NextToken?: string;
  Key?: string;
}
export interface SearchTextResponse {
  PricingBucket: string;
  ResultItems?: Array<SearchTextResultItem>;
  NextToken?: string;
}
export interface SearchTextResultItem {
  PlaceId: string;
  PlaceType: string;
  Title: string;
  Address?: Address;
  AddressNumberCorrected?: boolean;
  Position?: Array<number>;
  Distance?: number;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  BusinessChains?: Array<BusinessChain>;
  Contacts?: Contacts;
  OpeningHours?: Array<OpeningHours>;
  AccessPoints?: Array<AccessPoint>;
  AccessRestrictions?: Array<AccessRestriction>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  Phonemes?: PhonemeDetails;
}
export type SearchTextResultItemList = Array<SearchTextResultItem>;
export interface SecondaryAddressComponent {
  Number: string;
}
export type SecondaryAddressComponentList = Array<SecondaryAddressComponent>;
export interface SecondaryAddressComponentMatchScore {
  Number?: number;
}
export type SecondaryAddressComponentMatchScoreList =
  Array<SecondaryAddressComponentMatchScore>;
export type SensitiveBoolean = boolean;

export type SensitiveString = string;

export interface StreetComponents {
  BaseName?: string;
  Type?: string;
  TypePlacement?: string;
  TypeSeparator?: string;
  Prefix?: string;
  Suffix?: string;
  Direction?: string;
  Language?: string;
}
export type StreetComponentsList = Array<StreetComponents>;
export interface SubRegion {
  Code?: string;
  Name?: string;
}
export interface SubRegionHighlights {
  Code?: Array<Highlight>;
  Name?: Array<Highlight>;
}
export type SuggestAdditionalFeature = string;

export type SuggestAdditionalFeatureList = Array<string>;
export interface SuggestAddressHighlights {
  Label?: Array<Highlight>;
}
export interface SuggestFilter {
  BoundingBox?: Array<number>;
  Circle?: FilterCircle;
  IncludeCountries?: Array<string>;
}
export interface SuggestHighlights {
  Title?: Array<Highlight>;
  Address?: SuggestAddressHighlights;
}
export type SuggestIntendedUse = string;

export interface SuggestPlaceResult {
  PlaceId?: string;
  PlaceType?: string;
  Address?: Address;
  Position?: Array<number>;
  Distance?: number;
  MapView?: Array<number>;
  Categories?: Array<Category>;
  FoodTypes?: Array<FoodType>;
  BusinessChains?: Array<BusinessChain>;
  AccessPoints?: Array<AccessPoint>;
  AccessRestrictions?: Array<AccessRestriction>;
  TimeZone?: TimeZone;
  PoliticalView?: string;
  Phonemes?: PhonemeDetails;
}
export interface SuggestQueryResult {
  QueryId?: string;
  QueryType?: string;
}
export interface SuggestRequest {
  QueryText: string;
  MaxResults?: number;
  MaxQueryRefinements?: number;
  BiasPosition?: Array<number>;
  Filter?: SuggestFilter;
  AdditionalFeatures?: Array<string>;
  Language?: string;
  PoliticalView?: string;
  IntendedUse?: string;
  Key?: string;
}
export interface SuggestResponse {
  PricingBucket: string;
  ResultItems?: Array<SuggestResultItem>;
  QueryRefinements?: Array<QueryRefinement>;
}
export interface SuggestResultItem {
  Title: string;
  SuggestResultItemType: string;
  Place?: SuggestPlaceResult;
  Query?: SuggestQueryResult;
  Highlights?: SuggestHighlights;
}
export type SuggestResultItemList = Array<SuggestResultItem>;
export type SuggestResultItemType = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface TimeZone {
  Name: string;
  Offset?: string;
  OffsetSeconds?: number;
}
export type Token = string;

export type TypePlacement = string;

export type TypeSeparator = string;

export interface UspsZip {
  ZipClassificationCode?: string;
}
export interface UspsZipPlus4 {
  RecordTypeCode?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: string;
  readonly FieldList: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type ZipClassificationCode = string;

export declare namespace Autocomplete {
  export type Input = AutocompleteRequest;
  export type Output = AutocompleteResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Geocode {
  export type Input = GeocodeRequest;
  export type Output = GeocodeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPlace {
  export type Input = GetPlaceRequest;
  export type Output = GetPlaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReverseGeocode {
  export type Input = ReverseGeocodeRequest;
  export type Output = ReverseGeocodeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchNearby {
  export type Input = SearchNearbyRequest;
  export type Output = SearchNearbyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchText {
  export type Input = SearchTextRequest;
  export type Output = SearchTextResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Suggest {
  export type Input = SuggestRequest;
  export type Output = SuggestResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type GeoPlacesErrors =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
