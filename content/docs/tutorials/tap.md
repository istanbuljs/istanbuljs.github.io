---
title: Using Istanbul With Node Tap
layout: WithQuickStart
QuickStart:
  title: Node Tap
---

<a href="https://github.com/tapjs/node-tap" target="_blank">Node Tap</a> uses nyc to track code coverage, even across subprocess boundaries. It is included by default, and there’s nothing you need to do but enable it.

More detail about node-tap's coverage information can be found [in the node-tap.org documentation](http://www.node-tap.org/coverage).

```json
{
  "scripts": {
    "test": "tap test/*.js --coverage"
  }
}
```

_that's it!_ this will instrument the code that your tests execute, and any
subprocesses that it spawns.

## Maximal Coverage 💯

As of version 7, node-tap lets you easily enforce 100% coverage of all lines, branches, functions, and statements with one easy flag, if that's your thing:

```json
{
  "scripts": {
    "test": "tap test/*.js --100"
  }
}
```

## Using Alternative Reporters

By default nyc uses Istanbul's `text` reporter. Various other reporters are
available. You can view the full list on the [Using Alternative Reporters](../../advanced/alternative-reporters) page.

If you'd like to specify alternate reporter, use the `--coverage-report` flag.

```json
{
  "scripts": {
    "test": "tap --coverage --coverage-report=html"
  }
}
```

This will output detailed `html` report to `./coverage/index.html`.  By default, it will also open up the file in your web browser.

## Integrating with Coveralls

<a href="https://coveralls.io">coveralls.io</a> is a great tool for adding coverage reporting to your continuous-integration flow. Here's how to get Istanbul
integrated with coveralls and <a href="https://travis-ci.org/">travis-ci.org</a>.  Here are the steps to link up your travis jobs with Coveralls if you're using node-tap:

1. Add the environment variable `COVERALLS_REPO_TOKEN` to your Travis environment.

That's it!
