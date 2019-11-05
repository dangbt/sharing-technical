import React from "react"
import { graphql, Link } from "gatsby"
import '../styles/index.css'

import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="">
        <div>
          <h1
          >
            Blog by Dâng đẹp trai =))
        </h1>
          <h4><span className="text-red-500">{data.allMarkdownRemark.totalCount}</span> Posts</h4>
        </div>
        <div className="mt-8">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="mt-4">
              <Link
                to={node.fields.slug}
              >
                <h3 className="font-sans no-underline font-bold text-3xl  text-gray-800 hover:text-blue-500">
                  {node.frontmatter.title}{" "}
                  <span
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
              </Link>
                <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

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
`