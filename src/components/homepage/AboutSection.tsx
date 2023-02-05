import React from 'react'
import {AboutData, } from "../../types/data"
import { RichText } from "@graphcms/rich-text-react-renderer";
import { TitleSection, SectionContainer, VerticalSection, StyledImage } from "../"
type Props={
  data:AboutData
}
const AboutSection = ({data}:Props) => {
  return (
    <>
      <SectionContainer>
        <VerticalSection>
          <div className="about-wrap">
            <TitleSection>{data.title}</TitleSection>
            <div className="description">
              <RichText content={data.description.raw} />
            </div>
            <div className="portrait-wrap">
              <StyledImage url={data.portrait.url} />
            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .description {
          max-width: 75ch;
          margin: 40px 0 80px 0;
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