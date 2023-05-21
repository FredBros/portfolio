import React from 'react'
import { getSlugs, getProjectDetails } from "@/services/hygraphRequest";
import { GetStaticProps } from "next";
import { ProjectDetails } from "@/types/data";
import { VerticalSection, SectionContainer, ImagesCarousel, Title, TechList, ExtLinksProject } from '@/components';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useTheme } from 'next-themes';

type Props = {
  data: ProjectDetails;
};

const Project = ({data}:Props) => {
const { theme, setTheme } = useTheme();
  return (
    <>
      <SectionContainer isBordered={false}>
        <VerticalSection>
          <div className="project-details-wrap">
            <div className="title-wrap">
              <Title theme={theme}>
                <span className="initial">{data.title[0].toUpperCase()}</span>
                {data.title.slice(1)}
              </Title>
            </div>
            <h3>{data.subtitle}</h3>
            <div className="description-wrap">
              <RichText content={data.description.raw} />
            </div>
            <TechList data={data.techno} color={"var(--green)"} gap={15} />
            <div className="links-wrap">
              <ExtLinksProject
                githubLink={data.githubLink}
                websiteLink={data.websiteLink}
                theme={theme}
              />
            </div>
          </div>
          <ImagesCarousel images={data.images} />
        </VerticalSection>
      </SectionContainer>
      <style jsx>{`
        .project-details-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .initial {
          color: var(--green);
        }
        .description {
          max-width: 75ch;
        }
      `}</style>
    </>
  );
}

export default Project;

export const getStaticProps:GetStaticProps = async  ({params})=> {
  //@ts-ignore
  const data = await getProjectDetails(params.slug);
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const data = await getSlugs();
  return {
    paths: data.map((project: { slug: string }) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}