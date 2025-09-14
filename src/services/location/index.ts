import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Location as _LocationClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Location",
  version: "2020-11-19",
  protocol: "restJson1",
  sigV4ServiceName: "geo",
  operations: {
    AssociateTrackerConsumer:
      "POST /tracking/v0/trackers/{TrackerName}/consumers",
    BatchDeleteDevicePositionHistory:
      "POST /tracking/v0/trackers/{TrackerName}/delete-positions",
    BatchDeleteGeofence:
      "POST /geofencing/v0/collections/{CollectionName}/delete-geofences",
    BatchEvaluateGeofences:
      "POST /geofencing/v0/collections/{CollectionName}/positions",
    BatchGetDevicePosition:
      "POST /tracking/v0/trackers/{TrackerName}/get-positions",
    BatchPutGeofence:
      "POST /geofencing/v0/collections/{CollectionName}/put-geofences",
    BatchUpdateDevicePosition:
      "POST /tracking/v0/trackers/{TrackerName}/positions",
    CalculateRoute:
      "POST /routes/v0/calculators/{CalculatorName}/calculate/route",
    CalculateRouteMatrix:
      "POST /routes/v0/calculators/{CalculatorName}/calculate/route-matrix",
    CreateGeofenceCollection: "POST /geofencing/v0/collections",
    CreateKey: "POST /metadata/v0/keys",
    CreateMap: "POST /maps/v0/maps",
    CreatePlaceIndex: "POST /places/v0/indexes",
    CreateRouteCalculator: "POST /routes/v0/calculators",
    CreateTracker: "POST /tracking/v0/trackers",
    DeleteGeofenceCollection:
      "DELETE /geofencing/v0/collections/{CollectionName}",
    DeleteKey: "DELETE /metadata/v0/keys/{KeyName}",
    DeleteMap: "DELETE /maps/v0/maps/{MapName}",
    DeletePlaceIndex: "DELETE /places/v0/indexes/{IndexName}",
    DeleteRouteCalculator: "DELETE /routes/v0/calculators/{CalculatorName}",
    DeleteTracker: "DELETE /tracking/v0/trackers/{TrackerName}",
    DescribeGeofenceCollection:
      "GET /geofencing/v0/collections/{CollectionName}",
    DescribeKey: "GET /metadata/v0/keys/{KeyName}",
    DescribeMap: "GET /maps/v0/maps/{MapName}",
    DescribePlaceIndex: "GET /places/v0/indexes/{IndexName}",
    DescribeRouteCalculator: "GET /routes/v0/calculators/{CalculatorName}",
    DescribeTracker: "GET /tracking/v0/trackers/{TrackerName}",
    DisassociateTrackerConsumer:
      "DELETE /tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}",
    ForecastGeofenceEvents:
      "POST /geofencing/v0/collections/{CollectionName}/forecast-geofence-events",
    GetDevicePosition:
      "GET /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest",
    GetDevicePositionHistory:
      "POST /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions",
    GetGeofence:
      "GET /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
    GetMapGlyphs: {
      http: "GET /maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
      },
    },
    GetMapSprites: {
      http: "GET /maps/v0/maps/{MapName}/sprites/{FileName}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
      },
    },
    GetMapStyleDescriptor: {
      http: "GET /maps/v0/maps/{MapName}/style-descriptor",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
      },
    },
    GetMapTile: {
      http: "GET /maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
      },
    },
    GetPlace: "GET /places/v0/indexes/{IndexName}/places/{PlaceId}",
    ListDevicePositions:
      "POST /tracking/v0/trackers/{TrackerName}/list-positions",
    ListGeofenceCollections: "POST /geofencing/v0/list-collections",
    ListGeofences:
      "POST /geofencing/v0/collections/{CollectionName}/list-geofences",
    ListKeys: "POST /metadata/v0/list-keys",
    ListMaps: "POST /maps/v0/list-maps",
    ListPlaceIndexes: "POST /places/v0/list-indexes",
    ListRouteCalculators: "POST /routes/v0/list-calculators",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    ListTrackerConsumers:
      "POST /tracking/v0/trackers/{TrackerName}/list-consumers",
    ListTrackers: "POST /tracking/v0/list-trackers",
    PutGeofence:
      "PUT /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
    SearchPlaceIndexForPosition:
      "POST /places/v0/indexes/{IndexName}/search/position",
    SearchPlaceIndexForSuggestions:
      "POST /places/v0/indexes/{IndexName}/search/suggestions",
    SearchPlaceIndexForText: "POST /places/v0/indexes/{IndexName}/search/text",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateGeofenceCollection:
      "PATCH /geofencing/v0/collections/{CollectionName}",
    UpdateKey: "PATCH /metadata/v0/keys/{KeyName}",
    UpdateMap: "PATCH /maps/v0/maps/{MapName}",
    UpdatePlaceIndex: "PATCH /places/v0/indexes/{IndexName}",
    UpdateRouteCalculator: "PATCH /routes/v0/calculators/{CalculatorName}",
    UpdateTracker: "PATCH /tracking/v0/trackers/{TrackerName}",
    VerifyDevicePosition:
      "POST /tracking/v0/trackers/{TrackerName}/positions/verify",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Location = class extends AWSServiceClient {
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
} as unknown as typeof _LocationClient;
