/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';

class ErrorPage extends Component {
  static propTypes() {
    return {
      errorCode: PropTypes.number.isRequired,
      // url: PropTypes.string.isRequired,
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    const { errorCode, router } = this.props; // eslint-disable-line
    let response;
    switch (errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div>
            <Head>{/* <style dangerouslySetInnerHTML={{__html: Styles}}/> */}</Head>
            <div className="pt-5 text-center">
              <h1 className="display-4">Page Not Found</h1>
              <p>
                The page <strong>{router.pathname}</strong> does not exist.
              </p>
              <p>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </p>
            </div>
          </div>
        );
        break;
      case 500:
        response = (
          <div>
            <Head>{/* <style dangerouslySetInnerHTML={{__html: Styles}}/> */}</Head>
            <div className="pt-5 text-center">
              <h1 className="display-4">Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </div>
          </div>
        );
        break;
      default:
        response = (
          <div>
            <Head>{/* <style dangerouslySetInnerHTML={{__html: Styles}}/> */}</Head>
            <div className="pt-5 text-center">
              <h1 className="display-4">HTTP {errorCode} Error</h1>
              <p>
                An <strong>HTTP {errorCode}</strong> error occurred while trying to access{' '}
                <strong>{router.pathname}</strong>
              </p>
            </div>
          </div>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);
