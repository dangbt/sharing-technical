import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import "../styles/index.css";

const ListLink = props => (
  <li className={`inline-block mr-4 ${props.uri === props.to ? 'border-b-2 border-solid border-gray-600 ': null}`}>
    <Link to={props.to} className='text-gray-800'>{props.children}</Link>
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
      <div className="fixed inset-x-0 z-10 bg-white border-b-2">
        <header className="container flex items-center justify-between py-3 mx-auto">
          <Link className="text-gray-800 link-hover-none" to="/">
            <h1 className="font-sans text-2xl font-bold no-underline uppercase text-black-500">
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <ul style={{ listStyle: `none`, float: `right`, display: 'flex' }}>
            <ListLink uri={props.uri} to="/">Home</ListLink>
            <ListLink uri={props.uri} to="/about">About</ListLink>
          </ul>
        </header>
      </div>
      <div className="container pt-16 mx-auto">
        {props.children}
      </div>
      <footer className="h-64"></footer>
    </>
  );
};
