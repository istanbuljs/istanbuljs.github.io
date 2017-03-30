import React, { Component, PropTypes } from "react"

import styles from "./index.css"

export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <footer className={ styles.footer }>
        <p>
          <iframe
            allowTransparency="true"
            frameBorder="0"
            scrolling="0"
            style={{
              width: "135px",
              height: "30px",
              verticalAlign: "middle",
            }}
            src={
              "https://ghbtns.com/github-btn.html?" +
              "user=istanbuljs&repo=nyc&type=star&count=true&size=large"
            }
          />
          <a href={ pkg.github }>Istanbul</a>
          { " · " }
          v1
          { " · " }
          Revised BSD License
        </p>
        <p>
          <a
            href={ process.env.PHENOMIC_HOMEPAGE }
            className={ styles.phenomicReference }
          >
            { "Website generated with " }
            <span className={ styles.phenomicReferenceName }>
              {  `<${ process.env.PHENOMIC_NAME} />` }
            </span>
          </a>
        </p>
      </footer>
    )
  }
}
