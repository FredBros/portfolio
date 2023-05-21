import { RichText } from '@graphcms/rich-text-react-renderer';
import React from 'react'
import {
  TitleSection,
  SectionContainer,
  VerticalSection,
  ContactContent,
  ResumeSection,
} from "../";
import { ContactData } from "../../types/data";
import { useTheme } from "next-themes";


type Props = {
    data: ContactData,   

}

const ContactSection = ({data}:Props) => {
      const { theme, setTheme } = useTheme();

  return (
    <>
      <SectionContainer padding={0} theme={theme} id={"contact"}>
        <div className="contact-wrap">
          <ContactContent data={data} />
        </div>
      </SectionContainer>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default ContactSection