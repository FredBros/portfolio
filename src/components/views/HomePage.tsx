import { useState, useEffect } from "react";
import { HomePageData } from "@/types/data";
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from "../";

type Props = {
  data: HomePageData;
};

const HomePage = ({ data }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { heroes, abouts, projectsSections, projects, contacts, resumes } = data;
   useEffect(() => {
     setMounted(true);
   }, []);

   if (!mounted) {
     return null;
   }
  return (
    <>
      <HeroSection data={heroes[0]} />
      <AboutSection data={abouts[0]} />
      <ProjectsSection data={projectsSections[0]} cardsData={projects} />
      <ContactSection data={contacts[0]} resumeData={resumes[0]}/>
    </>
  );
};

export default HomePage