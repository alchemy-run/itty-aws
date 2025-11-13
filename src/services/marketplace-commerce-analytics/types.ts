import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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
  | "customer_subscriber_hourly_monthly_subscriptions"
  | "customer_subscriber_annual_subscriptions"
  | "daily_business_usage_by_instance_type"
  | "daily_business_fees"
  | "daily_business_free_trial_conversions"
  | "daily_business_new_instances"
  | "daily_business_new_product_subscribers"
  | "daily_business_canceled_product_subscribers"
  | "monthly_revenue_billing_and_revenue_data"
  | "monthly_revenue_annual_subscriptions"
  | "monthly_revenue_field_demonstration_usage"
  | "monthly_revenue_flexible_payment_schedule"
  | "disbursed_amount_by_product"
  | "disbursed_amount_by_product_with_uncollected_funds"
  | "disbursed_amount_by_instance_hours"
  | "disbursed_amount_by_customer_geo"
  | "disbursed_amount_by_age_of_uncollected_funds"
  | "disbursed_amount_by_age_of_disbursed_funds"
  | "disbursed_amount_by_age_of_past_due_funds"
  | "disbursed_amount_by_uncollected_funds_breakdown"
  | "customer_profile_by_industry"
  | "customer_profile_by_revenue"
  | "customer_profile_by_geography"
  | "sales_compensation_billed_revenue"
  | "us_sales_and_use_tax_records";
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
export declare class MarketplaceCommerceAnalyticsException extends Data.TaggedError(
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

export type MarketplaceCommerceAnalyticsErrors =
  | MarketplaceCommerceAnalyticsException
  | CommonAwsError;
