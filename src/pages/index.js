import React from "react";
import { graphql, Link } from "gatsby";
import "../styles/index.css";

import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="">
        <div>
          {/* <h4>
            <span className="text-red-500">
              {data.allMarkdownRemark.totalCount}
            </span>{" "}
            Posts
          </h4> */}
        </div>
        <div className="">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div key={node.id} className="mt-4">
              <Link className="link" to={node.fields.slug}>
                <h2 className="font-sans text-3xl font-bold text-gray-800 no-underline hover:text-blue-500">
                  {index + 1}. {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h2>
              </Link>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
