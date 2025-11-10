import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GroundStation as _GroundStationClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "GroundStation",
  version: "2019-05-23",
  protocol: "restJson1",
  sigV4ServiceName: "groundstation",
  operations: {
    GetMinuteUsage: "POST /minute-usage",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelContact: "DELETE /contact/{contactId}",
    CreateConfig: "POST /config",
    CreateDataflowEndpointGroup: "POST /dataflowEndpointGroup",
    CreateEphemeris: "POST /ephemeris",
    CreateMissionProfile: "POST /missionprofile",
    DeleteConfig: "DELETE /config/{configType}/{configId}",
    DeleteDataflowEndpointGroup:
      "DELETE /dataflowEndpointGroup/{dataflowEndpointGroupId}",
    DeleteEphemeris: "DELETE /ephemeris/{ephemerisId}",
    DeleteMissionProfile: "DELETE /missionprofile/{missionProfileId}",
    DescribeContact: "GET /contact/{contactId}",
    DescribeEphemeris: "GET /ephemeris/{ephemerisId}",
    GetAgentConfiguration: "GET /agent/{agentId}/configuration",
    GetConfig: "GET /config/{configType}/{configId}",
    GetDataflowEndpointGroup:
      "GET /dataflowEndpointGroup/{dataflowEndpointGroupId}",
    GetMissionProfile: "GET /missionprofile/{missionProfileId}",
    GetSatellite: "GET /satellite/{satelliteId}",
    ListConfigs: "GET /config",
    ListContacts: "POST /contacts",
    ListDataflowEndpointGroups: "GET /dataflowEndpointGroup",
    ListEphemerides: "POST /ephemerides",
    ListGroundStations: "GET /groundstation",
    ListMissionProfiles: "GET /missionprofile",
    ListSatellites: "GET /satellite",
    RegisterAgent: "POST /agent",
    ReserveContact: "POST /contact",
    UpdateAgentStatus: "PUT /agent/{agentId}",
    UpdateConfig: "PUT /config/{configType}/{configId}",
    UpdateEphemeris: "PUT /ephemeris/{ephemerisId}",
    UpdateMissionProfile: "PUT /missionprofile/{missionProfileId}",
  },
} as const satisfies ServiceMetadata;

export type _GroundStation = _GroundStationClient;
export interface GroundStation extends _GroundStation {}
export const GroundStation = class extends AWSServiceClient {
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
} as unknown as typeof _GroundStationClient;
