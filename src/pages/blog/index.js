import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "./styles/blog.module.scss";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";

const BlogPage = ({ data: { allMdx } }) => {
  const posts = allMdx.nodes.map((post) => (
    <div className={styles.article}>
      <Link to={post.frontmatter.slug}>
        <img
          src={post.frontmatter.thumbnail.publicURL}
          alt="miniaturka artykułu"
        />
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.date}</p>
      </Link>
    </div>
  ));
  /* console.log(posts); */
  return (
    <main>
      <Layout>
        <div className={styles.blogContainer}>
          <h3 className={styles.recommended}>Polecane</h3>
          <div className={styles.blogArticles}>{posts}</div>
        </div>
      </Layout>
    </main>
  );
};

export function Head() {
  return (
    <Seo
      title="Wpisy na blogu Domenowo"
      description="Artykuły o domenach, bezpieczeństwie oraz branży informatycznej"
    />
  );
}
export default BlogPage;

export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          date
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`;
