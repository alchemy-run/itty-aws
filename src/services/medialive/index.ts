import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaLive as _MediaLiveClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaLive",
  version: "2017-10-14",
  protocol: "restJson1",
  sigV4ServiceName: "medialive",
  endpointPrefix: "medialive",
  operations: {
    AcceptInputDeviceTransfer: "POST /prod/inputDevices/{InputDeviceId}/accept",
    BatchDelete: "POST /prod/batch/delete",
    BatchStart: "POST /prod/batch/start",
    BatchStop: "POST /prod/batch/stop",
    BatchUpdateSchedule: "PUT /prod/channels/{ChannelId}/schedule",
    CancelInputDeviceTransfer: "POST /prod/inputDevices/{InputDeviceId}/cancel",
    ClaimDevice: "POST /prod/claimDevice",
    CreateChannel: "POST /prod/channels",
    CreateChannelPlacementGroup:
      "POST /prod/clusters/{ClusterId}/channelplacementgroups",
    CreateCloudWatchAlarmTemplate: "POST /prod/cloudwatch-alarm-templates",
    CreateCloudWatchAlarmTemplateGroup:
      "POST /prod/cloudwatch-alarm-template-groups",
    CreateCluster: "POST /prod/clusters",
    CreateEventBridgeRuleTemplate: "POST /prod/eventbridge-rule-templates",
    CreateEventBridgeRuleTemplateGroup:
      "POST /prod/eventbridge-rule-template-groups",
    CreateInput: "POST /prod/inputs",
    CreateInputSecurityGroup: "POST /prod/inputSecurityGroups",
    CreateMultiplex: "POST /prod/multiplexes",
    CreateMultiplexProgram: "POST /prod/multiplexes/{MultiplexId}/programs",
    CreateNetwork: "POST /prod/networks",
    CreateNode: "POST /prod/clusters/{ClusterId}/nodes",
    CreateNodeRegistrationScript:
      "POST /prod/clusters/{ClusterId}/nodeRegistrationScript",
    CreatePartnerInput: "POST /prod/inputs/{InputId}/partners",
    CreateSdiSource: "POST /prod/sdiSources",
    CreateSignalMap: "POST /prod/signal-maps",
    CreateTags: "POST /prod/tags/{ResourceArn}",
    DeleteChannel: "DELETE /prod/channels/{ChannelId}",
    DeleteChannelPlacementGroup:
      "DELETE /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
    DeleteCloudWatchAlarmTemplate:
      "DELETE /prod/cloudwatch-alarm-templates/{Identifier}",
    DeleteCloudWatchAlarmTemplateGroup:
      "DELETE /prod/cloudwatch-alarm-template-groups/{Identifier}",
    DeleteCluster: "DELETE /prod/clusters/{ClusterId}",
    DeleteEventBridgeRuleTemplate:
      "DELETE /prod/eventbridge-rule-templates/{Identifier}",
    DeleteEventBridgeRuleTemplateGroup:
      "DELETE /prod/eventbridge-rule-template-groups/{Identifier}",
    DeleteInput: "DELETE /prod/inputs/{InputId}",
    DeleteInputSecurityGroup:
      "DELETE /prod/inputSecurityGroups/{InputSecurityGroupId}",
    DeleteMultiplex: "DELETE /prod/multiplexes/{MultiplexId}",
    DeleteMultiplexProgram:
      "DELETE /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
    DeleteNetwork: "DELETE /prod/networks/{NetworkId}",
    DeleteNode: "DELETE /prod/clusters/{ClusterId}/nodes/{NodeId}",
    DeleteReservation: "DELETE /prod/reservations/{ReservationId}",
    DeleteSchedule: "DELETE /prod/channels/{ChannelId}/schedule",
    DeleteSdiSource: "DELETE /prod/sdiSources/{SdiSourceId}",
    DeleteSignalMap: "DELETE /prod/signal-maps/{Identifier}",
    DeleteTags: "DELETE /prod/tags/{ResourceArn}",
    DescribeAccountConfiguration: "GET /prod/accountConfiguration",
    DescribeChannel: "GET /prod/channels/{ChannelId}",
    DescribeChannelPlacementGroup:
      "GET /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
    DescribeCluster: "GET /prod/clusters/{ClusterId}",
    DescribeInput: "GET /prod/inputs/{InputId}",
    DescribeInputDevice: "GET /prod/inputDevices/{InputDeviceId}",
    DescribeInputDeviceThumbnail: {
      http: "GET /prod/inputDevices/{InputDeviceId}/thumbnailData",
      traits: {
        Body: "httpPayload",
        ContentType: "Content-Type",
        ContentLength: "Content-Length",
        ETag: "ETag",
        LastModified: "Last-Modified",
      },
    },
    DescribeInputSecurityGroup:
      "GET /prod/inputSecurityGroups/{InputSecurityGroupId}",
    DescribeMultiplex: "GET /prod/multiplexes/{MultiplexId}",
    DescribeMultiplexProgram:
      "GET /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
    DescribeNetwork: "GET /prod/networks/{NetworkId}",
    DescribeNode: "GET /prod/clusters/{ClusterId}/nodes/{NodeId}",
    DescribeOffering: "GET /prod/offerings/{OfferingId}",
    DescribeReservation: "GET /prod/reservations/{ReservationId}",
    DescribeSchedule: "GET /prod/channels/{ChannelId}/schedule",
    DescribeSdiSource: "GET /prod/sdiSources/{SdiSourceId}",
    DescribeThumbnails: "GET /prod/channels/{ChannelId}/thumbnails",
    GetCloudWatchAlarmTemplate:
      "GET /prod/cloudwatch-alarm-templates/{Identifier}",
    GetCloudWatchAlarmTemplateGroup:
      "GET /prod/cloudwatch-alarm-template-groups/{Identifier}",
    GetEventBridgeRuleTemplate:
      "GET /prod/eventbridge-rule-templates/{Identifier}",
    GetEventBridgeRuleTemplateGroup:
      "GET /prod/eventbridge-rule-template-groups/{Identifier}",
    GetSignalMap: "GET /prod/signal-maps/{Identifier}",
    ListChannelPlacementGroups:
      "GET /prod/clusters/{ClusterId}/channelplacementgroups",
    ListChannels: "GET /prod/channels",
    ListCloudWatchAlarmTemplateGroups:
      "GET /prod/cloudwatch-alarm-template-groups",
    ListCloudWatchAlarmTemplates: "GET /prod/cloudwatch-alarm-templates",
    ListClusters: "GET /prod/clusters",
    ListEventBridgeRuleTemplateGroups:
      "GET /prod/eventbridge-rule-template-groups",
    ListEventBridgeRuleTemplates: "GET /prod/eventbridge-rule-templates",
    ListInputDevices: "GET /prod/inputDevices",
    ListInputDeviceTransfers: "GET /prod/inputDeviceTransfers",
    ListInputs: "GET /prod/inputs",
    ListInputSecurityGroups: "GET /prod/inputSecurityGroups",
    ListMultiplexes: "GET /prod/multiplexes",
    ListMultiplexPrograms: "GET /prod/multiplexes/{MultiplexId}/programs",
    ListNetworks: "GET /prod/networks",
    ListNodes: "GET /prod/clusters/{ClusterId}/nodes",
    ListOfferings: "GET /prod/offerings",
    ListReservations: "GET /prod/reservations",
    ListSdiSources: "GET /prod/sdiSources",
    ListSignalMaps: "GET /prod/signal-maps",
    ListTagsForResource: "GET /prod/tags/{ResourceArn}",
    ListVersions: "GET /prod/versions",
    PurchaseOffering: "POST /prod/offerings/{OfferingId}/purchase",
    RebootInputDevice: "POST /prod/inputDevices/{InputDeviceId}/reboot",
    RejectInputDeviceTransfer: "POST /prod/inputDevices/{InputDeviceId}/reject",
    RestartChannelPipelines:
      "POST /prod/channels/{ChannelId}/restartChannelPipelines",
    StartChannel: "POST /prod/channels/{ChannelId}/start",
    StartDeleteMonitorDeployment:
      "DELETE /prod/signal-maps/{Identifier}/monitor-deployment",
    StartInputDevice: "POST /prod/inputDevices/{InputDeviceId}/start",
    StartInputDeviceMaintenanceWindow:
      "POST /prod/inputDevices/{InputDeviceId}/startInputDeviceMaintenanceWindow",
    StartMonitorDeployment:
      "POST /prod/signal-maps/{Identifier}/monitor-deployment",
    StartMultiplex: "POST /prod/multiplexes/{MultiplexId}/start",
    StartUpdateSignalMap: "PATCH /prod/signal-maps/{Identifier}",
    StopChannel: "POST /prod/channels/{ChannelId}/stop",
    StopInputDevice: "POST /prod/inputDevices/{InputDeviceId}/stop",
    StopMultiplex: "POST /prod/multiplexes/{MultiplexId}/stop",
    TransferInputDevice: "POST /prod/inputDevices/{InputDeviceId}/transfer",
    UpdateAccountConfiguration: "PUT /prod/accountConfiguration",
    UpdateChannel: "PUT /prod/channels/{ChannelId}",
    UpdateChannelClass: "PUT /prod/channels/{ChannelId}/channelClass",
    UpdateChannelPlacementGroup:
      "PUT /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
    UpdateCloudWatchAlarmTemplate:
      "PATCH /prod/cloudwatch-alarm-templates/{Identifier}",
    UpdateCloudWatchAlarmTemplateGroup:
      "PATCH /prod/cloudwatch-alarm-template-groups/{Identifier}",
    UpdateCluster: "PUT /prod/clusters/{ClusterId}",
    UpdateEventBridgeRuleTemplate:
      "PATCH /prod/eventbridge-rule-templates/{Identifier}",
    UpdateEventBridgeRuleTemplateGroup:
      "PATCH /prod/eventbridge-rule-template-groups/{Identifier}",
    UpdateInput: "PUT /prod/inputs/{InputId}",
    UpdateInputDevice: "PUT /prod/inputDevices/{InputDeviceId}",
    UpdateInputSecurityGroup:
      "PUT /prod/inputSecurityGroups/{InputSecurityGroupId}",
    UpdateMultiplex: "PUT /prod/multiplexes/{MultiplexId}",
    UpdateMultiplexProgram:
      "PUT /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
    UpdateNetwork: "PUT /prod/networks/{NetworkId}",
    UpdateNode: "PUT /prod/clusters/{ClusterId}/nodes/{NodeId}",
    UpdateNodeState: "PUT /prod/clusters/{ClusterId}/nodes/{NodeId}/state",
    UpdateReservation: "PUT /prod/reservations/{ReservationId}",
    UpdateSdiSource: "PUT /prod/sdiSources/{SdiSourceId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaLive = class extends AWSServiceClient {
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
} as unknown as typeof _MediaLiveClient;
