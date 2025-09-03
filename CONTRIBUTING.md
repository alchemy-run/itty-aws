# Contributing to itty-aws

## Updating AWS API Models

This project uses AWS API models from the official [`aws/api-models-aws`](https://github.com/aws/api-models-aws) repository via a git submodule.

### Initial Setup

When cloning this repository, you need to initialize and update the submodule:

```bash
git submodule update --init --recursive
```

### Updating to Latest AWS Models

To update the AWS models to the latest version:

```bash
git submodule update --remote aws-models
git add aws-models
git commit -m "Update AWS models to latest version"
```

### After Updating Models

After updating the AWS models, you should regenerate the TypeScript service clients:

```bash
bun run generate
```

This will:
1. Read the updated models from `aws-models/models/`
2. Generate new TypeScript service definitions in `src/services/`
3. Format the code with Biome
4. Type-check with TypeScript

### Development Workflow

1. Update AWS models (if needed): `git submodule update --remote aws-models`
2. Generate clients: `bun run generate`
3. Run tests: `bun run test`
4. Build: `bun run build`

## Bundle Size Comparison

`itty-aws` includes a comprehensive bundle size comparison tool to measure bundle sizes against the official AWS SDK v3:

```bash
# Quick comparison with 5 popular services (s3, dynamodb, lambda, sqs, sts)
bun scripts/bundle-compare.ts

# Generate targets for all 414 available services
bun scripts/bundle-compare.ts --all-services

# Show help and available options
bun scripts/bundle-compare.ts --help
```

The tool generates:
- **Markdown report** at `dist/bundle-compare/report.md` with size comparisons
- **Bundle artifacts** for inspection in `dist/bundle-compare/`
- **Service metadata** in `scripts/fixtures/` for reproducible testing

### Bundle Comparison Features

- **Automatic service discovery**: Scans all services in `src/services/`
- **Smart AWS SDK handling**: Only compares services where AWS SDK packages are installed
- **Flexible targeting**: Choose from default or all services
- **Detailed reporting**: Shows minified and gzipped sizes for both libraries

### Helper Scripts

```bash
# Extract all service operations (used internally)
bun scripts/extract-service-operations.ts
```

## Note on AWS Models

The AWS models are sourced from the official AWS repository and are generated from AWS service specifications. The models are updated periodically by AWS to reflect new services, operations, and changes to existing APIs.
