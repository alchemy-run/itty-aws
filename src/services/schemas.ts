import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOfGetDiscoveredSchemaVersionItemInput = S.Array(S.String);
export const __listOf__string = S.Array(S.String);
export const Tags = S.Record({key: S.String, value: S.String});
export class CreateRegistryRequest extends S.Class<CreateRegistryRequest>("CreateRegistryRequest")({Description: S.optional(S.String), RegistryName: S.String, Tags: S.optional(Tags)}) {}
export class CreateSchemaRequest extends S.Class<CreateSchemaRequest>("CreateSchemaRequest")({Content: S.String, Description: S.optional(S.String), RegistryName: S.String, SchemaName: S.String, Tags: S.optional(Tags), Type: S.String}) {}
export class DeleteDiscovererRequest extends S.Class<DeleteDiscovererRequest>("DeleteDiscovererRequest")({DiscovererId: S.String}) {}
export class DeleteRegistryRequest extends S.Class<DeleteRegistryRequest>("DeleteRegistryRequest")({RegistryName: S.String}) {}
export class DeleteResourcePolicyRequest extends S.Class<DeleteResourcePolicyRequest>("DeleteResourcePolicyRequest")({RegistryName: S.optional(S.String)}) {}
export class DeleteSchemaRequest extends S.Class<DeleteSchemaRequest>("DeleteSchemaRequest")({RegistryName: S.String, SchemaName: S.String}) {}
export class DeleteSchemaVersionRequest extends S.Class<DeleteSchemaVersionRequest>("DeleteSchemaVersionRequest")({RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.String}) {}
export class DescribeCodeBindingRequest extends S.Class<DescribeCodeBindingRequest>("DescribeCodeBindingRequest")({Language: S.String, RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.optional(S.String)}) {}
export class DescribeDiscovererRequest extends S.Class<DescribeDiscovererRequest>("DescribeDiscovererRequest")({DiscovererId: S.String}) {}
export class DescribeRegistryRequest extends S.Class<DescribeRegistryRequest>("DescribeRegistryRequest")({RegistryName: S.String}) {}
export class DescribeSchemaRequest extends S.Class<DescribeSchemaRequest>("DescribeSchemaRequest")({RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.optional(S.String)}) {}
export class ExportSchemaRequest extends S.Class<ExportSchemaRequest>("ExportSchemaRequest")({RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.optional(S.String), Type: S.String}) {}
export class GetCodeBindingSourceRequest extends S.Class<GetCodeBindingSourceRequest>("GetCodeBindingSourceRequest")({Language: S.String, RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.optional(S.String)}) {}
export class GetDiscoveredSchemaRequest extends S.Class<GetDiscoveredSchemaRequest>("GetDiscoveredSchemaRequest")({Events: __listOfGetDiscoveredSchemaVersionItemInput, Type: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({RegistryName: S.optional(S.String)}) {}
export class ListDiscoverersRequest extends S.Class<ListDiscoverersRequest>("ListDiscoverersRequest")({DiscovererIdPrefix: S.optional(S.String), Limit: S.optional(S.Number), NextToken: S.optional(S.String), SourceArnPrefix: S.optional(S.String)}) {}
export class ListRegistriesRequest extends S.Class<ListRegistriesRequest>("ListRegistriesRequest")({Limit: S.optional(S.Number), NextToken: S.optional(S.String), RegistryNamePrefix: S.optional(S.String), Scope: S.optional(S.String)}) {}
export class ListSchemasRequest extends S.Class<ListSchemasRequest>("ListSchemasRequest")({Limit: S.optional(S.Number), NextToken: S.optional(S.String), RegistryName: S.String, SchemaNamePrefix: S.optional(S.String)}) {}
export class ListSchemaVersionsRequest extends S.Class<ListSchemaVersionsRequest>("ListSchemaVersionsRequest")({Limit: S.optional(S.Number), NextToken: S.optional(S.String), RegistryName: S.String, SchemaName: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class PutCodeBindingRequest extends S.Class<PutCodeBindingRequest>("PutCodeBindingRequest")({Language: S.String, RegistryName: S.String, SchemaName: S.String, SchemaVersion: S.optional(S.String)}) {}
export class PutResourcePolicyRequest extends S.Class<PutResourcePolicyRequest>("PutResourcePolicyRequest")({Policy: S.String, RegistryName: S.optional(S.String), RevisionId: S.optional(S.String)}) {}
export class SearchSchemasRequest extends S.Class<SearchSchemasRequest>("SearchSchemasRequest")({Keywords: S.String, Limit: S.optional(S.Number), NextToken: S.optional(S.String), RegistryName: S.String}) {}
export class StartDiscovererRequest extends S.Class<StartDiscovererRequest>("StartDiscovererRequest")({DiscovererId: S.String}) {}
export class StopDiscovererRequest extends S.Class<StopDiscovererRequest>("StopDiscovererRequest")({DiscovererId: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: Tags}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export class UpdateDiscovererRequest extends S.Class<UpdateDiscovererRequest>("UpdateDiscovererRequest")({Description: S.optional(S.String), DiscovererId: S.String, CrossAccount: S.optional(S.Boolean)}) {}
export class UpdateRegistryRequest extends S.Class<UpdateRegistryRequest>("UpdateRegistryRequest")({Description: S.optional(S.String), RegistryName: S.String}) {}
export class UpdateSchemaRequest extends S.Class<UpdateSchemaRequest>("UpdateSchemaRequest")({ClientTokenId: S.optional(S.String), Content: S.optional(S.String), Description: S.optional(S.String), RegistryName: S.String, SchemaName: S.String, Type: S.optional(S.String)}) {}
export class CreateDiscovererRequest extends S.Class<CreateDiscovererRequest>("CreateDiscovererRequest")({Description: S.optional(S.String), SourceArn: S.String, CrossAccount: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class CreateRegistryResponse extends S.Class<CreateRegistryResponse>("CreateRegistryResponse")({Description: S.optional(S.String), RegistryArn: S.optional(S.String), RegistryName: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class CreateSchemaResponse extends S.Class<CreateSchemaResponse>("CreateSchemaResponse")({Description: S.optional(S.String), LastModified: S.optional(S.Date), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersion: S.optional(S.String), Tags: S.optional(Tags), Type: S.optional(S.String), VersionCreatedDate: S.optional(S.Date)}) {}
export class DescribeCodeBindingResponse extends S.Class<DescribeCodeBindingResponse>("DescribeCodeBindingResponse")({CreationDate: S.optional(S.Date), LastModified: S.optional(S.Date), SchemaVersion: S.optional(S.String), Status: S.optional(S.String)}) {}
export class DescribeDiscovererResponse extends S.Class<DescribeDiscovererResponse>("DescribeDiscovererResponse")({Description: S.optional(S.String), DiscovererArn: S.optional(S.String), DiscovererId: S.optional(S.String), SourceArn: S.optional(S.String), State: S.optional(S.String), CrossAccount: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class DescribeRegistryResponse extends S.Class<DescribeRegistryResponse>("DescribeRegistryResponse")({Description: S.optional(S.String), RegistryArn: S.optional(S.String), RegistryName: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class DescribeSchemaResponse extends S.Class<DescribeSchemaResponse>("DescribeSchemaResponse")({Content: S.optional(S.String), Description: S.optional(S.String), LastModified: S.optional(S.Date), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersion: S.optional(S.String), Tags: S.optional(Tags), Type: S.optional(S.String), VersionCreatedDate: S.optional(S.Date)}) {}
export class ExportSchemaResponse extends S.Class<ExportSchemaResponse>("ExportSchemaResponse")({Content: S.optional(S.String), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersion: S.optional(S.String), Type: S.optional(S.String)}) {}
export class GetCodeBindingSourceResponse extends S.Class<GetCodeBindingSourceResponse>("GetCodeBindingSourceResponse")({Body: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class GetDiscoveredSchemaResponse extends S.Class<GetDiscoveredSchemaResponse>("GetDiscoveredSchemaResponse")({Content: S.optional(S.String)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({Policy: S.optional(S.String), RevisionId: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(Tags)}) {}
export class PutCodeBindingResponse extends S.Class<PutCodeBindingResponse>("PutCodeBindingResponse")({CreationDate: S.optional(S.Date), LastModified: S.optional(S.Date), SchemaVersion: S.optional(S.String), Status: S.optional(S.String)}) {}
export class PutResourcePolicyResponse extends S.Class<PutResourcePolicyResponse>("PutResourcePolicyResponse")({Policy: S.optional(S.String), RevisionId: S.optional(S.String)}) {}
export class StartDiscovererResponse extends S.Class<StartDiscovererResponse>("StartDiscovererResponse")({DiscovererId: S.optional(S.String), State: S.optional(S.String)}) {}
export class StopDiscovererResponse extends S.Class<StopDiscovererResponse>("StopDiscovererResponse")({DiscovererId: S.optional(S.String), State: S.optional(S.String)}) {}
export class UpdateDiscovererResponse extends S.Class<UpdateDiscovererResponse>("UpdateDiscovererResponse")({Description: S.optional(S.String), DiscovererArn: S.optional(S.String), DiscovererId: S.optional(S.String), SourceArn: S.optional(S.String), State: S.optional(S.String), CrossAccount: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class UpdateRegistryResponse extends S.Class<UpdateRegistryResponse>("UpdateRegistryResponse")({Description: S.optional(S.String), RegistryArn: S.optional(S.String), RegistryName: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class UpdateSchemaResponse extends S.Class<UpdateSchemaResponse>("UpdateSchemaResponse")({Description: S.optional(S.String), LastModified: S.optional(S.Date), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersion: S.optional(S.String), Tags: S.optional(Tags), Type: S.optional(S.String), VersionCreatedDate: S.optional(S.Date)}) {}
export class DiscovererSummary extends S.Class<DiscovererSummary>("DiscovererSummary")({DiscovererArn: S.optional(S.String), DiscovererId: S.optional(S.String), SourceArn: S.optional(S.String), State: S.optional(S.String), CrossAccount: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export const __listOfDiscovererSummary = S.Array(DiscovererSummary);
export class RegistrySummary extends S.Class<RegistrySummary>("RegistrySummary")({RegistryArn: S.optional(S.String), RegistryName: S.optional(S.String), Tags: S.optional(Tags)}) {}
export const __listOfRegistrySummary = S.Array(RegistrySummary);
export class SchemaSummary extends S.Class<SchemaSummary>("SchemaSummary")({LastModified: S.optional(S.Date), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), Tags: S.optional(Tags), VersionCount: S.optional(S.Number)}) {}
export const __listOfSchemaSummary = S.Array(SchemaSummary);
export class SchemaVersionSummary extends S.Class<SchemaVersionSummary>("SchemaVersionSummary")({SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersion: S.optional(S.String), Type: S.optional(S.String)}) {}
export const __listOfSchemaVersionSummary = S.Array(SchemaVersionSummary);
export class CreateDiscovererResponse extends S.Class<CreateDiscovererResponse>("CreateDiscovererResponse")({Description: S.optional(S.String), DiscovererArn: S.optional(S.String), DiscovererId: S.optional(S.String), SourceArn: S.optional(S.String), State: S.optional(S.String), CrossAccount: S.optional(S.Boolean), Tags: S.optional(Tags)}) {}
export class ListDiscoverersResponse extends S.Class<ListDiscoverersResponse>("ListDiscoverersResponse")({Discoverers: S.optional(__listOfDiscovererSummary), NextToken: S.optional(S.String)}) {}
export class ListRegistriesResponse extends S.Class<ListRegistriesResponse>("ListRegistriesResponse")({NextToken: S.optional(S.String), Registries: S.optional(__listOfRegistrySummary)}) {}
export class ListSchemasResponse extends S.Class<ListSchemasResponse>("ListSchemasResponse")({NextToken: S.optional(S.String), Schemas: S.optional(__listOfSchemaSummary)}) {}
export class ListSchemaVersionsResponse extends S.Class<ListSchemaVersionsResponse>("ListSchemaVersionsResponse")({NextToken: S.optional(S.String), SchemaVersions: S.optional(__listOfSchemaVersionSummary)}) {}
export class SearchSchemaVersionSummary extends S.Class<SearchSchemaVersionSummary>("SearchSchemaVersionSummary")({CreatedDate: S.optional(S.Date), SchemaVersion: S.optional(S.String), Type: S.optional(S.String)}) {}
export const __listOfSearchSchemaVersionSummary = S.Array(SearchSchemaVersionSummary);
export class SearchSchemaSummary extends S.Class<SearchSchemaSummary>("SearchSchemaSummary")({RegistryName: S.optional(S.String), SchemaArn: S.optional(S.String), SchemaName: S.optional(S.String), SchemaVersions: S.optional(__listOfSearchSchemaVersionSummary)}) {}
export const __listOfSearchSchemaSummary = S.Array(SearchSchemaSummary);
export class SearchSchemasResponse extends S.Class<SearchSchemasResponse>("SearchSchemasResponse")({NextToken: S.optional(S.String), Schemas: S.optional(__listOfSearchSchemaSummary)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class GoneException extends S.TaggedError<GoneException>()("GoneException", {Code: S.String, Message: S.String}) {};
export class PreconditionFailedException extends S.TaggedError<PreconditionFailedException>()("PreconditionFailedException", {Code: S.String, Message: S.String}) {};

//# Operations
/**
 * Add tags to a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a schema definition.
 * 
 * 
 * Inactive schemas will be deleted after two years.
 */export const createSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.CreateSchema" }, CreateSchemaRequest, CreateSchemaResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Registry.
 */export const deleteRegistry = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DeleteRegistry" }, DeleteRegistryRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete the resource-based policy attached to the specified registry.
 */export const deleteResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/policy", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DeleteResourcePolicy" }, DeleteResourcePolicyRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a schema definition.
 */export const deleteSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DeleteSchema" }, DeleteSchemaRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete the schema version definition
 */export const deleteSchemaVersion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DeleteSchemaVersion" }, DeleteSchemaVersionRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the discoverer.
 */export const describeDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers/id/{DiscovererId}", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DescribeDiscoverer" }, DescribeDiscovererRequest, DescribeDiscovererResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the registry.
 */export const describeRegistry = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DescribeRegistry" }, DescribeRegistryRequest, DescribeRegistryResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve the schema definition.
 */export const describeSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DescribeSchema" }, DescribeSchemaRequest, DescribeSchemaResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * 
 */export const exportSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ExportSchema" }, ExportSchemaRequest, ExportSchemaResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the code binding source URI.
 */export const getCodeBindingSource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.GetCodeBindingSource" }, GetCodeBindingSourceRequest, GetCodeBindingSourceResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the discovered schema that was generated based on sampled events.
 */export const getDiscoveredSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discover", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.GetDiscoveredSchema" }, GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource-based policy attached to a given registry.
 */export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/policy", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get tags for resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the discoverer
 */export const startDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers/id/{DiscovererId}/start", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.StartDiscoverer" }, StartDiscovererRequest, StartDiscovererResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the discoverer
 */export const stopDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers/id/{DiscovererId}/stop", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.StopDiscoverer" }, StopDiscovererRequest, StopDiscovererResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the discoverer
 */export const updateDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers/id/{DiscovererId}", method: "PUT", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.UpdateDiscoverer" }, UpdateDiscovererRequest, UpdateDiscovererResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a registry.
 */export const updateRegistry = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}", method: "PUT", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.UpdateRegistry" }, UpdateRegistryRequest, UpdateRegistryResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the schema definition
 * 
 * 
 * Inactive schemas will be deleted after two years.
 */export const updateSchema = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", method: "PUT", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.UpdateSchema" }, UpdateSchemaRequest, UpdateSchemaResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a discoverer.
 */export const createDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.CreateDiscoverer" }, CreateDiscovererRequest, CreateDiscovererResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a registry.
 */export const createRegistry = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.CreateRegistry" }, CreateRegistryRequest, CreateRegistryResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a discoverer.
 */export const deleteDiscoverer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers/id/{DiscovererId}", method: "DELETE", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DeleteDiscoverer" }, DeleteDiscovererRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe the code binding URI.
 */export const describeCodeBinding = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.DescribeCodeBinding" }, DescribeCodeBindingRequest, DescribeCodeBindingResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the discoverers.
 */export const listDiscoverers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/discoverers", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ListDiscoverers" }, ListDiscoverersRequest, ListDiscoverersResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the registries.
 */export const listRegistries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ListRegistries" }, ListRegistriesRequest, ListRegistriesResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the schemas.
 */export const listSchemas = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ListSchemas" }, ListSchemasRequest, ListSchemasResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a list of the schema versions and related information.
 */export const listSchemaVersions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.ListSchemaVersions" }, ListSchemaVersionsRequest, ListSchemaVersionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Put code binding URI
 */export const putCodeBinding = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}", method: "POST", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.PutCodeBinding" }, PutCodeBindingRequest, PutCodeBindingResponse, [BadRequestException, ForbiddenException, GoneException, InternalServerErrorException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The name of the policy.
 */export const putResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/policy", method: "PUT", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.PutResourcePolicy" }, PutResourcePolicyRequest, PutResourcePolicyResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException, PreconditionFailedException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Search the schemas
 */export const searchSchemas = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/v1/registries/name/{RegistryName}/schemas/search", method: "GET", sdkId: "schemas", sigV4ServiceName: "schemas", name: "schemas.SearchSchemas" }, SearchSchemasRequest, SearchSchemasResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, ServiceUnavailableException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
