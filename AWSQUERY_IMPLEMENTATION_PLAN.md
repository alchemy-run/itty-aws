# AWS Query Protocol Implementation Plan

## Overview

This plan outlines the implementation of a proper AWS Query protocol handler that uses Smithy model metadata to correctly serialize requests and parse responses, eliminating the need for special-case handling of specific field names.

## Current Problem

The current AWS Query implementation special-cases field names like `MessageAttributes`, which violates the principle of protocol handlers being generic. The correct approach is to parse the Smithy models to understand the shape types and serialize accordingly.

## Solution Architecture

### 1. Service Discovery
Dynamically discover all AWS services that use the `awsQuery` protocol by scanning the `aws-models/models` directory structure.

### 2. Model-Based Metadata Generation
Generate compact runtime metadata for each AWS Query service, similar to the existing EC2 approach but scaled to handle multiple services.

### 3. Shape-Aware Protocol Handler
Enhance the AWS Query protocol handler to use shape information to correctly distinguish between maps and structures during serialization.

## Implementation Steps

### Phase 1: Service Discovery Script

**File: `scripts/discover-awsquery-services.ts`**

Create a script that:
1. Scans `aws-models/models/*/service/*/` directories
2. Parses each service model JSON file
3. Identifies services that use `aws.protocols#awsQuery` trait
4. Outputs a list of discovered services with their metadata

```typescript
interface AwsQueryService {
  serviceId: string;
  serviceName: string;
  version: string;
  modelPath: string;
  endpointPrefix?: string;
}

// Expected discovery process:
// 1. Find all model files: aws-models/models/*/service/*/*.json
// 2. Parse each JSON file
// 3. Look for service shapes with traits["aws.protocols#awsQuery"]
// 4. Extract service metadata (version, endpoint, etc.)
```

**Key Discovery Logic:**
```typescript
function discoverAwsQueryServices(): AwsQueryService[] {
  const services: AwsQueryService[] = [];
  
  // Scan aws-models/models directory
  for (const serviceDir of getServiceDirectories()) {
    for (const versionDir of getVersionDirectories(serviceDir)) {
      const modelFile = findModelFile(versionDir);
      if (modelFile) {
        const model = parseModelFile(modelFile);
        if (usesAwsQueryProtocol(model)) {
          services.push(extractServiceMetadata(model, modelFile));
        }
      }
    }
  }
  
  return services;
}

function usesAwsQueryProtocol(model: any): boolean {
  // Look for service shape with aws.protocols#awsQuery trait
  for (const [shapeId, shape] of Object.entries(model.shapes)) {
    if (shape.type === 'service' && 
        shape.traits?.['aws.protocols#awsQuery']) {
      return true;
    }
  }
  return false;
}
```

### Phase 2: Multi-Service Metadata Generation

**File: `scripts/generate-awsquery-metadata.ts`**

Extend the EC2 metadata generation approach to handle multiple services:

```typescript
interface AwsQueryServiceMeta {
  serviceId: string;
  serviceName: string;
  version: string;
  endpointPrefix?: string;
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

// Generate metadata for all discovered services
function generateAllMetadata() {
  const services = discoverAwsQueryServices();
  
  for (const service of services) {
    const metadata = generateServiceMetadata(service);
    writeMetadataFile(service.serviceId, metadata);
  }
  
  // Generate registry file
  generateServiceRegistry(services);
}
```

**Output Structure:**
```
src/
├── awsquery-metadata/
│   ├── index.ts              # Service registry
│   ├── sns.ts               # SNS service metadata
│   ├── iam.ts               # IAM service metadata
│   ├── cloudwatch.ts        # CloudWatch service metadata
│   └── ...                  # Other AWS Query services
```

### Phase 3: Service Registry

**File: `src/awsquery-metadata/index.ts`**

```typescript
export interface AwsQueryServiceMeta {
  serviceId: string;
  serviceName: string;
  version: string;
  endpointPrefix?: string;
  operations: Record<string, OperationMeta>;
  shapes: Record<string, ShapeMeta>;
}

// Lazy-loaded service metadata cache
const serviceMetadata = new Map<string, AwsQueryServiceMeta>();

export function getServiceMeta(serviceId: string): AwsQueryServiceMeta | null {
  if (!serviceMetadata.has(serviceId)) {
    try {
      // Dynamic import for tree-shaking
      const meta = require(`./${serviceId}.js`).metadata;
      serviceMetadata.set(serviceId, meta);
      return meta;
    } catch (error) {
      console.warn(`No AWS Query metadata found for service: ${serviceId}`);
      return null;
    }
  }
  return serviceMetadata.get(serviceId) || null;
}

// Auto-generated list of supported services
export const SUPPORTED_SERVICES = [
  'sns', 'iam', 'cloudwatch', 'rds', 'cloudformation'
  // ... discovered services
];
```

### Phase 4: Enhanced Protocol Handler

**File: `src/protocols/aws-query.ts`**

