import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-7xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="font-bold text-2xl" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={`mx-auto max-w-2xl px-10 py-5 ${isRootPath ? 'mb-20' : ''}`} data-is-root-path={isRootPath}>
      <header className="mb-12">{header}</header>
      <main>{children}</main>
      <footer>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
