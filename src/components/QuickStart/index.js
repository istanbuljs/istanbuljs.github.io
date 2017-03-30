import React, { PropTypes } from "react"
import Lowlight from "react-lowlight"

import styles from "./index.css"

const QuickStart = ({ title, cmd }) => {
  if (cmd)
    return (
      <section className={ styles.container }>
        <h1>Quick Start</h1>
        {
          title &&
          <p>
            Adding coverage to your { title } tests could not be easier
          </p>
        }
        {
          !title &&
          <p>
            Open your terminal, navigate to your project,
            and install
            { " " }
            <a href="https://github.com/istanbuljs/nyc">nyc</a>,
            ${"Istanbul's"} command-line-interface:
          </p>
        }
        <div className="sh-code">
          $ npm install --save-dev nyc
        </div>
        <p>
          Now, simply place the command <strong>nyc</strong> in front of your
          existing test command, for example:
        </p>
        <Lowlight
          language="json"
          value={
              `{
  "scripts": {
    "test": "nyc ${ cmd }"
  }
}`
          }
        />
        {
          !title &&
          <p>
            See the <strong>tutorials</strong> section, for framework specific
            documentation.
        }
      </section>
    )
  else
    return (
      <section className={ styles.container } />
    )
}

QuickStart.propTypes = {
  title: PropTypes.string,
  cmd: PropTypes.string,
}

QuickStart.defaultProps = {
  cmd: null,
}

export default QuickStart
