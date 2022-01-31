import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              title
              slug
              postLargeBanner
              subtitle
              postBanner
              createdAt
              featured
              categories {
                title
                slug
              }
              thumb {
                url
              }
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getLast3Posts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(last: 6) {
      edges {
        node {
          title
          slug
          postLargeBanner
          subtitle
          postBanner
          createdAt
          categories {
            title
            slug
          }
          thumb {
            url
          }
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}