import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SecurityLake as _SecurityLakeClient } from "./types.ts";

export * from "./types.ts";

export {
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

// Service metadata
const metadata = {
  sdkId: "SecurityLake",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "securitylake",
  operations: {
    CreateDataLakeExceptionSubscription:
      "POST /v1/datalake/exceptions/subscription",
    DeleteDataLakeExceptionSubscription:
      "DELETE /v1/datalake/exceptions/subscription",
    DeregisterDataLakeDelegatedAdministrator: "DELETE /v1/datalake/delegate",
    GetDataLakeExceptionSubscription:
      "GET /v1/datalake/exceptions/subscription",
    ListDataLakeExceptions: "POST /v1/datalake/exceptions",
    ListTagsForResource: "GET /v1/tags/{resourceArn}",
    RegisterDataLakeDelegatedAdministrator: "POST /v1/datalake/delegate",
    TagResource: "POST /v1/tags/{resourceArn}",
    UntagResource: "DELETE /v1/tags/{resourceArn}",
    UpdateDataLakeExceptionSubscription:
      "PUT /v1/datalake/exceptions/subscription",
    CreateAwsLogSource: "POST /v1/datalake/logsources/aws",
    CreateCustomLogSource: "POST /v1/datalake/logsources/custom",
    CreateDataLake: "POST /v1/datalake",
    CreateDataLakeOrganizationConfiguration:
      "POST /v1/datalake/organization/configuration",
    CreateSubscriber: "POST /v1/subscribers",
    CreateSubscriberNotification:
      "POST /v1/subscribers/{subscriberId}/notification",
    DeleteAwsLogSource: "POST /v1/datalake/logsources/aws/delete",
    DeleteCustomLogSource: "DELETE /v1/datalake/logsources/custom/{sourceName}",
    DeleteDataLake: "POST /v1/datalake/delete",
    DeleteDataLakeOrganizationConfiguration:
      "POST /v1/datalake/organization/configuration/delete",
    DeleteSubscriber: "DELETE /v1/subscribers/{subscriberId}",
    DeleteSubscriberNotification:
      "DELETE /v1/subscribers/{subscriberId}/notification",
    GetDataLakeOrganizationConfiguration:
      "GET /v1/datalake/organization/configuration",
    GetDataLakeSources: "POST /v1/datalake/sources",
    GetSubscriber: "GET /v1/subscribers/{subscriberId}",
    ListDataLakes: "GET /v1/datalakes",
    ListLogSources: "POST /v1/datalake/logsources/list",
    ListSubscribers: "GET /v1/subscribers",
    UpdateDataLake: "PUT /v1/datalake",
    UpdateSubscriber: "PUT /v1/subscribers/{subscriberId}",
    UpdateSubscriberNotification:
      "PUT /v1/subscribers/{subscriberId}/notification",
  },
} as const satisfies ServiceMetadata;

export type _SecurityLake = _SecurityLakeClient;
export interface SecurityLake extends _SecurityLake {}
export const SecurityLake = class extends AWSServiceClient {
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
} as unknown as typeof _SecurityLakeClient;
