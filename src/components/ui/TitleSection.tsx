import React from 'react'

const TitleSection = ({ children, theme, color }: { children: React.ReactNode | string, theme: string | undefined , color: string | undefined}) => {
  return (
    <h2
      className={
        theme === "dark" ? "title-section-dark" : "title-section-light"
      }
    >
      {children}
      <style jsx>{`
        .title-section-dark {
          font-family: "Fira Code", monospace;
          padding: 0 0.8rem;
          display: inline-block;
          color: var(--green);
          background: var(--background-color);
          font-size: 1.5rem;
          transform: translateY(-50%);
          z-index: 1;
          margin-bottom: 50px;
        }
        .title-section-light {
          font-family: inherit;
          display: inline-block;
          border: solid 2px #000;
          padding: 5px 10px;
          background-color: ${color};
          box-shadow: 5px 5px 0px #000;
          margin-bottom: 50px;
        }
      `}</style>
    </h2>
  );
}

export default TitleSection