---
title: Tools That Integrate With Istanbul API's
---

The following tools integrate with Istanbul to provide JavaScript
test coverage:

* [nyc](https://github.com/istanbuljs/nyc): command line tool for instrumenting
  code with Istanbul coverage (the successor to the [istanbul](https://www.npmjs.com/package/istanbul) command line tool).
* [c8](https://github.com/bcoe/c8): Command line tool for executing code
  with V8's built in coverage enabled. Uses Istanbul reports for displaying
  coverage.
* [Jest](https://github.com/facebook/jest): JavaScript testing solution that
  works out of the box for any JavaScript project. Uses Istanbul's API for collecting coverage data and providing coverage reports.
* [node-tap](https://www.node-tap.org/): a testing framework that bundles
  nyc for test coverage.
