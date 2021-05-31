import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Absence Manager</title>
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}

export default MyApp;
