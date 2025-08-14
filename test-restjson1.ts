#!/usr/bin/env bun

import { Effect } from "effect";
import { createServiceProxy } from "./src/client.ts";

// Create a Lambda client proxy
const lambda = createServiceProxy("lambda", {
  region: "us-east-1",
  // Note: This will use AWS credential chain - make sure you have credentials configured
});

// Test a GET operation with path parameters
const testGetAccountSettings = Effect.gen(function* () {
  console.log("Testing GetAccountSettings (GET /2016-08-19/account-settings)...");
  
  try {
    const result = yield* (lambda as any).getAccountSettings({});
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
});

// Test POST operation with path parameters  
const testListTags = Effect.gen(function* () {
  console.log("\nTesting ListTags (GET /2017-03-31/tags/{Resource})...");
  
  try {
    const result = yield* (lambda as any).listTags({
      Resource: "arn:aws:lambda:us-east-1:123456789012:function:my-function"
    });
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
});

// Run the tests
const program = Effect.gen(function* () {
  console.log("Testing restJson1 implementation with Lambda service\n");
  
  // Test GetAccountSettings - should work without credentials issues
  yield* testGetAccountSettings;
  
  // Test ListTags - requires valid ARN, might fail with ResourceNotFound but that's OK
  yield* testListTags;
  
  console.log("\nAll tests completed!");
});

// Run with debug logging to see the actual HTTP requests
Effect.runPromise(program.pipe(Effect.provide(Effect.logLevelDebug)));