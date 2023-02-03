import React from 'react'
import { HomePageData } from "@/types/data";
import { HeroSection, AboutSection, ProjectsSection } from "../";

type Props = {
  data: HomePageData;
};

const HomePage = ({ data }: Props) => {
  const { heroes, abouts, projectsSections, projects } = data;
  return (
    <>
      <HeroSection data={heroes[0]} />
      <AboutSection data={abouts[0]} />
      <ProjectsSection data={projectsSections[0]} cardsData={projects} />
    </>
  );
};

export default HomePage