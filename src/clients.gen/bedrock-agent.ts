import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class InputFlowNodeConfiguration extends S.Class<InputFlowNodeConfiguration>("InputFlowNodeConfiguration")({}) {}
export class OutputFlowNodeConfiguration extends S.Class<OutputFlowNodeConfiguration>("OutputFlowNodeConfiguration")({}) {}
export class IteratorFlowNodeConfiguration extends S.Class<IteratorFlowNodeConfiguration>("IteratorFlowNodeConfiguration")({}) {}
export class CollectorFlowNodeConfiguration extends S.Class<CollectorFlowNodeConfiguration>("CollectorFlowNodeConfiguration")({}) {}
export class LoopInputFlowNodeConfiguration extends S.Class<LoopInputFlowNodeConfiguration>("LoopInputFlowNodeConfiguration")({}) {}
export class FlowNodeInput extends S.Class<FlowNodeInput>("FlowNodeInput")({name: S.String, type: S.String, expression: S.String, category: S.optional(S.String)}) {}
export const FlowNodeInputs = S.Array(FlowNodeInput);
export class FlowNodeOutput extends S.Class<FlowNodeOutput>("FlowNodeOutput")({name: S.String, type: S.String}) {}
export const FlowNodeOutputs = S.Array(FlowNodeOutput);
export class LexFlowNodeConfiguration extends S.Class<LexFlowNodeConfiguration>("LexFlowNodeConfiguration")({botAliasArn: S.String, localeId: S.String}) {}
export class LambdaFunctionFlowNodeConfiguration extends S.Class<LambdaFunctionFlowNodeConfiguration>("LambdaFunctionFlowNodeConfiguration")({lambdaArn: S.String}) {}
export class AgentFlowNodeConfiguration extends S.Class<AgentFlowNodeConfiguration>("AgentFlowNodeConfiguration")({agentAliasArn: S.String}) {}
export class InlineCodeFlowNodeConfiguration extends S.Class<InlineCodeFlowNodeConfiguration>("InlineCodeFlowNodeConfiguration")({code: S.String, language: S.String}) {}
export class LoopFlowNodeConfiguration extends S.Class<LoopFlowNodeConfiguration>("LoopFlowNodeConfiguration")({definition: S.suspend((): S.Schema<FlowDefinition, any> => FlowDefinition)}) {}
export class FlowCondition extends S.Class<FlowCondition>("FlowCondition")({name: S.String, expression: S.optional(S.String)}) {}
export class LoopControllerFlowNodeConfiguration extends S.Class<LoopControllerFlowNodeConfiguration>("LoopControllerFlowNodeConfiguration")({continueCondition: FlowCondition, maxIterations: S.optional(S.Number)}) {}
export class FlowDataConnectionConfiguration extends S.Class<FlowDataConnectionConfiguration>("FlowDataConnectionConfiguration")({sourceOutput: S.String, targetInput: S.String}) {}
export class FlowConditionalConnectionConfiguration extends S.Class<FlowConditionalConnectionConfiguration>("FlowConditionalConnectionConfiguration")({condition: S.String}) {}
export const FlowConnectionConfiguration = S.Union(FlowDataConnectionConfiguration, FlowConditionalConnectionConfiguration);
export class GuardrailConfiguration extends S.Class<GuardrailConfiguration>("GuardrailConfiguration")({guardrailIdentifier: S.optional(S.String), guardrailVersion: S.optional(S.String)}) {}
export class KnowledgeBasePromptTemplate extends S.Class<KnowledgeBasePromptTemplate>("KnowledgeBasePromptTemplate")({textPromptTemplate: S.optional(S.String)}) {}
export const FlowConditions = S.Array(FlowCondition);
export const StopSequences = S.Array(S.String);
export class FlowConnection extends S.Class<FlowConnection>("FlowConnection")({type: S.String, name: S.String, source: S.String, target: S.String, configuration: S.optional(FlowConnectionConfiguration)}) {}
export const FlowConnections = S.Array(FlowConnection);
export class ConditionFlowNodeConfiguration extends S.Class<ConditionFlowNodeConfiguration>("ConditionFlowNodeConfiguration")({conditions: FlowConditions}) {}
export class PromptModelInferenceConfiguration extends S.Class<PromptModelInferenceConfiguration>("PromptModelInferenceConfiguration")({temperature: S.optional(S.Number), topP: S.optional(S.Number), maxTokens: S.optional(S.Number), stopSequences: S.optional(StopSequences)}) {}
export const AdditionalModelRequestFields = S.Record({key: S.String, value: S.Any});
export class PerformanceConfiguration extends S.Class<PerformanceConfiguration>("PerformanceConfiguration")({latency: S.optional(S.String)}) {}
export class PromptFlowNodeResourceConfiguration extends S.Class<PromptFlowNodeResourceConfiguration>("PromptFlowNodeResourceConfiguration")({promptArn: S.String}) {}
export class StorageFlowNodeS3Configuration extends S.Class<StorageFlowNodeS3Configuration>("StorageFlowNodeS3Configuration")({bucketName: S.String}) {}
export class RetrievalFlowNodeS3Configuration extends S.Class<RetrievalFlowNodeS3Configuration>("RetrievalFlowNodeS3Configuration")({bucketName: S.String}) {}
export const PromptInferenceConfiguration = S.Union(PromptModelInferenceConfiguration);
export class KnowledgeBaseOrchestrationConfiguration extends S.Class<KnowledgeBaseOrchestrationConfiguration>("KnowledgeBaseOrchestrationConfiguration")({promptTemplate: S.optional(KnowledgeBasePromptTemplate), inferenceConfig: S.optional(PromptInferenceConfiguration), additionalModelRequestFields: S.optional(AdditionalModelRequestFields), performanceConfig: S.optional(PerformanceConfiguration)}) {}
export const StorageFlowNodeServiceConfiguration = S.Union(StorageFlowNodeS3Configuration);
export const RetrievalFlowNodeServiceConfiguration = S.Union(RetrievalFlowNodeS3Configuration);
export class VectorSearchBedrockRerankingModelConfiguration extends S.Class<VectorSearchBedrockRerankingModelConfiguration>("VectorSearchBedrockRerankingModelConfiguration")({modelArn: S.String, additionalModelRequestFields: S.optional(AdditionalModelRequestFields)}) {}
export class StorageFlowNodeConfiguration extends S.Class<StorageFlowNodeConfiguration>("StorageFlowNodeConfiguration")({serviceConfiguration: StorageFlowNodeServiceConfiguration}) {}
export class RetrievalFlowNodeConfiguration extends S.Class<RetrievalFlowNodeConfiguration>("RetrievalFlowNodeConfiguration")({serviceConfiguration: RetrievalFlowNodeServiceConfiguration}) {}
export class FieldForReranking extends S.Class<FieldForReranking>("FieldForReranking")({fieldName: S.String}) {}
export const FieldsForReranking = S.Array(FieldForReranking);
export class CachePointBlock extends S.Class<CachePointBlock>("CachePointBlock")({type: S.String}) {}
export class PromptInputVariable extends S.Class<PromptInputVariable>("PromptInputVariable")({name: S.optional(S.String)}) {}
export const PromptInputVariablesList = S.Array(PromptInputVariable);
export const SystemContentBlock = S.Union(S.String, CachePointBlock);
export const SystemContentBlocks = S.Array(SystemContentBlock);
export class AutoToolChoice extends S.Class<AutoToolChoice>("AutoToolChoice")({}) {}
export class AnyToolChoice extends S.Class<AnyToolChoice>("AnyToolChoice")({}) {}
export const RerankingMetadataSelectiveModeConfiguration = S.Union(FieldsForReranking, FieldsForReranking);
export class TextPromptTemplateConfiguration extends S.Class<TextPromptTemplateConfiguration>("TextPromptTemplateConfiguration")({text: S.String, cachePoint: S.optional(CachePointBlock), inputVariables: S.optional(PromptInputVariablesList)}) {}
export const ContentBlock = S.Union(S.String, CachePointBlock);
export const ContentBlocks = S.Array(ContentBlock);
export class MetadataConfigurationForReranking extends S.Class<MetadataConfigurationForReranking>("MetadataConfigurationForReranking")({selectionMode: S.String, selectiveModeConfiguration: S.optional(RerankingMetadataSelectiveModeConfiguration)}) {}
export class Message extends S.Class<Message>("Message")({role: S.String, content: ContentBlocks}) {}
export const Messages = S.Array(Message);
export class VectorSearchBedrockRerankingConfiguration extends S.Class<VectorSearchBedrockRerankingConfiguration>("VectorSearchBedrockRerankingConfiguration")({modelConfiguration: VectorSearchBedrockRerankingModelConfiguration, numberOfRerankedResults: S.optional(S.Number), metadataConfiguration: S.optional(MetadataConfigurationForReranking)}) {}
export class SpecificToolChoice extends S.Class<SpecificToolChoice>("SpecificToolChoice")({name: S.String}) {}
export class VectorSearchRerankingConfiguration extends S.Class<VectorSearchRerankingConfiguration>("VectorSearchRerankingConfiguration")({type: S.String, bedrockRerankingConfiguration: S.optional(VectorSearchBedrockRerankingConfiguration)}) {}
export const ToolChoice = S.Union(AutoToolChoice, AnyToolChoice, SpecificToolChoice);
export const ToolInputSchema = S.Union(S.Any);
export class KnowledgeBaseFlowNodeConfiguration extends S.Class<KnowledgeBaseFlowNodeConfiguration>("KnowledgeBaseFlowNodeConfiguration")({knowledgeBaseId: S.String, modelId: S.optional(S.String), guardrailConfiguration: S.optional(GuardrailConfiguration), numberOfResults: S.optional(S.Number), promptTemplate: S.optional(KnowledgeBasePromptTemplate), inferenceConfiguration: S.optional(PromptInferenceConfiguration), rerankingConfiguration: S.optional(VectorSearchRerankingConfiguration), orchestrationConfiguration: S.optional(KnowledgeBaseOrchestrationConfiguration)}) {}
export class ToolSpecification extends S.Class<ToolSpecification>("ToolSpecification")({name: S.String, description: S.optional(S.String), inputSchema: ToolInputSchema}) {}
export const Tool = S.Union(ToolSpecification, CachePointBlock);
export const Tools = S.Array(Tool);
export class ToolConfiguration extends S.Class<ToolConfiguration>("ToolConfiguration")({tools: Tools, toolChoice: S.optional(ToolChoice)}) {}
export class ChatPromptTemplateConfiguration extends S.Class<ChatPromptTemplateConfiguration>("ChatPromptTemplateConfiguration")({messages: Messages, system: S.optional(SystemContentBlocks), inputVariables: S.optional(PromptInputVariablesList), toolConfiguration: S.optional(ToolConfiguration)}) {}
export const PromptTemplateConfiguration = S.Union(TextPromptTemplateConfiguration, ChatPromptTemplateConfiguration);
export class PromptFlowNodeInlineConfiguration extends S.Class<PromptFlowNodeInlineConfiguration>("PromptFlowNodeInlineConfiguration")({templateType: S.String, templateConfiguration: PromptTemplateConfiguration, modelId: S.String, inferenceConfiguration: S.optional(PromptInferenceConfiguration), additionalModelRequestFields: S.optional(S.Any)}) {}
export const PromptFlowNodeSourceConfiguration = S.Union(PromptFlowNodeResourceConfiguration, PromptFlowNodeInlineConfiguration);
export class PromptFlowNodeConfiguration extends S.Class<PromptFlowNodeConfiguration>("PromptFlowNodeConfiguration")({sourceConfiguration: PromptFlowNodeSourceConfiguration, guardrailConfiguration: S.optional(GuardrailConfiguration)}) {}
export type FlowNodeConfiguration = InputFlowNodeConfiguration | OutputFlowNodeConfiguration | KnowledgeBaseFlowNodeConfiguration | ConditionFlowNodeConfiguration | LexFlowNodeConfiguration | PromptFlowNodeConfiguration | LambdaFunctionFlowNodeConfiguration | StorageFlowNodeConfiguration | AgentFlowNodeConfiguration | RetrievalFlowNodeConfiguration | IteratorFlowNodeConfiguration | CollectorFlowNodeConfiguration | InlineCodeFlowNodeConfiguration | LoopFlowNodeConfiguration | LoopInputFlowNodeConfiguration | LoopControllerFlowNodeConfiguration;
export const FlowNodeConfiguration = S.Union(InputFlowNodeConfiguration, OutputFlowNodeConfiguration, KnowledgeBaseFlowNodeConfiguration, ConditionFlowNodeConfiguration, LexFlowNodeConfiguration, PromptFlowNodeConfiguration, LambdaFunctionFlowNodeConfiguration, StorageFlowNodeConfiguration, AgentFlowNodeConfiguration, RetrievalFlowNodeConfiguration, IteratorFlowNodeConfiguration, CollectorFlowNodeConfiguration, InlineCodeFlowNodeConfiguration, S.suspend((): S.Schema<LoopFlowNodeConfiguration, any> => LoopFlowNodeConfiguration), LoopInputFlowNodeConfiguration, LoopControllerFlowNodeConfiguration) as any as S.Schema<FlowNodeConfiguration>;
export class FlowNode extends S.Class<FlowNode>("FlowNode")({name: S.String, type: S.String, configuration: S.optional(S.suspend(() => FlowNodeConfiguration)), inputs: S.optional(FlowNodeInputs), outputs: S.optional(FlowNodeOutputs)}) {}
export type FlowNodes = FlowNode[];
export const FlowNodes = S.Array(S.suspend((): S.Schema<FlowNode, any> => FlowNode)) as any as S.Schema<FlowNodes>;
export class FlowDefinition extends S.Class<FlowDefinition>("FlowDefinition")({nodes: S.optional(S.suspend(() => FlowNodes)), connections: S.optional(FlowConnections)}) {}
export class ValidateFlowDefinitionRequest extends S.Class<ValidateFlowDefinitionRequest>("ValidateFlowDefinitionRequest")({definition: FlowDefinition}) {}
export class MissingEndingNodesFlowValidationDetails extends S.Class<MissingEndingNodesFlowValidationDetails>("MissingEndingNodesFlowValidationDetails")({}) {}
export class MissingStartingNodesFlowValidationDetails extends S.Class<MissingStartingNodesFlowValidationDetails>("MissingStartingNodesFlowValidationDetails")({}) {}
export class UnspecifiedFlowValidationDetails extends S.Class<UnspecifiedFlowValidationDetails>("UnspecifiedFlowValidationDetails")({}) {}
export class CyclicConnectionFlowValidationDetails extends S.Class<CyclicConnectionFlowValidationDetails>("CyclicConnectionFlowValidationDetails")({connection: S.String}) {}
export class DuplicateConnectionsFlowValidationDetails extends S.Class<DuplicateConnectionsFlowValidationDetails>("DuplicateConnectionsFlowValidationDetails")({source: S.String, target: S.String}) {}
export class DuplicateConditionExpressionFlowValidationDetails extends S.Class<DuplicateConditionExpressionFlowValidationDetails>("DuplicateConditionExpressionFlowValidationDetails")({node: S.String, expression: S.String}) {}
export class UnreachableNodeFlowValidationDetails extends S.Class<UnreachableNodeFlowValidationDetails>("UnreachableNodeFlowValidationDetails")({node: S.String}) {}
export class UnknownConnectionSourceFlowValidationDetails extends S.Class<UnknownConnectionSourceFlowValidationDetails>("UnknownConnectionSourceFlowValidationDetails")({connection: S.String}) {}
export class UnknownConnectionSourceOutputFlowValidationDetails extends S.Class<UnknownConnectionSourceOutputFlowValidationDetails>("UnknownConnectionSourceOutputFlowValidationDetails")({connection: S.String}) {}
export class UnknownConnectionTargetFlowValidationDetails extends S.Class<UnknownConnectionTargetFlowValidationDetails>("UnknownConnectionTargetFlowValidationDetails")({connection: S.String}) {}
export class UnknownConnectionTargetInputFlowValidationDetails extends S.Class<UnknownConnectionTargetInputFlowValidationDetails>("UnknownConnectionTargetInputFlowValidationDetails")({connection: S.String}) {}
export class UnknownConnectionConditionFlowValidationDetails extends S.Class<UnknownConnectionConditionFlowValidationDetails>("UnknownConnectionConditionFlowValidationDetails")({connection: S.String}) {}
export class MalformedConditionExpressionFlowValidationDetails extends S.Class<MalformedConditionExpressionFlowValidationDetails>("MalformedConditionExpressionFlowValidationDetails")({node: S.String, condition: S.String, cause: S.String}) {}
export class MalformedNodeInputExpressionFlowValidationDetails extends S.Class<MalformedNodeInputExpressionFlowValidationDetails>("MalformedNodeInputExpressionFlowValidationDetails")({node: S.String, input: S.String, cause: S.String}) {}
export class MismatchedNodeInputTypeFlowValidationDetails extends S.Class<MismatchedNodeInputTypeFlowValidationDetails>("MismatchedNodeInputTypeFlowValidationDetails")({node: S.String, input: S.String, expectedType: S.String}) {}
export class MismatchedNodeOutputTypeFlowValidationDetails extends S.Class<MismatchedNodeOutputTypeFlowValidationDetails>("MismatchedNodeOutputTypeFlowValidationDetails")({node: S.String, output: S.String, expectedType: S.String}) {}
export class IncompatibleConnectionDataTypeFlowValidationDetails extends S.Class<IncompatibleConnectionDataTypeFlowValidationDetails>("IncompatibleConnectionDataTypeFlowValidationDetails")({connection: S.String}) {}
export class MissingConnectionConfigurationFlowValidationDetails extends S.Class<MissingConnectionConfigurationFlowValidationDetails>("MissingConnectionConfigurationFlowValidationDetails")({connection: S.String}) {}
export class MissingDefaultConditionFlowValidationDetails extends S.Class<MissingDefaultConditionFlowValidationDetails>("MissingDefaultConditionFlowValidationDetails")({node: S.String}) {}
export class MissingNodeConfigurationFlowValidationDetails extends S.Class<MissingNodeConfigurationFlowValidationDetails>("MissingNodeConfigurationFlowValidationDetails")({node: S.String}) {}
export class MissingNodeInputFlowValidationDetails extends S.Class<MissingNodeInputFlowValidationDetails>("MissingNodeInputFlowValidationDetails")({node: S.String, input: S.String}) {}
export class MissingNodeOutputFlowValidationDetails extends S.Class<MissingNodeOutputFlowValidationDetails>("MissingNodeOutputFlowValidationDetails")({node: S.String, output: S.String}) {}
export class MultipleNodeInputConnectionsFlowValidationDetails extends S.Class<MultipleNodeInputConnectionsFlowValidationDetails>("MultipleNodeInputConnectionsFlowValidationDetails")({node: S.String, input: S.String}) {}
export class UnfulfilledNodeInputFlowValidationDetails extends S.Class<UnfulfilledNodeInputFlowValidationDetails>("UnfulfilledNodeInputFlowValidationDetails")({node: S.String, input: S.String}) {}
export class UnsatisfiedConnectionConditionsFlowValidationDetails extends S.Class<UnsatisfiedConnectionConditionsFlowValidationDetails>("UnsatisfiedConnectionConditionsFlowValidationDetails")({connection: S.String}) {}
export class UnknownNodeInputFlowValidationDetails extends S.Class<UnknownNodeInputFlowValidationDetails>("UnknownNodeInputFlowValidationDetails")({node: S.String, input: S.String}) {}
export class UnknownNodeOutputFlowValidationDetails extends S.Class<UnknownNodeOutputFlowValidationDetails>("UnknownNodeOutputFlowValidationDetails")({node: S.String, output: S.String}) {}
export class MissingLoopInputNodeFlowValidationDetails extends S.Class<MissingLoopInputNodeFlowValidationDetails>("MissingLoopInputNodeFlowValidationDetails")({loopNode: S.String}) {}
export class MissingLoopControllerNodeFlowValidationDetails extends S.Class<MissingLoopControllerNodeFlowValidationDetails>("MissingLoopControllerNodeFlowValidationDetails")({loopNode: S.String}) {}
export class MultipleLoopInputNodesFlowValidationDetails extends S.Class<MultipleLoopInputNodesFlowValidationDetails>("MultipleLoopInputNodesFlowValidationDetails")({loopNode: S.String}) {}
export class MultipleLoopControllerNodesFlowValidationDetails extends S.Class<MultipleLoopControllerNodesFlowValidationDetails>("MultipleLoopControllerNodesFlowValidationDetails")({loopNode: S.String}) {}
export class LoopIncompatibleNodeTypeFlowValidationDetails extends S.Class<LoopIncompatibleNodeTypeFlowValidationDetails>("LoopIncompatibleNodeTypeFlowValidationDetails")({node: S.String, incompatibleNodeType: S.String, incompatibleNodeName: S.String}) {}
export class InvalidLoopBoundaryFlowValidationDetails extends S.Class<InvalidLoopBoundaryFlowValidationDetails>("InvalidLoopBoundaryFlowValidationDetails")({connection: S.String, source: S.String, target: S.String}) {}
export const FlowValidationDetails = S.Union(CyclicConnectionFlowValidationDetails, DuplicateConnectionsFlowValidationDetails, DuplicateConditionExpressionFlowValidationDetails, UnreachableNodeFlowValidationDetails, UnknownConnectionSourceFlowValidationDetails, UnknownConnectionSourceOutputFlowValidationDetails, UnknownConnectionTargetFlowValidationDetails, UnknownConnectionTargetInputFlowValidationDetails, UnknownConnectionConditionFlowValidationDetails, MalformedConditionExpressionFlowValidationDetails, MalformedNodeInputExpressionFlowValidationDetails, MismatchedNodeInputTypeFlowValidationDetails, MismatchedNodeOutputTypeFlowValidationDetails, IncompatibleConnectionDataTypeFlowValidationDetails, MissingConnectionConfigurationFlowValidationDetails, MissingDefaultConditionFlowValidationDetails, MissingEndingNodesFlowValidationDetails, MissingNodeConfigurationFlowValidationDetails, MissingNodeInputFlowValidationDetails, MissingNodeOutputFlowValidationDetails, MissingStartingNodesFlowValidationDetails, MultipleNodeInputConnectionsFlowValidationDetails, UnfulfilledNodeInputFlowValidationDetails, UnsatisfiedConnectionConditionsFlowValidationDetails, UnspecifiedFlowValidationDetails, UnknownNodeInputFlowValidationDetails, UnknownNodeOutputFlowValidationDetails, MissingLoopInputNodeFlowValidationDetails, MissingLoopControllerNodeFlowValidationDetails, MultipleLoopInputNodesFlowValidationDetails, MultipleLoopControllerNodesFlowValidationDetails, LoopIncompatibleNodeTypeFlowValidationDetails, InvalidLoopBoundaryFlowValidationDetails);
export class FlowValidation extends S.Class<FlowValidation>("FlowValidation")({message: S.String, severity: S.String, details: S.optional(FlowValidationDetails), type: S.optional(S.String)}) {}
export const FlowValidations = S.Array(FlowValidation);
export class ValidateFlowDefinitionResponse extends S.Class<ValidateFlowDefinitionResponse>("ValidateFlowDefinitionResponse")({validations: FlowValidations}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const validateFlowDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-06-05", uri: "/flows/validate-definition", method: "POST", sdkId: "Bedrock Agent", sigV4ServiceName: "bedrock", name: "AmazonBedrockAgentBuildTimeLambda.ValidateFlowDefinition" }, ValidateFlowDefinitionRequest, ValidateFlowDefinitionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
