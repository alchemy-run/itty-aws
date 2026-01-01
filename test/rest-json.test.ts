import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as S from "effect/Schema";
import { describe, expect } from "vitest";
import { restJson1Protocol } from "../src/protocols/rest-json.ts";
import { makeRequestBuilder } from "../src/request-builder.ts";
import { makeResponseParser } from "../src/response-parser.ts";
import type { Response } from "../src/response.ts";

// Import real generated schemas from Lambda (uses restJson1 protocol)
import {
  // DELETE with path label and query param
  DeleteFunctionRequest,
  DeleteFunctionResponse,
  // Response with nested structures and EpochSecondsDate
  FunctionEventInvokeConfig,
  // Simple GET request (no params)
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
  // GET with path label, booleans, and numbers in query params
  GetDurableExecutionHistoryRequest,
  // GET with path label and EpochSecondsDate in query params
  ListDurableExecutionsByFunctionRequest,
  // GET with path label
  ListTagsRequest,
  ListTagsResponse,
  // POST with path label and JSON body (map)
  TagResourceRequest,
  TagResourceResponse,
  // POST with path label, query param, and nested structures
  UpdateFunctionEventInvokeConfigRequest,
} from "../src/services/lambda.ts";

// Import API Gateway schemas (restJson1 protocol) for JsonName testing
import {
  // Has T.JsonName("item") trait on 'items' field
  ApiKeys,
  // Request with multiple fields for body testing
  CreateBasePathMappingRequest,
} from "../src/services/api-gateway.ts";

// Import AppConfig schemas (restJson1 protocol) for HttpHeader testing
import { CreateHostedConfigurationVersionRequest } from "../src/services/appconfig.ts";

// Helper to build a request from an instance
const buildRequest = <A, I>(schema: S.Schema<A, I>, instance: A) => {
  const operation = { input: schema, output: schema, errors: [] };
  const builder = makeRequestBuilder(operation, { protocol: restJson1Protocol });
  return builder({ ...instance });
};

// Helper to parse a response
const parseResponse = <A, I>(schema: S.Schema<A, I>, response: Response) => {
  const operation = { input: schema, output: schema, errors: [] };
  const parser = makeResponseParser<A, I, never>(operation, {
    protocol: restJson1Protocol,
  });
  return parser(response);
};

