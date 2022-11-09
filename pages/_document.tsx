import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Coinratecap" />
        <meta name="description" content="Coinratecap demo" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </Head>
      <body className="font-mont text-shade">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
