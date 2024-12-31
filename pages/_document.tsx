import {Head, Html, Main, NextScript} from 'next/document'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {Container} from "@mui/material";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body>
      <Container disableGutters={true} maxWidth={'xl'}>
        <AppRouterCacheProvider>
          <Main/>
          <NextScript/>
        </AppRouterCacheProvider>
      </Container>
      </body>
    </Html>
  )
}