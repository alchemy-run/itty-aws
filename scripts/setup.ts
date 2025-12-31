import { $ } from "bun";
import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    http: { type: "boolean", default: false },
  },
});

const awsModels = Bun.file("aws-models");
const exists =
  (await awsModels.exists()) ||
  (await awsModels
    .stat()
    .then(() => true)
    .catch(() => false));

const repoUrl = values.http
  ? "https://github.com/aws/api-models-aws.git"
  : "git@github.com:aws/api-models-aws.git";

if (!exists) {
  await $`git clone ${repoUrl} aws-models --depth=1`;
} else {
  await $`git pull --ff-only`.cwd("aws-models");
}
