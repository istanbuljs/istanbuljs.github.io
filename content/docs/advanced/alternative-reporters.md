---
title: Using Alternative Reporters
layout: WithQuickStart
QuickStart:
  title: Using Alternative Reporters
---

By default nyc uses Istanbul's `text` reporter. However, you may specify an alternative reporter. Below is a list of all available reporters, as well as the output it generates.

# clover

The following is generated at `coverage/clover.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<coverage generated="1500242170615" clover="3.2.0">
  <project timestamp="1500242170615" name="All files">
    <metrics statements="161" coveredstatements="161" conditionals="24" coveredconditionals="18" methods="49" coveredmethods="49" elements="234" coveredelements="228" complexity="0" loc="161" ncloc="161" packages="9" files="15" classes="15">
      <package name="src">
        <metrics statements="11" coveredstatements="11" conditionals="0" coveredconditionals="0" methods="4" coveredmethods="4"/>
        <file name="errors.ts" path="$PROJECT_PATH/src/errors.ts">
          <metrics statements="2" coveredstatements="2" conditionals="0" coveredconditionals="0" methods="0" coveredmethods="0"/>
          <line num="1" count="1" type="stmt"/>
          <line num="4" count="1" type="stmt"/>
        </file>
        <file name="test.ts" path="$PROJECT_PATH/src/test.ts">
          <metrics statements="9" coveredstatements="9" conditionals="0" coveredconditionals="0" methods="4" coveredmethods="4"/>
          <line num="1" count="1" type="stmt"/>
          <line num="3" count="1" type="stmt"/>
          <line num="4" count="1" type="stmt"/>
          <line num="6" count="1" type="stmt"/>
          <line num="7" count="1" type="stmt"/>
          <line num="9" count="1" type="stmt"/>
          <line num="10" count="1" type="stmt"/>
          <line num="12" count="1" type="stmt"/>
          <line num="13" count="1" type="stmt"/>
        </file>
      </package>
    </metrics>
  </project>
</coverage>
```

# cobertura

The following is generated at `coverage/cobertura-coverage.xml`:

```xml
<?xml version="1.0" ?>
<!DOCTYPE coverage SYSTEM "http://cobertura.sourceforge.net/xml/coverage-04.dtd">
<coverage lines-valid="161" lines-covered="161" line-rate="1" branches-valid="24" branches-covered="18" branch-rate="0.75" timestamp="1500242087605" complexity="0" version="0.1">
  <sources>
    <source>$PROJECT_PATH</source>
  </sources>
  <packages>
    <package name="src" line-rate="1" branch-rate="1">
      <classes>
        <class name="errors.ts" filename="src/errors.ts" line-rate="1" branch-rate="1">
          <methods>
          </methods>
          <lines>
            <line number="1" hits="1" branch="false"/>
            <line number="4" hits="1" branch="false"/>
          </lines>
        </class>
        <class name="test.ts" filename="src/test.ts" line-rate="1" branch-rate="1">
          <methods>
            <method name="(anonymous_0)" hits="1" signature="()V">
              <lines>
                <line number="3" hits="1"/>
              </lines>
            </method>
            <method name="(anonymous_1)" hits="1" signature="()V">
              <lines>
                <line number="6" hits="1"/>
              </lines>
            </method>
            <method name="(anonymous_2)" hits="1" signature="()V">
              <lines>
                <line number="9" hits="1"/>
              </lines>
            </method>
            <method name="(anonymous_3)" hits="1" signature="()V">
              <lines>
                <line number="12" hits="1"/>
              </lines>
            </method>
          </methods>
          <lines>
            <line number="1" hits="1" branch="false"/>
            <line number="3" hits="1" branch="false"/>
            <line number="4" hits="1" branch="false"/>
            <line number="6" hits="1" branch="false"/>
            <line number="7" hits="1" branch="false"/>
            <line number="9" hits="1" branch="false"/>
            <line number="10" hits="1" branch="false"/>
            <line number="12" hits="1" branch="false"/>
            <line number="13" hits="1" branch="false"/>
          </lines>
        </class>
      </classes>
    </package>
  </packages>
</coverage>
```

# html

