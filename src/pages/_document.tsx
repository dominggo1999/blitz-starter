import Document, { Html, Main, NextScript, Head, DocumentContext } from 'next/document'
import { ServerStyles, createStylesServer } from '@mantine/next'

const stylesServer = createStylesServer()

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
