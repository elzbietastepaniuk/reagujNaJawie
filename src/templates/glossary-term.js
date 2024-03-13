import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const GlossaryTerm = ({ data: { markdownRemark: term }, location }) => {
  const siteTitle = term.frontmatter.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
        description={term.frontmatter.description || term.excerpt}
      />
      <article
        className="glossary-term"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{term.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: term.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  );
};

export default GlossaryTerm;

export const pageQuery = graphql`
  query GlossaryTermBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`;
