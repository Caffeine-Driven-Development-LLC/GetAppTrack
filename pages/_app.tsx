import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import theme from "@/app/theme";
import {CssBaseline, Stack} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import AppTitle from "@/app/components/app_title";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppTitle />
      <Stack spacing={3} sx={{padding: 3}}>
        <Component {...pageProps} />
      </Stack>
    </ThemeProvider>
  )
}