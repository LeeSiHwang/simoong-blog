import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CDN } from 'utils/constants';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href={`${CDN}/fav.ico`}
            type="image/x-icon"
            sizes="any"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
