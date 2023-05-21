import React from "react";
import { HeroData } from "@/types/data";
import { Title, SectionContainer, VerticalSection, StyledImage } from "..";
import { useTheme } from "next-themes";


type Props = {
  data: HeroData;
};

const HeroSection = ({ data }: Props) => {
    const { theme, setTheme } = useTheme();

  return (
    <>
      <SectionContainer isBordered={false}>
        <VerticalSection>
          <div className="hero-section" id="home">
            <div className="hi">Hi, my name is</div>
            <Title theme={theme!}>
              <span className="initial">F</span>red{" "}
              <span className="initial">B</span>
              rossard
            </Title>
            <div
              className="subtitle-dark"
              style={{ display: theme != "dark" ? "none" : "block" }}
            >
              <Title color={"var(--middle-gray)"} theme={theme!}>
                {data.subtitle}
              </Title>
            </div>
            <div
              className="subtitle-light"
              style={{ display: theme != "light" ? "none" : "inline-block" }}
            >
              {data.subtitle}
            </div>
            <p className={theme != "dark" ? "p-light" : ""}>{data.paragraph}</p>
            <div
              className="image-wrap"
              style={{ display: theme != "dark" ? "none" : "block" }}
            >
              <StyledImage url={data.picture.url} />
            </div>
            <div
              className="image-wrap"
              style={{ display: theme === "light" ? "block" : "none" }}
            >
              <img src={data.portraitLight.url} alt="portrait" />
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
          font-family: ${theme === "light"
            ? "inherit"
            : "'Fira Code', monospace"};
          color: var(--green);
          font-size: ${theme != "light"
            ? "1.125rem"
            : "clamp(1.125rem, 0.3381rem + 1.6393vw, 1.875rem)"};
          margin-bottom: 20px;
        }
        .initial {
          color: var(--green);
        }
        p {
          margin: 40px 0;
        }
        .subtitle-light {
          font-size: clamp(0.875rem, 0.3043rem + 2.6087vw, 2.75rem);
          font-weight: 900;
          background-color: #ffc700;
          border: 2px solid #000;
          margin: 10px auto 0 0;
          padding: 5px;
        }
        .image-wrap {
          max-width: 300px;
          max-height: 300px;
          height: 60vw;
          width: 60vw;
          margin: 40px auto 50px auto;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
