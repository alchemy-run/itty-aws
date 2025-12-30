import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class BeginTransactionRequest extends S.Class<BeginTransactionRequest>("BeginTransactionRequest")({resourceArn: S.String, secretArn: S.String, database: S.optional(S.String), schema: S.optional(S.String)}) {}
export class CommitTransactionRequest extends S.Class<CommitTransactionRequest>("CommitTransactionRequest")({resourceArn: S.String, secretArn: S.String, transactionId: S.String}) {}
export class ExecuteSqlRequest extends S.Class<ExecuteSqlRequest>("ExecuteSqlRequest")({dbClusterOrInstanceArn: S.String, awsSecretStoreArn: S.String, sqlStatements: S.String, database: S.optional(S.String), schema: S.optional(S.String)}) {}
export class RollbackTransactionRequest extends S.Class<RollbackTransactionRequest>("RollbackTransactionRequest")({resourceArn: S.String, secretArn: S.String, transactionId: S.String}) {}
export class ResultSetOptions extends S.Class<ResultSetOptions>("ResultSetOptions")({decimalReturnType: S.optional(S.String), longReturnType: S.optional(S.String)}) {}
export class BeginTransactionResponse extends S.Class<BeginTransactionResponse>("BeginTransactionResponse")({transactionId: S.optional(S.String)}) {}
export class CommitTransactionResponse extends S.Class<CommitTransactionResponse>("CommitTransactionResponse")({transactionStatus: S.optional(S.String)}) {}
export const BooleanArray = S.Array(S.Boolean);
export const LongArray = S.Array(S.Number);
export const DoubleArray = S.Array(S.Number);
export const StringArray = S.Array(S.String);
export const ArrayValue = S.Union(BooleanArray, LongArray, DoubleArray, StringArray, S.suspend(() => ArrayOfArray));
export const Field = S.Union(S.Boolean, S.Boolean, S.Number, S.Number, S.String, H.StreamBody(), ArrayValue);
export class SqlParameter extends S.Class<SqlParameter>("SqlParameter")({name: S.optional(S.String), value: S.optional(Field), typeHint: S.optional(S.String)}) {}
export const SqlParametersList = S.Array(SqlParameter);
export class ExecuteStatementRequest extends S.Class<ExecuteStatementRequest>("ExecuteStatementRequest")({resourceArn: S.String, secretArn: S.String, sql: S.String, database: S.optional(S.String), schema: S.optional(S.String), parameters: S.optional(SqlParametersList), transactionId: S.optional(S.String), includeResultMetadata: S.optional(S.Boolean), continueAfterTimeout: S.optional(S.Boolean), resultSetOptions: S.optional(ResultSetOptions), formatRecordsAs: S.optional(S.String)}) {}
export class RollbackTransactionResponse extends S.Class<RollbackTransactionResponse>("RollbackTransactionResponse")({transactionStatus: S.optional(S.String)}) {}
export const ArrayOfArray = S.Array(S.suspend(() => ArrayValue));
export const FieldList = S.Array(Field);
export const SqlRecords = S.Array(FieldList);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class BadRequestException extends S.Class<BadRequestException>("BadRequestException")({message: S.optional(S.String)}) {}
export class DatabaseUnavailableException extends S.Class<DatabaseUnavailableException>("DatabaseUnavailableException")({}) {}
export class DatabaseErrorException extends S.Class<DatabaseErrorException>("DatabaseErrorException")({message: S.optional(S.String)}) {}
export const SqlParameterSets = S.Array(SqlParametersList);
export class ColumnMetadata extends S.Class<ColumnMetadata>("ColumnMetadata")({name: S.optional(S.String), type: S.optional(S.Number), typeName: S.optional(S.String), label: S.optional(S.String), schemaName: S.optional(S.String), tableName: S.optional(S.String), isAutoIncrement: S.optional(S.Boolean), isSigned: S.optional(S.Boolean), isCurrency: S.optional(S.Boolean), isCaseSensitive: S.optional(S.Boolean), nullable: S.optional(S.Number), precision: S.optional(S.Number), scale: S.optional(S.Number), arrayBaseColumnType: S.optional(S.Number)}) {}
export const Metadata = S.Array(ColumnMetadata);
export class ResultSetMetadata extends S.Class<ResultSetMetadata>("ResultSetMetadata")({columnCount: S.optional(S.Number), columnMetadata: S.optional(Metadata)}) {}
export class BatchExecuteStatementRequest extends S.Class<BatchExecuteStatementRequest>("BatchExecuteStatementRequest")({resourceArn: S.String, secretArn: S.String, sql: S.String, database: S.optional(S.String), schema: S.optional(S.String), parameterSets: S.optional(SqlParameterSets), transactionId: S.optional(S.String)}) {}
export class DatabaseNotFoundException extends S.Class<DatabaseNotFoundException>("DatabaseNotFoundException")({message: S.optional(S.String)}) {}
export class ForbiddenException extends S.Class<ForbiddenException>("ForbiddenException")({message: S.optional(S.String)}) {}
export class InternalServerErrorException extends S.Class<InternalServerErrorException>("InternalServerErrorException")({}) {}
export const ArrayValueList = S.Array(S.suspend(() => Value));
export class ExecuteStatementResponse extends S.Class<ExecuteStatementResponse>("ExecuteStatementResponse")({records: S.optional(SqlRecords), columnMetadata: S.optional(Metadata), numberOfRecordsUpdated: S.optional(S.Number), generatedFields: S.optional(FieldList), formattedRecords: S.optional(S.String)}) {}
export class HttpEndpointNotEnabledException extends S.Class<HttpEndpointNotEnabledException>("HttpEndpointNotEnabledException")({message: S.optional(S.String)}) {}
export class DatabaseResumingException extends S.Class<DatabaseResumingException>("DatabaseResumingException")({message: S.optional(S.String)}) {}
export class InvalidResourceStateException extends S.Class<InvalidResourceStateException>("InvalidResourceStateException")({message: S.optional(S.String)}) {}
export class ServiceUnavailableError extends S.Class<ServiceUnavailableError>("ServiceUnavailableError")({}) {}
export class StructValue extends S.Class<StructValue>("StructValue")({attributes: S.optional(S.suspend(() => ArrayValueList))}) {}
export class InvalidSecretException extends S.Class<InvalidSecretException>("InvalidSecretException")({message: S.optional(S.String)}) {}
export class NotFoundException extends S.Class<NotFoundException>("NotFoundException")({message: S.optional(S.String)}) {}
export const Value = S.Union(S.Boolean, S.Boolean, S.Number, S.Number, S.Number, S.Number, S.String, H.StreamBody(), S.suspend(() => ArrayValueList), S.suspend((): S.Schema<StructValue> => StructValue));
export const Row = S.Array(S.suspend(() => Value));
export class UpdateResult extends S.Class<UpdateResult>("UpdateResult")({generatedFields: S.optional(FieldList)}) {}
export const UpdateResults = S.Array(UpdateResult);
export class Record extends S.Class<Record>("Record")({values: S.optional(Row)}) {}
export const Records = S.Array(Record);
export class BatchExecuteStatementResponse extends S.Class<BatchExecuteStatementResponse>("BatchExecuteStatementResponse")({updateResults: S.optional(UpdateResults)}) {}
export class SecretsErrorException extends S.Class<SecretsErrorException>("SecretsErrorException")({message: S.optional(S.String)}) {}
export class StatementTimeoutException extends S.Class<StatementTimeoutException>("StatementTimeoutException")({message: S.optional(S.String), dbConnectionId: S.optional(S.Number)}) {}
export class TransactionNotFoundException extends S.Class<TransactionNotFoundException>("TransactionNotFoundException")({message: S.optional(S.String)}) {}
export class ResultFrame extends S.Class<ResultFrame>("ResultFrame")({resultSetMetadata: S.optional(ResultSetMetadata), records: S.optional(Records)}) {}
export class SqlStatementResult extends S.Class<SqlStatementResult>("SqlStatementResult")({resultFrame: S.optional(ResultFrame), numberOfRecordsUpdated: S.optional(S.Number)}) {}
export const SqlStatementResults = S.Array(SqlStatementResult);
export class ExecuteSqlResponse extends S.Class<ExecuteSqlResponse>("ExecuteSqlResponse")({sqlStatementResults: S.optional(SqlStatementResults)}) {}
export class UnsupportedResultException extends S.Class<UnsupportedResultException>("UnsupportedResultException")({message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BadRequestExceptionError extends S.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class DatabaseErrorExceptionError extends S.TaggedError<DatabaseErrorExceptionError>()("DatabaseErrorException", DatabaseErrorException.fields) {};
export class DatabaseNotFoundExceptionError extends S.TaggedError<DatabaseNotFoundExceptionError>()("DatabaseNotFoundException", DatabaseNotFoundException.fields) {};
export class DatabaseUnavailableExceptionError extends S.TaggedError<DatabaseUnavailableExceptionError>()("DatabaseUnavailableException", DatabaseUnavailableException.fields) {};
export class ForbiddenExceptionError extends S.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class HttpEndpointNotEnabledExceptionError extends S.TaggedError<HttpEndpointNotEnabledExceptionError>()("HttpEndpointNotEnabledException", HttpEndpointNotEnabledException.fields) {};
export class InternalServerErrorExceptionError extends S.TaggedError<InternalServerErrorExceptionError>()("InternalServerErrorException", InternalServerErrorException.fields) {};
export class DatabaseResumingExceptionError extends S.TaggedError<DatabaseResumingExceptionError>()("DatabaseResumingException", DatabaseResumingException.fields) {};
export class InvalidResourceStateExceptionError extends S.TaggedError<InvalidResourceStateExceptionError>()("InvalidResourceStateException", InvalidResourceStateException.fields) {};
export class InvalidSecretExceptionError extends S.TaggedError<InvalidSecretExceptionError>()("InvalidSecretException", InvalidSecretException.fields) {};
export class NotFoundExceptionError extends S.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class SecretsErrorExceptionError extends S.TaggedError<SecretsErrorExceptionError>()("SecretsErrorException", SecretsErrorException.fields) {};
export class ServiceUnavailableErrorError extends S.TaggedError<ServiceUnavailableErrorError>()("ServiceUnavailableError", ServiceUnavailableError.fields) {};
export class StatementTimeoutExceptionError extends S.TaggedError<StatementTimeoutExceptionError>()("StatementTimeoutException", StatementTimeoutException.fields) {};
export class TransactionNotFoundExceptionError extends S.TaggedError<TransactionNotFoundExceptionError>()("TransactionNotFoundException", TransactionNotFoundException.fields) {};
export class UnsupportedResultExceptionError extends S.TaggedError<UnsupportedResultExceptionError>()("UnsupportedResultException", UnsupportedResultException.fields) {};

//# Operations
export const rollbackTransaction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/RollbackTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.RollbackTransaction" }, RollbackTransactionRequest, RollbackTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, NotFoundExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchExecuteStatement = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/BatchExecute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BatchExecuteStatement" }, BatchExecuteStatementRequest, BatchExecuteStatementResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const beginTransaction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/BeginTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BeginTransaction" }, BeginTransactionRequest, BeginTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const commitTransaction = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/CommitTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.CommitTransaction" }, CommitTransactionRequest, CommitTransactionResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, NotFoundExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeSql = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/ExecuteSql", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteSql" }, ExecuteSqlRequest, ExecuteSqlResponse, [AccessDeniedExceptionError, BadRequestExceptionError, ForbiddenExceptionError, InternalServerErrorExceptionError, ServiceUnavailableErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const executeStatement = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/Execute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteStatement" }, ExecuteStatementRequest, ExecuteStatementResponse, [AccessDeniedExceptionError, BadRequestExceptionError, DatabaseErrorExceptionError, DatabaseNotFoundExceptionError, DatabaseResumingExceptionError, DatabaseUnavailableExceptionError, ForbiddenExceptionError, HttpEndpointNotEnabledExceptionError, InternalServerErrorExceptionError, InvalidResourceStateExceptionError, InvalidSecretExceptionError, SecretsErrorExceptionError, ServiceUnavailableErrorError, StatementTimeoutExceptionError, TransactionNotFoundExceptionError, UnsupportedResultExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
