import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeServicesRequest extends S.Class<DescribeServicesRequest>("DescribeServicesRequest")({ServiceCode: S.optional(S.String), FormatVersion: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetAttributeValuesRequest extends S.Class<GetAttributeValuesRequest>("GetAttributeValuesRequest")({ServiceCode: S.String, AttributeName: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class GetPriceListFileUrlRequest extends S.Class<GetPriceListFileUrlRequest>("GetPriceListFileUrlRequest")({PriceListArn: S.String, FileFormat: S.String}) {}
export class ListPriceListsRequest extends S.Class<ListPriceListsRequest>("ListPriceListsRequest")({ServiceCode: S.String, EffectiveDate: S.Date, RegionCode: S.optional(S.String), CurrencyCode: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class Filter extends S.Class<Filter>("Filter")({Type: S.String, Field: S.String, Value: S.String}) {}
export const Filters = S.Array(Filter);
export class GetPriceListFileUrlResponse extends S.Class<GetPriceListFileUrlResponse>("GetPriceListFileUrlResponse")({Url: S.optional(S.String)}) {}
export class GetProductsRequest extends S.Class<GetProductsRequest>("GetProductsRequest")({ServiceCode: S.String, Filters: S.optional(Filters), FormatVersion: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export const AttributeNameList = S.Array(S.String);
export const FileFormats = S.Array(S.String);
export class Service extends S.Class<Service>("Service")({ServiceCode: S.String, AttributeNames: S.optional(AttributeNameList)}) {}
export const ServiceList = S.Array(Service);
export class AttributeValue extends S.Class<AttributeValue>("AttributeValue")({Value: S.optional(S.String)}) {}
export const AttributeValueList = S.Array(AttributeValue);
export const PriceListJsonItems = S.Array(S.String);
export class PriceList extends S.Class<PriceList>("PriceList")({PriceListArn: S.optional(S.String), RegionCode: S.optional(S.String), CurrencyCode: S.optional(S.String), FileFormats: S.optional(FileFormats)}) {}
export const PriceLists = S.Array(PriceList);
export class DescribeServicesResponse extends S.Class<DescribeServicesResponse>("DescribeServicesResponse")({Services: S.optional(ServiceList), FormatVersion: S.optional(S.String), NextToken: S.optional(S.String)}) {}
export class GetAttributeValuesResponse extends S.Class<GetAttributeValuesResponse>("GetAttributeValuesResponse")({AttributeValues: S.optional(AttributeValueList), NextToken: S.optional(S.String)}) {}
export class GetProductsResponse extends S.Class<GetProductsResponse>("GetProductsResponse")({FormatVersion: S.optional(S.String), PriceList: S.optional(PriceListJsonItems), NextToken: S.optional(S.String)}) {}
export class ListPriceListsResponse extends S.Class<ListPriceListsResponse>("ListPriceListsResponse")({PriceLists: S.optional(PriceLists), NextToken: S.optional(S.String)}) {}

//# Errors
export class ExpiredNextTokenException extends S.TaggedError<ExpiredNextTokenException>()("ExpiredNextTokenException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {Message: S.optional(S.String)}) {};
export class InternalErrorException extends S.TaggedError<InternalErrorException>()("InternalErrorException", {}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
export const getAttributeValues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetAttributeValues" }, GetAttributeValuesRequest, GetAttributeValuesResponse, [ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getProducts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetProducts" }, GetProductsRequest, GetProductsResponse, [ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listPriceLists = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.ListPriceLists" }, ListPriceListsRequest, ListPriceListsResponse, [AccessDeniedException, ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.DescribeServices" }, DescribeServicesRequest, DescribeServicesResponse, [ExpiredNextTokenException, InternalErrorException, InvalidNextTokenException, InvalidParameterException, NotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getPriceListFileUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-15", uri: "/", method: "POST", sdkId: "Pricing", sigV4ServiceName: "pricing", name: "AWSPriceListService.GetPriceListFileUrl" }, GetPriceListFileUrlRequest, GetPriceListFileUrlResponse, [AccessDeniedException, InternalErrorException, InvalidParameterException, NotFoundException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
