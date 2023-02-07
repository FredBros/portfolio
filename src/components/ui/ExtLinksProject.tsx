import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Tooltip } from "../";

type Props = {
  githubLink: string;
  websiteLink:string;
};

const ExtLinksProject = ({ githubLink, websiteLink }:Props) => {
  return (
    <>
      <div className="external-links">
        <div className="animated-link">
          <Tooltip
            direction={"right"}
            delay={300}
            content="view repository"
            backgroundColor={"var(--dark-gray)"}
            color={"var(--foreground-color)"}
          >
            <a href={githubLink} target="_blank" rel="noreferrer">
              <BsGithub size={32} />
            </a>
          </Tooltip>
        </div>
        <div className="animated-link">
          <Tooltip
            delay={300}
            content="view website"
            backgroundColor={"var(--dark-gray)"}
            color={"var(--foreground-color)"}
          >
            <a href={websiteLink} target="_blank" rel="noreferrer">
              <FiExternalLink size={32} />
            </a>
          </Tooltip>
        </div>
      </div>
      <style jsx>{`
        .external-links {
          color: var(--green);
          position: relative;
          display: flex;
          gap: 20px;
        }
        a {
          position: relative;
          z-index: 0;
        }
        .animated-link {
          animation: all 0.3s ease-in-out;
        }
        .animated-link:hover {
          transform: scale(1.1);
          filter: brightness(1.15);
        }
      `}</style>
    </>
  );
};

export default ExtLinksProject