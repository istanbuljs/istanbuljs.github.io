---
title: Using Istanbul With Node Tap
layout: WithQuickStart
QuickStart:
  title: Node Tap
---

<a href="https://github.com/tapjs/node-tap" target="_blank">Node Tap</a> uses nyc to track code coverage, even across subprocess boundaries. It is included by default, and there’s nothing you need to do but enable it.

```json
{
  "scripts": {
    "test": "tap test/*.js --coverage"
  }
}
```

_that's it!_ this will instrument the code that your tests execute, and any
subprocesses that it spawns.

## Using Alternative Reporters

By default nyc uses Istanbul's `text` reporter. Various other reporters are
available in the <a href="https://github.com/istanbuljs/istanbul-reports/tree/master/lib">istanbul-reports</a>
repo.

If you'd like to specify alternate reporter simply use the `--coverage-report` flag.

```json
{
  "scripts": {
    "test": "tap --coverage --coverage-report=html"
  }
}
```

This will output detailed `html` report to `./coverage/index.html`.

## Integrating with Coveralls

<a href="https://coveralls.io">coveralls.io</a> is a great tool for adding coverage reporting to your continuous-integration flow. Here's how to get Istanbul
integrated with coveralls and <a href="https://travis-ci.org/">travis-ci.org</a>:

1. add the coveralls dependency to your module:

```bash
npm install coveralls --save-dev
```

2. update the scripts in your package.json to include a bin for reporting coverage to coveralls:

```json
{
  "script": {
     "test": "tap test/*.js --coverage",
     "coverage": "tap --coverage-report=text-lcov | coveralls"
  }
}
```

3. For private repos, add the environment variable `COVERALLS_REPO_TOKEN` to Travis.

4. add the following to your `.travis.yml`:

```yaml
after_success: npm run coverage
```
