import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockAgentRuntime as _BedrockAgentRuntimeClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock Agent Runtime",
  version: "2023-07-26",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock",
  endpointPrefix: "bedrock-agent-runtime",
  operations: {
    CreateInvocation: "PUT /sessions/{sessionIdentifier}/invocations/",
    CreateSession: "PUT /sessions/",
    DeleteAgentMemory:
      "DELETE /agents/{agentId}/agentAliases/{agentAliasId}/memories",
    DeleteSession: "DELETE /sessions/{sessionIdentifier}/",
    EndSession: "PATCH /sessions/{sessionIdentifier}",
    GenerateQuery: "POST /generateQuery",
    GetAgentMemory:
      "GET /agents/{agentId}/agentAliases/{agentAliasId}/memories",
    GetExecutionFlowSnapshot:
      "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/flowsnapshot",
    GetFlowExecution:
      "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}",
    GetInvocationStep:
      "POST /sessions/{sessionIdentifier}/invocationSteps/{invocationStepId}",
    GetSession: "GET /sessions/{sessionIdentifier}/",
    InvokeAgent: {
      http: "POST /agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text",
      traits: {
        completion: "httpPayload",
        contentType: "x-amzn-bedrock-agent-content-type",
        sessionId: "x-amz-bedrock-agent-session-id",
        memoryId: "x-amz-bedrock-agent-memory-id",
      },
    },
    InvokeFlow: {
      http: "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}",
      traits: {
        responseStream: "httpPayload",
        executionId: "x-amz-bedrock-flow-execution-id",
      },
    },
    InvokeInlineAgent: {
      http: "POST /agents/{sessionId}",
      traits: {
        completion: "httpPayload",
        contentType: "x-amzn-bedrock-agent-content-type",
        sessionId: "x-amz-bedrock-agent-session-id",
      },
    },
    ListFlowExecutionEvents:
      "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/events",
    ListFlowExecutions: "GET /flows/{flowIdentifier}/executions",
    ListInvocationSteps: "POST /sessions/{sessionIdentifier}/invocationSteps/",
    ListInvocations: "POST /sessions/{sessionIdentifier}/invocations/",
    ListSessions: "POST /sessions/",
    ListTagsForResource: "GET /tags/{resourceArn}",
    OptimizePrompt: {
      http: "POST /optimize-prompt",
      traits: {
        optimizedPrompt: "httpPayload",
      },
    },
    PutInvocationStep: "PUT /sessions/{sessionIdentifier}/invocationSteps/",
    Rerank: "POST /rerank",
    Retrieve: "POST /knowledgebases/{knowledgeBaseId}/retrieve",
    RetrieveAndGenerate: "POST /retrieveAndGenerate",
    RetrieveAndGenerateStream: {
      http: "POST /retrieveAndGenerateStream",
      traits: {
        stream: "httpPayload",
        sessionId: "x-amzn-bedrock-knowledge-base-session-id",
      },
    },
    StartFlowExecution:
      "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions",
    StopFlowExecution:
      "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateSession: "PUT /sessions/{sessionIdentifier}/",
  },
} as const satisfies ServiceMetadata;

export type _BedrockAgentRuntime = _BedrockAgentRuntimeClient;
export interface BedrockAgentRuntime extends _BedrockAgentRuntime {}
export const BedrockAgentRuntime = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _BedrockAgentRuntimeClient;
