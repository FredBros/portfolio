import React from "react";
import { TechList, Tooltip, ExtLinksProject} from "../";
import { CardProjectData } from "../../types/data";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";
import { useTheme } from "next-themes";




type Props = {
  cardData: CardProjectData;
  isEven?: boolean;
  isLargeScreen?: boolean;
};

const CardProject = ({ cardData, isEven, isLargeScreen = false}: Props) => {
      const { theme, setTheme } = useTheme();

  return (
    <div
      className={`card-project-wrap ${isLargeScreen ? "large-screen" : ""} ${
        theme === "dark" ? "card-project-wrap-dark" : "card-project-wrap-light"
      } ${isEven ? "is-even" : "is-odd"}`}
    >
      <h3 className={theme === "dark" ? "card-title-dark" : "card-title-light"}>
        {cardData.title}
      </h3>
      <div className="card-content">
        <p>{cardData.subtitle}</p>
        <TechList data={cardData.techno} color={"var(--green)"} />
        <div className="image-card-wrap">
          <div className="styled-image-wrap">
            <div className="image-layout">
              <img src={cardData.cardImage.url} alt="image project"/>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="links-wrap">
            <ExtLinksProject
              githubLink={cardData.githubLink}
              websiteLink={cardData.websiteLink}
              theme={theme}
            />
            <div className="see-more animated-link">
              <Tooltip
                delay={300}
                direction={"left"}
                content="more informations"
                backgroundColor={`${
                  theme === "dark" ? "var(--dark-gray)" : "#DD7DFF"
                }`}
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

          height: 380px;
        }
        .card-project-wrap-dark {
          border: 1px solid var(--green);
        }
        .card-project-wrap-light {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          border: 2px solid #000;
          border-radius: 15px;
          box-shadow: 5px 5px 0px #000;
          transition: all 0.3s ease-out;
          padding: 5px;
        }
        .card-project-wrap-light:hover {
          box-shadow: 15px 15px 0px #000;
          transform: translate(-10px, -10px);
        }
        .large-screen {
          grid-column: ${isEven ? "1 / 2" : "2 / 3"};
          transform: ${isEven ? "translateY(-80%)" : ""};
        }
        .card-title-dark {
          font-family: "Fira Code", monospace;
          position: absolute;
          display: inline-block;
          background-color: var(--background-color);
          color: var(--green);
          transform: translateY(-50%);
          padding: 0 5px 0 10px;
        }
        .card-content {
          padding: 0 10px 55px;
          position: relative;
          padding-top: 15px;
          height: ${theme === "dark" ? "100%" : "95%"};
          max-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .card-content p {
          font-size: 14px;
        }
        .image-card-wrap {
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 10px 2px 10px;
          position: relative;
          transition: all 0.3s;
          border: ${theme === "dark" ? "none" : "2px solid #000"};
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
          background-color: ${theme === "dark" ? "var(--green)" : "none"};
          mix-blend-mode: ${theme === "dark" ? "screen" : "normal"};
        }
        .image-layout {
          position: relative;
          max-height: 100%;
          mix-blend-mode: ${theme === "dark" ? "multiply" : "normal"};
          filter: ${theme === "dark" ? "grayscale(100%) contrast(1)" : "none"};
        }
        .image-card-wrap:hover .image-layout {
          mix-blend-mode: normal;
          filter: none;
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
          .card-project-wrap-light.is-even:hover {
            box-shadow: 15px 15px 0px #000;
            transform: translateX(-10px) translateY(-80%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default CardProject;
