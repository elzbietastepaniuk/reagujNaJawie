const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Define the template for slide post
const slide = path.resolve(`./src/templates/slide.js`);
// Define the template for glossary term
const glossaryTerm = path.resolve(`./src/templates/glossary-term.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for all Markdown files containing glossary terms
  const glossaryResult = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/glossary/" } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            id
          }
        }
      }
    }
  `);

  if (glossaryResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading glossary terms`,
      glossaryResult.errors
    );
    return;
  }

  const sortedGlossary = glossaryResult.data.allMarkdownRemark.nodes
    .map((node) => ({
      ...node,
      frontmatter: {
        ...node.frontmatter,
        id: node.frontmatter.id, 
      },
    }))
    .sort((a, b) => a.frontmatter.id - b.frontmatter.id);

  // Create a page for each glossary term

  if (sortedGlossary.length > 0) {
    sortedGlossary.forEach((term) => {
      createPage({
        path: term.fields.slug,
        component: glossaryTerm,
        context: {
          id: term.id,
        },
      });
    });
  }

  // Extract glossary slugs
  const glossarySlugs = glossaryResult.data.allMarkdownRemark.nodes
    .map((node) => node.fields.slug)
    .filter((slug) => slug.startsWith("/glossary/"));

  // Query for all markdown slide posts sorted by id
  const slidesResult = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { id: ASC } }, limit: 1000, filter: {
        fields: {
          slug: { nin: ${JSON.stringify(glossarySlugs)} }
        }
      }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            id
          }
        }
      }
    }
  `);

  if (slidesResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your slides`,
      slidesResult.errors
    );
    return;
  }

  const sortedSlides = slidesResult.data.allMarkdownRemark.nodes
    .map((node) => ({
      ...node,
      frontmatter: {
        ...node.frontmatter,
        id: node.frontmatter.id, 
      },
    }))
    .sort((a, b) => a.frontmatter.id - b.frontmatter.id);

  if (sortedSlides.length > 0) {
    sortedSlides.forEach((item, index) => {
      const previousSlideId = index === 0 ? null : sortedSlides[index - 1].id;
      const nextSlideId =
        index === sortedSlides.length - 1 ? null : sortedSlides[index + 1].id;

      createPage({
        path: item.fields.slug,
        component: slide,
        context: {
          id: item.id,
          previousPostId: previousSlideId,
          nextPostId: nextSlideId,
        },
      });
    });
  }
};
//   if (sortedSlides.length > 0) {
//     sortedSlides.forEach((slide, index) => {
//       const previousSlideId = index === 0 ? null : sortedSlides[index - 1].id
//       const nextSlideId = index === sortedSlides.length - 1 ? null : sortedSlides[index + 1].id

//       createPage({
//         path: slide.fields.slug,
//         component: slide,
//         context: {
//           id: slide.id,
//           previousPostId: previousSlideId,
//           nextPostId: nextSlideId,
//         },
//       })
//     })
//   }
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode });

    // Dodaj prefix '/glossary/' do sluga
    if (node.fileAbsolutePath.includes("/glossary/")) {
      slug = `/glossary${slug}`;
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      id: String
    }

    type Fields {
      slug: String
    }
  `);
};
