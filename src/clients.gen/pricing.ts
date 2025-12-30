import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DescribeServicesRequest = Schema.Struct({ServiceCode: Schema.optional(Schema.String), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const GetAttributeValuesRequest = Schema.Struct({ServiceCode: Schema.String, AttributeName: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const GetPriceListFileUrlRequest = Schema.Struct({PriceListArn: Schema.String, FileFormat: Schema.String});
export const ListPriceListsRequest = Schema.Struct({ServiceCode: Schema.String, EffectiveDate: Schema.Date, RegionCode: Schema.optional(Schema.String), CurrencyCode: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const Filter = Schema.Struct({Type: Schema.String, Field: Schema.String, Value: Schema.String});
export const Filters = Schema.Array(Filter);
export const GetPriceListFileUrlResponse = Schema.Struct({Url: Schema.optional(Schema.String)});
export const GetProductsRequest = Schema.Struct({ServiceCode: Schema.String, Filters: Schema.optional(Filters), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const AttributeNameList = Schema.Array(Schema.String);
export const FileFormats = Schema.Array(Schema.String);
export const Service = Schema.Struct({ServiceCode: Schema.String, AttributeNames: Schema.optional(AttributeNameList)});
export const ServiceList = Schema.Array(Service);
export const AttributeValue = Schema.Struct({Value: Schema.optional(Schema.String)});
export const AttributeValueList = Schema.Array(AttributeValue);
export const PriceListJsonItems = Schema.Array(Schema.String);
export const PriceList = Schema.Struct({PriceListArn: Schema.optional(Schema.String), RegionCode: Schema.optional(Schema.String), CurrencyCode: Schema.optional(Schema.String), FileFormats: Schema.optional(FileFormats)});
export const PriceLists = Schema.Array(PriceList);
export const DescribeServicesResponse = Schema.Struct({Services: Schema.optional(ServiceList), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String)});
export const GetAttributeValuesResponse = Schema.Struct({AttributeValues: Schema.optional(AttributeValueList), NextToken: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const GetProductsResponse = Schema.Struct({FormatVersion: Schema.optional(Schema.String), PriceList: Schema.optional(PriceListJsonItems), NextToken: Schema.optional(Schema.String)});
export const ListPriceListsResponse = Schema.Struct({PriceLists: Schema.optional(PriceLists), NextToken: Schema.optional(Schema.String)});
export const ExpiredNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalErrorException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidNextTokenException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class ExpiredNextTokenExceptionError extends Schema.TaggedError<ExpiredNextTokenExceptionError>()("ExpiredNextTokenException", ExpiredNextTokenException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalErrorExceptionError extends Schema.TaggedError<InternalErrorExceptionError>()("InternalErrorException", InternalErrorException) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const getAttributeValues = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetAttributeValues" }, GetAttributeValuesRequest, GetAttributeValuesResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getProducts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetProducts" }, GetProductsRequest, GetProductsResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPriceLists = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.ListPriceLists" }, ListPriceListsRequest, ListPriceListsResponse, [AccessDeniedExceptionError, ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeServices = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPriceListFileUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetPriceListFileUrl" }, GetPriceListFileUrlRequest, GetPriceListFileUrlResponse, [AccessDeniedExceptionError, InternalErrorExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
