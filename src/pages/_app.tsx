import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "@/components";
import {MyContextProvider} from "@/context/MyContex";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContextProvider>
  );
}
