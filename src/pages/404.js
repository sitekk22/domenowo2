import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./styles/404.module.scss";

const NotFoundPage = ({ data }) => {
  console.log(data);
  const image404 = getImage(data.image404);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <GatsbyImage
            image={image404}
            className={styles.mainImage}
          ></GatsbyImage>
          <Link className={styles.button} to="/">
            Przejdź
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    image404: file(relativePath: { eq: "404.webp" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`;

export const Head = () => <title>Not found</title>;
