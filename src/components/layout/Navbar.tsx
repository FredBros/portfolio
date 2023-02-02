import Link from "next/link";
import React from "react";
import { menuItems } from "../../utils/menuItems";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import MenuButton from "./MenuButton";


type Props = {
  isOpen: boolean;
};

const Navbar = ({ isOpen }: Props) => {
  return (
    <>
      <div className="navbar">
        <div className="menu-btn-wrap">
          <MenuButton />
        </div>
        <div className="menu firacode">
          {menuItems.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <span className="menu-item">{item.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="social-wrap">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/fred-brossard-073358206/"
          >
            <BsLinkedin size={"30"} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/FredBros"
          >
            <BsGithub size={"30"} />
          </a>
          <a href="mailto: fred.b.devweb@gmail.com">
            <FiMail size={"30"} />
          </a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 100px;
          position: fixed;
          top: var(--header-height);
          width: 220px;
          bottom: 0;
          left: -220px;
          border-right: 1px solid var(--green);
          transform: ${isOpen ? "translateX(220px)" : "translateX(0)"};
          transition: transform 0.3s ease-in-out;
          background-color: var(--background-color);
        }
        .menu-btn-wrap {
          display: none;
          position: absolute;
          height: 80px;
          width: 80px;
          align-items: center;
          justify-content: center;
          top: 0;
          right: 0;
        }
        .menu {
          display: flex;
          flex-direction: column;
          font-size: 1.125rem;
          gap: 20px;
        }
        .menu-item {
          padding: 15px;
        }
        .menu-item {
          display: inline-block;
          position: relative;
          transition: transform 0.3s ease-in-out;
        }
        .menu-item::after {
          transform-origin: 0 0;
          position: absolute;
          left: 0;
          bottom: 0;
          content: "";
          width: 100%;
          height: 1px;
          background: var(--green);
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        .menu-item:hover {
          transform: translateX(25px);
          color: var(--green);
        }
        .menu-item:hover::after {
          transform: scaleX(1);
        }
        .social-wrap {
          padding: 30px;
          display: flex;
          flex-direction: column;
          color: var(--green);
          gap: 30px;
        }
        a{
          transition: all .2s;
        }
        a:hover {
          transform: scale(1.1);
          filter: brightness(1.15);
        }
        @media screen and (min-width: 768px) {
          .navbar {
            width: 300px;
            top: 0;
          }
          .menu-btn-wrap {
            display: flex;
          }
          .social-wrap {
            align-items: flex-end;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
