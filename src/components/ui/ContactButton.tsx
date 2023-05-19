import Link from 'next/link';
import React from 'react'
import { useTheme } from "next-themes";


const ContactButton = () => {
    const { theme, setTheme } = useTheme();
  return (
    <>
      <Link href="/contact">
        <div className="contact-button">
          <p>Contact</p>
        </div>
      </Link>
      <style jsx>{`
        .contact-button {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          background: var(--green);
          color: var(--background-color);
          transition: filter ease .3s;
        }
        .contact-button:hover {
          filter: brightness(1.15);
        }
        p {
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default ContactButton