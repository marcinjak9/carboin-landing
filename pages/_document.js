// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'


const phship = `
<script>
  window.productHuntUpcoming = {
    appId: 19617,
    position: 'bottomLeft',
  };

  (function(doc, scr, src, a, b) {
    a = doc.createElement(scr);
    b = doc.getElementsByTagName(scr)[0];
    a.async = true;
    a.src = src;
    b.parentNode.insertBefore(a, b);
  })(document, 'script', 'https://assets.producthunt.com/assets/upwigloader.js');
</script>
`

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
        {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <div dangerouslySetInnerHTML={{ __html: phship }} /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;