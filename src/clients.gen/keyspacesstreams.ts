import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetRecordsInput extends Schema.Class<GetRecordsInput>("GetRecordsInput")({shardIterator: Schema.String, maxResults: Schema.optional(Schema.Number)}) {}
export class GetShardIteratorInput extends Schema.Class<GetShardIteratorInput>("GetShardIteratorInput")({streamArn: Schema.String, shardId: Schema.String, shardIteratorType: Schema.String, sequenceNumber: Schema.optional(Schema.String)}) {}
export class ListStreamsInput extends Schema.Class<ListStreamsInput>("ListStreamsInput")({keyspaceName: Schema.optional(Schema.String), tableName: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ShardFilter extends Schema.Class<ShardFilter>("ShardFilter")({type: Schema.optional(Schema.String), shardId: Schema.optional(Schema.String)}) {}
export class GetShardIteratorOutput extends Schema.Class<GetShardIteratorOutput>("GetShardIteratorOutput")({shardIterator: Schema.optional(Schema.String)}) {}
export class GetStreamInput extends Schema.Class<GetStreamInput>("GetStreamInput")({streamArn: Schema.String, maxResults: Schema.optional(Schema.Number), shardFilter: Schema.optional(ShardFilter), nextToken: Schema.optional(Schema.String)}) {}
export class Stream extends Schema.Class<Stream>("Stream")({streamArn: Schema.String, keyspaceName: Schema.String, tableName: Schema.String, streamLabel: Schema.String}) {}
export const StreamList = Schema.Array(Stream);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ListStreamsOutput extends Schema.Class<ListStreamsOutput>("ListStreamsOutput")({streams: Schema.optional(StreamList), nextToken: Schema.optional(Schema.String)}) {}
export const ShardIdList = Schema.Array(Schema.String);
export class KeyspacesMetadata extends Schema.Class<KeyspacesMetadata>("KeyspacesMetadata")({expirationTime: Schema.optional(Schema.String), writeTime: Schema.optional(Schema.String)}) {}
export class KeyspacesCell extends Schema.Class<KeyspacesCell>("KeyspacesCell")({value: Schema.optional(Schema.suspend(() => KeyspacesCellValue)), metadata: Schema.optional(KeyspacesMetadata)}) {}
export const KeyspacesCells = Schema.Record({key: Schema.String, value: KeyspacesCell});
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class KeyspacesRow extends Schema.Class<KeyspacesRow>("KeyspacesRow")({valueCells: Schema.optional(KeyspacesCells), staticCells: Schema.optional(KeyspacesCells), rowMetadata: Schema.optional(KeyspacesMetadata)}) {}
export class SequenceNumberRange extends Schema.Class<SequenceNumberRange>("SequenceNumberRange")({startingSequenceNumber: Schema.optional(Schema.String), endingSequenceNumber: Schema.optional(Schema.String)}) {}
export const KeyspacesCellList = Schema.Array(Schema.suspend((): Schema.Schema<KeyspacesCell> => KeyspacesCell));
export class KeyspacesCellMapDefinition extends Schema.Class<KeyspacesCellMapDefinition>("KeyspacesCellMapDefinition")({key: Schema.optional(Schema.suspend(() => KeyspacesCellValue)), value: Schema.optional(Schema.suspend(() => KeyspacesCellValue)), metadata: Schema.optional(KeyspacesMetadata)}) {}
export const KeyspacesCellMap = Schema.Array(Schema.suspend((): Schema.Schema<KeyspacesCellMapDefinition> => KeyspacesCellMapDefinition));
export const KeyspacesUdtMap = Schema.Record({key: Schema.String, value: KeyspacesCell});
export class Shard extends Schema.Class<Shard>("Shard")({shardId: Schema.optional(Schema.String), sequenceNumberRange: Schema.optional(SequenceNumberRange), parentShardIds: Schema.optional(ShardIdList)}) {}
export const ShardDescriptionList = Schema.Array(Shard);
export const KeyspacesCellValue = Schema.Union(Schema.String, Schema.String, StreamBody(), Schema.Boolean, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.suspend(() => KeyspacesCellList), Schema.suspend(() => KeyspacesCellMap), Schema.suspend(() => KeyspacesCellList), Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.suspend(() => KeyspacesCellList), Schema.String, Schema.String, Schema.String, Schema.suspend(() => KeyspacesUdtMap));
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class GetStreamOutput extends Schema.Class<GetStreamOutput>("GetStreamOutput")({streamArn: Schema.String, streamLabel: Schema.String, streamStatus: Schema.String, streamViewType: Schema.String, creationRequestDateTime: Schema.Date, keyspaceName: Schema.String, tableName: Schema.String, shards: Schema.optional(ShardDescriptionList), nextToken: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String)}) {}
export const KeyspacesKeysMap = Schema.Record({key: Schema.String, value: KeyspacesCellValue});
export class Record extends Schema.Class<Record>("Record")({eventVersion: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), origin: Schema.optional(Schema.String), partitionKeys: Schema.optional(KeyspacesKeysMap), clusteringKeys: Schema.optional(KeyspacesKeysMap), newImage: Schema.optional(KeyspacesRow), oldImage: Schema.optional(KeyspacesRow), sequenceNumber: Schema.optional(Schema.String)}) {}
export const RecordList = Schema.Array(Record);
export class GetRecordsOutput extends Schema.Class<GetRecordsOutput>("GetRecordsOutput")({changeRecords: Schema.optional(RecordList), nextShardIterator: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const getShardIterator = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetShardIterator" }, GetShardIteratorInput, GetShardIteratorOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getStream = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetStream" }, GetStreamInput, GetStreamOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listStreams = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.ListStreams" }, ListStreamsInput, ListStreamsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRecords = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetRecords" }, GetRecordsInput, GetRecordsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
