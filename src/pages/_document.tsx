import {Head, Html, Main, NextScript} from 'next/document'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {Container} from "@mui/material";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico"/>
      </Head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJ7K9WMVT6"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FJ7K9WMVT6');
      </script>
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
