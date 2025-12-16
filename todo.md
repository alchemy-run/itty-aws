# todo
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
