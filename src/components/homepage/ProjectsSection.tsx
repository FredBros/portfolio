import React from 'react'
import { TitleSection, SectionContainer, VerticalSection, ProjectsCarousel } from "../";
import {CardsProjectData, ProjectsSectionData} from "../../types/data"


type Props = {
  data: ProjectsSectionData;
  cardsData: CardsProjectData;
};
const ProjectsSection = ({data, cardsData}:Props) => {
  return (
    <>
      <SectionContainer>
        <VerticalSection>
          <div className="projects-wrap">
            <TitleSection>{data.title}</TitleSection>
            <div className="description">
              <p>{data.description}</p>
            </div>
            <div className="carousel">
              <ProjectsCarousel cardsData={cardsData} />
            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
    </>
  );
}

export default ProjectsSection