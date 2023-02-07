import React from 'react'
import { ResumeData } from '@/types/data';
import { BiCaretRight } from "react-icons/bi";


type Props = {
  data: ResumeData
}

const ResumeSection = ({ data }: Props) => {
  return (
    <>
      <div className="resume-wrap" id="resume" >
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
        <ul className="resume-link-list">
          <li className="firacode">
            <a href={data.pdf.url} target="_blank" rel="noopener noreferrer">
              <BiCaretRight />
              <p>Download .pdf</p>
            </a>
          </li>
          <li className="firacode">
            <a href={data.urlInline} target="_blank" rel="noopener noreferrer">
              <BiCaretRight />
              <p>Resume online</p>
            </a>
          </li>
          {data.urlMobile && (
            <li className="firacode">
              <a
                href={data.urlInline}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiCaretRight />
                <p>Mobile version</p>
              </a>
            </li>
          )}
        </ul>
      </div>
      <style jsx>{`
        .resume-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .resume-link-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        li {
          margin-right: 40px;
        }
        li a {
          display: inline;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        a p {
          transition: transform 0.3s ease-in-out;
        }
        a:hover {
          color: var(--green);
        }
        a:hover p {
          transform: translateX(10px);
        }
      `}</style>
    </>
  );
};

export default ResumeSection;