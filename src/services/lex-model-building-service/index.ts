import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LexModelBuildingService as _LexModelBuildingServiceClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Lex Model Building Service",
  version: "2017-04-19",
  protocol: "restJson1",
  sigV4ServiceName: "lex",
  endpointPrefix: "models.lex",
  operations: {
    CreateBotVersion: "POST /bots/{name}/versions",
    CreateIntentVersion: "POST /intents/{name}/versions",
    CreateSlotTypeVersion: "POST /slottypes/{name}/versions",
    DeleteBot: "DELETE /bots/{name}",
    DeleteBotAlias: "DELETE /bots/{botName}/aliases/{name}",
    DeleteBotChannelAssociation:
      "DELETE /bots/{botName}/aliases/{botAlias}/channels/{name}",
    DeleteBotVersion: "DELETE /bots/{name}/versions/{version}",
    DeleteIntent: "DELETE /intents/{name}",
    DeleteIntentVersion: "DELETE /intents/{name}/versions/{version}",
    DeleteSlotType: "DELETE /slottypes/{name}",
    DeleteSlotTypeVersion: "DELETE /slottypes/{name}/version/{version}",
    DeleteUtterances: "DELETE /bots/{botName}/utterances/{userId}",
    GetBot: "GET /bots/{name}/versions/{versionOrAlias}",
    GetBotAlias: "GET /bots/{botName}/aliases/{name}",
    GetBotAliases: "GET /bots/{botName}/aliases",
    GetBotChannelAssociation:
      "GET /bots/{botName}/aliases/{botAlias}/channels/{name}",
    GetBotChannelAssociations:
      "GET /bots/{botName}/aliases/{botAlias}/channels",
    GetBots: "GET /bots",
    GetBotVersions: "GET /bots/{name}/versions",
    GetBuiltinIntent: "GET /builtins/intents/{signature}",
    GetBuiltinIntents: "GET /builtins/intents",
    GetBuiltinSlotTypes: "GET /builtins/slottypes",
    GetExport: "GET /exports",
    GetImport: "GET /imports/{importId}",
    GetIntent: "GET /intents/{name}/versions/{version}",
    GetIntents: "GET /intents",
    GetIntentVersions: "GET /intents/{name}/versions",
    GetMigration: "GET /migrations/{migrationId}",
    GetMigrations: "GET /migrations",
    GetSlotType: "GET /slottypes/{name}/versions/{version}",
    GetSlotTypes: "GET /slottypes",
    GetSlotTypeVersions: "GET /slottypes/{name}/versions",
    GetUtterancesView: "GET /bots/{botName}/utterances?view=aggregation",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutBot: "PUT /bots/{name}/versions/$LATEST",
    PutBotAlias: "PUT /bots/{botName}/aliases/{name}",
    PutIntent: "PUT /intents/{name}/versions/$LATEST",
    PutSlotType: "PUT /slottypes/{name}/versions/$LATEST",
    StartImport: "POST /imports",
    StartMigration: "POST /migrations",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

export type _LexModelBuildingService = _LexModelBuildingServiceClient;
export interface LexModelBuildingService extends _LexModelBuildingService {}
export const LexModelBuildingService = class extends AWSServiceClient {
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
} as unknown as typeof _LexModelBuildingServiceClient;
