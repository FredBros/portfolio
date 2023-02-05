import React from 'react'
import { TechList } from "../";
import {CardProjectData} from "../../types/data"
import { CgMoreO} from "react-icons/cg"
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';
import { Tooltip } from "react-tooltip";



type Props ={
    cardData: CardProjectData
}

const CardProject = ({cardData}:Props) => {
  
  return (
    <div className="card-project-wrap">
      <h3 className="firacode card-title">{cardData.title}</h3>
      <div className="card-content">
        <p>{cardData.subtitle}</p>
        <div className="image-card-wrap">
          <div className="styled-image-wrap">
            <div className="image-layout">
              <img src={cardData.cardImage.url} />
            </div>
          </div>
        </div>
        <TechList data={cardData.techno} />
        <div className="card-footer">
          <div className="external-links">
            <a
              id={`github-${cardData.slug}`}
              href={cardData.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={32} />
            </a>
            <Tooltip
              anchorId={`github-${cardData.slug}`}
              content="open Github repository"
              place="top"
            />
            <a
              id={`website-${cardData.slug}`}
              href={cardData.websiteLink}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink size={32} />
            </a>
            <Tooltip
              anchorId={`website-${cardData.slug}`}
              content="open website"
              place="top"
            />
          </div>
          <div id={`seemore-${cardData.slug}`} className="see-more">
            <Link href={`/projects/${cardData.slug}`}>
              <CgMoreO size={32} />
            </Link>
          </div>
          <Tooltip
            anchorId={`seemore-${cardData.slug}`}
            content="more informations"
            place="top"
          />
        </div>
      </div>
      <style jsx>{`
        .card-project-wrap {
          margin: 10px;
          border: 1px solid var(--green);
          padding: 0 10px;
          height: 350px;
        }
        .card-title {
          position: absolute;
          display: inline-block;
          background-color: var(--background-color);
          color: var(--green);
          transform: translateY(-50%);
          padding: 0 5px;
        }
        .card-content {
          padding-top: 15px;
          height: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        .image-card-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35%;
          margin: 15px;
          position: relative;
        }
        .card-footer {
          padding: 3px 5px 10px 5px;
          display: flex;
          justify-content: space-between;
          color: var(--green);
          transition: all 0.3s ease-in-out;
        }
        .external-links {
          display: flex;
          gap: 20px;
        }
        a,
        .see-more {
          transition: all 0.3s ease-in-out;
        }
        a:hover,
        .see-more:hover {
          transform: scale(1.1);
          filter: brightness(1.15);
        }
        .styled-image-wrap {
          display: block;
          height: 100%;
          background-color: var(--green);
          mix-blend-mode: screen;
        }
        .image-layout {
          height: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
        }
        .card-project-wrap:hover .image-layout {
          mix-blend-mode: normal;
          filter: none;
        }
        img {
          position: relative;
          object-fit: contain;
          max-height: 100%;
        }
      `}</style>
    </div>
  );
}

export default CardProject