import React from 'react'
import { HomePageData } from "@/types/data";
import {Hero} from "../"

type Props = {
  data: HomePageData;
};
const HomePage = ({ data }: Props) => {
  const {heroes, abouts}= data
  console.log(heroes);
  return (
    <>
      <Hero data={heroes[0]} />
    </>
  );
};

export default HomePage