import React, { Component } from "react"
import { Route } from "react-router"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import AppContainer from "../components/AppContainer"

// Please track https://github.com/MoOx/phenomic/issues/676 for a better
// way to have automatic layouts registeration
const reqLayouts = require.context("../layouts", true, /\/index\.js$/)
const layouts = reqLayouts.keys().reduce((layouts, layout) => ({
  ...layouts,
  [layout.replace("./", "").replace("/index.js", "")]:
    reqLayouts(layout).default,
}), {})

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ layouts }
      />
    )
  }
}

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
