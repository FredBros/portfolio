import React from 'react'
import {AboutData, } from "../../types/data"
import { RichText } from "@graphcms/rich-text-react-renderer";
import { TitleSection, SectionContainer, VerticalSection, Portrait } from "../"
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
          <Portrait url={data.portrait.url} />
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .description {
          max-width: 75ch;
          margin: 40px auto 80px auto;
        }
      `}</style>
    </>
  );
}

export default AboutSection