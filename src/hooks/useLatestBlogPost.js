import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () => {
    const data = useStaticQuery(graphql`
    query LatestBlogPost {
        allWpPost(sort: {date: ASC}) {
          edges {
            node {
              title
              excerpt
              uri
            }
          }
        }
      }
    `);

    return data;
}