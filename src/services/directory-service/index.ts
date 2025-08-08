import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class DirectoryService extends AWSServiceClient {
  acceptSharedDirectory(
    input: AcceptSharedDirectoryRequest,
  ): Effect.Effect<
    AcceptSharedDirectoryResult,
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("AcceptSharedDirectory", input);
  }
  addIpRoutes(
    input: AddIpRoutesRequest,
  ): Effect.Effect<
    AddIpRoutesResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | IpRouteLimitExceededException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("AddIpRoutes", input);
  }
  addRegion(
    input: AddRegionRequest,
  ): Effect.Effect<
    AddRegionResult,
    | AccessDeniedException
    | ClientException
    | DirectoryAlreadyInRegionException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | RegionLimitExceededException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("AddRegion", input);
  }
  addTagsToResource(
    input: AddTagsToResourceRequest,
  ): Effect.Effect<
    AddTagsToResourceResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | TagLimitExceededException
    | CommonAwsError
  > {
    return this.call("AddTagsToResource", input);
  }
  cancelSchemaExtension(
    input: CancelSchemaExtensionRequest,
  ): Effect.Effect<
    CancelSchemaExtensionResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("CancelSchemaExtension", input);
  }
  connectDirectory(
    input: ConnectDirectoryRequest,
  ): Effect.Effect<
    ConnectDirectoryResult,
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("ConnectDirectory", input);
  }
  createAlias(
    input: CreateAliasRequest,
  ): Effect.Effect<
    CreateAliasResult,
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("CreateAlias", input);
  }
  createComputer(
    input: CreateComputerRequest,
  ): Effect.Effect<
    CreateComputerResult,
    | AuthenticationFailedException
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateComputer", input);
  }
  createConditionalForwarder(
    input: CreateConditionalForwarderRequest,
  ): Effect.Effect<
    CreateConditionalForwarderResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateConditionalForwarder", input);
  }
  createDirectory(
    input: CreateDirectoryRequest,
  ): Effect.Effect<
    CreateDirectoryResult,
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("CreateDirectory", input);
  }
  createHybridAD(
    input: CreateHybridADRequest,
  ): Effect.Effect<
    CreateHybridADResult,
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryLimitExceededException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateHybridAD", input);
  }
  createLogSubscription(
    input: CreateLogSubscriptionRequest,
  ): Effect.Effect<
    CreateLogSubscriptionResult,
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateLogSubscription", input);
  }
  createMicrosoftAD(
    input: CreateMicrosoftADRequest,
  ): Effect.Effect<
    CreateMicrosoftADResult,
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateMicrosoftAD", input);
  }
  createSnapshot(
    input: CreateSnapshotRequest,
  ): Effect.Effect<
    CreateSnapshotResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | CommonAwsError
  > {
    return this.call("CreateSnapshot", input);
  }
  createTrust(
    input: CreateTrustRequest,
  ): Effect.Effect<
    CreateTrustResult,
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("CreateTrust", input);
  }
  deleteADAssessment(
    input: DeleteADAssessmentRequest,
  ): Effect.Effect<
    DeleteADAssessmentResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DeleteADAssessment", input);
  }
  deleteConditionalForwarder(
    input: DeleteConditionalForwarderRequest,
  ): Effect.Effect<
    DeleteConditionalForwarderResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DeleteConditionalForwarder", input);
  }
  deleteDirectory(
    input: DeleteDirectoryRequest,
  ): Effect.Effect<
    DeleteDirectoryResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DeleteDirectory", input);
  }
  deleteLogSubscription(
    input: DeleteLogSubscriptionRequest,
  ): Effect.Effect<
    DeleteLogSubscriptionResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DeleteLogSubscription", input);
  }
  deleteSnapshot(
    input: DeleteSnapshotRequest,
  ): Effect.Effect<
    DeleteSnapshotResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DeleteSnapshot", input);
  }
  deleteTrust(
    input: DeleteTrustRequest,
  ): Effect.Effect<
    DeleteTrustResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DeleteTrust", input);
  }
  deregisterCertificate(
    input: DeregisterCertificateRequest,
  ): Effect.Effect<
    DeregisterCertificateResult,
    | CertificateDoesNotExistException
    | CertificateInUseException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DeregisterCertificate", input);
  }
  deregisterEventTopic(
    input: DeregisterEventTopicRequest,
  ): Effect.Effect<
    DeregisterEventTopicResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DeregisterEventTopic", input);
  }
  describeADAssessment(
    input: DescribeADAssessmentRequest,
  ): Effect.Effect<
    DescribeADAssessmentResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeADAssessment", input);
  }
  describeCertificate(
    input: DescribeCertificateRequest,
  ): Effect.Effect<
    DescribeCertificateResult,
    | CertificateDoesNotExistException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeCertificate", input);
  }
  describeClientAuthenticationSettings(
    input: DescribeClientAuthenticationSettingsRequest,
  ): Effect.Effect<
    DescribeClientAuthenticationSettingsResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeClientAuthenticationSettings", input);
  }
  describeConditionalForwarders(
    input: DescribeConditionalForwardersRequest,
  ): Effect.Effect<
    DescribeConditionalForwardersResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeConditionalForwarders", input);
  }
  describeDirectories(
    input: DescribeDirectoriesRequest,
  ): Effect.Effect<
    DescribeDirectoriesResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DescribeDirectories", input);
  }
  describeDirectoryDataAccess(
    input: DescribeDirectoryDataAccessRequest,
  ): Effect.Effect<
    DescribeDirectoryDataAccessResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeDirectoryDataAccess", input);
  }
  describeDomainControllers(
    input: DescribeDomainControllersRequest,
  ): Effect.Effect<
    DescribeDomainControllersResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeDomainControllers", input);
  }
  describeEventTopics(
    input: DescribeEventTopicsRequest,
  ): Effect.Effect<
    DescribeEventTopicsResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DescribeEventTopics", input);
  }
  describeHybridADUpdate(
    input: DescribeHybridADUpdateRequest,
  ): Effect.Effect<
    DescribeHybridADUpdateResult,
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeHybridADUpdate", input);
  }
  describeLDAPSSettings(
    input: DescribeLDAPSSettingsRequest,
  ): Effect.Effect<
    DescribeLDAPSSettingsResult,
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeLDAPSSettings", input);
  }
  describeRegions(
    input: DescribeRegionsRequest,
  ): Effect.Effect<
    DescribeRegionsResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeRegions", input);
  }
  describeSettings(
    input: DescribeSettingsRequest,
  ): Effect.Effect<
    DescribeSettingsResult,
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeSettings", input);
  }
  describeSharedDirectories(
    input: DescribeSharedDirectoriesRequest,
  ): Effect.Effect<
    DescribeSharedDirectoriesResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeSharedDirectories", input);
  }
  describeSnapshots(
    input: DescribeSnapshotsRequest,
  ): Effect.Effect<
    DescribeSnapshotsResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DescribeSnapshots", input);
  }
  describeTrusts(
    input: DescribeTrustsRequest,
  ): Effect.Effect<
    DescribeTrustsResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DescribeTrusts", input);
  }
  describeUpdateDirectory(
    input: DescribeUpdateDirectoryRequest,
  ): Effect.Effect<
    DescribeUpdateDirectoryResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DescribeUpdateDirectory", input);
  }
  disableClientAuthentication(
    input: DisableClientAuthenticationRequest,
  ): Effect.Effect<
    DisableClientAuthenticationResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidClientAuthStatusException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DisableClientAuthentication", input);
  }
  disableDirectoryDataAccess(
    input: DisableDirectoryDataAccessRequest,
  ): Effect.Effect<
    DisableDirectoryDataAccessResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DisableDirectoryDataAccess", input);
  }
  disableLDAPS(
    input: DisableLDAPSRequest,
  ): Effect.Effect<
    DisableLDAPSResult,
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidLDAPSStatusException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("DisableLDAPS", input);
  }
  disableRadius(
    input: DisableRadiusRequest,
  ): Effect.Effect<
    DisableRadiusResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DisableRadius", input);
  }
  disableSso(
    input: DisableSsoRequest,
  ): Effect.Effect<
    DisableSsoResult,
    | AuthenticationFailedException
    | ClientException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("DisableSso", input);
  }
  enableClientAuthentication(
    input: EnableClientAuthenticationRequest,
  ): Effect.Effect<
    EnableClientAuthenticationResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidClientAuthStatusException
    | NoAvailableCertificateException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("EnableClientAuthentication", input);
  }
  enableDirectoryDataAccess(
    input: EnableDirectoryDataAccessRequest,
  ): Effect.Effect<
    EnableDirectoryDataAccessResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("EnableDirectoryDataAccess", input);
  }
  enableLDAPS(
    input: EnableLDAPSRequest,
  ): Effect.Effect<
    EnableLDAPSResult,
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidLDAPSStatusException
    | InvalidParameterException
    | NoAvailableCertificateException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("EnableLDAPS", input);
  }
  enableRadius(
    input: EnableRadiusRequest,
  ): Effect.Effect<
    EnableRadiusResult,
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("EnableRadius", input);
  }
  enableSso(
    input: EnableSsoRequest,
  ): Effect.Effect<
    EnableSsoResult,
    | AuthenticationFailedException
    | ClientException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("EnableSso", input);
  }
  getDirectoryLimits(
    input: GetDirectoryLimitsRequest,
  ): Effect.Effect<
    GetDirectoryLimitsResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("GetDirectoryLimits", input);
  }
  getSnapshotLimits(
    input: GetSnapshotLimitsRequest,
  ): Effect.Effect<
    GetSnapshotLimitsResult,
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("GetSnapshotLimits", input);
  }
  listADAssessments(
    input: ListADAssessmentsRequest,
  ): Effect.Effect<
    ListADAssessmentsResult,
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("ListADAssessments", input);
  }
  listCertificates(
    input: ListCertificatesRequest,
  ): Effect.Effect<
    ListCertificatesResult,
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("ListCertificates", input);
  }
  listIpRoutes(
    input: ListIpRoutesRequest,
  ): Effect.Effect<
    ListIpRoutesResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("ListIpRoutes", input);
  }
  listLogSubscriptions(
    input: ListLogSubscriptionsRequest,
  ): Effect.Effect<
    ListLogSubscriptionsResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("ListLogSubscriptions", input);
  }
  listSchemaExtensions(
    input: ListSchemaExtensionsRequest,
  ): Effect.Effect<
    ListSchemaExtensionsResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("ListSchemaExtensions", input);
  }
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  registerCertificate(
    input: RegisterCertificateRequest,
  ): Effect.Effect<
    RegisterCertificateResult,
    | CertificateAlreadyExistsException
    | CertificateLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidCertificateException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("RegisterCertificate", input);
  }
  registerEventTopic(
    input: RegisterEventTopicRequest,
  ): Effect.Effect<
    RegisterEventTopicResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("RegisterEventTopic", input);
  }
  rejectSharedDirectory(
    input: RejectSharedDirectoryRequest,
  ): Effect.Effect<
    RejectSharedDirectoryResult,
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("RejectSharedDirectory", input);
  }
  removeIpRoutes(
    input: RemoveIpRoutesRequest,
  ): Effect.Effect<
    RemoveIpRoutesResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("RemoveIpRoutes", input);
  }
  removeRegion(
    input: RemoveRegionRequest,
  ): Effect.Effect<
    RemoveRegionResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("RemoveRegion", input);
  }
  removeTagsFromResource(
    input: RemoveTagsFromResourceRequest,
  ): Effect.Effect<
    RemoveTagsFromResourceResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("RemoveTagsFromResource", input);
  }
  resetUserPassword(
    input: ResetUserPasswordRequest,
  ): Effect.Effect<
    ResetUserPasswordResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidPasswordException
    | ServiceException
    | UnsupportedOperationException
    | UserDoesNotExistException
    | CommonAwsError
  > {
    return this.call("ResetUserPassword", input);
  }
  restoreFromSnapshot(
    input: RestoreFromSnapshotRequest,
  ): Effect.Effect<
    RestoreFromSnapshotResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("RestoreFromSnapshot", input);
  }
  shareDirectory(
    input: ShareDirectoryRequest,
  ): Effect.Effect<
    ShareDirectoryResult,
    | AccessDeniedException
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | InvalidTargetException
    | OrganizationsException
    | ServiceException
    | ShareLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("ShareDirectory", input);
  }
  startADAssessment(
    input: StartADAssessmentRequest,
  ): Effect.Effect<
    StartADAssessmentResult,
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("StartADAssessment", input);
  }
  startSchemaExtension(
    input: StartSchemaExtensionRequest,
  ): Effect.Effect<
    StartSchemaExtensionResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | CommonAwsError
  > {
    return this.call("StartSchemaExtension", input);
  }
  unshareDirectory(
    input: UnshareDirectoryRequest,
  ): Effect.Effect<
    UnshareDirectoryResult,
    | ClientException
    | DirectoryNotSharedException
    | EntityDoesNotExistException
    | InvalidTargetException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("UnshareDirectory", input);
  }
  updateConditionalForwarder(
    input: UpdateConditionalForwarderRequest,
  ): Effect.Effect<
    UpdateConditionalForwarderResult,
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("UpdateConditionalForwarder", input);
  }
  updateDirectorySetup(
    input: UpdateDirectorySetupRequest,
  ): Effect.Effect<
    UpdateDirectorySetupResult,
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("UpdateDirectorySetup", input);
  }
  updateHybridAD(
    input: UpdateHybridADRequest,
  ): Effect.Effect<
    UpdateHybridADResult,
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("UpdateHybridAD", input);
  }
  updateNumberOfDomainControllers(
    input: UpdateNumberOfDomainControllersRequest,
  ): Effect.Effect<
    UpdateNumberOfDomainControllersResult,
    | ClientException
    | DirectoryUnavailableException
    | DomainControllerLimitExceededException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("UpdateNumberOfDomainControllers", input);
  }
  updateRadius(
    input: UpdateRadiusRequest,
  ): Effect.Effect<
    UpdateRadiusResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("UpdateRadius", input);
  }
  updateSettings(
    input: UpdateSettingsRequest,
  ): Effect.Effect<
    UpdateSettingsResult,
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | IncompatibleSettingsException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | UnsupportedSettingsException
    | CommonAwsError
  > {
    return this.call("UpdateSettings", input);
  }
  updateTrust(
    input: UpdateTrustRequest,
  ): Effect.Effect<
    UpdateTrustResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError
  > {
    return this.call("UpdateTrust", input);
  }
  verifyTrust(
    input: VerifyTrustRequest,
  ): Effect.Effect<
    VerifyTrustResult,
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError
  > {
    return this.call("VerifyTrust", input);
  }
}

