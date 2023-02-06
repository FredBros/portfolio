import React from 'react'
import {ContactContent} from '../'
import { ContactData } from '@/types/data'

type Props = {
    data: ContactData
}
const ContactPage = ({data}:Props) => {
  return (
    <>
      <div className="page-wrap">
        <div className="contact-wrap">
          <ContactContent data={data} />
        </div>
      </div>
      <style jsx>{`
        .page-wrap {
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .contact-wrap{
            width: 100%;
        }
      `}</style>
    </>
  );
}

export default ContactPage