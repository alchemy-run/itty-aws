import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CodeGuruReviewer as _CodeGuruReviewer } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CodeGuru Reviewer",
  version: "2019-09-19",
  protocol: "restJson1",
  sigV4ServiceName: "codeguru-reviewer",
  endpointPrefix: "codeguru-reviewer",
  operations: {
    AssociateRepository: "POST /associations",
    CreateCodeReview: "POST /codereviews",
    DescribeCodeReview: "GET /codereviews/{CodeReviewArn}",
    DescribeRecommendationFeedback: "GET /feedback/{CodeReviewArn}",
    DescribeRepositoryAssociation: "GET /associations/{AssociationArn}",
    DisassociateRepository: "DELETE /associations/{AssociationArn}",
    ListCodeReviews: "GET /codereviews",
    ListRecommendationFeedback:
      "GET /feedback/{CodeReviewArn}/RecommendationFeedback",
    ListRecommendations: "GET /codereviews/{CodeReviewArn}/Recommendations",
    ListRepositoryAssociations: "GET /associations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutRecommendationFeedback: "PUT /feedback",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CodeGuruReviewer = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CodeGuruReviewer;
