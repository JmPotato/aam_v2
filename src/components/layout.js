import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteURL
          }
        }
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
          edges {
            node {
              frontmatter {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteURL} />
      </Helmet>
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ListLink to={node.fields.slug}>{node.frontmatter.name}</ListLink>
            ))}
          </ul>
        </header>
        {children}
        <footer>
          Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> & Created by{" "}
          <a href="https://github.com/JmPotato/aam_v2">JmPotato</a>
        </footer>
      </div>
    </div>
  );
}
