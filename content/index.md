---
metaTitle: Istanbul, a JavaScript test coverage tool.
superTitle: JavaScript test coverage made simple.
title: How Istanbul works
layout: WithQuickStart
QuickStart:
  title: mocha
  cmd: mocha
---

Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters,
so that you can track how well your unit-tests exercise your codebase.

The [nyc](https://github.com/istanbuljs/nyc) command-line-client for Istanbul
works well with most JavaScript testing frameworks:
[tap](https://github.com/tapjs/node-tap),
[mocha](https://github.com/mochajs/mocha),
[AVA](https://github.com/avajs/ava),
etc.

## Features

- First class support of ES6/ES2015+ using
  [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul).
- A collection of reporters, providing both terminal and HTML output:
  ![terminal output](/assets/terminal.png)
  ![browser output](/assets/browser.png)
- Support for the most popular JavaScript testing frameworks (see our **tutorials**).
- Support for instrumenting subprocesses, using the nyc command-line-interface.
