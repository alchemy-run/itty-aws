import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { S3Control as _S3ControlClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "S3 Control",
  version: "2018-08-20",
  protocol: "restXml",
  sigV4ServiceName: "s3",
  endpointPrefix: "s3-control",
  operations: {
    "AssociateAccessGrantsIdentityCenter": {
      http: "POST /v20180820/accessgrantsinstance/identitycenter",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateAccessGrant": {
      http: "POST /v20180820/accessgrantsinstance/grant",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateAccessGrantsInstance": {
      http: "POST /v20180820/accessgrantsinstance",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateAccessGrantsLocation": {
      http: "POST /v20180820/accessgrantsinstance/location",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateAccessPoint": {
      http: "PUT /v20180820/accesspoint/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateAccessPointForObjectLambda": {
      http: "PUT /v20180820/accesspointforobjectlambda/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateBucket": {
      http: "PUT /v20180820/bucket/{Bucket}",
      inputTraits: {
        "ACL": "x-amz-acl",
        "CreateBucketConfiguration": "httpPayload",
        "GrantFullControl": "x-amz-grant-full-control",
        "GrantRead": "x-amz-grant-read",
        "GrantReadACP": "x-amz-grant-read-acp",
        "GrantWrite": "x-amz-grant-write",
        "GrantWriteACP": "x-amz-grant-write-acp",
        "ObjectLockEnabledForBucket": "x-amz-bucket-object-lock-enabled",
        "OutpostId": "x-amz-outpost-id",
      },
      outputTraits: {
        "Location": "Location",
      },
    },
    "CreateJob": {
      http: "POST /v20180820/jobs",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateMultiRegionAccessPoint": {
      http: "POST /v20180820/async-requests/mrap/create",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "CreateStorageLensGroup": {
      http: "POST /v20180820/storagelensgroup",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessGrant": {
      http: "DELETE /v20180820/accessgrantsinstance/grant/{AccessGrantId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessGrantsInstance": {
      http: "DELETE /v20180820/accessgrantsinstance",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessGrantsInstanceResourcePolicy": {
      http: "DELETE /v20180820/accessgrantsinstance/resourcepolicy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessGrantsLocation": {
      http: "DELETE /v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessPoint": {
      http: "DELETE /v20180820/accesspoint/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessPointForObjectLambda": {
      http: "DELETE /v20180820/accesspointforobjectlambda/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessPointPolicy": {
      http: "DELETE /v20180820/accesspoint/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessPointPolicyForObjectLambda": {
      http: "DELETE /v20180820/accesspointforobjectlambda/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteAccessPointScope": {
      http: "DELETE /v20180820/accesspoint/{Name}/scope",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteBucket": {
      http: "DELETE /v20180820/bucket/{Bucket}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteBucketLifecycleConfiguration": {
      http: "DELETE /v20180820/bucket/{Bucket}/lifecycleconfiguration",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteBucketPolicy": {
      http: "DELETE /v20180820/bucket/{Bucket}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteBucketReplication": {
      http: "DELETE /v20180820/bucket/{Bucket}/replication",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteBucketTagging": {
      http: "DELETE /v20180820/bucket/{Bucket}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteJobTagging": {
      http: "DELETE /v20180820/jobs/{JobId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteMultiRegionAccessPoint": {
      http: "POST /v20180820/async-requests/mrap/delete",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeletePublicAccessBlock": {
      http: "DELETE /v20180820/configuration/publicAccessBlock",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteStorageLensConfiguration": {
      http: "DELETE /v20180820/storagelens/{ConfigId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteStorageLensConfigurationTagging": {
      http: "DELETE /v20180820/storagelens/{ConfigId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DeleteStorageLensGroup": {
      http: "DELETE /v20180820/storagelensgroup/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DescribeJob": {
      http: "GET /v20180820/jobs/{JobId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DescribeMultiRegionAccessPointOperation": {
      http: "GET /v20180820/async-requests/mrap/{RequestTokenARN+}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "DissociateAccessGrantsIdentityCenter": {
      http: "DELETE /v20180820/accessgrantsinstance/identitycenter",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessGrant": {
      http: "GET /v20180820/accessgrantsinstance/grant/{AccessGrantId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessGrantsInstance": {
      http: "GET /v20180820/accessgrantsinstance",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessGrantsInstanceForPrefix": {
      http: "GET /v20180820/accessgrantsinstance/prefix",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessGrantsInstanceResourcePolicy": {
      http: "GET /v20180820/accessgrantsinstance/resourcepolicy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessGrantsLocation": {
      http: "GET /v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPoint": {
      http: "GET /v20180820/accesspoint/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointConfigurationForObjectLambda": {
      http: "GET /v20180820/accesspointforobjectlambda/{Name}/configuration",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointForObjectLambda": {
      http: "GET /v20180820/accesspointforobjectlambda/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointPolicy": {
      http: "GET /v20180820/accesspoint/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointPolicyForObjectLambda": {
      http: "GET /v20180820/accesspointforobjectlambda/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointPolicyStatus": {
      http: "GET /v20180820/accesspoint/{Name}/policyStatus",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointPolicyStatusForObjectLambda": {
      http: "GET /v20180820/accesspointforobjectlambda/{Name}/policyStatus",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetAccessPointScope": {
      http: "GET /v20180820/accesspoint/{Name}/scope",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucket": {
      http: "GET /v20180820/bucket/{Bucket}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucketLifecycleConfiguration": {
      http: "GET /v20180820/bucket/{Bucket}/lifecycleconfiguration",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucketPolicy": {
      http: "GET /v20180820/bucket/{Bucket}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucketReplication": {
      http: "GET /v20180820/bucket/{Bucket}/replication",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucketTagging": {
      http: "GET /v20180820/bucket/{Bucket}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetBucketVersioning": {
      http: "GET /v20180820/bucket/{Bucket}/versioning",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetDataAccess": {
      http: "GET /v20180820/accessgrantsinstance/dataaccess",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetJobTagging": {
      http: "GET /v20180820/jobs/{JobId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetMultiRegionAccessPoint": {
      http: "GET /v20180820/mrap/instances/{Name+}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetMultiRegionAccessPointPolicy": {
      http: "GET /v20180820/mrap/instances/{Name+}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetMultiRegionAccessPointPolicyStatus": {
      http: "GET /v20180820/mrap/instances/{Name+}/policystatus",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetMultiRegionAccessPointRoutes": {
      http: "GET /v20180820/mrap/instances/{Mrap+}/routes",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetPublicAccessBlock": {
      http: "GET /v20180820/configuration/publicAccessBlock",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
      outputTraits: {
        "PublicAccessBlockConfiguration": "httpPayload",
      },
    },
    "GetStorageLensConfiguration": {
      http: "GET /v20180820/storagelens/{ConfigId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
      outputTraits: {
        "StorageLensConfiguration": "httpPayload",
      },
    },
    "GetStorageLensConfigurationTagging": {
      http: "GET /v20180820/storagelens/{ConfigId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "GetStorageLensGroup": {
      http: "GET /v20180820/storagelensgroup/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
      outputTraits: {
        "StorageLensGroup": "httpPayload",
      },
    },
    "ListAccessGrants": {
      http: "GET /v20180820/accessgrantsinstance/grants",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListAccessGrantsInstances": {
      http: "GET /v20180820/accessgrantsinstances",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListAccessGrantsLocations": {
      http: "GET /v20180820/accessgrantsinstance/locations",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListAccessPoints": {
      http: "GET /v20180820/accesspoint",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListAccessPointsForDirectoryBuckets": {
      http: "GET /v20180820/accesspointfordirectory",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListAccessPointsForObjectLambda": {
      http: "GET /v20180820/accesspointforobjectlambda",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListCallerAccessGrants": {
      http: "GET /v20180820/accessgrantsinstance/caller/grants",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListJobs": {
      http: "GET /v20180820/jobs",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListMultiRegionAccessPoints": {
      http: "GET /v20180820/mrap/instances",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListRegionalBuckets": {
      http: "GET /v20180820/bucket",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "OutpostId": "x-amz-outpost-id",
      },
    },
    "ListStorageLensConfigurations": {
      http: "GET /v20180820/storagelens",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListStorageLensGroups": {
      http: "GET /v20180820/storagelensgroup",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "ListTagsForResource": {
      http: "GET /v20180820/tags/{ResourceArn+}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutAccessGrantsInstanceResourcePolicy": {
      http: "PUT /v20180820/accessgrantsinstance/resourcepolicy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutAccessPointConfigurationForObjectLambda": {
      http: "PUT /v20180820/accesspointforobjectlambda/{Name}/configuration",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutAccessPointPolicy": {
      http: "PUT /v20180820/accesspoint/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutAccessPointPolicyForObjectLambda": {
      http: "PUT /v20180820/accesspointforobjectlambda/{Name}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutAccessPointScope": {
      http: "PUT /v20180820/accesspoint/{Name}/scope",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutBucketLifecycleConfiguration": {
      http: "PUT /v20180820/bucket/{Bucket}/lifecycleconfiguration",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "LifecycleConfiguration": "httpPayload",
      },
    },
    "PutBucketPolicy": {
      http: "PUT /v20180820/bucket/{Bucket}/policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "ConfirmRemoveSelfBucketAccess": "x-amz-confirm-remove-self-bucket-access",
      },
    },
    "PutBucketReplication": {
      http: "PUT /v20180820/bucket/{Bucket}/replication",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "ReplicationConfiguration": "httpPayload",
      },
    },
    "PutBucketTagging": {
      http: "PUT /v20180820/bucket/{Bucket}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "Tagging": "httpPayload",
      },
    },
    "PutBucketVersioning": {
      http: "PUT /v20180820/bucket/{Bucket}/versioning",
      inputTraits: {
        "AccountId": "x-amz-account-id",
        "MFA": "x-amz-mfa",
        "VersioningConfiguration": "httpPayload",
      },
    },
    "PutJobTagging": {
      http: "PUT /v20180820/jobs/{JobId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutMultiRegionAccessPointPolicy": {
      http: "POST /v20180820/async-requests/mrap/put-policy",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutPublicAccessBlock": {
      http: "PUT /v20180820/configuration/publicAccessBlock",
      inputTraits: {
        "PublicAccessBlockConfiguration": "httpPayload",
        "AccountId": "x-amz-account-id",
      },
    },
    "PutStorageLensConfiguration": {
      http: "PUT /v20180820/storagelens/{ConfigId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "PutStorageLensConfigurationTagging": {
      http: "PUT /v20180820/storagelens/{ConfigId}/tagging",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "SubmitMultiRegionAccessPointRoutes": {
      http: "PATCH /v20180820/mrap/instances/{Mrap+}/routes",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "TagResource": {
      http: "POST /v20180820/tags/{ResourceArn+}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "UntagResource": {
      http: "DELETE /v20180820/tags/{ResourceArn+}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "UpdateAccessGrantsLocation": {
      http: "PUT /v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "UpdateJobPriority": {
      http: "POST /v20180820/jobs/{JobId}/priority",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "UpdateJobStatus": {
      http: "POST /v20180820/jobs/{JobId}/status",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
    "UpdateStorageLensGroup": {
      http: "PUT /v20180820/storagelensgroup/{Name}",
      inputTraits: {
        "AccountId": "x-amz-account-id",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _S3Control = _S3ControlClient;
export interface S3Control extends _S3Control {}
export const S3Control = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestXmlHandler());
  }
} as unknown as typeof _S3ControlClient;