export default DirectoryService;

export interface AcceptSharedDirectoryRequest {
  SharedDirectoryId: string;
}
export interface AcceptSharedDirectoryResult {
  SharedDirectory?: SharedDirectory;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type AccessUrl = string;

export declare class ADAssessmentLimitExceededException extends EffectData.TaggedError(
  "ADAssessmentLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type AddedDateTime = Date | string;

export interface AddIpRoutesRequest {
  DirectoryId: string;
  IpRoutes: Array<IpRoute>;
  UpdateSecurityGroupForDirectoryControllers?: boolean;
}
export interface AddIpRoutesResult {}
export type AdditionalRegions = Array<string>;
export interface AddRegionRequest {
  DirectoryId: string;
  RegionName: string;
  VPCSettings: DirectoryVpcSettings;
}
export interface AddRegionResult {}
export interface AddTagsToResourceRequest {
  ResourceId: string;
  Tags: Array<Tag>;
}
export interface AddTagsToResourceResult {}
export type AliasName = string;

export interface Assessment {
  AssessmentId?: string;
  DirectoryId?: string;
  DnsName?: string;
  StartTime?: Date | string;
  LastUpdateDateTime?: Date | string;
  Status?: string;
  StatusCode?: string;
  StatusReason?: string;
  CustomerDnsIps?: Array<string>;
  VpcId?: string;
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  SelfManagedInstanceIds?: Array<string>;
  ReportType?: string;
  Version?: string;
}
export interface AssessmentConfiguration {
  CustomerDnsIps: Array<string>;
  DnsName: string;
  VpcSettings: DirectoryVpcSettings;
  InstanceIds: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export type AssessmentId = string;

export type AssessmentInstanceId = string;

export type AssessmentInstanceIds = Array<string>;
export type AssessmentLimit = number;

export interface AssessmentReport {
  DomainControllerIp?: string;
  Validations?: Array<AssessmentValidation>;
}
export type AssessmentReports = Array<AssessmentReport>;
export type AssessmentReportType = string;

export type Assessments = Array<AssessmentSummary>;
export type AssessmentStartTime = Date | string;

export type AssessmentStatus = string;

export type AssessmentStatusCode = string;

export type AssessmentStatusReason = string;

export interface AssessmentSummary {
  AssessmentId?: string;
  DirectoryId?: string;
  DnsName?: string;
  StartTime?: Date | string;
  LastUpdateDateTime?: Date | string;
  Status?: string;
  CustomerDnsIps?: Array<string>;
  ReportType?: string;
}
export interface AssessmentValidation {
  Category?: string;
  Name?: string;
  Status?: string;
  StatusCode?: string;
  StatusReason?: string;
  StartTime?: Date | string;
  LastUpdateDateTime?: Date | string;
}
export type AssessmentValidationCategory = string;

export type AssessmentValidationName = string;

export type AssessmentValidations = Array<AssessmentValidation>;
export type AssessmentValidationStatus = string;

export type AssessmentValidationStatusCode = string;

export type AssessmentValidationStatusReason = string;

export type AssessmentValidationTimeStamp = Date | string;

export type AssessmentVersion = string;

export interface Attribute {
  Name?: string;
  Value?: string;
}
export type AttributeName = string;

export type Attributes = Array<Attribute>;
export type AttributeValue = string;

export declare class AuthenticationFailedException extends EffectData.TaggedError(
  "AuthenticationFailedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type AvailabilityZone = string;

export type AvailabilityZones = Array<string>;
export interface CancelSchemaExtensionRequest {
  DirectoryId: string;
  SchemaExtensionId: string;
}
export interface CancelSchemaExtensionResult {}
export interface Certificate {
  CertificateId?: string;
  State?: CertificateState;
  StateReason?: string;
  CommonName?: string;
  RegisteredDateTime?: Date | string;
  ExpiryDateTime?: Date | string;
  Type?: CertificateType;
  ClientCertAuthSettings?: ClientCertAuthSettings;
}
export declare class CertificateAlreadyExistsException extends EffectData.TaggedError(
  "CertificateAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type CertificateCN = string;

export type CertificateData = string;

export declare class CertificateDoesNotExistException extends EffectData.TaggedError(
  "CertificateDoesNotExistException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type CertificateExpiryDateTime = Date | string;

export type CertificateId = string;

export interface CertificateInfo {
  CertificateId?: string;
  CommonName?: string;
  State?: CertificateState;
  ExpiryDateTime?: Date | string;
  Type?: CertificateType;
}
export declare class CertificateInUseException extends EffectData.TaggedError(
  "CertificateInUseException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class CertificateLimitExceededException extends EffectData.TaggedError(
  "CertificateLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type CertificateRegisteredDateTime = Date | string;

export type CertificatesInfo = Array<CertificateInfo>;
export type CertificateState =
  | "REGISTERING"
  | "REGISTERED"
  | "REGISTER_FAILED"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "DEREGISTER_FAILED";
export type CertificateStateReason = string;

export type CertificateType = "CLIENT_CERT_AUTH" | "CLIENT_LDAPS";
export type CidrIp = string;

export type CidrIps = Array<string>;
export interface ClientAuthenticationSettingInfo {
  Type?: ClientAuthenticationType;
  Status?: ClientAuthenticationStatus;
  LastUpdatedDateTime?: Date | string;
}
export type ClientAuthenticationSettingsInfo =
  Array<ClientAuthenticationSettingInfo>;
export type ClientAuthenticationStatus = "ENABLED" | "DISABLED";
export type ClientAuthenticationType = "SMART_CARD" | "SMART_CARD_OR_PASSWORD";
export interface ClientCertAuthSettings {
  OCSPUrl?: string;
}
export declare class ClientException extends EffectData.TaggedError(
  "ClientException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type CloudOnlyDirectoriesLimitReached = boolean;

export interface Computer {
  ComputerId?: string;
  ComputerName?: string;
  ComputerAttributes?: Array<Attribute>;
}
export type ComputerName = string;

export type ComputerPassword = string;

export interface ConditionalForwarder {
  RemoteDomainName?: string;
  DnsIpAddrs?: Array<string>;
  ReplicationScope?: ReplicationScope;
}
export type ConditionalForwarders = Array<ConditionalForwarder>;
export interface ConnectDirectoryRequest {
  Name: string;
  ShortName?: string;
  Password: string;
  Description?: string;
  Size: DirectorySize;
  ConnectSettings: DirectoryConnectSettings;
  Tags?: Array<Tag>;
}
export interface ConnectDirectoryResult {
  DirectoryId?: string;
}
export type ConnectedDirectoriesLimitReached = boolean;

export type ConnectPassword = string;

export interface CreateAliasRequest {
  DirectoryId: string;
  Alias: string;
}
export interface CreateAliasResult {
  DirectoryId?: string;
  Alias?: string;
}
export interface CreateComputerRequest {
  DirectoryId: string;
  ComputerName: string;
  Password: string;
  OrganizationalUnitDistinguishedName?: string;
  ComputerAttributes?: Array<Attribute>;
}
export interface CreateComputerResult {
  Computer?: Computer;
}
export interface CreateConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  DnsIpAddrs: Array<string>;
}
export interface CreateConditionalForwarderResult {}
export type CreatedDateTime = Date | string;

export interface CreateDirectoryRequest {
  Name: string;
  ShortName?: string;
  Password: string;
  Description?: string;
  Size: DirectorySize;
  VpcSettings?: DirectoryVpcSettings;
  Tags?: Array<Tag>;
}
export interface CreateDirectoryResult {
  DirectoryId?: string;
}
export interface CreateHybridADRequest {
  SecretArn: string;
  AssessmentId: string;
  Tags?: Array<Tag>;
}
export interface CreateHybridADResult {
  DirectoryId?: string;
}
export interface CreateLogSubscriptionRequest {
  DirectoryId: string;
  LogGroupName: string;
}
export interface CreateLogSubscriptionResult {}
export interface CreateMicrosoftADRequest {
  Name: string;
  ShortName?: string;
  Password: string;
  Description?: string;
  VpcSettings: DirectoryVpcSettings;
  Edition?: DirectoryEdition;
  Tags?: Array<Tag>;
}
export interface CreateMicrosoftADResult {
  DirectoryId?: string;
}
export type CreateSnapshotBeforeSchemaExtension = boolean;

export type CreateSnapshotBeforeUpdate = boolean;

export interface CreateSnapshotRequest {
  DirectoryId: string;
  Name?: string;
}
export interface CreateSnapshotResult {
  SnapshotId?: string;
}
export interface CreateTrustRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  TrustPassword: string;
  TrustDirection: TrustDirection;
  TrustType?: TrustType;
  ConditionalForwarderIpAddrs?: Array<string>;
  SelectiveAuth?: SelectiveAuth;
}
export interface CreateTrustResult {
  TrustId?: string;
}
export type CustomerDnsIps = Array<string>;
export type CustomerId = string;

export type CustomerUserName = string;

export type DataAccessStatus =
  | "DISABLED"
  | "DISABLING"
  | "ENABLED"
  | "ENABLING"
  | "FAILED";
export interface DeleteADAssessmentRequest {
  AssessmentId: string;
}
export interface DeleteADAssessmentResult {
  AssessmentId?: string;
}
export type DeleteAssociatedConditionalForwarder = boolean;

export interface DeleteConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
}
export interface DeleteConditionalForwarderResult {}
export interface DeleteDirectoryRequest {
  DirectoryId: string;
}
export interface DeleteDirectoryResult {
  DirectoryId?: string;
}
export interface DeleteLogSubscriptionRequest {
  DirectoryId: string;
}
export interface DeleteLogSubscriptionResult {}
export interface DeleteSnapshotRequest {
  SnapshotId: string;
}
export interface DeleteSnapshotResult {
  SnapshotId?: string;
}
export interface DeleteTrustRequest {
  TrustId: string;
  DeleteAssociatedConditionalForwarder?: boolean;
}
export interface DeleteTrustResult {
  TrustId?: string;
}
export interface DeregisterCertificateRequest {
  DirectoryId: string;
  CertificateId: string;
}
export interface DeregisterCertificateResult {}
export interface DeregisterEventTopicRequest {
  DirectoryId: string;
  TopicName: string;
}
export interface DeregisterEventTopicResult {}
export interface DescribeADAssessmentRequest {
  AssessmentId: string;
}
export interface DescribeADAssessmentResult {
  Assessment?: Assessment;
  AssessmentReports?: Array<AssessmentReport>;
}
export interface DescribeCertificateRequest {
  DirectoryId: string;
  CertificateId: string;
}
export interface DescribeCertificateResult {
  Certificate?: Certificate;
}
export interface DescribeClientAuthenticationSettingsRequest {
  DirectoryId: string;
  Type?: ClientAuthenticationType;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeClientAuthenticationSettingsResult {
  ClientAuthenticationSettingsInfo?: Array<ClientAuthenticationSettingInfo>;
  NextToken?: string;
}
export interface DescribeConditionalForwardersRequest {
  DirectoryId: string;
  RemoteDomainNames?: Array<string>;
}
export interface DescribeConditionalForwardersResult {
  ConditionalForwarders?: Array<ConditionalForwarder>;
}
export interface DescribeDirectoriesRequest {
  DirectoryIds?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeDirectoriesResult {
  DirectoryDescriptions?: Array<DirectoryDescription>;
  NextToken?: string;
}
export interface DescribeDirectoryDataAccessRequest {
  DirectoryId: string;
}
export interface DescribeDirectoryDataAccessResult {
  DataAccessStatus?: DataAccessStatus;
}
export interface DescribeDomainControllersRequest {
  DirectoryId: string;
  DomainControllerIds?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeDomainControllersResult {
  DomainControllers?: Array<DomainController>;
  NextToken?: string;
}
export interface DescribeEventTopicsRequest {
  DirectoryId?: string;
  TopicNames?: Array<string>;
}
export interface DescribeEventTopicsResult {
  EventTopics?: Array<EventTopic>;
}
export interface DescribeHybridADUpdateRequest {
  DirectoryId: string;
  UpdateType?: HybridUpdateType;
  NextToken?: string;
}
export interface DescribeHybridADUpdateResult {
  UpdateActivities?: HybridUpdateActivities;
  NextToken?: string;
}
export interface DescribeLDAPSSettingsRequest {
  DirectoryId: string;
  Type?: LDAPSType;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeLDAPSSettingsResult {
  LDAPSSettingsInfo?: Array<LDAPSSettingInfo>;
  NextToken?: string;
}
export interface DescribeRegionsRequest {
  DirectoryId: string;
  RegionName?: string;
  NextToken?: string;
}
export interface DescribeRegionsResult {
  RegionsDescription?: Array<RegionDescription>;
  NextToken?: string;
}
export interface DescribeSettingsRequest {
  DirectoryId: string;
  Status?: DirectoryConfigurationStatus;
  NextToken?: string;
}
export interface DescribeSettingsResult {
  DirectoryId?: string;
  SettingEntries?: Array<SettingEntry>;
  NextToken?: string;
}
export interface DescribeSharedDirectoriesRequest {
  OwnerDirectoryId: string;
  SharedDirectoryIds?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeSharedDirectoriesResult {
  SharedDirectories?: Array<SharedDirectory>;
  NextToken?: string;
}
export interface DescribeSnapshotsRequest {
  DirectoryId?: string;
  SnapshotIds?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeSnapshotsResult {
  Snapshots?: Array<Snapshot>;
  NextToken?: string;
}
export interface DescribeTrustsRequest {
  DirectoryId?: string;
  TrustIds?: Array<string>;
  NextToken?: string;
  Limit?: number;
}
export interface DescribeTrustsResult {
  Trusts?: Array<Trust>;
  NextToken?: string;
}
export interface DescribeUpdateDirectoryRequest {
  DirectoryId: string;
  UpdateType: UpdateType;
  RegionName?: string;
  NextToken?: string;
}
export interface DescribeUpdateDirectoryResult {
  UpdateActivities?: Array<UpdateInfoEntry>;
  NextToken?: string;
}
export type Description = string;

export type DesiredNumberOfDomainControllers = number;

export declare class DirectoryAlreadyInRegionException extends EffectData.TaggedError(
  "DirectoryAlreadyInRegionException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class DirectoryAlreadySharedException extends EffectData.TaggedError(
  "DirectoryAlreadySharedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type DirectoryConfigurationSettingAllowedValues = string;

export type DirectoryConfigurationSettingDataType = string;

export type DirectoryConfigurationSettingLastRequestedDateTime = Date | string;

export type DirectoryConfigurationSettingLastUpdatedDateTime = Date | string;

export type DirectoryConfigurationSettingName = string;

export type DirectoryConfigurationSettingRequestDetailedStatus = Record<
  string,
  DirectoryConfigurationStatus
>;
export type DirectoryConfigurationSettingRequestStatusMessage = string;

export type DirectoryConfigurationSettingType = string;

export type DirectoryConfigurationSettingValue = string;

export type DirectoryConfigurationStatus =
  | "REQUESTED"
  | "UPDATING"
  | "UPDATED"
  | "FAILED"
  | "DEFAULT";
export interface DirectoryConnectSettings {
  VpcId: string;
  SubnetIds: Array<string>;
  CustomerDnsIps: Array<string>;
  CustomerUserName: string;
}
export interface DirectoryConnectSettingsDescription {
  VpcId?: string;
  SubnetIds?: Array<string>;
  CustomerUserName?: string;
  SecurityGroupId?: string;
  AvailabilityZones?: Array<string>;
  ConnectIps?: Array<string>;
}
export interface DirectoryDescription {
  DirectoryId?: string;
  Name?: string;
  ShortName?: string;
  Size?: DirectorySize;
  Edition?: DirectoryEdition;
  Alias?: string;
  AccessUrl?: string;
  Description?: string;
  DnsIpAddrs?: Array<string>;
  Stage?: DirectoryStage;
  ShareStatus?: ShareStatus;
  ShareMethod?: ShareMethod;
  ShareNotes?: string;
  LaunchTime?: Date | string;
  StageLastUpdatedDateTime?: Date | string;
  Type?: DirectoryType;
  VpcSettings?: DirectoryVpcSettingsDescription;
  ConnectSettings?: DirectoryConnectSettingsDescription;
  RadiusSettings?: RadiusSettings;
  RadiusStatus?: RadiusStatus;
  StageReason?: string;
  SsoEnabled?: boolean;
  DesiredNumberOfDomainControllers?: number;
  OwnerDirectoryDescription?: OwnerDirectoryDescription;
  RegionsInfo?: RegionsInfo;
  OsVersion?: OSVersion;
  HybridSettings?: HybridSettingsDescription;
}
export type DirectoryDescriptions = Array<DirectoryDescription>;
export declare class DirectoryDoesNotExistException extends EffectData.TaggedError(
  "DirectoryDoesNotExistException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type DirectoryEdition = "ENTERPRISE" | "STANDARD";
export type DirectoryId = string;

export type DirectoryIds = Array<string>;
export declare class DirectoryInDesiredStateException extends EffectData.TaggedError(
  "DirectoryInDesiredStateException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class DirectoryLimitExceededException extends EffectData.TaggedError(
  "DirectoryLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface DirectoryLimits {
  CloudOnlyDirectoriesLimit?: number;
  CloudOnlyDirectoriesCurrentCount?: number;
  CloudOnlyDirectoriesLimitReached?: boolean;
  CloudOnlyMicrosoftADLimit?: number;
  CloudOnlyMicrosoftADCurrentCount?: number;
  CloudOnlyMicrosoftADLimitReached?: boolean;
  ConnectedDirectoriesLimit?: number;
  ConnectedDirectoriesCurrentCount?: number;
  ConnectedDirectoriesLimitReached?: boolean;
}
export type DirectoryName = string;

export declare class DirectoryNotSharedException extends EffectData.TaggedError(
  "DirectoryNotSharedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type DirectoryShortName = string;

export type DirectorySize = "SMALL" | "LARGE";
export type DirectoryStage =
  | "REQUESTED"
  | "CREATING"
  | "CREATED"
  | "ACTIVE"
  | "INOPERABLE"
  | "IMPAIRED"
  | "RESTORING"
  | "RESTOREFAILED"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | "UPDATING";
export type DirectoryType =
  | "SIMPLE_AD"
  | "AD_CONNECTOR"
  | "MICROSOFT_AD"
  | "SHARED_MICROSOFT_AD";
export declare class DirectoryUnavailableException extends EffectData.TaggedError(
  "DirectoryUnavailableException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface DirectoryVpcSettings {
  VpcId: string;
  SubnetIds: Array<string>;
}
export interface DirectoryVpcSettingsDescription {
  VpcId?: string;
  SubnetIds?: Array<string>;
  SecurityGroupId?: string;
  AvailabilityZones?: Array<string>;
}
export interface DisableClientAuthenticationRequest {
  DirectoryId: string;
  Type: ClientAuthenticationType;
}
export interface DisableClientAuthenticationResult {}
export interface DisableDirectoryDataAccessRequest {
  DirectoryId: string;
}
export interface DisableDirectoryDataAccessResult {}
export interface DisableLDAPSRequest {
  DirectoryId: string;
  Type: LDAPSType;
}
export interface DisableLDAPSResult {}
export interface DisableRadiusRequest {
  DirectoryId: string;
}
export interface DisableRadiusResult {}
export interface DisableSsoRequest {
  DirectoryId: string;
  UserName?: string;
  Password?: string;
}
export interface DisableSsoResult {}
export type DnsIpAddrs = Array<string>;
export interface DomainController {
  DirectoryId?: string;
  DomainControllerId?: string;
  DnsIpAddr?: string;
  VpcId?: string;
  SubnetId?: string;
  AvailabilityZone?: string;
  Status?: DomainControllerStatus;
  StatusReason?: string;
  LaunchTime?: Date | string;
  StatusLastUpdatedDateTime?: Date | string;
}
export type DomainControllerId = string;

export type DomainControllerIds = Array<string>;
export declare class DomainControllerLimitExceededException extends EffectData.TaggedError(
  "DomainControllerLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type DomainControllers = Array<DomainController>;
export type DomainControllerStatus =
  | "CREATING"
  | "ACTIVE"
  | "IMPAIRED"
  | "RESTORING"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | "UPDATING";
export type DomainControllerStatusReason = string;

export interface EnableClientAuthenticationRequest {
  DirectoryId: string;
  Type: ClientAuthenticationType;
}
export interface EnableClientAuthenticationResult {}
export interface EnableDirectoryDataAccessRequest {
  DirectoryId: string;
}
export interface EnableDirectoryDataAccessResult {}
export interface EnableLDAPSRequest {
  DirectoryId: string;
  Type: LDAPSType;
}
export interface EnableLDAPSResult {}
export interface EnableRadiusRequest {
  DirectoryId: string;
  RadiusSettings: RadiusSettings;
}
export interface EnableRadiusResult {}
export interface EnableSsoRequest {
  DirectoryId: string;
  UserName?: string;
  Password?: string;
}
export interface EnableSsoResult {}
export type EndDateTime = Date | string;

export declare class EntityAlreadyExistsException extends EffectData.TaggedError(
  "EntityAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class EntityDoesNotExistException extends EffectData.TaggedError(
  "EntityDoesNotExistException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface EventTopic {
  DirectoryId?: string;
  TopicName?: string;
  TopicArn?: string;
  CreatedDateTime?: Date | string;
  Status?: TopicStatus;
}
export type EventTopics = Array<EventTopic>;
export type ExceptionMessage = string;

export interface GetDirectoryLimitsRequest {}
export interface GetDirectoryLimitsResult {
  DirectoryLimits?: DirectoryLimits;
}
export interface GetSnapshotLimitsRequest {
  DirectoryId: string;
}
export interface GetSnapshotLimitsResult {
  SnapshotLimits?: SnapshotLimits;
}
export interface HybridAdministratorAccountUpdate {
  SecretArn: string;
}
export interface HybridCustomerInstancesSettings {
  CustomerDnsIps: Array<string>;
  InstanceIds: Array<string>;
}
export interface HybridSettingsDescription {
  SelfManagedDnsIpAddrs?: Array<string>;
  SelfManagedInstanceIds?: Array<string>;
}
export interface HybridUpdateActivities {
  SelfManagedInstances?: Array<HybridUpdateInfoEntry>;
  HybridAdministratorAccount?: Array<HybridUpdateInfoEntry>;
}
export type HybridUpdateInfoEntries = Array<HybridUpdateInfoEntry>;
export interface HybridUpdateInfoEntry {
  Status?: UpdateStatus;
  StatusReason?: string;
  InitiatedBy?: string;
  NewValue?: HybridUpdateValue;
  PreviousValue?: HybridUpdateValue;
  StartTime?: Date | string;
  LastUpdatedDateTime?: Date | string;
  AssessmentId?: string;
}
export type HybridUpdateType =
  | "SELF_MANAGED_INSTANCES"
  | "HYBRID_ADMINISTRATOR_ACCOUNT";
export interface HybridUpdateValue {
  InstanceIds?: Array<string>;
  DnsIps?: Array<string>;
}
export declare class IncompatibleSettingsException extends EffectData.TaggedError(
  "IncompatibleSettingsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type InitiatedBy = string;

export declare class InsufficientPermissionsException extends EffectData.TaggedError(
  "InsufficientPermissionsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidCertificateException extends EffectData.TaggedError(
  "InvalidCertificateException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidClientAuthStatusException extends EffectData.TaggedError(
  "InvalidClientAuthStatusException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidLDAPSStatusException extends EffectData.TaggedError(
  "InvalidLDAPSStatusException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidPasswordException extends EffectData.TaggedError(
  "InvalidPasswordException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidTargetException extends EffectData.TaggedError(
  "InvalidTargetException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type IpAddr = string;

export type IpAddrs = Array<string>;
export interface IpRoute {
  CidrIp?: string;
  Description?: string;
}
export interface IpRouteInfo {
  DirectoryId?: string;
  CidrIp?: string;
  IpRouteStatusMsg?: IpRouteStatusMsg;
  AddedDateTime?: Date | string;
  IpRouteStatusReason?: string;
  Description?: string;
}
export declare class IpRouteLimitExceededException extends EffectData.TaggedError(
  "IpRouteLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type IpRoutes = Array<IpRoute>;
export type IpRoutesInfo = Array<IpRouteInfo>;
export type IpRouteStatusMsg =
  | "ADDING"
  | "ADDED"
  | "REMOVING"
  | "REMOVED"
  | "ADD_FAILED"
  | "REMOVE_FAILED";
export type IpRouteStatusReason = string;

export type LastUpdateDateTime = Date | string;

export type LastUpdatedDateTime = Date | string;

export type LaunchTime = Date | string;

export interface LDAPSSettingInfo {
  LDAPSStatus?: LDAPSStatus;
  LDAPSStatusReason?: string;
  LastUpdatedDateTime?: Date | string;
}
export type LDAPSSettingsInfo = Array<LDAPSSettingInfo>;
export type LDAPSStatus = "ENABLING" | "ENABLED" | "ENABLE_FAILED" | "DISABLED";
export type LDAPSStatusReason = string;

export type LDAPSType = "CLIENT";
export type LdifContent = string;

export type Limit = number;

export interface ListADAssessmentsRequest {
  DirectoryId?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListADAssessmentsResult {
  Assessments?: Array<AssessmentSummary>;
  NextToken?: string;
}
export interface ListCertificatesRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListCertificatesResult {
  NextToken?: string;
  CertificatesInfo?: Array<CertificateInfo>;
}
export interface ListIpRoutesRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListIpRoutesResult {
  IpRoutesInfo?: Array<IpRouteInfo>;
  NextToken?: string;
}
export interface ListLogSubscriptionsRequest {
  DirectoryId?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListLogSubscriptionsResult {
  LogSubscriptions?: Array<LogSubscription>;
  NextToken?: string;
}
export interface ListSchemaExtensionsRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListSchemaExtensionsResult {
  SchemaExtensionsInfo?: Array<SchemaExtensionInfo>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceId: string;
  NextToken?: string;
  Limit?: number;
}
export interface ListTagsForResourceResult {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type LogGroupName = string;

export interface LogSubscription {
  DirectoryId?: string;
  LogGroupName?: string;
  SubscriptionCreatedDateTime?: Date | string;
}
export type LogSubscriptions = Array<LogSubscription>;
export type ManualSnapshotsLimitReached = boolean;

export type NextToken = string;

export declare class NoAvailableCertificateException extends EffectData.TaggedError(
  "NoAvailableCertificateException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type Notes = string;

export type OCSPUrl = string;

export type OrganizationalUnitDN = string;

export declare class OrganizationsException extends EffectData.TaggedError(
  "OrganizationsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface OSUpdateSettings {
  OSVersion?: OSVersion;
}
export type OSVersion = "VERSION_2012" | "VERSION_2019";
export interface OwnerDirectoryDescription {
  DirectoryId?: string;
  AccountId?: string;
  DnsIpAddrs?: Array<string>;
  VpcSettings?: DirectoryVpcSettingsDescription;
  RadiusSettings?: RadiusSettings;
  RadiusStatus?: RadiusStatus;
}
export type PageLimit = number;

export type Password = string;

export type PortNumber = number;

export type RadiusAuthenticationProtocol =
  | "PAP"
  | "CHAP"
  | "MSCHAPV1"
  | "MSCHAPV2";
export type RadiusDisplayLabel = string;

export type RadiusRetries = number;

export interface RadiusSettings {
  RadiusServers?: Array<string>;
  RadiusPort?: number;
  RadiusTimeout?: number;
  RadiusRetries?: number;
  SharedSecret?: string;
  AuthenticationProtocol?: RadiusAuthenticationProtocol;
  DisplayLabel?: string;
  UseSameUsername?: boolean;
}
export type RadiusSharedSecret = string;

export type RadiusStatus = "CREATING" | "COMPLETED" | "FAILED";
export type RadiusTimeout = number;

export interface RegionDescription {
  DirectoryId?: string;
  RegionName?: string;
  RegionType?: RegionType;
  Status?: DirectoryStage;
  VpcSettings?: DirectoryVpcSettings;
  DesiredNumberOfDomainControllers?: number;
  LaunchTime?: Date | string;
  StatusLastUpdatedDateTime?: Date | string;
  LastUpdatedDateTime?: Date | string;
}
export declare class RegionLimitExceededException extends EffectData.TaggedError(
  "RegionLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type RegionName = string;

export type RegionsDescription = Array<RegionDescription>;
export interface RegionsInfo {
  PrimaryRegion?: string;
  AdditionalRegions?: Array<string>;
}
export type RegionType = "PRIMARY" | "ADDITIONAL";
export interface RegisterCertificateRequest {
  DirectoryId: string;
  CertificateData: string;
  Type?: CertificateType;
  ClientCertAuthSettings?: ClientCertAuthSettings;
}
export interface RegisterCertificateResult {
  CertificateId?: string;
}
export interface RegisterEventTopicRequest {
  DirectoryId: string;
  TopicName: string;
}
export interface RegisterEventTopicResult {}
export interface RejectSharedDirectoryRequest {
  SharedDirectoryId: string;
}
export interface RejectSharedDirectoryResult {
  SharedDirectoryId?: string;
}
export type RemoteDomainName = string;

export type RemoteDomainNames = Array<string>;
export interface RemoveIpRoutesRequest {
  DirectoryId: string;
  CidrIps: Array<string>;
}
export interface RemoveIpRoutesResult {}
export interface RemoveRegionRequest {
  DirectoryId: string;
}
export interface RemoveRegionResult {}
export interface RemoveTagsFromResourceRequest {
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface RemoveTagsFromResourceResult {}
export type ReplicationScope = "Domain";
export type RequestId = string;

export interface ResetUserPasswordRequest {
  DirectoryId: string;
  UserName: string;
  NewPassword: string;
}
export interface ResetUserPasswordResult {}
export type ResourceId = string;

export interface RestoreFromSnapshotRequest {
  SnapshotId: string;
}
export interface RestoreFromSnapshotResult {}
export type SchemaExtensionId = string;

export interface SchemaExtensionInfo {
  DirectoryId?: string;
  SchemaExtensionId?: string;
  Description?: string;
  SchemaExtensionStatus?: SchemaExtensionStatus;
  SchemaExtensionStatusReason?: string;
  StartDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export type SchemaExtensionsInfo = Array<SchemaExtensionInfo>;
export type SchemaExtensionStatus =
  | "INITIALIZING"
  | "CREATING_SNAPSHOT"
  | "UPDATING_SCHEMA"
  | "REPLICATING"
  | "CANCEL_IN_PROGRESS"
  | "ROLLBACK_IN_PROGRESS"
  | "CANCELLED"
  | "FAILED"
  | "COMPLETED";
export type SchemaExtensionStatusReason = string;

export type SecretArn = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SelectiveAuth = "ENABLED" | "DISABLED";
export type Server = string;

export type Servers = Array<string>;
export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface Setting {
  Name: string;
  Value: string;
}
export type SettingEntries = Array<SettingEntry>;
export interface SettingEntry {
  Type?: string;
  Name?: string;
  AllowedValues?: string;
  AppliedValue?: string;
  RequestedValue?: string;
  RequestStatus?: DirectoryConfigurationStatus;
  RequestDetailedStatus?: Record<string, DirectoryConfigurationStatus>;
  RequestStatusMessage?: string;
  LastUpdatedDateTime?: Date | string;
  LastRequestedDateTime?: Date | string;
  DataType?: string;
}
export type Settings = Array<Setting>;
export type SharedDirectories = Array<SharedDirectory>;
export interface SharedDirectory {
  OwnerAccountId?: string;
  OwnerDirectoryId?: string;
  ShareMethod?: ShareMethod;
  SharedAccountId?: string;
  SharedDirectoryId?: string;
  ShareStatus?: ShareStatus;
  ShareNotes?: string;
  CreatedDateTime?: Date | string;
  LastUpdatedDateTime?: Date | string;
}
export interface ShareDirectoryRequest {
  DirectoryId: string;
  ShareNotes?: string;
  ShareTarget: ShareTarget;
  ShareMethod: ShareMethod;
}
export interface ShareDirectoryResult {
  SharedDirectoryId?: string;
}
export declare class ShareLimitExceededException extends EffectData.TaggedError(
  "ShareLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type ShareMethod = "ORGANIZATIONS" | "HANDSHAKE";
export type ShareStatus =
  | "SHARED"
  | "PENDING_ACCEPTANCE"
  | "REJECTED"
  | "REJECTING"
  | "REJECT_FAILED"
  | "SHARING"
  | "SHARE_FAILED"
  | "DELETED"
  | "DELETING";
export interface ShareTarget {
  Id: string;
  Type: TargetType;
}
export type SID = string;

export interface Snapshot {
  DirectoryId?: string;
  SnapshotId?: string;
  Type?: SnapshotType;
  Name?: string;
  Status?: SnapshotStatus;
  StartTime?: Date | string;
}
export type SnapshotId = string;

export type SnapshotIds = Array<string>;
export declare class SnapshotLimitExceededException extends EffectData.TaggedError(
  "SnapshotLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface SnapshotLimits {
  ManualSnapshotsLimit?: number;
  ManualSnapshotsCurrentCount?: number;
  ManualSnapshotsLimitReached?: boolean;
}
export type SnapshotName = string;

export type Snapshots = Array<Snapshot>;
export type SnapshotStatus = "CREATING" | "COMPLETED" | "FAILED";
export type SnapshotType = "AUTO" | "MANUAL";
export type SsoEnabled = boolean;

export type StageReason = string;

export interface StartADAssessmentRequest {
  AssessmentConfiguration?: AssessmentConfiguration;
  DirectoryId?: string;
}
export interface StartADAssessmentResult {
  AssessmentId?: string;
}
export type StartDateTime = Date | string;

export interface StartSchemaExtensionRequest {
  DirectoryId: string;
  CreateSnapshotBeforeSchemaExtension: boolean;
  LdifContent: string;
  Description: string;
}
export interface StartSchemaExtensionResult {
  SchemaExtensionId?: string;
}
export type StartTime = Date | string;

export type StateLastUpdatedDateTime = Date | string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export type SubscriptionCreatedDateTime = Date | string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export declare class TagLimitExceededException extends EffectData.TaggedError(
  "TagLimitExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TargetId = string;

export type TargetType = "ACCOUNT";
export type TopicArn = string;

export type TopicName = string;

export type TopicNames = Array<string>;
export type TopicStatus =
  | "REGISTERED"
  | "TOPIC_NOT_FOUND"
  | "FAILED"
  | "DELETED";
export interface Trust {
  DirectoryId?: string;
  TrustId?: string;
  RemoteDomainName?: string;
  TrustType?: TrustType;
  TrustDirection?: TrustDirection;
  TrustState?: TrustState;
  CreatedDateTime?: Date | string;
  LastUpdatedDateTime?: Date | string;
  StateLastUpdatedDateTime?: Date | string;
  TrustStateReason?: string;
  SelectiveAuth?: SelectiveAuth;
}
export type TrustDirection =
  | "ONE_WAY_OUTGOING"
  | "ONE_WAY_INCOMING"
  | "TWO_WAY";
export type TrustId = string;

export type TrustIds = Array<string>;
export type TrustPassword = string;

export type Trusts = Array<Trust>;
export type TrustState =
  | "CREATING"
  | "CREATED"
  | "VERIFYING"
  | "VERIFY_FAILED"
  | "VERIFIED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "UPDATED"
  | "DELETING"
  | "DELETED"
  | "FAILED";
export type TrustStateReason = string;

export type TrustType = "FOREST" | "EXTERNAL";
export interface UnshareDirectoryRequest {
  DirectoryId: string;
  UnshareTarget: UnshareTarget;
}
export interface UnshareDirectoryResult {
  SharedDirectoryId?: string;
}
export interface UnshareTarget {
  Id: string;
  Type: TargetType;
}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class UnsupportedSettingsException extends EffectData.TaggedError(
  "UnsupportedSettingsException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type UpdateActivities = Array<UpdateInfoEntry>;
export interface UpdateConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  DnsIpAddrs: Array<string>;
}
export interface UpdateConditionalForwarderResult {}
export interface UpdateDirectorySetupRequest {
  DirectoryId: string;
  UpdateType: UpdateType;
  OSUpdateSettings?: OSUpdateSettings;
  CreateSnapshotBeforeUpdate?: boolean;
}
export interface UpdateDirectorySetupResult {}
export interface UpdateHybridADRequest {
  DirectoryId: string;
  HybridAdministratorAccountUpdate?: HybridAdministratorAccountUpdate;
  SelfManagedInstancesSettings?: HybridCustomerInstancesSettings;
}
export interface UpdateHybridADResult {
  DirectoryId?: string;
  AssessmentId?: string;
}
export interface UpdateInfoEntry {
  Region?: string;
  Status?: UpdateStatus;
  StatusReason?: string;
  InitiatedBy?: string;
  NewValue?: UpdateValue;
  PreviousValue?: UpdateValue;
  StartTime?: Date | string;
  LastUpdatedDateTime?: Date | string;
}
export interface UpdateNumberOfDomainControllersRequest {
  DirectoryId: string;
  DesiredNumber: number;
}
export interface UpdateNumberOfDomainControllersResult {}
export interface UpdateRadiusRequest {
  DirectoryId: string;
  RadiusSettings: RadiusSettings;
}
export interface UpdateRadiusResult {}
export type UpdateSecurityGroupForDirectoryControllers = boolean;

export interface UpdateSettingsRequest {
  DirectoryId: string;
  Settings: Array<Setting>;
}
export interface UpdateSettingsResult {
  DirectoryId?: string;
}
export type UpdateStatus = "UPDATED" | "UPDATING" | "UPDATE_FAILED";
export type UpdateStatusReason = string;

export interface UpdateTrustRequest {
  TrustId: string;
  SelectiveAuth?: SelectiveAuth;
}
export interface UpdateTrustResult {
  RequestId?: string;
  TrustId?: string;
}
export type UpdateType = "OS";
export interface UpdateValue {
  OSUpdateSettings?: OSUpdateSettings;
}
export declare class UserDoesNotExistException extends EffectData.TaggedError(
  "UserDoesNotExistException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type UserName = string;

export type UserPassword = string;

export type UseSameUsername = boolean;

export interface VerifyTrustRequest {
  TrustId: string;
}
export interface VerifyTrustResult {
  TrustId?: string;
}
export type VpcId = string;

export declare namespace AcceptSharedDirectory {
  export type Input = AcceptSharedDirectoryRequest;
  export type Output = AcceptSharedDirectoryResult;
  export type Error =
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace AddIpRoutes {
  export type Input = AddIpRoutesRequest;
  export type Output = AddIpRoutesResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | IpRouteLimitExceededException
    | ServiceException
    | CommonAwsError;
}

export declare namespace AddRegion {
  export type Input = AddRegionRequest;
  export type Output = AddRegionResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryAlreadyInRegionException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | RegionLimitExceededException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceRequest;
  export type Output = AddTagsToResourceResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | TagLimitExceededException
    | CommonAwsError;
}

export declare namespace CancelSchemaExtension {
  export type Input = CancelSchemaExtensionRequest;
  export type Output = CancelSchemaExtensionResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ConnectDirectory {
  export type Input = ConnectDirectoryRequest;
  export type Output = ConnectDirectoryResult;
  export type Error =
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace CreateAlias {
  export type Input = CreateAliasRequest;
  export type Output = CreateAliasResult;
  export type Error =
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace CreateComputer {
  export type Input = CreateComputerRequest;
  export type Output = CreateComputerResult;
  export type Error =
    | AuthenticationFailedException
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateConditionalForwarder {
  export type Input = CreateConditionalForwarderRequest;
  export type Output = CreateConditionalForwarderResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateDirectory {
  export type Input = CreateDirectoryRequest;
  export type Output = CreateDirectoryResult;
  export type Error =
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace CreateHybridAD {
  export type Input = CreateHybridADRequest;
  export type Output = CreateHybridADResult;
  export type Error =
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryLimitExceededException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateLogSubscription {
  export type Input = CreateLogSubscriptionRequest;
  export type Output = CreateLogSubscriptionResult;
  export type Error =
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateMicrosoftAD {
  export type Input = CreateMicrosoftADRequest;
  export type Output = CreateMicrosoftADResult;
  export type Error =
    | ClientException
    | DirectoryLimitExceededException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotRequest;
  export type Output = CreateSnapshotResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateTrust {
  export type Input = CreateTrustRequest;
  export type Output = CreateTrustResult;
  export type Error =
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteADAssessment {
  export type Input = DeleteADAssessmentRequest;
  export type Output = DeleteADAssessmentResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteConditionalForwarder {
  export type Input = DeleteConditionalForwarderRequest;
  export type Output = DeleteConditionalForwarderResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteDirectory {
  export type Input = DeleteDirectoryRequest;
  export type Output = DeleteDirectoryResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DeleteLogSubscription {
  export type Input = DeleteLogSubscriptionRequest;
  export type Output = DeleteLogSubscriptionResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteSnapshot {
  export type Input = DeleteSnapshotRequest;
  export type Output = DeleteSnapshotResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DeleteTrust {
  export type Input = DeleteTrustRequest;
  export type Output = DeleteTrustResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeregisterCertificate {
  export type Input = DeregisterCertificateRequest;
  export type Output = DeregisterCertificateResult;
  export type Error =
    | CertificateDoesNotExistException
    | CertificateInUseException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeregisterEventTopic {
  export type Input = DeregisterEventTopicRequest;
  export type Output = DeregisterEventTopicResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DescribeADAssessment {
  export type Input = DescribeADAssessmentRequest;
  export type Output = DescribeADAssessmentResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeCertificate {
  export type Input = DescribeCertificateRequest;
  export type Output = DescribeCertificateResult;
  export type Error =
    | CertificateDoesNotExistException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeClientAuthenticationSettings {
  export type Input = DescribeClientAuthenticationSettingsRequest;
  export type Output = DescribeClientAuthenticationSettingsResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeConditionalForwarders {
  export type Input = DescribeConditionalForwardersRequest;
  export type Output = DescribeConditionalForwardersResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeDirectories {
  export type Input = DescribeDirectoriesRequest;
  export type Output = DescribeDirectoriesResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DescribeDirectoryDataAccess {
  export type Input = DescribeDirectoryDataAccessRequest;
  export type Output = DescribeDirectoryDataAccessResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeDomainControllers {
  export type Input = DescribeDomainControllersRequest;
  export type Output = DescribeDomainControllersResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeEventTopics {
  export type Input = DescribeEventTopicsRequest;
  export type Output = DescribeEventTopicsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DescribeHybridADUpdate {
  export type Input = DescribeHybridADUpdateRequest;
  export type Output = DescribeHybridADUpdateResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeLDAPSSettings {
  export type Input = DescribeLDAPSSettingsRequest;
  export type Output = DescribeLDAPSSettingsResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeRegions {
  export type Input = DescribeRegionsRequest;
  export type Output = DescribeRegionsResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeSettings {
  export type Input = DescribeSettingsRequest;
  export type Output = DescribeSettingsResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeSharedDirectories {
  export type Input = DescribeSharedDirectoriesRequest;
  export type Output = DescribeSharedDirectoriesResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeSnapshots {
  export type Input = DescribeSnapshotsRequest;
  export type Output = DescribeSnapshotsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DescribeTrusts {
  export type Input = DescribeTrustsRequest;
  export type Output = DescribeTrustsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeUpdateDirectory {
  export type Input = DescribeUpdateDirectoryRequest;
  export type Output = DescribeUpdateDirectoryResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DisableClientAuthentication {
  export type Input = DisableClientAuthenticationRequest;
  export type Output = DisableClientAuthenticationResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidClientAuthStatusException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisableDirectoryDataAccess {
  export type Input = DisableDirectoryDataAccessRequest;
  export type Output = DisableDirectoryDataAccessResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisableLDAPS {
  export type Input = DisableLDAPSRequest;
  export type Output = DisableLDAPSResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidLDAPSStatusException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisableRadius {
  export type Input = DisableRadiusRequest;
  export type Output = DisableRadiusResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DisableSso {
  export type Input = DisableSsoRequest;
  export type Output = DisableSsoResult;
  export type Error =
    | AuthenticationFailedException
    | ClientException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | CommonAwsError;
}

export declare namespace EnableClientAuthentication {
  export type Input = EnableClientAuthenticationRequest;
  export type Output = EnableClientAuthenticationResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidClientAuthStatusException
    | NoAvailableCertificateException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace EnableDirectoryDataAccess {
  export type Input = EnableDirectoryDataAccessRequest;
  export type Output = EnableDirectoryDataAccessResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace EnableLDAPS {
  export type Input = EnableLDAPSRequest;
  export type Output = EnableLDAPSResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidLDAPSStatusException
    | InvalidParameterException
    | NoAvailableCertificateException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace EnableRadius {
  export type Input = EnableRadiusRequest;
  export type Output = EnableRadiusResult;
  export type Error =
    | ClientException
    | EntityAlreadyExistsException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace EnableSso {
  export type Input = EnableSsoRequest;
  export type Output = EnableSsoResult;
  export type Error =
    | AuthenticationFailedException
    | ClientException
    | EntityDoesNotExistException
    | InsufficientPermissionsException
    | ServiceException
    | CommonAwsError;
}

export declare namespace GetDirectoryLimits {
  export type Input = GetDirectoryLimitsRequest;
  export type Output = GetDirectoryLimitsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError;
}

export declare namespace GetSnapshotLimits {
  export type Input = GetSnapshotLimitsRequest;
  export type Output = GetSnapshotLimitsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListADAssessments {
  export type Input = ListADAssessmentsRequest;
  export type Output = ListADAssessmentsResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListCertificates {
  export type Input = ListCertificatesRequest;
  export type Output = ListCertificatesResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListIpRoutes {
  export type Input = ListIpRoutesRequest;
  export type Output = ListIpRoutesResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListLogSubscriptions {
  export type Input = ListLogSubscriptionsRequest;
  export type Output = ListLogSubscriptionsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListSchemaExtensions {
  export type Input = ListSchemaExtensionsRequest;
  export type Output = ListSchemaExtensionsResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidNextTokenException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace RegisterCertificate {
  export type Input = RegisterCertificateRequest;
  export type Output = RegisterCertificateResult;
  export type Error =
    | CertificateAlreadyExistsException
    | CertificateLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | InvalidCertificateException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RegisterEventTopic {
  export type Input = RegisterEventTopicRequest;
  export type Output = RegisterEventTopicResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace RejectSharedDirectory {
  export type Input = RejectSharedDirectoryRequest;
  export type Output = RejectSharedDirectoryResult;
  export type Error =
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace RemoveIpRoutes {
  export type Input = RemoveIpRoutesRequest;
  export type Output = RemoveIpRoutesResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace RemoveRegion {
  export type Input = RemoveRegionRequest;
  export type Output = RemoveRegionResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceRequest;
  export type Output = RemoveTagsFromResourceResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ResetUserPassword {
  export type Input = ResetUserPasswordRequest;
  export type Output = ResetUserPasswordResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidPasswordException
    | ServiceException
    | UnsupportedOperationException
    | UserDoesNotExistException
    | CommonAwsError;
}

export declare namespace RestoreFromSnapshot {
  export type Input = RestoreFromSnapshotRequest;
  export type Output = RestoreFromSnapshotResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ShareDirectory {
  export type Input = ShareDirectoryRequest;
  export type Output = ShareDirectoryResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryAlreadySharedException
    | EntityDoesNotExistException
    | InvalidParameterException
    | InvalidTargetException
    | OrganizationsException
    | ServiceException
    | ShareLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartADAssessment {
  export type Input = StartADAssessmentRequest;
  export type Output = StartADAssessmentResult;
  export type Error =
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartSchemaExtension {
  export type Input = StartSchemaExtensionRequest;
  export type Output = StartSchemaExtensionResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | CommonAwsError;
}

export declare namespace UnshareDirectory {
  export type Input = UnshareDirectoryRequest;
  export type Output = UnshareDirectoryResult;
  export type Error =
    | ClientException
    | DirectoryNotSharedException
    | EntityDoesNotExistException
    | InvalidTargetException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UpdateConditionalForwarder {
  export type Input = UpdateConditionalForwarderRequest;
  export type Output = UpdateConditionalForwarderResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateDirectorySetup {
  export type Input = UpdateDirectorySetupRequest;
  export type Output = UpdateDirectorySetupResult;
  export type Error =
    | AccessDeniedException
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryInDesiredStateException
    | DirectoryUnavailableException
    | InvalidParameterException
    | ServiceException
    | SnapshotLimitExceededException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateHybridAD {
  export type Input = UpdateHybridADRequest;
  export type Output = UpdateHybridADResult;
  export type Error =
    | ADAssessmentLimitExceededException
    | ClientException
    | DirectoryDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateNumberOfDomainControllers {
  export type Input = UpdateNumberOfDomainControllersRequest;
  export type Output = UpdateNumberOfDomainControllersResult;
  export type Error =
    | ClientException
    | DirectoryUnavailableException
    | DomainControllerLimitExceededException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateRadius {
  export type Input = UpdateRadiusRequest;
  export type Output = UpdateRadiusResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UpdateSettings {
  export type Input = UpdateSettingsRequest;
  export type Output = UpdateSettingsResult;
  export type Error =
    | ClientException
    | DirectoryDoesNotExistException
    | DirectoryUnavailableException
    | IncompatibleSettingsException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | UnsupportedSettingsException
    | CommonAwsError;
}

export declare namespace UpdateTrust {
  export type Input = UpdateTrustRequest;
  export type Output = UpdateTrustResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | CommonAwsError;
}

export declare namespace VerifyTrust {
  export type Input = VerifyTrustRequest;
  export type Output = VerifyTrustResult;
  export type Error =
    | ClientException
    | EntityDoesNotExistException
    | InvalidParameterException
    | ServiceException
    | UnsupportedOperationException
    | CommonAwsError;
}
