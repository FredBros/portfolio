import { RichText } from '@graphcms/rich-text-react-renderer';
import React from 'react'
import {
  TitleSection,
  SectionContainer,
  VerticalSection,
  ContactContent,
  ResumeSection,
} from "../";
import { ContactData, ResumeData  } from "../../types/data";

type Props = {
    data: ContactData,
    resumeData: ResumeData,

}

const ContactSection = ({data, resumeData }:Props) => {
  return (
    <>
      <SectionContainer>
        <VerticalSection>
          <TitleSection>{data.title}</TitleSection>
          <ResumeSection data={resumeData} />
        </VerticalSection>
      </SectionContainer>
      <SectionContainer padding={0}>
        <div className="contact-wrap" id="contact">
          <ContactContent data={data} />
        </div>
      </SectionContainer>
    </>
  );
}

export default ContactSection