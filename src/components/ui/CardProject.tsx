import React from "react";
import { TechList, Tooltip, ExtLinksProject} from "../";
import { CardProjectData } from "../../types/data";
import { CgMoreO } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";



type Props = {
  cardData: CardProjectData;
  isEven?: boolean;
  isLargeScreen?: boolean;
};

const CardProject = ({ cardData, isEven, isLargeScreen = false }: Props) => {
  return (
    <div className={`card-project-wrap ${isLargeScreen ? "large-screen" : ""}`}>
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
        <div className="card-footer">
          <TechList data={cardData.techno} color={"var(--green)"} />
          <div className="links-wrap">
            <ExtLinksProject githubLink={cardData.githubLink} websiteLink={cardData.websiteLink}/>
            <div className="see-more animated-link">
              <Tooltip
                delay={300}
                direction={"left"}
                content="more informations"
                backgroundColor={"var(--dark-gray)"}
                color={"var(--foreground-color)"}
              >
                <Link href={`/projects/${cardData.slug}`}>
                  <CgMoreO size={32} />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-project-wrap {
          margin: 10px;
          border: 1px solid var(--green);
          height: 380px;
        }
        .large-screen {
          grid-column: ${isEven ? "1 / 2" : "2 / 3"};
          transform: ${isEven ? "translateY(-80%)" : ""};
        }
        .card-title {
          position: absolute;
          display: inline-block;
          background-color: var(--background-color);
          color: var(--green);
          transform: translateY(-50%);
          padding: 0 5px 0 10px;
        }
        .card-content {
          padding: 0 10px 85px;
          position: relative;
          padding-top: 15px;
          height: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .image-card-wrap {
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 10px 2px 10px;
          position: relative;
          transition: all 0.3s;
        }
        .card-footer {
          color: var(--foreground-color);
          padding: 5px 10px;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .links-wrap {
          color: var(--green);
          display: flex;
          justify-content: space-between;
          transition: all 0.3s ease-in-out;
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
        .styled-image-wrap {
          display: block;
          height: 100%;
          background-color: var(--green);
          mix-blend-mode: screen;
        }
        .image-layout {
          position: relative;
          max-height: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
        }
        .image-card-wrap:hover .image-layout {
          mix-blend-mode: normal;
          filter: none;
        }
        .image-card-wrap:hover {
          z-index: 2;
          overflow: visible;
          {/* transform: scale(1.2); */}
        }

        .card-content img {
          position: relative;
          object-fit: cover;
          max-height: 100%;
        }
        @media screen and (min-width: 1000px) {
          .card-project-wrap {
            height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

export default CardProject;
