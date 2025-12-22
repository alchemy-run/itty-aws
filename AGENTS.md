itty-aws is an AWS SDK gnerated from the aws-models repository.

It has one major flaw: aws-models does not capture all the error codes for each operation.

To mitigate this, we use [service-patches.ts](./scripts/service-patches.ts) to patch the errors for each operation in each service.

To discover the important error codes, we look at the terraform provider-aws implementation of the service and find all API calls made in the providers and look at the error codes explicitly handled by the provider.

The terraform provider-aws implementation is available as a submodule in the ./terraform-provider-aws/internal//service/{service} directory. Use `ls` to find the service you are interested in and then read through all of the providers.

We then check our genreated code in [src/services](src/services) to see if that error code is present and add it to the service-patches.ts file if it is not.

After updating the service-patches.ts file, we `bun generate` to re-generate the client code and repeat.