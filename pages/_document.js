import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { NORMALIZE_URL } from '../src/constants';

const font = `
  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-Light.woff2') format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-Regular.woff2') format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-SemiBold.woff2') format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-Bold.woff2') format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-Black.woff2') format('woff2');
    font-weight: 900;
  }

  @font-face {
    font-family: 'TM Sans';
    src: url('/static/fonts/TMSans-Italic.woff2') format('woff2');
    font-style: italic;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: TM Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    letter-spacing: 0.3px;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes"
          />
          <title>Brand Site</title>
          <style>{font}</style>
          {styleTags}
          <link rel="stylesheet" type="text/css" href={NORMALIZE_URL} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
