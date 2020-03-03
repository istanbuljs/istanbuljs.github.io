---
title: Using Istanbul With TypeScript & mocha
layout: WithQuickStart
QuickStart:
  title: Using Istanbul With TypeScript & mocha
---

Thanks to [@mohsen1's](http://github.com/mohsen1) [post](http://azimi.me/2016/09/30/nyc-mocha-typescript.1.html) the following is the minimum recommended configuration to get accurate TypeScript coverage with `mocha`. With this configuration, the `all: true` and `cache: true` options should work.

**You will also need to `npm install --save-dev source-map-support`, which will also require that you have sourcemaps configured in your `tsconfig.json`.** Inline, or not, as long as one is enabled.

## `package.json`

```json
{
  "scripts": {
    "test": "nyc mocha"
  },
  "nyc": {
    "extension": [
      ".ts",
      ".tsx"
    ],
    "exclude": [
      "**/*.d.ts"
    ],
    "reporter": [
      "html"
    ],
    "all": true  
  }
}
```

## `.mocharc.json`

```json5
{
  "spec": "<glob for your test files>",
  "require": [
    "ts-node/register", // replace with ts-node/register/transpile-only if you have custom types
    "source-map-support/register"
  ],
  "recursive": true
}
```

If you're having trouble, try looking at the [existing TypeScript issues](https://github.com/istanbuljs/nyc/issues?utf8=%E2%9C%93&q=label%3ATypeScript+) for troubleshooting steps.
