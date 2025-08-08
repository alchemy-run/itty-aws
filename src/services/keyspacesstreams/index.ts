import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { AwsJson10Protocol } from "../../protocols/awsjson1_0.js";

export class KeyspacesStreams extends AWSServiceClient {
  constructor(cfg: any) {
    super("keyspacesstreams", new AwsJson10Protocol(), cfg);
  }

  getRecords(
    input: GetRecordsInput,
  ): Effect.Effect<
    GetRecordsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("GetRecords", input);
  }
  getShardIterator(
    input: GetShardIteratorInput,
  ): Effect.Effect<
    GetShardIteratorOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("GetShardIterator", input);
  }
  getStream(
    input: GetStreamInput,
  ): Effect.Effect<
    GetStreamOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("GetStream", input);
  }
  listStreams(
    input: ListStreamsInput,
  ): Effect.Effect<
    ListStreamsOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("ListStreams", input);
  }
}

export class Keyspacesstreams extends KeyspacesStreams {}

export default KeyspacesStreams;

export declare class AccessDeniedException extends EffectData.TaggedError(
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
export declare class InternalServerException extends EffectData.TaggedError(
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

export type KeyspacesCellValue = (_KeyspacesCellValue & { asciiT: string }) | (_KeyspacesCellValue & { bigintT: string }) | (_KeyspacesCellValue & { blobT: Uint8Array | string }) | (_KeyspacesCellValue & { boolT: boolean }) | (_KeyspacesCellValue & { counterT: string }) | (_KeyspacesCellValue & { dateT: string }) | (_KeyspacesCellValue & { decimalT: string }) | (_KeyspacesCellValue & { doubleT: string }) | (_KeyspacesCellValue & { floatT: string }) | (_KeyspacesCellValue & { inetT: string }) | (_KeyspacesCellValue & { intT: string }) | (_KeyspacesCellValue & { listT: Array<KeyspacesCell> }) | (_KeyspacesCellValue & { mapT: Array<KeyspacesCellMapDefinition> }) | (_KeyspacesCellValue & { setT: Array<KeyspacesCell> }) | (_KeyspacesCellValue & { smallintT: string }) | (_KeyspacesCellValue & { textT: string }) | (_KeyspacesCellValue & { timeT: string }) | (_KeyspacesCellValue & { timestampT: string }) | (_KeyspacesCellValue & { timeuuidT: string }) | (_KeyspacesCellValue & { tinyintT: string }) | (_KeyspacesCellValue & { tupleT: Array<KeyspacesCell> }) | (_KeyspacesCellValue & { uuidT: string }) | (_KeyspacesCellValue & { varcharT: string }) | (_KeyspacesCellValue & { varintT: string }) | (_KeyspacesCellValue & { udtT: Record<string, KeyspacesCell> });
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
  streams?: Array<Stream>;
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
export declare class ResourceNotFoundException extends EffectData.TaggedError(
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

export type ShardIteratorType = "TRIM_HORIZON" | "LATEST" | "AT_SEQUENCE_NUMBER" | "AFTER_SEQUENCE_NUMBER";
export interface Stream {
  streamArn: string;
  keyspaceName: string;
  tableName: string;
  streamLabel: string;
}
export type StreamArn = string;

export type StreamArnToken = string;

export type StreamList = Array<Stream>;
export type StreamStatus = "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
export type StreamViewType = "NEW_IMAGE" | "OLD_IMAGE" | "NEW_AND_OLD_IMAGES" | "KEYS_ONLY";
export type TableName = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly errorCode?: ValidationExceptionType;
}> {}
export type ValidationExceptionType = "InvalidFormat" | "TrimmedDataAccess" | "ExpiredIterator" | "ExpiredNextToken";
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

