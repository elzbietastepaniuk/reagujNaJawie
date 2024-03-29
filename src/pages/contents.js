import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Contents = ({ data, location }) => {
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
      <div className="glossary">
        <h2>Spis treści</h2>
        <ol
          style={{ listStyle: `none` }}
          className="glossary-list glossary-list--vertical"
        >
          {slides.length > 0 &&
            slides.map((slide, index) => (
              <li key={slide.frontmatter.id}>
                <Link to={slide.fields.slug} itemProp="url">
                  <h3>
                    {index > 0 ? `${index}.` : null} {slide.frontmatter.title}
                  </h3>
                </Link>
              </li>
            ))}
        </ol>
      </div>
    </Layout>
  );
};

export default Contents;

export const Head = () => <Seo title="Spis treści" />;

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
