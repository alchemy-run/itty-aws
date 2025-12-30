import { $ } from "bun";

const awsModels = Bun.file("aws-models")
const exists = await awsModels.exists() || (await awsModels.stat().then(s => true).catch(() => false))

if (!exists) {
  await $`git clone git@github.com:aws/api-models-aws.git aws-models --depth=1`
} else {
  await $`git pull --ff-only`.cwd("aws-models")
}
