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
  ValidationException,
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
  | ValidationException
  | AccessDeniedException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class ConnectContactLens extends AWSServiceClient {
  listRealtimeContactAnalysisSegments(
    input: ListRealtimeContactAnalysisSegmentsRequest,
  ): Effect.Effect<
    ListRealtimeContactAnalysisSegmentsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface Categories {
  MatchedCategories: Array<string>;
  MatchedDetails: Record<string, CategoryDetails>;
}
export interface CategoryDetails {
  PointsOfInterest: Array<PointOfInterest>;
}
export type CategoryName = string;

export type CharacterOffset = number;

export interface CharacterOffsets {
  BeginOffsetChar: number;
  EndOffsetChar: number;
}
export type ContactId = string;

export type InstanceId = string;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export interface IssueDetected {
  CharacterOffsets: CharacterOffsets;
}
export type IssuesDetected = Array<IssueDetected>;
export interface ListRealtimeContactAnalysisSegmentsRequest {
  InstanceId: string;
  ContactId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRealtimeContactAnalysisSegmentsResponse {
  Segments: Array<RealtimeContactAnalysisSegment>;
  NextToken?: string;
}
export type MatchedCategories = Array<string>;
export type MatchedDetails = Record<string, CategoryDetails>;
export type MaxResults = number;

export type Message = string;

export type NextToken = string;

export type OffsetMillis = number;

export type ParticipantId = string;

export type ParticipantRole = string;

export interface PointOfInterest {
  BeginOffsetMillis: number;
  EndOffsetMillis: number;
}
export type PointsOfInterest = Array<PointOfInterest>;
export interface PostContactSummary {
  Content?: string;
  Status: PostContactSummaryStatus;
  FailureCode?: PostContactSummaryFailureCode;
}
export type PostContactSummaryContent = string;

export type PostContactSummaryFailureCode =
  | "QUOTA_EXCEEDED"
  | "INSUFFICIENT_CONVERSATION_CONTENT"
  | "FAILED_SAFETY_GUIDELINES"
  | "INVALID_ANALYSIS_CONFIGURATION"
  | "INTERNAL_ERROR";
export type PostContactSummaryStatus = "FAILED" | "COMPLETED";
export interface RealtimeContactAnalysisSegment {
  Transcript?: Transcript;
  Categories?: Categories;
  PostContactSummary?: PostContactSummary;
}
export type RealtimeContactAnalysisSegments =
  Array<RealtimeContactAnalysisSegment>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type SentimentValue = "POSITIVE" | "NEUTRAL" | "NEGATIVE";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface Transcript {
  Id: string;
  ParticipantId: string;
  ParticipantRole: string;
  Content: string;
  BeginOffsetMillis: number;
  EndOffsetMillis: number;
  Sentiment?: SentimentValue;
  IssuesDetected?: Array<IssueDetected>;
}
export type TranscriptContent = string;

export type TranscriptId = string;

export declare namespace ListRealtimeContactAnalysisSegments {
  export type Input = ListRealtimeContactAnalysisSegmentsRequest;
  export type Output = ListRealtimeContactAnalysisSegmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
