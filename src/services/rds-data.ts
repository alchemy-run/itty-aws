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
export type ArrayValue = typeof BooleanArray["Type"] | typeof LongArray["Type"] | typeof DoubleArray["Type"] | typeof StringArray["Type"] | ArrayOfArray;
export const ArrayValue = S.Union(BooleanArray, LongArray, DoubleArray, StringArray, S.suspend(() => ArrayOfArray)) as any as S.Schema<ArrayValue>;
export const Field = S.Union(S.Boolean, S.Boolean, S.Number, S.Number, S.String, H.StreamBody(), ArrayValue);
export class SqlParameter extends S.Class<SqlParameter>("SqlParameter")({name: S.optional(S.String), value: S.optional(Field), typeHint: S.optional(S.String)}) {}
export const SqlParametersList = S.Array(SqlParameter);
export class ExecuteStatementRequest extends S.Class<ExecuteStatementRequest>("ExecuteStatementRequest")({resourceArn: S.String, secretArn: S.String, sql: S.String, database: S.optional(S.String), schema: S.optional(S.String), parameters: S.optional(SqlParametersList), transactionId: S.optional(S.String), includeResultMetadata: S.optional(S.Boolean), continueAfterTimeout: S.optional(S.Boolean), resultSetOptions: S.optional(ResultSetOptions), formatRecordsAs: S.optional(S.String)}) {}
export class RollbackTransactionResponse extends S.Class<RollbackTransactionResponse>("RollbackTransactionResponse")({transactionStatus: S.optional(S.String)}) {}
export type ArrayOfArray = ArrayValue[];
export const ArrayOfArray = S.Array(S.suspend(() => ArrayValue)) as any as S.Schema<ArrayOfArray>;
export const FieldList = S.Array(Field);
export const SqlRecords = S.Array(FieldList);
export const SqlParameterSets = S.Array(SqlParametersList);
export class ColumnMetadata extends S.Class<ColumnMetadata>("ColumnMetadata")({name: S.optional(S.String), type: S.optional(S.Number), typeName: S.optional(S.String), label: S.optional(S.String), schemaName: S.optional(S.String), tableName: S.optional(S.String), isAutoIncrement: S.optional(S.Boolean), isSigned: S.optional(S.Boolean), isCurrency: S.optional(S.Boolean), isCaseSensitive: S.optional(S.Boolean), nullable: S.optional(S.Number), precision: S.optional(S.Number), scale: S.optional(S.Number), arrayBaseColumnType: S.optional(S.Number)}) {}
export const Metadata = S.Array(ColumnMetadata);
export class ResultSetMetadata extends S.Class<ResultSetMetadata>("ResultSetMetadata")({columnCount: S.optional(S.Number), columnMetadata: S.optional(Metadata)}) {}
export class BatchExecuteStatementRequest extends S.Class<BatchExecuteStatementRequest>("BatchExecuteStatementRequest")({resourceArn: S.String, secretArn: S.String, sql: S.String, database: S.optional(S.String), schema: S.optional(S.String), parameterSets: S.optional(SqlParameterSets), transactionId: S.optional(S.String)}) {}
export type ArrayValueList = Value[];
export const ArrayValueList = S.Array(S.suspend(() => Value)) as any as S.Schema<ArrayValueList>;
export class ExecuteStatementResponse extends S.Class<ExecuteStatementResponse>("ExecuteStatementResponse")({records: S.optional(SqlRecords), columnMetadata: S.optional(Metadata), numberOfRecordsUpdated: S.optional(S.Number), generatedFields: S.optional(FieldList), formattedRecords: S.optional(S.String)}) {}
export class StructValue extends S.Class<StructValue>("StructValue")({attributes: S.optional(S.suspend(() => ArrayValueList))}) {}
export type Value = boolean | number | string | H.StreamBody | ArrayValueList | StructValue;
export const Value = S.Union(S.Boolean, S.Boolean, S.Number, S.Number, S.Number, S.Number, S.String, H.StreamBody(), S.suspend(() => ArrayValueList), S.suspend((): S.Schema<StructValue, any> => StructValue)) as any as S.Schema<Value>;
export const Row = S.Array(S.suspend(() => Value));
export class UpdateResult extends S.Class<UpdateResult>("UpdateResult")({generatedFields: S.optional(FieldList)}) {}
export const UpdateResults = S.Array(UpdateResult);
export class Record extends S.Class<Record>("Record")({values: S.optional(Row)}) {}
export const Records = S.Array(Record);
export class BatchExecuteStatementResponse extends S.Class<BatchExecuteStatementResponse>("BatchExecuteStatementResponse")({updateResults: S.optional(UpdateResults)}) {}
export class ResultFrame extends S.Class<ResultFrame>("ResultFrame")({resultSetMetadata: S.optional(ResultSetMetadata), records: S.optional(Records)}) {}
export class SqlStatementResult extends S.Class<SqlStatementResult>("SqlStatementResult")({resultFrame: S.optional(ResultFrame), numberOfRecordsUpdated: S.optional(S.Number)}) {}
export const SqlStatementResults = S.Array(SqlStatementResult);
export class ExecuteSqlResponse extends S.Class<ExecuteSqlResponse>("ExecuteSqlResponse")({sqlStatementResults: S.optional(SqlStatementResults)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class DatabaseErrorException extends S.TaggedError<DatabaseErrorException>()("DatabaseErrorException", {}) {};
export class DatabaseNotFoundException extends S.TaggedError<DatabaseNotFoundException>()("DatabaseNotFoundException", {}) {};
export class DatabaseUnavailableException extends S.TaggedError<DatabaseUnavailableException>()("DatabaseUnavailableException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class HttpEndpointNotEnabledException extends S.TaggedError<HttpEndpointNotEnabledException>()("HttpEndpointNotEnabledException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class DatabaseResumingException extends S.TaggedError<DatabaseResumingException>()("DatabaseResumingException", {}) {};
export class InvalidResourceStateException extends S.TaggedError<InvalidResourceStateException>()("InvalidResourceStateException", {}) {};
export class InvalidSecretException extends S.TaggedError<InvalidSecretException>()("InvalidSecretException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class SecretsErrorException extends S.TaggedError<SecretsErrorException>()("SecretsErrorException", {}) {};
export class ServiceUnavailableError extends S.TaggedError<ServiceUnavailableError>()("ServiceUnavailableError", {}) {};
export class StatementTimeoutException extends S.TaggedError<StatementTimeoutException>()("StatementTimeoutException", {}) {};
export class TransactionNotFoundException extends S.TaggedError<TransactionNotFoundException>()("TransactionNotFoundException", {}) {};
export class UnsupportedResultException extends S.TaggedError<UnsupportedResultException>()("UnsupportedResultException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
 */export const rollbackTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/RollbackTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.RollbackTransaction" }, RollbackTransactionRequest, RollbackTransactionResponse, [AccessDeniedException, BadRequestException, DatabaseErrorException, DatabaseNotFoundException, DatabaseUnavailableException, ForbiddenException, HttpEndpointNotEnabledException, InternalServerErrorException, InvalidResourceStateException, InvalidSecretException, NotFoundException, SecretsErrorException, ServiceUnavailableError, StatementTimeoutException, TransactionNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs a batch SQL statement over an array of data.
 * 
 * 
 * You can run bulk update and insert operations for multiple records using a DML
 * statement with different parameter sets. Bulk operations can provide a significant
 * performance improvement over individual insert and update operations.
 * 
 * 
 * 
 * 
 * If a call isn't part of a transaction because it doesn't include the `transactionID` parameter,
 * changes that result from the call are committed automatically.
 * 
 * 
 * There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request
 * submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't
 * process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the
 * number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and
 * the size of each parameter set.
 * 
 * 
 * The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.
 */export const batchExecuteStatement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/BatchExecute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BatchExecuteStatement" }, BatchExecuteStatementRequest, BatchExecuteStatementResponse, [AccessDeniedException, BadRequestException, DatabaseErrorException, DatabaseNotFoundException, DatabaseResumingException, DatabaseUnavailableException, ForbiddenException, HttpEndpointNotEnabledException, InternalServerErrorException, InvalidResourceStateException, InvalidSecretException, SecretsErrorException, ServiceUnavailableError, StatementTimeoutException, TransactionNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a SQL transaction.
 * 
 * 
 * 
 * 
 * A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24
 * hours.
 * 
 * 
 * A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's
 * committed, it's rolled back automatically.
 * 
 * 
 * For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate
 * `ExecuteStatement` call with `continueAfterTimeout` enabled.
 */export const beginTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/BeginTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.BeginTransaction" }, BeginTransactionRequest, BeginTransactionResponse, [AccessDeniedException, BadRequestException, DatabaseErrorException, DatabaseNotFoundException, DatabaseResumingException, DatabaseUnavailableException, ForbiddenException, HttpEndpointNotEnabledException, InternalServerErrorException, InvalidResourceStateException, InvalidSecretException, SecretsErrorException, ServiceUnavailableError, StatementTimeoutException, TransactionNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Ends a SQL transaction started with the `BeginTransaction` operation and
 * commits the changes.
 */export const commitTransaction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/CommitTransaction", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.CommitTransaction" }, CommitTransactionRequest, CommitTransactionResponse, [AccessDeniedException, BadRequestException, DatabaseErrorException, DatabaseNotFoundException, DatabaseUnavailableException, ForbiddenException, HttpEndpointNotEnabledException, InternalServerErrorException, InvalidResourceStateException, InvalidSecretException, NotFoundException, SecretsErrorException, ServiceUnavailableError, StatementTimeoutException, TransactionNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs one or more SQL statements.
 * 
 * 
 * 
 * 
 * This operation isn't supported for Aurora Serverless v2 and provisioned DB clusters.
 * For Aurora Serverless v1 DB clusters, the operation is deprecated.
 * Use the `BatchExecuteStatement` or `ExecuteStatement` operation.
 */export const executeSql = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/ExecuteSql", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteSql" }, ExecuteSqlRequest, ExecuteSqlResponse, [AccessDeniedException, BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs a SQL statement against a database.
 * 
 * 
 * 
 * 
 * If a call isn't part of a transaction because it doesn't include the
 * `transactionID` parameter, changes that result from the call are
 * committed automatically.
 * 
 * 
 * If the binary response data from the database is more than 1 MB, the call is terminated.
 */export const executeStatement = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-01", uri: "/Execute", method: "POST", sdkId: "RDS Data", sigV4ServiceName: "rds-data", name: "RdsDataService.ExecuteStatement" }, ExecuteStatementRequest, ExecuteStatementResponse, [AccessDeniedException, BadRequestException, DatabaseErrorException, DatabaseNotFoundException, DatabaseResumingException, DatabaseUnavailableException, ForbiddenException, HttpEndpointNotEnabledException, InternalServerErrorException, InvalidResourceStateException, InvalidSecretException, SecretsErrorException, ServiceUnavailableError, StatementTimeoutException, TransactionNotFoundException, UnsupportedResultException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
