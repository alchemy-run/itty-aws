import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const GenerateMappingRequest = Schema.Struct({inputFileContent: Schema.String, outputFileContent: Schema.String, mappingType: Schema.String})
const GetTransformerJobRequest = Schema.Struct({transformerJobId: Schema.String, transformerId: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({ResourceARN: Schema.String})
const StartTransformerJobRequest = Schema.Struct({inputFile: S3Location, outputLocation: S3Location, transformerId: Schema.String, clientToken: Schema.optional(Schema.String)})
const TestMappingRequest = Schema.Struct({inputFileContent: Schema.String, mappingTemplate: Schema.String, fileFormat: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeyList})
const S3Location = Schema.Struct({bucketName: Schema.optional(Schema.String), key: Schema.optional(Schema.String)})
const S3LocationList = Schema.Array(S3Location)
const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String})
const TagList = Schema.Array(Tag)
const EdiType = Schema.Union(X12Details)
const GenerateMappingResponse = Schema.Struct({mappingTemplate: Schema.String, mappingAccuracy: Schema.optional(Schema.Number)})
const GetTransformerJobResponse = Schema.Struct({status: Schema.String, outputFiles: Schema.optional(S3LocationList), message: Schema.optional(Schema.String)})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)})
const StartTransformerJobResponse = Schema.Struct({transformerJobId: Schema.String})
const TagResourceRequest = Schema.Struct({ResourceARN: Schema.String, Tags: TagList})
const TestMappingResponse = Schema.Struct({mappedFileContent: Schema.String})
export const TestMapping = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/testmapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "TestMapping" }, TestMappingRequest, TestMappingResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceARN}", method: "DELETE", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const X12Details = Schema.Struct({transactionSet: Schema.optional(Schema.String), version: Schema.optional(Schema.String)})
const InputFileSource = Schema.Union(Schema.String)
const ConversionTargetFormatDetails = Schema.Union(X12Details)
const OutputSampleFileSource = Schema.Union(S3Location)
const TemplateDetails = Schema.Union(X12Details)
const ConversionSource = Schema.Struct({fileFormat: Schema.String, inputFile: InputFileSource})
const ConversionTarget = Schema.Struct({fileFormat: Schema.String, formatDetails: Schema.optional(ConversionTargetFormatDetails), outputSampleFile: Schema.optional(OutputSampleFileSource), advancedOptions: Schema.optional(AdvancedOptions)})
const X12SplitOptions = Schema.Struct({splitBy: Schema.String})
const CreateStarterMappingTemplateRequest = Schema.Struct({outputSampleLocation: Schema.optional(S3Location), mappingType: Schema.String, templateDetails: TemplateDetails})
const AccessDeniedException = Schema.Struct({message: Schema.String})
export const GenerateMapping = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/generate-mapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "GenerateMapping" }, GenerateMappingRequest, GenerateMappingResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
export const GetTransformerJob = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/transformer-jobs/{transformerJobId}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "GetTransformerJob" }, GetTransformerJobRequest, GetTransformerJobResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({Message: Schema.String})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceARN}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConflictException = Schema.Struct({message: Schema.String})
export const StartTransformerJob = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/transformer-jobs", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "StartTransformerJob" }, StartTransformerJobRequest, StartTransformerJobResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceARN}", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TestConversionRequest = Schema.Struct({source: ConversionSource, target: ConversionTarget})
const ValidationMessages = Schema.Array(Schema.String)
const CodeList = Schema.Array(Schema.String)
const CreateStarterMappingTemplateResponse = Schema.Struct({mappingTemplate: Schema.String})
export const CreateStarterMappingTemplate = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/createmappingstarttemplate", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "CreateStarterMappingTemplate" }, CreateStarterMappingTemplateRequest, CreateStarterMappingTemplateResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TestConversionResponse = Schema.Struct({convertedFileContent: Schema.String, validationMessages: Schema.optional(ValidationMessages)})
export const TestConversion = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/testconversion", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "TestConversion" }, TestConversionRequest, TestConversionResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const X12CodeListValidationRule = Schema.Struct({elementId: Schema.String, codesToAdd: Schema.optional(CodeList), codesToRemove: Schema.optional(CodeList)})
const X12ElementLengthValidationRule = Schema.Struct({elementId: Schema.String, maxLength: Schema.Number, minLength: Schema.Number})
const X12ElementRequirementValidationRule = Schema.Struct({elementPosition: Schema.String, requirement: Schema.String})
const X12ValidationRule = Schema.Union(X12CodeListValidationRule, X12ElementLengthValidationRule, X12ElementRequirementValidationRule)
const X12ValidationRules = Schema.Array(X12ValidationRule)
const X12ValidationOptions = Schema.Struct({validationRules: Schema.optional(X12ValidationRules)})
const X12AdvancedOptions = Schema.Struct({splitOptions: Schema.optional(X12SplitOptions), validationOptions: Schema.optional(X12ValidationOptions)})
const AdvancedOptions = Schema.Struct({x12: Schema.optional(X12AdvancedOptions)})
const TestParsingRequest = Schema.Struct({inputFile: S3Location, fileFormat: Schema.String, ediType: EdiType, advancedOptions: Schema.optional(AdvancedOptions)})
const ParsedSplitFileContentsList = Schema.Array(Schema.String)
const TestParsingResponse = Schema.Struct({parsedFileContent: Schema.String, parsedSplitFileContents: Schema.optional(ParsedSplitFileContentsList), validationMessages: Schema.optional(ValidationMessages)})
export const TestParsing = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/testparsing", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "TestParsing" }, TestParsingRequest, TestParsingResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
