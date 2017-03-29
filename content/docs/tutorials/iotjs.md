---
title: Using Istanbul With IoT.js
layout: WithQuickStart
QuickStart:
  title: Using Istanbul With IoT.js
---

You can also use Istanbul to instrument your <a href="http://iotjs.net//">IoT.js</a> modules or script files.
Since IoT.js is rather minimalistic in design, this will require a little more effort than usual.

## Gathering coverage data

First, use **nyc** to transpile the source code you would like to instrument to provide line counters.
```shell
node_modules/.bin/nyc instrument path/to/source /path/to/output
```

_For example, if you'd like to instrument all the builtin modules, you could specify the `src/js` directory as input._

Next, back-up the original source files, and replace them with the transpiled sources.
Now, just build IoT.js as you would normally.

Before running, you will have to modify your test slightly, so that it will actually output the gathered coverage data.
This can be done by adding the following to your test file:

```js
process.on('exit', function () { require('fs').writeFileSync('coverage.data', Buffer(JSON.stringify(__coverage__))) })
```

_You may want to customize this to put the file in a specific directory._

After this, just run your test with IoT.js, and the coverage data should be written to the file you specified.

## Creating reports

To begin, you should restore the source files you've backed-up previously.
After this is done, you will have to use **nyc** again to create a report.

The `--reporter` argument can be used to specify which reporter to use, for example in this case `lcov`.
You will have to specify the directory containing the gathered coverage data files in the `--temp-directory` argument.

```shell
node_modules/.bin/nyc report --reporter=lcov --temp-directory=/path/to/coverage/data
```

After this is done, you should find the created report in the `coverage` sub-directory in you current directory.
