import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              <img
                alt="istanbul logo"
                src="/assets/istanbul-logo.png"
                className={ styles.logo }
              />
              <span className={ styles.logoText }>
                { "istanbul" }
              </span>
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            <Link
              className={ styles.link }
              to="/docs/tutorials/"
            >
              { "Tutorials" }
            </Link>
            <Link
              className={ styles.link }
              to="/docs/advanced/"
            >
              { "Advanced Features" }
            </Link>
            <Link
              className={ styles.link }
              to="/contributing/"
            >
              { "Contributing" }
            </Link>
            <a
              className={ styles.link }
              // eslint-disable-next-line max-len
              href={ "https://github.com/istanbuljs/nyc/issues?utf8=%E2%9C%93&q=label%3Aquestion+" }
            >
              { "FAQ" }
            </a>
            {
              // only in dev for now
              process.env.NODE_ENV !== "production" &&
              <Link
                className={ styles.link }
                to="/blog/"
              >
                { "Blog" }
              </Link>
            }
            { pkg.twitter &&
              <a
                href={ `https://twitter.com/${pkg.twitter}` }
                className={ styles.link }
              >
                <Svg svg={ twitterSvg } cleanup />
                  { "Twitter" }
              </a>
            }
            <a
              href={ pkg.github }
              className={ styles.link }
            >
              <Svg svg={ gitHubSvg } cleanup />
              { "GitHub" }
            </a>
          </div>
        </nav>
      </header>
    )
  }
}
