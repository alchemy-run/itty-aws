import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const GenerateMappingRequest = Schema.Struct({inputFileContent: Schema.String, outputFileContent: Schema.String, mappingType: Schema.String});
export const GetTransformerJobRequest = Schema.Struct({transformerJobId: Schema.String, transformerId: Schema.String});
export const ListTagsForResourceRequest = Schema.Struct({ResourceARN: Schema.String});
export const S3Location = Schema.Struct({bucketName: Schema.optional(Schema.String), key: Schema.optional(Schema.String)});
export const StartTransformerJobRequest = Schema.Struct({inputFile: S3Location, outputLocation: S3Location, transformerId: Schema.String, clientToken: Schema.optional(Schema.String)});
export const TestMappingRequest = Schema.Struct({inputFileContent: Schema.String, mappingTemplate: Schema.String, fileFormat: Schema.String});
export const UntagResourceRequest = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeyList});
export const S3LocationList = Schema.Array(S3Location);
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const X12Details = Schema.Struct({transactionSet: Schema.optional(Schema.String), version: Schema.optional(Schema.String)});
export const EdiType = Schema.Union(X12Details);
export const GenerateMappingResponse = Schema.Struct({mappingTemplate: Schema.String, mappingAccuracy: Schema.optional(Schema.Number)});
export const GetTransformerJobResponse = Schema.Struct({status: Schema.String, outputFiles: Schema.optional(S3LocationList), message: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const StartTransformerJobResponse = Schema.Struct({transformerJobId: Schema.String});
export const TagResourceRequest = Schema.Struct({ResourceARN: Schema.String, Tags: TagList});
export const TestMappingResponse = Schema.Struct({mappedFileContent: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const InputFileSource = Schema.Union(Schema.String);
export const ConversionTargetFormatDetails = Schema.Union(X12Details);
export const OutputSampleFileSource = Schema.Union(S3Location);
export const TemplateDetails = Schema.Union(X12Details);
export const ConversionSource = Schema.Struct({fileFormat: Schema.String, inputFile: InputFileSource});
export const X12SplitOptions = Schema.Struct({splitBy: Schema.String});
export const CodeList = Schema.Array(Schema.String);
export const X12CodeListValidationRule = Schema.Struct({elementId: Schema.String, codesToAdd: Schema.optional(CodeList), codesToRemove: Schema.optional(CodeList)});
export const X12ElementLengthValidationRule = Schema.Struct({elementId: Schema.String, maxLength: Schema.Number, minLength: Schema.Number});
export const X12ElementRequirementValidationRule = Schema.Struct({elementPosition: Schema.String, requirement: Schema.String});
export const X12ValidationRule = Schema.Union(X12CodeListValidationRule, X12ElementLengthValidationRule, X12ElementRequirementValidationRule);
export const X12ValidationRules = Schema.Array(X12ValidationRule);
export const X12ValidationOptions = Schema.Struct({validationRules: Schema.optional(X12ValidationRules)});
export const X12AdvancedOptions = Schema.Struct({splitOptions: Schema.optional(X12SplitOptions), validationOptions: Schema.optional(X12ValidationOptions)});
export const AdvancedOptions = Schema.Struct({x12: Schema.optional(X12AdvancedOptions)});
export const ConversionTarget = Schema.Struct({fileFormat: Schema.String, formatDetails: Schema.optional(ConversionTargetFormatDetails), outputSampleFile: Schema.optional(OutputSampleFileSource), advancedOptions: Schema.optional(AdvancedOptions)});
export const CreateStarterMappingTemplateRequest = Schema.Struct({outputSampleLocation: Schema.optional(S3Location), mappingType: Schema.String, templateDetails: TemplateDetails});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({Message: Schema.String});
export const ConflictException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const TestConversionRequest = Schema.Struct({source: ConversionSource, target: ConversionTarget});
export const ValidationMessages = Schema.Array(Schema.String);
export const CreateStarterMappingTemplateResponse = Schema.Struct({mappingTemplate: Schema.String});
export const TestConversionResponse = Schema.Struct({convertedFileContent: Schema.String, validationMessages: Schema.optional(ValidationMessages)});
export const TestParsingRequest = Schema.Struct({inputFile: S3Location, fileFormat: Schema.String, ediType: EdiType, advancedOptions: Schema.optional(AdvancedOptions)});
export const ParsedSplitFileContentsList = Schema.Array(Schema.String);
export const TestParsingResponse = Schema.Struct({parsedFileContent: Schema.String, parsedSplitFileContents: Schema.optional(ParsedSplitFileContentsList), validationMessages: Schema.optional(ValidationMessages)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};

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
