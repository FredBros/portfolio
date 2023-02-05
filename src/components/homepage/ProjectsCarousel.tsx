import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CardsProjectData} from "../../types/data"
import {CardProject} from "../"


type Props = {
  cardsData: CardsProjectData;
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const ProjectsCarousel = ({ cardsData }: Props) => {
  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderDotsOutside={true}
      >
        {cardsData.map((cardData, index) => (
          <CardProject key={index} cardData={cardData} />
        ))}
      </Carousel>
      <style jsx>{`
          .carousel-container {
            margin-top: 40px;
          }         
        `}</style>
    </div>
  );
};

export default ProjectsCarousel