import '@/styles/globals.css'
import "@/styles/tooltip.css";
import type { AppProps } from 'next/app'
import { Layout } from "@/components";
import {MyContextProvider} from "@/context/MyContex";
import  {ThemeProvider} from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <ThemeProvider enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MyContextProvider>
  );
}
