const API_URL = process.env.WORDPRESS_API_URL;
import { NODE } from "./queries";

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}


export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}



export async function getNode({ uri }) {
  const data = await fetchAPI(
    `
    ${NODE}
    query {
      nodeByUri(uri: "${uri}") {
        __typename
        ...PostContent
        ...PageContent
        ...TagArchive
        ...CategoryArchive
      }
    }`
  );
  return data?.nodeByUri;
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
      {
        pages(last: 1000) {
          nodes {
            id
            slug
          }
        }
      }
    `);
  return data?.pages?.nodes;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllTagsWithSlug() {
  const data = await fetchAPI(`
    {
      tags(first: 10000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  return data?.tags?.edges;
}