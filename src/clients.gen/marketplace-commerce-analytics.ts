import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const CustomerDefinedValues = S.Record({key: S.String, value: S.String});
export class StartSupportDataExportRequest extends S.Class<StartSupportDataExportRequest>("StartSupportDataExportRequest")({dataSetType: S.String, fromDate: S.Date, roleNameArn: S.String, destinationS3BucketName: S.String, destinationS3Prefix: S.optional(S.String), snsTopicArn: S.String, customerDefinedValues: S.optional(CustomerDefinedValues)}) {}
export class GenerateDataSetRequest extends S.Class<GenerateDataSetRequest>("GenerateDataSetRequest")({dataSetType: S.String, dataSetPublicationDate: S.Date, roleNameArn: S.String, destinationS3BucketName: S.String, destinationS3Prefix: S.optional(S.String), snsTopicArn: S.String, customerDefinedValues: S.optional(CustomerDefinedValues)}) {}
export class StartSupportDataExportResult extends S.Class<StartSupportDataExportResult>("StartSupportDataExportResult")({dataSetRequestId: S.optional(S.String)}) {}
export class GenerateDataSetResult extends S.Class<GenerateDataSetResult>("GenerateDataSetResult")({dataSetRequestId: S.optional(S.String)}) {}
export class MarketplaceCommerceAnalyticsException extends S.Class<MarketplaceCommerceAnalyticsException>("MarketplaceCommerceAnalyticsException")({message: S.optional(S.String)}) {}

//# Errors
export class MarketplaceCommerceAnalyticsExceptionError extends S.TaggedError<MarketplaceCommerceAnalyticsExceptionError>()("MarketplaceCommerceAnalyticsException", MarketplaceCommerceAnalyticsException.fields) {};

//# Operations
export const generateDataSet = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.GenerateDataSet" }, GenerateDataSetRequest, GenerateDataSetResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startSupportDataExport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.StartSupportDataExport" }, StartSupportDataExportRequest, StartSupportDataExportResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
