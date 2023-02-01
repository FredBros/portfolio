import React from "react";
import {MenuButton} from "../"

const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <div className="brand">
          <h3 className="firacode">FredBrowww.</h3>
        </div>
        <MenuButton />
      </div>
      <style jsx>{`
        .header-wrap {
          height: var(--header-height);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--green);
        }
        h3 {
          color: var(--green);
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default Header;
