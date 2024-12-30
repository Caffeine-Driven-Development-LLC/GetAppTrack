import {Head, Html, Main, NextScript} from 'next/document'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico"/>
      </Head>
      <body>
      <AppRouterCacheProvider>
        <Main/>
        <NextScript/>
      </AppRouterCacheProvider>
      </body>
    </Html>
  )
}