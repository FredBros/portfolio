import { request, gql } from "graphql-request";

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
        description {
          raw
        }
      }
      projectsSections(orderBy: publishedAt_ASC, first: 1) {
        description
        title
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
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};

export const GetContactData = async () => {
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
  const result = await request(graphqlAPI, query);
  console.log(result.contacts)
  return result.contacts;
};