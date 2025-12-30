import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const CustomerDefinedValues = S.Record({key: S.String, value: S.String});
export class StartSupportDataExportRequest extends S.Class<StartSupportDataExportRequest>("StartSupportDataExportRequest")({dataSetType: S.String, fromDate: S.Date, roleNameArn: S.String, destinationS3BucketName: S.String, destinationS3Prefix: S.optional(S.String), snsTopicArn: S.String, customerDefinedValues: S.optional(CustomerDefinedValues)}) {}
export class GenerateDataSetRequest extends S.Class<GenerateDataSetRequest>("GenerateDataSetRequest")({dataSetType: S.String, dataSetPublicationDate: S.Date, roleNameArn: S.String, destinationS3BucketName: S.String, destinationS3Prefix: S.optional(S.String), snsTopicArn: S.String, customerDefinedValues: S.optional(CustomerDefinedValues)}) {}
export class StartSupportDataExportResult extends S.Class<StartSupportDataExportResult>("StartSupportDataExportResult")({dataSetRequestId: S.optional(S.String)}) {}
export class GenerateDataSetResult extends S.Class<GenerateDataSetResult>("GenerateDataSetResult")({dataSetRequestId: S.optional(S.String)}) {}

//# Errors
export class MarketplaceCommerceAnalyticsException extends S.TaggedError<MarketplaceCommerceAnalyticsException>()("MarketplaceCommerceAnalyticsException", {}) {};

//# Operations
/**
 * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified
 * S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that
 * can be used to correlate requests with notifications from the SNS topic.
 * Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv.
 * If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 * be overwritten by the new file.
 * Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 * s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 */export const generateDataSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-01", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.GenerateDataSet" }, GenerateDataSetRequest, GenerateDataSetResult, [MarketplaceCommerceAnalyticsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * *This target has been deprecated.* Given a data set type and a from date, asynchronously publishes the requested customer support data
 * to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 * identifier that can be used to correlate requests with notifications from the SNS topic.
 * Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 * If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 * be overwritten by the new file.
 * Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 * s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 */export const startSupportDataExport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-01", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.StartSupportDataExport" }, StartSupportDataExportRequest, StartSupportDataExportResult, [MarketplaceCommerceAnalyticsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
