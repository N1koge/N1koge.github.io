import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>N1koge's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
