import Layout from '@components/Layout';
import { useStore } from '@store/index';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Absence Manager</title>
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </Provider>
  );
}

export default MyApp;
