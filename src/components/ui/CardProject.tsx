import React from 'react'
import Image from 'next/image'
import {CardProjectData} from "../../types/data"
import {CgMoreO} from "react-icons/cg"
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';



type Props ={
    cardData: CardProjectData
}

const CardProject = ({cardData}:Props) => {
  return (
    <div className="card-project-wrap">
      <h3 className="firacode card-title">{cardData.title}</h3>
      <div className="card-content">
        <p>{cardData.subtitle}</p>
        <div className="image-wrap">
          <Image
            alt={cardData.title}
            src={cardData.cardImage.url}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 600px) 60vw, 300px"
          />
        </div>
        <div className="card-footer">
          <div className="external-links">
            <a href={cardData.githubLink} target="_blank" rel="noreferrer">
              <BsGithub size={32} />
            </a>
            <a href={cardData.websiteLink} target="_blank" rel="noreferrer">
              <FiExternalLink size={32} />
            </a>
          </div>
          <div className="see-more">
            <Link href={`/projects/${cardData.slug}`}>
              <CgMoreO size={32} />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-project-wrap {
          margin: 10px;
          border: 1px solid var(--green);
          padding: 0 10px 10px 10px;
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
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .image-wrap {
          margin: 15px 0;
          position: relative;
          width: auto;
          height: 200px;
        }
        .card-footer {
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
      `}</style>
    </div>
  );
}

export default CardProject