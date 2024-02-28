import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const isRootPath = location.pathname === rootPath
  const isInGlossary = location.pathname === "/glossary/"
  let header

  if (isRootPath) {
    header = (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <h1 className="main-heading">
          <Link to="/">
            {" "}
            <StaticImage
              src="../images/hero.jpg"
              width={550}
              quality={90}
              layout="constrained"
              formats={["auto", "webp"]}
              alt=""
            />
          </Link>
        </h1>
        <Link to="/glossary">
          {" "}
          <StaticImage
            src="../images/glossary.png"
            width={64}
            quality={64}
            layout="fixed"
            formats={["auto", "webp"]}
            alt=""
          />
        </Link>
      </div>
    )
  } else {
    header = (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Link className="header-link-home" to="/">
          <StaticImage
            src="../images/hero.webp"
            width={200}
            quality={100}
            layout="constrained"
            alt=""
          />
        </Link>
        {!isInGlossary && (
          <Link to="/glossary" title="Słowniczek">
            {" "}
            <StaticImage
              src="../images/glossary.png"
              width={54}
              quality={54}
              layout="fixed"
              formats={["auto", "webp"]}
              alt=""
            />
          </Link>
        )}
      </div>
    )
  }

  return (
    <>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          <StaticImage
            src="../images/footer.jpg"
            width={672}
            quality={100}
            layout="constrained"
            alt=""
          />
        </footer>
      </div>
    </>
  )
}

export default Layout
