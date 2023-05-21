import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import {MailButton} from "../";
import { ContactData } from "../../types/data";

type Props = {
  data: ContactData;
};

const ContactContent = ({ data }: Props) => {
  return (
    <>
      <div className="contact-content">
        <h2>{data.subtitle}</h2>
        <RichText content={data.paragraph.raw} />
        <div className="button-wrap">
          <MailButton link={data.email} />
        </div>
      </div>
      <style jsx>{`
        .contact-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--green);
          color: var(--background-color);
          padding: 10px;
          padding-bottom: 30px;
        }
        h2 {
          font-size: clamp(2.88rem, 4.26rem + -4.416vw, 1.5rem);
        }
        .button-wrap {
          margin: 50px auto 0 auto;
        }
        @media screen and (min-width: 1000px) {
          .contact-content {
            padding: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactContent