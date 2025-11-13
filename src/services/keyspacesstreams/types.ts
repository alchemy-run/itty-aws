import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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

export declare class KeyspacesStreams extends AWSServiceClient {
  getRecords(
    input: GetRecordsInput,
  ): Effect.Effect<
    GetRecordsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getShardIterator(
    input: GetShardIteratorInput,
  ): Effect.Effect<
    GetShardIteratorOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getStream(
    input: GetStreamInput,
  ): Effect.Effect<
    GetStreamOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listStreams(
    input: ListStreamsInput,
  ): Effect.Effect<
    ListStreamsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Keyspacesstreams extends KeyspacesStreams {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type KeyspacesstreamsDate = Date | string;

export interface GetRecordsInput {
  shardIterator: string;
  maxResults?: number;
}
export interface GetRecordsOutput {
  changeRecords?: Array<KeyspacesstreamsRecord>;
  nextShardIterator?: string;
}
export interface GetShardIteratorInput {
  streamArn: string;
  shardId: string;
  shardIteratorType: ShardIteratorType;
  sequenceNumber?: string;
}
export interface GetShardIteratorOutput {
  shardIterator?: string;
}
export interface GetStreamInput {
  streamArn: string;
  maxResults?: number;
  shardFilter?: ShardFilter;
  nextToken?: string;
}
export interface GetStreamOutput {
  streamArn: string;
  streamLabel: string;
  streamStatus: StreamStatus;
  streamViewType: StreamViewType;
  creationRequestDateTime: Date | string;
  keyspaceName: string;
  tableName: string;
  shards?: Array<Shard>;
  nextToken?: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type KeyspaceName = string;

export interface KeyspacesCell {
  value?: KeyspacesCellValue;
  metadata?: KeyspacesMetadata;
}
export type KeyspacesCellList = Array<KeyspacesCell>;
export type KeyspacesCellMap = Array<KeyspacesCellMapDefinition>;
export interface KeyspacesCellMapDefinition {
  key?: KeyspacesCellValue;
  value?: KeyspacesCellValue;
  metadata?: KeyspacesMetadata;
}
export type KeyspacesCells = Record<string, KeyspacesCell>;
interface _KeyspacesCellValue {
  asciiT?: string;
  bigintT?: string;
  blobT?: Uint8Array | string;
  boolT?: boolean;
  counterT?: string;
  dateT?: string;
  decimalT?: string;
  doubleT?: string;
  floatT?: string;
  inetT?: string;
  intT?: string;
  listT?: Array<KeyspacesCell>;
  mapT?: Array<KeyspacesCellMapDefinition>;
  setT?: Array<KeyspacesCell>;
  smallintT?: string;
  textT?: string;
  timeT?: string;
  timestampT?: string;
  timeuuidT?: string;
  tinyintT?: string;
  tupleT?: Array<KeyspacesCell>;
  uuidT?: string;
  varcharT?: string;
  varintT?: string;
  udtT?: Record<string, KeyspacesCell>;
}

export type KeyspacesCellValue =
  | (_KeyspacesCellValue & { asciiT: string })
  | (_KeyspacesCellValue & { bigintT: string })
  | (_KeyspacesCellValue & { blobT: Uint8Array | string })
  | (_KeyspacesCellValue & { boolT: boolean })
  | (_KeyspacesCellValue & { counterT: string })
  | (_KeyspacesCellValue & { dateT: string })
  | (_KeyspacesCellValue & { decimalT: string })
  | (_KeyspacesCellValue & { doubleT: string })
  | (_KeyspacesCellValue & { floatT: string })
  | (_KeyspacesCellValue & { inetT: string })
  | (_KeyspacesCellValue & { intT: string })
  | (_KeyspacesCellValue & { listT: Array<KeyspacesCell> })
  | (_KeyspacesCellValue & { mapT: Array<KeyspacesCellMapDefinition> })
  | (_KeyspacesCellValue & { setT: Array<KeyspacesCell> })
  | (_KeyspacesCellValue & { smallintT: string })
  | (_KeyspacesCellValue & { textT: string })
  | (_KeyspacesCellValue & { timeT: string })
  | (_KeyspacesCellValue & { timestampT: string })
  | (_KeyspacesCellValue & { timeuuidT: string })
  | (_KeyspacesCellValue & { tinyintT: string })
  | (_KeyspacesCellValue & { tupleT: Array<KeyspacesCell> })
  | (_KeyspacesCellValue & { uuidT: string })
  | (_KeyspacesCellValue & { varcharT: string })
  | (_KeyspacesCellValue & { varintT: string })
  | (_KeyspacesCellValue & { udtT: Record<string, KeyspacesCell> });
export type KeyspacesKeysMap = Record<string, KeyspacesCellValue>;
export interface KeyspacesMetadata {
  expirationTime?: string;
  writeTime?: string;
}
export interface KeyspacesRow {
  valueCells?: Record<string, KeyspacesCell>;
  staticCells?: Record<string, KeyspacesCell>;
  rowMetadata?: KeyspacesMetadata;
}
export type KeyspacesUdtMap = Record<string, KeyspacesCell>;
export interface ListStreamsInput {
  keyspaceName?: string;
  tableName?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListStreamsOutput {
  streams?: Array<KeyspacesstreamsStream>;
  nextToken?: string;
}
export type OriginType = "USER" | "REPLICATION" | "TTL";
export interface KeyspacesstreamsRecord {
  eventVersion?: string;
  createdAt?: Date | string;
  origin?: OriginType;
  partitionKeys?: Record<string, KeyspacesCellValue>;
  clusteringKeys?: Record<string, KeyspacesCellValue>;
  newImage?: KeyspacesRow;
  oldImage?: KeyspacesRow;
  sequenceNumber?: string;
}
export type RecordList = Array<KeyspacesstreamsRecord>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SequenceNumber = string;

export interface SequenceNumberRange {
  startingSequenceNumber?: string;
  endingSequenceNumber?: string;
}
export interface Shard {
  shardId?: string;
  sequenceNumberRange?: SequenceNumberRange;
  parentShardIds?: Array<string>;
}
export type ShardDescriptionList = Array<Shard>;
export interface ShardFilter {
  type?: ShardFilterType;
  shardId?: string;
}
export type ShardFilterType = "CHILD_SHARDS";
export type ShardId = string;

export type ShardIdList = Array<string>;
export type ShardIdToken = string;

export type ShardIterator = string;

export type ShardIteratorType =
  | "TRIM_HORIZON"
  | "LATEST"
  | "AT_SEQUENCE_NUMBER"
  | "AFTER_SEQUENCE_NUMBER";
export interface KeyspacesstreamsStream {
  streamArn: string;
  keyspaceName: string;
  tableName: string;
  streamLabel: string;
}
export type StreamArn = string;

export type StreamArnToken = string;

export type StreamList = Array<KeyspacesstreamsStream>;
export type StreamStatus = "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
export type StreamViewType =
  | "NEW_IMAGE"
  | "OLD_IMAGE"
  | "NEW_AND_OLD_IMAGES"
  | "KEYS_ONLY";
export type TableName = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly errorCode?: ValidationExceptionType;
}> {}
export type ValidationExceptionType =
  | "InvalidFormat"
  | "TrimmedDataAccess"
  | "ExpiredIterator"
  | "ExpiredNextToken";
export declare namespace GetRecords {
  export type Input = GetRecordsInput;
  export type Output = GetRecordsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetShardIterator {
  export type Input = GetShardIteratorInput;
  export type Output = GetShardIteratorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStream {
  export type Input = GetStreamInput;
  export type Output = GetStreamOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsInput;
  export type Output = ListStreamsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type KeyspacesStreamsErrors =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
