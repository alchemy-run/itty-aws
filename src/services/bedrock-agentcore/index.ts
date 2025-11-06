import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockAgentCore as _BedrockAgentCoreClient } from "./types.ts";

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
  sdkId: "Bedrock AgentCore",
  version: "2024-02-28",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock-agentcore",
  endpointPrefix: "bedrock-agentcore",
  operations: {
    CompleteResourceTokenAuth: "POST /identities/CompleteResourceTokenAuth",
    GetResourceApiKey: "POST /identities/api-key",
    GetResourceOauth2Token: "POST /identities/oauth2/token",
    GetWorkloadAccessToken: "POST /identities/GetWorkloadAccessToken",
    GetWorkloadAccessTokenForJWT:
      "POST /identities/GetWorkloadAccessTokenForJWT",
    GetWorkloadAccessTokenForUserId:
      "POST /identities/GetWorkloadAccessTokenForUserId",
    InvokeCodeInterpreter: {
      http: "POST /code-interpreters/{codeInterpreterIdentifier}/tools/invoke",
      traits: {
        sessionId: "x-amzn-code-interpreter-session-id",
        stream: "httpPayload",
      },
    },
    BatchCreateMemoryRecords:
      "POST /memories/{memoryId}/memoryRecords/batchCreate",
    BatchDeleteMemoryRecords:
      "POST /memories/{memoryId}/memoryRecords/batchDelete",
    BatchUpdateMemoryRecords:
      "POST /memories/{memoryId}/memoryRecords/batchUpdate",
    CreateEvent: "POST /memories/{memoryId}/events",
    DeleteEvent:
      "DELETE /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
    DeleteMemoryRecord:
      "DELETE /memories/{memoryId}/memoryRecords/{memoryRecordId}",
    GetAgentCard: {
      http: "GET /runtimes/{agentRuntimeArn}/invocations/.well-known/agent-card.json",
      traits: {
        runtimeSessionId: "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id",
        agentCard: "httpPayload",
        statusCode: "httpResponseCode",
      },
    },
    GetBrowserSession: "GET /browsers/{browserIdentifier}/sessions/get",
    GetCodeInterpreterSession:
      "GET /code-interpreters/{codeInterpreterIdentifier}/sessions/get",
    GetEvent:
      "GET /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
    GetMemoryRecord: "GET /memories/{memoryId}/memoryRecord/{memoryRecordId}",
    InvokeAgentRuntime: {
      http: "POST /runtimes/{agentRuntimeArn}/invocations",
      traits: {
        runtimeSessionId: "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id",
        mcpSessionId: "Mcp-Session-Id",
        mcpProtocolVersion: "Mcp-Protocol-Version",
        traceId: "X-Amzn-Trace-Id",
        traceParent: "traceparent",
        traceState: "tracestate",
        baggage: "baggage",
        contentType: "Content-Type",
        response: "httpPayload",
        statusCode: "httpResponseCode",
      },
    },
    ListActors: "POST /memories/{memoryId}/actors",
    ListBrowserSessions: "POST /browsers/{browserIdentifier}/sessions/list",
    ListCodeInterpreterSessions:
      "POST /code-interpreters/{codeInterpreterIdentifier}/sessions/list",
    ListEvents:
      "POST /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}",
    ListMemoryRecords: "POST /memories/{memoryId}/memoryRecords",
    ListSessions: "POST /memories/{memoryId}/actor/{actorId}/sessions",
    RetrieveMemoryRecords: "POST /memories/{memoryId}/retrieve",
    StartBrowserSession: "PUT /browsers/{browserIdentifier}/sessions/start",
    StartCodeInterpreterSession:
      "PUT /code-interpreters/{codeInterpreterIdentifier}/sessions/start",
    StopBrowserSession: "PUT /browsers/{browserIdentifier}/sessions/stop",
    StopCodeInterpreterSession:
      "PUT /code-interpreters/{codeInterpreterIdentifier}/sessions/stop",
    StopRuntimeSession: {
      http: "POST /runtimes/{agentRuntimeArn}/stopruntimesession",
      traits: {
        runtimeSessionId: "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id",
        statusCode: "httpResponseCode",
      },
    },
    UpdateBrowserStream:
      "PUT /browsers/{browserIdentifier}/sessions/streams/update",
  },
} as const satisfies ServiceMetadata;

export type _BedrockAgentCore = _BedrockAgentCoreClient;
export interface BedrockAgentCore extends _BedrockAgentCore {}
export const BedrockAgentCore = class extends AWSServiceClient {
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
} as unknown as typeof _BedrockAgentCoreClient;
