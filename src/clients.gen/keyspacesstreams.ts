import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRecordsInput extends S.Class<GetRecordsInput>("GetRecordsInput")({shardIterator: S.String, maxResults: S.optional(S.Number)}) {}
export class GetShardIteratorInput extends S.Class<GetShardIteratorInput>("GetShardIteratorInput")({streamArn: S.String, shardId: S.String, shardIteratorType: S.String, sequenceNumber: S.optional(S.String)}) {}
export class ListStreamsInput extends S.Class<ListStreamsInput>("ListStreamsInput")({keyspaceName: S.optional(S.String), tableName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ShardFilter extends S.Class<ShardFilter>("ShardFilter")({type: S.optional(S.String), shardId: S.optional(S.String)}) {}
export class GetShardIteratorOutput extends S.Class<GetShardIteratorOutput>("GetShardIteratorOutput")({shardIterator: S.optional(S.String)}) {}
export class GetStreamInput extends S.Class<GetStreamInput>("GetStreamInput")({streamArn: S.String, maxResults: S.optional(S.Number), shardFilter: S.optional(ShardFilter), nextToken: S.optional(S.String)}) {}
export class Stream extends S.Class<Stream>("Stream")({streamArn: S.String, keyspaceName: S.String, tableName: S.String, streamLabel: S.String}) {}
export const StreamList = S.Array(Stream);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ListStreamsOutput extends S.Class<ListStreamsOutput>("ListStreamsOutput")({streams: S.optional(StreamList), nextToken: S.optional(S.String)}) {}
export const ShardIdList = S.Array(S.String);
export class KeyspacesMetadata extends S.Class<KeyspacesMetadata>("KeyspacesMetadata")({expirationTime: S.optional(S.String), writeTime: S.optional(S.String)}) {}
export class KeyspacesCell extends S.Class<KeyspacesCell>("KeyspacesCell")({value: S.optional(S.suspend(() => KeyspacesCellValue)), metadata: S.optional(KeyspacesMetadata)}) {}
export const KeyspacesCells = S.Record({key: S.String, value: KeyspacesCell});
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class KeyspacesRow extends S.Class<KeyspacesRow>("KeyspacesRow")({valueCells: S.optional(KeyspacesCells), staticCells: S.optional(KeyspacesCells), rowMetadata: S.optional(KeyspacesMetadata)}) {}
export class SequenceNumberRange extends S.Class<SequenceNumberRange>("SequenceNumberRange")({startingSequenceNumber: S.optional(S.String), endingSequenceNumber: S.optional(S.String)}) {}
export const KeyspacesCellList = S.Array(S.suspend((): S.Schema<KeyspacesCell> => KeyspacesCell));
export class KeyspacesCellMapDefinition extends S.Class<KeyspacesCellMapDefinition>("KeyspacesCellMapDefinition")({key: S.optional(S.suspend(() => KeyspacesCellValue)), value: S.optional(S.suspend(() => KeyspacesCellValue)), metadata: S.optional(KeyspacesMetadata)}) {}
export const KeyspacesCellMap = S.Array(S.suspend((): S.Schema<KeyspacesCellMapDefinition> => KeyspacesCellMapDefinition));
export const KeyspacesUdtMap = S.Record({key: S.String, value: KeyspacesCell});
export class Shard extends S.Class<Shard>("Shard")({shardId: S.optional(S.String), sequenceNumberRange: S.optional(SequenceNumberRange), parentShardIds: S.optional(ShardIdList)}) {}
export const ShardDescriptionList = S.Array(Shard);
export const KeyspacesCellValue = S.Union(S.String, S.String, H.StreamBody(), S.Boolean, S.String, S.String, S.String, S.String, S.String, S.String, S.String, S.suspend(() => KeyspacesCellList), S.suspend(() => KeyspacesCellMap), S.suspend(() => KeyspacesCellList), S.String, S.String, S.String, S.String, S.String, S.String, S.suspend(() => KeyspacesCellList), S.String, S.String, S.String, S.suspend(() => KeyspacesUdtMap));
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class GetStreamOutput extends S.Class<GetStreamOutput>("GetStreamOutput")({streamArn: S.String, streamLabel: S.String, streamStatus: S.String, streamViewType: S.String, creationRequestDateTime: S.Date, keyspaceName: S.String, tableName: S.String, shards: S.optional(ShardDescriptionList), nextToken: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export const KeyspacesKeysMap = S.Record({key: S.String, value: KeyspacesCellValue});
export class Record extends S.Class<Record>("Record")({eventVersion: S.optional(S.String), createdAt: S.optional(S.Date), origin: S.optional(S.String), partitionKeys: S.optional(KeyspacesKeysMap), clusteringKeys: S.optional(KeyspacesKeysMap), newImage: S.optional(KeyspacesRow), oldImage: S.optional(KeyspacesRow), sequenceNumber: S.optional(S.String)}) {}
export const RecordList = S.Array(Record);
export class GetRecordsOutput extends S.Class<GetRecordsOutput>("GetRecordsOutput")({changeRecords: S.optional(RecordList), nextShardIterator: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getShardIterator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetShardIterator" }, GetShardIteratorInput, GetShardIteratorOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getStream = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetStream" }, GetStreamInput, GetStreamOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listStreams = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.ListStreams" }, ListStreamsInput, ListStreamsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRecords = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetRecords" }, GetRecordsInput, GetRecordsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
