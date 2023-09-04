import { request, gql } from "graphql-request";
import { ContactsData, ProjectDetails } from "@/types/data";

type ResultContactsData = {
  contacts: ContactsData;
};

type ResultSlugs ={
  projects:{
    slug:string} []
}

type ResultProjectDetails = {
  project: ProjectDetails;
};

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getHomePageData = async () => {
  const query = gql`
    query getHomePageData {
      heroes(first: 1, orderBy: publishedAt_ASC) {
        subtitle
        paragraph
        picture {
          height
          url(
            transformation: { image: { resize: { fit: scale, height: 300 } } }
          )
          width
        }
        portraitLight {
          url
          width
          height
        }
        title
      }
      abouts(orderBy: publishedAt_ASC, first: 1) {
        title
        portrait {
          height
          url(
            transformation: { image: { resize: { fit: scale, height: 300 } } }
          )
          width
        }
        portraitLight {
          height
          url
          width
        }
        description {
          raw
        }
      }
      projectsSections(orderBy: publishedAt_ASC, first: 1) {
        description
        title
        technos
      }
      projects(orderBy: updatedAt_ASC) {
        cardImage {
          height
          url(
            transformation: { image: { resize: { fit: scale, height: 300 } } }
          )
          width
        }
        githubLink
        slug
        subtitle
        techno
        title
        websiteLink
      }
      contacts(first: 1, orderBy: publishedAt_DESC) {
        email
        paragraph {
          raw
        }
        subtitle
        title
      }
      resumes(first: 1, orderBy: publishedAt_DESC) {
        title
        subtitle
        urlInline
        urlMobile
        pdf {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};

export const getContactData = async () => {
  const query = gql`
    query getContactData {
      contacts(first: 1, orderBy: publishedAt_DESC) {
        email
        paragraph {
          raw
        }
        subtitle
        title
      }
    }
  `;
  const result: ResultContactsData = await request(graphqlAPI, query);
  return result.contacts;
};

export const getSlugs = async () => {
  const query = gql`
    query getSlugs {
      projects {
        slug
      }
    }
  `;
  const result: ResultSlugs = await request(graphqlAPI, query);
 return result.projects;
};

export const getProjectDetails = async (slug: string) => {
  const query = gql`
   query GetProjectDetails($slug : String!){
  project(where: {slug: $slug}) {
    description {
      raw
    }
    githubLink
    images {
      height
      url
      width
    }
    slug
    subtitle
    techno
    title
    websiteLink
   }}`;
  const result: ResultProjectDetails = await request(graphqlAPI, query, { slug });
  return result.project;
};
