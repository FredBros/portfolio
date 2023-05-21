import React from 'react'
import {AboutData, } from "../../types/data"
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useTheme } from "next-themes";
import {
  TitleSection,
  SectionContainer,
  VerticalSection,
  StyledImage,
} from "../";
type Props={
  data:AboutData
}
const AboutSection = ({data}:Props) => {
      const { theme, setTheme } = useTheme();

  return (
    <>
      <SectionContainer theme={theme} id={"about"}>
        <VerticalSection>
          <div className="about-wrap">
            <TitleSection theme={theme} color={"#DD7DFF"}>
              {data.title}
            </TitleSection>
            <div className="description">
              <RichText content={data.description.raw} />
            </div>
            <div
              className="portrait-wrap"
              style={{ display: theme != "dark" ? "none" : "block" }}
            >
              <StyledImage url={data.portrait.url} />
            </div>

            <div
              className="portrait-wrap"
              style={{ display: theme != "light" ? "none" : "block" }}
            >
              <img src={data.portraitLight.url} alt="portrait" />
            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .about-wrap {
          ${theme === "light" &&
          "border: solid 2px #000; background-color: #22A094; padding: 10px"}
        }
        .description {
          max-width: 75ch;
          margin: 0px 0 80px 0;
        }
        .portrait-wrap {
          max-width: 300px;
          max-height: 300px;
          height: 60vw;
          width: 60vw;
          margin: 40px auto 50px auto;
        }
      `}</style>
    </>
  );
}

export default AboutSection