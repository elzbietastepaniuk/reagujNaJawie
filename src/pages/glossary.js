// glossary.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlossaryIndex from "../components/glossary-index"
import Seo from "../components/seo"

const GlossaryPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const terms = data.allMarkdownRemark.nodes

  const sortedTerms = terms.sort((a, b) => {
    const idA = parseInt(a.frontmatter.id);
    const idB = parseInt(b.frontmatter.id);
    return idA - idB;
  });

  return (
    <Layout location={location} title={siteTitle}>
      <GlossaryIndex terms={sortedTerms} />
    </Layout>
  )
}

export const Head = () => <Seo title="Słowniczek" />

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/glossary/" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          id
        }
        fields {
          slug
        }
      }
    }
  }
`

export default GlossaryPage
