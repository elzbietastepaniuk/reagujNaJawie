import { Link } from "gatsby"
import React from "react"

const GlossaryIndex = ({ terms }) => {
  return (
    <div>
      <h2>Glossary Index</h2>
      <ol style={{ listStyle: `none` }}>
        {terms.map(term => (
          <Link to={term.fields.slug}>
            <li key={term.id}>
              <h3>{term.frontmatter.title}</h3>
              <p>{term.frontmatter.description}</p>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  )
}

export default GlossaryIndex
