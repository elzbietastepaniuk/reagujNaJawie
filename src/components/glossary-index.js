import { Link } from 'gatsby'
import React, { useState } from 'react'

const GlossaryIndex = ({ terms }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredTerms = terms.filter((term) =>
    term.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="glossary">
      <h2>Słowniczek</h2>
      <div class="input-group">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Wyszukaj"
        />
      </div>
      <ol style={{ listStyle: `none` }} className="glossary-list">
        {filteredTerms.map((term) => (
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