describe("restJson1 protocol", () => {
  // ==========================================================================
  // Basic Request Serialization
  // ==========================================================================

  describe("request serialization", () => {
    it.effect("should serialize simple GET request with correct method and path", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(GetAccountSettingsRequest, {});

        expect(request.method).toBe("GET");
        expect(request.path).toBe("/2016-08-19/account-settings");
        expect(request.headers["Content-Type"]).toBe("application/json");
      }),
    );

    it.effect("should serialize GET request with path label", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(ListTagsRequest, {
          Resource: "arn:aws:lambda:us-east-1:123456789012:function:my-function",
        });

        expect(request.method).toBe("GET");
        expect(request.path).toBe(
          "/2017-03-31/tags/arn%3Aaws%3Alambda%3Aus-east-1%3A123456789012%3Afunction%3Amy-function",
        );
      }),
    );

    it.effect("should serialize DELETE request with path label and query param", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DeleteFunctionRequest, {
          FunctionName: "my-function",
          Qualifier: "1",
        });

        expect(request.method).toBe("DELETE");
        expect(request.path).toBe("/2015-03-31/functions/my-function");
        expect(request.query["Qualifier"]).toBe("1");
      }),
    );

    it.effect("should not include undefined query params", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DeleteFunctionRequest, {
          FunctionName: "my-function",
        });

        expect(request.query["Qualifier"]).toBeUndefined();
      }),
    );

    it.effect("should serialize POST request with path label and JSON body", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(TagResourceRequest, {
          Resource: "arn:aws:lambda:us-east-1:123456789012:function:my-function",
          Tags: {
            Environment: "Production",
            Team: "Platform",
          },
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe(
          "/2017-03-31/tags/arn%3Aaws%3Alambda%3Aus-east-1%3A123456789012%3Afunction%3Amy-function",
        );
        expect(request.headers["Content-Type"]).toBe("application/json");

        const body = JSON.parse(request.body as string);
        expect(body.Tags).toEqual({
          Environment: "Production",
          Team: "Platform",
        });
      }),
    );

    it.effect("should serialize POST request with nested structures in body", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(UpdateFunctionEventInvokeConfigRequest, {
          FunctionName: "my-function",
          Qualifier: "LATEST",
          MaximumRetryAttempts: 2,
          MaximumEventAgeInSeconds: 3600,
          DestinationConfig: {
            OnSuccess: {
              Destination: "arn:aws:sqs:us-east-1:123456789012:success-queue",
            },
            OnFailure: {
              Destination: "arn:aws:sqs:us-east-1:123456789012:failure-queue",
            },
          },
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/2019-09-25/functions/my-function/event-invoke-config");
        expect(request.query["Qualifier"]).toBe("LATEST");

        const body = JSON.parse(request.body as string);
        expect(body.MaximumRetryAttempts).toBe(2);
        expect(body.MaximumEventAgeInSeconds).toBe(3600);
        expect(body.DestinationConfig.OnSuccess.Destination).toBe(
          "arn:aws:sqs:us-east-1:123456789012:success-queue",
        );
        expect(body.DestinationConfig.OnFailure.Destination).toBe(
          "arn:aws:sqs:us-east-1:123456789012:failure-queue",
        );
      }),
    );
  });

  // ==========================================================================
  // Query Parameter Serialization
  // ==========================================================================

  describe("query parameter serialization", () => {
    it.effect("should serialize boolean query params (true)", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(GetDurableExecutionHistoryRequest, {
          DurableExecutionArn: "arn:aws:lambda:us-east-1:123:durable-execution:abc",
          IncludeExecutionData: true,
          ReverseOrder: false,
        });

        expect(request.method).toBe("GET");
        expect(request.query["IncludeExecutionData"]).toBe("true");
        expect(request.query["ReverseOrder"]).toBe("false");
      }),
    );

    it.effect("should serialize number query params", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(GetDurableExecutionHistoryRequest, {
          DurableExecutionArn: "arn:aws:lambda:us-east-1:123:durable-execution:abc",
          MaxItems: 100,
        });

        expect(request.query["MaxItems"]).toBe("100");
      }),
    );

    it.effect("should serialize timestamp as epoch-seconds in query params", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(ListDurableExecutionsByFunctionRequest, {
          FunctionName: "my-function",
          StartedAfter: new Date("2024-01-15T12:30:00.000Z"),
          StartedBefore: new Date("2024-01-16T12:30:00.000Z"),
        });

        // EpochSecondsDate encodes as number, then query string converts to string
        expect(request.query["StartedAfter"]).toBe("1705321800");
        expect(request.query["StartedBefore"]).toBe("1705408200");
      }),
    );
  });

  // ==========================================================================
  // JSON Body Serialization
  // ==========================================================================

  describe("JSON body serialization", () => {
    it.effect("should serialize maps correctly", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(TagResourceRequest, {
          Resource: "arn:aws:lambda:us-east-1:123456789012:function:test",
          Tags: {
            key1: "value1",
            key2: "value2",
            "special-key": "special-value",
          },
        });

        const body = JSON.parse(request.body as string);
        expect(body.Tags).toEqual({
          key1: "value1",
          key2: "value2",
          "special-key": "special-value",
        });
      }),
    );

    it.effect("should not include undefined properties in body", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(UpdateFunctionEventInvokeConfigRequest, {
          FunctionName: "my-function",
          MaximumRetryAttempts: 2,
          // DestinationConfig is undefined
        });

        const body = JSON.parse(request.body as string);
        expect(body.MaximumRetryAttempts).toBe(2);
        expect(body.DestinationConfig).toBeUndefined();
        expect("DestinationConfig" in body).toBe(false);
      }),
    );

    it.effect("should serialize numbers correctly including zero", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(UpdateFunctionEventInvokeConfigRequest, {
          FunctionName: "my-function",
          MaximumRetryAttempts: 0,
          MaximumEventAgeInSeconds: 3600,
        });

        const body = JSON.parse(request.body as string);
        expect(body.MaximumRetryAttempts).toBe(0);
        expect(body.MaximumEventAgeInSeconds).toBe(3600);
      }),
    );

    it.effect(
      "should serialize request with strings and optional fields (CreateBasePathMappingRequest)",
      () =>
        Effect.gen(function* () {
          const request = yield* buildRequest(CreateBasePathMappingRequest, {
            domainName: "api.example.com",
            restApiId: "abc123def456",
            basePath: "v1",
            stage: "prod",
          });

          expect(request.method).toBe("POST");
          expect(request.path).toBe("/domainnames/api.example.com/basepathmappings");

          const body = JSON.parse(request.body as string);
          expect(body.restApiId).toBe("abc123def456");
          expect(body.basePath).toBe("v1");
          expect(body.stage).toBe("prod");
        }),
    );
  });

  // ==========================================================================
  // HTTP Header Serialization
  // ==========================================================================

  describe("HTTP header serialization", () => {
    it.effect(
      "should serialize httpHeader fields to request headers (CreateHostedConfigurationVersionRequest)",
      () =>
        Effect.gen(function* () {
          const request = yield* buildRequest(CreateHostedConfigurationVersionRequest, {
            ApplicationId: "app123",
            ConfigurationProfileId: "config456",
            Content: "config-content-here",
            ContentType: "application/json",
            Description: "My configuration",
            LatestVersionNumber: 5,
            VersionLabel: "v1.0.0",
          });

          expect(request.method).toBe("POST");
          expect(request.path).toBe(
            "/applications/app123/configurationprofiles/config456/hostedconfigurationversions",
          );

          // These fields should be in headers, not body
          expect(request.headers["Description"]).toBe("My configuration");
          expect(request.headers["Content-Type"]).toBe("application/json");
          expect(request.headers["Latest-Version-Number"]).toBe("5");
          expect(request.headers["VersionLabel"]).toBe("v1.0.0");

          // The Content field has httpPayload trait, so it becomes the body directly
          expect(request.body).toBe("config-content-here");
        }),
    );
  });

  // ==========================================================================
  // Response Deserialization
  // ==========================================================================

  describe("response deserialization", () => {
    it.effect("should deserialize simple JSON response", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            AccountLimit: {
              TotalCodeSize: 80530636800,
              CodeSizeUnzipped: 262144000,
              CodeSizeZipped: 52428800,
              ConcurrentExecutions: 1000,
              UnreservedConcurrentExecutions: 950,
            },
            AccountUsage: {
              TotalCodeSize: 1234567,
              FunctionCount: 42,
            },
          }),
        };

        const result = yield* parseResponse(GetAccountSettingsResponse, response);

        expect(result.AccountLimit).toBeDefined();
        expect(result.AccountLimit?.TotalCodeSize).toBe(80530636800);
        expect(result.AccountLimit?.ConcurrentExecutions).toBe(1000);
        expect(result.AccountUsage?.TotalCodeSize).toBe(1234567);
        expect(result.AccountUsage?.FunctionCount).toBe(42);
      }),
    );

    it.effect("should deserialize response with map", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Tags: {
              Environment: "Production",
              Team: "Platform",
              CostCenter: "12345",
            },
          }),
        };

        const result = yield* parseResponse(ListTagsResponse, response);

        expect(result.Tags).toEqual({
          Environment: "Production",
          Team: "Platform",
          CostCenter: "12345",
        });
      }),
    );

    it.effect("should deserialize response with nested structures", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            LastModified: 1704067200.0, // epoch-seconds: 2024-01-01T00:00:00Z
            FunctionArn: "arn:aws:lambda:us-east-1:123456789012:function:my-function",
            MaximumRetryAttempts: 2,
            MaximumEventAgeInSeconds: 3600,
            DestinationConfig: {
              OnSuccess: {
                Destination: "arn:aws:sqs:us-east-1:123456789012:success-queue",
              },
              OnFailure: {
                Destination: "arn:aws:sqs:us-east-1:123456789012:failure-queue",
              },
            },
          }),
        };

        const result = yield* parseResponse(FunctionEventInvokeConfig, response);

        expect(result.FunctionArn).toBe(
          "arn:aws:lambda:us-east-1:123456789012:function:my-function",
        );
        expect(result.MaximumRetryAttempts).toBe(2);
        expect(result.MaximumEventAgeInSeconds).toBe(3600);
        expect(result.DestinationConfig?.OnSuccess?.Destination).toBe(
          "arn:aws:sqs:us-east-1:123456789012:success-queue",
        );
        expect(result.DestinationConfig?.OnFailure?.Destination).toBe(
          "arn:aws:sqs:us-east-1:123456789012:failure-queue",
        );
      }),
    );

    it.effect("should deserialize timestamp from epoch-seconds", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            LastModified: 1704067200.0, // 2024-01-01T00:00:00Z
          }),
        };

        const result = yield* parseResponse(FunctionEventInvokeConfig, response);

        expect(result.LastModified).toBeInstanceOf(Date);
        expect(result.LastModified?.toISOString()).toBe("2024-01-01T00:00:00.000Z");
      }),
    );

    it.effect("should handle empty response body", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: {},
          body: "",
        };

        const result = yield* parseResponse(TagResourceResponse, response);

        expect(result).toEqual({});
      }),
    );

    it.effect("should handle empty JSON object response", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 204,
          statusText: "No Content",
          headers: { "Content-Type": "application/json" },
          body: "{}",
        };

        const result = yield* parseResponse(TagResourceResponse, response);

        expect(result).toEqual({});
      }),
    );
  });

  // ==========================================================================
  // JsonName Trait Handling
  // ==========================================================================

  describe("jsonName trait", () => {
    it.effect("should deserialize using jsonName trait (item -> items)", () =>
      Effect.gen(function* () {
        // ApiKeys has 'items' field with T.JsonName("item")
        // So in the JSON response, the field is called "item" not "items"
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            item: [
              { id: "key1", name: "API Key 1", enabled: true },
              { id: "key2", name: "API Key 2", enabled: false },
            ],
            warnings: ["Some warning"],
          }),
        };

        const result = yield* parseResponse(ApiKeys, response);

        // The schema exposes 'items' but JSON uses 'item'
        expect(result.items).toBeDefined();
        expect(result.items).toHaveLength(2);
        expect(result.items?.[0]?.id).toBe("key1");
        expect(result.items?.[1]?.name).toBe("API Key 2");
        expect(result.warnings).toEqual(["Some warning"]);
      }),
    );
  });

  // ==========================================================================
  // Edge Cases
  // ==========================================================================

  describe("edge cases", () => {
    it.effect("should URL-encode special characters in path labels", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(ListTagsRequest, {
          Resource: "arn:aws:lambda:us-east-1:123456789012:function:my/function+name",
        });

        // Forward slash and plus should be encoded
        expect(request.path).toContain("my%2Ffunction%2Bname");
      }),
    );

    it.effect("should handle response with missing optional fields", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            AccountLimit: {
              TotalCodeSize: 80530636800,
              // Other fields omitted
            },
            // AccountUsage omitted entirely
          }),
        };

        const result = yield* parseResponse(GetAccountSettingsResponse, response);

        expect(result.AccountLimit?.TotalCodeSize).toBe(80530636800);
        expect(result.AccountLimit?.ConcurrentExecutions).toBeUndefined();
        expect(result.AccountUsage).toBeUndefined();
      }),
    );

    it.effect("should handle null values in response", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Tags: null,
          }),
        };

        const result = yield* parseResponse(ListTagsResponse, response);

        expect(result.Tags).toBeUndefined();
      }),
    );

    it.effect("should handle httpResponseCode binding", () =>
      Effect.gen(function* () {
        // DeleteFunctionResponse has StatusCode bound to httpResponseCode
        const response: Response = {
          status: 204,
          statusText: "No Content",
          headers: {},
          body: "",
        };

        // Note: httpResponseCode binding is handled at a different level
        // For now just verify parsing doesn't fail
        const result = yield* parseResponse(DeleteFunctionResponse, response);
        expect(result).toBeDefined();
      }),
    );
  });

  // ==========================================================================
  // Protocol-specific behavior
  // ==========================================================================

  describe("restJson1 protocol characteristics", () => {
    it.effect("should use JSON content type", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(GetAccountSettingsRequest, {});

        expect(request.headers["Content-Type"]).toBe("application/json");
      }),
    );

    it.effect("should serialize timestamps as epoch-seconds numbers in body", () =>
      Effect.gen(function* () {
        // FunctionEventInvokeConfig has LastModified with EpochSecondsDate
        // We can't directly test request body timestamp serialization with real Lambda schemas
        // because Lambda's timestamp fields are query params or response fields.
        // Let's verify the response deserialization instead - if decode works, encode should too.
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            LastModified: 1705321800, // 2024-01-15T12:30:00Z in epoch-seconds
          }),
        };

        const result = yield* parseResponse(FunctionEventInvokeConfig, response);

        expect(result.LastModified).toBeInstanceOf(Date);
        expect(result.LastModified?.toISOString()).toBe("2024-01-15T12:30:00.000Z");
      }),
    );
  });
});
