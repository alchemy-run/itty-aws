import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class AppMesh extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createGatewayRoute(
    input: CreateGatewayRouteInput,
  ): Effect.Effect<
    CreateGatewayRouteOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createMesh(
    input: CreateMeshInput,
  ): Effect.Effect<
    CreateMeshOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createRoute(
    input: CreateRouteInput,
  ): Effect.Effect<
    CreateRouteOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createVirtualGateway(
    input: CreateVirtualGatewayInput,
  ): Effect.Effect<
    CreateVirtualGatewayOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createVirtualNode(
    input: CreateVirtualNodeInput,
  ): Effect.Effect<
    CreateVirtualNodeOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createVirtualRouter(
    input: CreateVirtualRouterInput,
  ): Effect.Effect<
    CreateVirtualRouterOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  createVirtualService(
    input: CreateVirtualServiceInput,
  ): Effect.Effect<
    CreateVirtualServiceOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteGatewayRoute(
    input: DeleteGatewayRouteInput,
  ): Effect.Effect<
    DeleteGatewayRouteOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteMesh(
    input: DeleteMeshInput,
  ): Effect.Effect<
    DeleteMeshOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteRoute(
    input: DeleteRouteInput,
  ): Effect.Effect<
    DeleteRouteOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteVirtualGateway(
    input: DeleteVirtualGatewayInput,
  ): Effect.Effect<
    DeleteVirtualGatewayOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteVirtualNode(
    input: DeleteVirtualNodeInput,
  ): Effect.Effect<
    DeleteVirtualNodeOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteVirtualRouter(
    input: DeleteVirtualRouterInput,
  ): Effect.Effect<
    DeleteVirtualRouterOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteVirtualService(
    input: DeleteVirtualServiceInput,
  ): Effect.Effect<
    DeleteVirtualServiceOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeGatewayRoute(
    input: DescribeGatewayRouteInput,
  ): Effect.Effect<
    DescribeGatewayRouteOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeMesh(
    input: DescribeMeshInput,
  ): Effect.Effect<
    DescribeMeshOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeRoute(
    input: DescribeRouteInput,
  ): Effect.Effect<
    DescribeRouteOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeVirtualGateway(
    input: DescribeVirtualGatewayInput,
  ): Effect.Effect<
    DescribeVirtualGatewayOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeVirtualNode(
    input: DescribeVirtualNodeInput,
  ): Effect.Effect<
    DescribeVirtualNodeOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeVirtualRouter(
    input: DescribeVirtualRouterInput,
  ): Effect.Effect<
    DescribeVirtualRouterOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  describeVirtualService(
    input: DescribeVirtualServiceInput,
  ): Effect.Effect<
    DescribeVirtualServiceOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listGatewayRoutes(
    input: ListGatewayRoutesInput,
  ): Effect.Effect<
    ListGatewayRoutesOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listMeshes(
    input: ListMeshesInput,
  ): Effect.Effect<
    ListMeshesOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listRoutes(
    input: ListRoutesInput,
  ): Effect.Effect<
    ListRoutesOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listVirtualGateways(
    input: ListVirtualGatewaysInput,
  ): Effect.Effect<
    ListVirtualGatewaysOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listVirtualNodes(
    input: ListVirtualNodesInput,
  ): Effect.Effect<
    ListVirtualNodesOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listVirtualRouters(
    input: ListVirtualRoutersInput,
  ): Effect.Effect<
    ListVirtualRoutersOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  listVirtualServices(
    input: ListVirtualServicesInput,
  ): Effect.Effect<
    ListVirtualServicesOutput,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateGatewayRoute(
    input: UpdateGatewayRouteInput,
  ): Effect.Effect<
    UpdateGatewayRouteOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateMesh(
    input: UpdateMeshInput,
  ): Effect.Effect<
    UpdateMeshOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateRoute(
    input: UpdateRouteInput,
  ): Effect.Effect<
    UpdateRouteOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateVirtualGateway(
    input: UpdateVirtualGatewayInput,
  ): Effect.Effect<
    UpdateVirtualGatewayOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateVirtualNode(
    input: UpdateVirtualNodeInput,
  ): Effect.Effect<
    UpdateVirtualNodeOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateVirtualRouter(
    input: UpdateVirtualRouterInput,
  ): Effect.Effect<
    UpdateVirtualRouterOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateVirtualService(
    input: UpdateVirtualServiceInput,
  ): Effect.Effect<
    UpdateVirtualServiceOutput,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
}

interface _AccessLog {
  file?: FileAccessLog;
}

export type AccessLog = (_AccessLog & { file: FileAccessLog });
export type AccountId = string;

export type Arn = string;

export interface AwsCloudMapInstanceAttribute {
  key: string;
  value: string;
}
export type AwsCloudMapInstanceAttributeKey = string;

