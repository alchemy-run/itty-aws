import { withLocalStack } from "./localstack.ts";

await withLocalStack(
  () =>
    Bun.spawn(
      [
        "node",
        "--env-file",
        ".env",
        "src/patch/discover-errors.ts",
        ...process.argv.slice(2),
      ],
      {
        stdio: ["inherit", "inherit", "inherit"],
        env: process.env,
        cwd: process.cwd(),
      },
    ).exited,
);
