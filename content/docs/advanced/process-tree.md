---
title: Process Tree information
layout: WithQuickStart
QuickStart:
  title: Process Tree information
---

nyc is able to show you all Node processes that are spawned when running a test script under it:
```bash
$ nyc --show-process-tree npm test
   3 passed
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 index.js |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
nyc
└─┬ /usr/local/bin/node /usr/local/bin/npm test
  └─┬ /usr/local/bin/node /path/to/your/project/node_modules/.bin/ava
    └── /usr/local/bin/node /path/to/your/project/node_modules/ava/lib/test-worker.js …
```
