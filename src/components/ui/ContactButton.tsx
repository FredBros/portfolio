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
          height: ${theme === "dark" ? "100%" : "60px"};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          background: ${theme === "dark" ? "var(--green)" : "#2FFF2F"};
          color: ${theme === "dark"
            ? "var(--background-color)"
            : "var(--foreground-color)"};
          ${theme != "dark"
            ? "border: 2px solid #000; box-shadow: 5px 5px 0px #000;"
            : ""}
          transition: all ease 0.3s;
        }
        .contact-button:hover {
          ${theme === "dark" ? "filter: brightness(1.15);" : "box-shadow: 10px 10px 0px #000; transform: translate(-5px, -5px);"};
        p {
          font-weight: ${theme === "light" ? "800" : "700"};
        }
      `}</style>
    </>
  );
}

export default ContactButton