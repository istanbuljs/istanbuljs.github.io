---
title: Generate report from __coverage__ object
layout: WithQuickStart
QuickStart:
  title: Generate report from __coverage__ object
---

Output the contents of `window.__coverage__` (assuming it's in Istanbul 1.0 format) to `.nyc_output/out.json`. To generate HTML report for example, run:
```bash
nyc report --reporter=html
```
