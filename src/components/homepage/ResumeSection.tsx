import React from 'react'
import { ResumeData } from '@/types/data';
import { BiCaretRight } from "react-icons/bi";
import {
  TitleSection,
  SectionContainer,
  VerticalSection,
} from "../";
import { useTheme } from "next-themes";


type Props = {
  data: ResumeData
}

const ResumeSection = ({ data }: Props) => {
        const { theme, setTheme } = useTheme();

  return (
    <>
      <SectionContainer theme={theme} id={"resume"}>
        <VerticalSection>
          <div className="resume-wrap">
            <TitleSection theme={theme} color={"#FF4911"}>
              {data.title}
            </TitleSection>
            <p>{data.subtitle}</p>
            <ul className="resume-link-list">
              <li className="firacode">
                <a
                  href={data.pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiCaretRight />
                  <p>Download .pdf</p>
                </a>
              </li>
              <li className="firacode">
                <a
                  href={data.urlInline}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .resume-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
            ${theme === "light" &&
            "border: solid 2px #000; background-color: #DD7DFF; padding: 10px 10px 30px 10px"}
          
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