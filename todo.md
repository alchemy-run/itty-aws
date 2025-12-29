# todo
- make errors not dynamic since we have schemas
- move effect deps to peer deps
- generate a report on kb per bundle (see effect 4 / effect-smol?) @sam
- warning for people who don't know how to bundle
- better error on credentials missing
  - ```
    [08:58:06.504] ERROR (#1):
    AwsCredentialProviderError: An error has occurred
    at catch (D:\code\OSS\alchemy\itty-aws-2\src\credentials.ts:31:20)
    at <anonymous> (D:\code\OSS\alchemy\itty-aws-2\src\client.ts:25:28)
    at <anonymous> (D:\code\OSS\alchemy\itty-aws-2\src\client.ts:25:41)
    ```
- make everything into thunks
- memory impact
- category with unknown error but still give you the tag and data?
- apply categories based on prefixes of unknown errors
  - starts with `NoSuch` means its missing
- whatever the hell this is
  - https://github.com/smithy-lang/smithy/blob/main/smithy-aws-traits/src/main/java/software/amazon/smithy/aws/traits/auth/diff/SigV4Migration.java#L131
- support smithy's testing suite for parsers?
  - e.g. https://github.com/smithy-lang/smithy/tree/main/smithy-aws-protocol-tests/model/restJson1
- see if we can merge formatResponse and formatRequest
- get more errors for aws terraform provider
  - see: https://github.com/hashicorp/terraform-provider-aws/blob/main/internal/service/s3/errors.go
  - see: https://github.com/hashicorp/terraform-provider-aws/blob/main/internal/service/ec2/errors.go
- make POST / the default behavior if not defined in operation meta so we can omit them for awsJson sdks
- default sigV4service name to lowercase sdkId when it works
- make name smaller
- do we need to do both `/*#__PURE__*/` and `/*@__PURE__*/` for better support across bundlers
- test coverage reporting


## Specific handling of errors

| Operation | Tag | Error | Handling behavior |
|-----------|-----|-------|-------------------|
| * | OperationAborted | 409 Conflict | Exponential backoff, base 1s, max 30s, unlimited retries until timeout |
