import Link from "next/link";
import React from "react";
import {MenuButton, ContactButton} from "../"




const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <div className="brand">
          <Link href="/">
            <h3 className="firacode">FredBrowww.</h3>
          </Link>
        </div>
        <div className="right-side">
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
        .brand:hover {
          filter: brightness(1.15);
        }
        h3 {
          color: var(--green);
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
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;