import React from 'react'
import { TitleSection, SectionContainer, VerticalSection, ProjectsCarousel, CardProject } from "../";
import {CardsProjectData, ProjectsSectionData} from "../../types/data"
import { capitalize } from '@/utils/capitalize';

type Props = {
  data: ProjectsSectionData;
  cardsData: CardsProjectData;
};


// const isEven=(value:number)=>(value + 1) % 2 === 0;

const ProjectsSection = ({data, cardsData}:Props) => {
  return (
    <>
      <SectionContainer>
        <VerticalSection>
          <div className="projects-wrap">
            <TitleSection>{capitalize(data.title)}</TitleSection>
            <div className="description">
              <p>{data.description}</p>
            </div>
            <div className="carousel">
              <ProjectsCarousel cardsData={cardsData} />
            </div>
            {/* <div className="projects-list">
              {cardsData.map((card, index) => (
                <CardProject
                  key={index}
                  cardData={card}
                  isEven={isEven(index)}
                  isLargeScreen={true}
                />
              ))}
            </div> */}
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .carousel {
          display: block;
        }
        .projects-list {
          display: none;
        }
        @media screen and (min-width: 1000px) {
          .carousel {
            display: none;
          }
          .projects-list {
            display: grid;
            align-items: stretch;
            grid-auto-columns: 1fr;
            grid-column-gap: 80px;
            grid-row-gap: 80px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
          }
        }
      `}</style>
    </>
  );
}

export default ProjectsSection