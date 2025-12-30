import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const CustomerDefinedValues = Schema.Record({key: Schema.String, value: Schema.String});
export const StartSupportDataExportRequest = Schema.Struct({dataSetType: Schema.String, fromDate: Schema.Date, roleNameArn: Schema.String, destinationS3BucketName: Schema.String, destinationS3Prefix: Schema.optional(Schema.String), snsTopicArn: Schema.String, customerDefinedValues: Schema.optional(CustomerDefinedValues)});
export const GenerateDataSetRequest = Schema.Struct({dataSetType: Schema.String, dataSetPublicationDate: Schema.Date, roleNameArn: Schema.String, destinationS3BucketName: Schema.String, destinationS3Prefix: Schema.optional(Schema.String), snsTopicArn: Schema.String, customerDefinedValues: Schema.optional(CustomerDefinedValues)});
export const StartSupportDataExportResult = Schema.Struct({dataSetRequestId: Schema.optional(Schema.String)});
export const GenerateDataSetResult = Schema.Struct({dataSetRequestId: Schema.optional(Schema.String)});
export const MarketplaceCommerceAnalyticsException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class MarketplaceCommerceAnalyticsExceptionError extends Schema.TaggedError<MarketplaceCommerceAnalyticsExceptionError>()("MarketplaceCommerceAnalyticsException", MarketplaceCommerceAnalyticsException) {};

//# Operations
export const generateDataSet = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.GenerateDataSet" }, GenerateDataSetRequest, GenerateDataSetResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startSupportDataExport = /*#__PURE__*/ makeOperation(() => Operation({ version: "2015-07-01", uri: "/", method: "POST", sdkId: "Marketplace Commerce Analytics", sigV4ServiceName: "marketplacecommerceanalytics", name: "MarketplaceCommerceAnalytics20150701.StartSupportDataExport" }, StartSupportDataExportRequest, StartSupportDataExportResult, [MarketplaceCommerceAnalyticsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
