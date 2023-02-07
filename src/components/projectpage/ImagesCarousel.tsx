import React from 'react'
import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImagesProject } from "../../types/data";

type Props = {
  images: ImagesProject;
};


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const ImagesCarousel = ({images}:Props) => {
  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderDotsOutside={true}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="image-wrap">
              <Image
                key={index}
                src={image.url}
                fill
                alt={"Project image"}
                style={{ objectFit: "contain" }}
                priority={true}
              />
            </div>
          );
        })}
      </Carousel>
      <style jsx>{`
        .carousel-container {
          margin-top: 40px;
          padding-bottom: 40px;
          position: relative;
        }
        .image-wrap {
          margin: auto;
          object-fit: contain;
          position: relative;
          height: 400px;
        }
        @media screen and (min-width: 1000px) {
          .image-wrap {
            height: 60vh;
          }
        }
      `}</style>
    </div>
  );
}

export default ImagesCarousel