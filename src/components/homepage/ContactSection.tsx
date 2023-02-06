import { RichText } from '@graphcms/rich-text-react-renderer';
import React from 'react'
import { TitleSection, SectionContainer, VerticalSection, MailButton } from "../"
import { ContactData,  } from "../../types/data";

type Props = {
    data: ContactData
}

const ContactSection = ({data}:Props) => {
  return (
    <>
      <SectionContainer padding={0} >
        <VerticalSection>
          <TitleSection>{data.title}</TitleSection>
          <div className="contact-wrap">
            <h2>{data.subtitle}</h2>
.              <RichText content={data.paragraph.raw} />
              <div className="button-wrap">
                <MailButton link={data.email} />
.            </div>
          </div>
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .contact-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--green);
          color: var(--background-color);
          padding: 10px;
        }
        .button-wrap{
            margin: 50px auto 0 auto;
        }
      `}</style>
    </>
  );
}

export default ContactSection