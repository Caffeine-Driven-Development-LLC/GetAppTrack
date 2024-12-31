import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import theme from "@/app/theme";
import {Container, CssBaseline, Stack} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  return (
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
  )
}