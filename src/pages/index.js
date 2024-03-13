import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  const slides = posts.filter((post) => !post.fields.slug.includes("glossary"));

  if (slides.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>Niestety mam bład, zajrzyj tu za chwilę</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="home-page">
        <h1>Cześć :)</h1>
        <p style={{ textAlign: "center" }}>
          Fajnie, że jesteś!
          <br />
          Pomożemy Ci stawiać pierwsze kroki w świecie programowania.
          <br /> <br />
          Pobierz <a href="/photogram.zip">projekt startowy</a> i zaczynamy...
        </p>
        {slides.length > 0 && (
          <Link to={slides[0].fields.slug} itemProp="url" className="button">
            <div className="button__bg">
              <span itemProp="headline">
                {slides[0].frontmatter.title || slides[0].fields.slug}
              </span>
              <div className="button__shadow"></div>
            </div>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default Index;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { id: ASC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          id
          title
          description
        }
      }
    }
  }
`;
