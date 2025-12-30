import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class GenerateMappingRequest extends Schema.Class<GenerateMappingRequest>("GenerateMappingRequest")({inputFileContent: Schema.String, outputFileContent: Schema.String, mappingType: Schema.String}) {}
export class GetTransformerJobRequest extends Schema.Class<GetTransformerJobRequest>("GetTransformerJobRequest")({transformerJobId: Schema.String, transformerId: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: Schema.String}) {}
export class S3Location extends Schema.Class<S3Location>("S3Location")({bucketName: Schema.optional(Schema.String), key: Schema.optional(Schema.String)}) {}
export class StartTransformerJobRequest extends Schema.Class<StartTransformerJobRequest>("StartTransformerJobRequest")({inputFile: S3Location, outputLocation: S3Location, transformerId: Schema.String, clientToken: Schema.optional(Schema.String)}) {}
export class TestMappingRequest extends Schema.Class<TestMappingRequest>("TestMappingRequest")({inputFileContent: Schema.String, mappingTemplate: Schema.String, fileFormat: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: Schema.String, TagKeys: TagKeyList}) {}
export const S3LocationList = Schema.Array(S3Location);
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class X12Details extends Schema.Class<X12Details>("X12Details")({transactionSet: Schema.optional(Schema.String), version: Schema.optional(Schema.String)}) {}
export const EdiType = Schema.Union(X12Details);
export class GenerateMappingResponse extends Schema.Class<GenerateMappingResponse>("GenerateMappingResponse")({mappingTemplate: Schema.String, mappingAccuracy: Schema.optional(Schema.Number)}) {}
export class GetTransformerJobResponse extends Schema.Class<GetTransformerJobResponse>("GetTransformerJobResponse")({status: Schema.String, outputFiles: Schema.optional(S3LocationList), message: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: Schema.optional(TagList)}) {}
export class StartTransformerJobResponse extends Schema.Class<StartTransformerJobResponse>("StartTransformerJobResponse")({transformerJobId: Schema.String}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: Schema.String, Tags: TagList}) {}
export class TestMappingResponse extends Schema.Class<TestMappingResponse>("TestMappingResponse")({mappedFileContent: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export const InputFileSource = Schema.Union(Schema.String);
export const ConversionTargetFormatDetails = Schema.Union(X12Details);
export const OutputSampleFileSource = Schema.Union(S3Location);
export const TemplateDetails = Schema.Union(X12Details);
export class ConversionSource extends Schema.Class<ConversionSource>("ConversionSource")({fileFormat: Schema.String, inputFile: InputFileSource}) {}
export class X12SplitOptions extends Schema.Class<X12SplitOptions>("X12SplitOptions")({splitBy: Schema.String}) {}
export const CodeList = Schema.Array(Schema.String);
export class X12CodeListValidationRule extends Schema.Class<X12CodeListValidationRule>("X12CodeListValidationRule")({elementId: Schema.String, codesToAdd: Schema.optional(CodeList), codesToRemove: Schema.optional(CodeList)}) {}
export class X12ElementLengthValidationRule extends Schema.Class<X12ElementLengthValidationRule>("X12ElementLengthValidationRule")({elementId: Schema.String, maxLength: Schema.Number, minLength: Schema.Number}) {}
export class X12ElementRequirementValidationRule extends Schema.Class<X12ElementRequirementValidationRule>("X12ElementRequirementValidationRule")({elementPosition: Schema.String, requirement: Schema.String}) {}
export const X12ValidationRule = Schema.Union(X12CodeListValidationRule, X12ElementLengthValidationRule, X12ElementRequirementValidationRule);
export const X12ValidationRules = Schema.Array(X12ValidationRule);
export class X12ValidationOptions extends Schema.Class<X12ValidationOptions>("X12ValidationOptions")({validationRules: Schema.optional(X12ValidationRules)}) {}
export class X12AdvancedOptions extends Schema.Class<X12AdvancedOptions>("X12AdvancedOptions")({splitOptions: Schema.optional(X12SplitOptions), validationOptions: Schema.optional(X12ValidationOptions)}) {}
export class AdvancedOptions extends Schema.Class<AdvancedOptions>("AdvancedOptions")({x12: Schema.optional(X12AdvancedOptions)}) {}
export class ConversionTarget extends Schema.Class<ConversionTarget>("ConversionTarget")({fileFormat: Schema.String, formatDetails: Schema.optional(ConversionTargetFormatDetails), outputSampleFile: Schema.optional(OutputSampleFileSource), advancedOptions: Schema.optional(AdvancedOptions)}) {}
export class CreateStarterMappingTemplateRequest extends Schema.Class<CreateStarterMappingTemplateRequest>("CreateStarterMappingTemplateRequest")({outputSampleLocation: Schema.optional(S3Location), mappingType: Schema.String, templateDetails: TemplateDetails}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.String}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class TestConversionRequest extends Schema.Class<TestConversionRequest>("TestConversionRequest")({source: ConversionSource, target: ConversionTarget}) {}
export const ValidationMessages = Schema.Array(Schema.String);
export class CreateStarterMappingTemplateResponse extends Schema.Class<CreateStarterMappingTemplateResponse>("CreateStarterMappingTemplateResponse")({mappingTemplate: Schema.String}) {}
export class TestConversionResponse extends Schema.Class<TestConversionResponse>("TestConversionResponse")({convertedFileContent: Schema.String, validationMessages: Schema.optional(ValidationMessages)}) {}
export class TestParsingRequest extends Schema.Class<TestParsingRequest>("TestParsingRequest")({inputFile: S3Location, fileFormat: Schema.String, ediType: EdiType, advancedOptions: Schema.optional(AdvancedOptions)}) {}
export const ParsedSplitFileContentsList = Schema.Array(Schema.String);
export class TestParsingResponse extends Schema.Class<TestParsingResponse>("TestParsingResponse")({parsedFileContent: Schema.String, parsedSplitFileContents: Schema.optional(ParsedSplitFileContentsList), validationMessages: Schema.optional(ValidationMessages)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};

//# Operations
export const testMapping = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/testmapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestMapping" }, TestMappingRequest, TestMappingResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "DELETE", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const generateMapping = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/generate-mapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GenerateMapping" }, GenerateMappingRequest, GenerateMappingResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTransformerJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/transformer-jobs/{transformerJobId}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GetTransformerJob" }, GetTransformerJobRequest, GetTransformerJobResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startTransformerJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/transformer-jobs", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.StartTransformerJob" }, StartTransformerJobRequest, StartTransformerJobResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TagResource" }, TagResourceRequest, Schema.Struct({}), [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createStarterMappingTemplate = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/createmappingstarttemplate", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.CreateStarterMappingTemplate" }, CreateStarterMappingTemplateRequest, CreateStarterMappingTemplateResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const testConversion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/testconversion", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestConversion" }, TestConversionRequest, TestConversionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const testParsing = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-06-23", uri: "/testparsing", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestParsing" }, TestParsingRequest, TestParsingResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
