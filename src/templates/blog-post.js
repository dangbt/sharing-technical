import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default (props) => {
  const data = props.data
  const post = data.markdownRemark;
  return (
    <Layout {...props}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className="content">
        <h1 className="text-5xl font-bold uppercase">
          {post.frontmatter.title}
        </h1>
        <p>{post.frontmatter.date}</p>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.html }} />
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            paddingTop: 20
          }}
        >
          **** Thank you for reading ****
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
    }
  }
`;
