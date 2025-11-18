import type { Effect, Data as EffectData } from "effect";
import type {
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
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class ControlCatalog extends AWSServiceClient {
  listControlMappings(
    input: ListControlMappingsRequest,
  ): Effect.Effect<
    ListControlMappingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getControl(
    input: GetControlRequest,
  ): Effect.Effect<
    GetControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCommonControls(
    input: ListCommonControlsRequest,
  ): Effect.Effect<
    ListCommonControlsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listControls(
    input: ListControlsRequest,
  ): Effect.Effect<
    ListControlsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    ListDomainsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listObjectives(
    input: ListObjectivesRequest,
  ): Effect.Effect<
    ListObjectivesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Controlcatalog extends ControlCatalog {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AssociatedDomainSummary {
  Arn?: string;
  Name?: string;
}
export interface AssociatedObjectiveSummary {
  Arn?: string;
  Name?: string;
}
export type CommonControlArn = string;

export type CommonControlArnFilterList = Array<string>;
export interface CommonControlFilter {
  Objectives?: Array<ObjectiveResourceFilter>;
}
export interface CommonControlMappingDetails {
  CommonControlArn: string;
}
export interface CommonControlSummary {
  Arn: string;
  Name: string;
  Description: string;
  Domain: AssociatedDomainSummary;
  Objective: AssociatedObjectiveSummary;
  CreateTime: Date | string;
  LastUpdateTime: Date | string;
}
export type CommonControlSummaryList = Array<CommonControlSummary>;
export type ControlAlias = string;

export type ControlAliases = Array<string>;
export type ControlArn = string;

export type ControlArnFilterList = Array<string>;
export type ControlBehavior = "PREVENTIVE" | "PROACTIVE" | "DETECTIVE";
export interface ControlFilter {
  Implementations?: ImplementationFilter;
}
export interface ControlMapping {
  ControlArn: string;
  MappingType: MappingType;
  Mapping: Mapping;
}
export interface ControlMappingFilter {
  ControlArns?: Array<string>;
  CommonControlArns?: Array<string>;
  MappingTypes?: Array<MappingType>;
}
export type ControlMappings = Array<ControlMapping>;
export interface ControlParameter {
  Name: string;
}
export type ControlParameters = Array<ControlParameter>;
export type Controls = Array<ControlSummary>;
export type ControlScope = "GLOBAL" | "REGIONAL";
export type ControlSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export interface ControlSummary {
  Arn: string;
  Aliases?: Array<string>;
  Name: string;
  Description: string;
  Behavior?: ControlBehavior;
  Severity?: ControlSeverity;
  Implementation?: ImplementationSummary;
  CreateTime?: Date | string;
  GovernedResources?: Array<string>;
}
export type DeployableRegions = Array<string>;
export type DomainArn = string;

export interface DomainResourceFilter {
  Arn?: string;
}
export type DomainResourceFilterList = Array<DomainResourceFilter>;
export interface DomainSummary {
  Arn: string;
  Name: string;
  Description: string;
  CreateTime: Date | string;
  LastUpdateTime: Date | string;
}
export type DomainSummaryList = Array<DomainSummary>;
export type FrameworkItem = string;

export interface FrameworkMappingDetails {
  Name: string;
  Item: string;
}
export type FrameworkName = string;

export interface GetControlRequest {
  ControlArn: string;
}
export interface GetControlResponse {
  Arn: string;
  Aliases?: Array<string>;
  Name: string;
  Description: string;
  Behavior: ControlBehavior;
  Severity?: ControlSeverity;
  RegionConfiguration: RegionConfiguration;
  Implementation?: ImplementationDetails;
  Parameters?: Array<ControlParameter>;
  CreateTime?: Date | string;
  GovernedResources?: Array<string>;
}
export type GovernedResource = string;

export type GovernedResources = Array<string>;
export interface ImplementationDetails {
  Type: string;
  Identifier?: string;
}
export interface ImplementationFilter {
  Types?: Array<string>;
  Identifiers?: Array<string>;
}
export type ImplementationIdentifier = string;

export type ImplementationIdentifierFilterList = Array<string>;
export interface ImplementationSummary {
  Type: string;
  Identifier?: string;
}
export type ImplementationType = string;

export type ImplementationTypeFilterList = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListCommonControlsRequest {
  MaxResults?: number;
  NextToken?: string;
  CommonControlFilter?: CommonControlFilter;
}
export interface ListCommonControlsResponse {
  CommonControls: Array<CommonControlSummary>;
  NextToken?: string;
}
export interface ListControlMappingsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: ControlMappingFilter;
}
export interface ListControlMappingsResponse {
  ControlMappings: Array<ControlMapping>;
  NextToken?: string;
}
export interface ListControlsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: ControlFilter;
}
export interface ListControlsResponse {
  Controls: Array<ControlSummary>;
  NextToken?: string;
}
export interface ListDomainsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDomainsResponse {
  Domains: Array<DomainSummary>;
  NextToken?: string;
}
export interface ListObjectivesRequest {
  MaxResults?: number;
  NextToken?: string;
  ObjectiveFilter?: ObjectiveFilter;
}
export interface ListObjectivesResponse {
  Objectives: Array<ObjectiveSummary>;
  NextToken?: string;
}
interface _Mapping {
  Framework?: FrameworkMappingDetails;
  CommonControl?: CommonControlMappingDetails;
}

export type Mapping =
  | (_Mapping & { Framework: FrameworkMappingDetails })
  | (_Mapping & { CommonControl: CommonControlMappingDetails });
export type MappingType = "FRAMEWORK" | "COMMON_CONTROL";
export type MappingTypeFilterList = Array<MappingType>;
export type MaxListCommonControlsResults = number;

export type MaxListControlMappingsResults = number;

export type MaxListControlsResults = number;

export type MaxListDomainsResults = number;

export type MaxListObjectivesResults = number;

export type ObjectiveArn = string;

export interface ObjectiveFilter {
  Domains?: Array<DomainResourceFilter>;
}
export interface ObjectiveResourceFilter {
  Arn?: string;
}
export type ObjectiveResourceFilterList = Array<ObjectiveResourceFilter>;
export interface ObjectiveSummary {
  Arn: string;
  Name: string;
  Description: string;
  Domain: AssociatedDomainSummary;
  CreateTime: Date | string;
  LastUpdateTime: Date | string;
}
export type ObjectiveSummaryList = Array<ObjectiveSummary>;
export type PaginationToken = string;

export type RegionCode = string;

export interface RegionConfiguration {
  Scope: ControlScope;
  DeployableRegions?: Array<string>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace ListControlMappings {
  export type Input = ListControlMappingsRequest;
  export type Output = ListControlMappingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetControl {
  export type Input = GetControlRequest;
  export type Output = GetControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCommonControls {
  export type Input = ListCommonControlsRequest;
  export type Output = ListCommonControlsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControls {
  export type Input = ListControlsRequest;
  export type Output = ListControlsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = ListDomainsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectives {
  export type Input = ListObjectivesRequest;
  export type Output = ListObjectivesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type ControlCatalogErrors =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
