import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServiceErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const Entitlement = Schema.Struct({ProductCode: Schema.optional(Schema.String), Dimension: Schema.optional(Schema.String), CustomerIdentifier: Schema.optional(Schema.String), CustomerAWSAccountId: Schema.optional(Schema.String), Value: Schema.optional(EntitlementValue), ExpirationDate: Schema.optional(Schema.Date)});
export const EntitlementList = Schema.Array(Entitlement);
export const EntitlementValue = Schema.Struct({IntegerValue: Schema.optional(Schema.Number), DoubleValue: Schema.optional(Schema.Number), BooleanValue: Schema.optional(Schema.Boolean), StringValue: Schema.optional(Schema.String)});
export const GetEntitlementsResult = Schema.Struct({Entitlements: Schema.optional(EntitlementList), NextToken: Schema.optional(Schema.String)});
export const GetEntitlementFilters = Schema.Record({key: Schema.String, value: FilterValueList});
export const FilterValueList = Schema.Array(Schema.String);
export const GetEntitlementsRequest = Schema.Struct({ProductCode: Schema.String, Filter: Schema.optional(GetEntitlementFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const GetEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Marketplace Entitlement Service", sigV4ServiceName: "aws-marketplace", name: "AWSMPEntitlementService.GetEntitlements" }, GetEntitlementsRequest, GetEntitlementsResult, Schema.Union(ErrorAnnotation("InternalServiceErrorException", InternalServiceErrorException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