```typescript
import { getServiceMeta } from '../awsquery-metadata/index.js';

export class AwsQueryHandler implements ProtocolHandler {
  readonly name = "awsQuery";
  readonly contentType = "application/x-www-form-urlencoded";

  buildRequest(input: unknown, action: string, metadata: ServiceMetadata): string {
    const serviceMeta = getServiceMeta(metadata.sdkId);
    
    if (serviceMeta) {
      return this.buildRequestWithMeta(input, action, serviceMeta);
    } else {
      // Fallback to generic serialization for unknown services
      return this.buildRequestGeneric(input, action, metadata);
    }
  }

  private buildRequestWithMeta(
    input: unknown, 
    action: string, 
    serviceMeta: AwsQueryServiceMeta
  ): string {
    const params: Record<string, string> = {
      Action: action,
      Version: serviceMeta.version
    };

    const operation = serviceMeta.operations[action];
    if (operation?.input && input) {
      // Use the same toParams function as EC2, but with service-specific shapes
      toParams(serviceMeta.shapes, operation.input, input, "", params);
    }

    return new URLSearchParams(params).toString();
  }

  private buildRequestGeneric(
    input: unknown, 
    action: string, 
    metadata: ServiceMetadata
  ): string {
    // Fallback implementation for services without metadata
    // This maintains backward compatibility
    const params = new URLSearchParams();
    params.append("Action", action);
    params.append("Version", metadata.version);
    this.flattenObject(input, "", params);
    return params.toString();
  }

  parseResponse(responseText: string, statusCode: number, metadata?: ServiceMetadata): unknown {
    if (statusCode >= 400) return this.parseError(responseText, statusCode);
    if (!responseText) return {};

    const doc = safeParseXml(responseText);
    if (!doc) return {};

    // Try to use service metadata for enhanced parsing
    const serviceMeta = metadata ? getServiceMeta(metadata.sdkId) : null;
    if (serviceMeta) {
      return this.parseResponseWithMeta(doc, serviceMeta);
    } else {
      // Fallback to generic parsing
      return this.parseResponseGeneric(doc);
    }
  }

  private parseResponseWithMeta(doc: any, serviceMeta: AwsQueryServiceMeta): unknown {
    const responseKey = Object.keys(doc).find(key => key.endsWith('Response'));
    if (!responseKey) return this.processAwsQueryArrays(doc);

    const opName = responseKey.replace(/Response$/, '');
    const operation = serviceMeta.operations[opName];
    
    if (operation?.output) {
      const responseNode = doc[responseKey];
      const resultKey = responseKey.replace('Response', 'Result');
      const resultNode = responseNode?.[resultKey] ?? responseNode;
      
      // Use shape-aware parsing
      return fromXml(serviceMeta.shapes, operation.output, resultNode);
    }

    return this.processAwsQueryArrays(doc[responseKey] || doc);
  }

  // Remove special-case methods like isMessageAttributesMap
  // All serialization decisions will be based on shape metadata
}
```

### Phase 5: Shape-Aware Serialization Functions

**Reuse EC2 Implementation:**
- Copy `toParams` and `fromXml` functions from `ec2-query.ts`
- Make them generic to work with any service's shape metadata
- Ensure proper handling of maps vs structures based on shape types

**Key Logic:**
```typescript
function toParams(
  shapes: Record<string, ShapeMeta>,
  shapeId: string,
  value: any,
  prefix: string,
  out: Record<string, string>
) {
  const shape = shapes[shapeId];
  if (!shape) return;

  switch (shape.type) {
    case "map":
      // Use .entry.N.key/.entry.N.value format
      // This is how MessageAttributes gets correctly serialized
      break;
    case "structure":
      // Use dot notation: NestedStruct.Field=value
      break;
    case "list":
      // Use .member.N format
      break;
    // ... other types
  }
}
```

## Execution Checklist

### ✅ Immediate Tasks

1. **Create service discovery script**
   ```bash
   bun scripts/discover-awsquery-services.ts
   ```

2. **Verify discovered services against known list**
   - Compare with AWS_SERVICE_SUPPORT.md
   - Validate model paths and versions

3. **Generate metadata for SNS first**
   ```bash
   bun scripts/generate-awsquery-metadata.ts sns
   ```

4. **Test SNS with new metadata**
   - Run existing SNS smoke tests
   - Verify MessageAttributes serialization works correctly

### 🔄 Follow-up Tasks

5. **Generate metadata for high-priority services**
   - IAM, CloudWatch, RDS, CloudFormation
   - Services commonly used in testing

6. **Implement enhanced protocol handler**
   - Add service registry support
   - Implement model-driven serialization
   - Maintain fallback for unknown services

7. **Remove special-case code**
   - Delete `isMessageAttributesMap` function
   - Remove hardcoded field name handling

8. **Generate metadata for all services**
   ```bash
   bun scripts/generate-awsquery-metadata.ts --all
   ```

### 🧪 Validation

9. **Comprehensive testing**
   - Verify all existing tests pass
   - Add new tests for each service
   - Test edge cases (empty maps, nested structures)

10. **Performance validation**
    - Ensure lazy loading works correctly
    - Verify tree-shaking eliminates unused metadata
    - Benchmark against current implementation

## Benefits

1. **Correctness**: Proper AWS Query protocol compliance
2. **Maintainability**: No special-case code for specific fields
3. **Scalability**: Supports all AWS Query services uniformly
4. **Performance**: Lazy-loaded metadata with tree-shaking
5. **Future-proof**: Automatically adapts to model changes

## Risk Mitigation

1. **Backward Compatibility**: Fallback mode for services without metadata
2. **Incremental Rollout**: Test one service at a time
3. **Rollback Plan**: Keep existing implementation as fallback
4. **Comprehensive Testing**: Validate against all existing smoke tests

## File Structure After Implementation

```
src/
├── protocols/
│   ├── aws-query.ts          # Enhanced protocol handler
│   └── interface.ts          # Protocol interfaces
├── awsquery-metadata/
│   ├── index.ts              # Service registry
│   ├── sns.ts               # SNS metadata
│   ├── iam.ts               # IAM metadata
│   └── ...                  # Other services
scripts/
├── discover-awsquery-services.ts
├── generate-awsquery-metadata.ts
└── generate-ec2-metadata.ts  # Existing
```

This plan provides a complete roadmap for implementing a robust, model-driven AWS Query protocol handler that eliminates special-case handling while supporting all AWS Query services correctly.
