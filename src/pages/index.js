import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import avatar from "../images/account.svg";

export default (props) => {
  const data = props.data
  return (
    <Layout {...props}>
      <div className="w-4/5 mx-auto">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id} className="mt-4">
            <Link className="link" to={node.fields.slug}>
              <h2 className="font-sans text-xl font-bold text-gray-800 no-underline hover:text-blue-600">
                {index + 1}. {node.frontmatter.title}{" "} - 
                <span className="" > {node.frontmatter.date}</span>
              </h2>
            </Link>
            <p className="ml-5">{node.excerpt || '...'}</p>
          </div>
        ))}
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
