import React from 'react'
import { BiCaretRight} from "react-icons/bi"

type Props = {
    data: [string]
}

const TechList = ({data }:Props) => {
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
          gap: 10px;
          margin-bottom: 10px;
          line-height: 0.5;
          font-size: 0.75rem;
          font-weight: 100;
          letter-spacing: 0.03rem;
          color: var(--green);
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