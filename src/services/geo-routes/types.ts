import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class GeoRoutes extends AWSServiceClient {
  calculateIsolines(
    input: CalculateIsolinesRequest,
  ): Effect.Effect<
    CalculateIsolinesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  calculateRouteMatrix(
    input: CalculateRouteMatrixRequest,
  ): Effect.Effect<
    CalculateRouteMatrixResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  calculateRoutes(
    input: CalculateRoutesRequest,
  ): Effect.Effect<
    CalculateRoutesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  optimizeWaypoints(
    input: OptimizeWaypointsRequest,
  ): Effect.Effect<
    OptimizeWaypointsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  snapToRoads(
    input: SnapToRoadsRequest,
  ): Effect.Effect<
    SnapToRoadsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type ApiKey = string;

export type BeforeWaypointsList = Array<number>;
export type BoundingBox = Array<number>;
export interface CalculateIsolinesRequest {
  Allow?: IsolineAllowOptions;
  ArrivalTime?: string;
  Avoid?: IsolineAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string;
  Destination?: Array<number>;
  DestinationOptions?: IsolineDestinationOptions;
  IsolineGeometryFormat?: string;
  IsolineGranularity?: IsolineGranularityOptions;
  Key?: string;
  OptimizeIsolineFor?: string;
  OptimizeRoutingFor?: string;
  Origin?: Array<number>;
  OriginOptions?: IsolineOriginOptions;
  Thresholds: IsolineThresholds;
  Traffic?: IsolineTrafficOptions;
  TravelMode?: string;
  TravelModeOptions?: IsolineTravelModeOptions;
}
export interface CalculateIsolinesResponse {
  ArrivalTime?: string;
  DepartureTime?: string;
  IsolineGeometryFormat: string;
  Isolines: Array<Isoline>;
  PricingBucket: string;
  SnappedDestination?: Array<number>;
  SnappedOrigin?: Array<number>;
}
export interface CalculateRouteMatrixRequest {
  Allow?: RouteMatrixAllowOptions;
  Avoid?: RouteMatrixAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string;
  Destinations: Array<RouteMatrixDestination>;
  Exclude?: RouteMatrixExclusionOptions;
  Key?: string;
  OptimizeRoutingFor?: string;
  Origins: Array<RouteMatrixOrigin>;
  RoutingBoundary: RouteMatrixBoundary;
  Traffic?: RouteMatrixTrafficOptions;
  TravelMode?: string;
  TravelModeOptions?: RouteMatrixTravelModeOptions;
}
export interface CalculateRouteMatrixResponse {
  ErrorCount: number;
  PricingBucket: string;
  RouteMatrix: Array<Array<RouteMatrixEntry>>;
  RoutingBoundary: RouteMatrixBoundary;
}
export interface CalculateRoutesRequest {
  Allow?: RouteAllowOptions;
  ArrivalTime?: string;
  Avoid?: RouteAvoidanceOptions;
  DepartNow?: boolean;
  DepartureTime?: string;
  Destination: Array<number>;
  DestinationOptions?: RouteDestinationOptions;
  Driver?: RouteDriverOptions;
  Exclude?: RouteExclusionOptions;
  InstructionsMeasurementSystem?: string;
  Key?: string;
  Languages?: Array<string>;
  LegAdditionalFeatures?: Array<string>;
  LegGeometryFormat?: string;
  MaxAlternatives?: number;
  OptimizeRoutingFor?: string;
  Origin: Array<number>;
  OriginOptions?: RouteOriginOptions;
  SpanAdditionalFeatures?: Array<string>;
  Tolls?: RouteTollOptions;
  Traffic?: RouteTrafficOptions;
  TravelMode?: string;
  TravelModeOptions?: RouteTravelModeOptions;
  TravelStepType?: string;
  Waypoints?: Array<RouteWaypoint>;
}
export interface CalculateRoutesResponse {
  LegGeometryFormat: string;
  Notices: Array<RouteResponseNotice>;
  PricingBucket: string;
  Routes: Array<Route>;
}
export interface Circle {
  Center: Array<number>;
  Radius: number;
}
export type ClusterIndex = number;

export interface Corridor {
  LineString: Array<Array<number>>;
  Radius: number;
}
export type CountryCode = string;

export type CountryCode3 = string;

export type CountryCodeList = Array<string>;
export type CurrencyCode = string;

export type DayOfWeek = string;

export type DimensionCentimeters = number;

export type DistanceMeters = number;

export type DistanceThresholdList = Array<number>;
export type DurationSeconds = number;

export type GeometryFormat = string;

export type Heading = number;

export type IndexList = Array<number>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface Isoline {
  Connections: Array<IsolineConnection>;
  DistanceThreshold?: number;
  Geometries: Array<IsolineShapeGeometry>;
  TimeThreshold?: number;
}
export interface IsolineAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export interface IsolineAvoidanceArea {
  Except?: Array<IsolineAvoidanceAreaGeometry>;
  Geometry: IsolineAvoidanceAreaGeometry;
}
export interface IsolineAvoidanceAreaGeometry {
  BoundingBox?: Array<number>;
  Corridor?: Corridor;
  Polygon?: Array<Array<Array<number>>>;
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: Array<string>;
}
export type IsolineAvoidanceAreaGeometryList = Array<IsolineAvoidanceAreaGeometry>;
export type IsolineAvoidanceAreaList = Array<IsolineAvoidanceArea>;
export interface IsolineAvoidanceOptions {
  Areas?: Array<IsolineAvoidanceArea>;
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  SeasonalClosure?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: Array<string>;
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: Array<IsolineAvoidanceZoneCategory>;
}
export interface IsolineAvoidanceZoneCategory {
  Category?: string;
}
export type IsolineAvoidanceZoneCategoryList = Array<IsolineAvoidanceZoneCategory>;
export interface IsolineCarOptions {
  EngineType?: string;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface IsolineConnection {
  FromPolygonIndex: number;
  Geometry: IsolineConnectionGeometry;
  ToPolygonIndex: number;
}
export interface IsolineConnectionGeometry {
  LineString?: Array<Array<number>>;
  Polyline?: string;
}
export type IsolineConnectionList = Array<IsolineConnection>;
export interface IsolineDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
export type IsolineEngineType = string;

export interface IsolineGranularityOptions {
  MaxPoints?: number;
  MaxResolution?: number;
}
export type IsolineHazardousCargoType = string;

export type IsolineHazardousCargoTypeList = Array<string>;
export type IsolineList = Array<Isoline>;
export interface IsolineMatchingOptions {
  NameHint?: string;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: string;
}
export type IsolineOptimizationObjective = string;

export interface IsolineOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: IsolineMatchingOptions;
  SideOfStreet?: IsolineSideOfStreetOptions;
}
export interface IsolineScooterOptions {
  EngineType?: string;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface IsolineShapeGeometry {
  Polygon?: Array<Array<Array<number>>>;
  PolylinePolygon?: Array<string>;
}
export type IsolineShapeGeometryList = Array<IsolineShapeGeometry>;
export interface IsolineSideOfStreetOptions {
  Position: Array<number>;
  UseWith?: string;
}
export interface IsolineThresholds {
  Distance?: Array<number>;
  Time?: Array<number>;
}
export interface IsolineTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: string;
}
export interface IsolineTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
export type IsolineTravelMode = string;

export interface IsolineTravelModeOptions {
  Car?: IsolineCarOptions;
  Scooter?: IsolineScooterOptions;
  Truck?: IsolineTruckOptions;
}
export interface IsolineTruckOptions {
  AxleCount?: number;
  EngineType?: string;
  GrossWeight?: number;
  HazardousCargos?: Array<string>;
  Height?: number;
  HeightAboveFirstAxle?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: IsolineVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  TireCount?: number;
  Trailer?: IsolineTrailerOptions;
  TruckType?: string;
  TunnelRestrictionCode?: string;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export type IsolineTruckType = string;

export interface IsolineVehicleLicensePlate {
  LastCharacter?: string;
}
export type IsolineZoneCategory = string;

export type LanguageTag = string;

export type LanguageTagList = Array<string>;
export type LinearRing = Array<Array<number>>;
export type LinearRings = Array<Array<Array<number>>>;
export type LineString = Array<Array<number>>;
export interface LocalizedString {
  Language?: string;
  Value: string;
}
export type LocalizedStringList = Array<LocalizedString>;
export type MatchingStrategy = string;

export type MeasurementSystem = string;

export interface OptimizeWaypointsRequest {
  Avoid?: WaypointOptimizationAvoidanceOptions;
  Clustering?: WaypointOptimizationClusteringOptions;
  DepartureTime?: string;
  Destination?: Array<number>;
  DestinationOptions?: WaypointOptimizationDestinationOptions;
  Driver?: WaypointOptimizationDriverOptions;
  Exclude?: WaypointOptimizationExclusionOptions;
  Key?: string;
  OptimizeSequencingFor?: string;
  Origin: Array<number>;
  OriginOptions?: WaypointOptimizationOriginOptions;
  Traffic?: WaypointOptimizationTrafficOptions;
  TravelMode?: string;
  TravelModeOptions?: WaypointOptimizationTravelModeOptions;
  Waypoints?: Array<WaypointOptimizationWaypoint>;
}
export interface OptimizeWaypointsResponse {
  Connections: Array<WaypointOptimizationConnection>;
  Distance: number;
  Duration: number;
  ImpedingWaypoints: Array<WaypointOptimizationImpedingWaypoint>;
  OptimizedWaypoints: Array<WaypointOptimizationOptimizedWaypoint>;
  PricingBucket: string;
  TimeBreakdown: WaypointOptimizationTimeBreakdown;
}
export type Polyline = string;

export interface PolylineCorridor {
  Polyline: string;
  Radius: number;
}
export type PolylineRing = string;

export type PolylineRingList = Array<string>;
export type Position = Array<number>;
export type Position23 = Array<number>;
export type RoadSnapHazardousCargoType = string;

export type RoadSnapHazardousCargoTypeList = Array<string>;
export interface RoadSnapNotice {
  Code: string;
  Title: string;
  TracePointIndexes: Array<number>;
}
export type RoadSnapNoticeCode = string;

export type RoadSnapNoticeList = Array<RoadSnapNotice>;
export interface RoadSnapSnappedGeometry {
  LineString?: Array<Array<number>>;
  Polyline?: string;
}
export interface RoadSnapSnappedTracePoint {
  Confidence: number;
  OriginalPosition: Array<number>;
  SnappedPosition: Array<number>;
}
export type RoadSnapSnappedTracePointList = Array<RoadSnapSnappedTracePoint>;
export interface RoadSnapTracePoint {
  Heading?: number;
  Position: Array<number>;
  Speed?: number;
  Timestamp?: string;
}
export type RoadSnapTracePointIndexList = Array<number>;
export type RoadSnapTracePointList = Array<RoadSnapTracePoint>;
export interface RoadSnapTrailerOptions {
  TrailerCount?: number;
}
export type RoadSnapTravelMode = string;

export interface RoadSnapTravelModeOptions {
  Truck?: RoadSnapTruckOptions;
}
export interface RoadSnapTruckOptions {
  GrossWeight?: number;
  HazardousCargos?: Array<string>;
  Height?: number;
  Length?: number;
  Trailer?: RoadSnapTrailerOptions;
  TunnelRestrictionCode?: string;
  Width?: number;
}
export type RoundaboutAngle = number;

export interface Route {
  Legs: Array<RouteLeg>;
  MajorRoadLabels: Array<RouteMajorRoadLabel>;
  Summary?: RouteSummary;
}
export interface RouteAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export interface RouteAvoidanceArea {
  Except?: Array<RouteAvoidanceAreaGeometry>;
  Geometry: RouteAvoidanceAreaGeometry;
}
export interface RouteAvoidanceAreaGeometry {
  Corridor?: Corridor;
  BoundingBox?: Array<number>;
  Polygon?: Array<Array<Array<number>>>;
  PolylineCorridor?: PolylineCorridor;
  PolylinePolygon?: Array<string>;
}
export type RouteAvoidanceAreaGeometryList = Array<RouteAvoidanceAreaGeometry>;
export type RouteAvoidanceAreaList = Array<RouteAvoidanceArea>;
export interface RouteAvoidanceOptions {
  Areas?: Array<RouteAvoidanceArea>;
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  SeasonalClosure?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: Array<string>;
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: Array<RouteAvoidanceZoneCategory>;
}
export interface RouteAvoidanceZoneCategory {
  Category: string;
}
export type RouteAvoidanceZoneCategoryList = Array<RouteAvoidanceZoneCategory>;
export interface RouteCarOptions {
  EngineType?: string;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface RouteContinueHighwayStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteContinueStepDetails {
  Intersection: Array<LocalizedString>;
}
export interface RouteDestinationOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
  StopDuration?: number;
}
export type RouteDirection = string;

export interface RouteDriverOptions {
  Schedule?: Array<RouteDriverScheduleInterval>;
}
export interface RouteDriverScheduleInterval {
  DriveDuration: number;
  RestDuration: number;
}
export type RouteDriverScheduleIntervalList = Array<RouteDriverScheduleInterval>;
export interface RouteEmissionType {
  Co2EmissionClass?: string;
  Type: string;
}
export type RouteEngineType = string;

export interface RouteEnterHighwayStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteExclusionOptions {
  Countries: Array<string>;
}
export interface RouteExitStepDetails {
  Intersection: Array<LocalizedString>;
  RelativeExit?: number;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteFerryAfterTravelStep {
  Duration: number;
  Instruction?: string;
  Type: string;
}
export type RouteFerryAfterTravelStepList = Array<RouteFerryAfterTravelStep>;
export type RouteFerryAfterTravelStepType = string;

export interface RouteFerryArrival {
  Place: RouteFerryPlace;
  Time?: string;
}
export interface RouteFerryBeforeTravelStep {
  Duration: number;
  Instruction?: string;
  Type: string;
}
export type RouteFerryBeforeTravelStepList = Array<RouteFerryBeforeTravelStep>;
export type RouteFerryBeforeTravelStepType = string;

export interface RouteFerryDeparture {
  Place: RouteFerryPlace;
  Time?: string;
}
export interface RouteFerryLegDetails {
  AfterTravelSteps: Array<RouteFerryAfterTravelStep>;
  Arrival: RouteFerryArrival;
  BeforeTravelSteps: Array<RouteFerryBeforeTravelStep>;
  Departure: RouteFerryDeparture;
  Notices: Array<RouteFerryNotice>;
  PassThroughWaypoints: Array<RoutePassThroughWaypoint>;
  RouteName?: string;
  Spans: Array<RouteFerrySpan>;
  Summary?: RouteFerrySummary;
  TravelSteps: Array<RouteFerryTravelStep>;
}
export interface RouteFerryNotice {
  Code: string;
  Impact?: string;
}
export type RouteFerryNoticeCode = string;

export type RouteFerryNoticeList = Array<RouteFerryNotice>;
export interface RouteFerryOverviewSummary {
  Distance: number;
  Duration: number;
}
export interface RouteFerryPlace {
  Name?: string;
  OriginalPosition?: Array<number>;
  Position: Array<number>;
  WaypointIndex?: number;
}
export interface RouteFerrySpan {
  Country?: string;
  Distance?: number;
  Duration?: number;
  GeometryOffset?: number;
  Names?: Array<LocalizedString>;
  Region?: string;
}
export type RouteFerrySpanList = Array<RouteFerrySpan>;
export interface RouteFerrySummary {
  Overview?: RouteFerryOverviewSummary;
  TravelOnly?: RouteFerryTravelOnlySummary;
}
export interface RouteFerryTravelOnlySummary {
  Duration: number;
}
export interface RouteFerryTravelStep {
  Distance?: number;
  Duration: number;
  GeometryOffset?: number;
  Instruction?: string;
  Type: string;
}
export type RouteFerryTravelStepList = Array<RouteFerryTravelStep>;
export type RouteFerryTravelStepType = string;

export type RouteHazardousCargoType = string;

export type RouteHazardousCargoTypeList = Array<string>;
export interface RouteKeepStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteLeg {
  FerryLegDetails?: RouteFerryLegDetails;
  Geometry: RouteLegGeometry;
  Language?: string;
  PedestrianLegDetails?: RoutePedestrianLegDetails;
  TravelMode: string;
  Type: string;
  VehicleLegDetails?: RouteVehicleLegDetails;
}
export type RouteLegAdditionalFeature = string;

export type RouteLegAdditionalFeatureList = Array<string>;
export interface RouteLegGeometry {
  LineString?: Array<Array<number>>;
  Polyline?: string;
}
export type RouteLegList = Array<RouteLeg>;
export type RouteLegTravelMode = string;

export type RouteLegType = string;

export type RouteList = Array<Route>;
export interface RouteMajorRoadLabel {
  RoadName?: LocalizedString;
  RouteNumber?: RouteNumber;
}
export type RouteMajorRoadLabelList = Array<RouteMajorRoadLabel>;
export interface RouteMatchingOptions {
  NameHint?: string;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: string;
}
export type RouteMatrix = Array<Array<RouteMatrixEntry>>;
export interface RouteMatrixAllowOptions {
  Hot?: boolean;
  Hov?: boolean;
}
export interface RouteMatrixAutoCircle {
  Margin?: number;
  MaxRadius?: number;
}
export interface RouteMatrixAvoidanceArea {
  Geometry: RouteMatrixAvoidanceAreaGeometry;
}
export interface RouteMatrixAvoidanceAreaGeometry {
  BoundingBox?: Array<number>;
  Polygon?: Array<Array<Array<number>>>;
  PolylinePolygon?: Array<string>;
}
export type RouteMatrixAvoidanceAreaList = Array<RouteMatrixAvoidanceArea>;
export interface RouteMatrixAvoidanceOptions {
  Areas?: Array<RouteMatrixAvoidanceArea>;
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  TollRoads?: boolean;
  TollTransponders?: boolean;
  TruckRoadTypes?: Array<string>;
  Tunnels?: boolean;
  UTurns?: boolean;
  ZoneCategories?: Array<RouteMatrixAvoidanceZoneCategory>;
}
export interface RouteMatrixAvoidanceZoneCategory {
  Category?: string;
}
export type RouteMatrixAvoidanceZoneCategoryList = Array<RouteMatrixAvoidanceZoneCategory>;
export interface RouteMatrixBoundary {
  Geometry?: RouteMatrixBoundaryGeometry;
  Unbounded?: boolean;
}
export interface RouteMatrixBoundaryGeometry {
  AutoCircle?: RouteMatrixAutoCircle;
  Circle?: Circle;
  BoundingBox?: Array<number>;
  Polygon?: Array<Array<Array<number>>>;
}
export interface RouteMatrixCarOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface RouteMatrixDestination {
  Options?: RouteMatrixDestinationOptions;
  Position: Array<number>;
}
export type RouteMatrixDestinationList = Array<RouteMatrixDestination>;
export interface RouteMatrixDestinationOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
export interface RouteMatrixEntry {
  Distance: number;
  Duration: number;
  Error?: string;
}
export type RouteMatrixErrorCode = string;

export interface RouteMatrixExclusionOptions {
  Countries: Array<string>;
}
export type RouteMatrixHazardousCargoType = string;

export type RouteMatrixHazardousCargoTypeList = Array<string>;
export interface RouteMatrixMatchingOptions {
  NameHint?: string;
  OnRoadThreshold?: number;
  Radius?: number;
  Strategy?: string;
}
export interface RouteMatrixOrigin {
  Options?: RouteMatrixOriginOptions;
  Position: Array<number>;
}
export type RouteMatrixOriginList = Array<RouteMatrixOrigin>;
export interface RouteMatrixOriginOptions {
  AvoidActionsForDistance?: number;
  Heading?: number;
  Matching?: RouteMatrixMatchingOptions;
  SideOfStreet?: RouteMatrixSideOfStreetOptions;
}
export type RouteMatrixRow = Array<RouteMatrixEntry>;
export interface RouteMatrixScooterOptions {
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export interface RouteMatrixSideOfStreetOptions {
  Position: Array<number>;
  UseWith?: string;
}
export interface RouteMatrixTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: string;
}
export interface RouteMatrixTrailerOptions {
  TrailerCount?: number;
}
export type RouteMatrixTravelMode = string;

export interface RouteMatrixTravelModeOptions {
  Car?: RouteMatrixCarOptions;
  Scooter?: RouteMatrixScooterOptions;
  Truck?: RouteMatrixTruckOptions;
}
export interface RouteMatrixTruckOptions {
  AxleCount?: number;
  GrossWeight?: number;
  HazardousCargos?: Array<string>;
  Height?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: RouteMatrixVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  Trailer?: RouteMatrixTrailerOptions;
  TruckType?: string;
  TunnelRestrictionCode?: string;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export type RouteMatrixTruckType = string;

export interface RouteMatrixVehicleLicensePlate {
  LastCharacter?: string;
}
export type RouteMatrixZoneCategory = string;

export interface RouteNoticeDetailRange {
  Min?: number;
  Max?: number;
}
export type RouteNoticeImpact = string;

export interface RouteNumber {
  Direction?: string;
  Language?: string;
  Value: string;
}
export type RouteNumberList = Array<RouteNumber>;
export interface RouteOriginOptions {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  SideOfStreet?: RouteSideOfStreetOptions;
}
export interface RoutePassThroughPlace {
  OriginalPosition?: Array<number>;
  Position: Array<number>;
  WaypointIndex?: number;
}
export interface RoutePassThroughWaypoint {
  GeometryOffset?: number;
  Place: RoutePassThroughPlace;
}
export type RoutePassThroughWaypointList = Array<RoutePassThroughWaypoint>;
export interface RoutePedestrianArrival {
  Place: RoutePedestrianPlace;
  Time?: string;
}
export interface RoutePedestrianDeparture {
  Place: RoutePedestrianPlace;
  Time?: string;
}
export interface RoutePedestrianLegDetails {
  Arrival: RoutePedestrianArrival;
  Departure: RoutePedestrianDeparture;
  Notices: Array<RoutePedestrianNotice>;
  PassThroughWaypoints: Array<RoutePassThroughWaypoint>;
  Spans: Array<RoutePedestrianSpan>;
  Summary?: RoutePedestrianSummary;
  TravelSteps: Array<RoutePedestrianTravelStep>;
}
export interface RoutePedestrianNotice {
  Code: string;
  Impact?: string;
}
export type RoutePedestrianNoticeCode = string;

export type RoutePedestrianNoticeList = Array<RoutePedestrianNotice>;
export interface RoutePedestrianOptions {
  Speed?: number;
}
export interface RoutePedestrianOverviewSummary {
  Distance: number;
  Duration: number;
}
export interface RoutePedestrianPlace {
  Name?: string;
  OriginalPosition?: Array<number>;
  Position: Array<number>;
  SideOfStreet?: string;
  WaypointIndex?: number;
}
export interface RoutePedestrianSpan {
  BestCaseDuration?: number;
  Country?: string;
  Distance?: number;
  Duration?: number;
  DynamicSpeed?: RouteSpanDynamicSpeedDetails;
  FunctionalClassification?: number;
  GeometryOffset?: number;
  Incidents?: Array<number>;
  Names?: Array<LocalizedString>;
  PedestrianAccess?: Array<string>;
  Region?: string;
  RoadAttributes?: Array<string>;
  RouteNumbers?: Array<RouteNumber>;
  SpeedLimit?: RouteSpanSpeedLimitDetails;
  TypicalDuration?: number;
}
export type RoutePedestrianSpanList = Array<RoutePedestrianSpan>;
export interface RoutePedestrianSummary {
  Overview?: RoutePedestrianOverviewSummary;
  TravelOnly?: RoutePedestrianTravelOnlySummary;
}
export interface RoutePedestrianTravelOnlySummary {
  Duration: number;
}
export interface RoutePedestrianTravelStep {
  ContinueStepDetails?: RouteContinueStepDetails;
  CurrentRoad?: RouteRoad;
  Distance?: number;
  Duration: number;
  ExitNumber?: Array<LocalizedString>;
  GeometryOffset?: number;
  Instruction?: string;
  KeepStepDetails?: RouteKeepStepDetails;
  NextRoad?: RouteRoad;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  Signpost?: RouteSignpost;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: string;
}
export type RoutePedestrianTravelStepList = Array<RoutePedestrianTravelStep>;
export type RoutePedestrianTravelStepType = string;

export interface RouteRampStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteResponseNotice {
  Code: string;
  Impact?: string;
}
export type RouteResponseNoticeCode = string;

export type RouteResponseNoticeList = Array<RouteResponseNotice>;
export interface RouteRoad {
  RoadName: Array<LocalizedString>;
  RouteNumber: Array<RouteNumber>;
  Towards: Array<LocalizedString>;
  Type?: string;
}
export type RouteRoadType = string;

export interface RouteRoundaboutEnterStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteRoundaboutExitStepDetails {
  Intersection: Array<LocalizedString>;
  RelativeExit?: number;
  RoundaboutAngle?: number;
  SteeringDirection?: string;
}
export interface RouteRoundaboutPassStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteScooterOptions {
  EngineType?: string;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
}
export type RouteSideOfStreet = string;

export interface RouteSideOfStreetOptions {
  Position: Array<number>;
  UseWith?: string;
}
export interface RouteSignpost {
  Labels: Array<RouteSignpostLabel>;
}
export interface RouteSignpostLabel {
  RouteNumber?: RouteNumber;
  Text?: LocalizedString;
}
export type RouteSignpostLabelList = Array<RouteSignpostLabel>;
export type RouteSpanAdditionalFeature = string;

export type RouteSpanAdditionalFeatureList = Array<string>;
export type RouteSpanCarAccessAttribute = string;

export type RouteSpanCarAccessAttributeList = Array<string>;
export interface RouteSpanDynamicSpeedDetails {
  BestCaseSpeed?: number;
  TurnDuration?: number;
  TypicalSpeed?: number;
}
export type RouteSpanGateAttribute = string;

export type RouteSpanPedestrianAccessAttribute = string;

export type RouteSpanPedestrianAccessAttributeList = Array<string>;
export type RouteSpanRailwayCrossingAttribute = string;

export type RouteSpanRoadAttribute = string;

export type RouteSpanRoadAttributeList = Array<string>;
export type RouteSpanScooterAccessAttribute = string;

export type RouteSpanScooterAccessAttributeList = Array<string>;
export interface RouteSpanSpeedLimitDetails {
  MaxSpeed?: number;
  Unlimited?: boolean;
}
export type RouteSpanTruckAccessAttribute = string;

export type RouteSpanTruckAccessAttributeList = Array<string>;
export type RouteSteeringDirection = string;

export interface RouteSummary {
  Distance?: number;
  Duration?: number;
  Tolls?: RouteTollSummary;
}
export interface RouteToll {
  Country?: string;
  PaymentSites: Array<RouteTollPaymentSite>;
  Rates: Array<RouteTollRate>;
  Systems: Array<number>;
}
export type RouteTollList = Array<RouteToll>;
export interface RouteTollOptions {
  AllTransponders?: boolean;
  AllVignettes?: boolean;
  Currency?: string;
  EmissionType?: RouteEmissionType;
  VehicleCategory?: string;
}
export interface RouteTollPass {
  IncludesReturnTrip?: boolean;
  SeniorPass?: boolean;
  TransferCount?: number;
  TripCount?: number;
  ValidityPeriod?: RouteTollPassValidityPeriod;
}
export interface RouteTollPassValidityPeriod {
  Period: string;
  PeriodCount?: number;
}
export type RouteTollPassValidityPeriodType = string;

export type RouteTollPaymentMethod = string;

export type RouteTollPaymentMethodList = Array<string>;
export interface RouteTollPaymentSite {
  Name?: string;
  Position: Array<number>;
}
export type RouteTollPaymentSiteList = Array<RouteTollPaymentSite>;
export interface RouteTollPrice {
  Currency: string;
  Estimate: boolean;
  PerDuration?: number;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
export interface RouteTollPriceSummary {
  Currency: string;
  Estimate: boolean;
  Range: boolean;
  RangeValue?: RouteTollPriceValueRange;
  Value: number;
}
export interface RouteTollPriceValueRange {
  Min: number;
  Max: number;
}
export interface RouteTollRate {
  ApplicableTimes?: string;
  ConvertedPrice?: RouteTollPrice;
  Id: string;
  LocalPrice: RouteTollPrice;
  Name: string;
  Pass?: RouteTollPass;
  PaymentMethods: Array<string>;
  Transponders: Array<RouteTransponder>;
}
export type RouteTollRateList = Array<RouteTollRate>;
export interface RouteTollSummary {
  Total?: RouteTollPriceSummary;
}
export interface RouteTollSystem {
  Name?: string;
}
export type RouteTollSystemList = Array<RouteTollSystem>;
export type RouteTollVehicleCategory = string;

export interface RouteTrafficOptions {
  FlowEventThresholdOverride?: number;
  Usage?: string;
}
export interface RouteTrailerOptions {
  AxleCount?: number;
  TrailerCount?: number;
}
export interface RouteTransponder {
  SystemName?: string;
}
export type RouteTransponderList = Array<RouteTransponder>;
export type RouteTravelMode = string;

export interface RouteTravelModeOptions {
  Car?: RouteCarOptions;
  Pedestrian?: RoutePedestrianOptions;
  Scooter?: RouteScooterOptions;
  Truck?: RouteTruckOptions;
}
export type RouteTravelStepType = string;

export interface RouteTruckOptions {
  AxleCount?: number;
  EngineType?: string;
  GrossWeight?: number;
  HazardousCargos?: Array<string>;
  Height?: number;
  HeightAboveFirstAxle?: number;
  KpraLength?: number;
  Length?: number;
  LicensePlate?: RouteVehicleLicensePlate;
  MaxSpeed?: number;
  Occupancy?: number;
  PayloadCapacity?: number;
  TireCount?: number;
  Trailer?: RouteTrailerOptions;
  TruckType?: string;
  TunnelRestrictionCode?: string;
  WeightPerAxle?: number;
  WeightPerAxleGroup?: WeightPerAxleGroup;
  Width?: number;
}
export type RouteTruckType = string;

export type RouteTurnIntensity = string;

export interface RouteTurnStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteUTurnStepDetails {
  Intersection: Array<LocalizedString>;
  SteeringDirection?: string;
  TurnAngle?: number;
  TurnIntensity?: string;
}
export interface RouteVehicleArrival {
  Place: RouteVehiclePlace;
  Time?: string;
}
export interface RouteVehicleDeparture {
  Place: RouteVehiclePlace;
  Time?: string;
}
export interface RouteVehicleIncident {
  Description?: string;
  EndTime?: string;
  Severity?: string;
  StartTime?: string;
  Type?: string;
}
export type RouteVehicleIncidentList = Array<RouteVehicleIncident>;
export type RouteVehicleIncidentSeverity = string;

export type RouteVehicleIncidentType = string;

export interface RouteVehicleLegDetails {
  Arrival: RouteVehicleArrival;
  Departure: RouteVehicleDeparture;
  Incidents: Array<RouteVehicleIncident>;
  Notices: Array<RouteVehicleNotice>;
  PassThroughWaypoints: Array<RoutePassThroughWaypoint>;
  Spans: Array<RouteVehicleSpan>;
  Summary?: RouteVehicleSummary;
  Tolls: Array<RouteToll>;
  TollSystems: Array<RouteTollSystem>;
  TravelSteps: Array<RouteVehicleTravelStep>;
  TruckRoadTypes: Array<string>;
  Zones: Array<RouteZone>;
}
export interface RouteVehicleLicensePlate {
  LastCharacter?: string;
}
export interface RouteVehicleNotice {
  Code: string;
  Details: Array<RouteVehicleNoticeDetail>;
  Impact?: string;
}
export type RouteVehicleNoticeCode = string;

export interface RouteVehicleNoticeDetail {
  Title?: string;
  ViolatedConstraints?: RouteViolatedConstraints;
}
export type RouteVehicleNoticeDetailList = Array<RouteVehicleNoticeDetail>;
export type RouteVehicleNoticeList = Array<RouteVehicleNotice>;
export interface RouteVehicleOverviewSummary {
  BestCaseDuration?: number;
  Distance: number;
  Duration: number;
  TypicalDuration?: number;
}
export interface RouteVehiclePlace {
  Name?: string;
  OriginalPosition?: Array<number>;
  Position: Array<number>;
  SideOfStreet?: string;
  WaypointIndex?: number;
}
export interface RouteVehicleSpan {
  BestCaseDuration?: number;
  CarAccess?: Array<string>;
  Country?: string;
  Distance?: number;
  Duration?: number;
  DynamicSpeed?: RouteSpanDynamicSpeedDetails;
  FunctionalClassification?: number;
  Gate?: string;
  GeometryOffset?: number;
  Incidents?: Array<number>;
  Names?: Array<LocalizedString>;
  Notices?: Array<number>;
  RailwayCrossing?: string;
  Region?: string;
  RoadAttributes?: Array<string>;
  RouteNumbers?: Array<RouteNumber>;
  ScooterAccess?: Array<string>;
  SpeedLimit?: RouteSpanSpeedLimitDetails;
  TollSystems?: Array<number>;
  TruckAccess?: Array<string>;
  TruckRoadTypes?: Array<number>;
  TypicalDuration?: number;
  Zones?: Array<number>;
}
export type RouteVehicleSpanList = Array<RouteVehicleSpan>;
export interface RouteVehicleSummary {
  Overview?: RouteVehicleOverviewSummary;
  TravelOnly?: RouteVehicleTravelOnlySummary;
}
export interface RouteVehicleTravelOnlySummary {
  BestCaseDuration?: number;
  Duration: number;
  TypicalDuration?: number;
}
export interface RouteVehicleTravelStep {
  ContinueHighwayStepDetails?: RouteContinueHighwayStepDetails;
  ContinueStepDetails?: RouteContinueStepDetails;
  CurrentRoad?: RouteRoad;
  Distance?: number;
  Duration: number;
  EnterHighwayStepDetails?: RouteEnterHighwayStepDetails;
  ExitNumber?: Array<LocalizedString>;
  ExitStepDetails?: RouteExitStepDetails;
  GeometryOffset?: number;
  Instruction?: string;
  KeepStepDetails?: RouteKeepStepDetails;
  NextRoad?: RouteRoad;
  RampStepDetails?: RouteRampStepDetails;
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails;
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails;
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails;
  Signpost?: RouteSignpost;
  TurnStepDetails?: RouteTurnStepDetails;
  Type: string;
  UTurnStepDetails?: RouteUTurnStepDetails;
}
export type RouteVehicleTravelStepList = Array<RouteVehicleTravelStep>;
export type RouteVehicleTravelStepType = string;

export interface RouteViolatedConstraints {
  AllHazardsRestricted?: boolean;
  AxleCount?: RouteNoticeDetailRange;
  HazardousCargos: Array<string>;
  MaxHeight?: number;
  MaxKpraLength?: number;
  MaxLength?: number;
  MaxPayloadCapacity?: number;
  MaxWeight?: RouteWeightConstraint;
  MaxWeightPerAxle?: number;
  MaxWeightPerAxleGroup?: WeightPerAxleGroup;
  MaxWidth?: number;
  Occupancy?: RouteNoticeDetailRange;
  RestrictedTimes?: string;
  TimeDependent?: boolean;
  TrailerCount?: RouteNoticeDetailRange;
  TravelMode?: boolean;
  TruckRoadType?: string;
  TruckType?: string;
  TunnelRestrictionCode?: string;
}
export interface RouteWaypoint {
  AvoidActionsForDistance?: number;
  AvoidUTurns?: boolean;
  Heading?: number;
  Matching?: RouteMatchingOptions;
  PassThrough?: boolean;
  Position: Array<number>;
  SideOfStreet?: RouteSideOfStreetOptions;
  StopDuration?: number;
}
export type RouteWaypointList = Array<RouteWaypoint>;
export interface RouteWeightConstraint {
  Type: string;
  Value: number;
}
export type RouteWeightConstraintType = string;

export interface RouteZone {
  Category?: string;
  Name?: string;
}
export type RouteZoneCategory = string;

export type RouteZoneList = Array<RouteZone>;
export type RoutingObjective = string;

export type SensitiveBoolean = boolean;

export type SensitiveDouble = number;

export type SensitiveInteger = number;

export type SensitiveString = string;

export type SideOfStreetMatchingStrategy = string;

export interface SnapToRoadsRequest {
  Key?: string;
  SnappedGeometryFormat?: string;
  SnapRadius?: number;
  TracePoints: Array<RoadSnapTracePoint>;
  TravelMode?: string;
  TravelModeOptions?: RoadSnapTravelModeOptions;
}
export interface SnapToRoadsResponse {
  Notices: Array<RoadSnapNotice>;
  PricingBucket: string;
  SnappedGeometry?: RoadSnapSnappedGeometry;
  SnappedGeometryFormat: string;
  SnappedTracePoints: Array<RoadSnapSnappedTracePoint>;
}
export type SpeedKilometersPerHour = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type TimeOfDay = string;

export type TimestampWithTimezoneOffset = string;

export type TimeThresholdList = Array<number>;
export type TrafficUsage = string;

export type TruckRoadType = string;

export type TruckRoadTypeList = Array<string>;
export type TunnelRestrictionCode = string;

export type TurnAngle = number;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: string;
  readonly FieldList: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type WaypointId = string;

export type WaypointIndex = number;

export interface WaypointOptimizationAccessHours {
  From: WaypointOptimizationAccessHoursEntry;
  To: WaypointOptimizationAccessHoursEntry;
}
export interface WaypointOptimizationAccessHoursEntry {
  DayOfWeek: string;
  TimeOfDay: string;
}
export interface WaypointOptimizationAvoidanceArea {
  Geometry: WaypointOptimizationAvoidanceAreaGeometry;
}
export interface WaypointOptimizationAvoidanceAreaGeometry {
  BoundingBox?: Array<number>;
}
export type WaypointOptimizationAvoidanceAreaList = Array<WaypointOptimizationAvoidanceArea>;
export interface WaypointOptimizationAvoidanceOptions {
  Areas?: Array<WaypointOptimizationAvoidanceArea>;
  CarShuttleTrains?: boolean;
  ControlledAccessHighways?: boolean;
  DirtRoads?: boolean;
  Ferries?: boolean;
  TollRoads?: boolean;
  Tunnels?: boolean;
  UTurns?: boolean;
}
export type WaypointOptimizationClusteringAlgorithm = string;

export interface WaypointOptimizationClusteringOptions {
  Algorithm: string;
  DrivingDistanceOptions?: WaypointOptimizationDrivingDistanceOptions;
}
export interface WaypointOptimizationConnection {
  Distance: number;
  From: string;
  RestDuration: number;
  To: string;
  TravelDuration: number;
  WaitDuration: number;
}
export type WaypointOptimizationConnectionList = Array<WaypointOptimizationConnection>;
export type WaypointOptimizationConstraint = string;

export interface WaypointOptimizationDestinationOptions {
  AccessHours?: WaypointOptimizationAccessHours;
  AppointmentTime?: string;
  Heading?: number;
  Id?: string;
  ServiceDuration?: number;
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions;
}
export interface WaypointOptimizationDriverOptions {
  RestCycles?: WaypointOptimizationRestCycles;
  RestProfile?: WaypointOptimizationRestProfile;
  TreatServiceTimeAs?: string;
}
export interface WaypointOptimizationDrivingDistanceOptions {
  DrivingDistance: number;
}
export interface WaypointOptimizationExclusionOptions {
  Countries: Array<string>;
}
export interface WaypointOptimizationFailedConstraint {
  Constraint?: string;
  Reason?: string;
}
export type WaypointOptimizationFailedConstraintList = Array<WaypointOptimizationFailedConstraint>;
export type WaypointOptimizationHazardousCargoType = string;

export type WaypointOptimizationHazardousCargoTypeList = Array<string>;
export interface WaypointOptimizationImpedingWaypoint {
  FailedConstraints: Array<WaypointOptimizationFailedConstraint>;
  Id: string;
  Position: Array<number>;
}
export type WaypointOptimizationImpedingWaypointList = Array<WaypointOptimizationImpedingWaypoint>;
export interface WaypointOptimizationOptimizedWaypoint {
  ArrivalTime?: string;
  ClusterIndex?: number;
  DepartureTime: string;
  Id: string;
  Position: Array<number>;
}
export type WaypointOptimizationOptimizedWaypointList = Array<WaypointOptimizationOptimizedWaypoint>;
export interface WaypointOptimizationOriginOptions {
  Id?: string;
}
export interface WaypointOptimizationPedestrianOptions {
  Speed?: number;
}
export interface WaypointOptimizationRestCycleDurations {
  RestDuration: number;
  WorkDuration: number;
}
export interface WaypointOptimizationRestCycles {
  LongCycle: WaypointOptimizationRestCycleDurations;
  ShortCycle: WaypointOptimizationRestCycleDurations;
}
export interface WaypointOptimizationRestProfile {
  Profile: string;
}
export type WaypointOptimizationSequencingObjective = string;

export type WaypointOptimizationServiceTimeTreatment = string;

export interface WaypointOptimizationSideOfStreetOptions {
  Position: Array<number>;
  UseWith?: string;
}
export interface WaypointOptimizationTimeBreakdown {
  RestDuration: number;
  ServiceDuration: number;
  TravelDuration: number;
  WaitDuration: number;
}
export interface WaypointOptimizationTrafficOptions {
  Usage?: string;
}
export interface WaypointOptimizationTrailerOptions {
  TrailerCount?: number;
}
export type WaypointOptimizationTravelMode = string;

export interface WaypointOptimizationTravelModeOptions {
  Pedestrian?: WaypointOptimizationPedestrianOptions;
  Truck?: WaypointOptimizationTruckOptions;
}
export interface WaypointOptimizationTruckOptions {
  GrossWeight?: number;
  HazardousCargos?: Array<string>;
  Height?: number;
  Length?: number;
  Trailer?: WaypointOptimizationTrailerOptions;
  TruckType?: string;
  TunnelRestrictionCode?: string;
  WeightPerAxle?: number;
  Width?: number;
}
export type WaypointOptimizationTruckType = string;

export interface WaypointOptimizationWaypoint {
  AccessHours?: WaypointOptimizationAccessHours;
  AppointmentTime?: string;
  Before?: Array<number>;
  Heading?: number;
  Id?: string;
  Position: Array<number>;
  ServiceDuration?: number;
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions;
}
export type WaypointOptimizationWaypointList = Array<WaypointOptimizationWaypoint>;
export type WeightKilograms = number;

export interface WeightPerAxleGroup {
  Single?: number;
  Tandem?: number;
  Triple?: number;
  Quad?: number;
  Quint?: number;
}
export declare namespace CalculateIsolines {
  export type Input = CalculateIsolinesRequest;
  export type Output = CalculateIsolinesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CalculateRouteMatrix {
  export type Input = CalculateRouteMatrixRequest;
  export type Output = CalculateRouteMatrixResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CalculateRoutes {
  export type Input = CalculateRoutesRequest;
  export type Output = CalculateRoutesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace OptimizeWaypoints {
  export type Input = OptimizeWaypointsRequest;
  export type Output = OptimizeWaypointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SnapToRoads {
  export type Input = SnapToRoadsRequest;
  export type Output = SnapToRoadsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type GeoRoutesErrors = AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError;

