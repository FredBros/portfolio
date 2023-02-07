import React from "react";
import { HeroData } from "@/types/data";
import { Title, SectionContainer, VerticalSection, StyledImage } from "..";
import Image from "next/image";

type Props = {
  data: HeroData;
};

const HeroSection = ({ data }: Props) => {
  return (
    <>
      <SectionContainer isBordered={false}>
        <VerticalSection>
          <div className="hero-section" id="home">
            <div className="hi firacode">Hi, my name is</div>
            <Title>
              <span className="initial">F</span>red{" "}
              <span className="initial">B</span>
              rossard
            </Title>
            <Title color={"var(--middle-gray)"}>{data.subtitle}</Title>
            <p>{data.paragraph}</p>
            <div className="image-wrap">
              <StyledImage url={data.picture.url} />
            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 80px);
          justify-content: center;
        }
        .hi {
          color: var(--green);
          font-size: 1.125rem;
          margin-bottom: 20px;
        }
        .initial {
          color: var(--green);
        }
        p {
          margin: 40px 0;
        }
        .image-wrap {
          max-width: 300px;
          max-height: 300px;
          height: 60vw;
          width: 60vw;
          margin: 40px auto 50px auto;
        }

        .portrait-wrap::after {
          z-index: -1;
          position: absolute;
          content: "";
          height: 100%;
          width: 100%;
          top: 0;
          transform: translate(15%, 15%);
          border: 1px solid var(--green);
          transition: all 0.3s ease-in-out;
        }
        .portrait-wrap::before {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          mix-blend-mode: screen;
        }
        .portrait {
          height: 100%;
          width: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
          position: relative;
        }
        .portrait-wrap:hover .portrait {
          mix-blend-mode: normal;
          filter: none;
        }
        .portrait-wrap:hover {
          background-color: var(--light-gray);
        }
        .portrait-wrap:hover::after {
          transform: translate(10%, 10%);
        }
      `}</style>
    </>
  );
};

export default HeroSection;
