import { withLocalStack } from "./localstack.ts";

const run = async () => {
  // Run tests with inherited stdout/stderr, passing through all args
  const args = process.argv.slice(2);
  const proc = Bun.spawn(["bun", "vitest", "run", ...args], {
    stdio: ["inherit", "inherit", "inherit"],
    env: process.env,
    cwd: process.cwd(),
  });

  process.exit(await proc.exited);
};
if (process.env.LOCAL) {
  await withLocalStack(run);
} else {
  await run();
}
