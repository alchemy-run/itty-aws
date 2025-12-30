import * as Schema from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DescribeServicesRequest extends Schema.Class<DescribeServicesRequest>("DescribeServicesRequest")({ServiceCode: Schema.optional(Schema.String), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class GetAttributeValuesRequest extends Schema.Class<GetAttributeValuesRequest>("GetAttributeValuesRequest")({ServiceCode: Schema.String, AttributeName: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class GetPriceListFileUrlRequest extends Schema.Class<GetPriceListFileUrlRequest>("GetPriceListFileUrlRequest")({PriceListArn: Schema.String, FileFormat: Schema.String}) {}
export class ListPriceListsRequest extends Schema.Class<ListPriceListsRequest>("ListPriceListsRequest")({ServiceCode: Schema.String, EffectiveDate: Schema.Date, RegionCode: Schema.optional(Schema.String), CurrencyCode: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class Filter extends Schema.Class<Filter>("Filter")({Type: Schema.String, Field: Schema.String, Value: Schema.String}) {}
export const Filters = Schema.Array(Filter);
export class GetPriceListFileUrlResponse extends Schema.Class<GetPriceListFileUrlResponse>("GetPriceListFileUrlResponse")({Url: Schema.optional(Schema.String)}) {}
export class GetProductsRequest extends Schema.Class<GetProductsRequest>("GetProductsRequest")({ServiceCode: Schema.String, Filters: Schema.optional(Filters), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export const AttributeNameList = Schema.Array(Schema.String);
export const FileFormats = Schema.Array(Schema.String);
export class Service extends Schema.Class<Service>("Service")({ServiceCode: Schema.String, AttributeNames: Schema.optional(AttributeNameList)}) {}
export const ServiceList = Schema.Array(Service);
export class AttributeValue extends Schema.Class<AttributeValue>("AttributeValue")({Value: Schema.optional(Schema.String)}) {}
export const AttributeValueList = Schema.Array(AttributeValue);
export const PriceListJsonItems = Schema.Array(Schema.String);
export class PriceList extends Schema.Class<PriceList>("PriceList")({PriceListArn: Schema.optional(Schema.String), RegionCode: Schema.optional(Schema.String), CurrencyCode: Schema.optional(Schema.String), FileFormats: Schema.optional(FileFormats)}) {}
export const PriceLists = Schema.Array(PriceList);
export class DescribeServicesResponse extends Schema.Class<DescribeServicesResponse>("DescribeServicesResponse")({Services: Schema.optional(ServiceList), FormatVersion: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String)}) {}
export class GetAttributeValuesResponse extends Schema.Class<GetAttributeValuesResponse>("GetAttributeValuesResponse")({AttributeValues: Schema.optional(AttributeValueList), NextToken: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class GetProductsResponse extends Schema.Class<GetProductsResponse>("GetProductsResponse")({FormatVersion: Schema.optional(Schema.String), PriceList: Schema.optional(PriceListJsonItems), NextToken: Schema.optional(Schema.String)}) {}
export class ListPriceListsResponse extends Schema.Class<ListPriceListsResponse>("ListPriceListsResponse")({PriceLists: Schema.optional(PriceLists), NextToken: Schema.optional(Schema.String)}) {}
export class ExpiredNextTokenException extends Schema.Class<ExpiredNextTokenException>("ExpiredNextTokenException")({Message: Schema.optional(Schema.String)}) {}
export class InternalErrorException extends Schema.Class<InternalErrorException>("InternalErrorException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidNextTokenException extends Schema.Class<InvalidNextTokenException>("InvalidNextTokenException")({Message: Schema.optional(Schema.String)}) {}
export class NotFoundException extends Schema.Class<NotFoundException>("NotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class ExpiredNextTokenExceptionError extends Schema.TaggedError<ExpiredNextTokenExceptionError>()("ExpiredNextTokenException", ExpiredNextTokenException.fields) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalErrorExceptionError extends Schema.TaggedError<InternalErrorExceptionError>()("InternalErrorException", InternalErrorException.fields) {};
export class InvalidNextTokenExceptionError extends Schema.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class NotFoundExceptionError extends Schema.TaggedError<NotFoundExceptionError>()("NotFoundException", NotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const getAttributeValues = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetAttributeValues" }, GetAttributeValuesRequest, GetAttributeValuesResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getProducts = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetProducts" }, GetProductsRequest, GetProductsResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPriceLists = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.ListPriceLists" }, ListPriceListsRequest, ListPriceListsResponse, [AccessDeniedExceptionError, ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeServices = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [ExpiredNextTokenExceptionError, InternalErrorExceptionError, InvalidNextTokenExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPriceListFileUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetPriceListFileUrl" }, GetPriceListFileUrlRequest, GetPriceListFileUrlResponse, [AccessDeniedExceptionError, InternalErrorExceptionError, InvalidParameterExceptionError, NotFoundExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
