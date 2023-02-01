import React, { useContext } from "react";
import { MyContext } from "@/context/MyContex";
import { Header, Footer, Navbar } from "../";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMenuOpen, toggleMenu } = useContext(MyContext);

  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <div className="navbar-wrap">
            <div className="close-navbar" onClick={toggleMenu}></div>
            <Navbar isOpen={isMenuOpen} />
          </div>
          <div className="page">{children}</div>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-rows: 1fr auto;
          overflow-x: hidden;
        }
        main {
          padding-top: 50px;
          width: 100%;
          margin: 0 auto;
          margin-top: var(--header-height);
          overflow-x: hidden;
        }
        .navbar-wrap {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
        }
        .page {
          transform: ${isMenuOpen ? "translateX(220px)" : "translateX(0)"};
          transition: transform 0.3s ease-in-out;
          width: 100%;
        }
        footer {
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .close-navbar {
          display: ${isMenuOpen ? "block" : "none"};
          position: absolute;
          top: 0;
          bottom:0;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
