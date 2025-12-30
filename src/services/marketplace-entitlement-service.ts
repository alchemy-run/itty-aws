import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FilterValueList = S.Array(S.String);
export const GetEntitlementFilters = S.Record({key: S.String, value: FilterValueList});
export class GetEntitlementsRequest extends S.Class<GetEntitlementsRequest>("GetEntitlementsRequest")({ProductCode: S.String, Filter: S.optional(GetEntitlementFilters), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class EntitlementValue extends S.Class<EntitlementValue>("EntitlementValue")({IntegerValue: S.optional(S.Number), DoubleValue: S.optional(S.Number), BooleanValue: S.optional(S.Boolean), StringValue: S.optional(S.String)}) {}
export class Entitlement extends S.Class<Entitlement>("Entitlement")({ProductCode: S.optional(S.String), Dimension: S.optional(S.String), CustomerIdentifier: S.optional(S.String), CustomerAWSAccountId: S.optional(S.String), Value: S.optional(EntitlementValue), ExpirationDate: S.optional(S.Date)}) {}
export const EntitlementList = S.Array(Entitlement);
export class GetEntitlementsResult extends S.Class<GetEntitlementsResult>("GetEntitlementsResult")({Entitlements: S.optional(EntitlementList), NextToken: S.optional(S.String)}) {}

//# Errors
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {message: S.optional(S.String)}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * GetEntitlements retrieves entitlement values for a given product. The results can be
 * filtered based on customer identifier, AWS account ID, or product dimensions.
 * 
 * The `CustomerIdentifier` parameter is on path for deprecation. Use `CustomerAWSAccountID` instead.
 * 
 * These parameters are mutually exclusive. You can't specify both `CustomerIdentifier` and `CustomerAWSAccountID` in the same request.
 */export const getEntitlements = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-01-11", sdkId: "Marketplace Entitlement Service", sigV4ServiceName: "aws-marketplace", name: "AWSMPEntitlementService.GetEntitlements" }, GetEntitlementsRequest, GetEntitlementsResult, [InternalServiceErrorException, InvalidParameterException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
