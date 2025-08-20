## v0.2.2

*No significant changes*

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/sam-goodwin/itty-aws/compare/v0.2.1...v0.2.2)

---

## v0.2.1

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- Ec2 metadata reduction &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/57 [<samp>(60710)</samp>](https://github.com/sam-goodwin/itty-aws/commit/60710f69)
- Get ops from both locations in the spec &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/59 [<samp>(fe012)</samp>](https://github.com/sam-goodwin/itty-aws/commit/fe012729)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/sam-goodwin/itty-aws/compare/v0.2.0...v0.2.1)

---

## v0.2.0

### &nbsp;&nbsp;&nbsp;🚀 Features

- Implement SSM &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/8 [<samp>(4012a)</samp>](https://github.com/sam-goodwin/itty-aws/commit/4012a83c)
- Set up repeatable test and improve error &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/11 [<samp>(d42f5)</samp>](https://github.com/sam-goodwin/itty-aws/commit/d42f5a84)
- Support ClientOptions containing endpoint and credentials &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/15 [<samp>(e6439)</samp>](https://github.com/sam-goodwin/itty-aws/commit/e6439d8b)
- Support EventBridge &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/16 [<samp>(bd2cd)</samp>](https://github.com/sam-goodwin/itty-aws/commit/bd2cd1b7)
- Generate mappings for amz-target and json type from smithy &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/18 [<samp>(15525)</samp>](https://github.com/sam-goodwin/itty-aws/commit/1552566e)
- Add S3 support &nbsp;-&nbsp; by **Naor Peled** in https://github.com/sam-goodwin/itty-aws/issues/19 [<samp>(f6d94)</samp>](https://github.com/sam-goodwin/itty-aws/commit/f6d94f18)
- Support < Node 18 using HTTPs and extend S3 support &nbsp;-&nbsp; by **sam** in https://github.com/sam-goodwin/itty-aws/issues/20 [<samp>(773bf)</samp>](https://github.com/sam-goodwin/itty-aws/commit/773bf0e2)
- Add SQS support &nbsp;-&nbsp; by **Cristian Pallarés** in https://github.com/sam-goodwin/itty-aws/issues/34 [<samp>(fdb76)</samp>](https://github.com/sam-goodwin/itty-aws/commit/fdb76bcd)
- Move to effect &nbsp;-&nbsp; by **Sam Goodwin** in https://github.com/sam-goodwin/itty-aws/issues/36 [<samp>(b43b9)</samp>](https://github.com/sam-goodwin/itty-aws/commit/b43b9cb8)
- Use Effect's Stream for streaming properties &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(7b080)</samp>](https://github.com/sam-goodwin/itty-aws/commit/7b080c81)
- Use AWS-published models and add support for all services &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/40 [<samp>(8d24a)</samp>](https://github.com/sam-goodwin/itty-aws/commit/8d24adcd)
- Dedicated protocol handlers &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/44 [<samp>(41aa8)</samp>](https://github.com/sam-goodwin/itty-aws/commit/41aa860e)
- Fully working ec2query protocol (bidirectional) &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/46 [<samp>(384eb)</samp>](https://github.com/sam-goodwin/itty-aws/commit/384eb662)
- Refactor services into a package.json export per service &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/49 [<samp>(fd828)</samp>](https://github.com/sam-goodwin/itty-aws/commit/fd828c2a)
- AWSquery protocol support &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/50 [<samp>(43224)</samp>](https://github.com/sam-goodwin/itty-aws/commit/43224f24)
- **ec2**: Add xml protocol support for ec2 &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/38 [<samp>(d5f52)</samp>](https://github.com/sam-goodwin/itty-aws/commit/d5f52dde)

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- Parsing XML of getObject &nbsp;-&nbsp; by **sam** [<samp>(ed8f3)</samp>](https://github.com/sam-goodwin/itty-aws/commit/ed8f3e44)
- Release.yml &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(6fec7)</samp>](https://github.com/sam-goodwin/itty-aws/commit/6fec7a26)
- More efficient imports &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(17da5)</samp>](https://github.com/sam-goodwin/itty-aws/commit/17da59ce)
- Use dynamic Content-Type headers based on AWS service protocol &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/37 [<samp>(d74e3)</samp>](https://github.com/sam-goodwin/itty-aws/commit/d74e32ff)
- Service names were wrong, couldn't use services via client &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/45 [<samp>(35379)</samp>](https://github.com/sam-goodwin/itty-aws/commit/35379f18)
- Ec2Query input transformation bug &nbsp;-&nbsp; by **Kirk Mitchener** in https://github.com/sam-goodwin/itty-aws/issues/52 [<samp>(74542)</samp>](https://github.com/sam-goodwin/itty-aws/commit/74542b1d)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/sam-goodwin/itty-aws/compare/21e5a85d2d96268b9afbb10f2f1b83b64e0aabb0...v0.2.0)

---

