import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { mq as _mqClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "mq",
  version: "2017-11-27",
  protocol: "restJson1",
  sigV4ServiceName: "mq",
  endpointPrefix: "mq",
  operations: {
    "CreateBroker": "POST /v1/brokers",
    "CreateConfiguration": "POST /v1/configurations",
    "CreateTags": "POST /v1/tags/{ResourceArn}",
    "CreateUser": "POST /v1/brokers/{BrokerId}/users/{Username}",
    "DeleteBroker": "DELETE /v1/brokers/{BrokerId}",
    "DeleteConfiguration": "DELETE /v1/configurations/{ConfigurationId}",
    "DeleteTags": "DELETE /v1/tags/{ResourceArn}",
    "DeleteUser": "DELETE /v1/brokers/{BrokerId}/users/{Username}",
    "DescribeBroker": "GET /v1/brokers/{BrokerId}",
    "DescribeBrokerEngineTypes": "GET /v1/broker-engine-types",
    "DescribeBrokerInstanceOptions": "GET /v1/broker-instance-options",
    "DescribeConfiguration": "GET /v1/configurations/{ConfigurationId}",
    "DescribeConfigurationRevision": "GET /v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}",
    "DescribeUser": "GET /v1/brokers/{BrokerId}/users/{Username}",
    "ListBrokers": "GET /v1/brokers",
    "ListConfigurationRevisions": "GET /v1/configurations/{ConfigurationId}/revisions",
    "ListConfigurations": "GET /v1/configurations",
    "ListTags": "GET /v1/tags/{ResourceArn}",
    "ListUsers": "GET /v1/brokers/{BrokerId}/users",
    "Promote": "POST /v1/brokers/{BrokerId}/promote",
    "RebootBroker": "POST /v1/brokers/{BrokerId}/reboot",
    "UpdateBroker": "PUT /v1/brokers/{BrokerId}",
    "UpdateConfiguration": "PUT /v1/configurations/{ConfigurationId}",
    "UpdateUser": "PUT /v1/brokers/{BrokerId}/users/{Username}",
  },
} as const satisfies ServiceMetadata;

export type _mq = _mqClient;
export interface mq extends _mq {}
export const mq = class extends AWSServiceClient {
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
} as unknown as typeof _mqClient;