export type AwsCloudMapInstanceAttributes = Array<AwsCloudMapInstanceAttribute>;
export type AwsCloudMapInstanceAttributeValue = string;

export type AwsCloudMapName = string;

export interface AwsCloudMapServiceDiscovery {
  namespaceName: string;
  serviceName: string;
  attributes?: Array<AwsCloudMapInstanceAttribute>;
  ipPreference?: string;
}
interface _Backend {
  virtualService?: VirtualServiceBackend;
}

export type Backend = (_Backend & { virtualService: VirtualServiceBackend });
export interface BackendDefaults {
  clientPolicy?: ClientPolicy;
}
export type Backends = Array<Backend>;
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type CertificateAuthorityArns = Array<string>;
export interface ClientPolicy {
  tls?: ClientPolicyTls;
}
export interface ClientPolicyTls {
  enforce?: boolean;
  ports?: Array<number>;
  certificate?: ClientTlsCertificate;
  validation: TlsValidationContext;
}
interface _ClientTlsCertificate {
  file?: ListenerTlsFileCertificate;
  sds?: ListenerTlsSdsCertificate;
}

export type ClientTlsCertificate = (_ClientTlsCertificate & { file: ListenerTlsFileCertificate }) | (_ClientTlsCertificate & { sds: ListenerTlsSdsCertificate });
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface CreateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
}
export interface CreateMeshOutput {
  mesh: MeshData;
}
export interface CreateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateRouteOutput {
  route: RouteData;
}
export interface CreateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface CreateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface CreateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface CreateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  tags?: Array<TagRef>;
  clientToken?: string;
  meshOwner?: string;
}
export interface CreateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export type DefaultGatewayRouteRewrite = string;

export interface DeleteGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
export interface DeleteGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface DeleteMeshInput {
  meshName: string;
}
export interface DeleteMeshOutput {
  mesh: MeshData;
}
export interface DeleteRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  meshOwner?: string;
}
export interface DeleteRouteOutput {
  route: RouteData;
}
export interface DeleteVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface DeleteVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface DeleteVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface DeleteVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export interface DescribeGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
export interface DescribeGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface DescribeMeshInput {
  meshName: string;
  meshOwner?: string;
}
export interface DescribeMeshOutput {
  mesh: MeshData;
}
export interface DescribeRouteInput {
  routeName: string;
  meshName: string;
  meshOwner?: string;
  virtualRouterName: string;
}
export interface DescribeRouteOutput {
  route: RouteData;
}
export interface DescribeVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface DescribeVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface DescribeVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface DescribeVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export type DnsResponseType = string;

export interface DnsServiceDiscovery {
  hostname: string;
  responseType?: string;
  ipPreference?: string;
}
export interface Duration {
  value?: number;
  unit?: string;
}
export type DurationUnit = string;

export type DurationValue = number;

export interface EgressFilter {
  type: string;
}
export type EgressFilterType = string;

export type ExactHostName = string;

export interface FileAccessLog {
  path: string;
  format?: LoggingFormat;
}
export type FilePath = string;

export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export interface GatewayRouteData {
  meshName: string;
  gatewayRouteName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  metadata: ResourceMetadata;
  status: GatewayRouteStatus;
}
export interface GatewayRouteHostnameMatch {
  exact?: string;
  suffix?: string;
}
export interface GatewayRouteHostnameRewrite {
  defaultTargetHostname?: string;
}
export type GatewayRouteList = Array<GatewayRouteRef>;
export type GatewayRoutePriority = number;

export interface GatewayRouteRef {
  meshName: string;
  gatewayRouteName: string;
  virtualGatewayName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface GatewayRouteSpec {
  priority?: number;
  httpRoute?: HttpGatewayRoute;
  http2Route?: HttpGatewayRoute;
  grpcRoute?: GrpcGatewayRoute;
}
export interface GatewayRouteStatus {
  status: string;
}
export type GatewayRouteStatusCode = string;

export interface GatewayRouteTarget {
  virtualService: GatewayRouteVirtualService;
  port?: number;
}
export interface GatewayRouteVirtualService {
  virtualServiceName: string;
}
export interface GrpcGatewayRoute {
  match: GrpcGatewayRouteMatch;
  action: GrpcGatewayRouteAction;
}
export interface GrpcGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: GrpcGatewayRouteRewrite;
}
export interface GrpcGatewayRouteMatch {
  serviceName?: string;
  hostname?: GatewayRouteHostnameMatch;
  metadata?: Array<GrpcGatewayRouteMetadata>;
  port?: number;
}
export interface GrpcGatewayRouteMetadata {
  name: string;
  invert?: boolean;
  match?: GrpcMetadataMatchMethod;
}
export type GrpcGatewayRouteMetadataList = Array<GrpcGatewayRouteMetadata>;
export interface GrpcGatewayRouteRewrite {
  hostname?: GatewayRouteHostnameRewrite;
}
interface _GrpcMetadataMatchMethod {
  exact?: string;
  regex?: string;
  range?: MatchRange;
  prefix?: string;
  suffix?: string;
}

