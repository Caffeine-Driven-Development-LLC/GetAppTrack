import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import theme from "../app/theme";
import {Container, CssBaseline, Stack} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container disableGutters={true} maxWidth={'xl'}>
          <Header/>
          <Stack spacing={3} sx={{padding: {xs: 3, sm: 5}}}>
            <Component {...pageProps} />
          </Stack>
          <Footer/>
        </Container>
      </ThemeProvider>
    </>
  )
}