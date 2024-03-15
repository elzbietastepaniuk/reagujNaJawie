import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const isRootPath = location.pathname === rootPath
  const isInGlossary = location.pathname === '/glossary/'
  const isContents = location.pathname === '/contents/'
  let header

  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const headerElement = document.querySelector('header')
    if (headerElement) {
      const height = headerElement.getBoundingClientRect().height
      setHeaderHeight(height)
    }
  }, [])

  if (isRootPath) {
    header = (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <h1 className="main-heading">
          <StaticImage
            src="../images/hero.jpg"
            width={550}
            quality={90}
            layout="constrained"
            formats={['auto', 'webp']}
            alt=""
          />
        </h1>

        <Link
          to="/contents"
          title="Spis treści"
          style={{ marginRight: '15px' }}
        >
          {' '}
          <StaticImage
            src="../images/contents.png"
            width={54}
            quality={54}
            layout="constrained"
            formats={['auto', 'webp']}
            alt=""
          />
        </Link>
        <Link to="/glossary" title="Słowniczek">
          {' '}
          <StaticImage
            src="../images/glossary.png"
            width={54}
            quality={54}
            layout="constrained"
            formats={['auto', 'webp']}
            alt=""
          />
        </Link>
      </div>
    )
  } else {
    header = (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Link className="header-link-home" to="/" title="Home">
          <StaticImage
            src="../images/hero.webp"
            width={200}
            quality={100}
            layout="constrained"
            alt=""
          />
        </Link>
        {!isContents && (
          <Link
            to="/contents"
            title="Spis treści"
            style={{
              marginLeft: 'auto',
              ...(!isInGlossary && { marginRight: '15px' })
            }}
          >
            {' '}
            <StaticImage
              src="../images/contents.png"
              width={54}
              quality={54}
              layout="constrained"
              formats={['auto', 'webp']}
              alt=""
            />
          </Link>
        )}
        {!isInGlossary && (
          <Link to="/glossary" title="Słowniczek">
            {' '}
            <StaticImage
              src="../images/glossary.png"
              width={54}
              quality={54}
              layout="constrained"
              formats={['auto', 'webp']}
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
      <div
        className="global-wrapper global-wrapper--flex"
        data-is-root-path={isRootPath}
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
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
