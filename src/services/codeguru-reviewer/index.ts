import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CodeGuruReviewer as _CodeGuruReviewerClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CodeGuru Reviewer",
  version: "2019-09-19",
  protocol: "restJson1",
  sigV4ServiceName: "codeguru-reviewer",
  endpointPrefix: "codeguru-reviewer",
  operations: {
    "AssociateRepository": "POST /associations",
    "CreateCodeReview": "POST /codereviews",
    "DescribeCodeReview": "GET /codereviews/{CodeReviewArn}",
    "DescribeRecommendationFeedback": "GET /feedback/{CodeReviewArn}",
    "DescribeRepositoryAssociation": "GET /associations/{AssociationArn}",
    "DisassociateRepository": "DELETE /associations/{AssociationArn}",
    "ListCodeReviews": "GET /codereviews",
    "ListRecommendationFeedback": "GET /feedback/{CodeReviewArn}/RecommendationFeedback",
    "ListRecommendations": "GET /codereviews/{CodeReviewArn}/Recommendations",
    "ListRepositoryAssociations": "GET /associations",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "PutRecommendationFeedback": "PUT /feedback",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

export type _CodeGuruReviewer = _CodeGuruReviewerClient;
export interface CodeGuruReviewer extends _CodeGuruReviewer {}
export const CodeGuruReviewer = class extends AWSServiceClient {
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
} as unknown as typeof _CodeGuruReviewerClient;
