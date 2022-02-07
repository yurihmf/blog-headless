import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query GetPosts {
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

export const getLast6Posts = async () => {
  const query = gql`
  query GetLast6Posts {
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

export const getCategories = async () => {
  const query = gql`
  query GetCategories {
    categories {
      slug
      title
    }
  }
  `

  const result = await request(graphqlAPI, query);

  return result;
}

export const getCategoryContent = async (category) => {
  const query = gql`
  query GetCategoryContent($category: String!) {
    categories(where: {slug: $category}){
      slug
      title
      categoryImage {
        url
      }
      description
    }
  }
  `

  const result = await request(graphqlAPI, query, { category });

  return result;
}

export const getPostContent = async (slug) => {
  const query = gql`
  query GetPostContent($slug: String!) {
    posts(where: { slug: $slug }) {
      categories {
        title
      }
      slug
      title
      subtitle
      createdAt
      content {
        raw
      }
      thumb {
        url
      }
    }
  }
  `

  const result = await request(graphqlAPI, query, { slug });

  return result;
}


export const getPostsByCategory = async (category) => {
  const query = gql`
  query GetPostsByCategory($category: String!) {
    postsConnection(where: {categories_every: {slug: $category}}) {
      edges {
        node {
          categories {
            title
            slug
          }
          thumb {
            url
          }
          title
          slug
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query, { category });

  return result.postsConnection.edges;
}

export const getPostsBySlug = async (slug) => {
  const query = gql`
  query GetPostsBySlug($slug: String!) {
    postsConnection(where: {slug_contains: {slug: $slug}}) {
      edges {
        node {
          categories {
            title
            slug
          }
          thumb {
            url
          }
          title
          slug
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
}

export const postsBySearch = async (slug) => {
  const posts = (await getPostsBySlug(slug)) || [];

  return posts;
}