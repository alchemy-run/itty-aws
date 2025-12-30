import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class BulkPublishRequest extends S.Class<BulkPublishRequest>("BulkPublishRequest")({IdentityPoolId: S.String}) {}
export class DeleteDatasetRequest extends S.Class<DeleteDatasetRequest>("DeleteDatasetRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String}) {}
export class DescribeDatasetRequest extends S.Class<DescribeDatasetRequest>("DescribeDatasetRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String}) {}
export class DescribeIdentityPoolUsageRequest extends S.Class<DescribeIdentityPoolUsageRequest>("DescribeIdentityPoolUsageRequest")({IdentityPoolId: S.String}) {}
export class DescribeIdentityUsageRequest extends S.Class<DescribeIdentityUsageRequest>("DescribeIdentityUsageRequest")({IdentityPoolId: S.String, IdentityId: S.String}) {}
export class GetBulkPublishDetailsRequest extends S.Class<GetBulkPublishDetailsRequest>("GetBulkPublishDetailsRequest")({IdentityPoolId: S.String}) {}
export class GetCognitoEventsRequest extends S.Class<GetCognitoEventsRequest>("GetCognitoEventsRequest")({IdentityPoolId: S.String}) {}
export class GetIdentityPoolConfigurationRequest extends S.Class<GetIdentityPoolConfigurationRequest>("GetIdentityPoolConfigurationRequest")({IdentityPoolId: S.String}) {}
export class ListDatasetsRequest extends S.Class<ListDatasetsRequest>("ListDatasetsRequest")({IdentityPoolId: S.String, IdentityId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListIdentityPoolUsageRequest extends S.Class<ListIdentityPoolUsageRequest>("ListIdentityPoolUsageRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRecordsRequest extends S.Class<ListRecordsRequest>("ListRecordsRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String, LastSyncCount: S.optional(S.Number), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), SyncSessionToken: S.optional(S.String)}) {}
export class RegisterDeviceRequest extends S.Class<RegisterDeviceRequest>("RegisterDeviceRequest")({IdentityPoolId: S.String, IdentityId: S.String, Platform: S.String, Token: S.String}) {}
export class SubscribeToDatasetRequest extends S.Class<SubscribeToDatasetRequest>("SubscribeToDatasetRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String, DeviceId: S.String}) {}
export class SubscribeToDatasetResponse extends S.Class<SubscribeToDatasetResponse>("SubscribeToDatasetResponse")({}) {}
export class UnsubscribeFromDatasetRequest extends S.Class<UnsubscribeFromDatasetRequest>("UnsubscribeFromDatasetRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String, DeviceId: S.String}) {}
export class UnsubscribeFromDatasetResponse extends S.Class<UnsubscribeFromDatasetResponse>("UnsubscribeFromDatasetResponse")({}) {}
export const ApplicationArnList = S.Array(S.String);
export class Dataset extends S.Class<Dataset>("Dataset")({IdentityId: S.optional(S.String), DatasetName: S.optional(S.String), CreationDate: S.optional(S.Date), LastModifiedDate: S.optional(S.Date), LastModifiedBy: S.optional(S.String), DataStorage: S.optional(S.Number), NumRecords: S.optional(S.Number)}) {}
export const DatasetList = S.Array(Dataset);
export class IdentityPoolUsage extends S.Class<IdentityPoolUsage>("IdentityPoolUsage")({IdentityPoolId: S.optional(S.String), SyncSessionsCount: S.optional(S.Number), DataStorage: S.optional(S.Number), LastModifiedDate: S.optional(S.Date)}) {}
export const IdentityPoolUsageList = S.Array(IdentityPoolUsage);
export const MergedDatasetNameList = S.Array(S.String);
export const Events = S.Record({key: S.String, value: S.String});
export class PushSync extends S.Class<PushSync>("PushSync")({ApplicationArns: S.optional(ApplicationArnList), RoleArn: S.optional(S.String)}) {}
export class CognitoStreams extends S.Class<CognitoStreams>("CognitoStreams")({StreamName: S.optional(S.String), RoleArn: S.optional(S.String), StreamingStatus: S.optional(S.String)}) {}
export class RecordPatch extends S.Class<RecordPatch>("RecordPatch")({Op: S.String, Key: S.String, Value: S.optional(S.String), SyncCount: S.Number, DeviceLastModifiedDate: S.optional(S.Date)}) {}
export const RecordPatchList = S.Array(RecordPatch);
export class BulkPublishResponse extends S.Class<BulkPublishResponse>("BulkPublishResponse")({IdentityPoolId: S.optional(S.String)}) {}
export class DescribeDatasetResponse extends S.Class<DescribeDatasetResponse>("DescribeDatasetResponse")({Dataset: S.optional(Dataset)}) {}
export class GetBulkPublishDetailsResponse extends S.Class<GetBulkPublishDetailsResponse>("GetBulkPublishDetailsResponse")({IdentityPoolId: S.optional(S.String), BulkPublishStartTime: S.optional(S.Date), BulkPublishCompleteTime: S.optional(S.Date), BulkPublishStatus: S.optional(S.String), FailureMessage: S.optional(S.String)}) {}
export class GetCognitoEventsResponse extends S.Class<GetCognitoEventsResponse>("GetCognitoEventsResponse")({Events: S.optional(Events)}) {}
export class GetIdentityPoolConfigurationResponse extends S.Class<GetIdentityPoolConfigurationResponse>("GetIdentityPoolConfigurationResponse")({IdentityPoolId: S.optional(S.String), PushSync: S.optional(PushSync), CognitoStreams: S.optional(CognitoStreams)}) {}
export class ListDatasetsResponse extends S.Class<ListDatasetsResponse>("ListDatasetsResponse")({Datasets: S.optional(DatasetList), Count: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListIdentityPoolUsageResponse extends S.Class<ListIdentityPoolUsageResponse>("ListIdentityPoolUsageResponse")({IdentityPoolUsages: S.optional(IdentityPoolUsageList), MaxResults: S.optional(S.Number), Count: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class RegisterDeviceResponse extends S.Class<RegisterDeviceResponse>("RegisterDeviceResponse")({DeviceId: S.optional(S.String)}) {}
export class SetCognitoEventsRequest extends S.Class<SetCognitoEventsRequest>("SetCognitoEventsRequest")({IdentityPoolId: S.String, Events: Events}) {}
export class SetIdentityPoolConfigurationRequest extends S.Class<SetIdentityPoolConfigurationRequest>("SetIdentityPoolConfigurationRequest")({IdentityPoolId: S.String, PushSync: S.optional(PushSync), CognitoStreams: S.optional(CognitoStreams)}) {}
export class UpdateRecordsRequest extends S.Class<UpdateRecordsRequest>("UpdateRecordsRequest")({IdentityPoolId: S.String, IdentityId: S.String, DatasetName: S.String, DeviceId: S.optional(S.String), RecordPatches: S.optional(RecordPatchList), SyncSessionToken: S.String, ClientContext: S.optional(H.Header("x-amz-Client-Context"))}) {}
export class IdentityUsage extends S.Class<IdentityUsage>("IdentityUsage")({IdentityId: S.optional(S.String), IdentityPoolId: S.optional(S.String), LastModifiedDate: S.optional(S.Date), DatasetCount: S.optional(S.Number), DataStorage: S.optional(S.Number)}) {}
export class Record extends S.Class<Record>("Record")({Key: S.optional(S.String), Value: S.optional(S.String), SyncCount: S.optional(S.Number), LastModifiedDate: S.optional(S.Date), LastModifiedBy: S.optional(S.String), DeviceLastModifiedDate: S.optional(S.Date)}) {}
export const RecordList = S.Array(Record);
export class DeleteDatasetResponse extends S.Class<DeleteDatasetResponse>("DeleteDatasetResponse")({Dataset: S.optional(Dataset)}) {}
export class DescribeIdentityPoolUsageResponse extends S.Class<DescribeIdentityPoolUsageResponse>("DescribeIdentityPoolUsageResponse")({IdentityPoolUsage: S.optional(IdentityPoolUsage)}) {}
export class DescribeIdentityUsageResponse extends S.Class<DescribeIdentityUsageResponse>("DescribeIdentityUsageResponse")({IdentityUsage: S.optional(IdentityUsage)}) {}
export class ListRecordsResponse extends S.Class<ListRecordsResponse>("ListRecordsResponse")({Records: S.optional(RecordList), NextToken: S.optional(S.String), Count: S.optional(S.Number), DatasetSyncCount: S.optional(S.Number), LastModifiedBy: S.optional(S.String), MergedDatasetNames: S.optional(MergedDatasetNameList), DatasetExists: S.optional(S.Boolean), DatasetDeletedAfterRequestedSyncCount: S.optional(S.Boolean), SyncSessionToken: S.optional(S.String)}) {}
export class SetIdentityPoolConfigurationResponse extends S.Class<SetIdentityPoolConfigurationResponse>("SetIdentityPoolConfigurationResponse")({IdentityPoolId: S.optional(S.String), PushSync: S.optional(PushSync), CognitoStreams: S.optional(CognitoStreams)}) {}
export class UpdateRecordsResponse extends S.Class<UpdateRecordsResponse>("UpdateRecordsResponse")({Records: S.optional(RecordList)}) {}

//# Errors
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class InvalidConfigurationException extends S.TaggedError<InvalidConfigurationException>()("InvalidConfigurationException", {}) {};
export class AlreadyStreamedException extends S.TaggedError<AlreadyStreamedException>()("AlreadyStreamedException", {message: S.String}) {};
export class DuplicateRequestException extends S.TaggedError<DuplicateRequestException>()("DuplicateRequestException", {message: S.String}) {};
export class ResourceConflictException extends S.TaggedError<ResourceConflictException>()("ResourceConflictException", {message: S.String}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {message: S.String}) {};
export class InvalidLambdaFunctionOutputException extends S.TaggedError<InvalidLambdaFunctionOutputException>()("InvalidLambdaFunctionOutputException", {message: S.String}) {};
export class LambdaThrottledException extends S.TaggedError<LambdaThrottledException>()("LambdaThrottledException", {message: S.String}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {message: S.String}) {};

//# Operations
/**
 * Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to
 * its own data. Thus, the credentials used to make this API call need to have access to the
 * identity data.
 * 
 * 
 * ListDatasets can be called with temporary user credentials provided by Cognito
 * Identity or with developer credentials. You should use the Cognito Identity credentials to
 * make this API call.
 * 
 * 
 * 
 * ListDatasets
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 15225768-209f-4078-aaed-7494ace9f2db
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListDatasets
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T215640Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#ListDatasets",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "IdentityId": "IDENTITY_ID",
 * "MaxResults": "3"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 15225768-209f-4078-aaed-7494ace9f2db, 15225768-209f-4078-aaed-7494ace9f2db
 * content-type: application/json
 * content-length: 355
 * date: Tue, 11 Nov 2014 21:56:40 GMT
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#ListDatasetsResponse",
 * "Count": 1,
 * "Datasets": [
 * {
 * "CreationDate": 1.412974057151E9,
 * "DataStorage": 16,
 * "DatasetName": "my_list",
 * "IdentityId": "IDENTITY_ID",
 * "LastModifiedBy": "123456789012",
 * "LastModifiedDate": 1.412974057244E9,
 * "NumRecords": 1
 * }],
 * "NextToken": null
 * },
 * "Version": "1.0"
 * }
 */export const listDatasets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.ListDatasets" }, ListDatasetsRequest, ListDatasetsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of identity pools registered with Cognito.
 * 
 * 
 * ListIdentityPoolUsage can only be called with developer credentials. You
 * cannot make this API call with the temporary user credentials provided by Cognito
 * Identity.
 * 
 * 
 * 
 * ListIdentityPoolUsage
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T211414Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "MaxResults": "2"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * content-type: application/json
 * content-length: 519
 * date: Tue, 11 Nov 2014 21:14:14 GMT
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
 * "Count": 2,
 * "IdentityPoolUsages": [
 * {
 * "DataStorage": 0,
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "LastModifiedDate": 1.413836234607E9,
 * "SyncSessionsCount": null
 * },
 * {
 * "DataStorage": 0,
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "LastModifiedDate": 1.410892165601E9,
 * "SyncSessionsCount": null
 * }],
 * "MaxResults": 2,
 * "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
 * },
 * "Version": "1.0"
 * }
 */export const listIdentityPoolUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.ListIdentityPoolUsage" }, ListIdentityPoolUsageRequest, ListIdentityPoolUsageResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers a device to receive push sync notifications.
 * 
 * This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
 * 
 * 
 * 
 * RegisterDevice
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.RegisterDevice
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T194643Z
 * X-AMZ-SECURITY-TOKEN:
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#RegisterDevice",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "ID_POOL_ID",
 * "IdentityId": "IDENTITY_ID",
 * "Platform": "GCM",
 * "Token": "PUSH_TOKEN"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * date: Sat, 04 Oct 2014 19:46:44 GMT
 * content-type: application/json
 * content-length: 145
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#RegisterDeviceResponse",
 * "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 * },
 * "Version": "1.0"
 * }
 */export const registerDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.RegisterDevice" }, RegisterDeviceRequest, RegisterDeviceResponse, [InternalErrorException, InvalidConfigurationException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 */export const setCognitoEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/events", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.SetCognitoEvents" }, SetCognitoEventsRequest, S.Struct({}), [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Subscribes to receive notifications when a dataset is modified by another device.
 * 
 * This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
 * 
 * 
 * 
 * SubscribeToDataset
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8b9932b7-201d-4418-a960-0a470e11de9f
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SubscribeToDataset
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195350Z
 * X-AMZ-SECURITY-TOKEN:
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#SubscribeToDataset",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "ID_POOL_ID",
 * "IdentityId": "IDENTITY_ID",
 * "DatasetName": "Rufus",
 * "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 8b9932b7-201d-4418-a960-0a470e11de9f
 * date: Sat, 04 Oct 2014 19:53:50 GMT
 * content-type: application/json
 * content-length: 99
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#SubscribeToDatasetResponse"
 * },
 * "Version": "1.0"
 * }
 */export const subscribeToDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.SubscribeToDataset" }, SubscribeToDatasetRequest, SubscribeToDatasetResponse, [InternalErrorException, InvalidConfigurationException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unsubscribes from receiving notifications when a dataset is modified by another device.
 * 
 * This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.
 * 
 * 
 * 
 * UnsubscribeFromDataset
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZ-REQUESTSUPERTRACE: true
 * X-AMZN-REQUESTID: 676896d6-14ca-45b1-8029-6d36b10a077e
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.UnsubscribeFromDataset
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195446Z
 * X-AMZ-SECURITY-TOKEN:
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#UnsubscribeFromDataset",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "ID_POOL_ID",
 * "IdentityId": "IDENTITY_ID",
 * "DatasetName": "Rufus",
 * "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 676896d6-14ca-45b1-8029-6d36b10a077e
 * date: Sat, 04 Oct 2014 19:54:46 GMT
 * content-type: application/json
 * content-length: 103
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#UnsubscribeFromDatasetResponse"
 * },
 * "Version": "1.0"
 * }
 */export const unsubscribeFromDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}", method: "DELETE", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.UnsubscribeFromDataset" }, UnsubscribeFromDatasetRequest, UnsubscribeFromDatasetResponse, [InternalErrorException, InvalidConfigurationException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each
 * identity has access only to its own data. Thus, the credentials used to make this API call
 * need to have access to the identity data.
 * 
 * 
 * This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.
 */export const describeDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.DescribeDataset" }, DescribeDatasetRequest, DescribeDatasetResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets usage details (for example, data storage) about a particular identity pool.
 * 
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 * 
 * 
 * 
 * DescribeIdentityPoolUsage
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T205737Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsage",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "IDENTITY_POOL_ID"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * content-type: application/json
 * content-length: 271
 * date: Tue, 11 Nov 2014 20:57:37 GMT
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsageResponse",
 * "IdentityPoolUsage":
 * {
 * "DataStorage": 0,
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "LastModifiedDate": 1.413231134115E9,
 * "SyncSessionsCount": null
 * }
 * },
 * "Version": "1.0"
 * }
 */export const describeIdentityPoolUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.DescribeIdentityPoolUsage" }, DescribeIdentityPoolUsageRequest, DescribeIdentityPoolUsageResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets usage information for an identity, including number of datasets and data usage.
 * 
 * 
 * This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
 * 
 * 
 * 
 * DescribeIdentityUsage
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T215129Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityUsage",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "IdentityId": "IDENTITY_ID"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * content-type: application/json
 * content-length: 318
 * date: Tue, 11 Nov 2014 21:51:29 GMT
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityUsageResponse",
 * "IdentityUsage":
 * {
 * "DataStorage": 16,
 * "DatasetCount": 1,
 * "IdentityId": "IDENTITY_ID",
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "LastModifiedDate": 1.412974081336E9
 * }
 * },
 * "Version": "1.0"
 * }
 */export const describeIdentityUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.DescribeIdentityUsage" }, DescribeIdentityUsageRequest, DescribeIdentityUsageResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the status of the last BulkPublish operation for an identity pool.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 */export const getBulkPublishDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/getBulkPublishDetails", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.GetBulkPublishDetails" }, GetBulkPublishDetailsRequest, GetBulkPublishDetailsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the events and the corresponding Lambda functions associated with an identity pool.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 */export const getCognitoEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/events", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.GetCognitoEvents" }, GetCognitoEventsRequest, GetCognitoEventsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the configuration settings of an identity pool.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 * 
 * 
 * 
 * GetIdentityPoolConfiguration
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.GetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195722Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfiguration",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "ID_POOL_ID"
 * }
 * }
 * 
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * date: Sat, 04 Oct 2014 19:57:22 GMT
 * content-type: application/json
 * content-length: 332
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfigurationResponse",
 * "IdentityPoolId": "ID_POOL_ID",
 * "PushSync":
 * {
 * "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 * "RoleArn": "ROLEARN"
 * }
 * },
 * "Version": "1.0"
 * }
 */export const getIdentityPoolConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/configuration", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.GetIdentityPoolConfiguration" }, GetIdentityPoolConfigurationRequest, GetIdentityPoolConfigurationResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets paginated records, optionally changed after a particular sync count for a dataset and
 * identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus,
 * the credentials used to make this API call need to have access to the identity data.
 * 
 * 
 * ListRecords can be called with temporary user credentials provided by Cognito
 * Identity or with developer credentials. You should use Cognito Identity credentials to make
 * this API call.
 * 
 * 
 * 
 * ListRecords
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListRecords
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T183230Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#ListRecords",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "IDENTITY_POOL_ID",
 * "IdentityId": "IDENTITY_ID",
 * "DatasetName": "newDataSet"
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * content-type: application/json
 * content-length: 623
 * date: Tue, 11 Nov 2014 18:32:30 GMT
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#ListRecordsResponse",
 * "Count": 0,
 * "DatasetDeletedAfterRequestedSyncCount": false,
 * "DatasetExists": false,
 * "DatasetSyncCount": 0,
 * "LastModifiedBy": null,
 * "MergedDatasetNames": null,
 * "NextToken": null,
 * "Records": [],
 * "SyncSessionToken": "SYNC_SESSION_TOKEN"
 * },
 * "Version": "1.0"
 * }
 */export const listRecords = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records", method: "GET", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.ListRecords" }, ListRecordsRequest, ListRecordsResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 */export const bulkPublish = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/bulkpublish", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.BulkPublish" }, BulkPublishRequest, BulkPublishResponse, [AlreadyStreamedException, DuplicateRequestException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specific dataset. The dataset will be deleted permanently, and the action can't
 * be undone. Datasets that this dataset was merged with will no longer report the merge. Any
 * subsequent operation on this dataset will result in a
 * ResourceNotFoundException.
 * 
 * 
 * This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
 */export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", method: "DELETE", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.DeleteDataset" }, DeleteDatasetRequest, DeleteDatasetResponse, [InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the necessary configuration for push sync.
 * 
 * This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.
 * 
 * 
 * 
 * SetIdentityPoolConfiguration
 * The following examples have been edited for readability.
 * 
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T200006Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=
 * 
 * {
 * "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
 * "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 * "Input":
 * {
 * "IdentityPoolId": "ID_POOL_ID",
 * "PushSync":
 * {
 * "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 * "RoleArn": "ROLEARN"
 * }
 * }
 * }
 * 
 * 
 * 1.1 200 OK
 * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * date: Sat, 04 Oct 2014 20:00:06 GMT
 * content-type: application/json
 * content-length: 332
 * 
 * {
 * "Output":
 * {
 * "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
 * "IdentityPoolId": "ID_POOL_ID",
 * "PushSync":
 * {
 * "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 * "RoleArn": "ROLEARN"
 * }
 * },
 * "Version": "1.0"
 * }
 */export const setIdentityPoolConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/configuration", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.SetIdentityPoolConfiguration" }, SetIdentityPoolConfigurationRequest, SetIdentityPoolConfigurationResponse, [ConcurrentModificationException, InternalErrorException, InvalidParameterException, NotAuthorizedException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Posts updates to records and adds and deletes records for a dataset and user.
 * 
 * 
 * The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.
 * 
 * For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.
 * 
 * 
 * This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.
 */export const updateRecords = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2014-06-30", uri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}", sdkId: "Cognito Sync", sigV4ServiceName: "cognito-sync", name: "AWSCognitoSyncService.UpdateRecords" }, UpdateRecordsRequest, UpdateRecordsResponse, [InternalErrorException, InvalidLambdaFunctionOutputException, InvalidParameterException, LambdaThrottledException, LimitExceededException, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
