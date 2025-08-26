import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PinpointSMSVoice as _PinpointSMSVoice } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Pinpoint SMS Voice",
  version: "2018-09-05",
  protocol: "restJson1",
  sigV4ServiceName: "sms-voice",
  endpointPrefix: "sms-voice.pinpoint",
  operations: {
    CreateConfigurationSet: "POST /v1/sms-voice/configuration-sets",
    CreateConfigurationSetEventDestination:
      "POST /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    DeleteConfigurationSet:
      "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}",
    DeleteConfigurationSetEventDestination:
      "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    GetConfigurationSetEventDestinations:
      "GET /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
    ListConfigurationSets: "GET /v1/sms-voice/configuration-sets",
    SendVoiceMessage: "POST /v1/sms-voice/voice/message",
    UpdateConfigurationSetEventDestination:
      "PUT /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const PinpointSMSVoice = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _PinpointSMSVoice;
