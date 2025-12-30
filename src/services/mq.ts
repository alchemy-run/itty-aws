import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOf__string = S.Array(S.String);
export const __mapOf__string = S.Record({key: S.String, value: S.String});
export class CreateConfigurationRequest extends S.Class<CreateConfigurationRequest>("CreateConfigurationRequest")({AuthenticationStrategy: S.optional(S.String), EngineType: S.String, EngineVersion: S.optional(S.String), Name: S.String, Tags: S.optional(__mapOf__string)}) {}
export class CreateTagsRequest extends S.Class<CreateTagsRequest>("CreateTagsRequest")({ResourceArn: S.String, Tags: S.optional(__mapOf__string)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({BrokerId: S.String, ConsoleAccess: S.optional(S.Boolean), Groups: S.optional(__listOf__string), Password: S.String, Username: S.String, ReplicationUser: S.optional(S.Boolean)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({}) {}
export class DeleteBrokerRequest extends S.Class<DeleteBrokerRequest>("DeleteBrokerRequest")({BrokerId: S.String}) {}
export class DeleteConfigurationRequest extends S.Class<DeleteConfigurationRequest>("DeleteConfigurationRequest")({ConfigurationId: S.String}) {}
export class DeleteTagsRequest extends S.Class<DeleteTagsRequest>("DeleteTagsRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({BrokerId: S.String, Username: S.String}) {}
export class DeleteUserResponse extends S.Class<DeleteUserResponse>("DeleteUserResponse")({}) {}
export class DescribeBrokerRequest extends S.Class<DescribeBrokerRequest>("DescribeBrokerRequest")({BrokerId: S.String}) {}
export class DescribeBrokerEngineTypesRequest extends S.Class<DescribeBrokerEngineTypesRequest>("DescribeBrokerEngineTypesRequest")({EngineType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBrokerInstanceOptionsRequest extends S.Class<DescribeBrokerInstanceOptionsRequest>("DescribeBrokerInstanceOptionsRequest")({EngineType: S.optional(S.String), HostInstanceType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), StorageType: S.optional(S.String)}) {}
export class DescribeConfigurationRequest extends S.Class<DescribeConfigurationRequest>("DescribeConfigurationRequest")({ConfigurationId: S.String}) {}
export class DescribeConfigurationRevisionRequest extends S.Class<DescribeConfigurationRevisionRequest>("DescribeConfigurationRevisionRequest")({ConfigurationId: S.String, ConfigurationRevision: S.String}) {}
export class DescribeUserRequest extends S.Class<DescribeUserRequest>("DescribeUserRequest")({BrokerId: S.String, Username: S.String}) {}
export class ListBrokersRequest extends S.Class<ListBrokersRequest>("ListBrokersRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConfigurationRevisionsRequest extends S.Class<ListConfigurationRevisionsRequest>("ListConfigurationRevisionsRequest")({ConfigurationId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListConfigurationsRequest extends S.Class<ListConfigurationsRequest>("ListConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsRequest extends S.Class<ListTagsRequest>("ListTagsRequest")({ResourceArn: S.String}) {}
export class ListUsersRequest extends S.Class<ListUsersRequest>("ListUsersRequest")({BrokerId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PromoteRequest extends S.Class<PromoteRequest>("PromoteRequest")({BrokerId: S.String, Mode: S.String}) {}
export class RebootBrokerRequest extends S.Class<RebootBrokerRequest>("RebootBrokerRequest")({BrokerId: S.String}) {}
export class RebootBrokerResponse extends S.Class<RebootBrokerResponse>("RebootBrokerResponse")({}) {}
export class ConfigurationId extends S.Class<ConfigurationId>("ConfigurationId")({Id: S.String, Revision: S.optional(S.Number)}) {}
export class LdapServerMetadataInput extends S.Class<LdapServerMetadataInput>("LdapServerMetadataInput")({Hosts: __listOf__string, RoleBase: S.String, RoleName: S.optional(S.String), RoleSearchMatching: S.String, RoleSearchSubtree: S.optional(S.Boolean), ServiceAccountPassword: S.String, ServiceAccountUsername: S.String, UserBase: S.String, UserRoleName: S.optional(S.String), UserSearchMatching: S.String, UserSearchSubtree: S.optional(S.Boolean)}) {}
export class Logs extends S.Class<Logs>("Logs")({Audit: S.optional(S.Boolean), General: S.optional(S.Boolean)}) {}
export class WeeklyStartTime extends S.Class<WeeklyStartTime>("WeeklyStartTime")({DayOfWeek: S.String, TimeOfDay: S.String, TimeZone: S.optional(S.String)}) {}
export class UpdateBrokerRequest extends S.Class<UpdateBrokerRequest>("UpdateBrokerRequest")({AuthenticationStrategy: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), BrokerId: S.String, Configuration: S.optional(ConfigurationId), EngineVersion: S.optional(S.String), HostInstanceType: S.optional(S.String), LdapServerMetadata: S.optional(LdapServerMetadataInput), Logs: S.optional(Logs), MaintenanceWindowStartTime: S.optional(WeeklyStartTime), SecurityGroups: S.optional(__listOf__string), DataReplicationMode: S.optional(S.String)}) {}
export class UpdateConfigurationRequest extends S.Class<UpdateConfigurationRequest>("UpdateConfigurationRequest")({ConfigurationId: S.String, Data: S.String, Description: S.optional(S.String)}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({BrokerId: S.String, ConsoleAccess: S.optional(S.Boolean), Groups: S.optional(__listOf__string), Password: S.optional(S.String), Username: S.String, ReplicationUser: S.optional(S.Boolean)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({}) {}
export class EncryptionOptions extends S.Class<EncryptionOptions>("EncryptionOptions")({KmsKeyId: S.optional(S.String), UseAwsOwnedKey: S.Boolean}) {}
export class User extends S.Class<User>("User")({ConsoleAccess: S.optional(S.Boolean), Groups: S.optional(__listOf__string), Password: S.String, Username: S.String, ReplicationUser: S.optional(S.Boolean)}) {}
export const __listOfUser = S.Array(User);
export class ConfigurationRevision extends S.Class<ConfigurationRevision>("ConfigurationRevision")({Created: S.Date, Description: S.optional(S.String), Revision: S.Number}) {}
export const __listOfConfigurationRevision = S.Array(ConfigurationRevision);
export class CreateBrokerRequest extends S.Class<CreateBrokerRequest>("CreateBrokerRequest")({AuthenticationStrategy: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), BrokerName: S.String, Configuration: S.optional(ConfigurationId), CreatorRequestId: S.optional(S.String), DeploymentMode: S.String, EncryptionOptions: S.optional(EncryptionOptions), EngineType: S.String, EngineVersion: S.optional(S.String), HostInstanceType: S.String, LdapServerMetadata: S.optional(LdapServerMetadataInput), Logs: S.optional(Logs), MaintenanceWindowStartTime: S.optional(WeeklyStartTime), PubliclyAccessible: S.Boolean, SecurityGroups: S.optional(__listOf__string), StorageType: S.optional(S.String), SubnetIds: S.optional(__listOf__string), Tags: S.optional(__mapOf__string), Users: S.optional(__listOfUser), DataReplicationMode: S.optional(S.String), DataReplicationPrimaryBrokerArn: S.optional(S.String)}) {}
export class DeleteBrokerResponse extends S.Class<DeleteBrokerResponse>("DeleteBrokerResponse")({BrokerId: S.optional(S.String)}) {}
export class DeleteConfigurationResponse extends S.Class<DeleteConfigurationResponse>("DeleteConfigurationResponse")({ConfigurationId: S.optional(S.String)}) {}
export class DescribeConfigurationResponse extends S.Class<DescribeConfigurationResponse>("DescribeConfigurationResponse")({Arn: S.optional(S.String), AuthenticationStrategy: S.optional(S.String), Created: S.optional(S.Date), Description: S.optional(S.String), EngineType: S.optional(S.String), EngineVersion: S.optional(S.String), Id: S.optional(S.String), LatestRevision: S.optional(ConfigurationRevision), Name: S.optional(S.String), Tags: S.optional(__mapOf__string)}) {}
export class DescribeConfigurationRevisionResponse extends S.Class<DescribeConfigurationRevisionResponse>("DescribeConfigurationRevisionResponse")({ConfigurationId: S.optional(S.String), Created: S.optional(S.Date), Data: S.optional(S.String), Description: S.optional(S.String)}) {}
export class ListConfigurationRevisionsResponse extends S.Class<ListConfigurationRevisionsResponse>("ListConfigurationRevisionsResponse")({ConfigurationId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Revisions: S.optional(__listOfConfigurationRevision)}) {}
export class ListTagsResponse extends S.Class<ListTagsResponse>("ListTagsResponse")({Tags: S.optional(__mapOf__string)}) {}
export class UserSummary extends S.Class<UserSummary>("UserSummary")({PendingChange: S.optional(S.String), Username: S.String}) {}
export const __listOfUserSummary = S.Array(UserSummary);
export class ListUsersResponse extends S.Class<ListUsersResponse>("ListUsersResponse")({BrokerId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Users: S.optional(__listOfUserSummary)}) {}
export class PromoteResponse extends S.Class<PromoteResponse>("PromoteResponse")({BrokerId: S.optional(S.String)}) {}
export class LdapServerMetadataOutput extends S.Class<LdapServerMetadataOutput>("LdapServerMetadataOutput")({Hosts: __listOf__string, RoleBase: S.String, RoleName: S.optional(S.String), RoleSearchMatching: S.String, RoleSearchSubtree: S.optional(S.Boolean), ServiceAccountUsername: S.String, UserBase: S.String, UserRoleName: S.optional(S.String), UserSearchMatching: S.String, UserSearchSubtree: S.optional(S.Boolean)}) {}
export class DataReplicationCounterpart extends S.Class<DataReplicationCounterpart>("DataReplicationCounterpart")({BrokerId: S.String, Region: S.String}) {}
export class DataReplicationMetadataOutput extends S.Class<DataReplicationMetadataOutput>("DataReplicationMetadataOutput")({DataReplicationCounterpart: S.optional(DataReplicationCounterpart), DataReplicationRole: S.String}) {}
export class UpdateBrokerResponse extends S.Class<UpdateBrokerResponse>("UpdateBrokerResponse")({AuthenticationStrategy: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), BrokerId: S.optional(S.String), Configuration: S.optional(ConfigurationId), EngineVersion: S.optional(S.String), HostInstanceType: S.optional(S.String), LdapServerMetadata: S.optional(LdapServerMetadataOutput), Logs: S.optional(Logs), MaintenanceWindowStartTime: S.optional(WeeklyStartTime), SecurityGroups: S.optional(__listOf__string), DataReplicationMetadata: S.optional(DataReplicationMetadataOutput), DataReplicationMode: S.optional(S.String), PendingDataReplicationMetadata: S.optional(DataReplicationMetadataOutput), PendingDataReplicationMode: S.optional(S.String)}) {}
export const __listOfConfigurationId = S.Array(ConfigurationId);
export const __listOfDeploymentMode = S.Array(S.String);
export class ActionRequired extends S.Class<ActionRequired>("ActionRequired")({ActionRequiredCode: S.optional(S.String), ActionRequiredInfo: S.optional(S.String)}) {}
export const __listOfActionRequired = S.Array(ActionRequired);
export class BrokerInstance extends S.Class<BrokerInstance>("BrokerInstance")({ConsoleURL: S.optional(S.String), Endpoints: S.optional(__listOf__string), IpAddress: S.optional(S.String)}) {}
export const __listOfBrokerInstance = S.Array(BrokerInstance);
export class Configurations extends S.Class<Configurations>("Configurations")({Current: S.optional(ConfigurationId), History: S.optional(__listOfConfigurationId), Pending: S.optional(ConfigurationId)}) {}
export class UserPendingChanges extends S.Class<UserPendingChanges>("UserPendingChanges")({ConsoleAccess: S.optional(S.Boolean), Groups: S.optional(__listOf__string), PendingChange: S.String}) {}
export class BrokerSummary extends S.Class<BrokerSummary>("BrokerSummary")({BrokerArn: S.optional(S.String), BrokerId: S.optional(S.String), BrokerName: S.optional(S.String), BrokerState: S.optional(S.String), Created: S.optional(S.Date), DeploymentMode: S.String, EngineType: S.String, HostInstanceType: S.optional(S.String)}) {}
export const __listOfBrokerSummary = S.Array(BrokerSummary);
export class Configuration extends S.Class<Configuration>("Configuration")({Arn: S.String, AuthenticationStrategy: S.String, Created: S.Date, Description: S.String, EngineType: S.String, EngineVersion: S.String, Id: S.String, LatestRevision: ConfigurationRevision, Name: S.String, Tags: S.optional(__mapOf__string)}) {}
export const __listOfConfiguration = S.Array(Configuration);
export class SanitizationWarning extends S.Class<SanitizationWarning>("SanitizationWarning")({AttributeName: S.optional(S.String), ElementName: S.optional(S.String), Reason: S.String}) {}
export const __listOfSanitizationWarning = S.Array(SanitizationWarning);
export class CreateBrokerResponse extends S.Class<CreateBrokerResponse>("CreateBrokerResponse")({BrokerArn: S.optional(S.String), BrokerId: S.optional(S.String)}) {}
export class CreateConfigurationResponse extends S.Class<CreateConfigurationResponse>("CreateConfigurationResponse")({Arn: S.optional(S.String), AuthenticationStrategy: S.optional(S.String), Created: S.optional(S.Date), Id: S.optional(S.String), LatestRevision: S.optional(ConfigurationRevision), Name: S.optional(S.String)}) {}
export class DescribeUserResponse extends S.Class<DescribeUserResponse>("DescribeUserResponse")({BrokerId: S.optional(S.String), ConsoleAccess: S.optional(S.Boolean), Groups: S.optional(__listOf__string), Pending: S.optional(UserPendingChanges), Username: S.optional(S.String), ReplicationUser: S.optional(S.Boolean)}) {}
export class ListBrokersResponse extends S.Class<ListBrokersResponse>("ListBrokersResponse")({BrokerSummaries: S.optional(__listOfBrokerSummary), NextToken: S.optional(S.String)}) {}
export class ListConfigurationsResponse extends S.Class<ListConfigurationsResponse>("ListConfigurationsResponse")({Configurations: S.optional(__listOfConfiguration), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class UpdateConfigurationResponse extends S.Class<UpdateConfigurationResponse>("UpdateConfigurationResponse")({Arn: S.optional(S.String), Created: S.optional(S.Date), Id: S.optional(S.String), LatestRevision: S.optional(ConfigurationRevision), Name: S.optional(S.String), Warnings: S.optional(__listOfSanitizationWarning)}) {}
export class PendingLogs extends S.Class<PendingLogs>("PendingLogs")({Audit: S.optional(S.Boolean), General: S.optional(S.Boolean)}) {}
export class EngineVersion extends S.Class<EngineVersion>("EngineVersion")({Name: S.optional(S.String)}) {}
export const __listOfEngineVersion = S.Array(EngineVersion);
export class AvailabilityZone extends S.Class<AvailabilityZone>("AvailabilityZone")({Name: S.optional(S.String)}) {}
export const __listOfAvailabilityZone = S.Array(AvailabilityZone);
export class LogsSummary extends S.Class<LogsSummary>("LogsSummary")({Audit: S.optional(S.Boolean), AuditLogGroup: S.optional(S.String), General: S.Boolean, GeneralLogGroup: S.String, Pending: S.optional(PendingLogs)}) {}
export class BrokerEngineType extends S.Class<BrokerEngineType>("BrokerEngineType")({EngineType: S.optional(S.String), EngineVersions: S.optional(__listOfEngineVersion)}) {}
export const __listOfBrokerEngineType = S.Array(BrokerEngineType);
export class BrokerInstanceOption extends S.Class<BrokerInstanceOption>("BrokerInstanceOption")({AvailabilityZones: S.optional(__listOfAvailabilityZone), EngineType: S.optional(S.String), HostInstanceType: S.optional(S.String), StorageType: S.optional(S.String), SupportedDeploymentModes: S.optional(__listOfDeploymentMode), SupportedEngineVersions: S.optional(__listOf__string)}) {}
export const __listOfBrokerInstanceOption = S.Array(BrokerInstanceOption);
export class DescribeBrokerResponse extends S.Class<DescribeBrokerResponse>("DescribeBrokerResponse")({ActionsRequired: S.optional(__listOfActionRequired), AuthenticationStrategy: S.optional(S.String), AutoMinorVersionUpgrade: S.optional(S.Boolean), BrokerArn: S.optional(S.String), BrokerId: S.optional(S.String), BrokerInstances: S.optional(__listOfBrokerInstance), BrokerName: S.optional(S.String), BrokerState: S.optional(S.String), Configurations: S.optional(Configurations), Created: S.optional(S.Date), DeploymentMode: S.optional(S.String), EncryptionOptions: S.optional(EncryptionOptions), EngineType: S.optional(S.String), EngineVersion: S.optional(S.String), HostInstanceType: S.optional(S.String), LdapServerMetadata: S.optional(LdapServerMetadataOutput), Logs: S.optional(LogsSummary), MaintenanceWindowStartTime: S.optional(WeeklyStartTime), PendingAuthenticationStrategy: S.optional(S.String), PendingEngineVersion: S.optional(S.String), PendingHostInstanceType: S.optional(S.String), PendingLdapServerMetadata: S.optional(LdapServerMetadataOutput), PendingSecurityGroups: S.optional(__listOf__string), PubliclyAccessible: S.optional(S.Boolean), SecurityGroups: S.optional(__listOf__string), StorageType: S.optional(S.String), SubnetIds: S.optional(__listOf__string), Tags: S.optional(__mapOf__string), Users: S.optional(__listOfUserSummary), DataReplicationMetadata: S.optional(DataReplicationMetadataOutput), DataReplicationMode: S.optional(S.String), PendingDataReplicationMetadata: S.optional(DataReplicationMetadataOutput), PendingDataReplicationMode: S.optional(S.String)}) {}
export class DescribeBrokerEngineTypesResponse extends S.Class<DescribeBrokerEngineTypesResponse>("DescribeBrokerEngineTypesResponse")({BrokerEngineTypes: S.optional(__listOfBrokerEngineType), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeBrokerInstanceOptionsResponse extends S.Class<DescribeBrokerInstanceOptionsResponse>("DescribeBrokerInstanceOptionsResponse")({BrokerInstanceOptions: S.optional(__listOfBrokerInstanceOption), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {ErrorAttribute: S.optional(S.String), Message: S.optional(S.String)}) {};

//# Operations
/**
 * Updates the information for an ActiveMQ user.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/users/{Username}", method: "PUT", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add a tag to a resource.
 */export const createTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/tags/{ResourceArn}", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.CreateTags" }, CreateTagsRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an ActiveMQ user.
 * 
 * 
 * Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/users/{Username}", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.CreateUser" }, CreateUserRequest, CreateUserResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a broker. Note: This API is asynchronous.
 */export const deleteBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}", method: "DELETE", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DeleteBroker" }, DeleteBrokerRequest, DeleteBrokerResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified configuration.
 */export const deleteConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations/{ConfigurationId}", method: "DELETE", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DeleteConfiguration" }, DeleteConfigurationRequest, DeleteConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a resource.
 */export const deleteTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/tags/{ResourceArn}", method: "DELETE", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DeleteTags" }, DeleteTagsRequest, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an ActiveMQ user.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/users/{Username}", method: "DELETE", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DeleteUser" }, DeleteUserRequest, DeleteUserResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified configuration.
 */export const describeConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations/{ConfigurationId}", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeConfiguration" }, DescribeConfigurationRequest, DescribeConfigurationResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the specified configuration revision for the specified configuration.
 */export const describeConfigurationRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeConfigurationRevision" }, DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all revisions for the specified configuration.
 */export const listConfigurationRevisions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations/{ConfigurationId}/revisions", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.ListConfigurationRevisions" }, ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists tags for a resource.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/tags/{ResourceArn}", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.ListTags" }, ListTagsRequest, ListTagsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all ActiveMQ users.
 */export const listUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/users", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.ListUsers" }, ListUsersRequest, ListUsersResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Promotes a data replication replica broker to the primary broker role.
 */export const promote = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/promote", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.Promote" }, PromoteRequest, PromoteResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Reboots a broker. Note: This API is asynchronous.
 */export const rebootBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/reboot", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.RebootBroker" }, RebootBrokerRequest, RebootBrokerResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a pending configuration change to a broker.
 */export const updateBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}", method: "PUT", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.UpdateBroker" }, UpdateBrokerRequest, UpdateBrokerResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
 */export const createConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.CreateConfiguration" }, CreateConfigurationRequest, CreateConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about an ActiveMQ user.
 */export const describeUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}/users/{Username}", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeUser" }, DescribeUserRequest, DescribeUserResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all brokers.
 */export const listBrokers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.ListBrokers" }, ListBrokersRequest, ListBrokersResponse, [BadRequestException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of all configurations.
 */export const listConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.ListConfigurations" }, ListConfigurationsRequest, ListConfigurationsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified configuration.
 */export const updateConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/configurations/{ConfigurationId}", method: "PUT", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.UpdateConfiguration" }, UpdateConfigurationRequest, UpdateConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a broker. Note: This API is asynchronous.
 * 
 * To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.
 * 
 * - ec2:CreateNetworkInterface
 * 
 * This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.
 * 
 * - ec2:CreateNetworkInterfacePermission
 * 
 * This permission is required to attach the ENI to the broker instance.
 * 
 * - ec2:DeleteNetworkInterface
 * 
 * - ec2:DeleteNetworkInterfacePermission
 * 
 * - ec2:DetachNetworkInterface
 * 
 * - ec2:DescribeInternetGateways
 * 
 * - ec2:DescribeNetworkInterfaces
 * 
 * - ec2:DescribeNetworkInterfacePermissions
 * 
 * - ec2:DescribeRouteTables
 * 
 * - ec2:DescribeSecurityGroups
 * 
 * - ec2:DescribeSubnets
 * 
 * - ec2:DescribeVpcs
 * 
 * 
 * For more information, see Create an IAM User and Get Your Amazon Web Services Credentials and Never Modify or Delete the Amazon MQ Elastic Network Interface in the *Amazon MQ Developer Guide*.
 */export const createBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.CreateBroker" }, CreateBrokerRequest, CreateBrokerResponse, [BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the specified broker.
 */export const describeBroker = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/brokers/{BrokerId}", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeBroker" }, DescribeBrokerRequest, DescribeBrokerResponse, [BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe available engine types and versions.
 */export const describeBrokerEngineTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/broker-engine-types", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeBrokerEngineTypes" }, DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse, [BadRequestException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe available broker instance options.
 */export const describeBrokerInstanceOptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/v1/broker-instance-options", method: "GET", sdkId: "mq", sigV4ServiceName: "mq", name: "mq.DescribeBrokerInstanceOptions" }, DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse, [BadRequestException, ForbiddenException, InternalServerErrorException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
