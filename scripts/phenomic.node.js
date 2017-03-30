import phenomicStatic from "phenomic/lib/static"

import metadata from "../src/app/metadata"
import routes from "../src/app/routes"
import store from "../src/app/store"

module.exports = (options) =>
  phenomicStatic({
    ...options,
    metadata,
    routes,
    store,
  })
