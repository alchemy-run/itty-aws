# Repository Guidelines

## Project Structure & Module Organization
- `src/`: Core library (e.g., `client.ts`, `aws.ts`, `utils.ts`). Generated service types live in `src/services/*/` and AWS protocol helpers in `src/protocols/`.
- `scripts/`: Codegen and maintenance (e.g., `generate-*.ts`, `bundle-size.ts`, `bump.ts`).
- `aws-models/`: Git submodule with upstream AWS Smithy models.
- `dist/`: TypeScript build output consumed by package exports.
- `test/`: Vitest suites (see `test/protocols/*.test.ts`).

## Build, Test, and Development Commands
- Build: `bun run build` — compiles TypeScript (`tsc -b`) to `dist/`.
- Generate clients: `bun run generate` — regenerates service types, formats with Biome, then builds.
- Bundle size: `bun run bundle:size` — reports approximate bundle footprint.
- Publish (maintainers): `bun run publish:npm`.

## Coding Style & Naming Conventions
- Language: TypeScript (ESM; `"type": "module"`). Prefer `Effect`-first APIs and explicit types.
- Formatting/Lint: Biome. Run `bun run biome check --write .` locally if needed.
- Indentation: 2 spaces; keep lines concise and pure functions where possible.
- File naming: kebab-case for scripts, lowerCamelCase for members, PascalCase for types.

## Testing Guidelines
- Framework: Vitest (`vitest.config.ts` sets `environment: "node"`, `globals: true`).
- Location/naming: place specs in `test/` using `*.test.ts` (subfolders allowed, e.g., `test/smoke/`).
- Run: `bun run vitest test/smoke/`. Aim for smoke tests against a real AWS account to test actual request / response. Keep it to read-only actions or actions that are low-cost and quick to run.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject; optional scope. Conventional prefixes welcome (`feat:`, `fix:`, `chore:`) but not strictly required (align with existing history).
- PRs: include a clear summary, rationale, and links to related issues. Note any generated files or scripts used. Add screenshots only when output differs meaningfully (e.g., debug logs).
- Checks: ensure build and tests pass; run Biome formatting before requesting review.

## Security & Configuration Tips
- Never commit credentials. Use AWS profiles/ENV vars supported by `@aws-sdk/credential-providers`.
- Keep changes minimal to `src/` and regenerate via `bun run generate` when models or generators change.
