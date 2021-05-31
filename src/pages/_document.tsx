import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

interface InitialProps extends DocumentInitialProps {
  styles: ReactElement;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
