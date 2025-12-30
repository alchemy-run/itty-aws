import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const FilterValueList = Schema.Array(Schema.String);
export const GetEntitlementFilters = Schema.Record({key: Schema.String, value: FilterValueList});
export class GetEntitlementsRequest extends Schema.Class<GetEntitlementsRequest>("GetEntitlementsRequest")({ProductCode: Schema.String, Filter: Schema.optional(GetEntitlementFilters), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class EntitlementValue extends Schema.Class<EntitlementValue>("EntitlementValue")({IntegerValue: Schema.optional(Schema.Number), DoubleValue: Schema.optional(Schema.Number), BooleanValue: Schema.optional(Schema.Boolean), StringValue: Schema.optional(Schema.String)}) {}
export class Entitlement extends Schema.Class<Entitlement>("Entitlement")({ProductCode: Schema.optional(Schema.String), Dimension: Schema.optional(Schema.String), CustomerIdentifier: Schema.optional(Schema.String), CustomerAWSAccountId: Schema.optional(Schema.String), Value: Schema.optional(EntitlementValue), ExpirationDate: Schema.optional(Schema.Date)}) {}
export const EntitlementList = Schema.Array(Entitlement);
export class GetEntitlementsResult extends Schema.Class<GetEntitlementsResult>("GetEntitlementsResult")({Entitlements: Schema.optional(EntitlementList), NextToken: Schema.optional(Schema.String)}) {}
export class InternalServiceErrorException extends Schema.Class<InternalServiceErrorException>("InternalServiceErrorException")({message: Schema.optional(Schema.String)}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalServiceErrorExceptionError extends Schema.TaggedError<InternalServiceErrorExceptionError>()("InternalServiceErrorException", InternalServiceErrorException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const getEntitlements = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-01-11", uri: "/", method: "POST", sdkId: "Marketplace Entitlement Service", sigV4ServiceName: "aws-marketplace", name: "AWSMPEntitlementService.GetEntitlements" }, GetEntitlementsRequest, GetEntitlementsResult, [InternalServiceErrorExceptionError, InvalidParameterExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
