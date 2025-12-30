import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class GenerateMappingRequest extends S.Class<GenerateMappingRequest>("GenerateMappingRequest")({inputFileContent: S.String, outputFileContent: S.String, mappingType: S.String}) {}
export class GetTransformerJobRequest extends S.Class<GetTransformerJobRequest>("GetTransformerJobRequest")({transformerJobId: S.String, transformerId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({bucketName: S.optional(S.String), key: S.optional(S.String)}) {}
export class StartTransformerJobRequest extends S.Class<StartTransformerJobRequest>("StartTransformerJobRequest")({inputFile: S3Location, outputLocation: S3Location, transformerId: S.String, clientToken: S.optional(S.String)}) {}
export class TestMappingRequest extends S.Class<TestMappingRequest>("TestMappingRequest")({inputFileContent: S.String, mappingTemplate: S.String, fileFormat: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export const S3LocationList = S.Array(S3Location);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class X12Details extends S.Class<X12Details>("X12Details")({transactionSet: S.optional(S.String), version: S.optional(S.String)}) {}
export const EdiType = S.Union(X12Details);
export class GenerateMappingResponse extends S.Class<GenerateMappingResponse>("GenerateMappingResponse")({mappingTemplate: S.String, mappingAccuracy: S.optional(S.Number)}) {}
export class GetTransformerJobResponse extends S.Class<GetTransformerJobResponse>("GetTransformerJobResponse")({status: S.String, outputFiles: S.optional(S3LocationList), message: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class StartTransformerJobResponse extends S.Class<StartTransformerJobResponse>("StartTransformerJobResponse")({transformerJobId: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TestMappingResponse extends S.Class<TestMappingResponse>("TestMappingResponse")({mappedFileContent: S.String}) {}
export const InputFileSource = S.Union(S.String);
export const ConversionTargetFormatDetails = S.Union(X12Details);
export const OutputSampleFileSource = S.Union(S3Location);
export const TemplateDetails = S.Union(X12Details);
export class ConversionSource extends S.Class<ConversionSource>("ConversionSource")({fileFormat: S.String, inputFile: InputFileSource}) {}
export class X12SplitOptions extends S.Class<X12SplitOptions>("X12SplitOptions")({splitBy: S.String}) {}
export const CodeList = S.Array(S.String);
export class X12CodeListValidationRule extends S.Class<X12CodeListValidationRule>("X12CodeListValidationRule")({elementId: S.String, codesToAdd: S.optional(CodeList), codesToRemove: S.optional(CodeList)}) {}
export class X12ElementLengthValidationRule extends S.Class<X12ElementLengthValidationRule>("X12ElementLengthValidationRule")({elementId: S.String, maxLength: S.Number, minLength: S.Number}) {}
export class X12ElementRequirementValidationRule extends S.Class<X12ElementRequirementValidationRule>("X12ElementRequirementValidationRule")({elementPosition: S.String, requirement: S.String}) {}
export const X12ValidationRule = S.Union(X12CodeListValidationRule, X12ElementLengthValidationRule, X12ElementRequirementValidationRule);
export const X12ValidationRules = S.Array(X12ValidationRule);
export class X12ValidationOptions extends S.Class<X12ValidationOptions>("X12ValidationOptions")({validationRules: S.optional(X12ValidationRules)}) {}
export class X12AdvancedOptions extends S.Class<X12AdvancedOptions>("X12AdvancedOptions")({splitOptions: S.optional(X12SplitOptions), validationOptions: S.optional(X12ValidationOptions)}) {}
export class AdvancedOptions extends S.Class<AdvancedOptions>("AdvancedOptions")({x12: S.optional(X12AdvancedOptions)}) {}
export class ConversionTarget extends S.Class<ConversionTarget>("ConversionTarget")({fileFormat: S.String, formatDetails: S.optional(ConversionTargetFormatDetails), outputSampleFile: S.optional(OutputSampleFileSource), advancedOptions: S.optional(AdvancedOptions)}) {}
export class CreateStarterMappingTemplateRequest extends S.Class<CreateStarterMappingTemplateRequest>("CreateStarterMappingTemplateRequest")({outputSampleLocation: S.optional(S3Location), mappingType: S.String, templateDetails: TemplateDetails}) {}
export class TestConversionRequest extends S.Class<TestConversionRequest>("TestConversionRequest")({source: ConversionSource, target: ConversionTarget}) {}
export const ValidationMessages = S.Array(S.String);
export class CreateStarterMappingTemplateResponse extends S.Class<CreateStarterMappingTemplateResponse>("CreateStarterMappingTemplateResponse")({mappingTemplate: S.String}) {}
export class TestConversionResponse extends S.Class<TestConversionResponse>("TestConversionResponse")({convertedFileContent: S.String, validationMessages: S.optional(ValidationMessages)}) {}
export class TestParsingRequest extends S.Class<TestParsingRequest>("TestParsingRequest")({inputFile: S3Location, fileFormat: S.String, ediType: EdiType, advancedOptions: S.optional(AdvancedOptions)}) {}
export const ParsedSplitFileContentsList = S.Array(S.String);
export class TestParsingResponse extends S.Class<TestParsingResponse>("TestParsingResponse")({parsedFileContent: S.String, parsedSplitFileContents: S.optional(ParsedSplitFileContentsList), validationMessages: S.optional(ValidationMessages)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.String}) {};

//# Operations
export const testMapping = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testmapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestMapping" }, TestMappingRequest, TestMappingResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "DELETE", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.UntagResource" }, UntagResourceRequest, S.Struct({}), [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const generateMapping = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/generate-mapping", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GenerateMapping" }, GenerateMappingRequest, GenerateMappingResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getTransformerJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/transformer-jobs/{transformerJobId}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GetTransformerJob" }, GetTransformerJobRequest, GetTransformerJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startTransformerJob = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/transformer-jobs", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.StartTransformerJob" }, StartTransformerJobRequest, StartTransformerJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TagResource" }, TagResourceRequest, S.Struct({}), [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createStarterMappingTemplate = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/createmappingstarttemplate", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.CreateStarterMappingTemplate" }, CreateStarterMappingTemplateRequest, CreateStarterMappingTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const testConversion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testconversion", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestConversion" }, TestConversionRequest, TestConversionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const testParsing = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testparsing", method: "POST", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestParsing" }, TestParsingRequest, TestParsingResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
