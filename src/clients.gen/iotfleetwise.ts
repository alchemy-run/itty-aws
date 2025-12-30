import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetEncryptionConfigurationRequest extends S.Class<GetEncryptionConfigurationRequest>("GetEncryptionConfigurationRequest")({}) {}
export class GetLoggingOptionsRequest extends S.Class<GetLoggingOptionsRequest>("GetLoggingOptionsRequest")({}) {}
export class GetRegisterAccountStatusRequest extends S.Class<GetRegisterAccountStatusRequest>("GetRegisterAccountStatusRequest")({}) {}
export const TagKeyList = S.Array(S.String);
export class GetEncryptionConfigurationResponse extends S.Class<GetEncryptionConfigurationResponse>("GetEncryptionConfigurationResponse")({kmsKeyId: S.optional(S.String), encryptionStatus: S.String, encryptionType: S.String, errorMessage: S.optional(S.String), creationTime: S.optional(S.Date), lastModificationTime: S.optional(S.Date)}) {}
export class GetVehicleStatusRequest extends S.Class<GetVehicleStatusRequest>("GetVehicleStatusRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), vehicleName: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class PutEncryptionConfigurationRequest extends S.Class<PutEncryptionConfigurationRequest>("PutEncryptionConfigurationRequest")({kmsKeyId: S.optional(S.String), encryptionType: S.String}) {}
export class CloudWatchLogDeliveryOptions extends S.Class<CloudWatchLogDeliveryOptions>("CloudWatchLogDeliveryOptions")({logType: S.String, logGroupName: S.optional(S.String)}) {}
export class PutLoggingOptionsRequest extends S.Class<PutLoggingOptionsRequest>("PutLoggingOptionsRequest")({cloudWatchLogDelivery: CloudWatchLogDeliveryOptions}) {}
export class PutLoggingOptionsResponse extends S.Class<PutLoggingOptionsResponse>("PutLoggingOptionsResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const StateTemplateAssociationIdentifiers = S.Array(S.String);
export const attributesMap = S.Record({key: S.String, value: S.String});
export class TimePeriod extends S.Class<TimePeriod>("TimePeriod")({unit: S.String, value: S.Number}) {}
export class PeriodicStateTemplateUpdateStrategy extends S.Class<PeriodicStateTemplateUpdateStrategy>("PeriodicStateTemplateUpdateStrategy")({stateTemplateUpdateRate: TimePeriod}) {}
export class OnChangeStateTemplateUpdateStrategy extends S.Class<OnChangeStateTemplateUpdateStrategy>("OnChangeStateTemplateUpdateStrategy")({}) {}
export const StateTemplateUpdateStrategy = S.Union(PeriodicStateTemplateUpdateStrategy, OnChangeStateTemplateUpdateStrategy);
export class StateTemplateAssociation extends S.Class<StateTemplateAssociation>("StateTemplateAssociation")({identifier: S.String, stateTemplateUpdateStrategy: StateTemplateUpdateStrategy}) {}
export const StateTemplateAssociations = S.Array(StateTemplateAssociation);
export class UpdateVehicleRequestItem extends S.Class<UpdateVehicleRequestItem>("UpdateVehicleRequestItem")({vehicleName: S.String, modelManifestArn: S.optional(S.String), decoderManifestArn: S.optional(S.String), attributes: S.optional(attributesMap), attributeUpdateMode: S.optional(S.String), stateTemplatesToAdd: S.optional(StateTemplateAssociations), stateTemplatesToRemove: S.optional(StateTemplateAssociationIdentifiers), stateTemplatesToUpdate: S.optional(StateTemplateAssociations)}) {}
export const updateVehicleRequestItems = S.Array(UpdateVehicleRequestItem);
export class TimestreamRegistrationResponse extends S.Class<TimestreamRegistrationResponse>("TimestreamRegistrationResponse")({timestreamDatabaseName: S.String, timestreamTableName: S.String, timestreamDatabaseArn: S.optional(S.String), timestreamTableArn: S.optional(S.String), registrationStatus: S.String, errorMessage: S.optional(S.String)}) {}
export class IamRegistrationResponse extends S.Class<IamRegistrationResponse>("IamRegistrationResponse")({roleArn: S.String, registrationStatus: S.String, errorMessage: S.optional(S.String)}) {}
export class TimestreamResources extends S.Class<TimestreamResources>("TimestreamResources")({timestreamDatabaseName: S.String, timestreamTableName: S.String}) {}
export class IamResources extends S.Class<IamResources>("IamResources")({roleArn: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class BatchUpdateVehicleRequest extends S.Class<BatchUpdateVehicleRequest>("BatchUpdateVehicleRequest")({vehicles: updateVehicleRequestItems}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class GetLoggingOptionsResponse extends S.Class<GetLoggingOptionsResponse>("GetLoggingOptionsResponse")({cloudWatchLogDelivery: CloudWatchLogDeliveryOptions}) {}
export class GetRegisterAccountStatusResponse extends S.Class<GetRegisterAccountStatusResponse>("GetRegisterAccountStatusResponse")({customerAccountId: S.String, accountStatus: S.String, timestreamRegistrationResponse: S.optional(TimestreamRegistrationResponse), iamRegistrationResponse: IamRegistrationResponse, creationTime: S.Date, lastModificationTime: S.Date}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutEncryptionConfigurationResponse extends S.Class<PutEncryptionConfigurationResponse>("PutEncryptionConfigurationResponse")({kmsKeyId: S.optional(S.String), encryptionStatus: S.String, encryptionType: S.String}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, resource: S.String, resourceType: S.String}) {}
export class RegisterAccountRequest extends S.Class<RegisterAccountRequest>("RegisterAccountRequest")({timestreamResources: S.optional(TimestreamResources), iamResources: S.optional(IamResources)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class VehicleStatus extends S.Class<VehicleStatus>("VehicleStatus")({campaignName: S.optional(S.String), vehicleName: S.optional(S.String), status: S.optional(S.String)}) {}
export const VehicleStatusList = S.Array(VehicleStatus);
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, quotaCode: S.optional(S.String), serviceCode: S.optional(S.String), retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class GetVehicleStatusResponse extends S.Class<GetVehicleStatusResponse>("GetVehicleStatusResponse")({campaigns: S.optional(VehicleStatusList), nextToken: S.optional(S.String)}) {}
export class RegisterAccountResponse extends S.Class<RegisterAccountResponse>("RegisterAccountResponse")({registerAccountStatus: S.String, timestreamResources: S.optional(TimestreamResources), iamResources: IamResources, creationTime: S.Date, lastModificationTime: S.Date}) {}
export class UpdateVehicleResponseItem extends S.Class<UpdateVehicleResponseItem>("UpdateVehicleResponseItem")({vehicleName: S.optional(S.String), arn: S.optional(S.String)}) {}
export const updateVehicleResponseItems = S.Array(UpdateVehicleResponseItem);
export class UpdateVehicleError extends S.Class<UpdateVehicleError>("UpdateVehicleError")({vehicleName: S.optional(S.String), code: S.optional(S.Number), message: S.optional(S.String)}) {}
export const updateVehicleErrors = S.Array(UpdateVehicleError);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class BatchUpdateVehicleResponse extends S.Class<BatchUpdateVehicleResponse>("BatchUpdateVehicleResponse")({vehicles: S.optional(updateVehicleResponseItems), errors: S.optional(updateVehicleErrors)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.optional(S.String), fieldList: S.optional(ValidationExceptionFieldList)}) {}
export class LimitExceededException extends S.Class<LimitExceededException>("LimitExceededException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class CreateVehicleRequestItem extends S.Class<CreateVehicleRequestItem>("CreateVehicleRequestItem")({vehicleName: S.String, modelManifestArn: S.String, decoderManifestArn: S.String, attributes: S.optional(attributesMap), associationBehavior: S.optional(S.String), tags: S.optional(TagList), stateTemplates: S.optional(StateTemplateAssociations)}) {}
export const createVehicleRequestItems = S.Array(CreateVehicleRequestItem);
export class BatchCreateVehicleRequest extends S.Class<BatchCreateVehicleRequest>("BatchCreateVehicleRequest")({vehicles: createVehicleRequestItems}) {}
export class CreateVehicleResponseItem extends S.Class<CreateVehicleResponseItem>("CreateVehicleResponseItem")({vehicleName: S.optional(S.String), arn: S.optional(S.String), thingArn: S.optional(S.String)}) {}
export const createVehicleResponses = S.Array(CreateVehicleResponseItem);
export class CreateVehicleError extends S.Class<CreateVehicleError>("CreateVehicleError")({vehicleName: S.optional(S.String), code: S.optional(S.String), message: S.optional(S.String)}) {}
export const createVehicleErrors = S.Array(CreateVehicleError);
export class BatchCreateVehicleResponse extends S.Class<BatchCreateVehicleResponse>("BatchCreateVehicleResponse")({vehicles: S.optional(createVehicleResponses), errors: S.optional(createVehicleErrors)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class LimitExceededExceptionError extends S.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/tags", method: "GET", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putEncryptionConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/encryptionConfiguration", method: "POST", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.PutEncryptionConfiguration" }, PutEncryptionConfigurationRequest, PutEncryptionConfigurationResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const putLoggingOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/loggingOptions", method: "PUT", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.PutLoggingOptions" }, PutLoggingOptionsRequest, PutLoggingOptionsResponse, [AccessDeniedExceptionError, ConflictExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/tags", method: "POST", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/tags", method: "DELETE", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getEncryptionConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/encryptionConfiguration", method: "GET", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.GetEncryptionConfiguration" }, GetEncryptionConfigurationRequest, GetEncryptionConfigurationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getLoggingOptions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/loggingOptions", method: "GET", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.GetLoggingOptions" }, GetLoggingOptionsRequest, GetLoggingOptionsResponse, [AccessDeniedExceptionError, ThrottlingExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getVehicleStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/vehicles/{vehicleName}/status", method: "GET", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.GetVehicleStatus" }, GetVehicleStatusRequest, GetVehicleStatusResponse, [AccessDeniedExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const registerAccount = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/account/registration", method: "POST", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.RegisterAccount" }, RegisterAccountRequest, RegisterAccountResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRegisterAccountStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/account/registration_status", method: "GET", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.GetRegisterAccountStatus" }, GetRegisterAccountStatusRequest, GetRegisterAccountStatusResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchUpdateVehicle = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/vehicles", method: "PUT", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.BatchUpdateVehicle" }, BatchUpdateVehicleRequest, BatchUpdateVehicleResponse, [AccessDeniedExceptionError, InternalServerExceptionError, LimitExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchCreateVehicle = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-06-17", uri: "/vehicles", method: "POST", sdkId: "IoTFleetWise", sigV4ServiceName: "iotfleetwise", name: "IoTAutobahnControlPlane.BatchCreateVehicle" }, BatchCreateVehicleRequest, BatchCreateVehicleResponse, [AccessDeniedExceptionError, InternalServerExceptionError, LimitExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