export type GrpcMetadataMatchMethod = (_GrpcMetadataMatchMethod & { exact: string }) | (_GrpcMetadataMatchMethod & { regex: string }) | (_GrpcMetadataMatchMethod & { range: MatchRange }) | (_GrpcMetadataMatchMethod & { prefix: string }) | (_GrpcMetadataMatchMethod & { suffix: string });
export interface GrpcRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: Array<string>;
  tcpRetryEvents?: Array<string>;
  grpcRetryEvents?: Array<string>;
}
export type GrpcRetryPolicyEvent = string;

export type GrpcRetryPolicyEvents = Array<string>;
export interface GrpcRoute {
  action: GrpcRouteAction;
  match: GrpcRouteMatch;
  retryPolicy?: GrpcRetryPolicy;
  timeout?: GrpcTimeout;
}
export interface GrpcRouteAction {
  weightedTargets: Array<WeightedTarget>;
}
export interface GrpcRouteMatch {
  serviceName?: string;
  methodName?: string;
  metadata?: Array<GrpcRouteMetadata>;
  port?: number;
}
export interface GrpcRouteMetadata {
  name: string;
  invert?: boolean;
  match?: GrpcRouteMetadataMatchMethod;
}
export type GrpcRouteMetadataList = Array<GrpcRouteMetadata>;
interface _GrpcRouteMetadataMatchMethod {
  exact?: string;
  regex?: string;
  range?: MatchRange;
  prefix?: string;
  suffix?: string;
}

export type GrpcRouteMetadataMatchMethod = (_GrpcRouteMetadataMatchMethod & { exact: string }) | (_GrpcRouteMetadataMatchMethod & { regex: string }) | (_GrpcRouteMetadataMatchMethod & { range: MatchRange }) | (_GrpcRouteMetadataMatchMethod & { prefix: string }) | (_GrpcRouteMetadataMatchMethod & { suffix: string });
export interface GrpcTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
export type HeaderMatch = string;

interface _HeaderMatchMethod {
  exact?: string;
  regex?: string;
  range?: MatchRange;
  prefix?: string;
  suffix?: string;
}

export type HeaderMatchMethod = (_HeaderMatchMethod & { exact: string }) | (_HeaderMatchMethod & { regex: string }) | (_HeaderMatchMethod & { range: MatchRange }) | (_HeaderMatchMethod & { prefix: string }) | (_HeaderMatchMethod & { suffix: string });
export type HeaderName = string;

export type HealthCheckIntervalMillis = number;

export interface HealthCheckPolicy {
  timeoutMillis: number;
  intervalMillis: number;
  protocol: string;
  port?: number;
  path?: string;
  healthyThreshold: number;
  unhealthyThreshold: number;
}
export type HealthCheckThreshold = number;

export type HealthCheckTimeoutMillis = number;

export type Hostname = string;

export interface HttpGatewayRoute {
  match: HttpGatewayRouteMatch;
  action: HttpGatewayRouteAction;
}
export interface HttpGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: HttpGatewayRouteRewrite;
}
export interface HttpGatewayRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
export type HttpGatewayRouteHeaders = Array<HttpGatewayRouteHeader>;
export interface HttpGatewayRouteMatch {
  prefix?: string;
  path?: HttpPathMatch;
  queryParameters?: Array<HttpQueryParameter>;
  method?: string;
  hostname?: GatewayRouteHostnameMatch;
  headers?: Array<HttpGatewayRouteHeader>;
  port?: number;
}
export interface HttpGatewayRoutePathRewrite {
  exact?: string;
}
export type HttpGatewayRoutePrefix = string;

export interface HttpGatewayRoutePrefixRewrite {
  defaultPrefix?: string;
  value?: string;
}
export interface HttpGatewayRouteRewrite {
  prefix?: HttpGatewayRoutePrefixRewrite;
  path?: HttpGatewayRoutePathRewrite;
  hostname?: GatewayRouteHostnameRewrite;
}
export type HttpMethod = string;

export type HttpPathExact = string;

export interface HttpPathMatch {
  exact?: string;
  regex?: string;
}
export type HttpPathRegex = string;

export interface HttpQueryParameter {
  name: string;
  match?: QueryParameterMatch;
}
export type HttpQueryParameters = Array<HttpQueryParameter>;
export interface HttpRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: Array<string>;
  tcpRetryEvents?: Array<string>;
}
export type HttpRetryPolicyEvent = string;

