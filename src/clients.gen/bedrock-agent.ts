import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class InputFlowNodeConfiguration extends Schema.Class<InputFlowNodeConfiguration>("InputFlowNodeConfiguration")({}) {}
export class OutputFlowNodeConfiguration extends Schema.Class<OutputFlowNodeConfiguration>("OutputFlowNodeConfiguration")({}) {}
export class IteratorFlowNodeConfiguration extends Schema.Class<IteratorFlowNodeConfiguration>("IteratorFlowNodeConfiguration")({}) {}
export class CollectorFlowNodeConfiguration extends Schema.Class<CollectorFlowNodeConfiguration>("CollectorFlowNodeConfiguration")({}) {}
export class LoopInputFlowNodeConfiguration extends Schema.Class<LoopInputFlowNodeConfiguration>("LoopInputFlowNodeConfiguration")({}) {}
export class FlowNodeInput extends Schema.Class<FlowNodeInput>("FlowNodeInput")({name: Schema.String, type: Schema.String, expression: Schema.String, category: Schema.optional(Schema.String)}) {}
export const FlowNodeInputs = Schema.Array(FlowNodeInput);
export class FlowNodeOutput extends Schema.Class<FlowNodeOutput>("FlowNodeOutput")({name: Schema.String, type: Schema.String}) {}
export const FlowNodeOutputs = Schema.Array(FlowNodeOutput);
export class LexFlowNodeConfiguration extends Schema.Class<LexFlowNodeConfiguration>("LexFlowNodeConfiguration")({botAliasArn: Schema.String, localeId: Schema.String}) {}
export class LambdaFunctionFlowNodeConfiguration extends Schema.Class<LambdaFunctionFlowNodeConfiguration>("LambdaFunctionFlowNodeConfiguration")({lambdaArn: Schema.String}) {}
export class AgentFlowNodeConfiguration extends Schema.Class<AgentFlowNodeConfiguration>("AgentFlowNodeConfiguration")({agentAliasArn: Schema.String}) {}
export class InlineCodeFlowNodeConfiguration extends Schema.Class<InlineCodeFlowNodeConfiguration>("InlineCodeFlowNodeConfiguration")({code: Schema.String, language: Schema.String}) {}
export class LoopFlowNodeConfiguration extends Schema.Class<LoopFlowNodeConfiguration>("LoopFlowNodeConfiguration")({definition: Schema.suspend((): Schema.Schema<FlowDefinition> => FlowDefinition)}) {}
export class FlowCondition extends Schema.Class<FlowCondition>("FlowCondition")({name: Schema.String, expression: Schema.optional(Schema.String)}) {}
export class LoopControllerFlowNodeConfiguration extends Schema.Class<LoopControllerFlowNodeConfiguration>("LoopControllerFlowNodeConfiguration")({continueCondition: FlowCondition, maxIterations: Schema.optional(Schema.Number)}) {}
export class FlowDataConnectionConfiguration extends Schema.Class<FlowDataConnectionConfiguration>("FlowDataConnectionConfiguration")({sourceOutput: Schema.String, targetInput: Schema.String}) {}
export class FlowConditionalConnectionConfiguration extends Schema.Class<FlowConditionalConnectionConfiguration>("FlowConditionalConnectionConfiguration")({condition: Schema.String}) {}
export const FlowConnectionConfiguration = Schema.Union(FlowDataConnectionConfiguration, FlowConditionalConnectionConfiguration);
export class GuardrailConfiguration extends Schema.Class<GuardrailConfiguration>("GuardrailConfiguration")({guardrailIdentifier: Schema.optional(Schema.String), guardrailVersion: Schema.optional(Schema.String)}) {}
export class KnowledgeBasePromptTemplate extends Schema.Class<KnowledgeBasePromptTemplate>("KnowledgeBasePromptTemplate")({textPromptTemplate: Schema.optional(Schema.String)}) {}
export const FlowConditions = Schema.Array(FlowCondition);
export const StopSequences = Schema.Array(Schema.String);
export class FlowConnection extends Schema.Class<FlowConnection>("FlowConnection")({type: Schema.String, name: Schema.String, source: Schema.String, target: Schema.String, configuration: Schema.optional(FlowConnectionConfiguration)}) {}
export const FlowConnections = Schema.Array(FlowConnection);
export class ConditionFlowNodeConfiguration extends Schema.Class<ConditionFlowNodeConfiguration>("ConditionFlowNodeConfiguration")({conditions: FlowConditions}) {}
export class PromptModelInferenceConfiguration extends Schema.Class<PromptModelInferenceConfiguration>("PromptModelInferenceConfiguration")({temperature: Schema.optional(Schema.Number), topP: Schema.optional(Schema.Number), maxTokens: Schema.optional(Schema.Number), stopSequences: Schema.optional(StopSequences)}) {}
export const AdditionalModelRequestFields = Schema.Record({key: Schema.String, value: Schema.JsonValue});
export class PerformanceConfiguration extends Schema.Class<PerformanceConfiguration>("PerformanceConfiguration")({latency: Schema.optional(Schema.String)}) {}
export class PromptFlowNodeResourceConfiguration extends Schema.Class<PromptFlowNodeResourceConfiguration>("PromptFlowNodeResourceConfiguration")({promptArn: Schema.String}) {}
export class StorageFlowNodeS3Configuration extends Schema.Class<StorageFlowNodeS3Configuration>("StorageFlowNodeS3Configuration")({bucketName: Schema.String}) {}
export class RetrievalFlowNodeS3Configuration extends Schema.Class<RetrievalFlowNodeS3Configuration>("RetrievalFlowNodeS3Configuration")({bucketName: Schema.String}) {}
export const PromptInferenceConfiguration = Schema.Union(PromptModelInferenceConfiguration);
export class KnowledgeBaseOrchestrationConfiguration extends Schema.Class<KnowledgeBaseOrchestrationConfiguration>("KnowledgeBaseOrchestrationConfiguration")({promptTemplate: Schema.optional(KnowledgeBasePromptTemplate), inferenceConfig: Schema.optional(PromptInferenceConfiguration), additionalModelRequestFields: Schema.optional(AdditionalModelRequestFields), performanceConfig: Schema.optional(PerformanceConfiguration)}) {}
export const StorageFlowNodeServiceConfiguration = Schema.Union(StorageFlowNodeS3Configuration);
export const RetrievalFlowNodeServiceConfiguration = Schema.Union(RetrievalFlowNodeS3Configuration);
export class VectorSearchBedrockRerankingModelConfiguration extends Schema.Class<VectorSearchBedrockRerankingModelConfiguration>("VectorSearchBedrockRerankingModelConfiguration")({modelArn: Schema.String, additionalModelRequestFields: Schema.optional(AdditionalModelRequestFields)}) {}
export class StorageFlowNodeConfiguration extends Schema.Class<StorageFlowNodeConfiguration>("StorageFlowNodeConfiguration")({serviceConfiguration: StorageFlowNodeServiceConfiguration}) {}
export class RetrievalFlowNodeConfiguration extends Schema.Class<RetrievalFlowNodeConfiguration>("RetrievalFlowNodeConfiguration")({serviceConfiguration: RetrievalFlowNodeServiceConfiguration}) {}
export class FieldForReranking extends Schema.Class<FieldForReranking>("FieldForReranking")({fieldName: Schema.String}) {}
export const FieldsForReranking = Schema.Array(FieldForReranking);
export class CachePointBlock extends Schema.Class<CachePointBlock>("CachePointBlock")({type: Schema.String}) {}
export class PromptInputVariable extends Schema.Class<PromptInputVariable>("PromptInputVariable")({name: Schema.optional(Schema.String)}) {}
export const PromptInputVariablesList = Schema.Array(PromptInputVariable);
export const SystemContentBlock = Schema.Union(Schema.String, CachePointBlock);
export const SystemContentBlocks = Schema.Array(SystemContentBlock);
export class AutoToolChoice extends Schema.Class<AutoToolChoice>("AutoToolChoice")({}) {}
export class AnyToolChoice extends Schema.Class<AnyToolChoice>("AnyToolChoice")({}) {}
export const RerankingMetadataSelectiveModeConfiguration = Schema.Union(FieldsForReranking, FieldsForReranking);
export class TextPromptTemplateConfiguration extends Schema.Class<TextPromptTemplateConfiguration>("TextPromptTemplateConfiguration")({text: Schema.String, cachePoint: Schema.optional(CachePointBlock), inputVariables: Schema.optional(PromptInputVariablesList)}) {}
export const ContentBlock = Schema.Union(Schema.String, CachePointBlock);
export const ContentBlocks = Schema.Array(ContentBlock);
export class MetadataConfigurationForReranking extends Schema.Class<MetadataConfigurationForReranking>("MetadataConfigurationForReranking")({selectionMode: Schema.String, selectiveModeConfiguration: Schema.optional(RerankingMetadataSelectiveModeConfiguration)}) {}
export class Message extends Schema.Class<Message>("Message")({role: Schema.String, content: ContentBlocks}) {}
export const Messages = Schema.Array(Message);
export class VectorSearchBedrockRerankingConfiguration extends Schema.Class<VectorSearchBedrockRerankingConfiguration>("VectorSearchBedrockRerankingConfiguration")({modelConfiguration: VectorSearchBedrockRerankingModelConfiguration, numberOfRerankedResults: Schema.optional(Schema.Number), metadataConfiguration: Schema.optional(MetadataConfigurationForReranking)}) {}
export class SpecificToolChoice extends Schema.Class<SpecificToolChoice>("SpecificToolChoice")({name: Schema.String}) {}
export class VectorSearchRerankingConfiguration extends Schema.Class<VectorSearchRerankingConfiguration>("VectorSearchRerankingConfiguration")({type: Schema.String, bedrockRerankingConfiguration: Schema.optional(VectorSearchBedrockRerankingConfiguration)}) {}
export const ToolChoice = Schema.Union(AutoToolChoice, AnyToolChoice, SpecificToolChoice);
export const ToolInputSchema = Schema.Union(Schema.JsonValue);
export class KnowledgeBaseFlowNodeConfiguration extends Schema.Class<KnowledgeBaseFlowNodeConfiguration>("KnowledgeBaseFlowNodeConfiguration")({knowledgeBaseId: Schema.String, modelId: Schema.optional(Schema.String), guardrailConfiguration: Schema.optional(GuardrailConfiguration), numberOfResults: Schema.optional(Schema.Number), promptTemplate: Schema.optional(KnowledgeBasePromptTemplate), inferenceConfiguration: Schema.optional(PromptInferenceConfiguration), rerankingConfiguration: Schema.optional(VectorSearchRerankingConfiguration), orchestrationConfiguration: Schema.optional(KnowledgeBaseOrchestrationConfiguration)}) {}
export class ToolSpecification extends Schema.Class<ToolSpecification>("ToolSpecification")({name: Schema.String, description: Schema.optional(Schema.String), inputSchema: ToolInputSchema}) {}
export const Tool = Schema.Union(ToolSpecification, CachePointBlock);
export const Tools = Schema.Array(Tool);
export class ToolConfiguration extends Schema.Class<ToolConfiguration>("ToolConfiguration")({tools: Tools, toolChoice: Schema.optional(ToolChoice)}) {}
export class ChatPromptTemplateConfiguration extends Schema.Class<ChatPromptTemplateConfiguration>("ChatPromptTemplateConfiguration")({messages: Messages, system: Schema.optional(SystemContentBlocks), inputVariables: Schema.optional(PromptInputVariablesList), toolConfiguration: Schema.optional(ToolConfiguration)}) {}
export const PromptTemplateConfiguration = Schema.Union(TextPromptTemplateConfiguration, ChatPromptTemplateConfiguration);
export class PromptFlowNodeInlineConfiguration extends Schema.Class<PromptFlowNodeInlineConfiguration>("PromptFlowNodeInlineConfiguration")({templateType: Schema.String, templateConfiguration: PromptTemplateConfiguration, modelId: Schema.String, inferenceConfiguration: Schema.optional(PromptInferenceConfiguration), additionalModelRequestFields: Schema.optional(Schema.JsonValue)}) {}
export const PromptFlowNodeSourceConfiguration = Schema.Union(PromptFlowNodeResourceConfiguration, PromptFlowNodeInlineConfiguration);
export class PromptFlowNodeConfiguration extends Schema.Class<PromptFlowNodeConfiguration>("PromptFlowNodeConfiguration")({sourceConfiguration: PromptFlowNodeSourceConfiguration, guardrailConfiguration: Schema.optional(GuardrailConfiguration)}) {}
export const FlowNodeConfiguration = Schema.Union(InputFlowNodeConfiguration, OutputFlowNodeConfiguration, KnowledgeBaseFlowNodeConfiguration, ConditionFlowNodeConfiguration, LexFlowNodeConfiguration, PromptFlowNodeConfiguration, LambdaFunctionFlowNodeConfiguration, StorageFlowNodeConfiguration, AgentFlowNodeConfiguration, RetrievalFlowNodeConfiguration, IteratorFlowNodeConfiguration, CollectorFlowNodeConfiguration, InlineCodeFlowNodeConfiguration, Schema.suspend((): Schema.Schema<LoopFlowNodeConfiguration> => LoopFlowNodeConfiguration), LoopInputFlowNodeConfiguration, LoopControllerFlowNodeConfiguration);
export class FlowNode extends Schema.Class<FlowNode>("FlowNode")({name: Schema.String, type: Schema.String, configuration: Schema.optional(Schema.suspend(() => FlowNodeConfiguration)), inputs: Schema.optional(FlowNodeInputs), outputs: Schema.optional(FlowNodeOutputs)}) {}
export const FlowNodes = Schema.Array(Schema.suspend((): Schema.Schema<FlowNode> => FlowNode));
export class FlowDefinition extends Schema.Class<FlowDefinition>("FlowDefinition")({nodes: Schema.optional(Schema.suspend(() => FlowNodes)), connections: Schema.optional(FlowConnections)}) {}
export class ValidateFlowDefinitionRequest extends Schema.Class<ValidateFlowDefinitionRequest>("ValidateFlowDefinitionRequest")({definition: FlowDefinition}) {}
export class MissingEndingNodesFlowValidationDetails extends Schema.Class<MissingEndingNodesFlowValidationDetails>("MissingEndingNodesFlowValidationDetails")({}) {}
export class MissingStartingNodesFlowValidationDetails extends Schema.Class<MissingStartingNodesFlowValidationDetails>("MissingStartingNodesFlowValidationDetails")({}) {}
export class UnspecifiedFlowValidationDetails extends Schema.Class<UnspecifiedFlowValidationDetails>("UnspecifiedFlowValidationDetails")({}) {}
export class CyclicConnectionFlowValidationDetails extends Schema.Class<CyclicConnectionFlowValidationDetails>("CyclicConnectionFlowValidationDetails")({connection: Schema.String}) {}
export class DuplicateConnectionsFlowValidationDetails extends Schema.Class<DuplicateConnectionsFlowValidationDetails>("DuplicateConnectionsFlowValidationDetails")({source: Schema.String, target: Schema.String}) {}
export class DuplicateConditionExpressionFlowValidationDetails extends Schema.Class<DuplicateConditionExpressionFlowValidationDetails>("DuplicateConditionExpressionFlowValidationDetails")({node: Schema.String, expression: Schema.String}) {}
export class UnreachableNodeFlowValidationDetails extends Schema.Class<UnreachableNodeFlowValidationDetails>("UnreachableNodeFlowValidationDetails")({node: Schema.String}) {}
export class UnknownConnectionSourceFlowValidationDetails extends Schema.Class<UnknownConnectionSourceFlowValidationDetails>("UnknownConnectionSourceFlowValidationDetails")({connection: Schema.String}) {}
export class UnknownConnectionSourceOutputFlowValidationDetails extends Schema.Class<UnknownConnectionSourceOutputFlowValidationDetails>("UnknownConnectionSourceOutputFlowValidationDetails")({connection: Schema.String}) {}
export class UnknownConnectionTargetFlowValidationDetails extends Schema.Class<UnknownConnectionTargetFlowValidationDetails>("UnknownConnectionTargetFlowValidationDetails")({connection: Schema.String}) {}
export class UnknownConnectionTargetInputFlowValidationDetails extends Schema.Class<UnknownConnectionTargetInputFlowValidationDetails>("UnknownConnectionTargetInputFlowValidationDetails")({connection: Schema.String}) {}
export class UnknownConnectionConditionFlowValidationDetails extends Schema.Class<UnknownConnectionConditionFlowValidationDetails>("UnknownConnectionConditionFlowValidationDetails")({connection: Schema.String}) {}
export class MalformedConditionExpressionFlowValidationDetails extends Schema.Class<MalformedConditionExpressionFlowValidationDetails>("MalformedConditionExpressionFlowValidationDetails")({node: Schema.String, condition: Schema.String, cause: Schema.String}) {}
export class MalformedNodeInputExpressionFlowValidationDetails extends Schema.Class<MalformedNodeInputExpressionFlowValidationDetails>("MalformedNodeInputExpressionFlowValidationDetails")({node: Schema.String, input: Schema.String, cause: Schema.String}) {}
export class MismatchedNodeInputTypeFlowValidationDetails extends Schema.Class<MismatchedNodeInputTypeFlowValidationDetails>("MismatchedNodeInputTypeFlowValidationDetails")({node: Schema.String, input: Schema.String, expectedType: Schema.String}) {}
export class MismatchedNodeOutputTypeFlowValidationDetails extends Schema.Class<MismatchedNodeOutputTypeFlowValidationDetails>("MismatchedNodeOutputTypeFlowValidationDetails")({node: Schema.String, output: Schema.String, expectedType: Schema.String}) {}
export class IncompatibleConnectionDataTypeFlowValidationDetails extends Schema.Class<IncompatibleConnectionDataTypeFlowValidationDetails>("IncompatibleConnectionDataTypeFlowValidationDetails")({connection: Schema.String}) {}
export class MissingConnectionConfigurationFlowValidationDetails extends Schema.Class<MissingConnectionConfigurationFlowValidationDetails>("MissingConnectionConfigurationFlowValidationDetails")({connection: Schema.String}) {}
export class MissingDefaultConditionFlowValidationDetails extends Schema.Class<MissingDefaultConditionFlowValidationDetails>("MissingDefaultConditionFlowValidationDetails")({node: Schema.String}) {}
export class MissingNodeConfigurationFlowValidationDetails extends Schema.Class<MissingNodeConfigurationFlowValidationDetails>("MissingNodeConfigurationFlowValidationDetails")({node: Schema.String}) {}
export class MissingNodeInputFlowValidationDetails extends Schema.Class<MissingNodeInputFlowValidationDetails>("MissingNodeInputFlowValidationDetails")({node: Schema.String, input: Schema.String}) {}
export class MissingNodeOutputFlowValidationDetails extends Schema.Class<MissingNodeOutputFlowValidationDetails>("MissingNodeOutputFlowValidationDetails")({node: Schema.String, output: Schema.String}) {}
export class MultipleNodeInputConnectionsFlowValidationDetails extends Schema.Class<MultipleNodeInputConnectionsFlowValidationDetails>("MultipleNodeInputConnectionsFlowValidationDetails")({node: Schema.String, input: Schema.String}) {}
export class UnfulfilledNodeInputFlowValidationDetails extends Schema.Class<UnfulfilledNodeInputFlowValidationDetails>("UnfulfilledNodeInputFlowValidationDetails")({node: Schema.String, input: Schema.String}) {}
export class UnsatisfiedConnectionConditionsFlowValidationDetails extends Schema.Class<UnsatisfiedConnectionConditionsFlowValidationDetails>("UnsatisfiedConnectionConditionsFlowValidationDetails")({connection: Schema.String}) {}
export class UnknownNodeInputFlowValidationDetails extends Schema.Class<UnknownNodeInputFlowValidationDetails>("UnknownNodeInputFlowValidationDetails")({node: Schema.String, input: Schema.String}) {}
export class UnknownNodeOutputFlowValidationDetails extends Schema.Class<UnknownNodeOutputFlowValidationDetails>("UnknownNodeOutputFlowValidationDetails")({node: Schema.String, output: Schema.String}) {}
export class MissingLoopInputNodeFlowValidationDetails extends Schema.Class<MissingLoopInputNodeFlowValidationDetails>("MissingLoopInputNodeFlowValidationDetails")({loopNode: Schema.String}) {}
export class MissingLoopControllerNodeFlowValidationDetails extends Schema.Class<MissingLoopControllerNodeFlowValidationDetails>("MissingLoopControllerNodeFlowValidationDetails")({loopNode: Schema.String}) {}
export class MultipleLoopInputNodesFlowValidationDetails extends Schema.Class<MultipleLoopInputNodesFlowValidationDetails>("MultipleLoopInputNodesFlowValidationDetails")({loopNode: Schema.String}) {}
export class MultipleLoopControllerNodesFlowValidationDetails extends Schema.Class<MultipleLoopControllerNodesFlowValidationDetails>("MultipleLoopControllerNodesFlowValidationDetails")({loopNode: Schema.String}) {}
export class LoopIncompatibleNodeTypeFlowValidationDetails extends Schema.Class<LoopIncompatibleNodeTypeFlowValidationDetails>("LoopIncompatibleNodeTypeFlowValidationDetails")({node: Schema.String, incompatibleNodeType: Schema.String, incompatibleNodeName: Schema.String}) {}
export class InvalidLoopBoundaryFlowValidationDetails extends Schema.Class<InvalidLoopBoundaryFlowValidationDetails>("InvalidLoopBoundaryFlowValidationDetails")({connection: Schema.String, source: Schema.String, target: Schema.String}) {}
export const FlowValidationDetails = Schema.Union(CyclicConnectionFlowValidationDetails, DuplicateConnectionsFlowValidationDetails, DuplicateConditionExpressionFlowValidationDetails, UnreachableNodeFlowValidationDetails, UnknownConnectionSourceFlowValidationDetails, UnknownConnectionSourceOutputFlowValidationDetails, UnknownConnectionTargetFlowValidationDetails, UnknownConnectionTargetInputFlowValidationDetails, UnknownConnectionConditionFlowValidationDetails, MalformedConditionExpressionFlowValidationDetails, MalformedNodeInputExpressionFlowValidationDetails, MismatchedNodeInputTypeFlowValidationDetails, MismatchedNodeOutputTypeFlowValidationDetails, IncompatibleConnectionDataTypeFlowValidationDetails, MissingConnectionConfigurationFlowValidationDetails, MissingDefaultConditionFlowValidationDetails, MissingEndingNodesFlowValidationDetails, MissingNodeConfigurationFlowValidationDetails, MissingNodeInputFlowValidationDetails, MissingNodeOutputFlowValidationDetails, MissingStartingNodesFlowValidationDetails, MultipleNodeInputConnectionsFlowValidationDetails, UnfulfilledNodeInputFlowValidationDetails, UnsatisfiedConnectionConditionsFlowValidationDetails, UnspecifiedFlowValidationDetails, UnknownNodeInputFlowValidationDetails, UnknownNodeOutputFlowValidationDetails, MissingLoopInputNodeFlowValidationDetails, MissingLoopControllerNodeFlowValidationDetails, MultipleLoopInputNodesFlowValidationDetails, MultipleLoopControllerNodesFlowValidationDetails, LoopIncompatibleNodeTypeFlowValidationDetails, InvalidLoopBoundaryFlowValidationDetails);
export class FlowValidation extends Schema.Class<FlowValidation>("FlowValidation")({message: Schema.String, severity: Schema.String, details: Schema.optional(FlowValidationDetails), type: Schema.optional(Schema.String)}) {}
export const FlowValidations = Schema.Array(FlowValidation);
export class ValidateFlowDefinitionResponse extends Schema.Class<ValidateFlowDefinitionResponse>("ValidateFlowDefinitionResponse")({validations: FlowValidations}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const validateFlowDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-06-05", uri: "/flows/validate-definition", method: "POST", sdkId: "Bedrock Agent", sigV4ServiceName: "bedrock", name: "AmazonBedrockAgentBuildTimeLambda.ValidateFlowDefinition" }, ValidateFlowDefinitionRequest, ValidateFlowDefinitionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
