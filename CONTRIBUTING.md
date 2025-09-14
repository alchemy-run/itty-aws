# Contributing to itty-aws

## Updating AWS API Models

This project uses AWS API models from the official [`aws/api-models-aws`](https://github.com/aws/api-models-aws) repository via a git submodule. This submodule should be periodically updated and the itty-aws services regenerated.

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
3. Build: `bun run build`
4. Run smoke tests: `bun run test:smoke`


## Bundle Size Comparison

`itty-aws` includes a comprehensive bundle size comparison tool to measure bundle sizes against the official AWS SDK v3:

```bash
# Compare bundle size of all itty-aws services with equivalent AWS SDK v3 service
bun scripts/bundle-compare.ts
```

The tool generates:
- **Markdown report** at `dist/bundle-compare/report.md` with size comparisons
- **Bundle artifacts** for inspection in `dist/bundle-compare/`

