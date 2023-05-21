import React from 'react'
import { BiCaretRight} from "react-icons/bi"
import { useTheme } from "next-themes";


type Props = {
    data: [string]
    color?:string
    gap?:number
}

const TechList = ({data, color, gap}:Props) => {
    const { theme, setTheme } = useTheme();

  return (
    <ul className="tech-list">
      {data.map((tech, index) => (
        <li className={theme != "dark" ? "light-item" : ""} key={index}>
          {theme === "dark" ? <BiCaretRight /> : null}
          {tech}
        </li>
      ))}
      <style jsx>{`
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
          line-height: 0.5;
          font-size: 0.75rem;
          font-weight: 100;
          letter-spacing: 0.03rem;
          color: ${color || "inherit"};
          gap: ${gap || 5}px;
          max-width: 600px;
        }
        li {
          font-family: ${theme === "dark"
            ? "'Fira Code', monospace"
            : "inherit"};
          display: flex;
          align-items: center;
        }
        .light-item {
          border: solid 1px #000;
          border-radius: 100px;
          padding: 5px;
          background-color: #fff;
          font-weight: 600;
        }
       `}</style>
    </ul>
  );
};

export default TechList