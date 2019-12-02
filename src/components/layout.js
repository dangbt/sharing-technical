import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
// const ListLink = props => (
//   <li className="inline-block mr-4 hover:text-blue-500">
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// );

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
  );
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <h1 className="font-sans text-3xl font-bold text-blue-500 no-underline uppercase">
            {data.site.siteMetadata.title}
          </h1>
        </Link>
        {/* <ul style={{ listStyle: `none`, float: `right`, display: 'flex' }}>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul> */}
      </header>
      {children}
      <footer className="h-64"></footer>
    </div>
  );
};
