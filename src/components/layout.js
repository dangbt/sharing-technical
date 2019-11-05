import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
const ListLink = props => (
  <li className="hover:text-blue-500 inline-block mr-4">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
  <div className="container mx-auto max-w-2xl font-sans ">
    <header className="flex flex-row items-center justify-between mt-8">
      <Link to="/">
        <h3 className="font-sans no-underline uppercase font-bold text-3xl text-blue-500">{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
    {children}
    <footer className="h-64">

    </footer>
  </div>
)}