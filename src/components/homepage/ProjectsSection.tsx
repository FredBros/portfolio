import React from 'react'
import { TitleSection, SectionContainer, VerticalSection, ProjectsCarousel, CardProject, TechList } from "../";
import {CardsProjectData, ProjectsSectionData} from "../../types/data"
import { capitalize } from '@/utils/capitalize';
import { useTheme } from "next-themes";


type Props = {
  data: ProjectsSectionData;
  cardsData: CardsProjectData;
};


const isEven=(value:number)=>(value + 1) % 2 === 0;

const ProjectsSection = ({data, cardsData}:Props) => {
        const { theme, setTheme } = useTheme();

  return (
    <>
      <SectionContainer theme={theme} id={"projects"}>
        <VerticalSection>
          <div className="projects-wrap">
            <TitleSection theme={theme} color={"#00FF75"}>
              {capitalize(data.title)}
            </TitleSection>
            <div className="description">
              <p className={theme != "dark" ? "p-light" : ""} >{data.description}</p>
            </div>
            <TechList data={data.technos} gap={theme === "light" ? 5 : 20} />
            <div className="carousel">
              <ProjectsCarousel cardsData={cardsData} />
            </div>
            <div className="projects-list">
              {cardsData.map((card, index) => (
                <CardProject
                  key={index}
                  cardData={card}
                  isEven={isEven(index)}
                  isLargeScreen={true}
                />
              ))}
            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .projects-wrap {
          ${theme === "light" &&
          "border: solid 2px #000; background-color: #9BAFEE; padding: 10px"}
        }
        .description {
          margin-bottom: 20px;
        }
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