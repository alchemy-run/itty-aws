import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class BeginTransactionRequest extends Schema.Class<BeginTransactionRequest>("BeginTransactionRequest")({resourceArn: Schema.String, secretArn: Schema.String, database: Schema.optional(Schema.String), schema: Schema.optional(Schema.String)}) {}
export class CommitTransactionRequest extends Schema.Class<CommitTransactionRequest>("CommitTransactionRequest")({resourceArn: Schema.String, secretArn: Schema.String, transactionId: Schema.String}) {}
export class ExecuteSqlRequest extends Schema.Class<ExecuteSqlRequest>("ExecuteSqlRequest")({dbClusterOrInstanceArn: Schema.String, awsSecretStoreArn: Schema.String, sqlStatements: Schema.String, database: Schema.optional(Schema.String), schema: Schema.optional(Schema.String)}) {}
export class RollbackTransactionRequest extends Schema.Class<RollbackTransactionRequest>("RollbackTransactionRequest")({resourceArn: Schema.String, secretArn: Schema.String, transactionId: Schema.String}) {}
export class ResultSetOptions extends Schema.Class<ResultSetOptions>("ResultSetOptions")({decimalReturnType: Schema.optional(Schema.String), longReturnType: Schema.optional(Schema.String)}) {}
export class BeginTransactionResponse extends Schema.Class<BeginTransactionResponse>("BeginTransactionResponse")({transactionId: Schema.optional(Schema.String)}) {}
export class CommitTransactionResponse extends Schema.Class<CommitTransactionResponse>("CommitTransactionResponse")({transactionStatus: Schema.optional(Schema.String)}) {}
export const BooleanArray = Schema.Array(Schema.Boolean);
export const LongArray = Schema.Array(Schema.Number);
export const DoubleArray = Schema.Array(Schema.Number);
export const StringArray = Schema.Array(Schema.String);
export const ArrayValue = Schema.Union(BooleanArray, LongArray, DoubleArray, StringArray, Schema.suspend(() => ArrayOfArray));
export const Field = Schema.Union(Schema.Boolean, Schema.Boolean, Schema.Number, Schema.Number, Schema.String, StreamBody(), ArrayValue);
export class SqlParameter extends Schema.Class<SqlParameter>("SqlParameter")({name: Schema.optional(Schema.String), value: Schema.optional(Field), typeHint: Schema.optional(Schema.String)}) {}
export const SqlParametersList = Schema.Array(SqlParameter);
export class ExecuteStatementRequest extends Schema.Class<ExecuteStatementRequest>("ExecuteStatementRequest")({resourceArn: Schema.String, secretArn: Schema.String, sql: Schema.String, database: Schema.optional(Schema.String), schema: Schema.optional(Schema.String), parameters: Schema.optional(SqlParametersList), transactionId: Schema.optional(Schema.String), includeResultMetadata: Schema.optional(Schema.Boolean), continueAfterTimeout: Schema.optional(Schema.Boolean), resultSetOptions: Schema.optional(ResultSetOptions), formatRecordsAs: Schema.optional(Schema.String)}) {}
export class RollbackTransactionResponse extends Schema.Class<RollbackTransactionResponse>("RollbackTransactionResponse")({transactionStatus: Schema.optional(Schema.String)}) {}
export const ArrayOfArray = Schema.Array(Schema.suspend(() => ArrayValue));
export const FieldList = Schema.Array(Field);
export const SqlRecords = Schema.Array(FieldList);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({message: Schema.optional(Schema.String)}) {}
export class DatabaseUnavailableException extends Schema.Class<DatabaseUnavailableException>("DatabaseUnavailableException")({}) {}
export class DatabaseErrorException extends Schema.Class<DatabaseErrorException>("DatabaseErrorException")({message: Schema.optional(Schema.String)}) {}
export const SqlParameterSets = Schema.Array(SqlParametersList);
export class ColumnMetadata extends Schema.Class<ColumnMetadata>("ColumnMetadata")({name: Schema.optional(Schema.String), type: Schema.optional(Schema.Number), typeName: Schema.optional(Schema.String), label: Schema.optional(Schema.String), schemaName: Schema.optional(Schema.String), tableName: Schema.optional(Schema.String), isAutoIncrement: Schema.optional(Schema.Boolean), isSigned: Schema.optional(Schema.Boolean), isCurrency: Schema.optional(Schema.Boolean), isCaseSensitive: Schema.optional(Schema.Boolean), nullable: Schema.optional(Schema.Number), precision: Schema.optional(Schema.Number), scale: Schema.optional(Schema.Number), arrayBaseColumnType: Schema.optional(Schema.Number)}) {}
export const Metadata = Schema.Array(ColumnMetadata);
export class ResultSetMetadata extends Schema.Class<ResultSetMetadata>("ResultSetMetadata")({columnCount: Schema.optional(Schema.Number), columnMetadata: Schema.optional(Metadata)}) {}
export class BatchExecuteStatementRequest extends Schema.Class<BatchExecuteStatementRequest>("BatchExecuteStatementRequest")({resourceArn: Schema.String, secretArn: Schema.String, sql: Schema.String, database: Schema.optional(Schema.String), schema: Schema.optional(Schema.String), parameterSets: Schema.optional(SqlParameterSets), transactionId: Schema.optional(Schema.String)}) {}
export class DatabaseNotFoundException extends Schema.Class<DatabaseNotFoundException>("DatabaseNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ForbiddenException extends Schema.Class<ForbiddenException>("ForbiddenException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerErrorException extends Schema.Class<InternalServerErrorException>("InternalServerErrorException")({}) {}
export const ArrayValueList = Schema.Array(Schema.suspend(() => Value));
export class ExecuteStatementResponse extends Schema.Class<ExecuteStatementResponse>("ExecuteStatementResponse")({records: Schema.optional(SqlRecords), columnMetadata: Schema.optional(Metadata), numberOfRecordsUpdated: Schema.optional(Schema.Number), generatedFields: Schema.optional(FieldList), formattedRecords: Schema.optional(Schema.String)}) {}
export class HttpEndpointNotEnabledException extends Schema.Class<HttpEndpointNotEnabledException>("HttpEndpointNotEnabledException")({message: Schema.optional(Schema.String)}) {}
export class DatabaseResumingException extends Schema.Class<DatabaseResumingException>("DatabaseResumingException")({message: Schema.optional(Schema.String)}) {}
export class InvalidResourceStateException extends Schema.Class<InvalidResourceStateException>("InvalidResourceStateException")({message: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableError extends Schema.Class<ServiceUnavailableError>("ServiceUnavailableError")({}) {}
export class StructValue extends Schema.Class<StructValue>("StructValue")({attributes: Schema.optional(Schema.suspend(() => ArrayValueList))}) {}
export class InvalidSecretException extends Schema.Class<InvalidSecretException>("InvalidSecretException")({message: Schema.optional(Schema.String)}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({message: Schema.optional(Schema.String)}) {}
export const Value = Schema.Union(Schema.Boolean, Schema.Boolean, Schema.Number, Schema.Number, Schema.Number, Schema.Number, Schema.String, StreamBody(), Schema.suspend(() => ArrayValueList), Schema.suspend((): Schema.Schema<StructValue> => StructValue));
export const Row = Schema.Array(Schema.suspend(() => Value));
export class UpdateResult extends Schema.Class<UpdateResult>("UpdateResult")({generatedFields: Schema.optional(FieldList)}) {}
export const UpdateResults = Schema.Array(UpdateResult);
export class Record extends Schema.Class<Record>("Record")({values: Schema.optional(Row)}) {}
export const Records = Schema.Array(Record);
export class BatchExecuteStatementResponse extends Schema.Class<BatchExecuteStatementResponse>("BatchExecuteStatementResponse")({updateResults: Schema.optional(UpdateResults)}) {}
export class SecretsErrorException extends Schema.Class<SecretsErrorException>("SecretsErrorException")({message: Schema.optional(Schema.String)}) {}
export class StatementTimeoutException extends Schema.Class<StatementTimeoutException>("StatementTimeoutException")({message: Schema.optional(Schema.String), dbConnectionId: Schema.optional(Schema.Number)}) {}
export class TransactionNotFoundException extends Schema.Class<TransactionNotFoundException>("TransactionNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ResultFrame extends Schema.Class<ResultFrame>("ResultFrame")({resultSetMetadata: Schema.optional(ResultSetMetadata), records: Schema.optional(Records)}) {}
export class SqlStatementResult extends Schema.Class<SqlStatementResult>("SqlStatementResult")({resultFrame: Schema.optional(ResultFrame), numberOfRecordsUpdated: Schema.optional(Schema.Number)}) {}
export const SqlStatementResults = Schema.Array(SqlStatementResult);
export class ExecuteSqlResponse extends Schema.Class<ExecuteSqlResponse>("ExecuteSqlResponse")({sqlStatementResults: Schema.optional(SqlStatementResults)}) {}
export class UnsupportedResultException extends Schema.Class<UnsupportedResultException>("UnsupportedResultException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class DatabaseErrorExceptionError extends Schema.TaggedError<DatabaseErrorExceptionError>()("DatabaseErrorException", DatabaseErrorException.fields) {};
export class DatabaseNotFoundExceptionError extends Schema.TaggedError<DatabaseNotFoundExceptionError>()("DatabaseNotFoundException", DatabaseNotFoundException.fields) {};
export class DatabaseUnavailableExceptionError extends Schema.TaggedError<DatabaseUnavailableExceptionError>()("DatabaseUnavailableException", DatabaseUnavailableException.fields) {};
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class HttpEndpointNotEnabledExceptionError extends Schema.TaggedError<HttpEndpointNotEnabledExceptionError>()("HttpEndpointNotEnabledException", HttpEndpointNotEnabledException.fields) {};
export class InternalServerErrorExceptionError extends Schema.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class DatabaseResumingExceptionError extends Schema.TaggedError<DatabaseResumingExceptionError>()("DatabaseResumingException", DatabaseResumingException.fields) {};
export class InvalidResourceStateExceptionError extends Schema.TaggedError<InvalidResourceStateExceptionError>()("InvalidResourceStateException", InvalidResourceStateException.fields) {};
export class InvalidSecretExceptionError extends Schema.TaggedError<InvalidSecretExceptionError>()("InvalidSecretException", InvalidSecretException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class SecretsErrorExceptionError extends Schema.TaggedError<SecretsErrorExceptionError>()("SecretsErrorException", SecretsErrorException.fields) {};
export class ServiceUnavailableErrorError extends Schema.TaggedError<ServiceUnavailableErrorError>()("ServiceUnavailableError", ServiceUnavailableError.fields) {};
export class StatementTimeoutExceptionError extends Schema.TaggedError<StatementTimeoutExceptionError>()("StatementTimeoutException", StatementTimeoutException.fields) {};
export class TransactionNotFoundExceptionError extends Schema.TaggedError<TransactionNotFoundExceptionError>()("TransactionNotFoundException", TransactionNotFoundException.fields) {};
export class UnsupportedResultExceptionError extends Schema.TaggedError<UnsupportedResultExceptionError>()("UnsupportedResultException", UnsupportedResultException.fields) {};

//# Operations
export const rollbackTransaction = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/RollbackTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.RollbackTransaction" }, RollbackTransactionRequest, RollbackTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, NotFoundExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchExecuteStatement = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/BatchExecute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BatchExecuteStatement" }, BatchExecuteStatementRequest, BatchExecuteStatementResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const beginTransaction = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/BeginTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BeginTransaction" }, BeginTransactionRequest, BeginTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const commitTransaction = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/CommitTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.CommitTransaction" }, CommitTransactionRequest, CommitTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, NotFoundExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeSql = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/ExecuteSql", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteSql" }, ExecuteSqlRequest, ExecuteSqlResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, ServiceUnavailableErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeStatement = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-08-01", uri: "/Execute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteStatement" }, ExecuteStatementRequest, ExecuteStatementResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError, UnsupportedResultExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
