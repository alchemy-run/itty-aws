import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as S from "effect/Schema";
import { describe, expect } from "vitest";
import { awsJson1_1Protocol } from "../../src/protocols/aws-json.ts";
import { makeRequestBuilder } from "../../src/request-builder.ts";
import { makeResponseParser } from "../../src/response-parser.ts";
import type { Response } from "../../src/response.ts";

// Import real generated schemas from KMS (uses awsJson1_1 protocol)
import {
  CancelKeyDeletionRequest,
  ConnectCustomKeyStoreRequest,
  ConnectCustomKeyStoreResponse,
  CreateAliasRequest,
  CreateAliasResponse,
  DeleteAliasRequest,
  DescribeKeyRequest,
  DisableKeyRequest,
  DisableKeyResponse,
  EncryptRequest,
  GenerateDataKeyRequest,
} from "../../src/services/kms.ts";

// Import Redshift Serverless schemas for JsonName testing (awsJson1_1 protocol)
// This service has jsonName traits: token -> "Token", expirationTime -> "ExpirationTime"
import { GetIdentityCenterAuthTokenResponse } from "../../src/services/redshift-serverless.ts";

// Helper to build a request from an instance
const buildRequest = <A, I>(schema: S.Schema<A, I>, instance: A) => {
  const operation = { input: schema, output: schema, errors: [] };
  const builder = makeRequestBuilder(operation, { protocol: awsJson1_1Protocol });
  return builder({ ...instance });
};

// Helper to parse a response
const parseResponse = <A, I>(schema: S.Schema<A, I>, response: Response) => {
  const operation = { input: schema, output: schema, errors: [] };
  const parser = makeResponseParser<A, I, never>(operation, {
    protocol: awsJson1_1Protocol,
  });
  return parser(response);
};

