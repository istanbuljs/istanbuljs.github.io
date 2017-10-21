---
title: Using Istanbul With Intern
layout: WithQuickStart
QuickStart:
  title: Using Istanbul With Intern
---

Code coverage, implemented using Istanbul, is a core feature of
[Intern](https://github.com/theintern/intern). Simply indicate which files
should be covered using a glob string, or an array of glob strings, in the
Intern config file:

```json
{
  "coverage": "_build/src/**/*.js"
}
```

Coverage may also be specified on the command line:

```
$ npx intern coverage='_build/src/**/*.js'
```

Intern will instrument the files specified in the coverage list when they're
loaded locally in Node or in remote browsers (when performing WebDriver tests).

If necessary, Istanbul options may be passed directly to the instrumenter by
providing an `instrumenterOptions` property in the Intern config file:

```json
{
  "instrumenterOptions": { "esModules": true }
}
```

## Viewing results

Intern's Node-based reporters such as Runner, Pretty, and Simple will all
output a coverage summary to the console if any coverage data was collected.

```
Total coverage
-------------------------|----------|----------|----------|----------|----------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------------|----------|----------|----------|----------|----------------|
All files                |    91.22 |     80.8 |    88.95 |    91.17 |                |
 src                     |      100 |      100 |      100 |      100 |                |
  index.ts               |      100 |      100 |      100 |      100 |                |
 src/bin                 |    93.55 |    68.75 |      100 |    92.86 |                |
  intern.ts              |    93.55 |    68.75 |      100 |    92.86 |    24,39,76,92 |
 src/lib                 |    90.87 |    82.77 |    86.74 |    91.08 |                |
  BenchmarkSuite.ts      |      100 |      100 |      100 |      100 |                |
  BenchmarkTest.ts       |     91.3 |    74.29 |    81.82 |    91.11 |... 214,254,255 |
  Channel.ts             |      100 |       75 |      100 |      100 |             25 |
-------------------------|----------|----------|----------|----------|----------------|
```

Intern also provides easy access to the cobertura ('cobertura'), html
('htmlcoverage'), json ('jsoncoverage'), and lcov ('lcov') Istanbul reporters.
Reporters may be specified using the `reporters` config property:

```json
{
  "reporters": [ "runner", "jsoncoverage" ]
}
```

Reporters may also be specified on the command line:

```
$npx intern reporters=runner reporters=jsoncoverage
```

By default, file reports will be output to a `coverage/` directory in the
project root. Reporter options such as the output directory or watermarks may
be specified by using a properties object:

```json
{
  "reporters": [
    "runner",
    {
      "name": "jsoncoverage",
      "filename": "coverage.json"
    }
  ]
}
```

## Integration with Codecov.io

[Codecov.io](https://codecov.io) provides a web-based UI for displaying and
analyzing code coverage data. It's a great way to show coverage in a CI flow,
and it's what Intern itself uses. Setting up codecov through a service like
Travis CI is very simple:

1. Configure Intern to gather coverage, and to output it with a reporter that
   generates codecov-compatible output, such as lcov or jsoncoverage.
   ```json
   {
     "coverage": "_build/src/**/*.js",
     "reporters": [
       {
         "name": "jsoncoverage",
         "filename": "coverage.json"
       }
     ]
   }
   ```
2. Add an npm script to your project's `package.json` to run CI tests.
   ```json
   {
     "scripts": {
       "ci": "tsc && npm run test",
       "test:" "intern"
     }
   }
   ```
3. Add statements to `.travis.yml` to install codecov and upload results.
   ```yaml
   # .travis.yml
   install:
     - npm install
     - npm install -g codecov
   script:
     - npm run ci && codecov
   ```
