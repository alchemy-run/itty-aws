import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MarketplaceCommerceAnalytics extends AWSServiceClient {
  generateDataSet(
    input: GenerateDataSetRequest,
  ): Effect.Effect<
    GenerateDataSetResult,
    MarketplaceCommerceAnalyticsException | CommonAwsError
  >;
  startSupportDataExport(
    input: StartSupportDataExportRequest,
  ): Effect.Effect<
    StartSupportDataExportResult,
    MarketplaceCommerceAnalyticsException | CommonAwsError
  >;
}

export type CustomerDefinedValues = Record<string, string>;
export type DataSetPublicationDate = Date | string;

export type DataSetRequestId = string;

export type DataSetType =
  | "CUSTOMER_SUBSCRIBER_HOURLY_MONTHLY_SUBSCRIPTIONS"
  | "CUSTOMER_SUBSCRIBER_ANNUAL_SUBSCRIPTIONS"
  | "DAILY_BUSINESS_USAGE_BY_INSTANCE_TYPE"
  | "DAILY_BUSINESS_FEES"
  | "DAILY_BUSINESS_FREE_TRIAL_CONVERSIONS"
  | "DAILY_BUSINESS_NEW_INSTANCES"
  | "DAILY_BUSINESS_NEW_PRODUCT_SUBSCRIBERS"
  | "DAILY_BUSINESS_CANCELED_PRODUCT_SUBSCRIBERS"
  | "MONTHLY_REVENUE_BILLING_AND_REVENUE_DATA"
  | "MONTHLY_REVENUE_ANNUAL_SUBSCRIPTIONS"
  | "MONTHLY_REVENUE_FIELD_DEMONSTRATION_USAGE"
  | "MONTHLY_REVENUE_FLEXIBLE_PAYMENT_SCHEDULE"
  | "DISBURSED_AMOUNT_BY_PRODUCT"
  | "DISBURSED_AMOUNT_BY_PRODUCT_WITH_UNCOLLECTED_FUNDS"
  | "DISBURSED_AMOUNT_BY_INSTANCE_HOURS"
  | "DISBURSED_AMOUNT_BY_CUSTOMER_GEO"
  | "DISBURSED_AMOUNT_BY_AGE_OF_UNCOLLECTED_FUNDS"
  | "DISBURSED_AMOUNT_BY_AGE_OF_DISBURSED_FUNDS"
  | "DISBURSED_AMOUNT_BY_AGE_OF_PAST_DUE_FUNDS"
  | "DISBURSED_AMOUNT_BY_UNCOLLECTED_FUNDS_BREAKDOWN"
  | "CUSTOMER_PROFILE_BY_INDUSTRY"
  | "CUSTOMER_PROFILE_BY_REVENUE"
  | "CUSTOMER_PROFILE_BY_GEOGRAPHY"
  | "SALES_COMPENSATION_BILLED_REVENUE"
  | "US_SALES_AND_USE_TAX_RECORDS";
export type DestinationS3BucketName = string;

export type DestinationS3Prefix = string;

export type ExceptionMessage = string;

export type FromDate = Date | string;

export interface GenerateDataSetRequest {
  dataSetType: DataSetType;
  dataSetPublicationDate: Date | string;
  roleNameArn: string;
  destinationS3BucketName: string;
  destinationS3Prefix?: string;
  snsTopicArn: string;
  customerDefinedValues?: Record<string, string>;
}
export interface GenerateDataSetResult {
  dataSetRequestId?: string;
}
export declare class MarketplaceCommerceAnalyticsException extends EffectData.TaggedError(
  "MarketplaceCommerceAnalyticsException",
)<{
  readonly message?: string;
}> {}
export type OptionalKey = string;

export type OptionalValue = string;

export type RoleNameArn = string;

export type SnsTopicArn = string;

export interface StartSupportDataExportRequest {
  dataSetType: SupportDataSetType;
  fromDate: Date | string;
  roleNameArn: string;
  destinationS3BucketName: string;
  destinationS3Prefix?: string;
  snsTopicArn: string;
  customerDefinedValues?: Record<string, string>;
}
export interface StartSupportDataExportResult {
  dataSetRequestId?: string;
}
export type SupportDataSetType =
  | "customer_support_contacts_data"
  | "test_customer_support_contacts_data";
export declare namespace GenerateDataSet {
  export type Input = GenerateDataSetRequest;
  export type Output = GenerateDataSetResult;
  export type Error = MarketplaceCommerceAnalyticsException | CommonAwsError;
}

export declare namespace StartSupportDataExport {
  export type Input = StartSupportDataExportRequest;
  export type Output = StartSupportDataExportResult;
  export type Error = MarketplaceCommerceAnalyticsException | CommonAwsError;
}
