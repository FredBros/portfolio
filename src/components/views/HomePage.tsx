import React from 'react'
import { HomePageData } from "@/types/data";
import { HeroSection, AboutSection, ProjectsSection } from "../";

type Props = {
  data: HomePageData;
};

const HomePage = ({ data }: Props) => {
  const {heroes, abouts}= data
  return (
    <>
      <HeroSection data={heroes[0]} />
      <AboutSection data={abouts[0]} />
      {/* <ProjectsSection/> */}
    </>
  );
};

export default HomePage