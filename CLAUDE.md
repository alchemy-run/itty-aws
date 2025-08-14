# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`itty-aws` is a lightweight AWS SDK implementation for [Effect](https://effect.website) that provides type-safe AWS service clients generated from official AWS API specifications. It uses a single Proxy pattern to dynamically create service clients and implements aws4fetch for request signing.

## Development Commands

### Build and Test
- `bun run build` - Compile TypeScript to dist/
- `bun run test:run` - Run tests once (no watch mode)
- `bun vitest run ./test/smoke/<service>.test.ts` - Run specific smoke test file

### Code Generation
- `bun run generate` or `bun gen` - Generate all service clients from AWS models + lint + build
- `bun scripts/generate-clients.ts` - Generate service clients only
- `bun scripts/generate-ec2-metadata.ts` - Generate EC2 metadata

### Code Quality
- `bun biome check --write` - Run linter with auto-fix

### Bundle Analysis
- `bun scripts/bundle-size.ts` - Analyze bundle size

## Architecture

### Core Components

1. **AWS Proxy (`src/index.ts`)**: Main entry point that creates dynamic service proxies
2. **Service Client (`src/client.ts`)**: Core client implementation with request/response handling
3. **Generated Services (`src/services/`)**: Auto-generated TypeScript types for each AWS service
4. **AWS Models (`aws-models/`)**: Git submodule containing official AWS API specifications

### Key Files

- `src/client.ts`: Core AWS client with proxy-based method interception
- `src/aws.ts`: Type definitions and service interfaces  
- `src/metadata.ts`: Service metadata (endpoints, protocols, target prefixes)
- `src/error.ts`: Common AWS error types and tagged error implementations
- `src/ec2-metadata.ts`: Auto-generated metadata for the EC2 Query protocol

### Code Generation Process

1. AWS API models are stored as Smithy JSON in `aws-models/models/`
2. `scripts/generate-clients.ts` reads these models and generates TypeScript interfaces
3. Each service gets its own file in `src/services/` with complete type definitions
4. The main AWS proxy dynamically creates service clients using these types

### Request Flow

1. `new AWS.ServiceName(config)` creates a service proxy
2. Method calls like `client.methodName(input)` are intercepted by the proxy
3. `createServiceProxy` converts the call to AWS API format
4. Request is signed with aws4fetch and sent to AWS
5. Response is parsed based on service protocol (JSON, XML, Query)
6. Errors are converted to typed Effect errors

### Protocols Supported

- `awsJson1_0` / `awsJson1_1`: JSON-based protocols (DynamoDB, etc.)
- `restJson1`: REST JSON protocol (S3, API Gateway, etc.)
- `ec2Query`: EC2-specific XML query protocol with custom parsers
- `awsQuery`: General XML query protocol

## Important Notes

- Uses Effect.js for functional error handling and composable operations
- All operations return `Effect<Success, Error, Requirements>` values
- Credentials are resolved automatically using AWS credential chain
- XML protocols (S3) are not fully supported yet
- Service generation requires the aws-models git submodule to be present

## Testing

Tests are located in `test/` and use Vitest. The test suite includes:
- `smoke.test.ts`: Basic integration tests
- `ec2-*.test.ts`: EC2-specific protocol tests
- `content-type.test.ts`: Content-Type header validation

Run tests with AWS credentials configured for integration tests to pass.