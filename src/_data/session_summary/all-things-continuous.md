## Why projects fail to ship ([0m11s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=11s))

Andrew Martin, a London-based Node consultant who has played every role from DBA to architect, opens by naming the real problem: most teams cannot reliably ship code because they are afraid of their own pipeline.

> "the inability to ship code... we, the individuals, the business, we are scared of the unknown, we don't trust our tools and processes"

> "teetering on the wire performing tricks is no way to live"

> "we deserve our nine-to-five, shipping quality code, going home on time and having our weekends carefree"

## The three C's: integration, delivery, deployment ([4m59s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=299s))

CI runs the tests on every commit, CD (delivery) keeps a release-candidate ready to ship at any moment, and CD (deployment) ships it automatically once the suite is green — and the goal of all three is to remove humans from the chain.

> "doing the same thing over and over, always going forward, refining the process, but more importantly removing the human interaction — the machines are in control"

> "user acceptance testing is performed by actual users in this model"

> "people are the process friction that slow these things down — remove their input wherever possible"

## Trunk-based development over PR review ([7m32s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=452s))

Merging and rebasing are a tax on agility; long-lived feature branches make reintegration harder than the original work. Pull requests are the right model for open source — strangers and no deadline — but for trusted teams with deliverables, pair or mob programming gives you the same review with everyone learning at the same time.

> "merging and rebasing sucks. This is not continuous integration"

> "the PR branch / GitFlow model popularised by GitHub — wonderful for open source, a perfect match... bad however for teams with deliverables"

> "instead of a mandatory pull request or review step, why not pair-program, why not increase that and mob-program"

## Tests, the pyramid, and docker-compose locally ([11m12s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=672s))

The most under-used pyramid: with `docker-compose` declaring your stack, every developer can bring up a production-like environment on their laptop, run the full system test suite locally, and stop using the build server as a remote first-pass test runner.

> "everything is testable, it's a question of how much pain one is willing to tolerate"

> "you have much greater visibility because your build server is then not running tests for the first time, where you're throwing your code over the wall and hoping the build server completes"

> "test user journey once, never test the same thing twice, and trust that a passing test covers the case that it describes"

## Where QA actually adds value ([13m45s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=825s))

QA teams as a post-development checkpoint are an organisational anti-pattern. Bring the QA mind into the build phase via the *Three Amigos* technique — a BA, a developer and a QA discussing edge cases *before* anyone writes the feature — and let the destructive instincts of QA shape the test cases.

> "are they doing your work for you? They should be thinking of destructive ways to break your code"

> "consider what are the edge cases here, what tests do we need to write, what integration points with the rest of the system are likely to cause the trouble"

> "the veracity of your application is proven by the tests that you write, not manual testing"

## Be a generalist: what DevOps means in practice ([17m22s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=1042s))

For developers it means supporting your code in production; for ops it means knowing the application well enough not to bounce failures back at the developers; for testers it means verifying system tolerances rather than functional behaviour by hand.

> "anything can be learned in 20 hours to a reasonable level — that's two hours a week, two nights for two weeks"

> "for developers... show you care, support your code in production"

> "for application guys it means access to servers, means being able to dial into production should it be required"

## Docker as an immutable deployment unit ([18m56s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=1136s))

Containers give you a prepackaged, repeatable application unit that runs identically on your laptop and in production — but mind the genuinely-different bits (kernel, network fabric, software-defined networks, real-versus-loopback) and ship sanitised copies of production data into your local Docker volumes for the most useful local fidelity.

> "you're developing in a target environment — your Mac BSD-based system is not the Linux-based host that you most likely will be deploying to"

> "never underestimate hardware for exposing race conditions — there is a benefit to running a whole large distributed application on a single machine"

> "automating a scrub job that will dump your production databases, remove any sensitive customer data, and push that into a Docker container which you're then able to mount as a Docker volume"

## Provisioning, source control and the free-private stack ([24m01s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=1441s))

For a small team that wants free and private: GitLab (source control, Docker registry and CI in one self-hosted bundle), Terraform with Terragrunt for cloud-agnostic provisioning, and Scaleway or OVH for cheap compute — about £70 a month gets you a substantial cluster.

> "the build server here is really a thing of beauty and magic, and the CI runner uses the now familiar Travis-style YAML DSL"

> "it's possible to spin up [a] heavy-duty cluster on Scaleway for about 70 pounds — that really is a huge cluster"

> "pinning those dependencies will result in deterministic builds with the same output every time, however you miss security patches"

## Canary deployments, linkerd and online migrations ([32m17s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=1937s))

Skip the hit-and-hope and pick canary over blue-green — `linkerd` or Envoy will roll a small percentage of traffic onto the new version, monitor error rates, and continue or roll back automatically. Pair that with always-backwards-compatible database migrations (add columns, write to both, drop the old later) and you can ship anytime without writing rollback scripts.

> "envoy... [provides] application balancing functionality, layer 4 and 7 routing, TLS termination, service discovery, health checking and a multitude of statistics"

> "with the spirit of always maintaining backwards compatibility we should add columns and begin to write to them, performing migrations online in the application source code itself"

> "breaking [migrations] into smaller parts, making the change, rolling out the new versions, and allowing database changes to settle the days or weeks before finally removing them, will [aid in] removing another class of bugs — and deployment-time bugs are the very worst"

## Catastrophe survival ([37m25s](https://www.youtube.com/watch?v=7NU2v4hYXrY&t=2245s))

When something does fail, write the failing test first, stop the deployment pipeline, and use the modern observability toolbox — sysdig for asynchronous syscall interception, dtrace once it lands in supported Linux kernels, the Berkeley Packet Filter for raw data-link diagnosis — rather than blocking the application with `strace`.

> "ideally we always fix forward, fail. We continuously improve the baseline"

> "during an emergency you may have a short fuse... we roll back to the previous known good state — slow and methodical database column migrations make this easy"

> "sysdig intercepts syscalls via an installed system module — this is different to strace because strace will block your application's runtime"

---

Andrew Martin compresses a working playbook for moving a team from *I'm afraid to deploy* to *we ship without thinking about it*. The cultural argument lands first: humans are the friction, GitFlow belongs in open source not product, and QA's destructive instincts should hit the planning meeting. Then comes the recipe — docker-compose for production-shaped laptops, sanitised data dumps, GitLab plus Terraform plus Scaleway for a free private stack at seventy quid a month. The payoff is rollouts that nobody notices: canary deployments via linkerd or Envoy, always-backwards-compatible online migrations, and asynchronous diagnostics with sysdig and BPF when things break.
