import React from 'react'
import { BiCaretRight} from "react-icons/bi"

type Props = {
    data: [string]
    color?:string
    gap?:number
}

const TechList = ({data, color, gap }:Props) => {
  return (
    <ul className="tech-list">
      {data.map((tech, index) => (
        <li className="firacode" key={index}>
          <BiCaretRight />
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
          gap:${gap ||5}px;
        }
        li {
          display: flex;
          align-items: center;
        }
      `}</style>
    </ul>
  );
};

export default TechList