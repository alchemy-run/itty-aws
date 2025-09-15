import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ChimeSDKMeetings as _ChimeSDKMeetingsClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Chime SDK Meetings",
  version: "2021-07-15",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "meetings-chime",
  operations: {
    BatchCreateAttendee:
      "POST /meetings/{MeetingId}/attendees?operation=batch-create",
    BatchUpdateAttendeeCapabilitiesExcept:
      "PUT /meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except",
    CreateAttendee: "POST /meetings/{MeetingId}/attendees",
    CreateMeeting: "POST /meetings",
    CreateMeetingWithAttendees: "POST /meetings?operation=create-attendees",
    DeleteAttendee: "DELETE /meetings/{MeetingId}/attendees/{AttendeeId}",
    DeleteMeeting: "DELETE /meetings/{MeetingId}",
    GetAttendee: "GET /meetings/{MeetingId}/attendees/{AttendeeId}",
    GetMeeting: "GET /meetings/{MeetingId}",
    ListAttendees: "GET /meetings/{MeetingId}/attendees",
    ListTagsForResource: "GET /tags",
    StartMeetingTranscription:
      "POST /meetings/{MeetingId}/transcription?operation=start",
    StopMeetingTranscription:
      "POST /meetings/{MeetingId}/transcription?operation=stop",
    TagResource: "POST /tags?operation=tag-resource",
    UntagResource: "POST /tags?operation=untag-resource",
    UpdateAttendeeCapabilities:
      "PUT /meetings/{MeetingId}/attendees/{AttendeeId}/capabilities",
  },
} as const satisfies ServiceMetadata;

export type _ChimeSDKMeetings = _ChimeSDKMeetingsClient;
export interface ChimeSDKMeetings extends _ChimeSDKMeetings {}
export const ChimeSDKMeetings = class extends AWSServiceClient {
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
} as unknown as typeof _ChimeSDKMeetingsClient;
