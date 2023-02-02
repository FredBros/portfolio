import Link from 'next/link';
import React from 'react'

const ContactButton = () => {
  return (
    <>
      <div className="contact-button">
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <style jsx>{`
        .contact-button {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          background: var(--green);
          color: var(--background-color);
        }
          p{
            font-weight: 700;
          }
        }
      `}</style>
    </>
  );
}

export default ContactButton