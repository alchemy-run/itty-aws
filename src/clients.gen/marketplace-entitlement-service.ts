import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const FilterValueList = Schema.Array(Schema.String);
export const GetEntitlementFilters = Schema.Record({key: Schema.String, value: FilterValueList});
export const GetEntitlementsRequest = Schema.Struct({ProductCode: Schema.String, Filter: Schema.optional(GetEntitlementFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const EntitlementValue = Schema.Struct({IntegerValue: Schema.optional(Schema.Number), DoubleValue: Schema.optional(Schema.Number), BooleanValue: Schema.optional(Schema.Boolean), StringValue: Schema.optional(Schema.String)});
export const Entitlement = Schema.Struct({ProductCode: Schema.optional(Schema.String), Dimension: Schema.optional(Schema.String), CustomerIdentifier: Schema.optional(Schema.String), CustomerAWSAccountId: Schema.optional(Schema.String), Value: Schema.optional(EntitlementValue), ExpirationDate: Schema.optional(Schema.Date)});
export const EntitlementList = Schema.Array(Entitlement);
export const GetEntitlementsResult = Schema.Struct({Entitlements: Schema.optional(EntitlementList), NextToken: Schema.optional(Schema.String)});
export const InternalServiceErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class InternalServiceErrorExceptionError extends Schema.TaggedError<InternalServiceErrorExceptionError>()("InternalServiceErrorException", InternalServiceErrorException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const getEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-11", uri: "/", method: "POST", sdkId: "Marketplace Entitlement Service", sigV4ServiceName: "aws-marketplace", name: "AWSMPEntitlementService.GetEntitlements" }, GetEntitlementsRequest, GetEntitlementsResult, [InternalServiceErrorExceptionError, InvalidParameterExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
