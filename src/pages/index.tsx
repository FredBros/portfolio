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
        <title>Fred Brossard Portolio</title>
        <meta name="description" content="Fred Brossard Portolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tongs.ico" />
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
      revalidate: 6000,
    },
  };
}
