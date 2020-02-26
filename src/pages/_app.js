import React from "react";
import App from "../components/App";
import PropTypes from "prop-types";

/**
 * Overrides the default Next.js App so that we can persist common layout
 * across page changes, and other advanced features like injecting data into pages.
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @returns {React.Component}
 */
const PortalApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <App />
      <main id="main" className="grid-container margin-bottom-8">
        <div className="grid-row">
          <div className="grid-col-fill">
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

PortalApp.propTypes = {
  // Next.js sets Component for us
  Component: PropTypes.elementType.isRequired,
  // Next.js sets pageProps for us
  pageProps: PropTypes.object
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "username",
      placeholder: "Email",
      required: true,
      type: "email",
      displayOrder: 1
    },
    {
      label: "Password",
      key: "password",
      placeholder: "Password",
      required: true,
      type: "password",
      displayOrder: 2
    }
  ]
};

export default PortalApp;
