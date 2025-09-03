### Service-by-service comparison

| Service | itty-aws (KB) | vs v3 | itty-aws (no Effect, KB) | vs v3 | aws-sdk-v3 (KB) |
|---------|--------------:|--------:|--------------------------:|--------:|----------------:|
| S3      |        15     | ▼ -70%  |              9           | ▼ -84%  |            50   |
| EC2     |        18     | ▼ -65%  |             12           | ▼ -78%  |            52   |
| Dynamo  |        10     | ▼ -82%  |              6           | ▼ -89%  |            55   |
| …       |       …       |   …     |             …            |   …     |           …     |


**Avg Delta vs aws-sdk-v3**

- itty-aws: ![delta](https://img.shields.io/badge/delta_-78%25-brightgreen?label=avg%20Δ)
- itty-aws (no Effect): ![delta](https://img.shields.io/badge/delta_-88%25-brightgreen?label=avg%20Δ)

```mermaid
xychart-beta
    title "Bundle size (KB)"
    x-axis ["itty-aws (no Effect)", "itty-aws", "aws-sdk-v3"]
    y-axis "KB" 0 --> 0
    bar [0, 0, 0]
```
