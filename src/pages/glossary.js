// glossary.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlossaryIndex from "../components/glossary-index"
import Seo from "../components/seo"

const GlossaryPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const terms = data.allMarkdownRemark.nodes

  console.log(data)
  console.log(terms)

  return (
    <Layout location={location} title={siteTitle}>
      <GlossaryIndex terms={terms} />
    </Layout>
  )
}

export const Head = () => <Seo title="Glossary" />

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
