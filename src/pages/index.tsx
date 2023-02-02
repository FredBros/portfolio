import Head from "next/head";
import { HomePage } from "../components/";
import { getHomePageData } from "../services/hygraphRequest";
import { HomePageData } from "../types/data";
type Props = {
  data: HomePageData;
};

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage data={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await getHomePageData();
  return {
    props: {
      data,
    },
  };
}
