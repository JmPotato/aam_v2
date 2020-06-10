import React from "react";
import Layout from "../components/layout";

export default function Home({ data }) {
  const home = data.markdownRemark;
  return (
    <Layout>
      <h1>{home.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: home.html }} />
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "home" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
