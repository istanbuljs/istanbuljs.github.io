import React, { Component, PropTypes } from "react"

import QuickStart from "../../components/QuickStart"
import Page from "../Page"

class WithQuickStart extends Component {
  render() {
    return (
      <Page { ...this.props } twoCols>
        <QuickStart { ...this.props.head && this.props.head.QuickStart } />
      </Page>
    )
  }
}

WithQuickStart.propTypes = {
  head: PropTypes.object,
}

export default WithQuickStart
