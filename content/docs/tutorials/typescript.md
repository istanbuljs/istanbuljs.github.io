---
title: Using Istanbul With TypeScript & mocha
layout: WithQuickStart
QuickStart:
  title: Using Istanbul With TypeScript & mocha
---

Thanks to [@mohsen1's](http://github.com/mohsen1) [post](http://azimi.me/2016/09/30/nyc-mocha-typescript.1.html) the following is the minimum recommended configuration to get accurate TypeScript coverage with `mocha`. With this configuration, the `all: true` and `cache: true` options should work, left out here for advanced users to find out.

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

## `test/mocha.opts`

```
--require ts-node/register
--require source-map-support/register
--recursive
<glob for your test files>
```
