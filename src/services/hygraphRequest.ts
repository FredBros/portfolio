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
          url
          width
        }
        title
      }
      abouts(orderBy: publishedAt_ASC, first: 1) {
        title
        portrait {
          height
          url
          width
        }
        description {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};