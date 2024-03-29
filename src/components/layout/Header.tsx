import Link from "next/link";
import React from "react";
import { MenuButton, ContactButton, SwitchTheme } from "../";
import { useTheme } from "next-themes";





const Header = () => {

    const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="header-wrap">
        <div className="brand">
          <Link href="/">
            <h3>FredBrowww.</h3>
          </Link>
        </div>
        <div className="right-side">
          <SwitchTheme />
          <div className="menu-btn-wrap">
            <MenuButton />
          </div>
          <div className="contact-btn-wrap">
            <ContactButton />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header-wrap {
          z-index: 10;
          height: var(--header-height);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--green);
          background: var(--background-color);
        }
        .brand {
          color: var(--green);
        }
        .brand:hover {
          filter: brightness(1.15);
        }
        h3 {
          font-family: ${theme === "dark"
            ? "'Fira Code', monospace"
            : "inherit"};
          padding: 15px;
        }
        .right-side {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .menu-btn-wrap {
          display: block;
        }
        .contact-btn-wrap {
          display: none;
          height: 100%;
        }
        @media screen and (min-width: 768px) {
          .header-wrap {
            margin-left: 80px;
          }
          .menu-btn-wrap {
            display: none;
          }
          .contact-btn-wrap {
            display: ${theme === "dark" ? "block" : "flex"};
            margin-left: 20px;
            align-items: center;
            justify-content: center;
            padding-right: ${theme === "dark" ? "0" : "20px"};
          }
        }
      `}</style>
    </>
  );
};

export default Header;