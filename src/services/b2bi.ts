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
/**
 * Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the `inputFileContent` parameter.
 */export const testMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testmapping", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestMapping" }, TestMappingRequest, TestMappingResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Detaches a key-value pair from the specified resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "DELETE", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.UntagResource" }, UntagResourceRequest, S.Struct({}), [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Takes sample input and output documents and uses Amazon Bedrock to generate a mapping automatically. Depending on the accuracy and other factors, you can then edit the mapping for your needs.
 * 
 * 
 * Before you can use the AI-assisted feature for Amazon Web Services B2B Data Interchange you must enable models in Amazon Bedrock. For details, see AI-assisted template mapping prerequisites in the *Amazon Web Services B2B Data Interchange User guide*.
 * 
 * 
 * To generate a mapping, perform the following steps:
 * 
 * - Start with an X12 EDI document to use as the input.
 * 
 * - Call `TestMapping` using your EDI document.
 * 
 * - Use the output from the `TestMapping` operation as either input or output for your GenerateMapping call, along with your sample file.
 */export const generateMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/generate-mapping", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GenerateMapping" }, GenerateMappingRequest, GenerateMappingResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details of the transformer run, based on the Transformer job ID.
 * 
 * 
 * If 30 days have elapsed since your transformer job was started, the system deletes it. So, if you run `GetTransformerJob` and supply a `transformerId` and `transformerJobId` for a job that was started more than 30 days previously, you receive a 404 response.
 */export const getTransformerJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/transformer-jobs/{transformerJobId}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.GetTransformerJob" }, GetTransformerJobRequest, GetTransformerJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a capability, partnership, profile, or transformer.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", method: "GET", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2B Data Interchange.
 * 
 * If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the `StartTransformerJob` API to process your files.
 * 
 * 
 * The system stores transformer jobs for 30 days. During that period, you can run GetTransformerJob and supply its `transformerId` and `transformerJobId` to return details of the job.
 */export const startTransformerJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/transformer-jobs", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.StartTransformerJob" }, StartTransformerJobRequest, StartTransformerJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities.
 * 
 * There is no response returned from this call.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/tags/{ResourceARN}", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TagResource" }, TagResourceRequest, S.Struct({}), [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Amazon Web Services B2B Data Interchange uses a mapping template in JSONata or XSLT format to transform a customer input file into a JSON or XML file that can be converted to EDI.
 * 
 * If you provide a sample EDI file with the same structure as the EDI files that you wish to generate, then the service can generate a mapping template. The starter template contains placeholder values which you can replace with JSONata or XSLT expressions to take data from your input file and insert it into the JSON or XML file that is used to generate the EDI.
 * 
 * If you do not provide a sample EDI file, then the service can generate a mapping template based on the EDI settings in the `templateDetails` parameter.
 * 
 * Currently, we only support generating a template that can generate the input to produce an Outbound X12 EDI file.
 */export const createStarterMappingTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/createmappingstarttemplate", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.CreateStarterMappingTemplate" }, CreateStarterMappingTemplateRequest, CreateStarterMappingTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation mimics the latter half of a typical Outbound EDI request. It takes an input JSON/XML in the B2Bi shape as input, converts it to an X12 EDI string, and return that string.
 */export const testConversion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testconversion", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestConversion" }, TestConversionRequest, TestConversionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.
 */export const testParsing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-23", uri: "/testparsing", sdkId: "b2bi", sigV4ServiceName: "b2bi", name: "B2BI.TestParsing" }, TestParsingRequest, TestParsingResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
