import { Link } from 'gatsby'
import React from 'react'

const GlossaryIndex = ({ terms }) => {
  return (
    <div className="glossary">
      <h2>Glossary Index</h2>
      <ol style={{ listStyle: `none` }} className="glossary-list">
        {terms.map((term) => (
          <li key={term.id}>
            <Link to={term.fields.slug}>
              <h3>{term.frontmatter.title}</h3>
            </Link>
            <p>{term.frontmatter.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default GlossaryIndex
