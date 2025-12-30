import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const CustomerDefinedValues = Schema.Record({key: Schema.String, value: Schema.String});
export class StartSupportDataExportRequest extends Schema.Class<StartSupportDataExportRequest>("StartSupportDataExportRequest")({dataSetType: Schema.String, fromDate: Schema.Date, roleNameArn: Schema.String, destinationS3BucketName: Schema.String, destinationS3Prefix: Schema.optional(Schema.String), snsTopicArn: Schema.String, customerDefinedValues: Schema.optional(CustomerDefinedValues)}) {}
export class GenerateDataSetRequest extends Schema.Class<GenerateDataSetRequest>("GenerateDataSetRequest")({dataSetType: Schema.String, dataSetPublicationDate: Schema.Date, roleNameArn: Schema.String, destinationS3BucketName: Schema.String, destinationS3Prefix: Schema.optional(Schema.String), snsTopicArn: Schema.String, customerDefinedValues: Schema.optional(CustomerDefinedValues)}) {}
export class StartSupportDataExportResult extends Schema.Class<StartSupportDataExportResult>("StartSupportDataExportResult")({dataSetRequestId: Schema.optional(Schema.String)}) {}
export class GenerateDataSetResult extends Schema.Class<GenerateDataSetResult>("GenerateDataSetResult")({dataSetRequestId: Schema.optional(Schema.String)}) {}
export class MarketplaceCommerceAnalyticsException extends Schema.Class<MarketplaceCommerceAnalyticsException>("MarketplaceCommerceAnalyticsException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class MarketplaceCommerceAnalyticsExceptionError extends Schema.TaggedError<MarketplaceCommerceAnalyticsExceptionError>()("MarketplaceCommerceAnalyticsException", MarketplaceCommerceAnalyticsException.fields) {};

//# Operations
export const generateDataSet = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.GenerateDataSet" }, GenerateDataSetRequest, GenerateDataSetResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startSupportDataExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.StartSupportDataExport" }, StartSupportDataExportRequest, StartSupportDataExportResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