describe("awsJson1_1 protocol", () => {
  // ==========================================================================
  // Basic Request Serialization
  // ==========================================================================

  describe("request serialization", () => {
    it.effect("should serialize with correct method, path, and Content-Type 1.1", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(CancelKeyDeletionRequest, {
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.query).toEqual({});
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.CancelKeyDeletion",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });
      }),
    );

    it.effect("should serialize empty input as empty JSON object", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(ConnectCustomKeyStoreRequest, {
          CustomKeyStoreId: "cks-1234567890abcdef0",
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.ConnectCustomKeyStore",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          CustomKeyStoreId: "cks-1234567890abcdef0",
        });
      }),
    );

    it.effect("should serialize multiple string parameters", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(CreateAliasRequest, {
          AliasName: "alias/my-key",
          TargetKeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.CreateAlias",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          AliasName: "alias/my-key",
          TargetKeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });
      }),
    );

    it.effect("should omit undefined optional parameters", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DescribeKeyRequest, {
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.DescribeKey",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        });
      }),
    );

    it.effect("should serialize with list parameters", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DescribeKeyRequest, {
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
          GrantTokens: ["token1", "token2"],
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.DescribeKey",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
          GrantTokens: ["token1", "token2"],
        });
      }),
    );
  });

  // ==========================================================================
  // Map Serialization
  // ==========================================================================

  describe("map serialization", () => {
    it.effect("should serialize EncryptRequest with EncryptionContext map", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(EncryptRequest, {
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
          Plaintext: new Uint8Array([1, 2, 3, 4]),
          EncryptionContext: {
            purpose: "test",
            department: "engineering",
          },
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.Encrypt",
        });

        const body = JSON.parse(request.body as string);
        expect(body.KeyId).toBe("1234abcd-12ab-34cd-56ef-1234567890ab");
        expect(body.EncryptionContext).toEqual({
          purpose: "test",
          department: "engineering",
        });
        // Blob should be base64 encoded
        expect(body.Plaintext).toBe("AQIDBA==");
      }),
    );
  });

  // ==========================================================================
  // Blob Serialization
  // ==========================================================================

  describe("blob serialization", () => {
    it.effect("should serialize blob as base64", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(EncryptRequest, {
          KeyId: "key-id",
          Plaintext: new Uint8Array([72, 101, 108, 108, 111]), // "Hello"
        });

        const body = JSON.parse(request.body as string);
        expect(body.Plaintext).toBe("SGVsbG8="); // base64 of "Hello"
      }),
    );
  });

  // ==========================================================================
  // Response Deserialization
  // ==========================================================================

  describe("response deserialization", () => {
    it.effect("should deserialize empty response", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/x-amz-json-1.1" },
          body: "{}",
        };

        const result = yield* parseResponse(ConnectCustomKeyStoreResponse, response);

        expect(result).toEqual({});
      }),
    );

    it.effect("should deserialize CreateAliasResponse (empty)", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/x-amz-json-1.1" },
          body: "{}",
        };

        const result = yield* parseResponse(CreateAliasResponse, response);

        expect(result).toEqual({});
      }),
    );

    it.effect("should deserialize DisableKeyResponse (empty)", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/x-amz-json-1.1" },
          body: "{}",
        };

        const result = yield* parseResponse(DisableKeyResponse, response);

        expect(result).toEqual({});
      }),
    );

    it.effect("should handle empty body string", () =>
      Effect.gen(function* () {
        const response: Response = {
          status: 200,
          statusText: "OK",
          headers: {},
          body: "",
        };

        const result = yield* parseResponse(DisableKeyResponse, response);

        expect(result).toEqual({});
      }),
    );
  });

  // ==========================================================================
  // Protocol Characteristics (differences from 1.0)
  // ==========================================================================

  describe("awsJson1_1 protocol characteristics", () => {
    it.effect("should always POST to /", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DeleteAliasRequest, {
          AliasName: "alias/my-key",
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
      }),
    );

    it.effect("should use application/x-amz-json-1.1 content type (NOT 1.0)", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DeleteAliasRequest, {
          AliasName: "alias/my-key",
        });

        expect(request.headers["Content-Type"]).toBe("application/x-amz-json-1.1");
        expect(request.headers["Content-Type"]).not.toBe("application/x-amz-json-1.0");
      }),
    );

    it.effect("should have no query parameters", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DisableKeyRequest, {
          KeyId: "key-id",
        });

        expect(Object.keys(request.query).length).toBe(0);
      }),
    );

    it.effect("should include X-Amz-Target header", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(DisableKeyRequest, {
          KeyId: "key-id",
        });

        expect(request.headers["X-Amz-Target"]).toBe("kms.DisableKey");
      }),
    );
  });

  // ==========================================================================
  // Complex Inputs
  // ==========================================================================

  describe("complex inputs", () => {
    it.effect("should serialize GenerateDataKeyRequest with all options", () =>
      Effect.gen(function* () {
        const request = yield* buildRequest(GenerateDataKeyRequest, {
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
          KeySpec: "AES_256",
          EncryptionContext: {
            purpose: "encryption",
          },
          GrantTokens: ["grant-token-1"],
        });

        expect(request.method).toBe("POST");
        expect(request.path).toBe("/");
        expect(request.headers).toMatchObject({
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "kms.GenerateDataKey",
        });
        expect(JSON.parse(request.body as string)).toEqual({
          KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
          KeySpec: "AES_256",
          EncryptionContext: {
            purpose: "encryption",
          },
          GrantTokens: ["grant-token-1"],
        });
      }),
    );
  });

  // ==========================================================================
  // JsonName Trait Handling (awsJson1_1)
  // ==========================================================================

  describe("jsonName trait", () => {
    it.effect(
      "should deserialize response with camelCase -> PascalCase jsonName (redshift-serverless)",
      () =>
        Effect.gen(function* () {
          // GetIdentityCenterAuthTokenResponse has:
          // - token: S.optional(S.String).pipe(T.JsonName("Token"))
          // - expirationTime: S.optional(S.Date...).pipe(T.JsonName("ExpirationTime"))
          // Wire format uses PascalCase, internal schema uses camelCase
          const response: Response = {
            status: 200,
            statusText: "OK",
            headers: { "Content-Type": "application/x-amz-json-1.1" },
            body: JSON.stringify({
              Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              ExpirationTime: "2024-12-31T23:59:59.000Z",
            }),
          };

          const result = yield* parseResponse(GetIdentityCenterAuthTokenResponse, response);

          // Internal schema uses camelCase
          expect(result.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
          expect(result.expirationTime).toBeInstanceOf(Date);
          expect(result.expirationTime?.toISOString()).toBe("2024-12-31T23:59:59.000Z");
        }),
    );
  });
});
