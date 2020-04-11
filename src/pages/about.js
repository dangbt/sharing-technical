import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import avatar from "../images/account.svg";

export default props => {
  const data = props.data;
  return (
    <Layout {...props}>
      <div className="profile_container">
        <aside className="flex flex-row items-center justify-around profile-card">
          <header className="flex-1">
            <a href="#">
              <img src={avatar} className="" alt="" />
            </a>
            <h1 className="text-xl">Bùi Tấn Dâng</h1>
            <h2>Web Developer</h2>
          </header>
          <div
            style={{ flex: 2 }}
            className="flex flex-col items-center justify-center h-full left_container"
          >
            <div className="profile-bio">
              <p>
                I am a web developer. I worked at{" "}
                <a
                  className="font-bold text-blue-600"
                  href="https://www.vred.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VRED
                </a>{" "}
                company. This is a finance and ecommerce company. I kept the key
                role as web developer at the company and manage the interns.
                Currently, I am working at{" "}
                <a
                  className="font-bold text-blue-600"
                  href="https://be.com.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  be
                </a>
              </p>
            </div>
            <ul className="profile-social-links">
              <li>
                <a href="https://www.facebook.com/oO.tandang.Oo">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="#3b5998"
                      d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg viewBox="0 0 478.613 478.613">
                    <path
                      d="M427.501,200.695c1.776-11.238,2.884-23.56,3.163-37.377c-0.107-59.246-28.468-80.21-33.925-90.038
			c8.037-44.89-1.331-65.309-5.688-72.299c-16.07-5.704-55.91,14.722-77.678,29.101c-35.491-10.389-110.494-9.375-138.621,2.689
			C122.856-4.389,95.408,1.277,95.408,1.277s-17.745,31.82-4.691,78.371c-17.075,21.759-29.802,37.143-29.802,77.949
			c0,9.773,0.607,19.008,1.637,27.893c14.705,77.318,75.97,110.674,136.15,116.426c-9.056,6.881-19.928,19.903-21.432,34.992
			c-11.379,7.357-34.268,9.789-52.067,4.193c-24.939-7.88-34.486-57.266-71.833-50.221c-8.081,1.512-6.475,6.842,0.523,11.386
			c11.378,7.38,22.094,16.554,30.354,36.185c6.344,15.072,19.687,41.982,61.873,41.982c16.747,0,28.477-1.979,28.477-1.979
			s0.319,38.406,0.319,53.385c0,17.238-23.264,22.078-23.264,30.348c0,3.289,7.7,3.601,13.888,3.601
			c12.229,0,37.673-10.186,37.673-28.103c0-14.237,0.227-62.081,0.227-70.46c0-18.307,9.811-24.136,9.811-24.136
			s1.201,97.727-2.361,110.829c-4.177,15.408-11.744,13.219-11.744,20.076c0,10.233,30.589,2.502,40.735-19.897
			c7.849-17.495,4.334-113.331,4.334-113.331l8.183-0.178c0,0,0.094,43.892-0.188,63.944c-0.295,20.769-2.438,47.025,9.898,59.417
			c8.097,8.15,32.903,22.451,32.903,9.382c0-7.574-17.371-13.833-17.371-34.353V344.45c10.553,0,12.734,31.072,12.734,31.072
			l3.804,57.727c0,0-2.526,21.065,22.756,29.856c8.925,3.126,28.018,3.976,28.913-1.271c0.897-5.26-22.99-13.038-23.217-29.342
			c-0.123-9.93,0.445-15.742,0.445-58.934c0-43.168-5.799-59.137-26.007-71.863C355.669,295.681,416.536,269.51,427.501,200.695z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dang-bui-367b54188/">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m437 0h-362c-41.398438 0-75 34.601562-75 76v361c0 41.398438 33.601562 75 75 75h362c41.398438 0 75-33.601562 75-75v-361c0-41.398438-33.601562-76-75-76zm0 0"
                      fill="#25d9f8"
                    />
                    <path
                      d="m512 76v361c0 41.398438-33.601562 75-75 75h-181v-512h181c41.398438 0 75 34.601562 75 76zm0 0"
                      fill="#00c0f1"
                    />
                    <g fill="#ececf1">
                      <path d="m121 196h60v211h-60zm0 0" />
                      <path d="m121 106h60v60h-60zm0 0" />
                      <path d="m391 275.800781v131.199219h-60v-121c0-16.5-13.5-30-30-30s-30 13.5-30 30v121h-60v-211h60v11.398438c15.601562-5.097657 25.800781-11.398438 45-11.398438 40.800781 0 75 36.597656 75 79.800781zm0 0" />
                    </g>
                    <path
                      d="m391 275.800781v131.199219h-60v-121c0-16.5-13.5-30-30-30s-30 13.5-30 30v121h-15v-211h15v11.398438c15.601562-5.097657 25.800781-11.398438 45-11.398438 40.800781 0 75 36.597656 75 79.800781zm0 0"
                      fill="#e2e2e7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