export type HttpRetryPolicyEvents = Array<string>;
export interface HttpRoute {
  match: HttpRouteMatch;
  action: HttpRouteAction;
  retryPolicy?: HttpRetryPolicy;
  timeout?: HttpTimeout;
}
export interface HttpRouteAction {
  weightedTargets: Array<WeightedTarget>;
}
export interface HttpRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
export type HttpRouteHeaders = Array<HttpRouteHeader>;
export interface HttpRouteMatch {
  prefix?: string;
  path?: HttpPathMatch;
  queryParameters?: Array<HttpQueryParameter>;
  method?: string;
  scheme?: string;
  headers?: Array<HttpRouteHeader>;
  port?: number;
}
export type HttpScheme = string;

export interface HttpTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly message?: string;
}> {}
export type IpPreference = string;

export type JsonFormat = Array<JsonFormatRef>;
export interface JsonFormatRef {
  key: string;
  value: string;
}
export type JsonKey = string;

export type JsonValue = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface Listener {
  portMapping: PortMapping;
  tls?: ListenerTls;
  healthCheck?: HealthCheckPolicy;
  timeout?: ListenerTimeout;
  outlierDetection?: OutlierDetection;
  connectionPool?: VirtualNodeConnectionPool;
}
export type ListenerPort = number;

export type Listeners = Array<Listener>;
interface _ListenerTimeout {
  tcp?: TcpTimeout;
  http?: HttpTimeout;
  http2?: HttpTimeout;
  grpc?: GrpcTimeout;
}

export type ListenerTimeout = (_ListenerTimeout & { tcp: TcpTimeout }) | (_ListenerTimeout & { http: HttpTimeout }) | (_ListenerTimeout & { http2: HttpTimeout }) | (_ListenerTimeout & { grpc: GrpcTimeout });
export interface ListenerTls {
  mode: string;
  certificate: ListenerTlsCertificate;
  validation?: ListenerTlsValidationContext;
}
export interface ListenerTlsAcmCertificate {
  certificateArn: string;
}
interface _ListenerTlsCertificate {
  acm?: ListenerTlsAcmCertificate;
  file?: ListenerTlsFileCertificate;
  sds?: ListenerTlsSdsCertificate;
}

export type ListenerTlsCertificate = (_ListenerTlsCertificate & { acm: ListenerTlsAcmCertificate }) | (_ListenerTlsCertificate & { file: ListenerTlsFileCertificate }) | (_ListenerTlsCertificate & { sds: ListenerTlsSdsCertificate });
export interface ListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}
export type ListenerTlsMode = string;

