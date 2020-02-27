import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
const ListLink = props => (
  <li className={`inline-block mr-4 ${props.uri === props.to ? 'border-b-2 border-solid border-gray-600 ': null}`}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default (props) => {
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
    <>
      <div className="border-b-2 fixed inset-x-0 bg-white z-10">
        <header className="flex items-center justify-between container py-3 mx-auto">
          <Link className="link-hover-none" to="/">
            <h1 className="font-sans text-2xl font-bold text-black-500 no-underline uppercase">
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <ul style={{ listStyle: `none`, float: `right`, display: 'flex' }}>
            <ListLink uri={props.uri} to="/">Home</ListLink>
            <ListLink uri={props.uri} to="/about">About</ListLink>
          </ul>
        </header>
      </div>
      <div className="container mx-auto pt-16">
        {props.children}
      </div>
      <footer className="h-64"></footer>
    </>
  );
};
