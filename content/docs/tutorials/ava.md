---
title: Using Istanbul With AVA
layout: WithQuickStart
QuickStart:
  title: AVA
  cmd: ava
---

At the end of the day, all you need to do is place the bin **nyc** in front of the
existing test scripts in your package.json:

```json
{
  "scripts": {
    "test": "nyc ava --timeout=3000"
  }
}
```

_that's it!_ this will instrument the code that your tests execute, and any
subprocesses that it spawns.

## Using Alternative Reporters

By default nyc uses Istanbul's `text` reporter. Various other reporters are
available. You can view the full list on the [Using Alternative Reporters](../../advanced/alternative-reporters) page.

If you'd like to specify alternate reporter, or would like to run
multiple reporters, simply use the `--reporter` flag.

_for instance, suppose you would like to output the default text report, along
with an HTML coverage report._

```json
{
  "scripts": {
    "test": "nyc --reporter=html --reporter=text ava"
  }
}
```

This will output the `text` report to the terminal, as well as outputting the
detailed `html` report to `./coverage/index.html`.

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
     "test": "nyc --reporter=html --reporter=text ava",
     "coverage": "nyc report --reporter=text-lcov | coveralls"
  }
}
```

3. For private repos, add the environment variable `COVERALLS_REPO_TOKEN` to Travis.

4. add the following to your `.travis.yml`:

```yaml
after_success: npm run coverage
```

## What about TypeScript?

[AVA has a TypeScript recipe](https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md) that should get you started. Feel free to contribute to their docs or make a PR [here](https://github.com/istanbuljs/istanbuljs.github.io) if you have more details to share! :smile:

## What Now?

nyc and Istanbul provide many advanced configuration options a good place to
start learning more is the <a href="https://github.com/istanbuljs/nyc">istanbuljs/nyc README.</a>