export interface ListenerTlsSdsCertificate {
  secretName: string;
}
export interface ListenerTlsValidationContext {
  trust: ListenerTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
interface _ListenerTlsValidationContextTrust {
  file?: TlsValidationContextFileTrust;
  sds?: TlsValidationContextSdsTrust;
}

export type ListenerTlsValidationContextTrust = (_ListenerTlsValidationContextTrust & { file: TlsValidationContextFileTrust }) | (_ListenerTlsValidationContextTrust & { sds: TlsValidationContextSdsTrust });
export interface ListGatewayRoutesInput {
  meshName: string;
  virtualGatewayName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListGatewayRoutesLimit = number;

export interface ListGatewayRoutesOutput {
  gatewayRoutes: Array<GatewayRouteRef>;
  nextToken?: string;
}
export interface ListMeshesInput {
  nextToken?: string;
  limit?: number;
}
export type ListMeshesLimit = number;

export interface ListMeshesOutput {
  meshes: Array<MeshRef>;
  nextToken?: string;
}
export interface ListRoutesInput {
  meshName: string;
  virtualRouterName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListRoutesLimit = number;

export interface ListRoutesOutput {
  routes: Array<RouteRef>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  limit?: number;
}
export interface ListTagsForResourceOutput {
  tags: Array<TagRef>;
  nextToken?: string;
}
export interface ListVirtualGatewaysInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListVirtualGatewaysLimit = number;

export interface ListVirtualGatewaysOutput {
  virtualGateways: Array<VirtualGatewayRef>;
  nextToken?: string;
}
export interface ListVirtualNodesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListVirtualNodesLimit = number;

export interface ListVirtualNodesOutput {
  virtualNodes: Array<VirtualNodeRef>;
  nextToken?: string;
}
export interface ListVirtualRoutersInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListVirtualRoutersLimit = number;

export interface ListVirtualRoutersOutput {
  virtualRouters: Array<VirtualRouterRef>;
  nextToken?: string;
}
export interface ListVirtualServicesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
export type ListVirtualServicesLimit = number;

export interface ListVirtualServicesOutput {
  virtualServices: Array<VirtualServiceRef>;
  nextToken?: string;
}
export interface Logging {
  accessLog?: AccessLog;
}
interface _LoggingFormat {
  text?: string;
  json?: Array<JsonFormatRef>;
}

export type LoggingFormat = (_LoggingFormat & { text: string }) | (_LoggingFormat & { json: Array<JsonFormatRef> });
export interface MatchRange {
  start: number;
  end: number;
}
export type MaxConnections = number;

export type MaxPendingRequests = number;

export type MaxRequests = number;

export type MaxRetries = number;

export interface MeshData {
  meshName: string;
  spec: MeshSpec;
  metadata: ResourceMetadata;
  status: MeshStatus;
}
export type MeshList = Array<MeshRef>;
export interface MeshRef {
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface MeshServiceDiscovery {
  ipPreference?: string;
}
export interface MeshSpec {
  egressFilter?: EgressFilter;
  serviceDiscovery?: MeshServiceDiscovery;
}
export interface MeshStatus {
  status?: string;
}
export type MeshStatusCode = string;

export type MethodName = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export interface OutlierDetection {
  maxServerErrors: number;
  interval: Duration;
  baseEjectionDuration: Duration;
  maxEjectionPercent: number;
}
export type OutlierDetectionMaxEjectionPercent = number;

export type OutlierDetectionMaxServerErrors = number;

export type PercentInt = number;

export interface PortMapping {
  port: number;
  protocol: string;
}
export type PortNumber = number;

export type PortProtocol = string;

export type PortSet = Array<number>;
export interface QueryParameterMatch {
  exact?: string;
}
export type QueryParameterName = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export interface ResourceMetadata {
  arn: string;
  version: number;
  uid: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  meshOwner: string;
  resourceOwner: string;
}
export type ResourceName = string;

export interface RouteData {
  meshName: string;
  virtualRouterName: string;
  routeName: string;
  spec: RouteSpec;
  metadata: ResourceMetadata;
  status: RouteStatus;
}
export type RouteList = Array<RouteRef>;
export type RoutePriority = number;

export interface RouteRef {
  meshName: string;
  virtualRouterName: string;
  routeName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface RouteSpec {
  priority?: number;
  httpRoute?: HttpRoute;
  tcpRoute?: TcpRoute;
  http2Route?: HttpRoute;
  grpcRoute?: GrpcRoute;
}
export interface RouteStatus {
  status: string;
}
export type RouteStatusCode = string;

export type SdsSecretName = string;

interface _ServiceDiscovery {
  dns?: DnsServiceDiscovery;
  awsCloudMap?: AwsCloudMapServiceDiscovery;
}

export type ServiceDiscovery = (_ServiceDiscovery & { dns: DnsServiceDiscovery }) | (_ServiceDiscovery & { awsCloudMap: AwsCloudMapServiceDiscovery });
export type ServiceName = string;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SubjectAlternativeName = string;

export type SubjectAlternativeNameList = Array<string>;
export interface SubjectAlternativeNameMatchers {
  exact: Array<string>;
}
export interface SubjectAlternativeNames {
  match: SubjectAlternativeNameMatchers;
}
export type SuffixHostname = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<TagRef>;
export interface TagRef {
  key: string;
  value: string;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<TagRef>;
}
export interface TagResourceOutput {
}
export type TagsLimit = number;

export type TagValue = string;

export type TcpRetryPolicyEvent = string;

export type TcpRetryPolicyEvents = Array<string>;
export interface TcpRoute {
  action: TcpRouteAction;
  timeout?: TcpTimeout;
  match?: TcpRouteMatch;
}
export interface TcpRouteAction {
  weightedTargets: Array<WeightedTarget>;
}
export interface TcpRouteMatch {
  port?: number;
}
export interface TcpTimeout {
  idle?: Duration;
}
export type TextFormat = string;

export interface TlsValidationContext {
  trust: TlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export interface TlsValidationContextAcmTrust {
  certificateAuthorityArns: Array<string>;
}
export interface TlsValidationContextFileTrust {
  certificateChain: string;
}
export interface TlsValidationContextSdsTrust {
  secretName: string;
}
interface _TlsValidationContextTrust {
  acm?: TlsValidationContextAcmTrust;
  file?: TlsValidationContextFileTrust;
  sds?: TlsValidationContextSdsTrust;
}

export type TlsValidationContextTrust = (_TlsValidationContextTrust & { acm: TlsValidationContextAcmTrust }) | (_TlsValidationContextTrust & { file: TlsValidationContextFileTrust }) | (_TlsValidationContextTrust & { sds: TlsValidationContextSdsTrust });
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export interface UpdateGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface UpdateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  clientToken?: string;
}
export interface UpdateMeshOutput {
  mesh: MeshData;
}
export interface UpdateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateRouteOutput {
  route: RouteData;
}
export interface UpdateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface UpdateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface UpdateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface UpdateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
interface _VirtualGatewayAccessLog {
  file?: VirtualGatewayFileAccessLog;
}

export type VirtualGatewayAccessLog = (_VirtualGatewayAccessLog & { file: VirtualGatewayFileAccessLog });
export interface VirtualGatewayBackendDefaults {
  clientPolicy?: VirtualGatewayClientPolicy;
}
export type VirtualGatewayCertificateAuthorityArns = Array<string>;
export interface VirtualGatewayClientPolicy {
  tls?: VirtualGatewayClientPolicyTls;
}
export interface VirtualGatewayClientPolicyTls {
  enforce?: boolean;
  ports?: Array<number>;
  certificate?: VirtualGatewayClientTlsCertificate;
  validation: VirtualGatewayTlsValidationContext;
}
interface _VirtualGatewayClientTlsCertificate {
  file?: VirtualGatewayListenerTlsFileCertificate;
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}

export type VirtualGatewayClientTlsCertificate = (_VirtualGatewayClientTlsCertificate & { file: VirtualGatewayListenerTlsFileCertificate }) | (_VirtualGatewayClientTlsCertificate & { sds: VirtualGatewayListenerTlsSdsCertificate });
interface _VirtualGatewayConnectionPool {
  http?: VirtualGatewayHttpConnectionPool;
  http2?: VirtualGatewayHttp2ConnectionPool;
  grpc?: VirtualGatewayGrpcConnectionPool;
}

export type VirtualGatewayConnectionPool = (_VirtualGatewayConnectionPool & { http: VirtualGatewayHttpConnectionPool }) | (_VirtualGatewayConnectionPool & { http2: VirtualGatewayHttp2ConnectionPool }) | (_VirtualGatewayConnectionPool & { grpc: VirtualGatewayGrpcConnectionPool });
export interface VirtualGatewayData {
  meshName: string;
  virtualGatewayName: string;
  spec: VirtualGatewaySpec;
  metadata: ResourceMetadata;
  status: VirtualGatewayStatus;
}
export interface VirtualGatewayFileAccessLog {
  path: string;
  format?: LoggingFormat;
}
export interface VirtualGatewayGrpcConnectionPool {
  maxRequests: number;
}
export type VirtualGatewayHealthCheckIntervalMillis = number;

export interface VirtualGatewayHealthCheckPolicy {
  timeoutMillis: number;
  intervalMillis: number;
  protocol: string;
  port?: number;
  path?: string;
  healthyThreshold: number;
  unhealthyThreshold: number;
}
export type VirtualGatewayHealthCheckThreshold = number;

export type VirtualGatewayHealthCheckTimeoutMillis = number;

export interface VirtualGatewayHttp2ConnectionPool {
  maxRequests: number;
}
export interface VirtualGatewayHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
export type VirtualGatewayList = Array<VirtualGatewayRef>;
export interface VirtualGatewayListener {
  healthCheck?: VirtualGatewayHealthCheckPolicy;
  portMapping: VirtualGatewayPortMapping;
  tls?: VirtualGatewayListenerTls;
  connectionPool?: VirtualGatewayConnectionPool;
}
export type VirtualGatewayListeners = Array<VirtualGatewayListener>;
export interface VirtualGatewayListenerTls {
  mode: string;
  validation?: VirtualGatewayListenerTlsValidationContext;
  certificate: VirtualGatewayListenerTlsCertificate;
}
export interface VirtualGatewayListenerTlsAcmCertificate {
  certificateArn: string;
}
interface _VirtualGatewayListenerTlsCertificate {
  acm?: VirtualGatewayListenerTlsAcmCertificate;
  file?: VirtualGatewayListenerTlsFileCertificate;
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}

export type VirtualGatewayListenerTlsCertificate = (_VirtualGatewayListenerTlsCertificate & { acm: VirtualGatewayListenerTlsAcmCertificate }) | (_VirtualGatewayListenerTlsCertificate & { file: VirtualGatewayListenerTlsFileCertificate }) | (_VirtualGatewayListenerTlsCertificate & { sds: VirtualGatewayListenerTlsSdsCertificate });
export interface VirtualGatewayListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}
export type VirtualGatewayListenerTlsMode = string;

export interface VirtualGatewayListenerTlsSdsCertificate {
  secretName: string;
}
export interface VirtualGatewayListenerTlsValidationContext {
  trust: VirtualGatewayListenerTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
interface _VirtualGatewayListenerTlsValidationContextTrust {
  file?: VirtualGatewayTlsValidationContextFileTrust;
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}

export type VirtualGatewayListenerTlsValidationContextTrust = (_VirtualGatewayListenerTlsValidationContextTrust & { file: VirtualGatewayTlsValidationContextFileTrust }) | (_VirtualGatewayListenerTlsValidationContextTrust & { sds: VirtualGatewayTlsValidationContextSdsTrust });
export interface VirtualGatewayLogging {
  accessLog?: VirtualGatewayAccessLog;
}
export interface VirtualGatewayPortMapping {
  port: number;
  protocol: string;
}
export type VirtualGatewayPortProtocol = string;

export interface VirtualGatewayRef {
  meshName: string;
  virtualGatewayName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export type VirtualGatewaySdsSecretName = string;

export interface VirtualGatewaySpec {
  backendDefaults?: VirtualGatewayBackendDefaults;
  listeners: Array<VirtualGatewayListener>;
  logging?: VirtualGatewayLogging;
}
export interface VirtualGatewayStatus {
  status: string;
}
export type VirtualGatewayStatusCode = string;

export interface VirtualGatewayTlsValidationContext {
  trust: VirtualGatewayTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export interface VirtualGatewayTlsValidationContextAcmTrust {
  certificateAuthorityArns: Array<string>;
}
export interface VirtualGatewayTlsValidationContextFileTrust {
  certificateChain: string;
}
export interface VirtualGatewayTlsValidationContextSdsTrust {
  secretName: string;
}
interface _VirtualGatewayTlsValidationContextTrust {
  acm?: VirtualGatewayTlsValidationContextAcmTrust;
  file?: VirtualGatewayTlsValidationContextFileTrust;
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}

export type VirtualGatewayTlsValidationContextTrust = (_VirtualGatewayTlsValidationContextTrust & { acm: VirtualGatewayTlsValidationContextAcmTrust }) | (_VirtualGatewayTlsValidationContextTrust & { file: VirtualGatewayTlsValidationContextFileTrust }) | (_VirtualGatewayTlsValidationContextTrust & { sds: VirtualGatewayTlsValidationContextSdsTrust });
interface _VirtualNodeConnectionPool {
  tcp?: VirtualNodeTcpConnectionPool;
  http?: VirtualNodeHttpConnectionPool;
  http2?: VirtualNodeHttp2ConnectionPool;
  grpc?: VirtualNodeGrpcConnectionPool;
}

export type VirtualNodeConnectionPool = (_VirtualNodeConnectionPool & { tcp: VirtualNodeTcpConnectionPool }) | (_VirtualNodeConnectionPool & { http: VirtualNodeHttpConnectionPool }) | (_VirtualNodeConnectionPool & { http2: VirtualNodeHttp2ConnectionPool }) | (_VirtualNodeConnectionPool & { grpc: VirtualNodeGrpcConnectionPool });
export interface VirtualNodeData {
  meshName: string;
  virtualNodeName: string;
  spec: VirtualNodeSpec;
  metadata: ResourceMetadata;
  status: VirtualNodeStatus;
}
export interface VirtualNodeGrpcConnectionPool {
  maxRequests: number;
}
export interface VirtualNodeHttp2ConnectionPool {
  maxRequests: number;
}
export interface VirtualNodeHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
export type VirtualNodeList = Array<VirtualNodeRef>;
export interface VirtualNodeRef {
  meshName: string;
  virtualNodeName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface VirtualNodeServiceProvider {
  virtualNodeName: string;
}
export interface VirtualNodeSpec {
  serviceDiscovery?: ServiceDiscovery;
  listeners?: Array<Listener>;
  backends?: Array<Backend>;
  backendDefaults?: BackendDefaults;
  logging?: Logging;
}
export interface VirtualNodeStatus {
  status: string;
}
export type VirtualNodeStatusCode = string;

export interface VirtualNodeTcpConnectionPool {
  maxConnections: number;
}
export interface VirtualRouterData {
  meshName: string;
  virtualRouterName: string;
  spec: VirtualRouterSpec;
  metadata: ResourceMetadata;
  status: VirtualRouterStatus;
}
export type VirtualRouterList = Array<VirtualRouterRef>;
export interface VirtualRouterListener {
  portMapping: PortMapping;
}
export type VirtualRouterListeners = Array<VirtualRouterListener>;
export interface VirtualRouterRef {
  meshName: string;
  virtualRouterName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface VirtualRouterServiceProvider {
  virtualRouterName: string;
}
export interface VirtualRouterSpec {
  listeners?: Array<VirtualRouterListener>;
}
export interface VirtualRouterStatus {
  status: string;
}
export type VirtualRouterStatusCode = string;

export interface VirtualServiceBackend {
  virtualServiceName: string;
  clientPolicy?: ClientPolicy;
}
export interface VirtualServiceData {
  meshName: string;
  virtualServiceName: string;
  spec: VirtualServiceSpec;
  metadata: ResourceMetadata;
  status: VirtualServiceStatus;
}
export type VirtualServiceList = Array<VirtualServiceRef>;
interface _VirtualServiceProvider {
  virtualNode?: VirtualNodeServiceProvider;
  virtualRouter?: VirtualRouterServiceProvider;
}

export type VirtualServiceProvider = (_VirtualServiceProvider & { virtualNode: VirtualNodeServiceProvider }) | (_VirtualServiceProvider & { virtualRouter: VirtualRouterServiceProvider });
export interface VirtualServiceRef {
  meshName: string;
  virtualServiceName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface VirtualServiceSpec {
  provider?: VirtualServiceProvider;
}
export interface VirtualServiceStatus {
  status: string;
}
export type VirtualServiceStatusCode = string;

export interface WeightedTarget {
  virtualNode: string;
  weight: number;
  port?: number;
}
export type WeightedTargets = Array<WeightedTarget>;
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateGatewayRoute {
  export type Input = CreateGatewayRouteInput;
  export type Output = CreateGatewayRouteOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMesh {
  export type Input = CreateMeshInput;
  export type Output = CreateMeshOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateRoute {
  export type Input = CreateRouteInput;
  export type Output = CreateRouteOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVirtualGateway {
  export type Input = CreateVirtualGatewayInput;
  export type Output = CreateVirtualGatewayOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVirtualNode {
  export type Input = CreateVirtualNodeInput;
  export type Output = CreateVirtualNodeOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVirtualRouter {
  export type Input = CreateVirtualRouterInput;
  export type Output = CreateVirtualRouterOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVirtualService {
  export type Input = CreateVirtualServiceInput;
  export type Output = CreateVirtualServiceOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteGatewayRoute {
  export type Input = DeleteGatewayRouteInput;
  export type Output = DeleteGatewayRouteOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMesh {
  export type Input = DeleteMeshInput;
  export type Output = DeleteMeshOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRoute {
  export type Input = DeleteRouteInput;
  export type Output = DeleteRouteOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVirtualGateway {
  export type Input = DeleteVirtualGatewayInput;
  export type Output = DeleteVirtualGatewayOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVirtualNode {
  export type Input = DeleteVirtualNodeInput;
  export type Output = DeleteVirtualNodeOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVirtualRouter {
  export type Input = DeleteVirtualRouterInput;
  export type Output = DeleteVirtualRouterOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVirtualService {
  export type Input = DeleteVirtualServiceInput;
  export type Output = DeleteVirtualServiceOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ResourceInUseException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeGatewayRoute {
  export type Input = DescribeGatewayRouteInput;
  export type Output = DescribeGatewayRouteOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeMesh {
  export type Input = DescribeMeshInput;
  export type Output = DescribeMeshOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeRoute {
  export type Input = DescribeRouteInput;
  export type Output = DescribeRouteOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeVirtualGateway {
  export type Input = DescribeVirtualGatewayInput;
  export type Output = DescribeVirtualGatewayOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeVirtualNode {
  export type Input = DescribeVirtualNodeInput;
  export type Output = DescribeVirtualNodeOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeVirtualRouter {
  export type Input = DescribeVirtualRouterInput;
  export type Output = DescribeVirtualRouterOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeVirtualService {
  export type Input = DescribeVirtualServiceInput;
  export type Output = DescribeVirtualServiceOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListGatewayRoutes {
  export type Input = ListGatewayRoutesInput;
  export type Output = ListGatewayRoutesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListMeshes {
  export type Input = ListMeshesInput;
  export type Output = ListMeshesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRoutes {
  export type Input = ListRoutesInput;
  export type Output = ListRoutesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVirtualGateways {
  export type Input = ListVirtualGatewaysInput;
  export type Output = ListVirtualGatewaysOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVirtualNodes {
  export type Input = ListVirtualNodesInput;
  export type Output = ListVirtualNodesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVirtualRouters {
  export type Input = ListVirtualRoutersInput;
  export type Output = ListVirtualRoutersOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVirtualServices {
  export type Input = ListVirtualServicesInput;
  export type Output = ListVirtualServicesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateGatewayRoute {
  export type Input = UpdateGatewayRouteInput;
  export type Output = UpdateGatewayRouteOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateMesh {
  export type Input = UpdateMeshInput;
  export type Output = UpdateMeshOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateRoute {
  export type Input = UpdateRouteInput;
  export type Output = UpdateRouteOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVirtualGateway {
  export type Input = UpdateVirtualGatewayInput;
  export type Output = UpdateVirtualGatewayOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVirtualNode {
  export type Input = UpdateVirtualNodeInput;
  export type Output = UpdateVirtualNodeOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVirtualRouter {
  export type Input = UpdateVirtualRouterInput;
  export type Output = UpdateVirtualRouterOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVirtualService {
  export type Input = UpdateVirtualServiceInput;
  export type Output = UpdateVirtualServiceOutput;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export type AppMeshErrors = BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | LimitExceededException | NotFoundException | ResourceInUseException | ServiceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError;

