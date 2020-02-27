import React from "react";
import { graphql, Link } from "gatsby";
import "../styles/index.css";

import Layout from "../components/layout";

export default (props) => {
  const data = props.data
  return (
    <Layout {...props}>
      <div className="flex flex-row">
        <div className="w-1/5 mr-4">
          ahihi
        </div>
        <div className="w-4/5">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div key={node.id} className="mt-4">
              <Link className="link" to={node.fields.slug}>
                <h2 className="font-sans text-xl font-bold text-gray-800 no-underline">
                  {index + 1}. {node.frontmatter.title}{" "} - 
                  <span className="" > {node.frontmatter.date}</span>
                </h2>
              </Link>
              <p className="ml-5">{node.excerpt || '...'}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query  {
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