Generates a HTML report you can view in your browser:

![lcov-report](https://user-images.githubusercontent.com/9997953/28251462-42e736c2-6a75-11e7-9ac8-4410e511c5c7.png)

# json-summary

The following is generated at `coverage/coverage-summary.json`:

```json
{"total": {"lines":{"total":161,"covered":161,"skipped":0,"pct":100},"statements":{"total":166,"covered":166,"skipped":0,"pct":100},"functions":{"total":49,"covered":49,"skipped":0,"pct":100},"branches":{"total":24,"covered":18,"skipped":0,"pct":75}}
,"$PROJECT_PATH/src/errors.ts": {"lines":{"total":2,"covered":2,"skipped":0,"pct":100},"functions":{"total":0,"covered":0,"skipped":0,"pct":100},"statements":{"total":2,"covered":2,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/test.ts": {"lines":{"total":9,"covered":9,"skipped":0,"pct":100},"functions":{"total":4,"covered":4,"skipped":0,"pct":100},"statements":{"total":9,"covered":9,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/config/index.ts": {"lines":{"total":10,"covered":10,"skipped":0,"pct":100},"functions":{"total":0,"covered":0,"skipped":0,"pct":100},"statements":{"total":10,"covered":10,"skipped":0,"pct":100},"branches":{"total":8,"covered":4,"skipped":0,"pct":50}}
,"$PROJECT_PATH/src/crud/index.test.ts": {"lines":{"total":1,"covered":1,"skipped":0,"pct":100},"functions":{"total":0,"covered":0,"skipped":0,"pct":100},"statements":{"total":1,"covered":1,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/crud/insert/index.test.ts": {"lines":{"total":36,"covered":36,"skipped":0,"pct":100},"functions":{"total":16,"covered":16,"skipped":0,"pct":100},"statements":{"total":37,"covered":37,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
,"$PROJECT_PATH/src/crud/insert/index.ts": {"lines":{"total":5,"covered":5,"skipped":0,"pct":100},"functions":{"total":2,"covered":2,"skipped":0,"pct":100},"statements":{"total":6,"covered":6,"skipped":0,"pct":100},"branches":{"total":6,"covered":6,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/customers/index.test.ts": {"lines":{"total":14,"covered":14,"skipped":0,"pct":100},"functions":{"total":4,"covered":4,"skipped":0,"pct":100},"statements":{"total":14,"covered":14,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/customers/index.ts": {"lines":{"total":5,"covered":5,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":6,"covered":6,"skipped":0,"pct":100},"branches":{"total":2,"covered":2,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/init/env.ts": {"lines":{"total":2,"covered":2,"skipped":0,"pct":100},"functions":{"total":0,"covered":0,"skipped":0,"pct":100},"statements":{"total":2,"covered":2,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/init/index.test.ts": {"lines":{"total":4,"covered":4,"skipped":0,"pct":100},"functions":{"total":2,"covered":2,"skipped":0,"pct":100},"statements":{"total":4,"covered":4,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/init/execute/index.test.ts": {"lines":{"total":26,"covered":26,"skipped":0,"pct":100},"functions":{"total":7,"covered":7,"skipped":0,"pct":100},"statements":{"total":26,"covered":26,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/init/execute/index.ts": {"lines":{"total":8,"covered":8,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":9,"covered":9,"skipped":0,"pct":100},"branches":{"total":2,"covered":2,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/init/gateway/index.ts": {"lines":{"total":2,"covered":2,"skipped":0,"pct":100},"functions":{"total":0,"covered":0,"skipped":0,"pct":100},"statements":{"total":2,"covered":2,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
,"$PROJECT_PATH/src/payments/index.test.ts": {"lines":{"total":27,"covered":27,"skipped":0,"pct":100},"functions":{"total":11,"covered":11,"skipped":0,"pct":100},"statements":{"total":28,"covered":28,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
,"$PROJECT_PATH/src/payments/index.ts": {"lines":{"total":10,"covered":10,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":10,"covered":10,"skipped":0,"pct":100},"branches":{"total":2,"covered":2,"skipped":0,"pct":100}}
}
```


# json

The following is generated at `coverage/coverage-final.json`:

```json
{"$PROJECT_PATH/src/errors.ts": {"path":"$PROJECT_PATH/src/errors.ts","statementMap":{"0":{"start":{"line":1,"column":32},"end":{"line":1,"column":72}},"1":{"start":{"line":4,"column":2},"end":{"line":4,"column":25}}},"fnMap":{},"branchMap":{},"s":{"0":1,"1":1},"f":{},"b":{}}
,"$PROJECT_PATH/src/init/env.ts": {"path":"$PROJECT_PATH/src/init/env.ts","statementMap":{"0":{"start":{"line":1,"column":0},"end":{"line":1,"column":32}},"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":16}}},"fnMap":{},"branchMap":{},"s":{"0":1,"1":1},"f":{},"b":{}}
}
```


# lcov

Same as `lcovonly`, but also generates a HTML report you can view in your browser:

![lcov-report](https://user-images.githubusercontent.com/9997953/28251462-42e736c2-6a75-11e7-9ac8-4410e511c5c7.png)

# lcovonly

The following is generated at `coverage/lcov.info`:

```txt
TN:
SF:$PROJECT_PATH/src/bar/index.ts
FN:7,baz
FNF:1
FNH:1
FNDA:2,baz
DA:1,1
DA:2,1
DA:3,1
DA:5,1
DA:8,2
DA:9,1
DA:13,1
DA:16,1
DA:20,1
DA:21,1
LF:10
LH:10
BRDA:8,0,0,1
BRDA:8,0,1,1
BRF:2
BRH:2
end_of_record
```

# none

No output.

# teamcity

Following is displayed on the terminal:

```bash
##teamcity[blockOpened name='Code Coverage Summary']
##teamcity[buildStatisticValue key='CodeCoverageAbsBCovered' value='166']
##teamcity[buildStatisticValue key='CodeCoverageAbsBTotal' value='166']
##teamcity[buildStatisticValue key='CodeCoverageAbsRCovered' value='18']
##teamcity[buildStatisticValue key='CodeCoverageAbsRTotal' value='24']
##teamcity[buildStatisticValue key='CodeCoverageAbsMCovered' value='49']
##teamcity[buildStatisticValue key='CodeCoverageAbsMTotal' value='49']
##teamcity[buildStatisticValue key='CodeCoverageAbsLCovered' value='161']
##teamcity[buildStatisticValue key='CodeCoverageAbsLTotal' value='161']
##teamcity[blockClosed name='Code Coverage Summary']
```

# text-lcov

Following is displayed on the terminal:

```txt
TN:
SF:$PROJECT_PATH/src/bar/index.ts
FN:7,baz
FNF:1
FNH:1
FNDA:2,baz
DA:1,1
DA:2,1
DA:3,1
DA:5,1
DA:8,2
DA:9,1
DA:13,1
DA:16,1
DA:20,1
DA:21,1
LF:10
LH:10
BRDA:8,0,0,1
BRDA:8,0,1,1
BRF:2
BRH:2
end_of_record
```


# text-summary

Following is displayed on the terminal:

```txt
=============================== Coverage summary ===============================
Statements   : 100% ( 166/166 )
Branches     : 75% ( 18/24 )
Functions    : 100% ( 49/49 )
Lines        : 100% ( 161/161 )
================================================================================
```

# text

Following is displayed on the terminal:

```txt
------------------|----------|----------|----------|----------|----------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------|----------|----------|----------|----------|----------------|
All files         |      100 |       75 |      100 |      100 |                |
  src              |      100 |      100 |      100 |      100 |                |
  errors.ts       |      100 |      100 |      100 |      100 |                |
  test.ts         |      100 |      100 |      100 |      100 |                |
  src/config       |      100 |       50 |      100 |      100 |                |
  index.ts        |      100 |       50 |      100 |      100 |        2,5,6,7 |
  src/crud         |      100 |      100 |      100 |      100 |                |
  index.test.ts   |      100 |      100 |      100 |      100 |                |
  src/crud/insert  |      100 |     87.5 |      100 |      100 |                |
  index.test.ts   |      100 |       50 |      100 |      100 |             25 |
  index.ts        |      100 |      100 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
```