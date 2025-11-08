import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PinpointSMSVoice as _PinpointSMSVoiceClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Pinpoint SMS Voice",
  version: "2018-09-05",
  protocol: "restJson1",
  sigV4ServiceName: "sms-voice",
  endpointPrefix: "sms-voice.pinpoint",
  operations: {
    "CreateConfigurationSet": "POST /v1/sms-voice/configuration-sets",
    "CreateConfigurationSetEventDestination": "POST /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    "DeleteConfigurationSet": "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}",
    "DeleteConfigurationSetEventDestination": "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    "GetConfigurationSetEventDestinations": "GET /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    "ListConfigurationSets": "GET /v1/sms-voice/configuration-sets",
    "SendVoiceMessage": "POST /v1/sms-voice/voice/message",
    "UpdateConfigurationSetEventDestination": "PUT /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
  },
} as const satisfies ServiceMetadata;

export type _PinpointSMSVoice = _PinpointSMSVoiceClient;
export interface PinpointSMSVoice extends _PinpointSMSVoice {}
export const PinpointSMSVoice = class extends AWSServiceClient {
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
} as unknown as typeof _PinpointSMSVoiceClient;
