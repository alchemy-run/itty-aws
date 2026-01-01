Generate a new client with a script like
bun generate --sdk s3

To run the s3 tests:
bun test:local ./test/s3.test.ts

To run the Protocol tests:
bun test:protocols

If it is unclear what the XML format for an AWS API is, look up the AWS API reference for that operation.

When asked to explore the smithy models, use `bun -e` to evaluate inline Javascript that loads the JSON in aws-models/models/{service}/{version}.json. the models are too big to load into context.

Protocol tests must import and use generated request/output classes from ./src/services/*.ts. instead of re-defining them.

We aim to be 1:1 with smithy - all smithy traits make their way into generated code as traits piped to a schema.