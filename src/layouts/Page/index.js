import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import cx from "classnames"

import styles from "./index.css"

class Page extends Component {
  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />
        {
          head.superTitle &&
          <div className={ styles.superTitle }>{ head.superTitle }</div>
        }
        <div
          className={ cx({
            [styles.container]: true,
            [styles.containerTwoCols]: props.twoCols,
          }) }
        >
          <div
            className={ cx({
              [styles.content]: true,
              [styles.contentTwoCols]: props.twoCols,
            }) }
          >
            {
              head.title &&
              <h1 className={ styles.title }>{ head.title }</h1>
            }
            { header }
            <BodyContainer>{ body }</BodyContainer>
          </div>
          { props.children }
        </div>
        { footer }
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
  twoCols: PropTypes.boolean,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
