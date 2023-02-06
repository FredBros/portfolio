import { RichText } from '@graphcms/rich-text-react-renderer';
import React from 'react'
import { TitleSection, SectionContainer, VerticalSection, MailButton, ContactContent } from "../"
import { ContactData,  } from "../../types/data";

type Props = {
    data: ContactData,
}

const ContactSection = ({data }:Props) => {
  return (
    <>
      <SectionContainer padding={0}>
        <VerticalSection>
          <TitleSection>{data.title}</TitleSection>
        </VerticalSection>
        <ContactContent data={data} />
      </SectionContainer>
    </>
  );
}

export default ContactSection